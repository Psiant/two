(window.webpackChunk = window.webpackChunk || []).push([[84685], {
    284685: (e, t, i) => {
        var n, a;
        n = [i(460159), i(94849), i(86831), i(591880), i(385078), i(295165), i(92474)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        js_constants: twig.bind(this.block_js_constants, this),
                        main_fields: twig.bind(this.block_main_fields, this),
                        linked: twig.bind(this.block_linked, this),
                        meter_fcp_card: twig.bind(this.block_meter_fcp_card, this),
                        static: twig.bind(this.block_static, this),
                        fields_footer: twig.bind(this.block_fields_footer, this),
                        feed: twig.bind(this.block_feed, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards.css"], this), "light_escape", null, !0)),
                    t.append(this.renderBlock("js_constants", i, n)),
                    "header_view"in i && i.header_view && new (e._get("interface/cards/header.twig"))(this.env_).render_(t, i),
                    t.append('<div class="js-card-fields card-holder__fields '),
                    "is_free_user"in i && i.is_free_user && t.append("card-holder__fields_free-user"),
                    t.append('" id="card_fields" '),
                    ("layout_width"in i ? i.layout_width : "") > 0 && (t.append(' style="width: '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("number_format", this.env_, "layout_width"in i ? i.layout_width : "", 4, "."), "light_escape", null, !0)),
                    t.append('%" ')),
                    t.append('><div class="card-holder__container custom-scroll '),
                    t.append("is_unsorted"in i && i.is_unsorted ? "card-holder__container_reduced" : ""),
                    t.append('"><div class="card-fields__fields-block">'),
                    "back_btn_hidden"in i && i.back_btn_hidden || "header_view"in i && i.header_view || t.append('<div class="js-back-button card-fields__top-back"><svg class="svg-icon svg-common--arrow-left-dims"><use xlink:href="#common--arrow-left"></use></svg></div>'),
                    t.append(this.renderBlock("main_fields", i, n)),
                    t.append('</div><div class="card-fields__linked-block js-linked_elements_wrapper">'),
                    t.append(this.renderBlock("linked", i, n)),
                    t.append("</div>"),
                    "is_plug"in i && i.is_plug || (t.append(this.renderBlock("meter_fcp_card", i, n)),
                    t.append(this.renderBlock("static", i, n))),
                    t.append("</div>"),
                    "is_plug"in i && i.is_plug || (t.append('<div class="card-fields__button-block hidden">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "save_and_close_contacts_link",
                        class_name: "button-input-disabled button-input_add js-button-with-loader card-top-save-button card-top-name__right__save",
                        text: twig.attr("lang"in i ? i.lang : "", "save"),
                        context_menu: 0
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "#cancel_button",
                        class_name: "button-cancel js-card-cancel card-top-name__right__cancel",
                        text: twig.attr("lang"in i ? i.lang : "", "cancel"),
                        context_menu: 0
                    })),
                    t.append("</div>")),
                    t.append(this.renderBlock("fields_footer", i, n)),
                    t.append('</div><div class="js-card-column-resizer card-holder__column-resizer"></div><div class="js-card-feed card-holder__feed">'),
                    t.append(this.renderBlock("feed", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_js_constants = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_main_fields = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/forms/entity_form.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_linked = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/linked.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_meter_fcp_card = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_fields_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_feed = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "is_plug"in i && i.is_plug || new (e._get("interface/notes/wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        scroller_id: "notes_holder",
                        is_add_mode: !(twig.attr("main"in i ? i.main : "", "id") > 0),
                        is_preload: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_base"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/base", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        status: twig.bind(this.block_status, this),
                        tabs: twig.bind(this.block_tabs, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="card-entity-form__top">'),
                    e.append(this.renderBlock("name", t, i)),
                    e.append(this.renderBlock("status", t, i)),
                    e.append('</div><div class="card-tabs-wrapper"><div class="card-tabs" id="card_tabs">'),
                    e.append(this.renderBlock("tabs", t, i)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_name = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/name.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_status = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_tabs = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="card-tabs-slider"></div><div class="card-plug__fields-line card-plug__fields-line_tabs js-card-tab-plug" style="width: 75%"></div><div class="card-tabs__dots js-linked-toggler"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_form_top"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/form_top", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.is_editable = ("grant_edit"in i ? i.grant_edit : "") || ("is_add"in i ? i.is_add : ""),
                    t.append('<div class="inbox-messaging-card-header js-card-header"><button class="js-toggle-fields inbox-messaging-card-header__toggle"><svg class="svg-icon svg-common--hamburger-dims"><use xlink:href="#common--hamburger"></use></svg><svg class="svg-icon svg-cards--close-dims"><use xlink:href="#cards--close"></use></svg></button><div class="inbox-messaging-card-header__name-and-tags js-name-and-tags"><div class="card-fields__top"><div class="card-fields__top-name-block">'),
                    "contacts" == ("entity_type"in i ? i.entity_type : "") ? new (e._get("interface/cards/header_name_contacts.twig"))(this.env_).render_(t, i) : new (e._get("interface/cards/header_name.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>"),
                    "disable_tags"in i && i.disable_tags || (t.append('<div class="card-fields__tags-scoring-container">'),
                    ("can_add"in i && i.can_add || twig.filter.length(this.env_, twig.attr("main"in i ? i.main : "", "tags"))) && (t.append('<div id="add_header_tags" class="card-fields__top-name-add-tags-label doubles_button">'),
                    new (e._get("interface/controls/tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("main"in i ? i.main : "", "tags"),
                        add_tag_text: this.env_.filter("i18n", "ADD_TAGS")
                    })),
                    t.append("</div>")),
                    t.append("</div>")),
                    twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_full_enabled") && (t.append('<div class="card-fields__segments-scoring-container"><div id="add_header_segments" class="suggest-segments__wrapper '),
                    "is_editable"in i && i.is_editable || t.append("suggest-segments_not-editable"),
                    t.append('">'),
                    new (e._get("interface/filter/customers/suggest_segments/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("main"in i ? i.main : "", "segments"),
                        id: "customer_segments_header",
                        input_name: "customer_segments_header",
                        modify_class: "suggest-segments_is-card",
                        loader_hidden: !0
                    })),
                    t.append("</div></div>")),
                    t.append("</div>"),
                    "leads" == ("entity_type"in i ? i.entity_type : "") && (t.append('<div class="inbox-messaging-card-header__status linked-form__field linked-form__field_status linked-form__field_status-lead '),
                    "has_pipelines"in i && i.has_pipelines || t.append("inbox-messaging-card-header__status--single-select"),
                    t.append('"><div class="linked-form__field__value js-cf-readonly">'),
                    new (e._get("interface/cards/leads/controls/status.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "card-header-lead[STATUS]",
                        id: "card-header-lead_status_input",
                        class_name: "card-cf-lead-status-select",
                        view_mode_id: "card-header_status_view_mode",
                        selected: twig.attr("main"in i ? i.main : "", "STATUS", void 0, "array"),
                        has_pipelines: "has_pipelines"in i ? i.has_pipelines : "",
                        selected_pipe: {
                            input: {
                                name: "card-header-lead[PIPELINE]",
                                id: "card-header-lead[PIPELINE_ID]"
                            },
                            id: twig.attr("main"in i ? i.main : "", "PIPELINE_ID", void 0, "array"),
                            name: "card-header-lead[PIPELINE_ID]"
                        },
                        editable: "is_editable"in i ? i.is_editable : "",
                        statuses: "statuses"in i ? i.statuses : "",
                        items: "statuses"in i ? i.statuses : "",
                        select_class_name: "card-header-lead-statuses-select js-select-without-blur",
                        pipeline_select_class_name: "card-header-lead-pipeline-select",
                        pipeline_select_inner_class_name: "card-header-lead-pipeline-select__inner"
                    })),
                    t.append("</div></div>")),
                    t.append('<div class="inbox-messaging-card-header-unsaved-block js-unsaved"><div class="inbox-messaging-card-header-unsaved-block__content">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "card-header-save",
                        class_name: "button-input_add js-button-with-loader card-top-save-button card-top-name__right__save",
                        text: twig.attr("lang"in i ? i.lang : "", "save"),
                        blue: !0,
                        context_menu: 0
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "card-header-cancel",
                        class_name: "button-cancel js-card-header-cancel",
                        text: twig.attr("lang"in i ? i.lang : "", "cancel"),
                        context_menu: 0
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        block_control: twig.bind(this.block_block_control, this),
                        tags: twig.bind(this.block_tags, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/name.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_block_control = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        class_name: "card-fields__top-name-input js-control-autosized_input js-card-header-name",
                        id: "card-header-person_n",
                        disabled: !("can_add"in i && i.can_add)
                    }),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "name_params"in i ? i.name_params : ""))
                }
                ,
                t.prototype.block_tags = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_header_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/header_name", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        tags: twig.bind(this.block_tags, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/contacts/cards/name.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "name_params"in t && t.name_params || (t.name_params = []),
                    t.name_params = twig.filter.merge("name_params"in t ? t.name_params : "", {
                        is_spaceless: !0
                    }),
                    t.disable_textarea = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_tags = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_header_name_contacts"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/header_name_contacts", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="card-fields__linked-block-item card-fields__linked-block-item_companies-contacts js-linked_contacts_and_companies js-card-fields__linked-block" data-type_id="1" '),
                    "default_tab_selected"in i && i.default_tab_selected || t.append('style="display: none"'),
                    t.append(">"),
                    new (e._get("interface/cards/forms/forms.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        elements: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "main"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        entity_type: "contacts",
                        main_element_type: twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"),
                        lang: "lang"in i ? i.lang : "",
                        main: "main"in i ? i.main : "",
                        hide_block: "hide_block"in i ? i.hide_block : "",
                        grant_edit: "grant_edit"in i ? i.grant_edit : "",
                        can_add: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "can_add")
                    })),
                    twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "can_add") && (t.append('<div class="linked-forms__item linked-forms__item_is-add '),
                    "is_add"in i && i.is_add && t.append("expanded"),
                    t.append('" id="new_contact_form">'),
                    new (e._get("interface/cards/forms/entity_form_linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "linked_entity_add",
                        main: "main"in i ? i.main : "",
                        element: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "element"),
                        element_type: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "element_type"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        groups: !1,
                        form_action: "form_action_contact"in i ? i.form_action_contact : "",
                        form_id: "new_contact",
                        main_entity: "main_entity"in i ? i.main_entity : "",
                        entity: "contacts",
                        entity_def: "contact",
                        user_id: twig.attr("user"in i ? i.user : "", "id"),
                        placeholder: twig.attr("lang"in i ? i.lang : "", "placeholder_contact"),
                        lang: "lang"in i ? i.lang : ""
                    })),
                    t.append("</div>")),
                    new (e._get("interface/cards/forms/forms.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        main: "main"in i ? i.main : "",
                        elements: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "main"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        entity_type: "companies",
                        main_element_type: twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"),
                        hide_block: "hide_block"in i ? i.hide_block : "",
                        grant_edit: "grant_edit"in i ? i.grant_edit : "",
                        can_add: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "can_add"),
                        class_name: "company_contacts__company",
                        lang: "lang"in i ? i.lang : ""
                    })),
                    twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "can_add") && (i.hide_button = twig.attr("main"in i ? i.main : "", "ID") <= 0 || twig.filter.length(this.env_, twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "main")),
                    t.append('<div class="linked-forms__item linked-forms__item_is-add" id="new_company_form" '),
                    twig.filter.length(this.env_, twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "main")) && t.append('style="display: none"'),
                    t.append(">"),
                    new (e._get("interface/cards/forms/entity_form_linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "linked_entity_add",
                        main: "main"in i ? i.main : "",
                        element: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "element"),
                        element_type: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "element_type"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        groups: !1,
                        form_action: "form_action_company"in i ? i.form_action_company : "",
                        form_id: "new_company",
                        main_entity: "main_entity"in i ? i.main_entity : "",
                        entity: "companies",
                        entity_def: "company",
                        user_id: twig.attr("user"in i ? i.user : "", "id"),
                        placeholder: twig.attr("lang"in i ? i.lang : "", "placeholder_company"),
                        lang: "lang"in i ? i.lang : ""
                    })),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_linked"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/linked", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        block_control: twig.bind(this.block_block_control, this),
                        tags: twig.bind(this.block_tags, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="card-entity-form__top-cover" '),
                    "profile"in i && i.profile && (t.append(' style="background-image: url('),
                    t.append(twig.filter.escape(this.env_, twig.attr("profile"in i ? i.profile : "", "profile_avatar_big"), "light_escape", null, !0)),
                    t.append("), url("),
                    t.append(twig.filter.escape(this.env_, twig.attr("profile"in i ? i.profile : "", "profile_avatar"), "light_escape", null, !0)),
                    t.append(');" ')),
                    t.append('></div><div class="card-fields__top-name-block"><div class="card-fields__top-name" id="card_name_holder"><div class="card-fields__top-name-wrapper"><div class="card-fields__top-name-input-wrapper js-card-name '),
                    "is_add"in i && i.is_add && t.append("card-fields__top-name-input-wrapper_add-mode"),
                    t.append('">'),
                    i.tmpl_name = "is_add"in i && i.is_add ? "suggest" : "textarea",
                    i.tags_fake_items = [],
                    "is_add"in i && i.is_add || "header_view"in i && i.header_view || (twig.filter.length(this.env_, twig.attr("main"in i ? i.main : "", "name")) && (i.tags_fake_items = [{
                        id: "lead_id",
                        title: "#" + twig.attr("main"in i ? i.main : "", "ID"),
                        hidden: !twig.attr("main"in i ? i.main : "", "ID") || !twig.attr("main"in i ? i.main : "", "show_id_tag"),
                        is_fake: !0
                    }]),
                    i.tags_fake_items = twig.filter.merge("tags_fake_items"in i ? i.tags_fake_items : "", [{
                        id: "scoring",
                        title: twig.attr(twig.attr("main"in i ? i.main : "", "SCORING"), "VALUE"),
                        color: twig.attr(twig.attr("main"in i ? i.main : "", "SCORING"), "COLOR"),
                        hidden: !twig.attr(twig.attr("main"in i ? i.main : "", "SCORING"), "ACTIVE"),
                        is_fake: !0
                    }])),
                    "name_params"in i && i.name_params || (i.name_params = []),
                    i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        value: twig.attr("main"in i ? i.main : "", "name"),
                        name: "input_name"in i ? i.input_name : "",
                        id: "person_n",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "placeholder_name"),
                        styled_input: !0,
                        class_name: "card-fields__top-name-input js-textarea-autosize"
                    }),
                    "is_add"in i && i.is_add && (i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        class_name: "",
                        input_class_name: "js-suggest-main-name card-fields__top-name-input",
                        ajax: {
                            url: "/private/ajax/search.php",
                            params: "type=" + ("name_suggest_entity"in i ? i.name_suggest_entity : "") + "&query_type=name&q=#q#"
                        }
                    })),
                    t.append(this.renderBlock("block_control", i, n)),
                    t.append("</div>"),
                    twig.filter.length(this.env_, "context_menu"in i ? i.context_menu : "") && (t.append('<div class="card-fields__top-name-more">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        inner_class_name: "button-input-more-inner",
                        class_name: "button-input-more",
                        icon_class_name: "icon-dots-card icon-dots button-input-more-icon",
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        tab_index: "-1"
                    })),
                    t.append("</div>")),
                    t.append("</div>"),
                    t.append(this.renderBlock("tags", i, n)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_block_control = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/" + ("tmpl_name"in i ? i.tmpl_name : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, "name_params"in i ? i.name_params : ""))
                }
                ,
                t.prototype.block_tags = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "disable_tags"in i && i.disable_tags || (t.append('<div class="card-fields__tags-scoring-container">'),
                    ("can_add"in i && i.can_add || twig.filter.length(this.env_, twig.attr("main"in i ? i.main : "", "tags"))) && (t.append('<div id="add_tags" class="card-fields__top-name-add-tags-label doubles_button">'),
                    new (e._get("interface/common/fast_tags/fast_tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("main"in i ? i.main : "", "tags"),
                        id: "",
                        can_add: "can_add"in i ? i.can_add : "",
                        lang: "lang"in i ? i.lang : "",
                        fake_items: "tags_fake_items"in i ? i.tags_fake_items : "",
                        item_tmpl: "interface/common/fast_tags/item.twig"
                    })),
                    t.append("</div>")),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/name", t)
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
                    return e._get("interface/cards/plugs/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="linked-form__field linked-form__field_reassign"><div class="linked-form__field__label" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "entity_edit_main_user"), "light_escape", null, !0)),
                    t.append('"><label for="" class="card-cf-name-label__label"><span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "entity_edit_main_user"), "light_escape", null, !0)),
                    t.append('</span></label></div><div class="linked-form__field__value">'),
                    i.main_user_name = twig.attr("main"in i ? i.main : "", "MAIN_USER_NAME", void 0, "array"),
                    i.main_user_id = twig.attr("main"in i ? i.main : "", "MAIN_USER_ID", void 0, "array"),
                    twig.attr(twig.attr("main"in i ? i.main : "", "main_user"), "name") && (i.main_user_name = twig.attr(twig.attr("main"in i ? i.main : "", "main_user"), "name")),
                    twig.attr("main"in i ? i.main : "", "main_user_id") && (i.main_user_id = twig.attr("main"in i ? i.main : "", "main_user_id")),
                    "grant_edit"in i && i.grant_edit ? new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: [{
                            id: "main_user_id"in i ? i.main_user_id : "",
                            title: "main_user_name"in i ? i.main_user_name : ""
                        }],
                        class_name: "card-fields__fields-block__users-select",
                        id: "lead_main_user-users_select_holder",
                        input_name: ("main_entity_def"in i ? i.main_entity_def : "") + "[MAIN_USER]"
                    })) : (t.append('<span class="linked-form__field-inner_no-rights">'),
                    t.append(twig.filter.escape(this.env_, "main_user_name"in i ? i.main_user_name : "", "light_escape", null, !0)),
                    t.append('</span><input type="checkbox" checked="checked" class="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "main_entity_def"in i ? i.main_entity_def : "", "light_escape", null, !0)),
                    t.append('[MAIN_USER]" id="cbx_drop_'),
                    t.append(twig.filter.escape(this.env_, "main_user_id"in i ? i.main_user_id : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "main_user_id"in i ? i.main_user_id : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_responsible"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/responsible", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        main_entity_stats: twig.bind(this.block_main_entity_stats, this),
                        source: twig.bind(this.block_source, this),
                        days_in_work: twig.bind(this.block_days_in_work, this),
                        stats_items: twig.bind(this.block_stats_items, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    i.item_template = "interface/cards/stats/items/" + ("type"in i ? i.type : "") + ".twig",
                    "entity_type"in i && i.entity_type && (i.main_info_template = "interface/cards/stats/main_info/" + ("entity_type"in i ? i.entity_type : "") + ".twig"),
                    t.append('<div class="card-stats"><div class="card-stats__inner">'),
                    twig.attr("element"in i ? i.element : "", "is_new") ? (t.append('<div class="card-stats__no-data">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "No data"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append('<div class="card-stats__main-entity-stats main-entity-stats"><div class="main-entity-stats__inner">'),
                    t.append(this.renderBlock("main_entity_stats", i, n)),
                    t.append('</div></div><div class="card-stats__linked-entities-stats linked-entities-stats"><div class="linked-entities-stats__stats-list">'),
                    t.append(this.renderBlock("stats_items", i, n)),
                    "leads" == ("element_type"in i ? i.element_type : "") && (new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("feed"in i ? i.feed : "", "notes"),
                        title: this.env_.filter("i18n", "(Of) Notes")
                    })),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("feed"in i ? i.feed : "", "external_chats"),
                        title: this.env_.filter("i18n", "(Of) Chats with client")
                    })),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("feed"in i ? i.feed : "", "internal_chats"),
                        title: this.env_.filter("i18n", "(Of) Internal Chats")
                    }))),
                    t.append("</div></div>")),
                    t.append("</div>"),
                    twig.attr("_account_features"in i ? i._account_features : "", "operday") && twig.attr(twig.attr("stats"in i ? i.stats : "", "operday"), "spent_time", void 0, void 0, !0) && new (e._get("interface/cards/stats/items/operday.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("stats"in i ? i.stats : "", "operday")
                    })),
                    i.pages = twig.attr(twig.attr("element"in i ? i.element : "", "statistic"), "pages"),
                    "leads" != ("element_type"in i ? i.element_type : "") && (i.pages = twig.attr("element"in i ? i.element : "", "pages")),
                    twig.filter.length(this.env_, "pages"in i ? i.pages : "") > 0) {
                        t.append('<div class="card-stats__links">'),
                        i._parent = i;
                        var a = "pages"in i ? i.pages : ""
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
                            i.page = n,
                            i.name = this.env_.filter("i18n", "Link"),
                            "business_card_page" == twig.attr("page"in i ? i.page : "", "type") ? i.name = this.env_.filter("i18n", "Business card site") : "personal_page" == twig.attr("page"in i ? i.page : "", "type") ? i.name = this.env_.filter("i18n", "Personal account") : "loyalty_card_page" == twig.attr("page"in i ? i.page : "", "type") ? i.name = this.env_.filter("i18n", "Loyalty card") : "form_card_page" == twig.attr("page"in i ? i.page : "", "type") && (i.name = this.env_.filter("i18n", "Customers form")),
                            new (e._get("interface/cards/stats/link.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                title: "name"in i ? i.name : "",
                                link: twig.attr("page"in i ? i.page : "", "link"),
                                name: twig.attr("page"in i ? i.page : "", "type"),
                                class_name: "js-page-link",
                                last_visit: twig.attr("stats"in i ? i.stats : "", "visited_at")
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
                    "loading"in i && i.loading && t.append('<div class="card-stats__loader"><span class="spinner-icon spinner-icon-abs-center"></span></div>'),
                    t.append("</div>")
                }
                ,
                t.prototype.block_main_entity_stats = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "leads" == ("element_type"in t ? t.element_type : "") && e.append(this.renderBlock("source", t, i)),
                    e.append(this.renderBlock("days_in_work", t, i))
                }
                ,
                t.prototype.block_source = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.source_name = twig.attr(twig.attr("element"in t ? t.element : "", "source"), "name"),
                    t.source_id = twig.attr(twig.attr("element"in t ? t.element : "", "source"), "id"),
                    e.append('<div class="main-entity-stats__source"><div class="main-entity-stats__source__title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Source"), "light_escape", null, !0)),
                    e.append(':</div><div class="main-entity-stats__source__info"><div class="main-entity-stats__source__info__item main-entity-stats__source__info__item-name">'),
                    e.append(twig.filter.escape(this.env_, "source_name"in t && t.source_name ? "source_name"in t ? t.source_name : "" : this.env_.filter("i18n", "Interface"), "light_escape", null, !0)),
                    e.append(" "),
                    "source_id"in t && t.source_id && (e.append('<span class="main-entity-stats__source__info__item-id">('),
                    e.append(twig.filter.escape(this.env_, "source_id"in t ? t.source_id : "", "light_escape", null, !0)),
                    e.append(")</span>")),
                    e.append('</div><div class="main-entity-stats__source__info__item main-entity-stats__source__info__item-separator">/</div><div class="main-entity-stats__source__info__item">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("element"in t ? t.element : "", "date_create"), "date"), "light_escape", null, !0)),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.block_days_in_work = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="main-entity-stats__days-in-work"><div class="main-entity-stats__days-in-work-count">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("element"in t ? t.element : "", "days_in_work"), "light_escape", null, !0)),
                    e.append('</div><div class="main-entity-stats__days-in-work-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Days in work"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_stats_items = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.countInRight = twig.attr("system"in t ? t.system : "", "displayed_count"),
                    e.append('<div class="card-widgets custom-scroll '),
                    "open"in t && t.open && e.append("js-widgets-active"),
                    e.append(" "),
                    "countInRight"in t && t.countInRight && e.append("_with-scroll"),
                    e.append('" id="widgets_block" style="display: '),
                    e.append(!("is_card"in t) || !t.is_card || "hide_widgets"in t && t.hide_widgets ? "none" : "flex"),
                    e.append('"><div class="card-widgets__top"><div class="js-card-widgets-on-off card-widgets-on-off-top"><div class="card-widgets__top__icon icon-widgets-toggle-state"><svg class="add-widget-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="24.969px" height="19.936px" viewBox="0 0 24.969 19.936" enable-background="new 0 0 24.969 19.936" xml:space="preserve"><polygon points="2.006,1.999 19.943,1.999 19.943,0 2.006,0 0,0 0,1.999 0,17.961 0,19.936 2.006,19.936 19.943,19.93619.943,17.961 2.006,17.961"/><rect x="3.982" y="4.014" width="11.971" height="2.015"/><polygon points="24.969,9.011 19.943,9.011 19.943,4.014 17.928,4.014 17.928,9.011 13.008,9.011 13.008,10.987 17.928,10.98717.928,16.024 19.943,16.024 19.943,10.987 24.969,10.987"/></svg>'),
                    e.append('</div></div><span class="card-widgets__top__caption" '),
                    e.append(twig.filter.escape(this.env_, "caption_style"in t ? t.caption_style : "", "light_escape", null, !0)),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "addons_caption"), "light_escape", null, !0)),
                    e.append('</span></div><div class="js-card-widgets-on" id="nano-card-widgets"><div class="card-widgets__elements">'),
                    "is_admin"in t && t.is_admin && (e.append('<div class="card-widgets__cap js-card-widgets-cap '),
                    "countInRight"in t && t.countInRight && e.append("_with-widgets js-with-widgets"),
                    e.append('"><a href="/settings/widgets/" class="js-navigate-link"><span class="card-widgets__cap__text js-widgets-cap-small-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "widgets_add_title"), "light_escape", null, !0)),
                    e.append("</span></a></div>")),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_widgets"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/widgets", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf-pipelines-checkbox-view js-pipelines-checkbox-view-control_cf">'),
                    i.statuses_params = {
                        name: "name"in i ? i.name : "",
                        multiple: !0,
                        has_pipelines: "has_pipelines"in i ? i.has_pipelines : "",
                        items: "has_pipelines"in i && i.has_pipelines ? "pipelines"in i ? i.pipelines : "" : [{
                            name: this.env_.filter("i18n", "Stages"),
                            statuses: "statuses"in i ? i.statuses : ""
                        }],
                        control_class_name: "hiding" == ("mode"in i ? i.mode : "") ? "js-control-pipeline-select_cf-hiding" : "js-control-pipeline-select_cf",
                        class_name: "cf-pipelines-checkbox-view__pipelines"
                    },
                    !("has_pipelines"in i) || !i.has_pipelines) {
                        i.fake_pipeline_statuses = [],
                        i._parent = i;
                        var a = "statuses"in i ? i.statuses : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.status = e,
                            i.fake_pipeline_statuses = twig.filter.merge("fake_pipeline_statuses"in i ? i.fake_pipeline_statuses : "", [{
                                id: twig.attr("status"in i ? i.status : "", "id"),
                                name: twig.attr("status"in i ? i.status : "", "option"),
                                color: twig.attr("status"in i ? i.status : "", "bg_color")
                            }])
                        }
                        ), this),
                        i.statuses_params = twig.filter.merge("statuses_params"in i ? i.statuses_params : "", {
                            items: [{
                                id: 0,
                                name: this.env_.filter("i18n", "Stages"),
                                statuses: "fake_pipeline_statuses"in i ? i.fake_pipeline_statuses : ""
                            }]
                        })
                    }
                    i.statuses_params = twig.filter.merge("statuses_params"in i ? i.statuses_params : "", {
                        sel: "selected_statuses"in i ? i.selected_statuses : "",
                        statuses_numeral: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "required_statuses"),
                        pipelines_numeral: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "required_pipelines")
                    }),
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("statuses_params"in i ? i.statuses_params : "", {
                        has_pipelines: !0
                    }))),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "cf-pipelines-checkbox-view__checkbox",
                        input_class_name: "js-form-changes-skip"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_controls_pipelines_checkbox_view"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/controls/pipelines_checkbox_view", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf_wrapper_description clearfix '),
                    twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "required_fields") || t.append("has-plug"),
                    t.append('"><div class="content__account__note__wrapper cf_description cf_wrapper_description__left"><div class="content__account__note cf_description"><p>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "description"), "light_escape", null, !0)),
                    t.append("</p></div></div>"),
                    twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "required_fields") || (t.append('<div class="cf_wrapper_description__right">'),
                    new (e._get("interface/common/tooltip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "cf-fields-required-pay-plug",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "pay_plug_text"),
                        button: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "pay_plug_button"),
                        ribbon: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "pay_plug_ribbon")
                    })),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_description"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/description", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf-group-wrapper '),
                    "is_main_entity"in i && i.is_main_entity && t.append("js-cf-group-wrapper"),
                    t.append('" data-id="'),
                    twig.attr("group"in i ? i.group : "", "id") ? t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "id"), "light_escape", null, !0)) : t.append("new"),
                    t.append('" '),
                    (!twig.attr("group"in i ? i.group : "", "id") || ("selected_tab"in i ? i.selected_tab : "") != twig.attr("group"in i ? i.group : "", "id") && "is_main_entity"in i && i.is_main_entity) && t.append('style="display: none"'),
                    t.append('><input type="hidden" name="group_name" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "id"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    "default" == twig.attr("group"in i ? i.group : "", "id")) {
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
                            twig.attr("field"in i ? i.field : "", "sortable") || twig.attr("field"in i ? i.field : "", "groupable") || (new (e._get("interface/cards/custom_fields/fields/field.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                            ++s.index0,
                            ++s.index,
                            s.first = !1)
                        }
                        ), this)
                    }
                    if (i._parent = i,
                    a = twig.attr("group"in i ? i.group : "", "fields"),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.field_id = n,
                        twig.attr("fields"in i ? i.fields : "", "f_" + ("field_id"in i ? i.field_id : ""), void 0, "array") && (i.sortable = twig.attr(twig.attr("fields"in i ? i.fields : "", "f_" + ("field_id"in i ? i.field_id : ""), void 0, "array"), "sortable"),
                        "section_sortable"in i && (i.sortable = "section_sortable"in i ? i.section_sortable : ""),
                        new (e._get("interface/cards/custom_fields/fields/field.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("fields"in i ? i.fields : "", "f_" + ("field_id"in i ? i.field_id : ""), void 0, "array"), {
                            sortable: "sortable"in i ? i.sortable : ""
                        })))),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('<div class="cf-field-wrapper cf-field-wrapper-fake sortable"></div>'),
                    i.can_add_contact_cf = null === ("can_add_contact_cf"in i ? i.can_add_contact_cf : "") || ("can_add_contact_cf"in i ? i.can_add_contact_cf : ""),
                    !("is_main_entity"in i && i.is_main_entity || "is_last"in i && i.is_last) || 0 == ("can_add_contact_cf"in i ? i.can_add_contact_cf : "") && "contacts" == ("name"in i ? i.name : "") || (t.append('<div class="cf-field-add js-card-cf-add-field"><svg class="svg-icon svg-cards--cf-plus-dims"><use xlink:href="#cards--cf-plus"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, "statistic" == twig.attr("group"in i ? i.group : "", "id") ? this.env_.filter("i18n", "Add meta") : twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "add_field"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_group"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/group", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="card-cf js-card-cf custom-scroll" '),
                    ("layout_width"in t ? t.layout_width : "") > 0 && (e.append('style="width: '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("number_format", this.env_, "layout_width"in t ? t.layout_width : "", 4, "."), "light_escape", null, !0)),
                    e.append('%"')),
                    e.append('><div class="card-cf__inner"><div class="default-overlay default-overlay-visible card-cf__overlay"></div><div class="card-cf__top js-card-cf-top" '),
                    ("top_height"in t ? t.top_height : "") > 0 && (e.append(' style="min-height: '),
                    e.append(twig.filter.escape(this.env_, "top_height"in t ? t.top_height : "", "light_escape", null, !0)),
                    e.append('px"')),
                    e.append('><div class="card-cf__close js-card-cf-close"><svg class="svg-icon svg-common--close-not-painted-dims "><use xlink:href="#common--close-not-painted"></use></svg></div><div class="card-cf__description"><h3 class="card-cf__description-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Fields and groups"), "light_escape", null, !0)),
                    e.append('</h3><p class="card-cf__description-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Fields description"), "light_escape", null, !0)),
                    e.append('</p></div><div class="card-cf__tabs js-card-cf-tabs"></div></div><div class="card-cf__body js-card-cf-body"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf-section" data-type="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('"><div class="cf-section__fields '),
                    !("section_sortable"in i) || "section_sortable"in i && i.section_sortable ? t.append("sortable") : t.append("no-sortable"),
                    t.append('">'),
                    i.groupable_only = !1,
                    "groups"in i && i.groups || (i.groups = []),
                    i.groups_keys = [],
                    i._parent = i;
                    var a = "groups"in i ? i.groups : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.group = e,
                        i.groups_keys = twig.filter.merge("groups_keys"in i ? i.groups_keys : "", [twig.attr("group"in i ? i.group : "", "id")])
                    }
                    ), this),
                    "default" != twig.attr(twig.attr("groups"in i ? i.groups : "", 0, void 0, "array"), "id") && (i.groups = twig.filter.merge([{
                        id: "default",
                        name: "",
                        fields: []
                    }], "groups"in i ? i.groups : "")),
                    i._parent = i,
                    a = "groups"in i ? i.groups : "";
                    var s = {
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
                        i.group = n,
                        new (e._get("interface/cards/custom_fields/group.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_first: twig.attr(s, "first"),
                            is_last: twig.attr(s, "last")
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
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_section"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/section", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="js-card-fields card-holder__fields" id="card_fields"><div class="card-holder__container custom-scroll"><div class="card-fields__fields-block"><div class="js-back-button card-fields__top-back"><svg class="svg-icon svg-common--arrow-left-dims"><use xlink:href="#common--arrow-left"></use></svg></div>'),
                    i.default_tab_selected = this.env_.filter("is_tab_selected", "tabs_groups"in i ? i.tabs_groups : "", "customers"),
                    new (e._get("interface/cards/forms/entity_form_fields.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "main_entity",
                        main: "main"in i ? i.main : "",
                        form_action: "/ajax/v1/customers/set/",
                        form_id: "edit_card",
                        form_is_add: "is_add"in i ? i.is_add : "",
                        lang: "lang"in i ? i.lang : "",
                        element: "element"in i ? i.element : "",
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        user_select_items: [{
                            id: twig.attr("main"in i ? i.main : "", "main_user_id"),
                            title: twig.attr(twig.attr("main"in i ? i.main : "", "main_user"), "name")
                        }],
                        edit_rights: "grand_edit"in i ? i.grand_edit : "",
                        current_short_name: "current_short_name"in i ? i.current_short_name : "",
                        tags: "tags_string"in i ? i.tags_string : "",
                        entity_type: "customers",
                        groups: "groups_cf"in i ? i.groups_cf : "",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : ""
                    })),
                    t.append('</div><div class="card-fields__linked-block js-card-fields__linked-block"><div class="card-fields__linked-toggler js-linked-types-toggler">'),
                    new (e._get("interface/cards/linked_types/toggler.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        current_entity: "customers"
                    })),
                    t.append('</div><div class="card-fields__linked-block-item card-fields__linked-block-item_companies-contacts js-linked_contacts_and_companies js-linked_elements_wrapper" data-type_id="1" '),
                    "default_tab_selected"in i && i.default_tab_selected || t.append('style="display: none"'),
                    t.append(">"),
                    (twig.attr("linked_entity"in i ? i.linked_entity : "", "show") || twig.attr("linked_entity"in i ? i.linked_entity : "", "contact")) && (new (e._get("interface/cards/forms/forms.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        elements: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "main"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        entity_type: "contacts",
                        main_element_type: "main_type"in i ? i.main_type : "",
                        lang: "lang"in i ? i.lang : "",
                        main: "main"in i ? i.main : "",
                        hide_block: "hide_block"in i ? i.hide_block : "",
                        grant_edit: "grand_edit"in i ? i.grand_edit : "",
                        can_add: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "can_add")
                    })),
                    twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "can_add") && (t.append('<div class="linked-form-holder">'),
                    new (e._get("interface/cards/forms/entity_form_linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "linked_entity",
                        main: "main"in i ? i.main : "",
                        form_action: "/private/ajax/contacts/add_person/?ACTION=ADD_PERSON&from=customers",
                        form_id: "new_contact",
                        form_is_add: "is_add"in i ? i.is_add : "",
                        lang: "lang"in i ? i.lang : "",
                        element: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "element"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        main_entity: "customers",
                        entity: "contacts",
                        entity_def: "contact",
                        contact_show: twig.attr("linked_entity"in i ? i.linked_entity : "", "show"),
                        CRM_ELEMENT_TYPE: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "contact"), "element_type"),
                        placeholder: twig.attr("lang"in i ? i.lang : "", "placeholder_contact"),
                        user_id: twig.attr("user"in i ? i.user : "", "id"),
                        form_is_empty: 1,
                        add_new_form: 1
                    })),
                    t.append("</div>")),
                    new (e._get("interface/cards/forms/forms.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        elements: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "main"),
                        entity_type: "companies",
                        class_name: "company_contacts__company",
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        lang: twig.attr("lang"in i ? i.lang : "", "companies"),
                        main_element_type: "main_type"in i ? i.main_type : "",
                        main: "main"in i ? i.main : "",
                        hide_block: "hide_block"in i ? i.hide_block : "",
                        grant_edit: "grand_edit"in i ? i.grand_edit : "",
                        can_add: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "can_add")
                    })),
                    twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "can_add") && (i.hide_button = twig.attr("main"in i ? i.main : "", "id") <= 0 || twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "main") ? 1 : 0,
                    t.append('<div class="linked-form-holder linked-form-holder_company">'),
                    new (e._get("interface/cards/forms/entity_form_linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "linked_entity",
                        main: "main"in i ? i.main : "",
                        main_entity: "customers",
                        form_action: "/private/ajax/companies/add_person/?ACTION=ADD_PERSON&from=customers",
                        form_id: "new_company",
                        form_is_add: "is_add"in i ? i.is_add : "",
                        lang: twig.attr("lang"in i ? i.lang : "", "companies"),
                        element: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "element"),
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        entity: "companies",
                        entity_def: "company",
                        contact_show: twig.attr("linked_entity"in i ? i.linked_entity : "", "show"),
                        CRM_ELEMENT_TYPE: twig.attr(twig.attr("linked_entity"in i ? i.linked_entity : "", "company"), "element_type"),
                        placeholder: twig.attr("lang"in i ? i.lang : "", "placeholder_company"),
                        form_is_empty: 1,
                        add_new_form: 1,
                        hide_button: "hide_button"in i ? i.hide_button : ""
                    })),
                    t.append("</div>"))),
                    t.append('</div></div></div><div class="card-fields__button-block hidden">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "save_and_close_contacts_link",
                        class_name: "button-input-disabled button-input_add js-button-with-loader card-top-save-button card-top-name__right__save",
                        text: twig.attr("lang"in i ? i.lang : "", "save"),
                        context_menu: 0
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "#cancel_button",
                        class_name: "button-cancel js-card-cancel card-top-name__right__cancel",
                        text: twig.attr("lang"in i ? i.lang : "", "cancel"),
                        context_menu: 0
                    })),
                    t.append('</div></div><div class="js-card-feed card-holder__feed">'),
                    new (e._get("interface/notes/wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        scroller_id: "notes_holder",
                        is_add_mode: !(twig.attr("main"in i ? i.main : "", "id") > 0)
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_customers_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/customers/card", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="pipeline_customers__item pipeline_customers__item-card" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer_info"in t ? t.customer_info : "", "id"), "light_escape", null, !0)),
                    e.append('"><div class="pipeline_customers__item-card_title"><a href="/customers/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer_info"in t ? t.customer_info : "", "id"), "light_escape", null, !0)),
                    e.append('" id="customer_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer_info"in t ? t.customer_info : "", "id"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("customer_info"in t ? t.customer_info : "", "name"), twig.attr("customer_info"in t ? t.customer_info : "", "id")), "light_escape", null, !0)),
                    e.append('" class="pipeline_customers__item-card_name h-text-overflow js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr("customer_info"in t ? t.customer_info : "", "name"), twig.attr("customer_info"in t ? t.customer_info : "", "id")), "light_escape", null, !0)),
                    e.append("</a>"),
                    twig.empty(twig.attr("customer_info"in t ? t.customer_info : "", "customer_mark")) ? e.append('<div class="pipeline_customers__item-card_without_task"></div>') : (e.append('<div class="pipeline_customers__item-card_task"><span class=" pipeline_customers__task-icon pipeline_customers__task-icon_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer_info"in t ? t.customer_info : "", "customer_mark"), "light_escape", null, !0)),
                    e.append('" title="'),
                    "yellow" == twig.attr("customer_info"in t ? t.customer_info : "", "customer_mark") ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_todo_assigned_circle"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "todo_expired_circle"), "light_escape", null, !0)),
                    e.append('"></span></div>')),
                    e.append("</div>"),
                    "periodicity"in t && t.periodicity && (e.append('<div class="pipeline_customers__item-card_next_price">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("customer_info"in t ? t.customer_info : "", "budget_formatted"), "light_escape", null, !0)),
                    e.append('</div><div class="pipeline_customers__item-card_next_date '),
                    twig.empty("period_class"in t ? t.period_class : "") || e.append(twig.filter.escape(this.env_, "period_class"in t ? t.period_class : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "period"in t ? t.period : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_customers_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/customers/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        fields: twig.bind(this.block_fields, this),
                        buttons: twig.bind(this.block_buttons, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<form action="'),
                    t.append(twig.filter.escape(this.env_, "form_action"in i ? i.form_action : "", "light_escape", null, !0)),
                    t.append('" autocomplete="off" enctype="multipart/form-data" id="'),
                    t.append(twig.filter.escape(this.env_, "form_id"in i ? i.form_id : "", "light_escape", null, !0)),
                    t.append('" class="card-entity-form '),
                    "form_is_empty"in i && i.form_is_empty && t.append(" hide_new_linked"),
                    t.append('" '),
                    "entity"in i && i.entity && (t.append('data-entity="'),
                    t.append(twig.filter.escape(this.env_, "entity"in i ? i.entity : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(' method="post">'),
                    t.append(this.renderBlock("name", i, n)),
                    "groups"in i && i.groups || (i.groups = [{
                        name: "",
                        show: !0,
                        fields: twig.filter.keys(twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array"))
                    }]),
                    i.no_main_group = "default" != twig.attr(twig.attr("groups"in i ? i.groups : "", 0, void 0, "array"), "id"),
                    t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "fields_class_name"in i ? i.fields_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "main_entity" == ("template_type"in i ? i.template_type : "") && "no_main_group"in i && i.no_main_group && t.append("no-main-group"),
                    t.append('">'),
                    t.append(this.renderBlock("fields", i, n)),
                    i.types_comparator = {
                        1: "text",
                        2: "numeric",
                        3: "checkbox",
                        4: "select",
                        5: "multiselect",
                        6: "date",
                        7: "url",
                        8: "pei",
                        9: "textarea",
                        10: "radio",
                        11: "address",
                        13: "smart_address",
                        14: "date",
                        15: "legal_entity",
                        17: "org_legal_name",
                        19: "date_time",
                        23: "monetary",
                        24: "chained_list",
                        25: "file",
                        26: "payer",
                        27: "supplier"
                    },
                    i._parent = i;
                    var a = "groups"in i ? i.groups : ""
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
                        i.group = n,
                        i.is_statistic = "statistic" == twig.attr("group"in i ? i.group : "", "id");
                        var r = t;
                        if ((t = new twig.StringBuffer).append('<div class="linked-forms__group-wrapper '),
                        "main_entity" == ("template_type"in i ? i.template_type : "") && t.append("linked-forms__group-wrapper_main js-cf-group-wrapper"),
                        t.append('" '),
                        "main_entity" == ("template_type"in i ? i.template_type : "") && (t.append('data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        (!this.env_.filter("is_tab_selected", "tabs_groups"in i ? i.tabs_groups : "", "entity_type"in i ? i.entity_type : "", twig.attr("group"in i ? i.group : "", "id")) || "no_main_group"in i && i.no_main_group) && t.append('style="display: none"')),
                        t.append(">"),
                        (!("is_merge"in i) || !i.is_merge) && "is_statistic"in i && i.is_statistic && twig.filter.length(this.env_, twig.attr("group"in i ? i.group : "", "fields")) > 0) {
                            i.cf_with_value = 0;
                            var l = twig.attr("group"in i ? i.group : "", "fields");
                            twig.forEach(l, (function(e, t) {
                                i._key = t,
                                i.cf_id = e,
                                i.cf = twig.attr(twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array"), "cf_id"in i ? i.cf_id : "", void 0, "array"),
                                twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE") && (i.cf_with_value = Number("cf_with_value"in i ? i.cf_with_value : "") + Number(1))
                            }
                            ), this),
                            t.append('<div class="linked-forms__statistic__tracking-data"><div class="linked-forms__statistic__tracking-data__title">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Tracking data of statistic:"), "light_escape", null, !0)),
                            t.append('</div><div class="linked-forms__statistic__tracking-data__info"><div class="linked-forms__statistic__tracking-data__info__filled">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "filled"), "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, "cf_with_value"in i ? i.cf_with_value : "", "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "of"), "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.attr("group"in i ? i.group : "", "fields")), "light_escape", null, !0)),
                            t.append('</div><div class="linked-forms__statistic__tracking-data__info__hide js-tracking-data-hide">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show"), "light_escape", null, !0)),
                            t.append("</div></div></div>")
                        }
                        l = twig.attr("group"in i ? i.group : "", "fields");
                        var p = {
                            parent: s,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        twig.forEach(l, (function(n, a) {
                            i._key = a,
                            i.cf_id = n,
                            twig.attr(twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array"), "cf_id"in i ? i.cf_id : "", void 0, "array") && (i.cf = twig.attr(twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array"), "cf_id"in i ? i.cf_id : "", void 0, "array"),
                            i.type = twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("cf"in i ? i.cf : "", "TYPE_ID"), void 0, "array"),
                            i.name = "CFV[" + twig.attr("cf"in i ? i.cf : "", "ID") + "]",
                            i.has_value = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"),
                            "has_value"in i && i.has_value && ("checkbox" != ("type"in i ? i.type : "") || "No" != ("has_value"in i ? i.has_value : "") && "Нет" != ("has_value"in i ? i.has_value : "") || (i.has_value = !1)),
                            i.is_hidden_field = !("is_add"in i && i.is_add || "has_value"in i && i.has_value || "Y" == twig.attr("element"in i ? i.element : "", "CAN_EDIT") || "main_entity" != ("template_type"in i ? i.template_type : "")),
                            twig.attr("cf"in i ? i.cf : "", "DISABLED") && "is_add"in i && i.is_add && (i.is_hidden_field = !0),
                            "no_hidden_fields"in i && i.no_hidden_fields && (i.is_hidden_field = !1),
                            !("is_statistic"in i) || !i.is_statistic || 21 != twig.attr("cf"in i ? i.cf : "", "TYPE_ID") || "no_hidden_fields"in i && i.no_hidden_fields || (i.hidden = !0),
                            "is_hidden_field"in i && i.is_hidden_field || ("Y" == twig.attr("cf"in i ? i.cf : "", "MULTIPLE") ? new (e._get("interface/cards/forms/multiple/items.twig"))(this.env_).render_(t, i) : "POINTS" != twig.attr("cf"in i ? i.cf : "", "CODE") && "STORE_CARD" != twig.attr("cf"in i ? i.cf : "", "CODE") && "FORM_CARD" != twig.attr("cf"in i ? i.cf : "", "CODE") && new (e._get("interface/cards/forms/item.twig"))(this.env_).render_(t, i)),
                            ++p.index0,
                            ++p.index,
                            p.first = !1)
                        }
                        ), this),
                        t.append("</div>"),
                        r.append(twig.spaceless(t.toString())),
                        t = r,
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append(this.renderBlock("buttons", i, n)),
                    t.append("</div></form>")
                }
                ,
                t.prototype.block_name = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_fields = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_buttons = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_entity_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/entity_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        fields: twig.bind(this.block_fields, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/forms/entity_form.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.fields_class_name = "card-entity-form__fields",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_fields = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.entity_folder = "entity_type"in i ? i.entity_type : "",
                    "companies" == ("entity_folder"in i ? i.entity_folder : "") && (i.entity_folder = "contacts"),
                    new (e._get("interface/" + ("entity_folder"in i ? i.entity_folder : "") + "/cards/form_top.twig"))(this.env_).render_(t, i);
                    var a = t;
                    (t = new twig.StringBuffer).append('<div class="card-entity-form__main-fields js-card-main-fields" '),
                    "default_tab_selected"in i && i.default_tab_selected || "main_entity" != ("template_type"in i ? i.template_type : "") || t.append('style="display: none"'),
                    t.append(">"),
                    twig.attr("_account_features"in i ? i._account_features : "", "responsible_user_available") && new (e._get("interface/cards/responsible.twig"))(this.env_).render_(t, i),
                    ("leads" == ("entity_type"in i ? i.entity_type : "") || "customers" == ("entity_type"in i ? i.entity_type : "") && "periodicity_enabled"in i && i.periodicity_enabled) && new (e._get("interface/cards/forms/fields/budget.twig"))(this.env_).render_(t, i),
                    i._parent = i;
                    var s = twig.attr("element"in i ? i.element : "", "profiles")
                      , r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(s, (function(n, a) {
                        i._key = a,
                        i.profile = n,
                        twig.attr("profile"in i ? i.profile : "", "hidden") || (new (e._get("interface/cards/forms/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            type: "profiles",
                            name: "profiles[" + twig.attr("profile"in i ? i.profile : "", "id") + "]",
                            has_value: !0
                        })),
                        ++r.index0,
                        ++r.index,
                        r.first = !1)
                    }
                    ), this),
                    t.append("</div>"),
                    a.append(twig.spaceless(t.toString())),
                    t = a,
                    "tabs_groups"in i && (i.default_tab_value = twig.attr(twig.attr("tabs_groups"in i ? i.tabs_groups : "", "entity_type"in i ? i.entity_type : "", void 0, "array"), 0, void 0, "array")),
                    "default_tab_selected"in i && i.default_tab_selected || !("default_tab_value"in i) || !i.default_tab_value || "group" == twig.attr("default_tab_value"in i ? i.default_tab_value : "", "type") || new (e._get("interface/cards/plugs/top_fields.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_entity_form_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/entity_form_fields", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        fields: twig.bind(this.block_fields, this),
                        buttons: twig.bind(this.block_buttons, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/forms/entity_form.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.fields_class_name = "linked-form__fields",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_name = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "entity_def"in i ? i.entity_def : "", "light_escape", null, !0)),
                    t.append("_name_wrapper linked-entity__"),
                    t.append(twig.filter.escape(this.env_, "entity_def"in i ? i.entity_def : "", "light_escape", null, !0)),
                    t.append('-name"><input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "entity_def"in i ? i.entity_def : "", "light_escape", null, !0)),
                    t.append('[MAIN_USER_ID]" value="'),
                    t.append(twig.filter.escape(this.env_, "user_id"in i ? i.user_id : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "main_entity_def"in i ? i.main_entity_def : "", "light_escape", null, !0)),
                    t.append('[ID]" value="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr("main"in i ? i.main : "", "ID", void 0, "array")), "light_escape", null, !0)),
                    t.append('" class="main-entity-id"><input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "main_entity_def"in i ? i.main_entity_def : "", "light_escape", null, !0)),
                    t.append('[NAME]" value=""><input type="hidden" name="ELEMENT_TYPE" value="'),
                    t.append(twig.filter.escape(this.env_, "element_type"in i ? i.element_type : "", "light_escape", null, !0)),
                    t.append('" class="element_type"><div class="linked-form__field linked-form__field-name"><div class="linked-form__field-userpic"><div class="linked-form__field-userpic_is-add"></div></div><div class="linked-form__field__value-name" style="top: inherit">'),
                    i.name_control = "contact" == ("entity_def"in i ? i.entity_def : "") ? "fullname/suggest" : "suggest",
                    new (e._get("interface/controls/" + ("name_control"in i ? i.name_control : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "new_" + ("entity_def"in i ? i.entity_def : "") + "_n",
                        name: "contact" == ("entity_def"in i ? i.entity_def : "") ? "contact[N]" : "company[NAME]",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__field__value-name-suggest",
                        input_class_name: "js-suggest-contact-company linked-form__cf " + ("company" == ("entity_def"in i ? i.entity_def : "") ? "js-company-name" : ""),
                        additional_data: 'data-linked-type="' + this.env_.filter("element_type", "entity_def"in i ? i.entity_def : "", "single") + '"',
                        ajax: {
                            url: "/private/ajax/search.php",
                            params: "type=" + this.env_.filter("element_type", "entity_def"in i ? i.entity_def : "", "string") + "&query_type=name&q=#q#"
                        }
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.block_fields = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr("_account_features"in i ? i._account_features : "", "companies_available") && "contact" == ("entity_def"in i ? i.entity_def : "") && "companies" != ("entity_type"in i ? i.entity_type : "") && (t.append('<div class="linked-form__field"><div class="linked-form__field__label"><label title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_edit_company"), "light_escape", null, !0)),
                    t.append('" class="card-cf-name-label__label" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_edit_company"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_edit_company"), "light_escape", null, !0)),
                    t.append('</label></div><div class="linked-form__field__value">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "contact_company_input",
                        name: "company[NAME]",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "leads_edit_company_name"),
                        class_name: "linked-form__field__value-name-suggest",
                        input_class_name: "js-suggest-company-for-contact js-company-name linked-form__cf",
                        ajax: {
                            url: "/private/ajax/search.php",
                            params: "type=companies&query_type=name&q=#q#"
                        }
                    })),
                    t.append('<input type="hidden" id="contact_company_id" name="company[ID]" value=""></div></div>'))
                }
                ,
                t.prototype.block_buttons = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="linked-form__field linked-form__field-cancel"><div class="linked-form__field__value"><button type="button" class="linked-form__field-cancel-text js-linked-cancel">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "cancel")), "light_escape", null, !0)),
                    e.append("</button></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_entity_form_linked"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/entity_form_linked", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    twig.attr("element"in i ? i.element : "", "profiles")) {
                        i.profiles_array = {
                            vk: {
                                name: "Vkontakte",
                                svg_icon: "social--vk"
                            },
                            avito: {
                                name: "Avito",
                                svg_icon: "social--avito"
                            },
                            skype: {
                                name: "Skype",
                                svg_icon: "cards--social-icon--skype"
                            },
                            facebook: {
                                name: "Messenger",
                                svg_icon: "cards--social-icon--messenger"
                            },
                            telegram: {
                                name: "Telegram",
                                svg_icon: "cards--social-icon--telegram"
                            },
                            viber: {
                                name: "Viber",
                                svg_icon: "cards--social-icon--viber"
                            },
                            wechat: {
                                name: "WeChat",
                                svg_icon: "cards--social-icon--wechat"
                            },
                            whatsapp: {
                                name: "WhatsApp",
                                svg_icon: "cards--social-icon--whatsapp"
                            },
                            amocrm: {
                                name: "amoCRM",
                                svg_icon: "cards--social-icon--amocrm"
                            },
                            "amo.support": {
                                name: "amoCRM",
                                svg_icon: "cards--social-icon--amocrm",
                                class_name: "amocrm"
                            },
                            instagram: {
                                name: "Instagram",
                                svg_icon: "cards--social-icon--instagram"
                            },
                            instagram_business: {
                                name: "Instagram",
                                svg_icon: "cards--social-icon--instagram"
                            },
                            livechat: {
                                name: this.env_.filter("i18n", "Live Chat"),
                                svg_icon: "cards--social-icon--livechat"
                            },
                            onlinechat: {
                                name: this.env_.filter("i18n", "Live Chat"),
                                svg_icon: "cards--social-icon--livechat"
                            }
                        },
                        i.need_social_block = !1,
                        i._parent = i;
                        var a = twig.attr("element"in i ? i.element : "", "profiles");
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.profile = e,
                            twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr(twig.attr("profile"in i ? i.profile : "", 0, void 0, "array"), "service"), void 0, "array") && (i.need_social_block = !0)
                        }
                        ), this)
                    }
                    if (t.append('<form action="/ajax/'),
                    t.append(twig.filter.escape(this.env_, "entity_type"in i ? i.entity_type : "", "light_escape", null, !0)),
                    t.append('/detail/" autocomplete="off" enctype="multipart/form-data" class="linked-form '),
                    "N" == twig.attr("element"in i ? i.element : "", "CAN_EDIT") && t.append("linked-form-disabled"),
                    t.append('" id="linked_form_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "ID"), "light_escape", null, !0)),
                    t.append('" method="post"><input type="hidden" name="ID" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "ID"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="ELEMENT_TYPE" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="MAIN_ID" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("main"in i ? i.main : "", "ID"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="MAIN_USER_ID" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("element"in i ? i.element : "", "MAIN_USER_ID"), "light_escape", null, !0)),
                    t.append('">'),
                    "N" == twig.attr("element"in i ? i.element : "", "CAN_EDIT") && t.append('<input type="hidden" name="disabled" value="1">'),
                    t.append('<div class="linked-form__field linked-form__field-name">'),
                    "contacts" == ("entity_type"in i ? i.entity_type : "") ? (twig.attr("element"in i ? i.element : "", "profiles") && (i.main_profile = !1,
                    i._parent = i,
                    a = twig.attr("element"in i ? i.element : "", "profiles"),
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.profile = e,
                        twig.attr("profile"in i ? i.profile : "", "main") && (i.main_profile = "profile"in i ? i.profile : "")
                    }
                    ), this),
                    "main_profile"in i && i.main_profile || (i.main_profile = twig.filter.first(this.env_, twig.attr("element"in i ? i.element : "", "profiles")))),
                    new (e._get("interface/cards/forms/userpic.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        contact_id: twig.attr("element"in i ? i.element : "", "ID"),
                        profile: "main_profile"in i ? i.main_profile : ""
                    }))) : t.append('<div class="linked-form__field-userpic linked-form__field-userpic_company"><span class="linked-form__field-fake-userpic linked-form__field-fake-userpic_company icon icon-company-userpic"></span></div>'),
                    new (e._get("interface/cards/forms/fields/name.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    "Y" != twig.attr("element"in i ? i.element : "", "CUT")) {
                        if (t.append('<div class="linked-form__fields" '),
                        "fields_hidden"in i && i.fields_hidden && t.append('style="display: none"'),
                        t.append(">"),
                        "contacts" != ("entity_type"in i ? i.entity_type : "") || 2 != ("main_element_type"in i ? i.main_element_type : "") && 12 != ("main_element_type"in i ? i.main_element_type : "") || "N" == twig.attr("element"in i ? i.element : "", "CAN_EDIT") && !twig.attr("element"in i ? i.element : "", "COMPANY_UID") || !twig.attr("_account_features"in i ? i._account_features : "", "companies_available") || (t.append('<div class="linked-form__field linked-form__field-company"><div class="linked-form__field__label '),
                        "Y" == twig.attr("cf"in i ? i.cf : "", "MULTIPLE") && t.append("linked-form__field__label-multiple"),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "company"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "company"), "light_escape", null, !0)),
                        t.append('</div>\x3c!----\x3e<div class="linked-form__field__value linked-form__field__value-company"><div class="'),
                        "Y" != twig.attr("element"in i ? i.element : "", "CUT_COMPANY") && (t.append("js-linked-with-actions "),
                        "is_add"in i && i.is_add || (t.append("js-linked-has-actions "),
                        twig.attr("element"in i ? i.element : "", "COMPANY_NAME") && t.append("js-linked-has-value"))),
                        t.append('" data-check="company">'),
                        i.company_id = "",
                        twig.attr("element"in i ? i.element : "", "COMPANY_UID") && (i.company_id = twig.attr("element"in i ? i.element : "", "COMPANY_UID")),
                        t.append('<input type="hidden" name="company[ID]" value="'),
                        t.append(twig.filter.escape(this.env_, "company_id"in i ? i.company_id : "", "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            value: twig.attr("element"in i ? i.element : "", "COMPANY_NAME"),
                            name: "company[NAME]",
                            placeholder: "...",
                            type: "",
                            value_id: "company_id"in i ? i.company_id : "",
                            input_class_name: "linked-form__cf js-linked-contact-company",
                            additional_data: 'spellcheck="false"',
                            ajax: {
                                url: "/private/ajax/search.php",
                                params: "query_type=name&type=companies&q=#q#"
                            }
                        })),
                        i.tip = [],
                        "Y" != twig.attr("element"in i ? i.element : "", "CUT_COMPANY") && (i.tip = [{
                            icon: "in-new-window",
                            text: twig.attr("lang"in i ? i.lang : "", "card_to_card"),
                            class_name: "js-cf-actions-item",
                            additional_data: 'data-type="company"',
                            href: "/companies/detail/" + ("company_id"in i ? i.company_id : "")
                        }]),
                        i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                            icon: "pencil",
                            text: twig.attr("lang"in i ? i.lang : "", "cf_edit"),
                            class_name: "js-cf-actions-item",
                            additional_data: 'data-type="edit"'
                        }]),
                        new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "card-cf-actions-tip",
                            items: "tip"in i ? i.tip : ""
                        })),
                        t.append("</div></div></div>")),
                        twig.attr("element"in i ? i.element : "", "profiles")) {
                            i._parent = i,
                            a = twig.attr("element"in i ? i.element : "", "profiles");
                            var s = {
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            twig.forEach(a, (function(n, a) {
                                i._key = a,
                                i.profile = n,
                                !twig.attr("profile"in i ? i.profile : "", "hidden") && twig.contains("profiles_array"in i ? i.profiles_array : "", twig.attr("profile"in i ? i.profile : "", "service")) && (new (e._get("interface/cards/forms/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    type: "profiles",
                                    name: "profiles[" + twig.attr("profile"in i ? i.profile : "", "id") + "]",
                                    profile: "profile"in i ? i.profile : "",
                                    main: "element"in i ? i.element : "",
                                    has_value: !1
                                })),
                                ++s.index0,
                                ++s.index,
                                s.first = !1)
                            }
                            ), this)
                        }
                        if (i.has_hidden_fields = !1,
                        "N" == twig.attr("element"in i ? i.element : "", "CAN_EDIT") ? i.form_is_empty = !1 : (i.form_is_empty = !0,
                        i._parent = i,
                        a = twig.attr("element"in i ? i.element : "", "cf"),
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.vcf = e,
                            twig.attr("vcf"in i ? i.vcf : "", "VALUE") && "No" != twig.attr("vcf"in i ? i.vcf : "", "VALUE") && "Нет" != twig.attr("vcf"in i ? i.vcf : "", "VALUE") && "false" != twig.attr("vcf"in i ? i.vcf : "", "VALUE") && (i.form_is_empty = !1)
                        }
                        ), this)),
                        i.values_index = 0,
                        i.values_index_raw = 0,
                        i.types_comparator = {
                            1: "text",
                            2: "numeric",
                            3: "checkbox",
                            4: "select",
                            5: "multiselect",
                            6: "date",
                            7: "url",
                            8: "pei",
                            9: "textarea",
                            10: "radio",
                            11: "address",
                            13: "smart_address",
                            14: "date",
                            15: "legal_entity",
                            17: "org_legal_name",
                            19: "date_time",
                            23: "monetary",
                            24: "chained_list",
                            25: "file",
                            26: "payer",
                            27: "supplier"
                        },
                        i.hidden_fields_ids = [],
                        i._parent = i,
                        a = twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array"),
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.cf = e,
                            i.type = twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("cf"in i ? i.cf : "", "TYPE_ID"), void 0, "array"),
                            i.has_value = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"),
                            "has_value"in i && i.has_value && ("checkbox" != ("type"in i ? i.type : "") || "No" != ("has_value"in i ? i.has_value : "") && "Нет" != ("has_value"in i ? i.has_value : "") ? i.values_index_raw = Number("values_index_raw"in i ? i.values_index_raw : "") + Number(1) : i.has_value = !1,
                            "N" != twig.attr("element"in i ? i.element : "", "CAN_EDIT") && (i.values_index = Number("values_index"in i ? i.values_index : "") + Number(1))),
                            i.is_hidden_field = !("has_value"in i && i.has_value) || ("values_index"in i ? i.values_index : "") >= 5,
                            "form_is_empty"in i && i.form_is_empty && (i.is_hidden_field = !1),
                            "is_hidden_field"in i && i.is_hidden_field && (i.hidden_fields_ids = twig.filter.merge("hidden_fields_ids"in i ? i.hidden_fields_ids : "", [twig.attr("cf"in i ? i.cf : "", "ID")]))
                        }
                        ), this),
                        i.should_hide_fields = twig.filter.length(this.env_, "hidden_fields_ids"in i ? i.hidden_fields_ids : "") > 1 && twig.filter.length(this.env_, twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array")) > 4,
                        i._parent = i,
                        a = twig.attr("custom_fields"in i ? i.custom_fields : "", twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"), void 0, "array"),
                        s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        },
                        twig.countable(a)) {
                            var r = twig.count(a);
                            s.revindex0 = r - 1,
                            s.revindex = r,
                            s.length = r,
                            s.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.cf = n,
                            i.field_is_hidden = ("should_hide_fields"in i ? i.should_hide_fields : "") && twig.contains("hidden_fields_ids"in i ? i.hidden_fields_ids : "", twig.attr("cf"in i ? i.cf : "", "ID")),
                            i.type = twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("cf"in i ? i.cf : "", "TYPE_ID"), void 0, "array"),
                            i.name = "CFV[" + twig.attr("cf"in i ? i.cf : "", "ID") + "]",
                            "field_is_hidden"in i && i.field_is_hidden && t.append('<div class="linked-form__field-no-value">'),
                            "Y" == twig.attr("cf"in i ? i.cf : "", "MULTIPLE") ? new (e._get("interface/cards/forms/multiple/items.twig"))(this.env_).render_(t, i) : new (e._get("interface/cards/forms/item.twig"))(this.env_).render_(t, i),
                            "field_is_hidden"in i && i.field_is_hidden && t.append("</div>"),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        0 != ("values_index_raw"in i ? i.values_index_raw : "") || "Y" == twig.attr("element"in i ? i.element : "", "CUT") || "form_is_empty"in i && i.form_is_empty || (t.append('<div class="linked-form__fields__empty">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "linked_fields_empty"), "light_escape", null, !0)),
                        t.append("</div>")),
                        !("should_hide_fields"in i) || !i.should_hide_fields || "form_is_empty"in i && i.form_is_empty || (t.append('<div class="linked-form__field linked-form__field-shower" '),
                        "N" == twig.attr("element"in i ? i.element : "", "CAN_EDIT") && t.append('style="display: none"'),
                        t.append('><div class="linked-form__field__value"><input type="text" class="js-linked-fields-shower-input" style="opacity: 0; height: 0; width: 0;"><span class="linked-form__field-shower-text js-linked-show-all-fields">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "cf_show_more_title"), "light_escape", null, !0)),
                        t.append("</span></div></div>")),
                        t.append("</div>")
                    }
                    t.append("</form>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="company_contacts linked-forms-holder '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    "elements"in i && i.elements && 0 != twig.filter.length(this.env_, "elements"in i ? i.elements : "") || t.append(" no-items"),
                    t.append('"><ul id="'),
                    t.append(twig.filter.escape(this.env_, "entity_type"in i ? i.entity_type : "", "light_escape", null, !0)),
                    t.append('_list" class="company_contacts__list linked-forms">'),
                    i._parent = i;
                    var a = "elements"in i ? i.elements : ""
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
                        t.append('<li class="linked-forms__item'),
                        twig.attr("item"in i ? i.item : "", "main_contact") && twig.filter.length(this.env_, "elements"in i ? i.elements : "") > 1 && t.append(" linked-forms__main_item"),
                        twig.attr(s, "first") && t.append(" linked-forms__item-active"),
                        t.append('" data-main-item="'),
                        twig.attr("item"in i ? i.item : "", "main_contact") ? t.append("true") : t.append("false"),
                        t.append('">'),
                        new (e._get("interface/cards/forms/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            items_length: twig.filter.length(this.env_, "elements"in i ? i.elements : ""),
                            element: "item"in i ? i.item : "",
                            custom_fields: "custom_fields"in i ? i.custom_fields : "",
                            fields_hidden: !twig.attr(s, "first"),
                            form_index: twig.attr(s, "index0")
                        })),
                        t.append("</li>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</ul></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_forms"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/forms", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    21 == twig.attr("cf"in i ? i.cf : "", "TYPE_ID") && (i.type = "tracking-data"),
                    t.append('<div class="linked-form__field linked-form__field-'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append(" "),
                    "hidden"in i && i.hidden && t.append("hidden"),
                    t.append(" "),
                    twig.contains("hidden_fields_for_stage"in i ? i.hidden_fields_for_stage : "", twig.attr("cf"in i ? i.cf : "", "ID")) && t.append("u-hidden-cf"),
                    t.append(" "),
                    "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED") && "main_entity" != ("template_type"in i ? i.template_type : "") && t.append(" hide "),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("cf"in i ? i.cf : "", "ID"), "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field__label'),
                    "1" != twig.attr("cf"in i ? i.cf : "", "DISABLED") && 21 != twig.attr("cf"in i ? i.cf : "", "TYPE_ID") || t.append(" linked-form__field__label_disabled"),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "profiles" == ("type"in i ? i.type : "") ? twig.attr("profile"in i ? i.profile : "", "service") : twig.attr("cf"in i ? i.cf : "", "NAME"), "light_escape", null, !0)),
                    t.append('">'),
                    "profiles" == ("type"in i ? i.type : "") ? (t.append("<span>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("profile"in i ? i.profile : "", "service"), "light_escape", null, !0)),
                    t.append("</span>")) : (t.append("<span>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("cf"in i ? i.cf : "", "NAME"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</div>"),
                    i.flags = [],
                    twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "flags", void 0, void 0, !0) && twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "flags") && (i.flags = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "flags")),
                    t.append('<div class="linked-form__field__value'),
                    ("1" == twig.attr("cf"in i ? i.cf : "", "DISABLED") || 21 == twig.attr("cf"in i ? i.cf : "", "TYPE_ID") || twig.attr("element"in i ? i.element : "", "CAN_EDIT", void 0, void 0, !0) && !1 === twig.attr("element"in i ? i.element : "", "CAN_EDIT")) && t.append(" linked-form__field__value_disabled"),
                    t.append(" "),
                    ("1" == twig.attr("cf"in i ? i.cf : "", "DISABLED") && 1 != twig.attr("cf"in i ? i.cf : "", "RESTRICTED") && twig.attr("element"in i ? i.element : "", "CAN_EDIT") || 21 == twig.attr("cf"in i ? i.cf : "", "TYPE_ID")) && t.append("linked-form__field__value_api"),
                    twig.attr("flags"in i ? i.flags : "", "computed") && t.append(" linked-form__field__value_computed"),
                    t.append('"'),
                    1 == twig.attr("cf"in i ? i.cf : "", "RESTRICTED") && (t.append(' data-restricted-hint="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Locked (restricted hint)"), "light_escape", null, !0)),
                    t.append('"')),
                    t.append(">"),
                    "checkbox" == ("type"in i ? i.type : "") ? i.value = twig.attr("cf"in i ? i.cf : "", "ID") : i.value = "",
                    "select" == ("type"in i ? i.type : "") || "multiselect" == ("type"in i ? i.type : "") ? i.placeholder = twig.attr("lang"in i ? i.lang : "", "cf_selector_placeholder") : "date" == ("type"in i ? i.type : "") || "date_time" == ("type"in i ? i.type : "") ? i.placeholder = "" : i.placeholder = "...",
                    twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array") && (i.value = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE")),
                    "smart_address" == ("type"in i ? i.type : "")) {
                        i.items = [],
                        i.options = [{
                            value: "",
                            option: "...",
                            id: ""
                        }],
                        i._parent = i;
                        var a = twig.attr(twig.attr("cf"in i ? i.cf : "", "VARIANTS"), "country");
                        twig.forEach(a, (function(e, t) {
                            i.id = t,
                            i.value = e,
                            i.options = twig.filter.merge("options"in i ? i.options : "", [{
                                id: "id"in i ? i.id : "",
                                option: "value"in i ? i.value : ""
                            }])
                        }
                        ), this),
                        i._parent = i,
                        a = twig.attr("cf"in i ? i.cf : "", "sub_types", void 0, "array"),
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.subtype_name = e,
                            "country" == ("subtype_name"in i ? i.subtype_name : "") ? i.item = {
                                subtype_name: "subtype_name"in i ? i.subtype_name : "",
                                name: ("name"in i ? i.name : "") + "[" + ("subtype_name"in i ? i.subtype_name : "") + "][VALUE]",
                                selected: twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUES"), "subtype_name"in i ? i.subtype_name : "", void 0, "array"),
                                items: "options"in i ? i.options : "",
                                readonly: "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED"),
                                disabled: "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED")
                            } : i.item = {
                                subtype_name: "subtype_name"in i ? i.subtype_name : "",
                                name: ("name"in i ? i.name : "") + "[" + ("subtype_name"in i ? i.subtype_name : "") + "][VALUE]",
                                value: twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUES"), "subtype_name"in i ? i.subtype_name : "", void 0, "array"),
                                placeholder: "...",
                                additional_data: "data-placeholder-1='" + twig.attr("lang"in i ? i.lang : "", ("subtype_name"in i ? i.subtype_name : "") + "_placeholder", void 0, "array") + "' data-placeholder-2='...'",
                                class_name: "linked-form__cf",
                                readonly: "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED"),
                                disabled: "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED")
                            },
                            "zip" == ("subtype_name"in i ? i.subtype_name : "") && (i.item = twig.filter.merge("item"in i ? i.item : "", {
                                class_name: twig.attr("item"in i ? i.item : "", "class_name") + " js-control-allow-zip"
                            })),
                            i.items = twig.filter.merge("items"in i ? i.items : "", ["item"in i ? i.item : ""])
                        }
                        ), this),
                        new (e._get("interface/controls/smart_address.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            items: "items"in i ? i.items : "",
                            wrapper_class_name: "wrapper_class_name"in i ? i.wrapper_class_name : ""
                        }))
                    } else
                        "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED") || 21 == twig.attr("cf"in i ? i.cf : "", "TYPE_ID") ? (i.cf_readonly = !0,
                        i.cf_disabled = !0,
                        i.placeholder = "...") : (i.cf_disabled = !1,
                        i.cf_readonly = !1),
                        21 == twig.attr("cf"in i ? i.cf : "", "TYPE_ID") && (i.type = "text"),
                        "profiles" == ("type"in i ? i.type : "") && (i.value = twig.attr("profile"in i ? i.profile : "", "profile_name", void 0, void 0, !0) ? twig.filter.def(twig.attr("profile"in i ? i.profile : "", "profile_name"), twig.attr("main"in i ? i.main : "", "NAME")) : twig.attr("main"in i ? i.main : "", "NAME")),
                        null !== ("type"in i ? i.type : "") && new (e._get("interface/cards/forms/fields/" + ("type"in i ? i.type : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                            cf: "cf"in i ? i.cf : "",
                            element: "element"in i ? i.element : "",
                            flags: "flags"in i ? i.flags : "",
                            name: "name"in i ? i.name : "",
                            value: "value"in i ? i.value : "",
                            is_add: "is_add"in i ? i.is_add : "",
                            type: "type"in i ? i.type : "",
                            readonly: "cf_readonly"in i ? i.cf_readonly : "",
                            disabled: "cf_disabled"in i ? i.cf_disabled : "",
                            placeholder: "placeholder"in i ? i.placeholder : ""
                        }));
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="linked-form__field-userpic"><input type="hidden" name="avatar" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("profile"in i ? i.profile : "", 0, void 0, "array"), "profile_avatar"), "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field-userpic_inner">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "contact_id"in i ? i.contact_id : "",
                        url: twig.attr(twig.attr("profile"in i ? i.profile : "", 0, void 0, "array"), "profile_avatar")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_userpic"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/userpic", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        fields: twig.bind(this.block_fields, this),
                        buttons: twig.bind(this.block_buttons, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<form action="'),
                    t.append(twig.filter.escape(this.env_, "form_action"in i ? i.form_action : "", "light_escape", null, !0)),
                    t.append('" autocomplete="off" enctype="multipart/form-data" id="'),
                    t.append(twig.filter.escape(this.env_, "form_id"in i ? i.form_id : "", "light_escape", null, !0)),
                    t.append('" class="card-entity-form '),
                    "form_is_empty"in i && i.form_is_empty && t.append(" hide_new_linked"),
                    t.append('" '),
                    "entity"in i && i.entity && (t.append('data-entity="'),
                    t.append(twig.filter.escape(this.env_, "entity"in i ? i.entity : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(' method="post">'),
                    t.append(this.renderBlock("name", i, n)),
                    "groups"in i && i.groups || (i.groups = [{
                        name: "",
                        show: !0,
                        fields: "custom_fields"in i ? i.custom_fields : ""
                    }]),
                    i.no_main_group = "default" != twig.attr(twig.attr("groups"in i ? i.groups : "", 0, void 0, "array"), "id"),
                    t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "fields_class_name"in i ? i.fields_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "main_entity" == ("template_type"in i ? i.template_type : "") && "no_main_group"in i && i.no_main_group && t.append("no-main-group"),
                    t.append('">'),
                    t.append(this.renderBlock("fields", i, n)),
                    i._parent = i;
                    var a = "groups"in i ? i.groups : "";
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.group = n,
                        t.append('<div class="linked-forms__group-wrapper '),
                        "main_entity" == ("template_type"in i ? i.template_type : "") && t.append("linked-forms__group-wrapper_main js-cf-group-wrapper"),
                        t.append('" '),
                        "main_entity" == ("template_type"in i ? i.template_type : "") && (t.append(' data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        (!this.env_.filter("is_tab_selected", "tabs_groups"in i ? i.tabs_groups : "", "entity_type"in i ? i.entity_type : "", twig.attr("group"in i ? i.group : "", "id")) || "no_main_group"in i && i.no_main_group) && t.append('style="display: none"')),
                        t.append(">");
                        var s = twig.attr("group"in i ? i.group : "", "fields");
                        twig.forEach(s, (function(n, a) {
                            i._key = a,
                            i.custom_field = n,
                            i.value = null;
                            var s = "custom_fields_values"in i ? i.custom_fields_values : "";
                            twig.forEach(s, (function(e, t) {
                                i._key = t,
                                i.custom_field_value = e,
                                twig.attr("custom_field_value"in i ? i.custom_field_value : "", "field_id") == twig.attr("custom_field"in i ? i.custom_field : "", "id") && (i.value = "custom_field_value"in i ? i.custom_field_value : "")
                            }
                            ), this),
                            new (e._get("interface/cards/forms/v4_item.twig"))(this.env_).render_(t, {
                                custom_field: "custom_field"in i ? i.custom_field : "",
                                custom_field_value: "value"in i ? i.value : "",
                                is_add: "is_add"in i ? i.is_add : "",
                                lang: "lang"in i ? i.lang : ""
                            })
                        }
                        ), this),
                        t.append("</div>")
                    }
                    ), this),
                    t.append(this.renderBlock("buttons", i, n)),
                    t.append("</div></form>")
                }
                ,
                t.prototype.block_name = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_fields = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_buttons = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_entity_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_entity_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.name = "CFV[" + twig.attr("custom_field"in i ? i.custom_field : "", "id") + "]",
                    i.title = twig.attr("custom_field"in i ? i.custom_field : "", "name"),
                    i.type = twig.attr("custom_field"in i ? i.custom_field : "", "type"),
                    i.placeholder = "...",
                    "select" == ("type"in i ? i.type : "") || "multiselect" == ("type"in i ? i.type : "") ? i.placeholder = twig.attr("lang"in i ? i.lang : "", "cf_selector_placeholder") : "date" != ("type"in i ? i.type : "") && "date_time" != ("type"in i ? i.type : "") || (i.placeholder = ""),
                    t.append('<div class="linked-form__field linked-form__field-'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field__label" title="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('"><span>'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('</span></div><div class="linked-form__field__value">'),
                    new (e._get("interface/cards/forms/v4_fields/" + ("type"in i ? i.type : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                        custom_field: "custom_field"in i ? i.custom_field : "",
                        custom_field_value: "custom_field_value"in i ? i.custom_field_value : "",
                        name: "name"in i ? i.name : "",
                        value: "value"in i ? i.value : "",
                        is_add: "is_add"in i ? i.is_add : "",
                        type: "type"in i ? i.type : "",
                        readonly: twig.attr("custom_field"in i ? i.custom_field : "", "is_api_only"),
                        disabled: twig.attr("custom_field"in i ? i.custom_field : "", "is_api_only"),
                        placeholder: "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/common/tooltip.twig"))(this.env_).render_(t, i),
                    t.append('<div class="validation-button-cap button-input" id="validation_counter"><span class="validation-button-cap__arrow left"><b></b></span>'),
                    t.append(twig.filter.escape(this.env_, "index"in i ? i.index : "", "light_escape", null, !0)),
                    t.append("/"),
                    t.append(twig.filter.escape(this.env_, "count"in i ? i.count : "", "light_escape", null, !0)),
                    t.append('<span class="validation-button-cap__arrow right"><b></b></span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_validation"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/validation", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "hide_first"in t && t.hide_first ? e.append('<div class="card-fields__linked-toggler-item js-linked_type js-linked_toggle_item hidden"><span class="card-fields__linked-toggler-item-inner h-text-overflow"><span class="js-current_catalog_name h-text-overflow"></span></span></div>') : (1 == ("current_entity"in t ? t.current_entity : "") ? t.first_element = "companies" : t.first_element = "contacts",
                    e.append('<div class="card-fields__linked-toggler-item js-linked_type js-linked_toggle_item card-fields__linked-toggler-item_active" id="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("element_type", "first_element"in t ? t.first_element : "", "int"), "light_escape", null, !0)),
                    e.append('"><span class="card-fields__linked-toggler-item-inner h-text-overflow">'),
                    "entity_type"in t && t.entity_type ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "entity_type"in t ? t.entity_type : ""), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Contacts"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    1 != ("blocked"in t ? t.blocked : "") && ("customers" == ("current_entity"in t ? t.current_entity : "") && (e.append('<div class="card-fields__linked-toggler-item js-linked_type js-linked_toggle_item" id="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("element_type", "transactions", "int"), "light_escape", null, !0)),
                    e.append('"><span class="card-fields__linked-toggler-item-inner h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchases"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    "customers" != ("current_entity"in t ? t.current_entity : "") && "leads" != ("current_entity"in t ? t.current_entity : "") || (e.append('<div data-static="true" data-type="statistic" class="card-fields__linked-toggler-item js-linked_type js-linked_toggle_item"><span class="card-fields__linked-toggler-item-inner h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Statistics"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    1 != ("current_entity"in t ? t.current_entity : "") && 3 != ("current_entity"in t ? t.current_entity : "") || (e.append('<div class="card-fields__linked-toggler-item js-linked_type js-linked_toggle_item" id="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("element_type", "leads", "int"), "light_escape", null, !0)),
                    e.append('"><span class="card-fields__linked-toggler-item-inner h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Leads"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append('<div class="card-fields__linked-toggler-item js-linked_type js-linked_toggle_item hidden"><span class="card-fields__linked-toggler-item-inner h-text-overflow"><span class="js-current_catalog_name h-text-overflow"></span></span></div><div class="card-fields__linked-toggler-dots js-dots"></div>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_linked_types_toggler"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/linked_types/toggler", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="chat-list__container"><div class="chat-list custom-scroll" id="chatList"><ul class="chat-list__users">'),
                    twig.attr("users"in t ? t.users : "", twig.attr("me"in t ? t.me : "", "amojo_id"), void 0, "array", !0) && (e.append('<li class="chat-list__users__item current_user">'),
                    t.user = twig.attr("users"in t ? t.users : "", twig.attr("me"in t ? t.me : "", "amojo_id"), void 0, "array"),
                    "N" == twig.attr("me"in t ? t.me : "", "free_user") && e.append('<div class="chat-list__users__item__remove"></div>'),
                    e.append('<div class="chat-list__users__item__name"><p class="chat-list__users__item__name__text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "Me"), "light_escape", null, !0)),
                    e.append("</p></div></li>")),
                    t._parent = t;
                    var n = "users"in t ? t.users : "";
                    twig.forEach(n, (function(i, n) {
                        t.key = n,
                        t.user = i,
                        ("key"in t ? t.key : "") != twig.attr("me"in t ? t.me : "", "amojo_id") && (e.append('<li class="chat-list__users__item">'),
                        "Y" != twig.attr("me"in t ? t.me : "", "free_user") && (e.append('<div class="chat-list__users__item__remove" data-amojo="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "id"), "light_escape", null, !0)),
                        e.append('"><svg class="svg-icon svg-multiactions--delete-dims"><use xlink:href="#multiactions--delete"></use></svg></div>')),
                        e.append('<div class="chat-list__users__item__name"><p class="chat-list__users__item__name__text">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "title"), "light_escape", null, !0)),
                        e.append("</p></div></li>"))
                    }
                    ), this),
                    e.append("</ul></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_chat_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/chat_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.leads_count = Number(Number(twig.filter.length(this.env_, twig.attr("items"in i ? i.items : "", "active"))) + Number(twig.filter.length(this.env_, twig.attr("items"in i ? i.items : "", "won")))) + Number(twig.filter.length(this.env_, twig.attr("items"in i ? i.items : "", "lost"))),
                    t.append('<div class="card-fields__linked-block-item card-fields__linked-block-item_leads"><div class="card-leads js-card-leads">'),
                    twig.attr("user_rights"in i ? i.user_rights : "", "view")) {
                        t.append('<div class="card-leads__wrapper js-card-leads-wrapper">'),
                        i._parent = i;
                        var a = twig.attr("items"in i ? i.items : "", "active")
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
                            i.lead = n,
                            twig.filter.length(this.env_, "pipelines"in i ? i.pipelines : "") > 1 ? new (e._get("interface/cards/leads/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                lead_info: {
                                    id: twig.attr("lead"in i ? i.lead : "", "ID"),
                                    name: {
                                        text: twig.attr("lead"in i ? i.lead : "", "NAME"),
                                        url: twig.attr("lead"in i ? i.lead : "", "DETAIL_PAGE_URL_REDESIGN")
                                    },
                                    lead_mark: twig.attr("lead"in i ? i.lead : "", "lead_mark"),
                                    lead_mark_days: twig.attr("lead"in i ? i.lead : "", "lead_mark_days"),
                                    budget_formatted: this.env_.filter("price", twig.attr("lead"in i ? i.lead : "", "PRICE")),
                                    status: twig.attr(twig.attr(twig.attr("pipelines"in i ? i.pipelines : "", twig.attr("lead"in i ? i.lead : "", "PIPELINE_ID"), void 0, "array"), "statuses"), twig.attr("lead"in i ? i.lead : "", "STATUS"), void 0, "array")
                                },
                                pipeline: twig.attr("pipelines"in i ? i.pipelines : "", twig.attr("lead"in i ? i.lead : "", "PIPELINE_ID"), void 0, "array")
                            })) : new (e._get("interface/cards/leads/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                lead_info: {
                                    id: twig.attr("lead"in i ? i.lead : "", "ID"),
                                    name: {
                                        text: twig.attr("lead"in i ? i.lead : "", "NAME"),
                                        url: twig.attr("lead"in i ? i.lead : "", "DETAIL_PAGE_URL_REDESIGN")
                                    },
                                    lead_mark: twig.attr("lead"in i ? i.lead : "", "lead_mark"),
                                    lead_mark_days: twig.attr("lead"in i ? i.lead : "", "lead_mark_days"),
                                    budget_formatted: this.env_.filter("price", twig.attr("lead"in i ? i.lead : "", "PRICE")),
                                    status: twig.attr("statuses"in i ? i.statuses : "", twig.attr("lead"in i ? i.lead : "", "STATUS"), void 0, "array")
                                }
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append('</div><div class="card-leads__won-lost"><div class="card-leads__won-lost__wrapper js-card-leads-won-wrapper" '),
                        twig.filter.length(this.env_, twig.attr("items"in i ? i.items : "", "won")) || t.append('style="display:none"'),
                        t.append('><div class="card-leads__won-lost__won-top">'),
                        t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "card_leads_won_caption"), 2)), "light_escape", null, !0)),
                        t.append('<span class="card-leads__won-won__top-sum">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("sum"in i ? i.sum : "", "won")), "light_escape", null, !0)),
                        t.append('</span> </div><div class="card-leads__won-lost__won__body js-card-leads-wonlost-body">'),
                        i._parent = i,
                        a = twig.attr("items"in i ? i.items : "", "won"),
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
                            i.lead = n,
                            new (e._get("interface/cards/leads/wonlost_item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                id: twig.attr("lead"in i ? i.lead : "", "ID"),
                                name: twig.attr("lead"in i ? i.lead : "", "NAME"),
                                budget: twig.attr("lead"in i ? i.lead : "", "PRICE")
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append('</div></div><div class="card-leads__won-lost__wrapper js-card-leads-lost-wrapper" '),
                        twig.filter.length(this.env_, twig.attr("items"in i ? i.items : "", "lost")) || t.append('style="display:none"'),
                        t.append('><div class="card-leads__won-lost__lost-top">'),
                        t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "card_leads_lost_caption"), 2)), "light_escape", null, !0)),
                        t.append('<span class="card-leads__won-lost__top-sum">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("sum"in i ? i.sum : "", "lost")), "light_escape", null, !0)),
                        t.append('</span> </div><div class="card-leads__won-lost__lost__body js-card-leads-wonlost-body">'),
                        i._parent = i,
                        a = twig.attr("items"in i ? i.items : "", "lost"),
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
                            i.lead = n,
                            twig.attr("lead"in i ? i.lead : "", "PRICE") ? i.price = twig.attr("lead"in i ? i.lead : "", "PRICE") : i.price = 0,
                            new (e._get("interface/cards/leads/wonlost_item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                id: twig.attr("lead"in i ? i.lead : "", "ID"),
                                name: twig.attr("lead"in i ? i.lead : "", "NAME"),
                                budget: "price"in i ? i.price : ""
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append("</div></div></div>")
                    }
                    twig.attr("user_rights"in i ? i.user_rights : "", "add") && (t.append('<div class="card-leads__quick-add">'),
                    new (e._get("interface/cards/leads/quick_add.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        add_class: "js-card-quick-lead-btn",
                        form_wrapper_class: "js-card-quick-lead-wrapper",
                        currency: "currency"in i ? i.currency : "",
                        statuses: "statuses"in i ? i.statuses : ""
                    })),
                    t.append("</div>")),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_holder"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/holder", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="pipeline_leads__item pipeline_leads__item-card" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "id"), "light_escape", null, !0)),
                    e.append('"><div class="pipeline_leads__top-block"><a class="pipeline_leads__lead-title-text h-text-overflow js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "name"), "text"), "light_escape", null, !0)),
                    e.append('" href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "name"), "url"), "light_escape", null, !0)),
                    e.append('" id="lead_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "name"), "text"), twig.attr("lead_info"in t ? t.lead_info : "", "id")), "light_escape", null, !0)),
                    e.append('</a><div class="pipeline_leads__top-date">'),
                    t.budget_formatted = twig.attr("lead_info"in t ? t.lead_info : "", "budget_formatted"),
                    twig.attr("lead_info"in t ? t.lead_info : "", "budget", void 0, void 0, !0) && (t.budget_formatted = this.env_.filter("price", twig.attr("lead_info"in t ? t.lead_info : "", "budget"))),
                    e.append('<div class="pipeline_leads__price" '),
                    twig.attr("lead_info"in t ? t.lead_info : "", "budget") || "budget_formatted"in t && t.budget_formatted || e.append('style="display:none;"'),
                    e.append(' data-price="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "budget"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "budget_formatted"in t ? t.budget_formatted : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "budget_formatted"in t ? t.budget_formatted : "", "light_escape", null, !0)),
                    e.append('</div></div></div><div class="pipeline_leads__middle-block"><div class="pipeline_leads__tags" style="height: auto">'),
                    twig.filter.length(this.env_, "pipeline"in t ? t.pipeline : "") ? (e.append('<div class="note-lead__container note-lead__pipe-container" style="margin-left: 0; margin-right: 5px;"><div class="note-lead__pipe"><span class="node-lead__pipe-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("pipeline"in t ? t.pipeline : "", "name"), "light_escape", null, !0)),
                    e.append('</span></div><div class="note-lead__status" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "status"), "color"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "status"), "name"), "light_escape", null, !0)),
                    e.append('"><span class="note-lead__status-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "status"), "name"), "light_escape", null, !0)),
                    e.append("</span></div></div>")) : (e.append('<span class="leads__status-label" style="background-color:'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "status"), "bg_color"), "light_escape", null, !0)),
                    e.append(';margin-right:8px;display: inherit;text-overflow: ellipsis;overflow: hidden;">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead_info"in t ? t.lead_info : "", "status"), "option"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('<div class="leads__task-days-container">'),
                    twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark") && (twig.contains(["green", "yellow"], twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark")) && (e.append('<span class="pipeline_leads__task-days pipeline_leads__task-days_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark"), "light_escape", null, !0)),
                    e.append('">'),
                    "green" == twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark") && e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "now", "date"), "light_escape", null, !0)),
                    "yellow" == twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark") && e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_tasks"), "light_escape", null, !0)),
                    e.append("</span>")),
                    "red" == twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark") && (e.append('<span class="pipeline_leads__task-days pipeline_leads__task-days_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark"), "light_escape", null, !0)),
                    e.append('">'),
                    twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark_days") && (e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark_days"), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "lead_mark_days"), "light_escape", null, !0))),
                    e.append("</span>")),
                    e.append('<span class=" pipeline_leads__task-icon pipeline_leads__task-icon_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark"), "light_escape", null, !0)),
                    e.append('" title="'),
                    "yellow" == twig.attr("lead_info"in t ? t.lead_info : "", "lead_mark") ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_todo_assigned_circle"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "todo_expired_circle"), "light_escape", null, !0)),
                    e.append('"></span>')),
                    e.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="pipeline-select-view__loss-reason '),
                    "readonly"in t && t.readonly || e.append("js-control-loss-reason-dropdown"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><input type="hidden" name="lead[LOSS_REASON_ID]" value="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><span class="pipeline-select-view__status_bold">:</span>&nbsp;<span class="pipeline-select-view__loss-reason-name">'),
                    e.append(twig.filter.escape(this.env_, "name"in t && t.name ? twig.filter.trim("name"in t ? t.name : "") : this.env_.filter("i18n", "No reason"), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_loss_reason"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/loss_reason", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="pipeline_leads__quick_add__wrapper clearfix"><div class="pipeline_leads__quick_add_button '),
                    t.append(twig.filter.escape(this.env_, "add_class"in i ? i.add_class : "", "light_escape", null, !0)),
                    t.append('"><div class="pipeline_leads__quick_add_button_inner">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead"), "light_escape", null, !0)),
                    t.append('</div></div><div class="pipeline_leads__quick_add_form '),
                    t.append(twig.filter.escape(this.env_, "form_wrapper_class"in i ? i.form_wrapper_class : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/cards/leads/quick_add_form.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_quick_add"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/quick_add", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="pipeline_leads__quick_add_form_inner"><div class="linked-form__field">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        name: "name",
                        class_name: "linked-form__cf linked-form__cf_quick-lead-name text-input-visible-placeholder",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_name"),
                        id: "quick_add_lead_name"
                    })),
                    t.append('</div><input type="hidden" id="quick_add_lead_pipeline_id" name="pipeline_id" value="'),
                    t.append(twig.filter.escape(this.env_, "pipeline_id"in i ? i.pipeline_id : "", "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field linked-form__field-text"><div class="linked-form__field__label linked-form__field__label_quick-add-budget" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_budget"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_budget"), "light_escape", null, !0)),
                    t.append('</div><div class="linked-form__field__value">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: "0",
                        class_name: "js-control-allow-numeric linked-form__cf linked-form__cf_lead-budget text-input-visible-placeholder",
                        name: "price",
                        id: "quick_add_lead_budget",
                        max_length: "17",
                        style: {
                            width: "122px"
                        }
                    })),
                    t.append('<span class="currency">'),
                    t.append(twig.filter.escape(this.env_, "currency"in i ? i.currency : "", "light_escape", null, !0)),
                    t.append('</span></div></div><div class="linked-form__field linked-form__field_quick-lead-status-field">'),
                    twig.filter.length(this.env_, "pipelines"in i ? i.pipelines : "") > 1 ? new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        has_pipelines: !0,
                        items: "pipelines"in i ? i.pipelines : "",
                        class_name: "pipeline_leads__pipelines"
                    })) : twig.filter.length(this.env_, "statuses"in i ? i.statuses : "") && new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "statuses"in i ? i.statuses : "",
                        id: "quick_add_lead_status",
                        name: "status",
                        class_name: "pipeline_leads__quick_statuses",
                        button_class_name: "pipeline_leads__quick_statuses_button"
                    })),
                    t.append('</div><div class="linked-form__field-buttons" style="font-size:0">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-card-quick-lead-add button-input_blue",
                        id: "quick_add_form_btn"
                    }),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-card-quick-lead-cancel"
                    }),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_quick_add_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/quick_add_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        stats_items: twig.bind(this.block_stats_items, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/stats.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_stats_items = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/stats/items/calls.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("stats"in i ? i.stats : "", "calls"),
                        title: this.env_.filter("i18n", "Calls")
                    })),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("stats"in i ? i.stats : "", "letters"),
                        title: this.env_.filter("i18n", "Mails")
                    })),
                    new (e._get("interface/cards/stats/items/tasks.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("stats"in i ? i.stats : "", "tasks"),
                        title: this.env_.filter("i18n", "Tasks")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_stats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/stats", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="card-leads__won-lost__body__item" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><a href="/leads/detail/'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="h-text-overflow js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", "name"in t ? t.name : "", "id"in t ? t.id : ""), "light_escape", null, !0)),
                    e.append('</a><span class="card-leads__won-lost__body__item-sum">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "budget"in t ? t.budget : ""), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_wonlost_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/wonlost_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="note-wrapper '),
                    twig.filter.length(this.env_, twig.attr("note"in i ? i.note : "", "linked")) && t.append("note-wrapper-has-linked"),
                    t.append(" "),
                    twig.attr("note"in i ? i.note : "", "editable") && t.append("js-note-editable"),
                    t.append(" js-swipe-prevent-x "),
                    twig.contains(["note", "attachement", "task"], twig.attr("note"in i ? i.note : "", "type")) || t.append("note-wrapper-system"),
                    t.append(" "),
                    (twig.contains(["note", "attachement", "task"], twig.attr("note"in i ? i.note : "", "type")) || twig.contains([101], twig.attr(twig.attr("note"in i ? i.note : "", "params"), "custom_note_id"))) && t.append("note-wrapper-noline"),
                    t.append(" "),
                    "has_timeline"in i && i.has_timeline && twig.attr("note"in i ? i.note : "", "its_created") && t.append("note-wrapper-last"),
                    t.append(" "),
                    "hide_timeline"in i && i.hide_timeline && t.append("note-wrapper-hide-timeline"),
                    t.append(" "),
                    (twig.attr("note"in i ? i.note : "", "editable") || twig.attr("note"in i ? i.note : "", "deletable") || twig.attr("note"in i ? i.note : "", "completable")) && t.append("note-wrapper-has-actions"),
                    t.append('" id="note_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("note"in i ? i.note : "", "id"), "light_escape", null, !0)),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("note"in i ? i.note : "", "id"), "light_escape", null, !0)),
                    t.append('" '),
                    twig.attr("note"in i ? i.note : "", "hide") && t.append('style="display:none"'),
                    t.append(">"),
                    "only_wrapper"in i || new (e._get("interface/cards/notes/types/aside_task.twig"))(this.env_).render_(t, twig.extend({}, i, "note"in i ? i.note : "")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_aside_note_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/aside_note_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.post_text = twig.attr("lang"in i ? i.lang : "", "task_done"),
                    i.cancel_class = "js-note-edit-cancel",
                    i.textarea_class = "note-edit__textarea textarea-autosize",
                    "is_add"in i && i.is_add && (i.post_text = twig.attr("lang"in i ? i.lang : "", "task_post"),
                    i.cancel_class = "js-note-add-cancel",
                    i.textarea_class = ("textarea_class"in i ? i.textarea_class : "") + " js-note-add-textarea"),
                    t.append('<div class="note-edit '),
                    "is_edit"in i && i.is_edit && t.append("note-edit-edit"),
                    t.append(" "),
                    "is_add"in i && i.is_add && t.append("note-edit-folded js-fileapi-wrapper js-note-add note-edit-add"),
                    t.append('" id="'),
                    "is_add"in i && i.is_add ? t.append("note_add") : (t.append("note_edit_"),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0))),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "is_add"in i && i.is_add && (t.append('data-dnd-before="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_dnd_title_before"), "light_escape", null, !0)),
                    t.append('" data-dnd-after="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_dnd_title_after"), "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><div class="note-edit-inner clearfix"><span class="note-edit__icon icon icon-text"></span>'),
                    "is_edit"in i && i.is_edit && (t.append('<dl class="note--header"><dd class="note--header--right">'),
                    "linked"in i && i.linked && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_in"), "light_escape", null, !0)),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "uri"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "name"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in i ? i.prev_date : "") == this.env_.filter("task_date", "date"in i ? i.date : "", "date") ? t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in i ? i.date : "", "time", !0), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in i ? i.date : ""), "light_escape", null, !0)),
                    t.append(", <b>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("user"in i ? i.user : "", "name"), "light_escape", null, !0)),
                    t.append("</b></dt></dl>")),
                    t.append('<div class="note-edit__body"><textarea class="'),
                    t.append(twig.filter.escape(this.env_, "textarea_class"in i ? i.textarea_class : "", "light_escape", null, !0)),
                    t.append('" data-old-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("params"in i ? i.params : "", "text"), "light_escape", null, !0)),
                    t.append('" placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "note_placeholder"), "light_escape", null, !0)),
                    t.append('" tabindex="-1">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("params"in i ? i.params : "", "text"), "light_escape", null, !0)),
                    t.append("</textarea></div>"),
                    "is_add"in i && i.is_add && t.append('<div class="note-edit__attaches"></div>'),
                    t.append('</div><div class="note-edit__footer"><div class="note-edit__actions">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "post_text"in i ? i.post_text : "",
                        tab_index: "-1",
                        disabled: !0,
                        class_name: "js-button-with-loader js-note-submit note-edit__actions__submit"
                    })),
                    t.append("\x3c!----\x3e"),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "cancel_class"in i ? i.cancel_class : "",
                        tab_index: "-1"
                    })),
                    t.append("</div>"),
                    "is_add"in i && i.is_add && (t.append('<div id="note-edit-attach-buttons"><div class="note-edit__actions__attach-btn" id="notes_attach" tabindex="-1"><label for="note-edit-attach-file" class="note-edit__attach-label"><span class="icon icon-inline icon-attach"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "note_attach_files"), "light_escape", null, !0)),
                    t.append('</label><input type="file" id="note-edit-attach-file" tabindex="-1" name="UserFile" multiple /></div></div>')),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_note_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/note_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.label = twig.attr("note"in i ? i.note : "", "time_label"),
                    twig.attr("label"in i ? i.label : "", "value", void 0, void 0, !0) && new (e._get("interface/cards/notes/time_label.twig"))(this.env_).render_(t, i),
                    t.append('<div class="note-wrapper '),
                    twig.filter.length(this.env_, twig.attr("note"in i ? i.note : "", "linked")) && t.append("note-wrapper-has-linked"),
                    t.append(" "),
                    twig.attr("note"in i ? i.note : "", "editable") && t.append("js-note-editable"),
                    t.append(" js-swipe-prevent-x "),
                    twig.contains(["note", "attachement", "task"], twig.attr("note"in i ? i.note : "", "type")) || t.append("note-wrapper-system"),
                    t.append(" "),
                    (twig.contains(["note", "attachement", "task"], twig.attr("note"in i ? i.note : "", "type")) || twig.contains([101], twig.attr(twig.attr("note"in i ? i.note : "", "params"), "custom_note_id"))) && t.append("note-wrapper-noline"),
                    t.append(" "),
                    "has_timeline"in i && i.has_timeline && twig.attr("note"in i ? i.note : "", "its_created") && t.append("note-wrapper-last"),
                    t.append(" "),
                    "hide_timeline"in i && i.hide_timeline && t.append("note-wrapper-hide-timeline"),
                    t.append(" "),
                    (twig.attr("note"in i ? i.note : "", "editable") || twig.attr("note"in i ? i.note : "", "deletable") || twig.attr("note"in i ? i.note : "", "completable")) && t.append("note-wrapper-has-actions"),
                    t.append('" id="note_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("note"in i ? i.note : "", "id"), "light_escape", null, !0)),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("note"in i ? i.note : "", "id"), "light_escape", null, !0)),
                    t.append('" '),
                    twig.attr("note"in i ? i.note : "", "hide") && t.append('style="display:none"'),
                    t.append(' data-timestamp="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("note"in i ? i.note : "", "timestamp"), "light_escape", null, !0)),
                    t.append('">'),
                    "only_wrapper"in i || (i.template_path = "interface/cards/notes/types/",
                    !twig.attr("note"in i ? i.note : "", "its_created") || "company_created" != twig.attr("note"in i ? i.note : "", "type") && "contact_created" != twig.attr("note"in i ? i.note : "", "type") || (i.template_path = ("template_path"in i ? i.template_path : "") + "card_"),
                    i.template_path = ("template_path"in i ? i.template_path : "") + twig.attr("note"in i ? i.note : "", "type") + ".twig",
                    new (e._get("template_path"in i ? i.template_path : ""))(this.env_).render_(t, twig.extend({}, i, "note"in i ? i.note : ""))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_note_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/note_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="card-plug__feed js-notes-plug custom-scroll"><div class="card-plug__feed-inner">'),
                    "is_add"in t && t.is_add || e.append('<div class="card-plug__feed-note"><div class="card-plug__avatar"></div><div class="card-plug__feed-note-line card-plug__animation"></div><div class="card-plug__feed-note-line card-plug__animation"></div></div><div class="card-plug__feed-line card-plug__animation" style="width: 42%"></div><div class="card-plug__feed-line card-plug__animation"><div class="card-plug__feed-line-fat"></div></div><div class="card-plug__feed-line card-plug__animation"><div class="card-plug__feed-line-fat" style="width: 77%"></div></div><div class="card-plug__feed-line card-plug__animation"><div class="card-plug__feed-line-fat" style="width: 50%"></div></div><div class="card-plug__feed-line card-plug__animation"><div class="card-plug__feed-line-fat" style="width: 26%"></div></div><div class="card-plug__feed-note" style="margin-top: 24px"><div class="card-plug__avatar"></div><div class="card-plug__feed-note-line card-plug__animation"></div><div class="card-plug__feed-note-line card-plug__animation"></div></div><div class="card-plug__feed-line card-plug__animation" style="width: 39%"></div><div class="card-plug__feed-line card-plug__animation" style="width: 47%"></div><div class="card-plug__feed-line card-plug__animation" style="width: 30%"></div>'),
                    e.append("</div>"),
                    "is_compose_hidden"in t && t.is_compose_hidden || e.append('<div class="feed-compose minimized card-plug__feed-compose"></div>'),
                    e.append("</div>"),
                    "is_plug"in t && t.is_plug || (e.append("<script>setTimeout(() => {APP.metrics.set({type: '"),
                    e.append(twig.filter.escape(this.env_, "metric_type"in t ? t.metric_type : "", "light_escape", null, !0)),
                    e.append("',name: 'feedFcp',value: Math.ceil(APP.metrics.getTimeFromStart()),})});<\/script>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.button_text = twig.attr("lang"in i ? i.lang : "", "task_done"),
                    i.textarea_class = "js-task-edit-textarea",
                    i.cancel_class = "js-task-edit-cancel",
                    "is_add"in i && i.is_add && (i.button_text = twig.attr("lang"in i ? i.lang : "", "task_post"),
                    i.textarea_class = "js-task-add-textarea",
                    i.cancel_class = "js-task-add-cancel"),
                    "is_add"in i && i.is_add || (i.icon = "follow-up",
                    i.color = "green",
                    2 == twig.attr("params"in i ? i.params : "", "type") ? (i.icon = "case-red",
                    i.color = "red") : twig.contains([1, 3], twig.attr("params"in i ? i.params : "", "type")) || (i.icon = "clock-blue-big",
                    i.color = "blue")),
                    t.append('<div class="note task '),
                    "is_add"in i && i.is_add || (t.append("task-"),
                    t.append(twig.filter.escape(this.env_, "color"in i ? i.color : "", "light_escape", null, !0))),
                    t.append(" "),
                    "is_edit"in i && i.is_edit && t.append("task-edit"),
                    t.append(" "),
                    "is_add"in i && i.is_add && t.append("js-task-add task-add"),
                    t.append('" id="note_edit_'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" '),
                    twig.attr("params"in i ? i.params : "", "temp") && t.append('style="margin-right:0"'),
                    t.append(">"),
                    "is_add"in i && i.is_add || (t.append('<div class="icon icon-'),
                    t.append(twig.filter.escape(this.env_, "icon"in i ? i.icon : "", "light_escape", null, !0)),
                    t.append(' note-icon"></div><div class="note--header"><dd class="note--header--right">'),
                    "linked"in i && i.linked && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_in"), "light_escape", null, !0)),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "uri"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "name"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append('</dd><dt class="note--header--left">'),
                    (twig.attr("params"in i ? i.params : "", "task_from") && twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "id") != twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "id") || twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "name") != twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "name") && twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "id") == twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "id")) && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "name"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_for"), "light_escape", null, !0))),
                    t.append("<b>"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "name"), "light_escape", null, !0)),
                    t.append("</b></dt></div>")),
                    t.append('<div class="task-edit-inner">'),
                    !("is_add"in i) || !i.is_add || "is_not_exist"in i && i.is_not_exist || new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "task-edit__revert-to-note js-note-switcher",
                        icon_class_name: "icon-text",
                        tab_index: "-1"
                    })),
                    t.append('<div class="task-edit__body"><div class="modal-body__inner__task-date-time clearfix">'),
                    new (e._get("interface/common/tasks_date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : ""
                    })),
                    t.append("</div>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "task_edit_main_user",
                        items: "managers"in i ? i.managers : "",
                        selected: twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "id"),
                        class_name: "task-edit__managers control--select-white"
                    })),
                    new (e._get("interface/controls/task_types/task_types.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "task_edit_type",
                        task_types: "task_types"in i ? i.task_types : "",
                        name: "type",
                        selected: twig.attr("params"in i ? i.params : "", "type"),
                        class_name: "control--select-white task-edit__task-type"
                    })),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "body",
                        id: "task_edit_body",
                        class_name: "textarea-autosize task-edit__textarea " + ("textarea_class"in i ? i.textarea_class : ""),
                        placeholder: twig.attr("lang"in i ? i.lang : "", "task_placeholder"),
                        value: twig.attr("params"in i ? i.params : "", "text"),
                        additional_data: 'data-old-value="' + twig.attr("params"in i ? i.params : "", "text") + '"',
                        tab_index: "-1"
                    })),
                    t.append('</div><div class="task-edit__footer">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "button_text"in i ? i.button_text : "",
                        disabled: !0,
                        class_name: "js-button-with-loader js-task-submit",
                        tab_index: "-1"
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "task-edit__cancel " + ("cancel_class"in i ? i.cancel_class : ""),
                        tab_index: "-1"
                    })),
                    t.append("</div></div></div>"),
                    "is_add"in i && i.is_add || twig.attr("params"in i ? i.params : "", "temp") || (t.append('<div class="note-actions-wrapper">'),
                    twig.attr("params"in i ? i.params : "", "complate") || (t.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "note_delete")), "light_escape", null, !0)),
                    t.append('</span></div><div class="note-actions__btn note-actions__btn-complete js-task-complete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-checkmark-green note-actions__icon"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_complete")), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_task_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/task_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.type = "timeline_point_" + twig.attr("label"in t ? t.label : "", "type"),
                    e.append('<div class="note-time-label__wrapper js-notes-timeline-point" id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("label"in t ? t.label : "", "value"), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('"><div class="note-time-label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("label"in t ? t.label : "", "value"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in t ? t.lang : "", "type"in t ? t.type : "", void 0, "array"), twig.attr("label"in t ? t.label : "", "value")), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_time_label"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/time_label", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "text"in t && t.text || (t.text = twig.attr("lang"in t ? t.lang : "", "tasks_add_follow_up_msg")),
                    e.append('<div class="notes-tip__wrapper"><div class="notes-tip '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="notes-tip__inner"><div class="notes-tip__text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="notes-wrapper" id="'),
                    t.append(twig.filter.escape(this.env_, "scroller_id"in i ? i.scroller_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    "leads_list_params"in i && i.leads_list_params && !twig.attr("leads_list_params"in i ? i.leads_list_params : "", "only_creation") && (142 == twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_status") || twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_status")),
                    t.append('<div class="notes-wrapper--top" id="notes_form">'),
                    "element_id"in i && i.element_id ? new (e._get("interface/cards/notes/forms/exist.twig"))(this.env_).render_(t, i) : new (e._get("interface/cards/notes/forms/not_exist.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    "leads_list_params"in i && i.leads_list_params && !twig.attr("leads_list_params"in i ? i.leads_list_params : "", "only_creation")) {
                        if (i.title_text = twig.attr("lang"in i ? i.lang : "", "task_has_not"),
                        i.title_color = "#b76111",
                        twig.attr("leads_list_params"in i ? i.leads_list_params : "", "has_tasks") && (i.title_text = twig.attr("lang"in i ? i.lang : "", "task_has"),
                        i.title_color = "#313942"),
                        twig.attr("leads_list_params"in i ? i.leads_list_params : "", "expired") && (i.title_text = twig.attr("lang"in i ? i.lang : "", "task_expired"),
                        i.title_color = "#f37575"),
                        142 == twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_status") && (twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_pipeline_id") && "has_pipelines"in i && i.has_pipelines ? i.title_text = twig.attr(twig.attr(twig.attr(twig.attr("pipelines"in i ? i.pipelines : "", twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_pipeline_id"), void 0, "array"), "statuses"), 142, void 0, "array"), "name") : i.title_text = twig.attr("lang"in i ? i.lang : "", "task_succeed"),
                        i.title_color = "#097125"),
                        143 == twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_status") && (twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_pipeline_id") && "has_pipelines"in i && i.has_pipelines ? i.title_text = twig.attr(twig.attr(twig.attr(twig.attr("pipelines"in i ? i.pipelines : "", twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_pipeline_id"), void 0, "array"), "statuses"), 143, void 0, "array"), "name") : i.title_text = twig.attr("lang"in i ? i.lang : "", "task_unsucceed"),
                        i.title_color = "#858585"),
                        t.append('<div class="notes-last-action" id="notes_lad_wrapper" style="'),
                        "element_id"in i && i.element_id || t.append("display:none"),
                        t.append('">'),
                        twig.attr("leads_list_params"in i ? i.leads_list_params : "", "last_action_date"))
                            if (i.last_type = "timeline_last_" + twig.attr(twig.attr("leads_list_params"in i ? i.leads_list_params : "", "last_action_date"), "type"),
                            t.append('<span style="color: '),
                            t.append(twig.filter.escape(this.env_, "title_color"in i ? i.title_color : "", "light_escape", null, !0)),
                            t.append('">'),
                            t.append(twig.filter.escape(this.env_, "title_text"in i ? i.title_text : "", "light_escape", null, !0)),
                            t.append("</span>"),
                            twig.contains([142, 143], twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_status")))
                                t.append('<span style="color: '),
                                t.append(twig.filter.escape(this.env_, "title_color"in i ? i.title_color : "", "light_escape", null, !0)),
                                t.append('">'),
                                t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("leads_list_params"in i ? i.leads_list_params : "", "lead_close_date_formated"), "date"), "light_escape", null, !0)),
                                t.append("</span>");
                            else if (twig.attr("leads_list_params"in i ? i.leads_list_params : "", "has_tasks")) {
                                if (i.first_note = twig.filter.first(this.env_, "notes"in i ? i.notes : ""),
                                1 != twig.attr(twig.attr("first_note"in i ? i.first_note : "", "params"), "expired")) {
                                    i._parent = i;
                                    var a = twig.filter.reverse(this.env_, "notes"in i ? i.notes : "");
                                    twig.forEach(a, (function(e, t) {
                                        i._key = t,
                                        i.note = e,
                                        "task" == twig.attr("note"in i ? i.note : "", "type") && 1 != twig.attr(twig.attr("note"in i ? i.note : "", "params"), "complate") && 1 != ("end"in i ? i.end : "") && (i.first_note = "note"in i ? i.note : "",
                                        i.end = !0)
                                    }
                                    ), this)
                                }
                                t.append('<span style="color: '),
                                t.append(twig.filter.escape(this.env_, "title_color"in i ? i.title_color : "", "light_escape", null, !0)),
                                t.append('">'),
                                t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("first_note"in i ? i.first_note : "", "date"), "date"), "light_escape", null, !0)),
                                t.append("</span>")
                            }
                        t.append("</div>")
                    }
                    i.after_created = !1,
                    t.append('<div class="notes-wrapper--body--wrapper js-notes-wrapper '),
                    "leads_list_params"in i && i.leads_list_params || t.append("notes-wrapper--body--wrapper-no-timeline"),
                    t.append(" "),
                    twig.attr("leads_list_params"in i ? i.leads_list_params : "", "only_creation") && t.append("notes-wrapper--body--wrapper-no-timeline-contacts"),
                    t.append('">'),
                    i.created_note = !1,
                    i._parent = i,
                    a = "notes"in i ? i.notes : "";
                    var s = {
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
                        twig.attr("note"in i ? i.note : "", "its_created") ? i.created_note = "note"in i ? i.note : "" : (twig.attr("leads_list_params"in i ? i.leads_list_params : "", "only_creation") && twig.attr(s, "last") && (i.after_created = !0),
                        new (e._get("interface/cards/notes/note_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            note: "note"in i ? i.note : "",
                            has_timeline: "leads_list_params"in i ? i.leads_list_params : "",
                            is_last: twig.attr(s, "last"),
                            is_first: twig.attr(s, "first"),
                            hide_timeline: "after_created"in i ? i.after_created : "",
                            prev_date: "prev_date"in i ? i.prev_date : ""
                        })),
                        "after_created"in i && i.after_created || !twig.attr("note"in i ? i.note : "", "its_created") || (i.after_created = !0)),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    "created_note"in i && i.created_note && (twig.attr("leads_list_params"in i ? i.leads_list_params : "", "only_creation") && (i.after_created = !0),
                    new (e._get("interface/cards/notes/note_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        note: "created_note"in i ? i.created_note : "",
                        has_timeline: "leads_list_params"in i ? i.leads_list_params : "",
                        is_last: !0,
                        is_first: !1,
                        hide_timeline: !1,
                        prev_date: "prev_date"in i ? i.prev_date : ""
                    }))),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/wrapper", t)
            }(),
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
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "header_view"in i && i.header_view && t.append('<div class="inbox-messaging-card-header js-card-header-fake"><button class="inbox-messaging-card-header__toggle"><svg class="svg-icon svg-common--hamburger-dims"><use xlink:href="#common--hamburger"></use></svg></button><div class="inbox-messaging-card-header__name-and-tags"><div class="card-fields__top" style="width: 100%;"><div class="card-fields__top-name-block"><div style="width: 35%;height: 20px;opacity: 0.1;background: #eaeaea;"></div></div></div></div></div>'),
                    t.append('<div class="js-card-fields card-holder__fields card-holder__fields_fake card-holder__fields_fake-'),
                    t.append(twig.filter.escape(this.env_, "entity_type"in i ? i.entity_type : "", "light_escape", null, !0)),
                    t.append('" '),
                    ("layout_width"in i ? i.layout_width : "") > 0 && (t.append('style="width: '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("number_format", this.env_, "layout_width"in i ? i.layout_width : "", 4, "."), "light_escape", null, !0)),
                    t.append('%"')),
                    t.append('><div class="card-holder__container custom-scroll"><div class="card-fields__fields-block">'),
                    t.append(this.renderBlock("form_top", i, n)),
                    new (e._get("interface/cards/plugs/top_fields.twig"))(this.env_).render_(t, i),
                    t.append('<div class="card-plug__contact card-plug__contact_expanded"><div class="card-plug__contact-name"><div class="card-plug__avatar"></div><div class="card-plug__contact-name-value card-plug__animation" style="width: 40%"></div></div><div class="card-plug__fields-item" style="margin-top: 17px"><div class="card-plug__fields-item-value" style="width: 11%"></div><div class="card-plug__fields-item-value hidden" style="width: 20%"></div></div><div class="card-plug__fields-item"><div class="card-plug__fields-item-value card-plug__animation" style="width: 26%"></div><div class="card-plug__fields-item-value card-plug__animation" style="width: 30%"></div></div><div class="card-plug__fields-item"><div class="card-plug__fields-item-value card-plug__animation" style="width: 14%"></div><div class="card-plug__fields-item-value card-plug__animation" style="width: 44%"></div></div></div>'),
                    "contacts" != ("entity_type"in i ? i.entity_type : "") && t.append('<div class="card-plug__contact"><div class="card-plug__contact-name"><div class="card-plug__avatar"></div><div class="card-plug__contact-name-value card-plug__animation" style="width: 36%"></div></div></div><div class="card-plug__contact"><div class="card-plug__contact-name"><div class="card-plug__avatar"></div><div class="card-plug__contact-name-value card-plug__animation" style="width: 26%"></div></div></div><div class="card-plug__contact"><div class="card-plug__contact-name"><div class="card-plug__avatar"></div><div class="card-plug__contact-name-value card-plug__animation" style="width: 33%"></div></div></div>'),
                    t.append('</div></div></div><div class="js-card-feed card-holder__feed">'),
                    new (e._get("interface/cards/notes/plug.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.block_form_top = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/plugs/form_top.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_plugs_base"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/plugs/base", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        tabs: twig.bind(this.block_tabs, this)
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
                    i = void 0 === i ? {} : i,
                    e.append('<div class="card-plug__fields-line card-plug__fields-line_name" style="width: 70%; top: 30px;"></div><div class="card-plug__fields-line" style="width: 50%; top: 79px;"></div>'),
                    twig.contains(["leads", "customers"], "entity_type"in t ? t.entity_type : "") && e.append('<div class="card-plug__fields-line" style="width: 30%; top: 130px;"></div>')
                }
                ,
                t.prototype.block_tabs = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="card-plug__fields-line card-plug__fields-line_tabs" style="width: 75%"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_plugs_form_top"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/plugs/form_top", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="js-card-top-fields-plug"><div class="card-plug__fields-item card-plug__fields-item_first"><div class="card-plug__fields-item-value card-plug__animation" style="width: 11%"></div><div class="card-plug__fields-item-value card-plug__animation" style="width: 26%"></div></div><div class="card-plug__fields-item"><div class="card-plug__fields-item-value card-plug__animation" style="width: 22%"></div><div class="card-plug__fields-item-value card-plug__animation" style="width: 10%"></div></div><div class="card-plug__fields-item"><div class="card-plug__fields-item-value card-plug__animation" style="width: 16%"></div><div class="card-plug__fields-item-value card-plug__animation" style="width: 35.8%"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_plugs_top_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/cards/plugs/top_fields", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        form_top: twig.bind(this.block_form_top, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("static", t, i)),
                    e.append('<div class="js-card-cf-wrapper card-holder__fields card-holder__fields_fake card-holder__fields_fake-'),
                    e.append(twig.filter.escape(this.env_, "entity_type"in t ? t.entity_type : "", "light_escape", null, !0)),
                    e.append('" '),
                    ("layout_width"in t ? t.layout_width : "") > 0 && (e.append('style="width: '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("number_format", this.env_, "layout_width"in t ? t.layout_width : "", 4, "."), "light_escape", null, !0)),
                    e.append('%"')),
                    e.append('><div class="card-holder__container custom-scroll"><div class="card-fields__fields-block">'),
                    e.append(this.renderBlock("form_top", t, i)),
                    e.append('<div class="js-card-cf-body"></div></div></div></div>')
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["settings_custom_fields.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_form_top = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/plugs/form_top.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_settings_custom_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/settings/custom_fields", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    "increment"in i && i.increment ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Give points"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Take points"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "bonus-points",
                        placeholder: this.env_.filter("i18n", "Bonus points count"),
                        value: "",
                        class_name: "bonus-points-modal__input js-control-allow-numeric",
                        type: "numeric",
                        disabled: !1,
                        readonly: !1
                    })),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_class: "js-modal-accept"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats_bonus_points_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats/bonus_points_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="card-stats__link"><div class="card-stats__link__title">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append(':</div><div class="card-stats__link__input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        value: "link"in i ? i.link : "",
                        class_name: "card-stats__link__input__inner",
                        readonly: !0
                    })),
                    t.append('<div data-copied="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                    t.append('" data-clipboard-text="'),
                    t.append(twig.filter.escape(this.env_, "link"in i ? i.link : "", "light_escape", null, !0)),
                    t.append('" class="'),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(' card-stats__link__input__copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 27"><defs><style>.cls-1 { fill-rule: evenodd; }</style></defs><path d="M16.95 0H2.42A2.441 2.441 0 0 0 0 2.45v17.19h2.42V2.45h14.53V0zm3.63 4.91H7.26a2.441 2.441 0 0 0-2.42 2.45v17.19a2.45 2.45 0 0 0 2.42 2.46h13.32A2.45 2.45 0 0 0 23 24.55V7.36a2.441 2.441 0 0 0-2.42-2.45zm0 19.64H7.26V7.36h13.32v17.19z" class="cls-1"/></svg></div></div>'),
                    "last_visit"in i && i.last_visit && (t.append('<div class="card-stats__link__last-visit">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Last visit:"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", "last_visit"in i ? i.last_visit : "", "short"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "at"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", "last_visit"in i ? i.last_visit : "", "time"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats_link"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats/link", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="card-task__clone"><div class="card-task__clone__task-type">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "clone_task",
                        class_name: "card-task__clone__checkbox",
                        small: !0
                    })),
                    new (e._get("interface/common/task_types/in_card.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "type"in i ? i.type : "",
                        type_name: "type_name"in i ? i.type_name : "",
                        wrapper_class_name: "card-task__type_small",
                        opened_class_name: "card-task__type-opened_small"
                    })),
                    t.append('</div><span class="card-task__clone__dates">'),
                    i.presets = [{
                        preset: "tomorrow",
                        text: twig.attr("lang"in i ? i.lang : "", "tasks_period_tomorrow")
                    }, {
                        preset: "next_week",
                        text: twig.attr("lang"in i ? i.lang : "", "tasks_period_next_week")
                    }, {
                        preset: "next_month",
                        text: twig.attr("lang"in i ? i.lang : "", "tasks_period_next_month")
                    }],
                    i._parent = i;
                    var a = "presets"in i ? i.presets : ""
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
                        i.preset = e,
                        t.append('<span class="card-task__clone__dates__preset '),
                        twig.attr(s, "first") && t.append("card-task__clone__dates__preset_selected"),
                        t.append(' js-clone-task-preset" data-preset="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("preset"in i ? i.preset : "", "preset"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("preset"in i ? i.preset : "", "text")), "light_escape", null, !0)),
                        t.append("</span>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</span>"),
                    "id"in i && i.id && "deletable"in i && i.deletable && (t.append('<div class="card-task__buttons_remove">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "note_delete"),
                        class_name: "js-note-delete-btn feed-note__button_cancel feed-note__button_remove",
                        tab_index: "-1"
                    })),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_tasks_clone"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/tasks/clone", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="js-note '),
                    "expired"in i && i.expired && t.append("js-note-fixable"),
                    t.append(' card-task-wrapper"><div class="card-task expanded '),
                    "is_new"in i && i.is_new || (t.append("card-task-"),
                    "expired"in i && i.expired ? t.append("expired") : "is_today"in i && i.is_today ? t.append("today") : t.append("future")),
                    t.append('"><div class="card-task__icon"><svg class="svg-icon svg-tasks--clock-dims"><use xlink:href="#tasks--clock"></use></svg></div>'),
                    new (e._get("interface/cards/tasks/controls/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-task__actions",
                        name: "body",
                        value: this.env_.filter("task_text", twig.attr("data"in i ? i.data : "", "text"))
                    })),
                    t.append('<div class="card-task__buttons">'),
                    i.button_text = twig.attr("lang"in i ? i.lang : "", "note_edit"),
                    "is_new"in i && i.is_new && (i.button_text = twig.attr("lang"in i ? i.lang : "", "button_set")),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "button_text"in i ? i.button_text : "",
                        class_name: "js-task-submit feed-note__button",
                        tab_index: "-1",
                        disabled: !("is_new"in i && i.is_new)
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-task-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    })),
                    "id"in i && i.id && "deletable"in i && i.deletable && (t.append('<div class="card-task__buttons_remove">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "note_delete"),
                        class_name: "js-note-delete-btn feed-note__button_cancel feed-note__button_remove",
                        tab_index: "-1"
                    })),
                    t.append("</div>")),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_tasks_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/tasks/edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.cleaned_text = this.env_.filter("task_text", twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"))),
                    i.date_time = this.env_.filter("feed_date", this.env_.filter("task_date", "complete_till"in i ? i.complete_till : "", "date")),
                    i.time = this.env_.filter("task_date", "complete_till"in i ? i.complete_till : "", "time"),
                    ("time"in i ? i.time : "") != twig.attr("lang"in i ? i.lang : "", "tasks_all_day") && (i.date_time = ("date_time"in i ? i.date_time : "") + " " + ("time"in i ? i.time : ""));
                    var a = t;
                    t = new twig.StringBuffer,
                    new (e._get("interface/common/tasks_type_name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        icon_class_name: "card-task__type-icon card-task__type-icon-absolute",
                        type: "type"in i ? i.type : "",
                        type_name: "type_name"in i ? i.type_name : "",
                        type_icon: "type_icon"in i ? i.type_icon : "",
                        type_color: "type_color"in i ? i.type_color : ""
                    })),
                    i.type_name_html = new twig.Markup(t.toString()),
                    t = a,
                    i.type_name_html = ("type_name_html"in i ? i.type_name_html : "") + "",
                    i.task_text = "type_name_html"in i ? i.type_name_html : "",
                    "cleaned_text"in i && i.cleaned_text && ("type_name_html"in i && i.type_name_html && (i.task_text = ("type_name_html"in i ? i.type_name_html : "") + " — "),
                    i.task_text = ("task_text"in i ? i.task_text : "") + ("cleaned_text"in i ? i.cleaned_text : "")),
                    i.text_ar = this.env_.filter("by_paragraphs", twig.filter.trim("task_text"in i ? i.task_text : "")),
                    i.sliced = !1,
                    twig.filter.length(this.env_, "cleaned_text"in i ? i.cleaned_text : "") > 500 && (i.sliced = this.env_.filter("slice", this.env_, "cleaned_text"in i ? i.cleaned_text : "", 0, 300) + "...",
                    "type_name_html"in i && i.type_name_html && (i.sliced = ("type_name_html"in i ? i.type_name_html : "") + " — " + ("sliced"in i ? i.sliced : "")),
                    i.text_ar = this.env_.filter("by_paragraphs", twig.filter.trim("sliced"in i ? i.sliced : ""))),
                    twig.filter.length(this.env_, "text_ar"in i ? i.text_ar : "") > 4 && (i.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in i ? i.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in i ? i.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in i ? i.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in i ? i.text_ar : "", 3, void 0, "array")], "join") + "..."),
                    i.task_linked_name = this.env_.filter("lead_name", twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "element_type_code"in i ? i.element_type_code : "", void 0, "array"), "element_id"in i ? i.element_id : "", void 0, "array"), "name", void 0, "array"), twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "element_type_code"in i ? i.element_type_code : "", void 0, "array"), "element_id"in i ? i.element_id : "", void 0, "array"), "id", void 0, "array")),
                    "leads" == ("element_type_code"in i ? i.element_type_code : "") ? i.task_linked_name = this.env_.filter("lead_name", "task_linked_name"in i ? i.task_linked_name : "", twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "element_type_code"in i ? i.element_type_code : "", void 0, "array"), "element_id"in i ? i.element_id : "", void 0, "array"), "id", void 0, "array")) : "contacts" == ("element_type_code"in i ? i.element_type_code : "") && (i.task_linked_name = this.env_.filter("contact_name", "task_linked_name"in i ? i.task_linked_name : "")),
                    t.append('<div class="js-note '),
                    "expired"in i && i.expired && t.append("js-note-fixable"),
                    t.append(' card-task-wrapper"><div class="card-task card-task card-task-'),
                    "expired"in i && i.expired ? (t.append("expired "),
                    "completable"in i && i.completable || t.append("incompletable")) : "is_future"in i && i.is_future && (t.append("future "),
                    "is_today"in i && i.is_today && t.append("today")),
                    t.append('"><div class="card-task__icon"><svg class="svg-icon svg-tasks--clock-dims"><use xlink:href="#tasks--clock"></use></svg></div><div class="card-task__inner"><div class="card-task__inner-header"><div class="card-task__inner-header-left"><span class="card-task__date">'),
                    a = t,
                    (t = new twig.StringBuffer).append(twig.filter.escape(this.env_, "date_time"in i ? i.date_time : "", "light_escape", null, !0)),
                    ("duration"in i ? i.duration : "") > 0 && (t.append("-"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", Number("complete_till"in i ? i.complete_till : "") + Number("duration"in i ? i.duration : ""), "time"), "light_escape", null, !0))),
                    i.task_date_value = new twig.Markup(t.toString()),
                    t = a,
                    "search_highlighted"in i && i.search_highlighted || !("search_highlight_active"in i) || !i.search_highlight_active ? t.append(twig.filter.escape(this.env_, "task_date_value"in i ? i.task_date_value : "", "light_escape", null, !0)) : (t.append('<span style="background: yellow; color: #000">'),
                    t.append(twig.filter.escape(this.env_, "task_date_value"in i ? i.task_date_value : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    "expired"in i && i.expired && "expired_diff"in i && i.expired_diff && (t.append(' <b class="card-task__expired-diff">('),
                    t.append(twig.filter.escape(this.env_, "expired_diff"in i ? i.expired_diff : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "day,days,days,days"), "expired_diff"in i ? i.expired_diff : ""), "light_escape", null, !0)),
                    t.append(")</b>")),
                    t.append("</span>"),
                    new (e._get("interface/notes/types/task_header_name_user.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "element_type_code"in i ? i.element_type_code : "", void 0, "array"), "element_id"in i ? i.element_id : "", void 0, "array"), "id", void 0, "array") && ("main_element_type"in i ? i.main_element_type : "") != ("element_type"in i ? i.element_type : "") && (t.append('<div class="card-task__linked"><a href="/'),
                    t.append(twig.filter.escape(this.env_, "element_type_code"in i ? i.element_type_code : "", "light_escape", null, !0)),
                    t.append("/detail/"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "element_type_code"in i ? i.element_type_code : "", void 0, "array"), "element_id"in i ? i.element_id : "", void 0, "array"), "id", void 0, "array"), "light_escape", null, !0)),
                    t.append('"class="js-navigate-link card-task__linked-inner" title="'),
                    t.append(twig.filter.escape(this.env_, "task_linked_name"in i ? i.task_linked_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "task_linked_name"in i ? i.task_linked_name : "", "light_escape", null, !0)),
                    t.append("</a></div>")),
                    t.append('</div><div class="card-task__inner-content">'),
                    "search_highlighted"in i && i.search_highlighted ? (t.append("type_name_html"in i ? i.type_name_html : ""),
                    t.append(" — "),
                    t.append("search_highlighted"in i ? i.search_highlighted : "")) : "sliced"in i && i.sliced ? (t.append('<div class="note--body--content-sliced">'),
                    t.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("sliced"in i ? i.sliced : ""), !0))),
                    t.append('<a href="#" class="js-note-expander note-expander">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "expand"), "light_escape", null, !0)),
                    t.append('</a></div><div class="note--body--content-not-sliced">'),
                    t.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("task_text"in i ? i.task_text : ""), !0))),
                    t.append("</div>")) : t.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("task_text"in i ? i.task_text : ""), !0))),
                    t.append('</div></div><div class="card-task__result-wrapper"><div class="card-task__result-wrapper__inner"><textarea name="result" placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_first_add_result"), "light_escape", null, !0)),
                    t.append('" class="card-task__result-wrapper__inner__textarea js-task-result-textarea"></textarea>'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "tasks_first_complete"),
                        class_name: "button-input-disabled button-input_blue js-task-result-button card-task__button",
                        tab_index: "-1"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/cards/tasks/clone.twig"))(this.env_).render_(t, i),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_tasks_view"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/tasks/view", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Callback settings"), "light_escape", null, !0)),
                    t.append('</h2><div><p style="color: var(--palette-text-secondary-light); margin-bottom: 4px;">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", 'Your function must take in the callback parameter, in which you need to pass the result of the work as the value of an array of objects of the form { key: "code", value: value }, where code is the code as an additional field, and the value is.'), "light_escape", null, !0)),
                    t.append('</p><p style="color: var(--palette-text-secondary-light);">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "If there is no result, an empty array must be passed."), "light_escape", null, !0)),
                    t.append('</p></div><div class="callback-modal__textarea">'),
                    new (e._get("interface/controls/textarea_code.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "callback-modal__textarea-code",
                        textarea_class_name: "callback-modal__textarea-area",
                        lines_class_name: "callback-modal__textarea-lines",
                        name: "content"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_class: "js-modal-callback-accept"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_callback_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/callback_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf-field-enum"><span class="cf-field-wrapper__handle cf-field-wrapper__handle-enum"><span class="icon icon-v-dots"></span></span>'),
                    "predefined"in i && i.predefined && "enums_names"in i && i.enums_names && (i.value = twig.attr(twig.attr("enums_names"in i ? i.enums_names : "", twig.filter.lower(this.env_, "value"in i ? i.value : ""), void 0, "array"), "full")),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "cf-field-input",
                        placeholder: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "enum_placeholder"),
                        disabled: "predefined"in i ? i.predefined : "",
                        value: "value"in i ? i.value : "",
                        name: "enums[" + ("i"in i ? i.i : "") + "][value]"
                    })),
                    "id"in i && i.id && (t.append('<input type="hidden" name="enums['),
                    t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                    t.append('][id]" value="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append('<input type="hidden" name="enums['),
                    t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                    t.append('][sort]" class="cf-field__enum__sort" value="'),
                    t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                    t.append('">'),
                    "predefined"in i && i.predefined || (t.append('<div class="cf-field-enum__remove" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "remove"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-common--trash-dims"><use xlink:href="#common--trash"></use></svg></div>')),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_enum"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/enum", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    twig.filter.length(this.env_, "enums"in i ? i.enums : "") || (i.enums = [[], [], [], [], []]),
                    t.append('<div class="cf-field-enums-wrapper" data-count="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "enums"in i ? i.enums : ""), "light_escape", null, !0)),
                    t.append('" data-next_index="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "enums"in i ? i.enums : ""), "light_escape", null, !0)),
                    t.append('">'),
                    twig.contains([4, 5, 10, 18], "type_id"in i ? i.type_id : "")) {
                        i._parent = i;
                        var a = "enums"in i ? i.enums : ""
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
                            i.enum = n,
                            i.i = twig.attr(s, "index0"),
                            new (e._get("interface/cards/custom_fields/fields/enum.twig"))(this.env_).render_(t, twig.extend({}, i, "enum"in i ? i.enum : "")),
                            "predefined"in i && i.predefined || !twig.attr(s, "last") || (t.append('<span class="js-cf-enum-add cf-field-enum-add">'),
                            t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "add_enum"), "light_escape", null, !0)),
                            t.append("</span>")),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    } else
                        14 == ("type_id"in i ? i.type_id : "") ? (t.append(" "),
                        new (e._get("interface/controls/birthday/birthday_settings.twig"))(this.env_).render_(t, i)) : 23 == ("type_id"in i ? i.type_id : "") ? (t.append(" "),
                        t.append('<div class="cf-field-monetary-currency"><div class="cf-field-monetary-currency-controls"><span class="cf-field-monetary-currency-input-ghost js-monetary-currency-input-ghost">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", "0", [!1, 0, !1, "monetary_locale_data"in i ? i.monetary_locale_data : ""]), "light_escape", null, !0)),
                        t.append("</span>"),
                        new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "cf-field-monetary-currency-select",
                            items: "currencies"in i ? i.currencies : "",
                            name: "currency",
                            selected: twig.attr("settings"in i ? i.settings : "", "currency", void 0, void 0, !0) ? twig.filter.def(twig.attr("settings"in i ? i.settings : "", "currency"), "account_currency"in i ? i.account_currency : "") : "account_currency"in i ? i.account_currency : ""
                        })),
                        t.append("</div></div>")) : (t.append('<span class="cf-field-enums-wrapper-value-ghost">'),
                        "budget" == ("id"in i ? i.id : "") ? t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)) : t.append("..."),
                        t.append("</span>"));
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_enums_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/enums_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf-field-wrapper '),
                    "sortable"in i && i.sortable && t.append("sortable"),
                    t.append(" "),
                    "sortable"in i && i.sortable || !("id"in i) || !i.id || t.append("no-sortable"),
                    t.append(" "),
                    "predefined"in i && i.predefined && t.append("predefined"),
                    t.append('" id="cf_field_'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append("_"),
                    t.append(twig.filter.escape(this.env_, "element_type"in i ? i.element_type : "", "light_escape", null, !0)),
                    t.append('" data-sort="'),
                    t.append(twig.filter.escape(this.env_, "sort"in i ? i.sort : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/cards/custom_fields/fields/modes/view.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/field", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.statuses_count = 0,
                    t._parent = t;
                    var n = "hide_for_stages"in t ? t.hide_for_stages : "";
                    twig.forEach(n, (function(e, i) {
                        t.pid = i,
                        t.s = e,
                        twig.filter.length(this.env_, "s"in t ? t.s : "") && (t.statuses_count = Number("statuses_count"in t ? t.statuses_count : "") + Number(twig.filter.length(this.env_, "s"in t ? t.s : "")))
                    }
                    ), this),
                    ("statuses_count"in t ? t.statuses_count : "") > 0 && (e.append('<div class="cf-field-view__hide-for-stage">'),
                    t.text = twig.attr(twig.attr("lang"in t ? t.lang : "", "cf"), "hidden") + " " + ("statuses_count"in t ? t.statuses_count : ""),
                    e.append('<div class="cf-field-view__hide-for-stage-text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_hidden"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/hidden", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="cf-field-view__required '),
                    twig.attr("tariff"in t ? t.tariff : "", "required_fields") || e.append("has-plug"),
                    e.append('">'),
                    t.pipelines_count = 0,
                    t.statuses_count = 0,
                    this.env_.test("iterable", "status_id"in t ? t.status_id : "")) {
                        t._parent = t;
                        var n = "status_id"in t ? t.status_id : "";
                        twig.forEach(n, (function(e, i) {
                            if (t.pid = i,
                            t.s = e,
                            "s"in t && t.s)
                                if (t.pipelines_count = Number("pipelines_count"in t ? t.pipelines_count : "") + Number(1),
                                143 == ("s"in t ? t.s : ""))
                                    t.pipeline_statuses_count = 1,
                                    t.statuses_count = Number("statuses_count"in t ? t.statuses_count : "") + Number(1);
                                else {
                                    t.pipeline_statuses_count = 0;
                                    var n = twig.attr(twig.attr("pipelines"in t ? t.pipelines : "", "id_" + ("pid"in t ? t.pid : ""), void 0, "array"), "statuses");
                                    twig.forEach(n, (function(e, i) {
                                        t.st_id = i,
                                        t.st = e,
                                        "id_143" != ("st_id"in t ? t.st_id : "") && (("st_id"in t ? t.st_id : "") == "id_" + ("s"in t ? t.s : "") && (t.pipeline_statuses_count = 1),
                                        1 == ("pipeline_statuses_count"in t ? t.pipeline_statuses_count : "") && (t.statuses_count = Number("statuses_count"in t ? t.statuses_count : "") + Number(1)))
                                    }
                                    ), this)
                                }
                        }
                        ), this)
                    }
                    ("pipelines_count"in t ? t.pipelines_count : "") >= 1 ? (t.pipeline_label = twig.attr(twig.attr("lang"in t ? t.lang : "", "cf"), "required") + " " + ("statuses_count"in t ? t.statuses_count : ""),
                    e.append('<div class="cf-field-view__required-inner">'),
                    e.append(twig.filter.escape(this.env_, "pipeline_label"in t ? t.pipeline_label : "", "light_escape", null, !0)),
                    e.append("</div>")) : (e.append('<div class="cf-field-view__required-inner cf-field-view__required-inner_status" style="background-color: '),
                    twig.attr("tariff"in t ? t.tariff : "", "required_fields") ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("statuses"in t ? t.statuses : "", "id_" + ("status_id"in t ? t.status_id : ""), void 0, "array"), "bg_color"), "light_escape", null, !0)) : e.append("#99ccff"),
                    e.append('">'),
                    twig.attr("tariff"in t ? t.tariff : "", "required_fields") ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("statuses"in t ? t.statuses : "", "id_" + ("status_id"in t ? t.status_id : ""), void 0, "array"), "option"), "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_required"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/required", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        stats_items: twig.bind(this.block_stats_items, this),
                        days_in_work: twig.bind(this.block_days_in_work, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/stats.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_stats_items = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.purchase_title = twig.filter.capitalize(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "purchase,purchases,purchases"), twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "transactions"), "statistic"), "count"))),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("element"in i ? i.element : "", "purchases_count") ? twig.attr("element"in i ? i.element : "", "purchases_count") : 0,
                        title: this.env_.filter("i18n", "Amount of purchases")
                    })),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("element"in i ? i.element : "", "ltv") ? this.env_.filter("count", twig.attr("element"in i ? i.element : "", "ltv")) : 0,
                        title: this.env_.filter("i18n", "Total sales value") + " (" + ("currency"in i ? i.currency : "") + ")"
                    })),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("element"in i ? i.element : "", "average_check") ? this.env_.filter("count", twig.attr("element"in i ? i.element : "", "average_check")) : 0,
                        title: this.env_.filter("i18n", "Average check") + " (" + ("currency"in i ? i.currency : "") + ")"
                    })),
                    new (e._get("interface/cards/stats/items/base.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("element"in i ? i.element : "", "bonus_points") ? twig.attr("element"in i ? i.element : "", "bonus_points") : 0,
                        title: this.env_.filter("i18n", "Bonus points"),
                        class_name: "js-bonus-points"
                    })),
                    t.append('<div class="main-entity-stats__bonus-points"><span class="js-bonus-points-give main-entity-stats__bonus-points__btn">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Give points"), "light_escape", null, !0)),
                    t.append('</span><span class="main-entity-stats__bonus-points__divider">/</span><span class="js-bonus-points-take main-entity-stats__bonus-points__btn">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Take points"), "light_escape", null, !0)),
                    t.append("</span></div>")
                }
                ,
                t.prototype.block_days_in_work = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="main-entity-stats__days-in-work"><div class="main-entity-stats__days-in-work-count">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("element"in t ? t.element : "", "days_in_work"), "light_escape", null, !0)),
                    e.append('</div><div class="main-entity-stats__days-in-work-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Days working with customer"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_customers_card_stats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/customers/card/stats", t)
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
                    return e._get("interface/cards/forms/fields/textarea.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_address"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/address", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="linked-form__field linked-form__field_budget '),
                    twig.contains("hidden_fields_for_stage"in i ? i.hidden_fields_for_stage : "", "budget") && t.append("u-hidden-cf"),
                    t.append('" data-id="budget"><div class="linked-form__field__label" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_edit_lead_budget"), "light_escape", null, !0)),
                    t.append('"><label for="" class="card-cf-name-label__label"><span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_edit_lead_budget"), "light_escape", null, !0)),
                    t.append('</span></label></div><div class="linked-form__field__value card-budget linked-form__field-text '),
                    ("budget_placeholder"in i ? i.budget_placeholder : "") > 0 && t.append("linked-form__field__value_computed"),
                    t.append('">'),
                    "grant_edit"in i && i.grant_edit ? new (e._get("interface/cards/forms/fields/price.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: this.env_.filter("round", "budget_raw"in i ? i.budget_raw : "") ? this.env_.filter("round", "budget_raw"in i ? i.budget_raw : "") : 0,
                        name: "budget_name"in i ? i.budget_name : "",
                        id: "lead_card_budget",
                        short: !1,
                        allow_zero: !0
                    })) : (t.append('<div class="card-budget__title card-budget__title_no_rights">'),
                    "$" == ("currency_short_name"in i ? i.currency_short_name : "") && (t.append('<span class="card-budget__currency card-budget__currency_title">'),
                    t.append(twig.filter.escape(this.env_, "currency_short_name"in i ? i.currency_short_name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<span class="card-budget__title__sum">'),
                    this.env_.filter("round", "budget_raw"in i ? i.budget_raw : "") ? t.append(twig.filter.escape(this.env_, this.env_.filter("round", "budget_raw"in i ? i.budget_raw : ""), "light_escape", null, !0)) : t.append(0),
                    t.append("</span>"),
                    "$" != ("currency_short_name"in i ? i.currency_short_name : "") && (t.append('<span class="card-budget__currency card-budget__currency_title">&nbsp;'),
                    t.append(twig.filter.escape(this.env_, "currency_short_name"in i ? i.currency_short_name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "budget_name"in i ? i.budget_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    this.env_.filter("round", "budget_raw"in i ? i.budget_raw : "") ? t.append(twig.filter.escape(this.env_, this.env_.filter("round", "budget_raw"in i ? i.budget_raw : ""), "light_escape", null, !0)) : t.append(0),
                    t.append('"></div>')),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_budget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/budget", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/controls/chained_list.twig"))(this.env_).render_(t, {
                        name: "name"in i ? i.name : "",
                        input_class_name: "linked-form__cf",
                        lists: twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "chained_lists"),
                        values: "value"in i ? i.value : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_chained_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/chained_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        name: "name"in i ? i.name : "",
                        value: "value"in i ? i.value : "",
                        text: "",
                        checked: twig.contains([this.env_.filter("i18n", "Yes"), "1"], "value"in i ? i.value : ""),
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_checkbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/checkbox", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/controls/fullname/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "name"in i ? i.name : "",
                        name: "contact[N]",
                        first_name: {
                            name: "contact[FN]",
                            value: "first_name"in i ? twig.filter.def("first_name"in i ? i.first_name : "", "name"in i ? i.name : "") : "name"in i ? i.name : ""
                        },
                        last_name: {
                            name: "contact[LN]",
                            value: "last_name"in i ? i.last_name : ""
                        },
                        comfort_zone: 0,
                        autosized: !0,
                        placeholder: "...",
                        input_class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"'
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_contact_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/contact_name", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        type: "single",
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        input_class: "linked-form__cf" + ("placeholder"in i && i.placeholder && "..." != ("placeholder"in i ? i.placeholder : "") ? " linked-form__cf_with-placeholder js-control-autosized_input" : "") + ("input_class_name"in i && i.input_class_name ? " " + ("input_class_name"in i ? i.input_class_name : "") : ""),
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/date", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        type: "single",
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        input_class: "linked-form__cf",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_date_time"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/date_time", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        name: "name"in i ? i.name : "",
                        file_id: twig.attr("value"in i ? i.value : "", "file_uuid"),
                        file_name: twig.attr("value"in i ? i.value : "", "file_name"),
                        file_size: twig.attr("value"in i ? i.value : "", "file_size"),
                        field_id: twig.attr("cf"in i ? i.cf : "", "ID"),
                        element_id: twig.attr("element"in i ? i.element : "", "ID"),
                        element_type: twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE"),
                        lead_element_id: twig.attr("element"in i ? i.element : "", "LEAD_ELEMENT_ID"),
                        disabled: !("grant_edit"in i && i.grant_edit),
                        file_name_type: "file-name-card",
                        is_deleted: twig.attr("value"in i ? i.value : "", "is_deleted")
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/file", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.link = "",
                    t._parent = t;
                    var n = "parts"in t ? t.parts : "";
                    twig.forEach(n, (function(e, i) {
                        t._key = i,
                        t.part = e,
                        "part"in t && t.part && (t.link = ("link"in t ? t.link : "") + ("part"in t ? t.part : "") + ",")
                    }
                    ), this),
                    e.append('<input class="js-google-maps-link" value="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" hidden>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_google_maps_link"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/google_maps_link", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    return "interface_cards_forms_fields_legal_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/legal_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="linked-entity-field js-control-linked-entity '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" data-search-in="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "search_in", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "search_in"), "") : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-entity-field__suggest",
                        additional_data: 'spellcheck="false" data-query-type="name"',
                        input_class_name: "linked-form__cf js-linked-entity-name " + ("input_class_name"in i ? i.input_class_name : ""),
                        value: twig.attr("value"in i ? i.value : "", "name"),
                        name: ("name"in i ? i.name : "") + "[name]",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        ajax: []
                    })),
                    t.append('<input type="hidden" class="js-linked-entity-id" name="'),
                    t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[entity_id]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "entity_id"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-linked-entity-type" name="'),
                    t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[entity_type]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "entity_type"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-linked-entity-catalog-id" name="'),
                    t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[catalog_id]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "catalog_id"), "light_escape", null, !0)),
                    t.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_linked_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/linked_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/controls/budget.twig"))(this.env_).render_(t, {
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "0",
                        max_length: 17,
                        id: "id"in i ? i.id : "",
                        currency: twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "currency"),
                        allow_zero: !0,
                        keep_zero: !twig.attr("flags"in i ? i.flags : "", "computed"),
                        wrapper_class_name: "card-budget__input",
                        disabled: "disabled"in i ? i.disabled : ""
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_monetary"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/monetary", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i._parent = i;
                    var a = twig.attr("cf"in i ? i.cf : "", "ENUMS");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "ID"),
                            prefix: "cf_" + twig.attr("cf"in i ? i.cf : "", "ID") + "_" + twig.attr("item"in i ? i.item : "", "ID") + "_" + ("form_index"in i ? i.form_index : ""),
                            name: ("name"in i ? i.name : "") + "[" + twig.attr("item"in i ? i.item : "", "ID") + "]",
                            option: twig.attr("item"in i ? i.item : "", "VALUE"),
                            is_checked: twig.contains(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE_ENUM_ID", void 0, "array"), twig.attr("item"in i ? i.item : "", "ID"))
                        }])
                    }
                    ), this),
                    i.checkboxes_dropdown_data = {
                        name: "name"in i ? i.name : "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "cf_values_numeral"),
                        title_empty: "placeholder"in i ? i.placeholder : "",
                        items: "items"in i ? i.items : "",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        class_name: "class_name"in i ? i.class_name : ""
                    },
                    twig.filter.length(this.env_, "items"in i ? i.items : "") < 150 ? new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "checkboxes_dropdown_data"in i ? i.checkboxes_dropdown_data : "")) : new (e._get("interface/controls/checkboxes_dropdown/checkboxes_dropdown_huge.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("checkboxes_dropdown_data"in i ? i.checkboxes_dropdown_data : "", {
                        control_class_name: "js-control-checkboxes_dropdown-huge"
                    })))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/multiselect", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="linked-form__field__value-name '),
                    twig.filter.length(this.env_, twig.attr("element"in i ? i.element : "", "profiles")) && t.append("linked-form__field__value-name_w-profile"),
                    t.append(" "),
                    "companies" == ("entity_type"in i ? i.entity_type : "") && t.append(" linked-form__field__value-name_company "),
                    t.append(" "),
                    twig.attr("element"in i ? i.element : "", "NAME") || t.append("empty"),
                    t.append('">'),
                    "companies" == ("entity_type"in i ? i.entity_type : "") && (t.append('<div class="linked-form__field-company-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "company"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="linked-form__field__link-wrapper">'),
                    i.href = "/" + ("entity_type"in i ? i.entity_type : "") + "/detail/" + twig.attr("element"in i ? i.element : "", "ID"),
                    "companies" == ("entity_type"in i ? i.entity_type : "") ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "href"in i ? i.href : "", "light_escape", null, !0)),
                    t.append('" data-href="'),
                    t.append(twig.filter.escape(this.env_, "href"in i ? i.href : "", "light_escape", null, !0)),
                    t.append('" tabindex="-1" class="linked-form__field__link linked-form__field__link_name '),
                    "companies" == ("entity_type"in i ? i.entity_type : "") && t.append(" linked-form__field__link_company"),
                    t.append('">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("element"in i ? i.element : "", "NAME"),
                        name: "contact[NAME]",
                        placeholder: "...",
                        class_name: "linked-form__cf js-linked-name-view",
                        additional_data: 'spellcheck="false"'
                    })),
                    t.append("</a>")) : (twig.attr("element"in i ? i.element : "", "FIRST_NAME") && twig.attr("element"in i ? i.element : "", "LAST_NAME") ? this.env_.invoke("is_contact_name_display_order_first") ? i.contact_name = twig.attr("element"in i ? i.element : "", "FIRST_NAME") + " " + twig.attr("element"in i ? i.element : "", "LAST_NAME") : i.contact_name = twig.attr("element"in i ? i.element : "", "LAST_NAME") + " " + twig.attr("element"in i ? i.element : "", "FIRST_NAME") : i.contact_name = twig.attr("element"in i ? i.element : "", "NAME"),
                    t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "href"in i ? i.href : "", "light_escape", null, !0)),
                    t.append('" data-href="'),
                    t.append(twig.filter.escape(this.env_, "href"in i ? i.href : "", "light_escape", null, !0)),
                    t.append('" tabindex="-1" class="linked-form__field__link linked-form__field__link_name js-linked-name-control">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "contact_name"in i ? i.contact_name : "",
                        name: "",
                        placeholder: "...",
                        class_name: "linked-form__cf js-linked-name-view js-form-changes-skip",
                        additional_data: 'data-comfort-zone="0"',
                        readonly: !0
                    })),
                    t.append('<div class="linked-form__field__value-name-editing js-linked-name-editing-holder hidden">'),
                    new (e._get("interface/cards/forms/fields/contact_name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: twig.attr("element"in i ? i.element : "", "NAME"),
                        first_name: twig.attr("element"in i ? i.element : "", "FIRST_NAME"),
                        last_name: twig.attr("element"in i ? i.element : "", "LAST_NAME")
                    })),
                    t.append("</div></a>")),
                    i.more_tip = [],
                    "Y" == twig.attr("element"in i ? i.element : "", "CUT") || twig.attr("element"in i ? i.element : "", "can_navigate", void 0, void 0, !0) && !twig.attr("element"in i ? i.element : "", "can_navigate") || (i.more_tip = twig.filter.merge("more_tip"in i ? i.more_tip : "", {
                        to_card: {
                            svg_icon: "dashboard--open-pipeline",
                            text: twig.attr("lang"in i ? i.lang : "", "card_to_card"),
                            class_name: "js-linked-entity-show",
                            link_class_name: "js-navigate-link",
                            href: twig.attr("element"in i ? i.element : "", "DETAIL_PAGE_URL_REDESIGN")
                        }
                    })),
                    "companies" != ("entity_type"in i ? i.entity_type : "") && (i.more_tip = twig.filter.merge("more_tip"in i ? i.more_tip : "", {
                        copy: {
                            svg_icon: "common--copy",
                            should_be_raw: !0,
                            text: '<span class="js-linked-entity-name-copy-inner">' + this.env_.filter("i18n", "Copy name") + "</span>",
                            class_name: "js-linked-entity-name-copy",
                            additional_data: 'data-copied="' + this.env_.filter("i18n", "Copied") + '!" data-clipboard-text="' + twig.attr("element"in i ? i.element : "", "NAME") + '"'
                        }
                    })),
                    "grant_edit"in i && i.grant_edit && twig.attr("_account_features"in i ? i._account_features : "", "contacts_available") && (i.more_tip = twig.filter.merge("more_tip"in i ? i.more_tip : "", {
                        unlink: {
                            icon: "unlink",
                            class_name: "js-linked-entity-unlink",
                            text: twig.attr("lang"in i ? i.lang : "", "card_unlink"),
                            enabled: !0
                        }
                    }),
                    twig.attr("element"in i ? i.element : "", "main_contact", void 0, void 0, !0) && null !== twig.attr("element"in i ? i.element : "", "main_contact") && (i.main_contact_class = "js-linked-entity-set_main",
                    twig.attr("element"in i ? i.element : "", "main_contact") && (i.main_contact_class = ("main_contact_class"in i ? i.main_contact_class : "") + " hidden"),
                    i.more_tip = twig.filter.merge("more_tip"in i ? i.more_tip : "", {
                        set_main: {
                            icon: "star-dark-grey",
                            class_name: "main_contact_class"in i ? i.main_contact_class : "",
                            text: twig.attr("lang"in i ? i.lang : "", "card_set_main"),
                            enabled: !0
                        }
                    }))),
                    twig.filter.length(this.env_, "more_tip"in i ? i.more_tip : "") && (t.append('<span class="linked-form__field__more '),
                    "companies" == ("entity_type"in i ? i.entity_type : "") && t.append("linked-form__field__more_company"),
                    t.append(' js-tip-holder"><svg class="svg-icon svg-controls--button-more-dims"><use xlink:href="#controls--button-more"></use></svg>'),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__field__more__tip",
                        items: "more_tip"in i ? i.more_tip : "",
                        is_custom_tip_holder: !0
                    })),
                    t.append("</span>")),
                    t.append("</div>"),
                    twig.filter.length(this.env_, twig.attr("element"in i ? i.element : "", "profiles")) && (t.append('<div class="profile_messengers-wrapper">'),
                    new (e._get("interface/cards/forms/profile_messengers/user_messenger.twig"))(this.env_).render_(t, i),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/name", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf js-control-allow-numeric-negative",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        additional_data: 'data-allow-zero="y"'
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_numeric"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/numeric", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.external_name = ("name"in i ? i.name : "") + "[external_uid]",
                    i.value = twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"), "key"in i ? i.key : "", void 0, "array"),
                    i.line1_name = ("name"in i ? i.name : "") + "[line1]",
                    i.line2_name = ("name"in i ? i.name : "") + "[line2]",
                    i.city_name = ("name"in i ? i.name : "") + "[city]",
                    i.state_name = ("name"in i ? i.name : "") + "[state]",
                    i.zip_name = ("name"in i ? i.name : "") + "[zip]",
                    i.country_name = ("name"in i ? i.name : "") + "[country]",
                    t.append('<div class="org-legal-name js-control-org-legal-name"><div class="org-legal-name__item org-legal-name__item_name">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf js-org-legal-name-name control--suggest--input",
                        additional_data: 'spellcheck="false" data-query-type="name"',
                        input_class_name: "linked-form__cf js-org-legal-name-name org-legal-name__item-mini-input text-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "name", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "name"), "") : "",
                        input_type: "text",
                        name: "name_input_name"in i ? i.name_input_name : "",
                        styled_input: !0,
                        ajax: []
                    })),
                    t.append('</div><input type="hidden" class="js-org-legal-name-external" name="'),
                    t.append(twig.filter.escape(this.env_, "external_name"in i ? i.external_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "external_uid", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "external_uid"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-org-legal-name-line1" name="'),
                    t.append(twig.filter.escape(this.env_, "line1_name"in i ? i.line1_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "line1", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "line1"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-org-legal-name-line2" name="'),
                    t.append(twig.filter.escape(this.env_, "line2_name"in i ? i.line2_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "line2", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "line2"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-org-legal-name-city" name="'),
                    t.append(twig.filter.escape(this.env_, "city_name"in i ? i.city_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "city", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "city"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-org-legal-name-state" name="'),
                    t.append(twig.filter.escape(this.env_, "state_name"in i ? i.state_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "state", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "state"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-org-legal-name-zip" name="'),
                    t.append(twig.filter.escape(this.env_, "zip_name"in i ? i.zip_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "zip", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "zip"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-org-legal-name-country" name="'),
                    t.append(twig.filter.escape(this.env_, "country_name"in i ? i.country_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "country", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "country"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_org_legal_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/org_legal_name", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/controls/payer.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_payer"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/payer", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.pei_code = twig.filter.lower(this.env_, twig.attr("cf"in i ? i.cf : "", "CODE")),
                    i.pei_value = twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"), "key"in i ? i.key : "", void 0, "array"),
                    null === ("pei_value"in i ? i.pei_value : "") && (i.pei_value = ""),
                    "entity"in i && i.entity || (i.entity = twig.attr("element"in i ? i.element : "", "ELEMENT_TYPE")),
                    i.params = {
                        value: "pei_value"in i ? i.pei_value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf",
                        type: "text",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    },
                    "im" == ("pei_code"in i ? i.pei_code : "") ? new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")) : (t.append('<div class="js-linked-with-actions '),
                    "is_add"in i && i.is_add || "im" == ("pei_code"in i ? i.pei_code : "") || (t.append("js-linked-has-actions "),
                    twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"), "key"in i ? i.key : "", void 0, "array") && t.append("js-linked-has-value")),
                    t.append('" data-pei-code="'),
                    t.append(twig.filter.escape(this.env_, "pei_code"in i ? i.pei_code : "", "light_escape", null, !0)),
                    t.append('">'),
                    ("linked_entity_add" == ("template_type"in i ? i.template_type : "") || "is_add"in i && i.is_add) && (i.params = twig.filter.merge("params"in i ? i.params : "", {
                        additional_data: 'data-linked-type="' + this.env_.filter("element_type", "entity"in i ? i.entity : "", "single") + '" data-pei-code="' + ("pei_code"in i ? i.pei_code : "") + '" spellcheck="false"',
                        ajax: {
                            url: "/private/ajax/search.php",
                            params: "type=" + this.env_.filter("element_type", "entity"in i ? i.entity : "", "string") + "&q=#q#&query_type=" + ("pei_code"in i ? i.pei_code : "")
                        }
                    })),
                    i.tmpl = "interface/controls/suggest.twig",
                    i.is_disabled = "disabled"in i && i.disabled && "disabled"in i ? i.disabled : "",
                    "phone" == ("pei_code"in i ? i.pei_code : "") && (i.tmpl = "interface/controls/phone.twig"),
                    new (e._get("tmpl"in i ? i.tmpl : ""))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("params"in i ? i.params : "", {
                        placeholder: "...",
                        type: "pei_code"in i ? i.pei_code : "",
                        class_name: "",
                        input_class_name: "linked-form__cf js-linked-pei",
                        readonly: "",
                        disabled: "is_disabled"in i ? i.is_disabled : ""
                    }))),
                    i.tip = [],
                    "phone" == ("pei_code"in i ? i.pei_code : "") ? i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "phone-dark",
                        text: twig.attr("lang"in i ? i.lang : "", "cf_actions_phone"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="phone"'
                    }]) : i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "mail-dark",
                        text: this.env_.filter("i18n", "Mail (to)"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="email"'
                    }, {
                        icon: "mail-dark",
                        text: this.env_.filter("i18n", "Send from amoCRM"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="email_with_template"'
                    }]),
                    i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        svg_icon: "common--copy",
                        text: this.env_.filter("i18n", "Copy"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="copy"'
                    }]),
                    i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "pencil",
                        text: twig.attr("lang"in i ? i.lang : "", "cf_edit"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="edit"'
                    }]),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-cf-actions-tip",
                        items: "tip"in i ? i.tip : ""
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_pei"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/pei", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "0",
                        max_length: 17,
                        id: "id"in i ? i.id : "",
                        short: !("short"in i) || ("short"in i ? i.short : ""),
                        wrapper_class_name: "card-budget__input",
                        disabled: "disabled"in i ? i.disabled : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_price"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/price", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="js-linked-with-actions '),
                    "is_add"in i && i.is_add || (t.append("js-linked-has-actions "),
                    "value"in i && i.value && t.append("js-linked-has-value")),
                    t.append('">'),
                    i.disabled = !0,
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        type: "text",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    i.tip = [],
                    twig.attr("profile"in i ? i.profile : "", "profile_link") && (i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "in-new-window",
                        text: twig.attr("lang"in i ? i.lang : "", "cf_goto"),
                        value: twig.attr("profile"in i ? i.profile : "", "profile_link"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="profile_link"'
                    }])),
                    twig.attr("profile"in i ? i.profile : "", "main") || (i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "star-dark-grey",
                        text: twig.attr("lang"in i ? i.lang : "", "card_set_main"),
                        value: twig.attr("profile"in i ? i.profile : "", "id"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="set_main_profile"'
                    }])),
                    twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_disabled") && (i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "unlink",
                        text: twig.attr("lang"in i ? i.lang : "", "chat_unlink"),
                        value: twig.attr("profile"in i ? i.profile : "", "id"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="unlink_profile"'
                    }])),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-cf-actions-tip",
                        items: "tip"in i ? i.tip : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_profiles"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/profiles", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    var a = twig.attr("cf"in i ? i.cf : "", "ENUMS")
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
                        i.variant = n,
                        i.value = twig.attr("variant"in i ? i.variant : "", "VALUE"),
                        twig.filter.length(this.env_, "value"in i ? i.value : "") || (i.value = twig.attr("lang"in i ? i.lang : "", "cf_value_not_specified")),
                        new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: "name"in i ? i.name : "",
                            prefix: "cf_" + twig.attr("cf"in i ? i.cf : "", "ID") + "_" + twig.attr("variant"in i ? i.variant : "", "ID") + "_" + ("form_index"in i ? i.form_index : ""),
                            selected: twig.attr("variant"in i ? i.variant : "", "ID") == twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE_ENUM_ID"),
                            label: "value"in i ? i.value : "",
                            value: twig.attr("variant"in i ? i.variant : "", "ID"),
                            readonly: "readonly"in i ? i.readonly : "",
                            disabled: "disabled"in i ? i.disabled : ""
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
                    return "interface_cards_forms_fields_radio"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/radio", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        id: "",
                        option: "placeholder"in i ? i.placeholder : ""
                    }],
                    i._parent = i;
                    var a = twig.attr("cf"in i ? i.cf : "", "ENUMS");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "ID"),
                            option: twig.attr("item"in i ? i.item : "", "VALUE")
                        }])
                    }
                    ), this),
                    i.selected = !1,
                    twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array") && (i.selected = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE_ENUM_ID")),
                    i.select_data = {
                        name: "name"in i ? i.name : "",
                        selected: "selected"in i ? i.selected : "",
                        items: "items"in i ? i.items : "",
                        class_name: "linked-form__select",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    },
                    twig.filter.length(this.env_, "items"in i ? i.items : "") < 250 ? new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "select_data"in i ? i.select_data : "")) : new (e._get("interface/controls/select/select_huge.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("select_data"in i ? i.select_data : "", {
                        control_class_name: "control--select control--select-huge"
                    })))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/select", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/controls/supplier.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_supplier"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/supplier", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        type: "text",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_text"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/text", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    "address" == ("type"in i ? i.type : "") && (t.append("js-linked-has-actions "),
                    twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE") && t.append("js-linked-has-value")),
                    t.append('">'),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf js-textarea-autosize " + ("class_name"in i ? i.class_name : ""),
                        additional_data: 'spellcheck="false"',
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    "address" == ("type"in i ? i.type : "") && (i.tip = [{
                        icon: "map-pointer",
                        text: twig.attr("lang"in i ? i.lang : "", "view_on_map"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="map"'
                    }],
                    "disabled"in i && i.disabled || (i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        icon: "pencil",
                        text: twig.attr("lang"in i ? i.lang : "", "cf_edit"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="edit"'
                    }])),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-cf-actions-tip",
                        items: "tip"in i ? i.tip : ""
                    }))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_textarea"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/textarea", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="js-linked-with-actions '),
                    "is_add"in i && i.is_add || (t.append("js-linked-has-actions "),
                    "value"in i && i.value && t.append("js-linked-has-value")),
                    t.append('">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    i.tip = [{
                        svg_icon: "common--in-new-window",
                        text: this.env_.filter("i18n", "Follow"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="link"'
                    }, {
                        svg_icon: "common--copy",
                        text: this.env_.filter("i18n", "Copy"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="copy"'
                    }],
                    !("grant_edit"in i) || !i.grant_edit || "disabled"in i && i.disabled || (i.tip = twig.filter.merge("tip"in i ? i.tip : "", [{
                        svg_icon: "common--edit-pencil",
                        text: this.env_.filter("i18n", "Edit"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="edit"'
                    }])),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "card-cf-actions-tip",
                        items: "tip"in i ? i.tip : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_fields_url"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/fields/url", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<li class="suggest-segments__line-item"><div class="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "class_div"), "light_escape", null, !0)),
                    t.append(' suggest-profile-messengers-item" data-entity="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "entity_id"), "light_escape", null, !0)),
                    t.append('" data-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('">'),
                    twig.attr("item"in i ? i.item : "", "icon_img_href") ? (t.append('<span class="social-icon social-svg-icon"><img src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon_img_href"), "light_escape", null, !0)),
                    t.append('" alt="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                    t.append('"></span>')) : twig.attr("item"in i ? i.item : "", "class_svg") && (t.append('<span class="social-icon social-svg-icon"><svg class="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "class_svg"), "light_escape", null, !0)),
                    t.append('"><use xlink:href="#cards--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon_svg_href"), "light_escape", null, !0)),
                    t.append('"></use></svg></span>')),
                    t.append('<span class="profile_messengers-item-name '),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "class_span"), "light_escape", null, !0)),
                    t.append('">'),
                    twig.attr("item"in i ? i.item : "", "text") && t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "text"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/cards/forms/profile_messengers/item_tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        source_item: "item"in i ? i.item : ""
                    })),
                    t.append("</div></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_profile_messengers_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/profile_messengers/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.tip_send = [],
                    i.tip_unlink = [],
                    i.tip_profile = [],
                    i.tip_send_text = this.env_.filter("i18n", "Send message chat"),
                    i.tip_unlink_text = twig.attr("lang"in i ? i.lang : "", "chat_unlink"),
                    i.tip_send_additional_data = 'data-type="send_message" data-origin="' + twig.attr("source_item"in i ? i.source_item : "", "code") + '" data-linked-entity-id="' + twig.attr("source_item"in i ? i.source_item : "", "entity_id") + '"',
                    twig.attr("source_item"in i ? i.source_item : "", "profile_data") && (i.prof_chat_id = twig.attr(this.env_.filter("json_decode", twig.attr("source_item"in i ? i.source_item : "", "profile_data")), "chat_id")),
                    "prof_chat_id"in i && i.prof_chat_id && (i.tip_send_additional_data = ("tip_send_additional_data"in i ? i.tip_send_additional_data : "") + ' data-chat-id="' + ("prof_chat_id"in i ? i.prof_chat_id : "") + '"'),
                    twig.attr("source_item"in i ? i.source_item : "", "data_chat_id") && (i.tip_send_additional_data = ("tip_send_additional_data"in i ? i.tip_send_additional_data : "") + ' data-chat-id="' + twig.attr("item"in i ? i.item : "", "data_chat_id") + '"'),
                    i.tip_send = twig.filter.merge("tip_send"in i ? i.tip_send : "", [{
                        svg_icon: "cards--send-message",
                        text: "tip_send_text"in i ? i.tip_send_text : "",
                        class_name: "js-cf-actions-item",
                        additional_data: "tip_send_additional_data"in i ? i.tip_send_additional_data : "",
                        value: twig.attr("source_item"in i ? i.source_item : "", "id")
                    }]),
                    twig.attr("source_item"in i ? i.source_item : "", "profile_link") && (i.service_name = "",
                    "vk" == twig.attr("source_item"in i ? i.source_item : "", "service") ? i.service_name = twig.filter.upper(this.env_, twig.attr("source_item"in i ? i.source_item : "", "service")) : i.service_name = twig.filter.capitalize(this.env_, twig.attr("source_item"in i ? i.source_item : "", "service")),
                    i.tip_profile = twig.filter.merge("tip_profile"in i ? i.tip_profile : "", [{
                        icon: "in-new-window",
                        text: this.env_.filter("i18n", "Open profile") + " " + ("service_name"in i ? i.service_name : ""),
                        href: twig.attr("source_item"in i ? i.source_item : "", "profile_link"),
                        blank: !0
                    }])),
                    twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_disabled") && (i.tip_unlink = twig.filter.merge("tip_unlink"in i ? i.tip_unlink : "", [{
                        icon: "unlink",
                        text: "tip_unlink_text"in i ? i.tip_unlink_text : "",
                        value: twig.attr("source_item"in i ? i.source_item : "", "id"),
                        class_name: "js-cf-actions-item",
                        additional_data: 'data-type="unlink_profile"'
                    }])),
                    i.tip = twig.filter.merge(twig.filter.merge("tip_send"in i ? i.tip_send : "", "tip_profile"in i ? i.tip_profile : ""), "tip_unlink"in i ? i.tip_unlink : ""),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "user-messenger-actions-tip",
                        items: "tip"in i ? i.tip : "",
                        additional_data: 'data-append-to-body="true"',
                        is_overflowed: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_profile_messengers_item_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/profile_messengers/item_tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.profiles_array = {
                        vk: {
                            name: "Vkontakte",
                            svg_icon: "social--vk"
                        },
                        avito: {
                            name: "Avito",
                            svg_icon: "social--avito"
                        },
                        skype: {
                            name: "Skype",
                            svg_icon: "cards--social-icon--skype"
                        },
                        facebook: {
                            name: "Messenger",
                            svg_icon: "cards--social-icon--messenger"
                        },
                        telegram: {
                            name: "Telegram",
                            svg_icon: "cards--social-icon--telegram"
                        },
                        viber: {
                            name: "Viber",
                            svg_icon: "cards--social-icon--viber"
                        },
                        wechat: {
                            name: "WeChat",
                            svg_icon: "cards--social-icon--wechat"
                        },
                        whatsapp: {
                            name: "WhatsApp",
                            svg_icon: "cards--social-icon--whatsapp"
                        },
                        amocrm: {
                            name: "amoCRM",
                            svg_icon: "cards--social-icon--amocrm"
                        },
                        "amo.support": {
                            name: "amoCRM",
                            svg_icon: "cards--social-icon--amocrm",
                            class_name: "amocrm"
                        },
                        instagram: {
                            name: "Instagram",
                            svg_icon: "cards--social-icon--instagram"
                        },
                        instagram_business: {
                            name: "Instagram",
                            svg_icon: "cards--social-icon--instagram"
                        },
                        livechat: {
                            name: this.env_.filter("i18n", "Live Chat"),
                            svg_icon: "cards--social-icon--livechat"
                        },
                        onlinechat: {
                            name: this.env_.filter("i18n", "Live Chat"),
                            svg_icon: "cards--social-icon--livechat"
                        }
                    },
                    i.visible_profiles = [],
                    i.elements_count = 0,
                    twig.attr("element"in i ? i.element : "", "profiles")) {
                        i._parent = i;
                        var a = twig.attr("element"in i ? i.element : "", "profiles");
                        twig.forEach(a, (function(e, t) {
                            i.service = t,
                            i.profiles = e;
                            var n = "profiles"in i ? i.profiles : "";
                            twig.forEach(n, (function(e, t) {
                                i._key = t,
                                i.profile = e,
                                twig.attr("profile"in i ? i.profile : "", "hidden") || (i.visible_profiles = twig.filter.merge("visible_profiles"in i ? i.visible_profiles : "", ["profile"in i ? i.profile : ""]),
                                i.elements_count = Number("elements_count"in i ? i.elements_count : "") + Number(1))
                            }
                            ), this)
                        }
                        ), this)
                    }
                    t.append('<div class="profile_messengers"><div class="profile_messengers-inner" data-rest="'),
                    t.append(twig.filter.escape(this.env_, "elements_count"in i ? i.elements_count : "", "light_escape", null, !0)),
                    t.append('">'),
                    i._parent = i,
                    a = "visible_profiles"in i ? i.visible_profiles : "";
                    var s = {
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
                        i.source_item = n,
                        t.append('<div class="profile_messengers-item-wrapper"><div class="profile_messengers-item '),
                        twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array") || t.append("profile_messengers-item-default"),
                        t.append(" profile_messengers-item-"),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "class_name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "class_name"), twig.attr("source_item"in i ? i.source_item : "", "code")) : twig.attr("source_item"in i ? i.source_item : "", "code"), "light_escape", null, !0)),
                        t.append(' js-linked-has-actions js-overflowed-tip-holder" data-source="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "service"), "light_escape", null, !0)),
                        t.append('" data-value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "id"), "light_escape", null, !0)),
                        t.append('" data-rest="'),
                        t.append(twig.filter.escape(this.env_, ("elements_count"in i ? i.elements_count : "") - twig.attr(s, "index"), "light_escape", null, !0)),
                        t.append('"  data-entity="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "entity_id"), "light_escape", null, !0)),
                        t.append('">'),
                        twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "svg_icon") ? (t.append('<span class="social-icon social-svg-icon"><svg class="svg-icon svg-'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "svg_icon"), "light_escape", null, !0)),
                        t.append('-dims"><use xlink:href="#'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "svg_icon"), "light_escape", null, !0)),
                        t.append('"></use></svg></span>')) : twig.attr("source_item"in i ? i.source_item : "", "service_icon") && (t.append('<span class="social-icon social-svg-icon"><img src="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "service_icon"), "light_escape", null, !0)),
                        t.append('" alt="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "name"), "light_escape", null, !0)),
                        t.append('"></span>')),
                        t.append('<span class="profile_messengers-item-name profile_messengers-item-name_'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "code"), "light_escape", null, !0)),
                        t.append(" "),
                        twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array") || t.append("profile_messengers-item-name_default"),
                        t.append('" '),
                        twig.attr("source_item"in i ? i.source_item : "", "code") && (t.append(' data-code="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "code"), "light_escape", null, !0)),
                        t.append('" ')),
                        t.append(">"),
                        twig.attr("source_item"in i ? i.source_item : "", "source_name") ? t.append(twig.filter.escape(this.env_, twig.attr("source_item"in i ? i.source_item : "", "source_name"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("profiles_array"in i ? i.profiles_array : "", twig.attr("source_item"in i ? i.source_item : "", "code"), void 0, "array"), "name"), twig.attr("source_item"in i ? i.source_item : "", "service_name", void 0, void 0, !0) ? twig.filter.def(twig.attr("source_item"in i ? i.source_item : "", "service_name"), this.env_.filter("i18n", "Unknown source")) : this.env_.filter("i18n", "Unknown source")) : twig.attr("source_item"in i ? i.source_item : "", "service_name", void 0, void 0, !0) ? twig.filter.def(twig.attr("source_item"in i ? i.source_item : "", "service_name"), this.env_.filter("i18n", "Unknown source")) : this.env_.filter("i18n", "Unknown source"), "light_escape", null, !0)),
                        t.append("</span>"),
                        new (e._get("interface/cards/forms/profile_messengers/item_tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            source_item: "source_item"in i ? i.source_item : ""
                        })),
                        t.append("</div>"),
                        ("elements_count"in i ? i.elements_count : "") - twig.attr(s, "index") && (t.append('<span class="js-profile_messengers-counter profile_messengers-counter">+'),
                        t.append(twig.filter.escape(this.env_, ("elements_count"in i ? i.elements_count : "") - twig.attr(s, "index"), "light_escape", null, !0)),
                        t.append("</span>")),
                        t.append("</div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_profile_messengers_user_messenger"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/profile_messengers/user_messenger", t)
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
                    t.item_tmpl = "interface/cards/forms/profile_messengers/item.twig",
                    t.inner_item_tmpl = "interface/cards/forms/profile_messengers/item.twig",
                    t.without_input = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_profile_messengers_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/profile_messengers/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = twig.attr("custom_field"in i ? i.custom_field : "", "id"),
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    1 == ("value"in i ? i.value : "") && (i.value = "Yes"),
                    new (e._get("interface/cards/forms/fields/checkbox.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_checkbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/checkbox", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    "value"in i && i.value && (i.value = this.env_.filter("date", "value"in i ? i.value : "", "date_dash")),
                    new (e._get("interface/cards/forms/fields/date.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/date", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    "value"in i && i.value && (i.value = this.env_.filter("date", "value"in i ? i.value : "", "full_date_dash")),
                    new (e._get("interface/cards/forms/fields/date_time.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_date_time"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/date_time", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i._parent = i;
                    var a = twig.attr("custom_field"in i ? i.custom_field : "", "enums");
                    twig.forEach(a, (function(e, t) {
                        if (i._key = t,
                        i.item = e,
                        i.selected = !1,
                        "custom_field_value"in i && i.custom_field_value) {
                            var n = twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values");
                            twig.forEach(n, (function(e, t) {
                                i._key = t,
                                i.value = e,
                                twig.attr("item"in i ? i.item : "", "id") == twig.attr("value"in i ? i.value : "", "enum_id") && (i.selected = !0)
                            }
                            ), this)
                        }
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "id"),
                            prefix: "cf_" + twig.attr("custom_field"in i ? i.custom_field : "", "id") + "_" + twig.attr("item"in i ? i.item : "", "id") + "_" + ("form_index"in i ? i.form_index : ""),
                            name: ("name"in i ? i.name : "") + "[" + twig.attr("item"in i ? i.item : "", "id") + "]",
                            option: twig.attr("item"in i ? i.item : "", "value"),
                            is_checked: "selected"in i ? i.selected : ""
                        }])
                    }
                    ), this),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "cf_values_numeral"),
                        title_empty: "placeholder"in i ? i.placeholder : "",
                        items: "items"in i ? i.items : "",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        class_name: "class_name"in i ? i.class_name : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/multiselect", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    new (e._get("interface/cards/forms/fields/numeric.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_numeric"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/numeric", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    var a = twig.attr("custom_field"in i ? i.custom_field : "", "enums")
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
                        i.variant = n,
                        i.label = twig.attr("variant"in i ? i.variant : "", "value"),
                        twig.filter.length(this.env_, "label"in i ? i.label : "") || (i.label = twig.attr("lang"in i ? i.lang : "", "cf_value_not_specified")),
                        i.selected = !1,
                        "custom_field_value"in i && i.custom_field_value) {
                            var r = twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values");
                            twig.forEach(r, (function(e, t) {
                                i._key = t,
                                i.value = e,
                                twig.attr("variant"in i ? i.variant : "", "id") == twig.attr("value"in i ? i.value : "", "enum_id") && (i.selected = !0)
                            }
                            ), this)
                        }
                        new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: "name"in i ? i.name : "",
                            prefix: "cf_" + twig.attr("custom_field"in i ? i.custom_field : "", "id") + "_" + twig.attr("variant"in i ? i.variant : "", "id") + "_" + ("form_index"in i ? i.form_index : ""),
                            selected: "selected"in i ? i.selected : "",
                            label: "label"in i ? i.label : "",
                            value: twig.attr("variant"in i ? i.variant : "", "id"),
                            readonly: "readonly"in i ? i.readonly : "",
                            disabled: "disabled"in i ? i.disabled : ""
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
                    return "interface_cards_forms_v4_fields_radiobutton"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/radiobutton", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.enums = [{
                        id: "",
                        option: "placeholder"in i ? i.placeholder : ""
                    }],
                    i._parent = i;
                    var a = twig.attr("custom_field"in i ? i.custom_field : "", "enums");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.enum = e,
                        i.enums = twig.filter.merge("enums"in i ? i.enums : "", [{
                            id: twig.attr("enum"in i ? i.enum : "", "id"),
                            option: twig.attr("enum"in i ? i.enum : "", "value")
                        }])
                    }
                    ), this),
                    i.selected = !1,
                    "custom_field_value"in i && i.custom_field_value && (i._parent = i,
                    a = twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"),
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.value = e,
                        i.selected = twig.attr("value"in i ? i.value : "", "enum_id")
                    }
                    ), this)),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        selected: "selected"in i ? i.selected : "",
                        items: "enums"in i ? i.enums : "",
                        class_name: "linked-form__select",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/select", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    new (e._get("interface/cards/forms/fields/address.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_streetaddress"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/streetaddress", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    new (e._get("interface/cards/forms/fields/text.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_text"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/text", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    new (e._get("interface/cards/forms/fields/textarea.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_textarea"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/textarea", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.value = "",
                    "custom_field_value"in i && i.custom_field_value && (i.value = twig.attr(twig.attr(twig.attr("custom_field_value"in i ? i.custom_field_value : "", "values"), 0, void 0, "array"), "value")),
                    new (e._get("interface/cards/forms/fields/url.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_v4_fields_url"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/v4_fields/url", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="bots" '),
                    0 == ("count"in t ? t.count : "") && e.append('style="display: none"'),
                    e.append('><div class="businessbots businessbots--collapsed js-businessbots-container" style="'),
                    e.append("is_opened"in t && t.is_opened ? "display: none;" : ""),
                    e.append('">'),
                    twig.filter.length(this.env_, "active_businessbots"in t ? t.active_businessbots : "") > 2 && (e.append('<div class="businessbots-expand"><span class="businessbots-expand__text js-businessbots-expand">Еще '),
                    e.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "active_businessbots"in t ? t.active_businessbots : "") - 2, "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append('<div class="businessbots-container businessbots-container--collapsed">'),
                    t._parent = t;
                    var n = twig.filter.reverse(this.env_, this.env_.filter("slice", this.env_, "active_businessbots"in t ? t.active_businessbots : "", 0, 2));
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.bot = i,
                        e.append('<div class="businessbots-container__item businessbots-bot"><span class="businessbots-bot__name">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("bot"in t ? t.bot : "", "bot_name"), "light_escape", null, !0)),
                        e.append('</span><span class="businessbots-bot__status" style="background: #'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("bot"in t ? t.bot : "", "status"), "color"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("bot"in t ? t.bot : "", "status"), "title"), "light_escape", null, !0)),
                        e.append('</span>–<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("bot"in t ? t.bot : "", "_links"), "app"), "href"), "light_escape", null, !0)),
                        e.append('" target="_blank"><span class="businessbots-bot__number">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Request #"), "light_escape", null, !0)),
                        e.append(twig.filter.escape(this.env_, twig.attr("bot"in t ? t.bot : "", "seq_id"), "light_escape", null, !0)),
                        e.append("</span></a></div>")
                    }
                    ), this),
                    e.append('</div></div><span class="bots__toggle js-toggle">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Bots"), "light_escape", null, !0)),
                    e.append(':&nbsp;<span class="bots__counter js-counter">'),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append('</span></span><div class="bots__container js-container custom-scroll" style="'),
                    e.append("is_opened"in t && t.is_opened ? "" : "display: none;"),
                    e.append('">'),
                    twig.filter.length(this.env_, "active_bots"in t ? t.active_bots : "") > 0 && (e.append('<span class="bots__title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Active bots"), "light_escape", null, !0)),
                    e.append('</span><ul class="bots__list">'),
                    t._parent = t,
                    n = "active_bots"in t ? t.active_bots : "",
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.bot = i,
                        e.append('<li class="bots-bot js-bot" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("bot"in t ? t.bot : "", "id"), "light_escape", null, !0)),
                        e.append('"><span class="bots-bot__name js-open">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("bot"in t ? t.bot : "", "name"), "light_escape", null, !0)),
                        e.append('</span><span class="bots-bot__stop js-stop"><svg class="svg-icon svg-salesbot--stop-bot-icon-dims"><use xlink:href="#salesbot--stop-bot-icon"></use></svg></span></li>')
                    }
                    ), this),
                    e.append("</ul>")),
                    twig.filter.length(this.env_, "active_businessbots"in t ? t.active_businessbots : "") > 0 && (e.append('<span class="bots__title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Businessbots"), "light_escape", null, !0)),
                    e.append('</span><ul class="bots__list">'),
                    t._parent = t,
                    n = "active_businessbots"in t ? t.active_businessbots : "",
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.bot = i,
                        e.append('<li class="bots-bot bots-bot--businessbot js-bot" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("bot"in t ? t.bot : "", "request_id"), "light_escape", null, !0)),
                        e.append('"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("bot"in t ? t.bot : "", "_links"), "app"), "href"), "light_escape", null, !0)),
                        e.append('" class="bots-bot__name" target="_blank">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("bot"in t ? t.bot : "", "title"), "light_escape", null, !0)),
                        e.append("</a></li>")
                    }
                    ), this),
                    e.append("</ul>")),
                    e.append('<div class="bots__overlay js-overlay" style="display: none;"><span class="spinner-icon"></span></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_bots"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/bots", t)
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
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline-select-view '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    "editable"in i && i.editable ? new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        inner_class_name: "card-cf-lead-status-select__inner",
                        tab_index: "-1"
                    })) : (t.append('<input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "id"), "light_escape", null, !0)),
                    t.append('"><input type="checkbox" class="h-hidden" readonly name="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" checked="checked" value="'),
                    t.append(twig.filter.escape(this.env_, "selected"in i ? i.selected : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append(this.renderBlock("view_mode", i, n)),
                    143 == ("selected"in i ? i.selected : "") && "loss_reason"in i && new (e._get("interface/cards/leads/loss_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("loss_reason"in i ? i.loss_reason : "", "id"),
                        name: twig.attr("loss_reason"in i ? i.loss_reason : "", "name"),
                        readonly: !("editable"in i && i.editable)
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_view_mode = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline-select-view__inner" id="'),
                    "view_mode_id"in i && i.view_mode_id ? t.append(twig.filter.escape(this.env_, "view_mode_id"in i ? i.view_mode_id : "", "light_escape", null, !0)) : t.append("card_status_view_mode"),
                    t.append('" data-pipeline-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "id"), "light_escape", null, !0)),
                    t.append('" data-status-id="'),
                    t.append(twig.filter.escape(this.env_, "selected"in i ? i.selected : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/cards/leads/controls/view_mode.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/status", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "has_pipelines"in t && t.has_pipelines || (t.statuses = {
                        only: {
                            id: "only",
                            value: "only",
                            label: twig.attr("lang"in t ? t.lang : "", "pipeline"),
                            name: twig.attr("lang"in t ? t.lang : "", "pipeline"),
                            sort: 1,
                            is_main: !0,
                            statuses: "statuses"in t ? t.statuses : ""
                        }
                    },
                    t.selected_pipeline_id = "only"),
                    t.selected_status_id = "selected"in t ? t.selected : "",
                    "selected_pipeline_id"in t && t.selected_pipeline_id || (t.selected_pipeline_id = twig.attr("selected_pipe"in t ? t.selected_pipe : "", "id")),
                    "selected_pipeline_id"in t && t.selected_pipeline_id || !twig.attr("params"in t ? t.params : "", "form_params") || (t.selected_pipeline_id = twig.attr(twig.attr(twig.attr("params"in t ? t.params : "", "form_params"), "settings"), "lead_pipe")),
                    "selected_pipeline_id"in t && t.selected_pipeline_id || (t.selected_pipeline_id = twig.attr(twig.filter.first(this.env_, "statuses"in t ? t.statuses : ""), "id")),
                    "has_pipelines"in t && t.has_pipelines || (t.selected_pipeline_id = "only"),
                    twig.filter.length(this.env_, "statuses"in t ? t.statuses : "") > 1 && (e.append('<div class="pipeline-select-view__pipeline">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "name"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="pipeline-select-view__status '),
                    twig.filter.length(this.env_, "statuses"in t ? t.statuses : "") < 2 && e.append("pipeline-select-view__status_no-pipeline"),
                    e.append('">'),
                    "selected_pipeline_id"in t && t.selected_pipeline_id && "selected_status_id"in t && t.selected_status_id ? (t.status_name = twig.attr(twig.attr(twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses"), "s_" + ("selected_status_id"in t ? t.selected_status_id : ""), void 0, "array"), "name"),
                    "status_name"in t && t.status_name || (t.status_name = twig.attr(twig.attr(twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses"), "s_" + ("selected_status_id"in t ? t.selected_status_id : ""), void 0, "array"), "option"))) : (t.status_name = twig.attr(twig.filter.first(this.env_, twig.attr(twig.filter.first(this.env_, "statuses"in t ? t.statuses : ""), "statuses")), "name"),
                    t.selected_pipeline_id = twig.attr(twig.filter.first(this.env_, "statuses"in t ? t.statuses : ""), "id"),
                    t.selected_status_id = twig.attr(twig.filter.first(this.env_, twig.attr(twig.filter.first(this.env_, "statuses"in t ? t.statuses : ""), "statuses")), "id"),
                    "status_name"in t && t.status_name || (t.status_name = twig.attr(twig.filter.first(this.env_, twig.attr(twig.filter.first(this.env_, "statuses"in t ? t.statuses : ""), "statuses")), "option"))),
                    t._now_timestamp = this.env_.filter("date", "now", "timestamp"),
                    "status_name"in t && t.status_name && (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, "status_name"in t ? t.status_name : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    t.period_value = "",
                    "status_changed_from"in t && t.status_changed_from && (t.period_value = twig.filter.def(this.env_.filter("period", ("_now_timestamp"in t ? t._now_timestamp : "") - ("status_changed_from"in t ? t.status_changed_from : ""), !1), this.env_.filter("i18n", "Today"))),
                    "is_add"in t && t.is_add || !("period_value"in t) || !t.period_value || 142 == ("selected_status_id"in t ? t.selected_status_id : "") || 143 == ("selected_status_id"in t ? t.selected_status_id : "") || (e.append('<span class="pipeline-select-view__status-from">&nbsp;('),
                    e.append(twig.filter.escape(this.env_, "period_value"in t ? t.period_value : "", "light_escape", null, !0)),
                    e.append(")</span>"))),
                    e.append("</div>"),
                    "editable"in t && t.editable && "status_name"in t && t.status_name && e.append('<div class="pipeline-select-view__icon"></div>'),
                    e.append('<div class="pipeline-select-view__colors">'),
                    t.active_color = !0,
                    143 == twig.attr(twig.attr(twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses"), "s_" + ("selected_status_id"in t ? t.selected_status_id : ""), void 0, "array"), "id"))
                        t.color = twig.attr(twig.attr(twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses"), "s_" + ("selected_status_id"in t ? t.selected_status_id : ""), void 0, "array"), "color"),
                        "color"in t && t.color || (t.color = twig.attr(twig.attr(twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses"), "s_" + ("selected_status_id"in t ? t.selected_status_id : ""), void 0, "array"), "bg_color")),
                        e.append('<div class="pipeline-select-view__colors-block" '),
                        "active_color"in t && t.active_color && (e.append('style="background:'),
                        e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                        e.append('"')),
                        e.append("></div>");
                    else {
                        t._parent = t;
                        var n = twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses");
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.status = i,
                            143 != twig.attr("status"in t ? t.status : "", "id") && (t.color = twig.attr("status"in t ? t.status : "", "color"),
                            "color"in t && t.color || (t.color = twig.attr("status"in t ? t.status : "", "bg_color")),
                            t.class_name = "",
                            twig.attr("status"in t ? t.status : "", "id") == ("selected_status_id"in t ? t.selected_status_id : "") && (t.class_name = "pipeline-select-view__colors-block_current"),
                            e.append('<div class="pipeline-select-view__colors-block'),
                            "class_name"in t && t.class_name && (e.append(" "),
                            e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0))),
                            e.append('" data-status-id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("status"in t ? t.status : "", "id"), "light_escape", null, !0)),
                            e.append('" '),
                            "active_color"in t && t.active_color && (e.append('style="background:'),
                            e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                            e.append('"')),
                            e.append("></div>"),
                            twig.attr("status"in t ? t.status : "", "id") == twig.attr(twig.attr(twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "statuses"), "s_" + ("selected_status_id"in t ? t.selected_status_id : ""), void 0, "array"), "id") && (t.active_color = !1))
                        }
                        ), this)
                    }
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_view_mode"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/view_mode", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<dl class="note-add-wrapper">'),
                    "element_id"in i && i.element_id && (t.append('<dt class="note-add-wrapper__right"><div class="notes-visibility-filter-wrapper"><span class="notes-visibility-filter js-notes-filter"><span class="icon icon-eye"></span></span>'),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, "notes_filter_select"in i ? i.notes_filter_select : "")),
                    t.append("</div></dt>")),
                    t.append('<dd class="note-add-wrapper__left '),
                    "element_id"in i && i.element_id || t.append("note-add-wrapper__left-no-filter"),
                    t.append('"><dl class="note-add-inner">'),
                    t.append('<dt class="note-add-inner__left">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-note-switcher note-add-switcher",
                        icon_class_name: "icon-clock-2"
                    })),
                    t.append('<div class="task-add-holder" id="task_add_wrapper">'),
                    new (e._get("interface/cards/notes/task_edit.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_add: !0,
                        params: {
                            main_user: "current_user"in i ? i.current_user : "",
                            text: ""
                        }
                    })),
                    t.append('</div><div class="note-add-holder" id="note_add_wrapper">'),
                    new (e._get("interface/cards/notes/note_edit.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_add: !0
                    })),
                    t.append("</div></dt></dl></dd></dl>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_forms_exist"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/forms/exist", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<dl class="note-add-wrapper note-add-wrapper-not-exist">'),
                    i.note_text = twig.attr("lang"in i ? i.lang : "", "notes_add_note_msg"),
                    "contact" == ("element_type"in i ? i.element_type : "") ? i.note_text = twig.attr("lang"in i ? i.lang : "", "notes_add_note_msg_contact") : "company" == ("element_type"in i ? i.element_type : "") && (i.note_text = twig.attr("lang"in i ? i.lang : "", "notes_add_note_msg_company")),
                    new (e._get("interface/cards/notes/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "note_text"in i ? i.note_text : "",
                        class_name: "notes-tip-blue notes-tip-note-note"
                    })),
                    t.append('<div id="note_add_wrapper">'),
                    new (e._get("interface/cards/notes/note_edit.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_add: !0,
                        upload_url: twig.attr("file_button"in i ? i.file_button : "", "url")
                    })),
                    t.append("</div>"),
                    new (e._get("interface/cards/notes/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "notes-tip-blue notes-tip-note-task"
                    })),
                    t.append('<div id="task_add_wrapper">'),
                    new (e._get("interface/cards/notes/task_edit.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_add: !0,
                        params: {
                            main_user: "current_user"in i ? i.current_user : ""
                        },
                        is_not_exist: !0
                    })),
                    t.append('</div><div style="margin-top:15px">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_done"),
                        class_name: "js-note-task-submit",
                        tab_index: "-1"
                    })),
                    t.append("\x3c!----\x3e"),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "task-edit__cancel js-note-task-cancel",
                        tab_index: "-1"
                    })),
                    t.append("</div></dl>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_forms_not_exist"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/forms/not_exist", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.icon = "follow-up",
                    t.color = "green",
                    2 == twig.attr("params"in t ? t.params : "", "type") ? (t.icon = "case-red",
                    t.color = "red") : twig.contains([1, 3], twig.attr("params"in t ? t.params : "", "type")) || (t.icon = "clock-blue-big",
                    t.color = "blue"),
                    e.append('<div class="note task-'),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append(" note-element-type-"),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" task "),
                    !twig.attr("params"in t ? t.params : "", "complate") && twig.attr("params"in t ? t.params : "", "expired") && e.append("task-expired"),
                    e.append(" "),
                    twig.attr("params"in t ? t.params : "", "complate") && e.append("task-complate"),
                    e.append('"><div class="icon icon-task-complete note-icon note-icon-task-complete"></div><div class="icon icon-'),
                    e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)),
                    e.append(' note-icon"></div><dl class="note--header"><dd class="note--header--right">'),
                    twig.attr("params"in t ? t.params : "", "complate") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "updated"in t ? t.updated : ""), "light_escape", null, !0)) : ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append('</dd><dt class="note--header--left note--header--left--from_user">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "main_user"), "name"), "light_escape", null, !0)),
                    e.append("</dt>"),
                    twig.attr("params"in t ? t.params : "", "task_from") && twig.attr(twig.attr("params"in t ? t.params : "", "main_user"), "id") != twig.attr(twig.attr("params"in t ? t.params : "", "task_from"), "id") && (e.append('<dt class="note--header--left note--header--left--for_user">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "task_from")), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "task_from"), "name"), "light_escape", null, !0)),
                    e.append("</dt>")),
                    e.append('</dl><div class="note--body"><div class="note--body--content '),
                    twig.attr("params"in t ? t.params : "", "complate") && e.append("note--body--content-complate"),
                    e.append('" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><span class="note--body--content--deal">'),
                    twig.filter.length(this.env_, "linked"in t ? t.linked : "") && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</span>"),
                    t.task_text = this.env_.filter("task_text", twig.attr("params"in t ? t.params : "", "text")),
                    "task_text"in t && t.task_text || (t.task_text = twig.attr("params"in t ? t.params : "", "type_name")),
                    e.append('<span class="note--body--content--text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("parse_urls", this.env_.filter("nl2p", "task_text"in t ? t.task_text : "")), "light_escape", null, !0)),
                    e.append('</span></div></div><div class="note-actions-switcher notification__note-actions-switcher js-notification__note-actions-switcher"><span class="icon icon-inline icon-v-dots-2"></span></div></div>'),
                    twig.attr("params"in t ? t.params : "", "complete_form") || (e.append('<div class="note-actions-wrapper">'),
                    (twig.attr("params"in t ? t.params : "", "is_new") || twig.attr("params"in t ? t.params : "", "complate") && "deletable"in t && t.deletable) && (e.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("\x3c!--\t--\x3e"),
                    !twig.attr("params"in t ? t.params : "", "complate") && "editable"in t && t.editable && (e.append('<div class="note-actions__btn note-actions__btn-edit js-note-edit-mode-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-pencil note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_edit")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("\x3c!--\t--\x3e"),
                    twig.attr("params"in t ? t.params : "", "temp") || twig.attr("params"in t ? t.params : "", "complate") || !("completable"in t && t.completable || "editable"in t && t.editable) || (e.append('<div class="note-actions__btn note-actions__btn-complete js-task-complete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-checkmark-green note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "tasks_complete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_aside_task"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/aside_task", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-note "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-note-attach note-icon"></div><dl class="note--header"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append('</b></dt></dl><div class="note--body"><div class="note--body--content note--body--content-attachement" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><a href="/download/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                    e.append('" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "text"), "light_escape", null, !0)),
                    e.append("</a>"),
                    twig.attr("params"in t ? t.params : "", "size") && (e.append(" ("),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "size"), "light_escape", null, !0)),
                    e.append(")")),
                    e.append("</div></div>"),
                    "deletable"in t && t.deletable && e.append('<div class="note-actions-switcher js-note-actions-switcher"><span class="icon icon-inline icon-v-dots-2"></span></div>'),
                    e.append('</div><div class="note-actions-wrapper">'),
                    "deletable"in t && t.deletable && (e.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_attachement"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/attachement", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-phone note-icon"></div>'),
                    twig.attr("params"in t ? t.params : "", "call_status") || twig.attr("params"in t ? t.params : "", "call_result") ? (e.append('<dl class="note--header note-call_in_out__header-has-result"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(",<b>&nbsp;"),
                    twig.attr("user"in t ? t.user : "", "name") ? e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "from")), "light_escape", null, !0)),
                    e.append('</b>\x3c!----\x3e<span class="note-call_in_out__to-and-controls">'),
                    "IN" == twig.attr("params"in t ? t.params : "", "direction") ? (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "from"), "light_escape", null, !0))) : (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "to"), "light_escape", null, !0))),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "phone")), "light_escape", null, !0)),
                    e.append('\x3c!----\x3e<span class="note-call_in_out-duration_info">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "duration")), "light_escape", null, !0)),
                    e.append('</span>\x3c!----\x3e<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "call_listen"), "light_escape", null, !0)),
                    e.append('" class="note-call_in_out-duration '),
                    twig.attr("params"in t ? t.params : "", "src") && twig.attr("params"in t ? t.params : "", "link") && e.append("js-call-play"),
                    e.append(' icon--play" data-prepare="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "src"), "light_escape", null, !0)),
                    e.append('">'),
                    twig.attr("params"in t ? t.params : "", "src") && twig.attr("params"in t ? t.params : "", "link") && e.append('<span class="icon icon-inline js-icon-play icon-play"></span><span class="icon icon-inline js-icon-stop icon-stop"></span><span class="spinner-icon player-loading"></span>'),
                    e.append("</a>\x3c!----\x3e"),
                    twig.attr("params"in t ? t.params : "", "link") && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                    e.append('" download="" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "call_download_log"), "light_escape", null, !0)),
                    e.append('" class="note-call_in_out-download"><span class="icon icon-note-download icon-inline"></span></a>')),
                    e.append('</span></dt></dl><div class="note--header note--header_no-margin note-call_in_out__result">'),
                    t.call_status = twig.attr("lang"in t ? t.lang : "", "call_result_" + twig.attr("params"in t ? t.params : "", "call_status"), void 0, "array"),
                    "call_status"in t && t.call_status || (t.call_status = twig.attr("lang"in t ? t.lang : "", "call_result")),
                    e.append("<b>"),
                    e.append(twig.filter.escape(this.env_, "call_status"in t ? t.call_status : "", "light_escape", null, !0)),
                    twig.attr("params"in t ? t.params : "", "call_result") && e.append(":"),
                    e.append("</b> "),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "call_result"), "light_escape", null, !0)),
                    e.append("</div>")) : (e.append('<dl class="note--header"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(",<b>"),
                    twig.attr("user"in t ? t.user : "", "name") ? e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "from"), "light_escape", null, !0)),
                    e.append('</b>\x3c!----\x3e<span class="note-call_in_out__to-and-controls">'),
                    "IN" == twig.attr("params"in t ? t.params : "", "direction") ? (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "from"), "light_escape", null, !0))) : (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "to"), "light_escape", null, !0))),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "phone")), "light_escape", null, !0)),
                    e.append('</span></dt></dl><div class="note--header note--header_no-margin note-call_in_out__result">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "call_text"), "light_escape", null, !0)),
                    e.append(':\x3c!----\x3e<span class="note-call_in_out-duration_info">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "duration"), "light_escape", null, !0)),
                    e.append('</span>\x3c!----\x3e<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "call_listen"), "light_escape", null, !0)),
                    e.append('" class="note-call_in_out-duration '),
                    twig.attr("params"in t ? t.params : "", "src") && twig.attr("params"in t ? t.params : "", "link") && e.append("js-call-play"),
                    e.append(' icon--play" data-prepare="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "src"), "light_escape", null, !0)),
                    e.append('">'),
                    twig.attr("params"in t ? t.params : "", "src") && twig.attr("params"in t ? t.params : "", "link") && e.append('<span class="icon icon-inline js-icon-play icon-play"></span><span class="icon icon-inline js-icon-stop icon-stop"></span><span class="spinner-icon player-loading"></span>'),
                    e.append("</a>\x3c!----\x3e"),
                    twig.attr("params"in t ? t.params : "", "link") && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                    e.append('" download="" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "call_download_log"), "light_escape", null, !0)),
                    e.append('" class="note-call_in_out-download"><span class="icon icon-note-download icon-inline"></span></a>')),
                    e.append("</div>")),
                    "deletable"in t && t.deletable && e.append('<div class="note-actions-switcher js-note-actions-switcher"><span class="icon icon-inline icon-v-dots-2"></span></div>'),
                    e.append('</div><div class="note-actions-wrapper">'),
                    "deletable"in t && t.deletable && (e.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_call_in_out"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/call_in_out", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append(" "),
                    twig.attr("params"in t ? t.params : "", "linked") || (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append("-not-linked")),
                    e.append('"><div class="note--body">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "added_f"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append("<br/>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "by"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_card_company_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/card_company_created", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-2  note-system '),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append(" "),
                    twig.attr("params"in t ? t.params : "", "linked") || (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append("-not-linked")),
                    e.append('"><div class="note--body">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "added_m"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append("<br/>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "by"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_card_contact_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/card_contact_created", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    new (e._get("interface/notes/types/chat.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/chat", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-note-excl note-icon"></div><dl class="note--header"><dd class="note--header--right"></dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append('</b></dt></dl><div class="note--body">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "company_added"), "light_escape", null, !0)),
                    "linked"in t && t.linked && (e.append(": "),
                    twig.attr("linked"in t ? t.linked : "", "access") ? (e.append('<a class="js-navigate-link" href="/companies/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "id"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("linked"in t ? t.linked : "", "name")), "light_escape", null, !0)),
                    e.append("</a>")) : e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0))),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_company_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/company_created", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append("  note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-note-excl note-icon"></div><dl class="note--header"><dd class="note--header--right"></dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append('</b></dt></dl><div class="note--body">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "contact_added"), "light_escape", null, !0)),
                    "linked"in t && t.linked && (e.append(": "),
                    twig.attr("linked"in t ? t.linked : "", "access") ? (e.append('<a class="js-navigate-link" href="/contacts/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "id"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("linked"in t ? t.linked : "", "name")), "light_escape", null, !0)),
                    e.append("</a>")) : e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0))),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_contact_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/contact_created", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "linked"in t && t.linked ? (e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append("  note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-note-excl note-icon"></div><dl class="note--header"><dd class="note--header--right"></dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append('</b></dt></dl><div class="note--body">'),
                    t.name = this.env_.filter("lead_name", twig.attr("linked"in t ? t.linked : "", "name"), twig.attr("linked"in t ? t.linked : "", "id")),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "lead_added"), "light_escape", null, !0)),
                    e.append(': <a class="js-navigate-link" href="/leads/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "id"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "name"in t ? t.name : ""), "light_escape", null, !0)),
                    e.append("</a></div></div>")) : (e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append(" "),
                    twig.attr("params"in t ? t.params : "", "linked") || (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append("-not-linked")),
                    e.append('"><div class="note--body">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "created_w"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append("<br/>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "by"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append("</div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_lead_created"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/lead_created", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-note-excl note-icon"></div><dl class="note--header"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append('</b></dt></dl><div class="note--body"><div class="note--body--content" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><div class="node-lead__title">'),
                    this.env_.filter("period", twig.attr("note"in t ? t.note : "", "interval")) ? (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "set_after"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("period", twig.attr("note"in t ? t.note : "", "interval")), "light_escape", null, !0)),
                    e.append(" &mdash; "),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "task_new_status")), "light_escape", null, !0))) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "task_new_status"), "light_escape", null, !0)),
                    e.append(":</div>\x3c!----\x3e"),
                    "has_pipelines"in t && t.has_pipelines && (e.append('<div class="note-lead__container'),
                    "pipe_name"in t && t.pipe_name && e.append(" note-lead__pipe-container"),
                    e.append('">')),
                    "has_pipelines"in t && t.has_pipelines && twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "params"), "pipeline"), "name") && (e.append('<div class="note-lead__pipe"><span class="node-lead__pipe-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("note"in t ? t.note : "", "params"), "pipeline"), "name"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append('\x3c!----\x3e<div class="note-lead__status" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "status_color"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "status_name"), "light_escape", null, !0)),
                    e.append('"><span class="note-lead__status-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "status_name"), "light_escape", null, !0)),
                    e.append("</span>"),
                    e.append("</div>"),
                    "has_pipelines"in t && t.has_pipelines && e.append("</div>"),
                    143 == twig.attr("params"in t ? t.params : "", "status_id") && twig.attr("params"in t ? t.params : "", "loss_reason", void 0, void 0, !0) && (e.append('<div class="note-lead__loss-reason"><span class="note-lead__loss-reason-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "loss_reason"), "name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("params"in t ? t.params : "", "loss_reason"), "name"), this.env_.filter("i18n", "No reason")) : this.env_.filter("i18n", "No reason"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_lead_status_changed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/lead_status_changed", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append(" "),
                    twig.attr("params"in t ? t.params : "", "sent") && e.append("note-sent"),
                    e.append('">'),
                    twig.attr("params"in t ? t.params : "", "sent") ? twig.attr("params"in t ? t.params : "", "private") ? e.append('<div class="icon icon-forward-lock note-icon"></div>') : e.append('<div class="icon icon-note-email-sent note-icon"></div>') : twig.attr("params"in t ? t.params : "", "private") ? e.append('<div class="icon icon-mail-lock note-icon"></div>') : e.append('<div class="icon icon-note-email note-icon"></div>'),
                    e.append('<dl class="note--header"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "outgoing_email"), "light_escape", null, !0)),
                    e.append(" <b>"),
                    this.env_.test("iterable", twig.attr("params"in t ? t.params : "", "from")) ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "from"), "name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "from"), "light_escape", null, !0)),
                    e.append(" </b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mailTo"), "light_escape", null, !0)),
                    e.append(" <b>"),
                    this.env_.test("iterable", twig.attr("params"in t ? t.params : "", "to")) ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "to"), "name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "to"), "light_escape", null, !0)),
                    e.append(" </b></dt></dl>"),
                    e.append('<div class="note--body note--body-mail"><div class="note--body--content note--body--content-attachement" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" >');
                    var n = e;
                    if (e = new twig.StringBuffer,
                    twig.attr("params"in t ? t.params : "", "show_more"))
                        e.append(twig.attr("params"in t ? t.params : "", "text"));
                    else if (twig.attr("params"in t ? t.params : "", "private", void 0, void 0, !0) && twig.filter.def(twig.attr("params"in t ? t.params : "", "private"), !1))
                        if (twig.attr("params"in t ? t.params : "", "is_owner")) {
                            e.append('<a href="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                            e.append('" target="_blank" class=\''),
                            e.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr("params"in t ? t.params : "", "link_classes", void 0, void 0, !0) ? twig.filter.def(twig.attr("params"in t ? t.params : "", "link_classes"), []) : [], " "), "light_escape", null, !0)),
                            e.append("' "),
                            t._parent = t;
                            var a = twig.attr("params"in t ? t.params : "", "link_data", void 0, void 0, !0) ? twig.filter.def(twig.attr("params"in t ? t.params : "", "link_data"), []) : [];
                            twig.forEach(a, (function(i, n) {
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
                            e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "subject"), "light_escape", null, !0)),
                            e.append("</a>"),
                            twig.attr("params"in t ? t.params : "", "content_summary") && (e.append('<div class="note--body--content-attachement-summary">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "content_summary"), "light_escape", null, !0)),
                            twig.filter.length(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "params"), "content_summary")) < 50 && e.append("..."),
                            e.append("</div>"))
                        } else
                            e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_rights_to_private_message"), "light_escape", null, !0));
                    else
                        e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                        e.append('" target="_blank" class=\''),
                        e.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr("params"in t ? t.params : "", "link_classes", void 0, void 0, !0) ? twig.filter.def(twig.attr("params"in t ? t.params : "", "link_classes"), []) : [], " "), "light_escape", null, !0)),
                        e.append("' "),
                        t._parent = t,
                        a = twig.attr("params"in t ? t.params : "", "link_data", void 0, void 0, !0) ? twig.filter.def(twig.attr("params"in t ? t.params : "", "link_data"), []) : [],
                        twig.forEach(a, (function(i, n) {
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
                        e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "subject"), "light_escape", null, !0)),
                        e.append("</a>"),
                        twig.attr("params"in t ? t.params : "", "content_summary") && (e.append('<div class="note--body--content-attachement-summary">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "content_summary"), "light_escape", null, !0)),
                        twig.filter.length(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "params"), "content_summary")) < 50 && e.append("..."),
                        e.append("</div>"));
                    n.append(twig.spaceless(e.toString())),
                    (e = n).append("</div>"),
                    e.append('<div class="note--mail-actions">'),
                    twig.attr("params"in t ? t.params : "", "private", void 0, void 0, !0) && twig.filter.def(twig.attr("params"in t ? t.params : "", "private"), !1) && twig.attr("params"in t ? t.params : "", "is_owner") && "dashboard" != ("page_context"in t ? t.page_context : "") && (e.append('<div class="note--mail-actions-button js-note-mail-share"><span class="icon icon-open-lock"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_share_access"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div></div>"),
                    "deletable"in t && t.deletable && e.append('<div class="note-actions-switcher js-note-actions-switcher"><span class="icon icon-inline icon-v-dots-2"></span></div>'),
                    e.append('</div><div class="note-actions-wrapper">'),
                    "deletable"in t && t.deletable && (e.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_mail_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/mail_message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.text_ar = this.env_.filter("by_paragraphs", twig.attr("params"in t ? t.params : "", "text")),
                    t.sliced = !1,
                    twig.filter.length(this.env_, twig.attr("params"in t ? t.params : "", "text")) > 500 ? t.sliced = this.env_.filter("slice", this.env_, twig.attr("params"in t ? t.params : "", "text"), "start"in t ? t.start : "", 300) + "..." : twig.filter.length(this.env_, "text_ar"in t ? t.text_ar : "") > 4 && (t.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in t ? t.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in t ? t.text_ar : "", 3, void 0, "array")], "join")),
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon icon-'),
                    "icon"in t && t.icon ? e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)) : e.append("note-note"),
                    e.append(' note-icon"></div><dl class="note--header"><dd class="note--header--right">'),
                    twig.attr("linked"in t ? t.linked : "", "id") && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("linked"in t ? t.linked : "", "name"), twig.attr("linked"in t ? t.linked : "", "id")), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("linked"in t ? t.linked : "", "name"), twig.attr("linked"in t ? t.linked : "", "id")), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append('</b></dt></dl><div class="note--body">'),
                    twig.attr(twig.attr("params"in t ? t.params : "", "task"), "text") && (e.append('<div class="note--body--content note--body--content-complate"><div class="task-type-name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("params"in t ? t.params : "", "task"), "type"), "name"), "light_escape", null, !0)),
                    e.append(": </div> "),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in t ? t.params : "", "task"), "text"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="note--body--content" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('">'),
                    twig.attr("params"in t ? t.params : "", "task") && (e.append('<div class="task-result-caption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "result"), "light_escape", null, !0)),
                    e.append(": </div>")),
                    twig.attr("params"in t ? t.params : "", "raw") ? e.append(twig.attr("params"in t ? t.params : "", "text")) : "sliced"in t && t.sliced ? (e.append('<div class="note--body--content-sliced">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("parse_urls", this.env_.filter("nl2p", "sliced"in t ? t.sliced : "")), "light_escape", null, !0)),
                    e.append('<a href="#" class="js-note-expander note-expander">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.attr("params"in t ? t.params : "", "text"))), "light_escape", null, !0)),
                    e.append("</div>")) : e.append(twig.filter.escape(this.env_, this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.attr("params"in t ? t.params : "", "text"))), "light_escape", null, !0)),
                    e.append("</div></div>"),
                    ("deletable"in t && t.deletable || "editable"in t && t.editable) && e.append('<div class="note-actions-switcher js-note-actions-switcher"><span class="icon icon-inline icon-v-dots-2"></span></div>'),
                    e.append('</div><div class="note-actions-wrapper">'),
                    "deletable"in t && t.deletable && (e.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("\x3c!--\t--\x3e"),
                    "editable"in t && t.editable && (e.append('<div class="note-actions__btn note-actions__btn-edit js-note-edit-mode-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-pencil note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_edit")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_note"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/note", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(' note-system note-site-visit"><div class="icon note-icon icon-note-site-visit"></div><dl class="note--header"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    twig.attr("user"in t ? t.user : "", "name") && !twig.attr("params"in t ? t.params : "", "hide_user") && (e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append("</b>")),
                    e.append('</dt></dl><div class="note--body"><div>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "name"), "light_escape", null, !0)),
                    e.append('</div><div class="note--body--content" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "link"), "light_escape", null, !0)),
                    e.append('" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "text"), "light_escape", null, !0)),
                    e.append("</a></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_site_visit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/site_visit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="icon '),
                    twig.attr("params"in t ? t.params : "", "icon") ? e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "icon"), "light_escape", null, !0)) : e.append("icon-note-excl"),
                    e.append(' note-icon"></div><dl class="note--header"><dd class="note--header--right">'),
                    "linked"in t && t.linked && (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "notes_in"), "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "uri"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("linked"in t ? t.linked : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append('</dd><dt class="note--header--left">'),
                    ("prev_date"in t ? t.prev_date : "") == this.env_.filter("task_date", "date"in t ? t.date : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "time", !0), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : ""), "light_escape", null, !0)),
                    twig.attr("user"in t ? t.user : "", "name") && !twig.attr("params"in t ? t.params : "", "hide_user") && (e.append(", <b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append("</b>")),
                    e.append('</dt></dl><div class="note--body"><div class="note--body--content" id="note_body_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "text"), "light_escape", null, !0)),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_system_note"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/system_note", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="note note-element-type-'),
                    e.append(twig.filter.escape(this.env_, "main_element_type"in t ? t.main_element_type : "", "light_escape", null, !0)),
                    e.append(" note-system "),
                    "type"in t && t.type && (e.append("note-"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append(" "),
                    twig.attr("params"in t ? t.params : "", "custom_class") && e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "custom_class"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "text"), "light_escape", null, !0)),
                    e.append('</div><div class="note-actions-wrapper">'),
                    "deletable"in t && t.deletable && (e.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "note_delete")), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_tabula_note"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/tabula_note", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.icon = "follow-up",
                    i.color = "green",
                    2 == twig.attr("params"in i ? i.params : "", "type") ? (i.icon = "case-red",
                    i.color = "red") : twig.contains([1, 3], twig.attr("params"in i ? i.params : "", "type")) || (i.icon = "clock-blue-big",
                    i.color = "blue"),
                    t.append('<div class="note task-'),
                    t.append(twig.filter.escape(this.env_, "color"in i ? i.color : "", "light_escape", null, !0)),
                    t.append(" note-element-type-"),
                    t.append(twig.filter.escape(this.env_, "main_element_type"in i ? i.main_element_type : "", "light_escape", null, !0)),
                    t.append(" task "),
                    !twig.attr("params"in i ? i.params : "", "complate") && twig.attr("params"in i ? i.params : "", "expired") && t.append("task-expired"),
                    t.append(" "),
                    twig.attr("params"in i ? i.params : "", "complate") && t.append("task-complate"),
                    t.append('"><div class="icon icon-task-complete note-icon note-icon-task-complete"></div><div class="icon icon-'),
                    t.append(twig.filter.escape(this.env_, "icon"in i ? i.icon : "", "light_escape", null, !0)),
                    t.append(' note-icon"></div><dl class="note--header"><dd class="note--header--right">'),
                    twig.filter.length(this.env_, "linked"in i ? i.linked : "") && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_in"), "light_escape", null, !0)),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "uri"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "name"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append('</dd><dt class="note--header--left">'),
                    twig.attr("params"in i ? i.params : "", "complate") ? t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "updated"in i ? i.updated : ""), "light_escape", null, !0)) : ("prev_date"in i ? i.prev_date : "") == this.env_.filter("task_date", "date"in i ? i.date : "", "date") ? t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in i ? i.date : "", "time"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in i ? i.date : ""), "light_escape", null, !0)),
                    t.append(","),
                    (twig.attr("params"in i ? i.params : "", "task_from") && twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "id") != twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "id") || twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "name") != twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "name") && twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "id") == twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "id")) && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "task_from"), "name"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_for"), "light_escape", null, !0)),
                    t.append(" ")),
                    t.append("<b>"),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "main_user"), "name"), "light_escape", null, !0)),
                    t.append('</b></dt></dl><div class="note--body">'),
                    i.task_text = this.env_.filter("task_text", twig.attr("params"in i ? i.params : "", "text")),
                    t.append('<div class="note--body--content clearfix '),
                    twig.attr("params"in i ? i.params : "", "complate") && t.append("note--body--content-complate"),
                    t.append('" id="note_body_'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"><div class="task-type-name">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("params"in i ? i.params : "", "type_name")), "light_escape", null, !0)),
                    "task_text"in i && i.task_text && t.append(": "),
                    t.append("</div>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("parse_urls", this.env_.filter("nl2p", "task_text"in i ? i.task_text : "")), "light_escape", null, !0)),
                    t.append("</div>"),
                    !twig.attr("params"in i ? i.params : "", "complete_form") && twig.attr("params"in i ? i.params : "", "result") && (t.append('<div class="task-result-wrapper"><div class="task-result-caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_result"), "light_escape", null, !0)),
                    t.append(": </div>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.attr(twig.attr("params"in i ? i.params : "", "result"), "body"))), "light_escape", null, !0)),
                    t.append("</div>")),
                    twig.attr("params"in i ? i.params : "", "complete_form") && (t.append(" "),
                    t.append('<div class="task-complete__result-caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_result"), "light_escape", null, !0)),
                    t.append(':</div><div class="task-complete__textarea">'),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "text-input-visible-placeholder task-complete__textarea-input",
                        placeholder: "",
                        value: twig.attr("params"in i ? i.params : "", "complete_form_val"),
                        id: "task_edit_result"
                    })),
                    t.append('</div><div class="task-complete__actions">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-todo-result",
                        text: twig.attr("lang"in i ? i.lang : "", "button_save")
                    })),
                    i.skip_text = twig.attr("lang"in i ? i.lang : "", "task_result_skip"),
                    twig.attr("params"in i ? i.params : "", "complete_form_val") && (i.skip_text = twig.attr("lang"in i ? i.lang : "", "button_cancel")),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-todo-result-skip",
                        text: "skip_text"in i ? i.skip_text : ""
                    })),
                    t.append("</div>")),
                    t.append("</div>"),
                    ("deletable"in i && i.deletable || "editable"in i && i.editable || "completable"in i && i.completable) && !twig.attr("params"in i ? i.params : "", "complete_form") && t.append('<div class="note-actions-switcher js-note-actions-switcher"><span class="icon icon-inline icon-v-dots-2"></span></div>'),
                    t.append("</div>"),
                    twig.attr("params"in i ? i.params : "", "complete_form") || (t.append('<div class="note-actions-wrapper">'),
                    (twig.attr("params"in i ? i.params : "", "is_new") || twig.attr("params"in i ? i.params : "", "complate") && "deletable"in i && i.deletable) && (t.append('<div class="note-actions__btn note-actions__btn-delete js-note-delete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-delete-trash note-actions__icon"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "note_delete")), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append("\x3c!--\t--\x3e"),
                    !twig.attr("params"in i ? i.params : "", "complate") && "editable"in i && i.editable && (t.append('<div class="note-actions__btn note-actions__btn-edit js-note-edit-mode-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-pencil note-actions__icon"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "note_edit")), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append("\x3c!--\t--\x3e"),
                    twig.attr("params"in i ? i.params : "", "temp") || twig.attr("params"in i ? i.params : "", "complate") || !("completable"in i && i.completable || "editable"in i && i.editable) || (t.append('<div class="note-actions__btn note-actions__btn-complete js-task-complete-btn"><span class="note-actions__btn__icon-wrapper"><span class="icon icon-checkmark-green note-actions__icon"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_complete")), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_notes_types_task"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/notes/types/task", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        stats_item_title: twig.bind(this.block_stats_item_title, this),
                        stats_item_value: twig.bind(this.block_stats_item_value, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="linked-entities-stats__stats-item stats-item'),
                    "type"in t && t.type && "base" != ("type"in t ? t.type : "") && (e.append(" stats-item__"),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                    e.append('"><div class="stats-item__title">'),
                    e.append(this.renderBlock("stats_item_title", t, i)),
                    e.append('</div><div class="stats-item__value'),
                    "type"in t && t.type && "base" != ("type"in t ? t.type : "") && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append("__value")),
                    e.append('"><div class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" stats-item__value-inner"),
                    "type"in t && t.type && "base" != ("type"in t ? t.type : "") && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append("__value-inner")),
                    e.append('">'),
                    e.append(this.renderBlock("stats_item_value", t, i)),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.block_stats_item_title = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0))
                }
                ,
                t.prototype.block_stats_item_value = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "value"in t && t.value ? e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)) : e.append("0")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats_items_base"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats/items/base", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        stats_item_title: twig.bind(this.block_stats_item_title, this),
                        stats_item_value: twig.bind(this.block_stats_item_value, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/stats/items/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.type = "annotation",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_stats_item_title = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('<div class="annotation__description">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "inbound / outbound"), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_stats_item_value = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="annotation__inbound"><div class="annotation__inbound-value">'),
                    twig.attr("value"in t ? t.value : "", "inbound") ? e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "inbound"), "light_escape", null, !0)) : e.append(0),
                    e.append('</div></div><div class="annotation__value-separator">/</div><div class="annotation__outbound"><div class="stats-item__outbound-value">'),
                    twig.attr("value"in t ? t.value : "", "outbound") ? e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "outbound"), "light_escape", null, !0)) : e.append(0),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats_items_calls"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats/items/calls", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.should_be_visible = !0,
                    e.append('<div class="operday-stats"><div class="operday-stats__header"><div class="operday-stats__header-total-time">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "spent_time"), "light_escape", null, !0)),
                    e.append('</div><div class="operday-stats__header-text">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "hours (operday)"), twig.attr("value"in t ? t.value : "", "spent_time"))), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "labor costs"), "light_escape", null, !0)),
                    e.append('</div></div><div class="operday-stats__list-wrapper">'),
                    t._parent = t;
                    var n = twig.attr("value"in t ? t.value : "", "users_groups");
                    twig.forEach(n, (function(i, n) {
                        if (t._key = n,
                        t.group = i,
                        "00:00" != twig.attr("group"in t ? t.group : "", "spent_time")) {
                            e.append('<div class="operday-stats__group-wrapper js-operday-group"><div class="operday-stats__group-head"><div class="operday-stats__group-head-left"><div class="operday-stats__group-name">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("group"in t ? t.group : "", "name"), "light_escape", null, !0)),
                            e.append('</div><div class="operday-stats__expander js-operday-expander">'),
                            "should_be_visible"in t && t.should_be_visible ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Hide"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show"), "light_escape", null, !0)),
                            e.append('</div></div><div class="operday-stats__group-time">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("group"in t ? t.group : "", "spent_time"), "light_escape", null, !0)),
                            e.append('</div></div><div class="operday-stats__list-content js-operday-users '),
                            "should_be_visible"in t && t.should_be_visible ? t.should_be_visible = !1 : e.append("hidden"),
                            e.append('">');
                            var a = twig.attr("group"in t ? t.group : "", "users");
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.user = i,
                                e.append('<div class="operday-stats__user"><div class="operday-stats__user-name">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                                e.append('</div><div class="operday-stats__user-time">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "spent_time"), "light_escape", null, !0)),
                                e.append("</div></div>")
                            }
                            ), this),
                            e.append("</div></div>")
                        }
                    }
                    ), this),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats_items_operday"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats/items/operday", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        stats_item_title: twig.bind(this.block_stats_item_title, this),
                        stats_item_value: twig.bind(this.block_stats_item_value, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/stats/items/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.type = "annotation",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_stats_item_title = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('<div class="annotation__description">'),
                    e.append(this.env_.filter("i18n", "completed / expired")),
                    e.append("</div>")
                }
                ,
                t.prototype.block_stats_item_value = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="annotation__inbound"><div class="annotation__inbound-value">'),
                    twig.attr("value"in t ? t.value : "", "completed") ? e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "completed"), "light_escape", null, !0)) : e.append(0),
                    e.append('</div></div><div class="annotation__value-separator"><font color="#FFADAD">/</font></div><div class="annotation__outbound"><div class="stats-item__outbound-value"><font color="#FFADAD">'),
                    twig.attr("value"in t ? t.value : "", "expired") ? e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "expired"), "light_escape", null, !0)) : e.append(0),
                    e.append("</font></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_stats_items_tasks"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/stats/items/tasks", t)
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
                    t.editable_class_name = "js-task-text-textarea",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_clearer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "need_switcher"in i && i.need_switcher && (t.append('<div class="feed-compose-switcher"><span class="feed-compose-switcher__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task"), "light_escape", null, !0)),
                    t.append('</span></div><span class="feed-compose__due">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "task_due")), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<div class="card-task__actions__date-user"><span class="card-task__actions__date-user__dates">'),
                    new (e._get("interface/common/tasks_date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "id"in i ? i.id : "",
                        type: "type"in i ? i.type : "",
                        main_user: "responsible_user_id"in i ? i.responsible_user_id : "",
                        text: twig.attr("data"in i ? i.data : "", "text"),
                        class_name: "",
                        date: "complete_till"in i ? i.complete_till : "",
                        duration: "duration"in i ? i.duration : ""
                    })),
                    t.append('</span><span class="feed-compose__due">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_for"), "light_escape", null, !0)),
                    t.append('</span><span id="feed_compose_user" class="card-task__actions__date-user__user feed-compose-user">'),
                    i.responsible_text = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "users"), "responsible_user_id"in i ? i.responsible_user_id : "", void 0, "array"), "full_name", void 0, "array"),
                    "responsible_text"in i && i.responsible_text || (i.responsible_text = this.env_.filter("i18n", "notes_user_deleted")),
                    new (e._get("interface/notes/feed_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_new: !1,
                        name: "responsible_text"in i ? i.responsible_text : "",
                        id: "responsible_user_id"in i ? i.responsible_user_id : ""
                    })),
                    t.append('</span><input type="hidden" class="js-task-main_user" name="main_user" value="'),
                    t.append(twig.filter.escape(this.env_, "responsible_user_id"in i ? i.responsible_user_id : "", "light_escape", null, !0)),
                    t.append('">:&nbsp;'),
                    new (e._get("interface/common/task_types/in_card.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "type"in i ? i.type : "",
                        type_name: "type_name"in i ? i.type_name : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_tasks_controls_contenteditable"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/tasks/controls/contenteditable", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.name = "CFV[" + twig.attr("cf"in i ? i.cf : "", "ID") + "][" + this.env_.filter("random_string", 10) + "]",
                    "select" == ("type"in i ? i.type : "") || "multiselect" == ("type"in i ? i.type : "") ? i.placeholder = twig.attr("lang"in i ? i.lang : "", "cf_selector_placeholder") : "date" == ("type"in i ? i.type : "") ? i.placeholder = "" : i.placeholder = "...",
                    null !== ("type"in i ? i.type : "") && (t.append('<div class="linked-form__field linked-form__field-'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field__label '),
                    twig.attr("cf"in i ? i.cf : "", "ENUMS") && t.append("linked-form__field__label-multiple"),
                    t.append('">'),
                    new (e._get("interface/cards/forms/multiple/label.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        cf: "cf"in i ? i.cf : "",
                        selected: twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE_ENUM_ID"), "key"in i ? i.key : "", void 0, "array")
                    })),
                    t.append('</div><div class="linked-form__field__value">'),
                    null === ("value"in i ? i.value : "") && (i.value = ""),
                    "1" == twig.attr("cf"in i ? i.cf : "", "DISABLED") && (i.cf_readonly = !0,
                    i.cf_disabled = !0,
                    i.placeholder = "..."),
                    new (e._get("interface/cards/forms/fields/" + ("type"in i ? i.type : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                        cf: "cf"in i ? i.cf : "",
                        element: "element"in i ? i.element : "",
                        name: ("name"in i ? i.name : "") + "[VALUE]",
                        is_add: "is_add"in i ? i.is_add : "",
                        type: "type"in i ? i.type : "",
                        readonly: "cf_readonly"in i ? i.cf_readonly : "",
                        disabled: "cf_disabled"in i ? i.cf_disabled : "",
                        placeholder: "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_multiple_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/multiple/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    var a = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE")
                      , s = !1
                      , r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var l = twig.count(a);
                        r.revindex0 = l - 1,
                        r.revindex = l,
                        r.length = l,
                        r.last = 1 === l
                    }
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.val = n,
                        new (e._get("interface/cards/forms/multiple/item.twig"))(this.env_).render_(t, i),
                        s = !0,
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    s || null !== ("type"in i ? i.type : "") && new (e._get("interface/cards/forms/multiple/item.twig"))(this.env_).render_(t, i),
                    i.MAX_MULTIPLE_FIELD_VALUES = 500,
                    t.append('<div class="linked-form__field-add-multiple" '),
                    twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE") && "N" != twig.attr("element"in i ? i.element : "", "CAN_EDIT") && twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE")) < ("MAX_MULTIPLE_FIELD_VALUES"in i ? i.MAX_MULTIPLE_FIELD_VALUES : "") && t.append('style="display: block"'),
                    t.append('><div class="linked-form__field__value"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_multiple_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/multiple/items", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    twig.attr("cf"in i ? i.cf : "", "ENUMS")) {
                        i.items = [],
                        i._parent = i;
                        var a = twig.attr("cf"in i ? i.cf : "", "ENUMS");
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.enum = e,
                            i.items = twig.filter.merge("items"in i ? i.items : "", [{
                                id: twig.attr("enum"in i ? i.enum : "", "ID"),
                                option: twig.attr(twig.attr(twig.attr("cf"in i ? i.cf : "", "ENUMS_NAMES"), twig.attr("enum"in i ? i.enum : "", "VALUE"), void 0, "array"), "MEDIUM")
                            }])
                        }
                        ), this),
                        new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            items: "items"in i ? i.items : "",
                            selected: "selected"in i ? i.selected : "",
                            name: ("name"in i ? i.name : "") + "[DESCRIPTION]",
                            class_name: "linked-form__select"
                        }))
                    } else
                        t.append("<span>"),
                        t.append(twig.filter.escape(this.env_, twig.attr("cf"in i ? i.cf : "", "NAME"), "light_escape", null, !0)),
                        t.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_forms_multiple_label"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/forms/multiple/label", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<span class="cf-field-wrapper__handle"><span class="icon icon-v-dots"></span></span>'),
                    i.has_id_copying = ("id"in i ? i.id : "") && ("sortable"in i ? i.sortable : "") && ("groupable"in i ? i.groupable : ""),
                    t.append('<div class="cf-field-wrapper__body '),
                    "has_id_copying"in i && i.has_id_copying || t.append("cf-field-wrapper__body_no-id"),
                    t.append(' edit-mode">'),
                    "predefined"in i && i.predefined || "id"in i && i.id || new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "type_id",
                        items: "field_types"in i ? i.field_types : "",
                        selected: "type_id"in i ? i.type_id : "",
                        disabled: !1,
                        class_name: "cf-field-edit__type-select"
                    })),
                    "has_id_copying"in i && i.has_id_copying && (t.append('<div class="cf-field-edit__copy">'),
                    twig.attr("field_types"in i ? i.field_types : "", "type_id"in i ? i.type_id : "", void 0, "array") ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("field_types"in i ? i.field_types : "", "type_id"in i ? i.type_id : "", void 0, "array"), "option") + ", ", "light_escape", null, !0)) : t.append(""),
                    t.append('ID:&nbsp;<span class="cf-field-edit__copy-label js-copy-cf-id" data-copied="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                    t.append('" data-clipboard-text="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('<svg class="svg-icon svg-common--copy-dims cf-field-edit__copy-icon"><use xlink:href="#common--copy"></use></svg></span></div>')),
                    t.append('<div class="cf-field-edit__body clearfix"><div class="cf-field-edit__body-left">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name",
                        placeholder: twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "name_placeholder"),
                        value: "name"in i ? i.name : "",
                        class_name: "cf-field-input",
                        disabled: !1,
                        readonly: "predefined"in i ? i.predefined : ""
                    })),
                    t.append('</div><div class="cf-field-edit__body-right">'),
                    new (e._get("interface/cards/custom_fields/fields/enums_wrapper.twig"))(this.env_).render_(t, i),
                    t.append('</div></div><p class="cf-field-monetary-currency-description hidden">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The currency is only used to display the sign and correctly format the value. Conversions to the lead currency or other similar operations are not supported"), "light_escape", null, !0)),
                    t.append('</p><div class="cf-field-edit__formula hidden">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "formula_enabled",
                        value: "y",
                        text: this.env_.filter("i18n", "Use expression to calculate value"),
                        class_name: "cf-field-edit__formula-checkbox",
                        input_class_name: "js-form-changes-skip",
                        checked: twig.filter.length(this.env_, twig.attr("settings"in i ? i.settings : "", "formula")) > 0
                    })),
                    t.append('<div class="cf-field-edit__formula-settings"><div class="cf-field-edit__formula-area"><svg class="cf-field-edit__formula-area-fx" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 121.83 122.88"><path d="M27.61,34.37l-4.07,4.6l0.4,1.74h10.48c-2.14,12.38-3.74,23.54-6.81,40.74c-3.67,21.94-5.78,27.33-7.03,29.3 c-1.1,1.95-2.68,2.96-4.82,2.96c-2.35,0-6.6-1.86-8.88-3.97c-0.82-0.56-1.79-0.42-2.82,0.26C2,111.74,0,114.42,0,116.82 c-0.12,3.24,4.21,6.06,8.34,6.06c3.64,0,9-2.28,14.64-7.64c7.71-7.31,13.48-17.34,18.3-39.02c3.1-13.84,4.56-22.84,6.74-35.5 l13.02-1.18l2.82-5.17H49.2C52.99,10.53,55.95,7,59.59,7c2.42,0,5.24,1.86,8.48,5.52c0.96,1.32,2.4,1.18,3.5,0.28 c1.85-1.1,4.13-3.92,4.28-6.48C75.96,3.5,72.6,0,66.82,0C61.58,0,53.55,3.5,46.8,10.38c-5.92,6.27-9.02,14.1-11.16,23.99H27.61 L27.61,34.37z M69.27,50.33c4.04-5.38,6.46-7.17,7.71-7.17c1.29,0,2.32,1.27,4.53,8.41l3.78,12.19 c-7.31,11.18-12.66,17.41-15.91,17.41c-1.08,0-2.17-0.34-2.94-1.1c-0.76-0.76-1.6-1.39-2.42-1.39c-2.68,0-6,3.25-6.06,7.28 c-0.06,4.11,2.82,7.05,6.6,7.05c6.49,0,11.98-6.37,22.58-23.26l3.1,10.45c2.66,8.98,5.78,12.81,9.68,12.81 c4.82,0,11.3-4.11,18.37-15.22l-2.96-3.38c-4.25,5.12-7.07,7.52-8.74,7.52c-1.86,0-3.49-2.84-5.64-9.82l-4.53-14.73 c2.68-3.95,5.32-7.27,7.64-9.92c2.76-3.15,4.89-4.49,6.34-4.49c1.22,0,2.28,0.52,2.94,1.25c0.87,0.96,1.39,1.41,2.42,1.41 c2.33,0,5.93-2.96,6.06-6.88c0.12-3.64-2.14-6.74-6.06-6.74c-5.92,0-11.14,5.1-21.19,20.04l-2.07-6.41 c-2.9-9-4.82-13.63-8.86-13.63c-4.7,0-11.16,5.78-17.48,14.94L69.27,50.33L69.27,50.33z"/></svg><span class="cf-field-edit__formula-area-fx-equals">=</span>'),
                    new (e._get("interface/controls/contenteditable.twig"))(this.env_).render_(t, {
                        name: "formula",
                        value: twig.attr("settings"in i ? i.settings : "", "formula"),
                        placeholder: this.env_.filter("i18n", "Formula"),
                        class_name: "cf-field-edit__formula-contenteditable",
                        input_class_name: "cf-field-edit__formula-input",
                        editable_class_name: "cf-field-edit__formula-content"
                    }),
                    t.append('</div><div class="cf-field-edit__formula-hints"><div class="cf-field-edit__formula-hints-item"><span class="cf-field-edit__formula-hints-button">[</span>&mdash; '),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Select field (formula)")), "light_escape", null, !0)),
                    t.append('</div><div class="cf-field-edit__formula-hints-item"><span class="cf-field-edit__formula-hints-button" style="font-size: 20px; display: block; text-align: center;">*</span>&mdash; '),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Multiply")), "light_escape", null, !0)),
                    t.append('</div><div class="cf-field-edit__formula-hints-item"><span class="cf-field-edit__formula-hints-button">/</span>&mdash; '),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Divide")), "light_escape", null, !0)),
                    t.append('</div><div class="cf-field-edit__formula-hints-item"><span class="cf-field-edit__formula-hints-button" style="font-size: 16px">+</span>&mdash; '),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Add (math)")), "light_escape", null, !0)),
                    t.append('</div><div class="cf-field-edit__formula-hints-item"><span class="cf-field-edit__formula-hints-button" style="font-size: 20px">-</span>&mdash; '),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Subtract")), "light_escape", null, !0)),
                    t.append('</div><div class="cf-field-edit__formula-hints-item"><span class="cf-field-edit__formula-hints-button">( )</span>&mdash; '),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Parenthesize")), "light_escape", null, !0)),
                    t.append('</div></div><p class="cf-field-edit__formula-description">');
                    var a = t;
                    (t = new twig.StringBuffer).append('<span class="cf-field-edit__formula-description-example" data-formula="'),
                    t.append("{{lead.price}} * 0.2"),
                    t.append('">['),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sale"), "light_escape", null, !0)),
                    t.append("] * 0.2</span>"),
                    i.example_formula = new twig.Markup(t.toString()),
                    (t = a).append(twig.filter.replace(this.env_.filter("i18n", "You can specify the automatic value calculation by the formula. For example, the formula %s will help you calculate a discount of 20% of the budget."), {
                        "%s": "example_formula"in i ? i.example_formula : ""
                    })),
                    t.append('</p></div></div><div class="cf-field-edit__body-top">'),
                    ("sortable"in i && i.sortable && "groupable"in i && i.groupable || (!("predefined"in i) || !i.predefined) && "enable_required"in i && i.enable_required) && ("predefined"in i && i.predefined || !("enable_required"in i) || !i.enable_required || new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        checked: "disabled"in i ? i.disabled : "",
                        text: (twig.filter.length(this.env_, twig.attr("settings"in i ? i.settings : "", "formula")) > 0 ? twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "no_hands_only_api") + " / " : "") + twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "only_api"),
                        small: !1,
                        disabled: !1,
                        value: !0,
                        id: "cf_disabled",
                        name: "disabled",
                        class_name: "cf-field-edit__body__disabled-checkbox js-cf-only-api-checkbox"
                    }))),
                    twig.attr("tariff"in i ? i.tariff : "", "required_fields") && "enable_required"in i && i.enable_required && "can_be_required"in i && i.can_be_required && (t.append('<div class="cf-field-edit__body__required-wrapper " '),
                    "predefined"in i && i.predefined || !("disabled"in i) || !i.disabled || t.append('style="display: none"'),
                    t.append(">"),
                    new (e._get("interface/cards/controls/pipelines_checkbox_view.twig"))(this.env_).render_(t, {
                        mode: "required",
                        name: "status_id",
                        has_pipelines: "has_pipelines"in i ? i.has_pipelines : "",
                        pipelines: "pipelines"in i ? i.pipelines : "",
                        statuses: "statuses"in i ? i.statuses : "",
                        selected_statuses: "selected_statuses"in i ? i.selected_statuses : "",
                        lang: "lang"in i ? i.lang : ""
                    }),
                    t.append("</div>")),
                    twig.attr("_account_features"in i ? i._account_features : "", "super_custom_fields") && 2 == ("element_type"in i ? i.element_type : "") && (t.append('<div class="cf-field-edit__body__hidden-for-pipelines-wrapper">'),
                    new (e._get("interface/cards/controls/pipelines_checkbox_view.twig"))(this.env_).render_(t, {
                        mode: "hiding",
                        name: "hide_for_stages",
                        has_pipelines: "has_pipelines"in i ? i.has_pipelines : "",
                        pipelines: "pipelines"in i ? i.pipelines : "",
                        statuses: "statuses"in i ? i.statuses : "",
                        selected_statuses: "selected_statuses_hidden"in i ? i.selected_statuses_hidden : "",
                        lang: "lang"in i ? i.lang : ""
                    }),
                    t.append("</div>")),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_disabled: !0,
                        has_trash: !("predefined"in i && i.predefined || !("id"in i) || !i.id) && twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "remove_field") + '<svg class="svg-icon svg-common--trash-dims "><use xlink:href="#common--trash"></use></svg>',
                        trash_should_be_raw: !0,
                        trash_class_name: "cf-field-edit__remove js-modal-trash"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_modes_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/modes/edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="cf-field-wrapper__body edit-mode"><input type="hidden" name="type_id" value="21" data-change-on-init="true"><input type="hidden" name="tracking_callback" value="'),
                    t.append(twig.filter.escape(this.env_, "tracking_callback"in i ? twig.filter.def("tracking_callback"in i ? i.tracking_callback : "", "") : "", "light_escape", null, !0)),
                    t.append('" data-change-on-init="true"><div class="cf-field-edit__body clearfix"><div class="cf-field-edit__body-left" style="width: calc(56.3% - 29px);">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name",
                        placeholder: this.env_.filter("i18n", "Meta code"),
                        value: "name"in i ? i.name : "",
                        class_name: "cf-field-input",
                        disabled: !(!("id"in i) || !i.id),
                        readonly: "predefined"in i ? i.predefined : ""
                    })),
                    t.append('</div><div class="cf-field-edit__body-right" style="padding-left: 8px;"><button type="button" class="button-input js-modal-callback" tabindex="" style="font-weight: normal; font-weight: normal; height: 33px; padding: 0 10px;"><span class="button-input-inner"><span class="button-input-inner__text" style="text-decoration: underline; color: #2F80ED; position: relative;">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Callback settings"), "light_escape", null, !0)),
                    t.append('</span></span></button></div></div><div class="cf-field-edit__body-top"></div>'),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_disabled: !0,
                        has_trash: !1
                    })),
                    "predefined"in i && i.predefined || !("id"in i) || !i.id || (t.append('<div class="cf-field-edit__remove js-modal-trash">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Remove meta"), "light_escape", null, !0)),
                    t.append('<svg class="svg-icon svg-common--trash-dims "><use xlink:href="#common--trash"></use></svg></div>')),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_modes_edit_tracking_data"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/modes/edit_tracking_data", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    i.is_tracking_data_predefined = ("predefined"in i ? i.predefined : "") && 21 == ("type_id"in i ? i.type_id : ""),
                    t.append('<span class="cf-field-wrapper__handle"><span class="icon icon-v-dots"></span></span><div class="cf-field-wrapper__inner"><div class="cf-field-wrapper__body clearfix '),
                    "is_tracking_data_predefined"in i && i.is_tracking_data_predefined && t.append("js-disabled"),
                    t.append('"><div class="cf-field-wrapper__body__inner"><div class="cf-field-view__name '),
                    "is_tracking_data_predefined"in i && i.is_tracking_data_predefined && t.append("cf-field-view__name-disabled"),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('</div><div class="cf-field-view__value">'),
                    "budget" == ("id"in i ? i.id : ""))
                        t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0));
                    else if (23 == ("type_id"in i ? i.type_id : ""))
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", "0", [!1, 0, !1, "monetary_locale_data"in i && i.monetary_locale_data ? "monetary_locale_data"in i ? i.monetary_locale_data : "" : twig.attr("settings"in i ? i.settings : "", "currency")]), "light_escape", null, !0));
                    else if (3 == ("type_id"in i ? i.type_id : ""))
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "cf-field-view-checkbox",
                            small: !0,
                            disabled: !0,
                            checked: !0,
                            name: "name"in i ? i.name : ""
                        }));
                    else if ("enums"in i && i.enums && twig.attr(twig.attr("enums"in i ? i.enums : "", 0, void 0, "array"), "value"))
                        t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "enums"in i ? i.enums : ""), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "variants"), twig.filter.length(this.env_, "enums"in i ? i.enums : "")), "light_escape", null, !0));
                    else if (twig.filter.length(this.env_, twig.attr("settings"in i ? i.settings : "", "chained_lists"))) {
                        i._parent = i;
                        var a = twig.attr("settings"in i ? i.settings : "", "chained_lists")
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
                            i.chained_list = e,
                            t.append(twig.attr(s, "first") ? "" : " / "),
                            t.append(twig.filter.escape(this.env_, twig.attr("chained_list"in i ? i.chained_list : "", "title"), "light_escape", null, !0)),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    } else
                        t.append("...");
                    t.append('</div></div><div class="cf-field-view__api-required">'),
                    "disabled"in i && i.disabled ? (t.append('<div class="cf-field-view__api">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "only_api"), "light_escape", null, !0)),
                    t.append("</div>")) : ("required"in i && i.required && new (e._get("interface/cards/custom_fields/fields/required.twig"))(this.env_).render_(t, i),
                    twig.attr("_account_features"in i ? i._account_features : "", "super_custom_fields") && twig.filter.length(this.env_, "hide_for_stages"in i ? i.hide_for_stages : "") > 0 && new (e._get("interface/cards/custom_fields/fields/hidden.twig"))(this.env_).render_(t, i)),
                    twig.attr("_account_features"in i ? i._account_features : "", "super_custom_fields") && twig.attr("settings"in i ? i.settings : "", "formula") && t.append('<div class="cf-field-view__fx-label"><svg class="cf-field-view__fx-label-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 121.83 122.88"><path d="M27.61,34.37l-4.07,4.6l0.4,1.74h10.48c-2.14,12.38-3.74,23.54-6.81,40.74c-3.67,21.94-5.78,27.33-7.03,29.3 c-1.1,1.95-2.68,2.96-4.82,2.96c-2.35,0-6.6-1.86-8.88-3.97c-0.82-0.56-1.79-0.42-2.82,0.26C2,111.74,0,114.42,0,116.82 c-0.12,3.24,4.21,6.06,8.34,6.06c3.64,0,9-2.28,14.64-7.64c7.71-7.31,13.48-17.34,18.3-39.02c3.1-13.84,4.56-22.84,6.74-35.5 l13.02-1.18l2.82-5.17H49.2C52.99,10.53,55.95,7,59.59,7c2.42,0,5.24,1.86,8.48,5.52c0.96,1.32,2.4,1.18,3.5,0.28 c1.85-1.1,4.13-3.92,4.28-6.48C75.96,3.5,72.6,0,66.82,0C61.58,0,53.55,3.5,46.8,10.38c-5.92,6.27-9.02,14.1-11.16,23.99H27.61 L27.61,34.37z M69.27,50.33c4.04-5.38,6.46-7.17,7.71-7.17c1.29,0,2.32,1.27,4.53,8.41l3.78,12.19 c-7.31,11.18-12.66,17.41-15.91,17.41c-1.08,0-2.17-0.34-2.94-1.1c-0.76-0.76-1.6-1.39-2.42-1.39c-2.68,0-6,3.25-6.06,7.28 c-0.06,4.11,2.82,7.05,6.6,7.05c6.49,0,11.98-6.37,22.58-23.26l3.1,10.45c2.66,8.98,5.78,12.81,9.68,12.81 c4.82,0,11.3-4.11,18.37-15.22l-2.96-3.38c-4.25,5.12-7.07,7.52-8.74,7.52c-1.86,0-3.49-2.84-5.64-9.82l-4.53-14.73 c2.68-3.95,5.32-7.27,7.64-9.92c2.76-3.15,4.89-4.49,6.34-4.49c1.22,0,2.28,0.52,2.94,1.25c0.87,0.96,1.39,1.41,2.42,1.41 c2.33,0,5.93-2.96,6.06-6.88c0.12-3.64-2.14-6.74-6.06-6.74c-5.92,0-11.14,5.1-21.19,20.04l-2.07-6.41 c-2.9-9-4.82-13.63-8.86-13.63c-4.7,0-11.16,5.78-17.48,14.94L69.27,50.33L69.27,50.33z"/></svg></div>'),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_custom_fields_fields_modes_view"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/custom_fields/fields/modes/view", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="subscribers-full"><div class="js-users-picker users-picker"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_full"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/full", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="subscribers-short js-subscribe-short"><div class="subscribers-self js-subscribe-short-self"></div><div class="subscribers-list-container js-subscribe-short-list custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_short"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/short", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<ul class="subscribers-list">'),
                    t._parent = t;
                    var n = "subscribers"in t ? t.subscribers : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.subscriber = i,
                        e.append('<li class="subscribers-list__item subscriber '),
                        "group" == twig.attr("subscriber"in t ? t.subscriber : "", "type") && e.append("subscribers-list__item--strong"),
                        e.append('"><div class="subscriber__name">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("subscriber"in t ? t.subscriber : "", "title"), "light_escape", null, !0)),
                        e.append('</div><div class="subscriber__remove js-subscriber-remove" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("subscriber"in t ? t.subscriber : "", "model_id"), "light_escape", null, !0)),
                        e.append('"><svg class="svg-icon svg-multiactions--delete-dims"><use xlink:href="#multiactions--delete"></use></svg></div></li>')
                    }
                    ), this),
                    e.append("</ul>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_short_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/short_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "selfSubscribed"in t && t.selfSubscribed ? (e.append('<div class="subscribers-self__status">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You are subscribed"), "light_escape", null, !0)),
                    e.append("</div>")) : (e.append('<div class="subscribers-self__status subscribers-self__status--inactive"><a href="#" class="js-subscribe">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Subscribe"), "light_escape", null, !0)),
                    e.append("</a></div>")),
                    e.append('<div class="subscribers-self__action">'),
                    "selfSubscribed"in t && t.selfSubscribed && (e.append('<a href="#" class="js-unsubscribe">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unsubscribe"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_short_self"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/short_self", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.suggest_id = twig.functions.random(this.env_, 1e4),
                    e.append('<div data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="users-picker-controls js-users-picker-controls"><button class="users-picker-controls__cancel js-users-picker-controls-cancel">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Cancel"), "light_escape", null, !0)),
                    e.append('</button><button class="users-picker-controls__save js-users-picker-controls-save">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Save"), "light_escape", null, !0)),
                    e.append('</button></div><div class="users-picker-search"><span class="users-picker-search__icon"><svg class="svg-icon svg-common--filter-search-dims"><use xlink:href="#common--filter-search"></use></svg></span><input class="users-picker-search__field js-multisuggest-input" /></div><div class="js-multisuggest-suggest" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('" ><div class="js-multisuggest-list" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_users_picker"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/users_picker", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.title = twig.attr("item"in t ? t.item : "", "title"),
                    "title"in t && t.title || (t.title = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name")),
                    "class_name"in t && t.class_name || (t.class_name = "multisuggest__list-item"),
                    e.append('<li class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(' js-multisuggest-item" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><span class="tag" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "title"in t ? t.title : ""), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append("</span></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_users_picker_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/users_picker_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="users-select-row">'),
                    i._parent = i;
                    var a = "rows"in i ? i.rows : ""
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
                        i.row = n,
                        i.key_id = twig.attr("row"in i ? i.row : "", "id"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        i.params = {
                            key_id: "key_id"in i ? i.key_id : "",
                            key: "key"in i ? i.key : "",
                            row: "row"in i ? i.row : ""
                        },
                        t.append('<div class="users-select-row__inner group-color-wrapper '),
                        twig.attr("row"in i ? i.row : "", "hidden") && t.append("hidden"),
                        t.append('">'),
                        new (e._get("interface/cards/leads/controls/subscribers/users_picker_users_head.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        new (e._get("interface/cards/leads/controls/subscribers/users_picker_users_body.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
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
                    return "interface_cards_leads_controls_subscribers_users_picker_users"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/users_picker_users", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.row_index = twig.attr("loop"in t ? t.loop : "", "index"),
                    "items_index"in t && t.items_index ? t.cur_items = twig.attr(twig.attr("items"in t ? t.items : "", "key_id"in t ? t.key_id : "", void 0, "array"), "items_index"in t ? t.items_index : "", void 0, "array") : t.cur_items = twig.attr("items"in t ? t.items : "", "key_id"in t ? t.key_id : "", void 0, "array"),
                    e.append('<div class="users-select__body" data-id="'),
                    e.append(twig.filter.escape(this.env_, "key_id"in t ? t.key_id : "", "light_escape", null, !0)),
                    e.append('">'),
                    t._parent = t;
                    var n = "cur_items"in t ? t.cur_items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<div class="users-picker-item users-select__body__item '),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append("users-picker-item--selected"),
                        e.append('" id="select_users__user-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('" data-group="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "group"), "light_escape", null, !0)),
                        e.append('" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('"><div class="users-picker-item__title multisuggest__suggest-item js-multisuggest-item '),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "active"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append('</div><div class="users-picker-item__pin users-picker-select"><svg class="svg-icon svg-cards--pin-dims"><use xlink:href="#cards--pin"></use></svg></div></div>')
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_users_picker_users_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/users_picker_users_body", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="users-picker-item users-picker-item--group  users-select__head group-color '),
                    "select_one"in t && t.select_one && !twig.attr("row"in t ? t.row : "", "selectable") || e.append("multisuggest__suggest-item"),
                    e.append(" "),
                    twig.attr("row"in t ? t.row : "", "selected") && e.append("users-picker-item--selected"),
                    e.append('" data-title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "title"), "light_escape", null, !0)),
                    e.append('" data-group="y" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "id"), "light_escape", null, !0)),
                    e.append('"><div class="users-picker-item__title users-select__head-title"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "title"), "light_escape", null, !0)),
                    e.append("</span></div>"),
                    "group_free_users" != twig.attr("row"in t ? t.row : "", "id") && e.append('<div class="users-picker-item__pin"><svg class="svg-icon svg-cards--pin-dims"><use xlink:href="#cards--pin"></use></svg></div>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_users_picker_users_head"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/users_picker_users_head", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="subscribers"><a href="#" class="subscribers-toggle '),
                    twig.attr("amo_chats_state"in t ? t.amo_chats_state : "", "is_full_enabled") && e.append("subscribers-toggle--default"),
                    e.append(' js-toggle">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Participants"), "light_escape", null, !0)),
                    e.append(':&nbsp;<span id="show-chat-list-length" class="js-counter">'),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append('</span></a><div class="subscribers-container js-container" style="display: none"><div class="js-view-container"></div><div class="subscribers-add js-subscriber-add"><a href="#">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add member"), "light_escape", null, !0)),
                    e.append('</a></div><div class="subscribers__overlay"><div class="button-input__spinner"><span class="button-input__spinner__icon spinner-icon"></span></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_cards_leads_controls_subscribers_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/cards/leads/controls/subscribers/wrapper", t)
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
        e._sentryDebugIds[t] = "4aee1dcd-6f6e-4931-b6d5-fcf2c182ed58",
        e._sentryDebugIdIdentifier = "sentry-dbid-4aee1dcd-6f6e-4931-b6d5-fcf2c182ed58")
    } catch (e) {}
}();
//# sourceMappingURL=84685.5160ee887aff1eee268d.js.map
