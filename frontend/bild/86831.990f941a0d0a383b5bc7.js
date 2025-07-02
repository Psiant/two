(window.webpackChunk = window.webpackChunk || []).push([[86831], {
    86831: (e, t, i) => {
        var n, a;
        n = [i(460159), i(284685), i(295165), i(94849), i(591880)],
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
                    t.append('<div class="feed-compose minimized">'),
                    new (e._get("interface/notes/adding/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: ("chat" == ("last_used_type"in i ? i.last_used_type : "") || "is_free_user"in i && i.is_free_user) && "is_chat_enabled"in i && i.is_chat_enabled ? "chat" : "note"
                    })),
                    t.append('<div class="feed-compose__inner"></div>'),
                    (twig.attr("_account_features"in i ? i._account_features : "", "airewriter") || twig.attr("_account_features"in i ? i._account_features : "", "kommo_ai_trial_started") && !twig.attr("_account_features"in i ? i._account_features : "", "kommo_ai_trial_ended")) && t.append('<div class="js-feed-ai-helpers feed-ai-helpers"></div><div class="js-feed-loader feed-compose__loader hidden"><div class="default-overlay"></div><span class="spinner-icon spinner-icon-abs-center"></span></div>'),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding", t)
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
                    e.append('<div class="feed-note__joined-attach-item '),
                    "failed"in t && t.failed && e.append("feed-note__joined-attach-item_failed"),
                    e.append(' js-attach-item" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><span class="feed-note__joined-attach-item-file feed-note__blue-link h-text-overflow">'),
                    "failed"in t && t.failed && e.append('<svg class="svg-icon feed-note__joined-attach-item-error js-attach-item-error"><use xlink:href="#inbox--error"></use></svg>'),
                    e.append('<span class="feed-note__joined-attach-item-file-name js-control-file-name" title="'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    "loading"in t && t.loading ? e.append('<span class="feed-note__joined-attach-item-spinner spinner-icon"></span>') : e.append('<span class="feed-note__joined-attach-item-remove js-attach-remove">×</span>'),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_attach"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/attach", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="feed-note__action-button js-feed-note-button">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "title"in t ? t.title : ""), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/button", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "main_class_name"in t && t.main_class_name || (t.main_class_name = "js-feed-users"),
                    "user_class_name"in t && t.user_class_name || (t.user_class_name = "js-multisuggest-item"),
                    "name"in t && t.name || (t.name = this.env_.filter("i18n", "User not found")),
                    "is_group"in t && t.is_group && (t.id = "group_" + ("id"in t ? t.id : "")),
                    e.append('<div class="feed-compose-user '),
                    e.append(twig.filter.escape(this.env_, "main_class_name"in t ? t.main_class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="js-multisuggest-list"><div class="feed-compose-user__name '),
                    e.append(twig.filter.escape(this.env_, "user_class_name"in t ? t.user_class_name : "", "light_escape", null, !0)),
                    e.append('" data-title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" data-group="'),
                    e.append("is_group"in t && t.is_group ? "y" : ""),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</div></div>"),
                    twig.attr("_account_features"in t ? t._account_features : "", "global_chat_control") || e.append('<span class="js-antispam-timer"></span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_feed_user"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/feed_user", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="feed-note__green-line js-green-line"><div class="green-line__fixed"><div class="green-line__fixed-inner"><div class="green-line__icon"><svg class="svg-icon svg-notes--feed-green-line svg-notes--feed-green-line-dims"><use xlink:href="#notes--feed-green-line"></use></svg></div><div class="green-line__date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append('</div>&nbsp;<div class="green-line__responsible-user" title="'),
                    e.append(twig.filter.escape(this.env_, "responsible_user"in t ? t.responsible_user : "", "light_escape", null, !0)),
                    e.append('"><div class="green-line__responsible-user-text">'),
                    e.append(twig.filter.escape(this.env_, "responsible_user"in t ? t.responsible_user : "", "light_escape", null, !0)),
                    e.append('</div>,</div>&nbsp;<div class="green-line__status-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "task_new_status"), "light_escape", null, !0)),
                    e.append(':</div>&nbsp;<div class="green-line__status-name" title="'),
                    e.append(twig.filter.escape(this.env_, "status_name"in t ? t.status_name : "", "light_escape", null, !0)),
                    e.append('"><div class="green-line__status-name-text">'),
                    e.append(twig.filter.escape(this.env_, "status_name"in t ? t.status_name : "", "light_escape", null, !0)),
                    e.append('</div></div><div class="green-line__customer-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer created"), "light_escape", null, !0)),
                    e.append(':</div>&nbsp;<div class="green-line__customer-name" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer"in t ? t.customer : "", "name"), "light_escape", null, !0)),
                    e.append('"><div class="green-line__customer-name-text"><a href="/customers/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer"in t ? t.customer : "", "id"), "light_escape", null, !0)),
                    e.append('" class="green-line__customer-name-link js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer"in t ? t.customer : "", "name"), "light_escape", null, !0)),
                    e.append("</a></div></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_green_line"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/green_line", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        options_block: twig.bind(this.block_options_block, this),
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
                    t.append('<div class="notes-wrapper" id="'),
                    t.append(twig.filter.escape(this.env_, "scroller_id"in i ? i.scroller_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    (!("is_add_mode"in i) || !i.is_add_mode || "is_preload"in i && i.is_preload) && new (e._get("interface/cards/notes/plug.twig"))(this.env_).render_(t, i),
                    t.append(this.renderBlock("options_block", i, n)),
                    t.append('<div class="notes-wrapper__scroller custom-scroll"><div class="notes-wrapper__scroller-inner"><div class="notes-wrapper__load-more">'),
                    new (e._get("interface/common/suggest/load_more.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-feed-load-more notes-wrapper__load-more-button hidden",
                        inner_class_name: "notes-wrapper__load-more-button-label",
                        spinner_class_name: "notes-wrapper__load-more-button-spinner",
                        button_text: this.env_.filter("i18n", "Load more")
                    })),
                    t.append('</div><div class="notes-wrapper__notes js-notes"></div><div class="notes-wrapper__online feed-note-wrapper feed-note-wrapper_grouped"></div><div class="notes-wrapper__filter-and-chat-users js-notes-filter-and-chat-users">'),
                    "is_preload"in i && i.is_preload || (t.append('<div class="notes-wrapper__filter-and-chat-users-inner"><div class="notes-wrapper__filter-and-chat-users-inner__buttons"><div class="notes-wrapper__ai-agent-wrapper"><a href="#" id="show-agent"></a></div><div class="notes-wrapper__chat-users-wrapper"><a href="#" id="show-chat-list" style="display: none">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "participants"), "light_escape", null, !0)),
                    t.append(': <span id="show-chat-list-length"></span></a></div><div class="notes-wrapper__bots-wrapper"><a href="#" id="show-bots-list"></a></div></div></div>')),
                    t.append('</div><div class="notes-wrapper__tasks empty"><div class="js-future-tasks-fixable notes-wrapper__tasks-inner-wrapper notes-wrapper__tasks-inner custom-scroll js-tasks"></div></div><div class="notes-wrapper__reaction-notification"></div></div></div>'),
                    t.append(this.renderBlock("reply_block", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_options_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_reply_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "is_preload"in i && i.is_preload || ("need_input"in i && !twig.filter.def("need_input"in i ? i.need_input : "", !0) || (new (e._get("interface/notes/adding.twig"))(this.env_).render_(t, i),
                    t.append('<div class="notes-wrapper__compose-bottom"></div>')),
                    t.append('<div class="notes-wrapper__unseen-count js-unseen-count" data-text="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unread messages"), "light_escape", null, !0)),
                    t.append('"></div>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-compose__before"><div class="compose-mail-header__line"><div class="feed-compose-switcher"><span class="feed-compose-switcher__text">'),
                    "is_mail_en"in i && i.is_mail_en || t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_email"), "light_escape", null, !0)),
                    t.append('</span></div><div class="compose-mail-header__title">'),
                    "is_mail_en"in i && i.is_mail_en ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_to"), "light_escape", null, !0)) : (t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_for"), "light_escape", null, !0))),
                    t.append('<div class="feed-compose__before-colon">:</div></div><div class="compose-mail-header__field compose-mail-header__field_to js-compose-mail-to_field-container">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose_mail__input",
                        name: "to",
                        value: ""
                    })),
                    t.append('</div></div></div><div class="compose-mail-header"><div class="compose-mail-header__line"><div class="compose-mail-header__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "write_mail_cc"), "light_escape", null, !0)),
                    t.append('</div><div class="compose-mail-header__field js-compose-mail-cc_field-container">'),
                    twig.attr("emails"in i ? i.emails : "", "length") > 1 ? new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose_mail__select",
                        items: twig.filter.merge([{
                            id: "",
                            option: "..."
                        }], "emails"in i ? i.emails : ""),
                        name: "cc"
                    })) : new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose_mail__input",
                        name: "cc",
                        value: ""
                    })),
                    t.append('</div></div><div class="compose-mail-header__line"><div class="compose-mail-header__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "write_mail_subject"), "light_escape", null, !0)),
                    t.append('</div><div class="compose-mail-header__field js-compose-mail-subject_field-container">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose_mail__input-wrapper",
                        input_class_name: "feed-compose_mail__input",
                        items: [],
                        name: "subject",
                        value: ""
                    })),
                    t.append('</div></div><div class="compose-mail-header__line"><div class="compose-mail-header__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_template_caption_from"), "light_escape", null, !0)),
                    t.append('</div><div class="compose-mail-header__field js-compose-mail-sender_field-container"></div></div><div class="compose-mail-header__line js-compose-mail-templates hidden"><div class="compose-mail-header__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_template_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="compose-mail-header__field js-compose-mail-templates_field-container"></div></div></div><div class="feed-compose__message">'),
                    new (e._get("interface/controls/wysiwyg.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        wrapper_class_name: "feed-compose__mail",
                        class_name: "custom-scroll",
                        input_class_name: "feed-compose__message-area",
                        editable_class_name: "js-contenteditable feed-compose__message-area",
                        name: "message",
                        placeholder: twig.filter.capitalize(this.env_, this.env_.filter("i18n", "Message")),
                        value: "content"in i ? i.content : "",
                        is_extended: !0
                    })),
                    t.append('<div class="feed-compose__message-wrapper"><div class="feed-compose__message-toolbar"><button class="control-wysiwyg__toolbar--item ql-custom-attach" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add file"), "light_escape", null, !0)),
                    t.append('"><label for="mail-attach-filenew" class="feed-compose_mail__attach"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "note_attach_files"), "light_escape", null, !0)),
                    t.append('</label><input type="file" id="mail-attach-filenew" class="js-form-changes-skip hidden" multiple tabindex="-1" name="files" /></button></div>'),
                    new (e._get("interface/controls/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "custom-scroll",
                        input_class_name: "feed-compose__message-area",
                        editable_class_name: "js-contenteditable feed-compose__message-area",
                        name: "message",
                        placeholder: twig.filter.capitalize(this.env_, this.env_.filter("i18n", "Message")),
                        value: "content"in i ? i.content : ""
                    })),
                    t.append('</div></div><div class="feed-compose__actions"><div class="feed-compose__attaches js-attachments custom-scroll"></div><div class="feed-compose__actions-inner">'),
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
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_mail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/mail", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.tooltip_items = [{
                        text: this.env_.filter("i18n", "Run bots & templates"),
                        icon: "common--shortcuts-slash",
                        available_in: ["chat", "global_chat"]
                    }, {
                        text: this.env_.filter("i18n", "Select action"),
                        icon: "common--shortcuts-arrow-up",
                        available_in: "all",
                        exclude_in: ["note_invoice"]
                    }, {
                        text: this.env_.filter("i18n", "Mention teammate"),
                        icon: "common--shortcuts-at",
                        available_in: ["global_chat"]
                    }, {
                        text: this.env_.filter("i18n", "Select recipient"),
                        icon: "common--shortcuts-backspace",
                        available_in: ["chat", "global_chat"]
                    }, {
                        text: this.env_.filter("i18n", "Insert field value"),
                        icon: "common--shortcuts-bracket",
                        available_in: "all"
                    }],
                    e.append('<div class="feed-compose__shortcuts-helper-wrapper"><div class="feed-compose__shortcuts-helper-container"><svg class="svg-icon svg-common--keyboard-dims "><use xlink:href="#common--keyboard"></use></svg><div class="feed-compose__shortcuts-helper"><h3 class="feed-compose__shortcuts-helper-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Shortcuts"), "light_escape", null, !0)),
                    e.append('</h3><div class="feed-compose__shortcuts-helper-list">'),
                    t._parent = t;
                    var n = "tooltip_items"in t ? t.tooltip_items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        "all" != twig.attr("item"in t ? t.item : "", "available_in") && !twig.contains(twig.attr("item"in t ? t.item : "", "available_in"), "tooltip_type"in t ? t.tooltip_type : "") || twig.contains(twig.attr("item"in t ? t.item : "", "exclude_in"), "tooltip_type"in t ? t.tooltip_type : "") || (e.append('<div class="feed-compose__shortcuts-helper-item"><div class="feed-compose__shortcuts-helper-item-svg-wrapper"><svg class="svg-icon svg-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append('-dims feed-compose__shortcuts-helper-item-svg"><use xlink:href="#'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append('"></use></svg></div><span class="feed-compose__shortcuts-helper-item-text">'),
                        e.append(twig.filter.escape(this.env_, "– " + twig.filter.lower(this.env_, twig.attr("item"in t ? t.item : "", "text")), "light_escape", null, !0)),
                        e.append("</span></div>"))
                    }
                    ), this),
                    e.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_shortcuts_helper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/shortcuts_helper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.tips = [{
                        id: "chat",
                        text: twig.filter.capitalize(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "notes_grouped_chat"), 1)),
                        class_name: "js-switcher-chat " + (!("is_chat_enabled"in i) || !i.is_chat_enabled || "is_add_mode"in i && i.is_add_mode ? "hidden" : "")
                    }, {
                        id: "email",
                        text: twig.attr("lang"in i ? i.lang : "", "notes_email"),
                        class_name: "js-switcher-email hidden"
                    }, {
                        id: "note",
                        text: twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_note"),
                        class_name: "js-switcher-note " + ("is_free_user"in i && i.is_free_user ? "hidden" : "")
                    }, {
                        id: "task",
                        text: twig.attr("lang"in i ? i.lang : "", "task"),
                        class_name: "js-switcher-task " + ("is_free_user"in i && i.is_free_user ? "hidden" : "")
                    }],
                    i.available_tips = [],
                    twig.filter.length(this.env_, "disabled_types"in i ? i.disabled_types : "")) {
                        i._parent = i;
                        var a = "tips"in i ? i.tips : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.tip = e,
                            twig.contains("disabled_types"in i ? i.disabled_types : "", twig.attr("tip"in i ? i.tip : "", "id")) || (i.available_tips = twig.filter.merge("available_tips"in i ? i.available_tips : "", ["tip"in i ? i.tip : ""]))
                        }
                        ), this)
                    }
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: "selected"in i ? i.selected : "",
                        selected_at_right: !0,
                        class_name: "feed-compose-switcher__tip",
                        items: twig.filter.length(this.env_, "disabled_types"in i ? i.disabled_types : "") ? "available_tips"in i ? i.available_tips : "" : "tips"in i ? i.tips : ""
                    })),
                    t.append('<input type="hidden" class="js-changes-skip" name="feed-compose-switcher" value="'),
                    t.append(twig.filter.escape(this.env_, "selected"in i ? i.selected : "", "light_escape", null, !0)),
                    t.append('">')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_switcher"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/switcher", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    new (e._get("interface/cards/tasks/controls/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-task__actions",
                        name: "body",
                        value: this.env_.filter("task_text", twig.attr("data"in i ? i.data : "", "text")),
                        need_switcher: !0
                    })),
                    t.append('<div class="feed-compose__actions">'),
                    new (e._get("interface/controls/feed_note_main_buttons.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        accept_button_text: twig.attr("lang"in i ? i.lang : "", "button_set"),
                        disabled: !("is_new"in i && i.is_new)
                    })),
                    new (e._get("interface/notes/adding/shortcuts_helper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        tooltip_type: "task"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_task"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/task", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-compose__before feed-compose-delimiter"><div class="feed-compose-switcher"><span class="feed-compose-switcher__text">'),
                    t.append(twig.filter.escape(this.env_, "widget_text"in i ? i.widget_text : "", "light_escape", null, !0)),
                    t.append('</span></div><span class="feed-compose__widget-code">('),
                    "support_link"in i && i.support_link ? (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Designed by"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "name"in i && i.name ? "name"in i ? i.name : "" : "widget_text"in i ? i.widget_text : "", "light_escape", null, !0)),
                    t.append('. <a href="'),
                    t.append(twig.filter.escape(this.env_, "support_link"in i ? i.support_link : "", "light_escape", null, !0)),
                    t.append('" class="feed-compose-link" rel="nofollow noopener noreferrer" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Contact support"), "light_escape", null, !0)),
                    t.append("</a>")) : (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "For support, please contact"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "name"in i && i.name ? "name"in i ? i.name : "" : "widget_text"in i ? i.widget_text : "", "light_escape", null, !0))),
                    t.append(')</span></div><div class="feed-compose__container"><div class="feed-compose__content">'),
                    t.append('</div><div class="feed-compose__actions feed-compose__actions_flex">'),
                    new (e._get("interface/controls/feed_note_main_buttons.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        accept_button_text: twig.attr("lang"in i ? i.lang : "", "button_done"),
                        disabled: !1
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_widget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/widget", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.control_class_name = "control_class_name"in i && i.control_class_name ? "control_class_name"in i ? i.control_class_name : "" : "js-amojo-reply",
                    !twig.contains(["bot"], twig.attr("author"in i ? i.author : "", "origin")) && twig.attr("author"in i ? i.author : "", "bot") && (i.is_integration_bot = !0),
                    twig.empty("external_author_name"in i ? i.external_author_name : "") || (i.name = ("name"in i ? i.name : "") + " (" + ("external_author_name"in i ? i.external_author_name : "") + ")"),
                    "is_available_for_chatting"in i || (i.is_available_for_chatting = !0),
                    !("id"in i && i.id || null === ("id"in i ? i.id : "")) || ("id"in i ? i.id : "") == ("current_user_id"in i ? i.current_user_id : "") || ("id"in i ? i.id : "") == ("current_user_amojo_id"in i ? i.current_user_amojo_id : "") || "is_integration_bot"in i && i.is_integration_bot || !("is_available_for_chatting"in i) || !i.is_available_for_chatting ? (t.append('<span class="feed-note__amojo-user" title="'),
                    t.append(twig.filter.escape(this.env_, "alt"in i ? twig.filter.def("alt"in i ? i.alt : "", "name"in i ? i.name : "") : "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("&nbsp;</span>")) : (t.append('<span class="feed-note__amojo-user '),
                    "user_type"in i && i.user_type ? t.append(twig.filter.escape(this.env_, "js-amojo-" + ("user_type"in i ? i.user_type : ""), "light_escape", null, !0)) : t.append(""),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "lead" == ("type"in i ? i.type : "") && t.append(" js-target_typing "),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "alt"in i ? twig.filter.def("alt"in i ? i.alt : "", "name"in i ? i.name : "") : "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" data-group-id="'),
                    t.append(twig.filter.escape(this.env_, "group_id"in i ? i.group_id : "", "light_escape", null, !0)),
                    t.append('" data-id="'),
                    "id"in i && i.id && t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "id"in i ? i.id : ""
                    })),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("&nbsp;</span>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_amojo_user"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/amojo_user", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-context-menu__wrapper">'),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, {
                        class_name: "feed-context-menu",
                        items: "items"in i ? i.items : "",
                        is_custom_tip_holder: !0
                    }),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_context_menu"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/context_menu", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "date"in t && t.date || (t.date = "date_create"in t ? t.date_create : "");
                    var n = e;
                    e = new twig.StringBuffer,
                    "compact_date"in t && t.compact_date ? e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date"in t ? t.date : "", "time"), "light_escape", null, !0)) : "format"in t && t.format ? e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date"in t ? t.date : "", "format"in t ? t.format : ""), "light_escape", null, !0)) : twig.attr("system_props"in t ? t.system_props : "", "need_msec") ? e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date_msec", "date"in t ? t.date : "", "shortdate_msectime"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    t.date_value = new twig.Markup(e.toString()),
                    (e = n).append('<div class="'),
                    "control_classname"in t ? e.append(twig.filter.escape(this.env_, "control_classname"in t ? t.control_classname : "", "light_escape", null, !0)) : e.append("js-feed-note__date"),
                    e.append(' feed-note__date">'),
                    "search_highlighted"in t && t.search_highlighted || !("search_highlight_active"in t) || !t.search_highlight_active ? e.append(twig.filter.escape(this.env_, "date_value"in t ? t.date_value : "", "light_escape", null, !0)) : (e.append('<span style="background: yellow; color: #000">'),
                    e.append(twig.filter.escape(this.env_, "date_value"in t ? t.date_value : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/date", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/notes/defaults/user.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before: twig.bind(this.block_before, this),
                        icon: twig.bind(this.block_icon, this),
                        header_action: twig.bind(this.block_header_action, this),
                        header: twig.bind(this.block_header, this),
                        body: twig.bind(this.block_body, this),
                        footer: twig.bind(this.block_footer, this),
                        after_content: twig.bind(this.block_after_content, this),
                        extended_context: twig.bind(this.block_extended_context, this),
                        additional: twig.bind(this.block_additional, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="js-note '),
                    e.append(twig.filter.escape(this.env_, "wrapper_class_name"in t ? t.wrapper_class_name : "", "light_escape", null, !0)),
                    e.append(' feed-note-fixer">'),
                    e.append(this.renderBlock("before", t, i)),
                    e.append('<div class="feed-note '),
                    e.append(twig.filter.escape(this.env_, "note_class_name"in t ? t.note_class_name : "", "light_escape", null, !0)),
                    "is_edit"in t && t.is_edit || !("editable"in t && t.editable || "deletable"in t && t.deletable) || e.append(" feed-note-with-context"),
                    "is_external"in t && t.is_external && e.append(" feed-note-external"),
                    "is_incoming"in t && t.is_incoming && e.append(" feed-note-incoming"),
                    "is_system"in t && t.is_system && e.append(" feed-note-system-common"),
                    "error" == ("delivery_status"in t ? t.delivery_status : "") && e.append(" feed-note_with-error"),
                    e.append('" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append('><div class="feed-note__icon">'),
                    e.append(this.renderBlock("icon", t, i)),
                    e.append('</div><div class="feed-note__content '),
                    e.append(twig.filter.escape(this.env_, "note_body_class_name"in t ? t.note_body_class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="feed-note__header">'),
                    e.append(this.renderBlock("header_action", t, i)),
                    e.append('<div class="feed-note__header-inner '),
                    "is_full_width"in t && t.is_full_width && e.append(" feed-note__header-inner-full "),
                    e.append('"><div class="feed-note__header-inner-nowrap">'),
                    e.append(this.renderBlock("header", t, i)),
                    e.append("</div>"),
                    "is_system"in t && t.is_system && e.append('<div class="feed-note__expand-header"></div>'),
                    e.append("</div>"),
                    "hide_linked"in t && t.hide_linked || !twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "id", void 0, "array") || ("main_element_type"in t ? t.main_element_type : "") == ("element_type"in t ? t.element_type : "") || (e.append('<div class="feed-note__linked">'),
                    "is_free_user"in t && t.is_free_user || (e.append('<a href="/'),
                    e.append(twig.filter.escape(this.env_, "element_type_code"in t ? t.element_type_code : "", "light_escape", null, !0)),
                    e.append("/detail/"),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "id", void 0, "array"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link feed-note__linked-inner" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "name", void 0, "array"), "light_escape", null, !0)),
                    e.append('">')),
                    "contacts" == ("element_type_code"in t ? t.element_type_code : "") ? e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "name", void 0, "array")), "light_escape", null, !0)) : "leads" == ("element_type_code"in t ? t.element_type_code : "") ? e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "name", void 0, "array"), "element_id"in t ? t.element_id : ""), "light_escape", null, !0)) : "customers" == ("element_type_code"in t ? t.element_type_code : "") ? e.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "name", void 0, "array"), "element_id"in t ? t.element_id : ""), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "element_type_code"in t ? t.element_type_code : "", void 0, "array"), "element_id"in t ? t.element_id : "", void 0, "array"), "name", void 0, "array"), "light_escape", null, !0)),
                    "is_free_user"in t && t.is_free_user || e.append("</a>"),
                    e.append("</div>")),
                    e.append('</div><div class="feed-note__body">'),
                    e.append(this.renderBlock("body", t, i)),
                    e.append("</div>"),
                    e.append(this.renderBlock("footer", t, i)),
                    e.append("</div>"),
                    e.append(this.renderBlock("after_content", t, i)),
                    "is_edit"in t && t.is_edit || !("editable"in t && t.editable || "deletable"in t && t.deletable) || (e.append('<div class="feed-note__context-container"><div class="feed-note__context js-note-context">'),
                    e.append(this.renderBlock("extended_context", t, i)),
                    "deletable"in t && t.deletable && (e.append('<div class="feed-note__context__item delete js-note-delete-btn"><svg class="svg-icon svg-notes--context-delete-dims"><use xlink:href="#notes--context-delete"></use></svg><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete"), "light_escape", null, !0)),
                    e.append("</span></div>"),
                    "editable"in t && t.editable && (e.append('<div class="feed-note__context__item edit js-note-edit-mode-btn"><svg class="svg-icon svg-notes--context-edit-dims"><use xlink:href="#notes--context-edit"></use></svg><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "note_edit"), "light_escape", null, !0)),
                    e.append("</span></div>"))),
                    e.append("</div></div>")),
                    e.append("</div></div>"),
                    e.append(this.renderBlock("additional", t, i))
                }
                ,
                t.prototype.block_before = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "icon"in t && t.icon && (e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-'),
                    e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)),
                    e.append('-dims"><use xlink:href="#'),
                    e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)),
                    e.append('"></use></svg></div>'))
                }
                ,
                t.prototype.block_header_action = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_after_content = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_extended_context = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_additional = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_note"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/note", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
                        footer: twig.bind(this.block_footer, this),
                        add_file: twig.bind(this.block_add_file, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.icon = "notes--feed-note",
                    t.additional_data = 'data-dnd-before="' + twig.attr("lang"in t ? t.lang : "", "notes_dnd_title_before") + '" data-dnd-after="' + twig.attr("lang"in t ? t.lang : "", "notes_dnd_title_after") + '"',
                    "pinned"in t && t.pinned && (t.wrapper_class_name = "js-note-pinned",
                    t.note_class_name = "feed-note_pinned"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<textarea class="feed-note__textarea custom-scroll textarea-autosize" name="text" placeholder="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "note_placeholder"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text"), "light_escape", null, !0)),
                    e.append("</textarea>")
                }
                ,
                t.prototype.block_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="feed-note__joined-attach js-attachments">'),
                    i._parent = i;
                    var a = "joined"in i ? i.joined : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.note = n,
                        "attachment" == twig.attr("note_types"in i ? i.note_types : "", twig.attr("note"in i ? i.note : "", "type"), void 0, "array") && (new (e._get("interface/notes/attach.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            filename: twig.attr(twig.attr("note"in i ? i.note : "", "data"), "text"),
                            id: twig.attr("note"in i ? i.note : "", "id")
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1)
                    }
                    ), this),
                    t.append('</div><div class="feed-note__actions"><div class="feed-note__actions-inner">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "note_edit"),
                        class_name: "js-note-submit feed-note__button",
                        tab_index: "-1",
                        disabled: "id"in i ? i.id : ""
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-note-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    })),
                    t.append("</div>"),
                    t.append(this.renderBlock("add_file", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_add_file = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<label for="note-edit-attach-file'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="feed-note__actions-attach"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "note_attach_files"), "light_escape", null, !0)),
                    e.append('</label><input type="file" id="note-edit-attach-file'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="js-form-changes-skip hidden" tabindex="-1" name="UserFile" multiple />')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_note_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/note_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "user"in i && i.user || ("author_name"in i && i.author_name ? i.user = "author_name"in i ? i.author_name : "" : "0" == ("created_by"in i ? i.created_by : "") || "Robot" == twig.attr("data"in i ? i.data : "", "text") ? i.user = twig.attr("lang"in i ? i.lang : "", "Bot") : i.user = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "created_by"in i ? i.created_by : "", void 0, "array"), "full_name", void 0, "array")),
                    "user"in i && i.user && (t.append('<div class="feed-note__responsible">'),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "created_by"in i ? i.created_by : "",
                        name: "user"in i ? i.user : ""
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_defaults_user"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/defaults/user", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="list__top__actions js-feed-search-context-menu">'),
                    i.context_menu = [],
                    i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        text: this.env_.filter("i18n", "Show milliseconds"),
                        class_name: "context-menu__item js-feed-search-need-msec",
                        checkable: !0,
                        checkable_checked: "need_msec"in i ? i.need_msec : "",
                        svg_icon_absolute: "cards--millisecond",
                        svg_icon_left_absolute: "controls--select-checked"
                    }, {
                        text: this.env_.filter("i18n", "Show talks labels"),
                        class_name: "context-menu__item js-feed-search-need-open-talks-preview",
                        checkable: !0,
                        checkable_checked: "need_open_talks_preview"in i ? i.need_open_talks_preview : "",
                        svg_icon_absolute: "cards--talks-labels",
                        svg_icon_left_absolute: "controls--select-checked"
                    }]),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "button_more"),
                        svg_class_name: "controls--button-more",
                        inner_class_name: "button-input-more-inner",
                        class_name: " button-input-more",
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        context_menu_class_name: "context-menu-pipeline context-menu__correct-position"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_search_context_menu"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/search/context_menu", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        filter_right_side: twig.bind(this.block_filter_right_side, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/filter/in_search/main.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_filter_right_side = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("_account_features"in t ? t._account_features : "", "feed_search") || (e.append('<div class="filter-search__tariff-ribbon-text-wrapper"><div class="filter-search__tariff-ribbon-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Feed search is only available on the"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append('<a class="std-link" style="" href="/settings/pay">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Enterprise Plan"), "light_escape", null, !0)),
                    e.append("</a></div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_search_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/search/filter", t)
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
                    e.append('<div class="feed-search__controls js-feed-search-nav hidden"><span class="feed-search__controls-total js-feed-search-total"></span><span class="feed-search__controls-button feed-search__controls-button_down js-feed-search-prev"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9V1M4.5 1L1 4.5M4.5 1L8 4.5" stroke="white" stroke-linecap="round"/></svg></span><span class="feed-search__controls-button feed-search__controls-button_up js-feed-search-next"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9V1M4.5 1L1 4.5M4.5 1L8 4.5" stroke="white" stroke-linecap="round"/></svg></span></div>')
                }
                ,
                t.prototype.block_filter_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_search_search_block"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/search/search_block", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-search-wrapper js-feed-search-wrapper"><div class="feed-search js-feed-search">'),
                    new (e._get("interface/notes/search/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "feed_search_input",
                        no_search: "is_disabled"in i ? i.is_disabled : "",
                        search_placeholder: "placeholder"in i ? twig.filter.def("placeholder"in i ? i.placeholder : "", this.env_.filter("i18n", "Search and filter")) : this.env_.filter("i18n", "Search and filter"),
                        apply_button_text: this.env_.filter("i18n", "Search (verb)"),
                        filter: {
                            feed_filter: !0
                        }
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_search_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/search/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this),
                        extended_context: twig.bind(this.block_extended_context, this),
                        after_content: twig.bind(this.block_after_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.note_class_name = "feed-note-ai_result",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-notes--feed-ai-result-dims"><use xlink:href="#notes--feed-ai-result"></use></svg></div>')
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note-ai_result__body"><div>'),
                    "sliced"in t && t.sliced && twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text")) != ("sliced"in t ? t.sliced : "") ? (t.sliced = ("sliced"in t ? t.sliced : "") + "...",
                    e.append('<div class="note--body--content-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", "sliced"in t ? t.sliced : "", !0))),
                    e.append('<a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced "><div class="note--body--content-not-sliced__scroll-wrapper custom-scroll">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.filter.trim(twig.attr("data"in t ? t.data : "", "text"))), !0))),
                    e.append('</div><a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Minimize"), "light_escape", null, !0)),
                    e.append("</a></div>")) : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.filter.trim(twig.attr("data"in t ? t.data : "", "text"))), !0))),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_extended_context = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    ("main_element_type"in t ? t.main_element_type : "") == ("element_type"in t ? t.element_type : "") && (e.append('<div class="feed-note__context__item pinner js-note-pinner'),
                    "pinned"in t && t.pinned && e.append(" pinner_pinned"),
                    e.append('"><svg class="svg-icon svg-notes--pin-dims pinner-icon"><use xlink:href="#notes--pin"></use></svg><span>'),
                    e.append(twig.filter.escape(this.env_, "pinned"in t && t.pinned ? this.env_.filter("i18n", "unpin") : this.env_.filter("i18n", "pin"), "light_escape", null, !0)),
                    e.append("</span></div>"))
                }
                ,
                t.prototype.block_after_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note-ai_result__talk-outgoing-title"><div>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Conversation"), "light_escape", null, !0)),
                    e.append('&nbsp;</div><div class="feed-note-ai_result__talk-outgoing-number">'),
                    e.append(twig.filter.escape(this.env_, "№ A" + ("talk_id"in t ? t.talk_id : ""), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_ai_result"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/ai_result", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
                        after_content: twig.bind(this.block_after_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.icon = "notes--feed-ai-result",
                    t.note_class_name = "feed-note-ai_result",
                    t.body_inner_class_name = "feed-note-ai_result__body",
                    t.params = twig.attr("data"in t ? t.data : "", "params"),
                    "is_loader"in t && t.is_loader && (t.body_inner_class_name = ("body_inner_class_name"in t ? t.body_inner_class_name : "") + " feed-note-ai_result__body-loader");
                    var n = e;
                    (e = new twig.StringBuffer).append('<div class="feed-note-ai_result__body-content"><div>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Working on it"), "light_escape", null, !0)),
                    e.append('</div><svg class=\'dots-icons\' width="132px" height="58px" viewBox="0 0 132 58" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" fill="none" fillRule="evenodd"><g fill="currentColor"><circle class=\'dot1\' cx="25" cy="30" r="13"></circle><circle class=\'dot2\' cx="65" cy="30" r="13"></circle><circle class=\'dot3\' cx="105" cy="30" r="13"></circle></g></g></svg></div>'),
                    t.text = new twig.Markup(e.toString()),
                    e = n,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "body_inner_class_name"in t ? t.body_inner_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_after_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note-ai_result__talk-outgoing-title"><div>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Conversation"), "light_escape", null, !0)),
                    e.append('&nbsp;</div><div class="feed-note-ai_result__talk-outgoing-number">'),
                    e.append(twig.filter.escape(this.env_, "№ A" + twig.attr("params"in t ? t.params : "", "talk_id"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_ai_result_loader"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/ai_result_loader", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.icon = "notes--feed-note",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_image"in t && t.is_image ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in t ? t._links : "", "download"), "href"), "light_escape", null, !0)),
                    e.append('" class="feed-note__media-preview" style="background-image: url('),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in t ? t._links : "", "download"), "href"), "light_escape", null, !0)),
                    e.append(')"><button class="feed-note__media-preview_download-button js-new-window">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "download")), "light_escape", null, !0)),
                    e.append("</button></a>")) : (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in t ? t._links : "", "download"), "href"), "light_escape", null, !0)),
                    e.append('" class="feed-note__blue-link" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text"), "light_escape", null, !0)),
                    e.append("</a>"),
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "size") && (e.append(" ("),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "size"), "light_escape", null, !0)),
                    e.append(")")))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_attachment"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/attachment", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "icon_url") ? (e.append('<div class="feed-note__icon-inner" style="background: url('),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "icon_url"), "light_escape", null, !0)),
                    e.append('"></div>')) : e.append('<div class="feed-note__icon-inner"></div>')
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text"), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_bill_paid"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/bill_paid", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_incoming = "call_in" == twig.attr("note_types"in t ? t.note_types : "", "type"in t ? t.type : "", void 0, "array"),
                    t.is_external = !0,
                    twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "created_by")) ? t.call_created_by = "created_by"in t ? t.created_by : "" : t.call_created_by = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "created_by"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-notes--feed-phone-dims"><use xlink:href="#notes--feed-phone"></use></svg><span class="feed-note__icon-direction feed-note__icon-direction_'),
                    "is_incoming"in t && t.is_incoming ? e.append("in") : e.append("out"),
                    e.append('"><svg class="svg-icon svg-notes--feed-arrow-dims"><use xlink:href="#notes--feed-arrow"></use></svg></span></div>')
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    "is_incoming"in i && i.is_incoming ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "incoming_call"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "outgoing_call"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    "is_incoming"in i && i.is_incoming ? (i.is_to_set = !twig.empty(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "call_created_by"in i ? i.call_created_by : "", void 0, "array")) || !twig.empty("call_created_by"in i ? i.call_created_by : ""),
                    t.append('<span class="feed-note__date-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "from"), "light_escape", null, !0)),
                    t.append(":&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "phone"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    "is_to_set"in i && i.is_to_set && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_to"), "light_escape", null, !0)),
                    t.append(":")),
                    t.append("</span>"),
                    "is_to_set"in i && i.is_to_set && (twig.empty(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "call_created_by"in i ? i.call_created_by : "", void 0, "array")) ? (t.append(twig.filter.escape(this.env_, "call_created_by"in i ? i.call_created_by : "", "light_escape", null, !0)),
                    t.append("&nbsp;")) : new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "call_created_by"in i ? i.call_created_by : "",
                        name: twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "call_created_by"in i ? i.call_created_by : "", void 0, "array"), "full_name", void 0, "array")
                    })))) : (i.is_from_set = !twig.empty(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "call_created_by"in i ? i.call_created_by : "", void 0, "array")) || !twig.empty("call_created_by"in i ? i.call_created_by : ""),
                    "is_from_set"in i && i.is_from_set && (t.append('<span class="feed-note__date-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "from"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    twig.empty(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "call_created_by"in i ? i.call_created_by : "", void 0, "array")) ? (t.append(twig.filter.escape(this.env_, "call_created_by"in i ? i.call_created_by : "", "light_escape", null, !0)),
                    t.append("&nbsp;")) : new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "call_created_by"in i ? i.call_created_by : "",
                        name: twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "call_created_by"in i ? i.call_created_by : "", void 0, "array"), "full_name", void 0, "array")
                    }))),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_to"), "light_escape", null, !0)),
                    t.append(":&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "phone"), "light_escape", null, !0)))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__call-content">'),
                    "is_incoming"in t && t.is_incoming ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "incoming_call"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "outgoing_call"), "light_escape", null, !0)),
                    e.append('&nbsp;<span class="feed-note__call-duration">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr(twig.attr("data"in t ? t.data : "", "params"), "duration")), "light_escape", null, !0)),
                    e.append("</span>"),
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "src") && twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "call_listen"), "light_escape", null, !0)),
                    e.append('" class="feed-note__blue-link feed-note__call-player js-call-play icon--play" data-prepare="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "src"), "light_escape", null, !0)),
                    e.append('"><span class="feed-note__call-play"><span class="feed-note__call-player-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Listen"), "light_escape", null, !0)),
                    e.append("</span></span></a>")) : (e.append('<span class="feed-note__call-play feed-note__call-play_disabled"><span class="feed-note__call-player-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Listen"), "light_escape", null, !0)),
                    e.append("</span></span>")),
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link"), "light_escape", null, !0)),
                    e.append('" class="feed-note__blue-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "download")), "light_escape", null, !0)),
                    e.append('" download>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "download")), "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="feed-note__call-download_disabled">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "download")), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>"),
                    (twig.attr(twig.attr("data"in t ? t.data : "", "params"), "call_status") || twig.attr(twig.attr("data"in t ? t.data : "", "params"), "call_result")) && (e.append('<div class="feed-note__call-status">'),
                    t.call_status = twig.attr("lang"in t ? t.lang : "", "call_result_" + twig.attr(twig.attr("data"in t ? t.data : "", "params"), "call_status"), void 0, "array"),
                    "call_status"in t && t.call_status || (t.call_status = twig.attr("lang"in t ? t.lang : "", "call_result")),
                    e.append("<b>"),
                    e.append(twig.filter.escape(this.env_, "call_status"in t ? t.call_status : "", "light_escape", null, !0)),
                    e.append("</b>"),
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "call_result") && (e.append("<b>: </b>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr(twig.attr("data"in t ? t.data : "", "params"), "call_result")), "light_escape", null, !0)),
                    e.append(" ")),
                    e.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_call_in_out"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/call_in_out", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.icon = "notes--feed-chat",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "from")), "light_escape", null, !0)),
                    t.append("&nbsp;<b>"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "service") || twig.attr("params"in i ? i.params : "", "service"), "light_escape", null, !0)),
                    t.append("</b>")
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/common/chats/messages.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        messages: twig.attr(twig.attr("data"in i ? i.data : "", "params"), "text") || twig.attr("params"in i ? i.params : "", "text")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/chat", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i._embedded = twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), "element_id"in i ? i.element_id : "", void 0, "array"),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "company_added"), "light_escape", null, !0)),
                    "_embedded"in i && i._embedded && t.append(":&nbsp;"),
                    t.append("</div>"),
                    "_embedded"in i && i._embedded && ("is_free_user"in i && i.is_free_user ? t.append(twig.filter.escape(this.env_, twig.attr("_embedded"in i ? i._embedded : "", "name"), "light_escape", null, !0)) : (t.append('<a class="js-navigate-link feed-note__gray-link" href="/companies/detail/'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_embedded"in i ? i._embedded : "", "id"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_embedded"in i ? i._embedded : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_embedded"in i ? i._embedded : "", "name"), "light_escape", null, !0)),
                    t.append("</a>"))),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_company_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/company_created", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i._embedded = twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), "element_id"in i ? i.element_id : "", void 0, "array"),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "contact_added"), "light_escape", null, !0)),
                    "_embedded"in i && i._embedded && t.append(":&nbsp;"),
                    t.append("</div>"),
                    "_embedded"in i && i._embedded && ("is_free_user"in i && i.is_free_user || (t.append('<a class="js-navigate-link feed-note__gray-link" href="/contacts/detail/'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_embedded"in i ? i._embedded : "", "id"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr("_embedded"in i ? i._embedded : "", "name")), "light_escape", null, !0)),
                    t.append('">')),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr("_embedded"in i ? i._embedded : "", "name")), "light_escape", null, !0)),
                    "is_free_user"in i && i.is_free_user || t.append("</a>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_contact_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/contact_created", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "customer_id") ? i.customer = twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "customer_id"), void 0, "array") : ("element_type"in i ? i.element_type : "") == this.env_.filter("element_type", "customers", "int") ? i.customer = twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), "element_id"in i ? i.element_id : "", void 0, "array") : i.customer = 0,
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "lead_id") ? i.lead = twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "lead_id"), void 0, "array") : i.lead = 0,
                    t.append('<div class="feed-note__header-inner-wrap">'),
                    ("element_type"in i ? i.element_type : "") == this.env_.filter("element_type", "leads", "int") && "customer"in i && i.customer ? (t.append('<div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer created"), "light_escape", null, !0)),
                    t.append(":&nbsp;</div>"),
                    "is_free_user"in i && i.is_free_user || (t.append('<a class="js-navigate-link feed-note__gray-link" href="/customers/detail/'),
                    t.append(twig.filter.escape(this.env_, twig.attr("customer"in i ? i.customer : "", "id"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("customer"in i ? i.customer : "", "name"), twig.attr("customer"in i ? i.customer : "", "id")), "light_escape", null, !0)),
                    t.append('">')),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("customer"in i ? i.customer : "", "name"), twig.attr("customer"in i ? i.customer : "", "id")), "light_escape", null, !0)),
                    "is_free_user"in i && i.is_free_user || t.append("</a>")) : ("element_type"in i ? i.element_type : "") == this.env_.filter("element_type", "customers", "int") && "lead"in i && i.lead ? (t.append('<div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer created from"), "light_escape", null, !0)),
                    t.append(":&nbsp;</div>"),
                    "is_free_user"in i && i.is_free_user || (t.append('<a class="js-navigate-link feed-note__gray-link" href="/leads/detail/'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "id"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("lead"in i ? i.lead : "", "name"), twig.attr("lead"in i ? i.lead : "", "id")), "light_escape", null, !0)),
                    t.append('">')),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("lead"in i ? i.lead : "", "name"), twig.attr("lead"in i ? i.lead : "", "id")), "light_escape", null, !0)),
                    "is_free_user"in i && i.is_free_user || t.append("</a>")) : "customer"in i && i.customer ? (t.append('<div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer created"), "light_escape", null, !0)),
                    t.append(":&nbsp;</div>"),
                    "is_free_user"in i && i.is_free_user || (t.append('<a class="js-navigate-link feed-note__gray-link" href="/customers/detail/'),
                    t.append(twig.filter.escape(this.env_, twig.attr("customer"in i ? i.customer : "", "id"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("customer"in i ? i.customer : "", "name"), twig.attr("customer"in i ? i.customer : "", "id")), "light_escape", null, !0)),
                    t.append('">')),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("customer"in i ? i.customer : "", "name"), twig.attr("customer"in i ? i.customer : "", "id")), "light_escape", null, !0)),
                    "is_free_user"in i && i.is_free_user || t.append("</a>")) : (t.append('<div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer created"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_customer_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/customer_created", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__status-changed-wrapper"><span class="feed-note__status-before">'),
                    this.env_.filter("period", twig.attr("note"in i ? i.note : "", "interval")) ? (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "set_after"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("period", twig.attr("note"in i ? i.note : "", "interval")), "light_escape", null, !0)),
                    t.append(" &mdash; "),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "task_new_status")), "light_escape", null, !0))) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_new_status"), "light_escape", null, !0)),
                    t.append("</span>"),
                    i.status = twig.attr(twig.attr("extra"in i ? i.extra : "", "customers_statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "status_id"), void 0, "array") ? twig.attr(twig.attr("extra"in i ? i.extra : "", "customers_statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "status_id"), void 0, "array") : twig.attr(twig.attr("extra"in i ? i.extra : "", "customers_statuses"), "deleted"),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status_id") && (i.old_status = twig.attr(twig.attr("extra"in i ? i.extra : "", "customers_statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status_id"), void 0, "array") ? twig.attr(twig.attr("extra"in i ? i.extra : "", "customers_statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status_id"), void 0, "array") : twig.attr(twig.attr("extra"in i ? i.extra : "", "customers_statuses"), "deleted")),
                    t.append('<div class="feed-note__pipeline-status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "name"), "light_escape", null, !0)),
                    t.append("</div>"),
                    "old_status"in i && i.old_status && (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "from old status"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("old_status"in i ? i.old_status : "", "name"), "light_escape", null, !0))),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_customer_status_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/customer_status_changed", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.icon = "notes--feed-dropbox",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in t ? t._links : "", "download"), "href"), "light_escape", null, !0)),
                    e.append('" class="feed-note__blue-link" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "file_name"), "light_escape", null, !0)),
                    e.append("</a>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_dropbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/dropbox", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    t.is_full_width = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__extended_service_message-note feed-note__extended_service_message-note-text-short">'),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "service") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "service"), "light_escape", null, !0)),
                    t.append(":&nbsp;")),
                    t.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"))))),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_extended_service_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/extended_service_message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "is_bonus_points") ? new (e._get("interface/notes/types/field_changed/bonus_points_changed.twig"))(this.env_).render_(t, i) : twig.attr(twig.attr("data"in i ? i.data : "", "params"), "is_items_change") ? new (e._get("interface/notes/types/field_changed/invoice_items_changed.twig"))(this.env_).render_(t, i) : twig.attr(twig.attr("data"in i ? i.data : "", "params"), "is_invoice_change_status") ? new (e._get("interface/notes/types/field_changed/invoice_status_changed.twig"))(this.env_).render_(t, i) : new (e._get("interface/notes/types/field_changed/index.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_field_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/field_changed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.note_class_name = "feed-note-file" + ("is_main"in t && t.is_main ? " feed-note-file--main" : ""),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.contains("STANDARD_ICON_EXTENSIONS"in t ? t.STANDARD_ICON_EXTENSIONS : "", "icon_extension"in t ? t.icon_extension : "") ? (e.append('<svg class="svg-icon svg-files_icons--file-'),
                    e.append(twig.filter.escape(this.env_, "icon_extension"in t ? t.icon_extension : "", "light_escape", null, !0)),
                    e.append('-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#files_icons--file-'),
                    e.append(twig.filter.escape(this.env_, "icon_extension"in t ? t.icon_extension : "", "light_escape", null, !0)),
                    e.append('"></use></svg>')) : (e.append('<div class="feed-note__icon-inner feed-note__icon-inner-file"><svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.2097 1H7C5.89543 1 5 1.89543 5 3V37C5 38.1046 5.89543 39 7 39H33C34.1046 39 35 38.1046 35 37L35 9.5H29.7097C27.7767 9.5 26.2097 7.933 26.2097 6L26.2097 1ZM36 9L36 37C36 38.6569 34.6569 40 33 40H7C5.34315 40 4 38.6569 4 37V3C4 1.34315 5.34315 0 7 0H26.7097L36 9ZM34.0467 8.5L27.2097 1.87667L27.2097 6C27.2097 7.38071 28.329 8.5 29.7097 8.5H34.0467Z" fill="#979797"></path><rect y="25" width="26" height="12" rx="3" fill="#979797"></rect><text fill="white" xml:space="preserve" font-size="9.5" font-weight="bold" letter-spacing="0.01em"><tspan x="3.3" y="34.7">'),
                    e.append(twig.filter.escape(this.env_, "icon_extension"in t ? t.icon_extension : "", "light_escape", null, !0)),
                    e.append("</tspan></text></svg></div>"))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="feed-note-file__top-information">'),
                    i.file_name = ("name"in i ? i.name : "") + "." + ("extension"in i ? i.extension : ""),
                    "download_link"in i && i.download_link ? (t.append('<a class="feed-note-file__name ui-text ui-text--l h-text-overflow js-control-file-name" title="'),
                    t.append(twig.filter.escape(this.env_, "file_name"in i ? i.file_name : "", "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, "download_link"in i ? i.download_link : "", "light_escape", null, !0)),
                    t.append('" download>'),
                    t.append(twig.filter.escape(this.env_, "file_name"in i ? i.file_name : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<span class="feed-note-file__name ui-text ui-text--l h-text-overflow js-control-file-name" title="'),
                    t.append(twig.filter.escape(this.env_, "file_name"in i ? i.file_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "file_name"in i ? i.file_name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<span class="feed-note-file__size ui-text ui-text--l">&nbsp;('),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format_file_size", "size"in i ? i.size : ""), "light_escape", null, !0)),
                    t.append(')</span><div class="feed-note-file__context-button-wrapper" style="z-index: '),
                    t.append(twig.filter.escape(this.env_, 1e16 - ("version_index"in i ? i.version_index : ""), "light_escape", null, !0)),
                    t.append(';">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "button-input-more",
                        icon_class_name: "icon-dots button-input-more-icon",
                        context_menu: [{
                            svg_icon_absolute: "controls--mark-in-file",
                            class_name: "feed-note-file__toggle-version js-version-switch",
                            text: this.env_.filter("i18n", "Restore this version")
                        }],
                        tab_index: "-1"
                    }),
                    t.append('</div></div><div class="feed-note-file__bottom-information"><span class="feed-note-file__creator-name ui-text ui-text--m ui-text--gray">'),
                    t.append(twig.filter.escape(this.env_, "creator_name"in i ? i.creator_name : "", "light_escape", null, !0)),
                    t.append('</span><span class="feed-note-file__created-at ui-text ui-text--m ui-text--gray">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", "created_at"in i ? i.created_at : ""), "light_escape", null, !0)),
                    t.append('</span><div class="feed-note-file__version-state '),
                    t.append("is_main"in i && i.is_main ? "feed-note-file__version-state--main" : ""),
                    t.append('"><span class="feed-note-file__version-state-text feed-note-file__version-state-text--main ui-text ui-text--m">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Current version"), "light_escape", null, !0)),
                    t.append('</span><span class="feed-note-file__version-state-text ui-text ui-text--m">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Version (short)") + " " + ("version_index"in i ? i.version_index : ""), "light_escape", null, !0)),
                    t.append("</span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/file", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="js-note js-note-fixable card-task-wrapper"><div class="card-task expanded card-task-empty"><div class="card-task__icon"><svg class="svg-icon svg-tasks--clock-dims"><use xlink:href="#tasks--clock"></use></svg></div><h2 class="card-task__head">'),
                    t.append(twig.attr("lang"in i ? i.lang : "", "tasks_first_text")),
                    t.append('</h2><span class="card-task__first-close"><span class="icon icon-modal-close"></span></span>'),
                    new (e._get("interface/cards/tasks/controls/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-task__actions",
                        name: "body",
                        value: this.env_.filter("task_text", twig.attr("data"in i ? i.data : "", "text"))
                    })),
                    t.append('<div class="card-task__buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_set"),
                        class_name: "js-task-submit feed-note__button",
                        tab_index: "-1",
                        disabled: !("is_new"in i && i.is_new)
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_first_task"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/first_task", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Followed link"), "light_escape", null, !0)),
                    t.append(": "),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"), "light_escape", null, !0))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_followed_link"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/followed_link", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__geo"><svg class="svg-icon svg-notes--feed-geo-dims"><use xlink:href="#notes--feed-geo"></use></svg><a href="https://www.google.com/maps/place/'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "address"), "light_escape", null, !0)),
                    t.append("/"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "latitude"), "light_escape", null, !0)),
                    t.append(","),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "longitude"), "light_escape", null, !0)),
                    t.append('z" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "address"), "light_escape", null, !0)),
                    t.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_geolocation"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/geolocation", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this),
                        add_file: twig.bind(this.block_add_file, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__geo"><svg class="svg-icon svg-notes--feed-geo-dims"><use xlink:href="#notes--feed-geo"></use></svg><a href="https://www.google.com/maps/place/'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "address"), "light_escape", null, !0)),
                    t.append("/"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "latitude"), "light_escape", null, !0)),
                    t.append(","),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "longitude"), "light_escape", null, !0)),
                    t.append('z" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "address"), "light_escape", null, !0)),
                    t.append("</a></div>")
                }
                ,
                t.prototype.block_add_file = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_geolocation_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/geolocation_edit", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "created_by"in i ? i.created_by : "", void 0, "array"), "full_name", void 0, "array"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Message"), "light_escape", null, !0)),
                    t.append(' "'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "message"), "light_escape", null, !0)),
                    t.append('" '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "add to"), "light_escape", null, !0)),
                    t.append(": "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "intent"), "light_escape", null, !0))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_intent"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/intent", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.icon = "not_first"in t && t.not_first ? "" : "notes--feed-transaction",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "not_first"in i && i.not_first || (twig.attr(twig.attr("data"in i ? i.data : "", "params"), "date") % 86400 == 0 ? new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: twig.attr(twig.attr("data"in i ? i.data : "", "params"), "date"),
                        format: "date"
                    })) : new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: twig.attr(twig.attr("data"in i ? i.data : "", "params"), "date")
                    }))),
                    new (e._get("interface/notes/defaults/user.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    e.append("<b>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase"), "light_escape", null, !0)),
                    e.append(":&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("data"in t ? t.data : "", "params"), "price"), [!1, 2, !1, "currency_code"in t ? t.currency_code : ""]), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("format", this.env_.filter("i18n", "on %s"), this.env_.filter("date", twig.attr(twig.attr("data"in t ? t.data : "", "params"), "date"), "date_short")), "light_escape", null, !0)),
                    twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "bonus_points")) || (e.append("<span> ("),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Awarded points"), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "bonus_points"), "light_escape", null, !0)),
                    e.append(")</span>")),
                    e.append("</b>"),
                    twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "external_id")) || (e.append('<div class="transaction-note-metadata"><div class="note--body--content-sliced"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase ID"), "light_escape", null, !0)),
                    e.append(":&nbsp;"),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "external_id"), "light_escape", null, !0)),
                    e.append("</p></div></div>")),
                    twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment")) && twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "receipt_link")) || (e.append('<div class="transaction-note-comment">'),
                    twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment")) || (t.text_ar = this.env_.filter("by_paragraphs", twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment"))),
                    t.sliced = !1,
                    twig.filter.length(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment")) > 200 && (t.sliced = twig.filter.escape(this.env_, this.env_.filter("slice", this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment"), "start"in t ? t.start : "", 150)) + "...",
                    t.text_ar = this.env_.filter("by_paragraphs", "sliced"in t ? t.sliced : "")),
                    twig.filter.length(this.env_, "text_ar"in t ? t.text_ar : "") > 4 && (t.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in t ? t.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 3, void 0, "array")], "join") + "..."),
                    "sliced"in t && t.sliced ? (e.append('<div class="note--body--content-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", "sliced"in t ? t.sliced : ""))),
                    e.append('<a href="#" class="feed-note__gray-link note-expander transaction-note-product_expander js-note-expander">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment"))))),
                    e.append("</div>")) : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "comment")))))),
                    twig.empty("receipt_link"in t ? t.receipt_link : "") || (e.append('<div class="transaction-note-comment-link">'),
                    e.append(this.env_.filter("parse_urls", twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "receipt_link")))),
                    e.append("</div>")),
                    e.append("</div>")),
                    !twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "products"))) {
                        if (e.append('<div class="transaction-products">'),
                        t.sliced = twig.filter.length(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "products")) > 5,
                        "sliced"in t && t.sliced) {
                            e.append('<div class="note--body--content-sliced">'),
                            t._parent = t;
                            var n = this.env_.filter("slice", this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "products"), 0, 5);
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.product = i,
                                e.append('<div class="transaction-note-product_item"><span class="transaction__product_item_name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "description"), "light_escape", null, !0)),
                                e.append('</span> x <span class="transaction__product_item_quantity">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "quantity"), "light_escape", null, !0)),
                                e.append("</span>"),
                                twig.empty(twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase")) || (e.append('<span class="transaction__product_item_points"> ('),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase"), "light_escape", null, !0)),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase")), "light_escape", null, !0)),
                                e.append(")</span>")),
                                e.append("</div>")
                            }
                            ), this),
                            e.append('<span class="note-expander js-note-expander transaction-note-product_expander">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "total"), "light_escape", null, !0)),
                            e.append(" "),
                            e.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "products")), "light_escape", null, !0)),
                            e.append('</span></div><div class="note--body--content-not-sliced">'),
                            t._parent = t,
                            n = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "products"),
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.product = i,
                                e.append('<div class="transaction-note-product_item"><span class="transaction__product_item_name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "description"), "light_escape", null, !0)),
                                e.append('</span> x <span class="transaction__product_item_quantity">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "quantity"), "light_escape", null, !0)),
                                e.append("</span>"),
                                twig.empty(twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase")) || (e.append('<span class="transaction__product_item_points"> ('),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase"), "light_escape", null, !0)),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase")), "light_escape", null, !0)),
                                e.append(")</span>")),
                                e.append("</div>")
                            }
                            ), this),
                            e.append("</div>")
                        } else
                            t._parent = t,
                            n = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "products"),
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.product = i,
                                e.append('<div class="transaction-note-product_item"><span class="transaction__product_item_name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "description"), "light_escape", null, !0)),
                                e.append('</span> x <span class="transaction__product_item_quantity">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "quantity"), "light_escape", null, !0)),
                                e.append("</span>"),
                                twig.empty(twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase")) || (e.append('<span class="transaction__product_item_points"> ('),
                                e.append(twig.filter.escape(this.env_, twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase"), "light_escape", null, !0)),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), twig.attr("product"in t ? t.product : "", "bonus_points_per_purchase")), "light_escape", null, !0)),
                                e.append(")</span>")),
                                e.append("</div>")
                            }
                            ), this);
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_invoice"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/invoice", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "catalog_elements"), "element_id"in i ? i.element_id : "", void 0, "array"),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Invoice created"), "light_escape", null, !0)),
                    "element"in i && i.element && t.append(":&nbsp;"),
                    t.append("</div>"),
                    "element"in i && i.element && t.append(twig.filter.escape(this.env_, this.env_.filter("catalog_element_name", twig.attr("element"in i ? i.element : "", "name"), twig.attr("element"in i ? i.element : "", "id"), twig.attr("element"in i ? i.element : "", "catalog_id")), "light_escape", null, !0)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_invoice_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/invoice_created", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), "element_id"in i ? i.element_id : "", void 0, "array"),
                    t.append('<div class="feed-note__joined-body">'),
                    i._parent = i;
                    var a = "joined"in i ? i.joined : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.note = e,
                        "customer_created" == twig.attr("note_types"in i ? i.note_types : "", twig.attr("note"in i ? i.note : "", "type"), void 0, "array") && twig.attr("note"in i ? i.note : "", "visible") && (i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr("note"in i ? i.note : "", "element_id"), void 0, "array"),
                        t.append('<div class="feed-note__body__content__right-data__item">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer created"), "light_escape", null, !0)),
                        t.append(':&nbsp;<a class="js-navigate-link feed-note__gray-link feed-note__linked-link" href="/customers/detail/'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "id"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("element"in i ? i.element : "", "name"), twig.attr("element"in i ? i.element : "", "id")), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("element"in i ? i.element : "", "name"), twig.attr("element"in i ? i.element : "", "id")), "light_escape", null, !0)),
                        t.append("</a></div>")),
                        "lead_created" == twig.attr("note_types"in i ? i.note_types : "", twig.attr("note"in i ? i.note : "", "type"), void 0, "array") && twig.attr("note"in i ? i.note : "", "visible") && (i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr("note"in i ? i.note : "", "element_id"), void 0, "array"),
                        t.append('<div class="feed-note__body__content__right-data__item">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "lead_added"), "light_escape", null, !0)),
                        t.append(': <a class="js-navigate-link feed-note__gray-link" href="/leads/detail/'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "id"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "name"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("element"in i ? i.element : "", "name"), twig.attr("element"in i ? i.element : "", "id")), "light_escape", null, !0)),
                        t.append("</a></div>")),
                        "contact_created" == twig.attr("note_types"in i ? i.note_types : "", twig.attr("note"in i ? i.note : "", "type"), void 0, "array") && twig.attr("note"in i ? i.note : "", "visible") && (i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("note"in i ? i.note : "", "element_id"), void 0, "array"),
                        t.append('<div class="feed-note__body__content__right-data__item">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "contact_added"), "light_escape", null, !0)),
                        "element"in i && i.element && (t.append(': <a class="js-navigate-link feed-note__gray-link" href="/contacts/detail/'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "id"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "name"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr("element"in i ? i.element : "", "name")), "light_escape", null, !0)),
                        t.append("</a>")),
                        t.append("</div>")),
                        "company_created" == twig.attr("note_types"in i ? i.note_types : "", twig.attr("note"in i ? i.note : "", "type"), void 0, "array") && twig.attr("note"in i ? i.note : "", "visible") && (i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("note"in i ? i.note : "", "element_id"), void 0, "array"),
                        t.append('<div class="feed-note__body__content__right-data__item">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "company_added"), "light_escape", null, !0)),
                        "element"in i && i.element && (t.append(': <a class="js-navigate-link feed-note__gray-link" href="/companies/detail/'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "id"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "name"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "name"), "light_escape", null, !0)),
                        t.append("</a>")),
                        t.append("</div>"))
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_joined"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/joined", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Key action"), "light_escape", null, !0)),
                    t.append(": "),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"), "light_escape", null, !0))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_key_action_completed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/key_action_completed", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"), "light_escape", null, !0)),
                    t.append("</div>&nbsp;"),
                    "is_free_user"in i && i.is_free_user || (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in i ? i._links : "", "linked_lead"), "href"), "light_escape", null, !0)),
                    t.append('" class="feed-note__gray-link" target="_blank">')),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in i ? i._links : "", "linked_lead"), "href"), "light_escape", null, !0)),
                    "is_free_user"in i && i.is_free_user || t.append("</a>"),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_lead_auto_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/lead_auto_created", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), "element_id"in i ? i.element_id : "", void 0, "array"),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "lead_added"), "light_escape", null, !0)),
                    "element"in i && i.element && t.append(":&nbsp;"),
                    t.append("</div>"),
                    "element"in i && i.element && ("is_free_user"in i && i.is_free_user || (t.append('<a class="js-navigate-link feed-note__gray-link" href="/leads/detail/'),
                    t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "id"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("element"in i ? i.element : "", "name"), twig.attr("element"in i ? i.element : "", "id")), "light_escape", null, !0)),
                    t.append('">')),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("element"in i ? i.element : "", "name"), twig.attr("element"in i ? i.element : "", "id")), "light_escape", null, !0)),
                    "is_free_user"in i && i.is_free_user || t.append("</a>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_lead_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/lead_created", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__status-changed-wrapper"><span class="feed-note__status-before">'),
                    this.env_.filter("period", twig.attr("note"in i ? i.note : "", "interval")) ? (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "set_after"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("period", twig.attr("note"in i ? i.note : "", "interval")), "light_escape", null, !0)),
                    t.append(" &mdash; "),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "New status card")), "light_escape", null, !0))) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "New status card"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    i.has_pipelines = twig.filter.length(this.env_, twig.attr("extra"in i ? i.extra : "", "pipelines")) > 1,
                    142 == twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_status") || 143 == twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_status") && "has_pipelines"in i && i.has_pipelines ? i.pipeline = twig.attr(twig.attr("extra"in i ? i.extra : "", "pipelines"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "pipeline"), void 0, "array") : i.pipeline = twig.attr(twig.attr("extra"in i ? i.extra : "", "pipelines"), twig.attr(twig.attr("extra"in i ? i.extra : "", "statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_status"), void 0, "array"), void 0, "array"),
                    142 == twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status") || 143 == twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status") && "has_pipelines"in i && i.has_pipelines ? i.old_pipeline = twig.attr(twig.attr("extra"in i ? i.extra : "", "pipelines"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_pipeline"), void 0, "array") : i.old_pipeline = twig.attr(twig.attr("extra"in i ? i.extra : "", "pipelines"), twig.attr(twig.attr("extra"in i ? i.extra : "", "statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status"), void 0, "array"), void 0, "array"),
                    i.status = twig.attr(twig.attr("pipeline"in i ? i.pipeline : "", "statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_status"), void 0, "array"),
                    i.old_status = twig.attr(twig.attr("old_pipeline"in i ? i.old_pipeline : "", "statuses"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_status"), void 0, "array"),
                    "has_pipelines"in i && i.has_pipelines && t.append('<div class="feed-note__pipeline">'),
                    "has_pipelines"in i && i.has_pipelines && (t.append('<div class="feed-note__pipeline-name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="feed-note__pipeline-status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "name"), "light_escape", null, !0)),
                    t.append("</div>"),
                    "has_pipelines"in i && i.has_pipelines && t.append("</div>"),
                    "old_status"in i && i.old_status && (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "From status card"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("old_status"in i ? i.old_status : "", "name"), "light_escape", null, !0))),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_lead_status_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/lead_status_changed", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.has_actions = !!twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private", void 0, void 0, !0) && twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private"), !1) && twig.attr(twig.attr("data"in t ? t.data : "", "params"), "is_owner"),
                    t.avatar_name = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "from"),
                    this.env_.test("iterable", twig.attr(twig.attr("data"in t ? t.data : "", "params"), "from")) ? (t.name_from = twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "from"), "name"),
                    t.name_to = twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "to"), "name"),
                    twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "from"), "user_id") != ("current_user_id"in t ? t.current_user_id : "") && (t.user_id_from = twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "from"), "user_id"))) : (t.name_from = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "from"),
                    t.name_to = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "to"),
                    twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "to"), "user_id") != ("current_user_id"in t ? t.current_user_id : "") && (t.user_id_to = twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "to"), "user_id"))),
                    t.is_incoming = !twig.attr(twig.attr("data"in t ? t.data : "", "params"), "manager") && !twig.attr(twig.attr("data"in t ? t.data : "", "params"), "sent"),
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
                    n = void 0 === n ? {} : n,
                    "search_highlighted"in i && i.search_highlighted || !("search_highlight_active"in i) || !i.search_highlight_active ? (t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date_create"in i ? i.date_create : "", "", !0), "light_escape", null, !0)),
                    t.append("&nbsp;")) : (t.append('<span style="background: yellow; color: #000">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date_create"in i ? i.date_create : "", "", !0), "light_escape", null, !0)),
                    t.append("&nbsp;</span>")),
                    "is_incoming"in i && i.is_incoming ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Incoming email") + " ", "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Outgoing email") + " ", "light_escape", null, !0)),
                    t.append('<span class="feed-note__date-text">&nbsp;'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "from"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "user_id_from"in i ? i.user_id_from : "",
                        name: "name_from"in i ? i.name_from : ""
                    })),
                    t.append('<span class="feed-note__date-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_to"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "user_id_to"in i ? i.user_id_to : "",
                        name: "name_to"in i ? i.name_to : ""
                    }))
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
                    if (i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__mail-content">'),
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "show_more"))
                        e.append(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "text"));
                    else if (!twig.attr(twig.attr("data"in t ? t.data : "", "params"), "is_owner") && twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private", void 0, void 0, !0) && twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private"), !1))
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_rights_to_private_message"), "light_escape", null, !0));
                    else {
                        e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("_links"in t ? t._links : "", "letter"), "href"), "light_escape", null, !0)),
                        e.append('" target="_blank" class=\''),
                        e.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link_classes", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link_classes"), []) : [], " "), "light_escape", null, !0)),
                        e.append("' "),
                        t._parent = t;
                        var n = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link_data", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link_data"), []) : [];
                        twig.forEach(n, (function(i, n) {
                            t.attr = n,
                            t.val = i,
                            e.append(" data-"),
                            e.append(twig.filter.escape(this.env_, "attr"in t ? t.attr : "", "light_escape", null, !0)),
                            e.append('="'),
                            e.append(twig.filter.escape(this.env_, "val"in t ? t.val : "", "light_escape", null, !0)),
                            e.append('"')
                        }
                        ), this),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "subject"), "light_escape", null, !0)),
                        e.append("</a>"),
                        twig.attr(twig.attr("data"in t ? t.data : "", "params"), "content_summary") && (e.append('<div class="feed-note__mail-content-summary">'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "content_summary"), "light_escape", null, !0)),
                        twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "params"), "content_summary")) < 50 && e.append("..."),
                        twig.contains(["queued", "delivered", "failed"], twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "status")) && (e.append('<div class="feed-note__mail-content-delivery feed-note__mail-content-delivery-'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "status"), "light_escape", null, !0)),
                        e.append('">'),
                        "delivered" == twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "status") ? (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_delivery_status_delivered"), "light_escape", null, !0)),
                        e.append("&nbsp;"),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "time"), "", !0), "light_escape", null, !0))) : "queued" == twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "status") ? e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("i18n", "in the sending queue")), "light_escape", null, !0)) : "failed" == twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "status") && (e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("i18n", "send failed")), "light_escape", null, !0)),
                        twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "reason") && twig.attr("lang"in t ? t.lang : "", "mail_delivery_failed_" + twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "reason"), void 0, "array") && (e.append(": "),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_delivery_failed_" + twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "delivery"), "reason"), void 0, "array"), "light_escape", null, !0))),
                        e.append('. <a href="#" class="js-note-mail-resend">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Repeat"), "light_escape", null, !0)),
                        e.append("</a>")),
                        e.append("</div>")),
                        e.append("</div>"))
                    }
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_mail_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/mail_message", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i.old_user = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old"), void 0, "array"), "full_name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old"), void 0, "array"), "full_name"), twig.attr("lang"in i ? i.lang : "", "notes_user_deleted")) : twig.attr("lang"in i ? i.lang : "", "notes_user_deleted"),
                    i.new_user = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new"), void 0, "array"), "full_name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new"), void 0, "array"), "full_name"), twig.attr("lang"in i ? i.lang : "", "notes_user_deleted")) : twig.attr("lang"in i ? i.lang : "", "notes_user_deleted"),
                    ("old_user"in i ? i.old_user : "") == twig.attr("lang"in i ? i.lang : "", "notes_user_deleted") ? (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_grouped_responsible_assignment"), "light_escape", null, !0)),
                    t.append(": "),
                    t.append(twig.filter.escape(this.env_, "new_user"in i ? i.new_user : "", "light_escape", null, !0))) : (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "notes_grouped_responsible"), "light_escape", null, !0)),
                    t.append(": "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "main_user_changed_from"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "old_user"in i ? i.old_user : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "change_main_user_to"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "new_user"in i ? i.new_user : "", "light_escape", null, !0)))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_main_user_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/main_user_changed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="js-note feed-note-fixer"><div class="feed-note feed-note-external"><div class="feed-note__icon"><span class="feed-note__avatar" title="'),
                    e.append(twig.filter.escape(this.env_, "avatar_title"in t ? t.avatar_title : "", "light_escape", null, !0)),
                    e.append('"><div class="n-avatar" style="background-image: url('),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "icon"), "light_escape", null, !0)),
                    e.append(')"></div></span></div><div class="feed-note__content"><div class="feed-note__header"><div class="feed-note__header-inner"><div class="feed-note__header-inner-nowrap"><div class="js-feed-note__date feed-note__date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date_create"in t ? t.date_create : "", "m/d/Y"), "light_escape", null, !0)),
                    e.append('</div><span class="feed-note__mention">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mention of the page"), "light_escape", null, !0)),
                    e.append('</span></div></div></div><div class="feed-note__body"><div class="feed-note__message_paragraph"><img src="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "contact"), "origin_avatar"), "light_escape", null, !0)),
                    e.append('" onerror="this.src = \''),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("avatar", 0), "light_escape", null, !0)),
                    e.append('\'" alt="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "contact"), "name")), "light_escape", null, !0)),
                    e.append('"><span class="mention-name">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "contact"), "name")), "light_escape", null, !0)),
                    e.append(':&nbsp;</span><span class="message-tags"><a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "message_tags"), 0, void 0, "array"), "link"), "light_escape", null, !0)),
                    e.append('">@'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "message_tags"), 0, void 0, "array"), "name"), "light_escape", null, !0)),
                    e.append('</a></span><span class="message-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("slice", this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "message"), twig.attr(twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "message_tags"), 0, void 0, "array"), "length")), "light_escape", null, !0)),
                    e.append('</span><div class="feed-note__ai-answer-wrapper"></div></div></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_mention"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/mention", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header_action: twig.bind(this.block_header_action, this),
                        header: twig.bind(this.block_header, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.icon = "notes--feed-merge",
                    t.hide_linked = !0,
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "doubles", void 0, void 0, !0) && !twig.empty(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "doubles")) || (t.wrapper_class_name = "hidden"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header_action = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "can_unmerge"in i && i.can_unmerge && new (e._get("interface/notes/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: "Cancel"
                    }))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i.event_name = this.env_.filter("element_type", "element_type"in i ? i.element_type : "", "string") + "_merge",
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "event_name"in i ? i.event_name : ""), "light_escape", null, !0))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    i.sliced = "sliced"in i ? twig.filter.def("sliced"in i ? i.sliced : "", Number(Number(twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"), "base_fields"))) + Number(twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"), "custom_fields")))) + Number(twig.functions.max(twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"), "links")), twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "links")))) > 2) : Number(Number(twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"), "base_fields"))) + Number(twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"), "custom_fields")))) + Number(twig.functions.max(twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"), "links")), twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "links")))) > 2,
                    i.double_params = twig.attr(twig.attr("data"in i ? i.data : "", "params"), "doubles"),
                    i.count = 0,
                    "sliced"in i && i.sliced) {
                        t.append('<div class="note--body--content-sliced"><table class="merge_event">'),
                        i._parent = i;
                        var a = twig.attr("double_params"in i ? i.double_params : "", "base_fields")
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
                            i.code = a,
                            i.value = n,
                            ("count"in i ? i.count : "") < 2 && (t.append("<tr>"),
                            new (e._get("interface/notes/types/merge/merge_base_field.twig"))(this.env_).render_(t, i),
                            t.append("</tr>")),
                            "id" != ("code"in i ? i.code : "") && "pipeline_id" != ("code"in i ? i.code : "") && (i.count = Number("count"in i ? i.count : "") + Number(1)),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        i._parent = i,
                        a = twig.attr("double_params"in i ? i.double_params : "", "custom_fields"),
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
                            i.code = a,
                            i.value = n,
                            ("count"in i ? i.count : "") < 2 && (t.append('<tr><td class="merge_event__row merge_event__row-field_name">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("feed_merge", "code"in i ? i.code : "", "name"), "light_escape", null, !0)),
                            t.append("</td>"),
                            new (e._get("interface/notes/types/merge/merge_custom_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                value: twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "custom_fields"), "code"in i ? i.code : "", void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "custom_fields"), "code"in i ? i.code : "", void 0, "array"), "") : "",
                                code: "code"in i ? i.code : ""
                            })),
                            new (e._get("interface/notes/types/merge/merge_custom_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                value: "value"in i ? i.value : "",
                                class: "merge_event__row-double",
                                code: "code"in i ? i.code : ""
                            })),
                            t.append("</tr>")),
                            i.count = Number("count"in i ? i.count : "") + Number(1),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append('</table><a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "expand"), "light_escape", null, !0)),
                        t.append("</a></div>")
                    }
                    t.append("<div "),
                    "sliced"in i && i.sliced && t.append(' class="note--body--content-not-sliced" '),
                    t.append('><table class="merge_event">'),
                    i._parent = i,
                    a = twig.attr("double_params"in i ? i.double_params : "", "base_fields"),
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
                        i.code = a,
                        i.value = n,
                        t.append("<tr>"),
                        new (e._get("interface/notes/types/merge/merge_base_field.twig"))(this.env_).render_(t, i),
                        t.append("</tr>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    i._parent = i,
                    a = twig.attr("double_params"in i ? i.double_params : "", "custom_fields"),
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
                        i.code = a,
                        i.value = n,
                        t.append('<tr><td class="merge_event__row merge_event__row-field_name">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("feed_merge", "code"in i ? i.code : "", "name"), "light_escape", null, !0)),
                        t.append("</td>"),
                        new (e._get("interface/notes/types/merge/merge_custom_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            value: twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "custom_fields"), "code"in i ? i.code : "", void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "custom_fields"), "code"in i ? i.code : "", void 0, "array"), "") : "",
                            code: "code"in i ? i.code : ""
                        })),
                        new (e._get("interface/notes/types/merge/merge_custom_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            value: "value"in i ? i.value : "",
                            class: "merge_event__row-double",
                            code: "code"in i ? i.code : ""
                        })),
                        t.append("</tr>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('<tr><td class="merge_event__row merge_event__row-name" colspan="2">'),
                    new (e._get("interface/notes/types/merge/merge_links.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        links: twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "links"),
                        hidden_links: twig.attr(twig.attr("data"in i ? i.data : "", "params"), "hidden_entities", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "hidden_entities"), []) : []
                    })),
                    t.append('</td><td class="merge_event__row merge_event__row-name merge_event__row-double">'),
                    new (e._get("interface/notes/types/merge/merge_links.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        links: twig.attr("double_params"in i ? i.double_params : "", "links"),
                        hidden_links: twig.attr(twig.attr("data"in i ? i.data : "", "params"), "hidden_entities", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "hidden_entities"), []) : []
                    })),
                    t.append("</td></tr></table>"),
                    "sliced"in i && i.sliced && (t.append('<a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Minimize"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_merge"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/merge", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), "element_id"in i ? i.element_id : "", void 0, "array"),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Message to the cashier", void 0, "array"), "light_escape", null, !0)),
                    t.append(":&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"), "light_escape", null, !0)),
                    t.append("</div>"),
                    i.status = twig.attr(twig.attr("data"in i ? i.data : "", "params"), "status"),
                    t.append('<div class="feed-note__cashier-message-status status_'),
                    t.append(twig.filter.escape(this.env_, "status"in i ? i.status : "", "light_escape", null, !0)),
                    t.append('">'),
                    "shown" == ("status"in i ? i.status : "") ? t.append('<svg class="svg-icon svg-inbox--checkmark-dims"><use xlink:href="#inbox--checkmark"></use></svg>') : "created" == ("status"in i ? i.status : "") ? t.append('<svg class="svg-icon svg-inbox--checkmark-single-dims"><use xlink:href="#inbox--checkmark-single"></use></svg>') : t.append('<svg class="svg-icon svg-common--close-dims"><use xlink:href="#common--close"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "cashier_message_status_" + ("status"in i ? i.status : ""), void 0, "array"), "light_escape", null, !0)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_message_cashier"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/message_cashier", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this),
                        footer: twig.bind(this.block_footer, this),
                        extended_context: twig.bind(this.block_extended_context, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "pinned"in t && t.pinned && (t.wrapper_class_name = "js-note-pinned",
                    t.note_class_name = "feed-note_pinned"),
                    t.text = twig.filter.trim(twig.attr("data"in t ? t.data : "", "text", void 0, void 0, !0) ? twig.filter.def(twig.attr("data"in t ? t.data : "", "text"), "") : ""),
                    t.text_ar = this.env_.filter("by_paragraphs", twig.filter.escape(this.env_, "text"in t ? t.text : "")),
                    t.sliced = !1,
                    t.picture_error_src = "/frontend/images/interface/svg/notes/picture_load_error/" + ("lang_id"in t ? twig.filter.def("lang_id"in t ? t.lang_id : "", "en") : "en") + "/picture_error.svg",
                    twig.filter.length(this.env_, twig.attr("data"in t ? t.data : "", "text")) > 500 && (t.sliced = this.env_.filter("slice_text_and_save_urls", twig.filter.escape(this.env_, "text"in t ? t.text : ""), 0, 300),
                    t.text_ar = this.env_.filter("by_paragraphs", "sliced"in t ? t.sliced : "")),
                    twig.filter.length(this.env_, "text_ar"in t ? t.text_ar : "") > 4 && (t.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in t ? t.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 3, void 0, "array")], "join")),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-notes--feed-note-dims"><use xlink:href="#notes--feed-note"></use></svg></div>')
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "search_highlighted"in t && t.search_highlighted ? e.append("search_highlighted"in t ? t.search_highlighted : "") : "sliced"in t && t.sliced && twig.filter.escape(this.env_, "text"in t ? t.text : "") != ("sliced"in t ? t.sliced : "") ? (t.sliced = ("sliced"in t ? t.sliced : "") + "...",
                    e.append('<div class="note--body--content-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2span", "sliced"in t ? t.sliced : "", !0))),
                    e.append('<a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced "><div class="note--body--content-not-sliced__scroll-wrapper custom-scroll">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2span", twig.filter.escape(this.env_, "text"in t ? t.text : ""), !0))),
                    e.append('</div><a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Minimize"), "light_escape", null, !0)),
                    e.append("</a></div>")) : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2span", twig.filter.escape(this.env_, "text"in t ? t.text : ""), !0)))
                }
                ,
                t.prototype.block_footer = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    twig.filter.length(this.env_, "joined"in t ? t.joined : "")) {
                        e.append('<div class="feed-note__joined-attach">'),
                        t._parent = t;
                        var n = "joined"in t ? t.joined : "";
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.note = i,
                            "attachment" == twig.attr("note_types"in t ? t.note_types : "", twig.attr("note"in t ? t.note : "", "type"), void 0, "array") && (twig.attr("note"in t ? t.note : "", "is_image") || (e.append('<div class="feed-note__joined-attach-item"><div class="feed-note__joined-attach-item__content"><a href="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "_links"), "download"), "href"), "light_escape", null, !0)),
                            e.append('" class="feed-note__joined-attach__link feed-note__blue-link" target="_blank">'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("note"in t ? t.note : "", "data"), "text"), "light_escape", null, !0)),
                            e.append("</a>"),
                            twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "data"), "params"), "size") && (e.append("&nbsp;("),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "data"), "params"), "size"), "light_escape", null, !0)),
                            e.append(")")),
                            e.append("</div>"),
                            "no_file" == twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "_links"), "download"), "error") && (e.append('<p class="feed-note__joined-attach-item__error"><svg class="svg-icon svg-inbox--error-dims"><use xlink:href="#inbox--error"></use></svg>'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "File upload error"), "light_escape", null, !0)),
                            e.append("</p>")),
                            e.append("</div>")),
                            twig.attr("note"in t ? t.note : "", "is_image") && (e.append('<a href="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "_links"), "download"), "href"), "light_escape", null, !0)),
                            e.append('" class="js-image-resizer feed-note__media-preview feed-note__media-preview__picture_wrapper"><img class="feed-note__media-preview__picture" src="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "_links"), "download"), "href"), "light_escape", null, !0)),
                            e.append('" crossorigin="anonymous" '),
                            e.append(' style="opacity: 0;" onerror="this.src=\''),
                            e.append(twig.filter.escape(this.env_, "picture_error_src"in t ? t.picture_error_src : "", "light_escape", null, !0)),
                            e.append('\'; this.parentNode.className += \' feed-note__media-preview__picture_error \';"><span class="spinner-icon spinner-icon-abs-center"></span><button class="js-new-window feed-note__media-preview_download-button">'),
                            e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "download")), "light_escape", null, !0)),
                            e.append("</button></a>")))
                        }
                        ), this),
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.block_extended_context = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    ("main_element_type"in t ? t.main_element_type : "") == ("element_type"in t ? t.element_type : "") && (e.append('<div class="feed-note__context__item pinner js-note-pinner'),
                    "pinned"in t && t.pinned && e.append(" pinner_pinned"),
                    e.append('"><svg class="svg-icon svg-notes--pin-dims pinner-icon"><use xlink:href="#notes--pin"></use></svg><span>'),
                    e.append(twig.filter.escape(this.env_, "pinned"in t && t.pinned ? twig.attr("lang"in t ? t.lang : "", "unpin") : twig.attr("lang"in t ? t.lang : "", "pin"), "light_escape", null, !0)),
                    e.append("</span></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_note"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/note", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="js-feed-opened-talk feed-note-fixer"><div class="feed-opened-talks-accordion"></div><div class="feed-note"><div class="feed-note__icon">'),
                    t.origins_icons = [],
                    t._parent = t;
                    var n = "data"in t ? t.data : "";
                    if (twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.talk = i,
                        twig.filter.length(this.env_, "origins_icons"in t ? t.origins_icons : "") < 2 && !twig.contains("origins_icons"in t ? t.origins_icons : "", twig.attr("talk"in t ? t.talk : "", "origin_icon")) && (e.append('<img src="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("talk"in t ? t.talk : "", "origin_icon"), "light_escape", null, !0)),
                        e.append('">'),
                        t.origins_icons = twig.filter.merge("origins_icons"in t ? t.origins_icons : "", [twig.attr("talk"in t ? t.talk : "", "origin_icon")]))
                    }
                    ), this),
                    e.append('</div><div class="feed-note__content">'),
                    twig.filter.length(this.env_, "data"in t ? t.data : "") > 1)
                        e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "More"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "data"in t ? t.data : "") - 1, "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "ongoing talk,ongoing talks"), twig.filter.length(this.env_, "data"in t ? t.data : "") - 1, !0), "light_escape", null, !0));
                    else {
                        t._parent = t,
                        n = "data"in t ? t.data : "";
                        var a = {
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
                            t.talk = i,
                            twig.attr(a, "first") && (e.append('<div class="feed-note__opened-talk '),
                            twig.attr("talk"in t ? t.talk : "", "last_message_outgoing") && e.append("feed-note__opened-talk_outgoing"),
                            e.append(' js-feed-talk-pinned" data-id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("talk"in t ? t.talk : "", "id"), "light_escape", null, !0)),
                            e.append('"><span class="js-feed-note__date feed-note__opened-talk-date feed-note__date">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", twig.attr("talk"in t ? t.talk : "", "last_message_date")), "light_escape", null, !0)),
                            e.append('</span><span class="feed-note__opened-talk-message"><span class="feed-note__opened-talk-message-inner"><span class="feed-note__opened-talk-message-inner-text">'),
                            twig.attr(twig.attr("talk"in t ? t.talk : "", "last_message_author"), "name") && (e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("talk"in t ? t.talk : "", "last_message_author"), "name"), "light_escape", null, !0)),
                            e.append(": ")),
                            "secondary" == twig.attr("talk"in t ? t.talk : "", "category") && (e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Commented"), "light_escape", null, !0)),
                            e.append(" ")),
                            e.append(twig.filter.escape(this.env_, twig.attr("talk"in t ? t.talk : "", "last_message"), "light_escape", null, !0)),
                            e.append('</span></span></span><span class="feed-note__opened-talk-link '),
                            0 == twig.attr("talk"in t ? t.talk : "", "read_status") && e.append("feed-note__opened-talk-link_unread"),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Conversation"), "light_escape", null, !0)),
                            e.append(" № A"),
                            e.append(twig.filter.escape(this.env_, twig.attr("talk"in t ? t.talk : "", "id"), "light_escape", null, !0)),
                            e.append("</span></div>")),
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
                    return "interface_notes_types_opened_talks"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/opened_talks", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "icon_url") ? (e.append('<div class="feed-note__icon-inner" style="background: url('),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in t ? t.data : "", "params"), "icon_url"), "light_escape", null, !0)),
                    e.append('"></div>')) : e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-social--1c-dims"><use xlink:href="#social--1c"></use></svg></div>')
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text"), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_payed_1c"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/payed_1c", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><img style="width:36px; border-radius: 50%" src="/frontend/images/interface/svg/notes/payed-quickbooks-note.svg"></div>')
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text"), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_payed_quickbooks"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/payed_quickbooks", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap">'),
                    94 == ("type"in i ? i.type : "") && (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Segments added"), "light_escape", null, !0)),
                    t.append(":")),
                    95 == ("type"in i ? i.type : "") && (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Segments removed"), "light_escape", null, !0)),
                    t.append(":")),
                    i._parent = i;
                    var a = twig.attr(twig.attr("data"in i ? i.data : "", "params"), "segments")
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
                        new (e._get("interface/filter/customers/suggest_segments/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : "",
                            class_name: "suggest-segments__item_feed"
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_segment_change"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/segment_change", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append("<div>"),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "service") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "service"), "light_escape", null, !0)),
                    t.append(":&nbsp;")),
                    t.append(this.env_.filter("parse_urls", twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text")))),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_service_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/service_message", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap"><div style="white-space: nowrap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_site_visit"), "light_escape", null, !0)),
                    t.append(':&nbsp;</div><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "url"), "light_escape", null, !0)),
                    t.append('" class="feed-note__blue-link" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "url"), "light_escape", null, !0)),
                    t.append("</a></div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_site_visit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/site_visit", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_incoming = 102 == ("type"in t ? t.type : ""),
                    t.is_external = !0,
                    t.text = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "text", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "text"), "") : "",
                    this.env_.test("iterable", "text"in t ? t.text : "") && (t.text = ""),
                    t.text_ar = this.env_.filter("by_paragraphs", twig.filter.escape(this.env_, twig.filter.trim("text"in t ? t.text : ""))),
                    t.sliced = !1,
                    twig.filter.length(this.env_, "text"in t ? t.text : "") > 500 && (t.sliced = this.env_.filter("slice_text_and_save_urls", twig.filter.escape(this.env_, twig.filter.trim("text"in t ? t.text : "")), 0, 300) + "...",
                    t.text_ar = this.env_.filter("by_paragraphs", "sliced"in t ? t.sliced : "")),
                    twig.filter.length(this.env_, "text_ar"in t ? t.text_ar : "") > 4 && (t.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in t ? t.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 3, void 0, "array")], "join") + "..."),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-notes--feed-sms-dims"><use xlink:href="#notes--feed-sms"></use></svg><span class="feed-note__icon-direction feed-note__icon-direction_'),
                    "is_incoming"in t && t.is_incoming ? e.append("in") : e.append("out"),
                    e.append('"><svg class="svg-icon svg-notes--feed-arrow-dims"><use xlink:href="#notes--feed-arrow"></use></svg></span></div>')
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    "author_name"in i && i.author_name ? i.user = "author_name"in i ? i.author_name : "" : "0" == ("created_by"in i ? i.created_by : "") || "Robot" == twig.attr("data"in i ? i.data : "", "text") ? i.user = twig.attr("lang"in i ? i.lang : "", "Bot") : i.user = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "created_by"in i ? i.created_by : "", void 0, "array"), "full_name", void 0, "array"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "from"), "light_escape", null, !0)),
                    t.append(": "),
                    "is_incoming"in i && i.is_incoming ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "phone"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, "user"in i ? i.user : "", "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "to"), "light_escape", null, !0)),
                    t.append(": "),
                    "is_incoming"in i && i.is_incoming ? t.append(twig.filter.escape(this.env_, "user"in i ? i.user : "", "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "phone"), "light_escape", null, !0))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "sliced"in t && t.sliced ? (e.append('<div class="note--body--content-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("sliced"in t ? t.sliced : ""), !0))),
                    e.append('<a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced "><div class="note--body--content-not-sliced__scroll-wrapper custom-scroll">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.filter.trim("text"in t ? t.text : "")), !0))),
                    e.append('</div><a href="#" class="feed-note__gray-link note-expander js-note-toggle">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Minimize"), "light_escape", null, !0)),
                    e.append("</a></div>")) : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.filter.trim("text"in t ? t.text : "")), !0)))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_sms"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/sms", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.contains([18, 19], "type"in i ? i.type : "") ? new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i) : new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"), "light_escape", null, !0)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_system_note"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/system_note", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap feed-note__header-inner-wrap--tag"><span class="feed-note__header-inner-wrap-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"), "light_escape", null, !0)),
                    t.append("</span></div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_tag_event"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/tag_event", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Conversation"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "talk_id"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Talk closed event"), "light_escape", null, !0)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_talk_closed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/talk_closed", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__header-inner-wrap">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Conversation"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("data"in i ? i.data : "", "params"), "talk_id"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Talk marked answered event"), "light_escape", null, !0)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_talk_marked_answered"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/talk_marked_answered", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this),
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
                    t.note_body_class_name = "status"in t && t.status ? "feed-note__body_task-completed" : "",
                    t.icon = "notes--feed-task",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date_modify"in i ? i.date_modify : ""
                    })),
                    new (e._get("interface/notes/types/task_header_name_user.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__task-text">'),
                    t.task_text = this.env_.filter("task_text", twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "text"))),
                    t.type_name_clean = this.env_.filter("striptags", "type_name"in t ? t.type_name : ""),
                    e.append('<div class="feed-note__task-type-name">'),
                    "type_name_clean"in t && t.type_name_clean && (e.append(twig.filter.escape(this.env_, "type_name_clean"in t ? t.type_name_clean : "", "light_escape", null, !0)),
                    "task_text"in t && t.task_text && e.append(":&nbsp;")),
                    e.append("</div>"),
                    "search_highlighted"in t && t.search_highlighted ? e.append("search_highlighted"in t ? t.search_highlighted : "") : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", "task_text"in t ? t.task_text : ""))),
                    e.append("</div>")
                }
                ,
                t.prototype.block_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "result_form"in i && i.result_form ? (t.append(" "),
                    i.result_text = "",
                    "result"in i && i.result && (i.result_text = twig.attr(twig.attr("result"in i ? i.result : "", "data"), "text")),
                    t.append('<div class="feed-note__task-result-edit"><textarea name="task_result" id="task_edit_result" class="feed-note__task-result-edit__textarea">'),
                    t.append(twig.filter.escape(this.env_, "result_text"in i ? i.result_text : "", "light_escape", null, !0)),
                    t.append('</textarea></div><div class="feed-note__actions">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-todo-result feed-note__actions__button",
                        tab_index: "-1",
                        disabled: "id"in i ? i.id : ""
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-note-edit-cancel feed-note__actions__button-cancel",
                        tab_index: "-1"
                    })),
                    t.append("</div>")) : twig.attr(twig.attr("result"in i ? i.result : "", "data"), "text") && (t.append('<div class="feed-note__task-result">'),
                    t.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.attr(twig.attr("result"in i ? i.result : "", "data"), "text"))))),
                    t.append("</div>")),
                    twig.filter.length(this.env_, "joined"in i ? i.joined : "") && new (e._get("interface/notes/types/tasks_joined.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_task_completed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/task_completed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    ("created_by"in t ? t.created_by : "") != ("responsible_user_id"in t ? t.responsible_user_id : "") && ("author_name"in t && t.author_name ? (twig.empty("external_author_name"in t ? t.external_author_name : "") || (t.author_name = ("author_name"in t ? t.author_name : "") + " (" + ("external_author_name"in t ? t.external_author_name : "") + ")"),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "from"), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, "author_name"in t ? t.author_name : "", "light_escape", null, !0))) : twig.attr(twig.attr("extra"in t ? t.extra : "", "users"), "created_by"in t ? t.created_by : "", void 0, "array") && (t.creator_text = twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "users"), "created_by"in t ? t.created_by : "", void 0, "array"), "full_name", void 0, "array"),
                    "creator_text"in t && t.creator_text || (t.creator_text = this.env_.filter("i18n", "notes_user_deleted")),
                    twig.empty("external_author_name"in t ? t.external_author_name : "") || (t.author_name = ("author_name"in t ? t.author_name : "") + " (" + ("external_author_name"in t ? t.external_author_name : "") + ")"),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "from"), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, "creator_text"in t ? t.creator_text : "", "light_escape", null, !0)))),
                    t.responsible_text = twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "users"), "responsible_user_id"in t ? t.responsible_user_id : "", void 0, "array"), "full_name", void 0, "array"),
                    "responsible_text"in t && t.responsible_text || (t.responsible_text = this.env_.filter("i18n", "notes_user_deleted")),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "task_for"), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, "responsible_text"in t ? t.responsible_text : "", "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_task_header_name_user"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/task_header_name_user", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-note__tasks-joined">'),
                    i._parent = i;
                    var a = "joined"in i ? i.joined : ""
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
                        i.note = n,
                        i.template = twig.attr("_templates"in i ? i._templates : "", twig.attr("note"in i ? i.note : "", "type"), void 0, "array"),
                        t.append('<div class="feed-note-wrapper feed-note-wrapper-'),
                        t.append(twig.filter.escape(this.env_, "template"in i ? i.template : "", "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("interface/notes/types/" + ("template"in i ? i.template : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("note"in i ? i.note : "", {
                            is_joined: !0
                        }))),
                        t.append("</div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_tasks_joined"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/tasks_joined", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    t.hide_linked = !0,
                    t.icon = "not_first"in t && t.not_first ? "" : "notes--feed-transaction",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    ("date"in i ? i.date : "") % 86400 == 0 ? new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : "",
                        format: "date"
                    })) : new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : ""
                    })),
                    new (e._get("interface/notes/defaults/user.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    t.currency_code = twig.attr("metadata"in t ? t.metadata : "", "currency"),
                    e.append("<b>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase"), "light_escape", null, !0)),
                    e.append(":&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "price"in t ? t.price : "", [!1, 2, !1, "currency_code"in t ? t.currency_code : ""]), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("format", this.env_.filter("i18n", "on %s"), this.env_.filter("date", "transaction_date"in t ? t.transaction_date : "", "date_short")), "light_escape", null, !0)),
                    twig.empty("bonus_points"in t ? t.bonus_points : "") || (e.append("<span> ("),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Awarded points"), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "bonus_points"in t ? t.bonus_points : "", "light_escape", null, !0)),
                    e.append(")</span>")),
                    e.append("</b>"),
                    twig.empty("external_id"in t ? t.external_id : "") || (e.append('<div class="transaction-note-metadata"><div class="note--body--content-sliced"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase ID"), "light_escape", null, !0)),
                    e.append(":&nbsp;"),
                    e.append(twig.filter.escape(this.env_, "external_id"in t ? t.external_id : "", "light_escape", null, !0)),
                    e.append("</p></div></div>")),
                    twig.empty("comment"in t ? t.comment : "") && twig.empty("receipt_link"in t ? t.receipt_link : "") || (e.append('<div class="transaction-note-comment">'),
                    twig.empty("comment"in t ? t.comment : "") || (t.text_ar = this.env_.filter("by_paragraphs", twig.filter.escape(this.env_, "comment"in t ? t.comment : "")),
                    t.sliced = !1,
                    twig.filter.length(this.env_, "comment"in t ? t.comment : "") > 200 && (t.sliced = twig.filter.escape(this.env_, this.env_.filter("slice", this.env_, "comment"in t ? t.comment : "", "start"in t ? t.start : "", 150)) + "...",
                    t.text_ar = this.env_.filter("by_paragraphs", "sliced"in t ? t.sliced : "")),
                    twig.filter.length(this.env_, "text_ar"in t ? t.text_ar : "") > 4 && (t.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in t ? t.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 3, void 0, "array")], "join") + "..."),
                    "sliced"in t && t.sliced ? (e.append('<div class="note--body--content-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", "sliced"in t ? t.sliced : ""))),
                    e.append('<a href="#" class="feed-note__gray-link note-expander transaction-note-product_expander js-note-expander">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, "comment"in t ? t.comment : "")))),
                    e.append("</div>")) : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, "comment"in t ? t.comment : ""))))),
                    twig.empty("receipt_link"in t ? t.receipt_link : "") || (e.append('<div class="transaction-note-comment-link">'),
                    e.append(this.env_.filter("parse_urls", twig.filter.escape(this.env_, "receipt_link"in t ? t.receipt_link : ""))),
                    e.append("</div>")),
                    e.append("</div>")),
                    !twig.empty("products"in t ? t.products : "")) {
                        if (e.append('<div class="transaction-products">'),
                        t.sliced = twig.filter.length(this.env_, "products"in t ? t.products : "") > 5,
                        "sliced"in t && t.sliced) {
                            e.append('<div class="note--body--content-sliced">'),
                            t._parent = t;
                            var n = this.env_.filter("slice", this.env_, "products"in t ? t.products : "", 0, 5);
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.product = i,
                                twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "quantity") < twig.attr("product"in t ? t.product : "", "quantity") ? t.quantity = twig.attr("product"in t ? t.product : "", "quantity") : t.quantity = twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "quantity"),
                                twig.empty(twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "bonus_points")) ? t.points = 0 : t.points = twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "bonus_points"),
                                t.element = twig.attr(twig.attr("product"in t ? t.product : "", "elements", void 0, "array"), 0, void 0, "array"),
                                e.append('<div class="transaction-note-product_item"><span class="transaction__product_item_name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("element"in t ? t.element : "", "name"), "light_escape", null, !0)),
                                e.append('</span> x <span class="transaction__product_item_quantity">'),
                                e.append(twig.filter.escape(this.env_, "quantity"in t ? t.quantity : "", "light_escape", null, !0)),
                                e.append("</span>"),
                                twig.empty("points"in t ? t.points : "") || (e.append('<span class="transaction__product_item_points"> ('),
                                e.append(twig.filter.escape(this.env_, "points"in t ? t.points : "", "light_escape", null, !0)),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), "points"in t ? t.points : ""), "light_escape", null, !0)),
                                e.append(")</span>")),
                                e.append("</div>")
                            }
                            ), this),
                            e.append('<span class="note-expander js-note-expander transaction-note-product_expander">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "total"), "light_escape", null, !0)),
                            e.append(" "),
                            e.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "products"in t ? t.products : ""), "light_escape", null, !0)),
                            e.append('</span></div><div class="note--body--content-not-sliced">'),
                            t._parent = t,
                            n = "products"in t ? t.products : "",
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.product = i,
                                twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "quantity") < twig.attr("product"in t ? t.product : "", "quantity") ? t.quantity = twig.attr("product"in t ? t.product : "", "quantity") : t.quantity = twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "quantity"),
                                twig.empty(twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "bonus_points")) ? t.points = 0 : t.points = twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "bonus_points"),
                                t.element = twig.attr(twig.attr("product"in t ? t.product : "", "elements", void 0, "array"), 0, void 0, "array"),
                                e.append('<div class="transaction-note-product_item"><span class="transaction__product_item_name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("element"in t ? t.element : "", "name"), "light_escape", null, !0)),
                                e.append('</span> x <span class="transaction__product_item_quantity">'),
                                e.append(twig.filter.escape(this.env_, "quantity"in t ? t.quantity : "", "light_escape", null, !0)),
                                e.append("</span>"),
                                twig.empty("points"in t ? t.points : "") || (e.append('<span class="transaction__product_item_points"> ('),
                                e.append(twig.filter.escape(this.env_, "points"in t ? t.points : "", "light_escape", null, !0)),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), "points"in t ? t.points : ""), "light_escape", null, !0)),
                                e.append(")</span>")),
                                e.append("</div>")
                            }
                            ), this),
                            e.append("</div>")
                        } else
                            t._parent = t,
                            n = "products"in t ? t.products : "",
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.product = i,
                                twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "quantity") < twig.attr("product"in t ? t.product : "", "quantity") ? t.quantity = twig.attr("product"in t ? t.product : "", "quantity") : t.quantity = twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "quantity"),
                                twig.empty(twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "bonus_points")) ? t.points = 0 : t.points = twig.attr(twig.attr("product"in t ? t.product : "", "metadata"), "bonus_points"),
                                t.element = twig.attr(twig.attr("product"in t ? t.product : "", "elements", void 0, "array"), 0, void 0, "array"),
                                e.append('<div class="transaction-note-product_item"><span class="transaction__product_item_name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("element"in t ? t.element : "", "name"), "light_escape", null, !0)),
                                e.append('</span> x <span class="transaction__product_item_quantity">'),
                                e.append(twig.filter.escape(this.env_, "quantity"in t ? t.quantity : "", "light_escape", null, !0)),
                                e.append("</span>"),
                                twig.empty("points"in t ? t.points : "") || (e.append('<span class="transaction__product_item_points"> ('),
                                e.append(twig.filter.escape(this.env_, "points"in t ? t.points : "", "light_escape", null, !0)),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), "points"in t ? t.points : ""), "light_escape", null, !0)),
                                e.append(")</span>")),
                                e.append("</div>")
                            }
                            ), this);
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_transaction"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/transaction", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    var a = "joined"in i ? i.joined : ""
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
                        i.t = n,
                        i.element = twig.attr(twig.attr("extra"in i ? i.extra : "", "transactions"), twig.attr(twig.attr(twig.attr("t"in i ? i.t : "", "data"), "params"), "transaction_id"), void 0, "array"),
                        new (e._get("interface/notes/types/transaction.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            date: twig.attr("t"in i ? i.t : "", "date_create"),
                            price: twig.attr("element"in i ? i.element : "", "price"),
                            products: twig.attr("element"in i ? i.element : "", "products"),
                            transaction_date: twig.attr("element"in i ? i.element : "", "date"),
                            comment: twig.attr("element"in i ? i.element : "", "comment"),
                            not_first: "not_first"in i ? i.not_first : "",
                            bonus_points: twig.attr("element"in i ? i.element : "", "bonus_points"),
                            metadata: twig.attr("element"in i ? i.element : "", "metadata"),
                            external_id: twig.attr("element"in i ? i.element : "", "external_id"),
                            receipt_link: twig.attr("element"in i ? i.element : "", "receipt_link")
                        })),
                        i.not_first = !0,
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    twig.filter.length(this.env_, "joined"in i ? i.joined : "") > 1 && (t.append('<div class="feed-note-transactions-accordion"><div class="feed-note-transactions-accordion-twice"></div>'),
                    twig.filter.length(this.env_, "joined"in i ? i.joined : "") > 2 && t.append('<div class="feed-note-transactions-accordion-thrice"></div>'),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_transactions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/transactions", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.author_id = twig.attr("amo_author"in t ? t.amo_author : "", "amojo_id"),
                    twig.attr("amo_author"in t ? t.amo_author : "", "title") ? t.sender = twig.attr("amo_author"in t ? t.amo_author : "", "title") : (t.author_id = !1,
                    t.sender = twig.attr("lang"in t ? t.lang : "", "notes_user_deleted")),
                    t.typing = this.env_.filter("i18n", "typing..."),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<span class="feed-note__avatar" title="'),
                    t.append(twig.filter.escape(this.env_, "sender"in i ? i.sender : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("amo_author"in i ? i.amo_author : "", "avatar"),
                        id: "author_id"in i ? i.author_id : ""
                    })),
                    t.append("</span>")
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "author_id"in i ? i.author_id : "",
                        name: "sender"in i ? i.sender : "",
                        type: twig.attr("amo_author"in i ? i.amo_author : "", "_type")
                    }))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "typing"in t ? t.typing : "", "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_typing"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/typing", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-notes--feed-zoom-call-dims"><use xlink:href="#notes--feed-zoom-call"></use></svg></div>')
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.video_recordings = [],
                    t._parent = t;
                    var n = twig.attr(twig.attr("data"in t ? t.data : "", "params"), "recordings");
                    if (twig.forEach(n, (function(e, i) {
                        t._key = i,
                        t.record = e,
                        "video" == twig.attr("record"in t ? t.record : "", "type") && (t.video_recordings = twig.filter.merge("video_recordings"in t ? t.video_recordings : "", ["record"in t ? t.record : ""]))
                    }
                    ), this),
                    t.recording_title = twig.filter.length(this.env_, "video_recordings"in t ? t.video_recordings : "") > 0 && !twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "conference"), "all_recordings_deleted") ? this.env_.filter("i18n", "Zoom Recording") : this.env_.filter("i18n", "Zoom Video conference"),
                    e.append('<div class="feed-note__call-content">'),
                    twig.empty("video_recordings"in t ? t.video_recordings : "") ? e.append(twig.filter.escape(this.env_, "recording_title"in t ? t.recording_title : "", "light_escape", null, !0)) : (e.append('<a href="https://zoom.us/recording/detail?meeting_id='),
                    e.append(twig.filter.escape(this.env_, encodeURIComponent(twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "conference"), "zoom_conf_uuid")), "light_escape", null, !0)),
                    e.append('" target="_blank" rel="noopener noreferrer" class="feed-note__recording">'),
                    e.append(twig.filter.escape(this.env_, "recording_title"in t ? t.recording_title : "", "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("&nbsp;"),
                    twig.filter.length(this.env_, "video_recordings"in t ? t.video_recordings : "") > 0) {
                        e.append('<div class="feed-note__joined-attach">'),
                        t._parent = t,
                        n = "video_recordings"in t ? t.video_recordings : "";
                        var a = {
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
                            t.record = i,
                            twig.attr(a, "index0") < 10 && (e.append('<a href="" data-url="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("record"in t ? t.record : "", "link"), "light_escape", null, !0)),
                            e.append('" data-type="video" class="feed-note__media-preview"><svg width="90" height="30" viewBox="0 0 85 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M69.012 6.41403C69.336 6.97303 69.442 7.60903 69.477 8.32403L69.523 9.27703V15.941L69.57 16.895C69.664 18.453 70.813 19.605 72.383 19.703L73.332 19.75V9.27703L73.379 8.32403C73.418 7.61703 73.523 6.96903 73.852 6.40603C74.1872 5.82856 74.6685 5.34946 75.2475 5.01681C75.8264 4.68417 76.4827 4.5097 77.1505 4.51091C77.8182 4.51213 78.4738 4.68899 79.0516 5.02374C79.6293 5.35849 80.1089 5.83935 80.442 6.41803C80.766 6.97703 80.867 7.62503 80.906 8.32403L80.953 9.27403V15.941L81 16.895C81.098 18.461 82.238 19.613 83.813 19.703L84.762 19.75V8.32403C84.762 6.3036 83.9596 4.36588 82.5312 2.93694C81.1028 1.50799 79.1654 0.704824 77.145 0.704029C76.0636 0.702888 74.9944 0.932534 74.0089 1.37762C73.0234 1.82271 72.1441 2.47299 71.43 3.28503C70.7155 2.47332 69.8363 1.82319 68.8508 1.37797C67.8654 0.932747 66.7964 0.702657 65.715 0.703029C64.133 0.703029 62.665 1.18303 61.449 2.01203C60.707 1.18403 59.047 0.703029 58.094 0.703029V19.75L59.047 19.703C60.641 19.598 61.793 18.477 61.855 16.895L61.906 15.941V9.27703L61.953 8.32403C61.993 7.60503 62.093 6.97303 62.418 6.41003C62.7535 5.83292 63.2346 5.35393 63.8131 5.02088C64.3917 4.68783 65.0474 4.51237 65.715 4.51203C66.3831 4.51217 67.0394 4.68798 67.618 5.02181C68.1967 5.35564 68.6774 5.83577 69.012 6.41403ZM3.809 19.704L4.762 19.75H19.047L19 18.8C18.871 17.234 17.762 16.09 16.191 15.988L15.238 15.941H6.668L18.094 4.51103L18.047 3.56203C17.973 1.98003 16.817 0.837029 15.238 0.750029L14.285 0.707029L0 0.703029L0.047 1.65603C0.172 3.20703 1.297 4.37503 2.855 4.46503L3.809 4.51203H12.379L0.953 15.942L1 16.895C1.094 18.465 2.227 19.602 3.809 19.703V19.704ZM54.355 3.49103C55.2395 4.37535 55.9412 5.42525 56.4199 6.58076C56.8986 7.73628 57.1449 8.97478 57.1449 10.2255C57.1449 11.4763 56.8986 12.7148 56.4199 13.8703C55.9412 15.0258 55.2395 16.0757 54.355 16.96C52.568 18.7456 50.1452 19.7486 47.619 19.7486C45.0928 19.7486 42.67 18.7456 40.883 16.96C37.164 13.241 37.164 7.21003 40.883 3.49103C41.7667 2.60701 42.8159 1.9057 43.9706 1.42716C45.1253 0.948625 46.363 0.702224 47.613 0.702029C48.865 0.701159 50.1049 0.947127 51.2617 1.42586C52.4186 1.9046 53.4697 2.60671 54.355 3.49203V3.49103ZM51.66 6.18803C52.7312 7.26005 53.3329 8.71354 53.3329 10.229C53.3329 11.7445 52.7312 13.198 51.66 14.27C50.588 15.3412 49.1345 15.943 47.619 15.943C46.1035 15.943 44.65 15.3412 43.578 14.27C42.5068 13.198 41.9051 11.7445 41.9051 10.229C41.9051 8.71354 42.5068 7.26005 43.578 6.18803C44.65 5.11682 46.1035 4.51509 47.619 4.51509C49.1345 4.51509 50.588 5.11682 51.66 6.18803ZM27.625 0.702029C28.875 0.702355 30.1128 0.948914 31.2675 1.42763C32.4223 1.90634 33.4714 2.60782 34.355 3.49203C38.075 7.21003 38.075 13.242 34.355 16.96C32.568 18.7456 30.1452 19.7486 27.619 19.7486C25.0928 19.7486 22.67 18.7456 20.883 16.96C17.164 13.241 17.164 7.21003 20.883 3.49103C21.7667 2.60701 22.8159 1.9057 23.9706 1.42716C25.1253 0.948625 26.363 0.702224 27.613 0.702029H27.625ZM31.66 6.18603C32.7315 7.25809 33.3334 8.71179 33.3334 10.2275C33.3334 11.7433 32.7315 13.197 31.66 14.269C30.588 15.3402 29.1345 15.942 27.619 15.942C26.1035 15.942 24.65 15.3402 23.578 14.269C22.5068 13.197 21.9051 11.7435 21.9051 10.228C21.9051 8.71253 22.5068 7.25905 23.578 6.18703C24.65 5.11582 26.1035 4.51409 27.619 4.51409C29.1345 4.51409 30.588 5.11582 31.66 6.18703V6.18603Z" fill="white"/></svg><div data-url="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("record"in t ? t.record : "", "link"), "light_escape", null, !0)),
                            e.append('" class="feed-note__joined-overlay"><div class="feed-note__icon-play"><svg class="svg-icon svg-notes--feed-zoom-call-dims"><use xlink:href="#notes--feed-zoom-play"></use></svg></div><div class="feed-note__icon-download js-new-window"><svg class="svg-icon svg-notes--feed-zoom-call-dims"><use xlink:href="#notes--feed-zoom-download"></use></svg></div><div class="feed-note__call-duration">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr("record"in t ? t.record : "", "duration")), "light_escape", null, !0)),
                            e.append("</div></div></a>")),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this),
                        e.append("</div>")
                    } else
                        twig.attr(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "conference"), "all_recordings_deleted") && (e.append('<p class="feed-note__recordings-deleted">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All recordings deleted"), "light_escape", null, !0)),
                        e.append("</p>"));
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_zoom_meeting"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/zoom_meeting", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="amojo-attach-item '),
                    "failed"in t && t.failed && e.append("amojo-attach-item_failed"),
                    e.append('js-attach-item" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('">'),
                    "picture" == ("file_type"in t ? t.file_type : "") || "video" == ("file_type"in t ? t.file_type : "") && "is_uploaded"in t && t.is_uploaded ? (e.append('<img class="amojo-attach-item-preview" src="'),
                    e.append(twig.filter.escape(this.env_, "src"in t ? t.src : "", "light_escape", null, !0)),
                    e.append('" alt="'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append('" />')) : "video" == ("file_type"in t ? t.file_type : "") ? (e.append('<video class="amojo-attach-item-preview" preload="metadata" title="'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append('"><source src="'),
                    e.append(twig.filter.escape(this.env_, "src"in t ? t.src : "", "light_escape", null, !0)),
                    e.append('" alt="'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append('"></video>')) : (e.append('<div class="amojo-attach-item-preview amojo-attach-item-preview__file" title="'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon amojo-attach-item-preview__file-icon"><use xlink:href="#common--export--load-file"></use></svg><div class="amojo-attach-item-preview__file-name">'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    e.append("</div></div>")),
                    "is_deletable"in t && t.is_deletable && e.append('<span class="amojo-attach-item-remove js-amojo-upload-loading-hidden js-attach-remove"><svg class="svg-icon amojo-attach-item-remove-icon"><use xlink:href="#common--remove-file"></use></svg></span>'),
                    e.append('<span class="amojo-attach-item-spinner js-amojo-upload-loading-shown"><span class="spinner-icon"></span></span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_amojo_attachment"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/amojo/attachment", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="feed-amojo__button" data-type="'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('" data-url="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('"><span class="feed-amojo__button-inner">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    "is_deletable"in t && t.is_deletable && e.append('<span class="feed-amojo__button-clear"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_amojo_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/amojo/button", t)
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
                    t.append('<div class="feed-compose__before"><div class="feed-compose-switcher"><span class="feed-compose-switcher__text">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "notes_grouped_chat"), 1)), "light_escape", null, !0)),
                    t.append('</span></div>&nbsp;<span class="feed-compose-linker">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "chat_with"), "light_escape", null, !0)),
                    t.append('</span>&nbsp;<div class="feed-compose-user-wrapper" id="feed_compose_user">'),
                    new (e._get("interface/notes/feed_user.twig"))(this.env_).render_(t, twig.extend({}, i, "user"in i ? i.user : "")),
                    t.append('</div><span class="feed-compose__before-colon">:</span><div class="feed-compose__quick-actions-wrapper">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "global_chat_control") ? t.append('<svg class="svg-icon svg-common--shortcuts-lightning-dims"><use xlink:href="#common--shortcuts-lightning"></use></svg>') : t.append('<div class="feed-compose-ai"><svg width="7" height="5" viewbox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.112355 0.177401C-0.0553751 0.388067 -0.0327125 0.705226 0.162973 0.885797L3.22071 3.881C3.40585 4.05185 3.68196 4.04043 3.85439 3.8548L6.86332 0.859597C7.04556 0.663401 7.04556 0.345305 6.86332 0.149109C6.68107 -0.0470867 6.3856 -0.0470867 6.20335 0.149109L3.5 2.81535L0.770377 0.12291C0.574692 -0.0576609 0.280085 -0.033264 0.112355 0.177401Z" fill="currentColor"/></svg><span class="spinner-icon" style="display: none;"></span></div>'),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_before_text = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-compose__talk-id" data-text="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Conversation") + " № A", "light_escape", null, !0)),
                    e.append('" data-empty-text="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "New conversation"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "talk_id"in t ? t.talk_id : "", "light_escape", null, !0)),
                    e.append('</div><div class="js-feed-compose-disabled-template feed-compose__disabled-template hidden"></div><div class="feed-compose__quotation js-quotation"></div><div class="feed-compose__attaches feed-amojo__attaches js-attachments"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_amojo_contenteditable"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/amojo/contenteditable", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.placeholder = twig.attr("_account_features"in i ? i._account_features : "", "global_chat_control") ? "Write a message..." : "Type here",
                    new (e._get("interface/notes/adding/amojo/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose__message-wrapper custom-scroll",
                        editable_class_name: "feed-compose__message",
                        controls_class_name: "js-control-contenteditable-amojo",
                        name: "text",
                        value: twig.attr("data"in i ? i.data : "", "text", void 0, void 0, !0) ? twig.filter.def(twig.attr("data"in i ? i.data : "", "text"), "") : "",
                        disabled: "amojo_disabled"in i ? i.amojo_disabled : "",
                        placeholder: "amojo_disabled"in i && i.amojo_disabled ? this.env_.filter("i18n", "Sorry, the service is not available at the moment") : this.env_.filter("i18n", "placeholder"in i ? i.placeholder : ""),
                        no_hint_transform: twig.attr("_account_features"in i ? i._account_features : "", "global_chat_control")
                    })),
                    t.append('<div class="js-feed-amojo__carousel feed-amojo__carousel"></div><div class="feed-amojo__buttons"></div>'),
                    "amojo_disabled"in i && i.amojo_disabled || (t.append('<div class="feed-compose__actions"><div class="js-control-file-attachment">'),
                    "attachment"in i && i.attachment && new (e._get("interface/notes/adding/amojo/attachment.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("attachment"in i ? i.attachment : "", "id"),
                        filename: twig.attr("attachment"in i ? i.attachment : "", "name")
                    })),
                    t.append('</div><div class="feed-amojo__actions"><div class="feed-amojo__actions-inner">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "send_message"),
                        class_name: "js-note-submit feed-note__button",
                        tab_index: "-1",
                        disabled: !0
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-amojo__voice-button feed-note__button_voice-record record-state_ready",
                        tab_index: "-1",
                        svg_class_name: "notes--voice-ready"
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-note-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    })),
                    t.append('<div class="feed-amojo__actions-shortener-wrapper">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        checked: !0,
                        text: this.env_.filter("i18n", "Shorten links"),
                        class_name: "feed-amojo__actions-shortener",
                        small: !0
                    })),
                    t.append('<div class="feed-amojo__actions-shortener-info"><div class="feed-amojo__actions-shortener-info__icon">?</div><div class="feed-amojo__actions-shortener-info__block"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Shrink your links and track clicks: When enabled, any URLs you send will be replaced with short links."), "light_escape", null, !0)),
                    t.append("</p><p>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Once clicked, a note will be added in the contact card."), "light_escape", null, !0)),
                    t.append("</p><p>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Select which sources use this feature"), "light_escape", null, !0)),
                    t.append('&nbsp;<a class="std-link js-navigate-link" href="/settings/communications/" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "in Settings"), "light_escape", null, !0)),
                    t.append("</a></p></div></div></div></div>"),
                    twig.attr("_account_features"in i ? i._account_features : "", "global_chat_control") && (t.append('<div class="feed-amojo__whatsapp-templates-overdue">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Templates cannot be edited"), "light_escape", null, !0)),
                    t.append('</div><div class="feed-amojo__actions-antispam-timer js-antispam-timer-wrapper" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Messaging session ends in"), "light_escape", null, !0)),
                    t.append('"><span class="feed-amojo__actions-antispam-timer-time js-antispam-timer hidden"></span><span class="feed-amojo__actions-antispam-timer-descr js-antispam-timer-descr">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Messaging session ends in"), "light_escape", null, !0)),
                    t.append(":</span></div>")),
                    new (e._get("interface/notes/adding/shortcuts_helper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        tooltip_type: twig.attr("_account_features"in i ? i._account_features : "", "global_chat_control") ? "global_chat" : "chat"
                    })),
                    new (e._get("interface/controls/airewriter/index.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/controls/emotions/index.twig"))(this.env_).render_(t, {
                        _account_features: "_account_features"in i ? i._account_features : ""
                    }),
                    t.append('<label for="note-edit-attach-filenew" class="feed-amojo__actions-attach js-amojo-attach"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg></label><input type="file" id="note-edit-attach-filenew" class="js-form-changes-skip hidden" tabindex="-1" name="UserFile" multiple /></div></div>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_amojo_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/amojo/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<span class="feed-amojo__whatsapp-templates-message js-control-contenteditable-interactive-placeholder">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Your messaging session is over, but you can still send a (template)"), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    "templates_empty"in t && t.templates_empty ? (e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "template"), "light_escape", null, !0)),
                    e.append('. <a href="/chats/tools/templates-and-bots/" class="feed-amojo__whatsapp-templates-button js-whatsapp-templates-hint">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create your first template"), "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="feed-amojo__whatsapp-templates-button js-whatsapp-templates-hint">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "template"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_amojo_time_window_templates"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/amojo/time_window_templates", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        clearer: twig.bind(this.block_clearer, this)
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
                t.prototype.block_clearer = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-compose__before"><div class="feed-compose-switcher"><span class="feed-compose-switcher__text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "welcome_tour_step3_note"), "light_escape", null, !0)),
                    e.append('</span></div><span class="feed-compose__before-colon">:</span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_note_contenteditable"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/note/contenteditable", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "contenteditable_tmpl"in i && i.contenteditable_tmpl || (i.contenteditable_tmpl = "interface/notes/adding/note/contenteditable.twig"),
                    new (e._get("contenteditable_tmpl"in i ? i.contenteditable_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose__message-wrapper custom-scroll",
                        editable_class_name: "feed-compose__message",
                        name: "text",
                        value: twig.attr("data"in i ? i.data : "", "text", void 0, void 0, !0) ? twig.filter.def(twig.attr("data"in i ? i.data : "", "text"), "") : "",
                        no_hint_transform: "no_hint_transform"in i ? i.no_hint_transform : "",
                        placeholder: "placeholder"in i ? twig.filter.def("placeholder"in i ? i.placeholder : "", this.env_.filter("i18n", "Type here")) : this.env_.filter("i18n", "Type here")
                    })),
                    t.append('<div class="feed-compose__actions"><div class="feed-compose__attaches js-attachments"></div><div class="feed-note__actions"><div class="feed-note__actions-inner">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Add"),
                        class_name: "js-note-submit feed-note__button",
                        tab_index: "-1",
                        disabled: !0
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel"),
                        class_name: "js-note-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/notes/adding/shortcuts_helper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        tooltip_type: "tooltip_type"in i ? twig.filter.def("tooltip_type"in i ? i.tooltip_type : "", "note") : "note"
                    })),
                    new (e._get("interface/controls/airewriter/index.twig"))(this.env_).render_(t, i),
                    t.append('<label for="note-edit-attach-filenew" class="feed-note__actions-attach"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg></label><input type="file" id="note-edit-attach-filenew" class="js-form-changes-skip hidden" tabindex="-1" name="UserFile" multiple /></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_note_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/note/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        clearer: twig.bind(this.block_clearer, this)
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
                t.prototype.block_clearer = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-compose__before"><div class="feed-compose-switcher"><span class="feed-compose-switcher__text">'),
                    e.append(twig.filter.escape(this.env_, "source_name"in t ? t.source_name : "", "light_escape", null, !0)),
                    e.append("</span></div>&nbsp;"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "task_for"), "light_escape", null, !0)),
                    e.append('&nbsp;<div class="compose-sms-header__field"><div class="feed-compose_sms-phones__select '),
                    "disable_list"in t && t.disable_list && e.append("disabled"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("phone"in t ? t.phone : "", "text"), "light_escape", null, !0)),
                    e.append('</div><input class="feed-compose_sms-phone__input" type="hidden" name="phone" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("phone"in t ? t.phone : "", "id"), "light_escape", null, !0)),
                    e.append('"><input class="feed-compose_sms-contact-id__input" type="hidden" name="contact_id" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("phone"in t ? t.phone : "", "value"), "light_escape", null, !0)),
                    e.append('"></div><span class="feed-compose__before-colon">:</span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_sms_contenteditable"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/sms/contenteditable", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    new (e._get("interface/notes/adding/sms/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose__message-wrapper custom-scroll",
                        editable_class_name: "feed-compose__message",
                        name: "text",
                        value: twig.attr("data"in i ? i.data : "", "text", void 0, void 0, !0) ? twig.filter.def(twig.attr("data"in i ? i.data : "", "text"), "") : "",
                        placeholder: this.env_.filter("i18n", "Type here")
                    })),
                    t.append('<div class="feed-compose__actions"><div class="feed-amojo__actions"><div class="feed-amojo__actions-inner">'),
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
                    new (e._get("interface/notes/adding/shortcuts_helper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        tooltip_type: "sms"
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_adding_sms_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/adding/sms/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/field_changed/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__field-changed-wrapper">'),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value") ? twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value") > twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value") ? (i.value = twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value") - twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value"),
                    t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Bonus points were earned"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", "value"in i ? i.value : "", "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), "value"in i ? i.value : ""), "light_escape", null, !0)),
                    t.append('.&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Bonus points current value"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append("</span>")) : (i.value = twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value") - twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"),
                    t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Bonus points were redeemed"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", "value"in i ? i.value : "", "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), "value"in i ? i.value : ""), "light_escape", null, !0)),
                    t.append('.&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Bonus points current value"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append("</span>")) : (t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Bonus points were earned"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "point,points,points"), twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value")), "light_escape", null, !0)),
                    t.append('.&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Bonus points current value"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append("</span>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_field_changed_bonus_points_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/field_changed/bonus_points_changed", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_system = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__field-changed-wrapper">'),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value") ? twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value") ? (t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value was changed 1"), {
                        "#FIELD_NAME#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "field_id"), "name", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append('&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value was changed 2"), {
                        "#FIELD_VALUE1#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append('&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value was changed 3"), {
                        "#FIELD_VALUE2#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append("</span>")) : (t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value removed 1"), {
                        "#FIELD_NAME#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "field_id"), "name", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append('&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value removed 2"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append("</span>")) : (t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field set 1"), {
                        "#FIELD_NAME#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "field_id"), "name", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append('&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field set 2"), {
                        "#FIELD_VALUE#": this.env_.filter("feed_cf", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value", twig.attr("data"in i ? i.data : "", "params"))
                    })),
                    t.append("</span>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_field_changed_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/field_changed/index", t)
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
                    return e._get("interface/notes/types/field_changed/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__field-changed-wrapper">'),
                    i.change_type = twig.attr(twig.attr("data"in i ? i.data : "", "params"), "change_type"),
                    "quantity" == ("change_type"in i ? i.change_type : "") ? i.change_desctiprion = twig.filter.replace(this.env_.filter("i18n", "Product quantity changed"), {
                        "#PRODUCT_NAME#": twig.attr(twig.attr("data"in i ? i.data : "", "params"), "product_name")
                    }) : "unit_price" == ("change_type"in i ? i.change_type : "") ? i.change_desctiprion = twig.filter.replace(this.env_.filter("i18n", "Product price changed"), {
                        "#PRODUCT_NAME#": twig.attr(twig.attr("data"in i ? i.data : "", "params"), "product_name")
                    }) : "discount" == ("change_type"in i ? i.change_type : "") ? i.change_desctiprion = twig.filter.replace(this.env_.filter("i18n", "Product discount changed"), {
                        "#PRODUCT_NAME#": twig.attr(twig.attr("data"in i ? i.data : "", "params"), "product_name")
                    }) : "sku" == ("change_type"in i ? i.change_type : "") && (i.change_desctiprion = twig.filter.replace(this.env_.filter("i18n", "Product article changed"), {
                        "#PRODUCT_NAME#": twig.attr(twig.attr("data"in i ? i.data : "", "params"), "product_name")
                    })),
                    "change_type"in i && i.change_type ? ("discount" == ("change_type"in i ? i.change_type : "") ? ("percentage" == twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value"), "value"), "type") && (i.old_symbol = "%"),
                    "percentage" == twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value"), "type") && (i.new_symbol = "%"),
                    i.old_value = twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value"), "value"), "value") + ("old_symbol"in i ? i.old_symbol : ""),
                    i.new_value = twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value"), "value") + ("new_symbol"in i ? i.new_symbol : "")) : (i.old_value = twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value"), "value"),
                    i.new_value = twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value"), "value")),
                    t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.escape(this.env_, "change_desctiprion"in i ? i.change_desctiprion : "", "light_escape", null, !0)),
                    t.append('&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value was changed 2"), {
                        "#FIELD_VALUE1#": "old_value"in i ? i.old_value : ""
                    })),
                    t.append('&nbsp;</span><span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Feed field value was changed 3"), {
                        "#FIELD_VALUE2#": "new_value"in i ? i.new_value : ""
                    })),
                    t.append("</span>")) : twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value") ? (t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Invoice item added"), {
                        "#FIELD_VALUE#": twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_value")
                    })),
                    t.append("</span>")) : twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value") && (t.append('<span class="feed-note__field-changed-item">'),
                    t.append(twig.filter.replace(this.env_.filter("i18n", "Invoice item deleted"), {
                        "#FIELD_VALUE#": twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_value")
                    })),
                    t.append("</span>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_field_changed_invoice_items_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/field_changed/invoice_items_changed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/field_changed/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="feed-note__status-changed-wrapper"><span class="feed-note__status-before">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "New status"), "light_escape", null, !0)),
                    t.append("</span>"),
                    i.status_enums = this.env_.filter("cf_enums", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "field_id")),
                    i.status_color = twig.attr(twig.attr(twig.attr("status_enums"in i ? i.status_enums : "", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_enum_id"), void 0, "array"), "settings"), "color") ? twig.attr(twig.attr(twig.attr("status_enums"in i ? i.status_enums : "", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_enum_id"), void 0, "array"), "settings"), "color") : "",
                    i.status_name = twig.attr(twig.attr("status_enums"in i ? i.status_enums : "", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_enum_id"), void 0, "array"), "VALUE") ? twig.attr(twig.attr("status_enums"in i ? i.status_enums : "", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "new_enum_id"), void 0, "array"), "VALUE") : this.env_.filter("i18n", "Deleted"),
                    twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_enum_id") && (i.old_status_name = twig.attr(twig.attr("status_enums"in i ? i.status_enums : "", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_enum_id"), void 0, "array"), "VALUE") ? twig.attr(twig.attr("status_enums"in i ? i.status_enums : "", twig.attr(twig.attr("data"in i ? i.data : "", "params"), "old_enum_id"), void 0, "array"), "VALUE") : this.env_.filter("i18n", "Deleted")),
                    t.append('<div class="feed-note__pipeline-status" '),
                    twig.empty("status_color"in i ? i.status_color : "") || (t.append('style="background-color: '),
                    t.append(twig.filter.escape(this.env_, "status_color"in i ? i.status_color : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(' title="'),
                    t.append(twig.filter.escape(this.env_, "status_name"in i ? i.status_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "status_name"in i ? i.status_name : "", "light_escape", null, !0)),
                    t.append("</div>"),
                    "old_status_name"in i && i.old_status_name && (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "from old status"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "old_status_name"in i ? i.old_status_name : "", "light_escape", null, !0))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_field_changed_invoice_status_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/field_changed/invoice_status_changed", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.date = "created_at"in t ? t.created_at : "",
                    t.icon = "notes--feed-chat",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.l = twig.filter.length(this.env_, "names"in i ? i.names : ""),
                    i.margin_mod = 1,
                    ("l"in i ? i.l : "") > 2 && (i.margin_mod = 2),
                    ("l"in i ? i.l : "") > 4 && (i.margin_mod = 3),
                    t.append('<div class="feed-note__avatar-group feed-note__avatar-group-'),
                    t.append(twig.filter.escape(this.env_, "margin_mod"in i ? i.margin_mod : "", "light_escape", null, !0)),
                    t.append(' js-grouped-expand">'),
                    i._parent = i;
                    var a = "authors"in i ? i.authors : ""
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
                        i.author = n,
                        new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("author"in i ? i.author : "", "id"),
                            url: twig.attr("author"in i ? i.author : "", "avatar")
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.block_header = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.numeral_lang = twig.attr("lang"in t ? t.lang : "", "notes_grouped_chat"),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", "numeral_lang"in t ? t.numeral_lang : "", "count"in t ? t.count : ""), "light_escape", null, !0)),
                    e.append('&nbsp;<a href="#" class="feed-note__blue-link js-grouped-expand">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_grouped_expand")), "light_escape", null, !0)),
                    e.append("</a>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_amojo"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/amojo", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-note-grouped-complex__accordion"></div><div class="feed-note__body-subviews feed-note__body-subviews_amojo-ex"><div class="js-feed-note-head feed-note__head">'),
                    new (e._get("interface/notes/types/grouped/amojo_ex_head.twig"))(this.env_).render_(t, {
                        show_source: "show_source"in i ? i.show_source : "",
                        origin_icon: "origin_icon"in i ? i.origin_icon : "",
                        source_name: "source_name"in i ? i.source_name : "",
                        is_instagram_comments_talk: "is_instagram_comments_talk"in i ? i.is_instagram_comments_talk : "",
                        thread_last_message_id: "thread_last_message_id"in i ? i.thread_last_message_id : "",
                        thread_last_message_at: "thread_last_message_at"in i ? i.thread_last_message_at : "",
                        message_attributes: "message_attributes"in i ? i.message_attributes : "",
                        _account_features: "_account_features"in i ? i._account_features : ""
                    }),
                    t.append("</div>"),
                    "is_incoming"in i && i.is_incoming || !("replied_to"in i) || !i.replied_to || "is_instagram_comments_talk"in i && i.is_instagram_comments_talk ? t.append('<div class="js-show-more feed-note__show-more feed-note__show-more_centered"></div>') : (t.append('<div class="feed-note__replied-to"><div class="feed-note__icon feed-note__icon_replied-to"><span class="feed-note__avatar" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("replied_to"in i ? i.replied_to : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("replied_to"in i ? i.replied_to : "", "avatar"),
                        id: twig.attr("replied_to"in i ? i.replied_to : "", "id")
                    })),
                    t.append("</span>"),
                    "origin"in i && i.origin && (t.append('<span class="feed-note__icon-origin">'),
                    "origin_icon"in i && i.origin_icon && (t.append('<img src="'),
                    t.append(twig.filter.escape(this.env_, "origin_icon"in i ? i.origin_icon : "", "light_escape", null, !0)),
                    t.append('"/>')),
                    t.append("</span>")),
                    t.append('</div><div class="feed-note__replied-to-name">'),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("replied_to"in i ? i.replied_to : "", "amojo_id"),
                        name: twig.attr("replied_to"in i ? i.replied_to : "", "name"),
                        user_type: "recipient",
                        external_author_name: null
                    })),
                    t.append('</div><div class="feed-note__replied-to-show-more"><div class="js-show-more feed-note__show-more"></div></div></div>')),
                    t.append('<div class="js-grouped-subviews"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_amojo_ex"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/amojo_ex", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "show_source"in t && t.show_source && (e.append('<div class="feed-note__body-subviews-source">'),
                    "origin_icon"in t && t.origin_icon && (e.append('<img src="'),
                    e.append(twig.filter.escape(this.env_, "origin_icon"in t ? t.origin_icon : "", "light_escape", null, !0)),
                    e.append('" class="feed-note__body-subviews-source-img">')),
                    e.append('<div class="feed-note__body-subviews-source-name h-text-overflow" title="'),
                    e.append(twig.filter.escape(this.env_, "source_name"in t ? t.source_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("slice", this.env_, "source_name"in t ? t.source_name : "", 0, 49), "light_escape", null, !0)),
                    twig.filter.length(this.env_, "source_name"in t ? t.source_name : "") > 50 && e.append("..."),
                    e.append("</div></div>")),
                    twig.attr("_account_features"in t ? t._account_features : "", "ig_replies_to_comments") && "is_instagram_comments_talk"in t && t.is_instagram_comments_talk && "thread_last_message_id"in t && t.thread_last_message_id && !twig.attr(twig.attr("message_attributes"in t ? t.message_attributes : "", "facebook"), "media") && (e.append('<span class="js-return-to-thread feed-note__return-to-thread" data-thread-last-message-timestamp="'),
                    e.append(twig.filter.escape(this.env_, "thread_last_message_at"in t ? t.thread_last_message_at : "", "light_escape", null, !0)),
                    e.append('" data-thread-last-message-id="'),
                    e.append(twig.filter.escape(this.env_, "thread_last_message_id"in t ? t.thread_last_message_id : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Return to comment thread"), "light_escape", null, !0)),
                    e.append("</span>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_amojo_ex_head"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/amojo_ex_head", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="feed-note-grouped-complex__accordion"></div><div class="js-grouped-subviews feed-note__body-subviews '),
                    "icon_direction"in t && t.icon_direction || e.append("feed-note__body-subviews_no-direction"),
                    e.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_complex"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/complex", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="feed-note__grouped-content">'),
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, i),
                    i.numeral_lang = twig.attr("lang"in i ? i.lang : "", "notes_grouped_events"),
                    "mail_message" == ("template"in i ? i.template : "") && (i.numeral_lang = twig.attr("lang"in i ? i.lang : "", "notes_grouped_mail")),
                    "call_in" != ("template"in i ? i.template : "") && "call_out" != ("template"in i ? i.template : "") || (i.numeral_lang = twig.attr("lang"in i ? i.lang : "", "notes_grouped_call")),
                    "amojo" == ("template"in i ? i.template : "") && (i.numeral_lang = twig.attr("lang"in i ? i.lang : "", "notes_grouped_chat")),
                    "main_user_changed" == ("template"in i ? i.template : "") && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_grouped_responsible"), "light_escape", null, !0)),
                    t.append(":&nbsp;")),
                    "event" == twig.attr("object_type"in i ? i.object_type : "", "code") && twig.contains([24], "type"in i ? i.type : "") && (i.numeral_lang = twig.attr("lang"in i ? i.lang : "", "notes_grouped_events"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Changing the field", void 0, "array"), "light_escape", null, !0)),
                    t.append(":&nbsp;")),
                    "notes" == twig.attr("object_type"in i ? i.object_type : "", "code") && twig.contains([16, 18, 19, 20, 26, 27], "type"in i ? i.type : "") && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_grouped_dp"), "light_escape", null, !0)),
                    t.append(":&nbsp;")),
                    ("notes" == twig.attr("object_type"in i ? i.object_type : "", "code") && twig.contains([1, 2, 12, 22], "type"in i ? i.type : "") || "event" == twig.attr("object_type"in i ? i.object_type : "", "code") && twig.contains([1, 2, 3, 20], "type"in i ? i.type : "")) && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_grouped_creating"), "light_escape", null, !0)),
                    t.append(":&nbsp;")),
                    t.append('<span class="feed-note__grouped-content-expand">'),
                    t.append(twig.filter.escape(this.env_, "count"in i ? i.count : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", "numeral_lang"in i ? i.numeral_lang : "", "count"in i ? i.count : ""), "light_escape", null, !0)),
                    t.append('</span>&nbsp;<a href="#" class="feed-note__blue-link js-grouped-expand">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_grouped_expand")), "light_escape", null, !0)),
                    t.append("</a></div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/index", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.date = "created_at"in t ? t.created_at : "",
                    t.icon = "notes--feed-chat",
                    t.note_body_class_name = "feed-note__content-online-" + twig.attr("author"in t ? t.author : "", "id"),
                    t.wrapper_class_name = "feed__note-user-interaction-item",
                    t.typing = this.env_.filter("i18n", "typing..."),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.l = twig.filter.length(this.env_, "names"in i ? i.names : ""),
                    i.margin_mod = 1,
                    ("l"in i ? i.l : "") > 2 && (i.margin_mod = 2),
                    ("l"in i ? i.l : "") > 4 && (i.margin_mod = 3),
                    t.append('<div class="feed-note__avatar-group feed-note__avatar-group-'),
                    t.append(twig.filter.escape(this.env_, "margin_mod"in i ? i.margin_mod : "", "light_escape", null, !0)),
                    t.append(' js-grouped-expand">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("author"in i ? i.author : "", "id"),
                        url: twig.attr("author"in i ? i.author : "", "avatar")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_header = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, twig.attr("author"in t ? t.author : "", "name"), "light_escape", null, !0)),
                    e.append(' <div class="feed-note__user-in-card-description">&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "work with the card"), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="feed-note_user-in-card-type">'),
                    e.append(twig.filter.escape(this.env_, "typing"in t ? t.typing : "", "light_escape", null, !0)),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_user_online_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/user_online_item", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.hide_linked = !0,
                    t.date = "created_at"in t ? t.created_at : "",
                    t.icon = "notes--feed-chat",
                    t.users_online_count = twig.filter.length(this.env_, "authors"in t ? t.authors : ""),
                    t.typing_count = twig.filter.length(this.env_, "authors_typing"in t ? t.authors_typing : ""),
                    t.users_in_card_lang = this.env_.filter("numeral", this.env_.filter("i18n", "users"), "users_online_count"in t ? t.users_online_count : ""),
                    t.users_typing_lang = this.env_.filter("numeral", this.env_.filter("i18n", "users"), ("typing_count"in t ? t.typing_count : "") - 3),
                    ("users_online_count"in t ? t.users_online_count : "") % 10 != 1 ? t.users_work_lang = this.env_.filter("i18n", "work with the card many") : t.users_work_lang = this.env_.filter("i18n", "work with the card"),
                    ("typing_count"in t ? t.typing_count : "") % 10 == 1 ? t.typing_lang = this.env_.filter("i18n", "typing...") : t.typing_lang = this.env_.filter("i18n", "typing_many..."),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.l = twig.filter.length(this.env_, "names"in i ? i.names : ""),
                    i.margin_mod = 1,
                    ("l"in i ? i.l : "") > 2 && (i.margin_mod = 2),
                    ("l"in i ? i.l : "") > 4 && (i.margin_mod = 3),
                    t.append('<div class="feed-note__avatar-group feed-note__avatar-group-'),
                    t.append(twig.filter.escape(this.env_, "margin_mod"in i ? i.margin_mod : "", "light_escape", null, !0)),
                    t.append(' js-grouped-expand">'),
                    i._parent = i;
                    var a = "authors"in i ? i.authors : ""
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
                        i.key = a,
                        i.author = n,
                        ("key"in i ? i.key : "") < 3 && new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("author"in i ? i.author : "", "id"),
                            url: twig.attr("author"in i ? i.author : "", "avatar")
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    ("users_online_count"in i ? i.users_online_count : "") > 3 && (t.append('<div class="feed-note__avatar-group feed-note__hidden-avatars" >+'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "authors"in i ? i.authors : "") - 3, "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_header = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    t.users_online = "",
                    ("users_online_count"in t ? t.users_online_count : "") < 4) {
                        t._parent = t;
                        var n = "authors"in t ? t.authors : "";
                        twig.forEach(n, (function(e, i) {
                            t.key = i,
                            t.author = e,
                            t.users_online = ("users_online"in t ? t.users_online : "") + twig.attr("author"in t ? t.author : "", "name"),
                            ("key"in t ? t.key : "") != ("users_online_count"in t ? t.users_online_count : "") - 1 && (("key"in t ? t.key : "") != ("users_online_count"in t ? t.users_online_count : "") - 2 ? t.users_online = ("users_online"in t ? t.users_online : "") + ", " : t.users_online = ("users_online"in t ? t.users_online : "") + " " + this.env_.filter("i18n", "AND") + " ")
                        }
                        ), this),
                        t.users_online = ("users_online"in t ? t.users_online : "") + " " + ("users_work_lang"in t ? t.users_work_lang : ""),
                        e.append(twig.filter.escape(this.env_, "users_online"in t ? t.users_online : "", "light_escape", null, !0))
                    } else
                        e.append(twig.filter.escape(this.env_, ("users_online_count"in t ? t.users_online_count : "") + " " + ("users_in_card_lang"in t ? t.users_in_card_lang : "") + " " + ("users_work_lang"in t ? t.users_work_lang : "") + " ", "light_escape", null, !0)),
                        e.append('<a href="#" class="feed-note__blue-link js-grouped-expand-interaction">'),
                        e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_grouped_expand")), "light_escape", null, !0)),
                        e.append("</a>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    ("typing_count"in t ? t.typing_count : "") > 0) {
                        t.typing_users = "",
                        t._parent = t;
                        var n = "authors_typing"in t ? t.authors_typing : "";
                        twig.forEach(n, (function(e, i) {
                            t.key = i,
                            t.author = e,
                            ("key"in t ? t.key : "") < 3 && (t.typing_users = ("typing_users"in t ? t.typing_users : "") + twig.attr("author"in t ? t.author : "", "name"),
                            ("key"in t ? t.key : "") != ("typing_count"in t ? t.typing_count : "") - 1 && ("key"in t ? t.key : "") < 2 && (t.typing_users = ("typing_users"in t ? t.typing_users : "") + ", "))
                        }
                        ), this),
                        ("typing_count"in t ? t.typing_count : "") > 3 && (t.typing_users = ("typing_users"in t ? t.typing_users : "") + " " + this.env_.filter("i18n", "And other") + " " + (("typing_count"in t ? t.typing_count : "") - 3) + " " + ("users_typing_lang"in t ? t.users_typing_lang : "") + " "),
                        e.append(twig.filter.escape(this.env_, ("typing_users"in t ? t.typing_users : "") + " " + ("typing_lang"in t ? t.typing_lang : ""), "light_escape", null, !0))
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_grouped_users_online"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/grouped/users_online", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "name" == ("code"in i ? i.code : "") ? (t.append('<td class="merge_event__row merge_event__row-name" colspan="2"><a href="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("element_link", "element_id"in i ? i.element_id : "", "element_type"in i ? i.element_type : ""), "light_escape", null, !0)),
                    t.append('">'),
                    2 == ("element_type"in i ? i.element_type : "") ? t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "name"), "element_id"in i ? i.element_id : "")), "light_escape", null, !0)) : 1 == ("element_type"in i ? i.element_type : "") ? t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "name"))), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "name")), "light_escape", null, !0)),
                    t.append('</a></td><td class="merge_event__row merge_event__row-name merge_event__row-double">'),
                    2 == ("element_type"in i ? i.element_type : "") ? t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, this.env_.filter("lead_name", "value"in i ? i.value : "", twig.attr(twig.attr("double_params"in i ? i.double_params : "", "base_fields"), "id"))), "light_escape", null, !0)) : 1 == ("element_type"in i ? i.element_type : "") ? t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, this.env_.filter("contact_name", "value"in i ? i.value : "")), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, "value"in i ? i.value : ""), "light_escape", null, !0)),
                    t.append("</td>")) : "status" == ("code"in i ? i.code : "") ? (t.append('<td class="merge_event__row merge_event__row-field_name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "lead_status"), "light_escape", null, !0)),
                    t.append('</td><td class="merge_event__row">'),
                    new (e._get("interface/notes/types/merge/merge_status_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        extra: "extra"in i ? i.extra : "",
                        pipeline_id: twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "pipeline_id"),
                        status_id: twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "status")
                    })),
                    t.append('</td><td class="merge_event__row merge_event__row-double">'),
                    new (e._get("interface/notes/types/merge/merge_status_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        extra: "extra"in i ? i.extra : "",
                        pipeline_id: twig.attr(twig.attr("double_params"in i ? i.double_params : "", "base_fields"), "pipeline_id"),
                        status_id: "value"in i ? i.value : ""
                    })),
                    t.append("</td>")) : "date_create" == ("code"in i ? i.code : "") ? (t.append('<td class="merge_event__row merge_event__row-field_name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "date_create"), "light_escape", null, !0)),
                    t.append('</td><td class="merge_event__row">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "date_create"), "full"), "light_escape", null, !0)),
                    t.append('</td><td class="merge_event__row merge_event__row-double">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", "value"in i ? i.value : "", "full"), "light_escape", null, !0)),
                    t.append("</td>")) : "price" == ("code"in i ? i.code : "") ? (t.append('<td class="merge_event__row merge_event__row-field_name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "lead_price"), "light_escape", null, !0)),
                    t.append('</td><td class="merge_event__row">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "price")), "light_escape", null, !0)),
                    t.append('</td><td class="merge_event__row merge_event__row-double">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", "value"in i ? i.value : ""), "light_escape", null, !0)),
                    t.append("</td>")) : "main_user_id" == ("code"in i ? i.code : "") && (t.append('<td class="merge_event__row merge_event__row-field_name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "responsible_user"), "light_escape", null, !0)),
                    t.append("</td>"),
                    new (e._get("interface/notes/types/merge/merge_user_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        extra: "extra"in i ? i.extra : "",
                        user_id: twig.attr(twig.attr(twig.attr(twig.attr("data"in i ? i.data : "", "params"), "main"), "base_fields"), "main_user_id")
                    })),
                    new (e._get("interface/notes/types/merge/merge_user_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        extra: "extra"in i ? i.extra : "",
                        user_id: "value"in i ? i.value : "",
                        class: "merge_event__row-double"
                    })))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_merge_merge_base_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/merge/merge_base_field", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    this.env_.test("iterable", "value"in t ? t.value : "")) {
                        e.append('<td class="merge_event__row '),
                        e.append(twig.filter.escape(this.env_, "class"in t ? twig.filter.def("class"in t ? t.class : "", "") : "", "light_escape", null, !0)),
                        e.append('">'),
                        t._parent = t;
                        var n = "value"in t ? t.value : "";
                        twig.forEach(n, (function(i, n) {
                            if (t.subtype_code = n,
                            t.subtype_value = i,
                            e.append("<div>"),
                            t.params = {
                                subtype_code: "subtype_code"in t ? t.subtype_code : "",
                                subtype_value: "subtype_value"in t ? t.subtype_value : ""
                            },
                            t.subtype_value = this.env_.filter("feed_merge", "code"in t ? t.code : "", "value", "params"in t ? t.params : ""),
                            this.env_.test("iterable", "subtype_value"in t ? t.subtype_value : "")) {
                                var a = "subtype_value"in t ? t.subtype_value : "";
                                twig.forEach(a, (function(i, n) {
                                    t._key = n,
                                    t.sub_value = i,
                                    e.append("<div>"),
                                    e.append(twig.filter.escape(this.env_, "sub_value"in t ? t.sub_value : "", "light_escape", null, !0)),
                                    e.append("</div>")
                                }
                                ), this)
                            } else
                                e.append(twig.filter.escape(this.env_, "subtype_value"in t ? t.subtype_value : "", "light_escape", null, !0));
                            e.append("</div>")
                        }
                        ), this),
                        e.append("</td>")
                    } else
                        e.append('<td class="merge_event__row '),
                        e.append(twig.filter.escape(this.env_, "class"in t ? twig.filter.def("class"in t ? t.class : "", "") : "", "light_escape", null, !0)),
                        e.append('">'),
                        e.append(this.env_.filter("feed_merge", "code"in t ? t.code : "", "value", "value"in t ? t.value : "")),
                        e.append("</td>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_merge_merge_custom_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/merge/merge_custom_field", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    this.env_.test("iterable", "links"in t ? t.links : "")) {
                        t._parent = t;
                        var n = "links"in t ? t.links : "";
                        twig.forEach(n, (function(i, n) {
                            if (t.type = n,
                            t.type_links = i,
                            t.hidden_type_links = twig.attr("hidden_links"in t ? t.hidden_links : "", "type"in t ? t.type : "", void 0, "array", !0) ? twig.filter.def(twig.attr("hidden_links"in t ? t.hidden_links : "", "type"in t ? t.type : "", void 0, "array"), []) : [],
                            this.env_.test("iterable", "type_links"in t ? t.type_links : "")) {
                                e.append('<div class="merge_event__row-link">'),
                                t.link_values = [];
                                var a = "type_links"in t ? t.type_links : "";
                                twig.forEach(a, (function(e, i) {
                                    t.link_id = i,
                                    t.link_name = e,
                                    2 == ("type"in t ? t.type : "") && (t.link_name = this.env_.filter("lead_name", "link_name"in t ? t.link_name : "", "link_id"in t ? t.link_id : "")),
                                    t.link_name = twig.filter.escape(this.env_, "link_name"in t ? t.link_name : ""),
                                    twig.contains("hidden_type_links"in t ? t.hidden_type_links : "", this.env_.filter("round", "link_id"in t ? t.link_id : "")) ? t.link_value = "link_name"in t ? t.link_name : "" : t.link_value = '<a href="' + this.env_.filter("element_link", "link_id"in t ? t.link_id : "", "type"in t ? t.type : "") + '">' + ("link_name"in t ? t.link_name : "") + "</a>",
                                    t.link_values = twig.filter.merge("link_values"in t ? t.link_values : "", ["link_value"in t ? t.link_value : ""])
                                }
                                ), this),
                                e.append(twig.filter.join("link_values"in t ? t.link_values : "", ", ")),
                                e.append("</div>")
                            }
                        }
                        ), this)
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_merge_merge_links"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/merge/merge_links", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.has_pipelines = twig.filter.length(this.env_, twig.attr("extra"in t ? t.extra : "", "pipelines")) > 1,
                    142 == ("status_id"in t ? t.status_id : "") || 143 == ("status_id"in t ? t.status_id : "") && "has_pipelines"in t && t.has_pipelines ? t.pipeline = twig.attr(twig.attr("extra"in t ? t.extra : "", "pipelines"), "pipeline_id"in t ? t.pipeline_id : "", void 0, "array") : t.pipeline = twig.attr(twig.attr("extra"in t ? t.extra : "", "pipelines"), twig.attr(twig.attr("extra"in t ? t.extra : "", "statuses"), "status_id"in t ? t.status_id : "", void 0, "array"), void 0, "array"),
                    t.status = twig.attr(twig.attr("pipeline"in t ? t.pipeline : "", "statuses"), "status_id"in t ? t.status_id : "", void 0, "array"),
                    "has_pipelines"in t && t.has_pipelines && (e.append('<div class="feed-note__pipeline"><div class="feed-note__pipeline-name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("pipeline"in t ? t.pipeline : "", "name"), "light_escape", null, !0)),
                    e.append('<div class="feed-note__pipeline-name__fade"></div></div>')),
                    e.append('<div class="feed-note__pipeline-status" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("status"in t ? t.status : "", "color"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("status"in t ? t.status : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("status"in t ? t.status : "", "name"), "light_escape", null, !0)),
                    e.append('<div class="feed-note__pipeline-status__fade" style="background: linear-gradient(to right, transparent 90px, '),
                    e.append(twig.filter.escape(this.env_, twig.attr("status"in t ? t.status : "", "color", void 0, void 0, !0) ? twig.filter.def(twig.attr("status"in t ? t.status : "", "color"), "#F5F5F5") : "#F5F5F5", "light_escape", null, !0)),
                    e.append(');"></div></div>'),
                    "has_pipelines"in t && t.has_pipelines && e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_merge_merge_status_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/merge/merge_status_field", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    0 == ("user_id"in t ? t.user_id : "") ? t.value = twig.attr("lang"in t ? t.lang : "", "Bot") : t.value = twig.attr(twig.attr(twig.attr("extra"in t ? t.extra : "", "users"), "user_id"in t ? t.user_id : "", void 0, "array"), "full_name", void 0, "array"),
                    e.append('<td class="merge_event__row '),
                    e.append(twig.filter.escape(this.env_, "class"in t ? twig.filter.def("class"in t ? t.class : "", "") : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</td>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_merge_merge_user_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/merge/merge_user_field", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.note_class_name = "feed-note-wo-meta",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/types/amojo/avatar.twig"))(this.env_).render_(t, {
                        amo_author: "amo_author"in i ? i.amo_author : "",
                        author: "author"in i ? i.author : "",
                        origin: "origin"in i ? i.origin : "",
                        origin_icon: "origin_icon"in i ? i.origin_icon : ""
                    })
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : "",
                        date_create: "date_create"in i ? i.date_create : "",
                        compact_date: "compact_date"in i ? i.compact_date : "",
                        format: "format"in i ? i.format : "",
                        system_props: "system_props"in i ? i.system_props : "",
                        search_highlighted: "search_highlighted"in i ? i.search_highlighted : "",
                        search_highlight_active: "search_highlight_active"in i ? i.search_highlight_active : "",
                        control_classname: ""
                    })),
                    new (e._get("interface/notes/defaults/user.twig"))(this.env_).render_(t, {
                        user: twig.attr("amo_author"in i ? i.amo_author : "", "name"),
                        created_by: twig.attr("amo_author"in i ? i.amo_author : "", "id"),
                        author_name: "author_name"in i ? i.author_name : "",
                        lang: "lang"in i ? i.lang : "",
                        extra: "extra"in i ? i.extra : ""
                    })
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.origin_profile = this.env_.filter("json_decode", twig.attr("author"in t ? t.author : "", "origin_profile")),
                    e.append('<div class="feed-note__joined-attach"><div class="feed-note__media-preview--stories-wrapper"><div class="feed-note__media-preview--mention-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("amo_author"in t ? t.amo_author : "", "name"), "light_escape", null, !0)),
                    e.append("<br>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Commented"), "light_escape", null, !0)),
                    e.append('</div><a class="feed-note__media-preview--commented-post" href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('" target="_blank"><img class="feed-note__media-preview__commented-post-picture" src="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("media"in t ? t.media : "", "url"), "light_escape", null, !0)),
                    e.append('"></a><div class="feed-note__media-preview-post-meta"><span class="feed-note__media-preview-post-author">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("media"in t ? t.media : "", "username"), "light_escape", null, !0)),
                    e.append('</span> <span class="feed-note__media-preview-post-caption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("media"in t ? t.media : "", "caption"), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_amojo_content_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/amojo_content_card", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.conversation_text = this.env_.filter("i18n", "Conversation"),
                    i.dialog_number = "№ A" + twig.attr("dialog"in i ? i.dialog : "", "id"),
                    i.summaraize_title = this.env_.filter("i18n", "Summarize"),
                    i.isShowEmotion = twig.attr("dialog"in i ? i.dialog : "", "is_emotion_detector_enabled") && "NEUTRAL" != twig.attr("dialog"in i ? i.dialog : "", "emotion"),
                    i.child_count = 0,
                    i.min_elements_to_control = 2,
                    i.is_selectable_dialog = !0,
                    twig.attr("dialog"in i ? i.dialog : "", "opened") ? twig.attr("dialog"in i ? i.dialog : "", "opened") && (i.child_count = Number("child_count"in i ? i.child_count : "") + Number(1),
                    twig.attr("dialog"in i ? i.dialog : "", "is_last") && (i.child_count = Number("child_count"in i ? i.child_count : "") + Number(1),
                    1 == twig.attr("dialog"in i ? i.dialog : "", "auto_close") && (i.child_count = Number("child_count"in i ? i.child_count : "") + Number(1)),
                    0 == twig.attr("dialog"in i ? i.dialog : "", "read_status") && (i.child_count = Number("child_count"in i ? i.child_count : "") + Number(1)))) : (twig.attr("dialog"in i ? i.dialog : "", "is_last") && (i.child_count = Number("child_count"in i ? i.child_count : "") + Number(1)),
                    i.child_count = Number("child_count"in i ? i.child_count : "") + Number(1)),
                    twig.contains([twig.attr("author"in i ? i.author : "", "origin"), twig.attr(twig.attr(twig.attr("reply_to"in i ? i.reply_to : "", "message"), "author"), "origin")], "instagram_business") && "secondary" == twig.attr("dialog"in i ? i.dialog : "", "category") && (i.is_selectable_dialog = !1);
                    var a = t;
                    t = new twig.StringBuffer,
                    twig.attr("_account_features"in i ? i._account_features : "", "is_ai_functionality_enabled_in_feed") && (t.append('<div class="feed-note__talk-outgoing-wrapper"><div class="feed-note__talk-outgoing-summarize js-ai-summarize"><div class="feed-note__talk-outgoing-summarize-icon"><svg class="svg-icon svg-inbox--summarize-dims"><use xlink:href="#inbox--summarize"></use></svg>'),
                    new (e._get("interface/common/bubble.twig"))(this.env_).render_(t, {
                        bubble_text: "summaraize_title"in i ? i.summaraize_title : "",
                        class_name: "info-bubble-outgoing"
                    }),
                    t.append('</div><div class="feed-note__talk-outgoing-summarize-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Summarize"), "light_escape", null, !0)),
                    t.append('</div></div><div class="js-ai-summarize-tip"></div></div>')),
                    i.summarize_button = new twig.Markup(t.toString()),
                    t = a,
                    i.emotionIcon = twig.filter.lower(this.env_, twig.attr("dialog"in i ? i.dialog : "", "emotion")),
                    a = t,
                    t = new twig.StringBuffer,
                    "isShowEmotion"in i && i.isShowEmotion && (t.append('<div class="feed-note__talk-outgoing-wrapper feed-note__talk-outgoing-wrapper-emotion js-ai-emotion"><div class="feed-note__talk-outgoing-emotion"><svg class="svg-icon svg-common--'),
                    t.append(twig.filter.escape(this.env_, "emotionIcon"in i ? i.emotionIcon : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#common--'),
                    t.append(twig.filter.escape(this.env_, "emotionIcon"in i ? i.emotionIcon : "", "light_escape", null, !0)),
                    t.append('"></use></svg></div></div>')),
                    i.emotion_button = new twig.Markup(t.toString()),
                    (t = a).append('<div class="feed-note__buttons feed-note__talk-outgoing '),
                    t.append(("child_count"in i ? i.child_count : "") > ("min_elements_to_control"in i ? i.min_elements_to_control : "") ? "feed-note__talk-outgoing-with_buttons" : ""),
                    t.append('">'),
                    twig.attr("dialog"in i ? i.dialog : "", "opened") ? twig.attr("dialog"in i ? i.dialog : "", "opened") && (t.append('<div class="feed-note__talk-outgoing-title feed-note__talk-outgoing-title_opened '),
                    !twig.empty(twig.attr("dialog"in i ? i.dialog : "", "auto_close_at")) && twig.attr("dialog"in i ? i.dialog : "", "auto_close") ? t.append(" feed-note__talk-outgoing-title_autolose ") : 1 != twig.attr("dialog"in i ? i.dialog : "", "auto_close") && twig.attr("dialog"in i ? i.dialog : "", "amojo_autoclose") && t.append(" feed-note__talk-outgoing-title_noautoclose "),
                    0 == twig.attr("dialog"in i ? i.dialog : "", "read_status") && twig.attr("dialog"in i ? i.dialog : "", "is_last") && t.append("feed-note__talk-outgoing-title_unread"),
                    t.append(" "),
                    "isShowEmotion"in i && i.isShowEmotion && t.append("feed-note__talk-outgoing-title_emotion"),
                    t.append(" "),
                    "is_selectable_dialog"in i && i.is_selectable_dialog && t.append("js-talk-reply"),
                    t.append('"><div class="feed-note__talk-outgoing-lang">'),
                    t.append(twig.filter.escape(this.env_, "conversation_text"in i ? i.conversation_text : "", "light_escape", null, !0)),
                    t.append('&nbsp;</div><div class="feed-note__talk-outgoing-number">'),
                    t.append(twig.filter.escape(this.env_, "dialog_number"in i ? i.dialog_number : "", "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/common/bubble.twig"))(this.env_).render_(t, {
                        bubble_text: ("conversation_text"in i ? i.conversation_text : "") + " " + ("dialog_number"in i ? i.dialog_number : ""),
                        class_name: "info-bubble-outgoing"
                    }),
                    t.append("</div>"),
                    twig.attr("dialog"in i ? i.dialog : "", "is_last") && t.append(twig.filter.escape(this.env_, "emotion_button"in i ? i.emotion_button : "", "light_escape", null, !0)),
                    twig.attr("dialog"in i ? i.dialog : "", "is_last") && (t.append(twig.filter.escape(this.env_, "summarize_button"in i ? i.summarize_button : "", "light_escape", null, !0)),
                    t.append('<div class="feed-note__talk-outgoing-wrapper '),
                    t.append(1 == twig.attr("dialog"in i ? i.dialog : "", "auto_close") ? "feed-note__talk-outgoing-wrapper_with-timer" : ""),
                    t.append('">'),
                    1 == twig.attr("dialog"in i ? i.dialog : "", "auto_close") && (t.append('<div class="feed-note__talk-outgoing-autoclose-wrapper '),
                    t.append(twig.attr("dialog"in i ? i.dialog : "", "auto_close_at", void 0, void 0, !0) ? "active" : ""),
                    t.append('"><div class="feed-note__talk-outgoing-autoclose"><span class="feed-note__talk-outgoing-autoclose_lang">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Auto-solve in"), "light_escape", null, !0)),
                    t.append('</span> <span class="feed-note__talk-outgoing-autoclose_timer">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("dialog"in i ? i.dialog : "", "auto_close_at_formatted"), "light_escape", null, !0)),
                    t.append("</span> </div>"),
                    new (e._get("interface/common/bubble.twig"))(this.env_).render_(t, {
                        bubble_text: twig.attr("dialog"in i ? i.dialog : "", "auto_close_at_formatted"),
                        class_name: "info-bubble-outgoing"
                    }),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        switcher_wrapper_class: "controls-switcher-blue",
                        checked: 1 == twig.attr("dialog"in i ? i.dialog : "", "auto_close"),
                        class_name: "feed-note__talk-outgoing-autoclose-switcher"
                    })),
                    t.append("</div>")),
                    t.append('<div class="feed-note__talk-outgoing-close js-talk-close '),
                    0 == twig.attr("dialog"in i ? i.dialog : "", "amojo_autoclose") && t.append(" feed-note__talk-outgoing-close_round "),
                    t.append('">'),
                    "nps_disabled"in i && i.nps_disabled || "contacts" == ("entity_type"in i ? i.entity_type : "") || twig.contains([twig.attr("DIALOG_STATUSES"in i ? i.DIALOG_STATUSES : "", "NPS_BOT_WORKING"), twig.attr("DIALOG_STATUSES"in i ? i.DIALOG_STATUSES : "", "NPS_BOT_WORKED")], twig.attr("dialog"in i ? i.dialog : "", "status")) || "secondary" == twig.attr("dialog"in i ? i.dialog : "", "category") ? (t.append('<div class="feed-note__talk-outgoing-close__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Mark solved"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append('<div class="feed-note__talk-outgoing-close__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Send NPS"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div></div>"),
                    0 == twig.attr("dialog"in i ? i.dialog : "", "read_status") && (t.append('<div class="feed-note__talk-outgoing-wrapper feed-note__talk-outgoing-wrapper_with-read"><div class="feed-note__talk-outgoing-read js-talk-read"><div class="feed-note__talk-outgoing-close__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Mark read"), "light_escape", null, !0)),
                    t.append("</div></div></div>")))) : (twig.attr("dialog"in i ? i.dialog : "", "is_last") && t.append(twig.filter.escape(this.env_, "summarize_button"in i ? i.summarize_button : "", "light_escape", null, !0)),
                    t.append('<div class="feed-note__talk-outgoing-title feed-note__talk-outgoing-title_close '),
                    "isShowEmotion"in i && i.isShowEmotion && t.append("feed-note__talk-outgoing-title_emotion"),
                    t.append('"><div>'),
                    t.append(twig.filter.escape(this.env_, "conversation_text"in i ? i.conversation_text : "", "light_escape", null, !0)),
                    t.append('&nbsp;</div><div class="feed-note__talk-outgoing-number">'),
                    t.append(twig.filter.escape(this.env_, "dialog_number"in i ? i.dialog_number : "", "light_escape", null, !0)),
                    t.append("</div></div>"),
                    twig.attr("dialog"in i ? i.dialog : "", "is_last") && t.append(twig.filter.escape(this.env_, "emotion_button"in i ? i.emotion_button : "", "light_escape", null, !0))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_amojo_dialog"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/amojo_dialog", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-note__joined-attach" data-file-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in i ? i.message : "", "attachment"), "id"), "light_escape", null, !0)),
                    t.append('">'),
                    i.attachment = twig.attr("message"in i ? i.message : "", "attachment"),
                    i.is_standard_extension = twig.attr("extension"in i ? i.extension : "", "is_standard_extension"),
                    i.extension = twig.attr("extension"in i ? i.extension : "", "extension"),
                    i.media_preview = twig.attr("attachment"in i ? i.attachment : "", "media_200_200") || twig.attr("message"in i ? i.message : "", "media_200_200") || twig.attr("message"in i ? i.message : "", "media"),
                    i.media_url = twig.attr("attachment"in i ? i.attachment : "", "media") || twig.attr("message"in i ? i.message : "", "media"),
                    i.animation_url = twig.attr("attachment"in i ? i.attachment : "", "animation") || twig.attr("message"in i ? i.message : "", "animation"),
                    i.picture_error_src = "/frontend/images/interface/svg/notes/picture_load_error/" + ("lang_id"in i ? twig.filter.def("lang_id"in i ? i.lang_id : "", "en") : "en") + "/picture_error.svg",
                    "attachment"in i && i.attachment && !twig.attr("attachment"in i ? i.attachment : "", "is_loaded") ? (i.loading_status = twig.attr(twig.attr("attachment"in i ? i.attachment : "", "loading"), "status"),
                    twig.empty(twig.attr("message"in i ? i.message : "", "text")) || (i.message_with_text_class_name = "preload-file__item-download_with-text"),
                    t.append('<div class="preload-file__item-main"><div class="preload-file__item-img">'),
                    "is_standard_extension"in i && i.is_standard_extension ? (t.append('<svg class="svg-icon svg-files_icons--file-'),
                    t.append(twig.filter.escape(this.env_, "extension"in i ? i.extension : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#files_icons--file-'),
                    t.append(twig.filter.escape(this.env_, "extension"in i ? i.extension : "", "light_escape", null, !0)),
                    t.append('"></use></svg>')) : (t.append('<svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.2097 1H7C5.89543 1 5 1.89543 5 3V37C5 38.1046 5.89543 39 7 39H33C34.1046 39 35 38.1046 35 37L35 9.5H29.7097C27.7767 9.5 26.2097 7.933 26.2097 6L26.2097 1ZM36 9L36 37C36 38.6569 34.6569 40 33 40H7C5.34315 40 4 38.6569 4 37V3C4 1.34315 5.34315 0 7 0H26.7097L36 9ZM34.0467 8.5L27.2097 1.87667L27.2097 6C27.2097 7.38071 28.329 8.5 29.7097 8.5H34.0467Z" fill="#979797"/><rect y="25" width="26" height="12" rx="3" fill="#979797" /><text fill="white" xml-space="preserve" font-size="9.5" font-weight="bold" letter-spacing="0.01em"><tspan x="3.3" y="34.7">'),
                    t.append(twig.filter.escape(this.env_, "extension"in i ? i.extension : "", "light_escape", null, !0)),
                    t.append("</tspan></text></svg>")),
                    t.append('</div><div class="preload-file__item-text"><div class="preload-file__item-header"><div class="preload-file__item-title js-control-file-name" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("attachment"in i ? i.attachment : "", "name") || twig.attr("message"in i ? i.message : "", "media_file_name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("attachment"in i ? i.attachment : "", "name") || twig.attr("message"in i ? i.message : "", "media_file_name"), "light_escape", null, !0)),
                    t.append('</div></div><div class="preload-file__item-size"><span class="preload-file__item-size-value">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format_file_size", twig.attr("attachment"in i ? i.attachment : "", "size")), "light_escape", null, !0)),
                    t.append('</span></div></div></div><div class="preload-file__item-download '),
                    t.append(twig.filter.escape(this.env_, "message_with_text_class_name"in i ? i.message_with_text_class_name : "", "light_escape", null, !0)),
                    t.append('" data-loading-status="'),
                    t.append(twig.filter.escape(this.env_, "loading_status"in i ? i.loading_status : "", "light_escape", null, !0)),
                    t.append('">'),
                    "failed" == ("loading_status"in i ? i.loading_status : "") ? new (e._get("interface/notes/types/amojo/fail_file.twig"))(this.env_).render_(t, i) : "lost" == ("loading_status"in i ? i.loading_status : "") ? new (e._get("interface/notes/types/amojo/lost_file.twig"))(this.env_).render_(t, i) : "progress" == ("loading_status"in i ? i.loading_status : "") ? (i.total = twig.attr(twig.attr("attachment"in i ? i.attachment : "", "loading"), "total"),
                    i.progress = twig.attr(twig.attr("attachment"in i ? i.attachment : "", "loading"), "progress"),
                    i.result = 100 * (("progress"in i ? i.progress : "") || 0 / ("total"in i ? i.total : "")),
                    new (e._get("interface/notes/types/amojo/progress_bar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        progress: "result"in i ? i.result : ""
                    }))) : (t.append('<div class="preload-file__item-download-wrapper"><svg class="svg-icon svg-common--download-files-dims"><use xlink:href="#common--download-files"></use></svg><a class="preload-file__item-download-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Upload to amoCRM"), "light_escape", null, !0)),
                    t.append("</a></div>")),
                    t.append("</div>")) : "sticker" == twig.attr("attachment"in i ? i.attachment : "", "type") || "sticker" == twig.attr("message"in i ? i.message : "", "type") ? (t.append('<div class="feed-note__sticker js-control-animated-sticker" data-media-url="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('" data-animation-url="'),
                    t.append(twig.filter.escape(this.env_, "animation_url"in i ? i.animation_url : "", "light_escape", null, !0)),
                    t.append('" data-scroller-selector=".notes-wrapper__scroller"></div>')) : "picture" == twig.attr("attachment"in i ? i.attachment : "", "type") || "picture" == twig.attr("message"in i ? i.message : "", "type") ? (t.append('<a class="js-image-resizer feed-note__media-preview feed-note__media-preview__picture_wrapper" href="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('"><img class="feed-note__media-preview__picture" src="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('" crossorigin="anonymous" '),
                    t.append(' style="opacity: 0;" onerror="this.src=\''),
                    t.append(twig.filter.escape(this.env_, "picture_error_src"in i ? i.picture_error_src : "", "light_escape", null, !0)),
                    t.append('\'; this.parentNode.className += \' feed-note__media-preview__picture_error \';"><span class="spinner-icon spinner-icon-abs-center"></span><button class="js-new-window feed-note__media-preview_download-button">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "download")), "light_escape", null, !0)),
                    t.append("</button></a>")) : "video" == twig.attr("attachment"in i ? i.attachment : "", "type") || "video" == twig.attr("message"in i ? i.message : "", "type") ? (t.append('<a class="feed-note__media-preview" data-type="video" data-url="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('" href="" style="background-image: url('),
                    t.append(twig.filter.escape(this.env_, "media_preview"in i ? i.media_preview : "", "light_escape", null, !0)),
                    t.append(')"><div class="feed-note__media-preview_video-play-button"><svg class="svg-icon svg-common--play-button-dims"><use xlink:href="#common--play-button"></use></svg></div><button class="js-new-window feed-note__media-preview_download-button">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "download")), "light_escape", null, !0)),
                    t.append("</button></a>")) : twig.attr("message"in i ? i.message : "", "is_instagram") ? (i.media_preview = "",
                    t.append('<div class="feed-note__media-preview--stories-wrapper"><div class="feed-note__media-preview--mention-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("amo_author"in i ? i.amo_author : "", "name"), "light_escape", null, !0)),
                    t.append("<br>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("message"in i ? i.message : "", "header_text"), "light_escape", null, !0)),
                    t.append("</div>"),
                    twig.attr("message"in i ? i.message : "", "story_unavailable") ? (t.append('<div class="feed-note__media-preview feed-note__media-preview--stories feed-note__media-preview--unavailable"><div class="feed-note__media-preview-unavailable-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Story unavailable"), "light_escape", null, !0)),
                    t.append("</div></div>")) : "ig_reel" == twig.attr("message"in i ? i.message : "", "type") ? (t.append('<a class="feed-note__media-preview--commented-post" href="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('" target="_blank"><video width="100%" controls><source src="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('" type="video/mp4">Your browser does not support the video tag.</video></a>')) : (t.append('<a class="feed-note__media-preview feed-note__media-preview--stories" href="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('"  ><div class="feed-note__media-preview_video-play-button"><svg class="svg-icon svg-common--play-button-dims"><use xlink:href="#common--play-button"></use></svg></div></a>')),
                    t.append("</div>")) : twig.attr("message"in i ? i.message : "", "is_vk") ? (t.append('<a class="feed-note__media-preview feed-note__media-preview--vk" data-type="video" data-url="'),
                    t.append(twig.filter.escape(this.env_, "media_url"in i ? i.media_url : "", "light_escape", null, !0)),
                    t.append('" href="" style="background-image: url('),
                    t.append(twig.filter.escape(this.env_, "media_preview"in i ? i.media_preview : "", "light_escape", null, !0)),
                    t.append('"  ><div class="feed-note__media-preview_video-play-button"><svg class="svg-icon svg-common--play-button-dims"><use xlink:href="#common--play-button"></use></svg></div></a>')) : "voice" == twig.attr("attachment"in i ? i.attachment : "", "type") || "voice" == twig.attr("message"in i ? i.message : "", "type") ? new (e._get("interface/notes/types/amojo/amojo_voice_player.twig"))(this.env_).render_(t, twig.extend({}, i, "message"in i ? i.message : "")) : "location" == twig.attr("attachment"in i ? i.attachment : "", "type") || "location" == twig.attr("message"in i ? i.message : "", "type") ? (t.append('<iframe width="350" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key='),
                    t.append(twig.filter.escape(this.env_, "embed_maps_key"in i ? i.embed_maps_key : "", "light_escape", null, !0)),
                    t.append("&q="),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in i ? i.message : "", "location"), "latitude"), "light_escape", null, !0)),
                    t.append(","),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in i ? i.message : "", "location"), "longitude"), "light_escape", null, !0)),
                    t.append('"></iframe>')) : (i.link_text = twig.attr("message"in i ? i.message : "", "media_file_name", void 0, void 0, !0) ? twig.filter.def(twig.attr("message"in i ? i.message : "", "media_file_name"), twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "download"))) : twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "download")),
                    twig.empty(twig.attr("message"in i ? i.message : "", "media")) || (t.append('<a class="feed-note__media-preview feed-note__media-preview__file" title="'),
                    t.append(twig.filter.escape(this.env_, "link_text"in i ? i.link_text : "", "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("message"in i ? i.message : "", "media"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon feed-note__media-preview__file-icon"><use xlink:href="#common--export--load-file"></use></svg><div class="feed-note__media-preview__file-name">'),
                    t.append(twig.filter.escape(this.env_, "link_text"in i ? i.link_text : "", "light_escape", null, !0)),
                    t.append('</div><button class="feed-note__media-preview_download-button js-new-window">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "download")), "light_escape", null, !0)),
                    t.append("</button></a>"))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_amojo_joined_attach"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/amojo_joined_attach", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_btn_enabled") ? t.text_button_class = "amojo-voice__transcription-button_enabled" : t.text_button_class = "amojo-voice__transcription-button_disabled",
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_failed_msg") && (t.text_button_class = "amojo-voice__transcription-button_disabled amojo-voice__transcription-button_no-click"),
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_retryable_msg") && (t.text_button_class = "amojo-voice__transcription-button_retryable"),
                    e.append('<div class="amojo-voice"><div class="amojo-voice__jplayer"></div><div class="amojo-voice__main-container"><div role="button" data-mode="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "active_button_type"), "light_escape", null, !0)),
                    e.append('" class="amojo-voice__js-player-button amojo-voice__play-button" tabindex="-1"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="amojo-voice__download-button-svg"><g><path d="M7.70711 10.2929L11 13.5858L11 3C11 2.44771 11.4477 2 12 2C12.5523 2 13 2.44771 13 3L13 13.5858L16.2929 10.2929C16.6834 9.90237 17.3166 9.90237 17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929Z"></path><path d="M4 22C3.44772 22 3 21.5523 3 21C3 20.4477 3.44772 20 4 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H4Z"></path></g></svg><svg width="10" height="12" viewbox="0 0 10 12" fill="none" class="amojo-voice__play-button-svg"><path d="M9.06105 6.8036L1.51579 11.8225C0.87579 12.2604 0 11.7889 0 11.0141V0.976229C0 0.201492 0.87579 -0.270086 1.51579 0.167809L9.06105 5.18676C9.63369 5.55728 9.63369 6.43307 9.06105 6.8036Z"></path></svg><svg width="9" height="12" viewbox="0 0 9 12" fill="none" class="amojo-voice__pause-button-svg"><path d="M6 1.5C6 0.671573 6.67157 0 7.5 0C8.32843 0 9 0.671573 9 1.5V10.5C9 11.3284 8.32843 12 7.5 12C6.67157 12 6 11.3284 6 10.5V1.5Z"></path><path d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5V10.5C3 11.3284 2.32843 12 1.5 12C0.671573 12 0 11.3284 0 10.5V1.5Z"></path></svg><svg width="20" height="20" viewbox="0 0 20 20" class="amojo-voice__load-button-svg"><path d="M12.7926 4.54479C13.0119 4.11646 12.8436 3.5858 12.3914 3.42141C11.1325 2.96377 9.76227 2.87489 8.4444 3.17525C6.84197 3.54046 5.41914 4.45787 4.42516 5.76675C3.43119 7.07563 2.92945 8.69253 3.00786 10.3342C3.08627 11.9758 3.73981 13.5376 4.85401 14.7457C5.9682 15.9539 7.47199 16.7316 9.10194 16.9424C10.7319 17.1532 12.384 16.7838 13.769 15.8989C15.1539 15.0139 16.1833 13.6699 16.6768 12.1022C17.0827 10.813 17.1049 9.44003 16.7505 8.14828C16.6232 7.68423 16.1078 7.47362 15.6632 7.65755C15.2185 7.84149 15.015 8.35069 15.1231 8.81959C15.3323 9.72753 15.2976 10.6803 15.0147 11.579C14.644 12.7564 13.8709 13.7658 12.8307 14.4305C11.7905 15.0951 10.5497 15.3726 9.32547 15.2142C8.10128 15.0559 6.97184 14.4718 6.13501 13.5644C5.29818 12.657 4.80733 11.484 4.74844 10.251C4.68955 9.01807 5.06639 7.80368 5.81292 6.82062C6.55946 5.83757 7.6281 5.14854 8.83162 4.87425C9.75021 4.66489 10.7027 4.70732 11.5907 4.98925C12.0494 5.13485 12.5734 4.97313 12.7926 4.54479Z"></path><defs><radialGradient cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(9.9999 10.0002) rotate(-34.0805) scale(11.4127)"><stop style="stop-color: var(--color-blue-sky);"></stop><stop offset="1" style="stop-color: var(--color-blue-sky);" stop-opacity="0"></stop></radialGradient></defs></svg></div><div class="amojo-voice__duration"><div class="amojo-voice__duration-bar"><span class="amojo-voice__line"></span><span class="amojo-voice__line_clickable"></span><span class="amojo-voice__progress" '),
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "left_offset") > 0 && (e.append(' style="width:'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "left_offset"), "light_escape", null, !0)),
                    e.append('px;" ')),
                    e.append('></span><span class="amojo-voice__slider" '),
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "left_offset") > 0 && (e.append(' style="left:'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "left_offset"), "light_escape", null, !0)),
                    e.append('px;" ')),
                    e.append('></span></div><span class="amojo-voice__time amojo-voice__time_current '),
                    0 == twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "duration_time") && e.append(" hidden "),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "current_time"), "light_escape", null, !0)),
                    e.append('</span><span class="amojo-voice__time amojo-voice__time_full '),
                    0 == twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "duration_time") && e.append(" hidden "),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "duration_time"), "light_escape", null, !0)),
                    e.append("</span></div>"),
                    1 == twig.attr(twig.attr("message"in t ? t.message : "", "transcription"), "supported") && (e.append('<div role="button" class="amojo-voice__transcription-button '),
                    e.append(twig.filter.escape(this.env_, "text_button_class"in t ? t.text_button_class : "", "light_escape", null, !0)),
                    e.append('" tabindex="-1"><svg width="9" height="12" viewbox="0 0 9 12" fill="none" class="amojo-voice__transcription-button-svg"><path d="M0 0H8.84V3.111H7.582V1.258H5.117V10.642H6.987V11.9H1.836V10.642H3.706V1.258H1.258V3.111H0V0Z"></path></svg><svg width="20" height="20" viewbox="0 0 20 20" class="amojo-voice__transcription-loader"><path d="M12.7926 4.54479C13.0119 4.11646 12.8436 3.5858 12.3914 3.42141C11.1325 2.96377 9.76227 2.87489 8.4444 3.17525C6.84197 3.54046 5.41914 4.45787 4.42516 5.76675C3.43119 7.07563 2.92945 8.69253 3.00786 10.3342C3.08627 11.9758 3.73981 13.5376 4.85401 14.7457C5.9682 15.9539 7.47199 16.7316 9.10194 16.9424C10.7319 17.1532 12.384 16.7838 13.769 15.8989C15.1539 15.0139 16.1833 13.6699 16.6768 12.1022C17.0827 10.813 17.1049 9.44003 16.7505 8.14828C16.6232 7.68423 16.1078 7.47362 15.6632 7.65755C15.2185 7.84149 15.015 8.35069 15.1231 8.81959C15.3323 9.72753 15.2976 10.6803 15.0147 11.579C14.644 12.7564 13.8709 13.7658 12.8307 14.4305C11.7905 15.0951 10.5497 15.3726 9.32547 15.2142C8.10128 15.0559 6.97184 14.4718 6.13501 13.5644C5.29818 12.657 4.80733 11.484 4.74844 10.251C4.68955 9.01807 5.06639 7.80368 5.81292 6.82062C6.55946 5.83757 7.6281 5.14854 8.83162 4.87425C9.75021 4.66489 10.7027 4.70732 11.5907 4.98925C12.0494 5.13485 12.5734 4.97313 12.7926 4.54479Z"></path><defs><radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(9.9999 10.0002) rotate(-34.0805) scale(11.4127)"><stop stop-color="#2F80ED"></stop><stop offset="1" stop-color="#2F80ED" stop-opacity="0"></stop></radialGradient></defs></svg></div>')),
                    e.append('</div><div class="amojo-voice__transcription '),
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "show_transcription") && !twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_failed_msg") || e.append("hidden"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "transcription"), "text"), "light_escape", null, !0)),
                    e.append('</div><div class="amojo-voice__error-message '),
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_failed_msg") || e.append("hidden"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_failed_msg"), "light_escape", null, !0)),
                    e.append('</div><div class="amojo-voice__retryable-message '),
                    twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_retryable_msg") || e.append("hidden"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message"in t ? t.message : "", "voice_player_state"), "transcription_retryable_msg"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_amojo_voice_player"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/amojo_voice_player", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<span class="feed-note__avatar" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("amo_author"in i ? i.amo_author : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("amo_author"in i ? i.amo_author : "", "avatar"),
                        id: twig.attr("author"in i ? i.author : "", "bot") ? null : twig.attr("amo_author"in i ? i.amo_author : "", "id")
                    })),
                    t.append("</span>"),
                    "origin"in i && i.origin && (t.append('<span class="feed-note__icon-origin">'),
                    "origin_icon"in i && i.origin_icon && (t.append('<img src="'),
                    t.append(twig.filter.escape(this.env_, "origin_icon"in i ? i.origin_icon : "", "light_escape", null, !0)),
                    t.append('"/>')),
                    t.append("</span>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_avatar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/avatar", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before: twig.bind(this.block_before, this),
                        icon: twig.bind(this.block_icon, this),
                        header: twig.bind(this.block_header, this),
                        body: twig.bind(this.block_body, this),
                        footer: twig.bind(this.block_footer, this),
                        after_content: twig.bind(this.block_after_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/amojo/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_before = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr(twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "media"), "url") && twig.attr("_account_features"in i ? i._account_features : "", "ig_replies_to_comments") && new (e._get("interface/notes/types/amojo/amojo_content_card.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : "",
                        origin_icon: "origin_icon"in i ? i.origin_icon : "",
                        amo_author: "amo_author"in i ? i.amo_author : "",
                        author: "author"in i ? i.author : "",
                        media: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "media"),
                        url: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "comment_url"),
                        origin: "origin"in i ? i.origin : ""
                    }))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/types/amojo/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        amo_author: "amo_author"in i ? i.amo_author : "",
                        author: "author"in i ? i.author : "",
                        origin: "origin"in i ? i.origin : "",
                        origin_icon: "origin_icon"in i ? i.origin_icon : ""
                    }))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "author_id"in i ? i.author_id : "",
                        name: "sender"in i ? i.sender : "",
                        is_available_for_chatting: "is_available_for_chatting"in i ? i.is_available_for_chatting : "",
                        alt: "sender_alt"in i ? i.sender_alt : "",
                        user_type: "author",
                        control_class_name: "instagram_business" == ("origin"in i ? i.origin : "") && "is_dialog_category_secondary"in i && i.is_dialog_category_secondary ? "js-reply-to-comment" : ""
                    })),
                    (twig.contains(["amocrm", "bot"], twig.attr("author"in i ? i.author : "", "origin")) || twig.attr("author"in i ? i.author : "", "bot")) && (!("is_dialog_category_secondary"in i) || !i.is_dialog_category_secondary || "is_dialog_category_secondary"in i && i.is_dialog_category_secondary && "error" == ("delivery_status"in i ? i.delivery_status : "")) && (t.append('<div class="feed-note__delivery-status '),
                    t.append(twig.filter.escape(this.env_, "delivery_class"in i ? i.delivery_class : "", "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-inbox--'),
                    t.append(twig.filter.escape(this.env_, "delivery_status"in i ? i.delivery_status : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#inbox--'),
                    t.append(twig.filter.escape(this.env_, "delivery_status"in i ? i.delivery_status : "", "light_escape", null, !0)),
                    t.append('"></use></svg>'),
                    "error" == ("delivery_status"in i ? i.delivery_status : "") && twig.attr("error"in i ? i.error : "", "description") && new (e._get("interface/common/bubble.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        bubble_text: twig.attr("error"in i ? i.error : "", "description"),
                        bubbleLink: twig.attr("error"in i ? i.error : "", "link"),
                        bubbleLinkTitle: twig.attr("error"in i ? i.error : "", "link_title") ? twig.attr("error"in i ? i.error : "", "link_title") : this.env_.filter("i18n", "Learn more"),
                        isExternalLink: "isExternalLink"in i ? i.isExternalLink : ""
                    })),
                    "delivery_messaage"in i && i.delivery_messaage && (t.append('<span class="message_delivery-status_'),
                    t.append(twig.filter.escape(this.env_, "delivery_status"in i ? i.delivery_status : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "delivery_messaage"in i ? i.delivery_messaage : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</div>")),
                    !twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "comment_url") || "is_dialog_category_secondary"in i && i.is_dialog_category_secondary || (t.append('<a class="feed-note__header-inner__link" target="_blank"href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "comment_url"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "View comment"), "light_escape", null, !0)),
                    t.append("</a>")),
                    "edit_date"in i && i.edit_date && (t.append('<span class="feed-note__edited">'),
                    t.append(twig.filter.escape(this.env_, "(" + this.env_.filter("i18n", "edited") + ")", "light_escape", null, !0)),
                    t.append('<div class="feed-note__edit-date"><span class="feed-note__edit-date-tip"></span><p class="feed-note__edit-date-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "edited") + " " + twig.filter.lower(this.env_, this.env_.filter("feed_date", "edit_date"in i ? i.edit_date : "")), "light_escape", null, !0)),
                    t.append("</p></div></span>"))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "quot_data"in i && i.quot_data && (!("is_dialog_category_secondary"in i) || !i.is_dialog_category_secondary)) {
                        i._parent = i;
                        var a = "quot_data"in i ? i.quot_data : ""
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
                            i.quotation = n,
                            new (e._get("interface/notes/types/amojo/quotation.twig"))(this.env_).render_(t, twig.extend({}, i, "quotation"in i ? i.quotation : "")),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    }
                    "text" != twig.attr("message"in i ? i.message : "", "type") && "contact" != twig.attr("message"in i ? i.message : "", "type") && new (e._get("interface/notes/types/amojo/amojo_joined_attach.twig"))(this.env_).render_(t, twig.extend({}, i, "message"in i ? i.message : "")),
                    twig.attr("message_attributes"in i ? i.message_attributes : "", "vk") && (i.message = {
                        is_vk: !0,
                        media: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "vk"), "video_url"),
                        media_200_200: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "vk"), "preview_url"),
                        media_320_200: "",
                        media_file_name: "",
                        header_text: twig.attr("data"in i ? i.data : "", "header_text"),
                        text: twig.attr("message"in i ? i.message : "", "text"),
                        type: "key"in i ? i.key : ""
                    },
                    new (e._get("interface/notes/types/amojo/amojo_joined_attach.twig"))(this.env_).render_(t, twig.extend({}, i, "message"in i ? i.message : ""))),
                    (twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "story") || twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "reply_to_story") || twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "share") || twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "reel")) && (i.ig_message_types = {
                        stories: {
                            available: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "story"),
                            media: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "story_url"),
                            header_text: twig.attr("message"in i ? i.message : "", "text"),
                            text: ""
                        },
                        stories_reply: {
                            available: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "reply_to_story"),
                            media: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "reply_to_url"),
                            header_text: this.env_.filter("i18n", "Replied to your story"),
                            text: twig.attr("message"in i ? i.message : "", "text")
                        },
                        ig_share: {
                            available: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "share"),
                            media: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "share_url"),
                            header_text: this.env_.filter("i18n", "Sent you a post"),
                            text: ""
                        },
                        ig_reel: {
                            available: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "reel"),
                            media: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "reel_url"),
                            header_text: this.env_.filter("i18n", "Sent you a reel"),
                            text: ""
                        }
                    },
                    i._parent = i,
                    a = "ig_message_types"in i ? i.ig_message_types : "",
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
                        i.key = a,
                        i.data = n,
                        twig.attr("data"in i ? i.data : "", "available") && (i.message = {
                            is_instagram: !0,
                            media: twig.attr("data"in i ? i.data : "", "media"),
                            media_200_200: "",
                            media_320_200: "",
                            media_file_name: "",
                            header_text: twig.attr("data"in i ? i.data : "", "header_text"),
                            text: twig.attr("data"in i ? i.data : "", "text"),
                            type: "key"in i ? i.key : "",
                            story_unavailable: twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "facebook"), "story_unavailable")
                        },
                        new (e._get("interface/notes/types/amojo/amojo_joined_attach.twig"))(this.env_).render_(t, twig.extend({}, i, "message"in i ? i.message : ""))),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)),
                    twig.empty(twig.attr("message"in i ? i.message : "", "text")) || ("search_highlighted"in i && i.search_highlighted ? new (e._get("interface/notes/types/amojo/highlighter.twig"))(this.env_).render_(t, i) : (i._parent = i,
                    a = this.env_.filter("split", this.env_, this.env_.filter("parse_urls", twig.filter.escape(this.env_, twig.attr("message"in i ? i.message : "", "text"))), "\n"),
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
                        i.line = n,
                        t.append('<div class="feed-note__message_paragraph">'),
                        t.append(twig.filter.def(twig.filter.trim("line"in i ? i.line : ""), "&nbsp;")),
                        t.append("</div>"),
                        twig.attr(s, "last") && new (e._get("interface/notes/types/amojo/metadata_templates.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)),
                    "reply_markup"in i && i.reply_markup && twig.attr("reply_markup"in i ? i.reply_markup : "", "carousel") && new (e._get("interface/notes/types/amojo/whatsapp/carousel.twig"))(this.env_).render_(t, {
                        carouselParams: twig.attr("reply_markup"in i ? i.reply_markup : "", "carousel")
                    })),
                    "rich_link"in i && (t.append('<div class="feed-note__rich-link">'),
                    twig.attr("rich_link"in i ? i.rich_link : "", "site_name") ? (t.append('<a class="feed-note__rich-link_domain" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("rich_link"in i ? i.rich_link : "", "link"), "light_escape", null, !0)),
                    t.append('" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("rich_link"in i ? i.rich_link : "", "site_name"), "light_escape", null, !0)),
                    t.append("</a>")) : twig.attr("rich_link"in i ? i.rich_link : "", "domain") && (t.append('<a class="feed-note__rich-link_domain" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("rich_link"in i ? i.rich_link : "", "link"), "light_escape", null, !0)),
                    t.append('" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("rich_link"in i ? i.rich_link : "", "domain"), "light_escape", null, !0)),
                    t.append("</a>")),
                    twig.attr("rich_link"in i ? i.rich_link : "", "title") && (t.append('<span class="feed-note__rich-link_title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("rich_link"in i ? i.rich_link : "", "title"), "light_escape", null, !0)),
                    t.append("</span>")),
                    !twig.attr("rich_link"in i ? i.rich_link : "", "img_error") && twig.attr("rich_link"in i ? i.rich_link : "", "img") && (t.append('<img src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("rich_link"in i ? i.rich_link : "", "img"), "light_escape", null, !0)),
                    t.append('" alt="" class="feed-note__rich-link_img">')),
                    t.append("</div>"))
                }
                ,
                t.prototype.block_footer = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "reactions_data"in i && i.reactions_data) {
                        t.append('<div class="feed-note__reaction-wrapper">'),
                        i._parent = i;
                        var a = "reactions_data"in i ? i.reactions_data : ""
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
                            i.emoji = a,
                            i.reaction_data = n,
                            t.append('<div class="feed-note__reaction" data-emoji='),
                            t.append(twig.filter.escape(this.env_, "emoji"in i ? i.emoji : "", "light_escape", null, !0)),
                            t.append('><div class="feed-note__reaction-emoji-wrapper"><span class="feed-note__reaction-emoji">'),
                            t.append(twig.filter.escape(this.env_, "emoji"in i ? i.emoji : "", "light_escape", null, !0)),
                            t.append('</span></div><span class="feed-note__reaction-avatar-wrapper">');
                            var r = twig.attr("reaction_data"in i ? i.reaction_data : "", "users")
                              , o = {
                                parent: s,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(r)) {
                                var p = twig.count(r);
                                o.revindex0 = p - 1,
                                o.revindex = p,
                                o.length = p,
                                o.last = 1 === p
                            }
                            twig.forEach(r, (function(n, a) {
                                i._key = a,
                                i.user_data = n,
                                i.user = twig.attr("user_data"in i ? i.user_data : "", "user"),
                                twig.attr("user"in i ? i.user : "", "name") ? i.user_name = twig.attr("user"in i ? i.user : "", "name") : i.user_name = this.env_.filter("i18n", "User deleted"),
                                t.append('<span class="feed-note__reaction-avatar-container" data-user-id="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("user"in i ? i.user : "", "id"), "light_escape", null, !0)),
                                t.append('" title="'),
                                t.append(twig.filter.escape(this.env_, "user_name"in i ? i.user_name : "", "light_escape", null, !0)),
                                t.append('">'),
                                new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    url: twig.attr("user"in i ? i.user : "", "avatar"),
                                    id: twig.attr("user"in i ? i.user : "", "isBot") && twig.attr("user"in i ? i.user : "", "avatar") ? null : twig.attr("user"in i ? i.user : "", "id"),
                                    class: "feed-note__avatar feed-note__reaction-avatar"
                                })),
                                t.append('<div class="feed-note__reaction-name"><span class="feed-note__reaction-name-tip"></span><p class="feed-note__reaction-name-text">'),
                                t.append(twig.filter.escape(this.env_, "user_name"in i ? i.user_name : "", "light_escape", null, !0)),
                                t.append("</p></div></span>"),
                                ++o.index0,
                                ++o.index,
                                o.first = !1,
                                o.length && (--o.revindex0,
                                --o.revindex,
                                o.last = 0 === o.revindex0)
                            }
                            ), this),
                            t.append("</span></div>"),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append("</div>")
                    }
                    t.append('<div class="feed-note__ai-answer-wrapper"></div><svg class="svg-icon svg-inbox--bubble-tail-dims feed-note__bubble-tail"><use xlink:href="#inbox--bubble-tail"></use></svg>')
                }
                ,
                t.prototype.block_after_content = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "dialog"in i && i.dialog && "show_dialog"in i && i.show_dialog && new (e._get("interface/notes/types/amojo/amojo_dialog.twig"))(this.env_).render_(t, twig.extend({}, i, "dialog"in i ? i.dialog : ""))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_external"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/external", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="preload-file__item-download-wrapper"><div class="preload-file__item-download-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "error"), "light_escape", null, !0)),
                    e.append('</div><a class="preload-file__item-download-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Retry upload"), "light_escape", null, !0)),
                    e.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_fail_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/fail_file", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    var a = this.env_.filter("split", this.env_, "search_highlighted"in i ? i.search_highlighted : "", "\n")
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
                        i.line = n,
                        t.append('<div class="feed-note__message_paragraph">'),
                        t.append(twig.filter.def(twig.filter.trim("line"in i ? i.line : ""), "&nbsp;")),
                        t.append("</div>"),
                        twig.attr(s, "last") && new (e._get("interface/notes/types/amojo/metadata_templates.twig"))(this.env_).render_(t, i),
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
                    return "interface_notes_types_amojo_highlighter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/highlighter", t)
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
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.date = "created_at"in t ? t.created_at : "",
                    t.edit_date = "edited_at"in t ? t.edited_at : "",
                    t.author_id = twig.attr("author"in t ? t.author : "", "id"),
                    twig.attr("amo_author"in t ? t.amo_author : "", "name") ? (t.sender = twig.attr("amo_author"in t ? t.amo_author : "", "name"),
                    t.sender_alt = twig.attr("amo_author"in t ? t.amo_author : "", "alt")) : (t.author_id = !1,
                    t.sender = twig.attr("lang"in t ? t.lang : "", "notes_user_deleted")),
                    t.recipient_id = twig.attr("recipient"in t ? t.recipient : "", "id"),
                    twig.attr("amo_recipient"in t ? t.amo_recipient : "", "name") ? (t.recipient = twig.attr("amo_recipient"in t ? t.amo_recipient : "", "name"),
                    t.recipient_alt = twig.attr("amo_recipient"in t ? t.amo_recipient : "", "alt")) : twig.attr("amo_recipient"in t ? t.amo_recipient : "", "id") ? (t.recipient_id = !1,
                    t.recipient = twig.attr("lang"in t ? t.lang : "", "notes_user_deleted")) : t.recipient = twig.attr("lang"in t ? t.lang : "", "notes_all"),
                    "-1" == ("delivery_status"in t ? t.delivery_status : "") ? (t.delivery_status = "error",
                    t.delivery_messaage = twig.attr("lang"in t ? t.lang : "", "error")) : "0" == ("delivery_status"in t ? t.delivery_status : "") ? (t.delivery_status = "checkmark-single",
                    t.delivery_messaage = this.env_.filter("i18n", "Chat sent")) : "1" == ("delivery_status"in t ? t.delivery_status : "") ? (t.delivery_status = "checkmark",
                    t.delivery_messaage = this.env_.filter("i18n", "cashier_message_status_shown"),
                    t.delivery_class = "feed-note__checkmark_send") : "2" == ("delivery_status"in t ? t.delivery_status : "") && (t.delivery_status = "checkmark",
                    t.delivery_messaage = this.env_.filter("i18n", "Delivered"),
                    t.delivery_class = "feed-note__checkmark_read"),
                    "dialog"in t && t.dialog && "show_dialog"in t && t.show_dialog && (t.note_class_name = ("note_class_name"in t ? t.note_class_name : "") + " feed-note-with-dialog"),
                    "dont_show_meta"in t && t.dont_show_meta && (t.note_class_name = ("note_class_name"in t ? t.note_class_name : "") + " feed-note-wo-meta"),
                    "reactions_data"in t && t.reactions_data && (t.note_class_name = ("note_class_name"in t ? t.note_class_name : "") + " feed-note-block-reaction"),
                    twig.attr("_account_features"in t ? t._account_features : "", "ig_replies_to_comments") && "is_dialog_category_secondary"in t && t.is_dialog_category_secondary && (t.note_class_name = ("note_class_name"in t ? t.note_class_name : "") + " feed-note--secondary"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/index", t)
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
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/amojo/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<span class="feed-note__avatar" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("amo_author"in i ? i.amo_author : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("amo_author"in i ? i.amo_author : "", "avatar"),
                        id: twig.attr("author"in i ? i.author : "", "bot") ? null : twig.attr("amo_author"in i ? i.amo_author : "", "id")
                    })),
                    t.append("</span>"),
                    "origin"in i && i.origin && (t.append('<span class="feed-note__icon-origin">'),
                    "origin_icon"in i && i.origin_icon && (t.append('<img src="'),
                    t.append(twig.filter.escape(this.env_, "origin_icon"in i ? i.origin_icon : "", "light_escape", null, !0)),
                    t.append('" />')),
                    t.append("</span>"))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i),
                    t.append('<span class="feed-note__date-text">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "from")), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "author_id"in i ? i.author_id : "",
                        name: "sender"in i ? i.sender : "",
                        alt: "sender_alt"in i ? i.sender_alt : "",
                        user_type: "author"
                    })),
                    t.append('<span class="feed-note__date-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_note_to"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "recipient_id"in i ? i.recipient_id : "",
                        name: "recipient"in i ? i.recipient : "",
                        alt: "recipient_alt"in i ? i.recipient_alt : "",
                        group_id: "group_id"in i ? i.group_id : "",
                        user_type: "recipient",
                        external_author_name: null
                    })),
                    (null !== ("group_id"in i ? i.group_id : "") || "recipient_id"in i && i.recipient_id) && (t.append('<div class="feed-note__delivery-status '),
                    t.append(twig.filter.escape(this.env_, "delivery_class"in i ? i.delivery_class : "", "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-inbox--'),
                    t.append(twig.filter.escape(this.env_, "delivery_status"in i ? i.delivery_status : "", "light_escape", null, !0)),
                    t.append('-dims__internal"><use xlink:href="#inbox--'),
                    t.append(twig.filter.escape(this.env_, "delivery_status"in i ? i.delivery_status : "", "light_escape", null, !0)),
                    t.append('"></use></svg></div>'))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "quot_data"in i && i.quot_data) {
                        i._parent = i;
                        var a = "quot_data"in i ? i.quot_data : ""
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
                            i.quotation = n,
                            new (e._get("interface/notes/types/amojo/quotation.twig"))(this.env_).render_(t, twig.extend({}, i, "quotation"in i ? i.quotation : "")),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    }
                    "text" != twig.attr("message"in i ? i.message : "", "type") && new (e._get("interface/notes/types/amojo/amojo_joined_attach.twig"))(this.env_).render_(t, twig.extend({}, i, "message"in i ? i.message : "")),
                    twig.empty(twig.attr("message"in i ? i.message : "", "text")) || (i._parent = i,
                    a = this.env_.filter("split", this.env_, this.env_.filter("parse_urls", twig.filter.escape(this.env_, twig.attr("message"in i ? i.message : "", "text"))), "\n"),
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.line = e,
                        t.append('<div class="feed-note__message_paragraph">'),
                        t.append(twig.filter.def(twig.filter.trim("line"in i ? i.line : ""), "&nbsp;")),
                        t.append("</div>")
                    }
                    ), this))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_internal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/internal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="preload-file__item-download-wrapper"><div class="preload-file__item-download-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "File not found"), "light_escape", null, !0)),
                    e.append('</div><a class="preload-file__item-lost-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Details"), "light_escape", null, !0)),
                    e.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_lost_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/lost_file", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    1 == twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") && 1 == twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "type") ? new (e._get("interface/notes/types/amojo/ai/first.twig"))(this.env_).render_(t, i) : twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") > 1 && 1 == twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "type") ? new (e._get("interface/notes/types/amojo/ai/changed.twig"))(this.env_).render_(t, i) : 1 == twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") && 2 == twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "type") ? new (e._get("interface/notes/types/amojo/ai/first.twig"))(this.env_).render_(t, i) : twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") > 1 && 2 == twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "type") ? new (e._get("interface/notes/types/amojo/ai/changed.twig"))(this.env_).render_(t, i) : 1 == twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") && 3 == twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "type") ? new (e._get("interface/notes/types/amojo/ai/button.twig"))(this.env_).render_(t, i) : twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") > 1 && 3 == twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "type") && new (e._get("interface/notes/types/amojo/ai/button_changed.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_metadata_templates"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/metadata_templates", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="preload-progress-bar"><div class="preload-progress-bar__title" style="text-align: end">'),
                    e.append(twig.filter.escape(this.env_, ("progress"in t ? twig.filter.def("progress"in t ? t.progress : "", "0") : "0") + "%", "light_escape", null, !0)),
                    e.append('</div><div class="preload-progress-bar__wrapper"><div class="preload-progress-bar__block" style="width: '),
                    e.append(twig.filter.escape(this.env_, ("progress"in t ? twig.filter.def("progress"in t ? t.progress : "", "0") : "0") + "%", "light_escape", null, !0)),
                    e.append('"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_progress_bar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/progress_bar", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.date = "created_at"in t ? t.created_at : "",
                    t.user = twig.attr("amo_author"in t ? t.amo_author : "", "name"),
                    t.message_text = twig.attr("message"in t ? t.message : "", "text"),
                    "text" == twig.attr("message"in t ? t.message : "", "type") || "contact" == twig.attr("message"in t ? t.message : "", "type") ? t.is_text = !0 : (t.is_text = !1,
                    "location" != twig.attr("message"in t ? t.message : "", "type") && (t.message = twig.attr("message"in t ? t.message : "", "attachment"))),
                    "picture" == twig.attr("message"in t ? t.message : "", "type") ? (t.attach_type = "picture",
                    t.body_text = this.env_.filter("i18n", "Image")) : "video" == twig.attr("message"in t ? t.message : "", "type") ? (t.attach_type = "video",
                    t.body_text = this.env_.filter("i18n", "Video") + (0 != twig.attr("message"in t ? t.message : "", "duration") ? " (" + this.env_.filter("time", twig.attr("message"in t ? t.message : "", "duration")) + ")" : "")) : "location" == twig.attr("message"in t ? t.message : "", "type") ? (t.attach_type = "location",
                    t.body_text = this.env_.filter("i18n", "Location (amojo)")) : "voice" == twig.attr("message"in t ? t.message : "", "type") ? (t.attach_type = "voice",
                    t.body_text = this.env_.filter("i18n", "Voice message") + (0 != twig.attr("message"in t ? t.message : "", "duration") ? " (" + this.env_.filter("time", twig.attr("message"in t ? t.message : "", "duration")) + ")" : "")) : "file" == twig.attr("message"in t ? t.message : "", "type") || "audio" == twig.attr("message"in t ? t.message : "", "type") ? (t.attach_type = "file",
                    t.body_text = twig.attr("message"in t ? t.message : "", "name")) : "is_instagram"in t && t.is_instagram ? (t.attach_type = "instagram",
                    t.body_text = "Instagram") : "is_vk"in t && t.is_vk ? (t.attach_type = "video",
                    t.is_text = !1,
                    t.body_text = "VK") : "sticker" == twig.attr("message"in t ? t.message : "", "type") && (t.attach_type = "sticker",
                    t.body_text = this.env_.filter("i18n", "Sticker")),
                    e.append('<div class="feed-note__content quotation__container '),
                    e.append("is_text"in t && t.is_text ? "" : "quotation__container_attach"),
                    e.append(" quotation__message_type-"),
                    "attach_type"in t && t.attach_type ? e.append(twig.filter.escape(this.env_, "attach_type"in t ? t.attach_type : "", "light_escape", null, !0)) : e.append("text"),
                    e.append(" quotation__type_"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append("is_incoming"in t && t.is_incoming ? "quotation-incoming" : ""),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('">'),
                    (!("is_text"in t) || !t.is_text || "is_instagram"in t && t.is_instagram) && (e.append('<div class="quotation__attach quotation__attach_'),
                    e.append(twig.filter.escape(this.env_, "attach_type"in t ? t.attach_type : "", "light_escape", null, !0)),
                    e.append('"><svg class="quotation__attach-icon svg-icon svg-inbox--'),
                    e.append(twig.filter.escape(this.env_, "attach_type"in t ? t.attach_type : "", "light_escape", null, !0)),
                    e.append("is_incoming"in t && t.is_incoming || "location" == twig.attr("message"in t ? t.message : "", "type") || "external" != ("type"in t ? t.type : "") ? "" : "-light"),
                    e.append("-dims "),
                    e.append(twig.filter.escape(this.env_, "icon_class"in t ? t.icon_class : "", "light_escape", null, !0)),
                    e.append('"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#inbox--'),
                    e.append(twig.filter.escape(this.env_, "attach_type"in t ? t.attach_type : "", "light_escape", null, !0)),
                    e.append("is_incoming"in t && t.is_incoming || "location" == twig.attr("message"in t ? t.message : "", "type") || "external" != ("type"in t ? t.type : "") ? "" : "-light"),
                    e.append('"></use></svg></div>')),
                    e.append('<div class="feed-note__header quotation__header"><div class="feed-note__header-inner"><div class="feed-note__header-inner-nowrap">'),
                    e.append(this.renderBlock("header", t, i)),
                    e.append('</div></div></div><div class="feed-note__body quotation__body"><div class="feed-note__message_paragraph quotation__message-text">'),
                    twig.empty("message_text"in t ? t.message_text : "") || "is_instagram"in t && t.is_instagram || "audio" == twig.attr("message"in t ? t.message : "", "type") ? e.append(twig.filter.escape(this.env_, "body_text"in t ? t.body_text : "", "light_escape", null, !0)) : e.append(twig.filter.def(twig.filter.trim(this.env_.filter("parse_urls", twig.filter.escape(this.env_, "message_text"in t ? t.message_text : ""))), "&nbsp;")),
                    e.append("</div></div>"),
                    "compose" == ("type"in t ? t.type : "") && e.append('<div class="feed-compose__quotation_delete quotation__delete-button"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></div>'),
                    e.append("</div>")
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_quotation_header: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_quotation"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/quotation", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    ("count"in t ? t.count : "") > 1 && (e.append('<div class="reaction-notification__badge"><span class="reaction-notification__badge-count">'),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append('<div class="reaction-notification" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><svg width="16" height="14" class="reaction-notification__icon svg-icon svg-inbox--reaction-notification-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#inbox--reaction-notification"></use></svg></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_reaction_notification"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/reaction_notification", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append("<svg "),
                    "class_name"in t && t.class_name && (e.append('class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.25 9.75H8.75V11.25H7.25V9.75ZM7.25 3.75H8.75V8.25H7.25V3.75ZM7.9925 0C3.8525 0 0.5 3.36 0.5 7.5C0.5 11.64 3.8525 15 7.9925 15C12.14 15 15.5 11.64 15.5 7.5C15.5 3.36 12.14 0 7.9925 0ZM8 13.5C4.685 13.5 2 10.815 2 7.5C2 4.185 4.685 1.5 8 1.5C11.315 1.5 14 4.185 14 7.5C14 10.815 11.315 13.5 8 13.5Z"/></svg>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_warning_icon"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/warning_icon", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-note__ai salesbot"><span class="feed-note__ai_text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "What did the client mean?"), "light_escape", null, !0)),
                    i._parent = i;
                    var a = twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data")
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
                        i.button = e,
                        t.append('<a class="button_ai '),
                        twig.attr(s, "first") ? t.append("button_ai-first") : twig.attr(s, "last") && twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9 && t.append(" with_border "),
                        t.append('" href="#" data-text="'),
                        t.append(twig.filter.escape(this.env_, "button"in i ? i.button : "", "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "button"in i ? i.button : "", "light_escape", null, !0)),
                        t.append("</a>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9 && twig.filter.length(this.env_, "intent_items"in i ? i.intent_items : "") && (t.append('<div class="feed-note__ai_answer"><span class="feed-note__ai_answer_plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "intent"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "ai_answer",
                        class_name: "js-ai_answer",
                        items: "intent_items"in i ? i.intent_items : "",
                        selected: twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") - 1, void 0, "array"), "data"), "helpbot_id")
                    })),
                    t.append("</div>")),
                    t.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_ai_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/ai/button", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="feed-note__ai salesbot-changed">'),
                    i._parent = i;
                    var a = "metadata"in i ? i.metadata : ""
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
                        i.meta = n,
                        twig.attr(s, "first")) {
                            t.append('<span class="feed-note__ai_text feed-note__ai_text-changed">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "What did the client mean?"), "light_escape", null, !0));
                            var r = twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data")
                              , o = {
                                parent: s,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(r)) {
                                var p = twig.count(r);
                                o.revindex0 = p - 1,
                                o.revindex = p,
                                o.length = p,
                                o.last = 1 === p
                            }
                            twig.forEach(r, (function(e, n) {
                                i._key = n,
                                i.button = e,
                                t.append('<a class="button_ai '),
                                twig.attr(o, "first") && t.append("button_ai-first"),
                                t.append('" href="#" data-text="'),
                                t.append(twig.filter.escape(this.env_, "button"in i ? i.button : "", "light_escape", null, !0)),
                                t.append('">'),
                                t.append(twig.filter.escape(this.env_, "button"in i ? i.button : "", "light_escape", null, !0)),
                                t.append("</a>"),
                                ++o.index0,
                                ++o.index,
                                o.first = !1,
                                o.length && (--o.revindex0,
                                --o.revindex,
                                o.last = 0 === o.revindex0)
                            }
                            ), this),
                            t.append("</span>")
                        } else
                            t.append('<span class="feed-note__ai_text '),
                            twig.attr(s, "last") && t.append("last-row"),
                            t.append('"><span class="'),
                            twig.attr(s, "last") && twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9 && t.append("with_border"),
                            t.append(" "),
                            twig.attr(s, "last") || t.append("feed-note__ai_previous"),
                            t.append('">'),
                            2 == twig.attr("meta"in i ? i.meta : "", "type") ? (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("meta"in i ? i.meta : "", "data"), "user_name"), "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Changed intent") + ":", "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("meta"in i ? i.meta : "", "data"), "helpbot_name"), "light_escape", null, !0))) : (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("meta"in i ? i.meta : "", "data"), "user_name"), "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "chosen the button"), "light_escape", null, !0)),
                            t.append(' "'),
                            t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("meta"in i ? i.meta : "", "data"), "button_name"), "light_escape", null, !0)),
                            t.append('"')),
                            t.append("</span>"),
                            twig.attr(s, "last") && twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9 && twig.filter.length(this.env_, "intent_items"in i ? i.intent_items : "") && (t.append('<div class="feed-note__ai_answer"><span class="feed-note__ai_answer_plug">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "intent"), "light_escape", null, !0)),
                            t.append("</span>"),
                            new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                name: "ai_answer",
                                class_name: "js-ai_answer",
                                items: "intent_items"in i ? i.intent_items : "",
                                selected: twig.attr(twig.attr("meta"in i ? i.meta : "", "data"), "helpbot_id")
                            })),
                            t.append("</div>")),
                            t.append("</span>");
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_ai_button_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/ai/button_changed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        text: twig.bind(this.block_text, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/amojo/ai/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_text = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="feed-note__ai_wrap"><div class="feed-note__ai_previous"><span class="feed-note__ai_previous-text first_message">'),
                    twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data"), "user_name") ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data"), "user_name"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Salesbot"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "identified the intent") + ":", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data"), "helpbot_name"), "light_escape", null, !0)),
                    t.append(" "),
                    twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data"), "probability") && (t.append("("),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", 0, void 0, "array"), "data"), "probability"), "light_escape", null, !0)),
                    t.append("%)")),
                    t.append("</span></div>"),
                    i._parent = i;
                    var a = "metadata"in i ? i.metadata : ""
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
                        t.append('<div class="feed-note__ai_wrap_new'),
                        twig.attr(s, "index") == twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") && t.append(" last-row"),
                        t.append('">'),
                        twig.attr(s, "index") > 1 && (t.append('<div class="'),
                        twig.attr(s, "index") == twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") ? t.append("feed-note__ai_new") : t.append("feed-note__ai_previous"),
                        t.append('"><span class="feed-note__ai_'),
                        twig.attr(s, "index") != twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") && t.append("previous-"),
                        t.append("text"),
                        twig.attr(s, "index") != twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") || "helpbot_disabled"in i && i.helpbot_disabled || !(twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9) || t.append(" with_border"),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "data"), "helpbot_id"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "data"), "user_name"), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Changed intent") + ":", "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "data"), "helpbot_name"), "light_escape", null, !0)),
                        t.append("</span></div>")),
                        twig.attr(s, "last") && (!("helpbot_disabled"in i) || !i.helpbot_disabled) && twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9 && twig.filter.length(this.env_, "intent_items"in i ? i.intent_items : "") && (t.append('<div class="feed-note__ai_answer"><span class="feed-note__ai_answer_plug">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Change the match"), "light_escape", null, !0)),
                        t.append('<div class="arrow-icon"></div></span>'),
                        new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: "ai_answer",
                            class_name: "js-ai_answer",
                            items: "intent_items"in i ? i.intent_items : "",
                            selected: twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") - 1, void 0, "array"), "data"), "helpbot_id")
                        })),
                        t.append("</div>")),
                        t.append("</div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_ai_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/ai/changed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        text: twig.bind(this.block_text, this),
                        select: twig.bind(this.block_select, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/amojo/ai/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_text = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="feed-note__ai_text first_message '),
                    "helpbot_disabled"in t && t.helpbot_disabled || !(twig.filter.length(this.env_, twig.attr("message"in t ? t.message : "", "text")) > 9) || e.append("with_border"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "data"), "helpbot_id"), "light_escape", null, !0)),
                    e.append('">'),
                    twig.attr(twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "data"), "user_name") ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "data"), "user_name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Salesbot"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "identified the intent") + ":", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "data"), "helpbot_name"), "light_escape", null, !0)),
                    e.append(" "),
                    twig.attr(twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "data"), "probability") && (e.append("("),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "data"), "probability"), "light_escape", null, !0)),
                    e.append("%)")),
                    e.append("</span>")
                }
                ,
                t.prototype.block_select = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    (!("helpbot_disabled"in i) || !i.helpbot_disabled) && twig.filter.length(this.env_, twig.attr("message"in i ? i.message : "", "text")) > 9 && twig.filter.length(this.env_, "intent_items"in i ? i.intent_items : "") && (t.append('<div class="feed-note__ai_answer"><span class="feed-note__ai_answer_plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Change the match"), "light_escape", null, !0)),
                    t.append('<div class="arrow-icon"></div></span>'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "ai_answer",
                        class_name: "js-ai_answer",
                        items: "intent_items"in i ? i.intent_items : "",
                        selected: twig.attr(twig.attr(twig.attr("metadata"in i ? i.metadata : "", twig.filter.length(this.env_, "metadata"in i ? i.metadata : "") - 1, void 0, "array"), "data"), "helpbot_id")
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_ai_first"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/ai/first", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        text: twig.bind(this.block_text, this),
                        select: twig.bind(this.block_select, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.type_ai = ["first", "changed", "buttons"],
                    e.append('<div class="feed-note__ai feed-note__ai_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("type_ai"in t ? t.type_ai : "", twig.attr(twig.attr("metadata"in t ? t.metadata : "", 0, void 0, "array"), "type") - 1, void 0, "array"), "light_escape", null, !0)),
                    e.append(" "),
                    1 == twig.filter.length(this.env_, "metadata"in t ? t.metadata : "") && e.append("firts-row"),
                    e.append('">'),
                    e.append(this.renderBlock("text", t, i)),
                    e.append(this.renderBlock("select", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_text = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_select = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_ai_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/ai/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="feed-note__carousel">'),
                    t._parent = t;
                    var n = "carouselParams"in t ? t.carouselParams : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.carousel = i,
                        t.headerMedia = twig.attr(twig.attr("carousel"in t ? t.carousel : "", "header"), "media"),
                        t.mediaSource = twig.attr("headerMedia"in t ? t.headerMedia : "", "media") || twig.attr("headerMedia"in t ? t.headerMedia : "", "media_200_200") || twig.attr("headerMedia"in t ? t.headerMedia : "", "media_320_200"),
                        e.append('<div class="feed-note__carousel-card">'),
                        "mediaSource"in t && t.mediaSource && "picture" == twig.attr("headerMedia"in t ? t.headerMedia : "", "type") ? (e.append('<img class="feed-note__carousel-card-preview" src="'),
                        e.append(twig.filter.escape(this.env_, "mediaSource"in t ? t.mediaSource : "", "light_escape", null, !0)),
                        e.append('" />')) : "mediaSource"in t && t.mediaSource && "video" == twig.attr("headerMedia"in t ? t.headerMedia : "", "type") ? (e.append('<video class="feed-note__carousel-card-preview"><source src="'),
                        e.append(twig.filter.escape(this.env_, "mediaSource"in t ? t.mediaSource : "", "light_escape", null, !0)),
                        e.append('"></video>')) : (e.append("<span>"),
                        e.append(twig.filter.escape(this.env_, twig.attr("headerMedia"in t ? t.headerMedia : "", "name"), "light_escape", null, !0)),
                        e.append("</span>")),
                        e.append('<div class="feed-note__carousel-card-caption-wrapper"><span class="feed-note__carousel-card-caption">'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("carousel"in t ? t.carousel : "", "body"), "text"), "light_escape", null, !0)),
                        e.append("</span></div></div>")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_notes_types_amojo_whatsapp_carousel"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/notes/types/amojo/whatsapp/carousel", t)
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
        e._sentryDebugIds[t] = "c1a5cb96-dda1-4cb9-89d1-3416872ae2d5",
        e._sentryDebugIdIdentifier = "sentry-dbid-c1a5cb96-dda1-4cb9-89d1-3416872ae2d5")
    } catch (e) {}
}();
//# sourceMappingURL=86831.990f941a0d0a383b5bc7.js.map
