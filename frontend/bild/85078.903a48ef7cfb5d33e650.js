(window.webpackChunk = window.webpackChunk || []).push([[85078, 28617], {
    385078: (e, t, i) => {
        var n, a;
        n = [i(460159), i(284685), i(607419), i(898296), i(591880), i(295165)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        main_fields: twig.bind(this.block_main_fields, this),
                        linked: twig.bind(this.block_linked, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.main_entity_def = "companies" == ("entity_type"in t ? t.entity_type : "") ? "company" : "contact",
                    t.default_tab_selected = this.env_.filter("is_tab_selected", "tabs_groups"in t ? t.tabs_groups : "", "entity_type"in t ? t.entity_type : ""),
                    "linked_leads"in t && t.linked_leads && (t.custom_tabs = [{
                        id: "linked_leads",
                        name: this.env_.filter("i18n", "Leads")
                    }]),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("_account_features"in t ? t._account_features : "", "single_timeline") ? e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards_feedx_card.php"], this), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards_feed_card.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_main_fields = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/forms/entity_form_fields.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "main_entity",
                        main: "main"in i ? i.main : "",
                        form_action: "/ajax/" + ("entity_type"in i ? i.entity_type : "") + "/detail/",
                        form_id: "edit_card",
                        lang: "lang"in i ? i.lang : "",
                        element: "element"in i ? i.element : "",
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        user_select_items: [{
                            id: twig.attr("main"in i ? i.main : "", "main_user_id"),
                            title: twig.attr(twig.attr("main"in i ? i.main : "", "main_user"), "name")
                        }],
                        currency_short_name: "currency_short_name"in i ? i.currency_short_name : "",
                        groups: "groups_cf"in i ? i.groups_cf : "",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : ""
                    }))
                }
                ,
                t.prototype.block_linked = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        main_entity_def: "main_entity_def"in i ? i.main_entity_def : "",
                        form_action_contact: "/private/ajax/contacts/add_person/?ACTION=ADD_PERSON&template=twig",
                        form_action_company: "/private/ajax/companies/add_person/?ACTION=ADD_PERSON&template=twig",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : ""
                    })),
                    "linked_leads"in i && i.linked_leads && (t.append('<div class="linked-forms__group-wrapper js-cf-group-wrapper" data-id="linked_leads" style="display: none">'),
                    new (e._get("interface/cards/leads/holder.twig"))(this.env_).render_(t, twig.extend({}, i, "linked_leads"in i ? i.linked_leads : "")),
                    t.append("</div>")),
                    "linked_customers"in i && i.linked_customers && (t.append('<div class="linked-forms__group-wrapper js-cf-group-wrapper" id="linked_customers_tab" data-id="linked_customers" style="display: none">'),
                    new (e._get("interface/customers/holder.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        linked_customers: "linked_customers"in i ? i.linked_customers : "",
                        customers_mode: "customers_mode"in i ? i.customers_mode : ""
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/card", t)
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
                        list_top_right: twig.bind(this.block_list_top_right, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.body_class_name = "list__body__holder-table",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["contacts_list.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top">'),
                    new (e._get("interface/contacts/common/top_nav.twig"))(this.env_).render_(t, twig.extend({}, i, "element_type_toggler"in i ? i.element_type_toggler : "")),
                    new (e._get("interface/filter/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: !1,
                        search_placeholder: twig.attr("lang"in i ? i.lang : "", "list_search_in_filter")
                    })),
                    new (e._get("interface/contacts/common/top_actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    "use_per_account"in i && i.use_per_account && t.append("..."),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="content__account__note__wrapper cf_description cf-section__limits-descr" id="cf_limit_'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" style="'),
                    (-1 == twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_max_count") || twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_max_count") > twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_current_count"), "name"in i ? i.name : "", void 0, "array")) && t.append("display: none"),
                    t.append('"><div class="content__account__note cf_description"><p class="warning">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.replace(twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "tariff_limit_reached"), {
                        "#TARIFF#": twig.attr("tariff"in i ? i.tariff : "", "name")
                    }), "light_escape", null, !0)),
                    t.append("</p></div></div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "contacts",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "contacts"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "contacts"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !0
                    })),
                    t.append('<div class="card-cf__linked js-card-fields__linked-block"><div class="card-cf__linked-item"><span class="card-cf__linked-icon card-cf__linked-icon_contacts"><span class="icon icon-inline icon-company-userpic"></span></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "in_modal_caption_companies"), "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "companies",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "companies"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "companies"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    })),
                    t.append('</div><div class="js-cf-group-wrapper" data-id="linked_leads" style="display: none">'),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "leads",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "leads"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "leads"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    })),
                    t.append('</div><div class="js-cf-group-wrapper" data-id="linked_customers" style="display: none">'),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "customers",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "customers"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "customers"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_cards_custom_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/cards/custom_fields", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        status: twig.bind(this.block_status, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/form_top.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.tags_name = "contact[tags]",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_name = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "companies" == ("entity_type"in i ? i.entity_type : "") ? new (e._get("interface/cards/name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name_suggest_entity: "entity_type"in i ? i.entity_type : "",
                        input_name: "contact[NAME]",
                        profile: twig.filter.first(this.env_, twig.attr("main"in i ? i.main : "", "profiles"))
                    })) : new (e._get("interface/contacts/cards/name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name_suggest_entity: "entity_type"in i ? i.entity_type : "",
                        input_name: "contact[N]",
                        profile: twig.filter.first(this.env_, twig.attr("main"in i ? i.main : "", "profiles"))
                    }))
                }
                ,
                t.prototype.block_status = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_cards_form_top"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/cards/form_top", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        block_control: twig.bind(this.block_block_control, this)
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
                    i.tmpl_name = "is_add"in i && i.is_add ? "fullname/suggest" : "fullname/index",
                    i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        first_name: {
                            name: "contact[FN]",
                            value: twig.attr("main"in i ? i.main : "", "FIRST_NAME", void 0, void 0, !0) ? twig.filter.def(twig.attr("main"in i ? i.main : "", "FIRST_NAME"), twig.attr("main"in i ? i.main : "", "NAME")) : twig.attr("main"in i ? i.main : "", "NAME")
                        },
                        last_name: {
                            name: "contact[LN]",
                            value: twig.attr("main"in i ? i.main : "", "LAST_NAME")
                        },
                        word_width: 12,
                        comfort_zone: 0,
                        class_name: "",
                        placeholder_color: "rgba(255, 255, 255, .6)"
                    }),
                    "is_add"in i && i.is_add ? i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        input_class_name: "card-fields__top-name-input js-suggest-main-name"
                    }) : (i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        input_class_name: "card-fields__top-name-input"
                    }),
                    "disable_textarea"in i && i.disable_textarea || (i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        input_type: "textarea"
                    }))),
                    this.env_.invoke("is_contact_name_display_order_first", "") || (i.name_params = twig.filter.merge("name_params"in i ? i.name_params : "", {
                        placeholder: twig.attr("lang"in i ? i.lang : "", "placeholder_name_reversed")
                    })),
                    new (e._get("interface/controls/" + ("tmpl_name"in i ? i.tmpl_name : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, "name_params"in i ? i.name_params : ""))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_cards_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/cards/name", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__top__actions">'),
                    i.moreactions = [],
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || ("is_plug"in i ? i.is_plug : ""),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") ? i.display_add_button = "inherit" : i.display_add_button = "none",
                    i.add_buttons = {
                        context: {
                            svg_icon: "add-company",
                            href: "/companies/add/",
                            text: twig.attr("lang"in i ? i.lang : "", "button_add_company")
                        },
                        normal: {
                            text: twig.attr("lang"in i ? i.lang : "", "button_add"),
                            href: "/contacts/add/"
                        }
                    },
                    i.show_add_button = twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company"),
                    "companies" == ("selected_element_type"in i ? i.selected_element_type : "") && (twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company") ? i.display_add_button = "inherit" : i.display_add_button = "none",
                    i.add_buttons = {
                        context: {
                            svg_icon: "user",
                            href: "/contacts/add/",
                            text: twig.attr("lang"in i ? i.lang : "", "button_add")
                        },
                        normal: {
                            text: twig.attr("lang"in i ? i.lang : "", "button_add_company"),
                            href: "/companies/add/"
                        }
                    },
                    i.show_add_button = twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add")),
                    i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        print: {
                            svg_icon: "print",
                            class_name: "js-list-print",
                            text: twig.attr("lang"in i ? i.lang : "", "button_print")
                        }
                    }),
                    "show_add_button"in i && i.show_add_button && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        add_company: {
                            svg_icon: twig.attr(twig.attr("add_buttons"in i ? i.add_buttons : "", "context"), "svg_icon"),
                            href: twig.attr(twig.attr("add_buttons"in i ? i.add_buttons : "", "context"), "href"),
                            text: twig.attr(twig.attr("add_buttons"in i ? i.add_buttons : "", "context"), "text"),
                            additional_data: 'style="display:' + ("display_add_button"in i ? i.display_add_button : "") + '"'
                        }
                    })),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "export") && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        export: {
                            svg_icon: "download",
                            class_name: "js-list-export",
                            text: twig.attr("lang"in i ? i.lang : "", "button_export")
                        }
                    })),
                    (twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company")) && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        import: {
                            svg_icon: "upload",
                            class_name: "js-list-import",
                            text: twig.attr("lang"in i ? i.lang : "", "button_import")
                        }
                    })),
                    "has_items"in i && i.has_items && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        settings: {
                            svg_icon: "settings-key",
                            class_name: "js-list-settings",
                            text: twig.attr("lang"in i ? i.lang : "", "button_list_settings")
                        }
                    })),
                    i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        triggers: {
                            svg_icon: "triggers-settings",
                            class_name: "js-list-triggers",
                            text: twig.attr("lang"in i ? i.lang : "", "button_list_triggers")
                        }
                    }),
                    "companies" != ("selected_element_type"in i ? i.selected_element_type : "") && twig.attr("user_rights"in i ? i.user_rights : "", "duplicate_search") && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        merge: {
                            svg_icon: "merge",
                            class_name: "js-list-duplicate-contacts-search",
                            text: this.env_.filter("i18n", "Doubles")
                        }
                    })),
                    i.button_class_name = "content__top__action__btn-more",
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") || (i.button_class_name = ("button_class_name"in i ? i.button_class_name : "") + " no_tariff__btn-more"),
                    "moreactions"in i && i.moreactions && (twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_actions_more_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu: "moreactions"in i ? i.moreactions : "",
                        button_class_name: "button-input-more-newbie " + ("button_class_name"in i ? i.button_class_name : "")
                    })) : new (e._get("interface/common/top_actions_more.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu: "moreactions"in i ? i.moreactions : "",
                        button_class_name: "button-input-more " + ("button_class_name"in i ? i.button_class_name : "")
                    }))),
                    i.button_is_active = twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") && "contacts" == ("selected_element_type"in i ? i.selected_element_type : "") && ("contacts_limit"in i ? i.contacts_limit : "") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") && "all" == ("selected_element_type"in i ? i.selected_element_type : "") && ("contacts_limit"in i ? i.contacts_limit : "") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company") && "companies" == ("selected_element_type"in i ? i.selected_element_type : ""),
                    t.append('<a href="'),
                    "button_is_active"in i && i.button_is_active && t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("add_buttons"in i ? i.add_buttons : "", "normal"), "href"), "light_escape", null, !0)),
                    t.append('" data-href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("add_buttons"in i ? i.add_buttons : "", "normal"), "href"), "light_escape", null, !0)),
                    t.append('" class="button-input button-input_add '),
                    "button_is_active"in i && i.button_is_active ? t.append(" button-input_blue js-navigate-link") : t.append(" js-disabled button-input-disabled"),
                    t.append('"><svg class="svg-icon svg-controls--button-add-dims"><use xlink:href="#controls--button-add"></use></svg><span class="button-input-inner__text button-input-inner__text_short">'),
                    t.append(twig.filter.escape(this.env_, "companies" == ("selected_element_type"in i ? i.selected_element_type : "") ? this.env_.filter("i18n", "Company") : this.env_.filter("i18n", "Contact"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("add_buttons"in i ? i.add_buttons : "", "normal"), "text"), "light_escape", null, !0)),
                    t.append("</span></a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_common_top_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/common/top_actions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="list__top__preset">'),
                    t._parent = t;
                    var n = "items"in t ? t.items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<div class="list-top-nav__text-button-contacts list-top-nav__text-button list-top-nav__text-button_contacts list-top-nav__text-button_submenu js-list-top-nav__text-button_submenu '),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append(" "),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append("list-top-nav__text-button_active"),
                        e.append('" data-entity="catalogs" '),
                        e.append(twig.attr("item"in t ? t.item : "", "additional_data")),
                        e.append('><span class="h-text-overflow">'),
                        twig.attr("item"in t ? t.item : "", "title") ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", twig.attr("item"in t ? t.item : "", "title")), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "common_list"), "light_escape", null, !0)),
                        e.append("</span></div>")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_contacts_common_top_nav"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/contacts/common/top_nav", t)
            }()
        }
        .apply(t, n)) || (e.exports = a)
    }
    ,
    607419: (e, t, i) => {
        var n, a;
        n = [i(460159), i(284685), i(898296), i(591880), i(94849), i(295165), i(928617)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        main_fields: twig.bind(this.block_main_fields, this),
                        linked: twig.bind(this.block_linked, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.main_entity_def = "customers",
                    t.default_tab_selected = this.env_.filter("is_tab_selected", "tabs_groups"in t ? t.tabs_groups : "", "entity_type"in t ? t.entity_type : ""),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["customers.css"], this), "light_escape", null, !0)),
                    twig.attr("_account_features"in t ? t._account_features : "", "single_timeline") ? e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards_feedx_card.php"], this), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards_feed_card.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_main_fields = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/forms/entity_form_fields.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "main_entity",
                        budget: "periodicity_enabled"in i && i.periodicity_enabled ? twig.attr("main"in i ? i.main : "", "next_price", void 0, "array") : twig.attr("main"in i ? i.main : "", "ltv", void 0, "array"),
                        budget_raw: "periodicity_enabled"in i && i.periodicity_enabled ? twig.attr("main"in i ? i.main : "", "~next_price", void 0, "array") : twig.attr("main"in i ? i.main : "", "ltv", void 0, "array"),
                        budget_name: "periodicity_enabled"in i && i.periodicity_enabled ? "next_price" : "ltv",
                        main_entity_def: "main_entity_def"in i ? i.main_entity_def : "",
                        currency_short_name: "currency_short_name"in i ? i.currency_short_name : "",
                        budget_placeholder: "budget_placeholder"in i && i.budget_placeholder ? "budget_placeholder"in i ? i.budget_placeholder : "" : 0,
                        form_action: "/ajax/v1/customers/set/",
                        form_id: "edit_card",
                        main: "main"in i ? i.main : "",
                        element: "element"in i ? i.element : "",
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        groups: "groups_cf"in i ? i.groups_cf : "",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : "",
                        lang: "lang"in i ? i.lang : ""
                    }))
                }
                ,
                t.prototype.block_linked = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        main_entity_def: "main_entity_def"in i ? i.main_entity_def : "",
                        form_action_contact: "/private/ajax/contacts/add_person/?ACTION=ADD_PERSON&from=customers",
                        form_action_company: "/private/ajax/companies/add_person/?ACTION=ADD_PERSON&from=customers",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/card", t)
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
                    if (n = void 0 === n ? {} : n,
                    t.append('<div class="card-fields__linked-block-item card-fields__linked-block-item_customers"><div class="card-customers js-card-customers"><div class="card-customers__wrapper js-card-customers-wrapper">'),
                    "periodicity" == ("customers_mode"in i ? i.customers_mode : "")) {
                        if (!twig.empty(twig.attr(twig.attr("linked_customers"in i ? i.linked_customers : "", "items"), "active"))) {
                            t.append('<div class="card-customers__won-lost-top card-customers__won-lost__won">'),
                            t.append(twig.filter.escape(this.env_, twig.filter.upper(this.env_, this.env_.filter("i18n", "Expected")), "light_escape", null, !0)),
                            t.append("</div>"),
                            i._parent = i;
                            var a = twig.attr(twig.attr("linked_customers"in i ? i.linked_customers : "", "items"), "active")
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
                                i.customer = n,
                                new (e._get("interface/cards/customers/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    customer_info: {
                                        id: twig.attr("customer"in i ? i.customer : "", "id"),
                                        name: twig.attr("customer"in i ? i.customer : "", "name"),
                                        customer_mark: twig.attr("customer"in i ? i.customer : "", "customer_mark"),
                                        budget_formatted: this.env_.filter("price", twig.attr("customer"in i ? i.customer : "", "next_price"))
                                    },
                                    periodicity: !0,
                                    period: twig.attr("customer"in i ? i.customer : "", "next_date"),
                                    period_class: "card-customers__won-lost__won"
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
                        twig.empty(twig.attr(twig.attr("linked_customers"in i ? i.linked_customers : "", "items"), "not_bought")) || (t.append('<div class="card-customers__won-lost-top card-customers__won-lost__not-bought">'),
                        t.append(twig.filter.escape(this.env_, twig.filter.upper(this.env_, this.env_.filter("i18n", "Did not purchase")), "light_escape", null, !0)),
                        t.append("</div>"),
                        i._parent = i,
                        a = twig.attr(twig.attr("linked_customers"in i ? i.linked_customers : "", "items"), "not_bought"),
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
                            i.customer = n,
                            new (e._get("interface/cards/customers/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                customer_info: {
                                    id: twig.attr("customer"in i ? i.customer : "", "id"),
                                    name: twig.attr("customer"in i ? i.customer : "", "name"),
                                    customer_mark: twig.attr("customer"in i ? i.customer : "", "customer_mark"),
                                    budget_formatted: this.env_.filter("price", twig.attr("customer"in i ? i.customer : "", "next_price"))
                                },
                                periodicity: !0,
                                period: twig.attr("customer"in i ? i.customer : "", "next_date"),
                                period_class: "card-customers__won-lost__not-bought"
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)),
                        twig.empty(twig.attr(twig.attr("linked_customers"in i ? i.linked_customers : "", "items"), "lost")) || (t.append('<div class="card-customers__won-lost__lost"><div class="card-customers__won-lost-top">'),
                        t.append(twig.filter.escape(this.env_, twig.filter.upper(this.env_, this.env_.filter("i18n", "Closed")), "light_escape", null, !0)),
                        t.append("</div>"),
                        i._parent = i,
                        a = twig.attr(twig.attr("linked_customers"in i ? i.linked_customers : "", "items"), "lost"),
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
                            i.customer = n,
                            new (e._get("interface/cards/customers/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                customer_info: {
                                    id: twig.attr("customer"in i ? i.customer : "", "id"),
                                    name: twig.attr("customer"in i ? i.customer : "", "name"),
                                    customer_mark: twig.attr("customer"in i ? i.customer : "", "customer_mark"),
                                    budget_formatted: this.env_.filter("price", twig.attr("customer"in i ? i.customer : "", "next_price"))
                                },
                                periodicity: !0,
                                period: twig.attr("customer"in i ? i.customer : "", "next_date"),
                                period_class: "card-customers__won-lost__lost"
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append("</div>"))
                    } else
                        i._parent = i,
                        a = "linked_customers"in i ? i.linked_customers : "",
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
                            i.customer = n,
                            new (e._get("interface/cards/customers/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                customer_info: {
                                    id: twig.attr("customer"in i ? i.customer : "", "id"),
                                    name: twig.attr("customer"in i ? i.customer : "", "name"),
                                    customer_mark: twig.attr("customer"in i ? i.customer : "", "customer_mark"),
                                    budget_formatted: this.env_.filter("price", twig.attr("customer"in i ? i.customer : "", "next_price"))
                                },
                                periodicity: !1,
                                period: twig.attr("customer"in i ? i.customer : "", "next_date"),
                                period_class: "card-customers__won-lost__lost"
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this);
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_holder"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/holder", t)
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
                    t.body_class_name = "list__body__holder-table",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["customers.css", "customers_list.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top">'),
                    new (e._get("interface/customers/common/top_nav.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: {
                            list: !0
                        },
                        periodicity_enabled: "periodicity_enabled"in i ? i.periodicity_enabled : ""
                    })),
                    new (e._get("interface/customers/common/top_actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        periodicity_enabled: "periodicity_enabled"in i ? i.periodicity_enabled : "",
                        is_list: !0,
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (e._get("interface/filter/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        periodicity_enabled: "periodicity_enabled"in i ? i.periodicity_enabled : "",
                        show_segments: !0,
                        main_filter: "filter"in i ? i.filter : "",
                        id: !1,
                        search_placeholder: this.env_.filter("i18n", "Search and filter"),
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    "use_per_account"in i && i.use_per_account && t.append("..."),
                    t.append("</div>")
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/list/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : "",
                        width: twig.attr("settings"in i ? i.settings : "", "width")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/customers/pipeline/page.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="content__account__note__wrapper cf_description cf-section__limits-descr" id="cf_limit_'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" style="'),
                    (-1 == twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_max_count") || twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_max_count") > twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_current_count"), "name"in i ? i.name : "", void 0, "array")) && t.append("display: none"),
                    t.append('"><div class="content__account__note cf_description"><p class="warning">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.replace(twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "tariff_limit_reached"), {
                        "#TARIFF#": twig.attr("tariff"in i ? i.tariff : "", "name")
                    }), "light_escape", null, !0)),
                    t.append("</p></div></div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "customers",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "customers"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "customers"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !0
                    })),
                    t.append('<div class="card-cf__linked js-card-fields__linked-block"><div class="card-cf__linked-item"><span class="card-cf__linked-icon card-cf__linked-icon_contacts"><svg class="svg-icon svg-common--contacts-dims"><use xlink:href="#common--contacts"></use></svg></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "in_modal_caption_contacts"), "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "contacts",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "contacts"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "contacts"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    })),
                    twig.attr("_account_features"in i ? i._account_features : "", "companies_available") && (t.append('<div class="card-cf__linked-item"><span class="card-cf__linked-icon"><span class="icon icon-inline icon-company-userpic"></span></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "in_modal_caption_companies"), "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "companies",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "companies"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "companies"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    }))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_cards_custom_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/cards/custom_fields", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        status: twig.bind(this.block_status, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/form_top.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.tags_name = "customers[tags]",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_name = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name_suggest_entity: "entity_type"in i ? i.entity_type : "",
                        input_name: "name"
                    }))
                }
                ,
                t.prototype.block_status = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.is_editable = ("grant_edit"in i ? i.grant_edit : "") || ("is_add"in i ? i.is_add : ""),
                    t.append('<div class="linked-form__field linked-form__field_status linked-form__field_status-customer '),
                    "periodicity_enabled"in i && i.periodicity_enabled || t.append("linked-form__field_segments-customer"),
                    t.append('"><div class="linked-form__field__value js-cf-readonly">'),
                    "periodicity_enabled"in i && i.periodicity_enabled ? new (e._get("interface/controls/customers/select_with_progress.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        editable: "is_editable"in i ? i.is_editable : "",
                        periodicity: twig.attr("main"in i ? i.main : "", "periodicity"),
                        next_date_timestamp: twig.attr("main"in i ? i.main : "", "~next_date", void 0, "array"),
                        next_date: twig.attr("main"in i ? i.main : "", "next_date"),
                        interval: twig.attr("main"in i ? i.main : "", "interval"),
                        intervals: "intervals"in i ? i.intervals : ""
                    })) : (t.append('<div id="suggest_segments" class="suggest-segments__wrapper '),
                    "is_editable"in i && i.is_editable && !this.env_.invoke("is_account_blocked") || t.append("suggest-segments_not-editable"),
                    t.append('">'),
                    new (e._get("interface/filter/customers/suggest_segments/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("main"in i ? i.main : "", "segments"),
                        id: "customer_segments",
                        input_name: "customer_segments",
                        modify_class: "suggest-segments_is-card",
                        loader_hidden: !0
                    })),
                    t.append("</div>")),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_cards_form_top"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/cards/form_top", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        extend: twig.bind(this.block_extend, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/modal/add_entity/add_entity.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_extend = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="make-purchase"><div class="make-purchase__inner"><div class="make-purchase__fields"><div class="make-purchase__fields-col_left"><div class="make-purchase__field-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Next purchase"), "light_escape", null, !0)),
                    t.append('</div></div><div class="make-purchase__fields-col_right"><div class="make-purchase__field-value">'),
                    new (e._get("interface/customers/pipeline/select_with_data.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_add: !1,
                        periodicity_name: "periodicity",
                        next_date_name: "next_date",
                        periodicity: "period_duration"in i ? i.period_duration : "",
                        next_date: "next_date"in i ? i.next_date : ""
                    })),
                    t.append("</div></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_common_add_entity_customer"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/common/add_entity_customer", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
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
                    t.append('<div class="list__top__actions">'),
                    "more_actions"in i && i.more_actions) {
                        if (i.button_class_name = "content__top__action__btn-more content__top__action__btn-more_tong",
                        twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "customers"), "add") || (i.button_class_name = ("button_class_name"in i ? i.button_class_name : "") + " no_tariff__btn-more"),
                        i.setup_button_class_name = "list-top-nav__button-setup__" + ("user_rank"in i ? i.user_rank : ""),
                        "periodicity_enabled"in i && i.periodicity_enabled ? i.link = "/settings/pipeline/customers" : i.link = "/customers/segments",
                        i.more_actions = twig.filter.merge({
                            pipeline_settings: {
                                svg_icon: "settings",
                                text: "periodicity_enabled"in i && i.periodicity_enabled ? twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline") : twig.attr("lang"in i ? i.lang : "", "Segments"),
                                class_name: ("master" != ("user_rank"in i ? i.user_rank : "") ? "setup_button_class_name"in i ? i.setup_button_class_name : "" : "list-top-nav__button-setup") + "_context",
                                href: "link"in i ? i.link : ""
                            }
                        }, "more_actions"in i ? i.more_actions : ""),
                        twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_full_enabled")) {
                            i.more_actions_with_sources = [],
                            i._parent = i;
                            var a = "more_actions"in i ? i.more_actions : "";
                            twig.forEach(a, (function(e, t) {
                                i._key = t,
                                i.item = e,
                                i.more_actions_with_sources = twig.filter.merge("more_actions_with_sources"in i ? i.more_actions_with_sources : "", ["item"in i ? i.item : ""])
                            }
                            ), this),
                            i.sources = [{
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
                            i.more_actions_with_sources = twig.filter.merge("more_actions_with_sources"in i ? i.more_actions_with_sources : "", "sources"in i ? i.sources : ""),
                            i.more_actions = "more_actions_with_sources"in i ? i.more_actions_with_sources : ""
                        }
                        twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_actions_more_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            context_menu: "more_actions"in i ? i.more_actions : "",
                            button_class_name: "button-input-more-newbie " + ("button_class_name"in i ? i.button_class_name : ""),
                            context_menu_class_name: "context-menu-pipeline context-menu-pipeline__newbie"
                        })) : new (e._get("interface/common/top_actions_more.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            context_menu: "more_actions"in i ? i.more_actions : "",
                            button_class_name: "button-input-more " + ("button_class_name"in i ? i.button_class_name : ""),
                            context_menu_class_name: "context-menu-pipeline"
                        }))
                    }
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "link"in i ? i.link : "", "light_escape", null, !0)),
                    t.append('" class="js-navigate-link list-top-nav__button-setup '),
                    "master" != ("user_rank"in i ? i.user_rank : "") ? t.append(twig.filter.escape(this.env_, "setup_button_class_name"in i ? i.setup_button_class_name : "", "light_escape", null, !0)) : t.append(""),
                    t.append('"><span class="button-input button-input_add">'),
                    "periodicity_enabled"in i && i.periodicity_enabled ? (t.append('<span class="button-input-inner__text button-input-inner__text_short-settings">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "button_setup"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline"), "light_escape", null, !0)),
                    t.append("</span>")) : (t.append('<span class="button-input-inner__text button-input-inner__text_short-settings">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Segments"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Segments"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</span></a>")),
                    t.append('<a href="'),
                    "add_button_active"in i && i.add_button_active && t.append("/customers/add/"),
                    t.append('" data-href="/customers/add/" class="js-add_customer_btn button-input button-input_add '),
                    "add_button_active"in i && i.add_button_active ? t.append(" button-input_blue js-navigate-link") : t.append(" js-disabled button-input-disabled"),
                    t.append('"><svg class="svg-icon svg-controls--button-add-dims"><use xlink:href="#controls--button-add"></use></svg><span class="button-input-inner__text button-input-inner__text_short '),
                    "newbie" == ("user_rank"in i ? i.user_rank : "") && t.append("button-input-inner__text_short__newbie"),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customer"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "New customer"), "light_escape", null, !0)),
                    t.append("</span></a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_common_top_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/common/top_actions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__top__preset"><div class="list-top-nav__text-button list-top-nav__text-button_funnel list-top-nav__text-button-customers '),
                    twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_full_enabled") && t.append("list-top-nav__text-button_default"),
                    t.append('"><span class="clip-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customers"), "light_escape", null, !0)),
                    t.append("</span></div>"),
                    "periodicity_enabled"in i && i.periodicity_enabled && new (e._get("interface/common/top_nav_view.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: "selected"in i ? i.selected : "",
                        pipeline_link: "/customers/pipeline",
                        list_link: "/customers/list"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_common_top_nav"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/common/top_nav", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        column: twig.bind(this.block_column, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/pipeline/body.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_column = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.has_items = twig.attr(twig.attr("summary"in i ? i.summary : "", "total"), "count") > 0,
                    "has_items"in i && i.has_items || (twig.attr(twig.attr(twig.attr("filter"in i ? i.filter : "", "items"), "without_tasks"), "selected") && "no_items_tmpl"in i && i.no_items_tmpl ? new (e._get("no_items_tmpl"in i ? i.no_items_tmpl : ""))(this.env_).render_(t, i) : "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || (i.no_results = !0)),
                    i.is_first_before = !0,
                    i._parent = i;
                    var a = "columns"in i ? i.columns : ""
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
                        i.column = n,
                        i.column_class_name = "",
                        i.last_class_name = "",
                        "recently" === twig.attr("column"in i ? i.column : "", "type") || 4 == twig.attr("column"in i ? i.column : "", "type") ? i.column_class_name = "rescent_purchase" : "today" === twig.attr("column"in i ? i.column : "", "type") || 1 == twig.attr("column"in i ? i.column : "", "type") ? i.column_class_name = "today" : "after" === twig.attr("column"in i ? i.column : "", "type") || 2 == twig.attr("column"in i ? i.column : "", "type") ? i.column_class_name = "has_not_purchase" : "before" === twig.attr("column"in i ? i.column : "", "type") ? i.column_class_name = "before" : "closed" === twig.attr("column"in i ? i.column : "", "type") || 3 == twig.attr("column"in i ? i.column : "", "type") ? i.column_class_name = "closed" : i.column_class_name = "",
                        i.key_id = "key"in i ? i.key : "",
                        i.show_tour = twig.attr(twig.attr(s, "parent"), "show_tour"),
                        i.row_index = twig.attr(s, "index"),
                        "before" == twig.attr("column"in i ? i.column : "", "type") && "today" == twig.attr(twig.attr("columns"in i ? i.columns : "", Number(twig.attr(s, "index0")) + Number(1), void 0, "array"), "type") && (i.last_class_name = "before-last"),
                        "has_items"in i && i.has_items || !(twig.attr(s, "index") <= 2) || "pipeline" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || !("use_filter"in i) || !i.use_filter || (t.append('<div class="pipeline__no-items"><p>'),
                        "pipeline" == ("entity"in i ? i.entity : "") ? (t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results"), "light_escape", null, !0)),
                        t.append(" ")) : "todo" == ("entity"in i ? i.entity : "") && (t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results_todo"), "light_escape", null, !0)),
                        t.append(" ")),
                        t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                        t.append('?skip_filter=Y" class="js-navigate-link" title="">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_reset_filter"), "light_escape", null, !0)),
                        t.append("</a></p></div>")),
                        t.append('<div class="js-pipeline_status pipeline_status pipeline_cell pipeline_cell-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "ID"), "light_escape", null, !0)),
                        "column_class_name"in i && i.column_class_name && (t.append(" pipeline_cell-"),
                        t.append(twig.filter.escape(this.env_, "column_class_name"in i ? i.column_class_name : "", "light_escape", null, !0)),
                        t.append(" js-"),
                        t.append(twig.filter.escape(this.env_, "column_class_name"in i ? i.column_class_name : "", "light_escape", null, !0))),
                        "last_class_name"in i && i.last_class_name && (t.append(" pipeline_cell-"),
                        t.append(twig.filter.escape(this.env_, "last_class_name"in i ? i.last_class_name : "", "light_escape", null, !0))),
                        t.append('"><div class="pipeline_cell-head pipeline_cell-head-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "ID"), "light_escape", null, !0)),
                        t.append(" pipeline_cell-head-group-"),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append(" "),
                        "column_class_name"in i && i.column_class_name && (t.append("pipeline_cell-head-"),
                        t.append(twig.filter.escape(this.env_, "column_class_name"in i ? i.column_class_name : "", "light_escape", null, !0))),
                        t.append(" "),
                        "last_class_name"in i && i.last_class_name && (t.append("pipeline_cell-head-"),
                        t.append(twig.filter.escape(this.env_, "last_class_name"in i ? i.last_class_name : "", "light_escape", null, !0))),
                        t.append('">'),
                        new (e._get("interface/customers/pipeline/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            key: "key"in i ? i.key : "",
                            row: "column"in i ? i.column : "",
                            is_last: twig.attr(s, "is_last"),
                            is_first: twig.attr(s, "is_first"),
                            is_first_before: "before" == twig.attr("column"in i ? i.column : "", "type") && ("is_first_before"in i ? i.is_first_before : "")
                        })),
                        t.append("</div>"),
                        "before" == twig.attr("column"in i ? i.column : "", "type") && (i.is_first_before = !1),
                        t.append('<div class="pipeline_items__list js-pipeline-row '),
                        twig.attr("column"in i ? i.column : "", "disable_drop") && t.append("js-pipeline-no-drop"),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "id"), "light_escape", null, !0)),
                        t.append('" data-period="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "to"), "light_escape", null, !0)),
                        t.append('" data-type="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "type"), "light_escape", null, !0)),
                        t.append('" data-period-from="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "from"), "light_escape", null, !0)),
                        t.append('" data-period-duration="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("column"in i ? i.column : "", "length"), "light_escape", null, !0)),
                        t.append('">');
                        var r = twig.attr("column"in i ? i.column : "", "rows")
                          , _ = {
                            parent: s,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(r)) {
                            var p = twig.count(r);
                            _.revindex0 = p - 1,
                            _.revindex = p,
                            _.length = p,
                            _.last = 1 === p
                        }
                        twig.forEach(r, (function(n, a) {
                            i._key = a,
                            i.row = n,
                            new (e._get("interface/customers/pipeline/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                row: "column"in i ? i.column : "",
                                item: "row"in i ? i.row : "",
                                row_index: "row_index"in i ? i.row_index : ""
                            })),
                            ++_.index0,
                            ++_.index,
                            _.first = !1,
                            _.length && (--_.revindex0,
                            --_.revindex,
                            _.last = 0 === _.revindex0)
                        }
                        ), this),
                        t.append("</div></div>"),
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
                    return "interface_customers_pipeline_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/body", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "period"in i && i.period || (t.append(" "),
                    i.period = "row"in i ? i.row : "",
                    t.append(" ")),
                    t.append('<div id="status_id_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "id"), "light_escape", null, !0)),
                    t.append('" class="pipeline_status__head"><div class="pipeline_status__head_title" title="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.upper(this.env_, twig.attr("period"in i ? i.period : "", "name")), "light_escape", null, !0)),
                    t.append('"><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.upper(this.env_, twig.attr("period"in i ? i.period : "", "name")), "light_escape", null, !0)),
                    t.append('</span></div><div class="pipeline_status__head_info js-fixed-header-stats" style="opacity: 1; max-height: 20px;"><div class="block-selectable js-header-summary">'),
                    new (e._get("interface/customers/pipeline/header_summary_tmpl.twig"))(this.env_).render_(t, twig.extend({}, i, twig.attr("period"in i ? i.period : "", "summary"))),
                    t.append('</div></div><span class="pipeline_status__head_line" style="background: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "color"), "light_escape", null, !0)),
                    t.append("; color: "),
                    t.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "color"), "light_escape", null, !0)),
                    t.append(';"></span></div>'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "status_chckbx_" + twig.attr("row"in i ? i.row : "", "id"),
                        value: twig.attr("row"in i ? i.row : "", "id"),
                        class_name: "pipeline_status__head-checkbox"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<span class="pipeline_status__head_info__count js-count" data-count="'),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append('">\x3c!----\x3e'),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), "count"in t ? t.count : ""), "light_escape", null, !0)),
                    e.append(':</span>\x3c!----\x3e<span class="pipeline_status__head_info__sum js-price" data-price="'),
                    e.append(twig.filter.escape(this.env_, "next_price"in t ? t.next_price : "", "light_escape", null, !0)),
                    e.append('">\x3c!----\x3e'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "next_price"in t ? t.next_price : ""), "light_escape", null, !0)),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_header_summary_tmpl"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/header_summary_tmpl", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        inner: twig.bind(this.block_inner, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("inner", t, i))
                }
                ,
                t.prototype.block_inner = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/customers/pipeline/main.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "class_name"in i ? i.class_name : "",
                        no_items_tmpl: "interface/customers/pipeline/no_items_tmpl.twig"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/customers/pipeline/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr("item"in i ? i.item : "", "can_edit", void 0, void 0, !0) && (i.can_edit = twig.attr("item"in i ? i.item : "", "can_edit")),
                    twig.attr("item"in i ? i.item : "", "can_delete", void 0, void 0, !0) && (i.can_delete = twig.attr("item"in i ? i.item : "", "can_delete")),
                    t.append('<div id="pipeline_item_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('" class="pipeline_leads__item pipeline_customers__item js-hs-prevent '),
                    "can_edit"in i && i.can_edit && t.append("js-pipeline-sortable pipeline_leads__item-sortable js-can_edit"),
                    t.append(" "),
                    "can_delete"in i && i.can_delete && t.append("js-can_delete"),
                    t.append(" "),
                    "class_name"in i && i.class_name && t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('" data-next-date="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "next_date"), "light_escape", null, !0)),
                    t.append('" data-next-price="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "next_price"), "light_escape", null, !0)),
                    t.append('" data-period-duration="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "periodicity"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/customers/pipeline/item_inner.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "after" == twig.attr("row"in i ? i.row : "", "type") ? i.next_purchase_lang = "Purchase" : i.next_purchase_lang = "Next purchase",
                    null !== twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "contact"), "name") && (i.prepared_contact_name = this.env_.filter("contact_name", twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "contact"), "name"))),
                    i.has_linked_entities = "prepared_contact_name"in i ? twig.filter.def("prepared_contact_name"in i ? i.prepared_contact_name : "", twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "name")) : twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "name"),
                    "has_linked_entities"in i && i.has_linked_entities && (t.append('<div class="pipeline_leads__top-block"><div class="pipeline_leads__linked-entities">'),
                    "can_edit"in i && i.can_edit || t.append('<svg class="svg-icon pipeline_leads__item_mover_lock svg-leads--lock-dims"><use xlink:href="#leads--lock"></use></svg>'),
                    "prepared_contact_name"in i && t.append(twig.filter.escape(this.env_, "prepared_contact_name"in i ? i.prepared_contact_name : "", "light_escape", null, !0)),
                    t.append("\x3c!----\x3e"),
                    twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "name") && "prepared_contact_name"in i && i.prepared_contact_name && t.append(", "),
                    twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "name") && (t.append('<span class="pipeline_leads__linked-entities_company">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "name"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</div></div>")),
                    t.append('<div class="pipeline_leads__lead-title">'),
                    "has_linked_entities"in i && i.has_linked_entities || "can_edit"in i && i.can_edit || t.append('<svg class="svg-icon pipeline_leads__item_mover_lock svg-leads--lock-dims"><use xlink:href="#leads--lock"></use></svg>'),
                    t.append('<a class="pipeline_leads__lead-title-text h-text-overflow js-navigate-link" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "name"), "text"), "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "name"), "url"), "light_escape", null, !0)),
                    t.append('" id="lead_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr(twig.attr("item"in i ? i.item : "", "name"), "text"), twig.attr("item"in i ? i.item : "", "id")), "light_escape", null, !0)),
                    t.append('</a></div><div class="pipeline_leads__purchase-block js-purchase-block"><div class="pipeline_leads__purchase-info">'),
                    twig.attr("item"in i ? i.item : "", "next_date") && (t.append('<div class="pipeline_leads__purchases"><div class="pipeline_customers__item-next-date"><span class="pipeline_customers__item-next-date_label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "next_purchase_lang"in i ? i.next_purchase_lang : ""), "light_escape", null, !0)),
                    t.append('</span>: <b class="pipeline_customers__item-next-date_value">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("item"in i ? i.item : "", "next_date"), "date_short"), "light_escape", null, !0)),
                    t.append('</b></div><div class="pipeline_customers__item-before-close" '),
                    "after" === twig.attr("row"in i ? i.row : "", "type") && 2 !== twig.attr("row"in i ? i.row : "", "type") || t.append('style="display: none;"'),
                    t.append('><span class="pipeline_customers__item-before-close_label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Before closing"), "light_escape", null, !0)),
                    t.append('</span>: <b class="pipeline_customers__item-before-close_value">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "before_close"), "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "todo_marker_days"), "light_escape", null, !0)),
                    t.append("</b></div></div>")),
                    t.append("</div></div>"),
                    t.append('<div class="pipeline_leads__middle-block '),
                    twig.filter.length(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")) > 0 && t.append("pipeline_leads__middle-block_has-tags"),
                    t.append('">'),
                    twig.attr("item"in i ? i.item : "", "next_price") && twig.attr("item"in i ? i.item : "", "next_price") > 0 && (t.append('<span class="pipeline_leads__price h-text-overflow pipeline_customers__item-next-price-value" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "next_purchase_lang"in i ? i.next_purchase_lang : ""), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "for the sum of"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("item"in i ? i.item : "", "next_price")), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("item"in i ? i.item : "", "next_price")), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<div class="pipeline_leads__tags">'),
                    new (e._get("interface/controls/tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items"),
                        can_edit: "can_edit"in i ? i.can_edit : ""
                    })),
                    twig.attr("item"in i ? i.item : "", "lead_mark") && (t.append('<span class="pipeline_leads__task-days pipeline_leads__task-days_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lead_mark"), "light_escape", null, !0)),
                    t.append('">'),
                    "yellow" == twig.attr("item"in i ? i.item : "", "lead_mark") ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "No To-dos"), "light_escape", null, !0)) : "green" == twig.attr("item"in i ? i.item : "", "lead_mark") ? t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "now", "date"), "light_escape", null, !0)) : "red" == twig.attr("item"in i ? i.item : "", "lead_mark") && twig.attr("item"in i ? i.item : "", "lead_mark_days") && (t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lead_mark_days"), "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "todo_marker_days"), "light_escape", null, !0))),
                    t.append("</span>")),
                    t.append("</div>"),
                    t.append('<div class="pipeline_leads__tasks">'),
                    twig.attr("item"in i ? i.item : "", "lead_mark") && ("yellow" == twig.attr("item"in i ? i.item : "", "lead_mark") ? i.mark_title = this.env_.filter("i18n", "No todo assigned") : "green" == twig.attr("item"in i ? i.item : "", "lead_mark") ? i.mark_title = this.env_.filter("i18n", "To-do for today assigned") : "red" == twig.attr("item"in i ? i.item : "", "lead_mark") && (i.mark_title = this.env_.filter("i18n", "To-do expired")),
                    t.append('<span class="pipeline_leads__task-icon pipeline_leads__task-icon_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lead_mark"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "mark_title"in i ? i.mark_title : "", "light_escape", null, !0)),
                    t.append('"></span>')),
                    t.append("</div></div>"),
                    twig.attr("item"in i ? i.item : "", "last_message") && new (e._get("interface/pipeline/chat_message.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("item"in i ? i.item : "", "last_message"), {
                        has_tags: twig.filter.length(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")) > 0
                    }))),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "customer_" + twig.attr("item"in i ? i.item : "", "id"),
                        value: twig.attr("item"in i ? i.item : "", "id"),
                        class_name: "pipeline_leads__lead-checkbox",
                        checked: twig.attr("item"in i ? i.item : "", "is_checked")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_item_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/item_inner", t)
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
                    return e._get("interface/pipeline/bidirectional_scroll_page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/customers/pipeline/body.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_main"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/main", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="pipeline_leads__load_more js-pipeline-load-more '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" '),
                    "shown"in t && t.shown || e.append('style="display:none;"'),
                    e.append('><span class="pipeline_leads__load_more__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "pipeline_leads_show_more"), "light_escape", null, !0)),
                    e.append('</span><span class="pipeline_leads__load_more__spinner spinner-icon spinner-icon-abs-center"></span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_more_tmpl"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/more_tmpl", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/customers/plug/well_done.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("filter"in i ? i.filter : "", "url")
                    })),
                    new (e._get("interface/customers/plug/fake_pipeline.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_no_items_tmpl"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/no_items_tmpl", t)
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
                    return e._get("interface/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.list_type = "pipeline",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["customers.css", "customers_pipeline.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top">'),
                    new (e._get("interface/customers/common/top_nav.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: {
                            pipe: !0
                        },
                        periodicity_enabled: "periodicity_enabled"in i ? i.periodicity_enabled : ""
                    })),
                    new (e._get("interface/filter/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: !1,
                        search_placeholder: this.env_.filter("i18n", "Search and filter"),
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (e._get("interface/customers/common/top_actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    "use_per_account"in i && i.use_per_account && t.append("..."),
                    t.append("</div>")
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/customers/pipeline/inner.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/customers/pipeline/more_tmpl.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "leads_pipeline_load_more",
                        class_name: "leads-pipeline__autoload-load-more",
                        shown: !0
                    })),
                    t.append('<div class="list__footer footer__pipeline"><div class="pipeline_manage" id="pipeline_manage"><div class="pipeline_manage__item js-need_right_for_delete pipeline_manage__item_del js-pipeline-droppable" data-action="delete" data-status-id="delete"><span class="icon icon-trash"></span></div><div class="pipeline_manage__item js-need_right_for_edit pipeline_manage__item_lost js-pipeline-droppable" data-action="close" data-status-id="143" id="status_id_143"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Close"), "light_escape", null, !0)),
                    t.append('</span></div><div class="pipeline_manage__item js-need_right_for_edit pipeline_manage__item_won js-pipeline-droppable" data-action="purchase" data-status-id="purchase" id="status_id_142" ><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase"), "light_escape", null, !0)),
                    t.append("</span></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        make_purchase_button: twig.bind(this.block_make_purchase_button, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/customers/select_with_data.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_make_purchase_button = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_select_with_data"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/select_with_data", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="js-scroll-container list__table '),
                    "has_items"in t && t.has_items || e.append("list__table-no-items"),
                    e.append(' js-list-plug" '),
                    "width"in t && t.width && (e.append('style="min-width: '),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append('px"')),
                    e.append(">"),
                    t._parent = t;
                    var n = twig.range(1, 9)
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
                        t.line_number = twig.attr(a, "index"),
                        e.append('<div class="list-row js-list-row">');
                        var s = "fields"in t ? t.fields : ""
                          , r = {
                            parent: a,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        twig.forEach(s, (function(i, n) {
                            t._key = n,
                            t.field = i,
                            twig.attr("field"in t ? t.field : "", "shown") && (e.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "template"), "light_escape", null, !0)),
                            e.append(" list-row__cell-"),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                            e.append('"><div class="content-table__item__inner">'),
                            ("line_number"in t ? t.line_number : "") < 5 && (e.append("<div class='plug__item__line "),
                            1 == twig.attr(r, "index") ? e.append("blue_line") : e.append("grey_line"),
                            e.append("' style=\"width: "),
                            e.append(twig.filter.escape(this.env_, twig.functions.random(this.env_, twig.range(40, 90)), "light_escape", null, !0)),
                            e.append('%;"></div>')),
                            e.append("</div></div>"),
                            ++r.index0,
                            ++r.index,
                            r.first = !1)
                        }
                        ), this),
                        e.append("</div>"),
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
                    return "interface_customers_plug_fake_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/plug/fake_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="pipeline_wrapper pipeline_row">'),
                    t._parent = t;
                    var n = "rows"in t ? t.rows : ""
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
                        t.key = n,
                        t.row = i,
                        e.append('<div class="pipeline_status pipeline_cell"><div class="pipeline_items__list js-pipeline-row" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "ID"), "light_escape", null, !0)),
                        e.append('">'),
                        t.lines_count = {
                            1: 4,
                            2: 2,
                            3: 1,
                            4: 3
                        },
                        t.step = twig.attr(a, "index");
                        var s = twig.range(1, twig.attr("lines_count"in t ? t.lines_count : "", "step"in t ? t.step : "", void 0, "array"));
                        twig.forEach(s, (function(i, n) {
                            t._key = n,
                            t.i = i,
                            e.append('<div class="pipeline_leads__item"><div class="pipeline_leads__item_data"><div class="plug__item__line leads_plug_item blue_line" style="width: 60%;"></div></div><div class="pipeline_leads__item_contacts"><div class="pipeline_leads__linked-entities"><div class="plug__item__line leads_plug_item" style="width: 90px;"></div><div class="plug__item__line leads_plug_item" style="width: 90px;"></div></div></div></div>')
                        }
                        ), this),
                        e.append("</div></div>"),
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
                    return "interface_customers_plug_fake_pipeline"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/plug/fake_pipeline", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="page__list_plug__wrapper"><div class="page__list_plug__content"><div class="page__list_plug__logo"></div><span class="page__list_plug__caption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "plug_well_done_caption"), "light_escape", null, !0)),
                    e.append('</span><span class="page__list_plug__text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "plug_well_done_text"), "light_escape", null, !0)),
                    e.append('</span><span class="page__list_plug__link"><a href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('" class="js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "plug_well_done_link"), "light_escape", null, !0)),
                    e.append("</a></span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_plug_well_done"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/plug/well_done", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="make-purchase"><div class="make-purchase__inner"><div class="make-purchase__header"><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase"), "light_escape", null, !0)),
                    t.append('</h2><div class="make-purchase__buttons modal-body__actions">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Confirm"),
                        class_name: "make-purchase__save js-make-purchase-save button-input_blue js-button-with-loader",
                        id: "make-purchase-save",
                        disabled: !1
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel"),
                        class_name: "make-purchase__cancel js-make-purchase-cancel"
                    })),
                    t.append('</div></div><p class="modal-body__paragraph-text">'),
                    "periodicity_enabled"in i && i.periodicity_enabled ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchase description"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Specify the sum of purchase"), "light_escape", null, !0)),
                    t.append('</p><form class="make-purchase__form" action="/ajax/v1/customers/set/" method="post"><input type="hidden" name="id" value="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"><div class="make-purchase__fields"><div class="make-purchase__fields-col_left"><div class="make-purchase__field-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sales value"), "light_escape", null, !0)),
                    t.append("</div>"),
                    "periodicity_enabled"in i && i.periodicity_enabled && (t.append('<div class="make-purchase__field-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Next purchase"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="make-purchase__field-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "comment_purchases"), "light_escape", null, !0)),
                    t.append('</div></div><div class="make-purchase__fields-col_right"><div class="make-purchase__field-value">'),
                    new (e._get("interface/controls/budget.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "next_price"in i ? i.next_price : "",
                        visual_class_name: "js-form-changes-skip",
                        name: "next_price",
                        placeholder: "0",
                        style: {
                            width: "122px"
                        },
                        max_length: "price_max_length"in i ? i.price_max_length : "",
                        short: !0,
                        autosized: !1
                    })),
                    t.append(' <span style="margin-left: 7px;">'),
                    t.append(twig.filter.escape(this.env_, "currency"in i ? i.currency : "", "light_escape", null, !0)),
                    t.append("</span></div>"),
                    "periodicity_enabled"in i && i.periodicity_enabled && (t.append('<div class="make-purchase__field-value">'),
                    new (e._get("interface/customers/pipeline/select_with_data.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_add: !1,
                        periodicity_name: "periodicity",
                        next_date_name: "next_date",
                        next_date: "next_date"in i ? i.next_date : "",
                        show_icon_date: !0
                    })),
                    t.append("</div>")),
                    t.append('<div class="make-purchase__field-value">'),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "comment",
                        placeholder: this.env_.filter("i18n", "Add comments"),
                        type: "text"
                    })),
                    t.append("</div></div></div></form></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_customers_pipeline_modals_make_purchase"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/customers/pipeline/modals/make_purchase", t)
            }()
        }
        .apply(t, n)) || (e.exports = a)
    }
    ,
    928617: (e, t, i) => {
        var n, a;
        n = [i(460159), i(295165)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        plug_users_groups: twig.bind(this.block_plug_users_groups, this),
                        head: twig.bind(this.block_head, this),
                        body: twig.bind(this.block_body, this)
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
                    e.append('<div class="pipeline-scroller js-scroll-x-container js-hs-scroller block-selection-prepended '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" id="pipeline_holder">'),
                    e.append(this.renderBlock("plug_users_groups", t, i)),
                    e.append(this.renderBlock("head", t, i)),
                    e.append('<div class="pipeline__body">'),
                    e.append(this.renderBlock("body", t, i)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["pipeline.css"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_plug_users_groups = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_head = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_bidirectional_scroll_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/bidirectional_scroll_page", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        column: twig.bind(this.block_column, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : ""),
                    "has_items"in i && i.has_items || (twig.attr(twig.attr(twig.attr("filter"in i ? i.filter : "", "items"), "without_tasks"), "selected") && "no_items_tmpl"in i && i.no_items_tmpl ? new (e._get("no_items_tmpl"in i ? i.no_items_tmpl : ""))(this.env_).render_(t, i) : "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || (i.no_results = !0)),
                    t.append('<div class="pipeline_wrapper pipeline_row'),
                    "no_results"in i && i.no_results && t.append(" no_filter_results"),
                    t.append('">'),
                    t.append(this.renderBlock("column", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_column = function(t, i, n) {
                    n = void 0 === n ? {} : n,
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
                        i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        i.show_tour = twig.attr(twig.attr(s, "parent"), "show_tour"),
                        i.row_index = twig.attr(s, "index"),
                        "items_index"in i && i.items_index ? i.cur_items = twig.attr(twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"), "items_index"in i ? i.items_index : "", void 0, "array") : i.cur_items = twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"),
                        "has_items"in i && i.has_items || !(twig.attr(s, "index") <= 2) || "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || !("use_filter"in i) || !i.use_filter || (t.append('<div class="pipeline__no-items"><p>'),
                        "pipeline" == ("entity"in i ? i.entity : "") ? (t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results"), "light_escape", null, !0)),
                        t.append(" ")) : "todo" == ("entity"in i ? i.entity : "") && (t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results_todo"), "light_escape", null, !0)),
                        t.append(" ")),
                        t.append(' <a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                        t.append('?skip_filter=Y" class="js-navigate-link" title="">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_reset_filter"), "light_escape", null, !0)),
                        t.append("</a></p></div>")),
                        t.append('<div class="pipeline_status pipeline_cell pipeline_cell-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                        t.append(" pipeline_cell-group-"),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append('"><div class="pipeline_items__list js-pipeline-row '),
                        twig.attr("row"in i ? i.row : "", "disable_drop") && t.append("js-pipeline-no-drop"),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append('">'),
                        i.quick_add_condition = 1 == twig.attr(s, "index") && ("quick_add_tmpl"in i ? i.quick_add_tmpl : ""),
                        !("quick_add_condition"in i) || !i.quick_add_condition || "use_filter"in i && i.use_filter || !twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || new (e._get("quick_add_tmpl"in i ? i.quick_add_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "quick_add_class_name"in i ? i.quick_add_class_name : ""
                        }));
                        var r = "cur_items"in i ? i.cur_items : ""
                          , _ = {
                            parent: s,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(r)) {
                            var p = twig.count(r);
                            _.revindex0 = p - 1,
                            _.revindex = p,
                            _.length = p,
                            _.last = 1 === p
                        }
                        twig.forEach(r, (function(n, a) {
                            i._key = a,
                            i.item = n,
                            new (e._get("item_tmpl"in i ? i.item_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                                row: "row"in i ? i.row : "",
                                item: "item"in i ? i.item : "",
                                row_index: "row_index"in i ? i.row_index : ""
                            })),
                            ++_.index0,
                            ++_.index,
                            _.first = !1,
                            _.length && (--_.revindex0,
                            --_.revindex,
                            _.last = 0 === _.revindex0)
                        }
                        ), this),
                        "more_tmpl"in i && i.more_tmpl && new (e._get("more_tmpl"in i ? i.more_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            row: "row"in i ? i.row : "",
                            items: "cur_items"in i ? i.cur_items : ""
                        })),
                        t.append("</div></div>"),
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
                    return "interface_pipeline_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/body", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                    "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                    i.show_tour = twig.attr(twig.attr("loop"in i ? i.loop : "", "parent"), "show_tour"),
                    i.row_index = twig.attr("loop"in i ? i.loop : "", "index"),
                    "items_index"in i && i.items_index ? i.cur_items = twig.attr(twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"), "items_index"in i ? i.items_index : "", void 0, "array") : i.cur_items = twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"),
                    "has_items"in i && i.has_items || !(twig.attr("loop"in i ? i.loop : "", "index") <= 2) || "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || !("use_filter"in i) || !i.use_filter || (t.append('<div class="pipeline__no-items"><p>'),
                    "pipeline" == ("entity"in i ? i.entity : "") ? (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results"), "light_escape", null, !0)),
                    t.append(" ")) : "todo" == ("entity"in i ? i.entity : "") && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results_todo"), "light_escape", null, !0)),
                    t.append(" ")),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                    t.append('?skip_filter=Y" class="js-navigate-link" title="">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_reset_filter"), "light_escape", null, !0)),
                    t.append("</a></p></div>")),
                    t.append('<div class="pipeline_status pipeline_cell pipeline_cell-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                    t.append(" pipeline_cell-group-"),
                    t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                    t.append(" "),
                    "aside"in i && i.aside && t.append("pipeline_cell-aside-item"),
                    t.append(" "),
                    twig.contains(["today", "tomorrow"], "key_id"in i ? i.key_id : "") || 0 != twig.filter.length(this.env_, "cur_items"in i ? i.cur_items : "") || t.append(" hidden "),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("header_tmpl"in i ? i.header_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                        key: "key"in i ? i.key : "",
                        row: "row"in i ? i.row : "",
                        is_last: twig.attr("loop"in i ? i.loop : "", "is_last"),
                        is_first: twig.attr("loop"in i ? i.loop : "", "is_first")
                    })),
                    t.append('<div class="pipeline_items__list js-pipeline-row '),
                    twig.attr("row"in i ? i.row : "", "disable_drop") && t.append("js-pipeline-no-drop"),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    i.quick_add_condition = 1 == twig.attr("loop"in i ? i.loop : "", "index") && ("quick_add_tmpl"in i ? i.quick_add_tmpl : ""),
                    !("quick_add_condition"in i) || !i.quick_add_condition || "use_filter"in i && i.use_filter || !twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || new (e._get("quick_add_tmpl"in i ? i.quick_add_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "quick_add_class_name"in i ? i.quick_add_class_name : ""
                    })),
                    i._parent = i;
                    var a = "cur_items"in i ? i.cur_items : ""
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
                        new (e._get("item_tmpl"in i ? i.item_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            row: "row"in i ? i.row : "",
                            item: "item"in i ? i.item : "",
                            row_index: "row_index"in i ? i.row_index : "",
                            item_index: twig.attr(s, "index0")
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
                    return "interface_pipeline_body_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/body_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline_leads__linked-entities pipeline_leads__linked-entities_last-message '),
                    "has_tags"in i && i.has_tags && t.append("pipeline_leads__linked-entities_last-message__has_tags"),
                    t.append('"><svg class="pipeline_leads__linked-entities_last-message__tail svg-icon svg-digital_pipeline--chat_tail-dims"><use xlink:href="#digital_pipeline--chat_tail"></use></svg>'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("from"in i ? i.from : "", "id"),
                        url: twig.attr("from"in i ? i.from : "", "icon")
                    })),
                    t.append('<div class="pipeline_leads__linked-entities_last-message__text">'),
                    t.append(twig.filter.escape(this.env_, "message"in i ? i.message : "", "light_escape", null, !0)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_chat_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/chat_message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline_row pipeline_row-head'),
                    "select_one"in i && i.select_one && t.append(" pipeline_row-head_select-one"),
                    t.append('" id="pipeline_head">'),
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
                        i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        t.append('<div class="pipeline_cell pipeline_cell-head pipeline_cell-head-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                        t.append(" pipeline_cell-head-group-"),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, "head_cell_class_name"in i ? i.head_cell_class_name : "", "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("header_tmpl"in i ? i.header_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            key: "key"in i ? i.key : "",
                            row: "row"in i ? i.row : "",
                            is_last: twig.attr(s, "is_last"),
                            is_first: twig.attr(s, "is_first")
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
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_head"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/head", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/pipeline/bidirectional_scroll_page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_head = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/pipeline/head.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/pipeline/body.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_main"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/main", t)
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
        e._sentryDebugIds[t] = "4a3a34be-868e-448d-9905-5ee4bd58645a",
        e._sentryDebugIdIdentifier = "sentry-dbid-4a3a34be-868e-448d-9905-5ee4bd58645a")
    } catch (e) {}
}();
//# sourceMappingURL=85078.903a48ef7cfb5d33e650.js.map
