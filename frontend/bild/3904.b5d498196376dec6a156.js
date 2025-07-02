"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[3904], {
    171228: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => L
        });
        var s = i(661533)
          , r = i.n(s)
          , a = i(55188)
          , n = i.n(a)
          , l = i(460159)
          , o = i.n(l)
          , c = i(162262)
          , h = i.n(c)
          , _ = i(871082)
          , d = i.n(_)
          , f = i(161320)
          , p = i.n(f)
          , u = i(312309)
          , g = i(678640)
          , m = i(886965)
          , y = i(521466)
          , v = i(742161)
          , b = i(391192)
          , w = i(858458)
          , C = i(329223)
          , k = i(227532)
          , P = i(704622)
          , $ = i(279444)
          , A = i(196924)
          , E = i(754660)
          , S = i(517790)
          , x = i(230593)
          , T = i(743094)
          , F = i(704320)
          , O = i(929658)
          , D = i(825496)
          , j = i(814055)
          , W = i(564638)
          , B = ["order_by", "order_type", "filter[order_by]", "filter[order_type]", "clear_order", "term", "skip_filter", "typing"]
          , R = ["filter[size][unit]"];
        i(175396),
        i(580868),
        i(247267);
        var I = y.default.extend({
            _separate_order_by: !1,
            _apply_trigger: !0,
            _searching: !1,
            _classes: function() {
                return {
                    cf_group: "js-cf-group",
                    field: "filter__custom_settings__item",
                    filter_manage: "filter__params_manage",
                    filter_search_inner: "filter-search__inner",
                    filter_search_wrapper: "filter-search__wrapper",
                    group_wrapper: "filter-search__filter__group__wrapper",
                    preset_selected: "filter__list__item-selected",
                    presets_list: "js-filter-list",
                    apply_btn: "filter__params_manage__apply",
                    ribbon_text: "feed-search__ribbon-text"
                }
            },
            _selectors: function() {
                return {
                    hidden_field: "[data-id=%s]",
                    tags_field: ".filter-search__tags-holder",
                    entity_wrapper: ".filter-search__entity-wrapper",
                    entity_wrapper_by_type: '.filter-search__entity-wrapper[data-element-type="%s"]',
                    filter_form: "#filter_form",
                    filter_input: '.filter__form input[name="%s"]',
                    form_input: 'input[name="%s"]',
                    tags_lib_plug_holder: ".filter-search__tags-holder_plug",
                    tags_logic_input: "#filter-search__tags-logic-input_plug",
                    tags_lib: "#filter-search__tags-lib",
                    suggest_list: ".filter__custom_settings__item_suggest-manager ul",
                    leads_checkbox: '.filter__custom_settings__item_statuses :input[type="checkbox"][name^="filter[pipe]"]',
                    leads_checkbox_by_status: '.filter__custom_settings__item_statuses :input[type="checkbox"][name^="filter[pipe]"][value="%s"]',
                    leads_checkbox_by_status_single_ppl: '.filter__custom_settings__item_statuses :input[type="checkbox"][value="%s"]',
                    leads_opened_statuses: '.filter__custom_settings__item_statuses .checkboxes_dropdown__statuses input:not([value="142"]):not([value="143"])',
                    leads_closed_statuses: '.filter__custom_settings__item_statuses .checkboxes_dropdown__statuses input[value="142"],.checkboxes_dropdown__statuses input[value="143"]',
                    leads_select_opened_statuses: '.pipeline-select__dropdown input:not([value="142"]):not([value="143"])',
                    leads_select_closed_statuses: '.pipeline-select__dropdown input[value^="14"]',
                    todo_opened_statuses: ".checkboxes_dropdown__statuses input:not(#cbx_drop_compl)",
                    todo_closed_statuses: "#cbx_drop_compl",
                    segments_container: ".segments-filter",
                    statistic_container: ".statistic-filter"
                }
            },
            eventsInit: function() {
                var e = n().extend({}, this.events, {
                    "submit #filter_form": "apply",
                    "click .js-filter__params_manage__clear": "reset",
                    "click #filter_apply:not(.button-input-disabled)": "apply",
                    'change [name="filter_date_switch"]': "filterDateClosedStatuses",
                    "click .js-filter-field-clear": "_onFieldClearClick",
                    "click .js-filter-search__entity-header": "onLinkedEntityHeaderClick"
                });
                this.delegateEvents(e)
            },
            preloadTemplates: o()._preload(["/tmpl/filter/tags.twig", "/tmpl/filter/in_search/main.twig", "/tmpl/filter/complex.twig", "/tmpl/filter/fields.twig", "/tmpl/filter/in_search/search_suggest.twig"]),
            initialize: function(e) {
                var t = [this.preloadTemplates()]
                  , i = this._findElem("tags_lib_plug_holder");
                this.params = e || {},
                this.checked_fields = {},
                this._separate_order_by = this.params.separate_order_by,
                this.sort_object = [],
                (0,
                g.hasKeys)(this.params, ["preset_filter"]) && this.params.preset_filter && APP.router.navigate("".concat(this.params.url, "?").concat(this.params.preset_filter), {
                    trigger: !1,
                    replace: !0
                }),
                y.default.prototype.initialize.call(this),
                this.params.el || this.setElement(r()("#sidebar")),
                this.form = this._addComponent(O.default.View, {
                    el: this.$("form"),
                    model: O.default.Model
                }),
                this.setDefaultUserSelect(),
                this.listenTo(this.form.model, "filter:reinit", this.needInit),
                this.listenTo(this.form.model, "change", this._onFormChange),
                this.listenTo(this.form.model, "has_changes", n().bind(this.makeFilterButtonsActive, this, !0)),
                this.listenTo(this.form.model, "has_reverted", n().bind(this.makeFilterButtonsActive, this, !1)),
                Promise.all(t).then(n().bind(this.init, this)),
                i.length && this.initTagsLib(i),
                this.initSegmentSuggest()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                this._$document.off("filter:apply".concat(this.ns)),
                y.default.prototype.destroy.apply(this, t)
            },
            init: function() {
                this.fill(),
                this.params._is_in_search || (this.listenTo(this.form.model, "has_changes", n().debounce(this.getOptionsCount, 200)),
                this.listenTo(this.form.model, "has_reverted", n().debounce(this.getOptionsCount, 200)),
                this.getOptionsCount()),
                n().isUndefined(this.params.disabled_users) && (this.params.disabled_users = !0),
                !0 !== this.params.is_list && "leads-pipeline" !== APP.data.current_entity || this._$document.on("filter:apply".concat(this.ns), n().bind(this.apply, this)),
                this.initPresets(),
                this.eventsInit(),
                this.initStatisticFilter();
                var e = this._getInitialParams(void 0, !1);
                this.sort_object = "" === e ? {} : e,
                n().isFunction(this.params.onInit) && this.params.onInit()
            },
            needInit: function() {
                var e = r().Deferred();
                this.fill(),
                this._findElem("tags_lib").length && this.initTagsLib(this.$el.find(".filter-search__tags-lib"), e.resolve)
            },
            _findCustomFieldElement: function(e) {
                return this._findElem("form_input", e).closest(this._selector("field"))
            },
            initStatisticFilter: function() {
                var e, t = {}, i = [], s = this.params;
                "leads" === APP.getBaseEntity() && this._findElem("statistic_container").length && s.groups_cf && s.custom_fields && (e = (n().find(s.groups_cf, (function(e) {
                    return "statistic" === e.id
                }
                ), this) || {}).fields,
                n().each(this.form.model.toJSON(), (function(t, s) {
                    if (/(filter\[(cf|custom_fields)]\[\d+])/.test(s)) {
                        var r = Number(s.replace(/[^\d+]/g, ""));
                        n().contains(e, r) && t && i.push(r)
                    }
                }
                ), this),
                n().each(n().keys(s.custom_fields), (function(r) {
                    n().contains(e, Number(r)) && !n().contains(i, Number(r)) && (t[r] = s.custom_fields[r])
                }
                ), this),
                this._addComponent(F.default, {
                    el: this._findElem("statistic_container").get(0),
                    fields: t,
                    findCustomFieldElement: n().bind(this._findCustomFieldElement, this)
                }))
            },
            initSegmentSuggest: function() {
                "customers" === APP.data.current_entity && this._findElem("segments_container").length && (this.suggest_segment = this._addComponent(T.default, {
                    el: this._findElem("segments_container").get(0),
                    segments: this.params.segments
                }))
            },
            initPresets: function() {
                this._elem("presets_list").length && (this.presets = this._addComponent(D.default, {
                    el: this._elem("presets_list"),
                    filter: this,
                    can_save: this.params.can_save_preset,
                    onLoad: n().bind((function() {
                        this.makeFilterCaptionActive(!1),
                        n().isFunction(this.params.onPresetLoad) && this.params.onPresetLoad()
                    }
                    ), this)
                }))
            },
            initTagsLib: function(e) {
                var t, i;
                this._elem("tags_logic_input").length && (this.tags_logic_input_name || (this.tags_logic_input_name = this._elem("tags_logic_input").attr("name")),
                i = {
                    tags_logic_enabled: !0,
                    tags_logic_input_name: this.tags_logic_input_name,
                    getTagsLogicValue: n().bind((function() {
                        return this.form.model.get(this.tags_logic_input_name)
                    }
                    ), this)
                }),
                t = e.find(":input").not("#filter-search__tags-logic-input_plug").map((function(e, t) {
                    return parseInt(t.value)
                }
                )),
                t = n().filter(t, (function(e) {
                    return !n().isNaN(e)
                }
                )),
                (this.tags_lib = this._addComponent(j.default, n().extend({
                    entity: APP.getBaseEntity(),
                    pipeline_id: this.params.pipeline_id,
                    selected_tags: t,
                    $filter_scroller: this._elem("filter_search_wrapper"),
                    checkSuggestValues: n().bind(this.checkSuggestValues, this),
                    setNeedReload: n().bind((function(e) {
                        this._need_reload = (e || {}).reload
                    }
                    ), this)
                }, i || {}))).fetchData().then(n().bind((function() {
                    e.remove(),
                    this._elem("tags_logic_input").remove(),
                    this._elem("filter_form").append(this.tags_lib.$el),
                    this.$el.addClass("filter-search_two-pane"),
                    this.form.updateCache()
                }
                ), this))
            },
            show: function() {
                var e;
                if (this.params._is_in_search)
                    return this.$el.hasClass("visible") || (this.presets && !this.form.hasChanges() && this.presets.highlight(),
                    this.$el.removeClass("hidden").prepareTransition().addClass("visible"),
                    (0,
                    g.isV3Design)() && (e = this._getFilterScrollbarWidth(),
                    this._elem("filter_manage").css("marginRight", e),
                    this._setFilterWidth(),
                    this._$window.on("resize".concat(this.ns), n().throttle(n().bind(this._setFilterWidth, this), W.WINDOW_RESIZE_THROTTLE_DELAY)))),
                    this
            },
            hide: function() {
                if (this.params._is_in_search)
                    return this._users_select && this._users_select.destroy(),
                    this.$el.removeClass("visible").addClass("hidden"),
                    this._$window.off(this.ns),
                    this
            },
            fillClear: function(e) {
                return this.form.$el.length ? (n().isUndefined(e) && (e = this.form.$(".filter__custom_settings__item :input")),
                b.default.call(this, e),
                this) : this
            },
            fill: function(e) {
                var t = this._getInitialParams(e)
                  , i = this.params.has_pipelines;
                t = (0,
                C.default)(t),
                this.prepareSortArray(t),
                v.default.call(this, t, i),
                this.form.model.updateDefaults(),
                this.form.checkChanges(),
                this.filter_values = t,
                this._$document.trigger("filter:deserialize:callback", [t]);
                var s = (0,
                u.getQueryParam)("term");
                s && (t["filter[tags_logic]"] = null,
                t.term = s,
                this._$document.trigger("filter:term:deserialize:callback", [t]))
            },
            prepareSortArray: function(e) {
                var t, i, s = n().allKeys(e), a = this.$el.find('[name="filter[status_id][]"]').length ? "filter[status_id][]" : this.$el.find('[name^="filter[pipe]"]').length ? this.$el.find('[name^="filter[pipe]"]').first().attr("name") : this.$el.find('[name="filter[dealstatus][]"]').first().attr("name"), l = [];
                return n().each(s, (function(e) {
                    /\[\d\]/.test(e) && l.push("".concat(e.slice(0, e.length - 3), "[]")),
                    -1 !== e.indexOf("date") && -1 !== e.indexOf("to") && (i = e)
                }
                )),
                n().keys(e).length && !n().isUndefined(i) && "" !== i && (n().isUndefined(e[i.replace("to", "from")]) || this.form.model.get(i.replace("to", "from")) === p()([1, 0, 1]).format(APP.system.format.date.date)) && (e[i.replace("to", "from")] = p()([1, 0, 1]).format(APP.system.format.date.date)),
                l = n().uniq(l),
                n().each(l, (function(t) {
                    e[t] = [],
                    n().mapObject(e, (function(i, s) {
                        -1 === s.indexOf(t.slice(0, t.length - 1)) || /\[\]/.test(s) || (e[t].push(i),
                        delete e[s])
                    }
                    ))
                }
                ), this),
                n().mapObject(e, (function(i, s) {
                    var l, o;
                    "filter[!status_id][]" === s ? (e[a] = [],
                    delete e[s],
                    t = r().makeArray(this.$('[name="filter[status_id][]"], [name^="filter[pipe]"]').filter((function() {
                        return !n().contains((0,
                        m.getLeadsWinlostStatuses)(), parseInt(this.value))
                    }
                    )).map((function() {
                        return {
                            name: this.name,
                            value: this.value
                        }
                    }
                    ))),
                    n().each(t, (function(t) {
                        e[a].push(t.value)
                    }
                    ), this)) : "filter[status_id][]" === s && -1 === a.indexOf("[status_id]") ? (e[a] = e[s],
                    delete e[s]) : "filter[status]" === s && "opened" === i ? (l = [],
                    o = r().makeArray(this.$('[name="filter[status_id][]"], [name^="filter[pipe]"]').filter((function() {
                        return !n().contains((0,
                        m.getLeadsWinlostStatuses)(), parseInt(this.value))
                    }
                    )).map((function() {
                        return l.push(this.name),
                        {
                            name: this.name,
                            value: this.value
                        }
                    }
                    ))),
                    l = n().uniq(l),
                    n().each(l, (function(t) {
                        e[t] = []
                    }
                    )),
                    n().each(o, (function(t) {
                        e[t.name].push(t.value)
                    }
                    ))) : "filter[is_lost]" === s && delete e[s]
                }
                ), this),
                e
            },
            setDefaultUserSelect: function() {
                this.$('form [data-is-fn="usersSelectClear"]').length && this.$('form [data-is-fn="usersSelectClear"]').each(n().bind((function(e, t) {
                    var i = r()(t).data("input-name");
                    this.form.model.set(i, ""),
                    this.form.model.defaults[i] = ""
                }
                ), this))
            },
            reset: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e && e.preventDefault && e.preventDefault(),
                this.makeFilterCaptionActive(!1),
                this._findElem("suggest_list").html(""),
                this.form.checkDeleted(),
                this.form.revert(),
                !1 !== e.navigate && APP.router.navigate(d().history.location.pathname, {
                    trigger: !0
                })
            },
            apply: function(e) {
                var t, i, s, a, l, o = (0,
                u.getQueryParam)("term") || "", c = "", h = "", _ = this.form.model.toJSON(this.sort_object);
                this.presets && this.presets.$preset_in_edit && this.presets.presetEditExit(),
                this._$document.trigger("controls:hide"),
                this._elem("apply_btn").trigger("button:load:start"),
                e && e.preventDefault && (e.preventDefault(),
                "click" === e.type && this._$document.trigger("filter:apply:click", e.currentTarget)),
                !0 === this._separate_order_by ? (t = (0,
                u.getQueryParam)("order_type"),
                i = (0,
                u.getQueryParam)("order_by")) : (t = (0,
                u.getQueryParam)("filter[order_type]"),
                i = (0,
                u.getQueryParam)("filter[order_by]")),
                t && i && (!0 === this._separate_order_by ? c += "&order_by=".concat(i, "&order_type=").concat(t) : c = "&filter[order_by]=".concat(i, "&filter[order_type]=").concat(t)),
                o = o.length ? "&term=".concat(o) : "",
                a = this.form.$el.attr("action").trim(),
                (l = r().param(n().reduce(_, (function(e, t, i) {
                    return t && (e[i] = t),
                    e
                }
                ), {}))) && !(0,
                g.hasKeys)(_, ["tag[]"]) ? l = (0,
                u.removeQueryParam)(["filter[tags_logic]"], l) : l && (0,
                g.hasKeys)(_, ["tag[]"]) && !(0,
                g.hasKeys)(_, ["filter[tags_logic]"]) && (l += "&filter[tags_logic]=or"),
                "/" === a.substr(a.length - 1) ? a += "?" : (l.indexOf("element_type") > -1 && (a = a.replace("element_type=1", "").replace("element_type=2", "").replace("element_type=3", "")),
                "?" !== a.substr(a.length - 1) && (a += "&")),
                APP.data.current_view && APP.data.current_view.filterPrepareAction && (l = APP.data.current_view.filterPrepareAction(l)),
                n().isEqual((0,
                u.QStoJSON)(this.getDefaultFilter()), (0,
                u.QStoJSON)(decodeURI(l))) ? h = "skip_filter=Y" : this._getOptionsCount() && (h = l);
                var d = !1
                  , f = a + ((s = h + o + c) ? "".concat(s, "&useFilter=y") : "")
                  , p = APP.router.paths[0];
                return f !== "/".concat(p) && (d = !0),
                APP.router.navigate(f, {
                    trigger: this._apply_trigger
                }),
                this._elem("apply_btn").trigger("button:load:stop"),
                this.$el.trigger("apply:filters", {
                    withPageChange: d && this._apply_trigger
                }),
                !1
            },
            filterDateClosedStatuses: function(e) {
                var t, i, s = r()(e.currentTarget), a = "closed" === s.val(), n = "in_work" === s.val();
                switch (APP.getBaseEntity()) {
                case "leads":
                    this.params.pipeline_id || !this.params.has_pipelines ? (t = this._findElem("leads_opened_statuses"),
                    i = this._findElem("leads_closed_statuses")) : (t = this._findElem("leads_select_opened_statuses"),
                    i = this._findElem("leads_select_closed_statuses"));
                    break;
                case "todo":
                    t = this._findElem("todo_opened_statuses"),
                    i = this._findElem("todo_closed_statuses");
                    break;
                case "stats":
                    t = this._findElem("leads_select_opened_statuses"),
                    i = this._findElem("leads_select_closed_statuses")
                }
                t && i && (t.prop("checked", n || !a).trigger("change"),
                i.prop("checked", n || a).trigger("change"))
            },
            clearFieldFromTable: n().noop,
            _onFieldClearClick: function(e) {
                var t = r()(e.currentTarget).closest(this._selector("field"));
                e.stopPropagation(),
                this._clearField(t)
            },
            _clearField: function(e) {
                var t = e.attr("data-is-fn");
                n().isFunction(this[t]) ? this[t](!1, e) : this.fillClear(e.find("input:not(.js-filter-clear-skip)")),
                this.unsetFilledInputName(e)
            },
            setFilterAttributes: function(e) {
                if (this.form) {
                    this.form.setFormChanges(e, {
                        is_called_inside_on_change: !0,
                        is_input_update_needed: !1
                    }),
                    this.tags_lib && "tag[]"in e && !e["tag[]"] && this.tags_lib.deselectAll();
                    var t = new Set;
                    n().each(e, n().bind((function(e, i) {
                        n().isEmpty(e) && this._findCustomFieldElement(i).each((function(e, i) {
                            t.add(i)
                        }
                        ))
                    }
                    ), this)),
                    t.forEach(n().bind((function(e) {
                        this._clearField(r()(e))
                    }
                    ), this))
                }
            },
            onLinkedEntityHeaderClick: function(e) {
                var t = r()(e.currentTarget).closest(".filter-search__entity-wrapper")
                  , i = "filter-search__entity-wrapper_contracted";
                t.hasClass(i) && t.removeClass(i).siblings(".filter-search__entity-wrapper").addClass(i)
            },
            setUrl: function(e) {
                this.form.$el.attr("action", e)
            },
            makeFilterCaptionActive: function(e) {
                var t = "addClass";
                (e = !!n().isUndefined(e) || e) || (t = "removeClass"),
                r()("#filter_show_btn")[t]("filter-show-btn-active")
            },
            makeFilterButtonsActive: function(e) {
                var t = "addClass";
                (e = !!n().isUndefined(e) || e) || (t = "removeClass"),
                r()("#filter_caption")[t]("showed")
            },
            _onFormChange: function() {
                var e = this.form.model.changedAttributes();
                e && (n().each(e, (function(e, t) {
                    this._addSortArray(t)
                }
                ), this),
                n().isFunction(this.params.onAttributesChange) && this.params.onAttributesChange(e))
            },
            _addSortArray: function(e) {
                "" === this.form.model.get(e) ? delete this.sort_object[e] : this.sort_object[e] = this.form.model.get(e)
            },
            filterCheckValue: function(e, t) {
                var i, s = /(filter\[(cf|custom_fields)]\[\d+])\[(from|to)]/gi.exec(e);
                switch (n().isUndefined(this.form.model.get("filter[date][from]")) || "filter[date_preset]" !== e || (e = "filter[date][date_preset][fake]"),
                !0) {
                case "fake" === e:
                    return -1;
                case "filter[date_preset]" === e:
                case "filter_date_switch" === e:
                case "filter_date_from" === e:
                case "filter_date_to" === e:
                    return "filter_date_from" === e || "filter_date_to" === e ? this.form.model.get("filter_date_from") ? 1 : -1 : "filter[date_preset]" === e ? this.form.model.get(e) ? 1 : 0 : this.filterDefaultValues("filter_date_switch", this.form.model.get("filter_date_switch")) ? this.form.model.get("filter_date_from") ? 0 : -1 : "filter_date_switch" === e ? 1 : 0;
                case "filter[date][type]" === e:
                case "filter[date][from]" === e:
                case "filter[date][to]" === e:
                case "filter[date][date_preset]" === e:
                case "filter[date][date_preset][fake]" === e:
                    return "filter[date][from]" === e || "filter[date][to]" === e ? this.form.model.get("filter[date][from]") ? 1 : -1 : "filter[date][date_preset][fake]" === e ? this.form.model.get("filter[date_preset]") ? 1 : 0 : "filter[date][date_preset]" === e ? this.form.model.get("filter[date][date_preset]") ? 1 : 0 : this.filterDefaultValues("filter[date][type]", this.form.model.get("filter[date][type]")) ? this.form.model.get("filter[date][from]") ? 0 : -1 : "filter[date][type]" === e ? 1 : 0;
                case "filter[next_date][type]" === e:
                case "filter[next_date][from]" === e:
                case "filter[next_date][to]" === e:
                case "filter[next_date][date_preset]" === e:
                    return "filter[next_date][from]" === e ? this.form.model.get("filter[next_date][from]") ? 1 : -1 : "filter[next_date][date_preset]" === e ? this.form.model.get(e) ? 1 : 0 : this.form.model.get("filter[next_date][from]") ? 0 : -1;
                case "filter[tags_logic]" === e:
                    return "or" === t ? 0 : 1;
                case null !== s:
                    return e === (i = "".concat(s[1], "[from]")) ? this.form.model.get(i) ? 1 : -1 : this.form.model.get(i) ? 0 : -1;
                case /filter\[pipe]\[/gi.test(e):
                    return n().indexOf(this._values_checker, "filter[pipe]") >= 0 ? 0 : n().filter(this.form.model.attributes, (function(e, t) {
                        return /filter\[pipe]\[/gi.exec(t) && e
                    }
                    )).length ? (this._values_checker.push("filter[pipe]"),
                    1) : -1;
                default:
                    return t ? 1 : -1
                }
            },
            _getOptionsCount: function(e) {
                var t, i = 0;
                return e = e || {},
                this._values_checker = [],
                n().each(this.form.model.attributes, (function(s, r) {
                    t = this.filterCheckValue(r, s),
                    this.filterDefaultValues(r, s, e.exclude_entity_defaults) || -1 === t || (i += t)
                }
                ), this),
                i
            },
            getOptionsCount: function() {
                var e = 0
                  , t = this.getDefaultFilter()
                  , i = [];
                return this.hide_checker = [],
                this._values_checker = [],
                n().each(this.form.model.attributes, (function(t, s) {
                    var r = this.filterCheckValue(s, t)
                      , a = this._findElem("filter_input", s)
                      , l = a.closest(this._selector("field"))
                      , o = !1
                      , c = l.closest(this._selector("group_wrapper"))
                      , h = c.prev(this._selector("cf_group"));
                    (n().isEmpty(this.form.model.get("filter[main_contact][date_preset]")) || this.filterDefaultValues("filter[main_contact][date_preset]", this.form.model.get("filter[main_contact][date_preset]")) || "filter[main_contact][date][from]" !== s && "filter[main_contact][date][to]" !== s) && (n().isEmpty(this.form.model.get("filter[company][date_preset]")) || this.filterDefaultValues("filter[company][date_preset]", this.form.model.get("filter[company][date_preset]")) || "filter[company][date][from]" !== s && "filter[company][date][to]" !== s) && (n().isEmpty(this.form.model.get("filter[next_date][date_preset]")) || this.filterDefaultValues("filter[next_date][date_preset]", this.form.model.get("filter[next_date][date_preset]")) || "filter[next_date][from]" !== s && "filter[next_date][to]" !== s) && (n().isEmpty(this.form.model.get("filter[active_talks][date_preset]")) || this.filterDefaultValues("filter[active_talks][date_preset]", this.form.model.get("filter[active_talks][date_preset]")) || "filter[active_talks][from]" !== s && "filter[active_talks][to]" !== s) && (this.filterDefaultsDatePresetCheck(s) || (this.filterDefaultValues(s, t) || -1 === r ? ((a.hasClass("filter__custom_input_numeric") || a.hasClass("filter__custom_input_chained-list")) && a.siblings(".filter__custom_input_numeric, .filter__custom_input_chained-list").val() && (o = !0),
                    n().contains(R, s) && (o = !0),
                    o || (h.attr("data-foldable", 1),
                    l.removeClass("glow"))) : (e += r,
                    l.addClass("glow"),
                    h.attr("data-foldable", 0),
                    this.hide_checker[h.data("id")] = h.data("id"),
                    this.cacheFilledInputName(s, l),
                    c.length && "none" === c[0].style.display && h.trigger("cf-group:toggle")),
                    t && (n().isArray(t) || (t = [t]),
                    i = i.concat(n().map(t, (function(e) {
                        return {
                            name: s,
                            value: e
                        }
                    }
                    ))))))
                }
                ), this),
                this._elem("cf_group").removeClass("need_hide"),
                n().each(n().values(this.hide_checker), (function(e) {
                    e && this._findElem("hidden_field", e).addClass("need_hide")
                }
                ), this),
                n().chain(i).map((function(e) {
                    return "".concat(e.name, "=").concat(e.value)
                }
                )).sortBy((function(e) {
                    return e
                }
                )).value().join("&") === t && (e = 0,
                this.resetFilledInputNames(),
                this.form.$(this._selector("field")).removeClass("glow")),
                this.setEntityWrapperClass(),
                this.makeFilterCaptionActive(e && !(0,
                u.getQueryParam)("sel")),
                this._has_changes = !!e,
                n().isFunction(this.params.onFilterFilled) && this.params.onFilterFilled({
                    filter_values: this.filter_values,
                    changed_fields: this.checked_fields,
                    filter_model: this.form.model
                }, !0),
                e
            },
            getPresetEntity: function() {
                return this.params.preset_entity || APP.getBaseEntity()
            },
            refreshAll: function(e) {
                e && (e.filter || e.filters) && (r()("#sidebar").replaceWith(o()({
                    ref: "/tmpl/filter/in_search/main.twig"
                }).render({
                    entity: APP.getBaseEntity(),
                    pipeline_view: Boolean(APP.data.current_view.pipeline_id),
                    filter: e.filter,
                    filters: e.filters
                })),
                r()(".list__body-right__top").removeClass("search-responsive"))
            },
            refreshPresets: function(e) {
                e && (r()("#filter_list").html(o()({
                    ref: "/tmpl/filter/in_search/presets.twig"
                }).render({
                    pipeline_view: !!APP.data.current_view.pipeline_id,
                    filter: e
                })),
                this.presets && (this.presets._dropElemCache(),
                this.presets.hideEditIcon()))
            },
            refresh: function(e, t) {
                e && (r()("#filter_fields").replaceWith(o()({
                    ref: "/tmpl/filter/common/fields_wrapper.twig"
                }).render({
                    pipeline_view: !!APP.data.current_view.pipeline_id,
                    filter: e
                })),
                t && (t.full && e.url && r()("#filter_form").attr("action", e.url),
                t.full && (this.form.initModelFromForm(),
                this.form.model.updateDefaults(),
                this.form.setUrl(),
                this.fill(),
                this.getOptionsCount())))
            },
            checkSuggestValues: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                w.default.apply(this, t)
            },
            checkNeedReload: function() {
                return this._need_reload
            },
            hasChanges: function() {
                return this._has_changes
            },
            getCurrentFilter: function() {
                return {
                    filter: this._getInitialParams(),
                    term: (0,
                    u.getQueryParam)("term") || ""
                }
            },
            _getInitialParams: function(e, t) {
                var i = e || (0,
                u.getQueryString)()
                  , s = (0,
                u.removeQueryParam)(B, i);
                return t = !!n().isUndefined(t) || t,
                (0,
                u.QStoJSON)(s || this.getDefaultFilter(), t)
            },
            _setFilterWidth: function() {
                this.$el.is(":visible") && this.$el.css("width", this.params.$container.outerWidth() + this.params.$top_actions.outerWidth())
            },
            _getFilterScrollbarWidth: function() {
                return this._elem("filter_search_wrapper").outerWidth() - this._elem("filter_search_inner").outerWidth()
            },
            _fixFilterForSuggest: function(e) {
                var t = (e || {}).fix;
                this._elem("filter_search_inner").css("paddingRight", t ? this._getFilterScrollbarWidth() : ""),
                this._elem("filter_search_wrapper").css("overflow", t ? "hidden" : "")
            }
        });
        h().mixin(I, k.default, A.default, $.default, P.default, E.default, S.default, x.default);
        const L = I;
        var U = "../build/transpiled/components/filter/new_filter";
        window.define(U, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([U])
    }
    ,
    825496: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => v
        });
        var s = i(661533)
          , r = i.n(s)
          , a = i(55188)
          , n = i.n(a)
          , l = i(871082)
          , o = i.n(l)
          , c = i(460159)
          , h = i.n(c)
          , _ = i(312309)
          , d = i(678640)
          , f = i(880774)
          , p = i(500034)
          , u = i(521466)
          , g = i(956799)
          , m = i(77305)
          , y = function(e, t) {
            r()(this).sortable("refreshPositions"),
            e.helper.css("margin-top", t)
        };
        const v = u.default.extend({
            _sorting: !1,
            _sortable: !1,
            _selectors: function() {
                return {
                    default_item: ".js-filter-preset-link.filter__list__item-default"
                }
            },
            _classes: function() {
                return {
                    selected: "filter__list__item-selected",
                    editing_item: "filter__list__item-edit-mode",
                    save: "js-filter-save",
                    trash_item: "filter__common_settings__item-trash"
                }
            },
            events: {
                "keyup .filter_items__user_value": "presetEditHotKeys",
                "click .js-filter-preset-link": "presetLoad",
                "click .js-filter-save": "presetSave",
                "click .filter_items__edit__delete": "presetRemove",
                "click .filter_items__edit__save": "presetEditSave",
                "click .filter_items__edit__btn": "presetEdit",
                "click .filter__list__item-edit-mode": "presetEditPreventExit"
            },
            initialize: function(e) {
                u.default.prototype.initialize.apply(this, arguments),
                this.options = e || {},
                this.is_admin = (APP.constant("user_rights") || {}).is_admin,
                this.non_admin_can_save = e.non_admin_can_save || !1,
                this.getSerializedFilterState = e.getSerializedFilterState,
                this.hideEditIcon(),
                this.listenTo(this.options.filter.form.model, "change", this.presetEditExit),
                this._$body.on("click".concat(this.ns), "#filter_save", n().bind(this.presetSave, this)).on("click".concat(this.ns), n().bind(this.presetEditExit, this)),
                h()._preload(["/tmpl/filter/bookmark.twig"])()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                this._$body.off(this.ns),
                this.makeSortable(!1),
                this.remove(!1),
                u.default.prototype.destroy.apply(this, t)
            },
            changeDefaultPreset: function() {
                var e;
                (e = this.$el.find(".js-filter-preset-link.filter__list__item-selected")).length || this.highlightSave(),
                this.options.filter.params.renderOptions(n().extend({
                    $highlight: e.length ? e : [],
                    type: this.options.filter.form.hasChanges() ? "has_changes" : ""
                }))
            },
            hideEditIcon: function() {
                this.$el.find(".filter__list__item-system-preset").length < this.$el.children().not(".filter__common_settings__item-trash").length - 1 ? this.$el.find(".filter__list__item-system-preset").find(".filter_items__edit").css("display", "none") : (this.$el.find(".filter__list__item-system-preset").find(".filter_items__edit").css("display", "none"),
                this.$el.find(".filter__list__item-system-preset").first().find(".filter_items__edit").css("display", "block"))
            },
            presetLoad: function(e) {
                var t = r()(e.currentTarget)
                  , i = t.find(".filter__list__item__link:first");
                if (e.preventDefault(),
                e.stopPropagation(),
                this._$document.trigger("suggest:manager:destroy"),
                !this._sorting) {
                    if (t.hasClass("filter__list__item-edit-mode"))
                        return t.find('input[type="text"]').focus(),
                        !1;
                    this.options.filter && this.options.filter.form.hasChanges() && this.options.filter.reset({
                        navigate: !1
                    });
                    var s = !1
                      , a = APP.router.paths[0];
                    i.attr("href") !== "/".concat(a) && (s = !0),
                    APP.router.navigate(i.attr("href"), {
                        trigger: !0
                    }),
                    !0 !== APP.router.prevent_page_confirm && (t.parent().find(this._selector("selected")).removeClass(this._class("selected")),
                    t.addClass(this._class("selected"))),
                    s && this.$el.trigger("apply:filters", {
                        withPageChange: !0
                    })
                }
            },
            highlight: function() {
                var e = []
                  , t = (0,
                _.removeQueryParam)(["filter[order_by]", "order_by", "filter[order_type]", "order_type", "clear_order", "term", "typing", "skip_filter"])
                  , i = decodeURIComponent(t || "")
                  , s = this.presetIsTrash(o().history.location.pathname)
                  , a = s ? this._selector("trash_item") : this._selector("default_item");
                return this._elem("save").addClass("hidden"),
                i && n().isEmpty((0,
                _.getQueryParam)("skip_filter")) ? (this.$(".js-filter-preset-link").each(n().bind((function(t, s) {
                    var a, n = r()(s), l = (n.children(".filter__list__item__link").attr("href") || "").toString().split("?");
                    a = decodeURIComponent(2 === l.length ? l[1] : "").replace(/\+/g, " "),
                    a = (0,
                    _.removeQueryParam)(["preset", "useFilter"], a, {
                        shouldDecodeValues: !1
                    }),
                    i = (0,
                    _.removeQueryParam)(["preset", "useFilter"], i, {
                        shouldDecodeValues: !1
                    }),
                    a && i.indexOf(a) >= 0 || "skip_filter=Y" === a && "" === i ? (e.length && e.removeClass(this._class("selected")),
                    e = n,
                    n.addClass(this._class("selected"))) : n.removeClass(this._class("selected"))
                }
                ), this)),
                e.length || this.highlightSave()) : (this.$(this._selector("selected")).removeClass(this._class("selected")),
                s ? (this.$(a).addClass(this._class("selected")),
                n().isFunction(this.options.filter.setUrl) && this.options.filter.setUrl(this.options.filter.form.el.getAttribute("action").replace("/list/", "/trash/")),
                e = this.$(a)) : (this.$(a).addClass(this._class("selected")),
                n().isFunction(this.options.filter.setUrl) && this.options.filter.setUrl(this.options.filter.form.el.getAttribute("action").replace("/trash/", "/list/")),
                e = this.$(a))),
                e
            },
            highlightFirst: function() {
                this.$(".js-filter-preset-link").each(n().bind((function(e, t) {
                    var i = r()(t);
                    0 === e ? i.addClass(this._class("selected")) : i.removeClass(this._class("selected"))
                }
                ), this)),
                this.highlightSave(!1)
            },
            highlightSave: function(e) {
                this.$preset_in_edit || (e = !1 !== this.options.can_save && e,
                this._elem("save").addClass("hidden"),
                (this.is_admin || this.non_admin_can_save) && !1 !== e && (this.$(this._selector("selected")).removeClass(this._class("selected")),
                this._elem("save").removeClass("hidden").addClass(this._class("selected"))))
            },
            getPresetEntity: function() {
                return n().isFunction(this.options.filter.getPresetEntity) ? this.options.filter.getPresetEntity() : APP.getBaseEntity()
            },
            deletePreset: function(e) {
                this._addComponent(g.default, {
                    $el: e,
                    entity_preset: this.getPresetEntity(),
                    id: e.attr("data-id"),
                    complete: n().bind(this.completeDeletePreset, this, e.attr("data-id"))
                })
            },
            completeDeletePreset: function() {
                this.sortMode(!1),
                this.$preset_in_edit = !1,
                this.changeDefaultPreset(),
                this.updateDataSort(),
                this.options.filter.form.hasChanges() && this.highlightSave(),
                this.hideEditIcon()
            },
            presetRemove: function() {
                var e = this.$preset_in_edit;
                return e && (this.$el.removeClass("filter-add-mode-active"),
                e.attr("data-id") ? this.deletePreset(this.$preset_in_edit) : (e.addClass("flipOutX"),
                n().delay(n().bind((function() {
                    e.remove(),
                    this._elem("save").removeClass("hidden")
                }
                ), this), 300),
                n().isFunction(this.options.filter.makeFilterCaptionActive) && this.options.filter.makeFilterCaptionActive(!0),
                this.add_new_preset = !1,
                this.$preset_in_edit = !1)),
                !1
            },
            presetSave: function(e) {
                var t = r()(e.currentTarget)
                  , i = this.options.filter.form.$el.attr("action")
                  , s = Number(this.$el.find(".js-filter-preset-link:not(.filter__common_settings__item-trash):last").attr("data-sort"))
                  , a = this.getSerializedFilterState ? this.getSerializedFilterState() : this.options.filter.form.$el.find(":input").filter((function() {
                    return "" !== r()(this).val() && !r()(this).hasClass("js-form-changes-skip")
                }
                )).serialize();
                if (!this.$preset_in_edit) {
                    var l = (0,
                    _.QStoJSON)(a);
                    (0,
                    d.hasKeys)(l, ["filter[company][date][from]"]) || (a = (0,
                    _.removeQueryParam)(["filter[company][date][type]"], a)),
                    (0,
                    d.hasKeys)(l, ["filter[main_contact][date][from]"]) || (a = (0,
                    _.removeQueryParam)(["filter[main_contact][date][type]"], a)),
                    APP.data.current_view && APP.data.current_view.filterPrepareAction && (a = APP.data.current_view.filterPrepareAction(a));
                    var o = r()(h()({
                        ref: "/tmpl/filter/bookmark.twig"
                    }).render({
                        item: {
                            element_id: "filter_preset_save_item",
                            in_edit: !0,
                            link: "".concat(i, "?").concat(a).concat(this.presetIsTrash(i) ? "&is_trash=Y" : ""),
                            label: "",
                            can_edit: !0
                        }
                    }));
                    return o.addClass("from-save filter__common_settings__item__add-mode"),
                    o.attr("data-sort", s + 1).css("opacity", 0).css(Modernizr.prefixed("transform"), "scale(0.8)").css(Modernizr.prefixed("transition"), "opacity 0.2s, ".concat(Modernizr.prefixed("transform"), " 0.2s")),
                    t.closest("li").length ? t.closest("li").addClass("hidden").before(o) : (this.$el.append(o),
                    n().isFunction(this.options.filter.makeFilterCaptionActive) && this.options.filter.makeFilterCaptionActive(!1)),
                    o.focus().css("opacity", "").css(Modernizr.prefixed("transform"), ""),
                    o.find(".filter_items__user_value").attr("data-is-new", 1).removeAttr("readonly").focus(),
                    t.closest(".filter-search__left").trigger("click"),
                    this.$el.addClass("filter-add-mode-active"),
                    this.$preset_in_edit = o,
                    this.add_new_preset = !0,
                    !1
                }
                this.presetShake(this.$preset_in_edit)
            },
            presetEditSave: function(e) {
                var t = r()(e.currentTarget).closest("li")
                  , i = r().trim(t.find(".filter_items__user_value").val() || "")
                  , s = this.options.filter.form.$el.attr("action")
                  , a = t.find(".filter__list__item__link").attr("href").toString().replace("".concat(s, "?"), "") + (this.presetIsTrash(s) ? "&is_trash=Y" : "")
                  , l = t.attr("data-id")
                  , o = this;
                return t.hasClass("filter__list__item-system-preset") && (t.removeClass("filter__list__item-edit-mode"),
                o.sortMode(!1),
                this.$preset_in_edit = !1,
                this.hideEditIcon(),
                o.changeDefaultPreset()),
                i.length ? (this.presetSaveRequest(t, {
                    action: l ? "PUT" : "POST",
                    name: i,
                    selection: l || "",
                    query: a,
                    sort: t.attr("data-sort"),
                    pipeline_id: "leads" === APP.getBaseEntity() ? n().propertyOf(APP)(["data", "current_view", "pipeline_id"]) : "",
                    catalog_id: "catalogs" === APP.getBaseEntity() ? Number(n().propertyOf(APP)(["data", "current_view", "catalog", "id"])) : ""
                }).then((function() {
                    o.sortMode(!1),
                    o.add_new_preset ? o._$document.trigger("filter:apply:new-preset:click") : o.changeDefaultPreset()
                }
                )),
                this.$preset_in_edit = !1) : this.presetShake(t),
                !1
            },
            presetEdit: function(e) {
                if (this.$preset_in_edit && !this.$preset_in_edit.find(".filter_items__user_value").val())
                    return this.presetShake(this.$preset_in_edit),
                    !1;
                var t = r()(e.currentTarget).closest("li")
                  , i = t.parent().children(".filter__list__item-edit-mode")
                  , s = i.length ? i.attr("data-id") : ""
                  , a = this.options.filter.form.$el.attr("action")
                  , l = i.length ? i.find(".filter__list__item__link").attr("href").toString().replace("".concat(a, "?"), "") + (this.presetIsTrash(a) ? "&is_trash=Y" : "") : ""
                  , o = t.find(".filter_items__user_value");
                return i.length && this.presetSaveRequest(i, {
                    action: s ? "PUT" : "POST",
                    name: r().trim(i.find(".filter_items__user_value").val() || ""),
                    selection: s || "",
                    query: l,
                    pipeline_id: "leads" === APP.getBaseEntity() ? n().propertyOf(APP)(["data", "current_view", "pipeline_id"]) : "",
                    catalog_id: "catalogs" === APP.getBaseEntity() ? Number(n().propertyOf(APP)(["data", "current_view", "catalog", "id"])) : ""
                }),
                this.sortMode(!0),
                t.addClass("filter__list__item-edit-mode"),
                o.prev("span").remove(),
                o.show().removeAttr("readonly").val(o.val()),
                o.focus(),
                this.$preset_in_edit = t,
                this.makeSortable(!0),
                e.stopPropagation(),
                !1
            },
            presetEditHotKeys: function(e) {
                var t = r()(e.currentTarget);
                switch (e.keyCode) {
                case 13:
                    this.presetEditSave({
                        currentTarget: t.closest("li").find(".filter_items__edit__save")
                    });
                    break;
                case 27:
                    this._$document.trigger("mouseup")
                }
            },
            makeSortable: function(e) {
                var t = this;
                !0 === e ? (this._sortable = !0,
                this.$el.sortable({
                    containment: this.$el,
                    items: ".js-filter__common_settings__item-sortable",
                    axis: "y",
                    tolerance: "pointer",
                    scroll: !1,
                    handle: ".filter_items__handle",
                    refreshPositions: !0,
                    sortAnimate: !0,
                    start: function(e, i) {
                        t._sorting = !0,
                        i.item.addClass("sorted"),
                        y.call(this, i, t._$window.scrollTop())
                    },
                    stop: function(e, i) {
                        n().delay(n().bind((function() {
                            this._sorting = !1
                        }
                        ), t), 200),
                        i.item.css("margin-top", "").removeClass("sorted")
                    },
                    update: n().bind(this.updateSort, this),
                    sort: function(e, i) {
                        var s = t._$window
                          , r = s.scrollTop()
                          , a = s.height()
                          , n = i.item.offset().top;
                        r - n > -70 && (r -= 10),
                        r + a - (n + i.item.height()) < 70 && (r += 10),
                        s.scrollTop(r),
                        y.call(this, i, r)
                    }
                })) : this._sortable && (this.$el.sortable("destroy"),
                this._sortable = !1)
            },
            getSortData: function(e) {
                return e.item.parent().find(".js-filter__common_settings__item-sortable").map((function() {
                    var e = r()(this)
                      , t = ((0,
                    f.parseNum)(r()(this).prev("li").attr("data-sort")) || 0) + 1;
                    return e.attr("data-sort", t),
                    {
                        id: e.attr("data-id"),
                        sort: t
                    }
                }
                ))
            },
            updateSort: function(e, t) {
                var i = this.getSortData(t)
                  , s = t.item.data("xhr");
                void 0 !== s && 4 !== s.readyState && s.abort(),
                s = this.savePreset("PATCH", {
                    filter: r().makeArray(i)
                }),
                t.item.data("xhr", s)
            },
            isPresetPrivate: function() {
                var e = this.getPresetEntity();
                return "talks" === e || e && APP.isCard()
            },
            sortMode: function(e) {
                var t, i, s = this.$el.find("li:not(.filter__list__item-save):not(.filter__common_settings__item-trash)"), r = s.first().attr("data-id");
                (0,
                p.isFeatureAvailable)("show_default_preset_modal") && !this.add_new_preset ? (e && (this._id_first_preset = r),
                e || this._id_first_preset === r || (t = s.first().attr("title"),
                i = this.isPresetPrivate() ? (0,
                f.i18n)('"%s" will be set as your default preset filter. This will not affect other users.').replace("%s", t) : (0,
                f.i18n)('The "%s" preset will be used by you and all users as the default preset.').replace("%s", t),
                new m.default({
                    text: (0,
                    f.i18n)("Please note"),
                    message: [{
                        text: i
                    }],
                    no_actions: !0
                }))) : this._showRibbonText(e),
                e ? s.addClass("filter__list__item-edit-sortable-mode") : s.removeClass("filter__list__item-edit-sortable-mode"),
                s.closest(".filter__list__item-system-can-edit") && (s.removeClass("filter__list__item-system-can-edit"),
                s.first().hasClass("filter__list__item-system-preset") && s.first().addClass("filter__list__item-system-can-edit"))
            },
            _showRibbonText: function(e) {
                this.options.filter._elem("ribbon_text").remove(),
                e && (this.options.filter.$el.append('<div class="'.concat(this.options.filter._class("ribbon_text"), '">').concat((0,
                f.i18n)("First preset is used by default"), "</div>")),
                this.options.filter._dropElemCache("ribbon_text"))
            },
            presetEditExit: function() {
                if (this.$preset_in_edit && this.add_new_preset && this.presetRemove(),
                this.$preset_in_edit)
                    return r()(".modal").length || this.presetEditSave({
                        currentTarget: this.$preset_in_edit
                    }),
                    !1
            },
            presetShake: function(e) {
                e.one(APP.animation_event, (function() {
                    APP.is_touch_device || r()(this).find(":input").focus(),
                    r()(this).off(APP.animation_event).removeClass("shake")
                }
                )).addClass("shake")
            },
            savePreset: function(e, t) {
                var i = this.getPresetEntity();
                return r().ajax({
                    url: "/api/".concat(i, "/custom_presets/").concat("PUT" === e ? t.selection : ""),
                    contentType: "application/json",
                    type: e,
                    dataType: "json",
                    data: JSON.stringify(t)
                })
            },
            presetSaveRequest: function(e, t) {
                var i = []
                  , s = e.hasClass(this._class("selected"))
                  , a = ""
                  , l = !1;
                return this.preset_saving ? r().Deferred.reject() : (this.preset_saving = !0,
                this.savePreset(t.action, t).always(n().bind((function() {
                    this.preset_saving = !1
                }
                ), this)).done(n().bind((function(n) {
                    var c, _, d = n.response;
                    this.$el.removeClass("filter-add-mode-active"),
                    ("PUT" === t.action ? d : d.accessEdit) ? (c = d.query ? d.query : t.query,
                    _ = d.id,
                    "POST" === t.action ? (this.add_new_preset = !0,
                    a = "".concat(o().history.location.pathname, "?").concat(c, "&useFilter=y&sel=").concat(_)) : a = "".concat(o().history.location.pathname, "?").concat(c),
                    e.hasClass("filter__list__item-edit-sortable-mode") && (l = !0),
                    e.replaceWith(i = r()(h()({
                        ref: "/tmpl/filter/bookmark.twig"
                    }).render({
                        item: {
                            link: a,
                            label: t.name,
                            id: _ || t.selection,
                            can_edit: !0,
                            sort: t.sort
                        }
                    }))),
                    l && i.addClass("filter__list__item-edit-sortable-mode"),
                    (s || "POST" === t.action) && this.presetSaveRequestRestoreSelection({
                        $new_el: i,
                        url: a,
                        selected: s,
                        action: t.action,
                        name: t.name
                    })) : this.presetEditExit()
                }
                ), this)))
            },
            presetSaveRequestRestoreSelection: function(e) {
                this.$(this._selector("selected")).removeClass(this._class("selected")),
                e.$new_el.addClass(this._class("selected")),
                e.selected && !this.add_new_preset && APP.router.navigate(e.url, {
                    replace: e.selected
                })
            },
            presetIsTrash: function(e) {
                return e.indexOf("/trash") >= 0
            },
            updateDataSort: function() {
                var e = this.$el.find(".js-filter-preset-link").map(n().bind((function(e, t) {
                    var i = r()(t);
                    return i.attr("data-sort", e + 1),
                    {
                        id: i.attr("data-id"),
                        sort: e + 1
                    }
                }
                ), this));
                this.savePreset("PATCH", {
                    filter: r().makeArray(e)
                })
            }
        })
    }
    ,
    803904: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => N
        });
        var s, r, a, n, l = i(661533), o = i.n(l), c = i(55188), h = i.n(c), _ = i(162262), d = i.n(_), f = i(460159), p = i.n(f), u = i(988050), g = i(312309), m = i(678640), y = i(880774), v = i(804129), b = i(500034), w = i(583132), C = i(521466), k = i(77305), P = i(171228), $ = i(950731), A = i(463274), E = i(799633), S = i(328287), x = i(391192), T = i(712976), F = i(918910), O = i(146521), D = i(430315), j = i(817790), W = {
            disable: ["filter_date_switch"]
        }, B = null, R = function(e) {
            h().isFunction(this.options.onSearch) ? this.options.onSearch(e) : this.setTerm(e, "", !0)
        }, I = h().debounce((function(e, t) {
            t.searchSuggest(e)
        }
        ), 500), L = h().throttle((function(e) {
            var t, i = "addClass", s = this._findElem("filter_options"), r = {};
            s.removeClass("list-top-search__options-showed"),
            e.is_filter = e.is_filter || !1,
            e.in_suggest = e.in_suggest || !1,
            h().each(W, (function(e, t) {
                h().each(e, (function(e) {
                    this.filter.form.model.get(e) && (r["data-".concat(t, "-").concat(e)] = this.filter.form.model.get(e))
                }
                ), this)
            }
            ), this),
            this.$el.attr(r),
            e.is_clear && !e.term ? (i = "removeClass",
            e.$highlight = this.$(".js-filter-preset-link.filter__list__item-selected:not(.filter__list__item-default)"),
            e.options_count = o().trim(e.$highlight.text())) : (t = !e.$highlight.length && "has_changes" === e.model_event && "has_reverted" !== e.model_event || this.isKeepApplyButtonActive && this._filter_showed,
            this._toggleClass("hidden", "filter_apply_holder", !t),
            this.toggleApplyButton({
                toggle: t
            }),
            e.term = e.term || (0,
            g.getQueryParam)("term") || this._elem("input").val(),
            this.delete_in_modal || e.in_suggest || this._findElem("options_wrapper").empty(),
            e.options_count ? e.$highlight.length || e.in_suggest || (this.highlight(!0),
            s.removeClass("list-top-search__options-showed"),
            this.rerenderOptions()) : i = "removeClass",
            !e.$highlight.length || e.is_first_preset && !e.should_always_show_preset_option || (i = "addClass",
            e.options_title = o().trim(e.$highlight.text()))),
            !e.term && !e.$highlight.length && e.is_filter || e.is_first_preset && !e.should_always_show_preset_option || (e.$highlight.length && e.options_count || !e.options_count) && s[e.$highlight.length ? "addClass" : "removeClass"]("is-preset")[i]("list-top-search__options-showed"),
            (e.term || !e.is_clear && e.$highlight.length) && s.text(e.options_title),
            e.term || e.is_first_preset && !e.should_always_show_preset_option || e.$highlight.length || e.options_count || s.removeClass("list-top-search__options-showed"),
            this.highlight(!e.is_first_preset || e.should_always_show_preset_option || e.term),
            this.highlightClearBtn(!e.is_first_preset || e.term)
        }
        ), 200, {
            leading: !1
        }), U = C.default.extend({
            filter: null,
            _clicked_filter: !1,
            _clear_trigger: !0,
            $notice: o()(),
            _$overlay: null,
            min_width_input_search: 300,
            width_info_search: 200,
            notice_vertical_offset: 46.5,
            isKeepApplyButtonActive: !1,
            _selectors: function() {
                return {
                    options: "#search_filter_preset",
                    default_wrapper: "#search_input_wrapper",
                    clear_btn: "#search_clear_button",
                    search_loader: "#search_loader",
                    input: "#search_input",
                    filter_options: "#search_filter_preset",
                    filter_apply: "#filter_apply"
                }
            },
            _classes: function() {
                return {
                    filter: "filter-search",
                    search_options: "search-options",
                    filter_apply_holder: "list-top-search__apply-block",
                    filter_has_changes: "filter-search_has-changes",
                    filter_manage: "filter__params_manage",
                    filter_right: "filter-search__right",
                    options_wrapper: "search-options-wrapper",
                    hidden: "h-hidden",
                    hs: "js-hs-wrapper",
                    statuses_control: "js-control-checkboxes_dropdown-statuses",
                    pipeline_control: "pipeline-select-wrapper",
                    options_showed: "list-top-search-options-showed",
                    responsive: "search-responsive",
                    search_active: "search-is-active",
                    top_wrapper: "list__body-right__top",
                    apply_block: "list-top-search__apply-block",
                    field: "filter__custom_settings__item",
                    past_x_days_input: "date_filter__period_item-past_x_days-input",
                    search_input: "list-top-search__input",
                    search_summary: "list-top-search__summary",
                    search_options_shrinked: "list-top-search_shrinked",
                    summary_count: "list-top-search__summary-count"
                }
            },
            events: {
                "click .js-search-cancel": "clearClick",
                "click .js-search-hide": "searchHide",
                click: "onFilterClick",
                mouseup: "filterHandleTextSelection",
                "click .filter-search": "clickInSearchFilter",
                "click .js-filter-apply": "filterApplyClick",
                "click .js-search-filter-clear": "filterClearClick",
                "click .js-navigate-link-search-suggest": "navigateLinkSearchSuggest",
                "click .hidden-options": "openOptionsModal",
                "click .list-top-search__summary": "stopPropagationOnClick",
                "mouseover .list-top-search__summary-text": "createWidgetShow",
                "mouseover .list-top-search__summary-count": "changeAggregationShow",
                "mouseleave .list-top-search__summary-text": function() {
                    this.summaryTooltipMouseLeaveDelayed("createWidgetHide")
                },
                "mouseleave .list-top-search__summary-count": function() {
                    this.summaryTooltipMouseLeaveDelayed("changeAggregationMouseLeave")
                },
                "controls:select:open .control--select": "onControlsListOpen",
                "controls:select:hide .control--select": "onControlsListHide",
                "controls:checkboxes_dropdown:open .checkboxes_dropdown__list": "onControlsListOpen",
                "controls:checkboxes_dropdown:hide .checkboxes_dropdown__list": "onControlsListHide"
            },
            document_events: {
                "mouseover #create_dashboard_widget": "createWidgetShow",
                "mouseover #change_aggregation": "changeAggregationShow",
                "mouseleave #create_dashboard_widget": function() {
                    this.summaryTooltipMouseLeaveDelayed("createWidgetHide")
                },
                "mouseleave #change_aggregation": function() {
                    this.summaryTooltipMouseLeaveDelayed("changeAggregationMouseLeave")
                },
                "click .notice__hover-wrapper_create_widget": "showModelCreateWidget",
                "click .notice__hover-wrapper_change_aggregation": "changeAggregation",
                "search:count_width": "_sumUpdateWidth",
                "open:filters": "handleFilterOpen",
                "close:filters": "clearFilter",
                "show:apply_btn": "handleApplyButtonShow",
                "hide:apply_btn": "handleApplyButtonHide"
            },
            initialize: function(e) {
                var t = this;
                C.default.prototype.initialize.apply(this, arguments),
                this.options = e || {},
                this._get_v3_plug = (0,
                m.isV3Design)(),
                this.delete_in_modal = !1,
                this.statuses = h().isUndefined(e.filter.pipelines) ? {} : e.filter.pipelines.items,
                this.loss_reasons = e.filter.loss_reason,
                d().mixin(this, S.default),
                this._is_list = this.options.filter.is_list,
                this.options.el || this.setElement(o()(this._selector("default_wrapper"))),
                this._$window.on("resize".concat(this.ns), h().bind((function() {
                    this.$el.find(".search-options-wrapper").children().length && this.optionsTransform()
                }
                ), this)),
                this._$window.on("orientationchange".concat(this.ns), h().bind(h().debounce((function() {
                    this.$el.find(".search-options-wrapper").children().length && this.optionsTransform()
                }
                ), 1e3), this)),
                APP.data.entity_changed && a !== APP.getBaseEntity() || n !== (0,
                g.removeQueryParam)("term") ? r = "" : this._elem("input").val(r),
                h().contains(["settings-users"], APP.data.current_entity) && this._elem("input").val((0,
                g.getQueryParam)("term") || ""),
                this.options.filter ? (this._init_filter_whitelist = (0,
                w.initFilterWhitelist)({
                    ignored_attributes: ["filter[tags_logic]"],
                    whitelist_checks: [{
                        trigger: /^filter\[active_talks\]/,
                        allowed: /(^filter\[active_talks\])|(^filter\[pipe\])|(^filter\[status_id\]\[\]$)|(^filter\[main_user\]\[\]$)/
                    }],
                    getFilterAttributes: h().bind((function() {
                        return this.filter && this.filter.form && this.filter.form.model.attributes || null
                    }
                    ), this),
                    updateFilterAttributes: h().bind((function(e) {
                        var i = e.changed_attributes
                          , s = e.reseted_attributes;
                        h().isFunction(this.filter && this.filter.setFilterAttributes) && new k.default({
                            decline_text: (0,
                            y.i18n)("Cancel"),
                            accept_text: (0,
                            y.i18n)("Override existing filters"),
                            text: (0,
                            y.i18n)("The filter you've selected conflicts with the existing filters you're already using."),
                            init: function() {
                                this.$modal_body.find("button").focus()
                            },
                            accept: function() {
                                t.filter.setFilterAttributes(s),
                                this.destroy()
                            },
                            destroy: function() {
                                this.accepted || t.filter.setFilterAttributes(h().mapObject(i, (function() {
                                    return ""
                                }
                                )))
                            }
                        })
                    }
                    ), this)
                }),
                this.filter = new (this.options.filter_component || P.default)(h().extend(e.filter, {
                    _is_in_search: !0,
                    $container: this.$el,
                    $top_actions: this.$el.siblings(".list__top__actions"),
                    $apply_buttons: this._findElem("filter_manage"),
                    search_context: this,
                    renderOptions: h().bind(this.renderOptions, this),
                    onPresetLoad: h().bind(this.clearSearch, this),
                    onInit: h().bind((function() {
                        this.listenTo(this.filter.form.model, "has_changes", h().bind(this.renderOptions, this, {
                            is_filter: !0,
                            type: "has_changes"
                        })),
                        this.listenTo(this.filter.form.model, "has_reverted", h().bind(this.renderOptions, this, {
                            is_filter: !0,
                            type: "has_reverted"
                        })),
                        this.filter.prepareSortArray(this.filter.sort_object),
                        this.renderOptions({
                            is_filter: !0
                        }),
                        this.filter.$el.hasClass("hidden") || (this._filter_showed = !0),
                        h().isFunction(this.options.filter.onFilterInit) && this.options.filter.onFilterInit()
                    }
                    ), this),
                    onAttributesChange: h().bind((function(e) {
                        this._init_filter_whitelist && this._init_filter_whitelist.onFilterChange(e)
                    }
                    ), this)
                }))) : this.highlight((0,
                g.getQueryParam)("term")),
                (0,
                b.isFeatureAvailable)("onboarding_summary") && (this.onboarding_summary = this._addComponent(T.default, {
                    el: this.el,
                    $el: this.$el,
                    filter_has_changes: this.filter._has_changes,
                    notice_vertical_offset: this.notice_vertical_offset
                })),
                B = this,
                this._$document.on("keydown".concat(this.ns), h().bind(this.checkFocus, this)).on("filter:apply:click".concat(this.ns), h().bind(this.clearDoubleRunning, this)).on("filter:deserialize:callback".concat(this.ns), h().bind((function() {
                    this.initCreateWidget(),
                    this.initChangeAggregation()
                }
                ), this)).on("filter:apply:new-preset:click".concat(this.ns), h().bind(this.applyNewPreset, this)).on("page:changed".concat(this.ns), (function(e, t) {
                    t && o()(this).find("#search_input").focus()
                }
                )).on("input".concat(this.ns), "#search_input", (function(e) {
                    var t;
                    B && (t = o()(e.currentTarget).val(),
                    r = t,
                    n = (0,
                    g.removeQueryParam)("term"),
                    a = APP.getBaseEntity(),
                    h().contains(["mail", "files", "catalogs", "settings-users", "files-trash", "leads-trash", "contacts-trash"], APP.data.current_entity) ? B.filterSearch(e) : I.call(this, e, B))
                }
                )).on("keydown".concat(this.ns), "#search_input", (function(e) {
                    switch (e.which) {
                    case 13:
                        B.filterSearch(e);
                        break;
                    case 38:
                        B.navigateByArrows(e, -1);
                        break;
                    case 40:
                        B.navigateByArrows(e, 1);
                        break;
                    case 27:
                        B.hideFilterOrUnselectResult(e)
                    }
                }
                )).on("mouseover".concat(this.ns), ".js-search-suggest-result", (function(e) {
                    B.hideFilterOrUnselectResult(e),
                    o()(this).toggleClass("selected", !0)
                }
                )).on("mouseout".concat(this.ns), ".js-search-suggest-result", (function(e) {
                    B.hideFilterOrUnselectResult(e)
                }
                )).on("click.search:filter:hide".concat(this.ns), "#search_filter_overlay", (function() {
                    B.clearFilter()
                }
                ))
            },
            handleFilterOpen: function(e) {
                this.filterShow(e)
            },
            handleApplyButtonShow: function() {
                this.isKeepApplyButtonActive = !0,
                this.toggleApplyButton({
                    toggle: !0
                })
            },
            handleApplyButtonHide: function() {
                this.isKeepApplyButtonActive = !1,
                this.toggleApplyButton({
                    toggle: !1
                })
            },
            setActiveSearch: function(e) {
                B = e
            },
            clearDoubleRunning: function(e, t) {
                Boolean(this.$el.find(t).length) && this.filterHide(!1, !0)
            },
            destroy: function() {
                this.filterHide(!0),
                this._$body.off(this.ns).removeAttr("data-search-shrink-options"),
                this._$document.off("keydown".concat(this.ns)).off("filter:apply:click".concat(this.ns)).off("filter:deserialize:callback".concat(this.ns)).off("mouseout".concat(this.ns)).off("click".concat(this.ns)).off("filter:apply:new-preset:click".concat(this.ns)).off("page:changed".concat(this.ns)).off("input".concat(this.ns)).off("mouseover".concat(this.ns)).off("click.search:filter:hide".concat(this.ns)),
                this._$window.off("resize".concat(this.ns)).off("orientationchange".concat(this.ns)).off("blur".concat(this.ns)).off(".change_aggregation"),
                this.$notice && this.$notice.remove(),
                this.$notice_change_aggregation && this.$notice_change_aggregation.remove(),
                this.filter && (this.filter.destroy(),
                this._filter_showed && this._get_v3_plug && this._$document.trigger("overlay:unfix")),
                this.onboarding_summary && this.onboarding_summary.destroy(),
                C.default.prototype.destroy.call(this, !1)
            },
            rerenderOptions: h().throttle((function() {
                this._is_list && (this.delete_in_modal || (this.optionsRender(),
                this.optionsTransform()))
            }
            ), 0),
            getWidthOptionsBlock: function() {
                s = Math.max(0, this.$el.width() - this.min_width_input_search - this.getWidthSummaryBlock())
            },
            getWidthSummaryBlock: function() {
                return this._findElem("search_summary").width() + 25
            },
            initChangeAggregation: function() {
                var e = [{
                    code: "ltv",
                    lang: (0,
                    y.i18n)("Total sales value")
                }, {
                    code: "purchases_count",
                    lang: (0,
                    y.i18n)("Amount of purchases")
                }, {
                    code: "average_check",
                    lang: (0,
                    y.i18n)("Average check")
                }, {
                    code: "next_price",
                    lang: (0,
                    y.i18n)("Expected amount")
                }];
                "customers" === APP.getBaseEntity() && (o()("#change_aggregation").remove(),
                p()._preload(["/tmpl/filter/in_search/popover_change_aggregation.twig"])().then(h().bind((function() {
                    this.$notice_change_aggregation = o()(p()({
                        ref: "/tmpl/filter/in_search/popover_change_aggregation.twig"
                    }).render({
                        id: "change_aggregation",
                        text: (0,
                        y.i18n)("Create dashboard widget"),
                        field_map: e,
                        selected_aggregation_by: APP.constant("existed_data").summary.total.aggregation.aggregation_by,
                        periodicity_enabled: APP.constant("periodicity_enabled"),
                        main_class_name: "notice_without_arrow",
                        wrapper_class_name: "notice__hover-additional-wrapper notice__hover-wrapper_create_widget",
                        is_cancelable: !1
                    })),
                    this._$body.append(this.$notice_change_aggregation)
                }
                ), this)),
                this._$window.off(".change_aggregation").on("blur".concat(this.ns, ".change_aggregation"), h().bind(this.changeAggregationMouseLeave, this)))
            },
            initCreateWidget: function() {
                h().contains(["leads", "customers", "catalogs", "todo", "contacts", "events", "dashboard"], APP.getBaseEntity()) && this._findElem("search_summary").length && (o()("#create_dashboard_widget").remove(),
                p()._preload(["/tmpl/common/notice.twig"])().then(h().bind((function() {
                    this.$notice = o()(p()({
                        ref: "/tmpl/common/notice.twig"
                    }).render({
                        id: "create_dashboard_widget",
                        text: (0,
                        y.i18n)("Create dashboard widget"),
                        wrapper_class_name: "notice__hover-wrapper_create_widget",
                        is_cancelable: !1
                    })),
                    this._$body.append(this.$notice)
                }
                ), this)),
                this._$window.off(".create_dashboard_widget").on("blur".concat(this.ns, ".create_dashboard_widget"), h().bind(this.createWidgetHide, this)))
            },
            changeAggregationShow: function() {
                var e = this._findElem("summary_count").offset();
                this.$notice_change_aggregation && (e.top = this.notice_vertical_offset,
                this.$notice_change_aggregation.removeClass("notice_shifted").show().css(e),
                this.$notice_change_aggregation.visible() || this.$notice_change_aggregation.addClass("notice_shifted").css("left", "-=".concat(this.$notice_change_aggregation.get(0).getBoundingClientRect().right - this._$window.width() + 20)),
                clearTimeout(this.summary_tooltip_changeAggregationMouseLeave_tt))
            },
            createWidgetShow: function() {
                var e = this._findElem("search_summary")
                  , t = e.offset();
                if (this.$notice.length) {
                    e.addClass("list-top-search__summary_color-black"),
                    t.top = this.notice_vertical_offset,
                    this.$notice.removeClass("notice_shifted").show().css(t);
                    var i = (0,
                    j.getCurrentAsideWidth)()
                      , s = this.$notice.get(0).getBoundingClientRect().right
                      , r = this._$window.width()
                      , a = r - s < i
                      , n = a ? i : 0;
                    this.$notice.visible() && !a || this.$notice.addClass("notice_shifted").css("left", "-=".concat(s - r + n + 20)),
                    clearTimeout(this.summary_tooltip_createWidgetHide_tt)
                }
            },
            createWidgetHide: function() {
                this.$notice.length && (this.$el.find(".list-top-search__summary").removeClass("list-top-search__summary_color-black"),
                this.$notice.hide())
            },
            changeAggregationMouseLeave: function() {
                this.$notice_change_aggregation && this.$notice_change_aggregation.hide()
            },
            summaryTooltipMouseLeaveDelayed: function(e) {
                this[e] && (this["summary_tooltip_".concat(e, "_tt")] = setTimeout(h().bind(this[e], this), 100))
            },
            showModelCreateWidget: function(e) {
                this.$notice.length && (e.stopPropagation(),
                e.preventDefault(),
                this.modal_create_widget = new F.default({
                    filter: this.filter._getInitialParams(),
                    widget_data: {
                        name: this._findElem("options").hasClass("is-preset") ? this._findElem("options").text() : ""
                    },
                    need_additional_aggregation: o()(e.currentTarget).closest("#change_aggregation").length > 0,
                    getFilterState: this.options.filter.getFilterState
                }))
            },
            changeAggregation: function(e) {
                var t = this;
                e.stopPropagation(),
                e.preventDefault(),
                o().ajax({
                    type: "PATCH",
                    url: "/ajax/v4/customers/summary/settings",
                    data: JSON.stringify({
                        aggregation_by: o()(e.originalEvent.target).data("aggregation")
                    }),
                    contentType: "application/json"
                }).done((function() {
                    t.changeAggregationMouseLeave(),
                    t.destroy(),
                    t._$document.trigger("page:reload")
                }
                ))
            },
            stopPropagationOnClick: function(e) {
                e.stopPropagation()
            },
            clearClick: function(e) {
                e.stopPropagation(),
                this.clear()
            },
            filterClearClick: function(e) {
                e.stopPropagation(),
                this.clearFilter()
            },
            onFilterClick: function() {
                this.$el.trigger("open:filters")
            },
            checkFocus: function(e) {
                var t, i, s = o()(".modal"), r = o()("#card_holder:visible");
                s.length || r.length || !document.activeElement || -1 !== h().indexOf(["INPUT", "TEXTAREA"], document.activeElement.tagName) || o()(document.activeElement).is("[contenteditable]") || !/\w/gi.test(String.fromCharCode(e.keyCode)) || e.metaKey || e.ctrlKey || (i = document.getElementById("search_input")) && (t = (i.value || "").length,
                i.focus(),
                i.setSelectionRange(t, t))
            },
            setTerm: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.filter && (this.filter._searching = !1),
                APP.router.navigate((0,
                g.setParam)({
                    page: ""
                }, {
                    only_path: !0
                }) + (0,
                g.setQueryParam)({
                    term: e,
                    typing: t
                }, {
                    only_query_string: !0
                }), {
                    trigger: e && !t || i,
                    replace: t || this.filter && this.filter.form.hasChanges()
                }),
                !t && this.filter && this.filter.form.hasChanges() && this.filter.apply()
            },
            navigateLinkSearchSuggest: function(e, t) {
                var i = this.$el.find("#search_input");
                return e.preventDefault(),
                e.ctrlKey || e.metaKey ? "click" === e.type ? (-1 === (t = o()(e.currentTarget).attr("href")).indexOf("term") && (t += "?compact=yes"),
                window.open(t, "_blank"),
                void o()(i).focus()) : (-1 === t.indexOf("term") && (t += "?compact=yes"),
                void window.open(t, "_blank")) : ("click" === e.type && (t = o()(e.currentTarget).attr("href")),
                APP.router.navigate(t, {
                    trigger: !0
                }),
                !1)
            },
            filterSearch: h().debounce((function(e, t) {
                var i = o().trim(this.$el.find("#search_input").val())
                  , s = (0,
                g.getQueryParam)("term") || ""
                  , r = "mail" === APP.getBaseEntity()
                  , a = "dashboard" === APP.getBaseEntity()
                  , n = this.$el.find(".js-search-suggest-result.selected");
                if (0 === n.length) {
                    if (a)
                        return this.navigateLinkSearchSuggest(e, (0,
                        v.isAmoChatsFullEnabled)() ? "customers" : "leads"),
                        void this.setTerm(i, "y");
                    t = t || {},
                    this._$document.trigger("search:query_notify:hide"),
                    this.filter && (this.filter._searching = !!i),
                    r && (this.$el.find("#search_input").val().length >= 3 ? this.setTerm(this.$el.find("#search_input").val(), "y") : (this.setTerm(this.$el.find("#search_input").val(), "y"),
                    "" !== s && this.$el.find("#search_input").val().length < 3 && this._findElem("search_options").addClass("hidden"))),
                    i && i.length < 3 || (r || this.highlight(!0),
                    this.filterHide(),
                    !0 !== t.silent && (this.setTerm(i, "y"),
                    R.call(this, i)))
                } else
                    this.navigateLinkSearchSuggest(e, n.parent("a").attr("href"))
            }
            ), 500),
            hideFilterOrUnselectResult: function(e) {
                var t = this.$el.find(".js-search-suggest-result.selected");
                0 !== t.length ? t.toggleClass("selected", !1) : "mouseover" !== e.type && (this.setTerm("", ""),
                this.filterHide())
            },
            navigateByArrows: function(e, t) {
                var i, s = this.$el.find(".js-search-suggest-result"), r = this.$el.find(".js-search-suggest-result.selected"), a = s.index(r), n = this.$el.find("#search-suggest-drop-down-menu");
                e.preventDefault(),
                (i = a + t) < -1 && (i = s.length - 1),
                i > s.length && (i = 0),
                r.toggleClass("selected", !1),
                (r = o()(s[i])).toggleClass("selected", !0),
                n.scrollTop(r.position().top - n.height() / 2)
            },
            searchSuggest: function(e) {
                var t = this
                  , i = this
                  , s = this.$el.find("#search_input").val();
                s.length >= 3 ? this.setTerm(s, "y") : s.length > 0 ? this.setTerm("", "y") : (this.setTerm("", "y", !1),
                this.setTerm("", "", !0));
                var r, a, n, l = o().trim(e.currentTarget.value) && e.currentTarget.value, c = p()({
                    ref: "/tmpl/filter/in_search/suggest/main_suggest.twig"
                }), _ = this.$el.find("#search-suggest-drop-down-menu"), d = this.$el.find(".filter-search"), f = this.$el.find(".filter-search__wrapper"), g = o()(window).height(), m = o()("#search_input_wrapper").height();
                if (this._$document.trigger("search:query_notify:hide"),
                this.filter && (this.filter._searching = !!l),
                l.length >= 3 ? this.renderOptions({
                    term: l,
                    in_suggest: !0
                }) : this.renderOptions({
                    in_suggest: !0
                }),
                l.length < 3)
                    return _.hide(),
                    f.show(),
                    void _.empty();
                h().isUndefined(APP.data.current_view.pipeline_id) ? a = "" : (r = (0,
                u.get)("LAST_PLACE_DEALS") || "",
                n = a = (a = r.split("/"))[a.length - 1],
                a = !isNaN(parseFloat(n)) && isFinite(n) ? "&pipeline_id=".concat(a) : ""),
                this.filterShow(e),
                _.show(),
                d.toggleClass("page-loading", !0),
                this.setSearchLoader(!0),
                this.searchSuggestQuery && this.searchSuggestQuery.readyState !== D.JQXHR_READY_STATE.DONE && this.searchSuggestQuery.abort(),
                this.searchSuggestQuery = o().ajax({
                    type: "GET",
                    url: "/ajax/v1/elements/list?term=".concat(encodeURIComponent(l)).concat(a)
                }),
                o().when($.default.getPipelines(), this.searchSuggestQuery).done((function(e, t) {
                    var i, s = t[0], n = (0,
                    u.get)("LAST_PLACE_CUSTOMERS") || "pipeline", l = Object.keys(e.pipelines).length;
                    _.css("height", ""),
                    f.hide(),
                    i = "contacts" === APP.getBaseEntity() ? APP.data.element_type : APP.getBaseEntity();
                    var o = c.render({
                        items: s.response.items,
                        term: encodeURIComponent(s.response.term),
                        counts: s.response.count,
                        message: s.response.message,
                        leads_last_place: r,
                        customers_last_place: n,
                        is_pipeline: Boolean(a),
                        pipelines_count: l,
                        current_location_keyword: i
                    });
                    _.html(o)
                }
                )).fail((function(e) {
                    t.processAjaxError(e)
                }
                )).always((function() {
                    d.toggleClass("page-loading", !1),
                    i.setSearchLoader(!1)
                }
                )),
                _.css("max-height", "".concat(.9 * (g - m), "px"))
            },
            _sumUpdateWidth: h().throttle((function() {
                this.optionsTransform()
            }
            ), 0, {
                leading: !1
            }),
            filterHandleTextSelection: function() {
                this._has_selected_text = window.getSelection().toString().length > 0
            },
            filterShow: function(e) {
                this._has_selected_text || (this._$document.trigger("controls:hide", ["tip"]),
                o()(e.currentTarget).closest(this._selector("top_wrapper")).addClass(this._class("responsive")),
                this._filter_showed || (this._elem("input").focus(),
                this.clickInSearchFilter()),
                this.filter && !this._filter_showed && (this._filter_showed = !0,
                this.filter.show(),
                this._get_v3_plug && this._$document.trigger("overlay:fix"),
                o()(this._selector("hs")).trigger("hs:pause"),
                this._$body.on("swipe".concat(this.ns), h().bind((function(e, t, i, s) {
                    0 === i && 0 === s || this._elem("input").blur()
                }
                ), this)),
                this._$overlay || this.$el.parent().prepend(this._$overlay = o()('<div class="filter-search-overlay" id="search_filter_overlay"></div>')),
                this._elem("past_x_days_input").trigger("autosize:important")))
            },
            getCorrectOptionValue: function(e) {
                var t = parseInt(e.value)
                  , i = e.value;
                return t && "filter[entity][]" === e.key && (i = h().findWhere(this.filter.params.object.items, {
                    id: t
                }).option),
                i
            },
            optionsRender: function() {
                var e = []
                  , t = this._findElem("options_wrapper");
                h().mapObject(this.filter.sort_object, (function(t, i) {
                    "" !== t && "filter" !== i && e.push({
                        key: i,
                        value: t
                    })
                }
                )),
                this.prepareOptionsItems(e),
                e = this.removeSystemOptions(e),
                t.empty(),
                h().mapObject(e, (function(e) {
                    var i = this.getCorrectOptionValue(e)
                      , s = new A.default({
                        text: i,
                        name_input: e.key,
                        search_context: this,
                        onDestroy: h().bind(this.destroyOptionsView, this)
                    });
                    s.render(),
                    t.append(s.el)
                }
                ), this)
            },
            destroyOptionsView: function(e) {
                var t, i, s = this.$el.closest(".list-top-search"), r = s.length ? s.find(this._selector("filter")) : this._$body.find(this._selector("filter")), a = s.length ? s.find(this._selector("apply_block")) : this._$body.find(this._selector("apply_block")), n = -1 === o()(e.currentTarget).attr("data-input-name").indexOf("pipe") ? o()(e.currentTarget).attr("data-input-name") : "filter[pipe]", l = r.find('[name^="'.concat(n, '"]')).closest(".filter__custom_settings__item"), c = o()(l).closest("[data-is-fn]").attr("data-is-fn"), _ = o()(l).closest(this._selector("field"));
                e.stopPropagation(),
                this.wrapper = _,
                "filter[cf][]" === n && r.find('[name="filter[event_type][]"]').prop("checked", !1).trigger("change"),
                o()(e.currentTarget).closest(".modal-body").length ? (this.delete_in_modal = !0,
                1 === o()(e.currentTarget).closest(".modal-body").children().length && this.trigger("OptionsModal:close")) : this.delete_in_modal = !1,
                "tag[]" === o()(e.currentTarget).attr("data-input-name") && (h().isUndefined(this.filter.tags_lib) ? this.filter.form.model.set("tag[]", "") : this.filter.tags_lib.deselectAll()),
                h().isFunction(this[c]) ? ((0,
                x.default)(l.find("input:not(.js-filter-clear-skip)")),
                this[c](!1, _)) : (0,
                x.default)(l.find("input:not(.js-filter-clear-skip)")),
                "filter[products][]" === o()(e.currentTarget).attr("data-input-name") && h().isFunction(c) && this.filter[c](!1, l),
                -1 !== o()(e.currentTarget).attr("data-input-name").indexOf("[address_line_1]") && (i = h().lastIndexOf(o()(e.currentTarget).attr("data-input-name"), "["),
                t = o()(e.currentTarget).attr("data-input-name").slice(0, i),
                h().each(["[address_line_1]", "[address_line_2]", "[city]", "[country]", "[state]", "[zip]"], (function(e) {
                    l = r.find('[name="'.concat(t).concat(e, '"]')).closest(".filter__custom_settings__item"),
                    c = o()(l).closest("[data-is-fn]").attr("data-is-fn"),
                    _ = o()(l).closest(this._selector("field")),
                    h().isFunction(this[c]) ? ((0,
                    x.default)(l.find("input:not(.js-filter-clear-skip)")),
                    this[c](!1, _)) : (0,
                    x.default)(l.find("input:not(.js-filter-clear-skip)"))
                }
                ), this)),
                "filter[segments][]" === o()(e.currentTarget).attr("data-input-name") && h().isFunction(this.filter.suggest_segment.clear) && (this.filter.suggest_segment.clear(),
                delete this.filter.sort_object["filter[segments_logic]"]),
                (r.hasClass("hidden") || 0 === this.filter._getOptionsCount()) && (a.attr("style", "display: none !important"),
                this.rerenderOptions(),
                this.filter.apply(this.filter.sort_object))
            },
            removeSystemOptions: function(e) {
                var t, i = [], s = !1, r = [], a = ["filter[tags_logic]", "filter[company][date][type]", "filter[main_contact][date][type]", "filter_date_switch", "filter_date_to", "filter[date][type]", "date[type]", "fake", "useFilter", "preset", "sel", "typing"];
                return h().each(e, (function(e) {
                    i.push(e.key)
                }
                )),
                h().each(h().keys(this.statuses), (function(e) {
                    h().isUndefined(this.filter.form.model.get("filter[pipe][".concat(Number(e.replace(/\D+/g, "")), "][]"))) && (s = !0)
                }
                ), this),
                t = s ? ["filter[pipe][".concat(this.options.filter.pipeline_id, "][]")] : ["filter[pipe][".concat(APP.constant("main_pipeline"), "][]")],
                h().each(i, (function(i, s) {
                    -1 !== i.indexOf("[to]") || -1 !== i.indexOf("[from]") || -1 !== i.indexOf("[address_line_1]") || -1 !== i.indexOf("[address_line_2]") || -1 !== i.indexOf("[city]") || -1 !== i.indexOf("[country]") || -1 !== i.indexOf("[state]") || -1 !== i.indexOf("[zip]") || h().contains(a, i) ? e.splice(s, 1, "") : -1 === i.indexOf("[pipe]") || h().contains(t, i) || e.splice(s, 1, "")
                }
                ), this),
                e.forEach((function(t, i) {
                    r.indexOf(t.key) > -1 ? e[i] = "" : h().isUndefined(t.key) || "" !== t.key ? r.push(t.key) : e[i] = ""
                }
                )),
                e = h().compact(e)
            },
            openOptionsModal: function(e) {
                var t = this._elem("search_options").find("div.hidden")
                  , i = o()(e.currentTarget).offset().left + 178;
                e.stopPropagation(),
                this.modal = new E.default({
                    elements: t,
                    search_context: this,
                    onDestroy: this.rerenderOptions
                }).$el.css({
                    left: i
                })
            },
            prepareOptionsItems: function(e) {
                this.prepareCustomOptions(e),
                this.prepareDefaultOptions(e)
            },
            optionsTransform: function() {
                var e, t = this._findElem("options_wrapper"), i = o().makeArray(t.find('.list-top-search__options-showed:not(".hidden-options")')).reverse(), r = o().makeArray(o()(i).find(".options-text").children("span:not(.name-options)")).reverse(), a = t.find(".hidden-options"), n = 0, l = 0, c = 0;
                return o()(i).removeClass("hidden"),
                o()(r).removeClass("hidden"),
                a.remove(),
                this._$body.removeAttr("data-search-shrink-options"),
                this.getWidthOptionsBlock(),
                h().each(i, (function(e) {
                    0 === c && (c = parseInt(getComputedStyle(e).marginLeft)),
                    l += e.offsetWidth + c
                }
                )),
                l > s && (this._$body.attr("data-search-shrink-options") || (this._$body.attr("data-search-shrink-options", !0),
                this.getWidthOptionsBlock())),
                l > s && ((e = document.createElement("div")).className += "list-top-search__options list-top-search__options-showed hidden-options",
                function r(a) {
                    l -= i[a].offsetWidth + c,
                    i[a].className += " hidden",
                    n += 1,
                    e.innerHTML = '<span class="options_text">+ '.concat(n, "</span>"),
                    t.append(e),
                    l >= s && a + 1 < i.length && r(a + 1)
                }(0)),
                this.$el.trigger("transform:filter:options"),
                i.length - n
            },
            setSearchLoader: function(e) {
                this.active_search_loader = e,
                this._findElem("search_loader")[e ? "removeClass" : "addClass"]("h-hidden"),
                this.highlight(!e)
            },
            highlight: function(e) {
                o()(this.options.filter && this.options.filter.active_selector || "#search_input_wrapper").prepareTransition()[e ? "addClass" : "removeClass"](this.options.filter && this.options.filter.active_class || "list-top-search-options-showed")
            },
            highlightClearBtn: function(e) {
                this._findElem("clear_btn")[e && !this.active_search_loader ? "removeClass" : "addClass"]("h-hidden")
            },
            toggleApplyButton: function(e) {
                var t = (e || {}).toggle;
                this._findElem("filter_apply").trigger("button:".concat(t ? "enable" : "disable")),
                this._get_v3_plug && this._toggleClass("filter_has_changes", "filter", t),
                this._has_changes = t
            },
            filterApplyClick: function(e) {
                e.stopPropagation(),
                this.filter.presets && this.filter.presets.$preset_in_edit && this.filter.presets.presetEditExit(),
                this.filterHide(!1, !0),
                this.filterApply()
            },
            filterHide: function(e, t) {
                var i = this.$el.find(".filter-search__wrapper")
                  , s = this.$el.find("#search-suggest-drop-down-menu");
                this.renderOptions(),
                this.filter && i.length && (i.show(),
                s.hide(),
                s.empty(),
                this._$body.off("swipe".concat(this.ns)),
                this._filter_showed = !1,
                this.filter.hide(),
                o()(this._selector("hs")).trigger("hs:resume"),
                this._$overlay && (this._$overlay.remove(),
                delete this._$overlay),
                this._get_v3_plug && this._$document.trigger("overlay:unfix")),
                !e && !t && this._is_list && this.filter.form.hasChanges() && (this.filter.reset({
                    navigate: !1
                }),
                this.toggleApplyButton({
                    toggle: !1
                }))
            },
            clickInSearchFilter: function() {
                this._clicked_filter = !0,
                this.filterClickDelay()
            },
            filterClickDelay: function() {
                h().delay(h().bind((function() {
                    this._clicked_filter = !1
                }
                ), this), 300)
            },
            filterApply: function() {
                if (this.filter)
                    switch (!0) {
                    case this.filter.form.hasChanges():
                        return this.filter.apply();
                    case this.filter.checkNeedReload():
                        return this.$el.trigger("apply:filters", {
                            withPageChange: !0
                        }),
                        this._$document.trigger("page:reload");
                    default:
                        this.$el.trigger("apply:filters", {
                            withPageChange: !1
                        })
                    }
            },
            clear: function(e) {
                var t = (0,
                g.getQueryParam)("term") || ""
                  , i = t ? "?term=".concat(t) : ""
                  , s = (0,
                g.setParam)({
                    page: ""
                }, {
                    only_path: !0
                })
                  , a = (0,
                g.QStoJSON)(this.filter.getDefaultFilter());
                e = !h().isUndefined(e) && e,
                this.filter && (this.filter.presets && this.filter.presets.$preset_in_edit && this.filter.presets.presetEditExit(),
                this.filter.reset({
                    navigate: !1
                })),
                t || this.highlight(!1),
                this.renderOptions({
                    is_clear: !0,
                    term: e ? t : ""
                }),
                this.$el.closest(this._selector("top_wrapper")).removeClass(this._class("responsive")),
                this._addClass("hidden", "filter_apply_holder"),
                this.toggleApplyButton({
                    toggle: !1
                }),
                this._$document.trigger("search:query_notify:hide"),
                this._$body.removeClass(this._class("search_active")),
                e ? this.filterHide() : this.clearSearch(),
                this._findElem("options_wrapper").empty(),
                this._is_list && h().each(this.filter.form.model.attributes, (function(e, t) {
                    var i = a[t] || "";
                    this.filter.form.model.set(t, i)
                }
                ), this),
                this.options.no_reload_page || APP.router.navigate(s.replace("/trash/", "/list/") + (e ? i : ""), {
                    trigger: this._clear_trigger
                }),
                r = "",
                (0,
                b.isFeatureAvailable)("onboarding_summary") && this.$el.trigger("search:summary_text:load"),
                this.$el.trigger("reset:filters", {
                    withPageChange: !this.options.no_reload_page
                })
            },
            clearSearch: function() {
                this._filter_showed && this.filterHide(),
                this._elem("input").val(""),
                h().isFunction(this.options.onClear) && this.options.onClear()
            },
            clearFilter: function() {
                var e = this.$el.find("#search_input");
                this.filter && this.filter.presets && this.filter.presets.$preset_in_edit && this.filter.presets.presetEditExit(),
                0 === e.length ? this.$el.closest(this._selector("top_wrapper")).removeClass(this._class("responsive")) : (this.filterHide(),
                this.setTerm((0,
                g.getQueryParam)("term") || "", "", !1)),
                this._filter_showed && !this._clicked_filter && this.filterHide(),
                (!this._filter_showed || o()(window).width() > 900) && this.$el.closest(this._selector("top_wrapper")).removeClass(this._class("responsive")),
                (0,
                b.isFeatureAvailable)("onboarding_summary") && this.$el.trigger("search:summary_text:load"),
                this._clicked_filter = !1,
                this.$el.trigger("reset:filters")
            },
            renderOptions: h().debounce((function(e) {
                var t, i, s = this.filter.getOptionsCount(), r = !1, a = (0,
                b.isFeatureAvailable)("always_show_preset_option");
                t = (e = e || {}).$highlight || [],
                this.filter && (e && this.filter.presets && h().isEmpty(t) && (this.filter.form.hasChanges() && 0 === s ? this.filter.presets.highlightFirst() : this.filter.form.hasChanges() ? this.filter.presets.highlightSave(!!this.filter._getOptionsCount()) : t = this.filter.presets.highlight()),
                h().isEmpty(t) || (i = this.filter.presets.$el.find(".js-filter-preset-link:first").attr("data-id"),
                r = Number(t.attr("data-id")) === Number(i)),
                L.call(this, {
                    is_clear: e.is_clear,
                    options_count: s,
                    term: e.term,
                    $highlight: t,
                    model_event: e.type,
                    is_filter: e.is_filter,
                    in_suggest: e.in_suggest,
                    is_first_preset: r,
                    should_always_show_preset_option: a
                }))
            }
            ), 200),
            onControlsListOpen: function(e) {
                var t, i, s = o()(e.target), r = this._has_changes ? this._elem("filter_manage").outerHeight() + 10 : 0, a = s.get(0).getBoundingClientRect(), n = this._elem("filter").get(0).getBoundingClientRect();
                switch (e.type) {
                case "controls:checkboxes_dropdown:open":
                    t = "checkboxes_dropdown__expanded-to-top";
                    break;
                case "controls:select:open":
                    t = "control--select--list-to-top"
                }
                this._get_v3_plug && s.length && a.bottom > n.bottom - r && (a.top - 45 - n.top > n.bottom - r - a.top ? (s.addClass(t),
                (i = a.top - n.top - a.height - 10) < 0 && s.css("max-height", a.height + i - s.parent().outerHeight())) : s.css("max-height", n.bottom - r - a.top))
            },
            onControlsListHide: function(e) {
                o()(e.target).css("max-height", "")
            },
            applyNewPreset: function() {
                var e = this.filter.presets.$el.find(".filter__list__item-selected").children(".filter__list__item__link").attr("href") || "";
                APP.router.navigate(e, {
                    replace: !0,
                    trigger: !0
                }),
                this.$el.trigger("apply:filters", {
                    withPageChange: !0
                })
            }
        });
        d().mixin(U, O.PageLoadErrorHandlerMixin);
        const N = U;
        var H = "../build/transpiled/interface/search/new_search";
        window.define(H, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([H])
    }
    ,
    712976: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => y
        });
        var s = i(55188)
          , r = i.n(s)
          , a = i(661533)
          , n = i.n(a)
          , l = i(460159)
          , o = i.n(l)
          , c = i(880774)
          , h = i(521466);
        function _(e, t, i, s, r, a, n) {
            try {
                var l = e[a](n)
                  , o = l.value
            } catch (e) {
                return void i(e)
            }
            l.done ? t(o) : Promise.resolve(o).then(s, r)
        }
        function d(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function f(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function p(e, t, i) {
            return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                var s = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)); )
                        ;
                    return e
                }(e, t);
                if (s) {
                    var r = Object.getOwnPropertyDescriptor(s, t);
                    return r.get ? r.get.call(i || e) : r.value
                }
            }
            ,
            p(e, t, i || e)
        }
        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            u(e)
        }
        function g(e, t) {
            return g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            g(e, t)
        }
        function m(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var i, s = u(e);
                if (t) {
                    var r = u(this).constructor;
                    i = Reflect.construct(s, arguments, r)
                } else
                    i = s.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((i = t) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var i
                }(this, i)
            }
        }
        var y = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && g(e, t)
            }(a, e);
            var t, i, s = m(a);
            function a() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                s.apply(this, arguments)
            }
            return t = a,
            i = [{
                key: "initialize",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    p(u(a.prototype), "initialize", this).call(this, arguments),
                    this.filter_has_changes = t.filter_has_changes,
                    this.notice_vertical_offset = t.notice_vertical_offset,
                    this.initCreateWidgetCancelable(),
                    this.getIsCreateWidgetClosed().then((function(t) {
                        e.is_create_widget_window_closed = t.closed,
                        !e._findElem("search_summary").text().length || e.filter_has_changes || e.is_create_widget_window_closed || (e.createWidgetClosableShow(),
                        e._$window.on("resize" + e.ns, (function() {
                            e.createWidgetCancelableShift()
                        }
                        )))
                    }
                    ))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$notice_cancelable && this.$notice_cancelable.hide(),
                    n()("#create_dashboard_widget_cancelable").remove(),
                    p(u(a.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "initCreateWidgetCancelable",
                value: function() {
                    var e = this;
                    r().contains(["leads", "customers", "catalogs", "todo", "contacts"], APP.getBaseEntity()) && this._findElem("search_summary").length && (n()("#create_dashboard_widget_cancelable").remove(),
                    o()._preload(["/tmpl/common/notice.twig"])().then((function() {
                        e.$notice_cancelable = n()(o()({
                            ref: "/tmpl/common/notice.twig"
                        }).render({
                            id: "create_dashboard_widget_cancelable",
                            text: (0,
                            c.i18n)("Create dashboard widget"),
                            wrapper_class_name: "notice__hover-wrapper_create_widget",
                            is_cancelable: !0
                        })),
                        e._$body.append(e.$notice_cancelable)
                    }
                    )))
                }
            }, {
                key: "document_events",
                value: function() {
                    var e = this;
                    return f({
                        "search:summary_text:load": "createWidgetClosableShow",
                        "card:overlay:hide": "createWidgetClosableShow"
                    }, "click ".concat(this._selector("remove_btn")), (function(t) {
                        t.preventDefault(),
                        t.stopPropagation(),
                        e.createWidgetCancelableHide(),
                        e.createWidgetCloseRequest()
                    }
                    ))
                }
            }, {
                key: "events",
                value: function() {
                    var e;
                    return r().extend({}, r().result(h.default.prototype, "events", {}), (f(e = {
                        click: "createWidgetCancelableHide"
                    }, "click ".concat(this._selector("filter_clear")), "createWidgetClosableShow"),
                    f(e, "click ".concat(this._selector("filter_overlay")), "createWidgetClosableShow"),
                    e))
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        filter_clear: ".js-search-filter-clear",
                        filter_overlay: "#search_filter_overlay",
                        remove_btn: ".js-notice-hide"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        search_summary: "list-top-search__summary"
                    }
                }
            }, {
                key: "getCurrentLocation",
                value: function() {
                    var e, t = APP.getBaseEntity();
                    switch (t) {
                    case "todo":
                        e = "tasks";
                        break;
                    case "contacts":
                        e = "contacts" === APP.data.element_type ? "contacts" : "companies" === APP.data.element_type ? "companies" : "contacts_and_companies";
                        break;
                    default:
                        e = t
                    }
                    return e
                }
            }, {
                key: "createWidgetCancelableShift",
                value: function() {
                    var e = this._findElem("search_summary")
                      , t = e.offset();
                    this.$notice_cancelable.length && !this._filter_showed && ("none" !== e.css("display") ? this.$notice_cancelable.visible() && !this.is_create_widget_window_closed && this.$notice_cancelable.css("left", t.left) : this.createWidgetCancelableHide())
                }
            }, {
                key: "summaryTooltipMouseLeaveDelayed",
                value: function(e) {
                    this[e] && (this["summary_tooltip_" + e + "_tt"] = setTimeout(r().bind(this[e], this), 100))
                }
            }, {
                key: "createWidgetClosableShow",
                value: function() {
                    var e = this._findElem("search_summary")
                      , t = e.offset();
                    !e.visible() || r().isUndefined(this.is_create_widget_window_closed) || this.is_create_widget_window_closed || (e.addClass("list-top-search__summary_color-black"),
                    t.top = this.notice_vertical_offset,
                    this.$notice_cancelable.removeClass("notice_shifted").show().css(t),
                    this.$notice_cancelable.visible() || this.$notice_cancelable.addClass("notice_shifted").css("left", "-=" + (this.$notice_cancelable.get(0).getBoundingClientRect().right - this._$window.width() + 20)),
                    clearTimeout(this.summary_tooltip_createWidgetCancelableHide_tt))
                }
            }, {
                key: "createWidgetCancelableHide",
                value: function() {
                    this.$el.find(this._selector("search_summary")).removeClass("list-top-search__summary_color-black"),
                    this.$notice_cancelable && this.$notice_cancelable.hide()
                }
            }, {
                key: "getIsCreateWidgetClosed",
                value: function() {
                    var e = this.getCurrentLocation();
                    return n().ajax({
                        method: "GET",
                        url: "/ajax/v4/is_create_widget_window_close/" + ("catalogs" === e ? APP.data.current_view.catalog.id : e)
                    })
                }
            }, {
                key: "createWidgetCloseRequest",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        var e;
                        return function(e, t) {
                            var i, s, r, a, n = {
                                label: 0,
                                sent: function() {
                                    if (1 & r[0])
                                        throw r[1];
                                    return r[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return a = {
                                next: l(0),
                                throw: l(1),
                                return: l(2)
                            },
                            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                return this
                            }
                            ),
                            a;
                            function l(a) {
                                return function(l) {
                                    return function(a) {
                                        if (i)
                                            throw new TypeError("Generator is already executing.");
                                        for (; n; )
                                            try {
                                                if (i = 1,
                                                s && (r = 2 & a[0] ? s.return : a[0] ? s.throw || ((r = s.return) && r.call(s),
                                                0) : s.next) && !(r = r.call(s, a[1])).done)
                                                    return r;
                                                switch (s = 0,
                                                r && (a = [2 & a[0], r.value]),
                                                a[0]) {
                                                case 0:
                                                case 1:
                                                    r = a;
                                                    break;
                                                case 4:
                                                    return n.label++,
                                                    {
                                                        value: a[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    n.label++,
                                                    s = a[1],
                                                    a = [0];
                                                    continue;
                                                case 7:
                                                    a = n.ops.pop(),
                                                    n.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((r = (r = n.trys).length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                        n = 0;
                                                        continue
                                                    }
                                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                        n.label = a[1];
                                                        break
                                                    }
                                                    if (6 === a[0] && n.label < r[1]) {
                                                        n.label = r[1],
                                                        r = a;
                                                        break
                                                    }
                                                    if (r && n.label < r[2]) {
                                                        n.label = r[2],
                                                        n.ops.push(a);
                                                        break
                                                    }
                                                    r[2] && n.ops.pop(),
                                                    n.trys.pop();
                                                    continue
                                                }
                                                a = t.call(e, n)
                                            } catch (e) {
                                                a = [6, e],
                                                s = 0
                                            } finally {
                                                i = r = 0
                                            }
                                        if (5 & a[0])
                                            throw a[1];
                                        return {
                                            value: a[0] ? a[1] : void 0,
                                            done: !0
                                        }
                                    }([a, l])
                                }
                            }
                        }(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return e = t.getCurrentLocation(),
                                [4, n().ajax({
                                    url: "/ajax/v4/create_widget_window_close",
                                    type: "POST",
                                    dataType: "json",
                                    data: {
                                        location: e,
                                        catalog_id: "catalogs" === e ? APP.data.current_view.catalog.id : "",
                                        close: !0
                                    }
                                })];
                            case 1:
                                return i.sent(),
                                t.is_create_widget_window_closed = !0,
                                [2]
                            }
                        }
                        ))
                    }
                    ,
                    function() {
                        var t = this
                          , i = arguments;
                        return new Promise((function(s, r) {
                            var a = e.apply(t, i);
                            function n(e) {
                                _(a, s, r, n, l, "next", e)
                            }
                            function l(e) {
                                _(a, s, r, n, l, "throw", e)
                            }
                            n(void 0)
                        }
                        ))
                    }
                    )()
                }
            }],
            i && d(t.prototype, i),
            a
        }(h.default)
          , v = "../build/transpiled/interface/search/onboarding_summary";
        window.define(v, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([v])
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
        e._sentryDebugIds[t] = "4ef85fd7-ba58-4953-b4eb-4c61ca0cda44",
        e._sentryDebugIdIdentifier = "sentry-dbid-4ef85fd7-ba58-4953-b4eb-4c61ca0cda44")
    } catch (e) {}
}();
//# sourceMappingURL=3904.b5d498196376dec6a156.js.map
