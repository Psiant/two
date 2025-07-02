"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[39830, 18910], {
    583132: (e, t, a) => {
        a.r(t),
        a.d(t, {
            initFilterWhitelist: () => o
        });
        var n = a(55188)
          , i = a.n(n);
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function s(e) {
            return function(e) {
                if (Array.isArray(e))
                    return r(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return r(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name),
                    "Map" === a || "Set" === a ? Array.from(a) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? r(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var o = function(e) {
            var t = e.getFilterAttributes
              , a = e.updateFilterAttributes
              , n = e.whitelist_checks
              , r = e.ignored_attributes
              , o = []
              , l = []
              , c = new Set(void 0 === r ? [] : r);
            return {
                onFilterChange: function(e) {
                    var r = function(e) {
                        var t = new Set
                          , a = new Set;
                        return i().each(e, (function(e, r) {
                            i().isEmpty(e) || i().each(n, (function(e) {
                                !t.has(e.allowed) && e.trigger.test(r) && t.add(e.allowed),
                                a.has(e.trigger) || e.allowed.test(r) || a.add(e.trigger)
                            }
                            ))
                        }
                        )),
                        {
                            applied_positive_whitelist: s(t),
                            applied_negative_whitelist: s(a)
                        }
                    }(e)
                      , u = r.applied_positive_whitelist
                      , d = r.applied_negative_whitelist
                      , _ = !(i().isEmpty(d) && i().isEmpty(u) || i().isEqual(l, d) && i().isEqual(o, u));
                    o = u,
                    l = d,
                    _ && function(e) {
                        var n = e.changed_attributes
                          , r = e.positive_whitelist
                          , s = e.negative_whitelist
                          , o = t();
                        if (o) {
                            var l = {};
                            i().each(o, (function(e, t) {
                                i().isEmpty(e) || c.has(t) || i().some(r, (function(e) {
                                    return e.test(t)
                                }
                                )) || i().some(s, (function(e) {
                                    return !e.test(t)
                                }
                                )) || (l[t] = "")
                            }
                            )),
                            i().isEmpty(l) || a({
                                changed_attributes: n,
                                reseted_attributes: l
                            })
                        }
                    }({
                        changed_attributes: e,
                        positive_whitelist: o,
                        negative_whitelist: l
                    })
                }
            }
        }
          , l = "../build/transpiled/components/filter/filter_whitelist";
        window.define(l, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([l])
    }
    ,
    91331: (e, t, a) => {
        a.r(t),
        a.d(t, {
            chart_groupable_cf_types: () => s,
            deletable: () => o,
            group_by: () => i,
            statuses: () => r,
            types: () => n
        });
        var n = {
            NUMBER: 1,
            CHART: 2,
            LIST: 3,
            CUSTOM: 4,
            TOP_CHART: 5,
            LEADS_SOURCES: 6,
            SALES_FORECAST: 7,
            LAST_ATTACHMENTS: 8,
            NPS: 9,
            ONLINE: 10,
            GOALS: 11,
            INCOMING_CHATS_BY_ORIGIN: 12,
            OUTGOING_CHATS_BY_ORIGIN: 13,
            OUTGOING_CHATS_BY_USER_AND_CHAT: 14,
            CHART_TIMESERIES: 15,
            CHART_AVG_RESPONSE_TIME: 16,
            TALK_LONGEST_AWAITING_REPLY: 17
        }
          , i = {
            LEAD_STATUS: 1,
            CUSTOMER_PERIOD: 2,
            RESPONSIBLE: 3,
            TAG: 4,
            TASK_TYPE: 5,
            VALUE_AFTER_ENUM: 9,
            DATE: 12,
            LOSS_REASON: 14,
            CUSTOM_FIELD: 15
        }
          , r = {
            LEAD_STATUS_CLOSED: 143
        }
          , s = [APP.cf_types.select, APP.cf_types.multiselect, APP.cf_types.radiobutton]
          , o = [n.NUMBER, n.CHART, n.LIST, n.CUSTOM, n.CHART_TIMESERIES]
          , l = "../build/transpiled/interface/dashboard/tiles/constants";
        window.define(l, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([l])
    }
    ,
    918910: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => E
        });
        var n = a(661533)
          , i = a.n(n)
          , r = a(460159)
          , s = a.n(r)
          , o = a(55188)
          , l = a.n(o)
          , c = a(312309)
          , u = a(456107)
          , d = a(237262)
          , _ = a(886965)
          , f = a(880774)
          , p = a(678640)
          , v = a(804129)
          , m = a(521466)
          , y = a(889378)
          , g = a(510144)
          , h = a(77305)
          , A = a(272061)
          , b = a(91331);
        const E = m.default.extend({
            className: "modal-create-widget",
            template: function() {
                switch (this.modal_type) {
                case "convertable":
                    return "/tmpl/filter/in_search/modal_create_widget.twig";
                case "description":
                    return "/tmpl/filter/in_search/modal_info_widget.twig"
                }
                return "/tmpl/filter/in_search/modal_create_widget.twig"
            },
            _selectors: function() {
                return {
                    apply_btn: ".modal-create-widget__apply-btn",
                    apply_btn_blue: ".modal-create-widget__apply-btn.button-input_blue",
                    label: ".modal-create-widget__type",
                    type_block: ".modal-create-widget__type",
                    input_name: ".modal-create-widget__input-name",
                    delete_btn: ".modal-create-widget__delete"
                }
            },
            _classes: function() {
                return {
                    error_input: "modal-create-widget__input-name_error"
                }
            },
            events: function() {
                var e = l().result(m.default.prototype, "events", {});
                return e["click ".concat(this._selector("apply_btn_blue"))] = "onSaveClick",
                e["click ".concat(this._selector("label"))] = "selectType",
                e["input ".concat(this._selector("input_name"))] = "clearError",
                e["click ".concat(this._selector("delete_btn"))] = "deleteWidget",
                e
            },
            initialize: function(e) {
                this.options = e || {},
                this.modal_type = this.options.modal_type || "convertable",
                this.element_type = (e.widget_data || {}).element_type,
                this.filter = e.filter || {},
                this.element_type || (this.element_type = APP.element_types["dashboard" === APP.getBaseEntity() ? "events" : APP.getBaseEntity()]),
                e.widget_data && parseInt(e.widget_data.group_by) === b.group_by.CUSTOM_FIELD && e.widget_data.cf_id && (e.widget_data.group_by += "::".concat(e.widget_data.cf_id)),
                m.default.prototype.initialize.apply(this),
                this.modal = this._addComponent(y.default, {
                    class_name: "modal-list modal-create-widget",
                    preload_templates: [this.template()],
                    init: l().bind((function(e) {
                        this.setElement(e.append(s()({
                            ref: this.template()
                        }).render(l().extend({}, this.getRenderParams())))),
                        this._initForm(),
                        this.$el.trigger("modal:centrify"),
                        this.$('[name="name"]').focus();
                        var t = this.$el.find('[type="radio"]');
                        1 === t.length && t.prop("checked", !0).trigger("change")
                    }
                    ), this)
                })
            },
            getRenderParams: function() {
                switch (this.modal_type) {
                case "convertable":
                    return l().extend({}, this.options.widget_data || {}, {
                        is_diagram_allowed: !(0,
                        v.isAmoChatsFullEnabled)() && l().contains([APP.element_types.leads, APP.element_types.events, APP.element_types.customers, APP.element_types.todo, APP.element_types.contacts, APP.element_types.companies, APP.element_types.contacts_and_companies], this.element_type),
                        is_timeline_allowed: l().contains([APP.element_types.events], this.element_type),
                        is_list_allowed: !l().contains([APP.element_types.talk], this.element_type),
                        group_by_items: this._getGroupByList()
                    });
                case "description":
                    return l().extend({}, this.options.widget_data, {
                        constants: b,
                        locale_id: APP.lang_id
                    })
                }
            },
            clearError: function(e) {
                this._elem("input_name").hasClass(this._class("error_input")) && i()(e.currentTarget).val() && i()(e.currentTarget).val().length && this._elem("input_name").removeClass(this._class("error_input"))
            },
            selectType: function(e) {
                var t = i()(e.currentTarget)
                  , a = parseInt(t.prev().val());
                this.$('[name="type"]').prop("checked", !1).filter((function(e, t) {
                    return parseInt(i()(t).val()) === a
                }
                )).prop("checked", !0).trigger("change")
            },
            onSaveClick: function() {
                var e = this.form.model.toJSON();
                return e = this._prepareCustomFieldGroupSettings(e),
                l().isFunction(this.options.onSave) ? (this.options.onSave(e),
                this.modal.destroy(),
                Promise.resolve()) : this.sendSettings()
            },
            getFilterState: function() {
                return l().isFunction(this.options.getFilterState) ? this.options.getFilterState() : (0,
                c.QStoJSON)((0,
                u.getFilterHashQueryString)(), !0)
            },
            sendSettings: function() {
                var e, t = parseInt(this.form.model.get("type")), a = {
                    filter: this.getFilterState()
                }, n = this._elem("input_name").val(), r = this._getElementType();
                return this._elem("apply_btn").trigger("button:load:start"),
                this._elem("input_name").val() ? (t === b.types.CHART && (a.group_by = this.form.model.get("group_by")),
                t === b.types.CHART_TIMESERIES && (a.group_by = b.group_by.DATE),
                a = this._prepareCustomFieldGroupSettings(a),
                r === APP.element_types.leads && APP.data.current_view.pipeline_id && (a.filter.pipeline_id = APP.data.current_view.pipeline_id),
                "catalogs" === APP.getBaseEntity() && (e = APP.data.current_view.catalog.id),
                i().ajax({
                    url: "/ajax/v2/dashboard_widgets/",
                    data: JSON.stringify({
                        dashboard_widgets: {
                            name: n,
                            entity_type: r,
                            type: t,
                            settings: a,
                            catalog_id: e,
                            need_additional_aggregation: this.options.need_additional_aggregation
                        }
                    }),
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json"
                }).then(l().bind((function(e) {
                    APP.router.navigate("/dashboard/?widget_id=".concat(e._embedded.id), {
                        trigger: !0
                    })
                }
                ), this), l().bind((function() {
                    this._elem("apply_btn").trigger("button:load:error")
                }
                ), this))) : (this._elem("apply_btn").trigger("button:load:error"),
                this._elem("input_name").addClass(this._class("error_input")),
                Promise.reject())
            },
            _prepareCustomFieldGroupSettings: function(e) {
                var t;
                return delete e.cf_id,
                l().isString(e.group_by) && 0 === e.group_by.indexOf(b.group_by.CUSTOM_FIELD) && (t = e.group_by.split("::")).length > 1 && (e.group_by = parseInt(t[0]),
                e.cf_id = parseInt(t[1])),
                e
            },
            _getElementType: function() {
                var e = this.element_type;
                if (e === APP.element_types.contacts)
                    switch (APP.data.element_type) {
                    case "":
                        e = APP.element_types.contacts_and_companies;
                        break;
                    case "companies":
                        e = APP.element_types.companies;
                        break;
                    case "contacts":
                        e = APP.element_types.contacts
                    }
                return e
            },
            _getGroupByList: function() {
                var e, t, a = parseInt(this._getElementType());
                switch (a) {
                case APP.element_types.leads:
                    return t = l().compact([{
                        option: (0,
                        f.i18n)("Transaction status"),
                        id: b.group_by.LEAD_STATUS
                    }, {
                        option: (0,
                        f.i18n)("Responsible manager"),
                        id: b.group_by.RESPONSIBLE
                    }, this._isFilteredByClosedStatus() ? {
                        option: (0,
                        f.i18n)("Loss reason"),
                        id: b.group_by.LOSS_REASON
                    } : null]),
                    e = this._getCustomFieldGroups(a),
                    t.concat(e);
                case APP.element_types.customers:
                    return t = [{
                        option: (0,
                        f.i18n)("Buyer's period"),
                        id: b.group_by.CUSTOMER_PERIOD
                    }, {
                        option: (0,
                        f.i18n)("Responsible manager"),
                        id: b.group_by.RESPONSIBLE
                    }],
                    e = this._getCustomFieldGroups(a),
                    t.concat(e);
                case APP.element_types.contacts:
                case APP.element_types.companies:
                    return t = [{
                        option: (0,
                        f.i18n)("Responsible manager"),
                        id: b.group_by.RESPONSIBLE
                    }],
                    e = this._getCustomFieldGroups(a),
                    t.concat(e);
                case APP.element_types.contacts_and_companies:
                    return [{
                        option: (0,
                        f.i18n)("Responsible manager"),
                        id: b.group_by.RESPONSIBLE
                    }];
                case APP.element_types.todo:
                    return [{
                        option: (0,
                        f.i18n)("Responsible manager"),
                        id: b.group_by.RESPONSIBLE
                    }, {
                        option: (0,
                        f.i18n)("Task types"),
                        id: b.group_by.TASK_TYPE
                    }];
                case APP.element_types.events:
                    return l().compact([{
                        option: (0,
                        f.i18n)("Author as user"),
                        id: b.group_by.RESPONSIBLE
                    }, this._isEventTypeAllowedForValueAfter() ? {
                        option: (0,
                        f.i18n)("Value after"),
                        id: b.group_by.VALUE_AFTER_ENUM
                    } : null, this._isFilteredByClosedStatus() ? {
                        option: (0,
                        f.i18n)("Loss reason"),
                        id: b.group_by.LOSS_REASON
                    } : null])
                }
            },
            _isEventTypeAllowedForValueAfter: function() {
                var e, t, a = A.default.FIELD_CHANGED_EVENT, n = [A.default.LEAD_STATUS_CHANGED_EVENT, A.default.NPS, A.default.SEGMENT_ATTACHED, A.default.SEGMENT_DETACHED];
                return !!((0,
                p.hasKeys)(this.filter, ["filter", "event_type"]) && 1 === l().keys(this.filter.filter.event_type).length && (t = this.filter.filter.event_type[0].toString().split(":"),
                (e = parseInt(t[0])) === a && t[1] || l().contains(n, e)))
            },
            _isFilteredByClosedStatus: function() {
                var e = !1;
                if (!this.filter || !this.filter.filter)
                    return e;
                if (APP.constant("loss_reason_enabled"))
                    switch (parseInt(this._getElementType())) {
                    case APP.element_types.leads:
                        this.filter.filter.status_id && (e = -1 !== l().indexOf(l().toArray(this.filter.filter.status_id), b.statuses.LEAD_STATUS_CLOSED.toString())),
                        this.filter.filter.pipe && l().each(this.filter.filter.pipe, (function(t) {
                            e = e || -1 !== l().indexOf(l().toArray(t), b.statuses.LEAD_STATUS_CLOSED.toString())
                        }
                        ));
                        break;
                    case APP.element_types.events:
                        l().first(l().toArray(this.filter.filter.event_type)) === A.default.LEAD_STATUS_CHANGED_EVENT.toString() && this.filter.filter.value_after && this.filter.filter.value_after.statuses && (e = l().reduce(this.filter.filter.value_after.statuses, (function(e, t) {
                            return e && t.status_id === b.statuses.LEAD_STATUS_CLOSED.toString()
                        }
                        ), !0))
                    }
                return e
            },
            _getCustomFieldGroups: function(e) {
                var t = l().filter(APP.constant("account").cf, (function(t) {
                    return !(0,
                    d.hasRestrictedFieldAccess)(t.ID, (0,
                    _.convertElementType)(e, "string"), "view") && l().contains(l().values(t.ELEMENT_TYPES), e) && l().contains(b.chart_groupable_cf_types, t.TYPE_ID)
                }
                ));
                return l().map(t, (function(e) {
                    return {
                        option: e.NAME,
                        id: "".concat(b.group_by.CUSTOM_FIELD, "::").concat(e.ID)
                    }
                }
                ))
            },
            _initForm: function() {
                this.form = this._addComponent(g.default.View, {
                    el: this.$el
                }),
                this.listenTo(this.form.model, "has_changes", l().bind(this._setChanges, this, !0)),
                this.listenTo(this.form.model, "has_reverted", l().bind(this._setChanges, this, !1))
            },
            _setChanges: function(e) {
                this._elem("apply_btn").trigger("button:save:".concat(e ? "enable" : "disable"))
            },
            deleteWidget: function() {
                var e = this.options.widget_data.name
                  , t = this;
                l().isEmpty(e) ? e = (0,
                f.i18n)("Widget").toLowerCase() : this.options.widget_data.type === b.types.TOP_CHART && (e = (0,
                f.i18n)("the pipeline report widget")),
                this.confirm_modal = new h.default({
                    class_name: "modal-list",
                    text: (0,
                    f.i18n)("Are you sure you want to delete?").replace("#PLACEHOLDER#", e),
                    decline_text: APP.lang.confirm__no,
                    accept_text: APP.lang.confirm__yes,
                    button_class: "button-modal",
                    button_cancel_class: "button-cancel-modal",
                    accept: function() {
                        t.options.onQuickDelete().done(l().bind((function() {
                            this.requestSuccess(APP.lang.modal_success)
                        }
                        ), this)).fail(l().bind(this.requestFail, this, APP.lang.modal_error_caption))
                    }
                })
            }
        });
        var k = "../build/transpiled/interface/search/modal_create_widget";
        window.define(k, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([k])
    }
    ,
    463274: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => p
        });
        var n = a(661533)
          , i = a.n(n)
          , r = a(55188)
          , s = a.n(r)
          , o = a(460159)
          , l = a.n(o)
          , c = a(162262)
          , u = a.n(c)
          , d = a(521466)
          , _ = a(196924)
          , f = a(858458);
        const p = d.default.extend({
            _classes: function() {
                return {
                    field: "filter__custom_settings__item",
                    filter: "js-filter-sidebar",
                    apply_block: "list-top-search__apply-block"
                }
            },
            events: {
                "click .js-filter-field-clear": "destroy"
            },
            initialize: function(e) {
                d.default.prototype.initialize.apply(this, arguments),
                this.options = e || {},
                u().mixin(this, _.default)
            },
            destroy: function(e) {
                s().isFunction(this.options.onDestroy) && this.options.onDestroy(e),
                d.default.prototype.destroy.apply(this, arguments)
            },
            render: l()._preload(["/tmpl/filter/in_search/option.twig"], "_render"),
            _render: function() {
                return this.setElement(l()({
                    ref: "/tmpl/filter/in_search/option.twig"
                }).render({
                    text: this.options.text,
                    name_input: this.options.name_input ? this._completeNameInput(this.options.name_input) : ""
                })),
                this
            },
            checkSuggestValues: function() {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                    t[a] = arguments[a];
                f.default.apply(this, t)
            },
            _completeNameInput: function(e) {
                var t, a = i().extend(!0, {}, APP.constant("account").cf, APP.constant("account").predefined_cf);
                return -1 === e.indexOf("cf") && -1 === e.indexOf("custom_fields") || (t = e.replace(/\D+/g, "")),
                -1 !== e.indexOf("[date]") || -1 !== e.indexOf("[price]") || -1 !== e.indexOf("[next_price]") || -1 !== e.indexOf("[ltv]") || -1 !== e.indexOf("[purchases_count]") || -1 !== e.indexOf("[average_check]") || -1 !== e.indexOf("[next_date]") ? e += "[from]" : (s().isUndefined(t) || s().each(a, (function(a) {
                    if (a.ID === t)
                        switch (parseInt(a.TYPE_ID)) {
                        case APP.cf_types.numeric:
                        case APP.cf_types.date:
                        case APP.cf_types.birthday:
                            return e += "[from]";
                        case APP.cf_types.smart_address:
                            return e += "[address_line_1]"
                        }
                }
                )),
                e)
            }
        });
        var v = "../build/transpiled/interface/search/partials/option_view";
        window.define(v, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([v])
    }
    ,
    799633: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => o
        });
        var n = a(55188)
          , i = a.n(n)
          , r = a(521466)
          , s = a(889378);
        const o = r.default.extend({
            className: "modal-options",
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                    t[a] = arguments[a];
                r.default.prototype._classes.apply(this, t)
            },
            _selectors: function() {
                return {
                    close_icon: ".icon-modal-close"
                }
            },
            events: function() {
                var e = i().result(r.default.prototype, "events", {});
                return e["click ".concat(this._selector("close_icon"))] = "close",
                e
            },
            initialize: function(e) {
                this.options = e || {},
                this.onDestroy = i().isFunction(this.options.onDestroy) ? this.options.onDestroy : i().noop,
                this.send = !1,
                r.default.prototype.initialize.apply(this),
                this.modal = new s.default({
                    class_name: "modal-list modal-hidden-options ".concat(this.options.class_name),
                    init: i().bind((function(e) {
                        e.addClass("custom-scroll"),
                        this.setElement(e)
                    }
                    ), this),
                    destroy: i().bind((function() {
                        return this.destroy(),
                        !0
                    }
                    ), this)
                }),
                this.modal.listenTo(this.options.search_context, "OptionsModal:close", this.modal.destroy),
                this.render()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                    t[a] = arguments[a];
                this.options.search_context.delete_in_modal = !1,
                this.options.search_context.need_width_count = !1,
                this.onDestroy.call(this.options.search_context),
                r.default.prototype.destroy.apply(this, t)
            },
            close: function() {
                this.modal.destroy()
            },
            render: function() {
                this.$el.trigger("modal:loaded"),
                this.options.elements.removeClass("hidden"),
                this.options.elements.appendTo(this.$el)
            }
        });
        var l = "../build/transpiled/interface/search/partials/options_modal";
        window.define(l, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([l])
    }
    ,
    328287: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => E
        });
        var n = a(55188)
          , i = a.n(n)
          , r = a(161320)
          , s = a.n(r)
          , o = a(880774)
          , l = a(579569)
          , c = a(500034)
          , u = a(661533)
          , d = {
            "-1": {
                id: "-1",
                name: (0,
                o.i18n)("No active leads linked")
            },
            "-2": {
                id: "-2",
                name: (0,
                o.i18n)("No leads linked")
            }
        };
        function _(e, t) {
            var a = [i().escape(e)];
            return t && (a = a.concat([": ", i().escape(t)])),
            a.join("")
        }
        function f(e, t, a, n, r) {
            var s;
            switch (APP.getBaseEntity()) {
            case "customers":
                s = this.statuses;
                break;
            case "contacts":
                s = d;
                break;
            default:
                s = i().isUndefined(this.statuses[APP.constant("main_pipeline")]) ? this.statuses : this.statuses[APP.constant("main_pipeline")].statuses
            }
            i().isArray(n.value) && n.value.length > 1 ? n.value.length === i().keys(s).length ? t[a] = {
                key: e,
                value: _("".concat((0,
                o.i18n)("All"), " ").concat((0,
                o.i18n)("Statuses").toLowerCase()))
            } : t[a] = {
                key: e,
                value: _((0,
                o.i18n)("Statuses"), r.get(e).length)
            } : i().find(s, (function(i) {
                if (n.value == i.id)
                    return t[a] = {
                        key: e,
                        value: _((0,
                        o.i18n)("Status"), i.option || i.name)
                    }
            }
            ))
        }
        function p(e, t, a, n) {
            i().isArray(n.value) ? i().each(n.value, (function(n, r) {
                i().find(this.loss_reasons, (function(i) {
                    if (n == i.id) {
                        if (0 === r)
                            return t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Reason for close-lost leads"), i.option)
                            };
                        t[a].value += ", ".concat(i.option)
                    }
                }
                ))
            }
            ), this) : i().find(this.loss_reasons, (function(i) {
                if (n.value == i.id)
                    return t[a] = {
                        key: e,
                        value: _((0,
                        o.i18n)("Reason for close-lost leads"), i.option)
                    }
            }
            ))
        }
        function v(e, t, a, n, r) {
            var s;
            i().isArray(n.value) && n.value.length > 1 ? t[a] = {
                key: e,
                value: _((0,
                o.i18n)("tags_manage_caption"), r.get(e).length)
            } : (s = this.filter.tags_lib._list.get(n.value),
            t[a] = {
                key: e,
                value: _((0,
                o.i18n)("tags_manage_caption"), null == s ? void 0 : s.get("name"))
            })
        }
        function m(e, t, a, n, r) {
            i().isArray(n.value) && n.value.length > 1 ? t[a] = {
                key: e,
                value: _((0,
                o.i18n)("Segments"), r.get(e).length)
            } : t[a] = {
                key: e,
                value: _((0,
                o.i18n)("Segments"), this.filter.suggest_segment.getNameSelected(n.value))
            }
        }
        function y(e) {
            var t = parseInt(e && e.replace("previous_days_", ""));
            if (t > 0)
                return (0,
                o.numeralWord)(t, (0,
                o.i18n)("Last %s days (numeral)")).replace("%s", t);
            switch (e) {
            case "current_day":
            case "today":
                return (0,
                o.i18n)("Today (filter)");
            case "yesterday":
                return (0,
                o.i18n)("Yesterday (filter)");
            case "current_week":
            case "week":
                return (0,
                o.i18n)("Current week (filter)");
            case "previous_week":
                return (0,
                o.i18n)("Last week (filter)");
            case "current_month":
            case "month":
                return (0,
                o.i18n)("Current month (filter)");
            case "previous_month":
                return (0,
                o.i18n)("Last month (filter)");
            case "current_quarter":
            case "quarter":
                return (0,
                o.i18n)("Current quarter (filter)");
            case "current_year":
                return (0,
                o.i18n)("Current year (filter)");
            default:
                return ""
            }
        }
        function g(e, t, a, n, r) {
            var s, l = Number(e.replace(/\D+/g, "")), c = i().keys(this.statuses), u = "filter[pipe][".concat(APP.constant("main_pipeline"), "][]"), f = c.length, p = 0, v = [], m = !1, y = !0;
            if (i().each(c, (function(e) {
                i().isUndefined(r.get("filter[pipe][".concat(Number(e.replace(/\D+/g, "")), "][]"))) && (m = !0),
                "" === r.get("filter[pipe][".concat(Number(e.replace(/\D+/g, "")), "][]")) && (f -= 1)
            }
            ), this),
            s = m ? this.$el.find(".filter__custom_settings__item_statuses").find(".checkboxes_dropdown__list__wrapper__inner").find("input:checkbox") : this.$el.find(".filter__custom_settings__item_statuses").find("input:checkbox"),
            i().each(s, (function(e) {
                var t = e.name;
                switch (!0) {
                case /filter\[pipe\]\[[\d+]/g.test(t):
                    e.checked ? p += 1 : y = !1;
                    break;
                case /filter\[pipe\]\[-(1|2)]/g.test(t):
                    e.checked && v.push(d[/filter\[pipe\]\[(-1|-2)]/.exec(t)[1]].name)
                }
            }
            )),
            m)
                if (i().isArray(r.get(e)))
                    t[a] = y ? {
                        key: e,
                        value: _("".concat((0,
                        o.i18n)("All"), " ").concat((0,
                        o.i18n)("Stages").toLowerCase()))
                    } : {
                        key: e,
                        value: _((0,
                        o.i18n)("Stages"), r.get(e).length)
                    };
                else {
                    if (!this.statuses["id_".concat(l)])
                        return {
                            key: "",
                            value: ""
                        };
                    i().find(this.statuses["id_".concat(l)].statuses, (function(i) {
                        if (n.value == i.id)
                            return t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Stage"), i.name)
                            }
                    }
                    ), this)
                }
            else
                t[a] = y ? {
                    key: u,
                    value: _("".concat((0,
                    o.i18n)("All Pipelines"), ", ").concat((0,
                    o.i18n)("All"), " ").concat((0,
                    o.i18n)("Stages").toLowerCase()))
                } : {
                    key: u,
                    value: _((0,
                    o.capitalize)(i().compact([v.length ? v.join(", ") : "", f ? "".concat(f, " ").concat((0,
                    o.numeralWord)(f, (0,
                    o.i18n)("pipeline,pipelines"))) : "", p ? "".concat(p, " ").concat((0,
                    o.numeralWord)(p, (0,
                    o.i18n)("stage,stages"))) : ""]).join(", ").toLowerCase()))
                }
        }
        function h(e, t, a, n, r) {
            var s, l, c;
            switch (n) {
            case "object":
                l = i().isString(r.value) || i().isArray(r.value) && 1 === r.value.length ? (0,
                o.getEntityLang)(r.value) : this.filter.params[n].title,
                s = i().isString(r.value) || i().isArray(r.value) && 1 === r.value.length ? "" : ":&nbsp;".concat(r.value.length);
                break;
            case "xevents":
                i().isArray(r.value) && 1 === r.value.length && (r.value = r.value[0]),
                i().isArray(r.value) || "24" !== r.value.split(":")[0] || function(e, t, a) {
                    a.value && (e[e.length] = {
                        key: "filter[cf][]",
                        value: APP.constant("account").cf[a.value] ? "".concat((0,
                        o.i18n)("Field"), ":&nbsp;").concat(APP.constant("account").cf[a.value].NAME) : (0,
                        o.i18n)("Field is not selected")
                    })
                }(t, 0, {
                    value: r.value.split(":")[1]
                }),
                c = APP.data.current_view.params ? APP.data.current_view.params.filter.events.items : this.filter.params[n].items,
                l = this.filter.params[n].title,
                s = i().isString(r.value) ? ":&nbsp;".concat(i().find(c, (function(e) {
                    return e.id == r.value.split(":")[0] && !e.cf_id
                }
                )).option) : r.value ? ":&nbsp;".concat(r.value.length) : "";
                break;
            case "value_after":
            case "value_before":
                l = this.filter.params[n].title,
                s = i().isString(r.value) || i().isArray(r.value) && 1 === r.value.length ? "" : r.value ? ":&nbsp;".concat(r.value.length) : ""
            }
            t[a] = {
                key: e,
                value: l + s
            }
        }
        function A(e, t, a, n) {
            var r = e;
            n.value && (i().isArray(n.value) && (r += ": ".concat(n.value.length)),
            t[a] = {
                key: n.key,
                value: r
            })
        }
        function b(e, t, a, n) {
            var r = e;
            n.value && (i().isArray(n.value) && (r += ": ".concat(n.value.length)),
            t[a] = {
                key: n.key,
                value: r
            })
        }
        a(368439);
        const E = {
            prepareDefaultOptions: function(e) {
                var t = this.filter.form.model;
                i().each(e, (function(a, n) {
                    var r = a.key;
                    switch (e[n] = {
                        key: r,
                        value: (0,
                        o.getEscapedEntity)(a.value)
                    },
                    r) {
                    case "filter[name]":
                    case "filter[extensions][]":
                    case "filter[company][name]":
                    case "filter[main_contact][name]":
                    case "filter[entity_name][]":
                    case "filter[members][]":
                    case "filter[thread_name][]":
                        !function(e, t, a, n) {
                            var r, s = APP.getBaseEntity();
                            switch (e) {
                            case "filter[name]":
                                switch (s) {
                                case "leads":
                                    t[a] = {
                                        key: e,
                                        value: _((0,
                                        o.i18n)("Lead name"), n.value)
                                    };
                                    break;
                                case "customers":
                                    t[a] = {
                                        key: e,
                                        value: _((0,
                                        o.i18n)("Customer name"), n.value)
                                    };
                                    break;
                                default:
                                    t[a] = {
                                        key: e,
                                        value: _((0,
                                        o.i18n)("Name"), n.value)
                                    }
                                }
                                break;
                            case "filter[company][name]":
                                t[a] = {
                                    key: e,
                                    value: _("".concat((0,
                                    o.i18n)("notes_filter_companies"), ": ").concat((0,
                                    o.i18n)("Name")), n.value)
                                };
                                break;
                            case "filter[entity_name][]":
                                t[a] = {
                                    key: e,
                                    value: _((0,
                                    o.i18n)("Lead name"), n.value)
                                };
                                break;
                            case "filter[members][]":
                                t[a] = {
                                    key: e,
                                    value: _((0,
                                    o.i18n)("From who"), n.value)
                                };
                                break;
                            case "filter[thread_name][]":
                                t[a] = {
                                    key: e,
                                    value: _((0,
                                    o.i18n)("Subject"), n.value)
                                };
                                break;
                            case "filter[extensions][]":
                                t[a] = {
                                    key: e,
                                    value: _((0,
                                    o.i18n)("Type"), (r = n.value,
                                    i().isArray(r) ? i().map(r, (function(e) {
                                        return "No type" === e ? (0,
                                        o.i18n)("No type") : e
                                    }
                                    )) : "No type" === r ? (0,
                                    o.i18n)("No type") : r))
                                };
                                break;
                            default:
                                t[a] = {
                                    key: e,
                                    value: _("".concat((0,
                                    o.i18n)("Contacts"), ": ").concat((0,
                                    o.i18n)("Name")), n.value)
                                }
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[talk_number]":
                    case "talk_number":
                        !function(e, t, a, n) {
                            t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Chat ID"), n.value)
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[last_message_type][]":
                        !function(e, t, a, n) {
                            if (t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Last message from"))
                            },
                            i().isArray(n.value))
                                2 === n.value.length ? t[a].value += ": ".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("value,values,values"))) : t[a].value += ": ".concat(n.value.length);
                            else
                                switch (n.value) {
                                case "1":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Incoming message (filter)"));
                                    break;
                                case "2":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Outgoing message (filter)"))
                                }
                        }(r, e, n, a);
                        break;
                    case "filter[talk_read_status][]":
                        !function(e, t, a, n) {
                            if (t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Talk read status"))
                            },
                            i().isArray(n.value))
                                2 === n.value.length ? t[a].value += ": ".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("value,values,values"))) : t[a].value += ": ".concat(n.value.length);
                            else
                                switch (n.value) {
                                case "1":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Read message"));
                                    break;
                                case "0":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("unread"))
                                }
                        }(r, e, n, a);
                        break;
                    case "filter[has_open_talk][]":
                        !function(e, t, a, n) {
                            if (t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Talks"))
                            },
                            i().isArray(n.value))
                                3 === n.value.length ? t[a].value += ": ".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("value,values,values"))) : t[a].value += ": ".concat(n.value.length);
                            else
                                switch (n.value) {
                                case "without":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Without talks"));
                                    break;
                                case "with_open":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("With open talks"));
                                    break;
                                case "without_open":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Without open talks"))
                                }
                        }(r, e, n, a);
                        break;
                    case "filter[mailbox][]":
                        !function(e, t, a, n, i) {
                            var r = i.findWhere({
                                id: parseInt(n.value)
                            });
                            t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Mail inbox"), r.get("email"))
                            }
                        }(r, e, n, a, this.filter.params.mailboxes);
                        break;
                    case "filter[has_attachments]":
                    case "filter[is_unread]":
                    case "filter[from_parser]":
                    case "filter[has_entity]":
                        !function(e, t, a, n) {
                            var i, r;
                            switch (e) {
                            case "filter[has_attachments]":
                                i = (0,
                                o.i18n)("Attachments");
                                break;
                            case "filter[is_unread]":
                                i = (0,
                                o.i18n)("unread");
                                break;
                            case "filter[from_parser]":
                                i = (0,
                                o.i18n)("auto-processed");
                                break;
                            case "filter[has_entity]":
                                i = (0,
                                o.i18n)("linked to leads")
                            }
                            r = "Y" === n.value ? (0,
                            o.i18n)("Yes") : (0,
                            o.i18n)("No"),
                            t[a] = {
                                key: e,
                                value: _(i, r)
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[tasks][]":
                    case "filter[main_contact][tasks][]":
                    case "filter[company][tasks][]":
                        !function(e, t, a, n) {
                            switch (e) {
                            case "filter[tasks][]":
                                t[a] = {
                                    key: e,
                                    value: _((0,
                                    o.i18n)("Tasks"))
                                };
                                break;
                            case "filter[main_contact][tasks][]":
                                t[a] = {
                                    key: e,
                                    value: _("".concat((0,
                                    o.i18n)("Contacts"), ": ").concat((0,
                                    o.i18n)("Tasks")))
                                };
                                break;
                            default:
                                t[a] = {
                                    key: e,
                                    value: _("".concat((0,
                                    o.i18n)("notes_filter_companies"), ": ").concat((0,
                                    o.i18n)("Tasks")))
                                }
                            }
                            if (i().isArray(n.value))
                                7 === n.value.length ? t[a].value += ": ".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("value,values,values"))) : t[a].value += ": ".concat(n.value.length);
                            else
                                switch (n.value) {
                                case "today":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Due today"));
                                    break;
                                case "tomorrow":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Due tomorrow"));
                                    break;
                                case "week":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Due this week"));
                                    break;
                                case "month":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Due this month"));
                                    break;
                                case "quarter":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Due this quarter"));
                                    break;
                                case "no_tasks":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("No To-dos assigned"));
                                    break;
                                case "failed_tasks":
                                    t[a].value += ": ".concat((0,
                                    o.i18n)("Overdue"))
                                }
                        }(r, e, n, a);
                        break;
                    case "filter[status_id][]":
                    case "filter[dealstatus][]":
                        f.apply(this, [r, e, n, a, t]);
                        break;
                    case "filter[loss_reason_id][]":
                        p.apply(this, [r, e, n, a]);
                        break;
                    case "filter[size][from]":
                    case "filter[size][to]":
                    case "filter[price][from]":
                    case "filter[price][to]":
                    case "filter[next_price][from]":
                    case "filter[next_price][to]":
                    case "filter[ltv][from]":
                    case "filter[ltv][to]":
                    case "filter[purchases_count][from]":
                    case "filter[purchases_count][to]":
                    case "filter[average_check][from]":
                    case "filter[average_check][to]":
                    case "filter[labor_cost][from]":
                    case "filter[labor_cost][to]":
                        !function(e, t, a, n) {
                            var r, s, l, c = e.slice(0, i().lastIndexOf(e, "["));
                            switch (e) {
                            case "filter[size][from]":
                            case "filter[size][to]":
                                r = (0,
                                o.i18n)("Size"),
                                s = "" === n.get("filter[size][from]") ? "0" : n.get("filter[size][from]"),
                                l = "" === n.get("filter[size][to]") ? "" : " - ".concat(n.get("filter[size][to]"));
                                break;
                            case "filter[price][from]":
                            case "filter[price][to]":
                                r = (0,
                                o.i18n)("Sale"),
                                s = "" === n.get("filter[price][from]") ? "0" : n.get("filter[price][from]"),
                                l = "" === n.get("filter[price][to]") ? "" : " - ".concat(n.get("filter[price][to]"));
                                break;
                            case "filter[next_price][from]":
                            case "filter[next_price][to]":
                                r = (0,
                                o.i18n)("Expected amount"),
                                s = "" === n.get("filter[next_price][from]") ? "0" : n.get("filter[next_price][from]"),
                                l = "" === n.get("filter[next_price][to]") ? "" : " - ".concat(n.get("filter[next_price][to]"));
                                break;
                            case "filter[ltv][from]":
                            case "filter[ltv][to]":
                                r = (0,
                                o.i18n)("Total sales value"),
                                s = "" === n.get("filter[ltv][from]") ? "0" : n.get("filter[ltv][from]"),
                                l = "" === n.get("filter[ltv][to]") ? "" : " - ".concat(n.get("filter[ltv][to]"));
                                break;
                            case "filter[purchases_count][from]":
                            case "filter[purchases_count][to]":
                                r = (0,
                                o.i18n)("Purchases count"),
                                s = "" === n.get("filter[purchases_count][from]") ? "0" : n.get("filter[purchases_count][from]"),
                                l = "" === n.get("filter[purchases_count][to]") ? "" : " - ".concat(n.get("filter[purchases_count][to]"));
                                break;
                            case "filter[average_check][from]":
                            case "filter[average_check][to]":
                                r = (0,
                                o.i18n)("Average check"),
                                s = "" === n.get("filter[average_check][from]") ? "0" : n.get("filter[average_check][from]"),
                                l = "" === n.get("filter[average_check][to]") ? "" : " - ".concat(n.get("filter[average_check][to]"));
                                break;
                            case "filter[labor_cost][from]":
                            case "filter[labor_cost][to]":
                                r = (0,
                                o.i18n)("Labor costs (column)"),
                                s = "" === n.get("filter[labor_cost][from]") ? "0" : n.get("filter[labor_cost][from]"),
                                l = "" === n.get("filter[labor_cost][to]") ? "" : " - ".concat(n.get("filter[labor_cost][to]"))
                            }
                            t[a] = {
                                key: c,
                                value: _(r, s + l)
                            }
                        }(r, e, n, t);
                        break;
                    case "filter[status][]":
                        !function(e, t, a, n) {
                            var r = (0,
                            o.i18n)("Stage");
                            i().isArray(n.value) ? 2 === n.value.length ? t[a] = {
                                key: e,
                                value: _("".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("stage,stages"))))
                            } : i().each(n.value, (function(e, n) {
                                0 === n ? t[a] = "uncompl" === e ? {
                                    key: e,
                                    value: _(r, (0,
                                    o.i18n)("Expired"))
                                } : {
                                    key: e,
                                    value: _(r, (0,
                                    o.i18n)("Completed"))
                                } : t[a].value += ", ".concat("uncompl" === e ? (0,
                                o.i18n)("Expired") : (0,
                                o.i18n)("Completed"))
                            }
                            )) : "uncompl" === n.value ? t[a] = {
                                key: e,
                                value: _(r, (0,
                                o.i18n)("Expired"))
                            } : t[a] = {
                                key: e,
                                value: _(r, (0,
                                o.i18n)("Completed"))
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[task_type][]":
                        !function(e, t, a, n) {
                            var r = APP.constant("task_types")
                              , s = []
                              , l = "";
                            switch (n.value = i().isArray(n.value) ? n.value : [n.value],
                            (s = i().map(n.value, (function(e) {
                                if (e = parseInt(e),
                                i().contains([1, 2], e))
                                    return APP.todo_types[e];
                                var t = i().find(r, (function(t) {
                                    return parseInt(t.id) === e
                                }
                                ));
                                return t ? t.option : e
                            }
                            ))).length) {
                            case 0:
                                break;
                            case 1:
                                l = s[0];
                                break;
                            default:
                                l = [s[0], "".concat((0,
                                o.i18n)("required_numeral_more"), " ").concat(s.length - 1)].join(", ")
                            }
                            t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Type"), l)
                            }
                        }(r, e, n, a);
                        break;
                    case "segments":
                    case "filter[segments][]":
                        m.apply(this, [r, e, n, a, t]);
                        break;
                    case "tag[]":
                        v.apply(this, [r, e, n, a, t]);
                        break;
                    case "updated_at_from":
                        !function(e, t, a, n) {
                            var r = "closed" === (n.get("filter[date][type]") || n.get("date[type]")) ? (0,
                            o.i18n)("Closed") : (0,
                            o.i18n)("Created");
                            if (a.value) {
                                switch (!0) {
                                case !i().isEmpty(n.get("updated_at_from")) && !i().isEmpty(n.get("updated_at_to")):
                                    r += ": ".concat(n.get("updated_at_from"), " - ").concat(n.get("updated_at_to"));
                                    break;
                                case !i().isEmpty(n.get("updated_at_from")):
                                    r += ": ".concat(n.get("updated_at_from"));
                                    break;
                                case !i().isEmpty(n.get("updated_at_to")):
                                    r += ": ".concat(n.get("updated_at_to"))
                                }
                                e[t] = {
                                    key: a.key,
                                    value: r
                                }
                            }
                        }(e, n, a, t);
                        break;
                    case "filter_date_from":
                    case "filter[date][type]":
                    case "date[type]":
                    case "date[from]":
                    case "filter[date][from]":
                    case "filter[date][date_preset]":
                    case "filter[date_preset]":
                    case "date_preset":
                    case "filter[main_contact][date_preset]":
                    case "filter[company][date_preset]":
                    case "filter[active_talks][date_preset]":
                    case "filter[company][date][from]":
                    case "filter[main_contact][date][from]":
                    case "filter[active_talks][from]":
                        !function(e, t, a, n, r) {
                            var l, c, u;
                            switch (u = i().contains(["filter_date_from", "filter[date_preset]", "filter[date][date_preset]", "date_preset", "filter[date][type]", "date[type]", "date[from]", "filter[main_contact][date][from]", "filter[main_contact][date_preset]", "filter[company][date][from]", "filter[company][date_preset]", "filter[next_date][from]", "filter[next_date][date_preset]", "filter[active_talks][from]", "filter[active_talks][date_preset]"], e) ? e : e.slice(0, i().lastIndexOf(e, "[")),
                            e) {
                            case "date[type]":
                            case "filter[date][type]":
                                l = r.get("filter[date][type]") || r.get("date[type]"),
                                n.value = "";
                                break;
                            case "filter_date_from":
                            case "date_preset":
                            case "filter[date_preset]":
                            case "filter[date][date_preset]":
                                l = r.get("filter_date_switch") || r.get("filter[date][type]") || r.get("date[type]"),
                                c = r.get("filter_date_to");
                                break;
                            case "filter[main_contact][date][from]":
                            case "filter[main_contact][date_preset]":
                                l = r.get("filter[main_contact][type]"),
                                c = r.get("filter[main_contact][date][to]");
                                break;
                            case "filter[active_talks][from]":
                            case "filter[active_talks][date_preset]":
                                l = "active_talks",
                                c = r.get("filter[active_talks][to]");
                                break;
                            case "filter[company][date][from]":
                            case "filter[company][date_preset]":
                                l = r.get("filter[company][type]"),
                                c = r.get("filter[company][date][to]");
                                break;
                            case "filter[next_date][from]":
                            case "filter[next_date][date_preset]":
                                c = r.get("filter[next_date][to]");
                                break;
                            case "filter[date][from]":
                            case "date[from]":
                                l = r.get("filter[date][type]") || r.get("date[type]"),
                                c = r.get("filter[date][to]") || r.get("date[to]")
                            }
                            i().contains(["filter[date_preset]", "filter[date][date_preset]", "date_preset", "filter[main_contact][date_preset]", "filter[company][date_preset]", "filter[next_date][date_preset]", "filter[active_talks][date_preset]"], e) && (n.value = y(n.value)),
                            n.value === s()([1, 0, 1]).format(APP.system.format.date.date) ? n.value = "".concat((0,
                            o.i18n)("deals to").charAt(0).toUpperCase() + (0,
                            o.i18n)("deals to").substr(1), " ").concat(c) : n.value += i().isUndefined(c) || "" === c ? "" : " - ".concat(c),
                            i().isUndefined(l) && (l = r.get("fake"));
                            var d = "";
                            "closed" === l ? t[a] = {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("Closed"), n.value)
                            } : "in-work" === l || "in_work" === l ? t[a] = {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("In work"), n.value)
                            } : i().contains(["modified", "modify", "updated_at"], l) ? t[a] = {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("Modified"), n.value)
                            } : "created" === l || "create" === l ? t[a] = {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("Created"), n.value)
                            } : "date" === l ? t[a] = {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("Date within"), n.value)
                            } : t.filter_date_switch ? t[a] = {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("In work"), n.value)
                            } : t[a] = "active_talks" === l ? {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("Active talks"), n.value)
                            } : {
                                key: u,
                                value: _(d + (0,
                                o.i18n)("Created"), n.value)
                            }
                        }(r, e, n, a, t);
                        break;
                    case "filter[next_date][date_preset]":
                    case "filter[next_date][from]":
                    case "filter[next_date][to]":
                        !function(e, t, a, n, r) {
                            var s = "" === r.get("filter[next_date][to]") ? "" : " - ".concat(r.get("filter[next_date][to]"))
                              , l = e.slice(0, i().lastIndexOf(e, "["));
                            t[a] = {
                                key: l,
                                value: _((0,
                                o.i18n)("Next purchase"), "filter[next_date][date_preset]" === e ? "" : n.value + s)
                            }
                        }(r, e, n, a, t);
                        break;
                    case "filter[main_user][]":
                    case "filter[created_by][]":
                    case "filter[updated_by][]":
                    case "filter[modified_by][]":
                        !function(e, t, a, n, r) {
                            var s, c, u = APP.getBaseEntity();
                            "filter[main_user][]" === e ? s = _((0,
                            o.i18n)("Users")) : "filter[created_by][]" === e ? "leads" === u || "customers" === u || "contacts" === u ? s = _((0,
                            o.i18n)("Created by")) : "todo" === u ? s = _((0,
                            o.i18n)("Authors")) : "files" === u && (s = _((0,
                            o.i18n)("Created by (masculine)"))) : "filter[updated_by][]" === e && "files" === u ? s = _((0,
                            o.i18n)("Updated by (masculine)")) : "leads" === u ? s = _((0,
                            o.i18n)("Modified by")) : "customers" !== u && "contacts" !== u || (s = _((0,
                            o.i18n)("Modified by"))),
                            i().isArray(n.value) && n.value.length > 1 && r.get(e) ? (c = r.get(e).length,
                            t[a] = {
                                key: e,
                                value: "".concat(s, ": ").concat(c)
                            }) : i().isArray(n.value) && "group" === n.value[0].substr(0, 5) || (i().isArray(n.value) ? "group" === n.value[0].substr(0, 5) : "group" === n.value.substr(0, 5)) ? t[a] = {
                                key: e,
                                value: "".concat(s, ": ").concat((0,
                                l.getGroupName)(n.value))
                            } : (i().isArray(n.value) ? -1 === parseInt(n.value[0]) : -1 === parseInt(n.value)) ? t[a] = {
                                key: e,
                                value: "".concat(s, ": ").concat((0,
                                o.i18n)("Client (user select)"))
                            } : t[a] = {
                                key: e,
                                value: "".concat(s, ": ").concat((0,
                                l.getUserName)(n.value))
                            }
                        }(r, e, n, a, t);
                        break;
                    case "filter[unsorted_category][]":
                        !function(e, t, a, n) {
                            var r = APP.constant("unsorted_categories");
                            i().isArray(n.value) ? n.value.length === i().keys(r).length ? t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Unsorted category"), "".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("value,values,values"))))
                            } : t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Unsorted category"), n.value.length)
                            } : t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Unsorted category"), (0,
                                o.i18n)("unsorted_category_".concat(r[n.value])))
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[lead_source][]":
                        !function(e, t, a, n) {
                            var r = APP.constant("lead_sources");
                            i().isArray(n.value) && r ? n.value.length === i().keys(r).length ? t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Source of lead"), "".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("value,values,values"))))
                            } : t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Source of lead"), n.value.length)
                            } : t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Source of lead"), r[n.value].option ? r[n.value].option : "")
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[source_id]":
                        !function(e, t, a, n) {
                            var i = "";
                            APP.constant("sources") && APP.constant("sources")[n.value] && APP.constant("sources")[n.value].option && (i = APP.constant("sources")[n.value].option),
                            t[a] = {
                                key: e,
                                value: _((0,
                                o.i18n)("Source"), i)
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[products][]":
                        !function(e, t, a, n) {
                            var r = i().isArray(n.value) ? n.value.length : n.value.length > 0 ? 1 : 0;
                            t[a] = {
                                key: e,
                                value: "".concat((0,
                                o.i18n)("Products"), ": ").concat(r)
                            }
                        }(r, e, n, a);
                        break;
                    case "filter[event_type][]":
                        h.apply(this, [r, e, n, "xevents", a]);
                        break;
                    case "filter[entity][]":
                        h.apply(this, [r, e, n, "object", a]);
                        break;
                    case "filter[value_after]":
                    case "filter[value_after][]":
                    case "filter[value_after][status_lead][]":
                    case "filter[value_after][helpbot][]":
                    case "filter[value_after][cf][values][]":
                    case "filter[value_after][responsible][]":
                    case "filter[value_after][status_customer][]":
                    case "filter[value_after][segments_ids][]":
                        h.apply(this, [r, e, n, "value_after", a]);
                        break;
                    case "filter[value_before]":
                    case "filter[value_before][]":
                    case "filter[value_before][status_lead][]":
                    case "filter[value_before][helpbot][]":
                    case "filter[value_before][cf][values][]":
                    case "filter[value_before][responsible][]":
                    case "filter[value_before][status_customer][]":
                    case "filter[value_before][segments_ids][]":
                        h.apply(this, [r, e, n, "value_before", a]);
                        break;
                    case "role_id":
                    case "role_id[]":
                        !function(e, t, a) {
                            var n;
                            if (a.value) {
                                i().isArray(a.value) && 1 === a.value.length && (a.value = a.value[0]);
                                var r = i().find(APP.data.current_view.params.existed_data.roles, (function(e) {
                                    return e.id.toString() === a.value
                                }
                                ));
                                r || "admin" !== a.value ? r && (n = r.name) : n = (0,
                                o.i18n)("Administrator"),
                                e[t] = {
                                    key: a.key,
                                    value: i().isArray(a.value) ? "".concat((0,
                                    o.numeralWord)(a.value.length, (0,
                                    o.i18n)("role,roles,roles")), ":&nbsp;").concat(a.value.length) : "".concat((0,
                                    o.numeralWord)(1, (0,
                                    o.i18n)("role,roles,roles")), ":&nbsp;").concat(n)
                                }
                            }
                        }(e, n, a);
                        break;
                    case "group_id":
                    case "group_id[]":
                        !function(e, t, a) {
                            var n;
                            a.value && (i().isArray(a.value) && 1 === a.value.length && (a.value = a.value[0]),
                            "free" === a.value ? n = APP.lang["Free users"] : APP.data.current_view.params.existed_data.groups[a.value] && (n = APP.data.current_view.params.existed_data.groups[a.value].name),
                            e[t] = {
                                key: a.key,
                                value: i().isArray(a.value) ? "".concat((0,
                                o.numeralWord)(a.value.length, (0,
                                o.i18n)("group,groups,groups")), ":&nbsp;").concat(a.value.length) : "".concat((0,
                                o.numeralWord)(1, (0,
                                o.i18n)("group,groups,groups")), ":&nbsp;").concat(n)
                            })
                        }(e, n, a);
                        break;
                    case "active":
                    case "active[]":
                        !function(e, t, a) {
                            a.value && (i().isArray(a.value) && 1 === a.value.length && (a.value = a.value[0]),
                            e[t] = {
                                key: a.key,
                                value: i().isArray(a.value) ? "".concat((0,
                                o.i18n)("All"), " ").concat((0,
                                o.numeralWord)("all", (0,
                                o.i18n)("user,user,users"))) : "Y" === a.value ? (0,
                                o.i18n)("Active users") : (0,
                                o.i18n)("Inactive users")
                            })
                        }(e, n, a);
                        break;
                    case "is_mfa_enabled":
                    case "is_mfa_enabled[]":
                        !function(e, t, a) {
                            if (a.value) {
                                var n;
                                switch (i().isArray(a.value) && 1 === a.value.length && (a.value = i().first(a.value)),
                                !0) {
                                case i().isArray(a.value):
                                    n = (0,
                                    o.i18n)("All verification types");
                                    break;
                                case "Y" === a.value:
                                    n = (0,
                                    o.i18n)("Users with 2-step verification");
                                    break;
                                default:
                                    n = (0,
                                    o.i18n)("Users without 2-step verification")
                                }
                                e[t] = {
                                    key: a.key,
                                    value: n
                                }
                            }
                        }(e, n, a);
                        break;
                    case "label[]":
                    case "is_read[]":
                        !function(e, t, a) {
                            a.value && (e[t] = {
                                key: a.key,
                                value: (0,
                                o.i18n)("statuses")
                            })
                        }(e, n, a);
                        break;
                    case "provider[]":
                        A((0,
                        o.i18n)("Sources"), e, n, a);
                        break;
                    case "status[]":
                        b((0,
                        o.i18n)("Conversation status"), e, n, a);
                        break;
                    case "emotion[]":
                    case "emotion":
                        b((0,
                        o.i18n)("Sentiment detected"), e, n, a);
                        break;
                    case "responsible":
                    case "responsible[]":
                        b((0,
                        o.i18n)("Resp. user"), e, n, a);
                        break;
                    case "last_message_author":
                    case "last_message_author[]":
                        b((0,
                        o.i18n)("Last message author"), e, n, a);
                        break;
                    case "subscribed_group":
                    case "subscribed_user":
                    case "subscribed_user[]":
                    case "subscribed_group[]":
                        b((0,
                        c.isFeatureAvailable)("global_inbox") ? (0,
                        o.i18n)("Lead subscribers") : (0,
                        o.i18n)("Participants"), e, n, a);
                        break;
                    case "participants_users":
                    case "participants_groups":
                    case "participants_users[]":
                    case "participants_groups[]":
                        b((0,
                        o.i18n)("Participants"), e, n, a);
                        break;
                    case "is_starred[]":
                        e[n] = {
                            key: r,
                            value: _((0,
                            o.i18n)("Starred"))
                        };
                        break;
                    case "interaction_status[]":
                        e[n] = {
                            key: r,
                            value: _((0,
                            o.i18n)("Interaction status"))
                        };
                        break;
                    case "inbox_chat_source[]":
                        A((0,
                        o.i18n)("Channels"), e, n, a);
                        break;
                    default:
                        !function(e, t, a) {
                            -1 === t[a].key.indexOf("cf") && -1 === t[a].key.indexOf("custom_fields") && (t[a] = {
                                key: "",
                                value: ""
                            })
                        }(0, e, n)
                    }
                    -1 !== r.indexOf("filter[pipe]") && g.apply(this, [r, e, n, a, t])
                }
                ), this)
            },
            prepareCustomOptions: function(e) {
                var t, a, n = u.extend(!0, {}, APP.constant("account").predefined_cf, APP.constant("account").cf), r = this.filter.form.model;
                i().each(e, (function(l, c) {
                    var u = l.key;
                    e[c] = {
                        key: u,
                        value: (0,
                        o.getEscapedEntity)(l.value)
                    },
                    -1 === u.indexOf("cf") && -1 === u.indexOf("custom_fields") || (t = -1 !== u.indexOf("company") ? "".concat((0,
                    o.i18n)("notes_filter_companies"), ": ") : -1 === u.indexOf("main_contact") ? "" : "".concat((0,
                    o.i18n)("Contacts"), ": "),
                    a = Number(i().propertyOf(u.match(/\[(cf|custom_fields)\]\[(\d+)\]/))(2)),
                    -1 !== u.indexOf("address_line") && (a = String(a).slice(0, String(a).length - 1)),
                    i().find(n, (function(n) {
                        if (n.ID == a)
                            switch (parseInt(n.TYPE_ID)) {
                            case APP.cf_types.select:
                            case APP.cf_types.multiselect:
                            case APP.cf_types.radiobutton:
                                !function(e, t, a, n, r, s) {
                                    i().isArray(n.value) ? (r += s.NAME,
                                    i().each(n.value, (function(n, o) {
                                        i().find(s.ENUMS, (function(i) {
                                            parseInt(i.ID) === parseInt(n) && (0 === o ? t[a] = {
                                                key: e,
                                                value: "".concat(r, ": ").concat(i.VALUE)
                                            } : t[a].value += ", ".concat(i.VALUE))
                                        }
                                        ))
                                    }
                                    ))) : i().find(s.ENUMS, (function(i) {
                                        if (parseInt(i.ID) === parseInt(n.value))
                                            return t[a] = {
                                                key: e,
                                                value: "".concat(r + s.NAME, ": ").concat(i.VALUE)
                                            };
                                        "empty" === n.value && (t[a] = {
                                            key: e,
                                            value: "".concat(r + s.NAME, ": ").concat((0,
                                            o.i18n)("empty"))
                                        })
                                    }
                                    ))
                                }(u, e, c, l, t, n);
                                break;
                            case APP.cf_types.date_time:
                            case APP.cf_types.date:
                            case APP.cf_types.birthday:
                                !function(e, t, a, n, r, o) {
                                    var l = e.slice(0, i().lastIndexOf(e, "["))
                                      , c = r.get("".concat(l, "[from]"))
                                      , u = r.get("".concat(l, "[to]"))
                                      , d = r.get("".concat(l, "[date_preset]"))
                                      , _ = APP.system.format.date.date
                                      , f = APP.system.format.date.date_short
                                      , p = y(d);
                                    o.TYPE_ID === APP.cf_types.birthday && (c = s()(c, _).format(f),
                                    u = s()(u, _).format(f)),
                                    !d && c && (p = c + (i().isUndefined(u) || "" === u ? "" : " - ".concat(u))),
                                    t[a] = {
                                        key: l,
                                        value: n + o.NAME + (p ? ": ".concat(p) : "")
                                    }
                                }(u, e, c, t, r, n);
                                break;
                            case APP.cf_types.monetary:
                            case APP.cf_types.numeric:
                            case APP.cf_types.price:
                                !function(e, t, a, n, r, s) {
                                    var o = i().isUndefined(s.get(e.replace("[from]", "[to]"))) || "" === s.get(e.replace("[from]", "[to]")) ? "" : " - ".concat(s.get(e.replace("[from]", "[to]")))
                                      , l = i().isUndefined(s.get(e.replace("[to]", "[from]"))) || "" === s.get(e.replace("[to]", "[from]")) ? "0" : +s.get(e.replace("[to]", "[from]"))
                                      , c = e.slice(0, i().lastIndexOf(e, "["));
                                    t[a] = {
                                        key: c,
                                        value: "".concat(n + r.NAME, ": ").concat(l).concat(o)
                                    }
                                }(u, e, c, t, n, r);
                                break;
                            case APP.cf_types.chained_list:
                                !function(e, t, a, n, r) {
                                    var s = e.slice(0, i().lastIndexOf(e, "["));
                                    t[a] = {
                                        key: s,
                                        value: n + r.NAME
                                    }
                                }(u, e, c, t, n);
                                break;
                            case APP.cf_types.linked_entity:
                                !function(e, t, a, n, r) {
                                    var s = i().isArray(r.value) ? r.value.length : r.value.length > 0 ? 1 : 0;
                                    t[a] = {
                                        key: e,
                                        value: "".concat(n.NAME, ": ").concat(s)
                                    }
                                }(u, e, c, n, l);
                                break;
                            case APP.cf_types.checkbox:
                                e[c] = {
                                    key: u,
                                    value: "".concat(t + n.NAME, ": ").concat("N" === l.value ? (0,
                                    o.i18n)("Q_TOOLS_RADIO_NOT_CHECKED") : (0,
                                    o.i18n)("Q_TOOLS_RADIO_CHECKED"))
                                };
                                break;
                            case APP.cf_types.smart_address:
                                !function(e, t, a, n, r, s) {
                                    var o = e.slice(0, i().lastIndexOf(e, "["))
                                      , l = 0;
                                    t[a] = {
                                        key: o,
                                        value: n + r.NAME
                                    },
                                    i().each(r.sub_types, (function(e) {
                                        s.get("".concat(o, "[").concat(e, "]")) && (0 === l ? (l += 1,
                                        t[a].value += ": ".concat("country" === e ? r.VARIANTS.country[s.get("".concat(o, "[").concat(e, "]"))] : s.get("".concat(o, "[").concat(e, "]")))) : t[a].value += ", ".concat("country" === e ? r.VARIANTS.country[s.get("".concat(o, "[").concat(e, "]"))] : s.get("".concat(o, "[").concat(e, "]"))))
                                    }
                                    ), this)
                                }(u, e, c, t, n, r);
                                break;
                            case APP.cf_types.text:
                            case APP.cf_types.url:
                            case APP.cf_types.multitext:
                            case APP.cf_types.textarea:
                            case APP.cf_types.streetaddress:
                            case APP.cf_types.gua:
                            case APP.cf_types.tracking_data:
                                !function(e, t, a, n, i, r) {
                                    t[a] = {
                                        key: e,
                                        value: "".concat(n + i.NAME, ": ").concat(r.value)
                                    }
                                }(u, e, c, t, n, l)
                            }
                    }
                    )))
                }
                ), this)
            }
        };
        var k = "../build/transpiled/interface/search/partials/prepare_filter_options";
        window.define(k, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([k])
    }
    ,
    146521: (e, t, a) => {
        a.r(t),
        a.d(t, {
            PageLoadErrorHandlerMixin: () => n.PageLoadErrorHandlerMixin
        });
        var n = a(211802)
    }
    ,
    211802: (e, t, a) => {
        a.r(t),
        a.d(t, {
            PageLoadErrorHandlerMixin: () => f
        });
        var n = a(567297)
          , i = a(598701)
          , r = a(678640)
          , s = a(880774)
          , o = a(585435)
          , l = a(77305);
        function c(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    c(e, t, a[t])
                }
                ))
            }
            return e
        }
        var d = null
          , _ = function(e) {
            var t = e.reason
              , a = e.error;
            if (!d) {
                var n = {
                    class_name: "page-error-modal",
                    button_class: "button-input_blue",
                    init: function() {
                        var e;
                        null === (e = document.activeElement) || void 0 === e || e.blur()
                    },
                    destroy: function() {
                        d = null,
                        APP.constant("is_search_disabled", !1),
                        APP.constant("is_search_restoring", !1)
                    },
                    message: [{
                        text_i18n: a
                    }],
                    close_on_accept: !0
                };
                switch (t) {
                case o.PageLoadErrorReason.SEARCH_DISABLED:
                    d = new l.default(u({
                        text: (0,
                        s.i18n)("Search feature not available"),
                        accept_text: (0,
                        s.i18n)("Select a plan"),
                        decline_text: (0,
                        s.i18n)("Close"),
                        accept: function() {
                            APP.router.navigate("/settings/pay/", {
                                trigger: !0,
                                replace: !0
                            })
                        }
                    }, n));
                    break;
                case o.PageLoadErrorReason.SEARCH_RESTORING:
                    d = new l.default(u({
                        text: (0,
                        s.i18n)("Search feature activation in progress"),
                        accept_text: (0,
                        s.i18n)("Got it"),
                        no_cancel: !0
                    }, n))
                }
            }
        }
          , f = {
            response: {},
            construct: function() {
                var e = this;
                (0,
                i.onPageFullyLoaded)((function() {
                    return e.processPageLoadError(e.response)
                }
                ))
            },
            processPageLoadError: function(e) {
                var t = e || {}
                  , a = t.reason
                  , n = t.error;
                switch (!0) {
                case Boolean(a && n):
                    _({
                        reason: a,
                        error: n
                    });
                    break;
                case APP.constant("is_search_disabled"):
                    _({
                        reason: o.PageLoadErrorReason.SEARCH_DISABLED,
                        error: (0,
                        s.i18n)("search_disabled")
                    });
                    break;
                case APP.constant("is_search_restoring"):
                    _({
                        reason: o.PageLoadErrorReason.SEARCH_RESTORING,
                        error: (0,
                        s.i18n)("search_restoring")
                    })
                }
            },
            processAjaxError: function(e) {
                e.statusText !== n.JQXHR_STATUS_TEXT.ABORT && this.processPageLoadError((0,
                r.cleanResponse)(e.responseJSON))
            }
        }
    }
    ,
    585435: (e, t, a) => {
        var n;
        a.r(t),
        a.d(t, {
            PageLoadErrorReason: () => n
        }),
        function(e) {
            e.SEARCH_DISABLED = "search_disabled",
            e.SEARCH_RESTORING = "search_restoring"
        }(n || (n = {}))
    }
    ,
    399228: (e, t, a) => {
        a.r(t),
        a.d(t, {
            FILTER_HASH_KEY: () => n
        });
        var n = "with_filter"
    }
    ,
    20909: (e, t, a) => {
        a.r(t),
        a.d(t, {
            forceReloadForApplyHashFilter: () => r
        });
        var n = a(315702)
          , i = a(399228)
          , r = function(e) {
            var t = e.url
              , a = e.filterString
              , r = e.isTrigger
              , s = a ? "".concat(i.FILTER_HASH_KEY, "=y#").concat(a) : ""
              , o = "force_reload=".concat((0,
            n.randHex)(), "&").concat(s);
            APP.router.navigate("".concat(t, "?").concat(o), {
                trigger: r
            }),
            APP.router.navigate("".concat(t, "?").concat(s), {
                trigger: !1,
                replace: !0
            })
        }
    }
    ,
    713368: (e, t, a) => {
        a.r(t),
        a.d(t, {
            getFilterHashQueryString: () => r
        });
        var n = a(312309)
          , i = a(399228)
          , r = function() {
            return "y" === ((0,
            n.getQueryParam)(i.FILTER_HASH_KEY) || "n") ? window.location.hash.replace("#", "") : (0,
            n.getQueryString)()
        }
    }
    ,
    456107: (e, t, a) => {
        a.r(t),
        a.d(t, {
            forceReloadForApplyHashFilter: () => n.forceReloadForApplyHashFilter,
            getFilterHashQueryString: () => i.getFilterHashQueryString
        });
        var n = a(20909)
          , i = a(713368)
    }
    ,
    941146: (e, t, a) => {
        a.r(t),
        a.d(t, {
            ASIDE_CLOSE_PUBSUB_EVENT: () => n
        });
        var n = "ai:copilot:close"
    }
    ,
    157885: (e, t, a) => {
        a.r(t),
        a.d(t, {
            ASIDE_OPEN_PUBSUB_EVENT: () => n
        });
        var n = "ai:copilot:open"
    }
    ,
    764992: (e, t, a) => {
        a.r(t),
        a.d(t, {
            ASIDE_TOGGLE_ANIMATION_DELAY: () => n
        });
        var n = 500
    }
    ,
    240097: (e, t, a) => {
        a.r(t),
        a.d(t, {
            ASIDE_WIDTH: () => n
        });
        var n = 320
    }
    ,
    430315: (e, t, a) => {
        var n;
        a.r(t),
        a.d(t, {
            JQXHR_READY_STATE: () => n
        }),
        function(e) {
            e[e.UNSENT = 0] = "UNSENT",
            e[e.OPENED = 1] = "OPENED",
            e[e.HEADERS_RECEIVED = 2] = "HEADERS_RECEIVED",
            e[e.LOADING = 3] = "LOADING",
            e[e.DONE = 4] = "DONE"
        }(n || (n = {}))
    }
    ,
    567297: (e, t, a) => {
        var n;
        a.r(t),
        a.d(t, {
            JQXHR_STATUS_TEXT: () => n
        }),
        function(e) {
            e.ABORT = "abort"
        }(n || (n = {}))
    }
    ,
    568706: (e, t, a) => {
        a.r(t),
        a.d(t, {
            getCurrentAsideWidth: () => i
        });
        var n = a(240097)
          , i = function() {
            return "0px" === getComputedStyle(document.documentElement).getPropertyValue("--aside-width").trim() ? 0 : n.ASIDE_WIDTH
        }
    }
    ,
    292531: (e, t, a) => {
        a.r(t),
        a.d(t, {
            getCurrentAsideWidth: () => n.getCurrentAsideWidth
        });
        var n = a(568706)
    }
    ,
    817790: (e, t, a) => {
        a.r(t),
        a.d(t, {
            getCurrentAsideWidth: () => n.getCurrentAsideWidth,
            toggleAside: () => i.toggleAside
        });
        var n = a(292531)
          , i = a(411103)
    }
    ,
    411103: (e, t, a) => {
        a.r(t),
        a.d(t, {
            toggleAside: () => n.toggleAside
        });
        var n = a(683354)
    }
    ,
    683354: (e, t, a) => {
        a.r(t),
        a.d(t, {
            toggleAside: () => c
        });
        var n = a(267651)
          , i = a.n(n)
          , r = a(941146)
          , s = a(157885)
          , o = a(764992)
          , l = a(23456)
          , c = function(e) {
            var t = function() {
                var e = document.getElementById("aside")
                  , t = document.getElementById("page");
                return (null == e ? void 0 : e.classList.contains("active")) && (null == t ? void 0 : t.classList.contains("minimized"))
            }();
            if (!(!0 === e && t || !1 === e && !t)) {
                var a = document.documentElement;
                a.classList.add("asideToggling"),
                setTimeout((function() {
                    a.classList.remove("asideToggling")
                }
                ), o.ASIDE_TOGGLE_ANIMATION_DELAY);
                var n = document.getElementById("aside")
                  , c = document.getElementById("page");
                if (n && c)
                    switch (e) {
                    case !0:
                        n.classList.add("active"),
                        c.classList.add("minimized");
                        break;
                    case !1:
                        n.classList.remove("active"),
                        c.classList.remove("minimized");
                        break;
                    default:
                        n.classList.toggle("active"),
                        c.classList.toggle("minimized")
                    }
                var u = "0px" === getComputedStyle(document.documentElement).getPropertyValue("--aside-width").trim() ? "var(--aside-max-width)" : "0px";
                document.documentElement.style.setProperty("--aside-width", u);
                var d = 0
                  , _ = function() {
                    window.dispatchEvent(new Event("resize")),
                    d = requestAnimationFrame(_)
                };
                d = requestAnimationFrame(_),
                setTimeout((function() {
                    cancelAnimationFrame(d)
                }
                ), o.ASIDE_TOGGLE_ANIMATION_DELAY);
                var f = "0px" === u ? r.ASIDE_CLOSE_PUBSUB_EVENT : s.ASIDE_OPEN_PUBSUB_EVENT;
                i().publish(f, !0),
                (0,
                l.kommoLogAmplitude)("AICopilotInterface", {
                    is_open: !t
                })
            }
        }
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
        e._sentryDebugIds[t] = "d0bb22b6-ce94-4e61-bac4-70c2d9cae164",
        e._sentryDebugIdIdentifier = "sentry-dbid-d0bb22b6-ce94-4e61-bac4-70c2d9cae164")
    } catch (e) {}
}();
//# sourceMappingURL=39830.cf98e1b9362b1732183d.js.map
