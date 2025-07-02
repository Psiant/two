"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[44962], {
    44962: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => y
        });
        var i = a(661533)
          , s = a.n(i)
          , n = a(55188)
          , r = a.n(n)
          , l = a(162262)
          , c = a.n(l)
          , o = a(880774)
          , u = a(500034)
          , f = a(577486)
          , d = a(521466)
          , _ = a(696884)
          , p = a(328287)
          , h = a(799633)
          , v = a(463274)
          , m = a(826244)
          , g = a(158197);
        const y = d.default.extend({
            events: {
                "input .js-inbox-search": "handleSearchTerm",
                "click .aside-clear-button": "resetFilterAndSearch",
                "click .js-clear-filters": "resetFilterAndSearch",
                keydown: "onKeyDown",
                "click .button__filter": "onFilterClickToSearchLine",
                "click .search-container": "openFilter",
                "click .hidden-options": "openOptionsModal",
                "click .js-search-filter-clear": "applyFilter"
            },
            _selectors: function() {
                return {
                    cancel_search: ".aside-clear-button",
                    search_input: "input.js-inbox-search",
                    filter_container: ".inbox-filter__container",
                    preset_wrapper: "#search_filter_preset",
                    options_wrapper: ".search-options-wrapper",
                    options_list: ".search-options-wrapper__list",
                    options: ".list-top-search__options:not(.hidden-options)",
                    hidden_options: ".list-top-search__options.hidden",
                    search_container: ".search-container",
                    inbox_overlay: ".inbox-filter__overlay",
                    search_more: ".search-more",
                    inbox_clear: ".js-search-inbox-clear",
                    sort_menu: ".button-input__context-menu",
                    filter: ".js-filter-sidebar"
                }
            },
            _classes: function() {
                return {
                    search_container_disabled: "search-container--disabled"
                }
            },
            initialize: function(e) {
                this.options = e || {},
                d.default.prototype.initialize.apply(this, arguments),
                this.FilterComponent = e.FilterComponent || m.default,
                this.onCloseChat = r().isFunction(e.onCloseChat) ? e.onCloseChat : r().noop,
                this.onFilterToggle = r().isFunction(e.onFilterToggle) ? e.onFilterToggle : r().noop,
                this.getPresets = r().isFunction(e.getPresets) ? e.getPresets : Promise.resolve,
                this.uuid_unsorted = "49ae13e7-b75a-4fc0-9f39-c5c2812dcb34",
                this.blocked = !1,
                this.initSort(),
                this.setDefaultsFilterOptions(),
                c().mixin(this, p.default)
            },
            getFilterOptions: function() {
                if (this.filter)
                    return this.filter.getModel()
            },
            getFilterSource: function() {
                if (this.filter)
                    return this.filter.sources
            },
            initSort: function() {
                this.read_sort = this._addComponent(g.default, {
                    el: this._elem("sort_menu"),
                    onSelect: r().bind((function(e) {
                        this.order = e,
                        this.options.onFilterItems({
                            reset: !0
                        })
                    }
                    ), this)
                })
            },
            setFilterOptions: function(e, t) {
                var a, i = (0,
                u.isFeatureAvailable)("always_show_preset_option");
                this._findElem("options_list").empty(),
                this._findElem("preset_wrapper").text("").removeClass("is-preset list-top-search__options-showed"),
                r().isEmpty(e) && t.is_default && !i ? this.$el.removeClass("search-container_filter-show") : (this._elem("search_input").val(""),
                this.setDefaultsFilterOptions(),
                this.$el.addClass("search-container_filter-show"),
                r().isEmpty(t) ? (a = this.prepareOptionsItems(e),
                this.renderFilterOptions(a)) : this.showPreset(t.name))
            },
            showPreset: function(e) {
                this._findElem("preset_wrapper").text(e).addClass("is-preset list-top-search__options-showed")
            },
            renderFilterOptions: function(e) {
                r()(e).mapObject((function(e) {
                    var t = new v.default({
                        text: e.value,
                        name_input: e.key,
                        search_context: this,
                        onDestroy: r().bind((function(e) {
                            var t = s()(e.currentTarget).data("input-name")
                              , a = this.$el.find('[name="'.concat(t, '"]')).closest(".filter__custom_settings__item");
                            this.filterCleanField(a, t),
                            this.applyFilter()
                        }
                        ), this)
                    });
                    t.render(),
                    this._findElem("options_list").append(t.el)
                }
                ), this),
                this.checkWidthOptions()
            },
            prepareOptionsItems: function(e) {
                var t = r()(e).reduce((function(e, t, a) {
                    return "provider[]" === a && (r().isArray(t) && r().includes(t, this.uuid_unsorted) && (t = r().without(t, this.uuid_unsorted)),
                    r().isString(t) && t === this.uuid_unsorted) || e.push({
                        key: a,
                        value: t
                    }),
                    e
                }
                ), [], this)
                  , a = ["subscribed_user", "subscribed_group"]
                  , i = ["participants_users", "participants_groups"]
                  , s = ["label[]", "is_read[]"];
                return t = r().filter(t, (function(e) {
                    if (r().contains(a, e.key)) {
                        if (r().contains(a, "already_selected"))
                            return !1;
                        a.push("already_selected")
                    }
                    if (r().contains(i, e.key)) {
                        if (r().contains(i, "already_selected"))
                            return !1;
                        i.push("already_selected")
                    }
                    if (r().contains(s, e.key)) {
                        if (r().contains(s, "already_selected"))
                            return !1;
                        s.push("already_selected")
                    }
                    return !r().includes(["updated_at_to", "date[to]", "chat_source[]"], e.key)
                }
                )),
                this.prepareCustomOptions(t),
                this.prepareDefaultOptions(t),
                t
            },
            openOptionsModal: function(e) {
                var t = this._findElem("hidden_options").clone()
                  , a = this.$el.find(".hidden-options").offset();
                e.stopPropagation(),
                this.options_modal = new h.default({
                    class_name: "inbox-options-modal",
                    elements: t,
                    search_context: this,
                    onDestroy: r().bind((function() {
                        this.options_modal.$el.off()
                    }
                    ), this)
                }),
                this.options_modal.$el.css({
                    top: a.top - 10 - 1,
                    left: a.left - 7 - 65,
                    margin: "unset"
                }),
                this.options_modal.$el.on("click", ".js-filter-field-clear", r().bind((function(e) {
                    this.$el.find('[data-input-name="'.concat(s()(e.currentTarget).data("input-name"), '"]')).click(),
                    this.trigger("OptionsModal:close")
                }
                ), this))
            },
            checkWidthOptions: function() {
                var e = this._findElem("options_list");
                if (!e.is(":empty") && e.is(":visible")) {
                    e.children(".hidden-options").remove();
                    var t = e.children().length;
                    if (t > 1 || e.width() > this._findElem("options_wrapper").width()) {
                        e.children().addClass("hidden");
                        var a = s()("<div />");
                        a.addClass("list-top-search__options list-top-search__options-showed hidden-options").html('<span class="options_text">'.concat((0,
                        o.i18n)("Filter"), ": ").concat(t, "</span>")),
                        this._findElem("options_list").append(a)
                    } else
                        e.children(":not(.hidden-options)").removeClass("hidden")
                }
            },
            applyFilter: function() {
                var e = this;
                setTimeout((function() {
                    e.options.onFilterItems({
                        reset: !0
                    })
                }
                ))
            },
            openCallbackFilter: function() {
                this._elem("inbox_overlay").show(),
                this._elem("search_more").hide(),
                this._elem("inbox_clear").addClass("aside__menu_container_open-filter"),
                this.onFilterToggle(!0),
                this.checkWidthOptions()
            },
            closeCallbackFilter: function() {
                this._elem("inbox_overlay").hide(),
                this._elem("search_more").show(),
                this._elem("inbox_clear").removeClass("aside__menu_container_open-filter"),
                this.onFilterToggle(!1),
                this.checkWidthOptions()
            },
            initFilter: function() {
                return this.filter || (this.filter_init_def = s().Deferred(),
                this.filter = this._addComponent(this.FilterComponent, this.getFilterProps())),
                this.filter_init_def
            },
            getFilterProps: function() {
                return {
                    $container: this._elem("filter_container"),
                    applyFilter: r().bind(this.applyFilter, this),
                    getPresets: r().bind(this.getPresets, this),
                    openCallback: r().bind(this.openCallbackFilter, this),
                    closeCallback: r().bind(this.closeCallbackFilter, this),
                    setChooseOptions: r().bind(this.setFilterOptions, this),
                    toggleSearchClearButton: r().bind(this.toggleClearButton, this),
                    onAfterRender: r().bind(this.onAfterFilterRender, this)
                }
            },
            onAfterFilterRender: function() {
                this.filter_init_def.resolve()
            },
            filterHasChanges: function() {
                return !(!this.filter || !this.filter.super_change) && this.filter.super_change
            },
            openFilter: function(e) {
                this.$el.find(".search-more").find(e.target).length || this.$el.find(".js-search-inbox-messaging-refresh").find(e.target).length || this.blocked || this.filter && r().isFunction(this.filter.open) && (this.onCloseChat(),
                this.filter.open())
            },
            closeFilter: function() {
                this.filter && r().isFunction(this.filter.close) && this.filter.close()
            },
            onFilterClickToSearchLine: function(e) {
                s()(e.currentTarget).find("input").focus()
            },
            onKeyDown: function(e) {
                this._elem("search_input").get(0) !== e.target || e.keyCode !== _.default.ARROW_DOWN && e.keyCode !== _.default.ARROW_UP && e.keyCode !== _.default.ENTER || (e.preventDefault(),
                e.stopPropagation(),
                this.options.startClickDown(e.keyCode))
            },
            debouncedSuggestSearch: r().debounce((function(e) {
                e && e.length ? (this.options.onTermIsValid(),
                this.filterItems(e)) : this.resetSearch(),
                this.closeFilter()
            }
            ), 300),
            getSearchValue: function() {
                return this._elem("search_input").val().trim()
            },
            handleSearchTerm: function() {
                var e = this.getSearchValue();
                e && e.length > 0 && this.filter.super_change && this.filterCleanFields(),
                this.toggleClearButton(),
                this.debouncedSuggestSearch(e)
            },
            toggleClearButton: function() {
                var e = this.getSearchValue();
                this._elem("cancel_search").toggleClass("hidden", this.filter.is_default_preset_selected && !(e && e.length))
            },
            resetSearch: function() {
                this._elem("search_input").val(""),
                this.options.onTermIsInvalid(),
                this.filterItems("")
            },
            resetFilterAndSearch: function(e) {
                e.stopPropagation(),
                this.resetSearch(),
                this.filterCleanFields()
            },
            filterCleanFields: function() {
                this.filter && r().isFunction(this.filter.onCleanFields) && this.filter.onCleanFields()
            },
            filterCleanField: function(e, t) {
                this.filter && r().isFunction(this.filter.cleanField) && this.filter.cleanField(e, t)
            },
            closeSearch: function() {
                this.filterCleanFields(),
                this.resetSearch()
            },
            _getSortingRules: function(e) {
                e = this._escapeSpecialChars(e);
                var t = this._escapeSpecialChars((0,
                o.transliterate)(e))
                  , a = this._escapeSpecialChars((0,
                o.transliterate)(e, "punto"));
                return e = e.replace(/(е|ё)/gim, "(е|ё)"),
                {
                    contains_term: {
                        rx: new f.UnsafeRegExp("(".concat(e, "|").concat(t, "|").concat(a, ")"),"igm"),
                        rate: 1
                    },
                    equality_at_start: {
                        rx: new f.UnsafeRegExp("^(".concat(e, "|").concat(t, "|").concat(a, ")"),"igm"),
                        rate: 10
                    },
                    strict_equality: {
                        rx: new f.UnsafeRegExp("^(".concat(e, "|").concat(t, "|").concat(a, ")$"),"igm"),
                        rate: 100
                    }
                }
            },
            _escapeSpecialChars: function(e) {
                return e.replace(/([!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/gim, "\\$1")
            },
            setDefaultsFilterOptions: function() {
                this.setSearchTerm(),
                this.order = this.read_sort.getQueryObject()
            },
            setSearchTerm: function(e) {
                var t = e ? this._getSortingRules(e) : {};
                this.fetch_options = {
                    term: e || "",
                    rules: t,
                    rate: function(e) {
                        return a = e,
                        i = t,
                        s = 0,
                        r().each(i, (function(e, t) {
                            var i = e.rx.exec(a.body.title) || [];
                            "equality_at_start" === t && a.login && a.login !== a.title && i.concat(e.rx.exec(a.login) || []),
                            s += e.rate * i.length,
                            e.rx.lastIndex = 0
                        }
                        )),
                        a._sorting_rate = s,
                        a;
                        var a, i, s
                    }
                }
            },
            filterItems: function(e) {
                this.setSearchTerm(e),
                this.options.onFilterItems({
                    reset: !0
                })
            },
            disableSearch: function() {
                this._elem("search_container").addClass(this._class("search_container_disabled")),
                this.blocked = !0
            },
            enableSearch: function() {
                this._elem("search_container").removeClass(this._class("search_container_disabled")),
                this.blocked = !1
            }
        });
        var k = "../build/transpiled/components/base/inbox/search";
        window.define(k, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([k])
    }
    ,
    196924: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => o
        });
        var i = a(55188)
          , s = a.n(i)
          , n = a(460159)
          , r = a.n(n)
          , l = a(41188)
          , c = a(661533);
        const o = {
            events: {
                "click .filter-search__users-select-holder .js-multisuggest": "initUsersSelectManagers"
            },
            usersSelectClear: function(e) {
                this._users_select && this._users_select.destroy(),
                this.refreshSelectedUsers.apply(this, arguments),
                this.form.checkChanges()
            },
            refreshSelectedUsers: function(e, t, a) {
                return this._refreshSelectedUsers({
                    items: e || [],
                    $wrapper: t,
                    input_name: t.data("input-name"),
                    template: a
                })
            },
            _refreshSelectedUsers: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = !0
                  , a = e.$wrapper
                  , i = a.find(".js-multisuggest");
                (!e.items || s().isArray(e.items) && !e.items.length || e.is_important_render) && (i.replaceWith(r()({
                    ref: e.template || "/tmpl/users_select/users_select_items.twig"
                }).render(s().extend(e, {
                    id: i.attr("id")
                }))),
                e.is_important_render ? (!e.items || s().isArray(e.items) && !e.items.length) && (t = !1) : t = !1),
                s().isFunction(this.checkSuggestValues) && this.checkSuggestValues(a, e.input_name),
                a.toggleClass("glow", t)
            },
            initUsersSelectManagers: function(e, t) {
                var a = this
                  , i = c(e.currentTarget)
                  , n = i.closest(".filter-search__users-select-holder")
                  , r = n.data("input-name");
                e.stopPropagation(),
                this._users_select = new l.default(s().extend({
                    el: e.currentTarget,
                    id: i.attr("id"),
                    input_name: r,
                    suggest_class_name: "filter__users-select-suggest",
                    replace: !0,
                    select_one: !1,
                    not_remove: !1,
                    disable_groups_for_select: this.params.disable_groups_for_select,
                    disabled_users: this.params.disabled_users,
                    users: s().has(this.params, "users") ? this.params.users : {},
                    existing_items: function() {
                        return c.makeArray(n.find(".js-multisuggest-item").map((function() {
                            return {
                                id: c(this).attr("data-id"),
                                title: c.trim(c(this).text())
                            }
                        }
                        )))
                    },
                    onInit: function() {
                        this.$el.closest(".filter__custom_settings__item").addClass("js-in-edit"),
                        s().isFunction(a._fixFilterForSuggest) && a._fixFilterForSuggest({
                            fix: !0
                        })
                    },
                    onRenderSuggest: function() {
                        this.$list.width(n.outerWidth())
                    },
                    onItemChoosed: function() {
                        this.$el.parent().scrollTop(1e4)
                    },
                    onGroupChoosed: function() {
                        this.$el.parent().scrollTop(1e4)
                    },
                    onDestroy: function(e) {
                        this.$el.closest(".filter__custom_settings__item").removeClass("js-in-edit"),
                        s().isFunction(a._fixFilterForSuggest) && a._fixFilterForSuggest({
                            fix: !1
                        }),
                        a.refreshSelectedUsers(e, n),
                        a._users_select = null
                    }
                }, t))
            }
        }
    }
    ,
    463274: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => p
        });
        var i = a(661533)
          , s = a.n(i)
          , n = a(55188)
          , r = a.n(n)
          , l = a(460159)
          , c = a.n(l)
          , o = a(162262)
          , u = a.n(o)
          , f = a(521466)
          , d = a(196924)
          , _ = a(858458);
        const p = f.default.extend({
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
                f.default.prototype.initialize.apply(this, arguments),
                this.options = e || {},
                u().mixin(this, d.default)
            },
            destroy: function(e) {
                r().isFunction(this.options.onDestroy) && this.options.onDestroy(e),
                f.default.prototype.destroy.apply(this, arguments)
            },
            render: c()._preload(["/tmpl/filter/in_search/option.twig"], "_render"),
            _render: function() {
                return this.setElement(c()({
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
                _.default.apply(this, t)
            },
            _completeNameInput: function(e) {
                var t, a = s().extend(!0, {}, APP.constant("account").cf, APP.constant("account").predefined_cf);
                return -1 === e.indexOf("cf") && -1 === e.indexOf("custom_fields") || (t = e.replace(/\D+/g, "")),
                -1 !== e.indexOf("[date]") || -1 !== e.indexOf("[price]") || -1 !== e.indexOf("[next_price]") || -1 !== e.indexOf("[ltv]") || -1 !== e.indexOf("[purchases_count]") || -1 !== e.indexOf("[average_check]") || -1 !== e.indexOf("[next_date]") ? e += "[from]" : (r().isUndefined(t) || r().each(a, (function(a) {
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
        var h = "../build/transpiled/interface/search/partials/option_view";
        window.define(h, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([h])
    }
    ,
    799633: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => l
        });
        var i = a(55188)
          , s = a.n(i)
          , n = a(521466)
          , r = a(889378);
        const l = n.default.extend({
            className: "modal-options",
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                    t[a] = arguments[a];
                n.default.prototype._classes.apply(this, t)
            },
            _selectors: function() {
                return {
                    close_icon: ".icon-modal-close"
                }
            },
            events: function() {
                var e = s().result(n.default.prototype, "events", {});
                return e["click ".concat(this._selector("close_icon"))] = "close",
                e
            },
            initialize: function(e) {
                this.options = e || {},
                this.onDestroy = s().isFunction(this.options.onDestroy) ? this.options.onDestroy : s().noop,
                this.send = !1,
                n.default.prototype.initialize.apply(this),
                this.modal = new r.default({
                    class_name: "modal-list modal-hidden-options ".concat(this.options.class_name),
                    init: s().bind((function(e) {
                        e.addClass("custom-scroll"),
                        this.setElement(e)
                    }
                    ), this),
                    destroy: s().bind((function() {
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
                n.default.prototype.destroy.apply(this, t)
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
        var c = "../build/transpiled/interface/search/partials/options_modal";
        window.define(c, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([c])
    }
    ,
    328287: (e, t, a) => {
        a.r(t),
        a.d(t, {
            default: () => A
        });
        var i = a(55188)
          , s = a.n(i)
          , n = a(161320)
          , r = a.n(n)
          , l = a(880774)
          , c = a(579569)
          , o = a(500034)
          , u = a(661533)
          , f = {
            "-1": {
                id: "-1",
                name: (0,
                l.i18n)("No active leads linked")
            },
            "-2": {
                id: "-2",
                name: (0,
                l.i18n)("No leads linked")
            }
        };
        function d(e, t) {
            var a = [s().escape(e)];
            return t && (a = a.concat([": ", s().escape(t)])),
            a.join("")
        }
        function _(e, t, a, i, n) {
            var r;
            switch (APP.getBaseEntity()) {
            case "customers":
                r = this.statuses;
                break;
            case "contacts":
                r = f;
                break;
            default:
                r = s().isUndefined(this.statuses[APP.constant("main_pipeline")]) ? this.statuses : this.statuses[APP.constant("main_pipeline")].statuses
            }
            s().isArray(i.value) && i.value.length > 1 ? i.value.length === s().keys(r).length ? t[a] = {
                key: e,
                value: d("".concat((0,
                l.i18n)("All"), " ").concat((0,
                l.i18n)("Statuses").toLowerCase()))
            } : t[a] = {
                key: e,
                value: d((0,
                l.i18n)("Statuses"), n.get(e).length)
            } : s().find(r, (function(s) {
                if (i.value == s.id)
                    return t[a] = {
                        key: e,
                        value: d((0,
                        l.i18n)("Status"), s.option || s.name)
                    }
            }
            ))
        }
        function p(e, t, a, i) {
            s().isArray(i.value) ? s().each(i.value, (function(i, n) {
                s().find(this.loss_reasons, (function(s) {
                    if (i == s.id) {
                        if (0 === n)
                            return t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Reason for close-lost leads"), s.option)
                            };
                        t[a].value += ", ".concat(s.option)
                    }
                }
                ))
            }
            ), this) : s().find(this.loss_reasons, (function(s) {
                if (i.value == s.id)
                    return t[a] = {
                        key: e,
                        value: d((0,
                        l.i18n)("Reason for close-lost leads"), s.option)
                    }
            }
            ))
        }
        function h(e, t, a, i, n) {
            var r;
            s().isArray(i.value) && i.value.length > 1 ? t[a] = {
                key: e,
                value: d((0,
                l.i18n)("tags_manage_caption"), n.get(e).length)
            } : (r = this.filter.tags_lib._list.get(i.value),
            t[a] = {
                key: e,
                value: d((0,
                l.i18n)("tags_manage_caption"), null == r ? void 0 : r.get("name"))
            })
        }
        function v(e, t, a, i, n) {
            s().isArray(i.value) && i.value.length > 1 ? t[a] = {
                key: e,
                value: d((0,
                l.i18n)("Segments"), n.get(e).length)
            } : t[a] = {
                key: e,
                value: d((0,
                l.i18n)("Segments"), this.filter.suggest_segment.getNameSelected(i.value))
            }
        }
        function m(e) {
            var t = parseInt(e && e.replace("previous_days_", ""));
            if (t > 0)
                return (0,
                l.numeralWord)(t, (0,
                l.i18n)("Last %s days (numeral)")).replace("%s", t);
            switch (e) {
            case "current_day":
            case "today":
                return (0,
                l.i18n)("Today (filter)");
            case "yesterday":
                return (0,
                l.i18n)("Yesterday (filter)");
            case "current_week":
            case "week":
                return (0,
                l.i18n)("Current week (filter)");
            case "previous_week":
                return (0,
                l.i18n)("Last week (filter)");
            case "current_month":
            case "month":
                return (0,
                l.i18n)("Current month (filter)");
            case "previous_month":
                return (0,
                l.i18n)("Last month (filter)");
            case "current_quarter":
            case "quarter":
                return (0,
                l.i18n)("Current quarter (filter)");
            case "current_year":
                return (0,
                l.i18n)("Current year (filter)");
            default:
                return ""
            }
        }
        function g(e, t, a, i, n) {
            var r, c = Number(e.replace(/\D+/g, "")), o = s().keys(this.statuses), u = "filter[pipe][".concat(APP.constant("main_pipeline"), "][]"), _ = o.length, p = 0, h = [], v = !1, m = !0;
            if (s().each(o, (function(e) {
                s().isUndefined(n.get("filter[pipe][".concat(Number(e.replace(/\D+/g, "")), "][]"))) && (v = !0),
                "" === n.get("filter[pipe][".concat(Number(e.replace(/\D+/g, "")), "][]")) && (_ -= 1)
            }
            ), this),
            r = v ? this.$el.find(".filter__custom_settings__item_statuses").find(".checkboxes_dropdown__list__wrapper__inner").find("input:checkbox") : this.$el.find(".filter__custom_settings__item_statuses").find("input:checkbox"),
            s().each(r, (function(e) {
                var t = e.name;
                switch (!0) {
                case /filter\[pipe\]\[[\d+]/g.test(t):
                    e.checked ? p += 1 : m = !1;
                    break;
                case /filter\[pipe\]\[-(1|2)]/g.test(t):
                    e.checked && h.push(f[/filter\[pipe\]\[(-1|-2)]/.exec(t)[1]].name)
                }
            }
            )),
            v)
                if (s().isArray(n.get(e)))
                    t[a] = m ? {
                        key: e,
                        value: d("".concat((0,
                        l.i18n)("All"), " ").concat((0,
                        l.i18n)("Stages").toLowerCase()))
                    } : {
                        key: e,
                        value: d((0,
                        l.i18n)("Stages"), n.get(e).length)
                    };
                else {
                    if (!this.statuses["id_".concat(c)])
                        return {
                            key: "",
                            value: ""
                        };
                    s().find(this.statuses["id_".concat(c)].statuses, (function(s) {
                        if (i.value == s.id)
                            return t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Stage"), s.name)
                            }
                    }
                    ), this)
                }
            else
                t[a] = m ? {
                    key: u,
                    value: d("".concat((0,
                    l.i18n)("All Pipelines"), ", ").concat((0,
                    l.i18n)("All"), " ").concat((0,
                    l.i18n)("Stages").toLowerCase()))
                } : {
                    key: u,
                    value: d((0,
                    l.capitalize)(s().compact([h.length ? h.join(", ") : "", _ ? "".concat(_, " ").concat((0,
                    l.numeralWord)(_, (0,
                    l.i18n)("pipeline,pipelines"))) : "", p ? "".concat(p, " ").concat((0,
                    l.numeralWord)(p, (0,
                    l.i18n)("stage,stages"))) : ""]).join(", ").toLowerCase()))
                }
        }
        function y(e, t, a, i, n) {
            var r, c, o;
            switch (i) {
            case "object":
                c = s().isString(n.value) || s().isArray(n.value) && 1 === n.value.length ? (0,
                l.getEntityLang)(n.value) : this.filter.params[i].title,
                r = s().isString(n.value) || s().isArray(n.value) && 1 === n.value.length ? "" : ":&nbsp;".concat(n.value.length);
                break;
            case "xevents":
                s().isArray(n.value) && 1 === n.value.length && (n.value = n.value[0]),
                s().isArray(n.value) || "24" !== n.value.split(":")[0] || function(e, t, a) {
                    a.value && (e[e.length] = {
                        key: "filter[cf][]",
                        value: APP.constant("account").cf[a.value] ? "".concat((0,
                        l.i18n)("Field"), ":&nbsp;").concat(APP.constant("account").cf[a.value].NAME) : (0,
                        l.i18n)("Field is not selected")
                    })
                }(t, 0, {
                    value: n.value.split(":")[1]
                }),
                o = APP.data.current_view.params ? APP.data.current_view.params.filter.events.items : this.filter.params[i].items,
                c = this.filter.params[i].title,
                r = s().isString(n.value) ? ":&nbsp;".concat(s().find(o, (function(e) {
                    return e.id == n.value.split(":")[0] && !e.cf_id
                }
                )).option) : n.value ? ":&nbsp;".concat(n.value.length) : "";
                break;
            case "value_after":
            case "value_before":
                c = this.filter.params[i].title,
                r = s().isString(n.value) || s().isArray(n.value) && 1 === n.value.length ? "" : n.value ? ":&nbsp;".concat(n.value.length) : ""
            }
            t[a] = {
                key: e,
                value: c + r
            }
        }
        function k(e, t, a, i) {
            var n = e;
            i.value && (s().isArray(i.value) && (n += ": ".concat(i.value.length)),
            t[a] = {
                key: i.key,
                value: n
            })
        }
        function b(e, t, a, i) {
            var n = e;
            i.value && (s().isArray(i.value) && (n += ": ".concat(i.value.length)),
            t[a] = {
                key: i.key,
                value: n
            })
        }
        a(368439);
        const A = {
            prepareDefaultOptions: function(e) {
                var t = this.filter.form.model;
                s().each(e, (function(a, i) {
                    var n = a.key;
                    switch (e[i] = {
                        key: n,
                        value: (0,
                        l.getEscapedEntity)(a.value)
                    },
                    n) {
                    case "filter[name]":
                    case "filter[extensions][]":
                    case "filter[company][name]":
                    case "filter[main_contact][name]":
                    case "filter[entity_name][]":
                    case "filter[members][]":
                    case "filter[thread_name][]":
                        !function(e, t, a, i) {
                            var n, r = APP.getBaseEntity();
                            switch (e) {
                            case "filter[name]":
                                switch (r) {
                                case "leads":
                                    t[a] = {
                                        key: e,
                                        value: d((0,
                                        l.i18n)("Lead name"), i.value)
                                    };
                                    break;
                                case "customers":
                                    t[a] = {
                                        key: e,
                                        value: d((0,
                                        l.i18n)("Customer name"), i.value)
                                    };
                                    break;
                                default:
                                    t[a] = {
                                        key: e,
                                        value: d((0,
                                        l.i18n)("Name"), i.value)
                                    }
                                }
                                break;
                            case "filter[company][name]":
                                t[a] = {
                                    key: e,
                                    value: d("".concat((0,
                                    l.i18n)("notes_filter_companies"), ": ").concat((0,
                                    l.i18n)("Name")), i.value)
                                };
                                break;
                            case "filter[entity_name][]":
                                t[a] = {
                                    key: e,
                                    value: d((0,
                                    l.i18n)("Lead name"), i.value)
                                };
                                break;
                            case "filter[members][]":
                                t[a] = {
                                    key: e,
                                    value: d((0,
                                    l.i18n)("From who"), i.value)
                                };
                                break;
                            case "filter[thread_name][]":
                                t[a] = {
                                    key: e,
                                    value: d((0,
                                    l.i18n)("Subject"), i.value)
                                };
                                break;
                            case "filter[extensions][]":
                                t[a] = {
                                    key: e,
                                    value: d((0,
                                    l.i18n)("Type"), (n = i.value,
                                    s().isArray(n) ? s().map(n, (function(e) {
                                        return "No type" === e ? (0,
                                        l.i18n)("No type") : e
                                    }
                                    )) : "No type" === n ? (0,
                                    l.i18n)("No type") : n))
                                };
                                break;
                            default:
                                t[a] = {
                                    key: e,
                                    value: d("".concat((0,
                                    l.i18n)("Contacts"), ": ").concat((0,
                                    l.i18n)("Name")), i.value)
                                }
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[talk_number]":
                    case "talk_number":
                        !function(e, t, a, i) {
                            t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Chat ID"), i.value)
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[last_message_type][]":
                        !function(e, t, a, i) {
                            if (t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Last message from"))
                            },
                            s().isArray(i.value))
                                2 === i.value.length ? t[a].value += ": ".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("value,values,values"))) : t[a].value += ": ".concat(i.value.length);
                            else
                                switch (i.value) {
                                case "1":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Incoming message (filter)"));
                                    break;
                                case "2":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Outgoing message (filter)"))
                                }
                        }(n, e, i, a);
                        break;
                    case "filter[talk_read_status][]":
                        !function(e, t, a, i) {
                            if (t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Talk read status"))
                            },
                            s().isArray(i.value))
                                2 === i.value.length ? t[a].value += ": ".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("value,values,values"))) : t[a].value += ": ".concat(i.value.length);
                            else
                                switch (i.value) {
                                case "1":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Read message"));
                                    break;
                                case "0":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("unread"))
                                }
                        }(n, e, i, a);
                        break;
                    case "filter[has_open_talk][]":
                        !function(e, t, a, i) {
                            if (t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Talks"))
                            },
                            s().isArray(i.value))
                                3 === i.value.length ? t[a].value += ": ".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("value,values,values"))) : t[a].value += ": ".concat(i.value.length);
                            else
                                switch (i.value) {
                                case "without":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Without talks"));
                                    break;
                                case "with_open":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("With open talks"));
                                    break;
                                case "without_open":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Without open talks"))
                                }
                        }(n, e, i, a);
                        break;
                    case "filter[mailbox][]":
                        !function(e, t, a, i, s) {
                            var n = s.findWhere({
                                id: parseInt(i.value)
                            });
                            t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Mail inbox"), n.get("email"))
                            }
                        }(n, e, i, a, this.filter.params.mailboxes);
                        break;
                    case "filter[has_attachments]":
                    case "filter[is_unread]":
                    case "filter[from_parser]":
                    case "filter[has_entity]":
                        !function(e, t, a, i) {
                            var s, n;
                            switch (e) {
                            case "filter[has_attachments]":
                                s = (0,
                                l.i18n)("Attachments");
                                break;
                            case "filter[is_unread]":
                                s = (0,
                                l.i18n)("unread");
                                break;
                            case "filter[from_parser]":
                                s = (0,
                                l.i18n)("auto-processed");
                                break;
                            case "filter[has_entity]":
                                s = (0,
                                l.i18n)("linked to leads")
                            }
                            n = "Y" === i.value ? (0,
                            l.i18n)("Yes") : (0,
                            l.i18n)("No"),
                            t[a] = {
                                key: e,
                                value: d(s, n)
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[tasks][]":
                    case "filter[main_contact][tasks][]":
                    case "filter[company][tasks][]":
                        !function(e, t, a, i) {
                            switch (e) {
                            case "filter[tasks][]":
                                t[a] = {
                                    key: e,
                                    value: d((0,
                                    l.i18n)("Tasks"))
                                };
                                break;
                            case "filter[main_contact][tasks][]":
                                t[a] = {
                                    key: e,
                                    value: d("".concat((0,
                                    l.i18n)("Contacts"), ": ").concat((0,
                                    l.i18n)("Tasks")))
                                };
                                break;
                            default:
                                t[a] = {
                                    key: e,
                                    value: d("".concat((0,
                                    l.i18n)("notes_filter_companies"), ": ").concat((0,
                                    l.i18n)("Tasks")))
                                }
                            }
                            if (s().isArray(i.value))
                                7 === i.value.length ? t[a].value += ": ".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("value,values,values"))) : t[a].value += ": ".concat(i.value.length);
                            else
                                switch (i.value) {
                                case "today":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Due today"));
                                    break;
                                case "tomorrow":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Due tomorrow"));
                                    break;
                                case "week":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Due this week"));
                                    break;
                                case "month":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Due this month"));
                                    break;
                                case "quarter":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Due this quarter"));
                                    break;
                                case "no_tasks":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("No To-dos assigned"));
                                    break;
                                case "failed_tasks":
                                    t[a].value += ": ".concat((0,
                                    l.i18n)("Overdue"))
                                }
                        }(n, e, i, a);
                        break;
                    case "filter[status_id][]":
                    case "filter[dealstatus][]":
                        _.apply(this, [n, e, i, a, t]);
                        break;
                    case "filter[loss_reason_id][]":
                        p.apply(this, [n, e, i, a]);
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
                        !function(e, t, a, i) {
                            var n, r, c, o = e.slice(0, s().lastIndexOf(e, "["));
                            switch (e) {
                            case "filter[size][from]":
                            case "filter[size][to]":
                                n = (0,
                                l.i18n)("Size"),
                                r = "" === i.get("filter[size][from]") ? "0" : i.get("filter[size][from]"),
                                c = "" === i.get("filter[size][to]") ? "" : " - ".concat(i.get("filter[size][to]"));
                                break;
                            case "filter[price][from]":
                            case "filter[price][to]":
                                n = (0,
                                l.i18n)("Sale"),
                                r = "" === i.get("filter[price][from]") ? "0" : i.get("filter[price][from]"),
                                c = "" === i.get("filter[price][to]") ? "" : " - ".concat(i.get("filter[price][to]"));
                                break;
                            case "filter[next_price][from]":
                            case "filter[next_price][to]":
                                n = (0,
                                l.i18n)("Expected amount"),
                                r = "" === i.get("filter[next_price][from]") ? "0" : i.get("filter[next_price][from]"),
                                c = "" === i.get("filter[next_price][to]") ? "" : " - ".concat(i.get("filter[next_price][to]"));
                                break;
                            case "filter[ltv][from]":
                            case "filter[ltv][to]":
                                n = (0,
                                l.i18n)("Total sales value"),
                                r = "" === i.get("filter[ltv][from]") ? "0" : i.get("filter[ltv][from]"),
                                c = "" === i.get("filter[ltv][to]") ? "" : " - ".concat(i.get("filter[ltv][to]"));
                                break;
                            case "filter[purchases_count][from]":
                            case "filter[purchases_count][to]":
                                n = (0,
                                l.i18n)("Purchases count"),
                                r = "" === i.get("filter[purchases_count][from]") ? "0" : i.get("filter[purchases_count][from]"),
                                c = "" === i.get("filter[purchases_count][to]") ? "" : " - ".concat(i.get("filter[purchases_count][to]"));
                                break;
                            case "filter[average_check][from]":
                            case "filter[average_check][to]":
                                n = (0,
                                l.i18n)("Average check"),
                                r = "" === i.get("filter[average_check][from]") ? "0" : i.get("filter[average_check][from]"),
                                c = "" === i.get("filter[average_check][to]") ? "" : " - ".concat(i.get("filter[average_check][to]"));
                                break;
                            case "filter[labor_cost][from]":
                            case "filter[labor_cost][to]":
                                n = (0,
                                l.i18n)("Labor costs (column)"),
                                r = "" === i.get("filter[labor_cost][from]") ? "0" : i.get("filter[labor_cost][from]"),
                                c = "" === i.get("filter[labor_cost][to]") ? "" : " - ".concat(i.get("filter[labor_cost][to]"))
                            }
                            t[a] = {
                                key: o,
                                value: d(n, r + c)
                            }
                        }(n, e, i, t);
                        break;
                    case "filter[status][]":
                        !function(e, t, a, i) {
                            var n = (0,
                            l.i18n)("Stage");
                            s().isArray(i.value) ? 2 === i.value.length ? t[a] = {
                                key: e,
                                value: d("".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("stage,stages"))))
                            } : s().each(i.value, (function(e, i) {
                                0 === i ? t[a] = "uncompl" === e ? {
                                    key: e,
                                    value: d(n, (0,
                                    l.i18n)("Expired"))
                                } : {
                                    key: e,
                                    value: d(n, (0,
                                    l.i18n)("Completed"))
                                } : t[a].value += ", ".concat("uncompl" === e ? (0,
                                l.i18n)("Expired") : (0,
                                l.i18n)("Completed"))
                            }
                            )) : "uncompl" === i.value ? t[a] = {
                                key: e,
                                value: d(n, (0,
                                l.i18n)("Expired"))
                            } : t[a] = {
                                key: e,
                                value: d(n, (0,
                                l.i18n)("Completed"))
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[task_type][]":
                        !function(e, t, a, i) {
                            var n = APP.constant("task_types")
                              , r = []
                              , c = "";
                            switch (i.value = s().isArray(i.value) ? i.value : [i.value],
                            (r = s().map(i.value, (function(e) {
                                if (e = parseInt(e),
                                s().contains([1, 2], e))
                                    return APP.todo_types[e];
                                var t = s().find(n, (function(t) {
                                    return parseInt(t.id) === e
                                }
                                ));
                                return t ? t.option : e
                            }
                            ))).length) {
                            case 0:
                                break;
                            case 1:
                                c = r[0];
                                break;
                            default:
                                c = [r[0], "".concat((0,
                                l.i18n)("required_numeral_more"), " ").concat(r.length - 1)].join(", ")
                            }
                            t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Type"), c)
                            }
                        }(n, e, i, a);
                        break;
                    case "segments":
                    case "filter[segments][]":
                        v.apply(this, [n, e, i, a, t]);
                        break;
                    case "tag[]":
                        h.apply(this, [n, e, i, a, t]);
                        break;
                    case "updated_at_from":
                        !function(e, t, a, i) {
                            var n = "closed" === (i.get("filter[date][type]") || i.get("date[type]")) ? (0,
                            l.i18n)("Closed") : (0,
                            l.i18n)("Created");
                            if (a.value) {
                                switch (!0) {
                                case !s().isEmpty(i.get("updated_at_from")) && !s().isEmpty(i.get("updated_at_to")):
                                    n += ": ".concat(i.get("updated_at_from"), " - ").concat(i.get("updated_at_to"));
                                    break;
                                case !s().isEmpty(i.get("updated_at_from")):
                                    n += ": ".concat(i.get("updated_at_from"));
                                    break;
                                case !s().isEmpty(i.get("updated_at_to")):
                                    n += ": ".concat(i.get("updated_at_to"))
                                }
                                e[t] = {
                                    key: a.key,
                                    value: n
                                }
                            }
                        }(e, i, a, t);
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
                        !function(e, t, a, i, n) {
                            var c, o, u;
                            switch (u = s().contains(["filter_date_from", "filter[date_preset]", "filter[date][date_preset]", "date_preset", "filter[date][type]", "date[type]", "date[from]", "filter[main_contact][date][from]", "filter[main_contact][date_preset]", "filter[company][date][from]", "filter[company][date_preset]", "filter[next_date][from]", "filter[next_date][date_preset]", "filter[active_talks][from]", "filter[active_talks][date_preset]"], e) ? e : e.slice(0, s().lastIndexOf(e, "[")),
                            e) {
                            case "date[type]":
                            case "filter[date][type]":
                                c = n.get("filter[date][type]") || n.get("date[type]"),
                                i.value = "";
                                break;
                            case "filter_date_from":
                            case "date_preset":
                            case "filter[date_preset]":
                            case "filter[date][date_preset]":
                                c = n.get("filter_date_switch") || n.get("filter[date][type]") || n.get("date[type]"),
                                o = n.get("filter_date_to");
                                break;
                            case "filter[main_contact][date][from]":
                            case "filter[main_contact][date_preset]":
                                c = n.get("filter[main_contact][type]"),
                                o = n.get("filter[main_contact][date][to]");
                                break;
                            case "filter[active_talks][from]":
                            case "filter[active_talks][date_preset]":
                                c = "active_talks",
                                o = n.get("filter[active_talks][to]");
                                break;
                            case "filter[company][date][from]":
                            case "filter[company][date_preset]":
                                c = n.get("filter[company][type]"),
                                o = n.get("filter[company][date][to]");
                                break;
                            case "filter[next_date][from]":
                            case "filter[next_date][date_preset]":
                                o = n.get("filter[next_date][to]");
                                break;
                            case "filter[date][from]":
                            case "date[from]":
                                c = n.get("filter[date][type]") || n.get("date[type]"),
                                o = n.get("filter[date][to]") || n.get("date[to]")
                            }
                            s().contains(["filter[date_preset]", "filter[date][date_preset]", "date_preset", "filter[main_contact][date_preset]", "filter[company][date_preset]", "filter[next_date][date_preset]", "filter[active_talks][date_preset]"], e) && (i.value = m(i.value)),
                            i.value === r()([1, 0, 1]).format(APP.system.format.date.date) ? i.value = "".concat((0,
                            l.i18n)("deals to").charAt(0).toUpperCase() + (0,
                            l.i18n)("deals to").substr(1), " ").concat(o) : i.value += s().isUndefined(o) || "" === o ? "" : " - ".concat(o),
                            s().isUndefined(c) && (c = n.get("fake"));
                            var f = "";
                            "closed" === c ? t[a] = {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("Closed"), i.value)
                            } : "in-work" === c || "in_work" === c ? t[a] = {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("In work"), i.value)
                            } : s().contains(["modified", "modify", "updated_at"], c) ? t[a] = {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("Modified"), i.value)
                            } : "created" === c || "create" === c ? t[a] = {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("Created"), i.value)
                            } : "date" === c ? t[a] = {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("Date within"), i.value)
                            } : t.filter_date_switch ? t[a] = {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("In work"), i.value)
                            } : t[a] = "active_talks" === c ? {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("Active talks"), i.value)
                            } : {
                                key: u,
                                value: d(f + (0,
                                l.i18n)("Created"), i.value)
                            }
                        }(n, e, i, a, t);
                        break;
                    case "filter[next_date][date_preset]":
                    case "filter[next_date][from]":
                    case "filter[next_date][to]":
                        !function(e, t, a, i, n) {
                            var r = "" === n.get("filter[next_date][to]") ? "" : " - ".concat(n.get("filter[next_date][to]"))
                              , c = e.slice(0, s().lastIndexOf(e, "["));
                            t[a] = {
                                key: c,
                                value: d((0,
                                l.i18n)("Next purchase"), "filter[next_date][date_preset]" === e ? "" : i.value + r)
                            }
                        }(n, e, i, a, t);
                        break;
                    case "filter[main_user][]":
                    case "filter[created_by][]":
                    case "filter[updated_by][]":
                    case "filter[modified_by][]":
                        !function(e, t, a, i, n) {
                            var r, o, u = APP.getBaseEntity();
                            "filter[main_user][]" === e ? r = d((0,
                            l.i18n)("Users")) : "filter[created_by][]" === e ? "leads" === u || "customers" === u || "contacts" === u ? r = d((0,
                            l.i18n)("Created by")) : "todo" === u ? r = d((0,
                            l.i18n)("Authors")) : "files" === u && (r = d((0,
                            l.i18n)("Created by (masculine)"))) : "filter[updated_by][]" === e && "files" === u ? r = d((0,
                            l.i18n)("Updated by (masculine)")) : "leads" === u ? r = d((0,
                            l.i18n)("Modified by")) : "customers" !== u && "contacts" !== u || (r = d((0,
                            l.i18n)("Modified by"))),
                            s().isArray(i.value) && i.value.length > 1 && n.get(e) ? (o = n.get(e).length,
                            t[a] = {
                                key: e,
                                value: "".concat(r, ": ").concat(o)
                            }) : s().isArray(i.value) && "group" === i.value[0].substr(0, 5) || (s().isArray(i.value) ? "group" === i.value[0].substr(0, 5) : "group" === i.value.substr(0, 5)) ? t[a] = {
                                key: e,
                                value: "".concat(r, ": ").concat((0,
                                c.getGroupName)(i.value))
                            } : (s().isArray(i.value) ? -1 === parseInt(i.value[0]) : -1 === parseInt(i.value)) ? t[a] = {
                                key: e,
                                value: "".concat(r, ": ").concat((0,
                                l.i18n)("Client (user select)"))
                            } : t[a] = {
                                key: e,
                                value: "".concat(r, ": ").concat((0,
                                c.getUserName)(i.value))
                            }
                        }(n, e, i, a, t);
                        break;
                    case "filter[unsorted_category][]":
                        !function(e, t, a, i) {
                            var n = APP.constant("unsorted_categories");
                            s().isArray(i.value) ? i.value.length === s().keys(n).length ? t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Unsorted category"), "".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("value,values,values"))))
                            } : t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Unsorted category"), i.value.length)
                            } : t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Unsorted category"), (0,
                                l.i18n)("unsorted_category_".concat(n[i.value])))
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[lead_source][]":
                        !function(e, t, a, i) {
                            var n = APP.constant("lead_sources");
                            s().isArray(i.value) && n ? i.value.length === s().keys(n).length ? t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Source of lead"), "".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("value,values,values"))))
                            } : t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Source of lead"), i.value.length)
                            } : t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Source of lead"), n[i.value].option ? n[i.value].option : "")
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[source_id]":
                        !function(e, t, a, i) {
                            var s = "";
                            APP.constant("sources") && APP.constant("sources")[i.value] && APP.constant("sources")[i.value].option && (s = APP.constant("sources")[i.value].option),
                            t[a] = {
                                key: e,
                                value: d((0,
                                l.i18n)("Source"), s)
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[products][]":
                        !function(e, t, a, i) {
                            var n = s().isArray(i.value) ? i.value.length : i.value.length > 0 ? 1 : 0;
                            t[a] = {
                                key: e,
                                value: "".concat((0,
                                l.i18n)("Products"), ": ").concat(n)
                            }
                        }(n, e, i, a);
                        break;
                    case "filter[event_type][]":
                        y.apply(this, [n, e, i, "xevents", a]);
                        break;
                    case "filter[entity][]":
                        y.apply(this, [n, e, i, "object", a]);
                        break;
                    case "filter[value_after]":
                    case "filter[value_after][]":
                    case "filter[value_after][status_lead][]":
                    case "filter[value_after][helpbot][]":
                    case "filter[value_after][cf][values][]":
                    case "filter[value_after][responsible][]":
                    case "filter[value_after][status_customer][]":
                    case "filter[value_after][segments_ids][]":
                        y.apply(this, [n, e, i, "value_after", a]);
                        break;
                    case "filter[value_before]":
                    case "filter[value_before][]":
                    case "filter[value_before][status_lead][]":
                    case "filter[value_before][helpbot][]":
                    case "filter[value_before][cf][values][]":
                    case "filter[value_before][responsible][]":
                    case "filter[value_before][status_customer][]":
                    case "filter[value_before][segments_ids][]":
                        y.apply(this, [n, e, i, "value_before", a]);
                        break;
                    case "role_id":
                    case "role_id[]":
                        !function(e, t, a) {
                            var i;
                            if (a.value) {
                                s().isArray(a.value) && 1 === a.value.length && (a.value = a.value[0]);
                                var n = s().find(APP.data.current_view.params.existed_data.roles, (function(e) {
                                    return e.id.toString() === a.value
                                }
                                ));
                                n || "admin" !== a.value ? n && (i = n.name) : i = (0,
                                l.i18n)("Administrator"),
                                e[t] = {
                                    key: a.key,
                                    value: s().isArray(a.value) ? "".concat((0,
                                    l.numeralWord)(a.value.length, (0,
                                    l.i18n)("role,roles,roles")), ":&nbsp;").concat(a.value.length) : "".concat((0,
                                    l.numeralWord)(1, (0,
                                    l.i18n)("role,roles,roles")), ":&nbsp;").concat(i)
                                }
                            }
                        }(e, i, a);
                        break;
                    case "group_id":
                    case "group_id[]":
                        !function(e, t, a) {
                            var i;
                            a.value && (s().isArray(a.value) && 1 === a.value.length && (a.value = a.value[0]),
                            "free" === a.value ? i = APP.lang["Free users"] : APP.data.current_view.params.existed_data.groups[a.value] && (i = APP.data.current_view.params.existed_data.groups[a.value].name),
                            e[t] = {
                                key: a.key,
                                value: s().isArray(a.value) ? "".concat((0,
                                l.numeralWord)(a.value.length, (0,
                                l.i18n)("group,groups,groups")), ":&nbsp;").concat(a.value.length) : "".concat((0,
                                l.numeralWord)(1, (0,
                                l.i18n)("group,groups,groups")), ":&nbsp;").concat(i)
                            })
                        }(e, i, a);
                        break;
                    case "active":
                    case "active[]":
                        !function(e, t, a) {
                            a.value && (s().isArray(a.value) && 1 === a.value.length && (a.value = a.value[0]),
                            e[t] = {
                                key: a.key,
                                value: s().isArray(a.value) ? "".concat((0,
                                l.i18n)("All"), " ").concat((0,
                                l.numeralWord)("all", (0,
                                l.i18n)("user,user,users"))) : "Y" === a.value ? (0,
                                l.i18n)("Active users") : (0,
                                l.i18n)("Inactive users")
                            })
                        }(e, i, a);
                        break;
                    case "is_mfa_enabled":
                    case "is_mfa_enabled[]":
                        !function(e, t, a) {
                            if (a.value) {
                                var i;
                                switch (s().isArray(a.value) && 1 === a.value.length && (a.value = s().first(a.value)),
                                !0) {
                                case s().isArray(a.value):
                                    i = (0,
                                    l.i18n)("All verification types");
                                    break;
                                case "Y" === a.value:
                                    i = (0,
                                    l.i18n)("Users with 2-step verification");
                                    break;
                                default:
                                    i = (0,
                                    l.i18n)("Users without 2-step verification")
                                }
                                e[t] = {
                                    key: a.key,
                                    value: i
                                }
                            }
                        }(e, i, a);
                        break;
                    case "label[]":
                    case "is_read[]":
                        !function(e, t, a) {
                            a.value && (e[t] = {
                                key: a.key,
                                value: (0,
                                l.i18n)("statuses")
                            })
                        }(e, i, a);
                        break;
                    case "provider[]":
                        k((0,
                        l.i18n)("Sources"), e, i, a);
                        break;
                    case "status[]":
                        b((0,
                        l.i18n)("Conversation status"), e, i, a);
                        break;
                    case "emotion[]":
                    case "emotion":
                        b((0,
                        l.i18n)("Sentiment detected"), e, i, a);
                        break;
                    case "responsible":
                    case "responsible[]":
                        b((0,
                        l.i18n)("Resp. user"), e, i, a);
                        break;
                    case "last_message_author":
                    case "last_message_author[]":
                        b((0,
                        l.i18n)("Last message author"), e, i, a);
                        break;
                    case "subscribed_group":
                    case "subscribed_user":
                    case "subscribed_user[]":
                    case "subscribed_group[]":
                        b((0,
                        o.isFeatureAvailable)("global_inbox") ? (0,
                        l.i18n)("Lead subscribers") : (0,
                        l.i18n)("Participants"), e, i, a);
                        break;
                    case "participants_users":
                    case "participants_groups":
                    case "participants_users[]":
                    case "participants_groups[]":
                        b((0,
                        l.i18n)("Participants"), e, i, a);
                        break;
                    case "is_starred[]":
                        e[i] = {
                            key: n,
                            value: d((0,
                            l.i18n)("Starred"))
                        };
                        break;
                    case "interaction_status[]":
                        e[i] = {
                            key: n,
                            value: d((0,
                            l.i18n)("Interaction status"))
                        };
                        break;
                    case "inbox_chat_source[]":
                        k((0,
                        l.i18n)("Channels"), e, i, a);
                        break;
                    default:
                        !function(e, t, a) {
                            -1 === t[a].key.indexOf("cf") && -1 === t[a].key.indexOf("custom_fields") && (t[a] = {
                                key: "",
                                value: ""
                            })
                        }(0, e, i)
                    }
                    -1 !== n.indexOf("filter[pipe]") && g.apply(this, [n, e, i, a, t])
                }
                ), this)
            },
            prepareCustomOptions: function(e) {
                var t, a, i = u.extend(!0, {}, APP.constant("account").predefined_cf, APP.constant("account").cf), n = this.filter.form.model;
                s().each(e, (function(c, o) {
                    var u = c.key;
                    e[o] = {
                        key: u,
                        value: (0,
                        l.getEscapedEntity)(c.value)
                    },
                    -1 === u.indexOf("cf") && -1 === u.indexOf("custom_fields") || (t = -1 !== u.indexOf("company") ? "".concat((0,
                    l.i18n)("notes_filter_companies"), ": ") : -1 === u.indexOf("main_contact") ? "" : "".concat((0,
                    l.i18n)("Contacts"), ": "),
                    a = Number(s().propertyOf(u.match(/\[(cf|custom_fields)\]\[(\d+)\]/))(2)),
                    -1 !== u.indexOf("address_line") && (a = String(a).slice(0, String(a).length - 1)),
                    s().find(i, (function(i) {
                        if (i.ID == a)
                            switch (parseInt(i.TYPE_ID)) {
                            case APP.cf_types.select:
                            case APP.cf_types.multiselect:
                            case APP.cf_types.radiobutton:
                                !function(e, t, a, i, n, r) {
                                    s().isArray(i.value) ? (n += r.NAME,
                                    s().each(i.value, (function(i, l) {
                                        s().find(r.ENUMS, (function(s) {
                                            parseInt(s.ID) === parseInt(i) && (0 === l ? t[a] = {
                                                key: e,
                                                value: "".concat(n, ": ").concat(s.VALUE)
                                            } : t[a].value += ", ".concat(s.VALUE))
                                        }
                                        ))
                                    }
                                    ))) : s().find(r.ENUMS, (function(s) {
                                        if (parseInt(s.ID) === parseInt(i.value))
                                            return t[a] = {
                                                key: e,
                                                value: "".concat(n + r.NAME, ": ").concat(s.VALUE)
                                            };
                                        "empty" === i.value && (t[a] = {
                                            key: e,
                                            value: "".concat(n + r.NAME, ": ").concat((0,
                                            l.i18n)("empty"))
                                        })
                                    }
                                    ))
                                }(u, e, o, c, t, i);
                                break;
                            case APP.cf_types.date_time:
                            case APP.cf_types.date:
                            case APP.cf_types.birthday:
                                !function(e, t, a, i, n, l) {
                                    var c = e.slice(0, s().lastIndexOf(e, "["))
                                      , o = n.get("".concat(c, "[from]"))
                                      , u = n.get("".concat(c, "[to]"))
                                      , f = n.get("".concat(c, "[date_preset]"))
                                      , d = APP.system.format.date.date
                                      , _ = APP.system.format.date.date_short
                                      , p = m(f);
                                    l.TYPE_ID === APP.cf_types.birthday && (o = r()(o, d).format(_),
                                    u = r()(u, d).format(_)),
                                    !f && o && (p = o + (s().isUndefined(u) || "" === u ? "" : " - ".concat(u))),
                                    t[a] = {
                                        key: c,
                                        value: i + l.NAME + (p ? ": ".concat(p) : "")
                                    }
                                }(u, e, o, t, n, i);
                                break;
                            case APP.cf_types.monetary:
                            case APP.cf_types.numeric:
                            case APP.cf_types.price:
                                !function(e, t, a, i, n, r) {
                                    var l = s().isUndefined(r.get(e.replace("[from]", "[to]"))) || "" === r.get(e.replace("[from]", "[to]")) ? "" : " - ".concat(r.get(e.replace("[from]", "[to]")))
                                      , c = s().isUndefined(r.get(e.replace("[to]", "[from]"))) || "" === r.get(e.replace("[to]", "[from]")) ? "0" : +r.get(e.replace("[to]", "[from]"))
                                      , o = e.slice(0, s().lastIndexOf(e, "["));
                                    t[a] = {
                                        key: o,
                                        value: "".concat(i + n.NAME, ": ").concat(c).concat(l)
                                    }
                                }(u, e, o, t, i, n);
                                break;
                            case APP.cf_types.chained_list:
                                !function(e, t, a, i, n) {
                                    var r = e.slice(0, s().lastIndexOf(e, "["));
                                    t[a] = {
                                        key: r,
                                        value: i + n.NAME
                                    }
                                }(u, e, o, t, i);
                                break;
                            case APP.cf_types.linked_entity:
                                !function(e, t, a, i, n) {
                                    var r = s().isArray(n.value) ? n.value.length : n.value.length > 0 ? 1 : 0;
                                    t[a] = {
                                        key: e,
                                        value: "".concat(i.NAME, ": ").concat(r)
                                    }
                                }(u, e, o, i, c);
                                break;
                            case APP.cf_types.checkbox:
                                e[o] = {
                                    key: u,
                                    value: "".concat(t + i.NAME, ": ").concat("N" === c.value ? (0,
                                    l.i18n)("Q_TOOLS_RADIO_NOT_CHECKED") : (0,
                                    l.i18n)("Q_TOOLS_RADIO_CHECKED"))
                                };
                                break;
                            case APP.cf_types.smart_address:
                                !function(e, t, a, i, n, r) {
                                    var l = e.slice(0, s().lastIndexOf(e, "["))
                                      , c = 0;
                                    t[a] = {
                                        key: l,
                                        value: i + n.NAME
                                    },
                                    s().each(n.sub_types, (function(e) {
                                        r.get("".concat(l, "[").concat(e, "]")) && (0 === c ? (c += 1,
                                        t[a].value += ": ".concat("country" === e ? n.VARIANTS.country[r.get("".concat(l, "[").concat(e, "]"))] : r.get("".concat(l, "[").concat(e, "]")))) : t[a].value += ", ".concat("country" === e ? n.VARIANTS.country[r.get("".concat(l, "[").concat(e, "]"))] : r.get("".concat(l, "[").concat(e, "]"))))
                                    }
                                    ), this)
                                }(u, e, o, t, i, n);
                                break;
                            case APP.cf_types.text:
                            case APP.cf_types.url:
                            case APP.cf_types.multitext:
                            case APP.cf_types.textarea:
                            case APP.cf_types.streetaddress:
                            case APP.cf_types.gua:
                            case APP.cf_types.tracking_data:
                                !function(e, t, a, i, s, n) {
                                    t[a] = {
                                        key: e,
                                        value: "".concat(i + s.NAME, ": ").concat(n.value)
                                    }
                                }(u, e, o, t, i, c)
                            }
                    }
                    )))
                }
                ), this)
            }
        };
        var P = "../build/transpiled/interface/search/partials/prepare_filter_options";
        window.define(P, (function() {
            var e = "undefined"
              , a = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return a && a.default || a
        }
        )),
        window.require([P])
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
        e._sentryDebugIds[t] = "a6a8df90-c8b3-450b-8189-7826ca820cc1",
        e._sentryDebugIdIdentifier = "sentry-dbid-a6a8df90-c8b3-450b-8189-7826ca820cc1")
    } catch (e) {}
}();
//# sourceMappingURL=44962.003223c88d1b1b667c54.js.map
