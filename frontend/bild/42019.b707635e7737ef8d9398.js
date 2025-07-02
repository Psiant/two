/*! For license information please see 42019.b707635e7737ef8d9398.js.LICENSE.txt */
(window.webpackChunk = window.webpackChunk || []).push([[42019], {
    510144: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            default: () => h
        });
        var i = s(661533)
          , a = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , r = s(871082)
          , l = s.n(r)
          , d = s(521466);
        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var s = 0, i = new Array(e); s < e; s++)
                i[s] = t[s];
            return i
        }
        var c = l().Model.extend({
            initialize: function() {
                this.defaults = o().clone(this.attributes)
            },
            setDefaults: function() {
                this.defaults = o().defaults(this.defaults, this.attributes)
            },
            updateDefaults: function(t) {
                this.defaults = o().extend(this.defaults, t || this.attributes)
            },
            deepCloneDefaults: function() {
                this.defaults = JSON.parse(JSON.stringify(this.attributes))
            },
            hasChanges: function(t) {
                return t && !o().isUndefined(this.attributes[t]) ? this.attributes[t] !== this.defaults[t] : !o().isEqual(this.attributes, this.defaults)
            },
            set: function(t, e) {
                return l().Model.prototype.set.apply(this, arguments),
                o().isEmpty(t) || (o().isObject(t) ? o().each(t, (function(t, e) {
                    this._setChanges(e, t)
                }
                ), this) : this._setChanges(t, e)),
                this
            },
            _setChanges: function(t, e) {
                o().isUndefined(this.defaults) || (this.defaults[t] === e ? delete this.changed[t] : this.changed[t] = e)
            }
        });
        const h = {
            View: d.default.extend({
                silent: !1,
                events: {
                    "input :input": "changeInModel",
                    "change :input": "changeInModel",
                    "controls:change :input": "changeInModel",
                    "change:with-default :input": "updateDefaultsAndChangeInModel"
                },
                initialize: function(t) {
                    var e = {
                        _onSave: o().noop,
                        onSaveError: o().noop,
                        onSaveForm: o().noop,
                        flat: !0,
                        new_attrs_dissalowed: !1
                    }
                      , s = t && t.model || c;
                    d.default.prototype.initialize.apply(this, arguments),
                    this.options = a().extend({}, e, t),
                    this.model = new s,
                    this.initModelFromForm(t)
                },
                save: function(t) {
                    var e, s, i = this, n = a().extend({
                        success: o().noop,
                        error: o().noop
                    }, t || {}), r = [o().extend({
                        success: o().bind((function(t) {
                            this.updateDefaults(),
                            o().isFunction(i.options._onSave) && i.options._onSave.call(this, t),
                            o().isFunction(i.options.onSaveForm) && i.options.onSaveForm.call(this, t),
                            n.success.apply(this, arguments),
                            i.checkChanges()
                        }
                        ), this.model),
                        error: function(t) {
                            o().isFunction(i.options._onError) && i.options._onError.call(this, t),
                            o().isFunction(i.options.onSaveError) && i.options.onSaveError.call(this, t),
                            n.error.apply(this, arguments)
                        }
                    }, o().omit(t, "success", "error"))];
                    return this.model.save === l().Model.prototype.save && r.unshift(this.model.toJSON()),
                    (e = this.model).save.apply(e, function(t) {
                        if (Array.isArray(t))
                            return u(t)
                    }(s = r) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                            return Array.from(t)
                    }(s) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t)
                                return u(t, e);
                            var s = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === s && t.constructor && (s = t.constructor.name),
                            "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? u(t, e) : void 0
                        }
                    }(s) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())
                },
                revert: function(t) {
                    var e, s = this.model.attributes, i = !1;
                    o().isArray(t) && (i = !0,
                    s = o().pick(s, (function(e, s) {
                        return o().contains(t, s)
                    }
                    ))),
                    o().each(s, (function(t, s) {
                        t !== this.model.defaults[s] && (e = this.$el.find(':input[name="'.concat(s, '"]:not(.js-form-changes-skip)')),
                        this.setInputValue(e, this.model.defaults[s], s),
                        e.trigger("control:select:reset"))
                    }
                    ), this),
                    i ? (o().extend(this.model.attributes, o().pick(this.model.defaults, (function(e, s) {
                        return o().contains(t, s)
                    }
                    ))),
                    this.checkChanges()) : (this.model.attributes = o().clone(this.model.defaults),
                    this.model.trigger("has_reverted", {
                        type: "has_reverted"
                    }))
                },
                checkDeleted: function() {
                    o().each(this.model.attributes, (function(t, e) {
                        this.$el.find(':input[name="'.concat(e, '"]:not(.js-form-changes-skip)')).length || delete this.model.attributes[e]
                    }
                    ), this),
                    this.checkChanges()
                },
                initModelFromForm: function(t) {
                    this._initModelFromForm(t),
                    this.model.setDefaults(),
                    this.setUrl()
                },
                updateModelFromForm: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._initModelFromForm({
                        update: !0,
                        handle_skip_class_ignore: t.handle_skip_class_ignore || !1,
                        with_existing_attr_reassign: t.with_existing_attr_reassign || !1
                    }),
                    this.checkChanges()
                },
                setTrackingInputs: function(t) {
                    this._initModelFromForm({
                        $elem: t
                    }),
                    this.model.setDefaults()
                },
                _initModelFromForm: function(t) {
                    var e = !1;
                    e = (t = t || {}).with_existing_attr_reassign || this.options.with_existing_attr_reassign || e,
                    o().each((t.$elem || this.$el).find(":input"), (function(s) {
                        var i = a()(s)
                          , n = this.model.get(i.attr("name"));
                        if ((o().isUndefined(n) || "" === n || e) && (!i.hasClass("js-form-changes-skip") || t.update)) {
                            if (i.hasClass("js-form-changes-skip") && t.handle_skip_class_ignore)
                                return;
                            this.setModelValue(i)
                        }
                    }
                    ), this),
                    o().each((t.$elem || this.$el).find(".js-control-checkboxes_dropdown-huge"), (function(t) {
                        var e = a()(t).data("view");
                        e ? this.setModelValueForCheckboxesDropdownHuge(e) : a()(t).on("controls:view:init", o().bind((function() {
                            e = a()(t).data("view"),
                            this.setModelValueForCheckboxesDropdownHuge(e)
                        }
                        ), this))
                    }
                    ), this)
                },
                setUrl: function(t) {
                    this.model.url = t || this.$el.attr("action")
                },
                hasChanges: function(t) {
                    return this.model.hasChanges(t)
                },
                setInputValue: function(t, e, s) {
                    var i = t.attr("type");
                    switch (s = s || t.attr("name"),
                    i) {
                    case "checkbox":
                        t.prop("checked", e);
                        break;
                    case "radio":
                        "" === e ? (t.closest('[name="'.concat(s, '"]')),
                        t.prop("checked", !1)) : (t = t.closest('[name="'.concat(s, '"][value="').concat(e, '"]'))).prop("checked", !0);
                        break;
                    default:
                        t.val(e)
                    }
                    t.trigger("change").trigger("controls:change").trigger("autosize").trigger("controls:textarea:autosize"),
                    this.model.set(s, e)
                },
                getInputValue: function(t) {
                    var e = "";
                    switch (t.attr("type")) {
                    case "checkbox":
                    case "radio":
                        e = t.prop("checked") ? t.val() || "on" : "";
                        break;
                    default:
                        e = t.val()
                    }
                    return e
                },
                setModelValue: function(t, e) {
                    var s, i = t.attr("name"), a = this.model.get(i);
                    if (e = e || {},
                    1 == ("checkbox" === t[0].type && !1 === this.options.flat)) {
                        if (s = this.getInputValue(t),
                        a)
                            switch (o().isArray(a) || (a = [a]),
                            s ? a.push(s) : a = o().without(a, t.val()),
                            (s = o().sortBy(o().uniq(a), (function(t) {
                                return (t || "").toString()
                            }
                            ))).length) {
                            case 1:
                                s = s[0];
                                break;
                            case 0:
                                s = ""
                            }
                    } else
                        s = this.getInputValue(t);
                    e.update_default && (this.model.defaults[i] = s),
                    this.model.set(i, s, {
                        silent: e.base_form_silent || !1
                    })
                },
                setModelValueForCheckboxesDropdownHuge: function(t) {
                    var e = t.getCheckedItemsForFormModel();
                    o().extend(this.model.defaults, e),
                    this.model.set(e, {
                        silent: !0
                    })
                },
                toggleSilence: function(t) {
                    this.silent = o().isBoolean(t) ? t : !this.silent
                },
                updateDefaultsAndChangeInModel: function(t) {
                    this.changeInModel(t, {
                        update_default: !0
                    })
                },
                changeInModel: function(t, e) {
                    var s = a()(t.currentTarget);
                    if (e = e || {},
                    !this.silent && !s.hasClass("js-form-changes-skip")) {
                        if (!0 === this.options.new_attrs_dissalowed && o().isUndefined(o().propertyOf(this)(["model", "defaults", s.attr("name")])))
                            return;
                        this.setModelValue(s, e),
                        this.checkChanges()
                    }
                },
                checkChanges: function() {
                    var t = this.hasChanges()
                      , e = "has_changes";
                    return t || (e = "has_reverted"),
                    this.model.trigger(e, {
                        type: e
                    }),
                    t
                }
            }),
            Model: c
        };
        var f = "../build/transpiled/components/base/form";
        window.define(f, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([f])
    }
    ,
    50888: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            default: () => u
        });
        var i = s(661533)
          , a = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , r = s(811707)
          , l = s(521466)
          , d = s(564638);
        const u = l.default.extend({
            events: {
                scroll: "onScrollChange"
            },
            initialize: function(t) {
                var e = this;
                l.default.prototype.initialize.apply(this),
                this._paused = 0,
                this._clean = !0,
                this.options = o().extend({
                    max_sticky_count: 1 / 0,
                    exclude_scrollbar: !1,
                    disable_click: !1,
                    top_offset: 0,
                    no_stack_items: !1,
                    no_viewport_change: !1,
                    stop_propagation_for_header_click: !1,
                    onInside: o().noop,
                    onOutside: o().noop,
                    onUpdate: o().noop,
                    getCompareBoundary: o().noop
                }, t || {}),
                this.options.disable_click || this.$el.on("click".concat(this.ns), this.options.selector, o().bind(this.onHeaderClick, this)),
                this._$window.on("resize".concat(this.ns), o().throttle((function() {
                    e.cleanup(),
                    e.refresh()
                }
                ), d.WINDOW_RESIZE_THROTTLE_DELAY)),
                this._$window.on("resize".concat(this.ns), o().debounce((function() {
                    e.cleanup(),
                    e.refresh()
                }
                ), 200))
            },
            destroy: function() {
                this._destroyed = !0,
                this._$window.off(this.ns),
                l.default.prototype.destroy.apply(this)
            },
            onScrollChange: function() {
                this._setScrollTop(),
                this._isPaused() || this.update()
            },
            cleanup: function(t) {
                return this._clean || ((t = t || this.headers) && t.length && !this._destroyed && o().each(t, (function(t) {
                    t.parentNode && t.parentNode !== this.el && (t.parentNode.style.height = ""),
                    t.style.top = "",
                    t.style.bottom = "",
                    t.style.width = "",
                    t.classList.remove("outside"),
                    t.classList.remove("outside-top"),
                    t.classList.remove("outside-bottom")
                }
                ), this),
                this._clean = !0),
                this._clean
            },
            refresh: function(t) {
                var e, s, i, a = this.options.exclude_scrollbar ? (0,
                r.getScrollBarWidth)("custom-scroll") : 0, n = this.options.top_offset;
                this._destroyed || (o().isUndefined(this._scroll_top) && this._setScrollTop(),
                i = Array.prototype.slice.call(this.el.querySelectorAll(this.options.selector)),
                o().isFunction(this.options.filterElements) && (i = this.options.filterElements(i)),
                o().isEqual(i, this.headers) || this.cleanup(o().difference(i, this.headers)),
                this.headers = o().filter(i, (function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                }
                )),
                this.top_fix_heights = [],
                this.top_real_heights = [],
                this.header_tops = [],
                this.fixed_heights = [],
                this.top_offsets = [],
                this.headers.length && this.headers.length < this.options.max_sticky_count && (this.el.style.maxHeight = "",
                s = this.$el.css("max-height"),
                e = /%$/.test(s),
                s = parseInt(s),
                (o().isNaN(s) || e) && (s = parseInt(this.$el[0].offsetHeight)),
                this.viewport_size = s,
                o().isFunction(this.options.getViewportHeight) && (this.viewport_size = this.options.getViewportHeight()),
                this.el.style.maxHeight = "".concat(this.viewport_size, "px"),
                this.headers = o().filter(this.headers, (function(t, e) {
                    var s = this.options.getCompareBoundary(t, e) || "top";
                    t.parentNode !== this.el && (t.parentNode.style.height = "".concat(t.offsetHeight, "px"));
                    var r = t.parentNode.clientWidth - a;
                    return !!r && (t.style.width = "".concat(r, "px"),
                    this.options.no_stack_items || this.options.no_viewport_change || (this.viewport_size -= t.offsetHeight),
                    o().isFunction(this.options.top_offset) && (n = this.options.top_offset(t, i)),
                    this.top_offsets[e] = n,
                    this.header_tops[e] = t.parentNode.offsetTop - (e > 0 ? n : 0),
                    this.header_tops[e] += "top" === s ? 0 : t.offsetHeight,
                    this.top_fix_heights[e] = this.top_fix_heights[e - 1] || 0,
                    this.top_real_heights[e] = this.top_real_heights[e - 1] || Math.min(this.header_tops[e], 0),
                    this.headers[e - 1] && !this.options.no_stack_items && (this.top_fix_heights[e] += this.headers[e - 1].offsetHeight,
                    this.top_real_heights[e] += this.headers[e - 1].offsetHeight),
                    "bottom" === s && (this.top_real_heights[e] = 0),
                    !0)
                }
                ), this)),
                this.fix_flag = [],
                this._clean = !1,
                o().isFunction(t) && t(),
                this.update())
            },
            update: function() {
                var t, e, s = this._scroll_top;
                this._clean || (this.headers && this.headers.length && this.headers.length < this.options.max_sticky_count && !this._destroyed && (o().each(this.headers, (function(i, a) {
                    t = 0,
                    this.header_tops[a] - s < this.top_real_heights[a] ? (t = 1,
                    e = this.fixed_heights[a - 1] || this.top_fix_heights[a]) : this.header_tops[a] - s > this.top_real_heights[a] + this.viewport_size ? (t = 2,
                    e = this.el.clientHeight - i.offsetHeight - this.top_fix_heights[a] - this.viewport_size) : (t = 3,
                    e = null),
                    null !== e && (e += this.top_offsets[a] || 0),
                    t !== this.fix_flag[a] && (i.style.top = "",
                    i.style.bottom = "",
                    i.classList.remove("outside"),
                    i.classList.remove("outside-top"),
                    i.classList.remove("outside-bottom"),
                    null === e ? this.options.onInside(i, this.headers) : (1 === t ? (i.style.top = "".concat(e, "px"),
                    i.classList.add("outside-top")) : (i.style.bottom = "".concat(e, "px"),
                    i.classList.add("outside-bottom")),
                    i.classList.add("outside"),
                    this.fixed_heights[a] = (this.fixed_heights[a - 1] || 0) + i.offsetHeight,
                    this.options.onOutside(i, this.headers, 1 === t ? "top" : "bottom")),
                    this.fix_flag[a] = t)
                }
                ), this),
                this._setLastTopHeader()),
                this.options.onUpdate(this.headers, {
                    scroll_top: s
                }))
            },
            pause: function() {
                this._paused++
            },
            resume: function() {
                this._paused--
            },
            _isPaused: function() {
                return 0 !== this._paused
            },
            _setScrollTop: function() {
                this._scroll_top = Math.ceil(this.$el.scrollTop())
            },
            _setLastTopHeader: function() {
                var t = o().findIndex(this.headers, (function(t) {
                    return t.classList.contains("outside-top_last")
                }
                ))
                  , e = o().findLastIndex(this.headers, (function(t) {
                    return t.classList.contains("outside-top")
                }
                ));
                (-1 === e || e !== t) && t > -1 && this.headers[t].classList.remove("outside-top_last"),
                e > -1 && e !== t && this.headers[e].classList.add("outside-top_last")
            },
            onHeaderClick: function(t) {
                var e = t.currentTarget
                  , s = a()(e).parent()
                  , i = this.$el.find(this.options.selector).get()
                  , n = 0
                  , o = i[n]
                  , r = 0;
                for (this.options.stop_propagation_for_header_click && t.stopPropagation(); o && o !== e; )
                    r += a()(o).parent().height(),
                    o = i[++n];
                this.$el.scrollTop(s[0].offsetTop - r)
            }
        });
        var c = "../build/transpiled/components/base/sticky_headers";
        window.define(c, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([c])
    }
    ,
    319779: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            default: () => v
        });
        var i = s(661533)
          , a = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , r = s(161320)
          , l = s.n(r)
          , d = s(880774)
          , u = s(848655)
          , c = s(521466)
          , h = s(340958)
          , f = s(403474);
        s(403474),
        s(368439);
        var g = f.prototype.draw
          , m = function() {
            for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                e[s] = arguments[s];
            0 === this.viewStartDate.year() && this.viewStartDate.add((new Date).getFullYear(), "y"),
            g.apply(this, e)
        }
          , p = o().debounce((function(t) {
            a()(t.input).trigger("controls:change", [t.getSelected()])
        }
        ), 200)
          , _ = APP.system.format.date.date;
        f.prototype.draw = m,
        f.Input.prototype.draw = m;
        const v = h.default.extend({
            controlClassName: "js-control-date",
            _getDefaults: function() {
                return this._format = this._elem("date_field").attr("data-format") || _,
                this._direction = this._direction || "any",
                {
                    format: this._format,
                    direction: this._direction,
                    hide_disabled: this._hide_disabled,
                    blackout: this._blackout,
                    parseSplitDelimiter: /,\s*|\s*-\s*/,
                    weekStart: "en" === APP.lang_id ? 0 : 1,
                    months: 1,
                    dayOutOfMonthClickable: !0,
                    titleFormat: this._elem("date_field").attr("data-title-format") || "MMMM YYYY",
                    attachTo: this.el
                }
            },
            _getKalendaeHandler: function() {
                return f.Input
            },
            _classes: function() {
                return {
                    date_field: "date_field",
                    first_calendar_box: "date_field_with-time_range-box_first",
                    second_calendar_box: "date_field_with-time_range-box_second"
                }
            },
            _selectors: function() {
                return {
                    range_inputs: ".date_field__range_0, .date_field__range_1"
                }
            },
            _hideButton: o().template('<div class="date_filter__done-btn__wrapper clearfix"><button type="button" class="button-input date_filter__done-btn js-date-done" tabindex="-1"><span class="button-input-inner "><span class="button-input-inner__text">'.concat(APP.lang.filter_done, "</span></span></button></div>")),
            events: function() {
                var t = {
                    "touchstart .date_field_wrapper--calendar": "clickToClearOnIpad",
                    "click .date_field_wrapper--calendar": "clickToFocus",
                    "click .date_field-js": "clickToFocus"
                };
                return t["click ".concat(this._selector("date_field"))] = "clickToFocusOnIpad",
                t["focus ".concat(this._selector("date_field"))] = "container",
                t["controls:date ".concat(this._selector("date_field"))] = "container",
                t["input ".concat(this._selector("date_field"))] = "inputInDate",
                t["keypress ".concat(this._selector("date_field"))] = "onDateKeyPress",
                t["blur ".concat(this._selector("date_field"))] = "reformatOnBlur",
                t["controls:date:check-empty ".concat(this._selector("date_field"))] = "inputInDate",
                t["controls:date:change ".concat(this._selector("date_field"))] = "inputInDate",
                t["controls:change ".concat(this._selector("range_inputs"))] = "onRangeChange",
                t
            },
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                    e[s] = arguments[s];
                h.default.prototype.initialize.apply(this, e),
                this.updatePeriodDate(),
                this._is_range = this._elem("date_field").hasClass("range"),
                this._direction = this._elem("date_field").attr("data-direction") || "",
                this._hide_disabled = !o().isUndefined(this._elem("date_field").attr("data-hide-disabled")),
                this._blackout = this.getBlackoutCallback(this._elem("date_field").data("blackout")),
                this.inputInDate({
                    currentTarget: this._elem("date_field").get(0)
                })
            },
            delegateEvents: function() {
                for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                    e[s] = arguments[s];
                var i = c.default.prototype.delegateEvents.apply(this, e);
                return this.refocusDateField(),
                i
            },
            getBlackoutCallback: function(t) {
                switch (t) {
                case "today":
                    return function(t) {
                        return l()().yearDay() !== l()(t).yearDay()
                    }
                    ;
                case "today-tomorrow":
                    return function(t) {
                        return !o().contains([l()().add(1, "days").yearDay(), l()().yearDay()], l()(t).yearDay())
                    }
                    ;
                case "5year":
                    return function(t) {
                        return l()().add(5, "Y").yearDay() < l()(t).yearDay()
                    }
                    ;
                default:
                    return null
                }
            },
            destroy: function() {
                for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                    e[s] = arguments[s];
                this.$container && (this.$container.off(),
                this.$input.off()),
                h.default.prototype.destroy.apply(this, e)
            },
            onDateKeyPress: function(t) {
                var e = this._getCharFromKeyPress(t);
                if (13 === t.keyCode && (this.reformatOnBlur(t),
                "" !== t.target.value.trim() && this.clickToDone()),
                !/[\d\s/.-]/.test(e) && !t.metaKey)
                    return !1
            },
            updatePeriodDate: function(t) {
                o().isUndefined(t) && (t = _),
                this.date_today = l()().format(t),
                this.date_from = l()(this.$el.find(".date_field__range_0").attr("value"), _).format(t),
                this.date_to = l()(this.$el.find(".date_field__range_1").attr("value"), _).format(t)
            },
            refocusDateField: function() {
                this._elem("date_field").is(":focus") && this._elem("date_field").trigger("blur").trigger("focus")
            },
            reformatOnBlur: function() {
                var t, e, s, i = "", a = this.$input && this.$input.val().trim() || "";
                o().isUndefined(this.$input) || (a && (this._is_range ? (this.updatePeriodDate(this._format),
                i = this.date_from === this.date_to ? this.date_from === this.date_today ? (0,
                d.i18n)("Today") : this.date_from : "".concat(this.date_from, " - ").concat(this.date_to === this.date_today ? (0,
                d.i18n)("Today") : this.date_to)) : (t = 2 === a.split(" ").length,
                e = a.split(" ")[1] || null,
                i = "Invalid date" === (s = l()(a, (0,
                u.format)("parse"))).format(this._format) || s.year() < 1e3 ? this.$input.attr("value") : s.format(this._format),
                t && (i = "".concat(i, " ").concat(e)))),
                this.$input.val(i.trim()).trigger("controls:change", [i]))
            },
            _stopPropagationOnCalendarClick: function(t) {
                t.stopPropagation()
            },
            clickToFocus: function(t) {
                return a()(t.currentTarget).parent().children(":input").focus(),
                !1
            },
            clickToFocusOnIpad: function(t) {
                APP.is_touch_device && this.clickToFocus(t)
            },
            clickToClearOnIpad: function(t) {
                if (APP.is_touch_device && this._elem("date_field").is(":not(.empty):focus"))
                    return t.stopPropagation(),
                    this._elem("date_field").val("").trigger("controls:change").trigger("input").blur(),
                    !1
            },
            inputInDate: function(t, e) {
                var s = t.currentTarget;
                (e = e || s.value) ? s.classList.remove("empty") : s.classList.add("empty")
            },
            onRangeChange: function() {
                var t = this._elem("range_inputs")
                  , e = ["DD.MM.YYYY", "DD/MM/YYYY", "MM/DD/YYYY"];
                t.length && l()(t[0].value, e, !0).isValid() && l()(t[1].value, e, !0).isValid() && this._elem("date_field").val("".concat(t[0].value, " - ").concat(t[1].value))
            },
            clickToDone: function() {
                this._elem("date_field").trigger("controls:date:done").blur(),
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                })
            },
            onShowRange: function() {
                var t = this.container()
                  , e = this.kalendae.getSelectedRaw()
                  , s = this.$input.get(0).getBoundingClientRect();
                e[1] && e[1].format(_) === l()().format(_) && this.kalendae.addSelected(e[1].format(_)),
                this.setSelection(t);
                var i = t[0].offsetHeight;
                this._elem("date_field").hasClass("date-filter-in-search") ? (t.css({
                    top: s.top
                }),
                this._$window.height() < s.top + i && (t.addClass("kalendae-at-right").css({
                    top: s.top - i / 2,
                    left: s.left - t[0].offsetWidth - 15
                }),
                t.offset().left - 65 < 0 && t.css({
                    left: s.left + this.$input.outerWidth() + 15
                }))) : (t.css({
                    top: s.top,
                    left: s.left
                }),
                this._$window.height() < s.top + i ? (t.addClass("kalendae-at-top").css("left", "+=".concat(this.$el.width() + 20)).css("top", s.top - (i - 46)).css("height", 270),
                t.find(".date_filter__done-btn__wrapper").css({
                    position: "absolute",
                    bottom: 10
                })) : t.removeClass("kalendae-at-top"),
                t.visible() || t.removeClass("kalendae-at-top").addClass("kalendae-at-bottom-ragne").css("top", s.top - 40)),
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                })
            },
            onHideRange: function() {},
            onDateClickedRange: function() {
                this.$input.removeClass("empty"),
                1 === this.kalendae.getSelectedRaw().length ? (this.container().addClass("range"),
                (this.$input.closest(".date_filter").length ? this.$input.closest(".date_filter") : this.$input.closest(".date_filter__save-overflow")).length && this.$el.trigger("date-filter:date-change", this.kalendae.getSelected())) : (this.container().removeClass("range"),
                this.$el.find(".date_field__range_1").val("").trigger("change")),
                this.date_clicked = !0,
                this.setSelection(this.container())
            },
            onChangeRange: function() {
                if (this.kalendae) {
                    var t = this.kalendae
                      , e = a()(t.input)
                      , s = this.$input.closest(".date_filter").length ? this.$input.closest(".date_filter") : this.$input.closest(".date_filter__save-overflow")
                      , i = t.getSelectedRaw()
                      , n = t.getSelected()
                      , r = a().trim(s.find(".control-toggler__item-selected").text())
                      , u = e.parent().find(".date_field__range_1")
                      , c = "";
                    r && (r += ": "),
                    o().each(i, (function(t, s) {
                        e.parent().find(".date_field__range_".concat(s)).val(l()(t._i, t._f || _).format(_)).trigger("change")
                    }
                    ), t),
                    i.length && (e.parent().find(".date_field--clear").show(),
                    i[0] && !i[1] && (c = i[0].isBefore(l()().tz(APP.system.timezone)) ? l()().format(_) : l()(i[0]._i, i[0]._f || _).format(_),
                    u.val(c).trigger("change")),
                    this.updatePeriodDate(this._format),
                    n = this.date_from === this.date_today ? (0,
                    d.i18n)("Today") : this.date_from,
                    this.date_from !== this.date_to && (n += " - ".concat(this.date_to === this.date_today ? (0,
                    d.i18n)("Today") : this.date_to)),
                    t.date_clicked && e.val(n),
                    this.$el.trigger("date-filter:date-change", r + n)),
                    e.one("kalendae:draw", o().bind((function() {
                        t.date_clicked && (t.date_clicked = !1,
                        e.val(n))
                    }
                    ), t)).trigger("controls:change controls:date:change", [t.getSelected()])
                }
            },
            onShowSingle: function() {
                var t = this.container()
                  , e = this.$input.get(0).getBoundingClientRect()
                  , s = this.$input.outerWidth()
                  , i = e.left;
                s < 18 && (i = e.left - 18 + s / 2),
                t.removeClass("kalendae-at-top").css({
                    top: e.top,
                    left: i
                }),
                t.visible() || t.addClass("kalendae-at-top"),
                this._$document.trigger({
                    type: "controls:hide:private",
                    target: this.el
                })
            },
            onHideSingle: function() {},
            onChangeSingle: function() {
                this.kalendae && (a()(this.kalendae.input).trigger("controls:date:change", [this.kalendae.getSelected()]),
                p(this.kalendae))
            },
            onDateClickedSingle: function(t) {
                this.$input.attr("from", "calendar").val(t.format(APP.system.format.date.date)),
                this.container().one("mouseup".concat(this.ns), o().bind((function() {
                    this.$input.blur()
                }
                ), this))
            },
            setSelection: function(t) {
                var e;
                t && (t.find(".k-selected").length > 1 && t.find(".k-selected:first").addClass("k-range"),
                t.find(".k-days").find(".k-range.k-in-month.k-active:last").each((function() {
                    (e = a()(this).next()).hasClass("k-selected") ? e.addClass("k-last-active") : a()(this).addClass("k-last-active")
                }
                )))
            },
            _getCharFromKeyPress: function(t) {
                return null === t.which ? t.keyCode < 32 ? null : String.fromCharCode(t.keyCode) : 0 !== t.which && 0 !== t.charCode ? t.which < 32 ? null : String.fromCharCode(t.which) : null
            },
            container: function() {
                return this.$container || (this.kalendae = this._addComponent(this._getKalendaeHandler(), this._elem("date_field").get(0), o().extend(this._getDefaults(), {
                    mode: this._is_range ? "range" : "single",
                    subscribe: {
                        show: this._is_range ? o().bind(this.onShowRange, this, {}) : o().bind(this.onShowSingle, this),
                        hide: this._is_range ? o().bind(this.onHideRange, this) : o().bind(this.onHideSingle, this),
                        change: this._is_range ? o().bind(this.onChangeRange, this) : o().bind(this.onChangeSingle, this),
                        "date-clicked": this._is_range ? o().bind(this.onDateClickedRange, this) : o().bind(this.onDateClickedSingle, this)
                    }
                })),
                APP.is_touch_device && this._elem("date_field").prop("readonly", !0),
                this._elem("date_field").data("kalendae", this.kalendae),
                this.$container = a()(this.kalendae.container),
                this.$input = this._elem("date_field"),
                (this.$el.hasClass(this._class("second_calendar_box")) || this.$el.hasClass(this._class("first_calendar_box")) || this._is_range) && this.$container.append(this._hideButton()),
                this.$container.addClass(this.$el.attr("data-kalendae-classname")).on("click", ".js-date-done", o().bind(this.clickToDone, this)).on("click", o().bind(this._stopPropagationOnCalendarClick, this))),
                this.$container
            }
        });
        var y = "../build/transpiled/interface/controls/date/index";
        window.define(y, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([y])
    }
    ,
    220030: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            default: () => p
        });
        var i = s(55188)
          , a = s.n(i)
          , n = s(161320)
          , o = s.n(n)
          , r = s(319779)
          , l = s(661533);
        function d(t, e) {
            for (var s = 0; s < e.length; s++) {
                var i = e[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function u(t, e, s) {
            return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, s) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var a = Object.getOwnPropertyDescriptor(i, e);
                    return a.get ? a.get.call(s || t) : a.value
                }
            }
            ,
            u(t, e, s || t)
        }
        function c(t) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            c(t)
        }
        function h(t, e) {
            return h = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            h(t, e)
        }
        function f(t) {
            var e = function() {
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
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var s, i = c(t);
                if (e) {
                    var a = c(this).constructor;
                    s = Reflect.construct(i, arguments, a)
                } else
                    s = i.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((s = e) && "undefined" != typeof Symbol && s.constructor === Symbol ? "symbol" : typeof s) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var s
                }(this, s)
            }
        }
        var g = 60
          , m = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && h(t, e)
            }(r, t);
            var e, s, i, n = f(r);
            function r() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                n.apply(this, arguments)
            }
            return e = r,
            s = [{
                key: "time",
                get: function() {
                    return this._time
                },
                set: function(t) {
                    this._time = t
                }
            }, {
                key: "_classes",
                value: function() {
                    return a().extend({
                        selected_time: "js-selected-time",
                        timeplanner: "js-date-time-timeplanner",
                        fifteen: "js-date-time-fifteen"
                    }, u(c(r.prototype), "_classes", this).apply(this, arguments))
                }
            }, {
                key: "events",
                value: function() {
                    var t = u(c(r.prototype), "events", this).apply(this, arguments);
                    return t["click.with-time ".concat(this._selector("date_field"))] = "_onInputClickToShow",
                    t["input.with-time ".concat(this._selector("date_field"))] = "_onInputHandle",
                    t["change.with-time ".concat(this._selector("date_field"))] = "_onChangeWithoutTimeHandle",
                    t
                }
            }, {
                key: "initialize",
                value: function() {
                    u(c(r.prototype), "initialize", this).apply(this, arguments),
                    this._elem("date_field").is(":focus") && (this.container(),
                    this.$input.trigger("focus"))
                }
            }, {
                key: "container",
                value: function() {
                    var t = this.$container
                      , e = u(c(r.prototype), "container", this).apply(this, arguments);
                    return t || this._initTimeplanner(),
                    e
                }
            }, {
                key: "onShowSingle",
                value: function() {
                    u(c(r.prototype), "onShowSingle", this).apply(this, arguments),
                    this._updateCurrentTime()
                }
            }, {
                key: "onHideSingle",
                value: function() {
                    this.$input.trigger("controls:date:hide")
                }
            }, {
                key: "onDateKeyPress",
                value: function(t) {
                    var e = this._getCharFromKeyPress(t) || "";
                    return !!a().contains([":", "a", "p", "m"], e.toLowerCase()) || u(c(r.prototype), "onDateKeyPress", this).apply(this, arguments)
                }
            }, {
                key: "onDateClickedSingle",
                value: function(t) {
                    this.$input.attr("from", "calendar").val(t.format(APP.system.format.date.date))
                }
            }, {
                key: "_onInputClickToShow",
                value: function() {
                    var t = this._elem("date_field").data("kalendae");
                    this.$container && this.$container.is(":hidden") && t.show()
                }
            }, {
                key: "_onChangeWithoutTimeHandle",
                value: function(t) {
                    var e = l(t.currentTarget);
                    e.val() && (e.val().split(" ").length < 2 ? (this.time || (this.time = o()().hour() * g + o()().minutes()),
                    this._setSelectedTime(this.time)) : this._onInputHandle())
                }
            }, {
                key: "_onInputHandle",
                value: function() {
                    if (this.$input) {
                        var t = o()(this.$input.val(), APP.system.format.date.full);
                        (t.hour() || t.minutes()) && (this.time = t.hour() * g + t.minutes())
                    }
                }
            }, {
                key: "_onTimeplanerFifteenClick",
                value: function(t) {
                    var e = l(t.currentTarget)
                      , s = this._elem("date_field").data("kalendae")
                      , i = o()(e.text().trim(), APP.system.format.date.time);
                    this._setSelectedTime(i.hour() * g + i.minutes()),
                    s && s.hide()
                }
            }, {
                key: "_initTimeplanner",
                value: function() {
                    var t = this
                      , e = o()()
                      , s = l('\n            <div\n              class="date_field__timeplanner '.concat(24 === APP.system.format.time ? "date_field__timeplanner_military" : "", " ").concat(this._class("timeplanner"), ' custom-scroll"\n            >\n              ').concat(a().map(a().range(24), (function(s) {
                        return a().map(a().range(4), (function(i) {
                            return '\n                    <div class="date_field__timeplanner-fifteen '.concat(t._class("fifteen"), '">\n                      <span class="date_field__timeplanner-fifteen-value">\n                        ').concat(e.hour(s).minutes(15 * i).format(APP.system.format.date.time), "\n                      </span>\n                    </div>\n                  ")
                        }
                        )).join("")
                    }
                    )).join(""), "\n            </div>\n          "))
                      , i = o()(this.$input.val(), APP.system.format.date.full);
                    (i.hour() || i.minutes()) && (this.time = i.hour() * g + i.minutes()),
                    this.$container.on("click", this._selector("fifteen"), a().bind(this._onTimeplanerFifteenClick, this)).append(s)
                }
            }, {
                key: "_convertTo",
                value: function(t) {
                    return "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? 2880 * t / 1440 : 1440 * t / 2880
                }
            }, {
                key: "_getTimeplannerMouseTop",
                value: function(t) {
                    var e = this.container().find(this._selector("timeplanner"))
                      , s = e.scrollTop() + (t - e.offset().top)
                      , i = s / 30;
                    return i - Math.floor(i) <= .09 && (s = 30 * Math.floor(i)),
                    Math.ceil(i) - i <= .09 && (s = 30 * Math.ceil(i)),
                    s
                }
            }, {
                key: "_updateCurrentTime",
                value: function() {
                    var t = this.container().find(this._selector("timeplanner"))
                      , e = this._convertTo(o()().hour() * g + o()().minutes(), "top");
                    t.scrollTop(parseInt(e) - t.height() / 2)
                }
            }, {
                key: "_updateInputValueWithTime",
                value: function(t) {
                    var e = this._elem("date_field").data("kalendae").getSelected();
                    e ? a().isString(e) && (e = o()(e, APP.system.format.date.date)) : e = o()(),
                    e.hour(Math.floor(t / g)),
                    e.minutes(Math.floor(t % g)),
                    this.$input.val(e.format(APP.system.format.date.full)).trigger("controls:date:check-empty")
                }
            }, {
                key: "_setSelectedTime",
                value: function(t) {
                    a().isFinite(t) && t >= 0 ? (this.time = t,
                    this._updateInputValueWithTime(t)) : this.$input.val("").trigger("controls:date:check-empty"),
                    this.$input.trigger("change")
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-date-time"
                }
            }],
            s && d(e.prototype, s),
            i && d(e, i),
            r
        }(r.default);
        const p = m.extend(m);
        var _ = "../build/transpiled/interface/controls/date/with_time/index";
        window.define(_, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([_])
    }
    ,
    717414: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            default: () => v
        });
        var i = s(661533)
          , a = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , r = s(460159)
          , l = s.n(r)
          , d = s(880774)
          , u = s(577486)
          , c = a()(document)
          , h = "ONLY_SELECT"
          , f = {}
          , g = {}
          , m = {}
          , p = "multisuggest__suggest-item"
          , _ = !1;
        m[h] = 0,
        m[40] = 1,
        m[38] = -1,
        m[39] = 1,
        m[37] = -1,
        f.getTitle = function(t) {
            var e = t.attr("data-title");
            return e || (e = t.text()),
            e
        }
        ,
        f.scroll = function(t) {
            var e, s, i = t.$list.find(".js-multisuggest-suggest"), n = t.$list.find(".".concat(t.item_class, ":visible")), o = n.index(t.$selected);
            return n.eq(o).removeClass("".concat(t.item_class, "_selected")),
            n[e = n[o + m[t.keyCode]] ? o + m[t.keyCode] : 40 === t.keyCode ? n.length - 1 : 0] && (n.eq(e).addClass("".concat(t.item_class, "_selected")),
            s = i.scrollTop() + n.eq(e).position().top,
            i.scrollTop(s - 150),
            _ = !0),
            a()(this).trigger("multisuggest:set_hint", [t.value, n[e] && "new" !== n[e].getAttribute("data-id") ? f.getTitle(n.eq(e)) : ""]),
            !1
        }
        ,
        f.select = function(t) {
            return t.$selected.length && t.$list.is(":visible") && "new" !== t.$selected.attr("data-id") ? t.$selected.trigger("suggest:suggest:click", t) : t.value && t.can_add && a()(this).trigger("multisuggest:item:choose", {
                is_new: !0,
                value: t.value,
                title: t.value,
                color: t.$selected.data("color"),
                suggest_params: t.template ? {
                    template: t.template
                } : {}
            }),
            !1
        }
        ,
        f.makeActive = function(t) {
            var e = t.$wrapper.find(".js-multisuggest-list").find(".js-multisuggest-item:not(.multisuggest__list-item_input):not(.js-multisuggest-fake)")
              , s = e.filter((function() {
                return a()(this).hasClass("js-active")
            }
            ));
            if (!s.length)
                return 37 !== t.keyCode || !!t.value || e.length && e[e.length - 1].classList.add("js-active");
            var i = e.index(s) + m[t.keyCode];
            return !(i < 0 || (s.removeClass("js-active"),
            i > e.length - 1 || e[i].classList.add("js-active"),
            1))
        }
        ,
        f.removeItem = function(t) {
            var e;
            return t.hasClass("js-active") ? t.trigger("multisuggest:item:remove") : ((e = t.closest(".js-multisuggest-list")).find(".js-multisuggest-item.js-active").removeClass("js-active"),
            t.addClass("js-active"),
            APP.is_touch_device || e.find(".js-multisuggest-input").focus()),
            !1
        }
        ,
        f.clickItem = function(t, e) {
            var s = f.getSuggest(t)
              , i = t.attr("data-id")
              , a = t.text();
            "new" === i && (a = s.find(".js-multisuggest-input").val()),
            s.trigger("multisuggest:item:choose", [o().extend({
                title: (0,
                d.trim)(a),
                title_origin: t.data("title-origin")
            }, t.data(), {
                id: "new" === i ? "" : i,
                suggest_params: e,
                is_new: "new" === i
            })]),
            s.trigger("multisuggest:select-first")
        }
        ,
        g[27] = function() {
            return a()(this).closest(".js-multisuggest").removeClass("multisuggest_show-suggest"),
            !1
        }
        ,
        g[8] = function(t) {
            var e;
            return t.value || ((e = a()(this).closest(".js-multisuggest-list").find(".js-multisuggest-item.js-active")).length ? e.trigger("multisuggest:item:remove") : f.makeActive(o().extend(t, {
                keyCode: 37
            }))),
            !0
        }
        ,
        g[40] = f.scroll,
        g[38] = f.scroll,
        g[h] = f.scroll,
        g[13] = f.select,
        g[9] = f.select,
        g[32] = function(t) {
            return !!t.value || (f.select(t),
            !1)
        }
        ,
        g[39] = f.makeActive,
        g[37] = f.makeActive,
        f.getSuggest = function(t) {
            var e = t.closest("[data-multisuggest-id]");
            return "y" === e.attr("data-is-suggest") ? a()('.js-multisuggest[data-multisuggest-id="'.concat(e.attr("data-multisuggest-id"), '"]')) : e
        }
        ,
        c.on("multisuggest:set_suggest", ".js-multisuggest", (function(t, e) {
            var s, i, n = a()(this), r = n.find(".js-multisuggest-list").find(".js-multisuggest-item:not(.multisuggest__list-input)"), u = n.data("values-hash") || [], c = n.data("inner-items-tmpl") || n.data("items-tmpl") || "/tmpl/controls/multisuggest/item.twig", h = a()('[data-multisuggest-id="'.concat(n.attr("data-multisuggest-id"), '"]:not(.js-multisuggest)')), f = h.hasClass("js-multisuggest-suggest") ? h : h.find(".js-multisuggest-suggest"), g = "";
            !1 === e && (e = ""),
            o().isUndefined(e) || (e = (0,
            d.trim)(e),
            s = o().filter(u, (function(t) {
                var s = (t.title || t.label || t.name || "").toString().toLowerCase()
                  , n = (t.title_origin || t.title || t.label || t.name || "").toString()
                  , l = (0,
                d.transliterate)(s)
                  , u = (0,
                d.transliterate)(s, "punto")
                  , c = o().reduce(t, (function(t, e, s) {
                    return "id" === s || "name" === s || "label" === s || "title" === s ? t : "".concat(t, " ").concat((e || "").toString().toLowerCase())
                }
                ), "");
                return s && (s.indexOf(e.toLowerCase()) >= 0 || l.indexOf(e.toLowerCase()) >= 0 || u.indexOf(e.toLowerCase()) >= 0 || c.indexOf(e.toLowerCase()) >= 0) && !r.filter((function(e, s) {
                    return i = a().trim(a()(s).text() || ""),
                    parseInt(a()(s).attr("data-id")) === parseInt(t.id) || !t.is_filter_by_id && i === n
                }
                )).length
            }
            )),
            o().each(o().first(s, 100), (function(t) {
                g += l()({
                    ref: c
                }).render({
                    item: t,
                    is_suggest_item: !0,
                    class_name: "multisuggest__suggest-item"
                })
            }
            )),
            e && n.hasClass("js-can-add") && (g += l()({
                ref: c
            }).render({
                item: {
                    id: "new",
                    name: e,
                    title: ['<svg class="svg-icon svg-common--arrow-left-cornered-dims"><use xlink:href="#common--arrow-left-cornered"></use></svg> '.concat(n.attr("data-new-item-msg") || APP.lang.fast_tags_empty), '<span class="new-tag">'.concat(o().escape(e), "</span>")].join(" ")
                },
                class_name: "multisuggest__suggest-item multisuggest__suggest-item_add"
            }))),
            f.html(g),
            g.length ? (h.show(),
            n.find(".js-multisuggest-input").on("keyup.escape", (function(t) {
                27 === t.keyCode && (a()(this).off("keyup.escape"),
                t.stopPropagation())
            }
            )),
            n.addClass("multisuggest_show-suggest").trigger("multisuggest:has_value")) : (h.hide(),
            n.removeClass("multisuggest_show-suggest").trigger("multisuggest:no_value")),
            n.find(".js-multisuggest-input").trigger("multisuggest:select-first")
        }
        )).on("multisuggest:item:remove", ".js-multisuggest-item", (function(t, e) {
            var s, i = a()(this), n = f.getSuggest(i);
            i.hasClass("js-multisuggest-input") && !e || (s = {
                title: a().trim(i.text()),
                id: i.attr("data-id")
            },
            i.remove(),
            n.trigger("multisuggest:set_suggest", [!1]).trigger("multisuggest:item:removed", [s]))
        }
        )).on("multisuggest:item:choose", ".js-multisuggest", (function(t, e) {
            var s = a()(this)
              , i = s.find(".js-multisuggest-list .js-multisuggest-item").filter((function() {
                return a()(this).attr("data-id") === parseInt(e.id) || "id" !== e.filter && a()(this).text() === (e.title_origin || e.title.toString())
            }
            ))
              , n = e.suggest_params && e.suggest_params.template ? e.suggest_params.template : "/tmpl/controls/multisuggest/item.twig";
            i.length || !a().trim(e.title) ? s.find(".js-multisuggest-input input").val("") : s.addClass("multisuggest_show-list").find(".js-multisuggest-input").val("").parent().before(l()({
                ref: n
            }).render({
                item: e,
                is_list_item: !0,
                is_suggest_item: !0
            })),
            APP.is_touch_device || s.find(".js-multisuggest-input").blur().focus(),
            s.trigger("multisuggest:set_suggest", [!1]).trigger("multisuggest:item:choosed", e)
        }
        )).on("multisuggest:set_hint", ".js-multisuggest-input", (function(t, e, s) {
            var i = a()(this)
              , n = i.parent().find(".js-multisuggest-hint");
            if (i.removeClass("h-suggest-failed"),
            e || s)
                if (e || !s) {
                    var o = new u.UnsafeRegExp("(^|\\s)(".concat(e.replace(/(\/|\[)/gi, "\\$1"), "(.+)?)($|\\s)"),"i")
                      , r = s.match(o);
                    r ? n.text("".concat(a().trim(r[0].replace(new u.UnsafeRegExp(e,"i"), e)), " ").concat(s.replace(o, ""))) : (s || i.addClass("h-suggest-failed"),
                    n.text(""))
                } else
                    n.text(s);
            else
                n.text("")
        }
        )).on("multisuggest:select-first", ".js-multisuggest-input", (function(t, e) {
            var s, i, n = a()(this);
            o().isEmpty(e) || (s = n.closest(".js-multisuggest"),
            (i = a()('[data-multisuggest-id="'.concat(s.attr("data-multisuggest-id"), '"]:not(.js-multisuggest)'))).find(".".concat(p, "_selected")).removeClass("".concat(p, "_selected")),
            i.find('.js-multisuggest-item[data-id="'.concat(e.id, '"]')).addClass("".concat(p, "_selected"))),
            n.trigger({
                type: "keydown",
                keyCode: h
            })
        }
        )),
        a()(window).on("mousemove", (function() {
            _ && (_ = !1)
        }
        )),
        c.on("keydown", ".js-multisuggest-input", (function(t) {
            var e = a()(this)
              , s = e.closest(".js-multisuggest")
              , i = a()('[data-multisuggest-id="'.concat(s.attr("data-multisuggest-id"), '"]:not(.js-multisuggest)'));
            if (a().isFunction(g[t.keyCode]))
                return g[t.keyCode].call(this, {
                    $wrapper: s,
                    $list: i,
                    $selected: i.find(".".concat(p, "_selected")),
                    keyCode: t.keyCode,
                    can_add: "N" !== e.attr("data-can-add"),
                    item_class: p,
                    value: t.inputValue || e.val(),
                    template: s.data("inner-items-tmpl") || "/tmpl/controls/multisuggest/item.twig"
                })
        }
        )).on("mouseover", ".js-multisuggest-item", (function() {
            var t = a()(this)
              , e = f.getSuggest(t);
            if (!(_ || t.hasClass("multisuggest__list-item") || t.hasClass("suggest-segments__list-item") || t.hasClass("multisuggest__suggest-item_selected"))) {
                t.closest(".js-multisuggest-suggest").find(".multisuggest__suggest-item_selected").removeClass("multisuggest__suggest-item_selected"),
                t.addClass("multisuggest__suggest-item_selected");
                var s = e.find(".js-multisuggest-input");
                s.trigger("multisuggest:set_hint", [s.val(), f.getTitle(t)])
            }
        }
        )).on("input", ".js-multisuggest-input", (function() {
            f.getSuggest(a()(this)).trigger("multisuggest:set_suggest", this.value.toString())
        }
        )).on("click suggest:suggest:click", ".js-multisuggest-item", (function(t, e) {
            t.stopPropagation(),
            f.clickItem(a()(this), e)
        }
        )).on("click suggest:list:click", ".js-multisuggest-item", (function() {
            return f.removeItem(a()(this))
        }
        ));
        const v = f;
        var y = "../build/transpiled/interface/controls/multisuggest";
        window.define(y, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([y])
    }
    ,
    777464: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            default: () => r
        });
        var i = s(55188)
          , a = s.n(i)
          , n = s(661533)
          , o = function() {};
        a().extend(o.prototype, {
            getElements: function(t) {
                var e = {
                    filter: {
                        catalog_id: t
                    }
                };
                return this._getElementsList(e)
            },
            getElementsByIds: function(t, e) {
                var s = {
                    filter: {
                        catalog_id: t,
                        id: e
                    }
                };
                return this._getElementsList(s)
            },
            searchElements: function(t, e) {
                var s = {
                    filter: {
                        catalog_id: t,
                        term: e,
                        filter: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    }
                };
                return this._getElementsList(s)
            },
            getListUrl: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return "/ajax/v1/catalog_elements/list" + (a().isEmpty(t.qs_params) ? "" : "/?".concat(n.param(t.qs_params)))
            },
            _getElementsList: function(t) {
                var e = n.Deferred()
                  , s = t.filter || {};
                return this._doGetRequest(s).then((function(t, s, i) {
                    e.resolve(200 === i.status ? a().values(t.response.catalog_elements) : [])
                }
                )),
                e.promise()
            },
            _doGetRequest: function(t) {
                return n.ajax({
                    url: "/ajax/v1/catalog_elements/list",
                    method: "GET",
                    dataType: "JSON",
                    data: t
                })
            }
        });
        const r = new o;
        var l = "../build/transpiled/network/catalogs/elements";
        window.define(l, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([l])
    }
    ,
    853073: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            copyToClipboard: () => l,
            digitsOnly: () => r,
            keycodes: () => o
        });
        var i = s(55188)
          , a = s.n(i)
          , n = s(889433)
          , o = {
            ENTER: 13,
            TAB: 9,
            BACKSPACE: 8,
            RIGHT_KEY: 39,
            LEFT_KEY: 37,
            UP_KEY: 38,
            DOWN_KEY: 40,
            ESCAPE: 27,
            SPACE: 32
        }
          , r = function(t) {
            if (!a().isUndefined(t)) {
                var e = t.which;
                (e < 48 || e > 57) && e && 8 !== t.keyCode && t.preventDefault()
            }
        }
          , l = function(t, e) {
            var s = document.createElement("textarea")
              , i = "firefox" === n.default.browser;
            (s = document.createElement("textarea")).style.fontSize = "12pt",
            s.style.border = "0",
            s.style.padding = "0",
            s.style.margin = "0",
            s.style.position = "fixed",
            s.style.left = "-9999px",
            s.style.top = "".concat(window.pageYOffset || document.documentElement.scrollTop, "px"),
            s.setAttribute("readonly", ""),
            s.value = e,
            document.body.appendChild(s),
            s.focus(),
            s.setSelectionRange(0, s.value.length);
            try {
                document.execCommand("copy"),
                t && i && t.preventDefault()
            } catch (t) {}
            a().delay((function() {
                document.body.removeChild(s)
            }
            ), 100)
        }
          , d = "../build/transpiled/utils/events";
        window.define(d, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([d])
    }
    ,
    848655: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            convertTzAccount: () => u,
            format: () => l,
            moment: () => d
        });
        var i = s(55188)
          , a = s.n(i)
          , n = s(161320)
          , o = s.n(n)
          , r = /^\d{4}-\d{2}-\d{2}/
          , l = function(t) {
            var e = APP.system.format.date[t]
              , s = APP.system.format.date.date;
            switch (!0) {
            case "catalog" === t:
                return "YYYY-MM-DD HH:mm:ss";
            case "parse" === t:
                return [s.replace("YYYY", "YY")].concat([s]);
            case a().isUndefined(e):
                return s;
            default:
                return e
            }
        }
          , d = function(t, e) {
            var s;
            if (a().isString(e) ? (s = e,
            e = {}) : s = e.format,
            !l)
                switch (s = l(e.type),
                !0) {
                case a().isString(t) && r.test(t):
                    s = l("catalog");
                    break;
                case a().isString(t):
                    s = l("full");
                    break;
                default:
                    s = "X"
                }
            var i = o()(t, s);
            return !1 !== e.apply_timezone && i.tz(APP.system.timezone),
            i
        }
          , u = function(t) {
            var e = APP.system.format.date.full
              , s = o()(t, e);
            return o()().tz(APP.constant("account").timezone).set("year", s.get("year")).set("month", s.get("month")).set("date", s.get("date")).set("hour", s.get("hour")).set("minute", s.get("minute")).set("second", s.get("second")).set("millisecond", s.get("millisecond")).unix()
        }
          , c = "../build/transpiled/utils/format/date";
        window.define(c, (function() {
            var t = "undefined"
              , s = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return s && s.default || s
        }
        )),
        window.require([c])
    }
    ,
    403474: (t, e, s) => {
        var i, a, n, o = s(661533);
        a = [s(161320)],
        i = function(t) {
            var e = function() {
                return s.moment().startOf("day").yearDay()
            }
              , s = function(e, s) {
                if ("function" == typeof document.addEventListener || a.isIE8()) {
                    var o, r, l = !1;
                    try {
                        o = e,
                        l = null != (r = Element) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](o) : o instanceof r
                    } catch (t) {
                        l = !!e && 1 === l.nodeType
                    }
                    l || "string" == typeof e || (s = e);
                    var d, u, c, h, f, g, m, p, _ = this, v = _.classes, y = _.settings = a.merge(_.defaults, {
                        attachTo: e
                    }, s || {}), w = _.container = a.make("div", {
                        class: v.container
                    }), b = _.calendars = [], k = t().day(y.weekStart), C = [], S = [], D = 0, E = y.months;
                    for (a.isIE8() && a.addClassName(w, "ie8"),
                    D = 7; D--; )
                        C.push(k.format(y.columnHeaderFormat)),
                        k.add(1, "days");
                    if (n(_),
                    "object" == typeof y.subscribe)
                        for (D in y.subscribe)
                            y.subscribe.hasOwnProperty(D) && _.subscribe(D, y.subscribe[D]);
                    d = y.viewStartDate ? t(y.viewStartDate, y.format) : t(),
                    _.viewStartDate = d.date(1),
                    _._sel = [],
                    y.selected && (_.setSelected(y.selected, !1),
                    _.viewStartDate = t(_._sel[0]));
                    var x = {
                        past: y.months - 1,
                        "today-past": y.months - 1,
                        any: y.months > 2 ? Math.floor(y.months / 2) : 0,
                        "today-future": 0,
                        future: 0
                    }[this.settings.direction];
                    if (x && t().month() == t(_.viewStartDate).month() && (_.viewStartDate = t(_.viewStartDate).subtract({
                        M: x
                    }).date(1)),
                    _.defaultView = t(_.viewStartDate),
                    "function" == typeof y.blackout)
                        _.blackout = y.blackout;
                    else if (y.blackout) {
                        var P = i(y.blackout, y.parseSplitDelimiter, y.format);
                        _.blackout = function(e) {
                            if ((e = t(e).startOf("day").yearDay()) < 1 || !_._sel)
                                return !1;
                            for (var s = P.length; s--; )
                                if (P[s].startOf("day").yearDay() === e)
                                    return !0;
                            return !1
                        }
                    } else
                        _.blackout = function() {
                            return !1
                        }
                        ;
                    for (_.direction = _.directions[y.direction] ? _.directions[y.direction] : _.directions.any,
                    E = Math.max(y.months, 1); E--; ) {
                        (u = a.make("div", {
                            class: v.calendar
                        }, w)).setAttribute("data-cal-index", E),
                        y.months > 1 && (E == Math.max(y.months - 1, 1) ? a.addClassName(u, v.monthFirst) : 0 === E ? a.addClassName(u, v.monthLast) : a.addClassName(u, v.monthMiddle)),
                        c = a.make("div", {
                            class: v.title
                        }, u),
                        y.useYearNav || a.addClassName(c, v.disableYearNav),
                        a.make("a", {
                            class: v.previousYear
                        }, c),
                        a.make("a", {
                            class: v.previousMonth
                        }, c),
                        a.make("a", {
                            class: v.nextYear
                        }, c),
                        a.make("a", {
                            class: v.nextMonth
                        }, c),
                        h = a.make("span", {
                            class: v.caption
                        }, c),
                        f = a.make("div", {
                            class: v.header + " " + (1 == y.dayHeaderClickable ? v.dayActive : "")
                        }, u),
                        D = 0;
                        do {
                            p = a.make("span", {
                                "data-day": D
                            }, f),
                            1 == y.dayHeaderClickable && "multiple" == y.mode && (p.addEventListener("mouseover", (function(t) {
                                var e = t.target.parentNode.nextSibling;
                                if (daysToHover = e.getElementsByClassName("k-day-week-" + t.target.getAttribute("data-day")),
                                daysToHover.length > 0)
                                    for (var s = 0; s < daysToHover.length; s++)
                                        a.hasClassName(daysToHover[s], v.dayActive) && a.addClassName(daysToHover[s], "k-day-hover-active")
                            }
                            )),
                            p.addEventListener("mouseleave", (function(t) {
                                var e = t.target.parentNode.nextSibling;
                                if (daysToHover = e.getElementsByClassName("k-day-week-" + t.target.getAttribute("data-day")),
                                daysToHover.length > 0)
                                    for (var s = 0; s < daysToHover.length; s++)
                                        a.hasClassName(daysToHover[s], v.dayActive) && a.removeClassName(daysToHover[s], "k-day-hover-active")
                            }
                            ))),
                            p.innerHTML = C[D]
                        } while (++D < 7);
                        g = a.make("div", {
                            class: v.days
                        }, u),
                        D = 0,
                        S = [];
                        do {
                            "week" == y.mode ? (D % 7 == 0 && (m = a.make("div", {
                                class: v.week + " clearfix"
                            }, g),
                            S.push(m)),
                            a.make("span", {}, m)) : S.push(a.make("span", {}, g))
                        } while (++D < 42);
                        b.push({
                            header: f,
                            caption: h,
                            days: S
                        }),
                        E && a.make("div", {
                            class: v.monthSeparator
                        }, w)
                    }
                    _.draw(),
                    a.addEvent(w, APP.is_touch_device ? "touchstart" : "mousedown", (function(e, s) {
                        var i;
                        if (a.hasClassName(s, v.nextMonth))
                            return e.stopPropagation(),
                            _.disableNext || !1 === _.publish("view-changed", _, ["next-month"]) || (_.viewStartDate.add(1, "months"),
                            _.draw()),
                            !1;
                        if (a.hasClassName(s, v.previousMonth))
                            return e.stopPropagation(),
                            _.disablePreviousMonth || !1 === _.publish("view-changed", _, ["previous-month"]) || (_.viewStartDate.subtract(1, "months"),
                            _.draw()),
                            !1;
                        if (a.hasClassName(s, v.nextYear))
                            return e.stopPropagation(),
                            _.disableNext || !1 === _.publish("view-changed", _, ["next-year"]) || (_.viewStartDate.add(1, "years"),
                            _.draw()),
                            !1;
                        if (a.hasClassName(s, v.previousYear))
                            return e.stopPropagation(),
                            _.disablePreviousMonth || !1 === _.publish("view-changed", _, ["previous-year"]) || (_.viewStartDate.subtract(1, "years"),
                            _.draw()),
                            !1;
                        if ((a.hasClassName(s.parentNode, v.days) || a.hasClassName(s.parentNode, v.week)) && a.hasClassName(s, v.dayActive) && (i = s.getAttribute("data-date"))) {
                            if (e.stopPropagation(),
                            i = t(i, y.dayAttributeFormat).hours(12),
                            !1 !== _.publish("date-clicked", _, [i]))
                                switch (y.mode) {
                                case "multiple":
                                    _.addSelected(i) || _.removeSelected(i);
                                    break;
                                case "range":
                                case "single":
                                default:
                                    _.addSelected(i);
                                    break;
                                case "week":
                                    _.weekSelected(i)
                                }
                            return !1
                        }
                        if (a.hasClassName(s.parentNode, v.week) && (i = s.getAttribute("data-date")))
                            return e.stopPropagation(),
                            i = t(i, y.dayAttributeFormat).hours(12),
                            !1 !== _.publish("date-clicked", _, [i]) && "week" == y.mode && _.weekSelected(i),
                            !1;
                        if (a.hasClassName(s.parentNode, v.header)) {
                            if (e.stopPropagation(),
                            "multiple" == y.mode && 1 == y.dayHeaderClickable) {
                                var n = a.hasClassName(s, v.daySelected)
                                  , o = s.parentNode.parentNode.getAttribute("data-datestart")
                                  , r = s.getAttribute("data-day");
                                1 == n ? _.monthDaySelected(o, r, !0) : _.monthDaySelected(o, r, !1)
                            }
                            return !1
                        }
                        return !1
                    }
                    )),
                    (y.attachTo = a.$(y.attachTo)) && y.attachTo.appendChild(w)
                }
            };
            s.prototype = {
                defaults: {
                    attachTo: null,
                    months: 1,
                    weekStart: 0,
                    direction: "any",
                    directionScrolling: !0,
                    viewStartDate: null,
                    blackout: null,
                    selected: null,
                    mode: "single",
                    dayOutOfMonthClickable: !1,
                    dayHeaderClickable: !1,
                    format: null,
                    subscribe: null,
                    columnHeaderFormat: "dd",
                    titleFormat: "MMMM, YYYY",
                    dayNumberFormat: "D",
                    dayAttributeFormat: "YYYY-MM-DD",
                    parseSplitDelimiter: /,\s*|\s+-\s+/,
                    rangeDelimiter: " - ",
                    multipleDelimiter: ", ",
                    useYearNav: !0,
                    hide_disabled: !1,
                    dateClassMap: {}
                },
                classes: {
                    container: "kalendae",
                    calendar: "k-calendar",
                    monthFirst: "k-first-month",
                    monthMiddle: "k-middle-month",
                    monthLast: "k-last-month",
                    title: "k-title",
                    previousMonth: "k-btn-previous-month",
                    nextMonth: "k-btn-next-month",
                    previousYear: "k-btn-previous-year",
                    nextYear: "k-btn-next-year",
                    caption: "k-caption",
                    header: "k-header",
                    days: "k-days",
                    week: "k-week",
                    dayOutOfMonth: "k-out-of-month",
                    dayInMonth: "k-in-month",
                    dayActive: "k-active",
                    dayDisabled: "k-disabled",
                    daySelected: "k-selected",
                    dayInRange: "k-range",
                    dayInRangeStart: "k-range-start",
                    dayInRangeEnd: "k-range-end",
                    dayToday: "k-today",
                    monthSeparator: "k-separator",
                    disablePreviousMonth: "k-disable-previous-month-btn",
                    disableNextMonth: "k-disable-next-month-btn",
                    disablePreviousYear: "k-disable-previous-year-btn",
                    disableNextYear: "k-disable-next-year-btn",
                    disableYearNav: "k-disable-year-nav"
                },
                disablePreviousMonth: !1,
                disableNextMonth: !1,
                disablePreviousYear: !1,
                disableNextYear: !1,
                directions: {
                    past: function(s) {
                        return t(s).startOf("day").yearDay() >= e()
                    },
                    "today-past": function(s) {
                        return t(s).startOf("day").yearDay() > e()
                    },
                    any: function(t) {
                        return !1
                    },
                    "today-future": function(s) {
                        return t(s).startOf("day").yearDay() < e()
                    },
                    future: function(s) {
                        return t(s).startOf("day").yearDay() <= e()
                    }
                },
                getSelectedAsDates: function() {
                    for (var t = [], e = 0, s = this._sel.length; e < s; e++)
                        t.push(this._sel[e].toDate());
                    return t
                },
                getSelectedAsText: function(t) {
                    for (var e = [], s = 0, i = this._sel.length; s < i; s++)
                        e.push(this._sel[s].format(t || this.settings.format || "YYYY-MM-DD"));
                    return e
                },
                getSelectedRaw: function() {
                    for (var e = [], s = 0, i = this._sel.length; s < i; s++)
                        e.push(t(this._sel[s]));
                    return "range" === this.settings.mode && 1 === i && t(this._sel[0]).isBefore(t()) && e.push(t(t().format(APP.system.format.date.date), APP.system.format.date.date)),
                    e
                },
                getSelected: function(e) {
                    var s = this.getSelectedAsText(e);
                    switch (this.settings.mode) {
                    case "week":
                    case "range":
                        return s.splice(2),
                        1 === s.length && t(s[0], APP.system.format.date.date).isBefore(t()) ? s + this.settings.rangeDelimiter + APP.lang.Today : s.join(this.settings.rangeDelimiter);
                    case "multiple":
                        return s.join(this.settings.multipleDelimiter);
                    default:
                        return s[0] || null
                    }
                },
                isSelected: function(e) {
                    if ((e = t(e).startOf("day").yearDay()) < 1 || !this._sel || this._sel.length < 1)
                        return !1;
                    switch (this.settings.mode) {
                    case "week":
                    case "range":
                        var s = this._sel[0] ? this._sel[0].startOf("day").yearDay() : 0
                          , i = this._sel[1] ? this._sel[1].startOf("day").yearDay() : 0;
                        return s === e || i === e ? 1 : s && i ? (e > s && e < i || s < i && e < s && e > i) && -1 : 0;
                    case "multiple":
                        for (var a = this._sel.length; a--; )
                            if (this._sel[a].startOf("day").yearDay() === e)
                                return !0;
                        return !1;
                    default:
                        return this._sel[0] && this._sel[0].startOf("day").yearDay() === e
                    }
                    return !1
                },
                setSelected: function(e, s) {
                    var a, n = i(e, this.settings.parseSplitDelimiter, this.settings.format), o = i(this.getSelected(), this.settings.parseSplitDelimiter, this.settings.format);
                    for (a = o.length; a--; )
                        this.removeSelected(o[a], !1);
                    for (a = n.length; a--; )
                        this.addSelected(n[a], !1);
                    !1 !== s && (n[0] && (this.viewStartDate = t(n[0], this.settings.format)),
                    this.draw())
                },
                addSelected: function(e, s) {
                    switch (e = t(e, this.settings.format).hours(12),
                    this.settings.dayOutOfMonthClickable && "range" !== this.settings.mode && this.makeSelectedDateVisible(e),
                    this.settings.mode) {
                    case "multiple":
                        if (this.isSelected(e))
                            return !1;
                        this._sel.push(e);
                        break;
                    case "range":
                        1 !== this._sel.length ? this._sel = [e] : e.startOf("day").yearDay() > this._sel[0].startOf("day").yearDay() ? this._sel[1] = e : this._sel = [e, this._sel[0]];
                        break;
                    default:
                        this._sel = [e]
                    }
                    return this._sel.sort((function(t, e) {
                        return t.startOf("day").yearDay() - e.startOf("day").yearDay()
                    }
                    )),
                    this.publish("change", this, [e]),
                    !1 !== s && this.draw(),
                    !0
                },
                weekSelected: function(e) {
                    var s = e.toDate()
                      , i = t(s).startOf("week")
                      , a = t(s).endOf("week").subtract(1, "day");
                    this._sel = [i, a],
                    this.publish("change", this, [e.day()]),
                    this.draw()
                },
                monthDaySelected: function(e, s, i) {
                    var a = t(e).startOf("month").weekday(s)
                      , n = t(e).endOf("month");
                    for (selected = []; a <= n; )
                        a >= t(e).startOf("month") && !this.direction(a) && (i ? this.removeSelected(t(a).hours(12)) : this.addSelected(t(a).hours(12))),
                        a.add(7, "d")
                },
                makeSelectedDateVisible: function(e) {
                    outOfViewMonth = t(e).date("1").diff(this.viewStartDate, "months"),
                    outOfViewMonth < 0 ? this.viewStartDate.subtract(1, "months") : outOfViewMonth > 0 && outOfViewMonth >= this.settings.months && this.viewStartDate.add(1, "months")
                },
                removeSelected: function(e, s) {
                    e = t(e, this.settings.format).hours(12);
                    for (var i = this._sel.length; i--; )
                        if (this._sel[i].startOf("day").yearDay() === e.startOf("day").yearDay())
                            return this._sel.splice(i, 1),
                            this.publish("change", this, [e]),
                            !1 !== s && this.draw(),
                            !0;
                    return !1
                },
                draw: function() {
                    var i, n, o, r, l, d, u, c, h, f, g = t(this.viewStartDate).startOf("month").add(12, "hours"), m = this.classes, p = 0, _ = 0, v = 0, y = this.settings;
                    l = this.calendars.length;
                    do {
                        (i = t(g).date(1)).day(i.day() < this.settings.weekStart ? this.settings.weekStart - 7 : this.settings.weekStart),
                        (n = this.calendars[p]).header.parentNode.setAttribute("data-datestart", g.format(this.settings.dayAttributeFormat)),
                        n.caption.innerHTML = g.format(this.settings.titleFormat),
                        _ = 0,
                        d = 0,
                        v = 0,
                        c = [];
                        for (var w = 0; w < 7; w++)
                            a.removeClassName(n.header.children[w], m.daySelected),
                            c[w] = 0;
                        do {
                            "week" == y.mode ? (_ % 7 == 0 && 0 !== _ && d++,
                            o = n.days[d].childNodes[_ % 7]) : o = n.days[_],
                            r = [],
                            (u = this.isSelected(i)) && r.push({
                                "-1": m.dayInRange,
                                1: m.daySelected,
                                true: m.daySelected
                            }[u]),
                            "range" === y.mode && (this._sel[0] && this._sel[0].startOf("day").yearDay() === i.clone().startOf("day").yearDay() && r.push(m.dayInRangeStart),
                            this._sel[1] && this._sel[1].startOf("day").yearDay() === i.clone().startOf("day").yearDay() && r.push(m.dayInRangeEnd)),
                            y.dayHeaderClickable && "multiple" === y.mode && (r.push("k-day-week-" + i.weekday()),
                            1 != u && 1 != u || this.direction(i) || g.format("M") != i.format("M") || (c[i.weekday()] = c[i.weekday()] + 1)),
                            i.month() != g.month() ? r.push(m.dayOutOfMonth) : r.push(m.dayInMonth),
                            !(this.blackout(i) || this.direction(i) || i.month() != g.month() && !1 === y.dayOutOfMonthClickable) || u > 0 ? r.push(m.dayActive) : y.hide_disabled && r.push(m.dayDisabled),
                            i.clone().startOf("day").yearDay() === e() && r.push(m.dayToday),
                            h = i.format(this.settings.dayAttributeFormat),
                            y.dateClassMap[h] && r.push(y.dateClassMap[h]),
                            o.innerHTML = i.format(y.dayNumberFormat),
                            o.className = r.join(" "),
                            o.setAttribute("data-date", h),
                            i.add(1, "days")
                        } while (++_ < 42);
                        if (w = 0,
                        c.length > 0)
                            do {
                                if (c[w] > 0) {
                                    var b = s.moment(g).startOf("month").weekday(w)
                                      , k = s.moment(g).startOf("month");
                                    endMonth = s.moment(g).endOf("month"),
                                    v = 0;
                                    do {
                                        b >= k && !this.direction(b) && v++,
                                        b.add(7, "d")
                                    } while (b <= endMonth);
                                    v == c[w] ? a.addClassName(n.header.children[w], m.daySelected) : a.removeClassName(n.header.children[w], m.daySelected)
                                }
                            } while (++w < c.length);
                        g.add(1, "months")
                    } while (++p < l);
                    if (y.directionScrolling) {
                        var C = t().startOf("day").hours(12);
                        f = g.diff(C, "months", !0),
                        "today-past" === y.direction || "past" === y.direction ? f <= 0 ? (this.disableNextMonth = !1,
                        a.removeClassName(this.container, m.disableNextMonth)) : (this.disableNextMonth = !0,
                        a.addClassName(this.container, m.disableNextMonth)) : "today-future" !== y.direction && "future" !== y.direction || (f > y.months ? (this.disablePreviousMonth = !1,
                        a.removeClassName(this.container, m.disablePreviousMonth)) : (this.disablePreviousMonth = !0,
                        a.addClassName(this.container, m.disablePreviousMonth))),
                        "today-past" === y.direction || "past" === y.direction ? f <= -11 ? (this.disableNextYear = !1,
                        a.removeClassName(this.container, m.disableNextYear)) : (this.disableNextYear = !0,
                        a.addClassName(this.container, m.disableNextYear)) : "today-future" !== y.direction && "future" !== y.direction || (f > 11 + y.months ? (this.disablePreviousYear = !1,
                        a.removeClassName(this.container, m.disablePreviousYear)) : (this.disablePreviousYear = !0,
                        a.addClassName(this.container, m.disablePreviousYear)))
                    }
                }
            };
            var i = function(e, s, i) {
                var n = [];
                "string" == typeof e ? e = e.split(s) : a.isArray(e) || (e = [e]);
                var o, r = e.length, l = 0;
                do {
                    e[l] && (o = t(e[l], [i.replace("YYYY", "YY")].concat([i])).hours(12)).isValid() && n.push(o)
                } while (++l < r);
                return n
            };
            window.Kalendae = s;
            var a = s.util = {
                isIE8: function() {
                    return !(!/msie 8./i.test(navigator.appVersion) || /opera/i.test(navigator.userAgent) || !window.ActiveXObject || !XDomainRequest || window.msPerformance)
                },
                $: function(t) {
                    return "string" == typeof t ? document.getElementById(t) : t
                },
                $$: function(t) {
                    return document.querySelectorAll(t)
                },
                make: function(t, e, s) {
                    var i, a = document.createElement(t);
                    if (e)
                        for (i in e)
                            e.hasOwnProperty(i) && a.setAttribute(i, e[i]);
                    return s && s.appendChild(a),
                    a
                },
                isVisible: function(t) {
                    return t.offsetWidth > 0 || t.offsetHeight > 0
                },
                getStyle: function(t, e) {
                    var s, i;
                    return t.currentStyle ? s = t.currentStyle[e] : window.getComputedStyle && (s = (i = window.getComputedStyle(t, null)) ? i[e] : ""),
                    s
                },
                domReady: function(t) {
                    var e = document.readyState;
                    "complete" === e || "interactive" === e ? t() : setTimeout((function() {
                        a.domReady(t)
                    }
                    ), 9)
                },
                addEvent: function(t, e, s) {
                    var i = function(e) {
                        var i = (e = e || window.event).target || e.srcElement
                          , a = s.apply(t, [e, i]);
                        return !1 === a && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1,
                        e.cancelBubble = !0)),
                        a
                    };
                    return t.attachEvent ? t.attachEvent("on" + e, i) : t.addEventListener(e, i, !1),
                    i
                },
                removeEvent: function(t, e, s) {
                    t.detachEvent ? t.detachEvent("on" + e, s) : t.removeEventListener(e, s, !1)
                },
                fireEvent: function(t, e) {
                    if (document.createEvent) {
                        var s = document.createEvent("HTMLEvents");
                        s.initEvent(e, !0, !0),
                        t.dispatchEvent(s)
                    } else
                        document.createEventObject ? t.fireEvent("on" + e) : "function" == typeof t["on" + e] && t["on" + e]()
                },
                hasClassName: function(t, e) {
                    if (!(t = a.$(t)))
                        return !1;
                    var s = t.className;
                    return s.length > 0 && (s == e || new RegExp("(^|\\s)" + e + "(\\s|$)").test(s))
                },
                addClassName: function(t, e) {
                    (t = a.$(t)) && (a.hasClassName(t, e) || (t.className += (t.className ? " " : "") + e))
                },
                removeClassName: function(t, e) {
                    (t = a.$(t)) && (t.className = a.trimString(t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")))
                },
                isFixed: function(t) {
                    do {
                        if ("fixed" === a.getStyle(t, "position"))
                            return !0
                    } while (t = t.offsetParent);
                    return !1
                },
                scrollContainer: function(t) {
                    do {
                        var e = a.getStyle(t, "overflow");
                        if ("auto" === e || "scroll" === e)
                            return t
                    } while ((t = t.parentNode) && t != window.document.body);
                    return null
                },
                getPosition: function(t, e) {
                    var s = t.getBoundingClientRect()
                      , i = e ? t.offsetLeft : s.left
                      , a = e ? t.offsetTop : s.top
                      , n = {};
                    return n[0] = n.left = i,
                    n[1] = n.top = a,
                    n
                },
                getHeight: function(t) {
                    return t.offsetHeight || t.scrollHeight
                },
                getWidth: function(t) {
                    return t.offsetWidth || t.scrollWidth
                },
                trimString: function(t) {
                    return t.replace(/^\s+/, "").replace(/\s+$/, "")
                },
                merge: function() {
                    for (var t = !0 === arguments[0], e = {}, s = t ? 1 : 0, i = function(e, s) {
                        if ("object" == typeof s) {
                            for (var i in s)
                                s.hasOwnProperty(i) && (t && "object" == typeof e[i] && "object" == typeof s[i] ? _update(e[i], s[i]) : e[i] = s[i]);
                            return e
                        }
                    }; s < arguments.length; s++)
                        i(e, arguments[s]);
                    return e
                },
                isArray: function(t) {
                    return "[object Array]" == Object.prototype.toString.call(t)
                }
            };
            "function" == typeof document.addEventListener && s.util.domReady((function() {
                for (var t, e, i, n = a.$$(".auto-kal"), o = n.length; o--; )
                    e = null == (i = (t = n[o]).getAttribute("data-kal")) || "" == i ? {} : new Function("return {" + i + "};")(),
                    "INPUT" === t.tagName ? new s.Input(t,e) : new s(a.merge(e, {
                        attachTo: t
                    }))
            }
            )),
            s.Input = function(e, n) {
                if ("function" == typeof document.addEventListener || a.isIE8()) {
                    var o, r, l = this.input = a.$(e), d = !1;
                    if (!l || "INPUT" !== l.tagName)
                        throw "First argument for Kalendae.Input must be an <input> element or a valid element id.";
                    var u = this
                      , c = u.classes
                      , h = u.settings = a.merge(u.defaults, n);
                    this._events = {},
                    h.attachTo = window.document.body,
                    h.selected ? o = !0 : h.selected = l.value,
                    s.call(u, h),
                    h.closeButton && (r = a.make("a", {
                        class: c.closeButton
                    }, u.container),
                    a.addEvent(r, "click", (function() {
                        l.blur()
                    }
                    ))),
                    o && (l.value = u.getSelected());
                    var f = u.container
                      , g = !1;
                    f.style.display = "none",
                    a.addClassName(f, c.positioned),
                    this._events.containerMouseDown = a.addEvent(f, "mousedown", (function(t, e) {
                        g = !0
                    }
                    )),
                    this._events.documentMousedown = a.addEvent(window.document, "mousedown", (function(t, e) {
                        g = !1
                    }
                    )),
                    this._events.inputFocus = a.addEvent(l, "focus", (function() {
                        d = !0,
                        u.setSelected(this.value),
                        d = !1,
                        u.show()
                    }
                    )),
                    this._events.inputBlur = a.addEvent(l, "blur", (function() {
                        g && a.isIE8() ? (g = !1,
                        l.focus()) : u.hide()
                    }
                    )),
                    this._events.inputKeyup = a.addEvent(l, "keyup", (function(e) {
                        d = !0;
                        var s = i(this.value, u.settings.parseSplitDelimiter, u.settings.format);
                        s && s.length && s[0] && s[0].year() > 1e3 ? u.setSelected(this.value) : (u.setSelected("", null),
                        u.viewStartDate = t(u.defaultView),
                        u.draw()),
                        d = !1
                    }
                    ));
                    var m = a.scrollContainer(l);
                    m && a.addEvent(m, "scroll", (function(t) {
                        l.blur()
                    }
                    )),
                    u.subscribe("change", (function() {
                        d || (l.value = u.getSelected(),
                        a.fireEvent(l, "change"))
                    }
                    ))
                }
            }
            ,
            s.Input.prototype = a.merge(s.prototype, {
                defaults: a.merge(s.prototype.defaults, {
                    format: "MM/DD/YYYY",
                    side: "bottom",
                    closeButton: !0,
                    offsetLeft: 0,
                    offsetTop: 0
                }),
                classes: a.merge(s.prototype.classes, {
                    positioned: "k-floating",
                    closeButton: "k-btn-close"
                }),
                show: function() {
                    var t = this.container
                      , e = t.style
                      , s = this.input
                      , i = a.getPosition(s)
                      , n = a.scrollContainer(s)
                      , o = n ? n.scrollTop : 0
                      , r = n ? n.scrollLeft : 0
                      , l = this.settings;
                    switch (e.display = "",
                    l.side) {
                    case "left":
                        e.left = i.left - a.getWidth(t) + l.offsetLeft - r + "px",
                        e.top = i.top + l.offsetTop - o + "px";
                        break;
                    case "right":
                        e.left = i.left + a.getWidth(s) - r + "px",
                        e.top = i.top + l.offsetTop - o + "px";
                        break;
                    case "top":
                        e.left = i.left + l.offsetLeft - r + "px",
                        e.top = i.top - a.getHeight(t) + l.offsetTop - o + "px";
                        break;
                    case "bottom right":
                        e.left = i.left - a.getWidth(t) + a.getWidth(s) + l.offsetLeft + "px",
                        e.top = i.top + a.getHeight(s) + l.offsetTop - o + "px";
                        break;
                    default:
                        e.left = i.left + l.offsetLeft - r + "px",
                        e.top = i.top + a.getHeight(s) + l.offsetTop - o + "px"
                    }
                    e.position = a.isFixed(s) ? "fixed" : "absolute",
                    this.publish("show", this)
                },
                hide: function() {
                    this.container.style.display = "none",
                    this.publish("hide", this)
                },
                destroy: function() {
                    var t = this.container
                      , e = this.input;
                    a.removeEvent(t, "mousedown", this._events.containerMousedown),
                    a.removeEvent(window.document, "mousedown", this._events.documentMousedown),
                    a.removeEvent(e, "focus", this._events.inputFocus),
                    a.removeEvent(e, "blur", this._events.inputBlur),
                    a.removeEvent(e, "keyup", this._events.inputKeyup),
                    t.parentNode && t.parentNode.removeChild(t)
                }
            });
            var n = function(t) {
                t || (t = this);
                var e = t.c_ || {};
                t.publish = function(t, s, i) {
                    for (var a, n = e[t], o = n ? n.length : 0; o--; )
                        if ("boolean" == typeof (a = n[o].apply(s, i || [])))
                            return a
                }
                ,
                t.subscribe = function(t, s, i) {
                    return e[t] || (e[t] = []),
                    i ? e[t].push(s) : e[t].unshift(s),
                    [t, s]
                }
                ,
                t.unsubscribe = function(t) {
                    for (var s = e[t[0]], i = t[1], a = s ? s.length : 0; a--; )
                        s[a] === i && s.splice(a, 1)
                }
            };
            if (void 0 !== t && (s.moment = t),
            !s.moment) {
                if (!window.moment)
                    throw "Kalendae requires moment.js. You must use kalendae.standalone.js if moment is not available on the page.";
                s.moment = window.moment
            }
            return (t = s.moment).fn.yearDay = function(t) {
                var e = Math.floor(this._d / 864e5);
                return void 0 === t ? e : this.add({
                    d: t - e
                })
            }
            ,
            void 0 === o || "function" != typeof document.addEventListener && !a.isIE8() || (o.fn.kalendae = function(t) {
                return this.each((function(e, i) {
                    "INPUT" === i.tagName ? o(i).data("kalendae", new s.Input(i,t)) : o(i).data("kalendae", new s(o.extend({}, {
                        attachTo: i
                    }, t)))
                }
                )),
                this
            }
            ),
            s
        }
        ,
        void 0 === (n = i.apply(e, a)) || (t.exports = n);
        var r = "vendor/kalendae/kalendae";
        window.define(r, (function() {
            var e = "undefined"
              , s = typeof __webpack_exports__ === e ? typeof n === e ? typeof t === e ? void 0 : t.exports : n : __webpack_exports__;
            return s && s.default || s
        }
        )),
        window.require([r])
    }
}]);
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "build_2025_07_01_16_55_40_release"
},
function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "6554eff0-fd98-4273-aac1-06a2b0f95be9",
        t._sentryDebugIdIdentifier = "sentry-dbid-6554eff0-fd98-4273-aac1-06a2b0f95be9")
    } catch (t) {}
}();
//# sourceMappingURL=42019.b707635e7737ef8d9398.js.map
