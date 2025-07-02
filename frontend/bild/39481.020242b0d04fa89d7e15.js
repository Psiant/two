"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[39481], {
    889433: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(259913)
          , c = n.n(a)
          , l = [{
            string: navigator.platform,
            sub_string: "Win",
            identity: "windows"
        }, {
            string: navigator.platform,
            sub_string: "Mac",
            identity: "mac"
        }, {
            string: navigator.userAgent,
            sub_string: "iPhone",
            identity: "iphone/ipod"
        }, {
            string: navigator.platform,
            sub_string: "Linux",
            identity: "linux"
        }]
          , d = function() {
            var e = c()();
            return this.os = this._getOS(),
            this.browser = this._getBrowser(e.name),
            this.version = e.versionNumber,
            this
        };
        r().extend(d.prototype, {
            _getBrowser: function(e) {
                switch (e) {
                case "ios":
                    return "safari";
                case "ie":
                    return "explorer";
                default:
                    return e || ""
                }
            },
            _getOS: function() {
                return function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].string
                          , i = e[t].prop;
                        if (n) {
                            if (-1 !== n.indexOf(e[t].sub_string))
                                return e[t].identity
                        } else if (i)
                            return e[t].identity
                    }
                }(l) || ""
            }
        });
        var u = new d;
        o()((function() {
            o()("html").addClass("".concat(u.browser.toString(), " ").concat(u.os.toString()))
        }
        ));
        const h = u;
        var _ = "../build/transpiled/common/browserdetect";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    934763: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(661533)
          , r = n.n(s)
          , a = n(889433)
          , c = {
            token: "283c2980-b2ea-49fb-a03d-0125a8e35450",
            common_tags: ["core"]
        }
          , l = {
            meta: {
                account_id: APP.constant("account").id,
                user_id: APP.constant("user").id,
                top_level_domain: APP.constant("account").top_level_domain,
                account_language: APP.constant("account").language,
                country: APP.constant("geoip_country") || "",
                user_language: APP.lang_id,
                browser: {
                    name: a.default.browser,
                    version: String(a.default.version)
                },
                os: a.default.os
            }
        }
          , d = function(e, t) {
            return r().ajax({
                url: "https://logs-01.loggly.com/inputs/".concat(c.token),
                headers: {
                    "X-LOGGLY-TAG": t.join(",")
                },
                data: JSON.stringify(e),
                type: "POST",
                contentType: "application/json"
            })
        };
        function u(e) {
            var t = c.common_tags.concat(e.tags || []);
            return function(e, n) {
                var i = e ? {
                    additional_info: e
                } : {}
                  , s = o().extend({}, l, i, {
                    referer: window.location.href
                })
                  , r = t.concat(n || []);
                d(s, r)
            }
        }
        var h = "../build/transpiled/dev/loggly";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    221988: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => i
        });
        const i = {
            templates_cache_code: "amojo_templates",
            templates_next_page_link: "amojo_next_page_link",
            templates_cache_lifetime: 36e5
        };
        var o = "../build/transpiled/interface/amojo/templates/constants";
        window.define(o, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([o])
    }
    ,
    392697: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(340958)
          , r = n(661533);
        const a = s.default.extend({
            controlClassName: "control-checkbox",
            _classes: function() {
                return {
                    minus: "control-checkbox__helper_minus"
                }
            },
            _selectors: function() {
                return {
                    input: 'input[type="checkbox"]',
                    helper: ".control-checkbox__helper"
                }
            },
            events: {
                'change input[type="checkbox"]': "onChange",
                'controls:disable input[type="checkbox"]': "onDisable",
                'controls:checkbox:minus input[type="checkbox"]': "onChangeMinus"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this.$el.hasClass("js-react-control");
                if (s.default.prototype.initialize.apply(this, t),
                i)
                    return this.delegateEvents = function() {
                        return this
                    }
                    ,
                    void (this.undelegateEvents = this.delegateEvents);
                this._hasClass("minus", "helper") && this.onChangeMinus(new r.Event({
                    type: "controls:checkbox:minus"
                }), this._elem("input").prop("checked"))
            },
            onChange: function(e) {
                r(e.currentTarget).trigger("controls:change"),
                this.onChangeMinus(e, !1)
            },
            onDisable: function(e, t) {
                this._elem("input").get(0).disabled = !!o().isUndefined(t) || t
            },
            onChangeMinus: function(e, t, n) {
                var i = this._elem("input");
                !0 !== t && !0 !== n || i.prop("checked", t),
                i.prop("indeterminate", t),
                this._toggleClass("minus", "helper", t),
                this._updateIsChecked()
            },
            _updateIsChecked: function() {
                this.$el.toggleClass("is-checked", this._elem("input").prop("checked"))
            }
        });
        var c = "../build/transpiled/interface/controls/checkbox";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    58345: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(880774)
          , r = n(340958)
          , a = n(661533);
        n(368439),
        n(392697);
        const c = r.default.extend({
            controlClassName: "js-control-checkboxes_dropdown",
            max_title_elems: 5,
            _expanded: !1,
            _classes: function() {
                return {
                    checkboxes_index: "checkboxes_dropdown_index",
                    checked_dropdown: "is_checked_dropdown",
                    checked: "icon-checkbox-checked",
                    icon_checkbox: "icon-checkbox",
                    minus: "icon-check-minus",
                    up_arrow: "icon-up-arrow",
                    expanded: "expanded",
                    icon: "icon-v-ico-2"
                }
            },
            _selectors: function() {
                return {
                    master_checkbox: ".js-master-checkbox",
                    item_checkbox: ".js-item-checkbox",
                    title_wrapper: ".checkboxes_dropdown__title_wrapper",
                    checkboxes_list: ".checkboxes_dropdown__list",
                    checkboxes_icon: ".checkboxes_dropdown_icon",
                    counter: ".checkboxes_dropdown__selected",
                    control_checkbox: ".control-checkbox",
                    title: ".checkboxes_dropdown__title",
                    checkboxes_checked: ".js-item-checkbox:not(.js-master-checkbox):checked",
                    checkboxes: ".js-item-checkbox:not(.js-master-checkbox):not([readonly])",
                    select_all_text: ".js-select-all-text"
                }
            },
            events: {
                "click .js-master-checkbox": "toggleMasterCheckbox",
                "controls:change .js-item-checkbox": "setTitle",
                "controls:view:init .js-master-checkbox-wrapper": "_updateMasterCheckboxesOnInit",
                "click .checkboxes_dropdown__title_wrapper:not(.js-checkboxes_dropdown_disabled)": "onClickTitle",
                "click .checkboxes_dropdown__item": "stopPropagation"
            },
            document_events: function() {
                return {
                    "controls:hide:private": "_onControlsHide"
                }
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this.$el.hasClass("js-react-control");
                if (r.default.prototype.initialize.apply(this, t),
                i)
                    return this.delegateEvents = function() {
                        return this
                    }
                    ,
                    void (this.undelegateEvents = this.delegateEvents);
                this._disable_to_top_mode = "Y" === this.$el.attr("data-disable-to-top-mode"),
                this.setTitle()
            },
            _onControlsHide: function(e) {
                this.el !== e.target && this._hide()
            },
            _hide: function() {
                this._expanded && (this._expanded = !1,
                this.$el.removeClass(this._class("checkboxes_index")).removeClass(this._class("expanded")),
                this._findElem("checkboxes_list").hide().trigger("controls:checkboxes_dropdown:hide").trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this.$el.find(this._selector("checkboxes_icon")).removeClass(this._class("up_arrow")).addClass(this._class("icon")))
            },
            onClickTitle: function(e) {
                var t, n, i = this._elem("checkboxes_list"), o = this._elem("checkboxes_icon");
                this._expanded ? this._hide() : (o.hasClass(this._class("icon")) && (this._$document.trigger("keyboard:hide").trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                i.show().trigger("controls:checkboxes_dropdown:open"),
                o.removeClass(this._class("icon")).addClass(this._class("up_arrow")),
                this.$el.addClass(this._class("expanded")).addClass(this._class("checkboxes_index")),
                n = this.$el.offset().top + this.$el.height() + i.height() + 60,
                t = !this._disable_to_top_mode && this._$document.height() < n,
                i.toggleClass("checkboxes_dropdown__expanded-to-top", t),
                t && i.height() > this.$el.offset().top && i.css("max-height", this.$el.offset().top),
                this._expanded = !0),
                e.stopPropagation(),
                e.preventDefault())
            },
            stopPropagation: function(e) {
                e.stopPropagation()
            },
            toggleMasterCheckbox: function(e) {
                var t = a(e.currentTarget).prop("checked");
                this._$document.trigger("keyboard:hide").trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this._elem("checkboxes").prop("checked", t).trigger("change"),
                this._elem("master_checkbox").trigger("change"),
                e.stopPropagation()
            },
            _updateMasterCheckboxesOnInit: function() {
                this._updateMasterMinus()
            },
            _getCheckboxesChecked: function(e) {
                var t = this;
                return e = e || this._findElem("checkboxes_checked"),
                a.makeArray(e.map((function() {
                    var e = a(this).closest(t._selector("control_checkbox")).text().trim();
                    return o().escape(e)
                }
                )))
            },
            setTitle: function() {
                var e = this._findElem("checkboxes")
                  , t = this._findElem("checkboxes_checked");
                this._updateMasterMinus(t, e),
                this._setTitle(t, e)
            },
            _setTitle: function(e, t) {
                var n = this._getCheckboxesChecked(e)
                  , i = this._elem("title").attr("data-title-empty")
                  , r = this._elem("title").attr("data-numeral")
                  , a = !!this._elem("title").attr("data-custom-title")
                  , c = n.length - this.max_title_elems
                  , l = o().first(n, this.max_title_elems);
                e.length && e.length !== t.length ? n.length > this.max_title_elems && l.push((0,
                s.i18n)("N more").replace("%s", c)) : l = !e.length && i || a ? [i] : ["".concat((0,
                s.i18n)("all"), " ").concat((0,
                s.numeralWord)("all", r) || "")],
                this._updateTitle(l)
            },
            _updateTitle: function(e) {
                var t = this._elem("title").find("[data-title-before]").attr("data-title-before") || "";
                this._elem("title").html(o().map(e, (function(e, n) {
                    var i = n ? "" : 'data-title-before="'.concat(t ? "".concat(t.trim(), " ") : "", '"');
                    return '<div class="checkboxes_dropdown__title-item" '.concat(i, ">").concat(e.trim(), "</div>")
                }
                ), this).join(""))
            },
            _updateMasterMinus: function(e, t) {
                var n = !1
                  , i = (0,
                s.i18n)("Select all");
                t = t || this._findElem("checkboxes"),
                (e = e || this._findElem("checkboxes_checked")).length && (e.length !== t.length && (n = !0),
                i = (0,
                s.i18n)("Select none")),
                this._elem("master_checkbox").prop("checked", 0 !== e.length).trigger("controls:checkbox:minus", [n]),
                this._elem("select_all_text").text(i)
            }
        });
        var l = "../build/transpiled/interface/controls/checkboxes_dropdown/index";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    794744: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => w
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(460159)
          , c = n.n(a)
          , l = n(267651)
          , d = n.n(l)
          , u = n(579569)
          , h = n(880774)
          , _ = n(315702)
          , p = n(500034)
          , f = n(340958)
          , g = n(50888)
          , m = n(694179)
          , v = n(221988)
          , y = n(407042)
          , b = n(353256)
          , k = n(577486);
        const w = f.default.extend({
            controlClassName: "js-control-contenteditable",
            suggestions: [],
            _suggestions_exists: !1,
            _selectors: function() {
                return {
                    editable: "[contenteditable]"
                }
            },
            _classes: function() {
                return {
                    input: "js-control-contenteditable-input",
                    clearer: "js-control-contenteditable-clearer",
                    interactive_placeholder: "js-control-contenteditable-interactive-placeholder",
                    suggested: "control-contenteditable_suggested",
                    suggestions: "js-control-contenteditable-suggestions",
                    suggest_item: "js-suggestion-item",
                    suggestion_item_disabled: "control-contenteditable__suggestions-item_disabled",
                    suggestions_at_top: "control-contenteditable__suggestions_at-top",
                    suggestions_style: "control-contenteditable__suggestions",
                    suggestions_item: "js-control-contenteditable-suggestions-item",
                    suggestions_item_hovered: "tips-item_hovered",
                    suggestions_hint: "control-contenteditable__suggestions-hint"
                }
            },
            events: function() {
                var e = {
                    click: "_onContainerClick"
                };
                return e["click ".concat(this._selector("editable"))] = "focusContentEditableOnMobile",
                e["focus ".concat(this._selector("editable"))] = "focusContentEditable",
                e["input ".concat(this._selector("editable"))] = "onInput",
                e["paste ".concat(this._selector("editable"))] = "onPasteContent",
                e["keydown ".concat(this._selector("editable"))] = "onKeyDown",
                e["indent:check ".concat(this._selector("editable"))] = "_checkMessageIndent",
                e["contenteditable:focus-if-unfocused ".concat(this._selector("editable"))] = "_focusIfUnfocused",
                e["contenteditable:show-validation-error ".concat(this._selector("editable"))] = "_showValidationError",
                e["focus ".concat(this._selector("editable"), ".validate-has-error")] = "_hideValidationError",
                e["controls:disable ".concat(this._selector("editable"))] = "onEditableDisable",
                e["suggestions:open ".concat(this._selector("editable"))] = "_openSuggestList",
                e["suggestions:set ".concat(this._selector("editable"))] = "onSetSuggestions",
                e["contenteditable:preset-text:insert"] = "onPresetTextInsert",
                e
            },
            document_events: function() {
                var e = {
                    "controls:hide:private": "_handleControlClicks",
                    "click .js-suggestions-favorites": "toggleFavoriteState"
                };
                return e["click ".concat(this._selector("suggestions_item"))] = "onSuggestionClick",
                e
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                f.default.prototype.initialize.apply(this, t),
                this.wrapper_class_name = "",
                this._elem("editable").length || this.destroy(!1),
                this._elem("editable").is(":focus") && this._checkMessageIndent()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._removeSuggestionsList(),
                f.default.prototype.destroy.apply(this, t)
            },
            _focusIfUnfocused: function() {
                var e = window.getSelection()
                  , t = this._findElem("editable").get(0);
                t.contains(e.anchorNode) && e.anchorNode !== t || (this.focusContentEditable(),
                this._putCursorToEnd())
            },
            _showValidationError: function() {
                this._elem("editable").addClass("validate-has-error")
            },
            _hideValidationError: function() {
                this._elem("editable").removeClass("validate-has-error")
            },
            _onContainerClick: function(e) {
                e.target.classList.contains("js-control-contenteditable") && this._focusIfUnfocused()
            },
            focusContentEditableOnMobile: function(e) {
                APP.is_touch_device && o()(e.currentTarget).focus()
            },
            focusContentEditable: function() {
                this._findElem("editable").get(0) && this._checkMessageIndent()
            },
            getTipData: function(e) {
                return {
                    text: e.text,
                    value: e.value || e.text,
                    favorite: e.favorite || e.favorite_for_users && r().contains(e.favorite_for_users, (0,
                    u.current)("id")),
                    suggestion_type: e.suggestion_type,
                    id: e.id,
                    class_name: e.sticky_header && "add_voice_message" !== e.value ? this._class("suggestion_item_disabled") : [e.class_name, this._class("suggestions_item")].join(" "),
                    sticky_header: e.sticky_header,
                    svg_icon: e.svg_icon,
                    without_favorite: e.without_favorite
                }
            },
            onInput: function() {
                var e = this._getValue(!1).replace(/[\r\n]+$/, "");
                this._checkMessageIndent(),
                ((0,
                p.isFeatureAvailable)("airewriter") || (0,
                p.isFeatureAvailable)("kommo_ai_trial_started") && !(0,
                p.isFeatureAvailable)("kommo_ai_trial_ended")) && !e.startsWith("/") && d().publish(b.FEED_COMPOSE_INPUT_CHANGE, e),
                e ? this._openSuggestList({}, {
                    value: e
                }) : (this._elem("editable").html(""),
                this._checkMessageIndent(),
                this._removeSuggestionsList())
            },
            getCurrentFavorites: function() {
                return r().filter(this._suggestions, (function(e) {
                    return e.favorite || e.favorite_for_users && r().contains(e.favorite_for_users, (0,
                    u.current)("id"))
                }
                ))
            },
            toggleFavoriteState: function(e) {
                var t = o()(e.currentTarget).parent().data("id")
                  , n = o()(e.currentTarget).parent().data("suggestion-type")
                  , i = e.currentTarget.classList.contains("tips-item__favorites-icon--checked");
                if (e.stopPropagation(),
                t && n) {
                    var s = r().find(this._suggestions, (function(e) {
                        return e.id === t && e.suggestion_type === n
                    }
                    ));
                    s && (i ? this.removeFromFavorites(s) : this.setFavorite(s),
                    this._removeSuggestionsList(),
                    this._openSuggestList({}, this.suggest_options))
                }
            },
            updateFavoriteSalesbot: function(e) {
                var t = e.selectedSuggestion
                  , n = e.isFavorite
                  , i = _.storeWithExpiration.get(y.default.SALESBOT_CACHE_CODE);
                i = r().map(i, (function(e) {
                    return e.id === t.id && (e.favorite = n),
                    e
                }
                )) || [];
                var o = _.storeWithExpiration.get_created_at(y.default.SALESBOT_CACHE_LIFETIME)
                  , s = o ? y.default.SALESBOT_CACHE_LIFETIME - (new Date).getTime() + o : y.default.SALESBOT_CACHE_LIFETIME;
                _.storeWithExpiration.set(y.default.SALESBOT_CACHE_CODE, i, s)
            },
            updateFavoriteTemplate: function(e) {
                var t = e.selectedSuggestion
                  , n = e.isFavorite
                  , i = _.storeWithExpiration.get(v.default.templates_cache_code)
                  , o = r().find(i, (function(e) {
                    return e.id === t.id
                }
                )) || {};
                o.favorite_for_users && (o.favorite_for_users = n ? r().union(o.favorite_for_users, [(0,
                u.current)("id")]) : r().without(o.favorite_for_users, (0,
                u.current)("id")));
                var s = _.storeWithExpiration.get_created_at(v.default.templates_cache_code)
                  , a = s ? v.default.templates_cache_lifetime - (new Date).getTime() + s : v.default.templates_cache_lifetime;
                _.storeWithExpiration.set(v.default.templates_cache_code, i, a)
            },
            setFavorite: function(e) {
                r().each(this._suggestions, (function(t) {
                    t.id === e.id && t.suggestion_type === e.suggestion_type && (r().isUndefined(t.favorite) || (t.favorite = !0),
                    r().isUndefined(t.favorite_for_users) || (t.favorite_for_users = r().union(t.favorite_for_users, [(0,
                    u.current)("id")])))
                }
                )),
                1 === e.suggestion_type ? (m.default.addBotToFavorites(e.id),
                this.updateFavoriteSalesbot({
                    selectedSuggestion: e,
                    isFavorite: !0
                })) : 2 === e.suggestion_type && (m.default.addTemplateToFavorites(e.id),
                this.updateFavoriteTemplate({
                    selectedSuggestion: e,
                    isFavorite: !0
                }))
            },
            removeFromFavorites: function(e) {
                r().each(this._suggestions, (function(t) {
                    t.id === e.id && t.suggestion_type === e.suggestion_type && (r().isUndefined(t.favorite) || (t.favorite = !1),
                    r().isUndefined(t.favorite_for_users) || (t.favorite_for_users = r().without(t.favorite_for_users, (0,
                    u.current)("id"))))
                }
                )),
                1 === e.suggestion_type ? (m.default.removeBotFromFavorites(e.id),
                this.updateFavoriteSalesbot({
                    selectedSuggestion: e,
                    isFavorite: !1
                })) : 2 === e.suggestion_type && (m.default.removeTemplateFromFavorites(e.id),
                this.updateFavoriteTemplate({
                    selectedSuggestion: e,
                    isFavorite: !1
                }))
            },
            extendWithFavorites: function(e) {
                var t, n = this.getCurrentFavorites(), i = [];
                return r().each(n, (function(n) {
                    (t = r().find(e, (function(e) {
                        return e.id === n.id && e.suggestion_type === n.suggestion_type && e.text === n.text
                    }
                    ))) && i.push(r().extend({}, t, {
                        favorite: !0
                    }))
                }
                )),
                i.length && (e = [{
                    class_name: "control-contenteditable__suggestions-item_disabled",
                    sticky_header: !0,
                    text: (0,
                    h.i18n)("Starred"),
                    value: "Favorites"
                }].concat(i, e)),
                e
            },
            _sortFavorites: function(e, t) {
                return e.favorite && !t.favorite ? -1 : !e.favorite && t.favorite ? 1 : 0
            },
            _openSuggestList: function(e, t) {
                var n, i, s, a, l, d = t.value, u = o()("#contenteditable_suggestions"), h = "", _ = 0, p = 0;
                if (this.suggest_options = t,
                this._findElem("suggestions_hint").remove(),
                (n = r().chain(this._suggestions || []).filter((function(e) {
                    return 0 === (e.text || "").toLowerCase().indexOf(d.toLowerCase())
                }
                ), this).sort(this._sortFavorites).groupBy("suggestion_type").reduce((function(e, t) {
                    var n = t[0].header_title
                      , i = t[0].without_favorite;
                    return n && e.push({
                        text: n,
                        value: n,
                        sticky_header: !0,
                        without_favorite: i
                    }),
                    e.concat(t)
                }
                ), [], this).map((function(e) {
                    return this.getTipData(e)
                }
                ), this).value()).length) {
                    this.sticky_headers && this.sticky_headers.destroy(),
                    n = this.extendWithFavorites(n),
                    (i = r().find(this._suggestions, (function(e) {
                        return "add_voice_message" === e.value
                    }
                    ))) && t.nohint && (n = r().union([this.getTipData(i)], n));
                    var f = n.slice(0, 500);
                    h = c()({
                        ref: "/tmpl/common/sticky_headers_tip.twig"
                    }).render({
                        id: "contenteditable_suggestions",
                        class_name: [this._class("suggestions"), this._class("suggestions_style"), this.wrapper_class_name].join(" "),
                        items: f,
                        favorites_available: !0,
                        is_custom_tip_holder: !0
                    }),
                    u.length ? (u.replaceWith(h),
                    u = o()("#contenteditable_suggestions")) : (u = o()(h),
                    this._$body.append(u)),
                    t.nohint || this.$el.append('<span class="'.concat(this._class("suggestions_hint"), '" style="left: ').concat(this._findElem("clearer").width() + 5, 'px"></span>')),
                    s = this._findElem("clearer"),
                    (a = this._findElem("editable")).hasClass("feed-compose__message-attach") ? (l = o()(this).find("feed-amojo__attaches"),
                    _ = a.offset().top + l.height() + 18,
                    p = a.offset().left + 5) : (_ = s.offset().top + s.height(),
                    p = s.offset().left + s.width() + 5),
                    u.css({
                        left: r().isUndefined(t.left) ? p : t.left,
                        top: r().isUndefined(t.top) ? _ : t.top
                    }).trigger("tip:show"),
                    u.hasClass("tips-at-top") && u.removeClass("tips-at-top").addClass(this._class("suggestions_at_top")),
                    t.nohint || this.$el.addClass(this._class("suggested")),
                    this._suggestionSetIndex(1),
                    this.sticky_headers = this._addComponent(g.default, {
                        el: this._$body.find(".control-contenteditable__suggestions_template").find(".js-tip-items"),
                        selector: ".control-contenteditable__suggestions-item_disabled",
                        exclude_scrollbar: !1,
                        max_sticky_count: 4
                    }),
                    this.sticky_headers.refresh()
                } else
                    this._removeSuggestionsList()
            },
            onPasteContent: function(e) {
                e.preventDefault();
                var t = (e.originalEvent || e).clipboardData.getData("text/plain");
                t && document.execCommand("insertText", !1, t)
            },
            onSetSuggestions: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this.wrapper_class_name = n,
                this._elem("editable").is(":focus") && this._checkMessageIndent(),
                this._setSuggestions(t),
                !0 === i && this._openSuggestList({}, this.suggest_options)
            },
            onSuggestionClick: function(e) {
                this._suggestionChoose({
                    value: e.currentTarget.getAttribute("data-value"),
                    type: e.currentTarget.getAttribute("data-suggestion-type"),
                    id: e.currentTarget.getAttribute("data-id")
                })
            },
            onEditableDisable: function(e, t) {
                t = !r().isBoolean(t) || t,
                this._elem("editable").attr("contenteditable", !t)
            },
            onKeyDown: function(e) {
                var t;
                if (this._suggestions_exists)
                    switch (e.keyCode) {
                    case 40:
                        e.preventDefault(),
                        this._suggestionSetIndex(1);
                        break;
                    case 38:
                        e.preventDefault(),
                        this._suggestionSetIndex(-1);
                        break;
                    case 13:
                    case 9:
                        (t = o()("#contenteditable_suggestions").find(this._selector("suggestions_item_hovered"))).length && (e.preventDefault(),
                        this._suggestionChoose({
                            value: t.attr("data-value"),
                            type: t.attr("data-suggestion-type"),
                            id: t.attr("data-id")
                        }))
                    }
            },
            _checkMessageIndent: function() {
                var e, t = "", n = this._findElem("clearer"), i = this._findElem("editable"), o = i.children(), s = 1 === o.length && o.hasClass(this._class("interactive_placeholder"));
                n.is(":empty") || (!i.is(":empty") && !s || i.hasClass("feed-compose__message-attach") || i.hasClass("feed-compose__message-area") || i.hasClass("feed-compose__message-quotation") || (t = (e = n.width()) > 0 ? e + 5 : ""),
                this._findElem("editable").css("padding-left", t),
                this._findElem("input").val(this._getValue()).trigger("change"))
            },
            _putCursorToEnd: function() {
                var e = this._findElem("editable").get(0)
                  , t = document.createRange();
                t.selectNodeContents(e),
                t.collapse(!1);
                var n = window.getSelection();
                n.removeAllRanges(),
                n.addRange(t),
                e.scrollTop = "".concat(99999, "px"),
                this.el.scrollTop = "".concat(99999, "px")
            },
            _getValue: function(e) {
                var t = this._getInnerText(this._findElem("editable").get(0));
                return !1 === e ? t : t.trim()
            },
            _getInnerText: function(e) {
                for (var t = window.getSelection(), n = [], i = 0; i < t.rangeCount; i++)
                    n[i] = t.getRangeAt(i);
                t.removeAllRanges(),
                t.selectAllChildren(e);
                var o = t.toString();
                t.removeAllRanges();
                for (var s = 0; s < n.length; s++)
                    t.addRange(n[s]);
                return o || ""
            },
            _setSuggestions: function(e) {
                this._suggestions = e
            },
            _handleControlClicks: function(e) {
                var t = o()("#contenteditable_suggestions").get(0);
                t && !o().contains(t, e.target) && this._removeSuggestionsList()
            },
            _removeSuggestionsList: function() {
                this._suggestions_exists = !1,
                this._findElem("suggestions_hint").remove(),
                this.$el.removeClass(this._class("suggested")),
                o()("#contenteditable_suggestions").remove()
            },
            _suggestionChoose: function(e) {
                this._setText(e.value),
                this._checkMessageIndent(),
                this._findElem("input").trigger("suggestions:chose", {
                    value: e.value,
                    type: e.type,
                    id: e.id
                }),
                this._removeSuggestionsList(),
                this._putCursorToEnd()
            },
            onPresetTextInsert: function(e, t) {
                this._setText(t)
            },
            _setText: function(e) {
                var t = this._findElem("editable");
                t.html(t.text(e).html().split("\n").join("<br/>"))
            },
            _suggestionSetIndex: function(e) {
                var t = o()("#contenteditable_suggestions").find(".custom-scroll")
                  , n = t.find(this._selector("suggestions_item"))
                  , i = n.filter(r().bind((function(e, t) {
                    return t.classList.contains(this._class("suggestions_item_hovered"))
                }
                ), this))
                  , s = n.index(i) + e;
                switch (s) {
                case -2:
                case -1:
                    s = n.length - 1;
                    break;
                case n.length:
                    s = 0
                }
                o()(i).removeClass(this._class("suggestions_item_hovered")),
                n.eq(s).addClass(this._class("suggestions_item_hovered")),
                this._findElem("suggestions_hint").text(this._getSuggestionsHint(n.eq(s).text())),
                t.scrollTop(t.scrollTop() + n.eq(s).position().top + n.eq(s).height() - t.get(0).offsetHeight / 2),
                this._suggestions_exists = !0
            },
            _getSuggestionsHint: function(e) {
                var t = this._getValue()
                  , n = new k.EscapedRegExp("(^|\\s)(${value}(.+)?)($|\\s)",{
                    value: t
                },"i")
                  , i = e.match(n);
                return i ? [o().trim(i[0].replace(new k.EscapedRegExp("${value}",{
                    value: t
                },"i"), t)), e.replace(n, "")].join(" ") : ""
            }
        });
        var S = "../build/transpiled/interface/controls/contenteditable";
        window.define(S, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([S])
    }
    ,
    172821: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(661533)
          , r = n.n(s)
          , a = n(340958)
          , c = !1;
        const l = a.default.extend({
            controlClassName: "js-control-pipeline-select",
            _selectors: function() {
                return {
                    wrapper: ".pipeline-select-wrapper_plain",
                    inner: ".pipeline-select-wrapper__inner_plain",
                    holder: ".pipeline-select-wrapper__inner__holder",
                    container: ".pipeline-select-wrapper__inner__container",
                    item: ".pipeline-select__dropdown__item",
                    pipeline: ".pipeline-select",
                    pipeline_radio: ".pipeline-select__pipeline-input",
                    pipeline_caption: ".pipeline-select__caption",
                    pipeline_caption_inner: ".pipeline-select__caption__inner",
                    pipeline_caption_text: ".pipeline-select__caption-text",
                    pipeline_selected: ".pipeline-select__pipeline-selected",
                    pipeline_checkbox: '.pipeline-select__caption input[type="checkbox"]',
                    pipeline_checkbox_by_value: '.pipeline-select__caption input[type="checkbox"][value="%s"]',
                    status_radio: ".pipeline-select__dropdown__item__input",
                    status_checkbox: '.pipeline-select__dropdown__item__label input[type="checkbox"]',
                    status_checkbox_by_value: '.pipeline-select__dropdown__item__label input[type="checkbox"][value="%s"]'
                }
            },
            _classes: function() {
                return {
                    showed: "pipeline-select-showed",
                    item_selected: "pipeline-select__dropdown__item_selected"
                }
            },
            document_events: function() {
                var e = {};
                return e["click ".concat(this._selector("showed"), " ").concat(this._selector("inner"), " ").concat(this._selector("container"))] = "stopPropagationOnClickInside",
                e["controls:change:visual ".concat(this._selector("inner"), " ").concat(this._selector("status_radio"))] = "onStatusChange",
                e["change ".concat(this._selector("inner"), " ").concat(this._selector("status_radio"))] = "onStatusChange",
                e["change ".concat(this._selector("inner"), " ").concat(this._selector("pipeline_radio"))] = "onPipelineChange",
                e["keydown body".concat(this._selector("showed"))] = "hideOnEscape",
                e["click ".concat(this._selector("inner"), ", ").concat(this._selector("item_selected"))] = "_hideSelect",
                e["controls:hide:private"] = "onControlsHide",
                e["page:change:start page:change:stop"] = "_hideSelect",
                e["control:select:reset"] = "_resetSelect",
                e
            },
            events: function() {
                var e = {};
                return e["click ".concat(this._selector("holder"))] = "openOnClick",
                e["pipeline-select:open"] = "open",
                o().extend({}, o().result(a.default.prototype, "events", {}), e)
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                a.default.prototype.initialize.apply(this, t),
                this._$window.on("resize".concat(this.ns), o().bind(this._reposition, this)),
                this._left_menu_width = r()("#left_menu").width()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._hideSelect(),
                a.default.prototype.destroy.apply(this, t)
            },
            onControlsHide: function(e) {
                e.target !== this.el && this._hideSelect()
            },
            openOnClick: function(e) {
                e.stopPropagation(),
                this.open()
            },
            open: function() {
                !c && this._isHidden() && (this._$document.trigger({
                    type: "controls:hide",
                    target: this.$el
                }),
                this._$inner = this.$el.children(this._selector("inner")),
                this._$body.addClass(this._class("showed")).append(this._$inner),
                this._$inner.addClass("active"),
                this.$el.removeClass("folded"),
                this._reposition(),
                this._captionCentrify(this._$inner.find("".concat(this._selector("pipeline_radio"), "[checked] + ").concat(this._selector("pipeline")))),
                this._$overlay = r()('<div class="default-overlay pipeline-select-overlay" id="pipeline_select_overlay"></div>'),
                this._$inner.append(this._$overlay),
                this.$el.focus(),
                this._$overlay.trigger("overlay:show"),
                this._afterOpen())
            },
            hideOnEscape: function(e) {
                27 === e.keyCode && (e.stopPropagation(),
                e.preventDefault(),
                this._hideSelect())
            },
            stopPropagationOnClickInside: function(e) {
                e.stopPropagation()
            },
            onStatusChange: function(e) {
                var t = r()(e.currentTarget);
                if (!e.isTrigger && this._$inner && r().contains(this._$inner.get(0), t.get(0))) {
                    var n = t.closest(this._selector("holder"));
                    n.find("".concat(this._selector("status_radio"), "[checked]")).removeAttr("checked"),
                    n.find(this._selector("item")).removeClass(this._class("item_selected"));
                    var i = n.find(this._selector("pipeline_radio")).filter((function(e, t) {
                        return r()(t).attr("checked") || r()(t).prop("checked")
                    }
                    ));
                    n.find(this._selector("pipeline_selected")).val(i.val()),
                    this._hideSelect()
                }
            },
            onPipelineChange: function(e) {
                var t = r()(e.currentTarget);
                if (!e._is_trigger && this._$inner && r().contains(this._$inner.get(0), t.get(0))) {
                    var n = t.closest(this._selector("holder"));
                    e.stopPropagation(),
                    this._captionCentrify(t.next(this._selector("pipeline"))),
                    n.find(this._selector("pipeline_radio")).not(t).removeProp("checked").removeAttr("checked"),
                    "unsorted" !== t.attr("data-type") && "y" !== t.attr("data-is-custom") || t.next().find("input").trigger("click")
                }
            },
            _reposition: function() {
                if (!this._isHidden()) {
                    var e = this.$el.offset()
                      , t = this._$window.scrollTop();
                    this._$inner.children(this._selector("holder")).css({
                        left: e.left - this._left_menu_width,
                        top: e.top - t,
                        paddingBottom: this._$window.height() - (e.top + this.$el.height() + 9) + t,
                        width: this.$el.width()
                    })
                }
            },
            _captionCentrify: function(e) {
                var t = e.children(this._selector("pipeline_caption"))
                  , n = e.closest(this._selector("holder")).find(this._selector("pipeline")).index(e[0]);
                this._$inner.scrollTop(n * (t[0].offsetHeight + 5))
            },
            _isHidden: function() {
                return this.$el.is(".folded")
            },
            _hideSelect: function(e) {
                var t = this.$el;
                if (!this._isHidden()) {
                    e && "click" === e.type && e.stopPropagation(),
                    this.$el.append(this._$inner);
                    var n = this._findElem("holder")
                      , i = this._elem("pipeline_radio")
                      , s = this._findElem("pipeline_selected")
                      , a = s.val();
                    a || (a = this.$("".concat(this._selector("pipeline_radio"), ":first")).val()),
                    t.addClass("folded"),
                    n.attr("style", ""),
                    this._$overlay.trigger("overlay:hide", {
                        instantly: !0
                    }),
                    i.removeProp("checked").removeAttr("checked").each((function() {
                        var e = r()(this);
                        e.val().toString() === a.toString() && e.prop("checked", !0).attr("checked", "checked").trigger({
                            type: "change",
                            _is_trigger: !0
                        })
                    }
                    )),
                    s.trigger("change"),
                    this._$body.children(this._selector("inner")).length || this._$body.removeClass(this._class("showed")),
                    this._afterHide(),
                    this._$inner.removeClass("active"),
                    this._$inner = null,
                    c = !0,
                    o().delay((function() {
                        c = !1
                    }
                    ), 300)
                }
            },
            _afterOpen: function() {
                this.$el.trigger("controls:pipeline-select:open")
            },
            _afterHide: function() {
                this.$el.trigger("controls:pipeline-select:hide"),
                this.$("".concat(this._selector("status_radio"), ":checked")).trigger("change").closest(this._selector("item")).addClass(this._class("item_selected"))
            },
            _resetSelect: function() {
                var e = parseInt(this.$el.find('input[name="lead[PIPELINE_ID]"]').val() || 0)
                  , t = 'input[name="lead[STATUS]"]';
                e && (t += ":checked");
                var n = parseInt(this.$el.find(t).val() || 0);
                this._findElem("item").removeClass(this._class("item_selected")),
                this._findElem("pipeline_radio").removeAttr("checked").closest('[value="'.concat(e, '"]')).attr("checked", "checked").find('input[name="lead[STATUS]"][value="'.concat(n, '"]')).closest(this._selector("item")).addClass(this._class("item_selected"))
            }
        });
        var d = "../build/transpiled/interface/controls/pipeline_select/index";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    183081: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(880774)
          , c = n(172821);
        function l(e, t) {
            var n = this._$inner ? this._$inner.get(0) : this.el;
            !r().isUndefined(n) && o().contains(n, t.currentTarget) && e.call(this, t)
        }
        const d = c.default.extend({
            controlClassName: "js-control-pipeline-select_multiple",
            document_events: function() {
                var e = {};
                return e["change ".concat(this._selector("inner"), " ").concat(this._selector("pipeline_checkbox"))] = r().bind(l, this, this.onCheckAllPipelineStatuses),
                e["controls:change:visual ".concat(this._selector("inner"), " ").concat(this._selector("status_checkbox"))] = r().bind(l, this, this.onStatusCheckboxChange),
                e["change ".concat(this._selector("inner"), " ").concat(this._selector("status_checkbox"))] = r().bind(l, this, this.onStatusCheckboxChange),
                r().extend({}, r().result(c.default.prototype, "document_events", {}), e)
            },
            events: function() {
                return r().extend({}, r().result(c.default.prototype, "events", {}), {
                    "controls:initDefaultStatuses": "_updateFoldedCaption"
                })
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                c.default.prototype.initialize.apply(this, t),
                this._updateFoldedCaptionThrottled = r().throttle(this._updateFoldedCaption, 200),
                this._updateFoldedCaption()
            },
            onCheckAllPipelineStatuses: function(e) {
                var t = o()(e.currentTarget)
                  , n = t.get(0).checked;
                n || t.trigger("controls:checkbox:minus", [!1]),
                e.isTrigger || t.closest(this._selector("pipeline")).find(this._selector("status_checkbox")).each((function() {
                    this.disabled || (this.checked = n)
                }
                ))
            },
            onStatusCheckboxChange: function(e) {
                var t = o()(e.currentTarget).closest(this._selector("pipeline"))
                  , n = t.find(this._selector("status_checkbox"))
                  , i = t.find(this._selector("pipeline_checkbox"));
                switch (i.trigger("controls:checkbox:minus", [!1]),
                n.filter((function() {
                    return this.checked
                }
                )).length) {
                case n.length:
                    i[0].checked = !0;
                    break;
                case 0:
                    i[0].checked = !1;
                    break;
                default:
                    i.trigger("controls:checkbox:minus", [!0])
                }
                this._updateFoldedCaptionThrottled()
            },
            _updateFoldedCaption: function() {
                var e = (this._$inner || this.$el.children(this._selector("inner"))).find(this._selector("holder"))
                  , t = e.find(this._selector("pipeline_caption_text"))
                  , n = this._getStatusesChecked(e)
                  , i = this._getPipelinesChecked(e);
                this.empty_caption = 0 !== n && 0 !== i,
                this.empty_caption ? t.attr("data-folded-title", this._getFilledMultipleTitle(t, n, i)) : t.attr("data-folded-title", this._getDefaultMultipleTitle())
            },
            _getFilledMultipleTitle: function(e, t, n) {
                var i = []
                  , o = "";
                return t = r().isNaN(parseInt(t)) ? 0 : parseInt(t),
                o = -1 === (n = r().isNaN(parseInt(n)) ? 0 : parseInt(n)) ? this._getCorrectAllLangValue() : n,
                o += " ".concat((0,
                a.numeralWord)(r().contains([-1, 0], n) ? "," : n, e.attr("data-pipelines-numeral") || (0,
                a.i18n)("pipeline,pipelines"))),
                1 !== n && i.push(o),
                o = -1 === t ? this._getCorrectAllLangValue() : t,
                o += " ".concat((0,
                a.numeralWord)(r().contains([-1, 0], t) ? "all" : t, e.attr("data-statuses-numeral") || (0,
                a.i18n)("stage,stages"))),
                i.push(o),
                i.join(", ")
            },
            _getCorrectAllLangValue: function() {
                return APP.lang.all
            },
            _getDefaultMultipleTitle: function() {
                return (0,
                a.capitalize)([(0,
                a.numeralWord)("all", (0,
                a.i18n)("pipeline,pipelines")), (0,
                a.numeralWord)("all", (0,
                a.i18n)("stage,stages"))].join(", ").toLowerCase())
            },
            _getStatusesChecked: function(e) {
                var t, n = e.find(this._selector("status_checkbox")), i = [];
                return (t = n.filter((function() {
                    var e = this.checked;
                    return e && i.push(o()(this).attr("value")),
                    e
                }
                )).length) === n.length && (t = -1),
                this.$el.trigger("filter:statuses:update", {
                    statuses: i
                }),
                t
            },
            _getPipelinesChecked: function(e) {
                var t = e.find(this._selector("pipeline_checkbox"))
                  , n = t.filter((function() {
                    return this.checked
                }
                )).length;
                return t.length > 1 && n === t.length && (n = -1),
                n
            },
            _makeFingerPrint: function() {
                var e = {};
                return this.$(this._selector("status_checkbox")).each((function(t, n) {
                    var i = n.getAttribute("name");
                    e[i] || (e[i] = []),
                    e[i].push([n.value, n.checked].join("_"))
                }
                )),
                e
            },
            open: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._finger_print = this._makeFingerPrint(),
                c.default.prototype.open.apply(this, t)
            },
            _afterHide: function() {
                var e = r().chain(this._makeFingerPrint()).reduce((function(e, t, n) {
                    return r().union(e, r().map(r().difference(t, this._finger_print[n]), (function(e) {
                        return e.split("_")[0]
                    }
                    )))
                }
                ), [], this).unique().value();
                r().each(e, (function(e) {
                    this._findElem("status_checkbox_by_value", e).trigger("change")
                }
                ), this),
                this.$el.trigger("controls:pipeline-select:hide")
            }
        });
        var u = "../build/transpiled/interface/controls/pipeline_select/multiple";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    327626: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(151225);
        const r = s.default.extend({
            controlClassName: null,
            events: function() {
                var e = o().result(s.default.prototype, "events", {});
                return delete e["mousedown ".concat(this._selector("item"))],
                delete e["touchstart ".concat(this._selector("item"))],
                delete e["click ".concat(this._selector("item"))],
                e
            },
            _elem: function(e) {
                var t = s.default.prototype._elem.apply(this, arguments);
                return "list" === e && this._$list ? this._$list : t
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                s.default.prototype.initialize.apply(this, t),
                this._$list = this._elem("list"),
                this._$list.on("mousedown", this._selector("item"), o().bind(this.onItemDownPressed, this)).on("touchstart", this._selector("item"), o().bind(this.onItemDownPressed, this)).on("click", this._selector("item"), o().bind(this.onItemClick, this))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._$list.off(),
                s.default.prototype.destroy.apply(this, t)
            },
            hide: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                o().isFunction(this._hideBodyOverlay) && (this._hideBodyOverlay(),
                this._hideBodyOverlay = null),
                s.default.prototype.hide.apply(this, t)
            },
            open: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this.el.getBoundingClientRect()
                  , o = i.width
                  , r = i.top
                  , a = i.left;
                s.default.prototype.open.apply(this, t),
                this._hideBodyOverlay = this._toggleBodyOverlay(this._elem("list")),
                this.$el.hasClass("control--select--transparent") && (r -= 8,
                a -= 23),
                this._elem("list").css({
                    position: "fixed",
                    zIndex: 1e3,
                    top: r,
                    left: a,
                    width: this._$list.hasClass("control--select--list--auto-width") ? "" : o,
                    bottom: "unset"
                }),
                this._elem("list").visible() || this._elem("list").css({
                    top: "unset",
                    bottom: window.innerHeight - i.bottom
                }),
                this._scrollToLi(this._elem("list").find(this._selector("item_selected")).addClass(this._class("item_key_selected")))
            }
        })
    }
    ,
    151225: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(340958);
        o()(document).on("click", ".control--select--list--item", (function(e) {
            e.stopPropagation()
        }
        )).on("change controls:change", ".control--select--input", (function(e) {
            e.target.setAttribute("data-change-on-init", !0)
        }
        ));
        const c = a.default.extend({
            _classes: function() {
                return {
                    list_opened: "control--select--list-opened",
                    list_closed: "control--select--list",
                    list_to_top: "control--select--list-to-top",
                    button: "control--select--button",
                    button_inner: "control--select--button-inner",
                    item: "control--select--list--item",
                    item_selected: "control--select--list--item-selected",
                    item_key_selected: "control--select--list--item-key_selected",
                    item_default: "control--select--list--item-default",
                    input: "control--select--input"
                }
            },
            _selectors: function() {
                return {
                    list: "ul",
                    item_by_value: '.control--select--list--item[data-value="%s"]'
                }
            },
            events: function() {
                var e = {};
                return e["click ".concat(this._selector("button"))] = "onButtonOpenedClick",
                e["keydown ".concat(this._selector("button"))] = "onButtonKeydown",
                e["controls:change ".concat(this._selector("input"))] = "onInputChange",
                e["controls:change:visual ".concat(this._selector("input"))] = "onInputChange",
                e["mousedown ".concat(this._selector("item"))] = "onItemDownPressed",
                e["touchstart ".concat(this._selector("item"))] = "onItemDownPressed",
                e["click ".concat(this._selector("item"))] = "onItemClick",
                e
            },
            document_events: {
                "controls:hide:private": "hide"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._mouse_down = !1,
                this._opened = this._elem("list").hasClass(this._class("list_opened")),
                this._makeButtonBlurable(!0),
                this._elem("input").length && this._elem("input")[0].getAttribute("data-change-on-init") && (this._elem("input")[0].removeAttribute("data-change-on-init"),
                this.onInputChange(new (o().Event)("controls:change"))),
                a.default.prototype.initialize.apply(this, t)
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._makeButtonBlurable(!1),
                a.default.prototype.destroy.apply(this, t)
            },
            onButtonOpenedClick: function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                this.open()
            },
            onButtonOpenerBlur: function() {
                this._mouse_down && this._opened ? setTimeout(r().bind(this.hide, this), 250) : this.hide(),
                this._mouse_down = !1
            },
            onButtonKeydown: function(e) {
                var t = this.hotkey(e.keyCode);
                this._opened && r().isFunction(t) && t.call(this, e)
            },
            onItemDownPressed: function(e) {
                o()(e.currentTarget).attr("data-disabled") || (this._mouse_down = !0)
            },
            onInputChange: function(e) {
                var t, n = (this._elem("input").val() || "").toString(), i = this._elem("list").find(this._selector("item_by_value", n));
                i.length || (i = this._elem("list").find(this._selector("item_by_value", n.replace("+", " ")))),
                this._elem("list").find(this._selector("item_selected")).removeClass(this._class("item_selected")),
                i.length ? t = i : ((t = this._elem("list").find(this._selector("item_default"))).length || (t = this._elem("list").find("".concat(this._selector("item"), ":first"))),
                this._elem("input").val(t.attr("data-value"))),
                t.addClass(this._class("item_selected"));
                var o = t.attr("data-bg-color");
                this._elem("button").css("background", o || "").toggleClass("control--select--button-colored", !!o).attr("data-value", t.attr("data-value")).children(this._selector("button_inner")).text(t.text()),
                "controls:change:visual" !== e.type && this._elem("input").change()
            },
            onItemClick: function(e) {
                var t = o()(e.currentTarget);
                Boolean(t.attr("data-disabled")) || (this.choose(t.attr("data-value")),
                this.hide(),
                this._elem("button").is(":focus") || APP.is_touch_device || this._elem("button").focus())
            },
            _makeButtonBlurable: function(e) {
                this._elem("button").length && (e ? (this._onButtonOpenerBlurBinded = r().bind(this.onButtonOpenerBlur, this),
                this._elem("button").get(0).addEventListener("blur", this._onButtonOpenerBlurBinded)) : this._onButtonOpenerBlurBinded && this._elem("button").get(0).removeEventListener("blur", this._onButtonOpenerBlurBinded))
            },
            _scrollToLi: function(e) {
                e.length && this._elem("list").scrollTop(r().reduce([e.position().top, this._elem("list").scrollTop(), -this._elem("list").height() / 2, e.height()], (function(e, t) {
                    return e + t
                }
                ), 0))
            },
            open: function() {
                this._opened || (this._$document.trigger({
                    type: "controls:hide",
                    target: this.$el
                }),
                APP.is_touch_device && document.activeElement && document.activeElement.blur(),
                this._elem("list").removeClass(this._class("list_closed")).removeClass(this._class("list_to_top")).addClass(this._class("list_opened")).css("z-index", 30),
                this.$el.css("z-index", 60),
                this._elem("list").visible() || this._elem("list").addClass(this._class("list_to_top")),
                this._scrollToLi(this._elem("list").find(this._selector("item_selected")).addClass(this._class("item_key_selected"))),
                this._elem("list").trigger("controls:select:open"),
                this._opened = !0)
            },
            hide: function() {
                this._opened && (this._elem("list").addClass(this._class("list_closed")).removeClass(this._class("list_opened")).css("z-index", ""),
                this._findElem("item_key_selected").removeClass(this._class("item_key_selected")),
                this.$el.css("z-index", ""),
                this._elem("list").trigger("controls:select:hide"),
                this._opened = !1)
            },
            choose: function(e) {
                var t = this._elem("list").find(this._selector("item_by_value", e));
                this._elem("list").find(this._selector("item_selected")).removeClass(this._class("item_selected")),
                t.addClass(this._class("item_selected")),
                this._elem("button").attr("data-value", t.attr("data-value")),
                this._elem("input").attr("data-prev-value", this._elem("input").val()).val(t.attr("data-value")).trigger("controls:change"),
                this._updateTitle(e)
            },
            hotkey: function(e) {
                switch (e) {
                case 27:
                    return this.hide;
                case 13:
                case 32:
                    return function(e) {
                        var t = this._elem("list").find(this._selector("item_key_selected"))
                          , n = Boolean(t.attr("data-disabled"));
                        e.preventDefault(),
                        n || (this.choose(t.attr("data-value")),
                        this.hide())
                    }
                    ;
                case 38:
                case 40:
                    return function(e) {
                        var t = this._elem("list").find(this._selector("item_key_selected"))
                          , n = t.index()
                          , i = 38 === e.keyCode ? -1 : 1
                          , o = this._elem("list").find("".concat(this._selector("item"), ":eq(").concat(n + i, ")"));
                        e.preventDefault(),
                        o.length || (o = this._elem("list").find(this._selector("item") + (38 === e.keyCode ? ":last" : ":first"))),
                        t.removeClass(this._class("item_key_selected")),
                        o.addClass(this._class("item_key_selected")),
                        this._scrollToLi(o)
                    }
                    ;
                default:
                    return r().noop
                }
            },
            _updateTitle: function(e) {
                var t = this._elem("list").find(this._selector("item_by_value", e));
                this._elem("button").children(this._selector("button_inner")).text(t.text())
            }
        })
    }
    ,
    972492: (e, t, n) => {
        n.r(t),
        n.d(t, {
            DEFAULT_METRIC_DATA: () => i
        });
        var i = {
            country: APP.constant("geoip_country") || "",
            userId: APP.constant("user").id,
            accountId: APP.constant("account").id
        }
    }
    ,
    335745: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getBackendPerformanceMetric: () => i.getBackendPerformanceMetric,
            getRealCardPageType: () => i.getRealCardPageType,
            getResourcesStats: () => i.getResourcesStats,
            logBrowser: () => o.logBrowser,
            logError: () => s.logError,
            logPerformanceMetric: () => i.logPerformanceMetric,
            registerPerformanceMetrics: () => i.registerPerformanceMetrics,
            unregisterPerformanceMetrics: () => i.unregisterPerformanceMetrics
        });
        var i = n(403563)
          , o = n(640941)
          , s = n(849101)
    }
    ,
    640941: (e, t, n) => {
        n.r(t),
        n.d(t, {
            logBrowser: () => i.logBrowser
        });
        var i = n(210812)
    }
    ,
    210812: (e, t, n) => {
        n.r(t),
        n.d(t, {
            logBrowser: () => f
        });
        var i = n(678640)
          , o = n(315702)
          , s = n(909599)
          , r = n(606836)
          , a = n(972492)
          , c = n(661533);
        function l(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, o)
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    d(e, t, n[t])
                }
                ))
            }
            return e
        }
        var h, _, p = "browser_log_v1", f = (h = function() {
            var e;
            return function(e, t) {
                var n, i, o, s, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }
                ),
                s;
                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, s[1])).done)
                                        return o;
                                    switch (i = 0,
                                    o && (s = [2 & s[0], o.value]),
                                    s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        i = s[1],
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            r.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = s;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(s);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    s = t.call(e, r)
                                } catch (e) {
                                    s = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & s[0])
                                throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }(this, (function(t) {
                switch (t.label) {
                case 0:
                    return o.storeWithExpiration.get(p) || (0,
                    i.isDev)() ? [2] : (e = "/api/v1/metric/browser",
                    [4, c.ajax({
                        url: (0,
                        r.getEndpoint)(e),
                        type: "POST",
                        data: JSON.stringify({
                            url: e,
                            body: (n = u({}, a.DEFAULT_METRIC_DATA),
                            l = {
                                screenWidth: window.screen.width,
                                screenHeight: window.screen.height,
                                clientWidth: document.documentElement.clientWidth,
                                clientHeight: document.documentElement.clientHeight
                            },
                            l = null != l ? l : {},
                            Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i)
                                }
                                return n
                            }(Object(l)).forEach((function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                            }
                            )),
                            n)
                        }),
                        contentType: "application/json"
                    })]);
                case 1:
                    return t.sent(),
                    o.storeWithExpiration.set(p, !0, 2 * s.WEEK),
                    [2]
                }
                var n, l
            }
            ))
        }
        ,
        _ = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, i) {
                var o = h.apply(e, t);
                function s(e) {
                    l(o, n, i, s, r, "next", e)
                }
                function r(e) {
                    l(o, n, i, s, r, "throw", e)
                }
                s(void 0)
            }
            ))
        }
        ,
        function() {
            return _.apply(this, arguments)
        }
        )
    }
    ,
    849101: (e, t, n) => {
        n.r(t),
        n.d(t, {
            logError: () => i.logError
        });
        var i = n(898091)
    }
    ,
    898091: (e, t, n) => {
        n.r(t),
        n.d(t, {
            logError: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(934763)
          , r = n(678640)
          , a = n(378548)
          , c = function(e) {
            if (!o().isEmpty(e))
                if ((0,
                r.isDev)())
                    console.error("Error log", e);
                else {
                    var t, n = o().reduce(e, (function(e, t) {
                        var n = t.tags
                          , i = t.content;
                        return (0,
                        a.append)({
                            targetArray: e.errorTags,
                            itemsToAppend: n
                        }),
                        e.errorContents = i,
                        e
                    }
                    ), {
                        errorTags: [],
                        errorContents: {}
                    }), i = n.errorTags, c = n.errorContents;
                    (t = i,
                    (0,
                    s.default)({
                        tags: t
                    }))(c)
                }
        }
    }
    ,
    403563: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getBackendPerformanceMetric: () => s.getBackendPerformanceMetric,
            getRealCardPageType: () => i.getRealCardPageType,
            getResourcesStats: () => o.getResourcesStats,
            logPerformanceMetric: () => r.logPerformanceMetric,
            registerPerformanceMetrics: () => r.registerPerformanceMetrics,
            unregisterPerformanceMetrics: () => r.unregisterPerformanceMetrics
        });
        var i = n(806667)
          , o = n(366169)
          , s = n(863328)
          , r = n(292888)
    }
    ,
    292888: (e, t, n) => {
        n.r(t),
        n.d(t, {
            logPerformanceMetric: () => T,
            registerPerformanceMetrics: () => A,
            unregisterPerformanceMetrics: () => O
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(334254)
          , c = n.n(a)
          , l = n(598701)
          , d = n(678640)
          , u = n(606836)
          , h = n(972492)
          , _ = n(289815)
          , p = n(366169)
          , f = n(219415)
          , g = n(355736);
        function m(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, o)
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var y = {}
          , b = {}
          , k = function(e) {
            var t;
            APP.metrics.remove(e);
            var n = null === (t = y[e]) || void 0 === t ? void 0 : t.onClear;
            delete y[e],
            null == n || n()
        }
          , w = c().hidden()
          , S = function() {
            return w || APP.metrics.wasPageInactiveDuringPageLoad
        };
        c().change((function() {
            c().hidden() && r().each(y, (function(e, t) {
                k(t)
            }
            )),
            w = w || c().hidden()
        }
        )),
        APP.metrics.stopTrackingPageVisibility(15e3);
        var x, C, E = (x = function(e) {
            var t, n, i, s, a, c, l, p, m;
            return function(e, t) {
                var n, i, o, s, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }
                ),
                s;
                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, s[1])).done)
                                        return o;
                                    switch (i = 0,
                                    o && (s = [2 & s[0], o.value]),
                                    s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        i = s[1],
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            r.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = s;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(s);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    s = t.call(e, r)
                                } catch (e) {
                                    s = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & s[0])
                                throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }(this, (function(w) {
                switch (w.label) {
                case 0:
                    if (t = e.type,
                    n = e.params,
                    i = e.resourceStats,
                    s = y[t],
                    a = APP.metrics.get(t),
                    !s || r().isEmpty(a))
                        return [2];
                    if (s.isPageActivityDependant && S() || b[t])
                        return [2];
                    c = s.metrics.reduce((function(e, t) {
                        return t in a && (e[t] = a[t]),
                        e
                    }
                    ), {}),
                    x = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}
                              , i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }
                            )))),
                            i.forEach((function(t) {
                                v(e, t, n[t])
                            }
                            ))
                        }
                        return e
                    }({}, h.DEFAULT_METRIC_DATA, c, n),
                    C = null != (C = {
                        referrer: location.href,
                        type: t,
                        resourceStats: i,
                        experimentId: (0,
                        _.getExperimentId)(),
                        staticDomain: APP.static_build_domain || window.location.origin.split(".").slice(-2).join("."),
                        navigationStats: (0,
                        g.getNavigationStats)(),
                        constantStats: (0,
                        f.getConstantStats)()
                    }) ? C : {},
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(C)) : function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i)
                        }
                        return n
                    }(Object(C)).forEach((function(e) {
                        Object.defineProperty(x, e, Object.getOwnPropertyDescriptor(C, e))
                    }
                    )),
                    l = x,
                    w.label = 1;
                case 1:
                    return w.trys.push([1, , 5, 6]),
                    b[t] = !0,
                    p = "/api/v2/metric/".concat(t.toLowerCase(), "/add"),
                    m = {
                        url: p,
                        body: l
                    },
                    (0,
                    d.isDev)() ? (console.warn("JSperf metric", m),
                    [3, 4]) : [3, 2];
                case 2:
                    return [4, o().ajax({
                        url: (0,
                        u.getEndpoint)(p),
                        data: JSON.stringify(m),
                        type: "POST",
                        contentType: "application/json"
                    })];
                case 3:
                    w.sent(),
                    w.label = 4;
                case 4:
                    return [3, 6];
                case 5:
                    return k(t),
                    b[t] = !1,
                    [7];
                case 6:
                    return [2]
                }
                var x, C
            }
            ))
        }
        ,
        C = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, i) {
                var o = x.apply(e, t);
                function s(e) {
                    m(o, n, i, s, r, "next", e)
                }
                function r(e) {
                    m(o, n, i, s, r, "throw", e)
                }
                s(void 0)
            }
            ))
        }
        ,
        function(e) {
            return C.apply(this, arguments)
        }
        ), P = function(e) {
            var t, n = e.type, i = e.resourceName, o = void 0 === i ? "" : i, s = e.params, r = APP.metrics.get(n), a = null === (t = y[n]) || void 0 === t ? void 0 : t.metrics;
            if (a && a.every((function(e) {
                return e in r
            }
            ))) {
                var c = (0,
                p.getResourcesStats)(o);
                if (!c.css.internal.uncachedCount && !c.js.internal.uncachedCount)
                    return void k(n);
                (0,
                l.onPageFullyLoaded)((function() {
                    return E({
                        type: n,
                        params: s,
                        resourceStats: c
                    })
                }
                ))
            }
        }, T = function(e) {
            var t = e.type
              , n = e.name
              , i = e.value
              , o = e.resourceName
              , s = void 0 === o ? "" : o
              , a = e.params
              , c = void 0 === a ? {} : a
              , l = e.isSync
              , d = function() {
                if (y[t]) {
                    var e = r().isUndefined(i) ? Math.ceil(APP.metrics.getTimeFromStart()) : i;
                    APP.metrics.set({
                        type: t,
                        name: n,
                        value: e
                    }),
                    y[t].onMetricCollect(n),
                    l || P({
                        type: t,
                        resourceName: s,
                        params: c
                    })
                }
            };
            l ? d() : setTimeout(d)
        }, A = function(e) {
            var t, n, i = e.type, o = e.metrics, s = e.isPageActivityDependant, a = void 0 === s || s, c = e.onMetricCollect, l = void 0 === c ? r().noop : c, d = e.onClear, u = void 0 === d ? r().noop : d;
            return !(a && S() || (y[i] = {
                metrics: o,
                isPageActivityDependant: a,
                onMetricCollect: l,
                onClear: u
            },
            (t = APP.constant("metrics"))[n = i] || (t[n] = {}),
            APP.metrics.get(i) && P({
                type: i
            }),
            0))
        }, O = function(e) {
            k(e)
        }
    }
    ,
    639615: (e, t, n) => {
        var i;
        n.r(t),
        n.d(t, {
            TrackedMetricType: () => i
        }),
        function(e) {
            e.CARD = "CARD",
            e.INBOX_DIALOGS = "INBOX_DIALOGS",
            e.INBOX_WITH_CARD = "INBOX_WITH_CARD",
            e.INBOX_WITH_CARD_NO_SELECTED = "INBOX_WITH_CARD_NO_SELECTED",
            e.DP = "DP",
            e.SALESBOT = "SALESBOT",
            e.SALESBOT_FPS = "SALESBOT_FPS",
            e.DASHBOARD_WITH_INDEXED_DB = "DASHBOARD_WITH_INDEXED_DB",
            e.DASHBOARD_WITHOUT_INDEXED_DB = "DASHBOARD_WITHOUT_INDEXED_DB"
        }(i || (i = {}))
    }
    ,
    214896: (e, t, n) => {
        function i(e, t, n) {
            return i = l() ? Reflect.construct : function(e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var o = new (Function.bind.apply(e, i));
                return n && a(o, n.prototype),
                o
            }
            ,
            i.apply(null, arguments)
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            s(e)
        }
        function r(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        function a(e, t) {
            return a = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            a(e, t)
        }
        function c(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return c = function(e) {
                if (null === e || (n = e,
                -1 === Function.toString.call(n).indexOf("[native code]")))
                    return e;
                var n;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, o)
                }
                function o() {
                    return i(e, arguments, s(this).constructor)
                }
                return o.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                a(o, e)
            }
            ,
            c(e)
        }
        function l() {
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
        }
        n.r(t),
        n.d(t, {
            getBackendPerformanceMetric: () => u
        });
        var d = function(e) {
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
                t && a(e, t)
            }(o, e);
            var t, n, i = (t = o,
            n = l(),
            function() {
                var e, i = s(t);
                if (n) {
                    var o = s(this).constructor;
                    e = Reflect.construct(i, arguments, o)
                } else
                    e = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, e)
            }
            );
            function o() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                i.apply(this, arguments)
            }
            return o
        }(c(Error))
          , u = function(e) {
            var t, n, i = e.request, s = e.url;
            try {
                var a = function(e) {
                    var t = performance.getEntriesByName(e);
                    if (t.length > 1)
                        throw new d;
                    var n = t[0];
                    return r(n, PerformanceResourceTiming) ? {
                        nextHopProtocol: n.nextHopProtocol,
                        startTime: n.startTime,
                        duration: n.duration,
                        fetchStart: n.fetchStart,
                        domainLookupStart: n.domainLookupStart,
                        domainLookupEnd: n.domainLookupEnd,
                        connectStart: n.connectStart,
                        secureConnectionStart: n.secureConnectionStart,
                        connectEnd: n.connectEnd,
                        requestStart: n.requestStart,
                        responseStart: n.responseStart,
                        responseEnd: n.responseEnd,
                        transferSize: n.transferSize,
                        encodedBodySize: n.encodedBodySize,
                        decodedBodySize: n.decodedBodySize
                    } : null
                }(s);
                if (i) {
                    var c = i.getResponseHeader("x-runtime-generated")
                      , l = c ? Math.ceil(1e3 * parseFloat(c)) : null;
                    return t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}
                              , i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }
                            )))),
                            i.forEach((function(t) {
                                o(e, t, n[t])
                            }
                            ))
                        }
                        return e
                    }({}, a),
                    n = null != (n = {
                        runtimeGenerated: l
                    }) ? n : {},
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i)
                        }
                        return n
                    }(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    )),
                    t
                }
                return a
            } catch (e) {
                return r(e, d) ? "duplicated-metric-error" : "undefined-error"
            }
        }
    }
    ,
    614764: (e, t, n) => {
        n.r(t)
    }
    ,
    863328: (e, t, n) => {
        n.r(t),
        n.d(t, {
            BackendPerformanceMetric: () => o.BackendPerformanceMetric,
            getBackendPerformanceMetric: () => i.getBackendPerformanceMetric
        });
        var i = n(214896)
          , o = n(614764)
    }
    ,
    111342: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getConstantStats: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(500034)
          , r = n(863328);
        function a(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, o)
        }
        var c = "".concat(window.location.origin, "/frontend/constants/")
          , l = function() {
            if ((0,
            s.isFeatureAvailable)(s.Features.ASYNC_CONSTANTS)) {
                var e, t, n = performance.getEntriesByType("resource"), i = {};
                return n.forEach((e = function(e) {
                    var t;
                    return function(e, t) {
                        var n, i, o, s, r = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0])
                                    throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return s = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        },
                        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        s;
                        function a(s) {
                            return function(a) {
                                return function(s) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; r; )
                                        try {
                                            if (n = 1,
                                            i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                            0) : i.next) && !(o = o.call(i, s[1])).done)
                                                return o;
                                            switch (i = 0,
                                            o && (s = [2 & s[0], o.value]),
                                            s[0]) {
                                            case 0:
                                            case 1:
                                                o = s;
                                                break;
                                            case 4:
                                                return r.label++,
                                                {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                r.label++,
                                                i = s[1],
                                                s = [0];
                                                continue;
                                            case 7:
                                                s = r.ops.pop(),
                                                r.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                    r = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                    r.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && r.label < o[1]) {
                                                    r.label = o[1],
                                                    o = s;
                                                    break
                                                }
                                                if (o && r.label < o[2]) {
                                                    r.label = o[2],
                                                    r.ops.push(s);
                                                    break
                                                }
                                                o[2] && r.ops.pop(),
                                                r.trys.pop();
                                                continue
                                            }
                                            s = t.call(e, r)
                                        } catch (e) {
                                            s = [6, e],
                                            i = 0
                                        } finally {
                                            n = o = 0
                                        }
                                    if (5 & s[0])
                                        throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }([s, a])
                            }
                        }
                    }(this, (function(n) {
                        return o = e,
                        (null != (s = PerformanceResourceTiming) && "undefined" != typeof Symbol && s[Symbol.hasInstance] ? s[Symbol.hasInstance](o) : o instanceof s) && e.name.includes(c) ? (t = e.name.replace(c, "").replace(/\//g, ""),
                        i[t] = (0,
                        r.getBackendPerformanceMetric)({
                            url: e.name
                        }),
                        [2]) : [2];
                        var o, s
                    }
                    ))
                }
                ,
                t = function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var s = e.apply(t, n);
                        function r(e) {
                            a(s, i, o, r, c, "next", e)
                        }
                        function c(e) {
                            a(s, i, o, r, c, "throw", e)
                        }
                        r(void 0)
                    }
                    ))
                }
                ,
                function(e) {
                    return t.apply(this, arguments)
                }
                )),
                o().isEmpty(i) ? void 0 : i
            }
        }
    }
    ,
    219415: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getConstantStats: () => i.getConstantStats
        });
        var i = n(111342)
    }
    ,
    455820: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getExperimentId: () => o
        });
        var i = n(500034)
          , o = function() {
            if (!0 === (0,
            i.isFeatureAvailable)(i.Features.ASYNC_CONSTANTS))
                return "prod_".concat(i.Features.ASYNC_CONSTANTS, "_v1")
        }
    }
    ,
    289815: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getExperimentId: () => i.getExperimentId
        });
        var i = n(455820)
    }
    ,
    146043: (e, t, n) => {
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        n.r(t),
        n.d(t, {
            getNavigationStats: () => o
        });
        var o = function() {
            var e, t, n, o, s = (n = performance.getEntriesByType("navigation"),
            o = 1,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(n) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var i, o, s = [], r = !0, a = !1;
                    try {
                        for (n = n.call(e); !(r = (i = n.next()).done) && (s.push(i.value),
                        !t || s.length !== t); r = !0)
                            ;
                    } catch (e) {
                        a = !0,
                        o = e
                    } finally {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                    return s
                }
            }(n, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
            }(n, o) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0];
            return e = s,
            (null != (t = PerformanceNavigationTiming) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t) ? {
                nextHopProtocol: s.nextHopProtocol,
                startTime: s.startTime,
                duration: s.duration,
                fetchStart: s.fetchStart,
                domainLookupStart: s.domainLookupStart,
                domainLookupEnd: s.domainLookupEnd,
                connectStart: s.connectStart,
                secureConnectionStart: s.secureConnectionStart,
                connectEnd: s.connectEnd,
                requestStart: s.requestStart,
                responseStart: s.responseStart,
                responseEnd: s.responseEnd,
                transferSize: s.transferSize,
                encodedBodySize: s.encodedBodySize,
                decodedBodySize: s.decodedBodySize
            } : null
        }
    }
    ,
    355736: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getNavigationStats: () => i.getNavigationStats
        });
        var i = n(146043)
    }
    ,
    956222: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getRealCardPageType: () => o
        });
        var i = n(639615)
          , o = function() {
            var e = window.location.pathname.split("/")[1]
              , t = APP.getBaseEntity();
            return APP.constant("metrics").INBOX_WITH_CARD_NO_SELECTED ? i.TrackedMetricType.INBOX_WITH_CARD_NO_SELECTED : "chats" === e || "imbox" === e ? "chats" === t ? i.TrackedMetricType.INBOX_DIALOGS : i.TrackedMetricType.INBOX_WITH_CARD : i.TrackedMetricType.CARD
        }
    }
    ,
    806667: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getRealCardPageType: () => i.getRealCardPageType
        });
        var i = n(956222)
    }
    ,
    420415: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getResourcesStats: () => c
        });
        var i = n(137233)
          , o = ["script", "link"]
          , s = function(e) {
            return e ? {
                name: e.name,
                duration: e.duration,
                transferSize: e.transferSize,
                encodedBodySize: e.encodedBodySize,
                decodedBodySize: e.decodedBodySize
            } : {
                name: "",
                duration: 0,
                transferSize: 0,
                encodedBodySize: 0,
                decodedBodySize: 0
            }
        }
          , r = function() {
            return {
                firstAt: 0,
                max: s(),
                minUncached: null,
                count: 0,
                uncachedCount: 0,
                transferSize: {
                    sum: 0,
                    max: 0,
                    min: null
                },
                encodedBodySize: {
                    sum: 0,
                    max: 0,
                    min: null
                },
                decodedBodySize: {
                    sum: 0,
                    max: 0,
                    min: null
                }
            }
        }
          , a = function() {
            return {
                internal: r(),
                external: r()
            }
        }
          , c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = performance.getEntriesByType("resource")
              , n = {
                stats: {
                    js: a(),
                    css: a()
                }
            };
            return t.reduce((function(t, n) {
                if (r = n,
                !(null != (a = PerformanceResourceTiming) && "undefined" != typeof Symbol && a[Symbol.hasInstance] ? a[Symbol.hasInstance](r) : r instanceof a))
                    return t;
                var r, a, c = n.initiatorType;
                if (!o.includes(c))
                    return t;
                var l = n.name
                  , d = (0,
                i.getFileExtension)(l.split("?")[0]).slice(1);
                if ("css" !== d && "js" !== d || !l.includes(e))
                    return t;
                var u, h = l.includes(APP.static_build_path) ? "internal" : "external", _ = t.stats[d][h];
                return _.count++,
                ("deliveryType"in (u = n) ? "cache" === u.deliveryType : "transferSize"in u ? !u.transferSize : u.duration < 25) || (_.uncachedCount++,
                (!_.minUncached || _.minUncached.duration > n.duration) && (_.minUncached = s(n))),
                _.firstAt || (_.firstAt = n.startTime),
                _.max.duration < n.duration && (_.max = s(n)),
                ["transferSize", "encodedBodySize", "decodedBodySize"].forEach((function(e) {
                    var t = _[e];
                    t.sum += n[e],
                    t.max = Math.max(n[e], t.max),
                    t.min = null === t.min ? n[e] : Math.min(n[e], t.min)
                }
                )),
                t
            }
            ), n).stats
        }
    }
    ,
    366169: (e, t, n) => {
        n.r(t),
        n.d(t, {
            ResourceStats: () => i.ResourceStats,
            getResourcesStats: () => i.getResourcesStats
        });
        var i = n(420415)
    }
    ,
    102431: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getEndpoint: () => r
        });
        var i = n(55188)
          , o = n.n(i)().last(location.origin.split("."), 2)[0]
          , s = "https://jsperf.".concat(o, ".com")
          , r = function(e) {
            return "".concat(s, "?url=").concat(e)
        }
    }
    ,
    606836: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getEndpoint: () => i.getEndpoint
        });
        var i = n(102431)
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
        e._sentryDebugIds[t] = "b812e582-6fc2-4767-9275-e811b91a87b2",
        e._sentryDebugIdIdentifier = "sentry-dbid-b812e582-6fc2-4767-9275-e811b91a87b2")
    } catch (e) {}
}();
//# sourceMappingURL=39481.020242b0d04fa89d7e15.js.map
