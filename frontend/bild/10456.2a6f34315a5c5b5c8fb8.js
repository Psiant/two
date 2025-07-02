(window.webpackChunk = window.webpackChunk || []).push([[10456], {
    130860: (e, t, s) => {
        var i;
        function r() {
            "use strict";
            var e, t, s, i = window.crypto || window.msCrypto;
            if (!e && i && i.getRandomValues)
                try {
                    var r = new Uint8Array(16);
                    s = e = function() {
                        return i.getRandomValues(r),
                        r
                    }
                    ,
                    e()
                } catch (e) {}
            if (!e) {
                var n = new Array(16);
                t = e = function() {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                        n[t] = e >>> ((3 & t) << 3) & 255;
                    return n
                }
                ,
                "undefined" != typeof console && console.warn && console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")
            }
            for (var o = "function" == typeof Buffer ? Buffer : Array, a = [], l = {}, u = 0; u < 256; u++)
                a[u] = (u + 256).toString(16).substr(1),
                l[a[u]] = u;
            function d(e, t) {
                var s = t || 0
                  , i = a;
                return i[e[s++]] + i[e[s++]] + i[e[s++]] + i[e[s++]] + "-" + i[e[s++]] + i[e[s++]] + "-" + i[e[s++]] + i[e[s++]] + "-" + i[e[s++]] + i[e[s++]] + "-" + i[e[s++]] + i[e[s++]] + i[e[s++]] + i[e[s++]] + i[e[s++]] + i[e[s++]]
            }
            var c = e()
              , h = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]
              , _ = 16383 & (c[6] << 8 | c[7])
              , p = 0
              , f = 0;
            function m(t, s, i) {
                var r = s && i || 0;
                "string" == typeof t && (s = "binary" === t ? new o(16) : null,
                t = null);
                var n = (t = t || {}).random || (t.rng || e)();
                if (n[6] = 15 & n[6] | 64,
                n[8] = 63 & n[8] | 128,
                s)
                    for (var a = 0; a < 16; a++)
                        s[r + a] = n[a];
                return s || d(n)
            }
            var g = m;
            return g.v1 = function(e, t, s) {
                var i = t && s || 0
                  , r = t || []
                  , n = null != (e = e || {}).clockseq ? e.clockseq : _
                  , o = null != e.msecs ? e.msecs : (new Date).getTime()
                  , a = null != e.nsecs ? e.nsecs : f + 1
                  , l = o - p + (a - f) / 1e4;
                if (l < 0 && null == e.clockseq && (n = n + 1 & 16383),
                (l < 0 || o > p) && null == e.nsecs && (a = 0),
                a >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                p = o,
                f = a,
                _ = n;
                var u = (1e4 * (268435455 & (o += 122192928e5)) + a) % 4294967296;
                r[i++] = u >>> 24 & 255,
                r[i++] = u >>> 16 & 255,
                r[i++] = u >>> 8 & 255,
                r[i++] = 255 & u;
                var c = o / 4294967296 * 1e4 & 268435455;
                r[i++] = c >>> 8 & 255,
                r[i++] = 255 & c,
                r[i++] = c >>> 24 & 15 | 16,
                r[i++] = c >>> 16 & 255,
                r[i++] = n >>> 8 | 128,
                r[i++] = 255 & n;
                for (var m = e.node || h, g = 0; g < 6; g++)
                    r[i + g] = m[g];
                return t || d(r)
            }
            ,
            g.v4 = m,
            g.parse = function(e, t, s) {
                var i = t && s || 0
                  , r = 0;
                for (t = t || [],
                e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                    r < 16 && (t[i + r++] = l[e])
                }
                )); r < 16; )
                    t[i + r++] = 0;
                return t
            }
            ,
            g.unparse = d,
            g.BufferClass = o,
            g._rng = e,
            g._mathRNG = t,
            g._whatwgRNG = s,
            g
        }
        e.exports ? e.exports = new r : void 0 === (i = function() {
            return new r
        }
        .call(t, s, t, e)) || (e.exports = i);
        var n = "js-uuid";
        window.define(n, (function() {
            var t = "undefined"
              , s = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return s && s.default || s
        }
        )),
        window.require([n])
    }
    ,
    826244: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => x
        });
        var i = s(661533)
          , r = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , a = s(460159)
          , l = s.n(a)
          , u = s(161320)
          , d = s.n(u)
          , c = s(678640)
          , h = s(880774)
          , _ = s(811707)
          , p = s(521466)
          , f = s(676225)
          , m = s(929658)
          , g = s(14334)
          , v = s(510475)
          , y = s(696884)
          , b = s(689118);
        function k(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var s = 0, i = new Array(t); s < t; s++)
                i[s] = e[s];
            return i
        }
        function P(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function C(e, t, s) {
            return C = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, s) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = w(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(s || e) : r.value
                }
            }
            ,
            C(e, t, s || e)
        }
        function w(e) {
            return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            w(e)
        }
        function E(e, t) {
            return E = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            E(e, t)
        }
        function S(e) {
            return function(e) {
                if (Array.isArray(e))
                    return k(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return k(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === s && e.constructor && (s = e.constructor.name),
                    "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? k(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function $(e) {
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
                var s, i = w(e);
                if (t) {
                    var r = w(this).constructor;
                    s = Reflect.construct(i, arguments, r)
                } else
                    s = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((s = t) && "undefined" != typeof Symbol && s.constructor === Symbol ? "symbol" : typeof s) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var s
                }(this, s)
            }
        }
        var x = function(e) {
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
                t && E(e, t)
            }(n, e);
            var t, s, i = $(n);
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                i.apply(this, arguments)
            }
            return t = n,
            s = [{
                key: "preload_templates",
                get: function() {
                    return [this.template]
                }
            }, {
                key: "initialize",
                value: function(e) {
                    var t = this
                      , s = e.$container
                      , i = e.applyFilter
                      , r = e.openCallback
                      , a = e.closeCallback
                      , l = e.setChooseOptions
                      , u = e.toggleSearchClearButton
                      , d = e.getPresets
                      , c = e.onAfterRender;
                    this.uuid_task_time = "7da05ed4-4a9d-48a9-a92f-efc81aff9e31",
                    this.uuid_unsorted = "49ae13e7-b75a-4fc0-9f39-c5c2812dcb34",
                    this.uuid_source_chat = "be2d1c42-351b-40d0-97b7-5d2e1314b079",
                    this.is_active_preset = "all_notification",
                    this.$container = s,
                    this.created_state = {},
                    this.core_provider = [],
                    this.widgets_provider = [],
                    this.template = "/tmpl/filter/in_search/main.twig",
                    this.url = "/v3/inbox/list",
                    this.element_type = "inbox",
                    this.fetch_headers = {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    },
                    this.getPresets = o().isFunction(d) ? d : Promise.resolve,
                    this.applyFilter = o().isFunction(i) ? i : o().noop,
                    this.openCallback = o().isFunction(r) ? r : o().noop,
                    this.closeCallback = o().isFunction(a) ? a : o().noop,
                    this.setChooseOptions = o().isFunction(l) ? l : o().noop,
                    this.toggleSearchClearButton = o().isFunction(u) ? u : o().noop,
                    this.onAfterRender = o().isFunction(c) ? c : o().noop,
                    C(w(n.prototype), "initialize", this).call(this),
                    o().isFunction(this.getPresets) ? this.getPresets().then((function(e) {
                        t.presets = t.clearPresets(e),
                        t.render()
                    }
                    ), (function() {
                        t.presets = t.clearPresets(),
                        t.render()
                    }
                    )) : (this.presets = this.clearPresets(),
                    this.render())
                }
            }, {
                key: "getPresetEntity",
                value: function() {
                    return "talks"
                }
            }, {
                key: "document_events",
                value: function() {
                    return {
                        "click .inbox-filter__overlay": "close"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        "click .js-filter-preset-link:not(.filter__list__item-edit-mode)": "onClickPreset",
                        "click .js-search-filter-clear": "onCleanFields",
                        "click .js-filter-field-clear": "onCleanField",
                        "click .js-modal-accept": "applyEvents"
                    }
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        filter_apply: "#filter_apply",
                        chat_source_field: ".js-inbox-field__chat-source",
                        presets_list: ".js-filter-list",
                        preset_item: '.filter__list__item[data-id="%s"]',
                        date_field: ".date_filter"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        preset_selected: "filter__list__item-selected",
                        filter_params_manage: "filter__params_manage",
                        ribbon_text: "feed-search__ribbon-text"
                    }
                }
            }, {
                key: "clearPresets",
                value: function(e) {
                    var t = this;
                    return o().reduce(e, (function(e, s) {
                        return s.payload["chat_source[]"] ? (o().isArray(s.payload["provider[]"]) && (o().isArray(s.payload["chat_source[]"]) ? s.payload["provider[]"] = s.payload["provider[]"].concat(s.payload["chat_source[]"]) : s.payload["provider[]"].push(s.payload["chat_source[]"])),
                        o().isString(s.payload["provider[]"]) && (s.payload["provider[]"] = [s.payload["provider[]"]].concat(s.payload["chat_source[]"])),
                        s.payload["provider[]"] || (s.payload["provider[]"] = s.payload["chat_source[]"]),
                        e.push(o().extend({
                            payload: o().omit(s.payload, "chat_source[]")
                        }, s)),
                        delete s.payload["chat_source[]"]) : e.push(s),
                        o().isArray(s.payload["provider[]"]) && o().includes(s.payload["provider[]"], t.uuid_unsorted) && (s.payload["provider[]"] = o().without(s.payload["provider[]"], t.uuid_unsorted)),
                        o().isString(s.payload["provider[]"]) && s.payload["provider[]"] === t.uuid_unsorted && delete s.payload["provider[]"],
                        e
                    }
                    ), [])
                }
            }, {
                key: "open",
                value: function() {
                    this.$el.hasClass("hidden") && (this.$el.removeClass("hidden").prepareTransition().addClass("visible"),
                    this.isOpen = !0,
                    this.openCallback(),
                    this.form && this.form.model && (this.created_state = this.form.model.toJSON()))
                }
            }, {
                key: "hide",
                value: function() {
                    this.$el.addClass("hidden").removeClass("visible"),
                    this.isOpen = !1,
                    this.closeCallback()
                }
            }, {
                key: "close",
                value: function() {
                    this.$el.hasClass("hidden") || (this.hide(),
                    this.apply(this.wasChange()))
                }
            }, {
                key: "wasChange",
                value: function() {
                    return !(!this.form || !this.form.model) && o().isEqual(this.created_state, this.form.model.toJSON())
                }
            }, {
                key: "applyEvents",
                value: function() {
                    this.apply()
                }
            }, {
                key: "apply",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || this.applyFilter(),
                    this.hide(),
                    this.form && (this.form.model.deepCloneDefaults(),
                    this.form.checkChanges())
                }
            }, {
                key: "fill",
                value: function(e) {
                    this._findElem("date_field").trigger("date-filter:clear"),
                    this.form.model.set(o().extend(o().reduce(this.form.model.toJSON(), (function(e, t, s) {
                        return e[s] = "",
                        e
                    }
                    ), {}), e), {
                        silent: !0
                    }),
                    this.form.model.deepCloneDefaults(),
                    this.form.revert(),
                    this.checkChangesInModel()
                }
            }, {
                key: "onClickPreset",
                value: function(e) {
                    var t = e.currentTarget.dataset.id;
                    e.stopPropagation(),
                    e.preventDefault(),
                    this.is_active_preset = t,
                    this.fill(o().find(this.presets, (function(e) {
                        return e.id === t
                    }
                    )).payload),
                    this.apply(!1)
                }
            }, {
                key: "cleanPreset",
                value: function() {
                    this.is_active_preset = "",
                    this._findElem("preset_selected").removeClass(this._class("preset_selected"))
                }
            }, {
                key: "getPayload",
                value: function(e) {
                    var t = this;
                    return e["provider[]"] = o().filter(o().isString(e["provider[]"]) ? [e["provider[]"]] : e["provider[]"], (function(s) {
                        return !o().contains(o().pluck(t.sources, "id"), s) || (e["chat_source[]"] = [s].concat(e["chat_source[]"] || []),
                        !1)
                    }
                    )),
                    o().isEmpty(e["provider[]"]) || (e["provider[]"] = (e["provider[]"] || []).concat(e["provider[]"])),
                    o().isEmpty(e["chat_source[]"]) || o().includes(e["provider[]"], this.uuid_source_chat) || (e["provider[]"] = [this.uuid_source_chat].concat(e["provider[]"] || [])),
                    o().includes(e["provider[]"], this.uuid_source_chat) && e["provider[]"].push(this.uuid_unsorted),
                    o().isArray(e["provider[]"]) && (e["provider[]"] = o().uniq(e["provider[]"])),
                    o().reduce(e, (function(e, t, s) {
                        return o().isEmpty(t) || (e[s] = t),
                        e
                    }
                    ), {})
                }
            }, {
                key: "getFilterState",
                value: function() {
                    var e = this
                      , t = {};
                    return this.form && this.form.model ? (o().each(this.form.model.toJSON(), (function() {
                        for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
                            i[r] = arguments[r];
                        e.filterStateMutator.apply(e, [t].concat(S(i)))
                    }
                    )),
                    o().isEmpty(t.chat_source) || o().includes(t.provider, this.uuid_source_chat) || (t.provider = [this.uuid_source_chat].concat(t.provider || [])),
                    o().includes(t.provider, this.uuid_source_chat) && t.provider.push(this.uuid_unsorted),
                    t) : {}
                }
            }, {
                key: "filterStateMutator",
                value: function(e, t, s) {
                    var i = this;
                    switch (s) {
                    case "label[]":
                        s = "label";
                        break;
                    case "is_read[]":
                        s = "is_read";
                        break;
                    case "provider[]":
                        !o().isEmpty(t) && o().isString(t) && (t = [t]),
                        t = o().filter(t, (function(t) {
                            return !o().contains(o().pluck(i.sources, "id"), t) || (e.chat_source = [t].concat(e.chat_source || []),
                            !1)
                        }
                        ));
                        break;
                    case "updated_at_to":
                    case "updated_at_from":
                        return void (o().isEmpty(t) || (e.updated_at || (e.updated_at = {}),
                        "updated_at_from" === s ? e.updated_at.from = d()(t, APP.system.format.date.date).format("X") : e.updated_at.to = d()(t, APP.system.format.date.date).set({
                            hours: 23,
                            minutes: 59,
                            second: 59
                        }).format("X")));
                    case "filter[date_preset]":
                        return void (o().isEmpty(t) || (e.updated_at || (e.updated_at = {}),
                        e.updated_at = (0,
                        v.default)(t)))
                    }
                    (!o().isObject(t) && t || !o().isEmpty(t)) && (e[s.replace("[]", "")] = t)
                }
            }, {
                key: "render",
                value: function() {
                    l()._preload(this.preload_templates)().then(o().bind((function() {
                        this.fetchDataForFilter().then(o().bind((function() {
                            var e = this;
                            this.setElement(r()(l()({
                                ref: this.template
                            }).render(this.getRenderParams()))),
                            this.$el.addClass("inbox-filter"),
                            this.$container.html(this.$el),
                            this.isOpen && this.open(),
                            setTimeout((function() {
                                e.initPresets(),
                                e.initForm(),
                                e.calculateFilterParamsManagePosition(),
                                e.onAfterRender()
                            }
                            ), 0)
                        }
                        ), this))
                    }
                    ), this))
                }
            }, {
                key: "getRenderParams",
                value: function() {
                    return {
                        filter_id: "inbox_filter",
                        filter: this.filter
                    }
                }
            }, {
                key: "calculateFilterParamsManagePosition",
                value: function() {
                    var e = (0,
                    _.getScrollBarWidth)("custom-scroll");
                    this._elem("filter_params_manage").css("right", e)
                }
            }, {
                key: "fetchDataForFilter",
                value: function() {
                    return Promise.all([this.getProviders(), this.getSources()])
                }
            }, {
                key: "getSources",
                value: function() {
                    return APP.constant("account").is_chats_inbox_enabled ? (this.sources_native = {},
                    this.sources_external = {},
                    Promise.resolve()) : fetch("/ajax/v2/sources/custom", o().extend({
                        redirect: "manual"
                    }, this.fetch_headers)).then((function(e) {
                        if (e.ok && 200 === e.status)
                            return e.json()
                    }
                    )).then(o().bind((function(e) {
                        (0,
                        c.hasKeys)(e, ["sources", "native"]) && (this.sources_native = e.sources.native),
                        (0,
                        c.hasKeys)(e, ["sources", "external"]) && (this.sources_external = o().filter(e.sources.external, (function(e) {
                            return o().contains(e.categories, 6)
                        }
                        )))
                    }
                    ), this))
                }
            }, {
                key: "initForm",
                value: function() {
                    var e = o().min(this.presets, (function(e) {
                        return e.sort
                    }
                    ));
                    this.form = this._addComponent(f.default, {
                        el: this.$("form"),
                        model: m.default.Model
                    }),
                    this.is_active_preset = e.id,
                    this.super_default = this.form.model.toJSON(),
                    this.form.model.set(e.payload),
                    this.form.model.deepCloneDefaults(),
                    this.listenTo(this.form.model, "change", o().throttle(this.checkChangesInModel, 100)),
                    this.listenTo(this.form.model, "has_changes", o().throttle(this.changeButtonActive, 100)),
                    this.listenTo(this.form.model, "has_reverted", o().throttle(this.changeButtonActive, 100)),
                    this.form.revert(),
                    this.form.model.deepCloneDefaults(),
                    this.checkChangesInModel()
                }
            }, {
                key: "initPresets",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.filter_presets = this._addComponent(g.default, o().extend({
                        el: this._elem("presets_list"),
                        filter: this,
                        getPresets: function() {
                            return o().map(e.presets, (function(t) {
                                var s = e.getPayload(t.payload);
                                return o().extend({
                                    payload: s
                                }, o().pick(t, ["name", "id", "payload", "sort"]))
                            }
                            ))
                        },
                        getPayload: o().bind((function() {
                            return this.getPayload(this.form.model.toJSON())
                        }
                        ), this),
                        updatePresets: o().bind((function(t, s) {
                            var i = o().findWhere(t, {
                                id: s
                            });
                            i && i.payload && (i.payload = o().reduce(e.form.model.toJSON(), (function(e, t, s) {
                                return o().isEmpty(t) || (e[s] = t),
                                e
                            }
                            ), {})),
                            e.presets = e.clearPresets(JSON.parse(JSON.stringify(t))),
                            e.checkChangesInModel()
                        }
                        ))
                    }, t))
                }
            }, {
                key: "changeButtonActive",
                value: function() {
                    var e = this.form.hasChanges();
                    this._findElem("filter_apply").trigger("button:" + (e ? "enable" : "disable")),
                    this.$el.toggleClass("filter-search_has-changes", e),
                    this.toggleSearchClearButton()
                }
            }, {
                key: "onCleanFields",
                value: function(e, t) {
                    this.cleanFields(t)
                }
            }, {
                key: "cleanFields",
                value: function(e) {
                    if (this.form && this.form.model) {
                        this.cleanDateField(this.$el.find('[data-tmpl="date"] input:not(.js-filter-clear-skip)'));
                        var t = o().propertyOf(this.presets)([0, "payload"]) || {};
                        this.form.model.set(o().extend({}, this.super_default, t)),
                        this.form.model.deepCloneDefaults(),
                        this.form.revert(),
                        e || (this.hide(),
                        this.applyFilter())
                    }
                }
            }, {
                key: "onCleanField",
                value: function(e) {
                    var t = r()(e.currentTarget).closest(".filter__custom_settings__item");
                    this.cleanField(t)
                }
            }, {
                key: "cleanDateField",
                value: function() {
                    this._findElem("date_field").trigger("date-filter:clear"),
                    this.form && this.form.model && this.form.model.set({
                        updated_at_from: "",
                        updated_at_to: "",
                        "filter[date_preset]": ""
                    })
                }
            }, {
                key: "cleanField",
                value: function(e) {
                    var t = e.find("input:not(.js-filter-clear-skip)");
                    switch (e.data("tmpl")) {
                    case "date":
                        this.cleanDateField();
                        break;
                    case "text":
                        t.val("").trigger("change");
                        break;
                    case "users":
                        this.usersSelectClear(!1, e);
                        break;
                    default:
                        t.prop("checked", !1).removeAttr("checked").trigger("change")
                    }
                    this.form.checkChanges()
                }
            }, {
                key: "checkChangesInModel",
                value: function() {
                    var e = this
                      , t = []
                      , s = [];
                    this.checkCleanPreset(),
                    o().each(this.form.model.attributes, (function(i, r) {
                        var n = o().isArray(i) ? o().isEqual(e.attrs_default[r], i) : e.attrs_default[r] === i;
                        !i && o().isEmpty(e.attrs_default[r]) && (n = !0),
                        n ? s.push(r) : t.push(r)
                    }
                    ), this);
                    var i = this.is_active_preset ? o().find(this.presets, (function(t) {
                        return t.id === e.is_active_preset
                    }
                    )) : {};
                    o().isEmpty(i) || (i = o().extend({
                        is_default: this.presets[0].id === i.id
                    }, i)),
                    this.setChooseOptions(o().pick(this.form.model.toJSON(), t), i),
                    this.toggleClassGlow({
                        items: s,
                        toggle: !1
                    }),
                    this.super_change && this.toggleClassGlow({
                        items: t,
                        toggle: !0
                    }),
                    this.changeButtonActive()
                }
            }, {
                key: "checkCleanPreset",
                value: function() {
                    var e = o().omit(this.form.model.toJSON(), (function(e) {
                        return !e
                    }
                    ))
                      , t = o().find(this.presets, (function(t) {
                        var s = o().reduce(t.payload, (function(e, t, s) {
                            var i = !1;
                            switch (!0) {
                            case o().isArray(t):
                                i = o().isEmpty(o().compact(t));
                                break;
                            case o().isObject(t):
                                i = o().isEmpty(t);
                                break;
                            default:
                                i = !t
                            }
                            return i || (e[s] = t),
                            e
                        }
                        ), {});
                        return o().keys(e).length === o().keys(s).length && o().every(e, (function(e, t) {
                            if (o().isArray(e) && o().isArray(s[t])) {
                                var i = o().intersection(s[t], e);
                                return e.length === i.length && s[t].length === i.length
                            }
                            return e === s[t]
                        }
                        ))
                    }
                    ));
                    t ? (this.filter_presets.highlightSave(!1),
                    this._findElem("preset_selected").removeClass(this._class("preset_selected")),
                    this._findElem("preset_item", t.id).addClass(this._class("preset_selected")),
                    this.is_active_preset = t.id) : (this.cleanPreset(),
                    this.filter_presets.highlightSave(!0))
                }
            }, {
                key: "attrs_default",
                get: function() {
                    var e = {};
                    return this.is_default_preset_selected && (e = this.presets[0].payload),
                    o().extend({}, this.super_default, e)
                }
            }, {
                key: "is_default_preset_selected",
                get: function() {
                    return !!this.is_active_preset && this.is_active_preset === o().propertyOf(this.presets)([0, "id"])
                }
            }, {
                key: "super_change",
                get: function() {
                    return !this.form || !this.form.model || !o().isEqual(this.attrs_default, this.form.model.toJSON())
                }
            }, {
                key: "toggleClassGlow",
                value: function(e) {
                    var t = this
                      , s = e.items
                      , i = e.toggle;
                    o().each(s, (function(e) {
                        t.getFieldByName({
                            name: e
                        }).toggleClass("glow", i)
                    }
                    ), this)
                }
            }, {
                key: "getFieldByName",
                value: function(e) {
                    var t = e.name;
                    return this.$el.find('[name="'.concat(t, '"]')).closest(".filter__custom_settings__item")
                }
            }, {
                key: "getProviders",
                value: function() {
                    return fetch("/v3/inbox/settings?lang=".concat(APP.lang_id).concat(APP.constant("account").is_chats_inbox_enabled ? "&filter[exclude][chats]=true" : ""), this.fetch_headers).then((function(e) {
                        if (e.ok)
                            return e.json()
                    }
                    )).then(o().bind((function(e) {
                        var t = this;
                        (0,
                        c.hasKeys)(e, ["_embedded", "core"]) && (this.core_provider = o().filter(e._embedded.core, (function(e) {
                            return e.uuid !== t.uuid_unsorted && o().contains(y.default.FIXED_CORE_PROVIDERS, e.uuid)
                        }
                        ))),
                        (0,
                        c.hasKeys)(e, ["_embedded", "widgets"]) && (this.widgets_provider = e._embedded.widgets)
                    }
                    ), this))
                }
            }, {
                key: "idIsDefaults",
                value: function(e) {
                    return o().contains(["all_notification", "unread", "during_for_today", "starred"], e)
                }
            }, {
                key: "getModel",
                value: function() {
                    if (this.form && this.form.model)
                        return this.form.model.toJSON()
                }
            }, {
                key: "filter",
                get: function() {
                    return {
                        items: this.presets_from_filter,
                        url: this.url,
                        element_type: this.element_type,
                        is_render_custom_field: !0,
                        custom_fields: this.custom_fields
                    }
                }
            }, {
                key: "providers",
                get: function() {
                    var e = this
                      , t = [].concat(this.core_provider, this.widgets_provider);
                    return o().find(this.core_provider, (function(t) {
                        return t.uuid === e.uuid_task_time && (t.name = t.name.replace("#TIME#", (0,
                        h.i18n)("period time").toLowerCase()),
                        !0)
                    }
                    ), this),
                    o().mapObject(t, (function(e) {
                        return {
                            id: e.uuid,
                            name: "provider",
                            option: e.name
                        }
                    }
                    ))
                }
            }, {
                key: "sources",
                get: function() {
                    var e = o().extend({}, this.sources_external, this.sources_native);
                    return o().mapObject(e, (function(e) {
                        return {
                            id: e.source,
                            name: "provider",
                            option: "".concat((0,
                            h.i18n)("Messages inbox filter"), " ").concat(e.name)
                        }
                    }
                    ))
                }
            }, {
                key: "provider_with_sources",
                get: function() {
                    var e, t = this, s = o().toArray(this.providers), i = o().toArray(this.sources), r = o().findIndex(s, (function(e) {
                        return e.id === t.uuid_source_chat
                    }
                    ));
                    return (e = s).splice.apply(e, [r + 1, 0].concat(S(i))),
                    s
                }
            }, {
                key: "custom_fields",
                get: function() {
                    return [{
                        template: "checkboxes_dropdown",
                        class_name: "filter__custom_settings__item_provider",
                        has_custom_title: !0,
                        custom_title: (0,
                        h.i18n)("All sources"),
                        custom_title_empty: (0,
                        h.i18n)("All sources"),
                        items: this.provider_with_sources
                    }, {
                        template: "date",
                        from_name: "updated_at_from",
                        to_name: "updated_at_to",
                        save_overflow: !0,
                        title: (0,
                        h.i18n)("Any time"),
                        items: (0,
                        b.getDefaultDatePresets)()
                    }, {
                        template: "checkboxes_dropdown",
                        has_custom_title: !0,
                        custom_title: (0,
                        h.i18n)("Status"),
                        custom_title_empty: (0,
                        h.i18n)("Status"),
                        items: [{
                            id: "true",
                            name: "is_read",
                            option: (0,
                            h.i18n)("Read message")
                        }, {
                            id: "false",
                            name: "is_read",
                            option: (0,
                            h.i18n)("Unread")
                        }, {
                            id: "true",
                            name: "label",
                            option: (0,
                            h.i18n)("Starred")
                        }]
                    }]
                }
            }, {
                key: "presets_from_filter",
                get: function() {
                    return o().mapObject(this.presets, (function(e) {
                        return o().extend({
                            settings: e.payload,
                            label: e.name
                        }, e)
                    }
                    ))
                }
            }, {
                key: "presets",
                get: function() {
                    var e = this._preset.concat(this.custom_presets)
                      , t = o().min(e, (function(e) {
                        return e.sort
                    }
                    )) || {};
                    return e = o().each(e, (function(e) {
                        return e.selected = e.id === t.id
                    }
                    )),
                    o().sortBy(e, (function(e) {
                        return e.sort
                    }
                    ))
                },
                set: function(e) {
                    var t = this;
                    this._preset = o().reduce(e, (function(e, s) {
                        return s.can_edit = !0,
                        s.bookmark = !0,
                        t.idIsDefaults(s.id) || e.push(s),
                        e
                    }
                    ), []),
                    this.custom_presets = e
                }
            }, {
                key: "custom_presets",
                get: function() {
                    return this._custom_presets
                },
                set: function(e) {
                    var t = [{
                        id: "all_notification",
                        name: (0,
                        h.i18n)("All"),
                        system_type: !0,
                        payload: {},
                        sort: 1
                    }, {
                        id: "unread",
                        name: (0,
                        h.i18n)("unread"),
                        system_type: !0,
                        payload: {
                            "is_read[]": "false"
                        },
                        sort: 2
                    }, {
                        id: "during_for_today",
                        name: (0,
                        h.i18n)("Today"),
                        system_type: !0,
                        payload: {
                            "filter[date_preset]": "current_day"
                        },
                        sort: 3
                    }, {
                        id: "starred",
                        name: (0,
                        h.i18n)("Starred"),
                        system_type: !0,
                        payload: {
                            "label[]": "true"
                        },
                        sort: 4
                    }];
                    this._custom_presets = o().reduce(t, (function(t, s) {
                        var i = e.find((function(e) {
                            return e.id === s.id
                        }
                        ));
                        return t.push(o().extend(s, {
                            sort: i ? i.sort : s.sort
                        })),
                        t
                    }
                    ), [])
                }
            }],
            s && P(t.prototype, s),
            n
        }(p.default)
          , A = "../build/transpiled/components/base/inbox/filter";
        window.define(A, (function() {
            var e = "undefined"
              , s = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return s && s.default || s
        }
        )),
        window.require([A])
    }
    ,
    676225: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => c
        });
        var i = s(55188)
          , r = s.n(i)
          , n = s(929658)
          , o = s(661533);
        function a(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e) {
            return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            l(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            u(e, t)
        }
        function d(e) {
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
                var s, i = l(e);
                if (t) {
                    var r = l(this).constructor;
                    s = Reflect.construct(i, arguments, r)
                } else
                    s = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((s = t) && "undefined" != typeof Symbol && s.constructor === Symbol ? "symbol" : typeof s) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var s
                }(this, s)
            }
        }
        const c = function(e) {
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
                t && u(e, t)
            }(l, e);
            var t, s, i = d(l);
            function l() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l),
                i.apply(this, arguments)
            }
            return t = l,
            s = [{
                key: "setInputValue",
                value: function(e, t, s) {
                    var i = e.attr("type");
                    if (s = s || e.attr("name"),
                    !r().contains(["updated_at_from", "updated_at_to"], s) || t) {
                        switch (i) {
                        case "checkbox":
                        case "radio":
                            r().each(e, (function(s) {
                                var n = s.value
                                  , a = r().isArray(t) ? r().contains(t, n) : t === n;
                                o(s).prop("checked", a),
                                "radio" === i && (e = a ? o(s) : e)
                            }
                            ));
                            break;
                        default:
                            e.val(t)
                        }
                        e.trigger("change").trigger("controls:change"),
                        this.setModelValue(e)
                    }
                }
            }, {
                key: "setModelValue",
                value: function(e) {
                    var t = e.attr("name");
                    if ("filter[date][type]" !== t && "date[type]" !== t || "created" !== e.val())
                        return n.default.View.prototype.setModelValue.apply(this, arguments);
                    this.model.set(t, "")
                }
            }, {
                key: "revert",
                value: function() {
                    var e = this;
                    this.model.attributes = JSON.parse(JSON.stringify(this.model.defaults)),
                    r().each(r().clone(this.model.attributes), (function(t, s) {
                        e.setInputValue(e.$(':input[name="'.concat(s, '"]')), t, s)
                    }
                    )),
                    this.model.trigger("has_reverted", {
                        type: "has_reverted"
                    })
                }
            }],
            s && a(t.prototype, s),
            l
        }(n.default.View)
    }
    ,
    14334: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => k
        });
        var i = s(460159)
          , r = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , a = s(130860)
          , l = s.n(a)
          , u = s(803263)
          , d = s(956799)
          , c = s(661533);
        function h(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function p(e, t, s) {
            return t && _(e.prototype, t),
            s && _(e, s),
            e
        }
        function f(e, t, s) {
            return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, s) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(s || e) : r.value
                }
            }
            ,
            f(e, t, s || e)
        }
        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            m(e)
        }
        function g(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && v(e, t)
        }
        function v(e, t) {
            return v = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            v(e, t)
        }
        function y(e) {
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
                var s, i = m(e);
                if (t) {
                    var r = m(this).constructor;
                    s = Reflect.construct(i, arguments, r)
                } else
                    s = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((s = t) && "undefined" != typeof Symbol && s.constructor === Symbol ? "symbol" : typeof s) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var s
                }(this, s)
            }
        }
        var b = function(e) {
            g(s, e);
            var t = y(s);
            function s() {
                return h(this, s),
                t.apply(this, arguments)
            }
            return p(s, [{
                key: "removeRequest",
                value: function() {
                    this.afterRemove()
                }
            }]),
            s
        }(d.default)
          , k = function(e) {
            g(s, e);
            var t = y(s);
            function s() {
                return h(this, s),
                t.apply(this, arguments)
            }
            return p(s, [{
                key: "events",
                value: function() {
                    var e = o().extend({}, o().result(u.default.prototype, "events", {}));
                    return e["click ".concat(this._selector("editing_item"))] = "stopPropagationOnEditingItem",
                    e
                }
            }, {
                key: "initialize",
                value: function(e) {
                    this.fetch_headers = {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    },
                    this.getPayload = o().isFunction(e.getPayload) ? e.getPayload : o().noop,
                    this.updatePresets = o().isFunction(e.updatePresets) ? e.updatePresets : o().noop,
                    this.getPresets = o().isFunction(e.getPresets) ? e.getPresets : o().noop,
                    f(m(s.prototype), "initialize", this).call(this, e)
                }
            }, {
                key: "stopPropagationOnEditingItem",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "presetLoad",
                value: function() {
                    this.presetEditExit()
                }
            }, {
                key: "preparePresets",
                value: function(e) {
                    var t = e.data
                      , s = e.create_id
                      , i = this.getPresets();
                    return t.selection ? (o().find(i, (function(e) {
                        if (e.id === t.selection)
                            return e.name = t.name,
                            !0
                    }
                    )),
                    i) : [{
                        id: s,
                        payload: this.getPayload(),
                        name: t.name,
                        sort: parseInt(t.sort)
                    }].concat(i)
                }
            }, {
                key: "deletePreset",
                value: function(e) {
                    var t = this
                      , s = o().filter(this.getPresets(), (function(t) {
                        return e.attr("data-id") !== t.id
                    }
                    ));
                    this._addComponent(b, {
                        $el: e,
                        id: e.attr("data-id"),
                        complete: function() {
                            t.savePreset(s).then((function(e) {
                                var s = e.presets
                                  , i = void 0 === s ? {} : s
                                  , r = e.has_error;
                                void 0 !== r && r || t.updatePresets(i),
                                t.completeDeletePreset()
                            }
                            ))
                        }
                    })
                }
            }, {
                key: "savePreset",
                value: function(e) {
                    var t = this
                      , s = {
                        headers: o().extend({
                            "Content-Type": "application/json;charset=utf-8"
                        }, this.fetch_headers.headers),
                        method: "POST",
                        body: JSON.stringify({
                            presets: e
                        })
                    };
                    return fetch(this.options.url || "/v3/inbox/filter/presets", s).then((function(e) {
                        return t.preset_saving = !1,
                        e.ok ? e.json() : {
                            has_error: !0
                        }
                    }
                    ))
                }
            }, {
                key: "updateSort",
                value: function(e, t) {
                    var s = this
                      , i = this.getSortData(t)
                      , r = o().reduce(this.getPresets(), (function(e, t) {
                        var s = o().find(i, (function(e) {
                            return e.id === t.id
                        }
                        ));
                        return e.push(o().extend(t, {
                            sort: s.sort
                        })),
                        e
                    }
                    ), []);
                    this.savePreset(r).then((function(e) {
                        var t = e.presets
                          , i = void 0 === t ? {} : t
                          , r = e.has_error;
                        void 0 !== r && r || s.updatePresets(i)
                    }
                    ))
                }
            }, {
                key: "sortMode",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return f(m(s.prototype), "sortMode", this).call(this, e, t)
                }
            }, {
                key: "presetSaveRequest",
                value: function(e, t) {
                    var s = !1
                      , i = l().v4()
                      , n = this.preparePresets({
                        data: t,
                        create_id: i
                    });
                    return this.preset_saving ? Promise.reject() : (this.preset_saving = !0,
                    this.savePreset(n).then(o().bind((function(n) {
                        var o, a = n.presets, l = void 0 === a ? {} : a, u = n.has_error, d = void 0 !== u && u;
                        this.presetEditExit(),
                        this.$el.removeClass("filter-add-mode-active"),
                        e.hasClass("filter__list__item-edit-sortable-mode") && (s = !0),
                        e.replaceWith(o = c(r()({
                            ref: "/tmpl/filter/bookmark.twig"
                        }).render({
                            item: {
                                label: t.name,
                                id: t.selection || i,
                                can_edit: !0
                            }
                        }))),
                        s && o.addClass("filter__list__item-edit-sortable-mode"),
                        d || this.updatePresets(l, i)
                    }
                    ), this)))
                }
            }]),
            s
        }(u.default)
    }
    ,
    758173: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => c
        });
        var i = s(661533)
          , r = s.n(i)
          , n = s(460159)
          , o = s.n(n)
          , a = s(55188)
          , l = s.n(a)
          , u = s(521466)
          , d = s(717414);
        const c = u.default.extend({
            _classes: function() {
                return {
                    input: "js-multisuggest-input",
                    input_wrapper: "multisuggest__list-item_input",
                    selected_items: "js-multisuggest-list",
                    loader: "js-multisuggest-loader",
                    loading: "js-multisuggest-loading"
                }
            },
            _selectors: function() {
                return {
                    list_item: ".js-multisuggest-list .js-multisuggest-item",
                    item: ".js-multisuggest-item"
                }
            },
            events: {
                click: "preventExit",
                "click .js-multisuggest-item": "clickToRemoveChoosed",
                "keydown .multisuggest__input": "escapeDestroy",
                "multisuggest:item:choosed": "onItemChoose",
                "multisuggest:item:removed": "onItemRemove",
                "click .js-chat_user_remove": "groupChatRemoveTag"
            },
            initialize: function(e) {
                u.default.prototype.initialize.call(this),
                this.options = r().extend(this.options || {}, {
                    $container: e.$container || this._$body,
                    class_name: "",
                    suggest_id: "suggest-manager__suggest",
                    onInit: l().noop,
                    onModify: l().noop,
                    onRevert: l().noop,
                    onItemChoosed: l().noop,
                    onItemRemoved: l().noop
                }, e),
                this.autosize = !!l().isUndefined(e.autosize) || e.autosize,
                this.options.template = this.options.template || "/tmpl/common/fast_tags/wrapper.twig",
                this._$document.trigger({
                    type: "controls:hide",
                    target: e.el || e.$el
                }),
                this.render(this.options.template).then(l().bind((function() {
                    this.bindEvents(),
                    l().delay(l().bind((function() {
                        this.suggestLeaveOnBlur(!0)
                    }
                    ), this), 100),
                    l().isFunction(this.options.loadItems) && (this.loadItems = e.loadItems),
                    l().isFunction(this.options.onInit) && this.options.onInit.call(this),
                    l().isObject(this.options.items) ? this.setItems(this.options) : l().isFunction(this.loadItems) && this.loadItems(),
                    APP.is_touch_device && !0 !== this.options.focus_on_init ? "INPUT" === document.activeElement.tagName && document.activeElement.blur() : (!1 !== this.options.focus_on_init && this._elem("input").focus(),
                    !1 !== this.autosize && (this._elem("input").autosizeInput(),
                    l().isFunction(this.afterAutoSizeInput) && this.afterAutoSizeInput()))
                }
                ), this))
            },
            destroy: function() {
                l().isFunction(this.options.onSuggestManagerDestroy) && this.options.onSuggestManagerDestroy(),
                this._$document.off(this.ns),
                this.suggestLeaveOnBlur(!1),
                this.hasModifications(),
                r()("html").removeClass("has-suggest-manager"),
                this.$list.remove(),
                u.default.prototype.destroy.apply(this, arguments)
            },
            toggleCanEdit: function(e) {
                var t = r()(".js-multisuggest-input")
                  , s = e ? "Y" : "N";
                t && (t.attr("data-can-add", s),
                e ? this.$el.add("js-can-add") : this.$el.removeClass("js-can-add"))
            },
            onItemChoose: function() {
                l().isFunction(this.options.onItemChoosed) && this.options.onItemChoosed.call(this),
                this.setPositions(),
                this.checkModifications()
            },
            onItemRemove: function() {
                l().isFunction(this.options.onItemRemoved) && this.options.onItemRemoved.call(this),
                this.setPositions(),
                this.checkModifications()
            },
            bindEvents: function() {
                r()("html").addClass("has-suggest-manager"),
                this._$window.on("resize".concat(this.ns), l().debounce(l().bind(this.setPositions, this), 50)),
                this.$list.on("click", ".suggest-manager__empty__tag", l().bind((function() {
                    this.$el.find(".multisuggest__input").trigger({
                        type: "keydown",
                        keyCode: 13
                    }).focus()
                }
                ), this)).on("click", (function(e) {
                    e.stopPropagation()
                }
                )).on("click", ".fast_tags__closer-ok", l().bind(this.destroy, this)).on("click", ".js-multisuggest-item", l().bind(this.clickToChoose, this)),
                this._$document.on("page:change:start".concat(this.ns, " suggest:manager:destroy").concat(this.ns), l().bind(this.destroy, this)).on("orientationchange".concat(this.ns), l().bind(this.setPositions, this))
            },
            getSelectedItems: function() {
                return r().makeArray(this.$(this._selector("list_item")).map((function(e, t) {
                    var s = r()(t);
                    return l().extend(s.data(), {
                        id: s.attr("data-id"),
                        raw_title: s.text(),
                        title: s.text().trim()
                    })
                }
                )))
            },
            hasModifications: function() {
                var e = this.getSelectedItems();
                return (document.contains && document.contains(this.el) || this.$el.closest("body").length) && !l().isEqual(this.options.existing_items, e) || this._elem("input").val() && !this.options.cant_add
            },
            checkModifications: function() {
                this.hasModifications() ? l().isFunction(this.options.onModify) && this.options.onModify.call(this) : l().isFunction(this.options.onRevert) && this.options.onRevert.call(this)
            },
            modified: l().noop,
            reverted: l().noop,
            preventExit: function(e) {
                r()(e.currentTarget).hasClass("suggest-manager-lib__actions") || e.stopPropagation()
            },
            clickToChoose: function(e) {
                d.default.clickItem(r()(e.currentTarget)),
                e.stopPropagation(),
                l().isFunction(this.options.onAddItem) && this.options.onAddItem(r()(e.currentTarget))
            },
            clickToRemoveChoosed: function(e) {
                var t = r()(e.currentTarget);
                t.addClass("js-active"),
                d.default.removeItem(t),
                l().isFunction(this.options.onRemoveItem) && this.options.onRemoveItem(t)
            },
            groupChatRemoveTag: function(e) {
                r()(e.currentTarget).find("js-chat_user_remove") && (r()(e.currentTarget).addClass("js-active"),
                this.clickToRemoveChoosed(e))
            },
            escapeDestroy: function(e) {
                if (27 === e.keyCode)
                    return this.destroy(),
                    !1
            },
            _getRenderParams: function() {
                return l().isFunction(this.options.onRenderParams) ? this.options.onRenderParams.apply(this) : {}
            },
            render: function(e) {
                return o()._preload([e], l().bind(this._render, this, e))()
            },
            _render: function(e) {
                this.setElement(r()(o()({
                    ref: e
                }).render(l().extend({
                    id: this.$el.attr("id"),
                    class_name: this.options.class_name,
                    suggest_class_name: this.options.suggest_class_name,
                    label_name: this.options.label_name,
                    render_hidden: this.options.render_hidden,
                    items: this.options.existing_items,
                    cant_add: this.options.cant_add,
                    can_remove: this.options.can_remove,
                    new_item_msg: this.options.new_item_msg,
                    no_items_msg: this.options.no_items_msg,
                    empty_msg: this.options.empty_msg,
                    placeholder: this.options.placeholder,
                    actions: this.options.actions,
                    item_tmpl: this.options.item_tmpl,
                    inner_item_tmpl: this.options.inner_item_tmpl
                }, this._getRenderParams())))),
                this.options.replace ? this.options.$el.html(this.$el) : this.options.replace_li ? (this.$el.find(".multisuggest__list.js-multisuggest-list").prepend("<li class=scheduled_report__manager_filter_label>".concat(this.options.filter_label, "</li>")),
                this.options.$el.html(this.$el)) : this.options.$el.append(this.$el),
                this._findElem("loader").length && this._addClass("loading", "selected_items"),
                this.$list = this.$('[data-multisuggest-id="'.concat(this.$el.attr("data-multisuggest-id"), '"]')),
                this.options.$container.append(this.$list),
                this.setPositions()
            },
            setPositions: function() {
                var e = this.$el.offset()
                  , t = this.$list.parent()
                  , s = t.offset() || {
                    left: 0,
                    top: 0
                }
                  , i = e.top + this.$el[0].offsetHeight + 5
                  , r = this.$list.find(".js-multisuggest-suggest");
                this.$list.css(Modernizr.prefixed("transform"), ""),
                this.options.no_absolute_positioning || ("static" === t.css("position") && (s = {
                    left: 0,
                    top: 0
                }),
                this.$list.css({
                    top: i,
                    left: e.left - s.left
                })),
                r.get(0).style.height = "",
                this._checkVisibilityForPositioning(r)
            },
            _checkVisibilityForPositioning: function(e) {
                var t, s = this.$el.offset(), i = s.top - 15 - r()(window).scrollTop() - (this.options.topbar_offset || 0), n = s.top + this.$el[0].offsetHeight + 5, o = this.options.$relative_to ? this.options.$relative_to.outerHeight() : window.innerHeight;
                this.$list.is(":visible") && !this.$list.visible() && (this.$list.css(Modernizr.prefixed("transform"), "translateY(calc(-100% - ".concat(this.el.offsetHeight + 15, "px))")),
                this.$list.visible() || (i > o - n ? t = i : (t = o - n,
                this.$list.css(Modernizr.prefixed("transform"), "")),
                e.css("height", t - 10)))
            },
            setItems: function(e) {
                this.items = e.items,
                this._removeClass("loading", "selected_items"),
                this._elem("loader").remove(),
                this.$el.data("values-hash", this.items).trigger("multisuggest:set_suggest", !1)
            },
            save: l().noop,
            suggestLeaveOnBlur: function(e) {
                var t = ".suggest-manager:destroy";
                this._$document.off(t),
                !1 !== e && this._$document.on("controls:hide:private".concat(t), l().bind(this.destroy, this))
            }
        });
        var h = "../build/transpiled/components/base/suggest_manager";
        window.define(h, (function() {
            var e = "undefined"
              , s = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return s && s.default || s
        }
        )),
        window.require([h])
    }
    ,
    956799: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => c
        });
        var i = s(661533)
          , r = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , a = s(460159)
          , l = s.n(a)
          , u = s(889378)
          , d = function(e) {
            var t = this;
            this.options = r().extend({}, e || {}),
            this.options.id && (this.modal = new u.default({
                class_name: "modal-list",
                init: l()._preload(["/tmpl/common/modal/delete.twig"], (function(e) {
                    t.$modal_body = e,
                    e.html(l()({
                        ref: "/tmpl/common/modal/delete.twig"
                    }).render({
                        caption: APP.lang.filter_preset_remove_caption,
                        message: [{
                            text: APP.lang.filter_preset_remove_msg
                        }],
                        accept_text: APP.lang.filter_preset_remove_accept_button
                    })).trigger("modal:loaded").trigger("modal:centrify"),
                    document.activeElement.blur(),
                    e.on("click", ".modal-body__actions__save", o().bind(t.removeRequest, t)),
                    this.$modal.on("click", (function(e) {
                        e.stopPropagation()
                    }
                    ))
                }
                )),
                destroy: o().bind((function() {
                    return !(this.xhr && !o().isUndefined(this.xhr.status) || (o().isFunction(this.options.destroy) && this.options.destroy(),
                    this.$modal_body.off(),
                    0))
                }
                ), this)
            }))
        };
        d.prototype.removeRequest = function() {
            this.xhr || (this.xhr = r().ajax({
                url: "/api/".concat(this.options.entity_preset, "/custom_presets/").concat(this.options.id),
                type: "DELETE"
            }).done(o().bind((function(e) {
                1 === e.response && (this.xhr = null,
                this.afterRemove())
            }
            ), this)))
        }
        ,
        d.prototype.afterRemove = function() {
            this.options.$el.addClass("flipOutX"),
            o().delay(o().bind((function() {
                this.options.$el.remove(),
                o().isFunction(this.options.complete) && this.options.complete()
            }
            ), this), 300),
            this.modal.destroy()
        }
        ;
        const c = d;
        var h = "../build/transpiled/components/filter/delete_preset";
        window.define(h, (function() {
            var e = "undefined"
              , s = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return s && s.default || s
        }
        )),
        window.require([h])
    }
    ,
    803263: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => y
        });
        var i = s(661533)
          , r = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , a = s(871082)
          , l = s.n(a)
          , u = s(460159)
          , d = s.n(u)
          , c = s(312309)
          , h = s(678640)
          , _ = s(880774)
          , p = s(500034)
          , f = s(521466)
          , m = s(956799)
          , g = s(77305)
          , v = function(e, t) {
            r()(this).sortable("refreshPositions"),
            e.helper.css("margin-top", t)
        };
        const y = f.default.extend({
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
                f.default.prototype.initialize.apply(this, arguments),
                this.options = e || {},
                this.is_admin = (APP.constant("user_rights") || {}).is_admin,
                this.non_admin_can_save = e.non_admin_can_save || !1,
                this.getSerializedFilterState = e.getSerializedFilterState,
                this.hideEditIcon(),
                this._$body.on("click".concat(this.ns), "#filter_save", o().bind(this.presetSave, this)).on("click".concat(this.ns), o().bind(this.presetEditExit, this)),
                d()._preload(["/tmpl/filter/bookmark.twig"])()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s];
                this._$body.off(this.ns),
                this.makeSortable(!1),
                this.remove(!1),
                f.default.prototype.destroy.apply(this, t)
            },
            changeDefaultPreset: function() {
                this.$el.children().removeClass("filter__list__item-default"),
                this.$el.children().first().addClass("filter__list__item-default")
            },
            hideEditIcon: function() {
                this.$el.find(".filter__list__item-system-preset").length < this.$el.children().not(".filter__common_settings__item-trash").length - 1 ? this.$el.find(".filter__list__item-system-preset").find(".filter_items__edit").css("display", "none") : (this.$el.find(".filter__list__item-system-preset").find(".filter_items__edit").css("display", "none"),
                this.$el.find(".filter__list__item-system-preset").first().find(".filter_items__edit").css("display", "block"))
            },
            presetLoad: function(e) {
                var t = r()(e.currentTarget)
                  , s = t.find(".filter__list__item__link:first");
                if (e.preventDefault(),
                e.stopPropagation(),
                this._$document.trigger("suggest:manager:destroy"),
                !this._sorting) {
                    if (t.hasClass("filter__list__item-edit-mode"))
                        return t.find('input[type="text"]').focus(),
                        !1;
                    this.options.filter && this.options.filter.form.hasChanges() && this.options.filter.reset({
                        navigate: !1
                    }),
                    this._redirectForApplyPreset(s.attr("href")),
                    !0 !== APP.router.prevent_page_confirm && (t.parent().find(this._selector("selected")).removeClass(this._class("selected")),
                    t.addClass(this._class("selected")))
                }
            },
            _redirectForApplyPreset: function(e) {
                APP.router.navigate(e, {
                    trigger: !0
                })
            },
            isSkipFilterEmpty: function() {
                return o().isEmpty((0,
                c.getQueryParam)("skip_filter"))
            },
            highlight: function() {
                var e = []
                  , t = (0,
                c.removeQueryParam)(["filter[order_by]", "order_by", "filter[order_type]", "order_type", "clear_order", "term", "typing"])
                  , s = decodeURIComponent(t || "")
                  , i = this.presetIsTrash(l().history.location.pathname)
                  , n = i ? this._selector("trash_item") : this._selector("default_item");
                return this._elem("save").addClass("hidden"),
                s && this.isSkipFilterEmpty() ? (this.$(".js-filter-preset-link").each(o().bind((function(t, i) {
                    var n, o = r()(i), a = (o.children(".filter__list__item__link").attr("href") || "").toString().split("?");
                    n = (n = decodeURIComponent(2 === a.length ? a[1] : "").replace(/\+/g, " ")).replace("&useFilter=y", ""),
                    s = s.replace("&useFilter=y", ""),
                    n && s.indexOf(n) >= 0 ? (e.length && e.removeClass(this._class("selected")),
                    e = o,
                    o.addClass(this._class("selected"))) : o.removeClass(this._class("selected"))
                }
                ), this)),
                e.length || this.highlightSave()) : (this.$(this._selector("selected")).removeClass(this._class("selected")),
                i ? (this.$(n).addClass(this._class("selected")),
                o().isFunction(this.options.filter.setUrl) && this.options.filter.setUrl(this.options.filter.form.el.getAttribute("action").replace("/list/", "/trash/")),
                e = this.$(n)) : (this.$(n)[(0,
                c.getQueryParam)("term") ? "removeClass" : "addClass"](this._class("selected")),
                o().isFunction(this.options.filter.setUrl) && this.options.filter.setUrl(this.options.filter.form.el.getAttribute("action").replace("/trash/", "/list/")))),
                e
            },
            highlightSave: function(e) {
                e = !1 !== this.options.can_save && e,
                this.$(this._selector("selected")).removeClass(this._class("selected")),
                this._elem("save").addClass("hidden"),
                (this.is_admin || this.non_admin_can_save) && !1 !== e && this._elem("save").removeClass("hidden").addClass(this._class("selected"))
            },
            getPresetEntity: function() {
                return o().isFunction(this.options.filter.getPresetEntity) ? this.options.filter.getPresetEntity() : APP.getBaseEntity()
            },
            deletePreset: function(e) {
                this._addComponent(m.default, {
                    $el: e,
                    entity_preset: this.getPresetEntity(),
                    id: e.attr("data-id"),
                    complete: o().bind(this.completeDeletePreset, this, e.attr("data-id"))
                })
            },
            completeDeletePreset: function() {
                this._elem("save").removeClass("hidden"),
                this.sortMode(!1),
                this.$preset_in_edit = !1,
                this.changeDefaultPreset(),
                this._$document.trigger("search:presets-count:update"),
                this.options.filter.form.hasChanges() ? this.highlightSave() : this.highlight(),
                this.hideEditIcon()
            },
            presetRemove: function(e) {
                var t = r()(e.currentTarget).closest("li");
                return this.$el.removeClass("filter-add-mode-active"),
                t.attr("data-id") ? this.deletePreset(t) : (t.addClass("flipOutX"),
                o().delay(o().bind((function() {
                    t.remove(),
                    this._elem("save").removeClass("hidden"),
                    this.changeDefaultPreset(),
                    this.highlight()
                }
                ), this), 300),
                o().isFunction(this.options.filter.makeFilterCaptionActive) && this.options.filter.makeFilterCaptionActive(!0),
                this.$preset_in_edit = !1,
                this.add_new_preset = !1),
                !1
            },
            presetSave: function(e) {
                var t = r()(e.currentTarget)
                  , s = this.options.filter.form.$el.attr("action")
                  , i = (0,
                _.parseNum)(this.$("li:last").attr("data-sort"))
                  , n = this.getSerializedFilterState ? this.getSerializedFilterState() : this.options.filter.form.$el.find(":input").filter((function() {
                    return "" !== r()(this).val() && !r()(this).hasClass("js-form-changes-skip")
                }
                )).serialize()
                  , a = (0,
                c.QStoJSON)(n);
                (0,
                h.hasKeys)(a, ["filter[company][date][from]"]) || (n = (0,
                c.removeQueryParam)(["filter[company][date][type]"], n)),
                (0,
                h.hasKeys)(a, ["filter[main_contact][date][from]"]) || (n = (0,
                c.removeQueryParam)(["filter[main_contact][date][type]"], n)),
                APP.data.current_view && APP.data.current_view.filterPrepareAction && (n = APP.data.current_view.filterPrepareAction(n));
                var l = r()(d()({
                    ref: "/tmpl/filter/bookmark.twig"
                }).render({
                    item: {
                        element_id: "filter_preset_save_item",
                        in_edit: !0,
                        link: "".concat(s, "?").concat(n).concat(this.presetIsTrash(s) ? "&is_trash=Y" : ""),
                        label: "",
                        can_edit: !0
                    }
                }));
                return l.addClass("from-save filter__common_settings__item__add-mode"),
                l.attr("data-sort", i >= 99999 ? i + 1 : 99999).css("opacity", 0).css(Modernizr.prefixed("transform"), "scale(0.8)").css(Modernizr.prefixed("transition"), "opacity 0.2s, ".concat(Modernizr.prefixed("transform"), " 0.2s")),
                t.closest("li").length ? t.closest("li").addClass("hidden").before(l) : (this.$el.append(l),
                o().isFunction(this.options.filter.makeFilterCaptionActive) && this.options.filter.makeFilterCaptionActive(!1)),
                l.focus().css("opacity", "").css(Modernizr.prefixed("transform"), ""),
                l.find(".filter_items__user_value").attr("data-is-new", 1).removeAttr("readonly").focus(),
                t.closest(".filter-search__left").trigger("click"),
                this.$el.addClass("filter-add-mode-active"),
                this.$preset_in_edit = l,
                this.add_new_preset = !0,
                !1
            },
            presetEditSave: function(e) {
                var t = r()(e.currentTarget).closest("li")
                  , s = r().trim(t.find(".filter_items__user_value").val() || "")
                  , i = this.options.filter.form.$el.attr("action")
                  , n = t.find(".filter__list__item__link").attr("href").toString().replace("".concat(i, "?"), "") + (this.presetIsTrash(i) ? "&is_trash=Y" : "")
                  , a = t.attr("data-id")
                  , l = this;
                return t.hasClass("filter__list__item-system-preset") && (t.removeClass("filter__list__item-edit-mode"),
                l.sortMode(!1),
                this.$preset_in_edit = !1,
                this.hideEditIcon(),
                l.changeDefaultPreset()),
                s.length ? (this.presetSaveRequest(t, {
                    action: a ? "PUT" : "POST",
                    name: s,
                    selection: a || "",
                    query: n,
                    sort: t.attr("data-sort"),
                    pipeline_id: "leads" === APP.getBaseEntity() ? o().propertyOf(APP)(["data", "current_view", "pipeline_id"]) : ""
                }).then((function() {
                    l.sortMode(!1),
                    l.changeDefaultPreset()
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
                  , s = t.parent().children(".filter__list__item-edit-mode")
                  , i = s.length ? s.attr("data-id") : ""
                  , n = this.options.filter.form.$el.attr("action")
                  , a = s.length ? s.find(".filter__list__item__link").attr("href").toString().replace("".concat(n, "?"), "") + (this.presetIsTrash(n) ? "&is_trash=Y" : "") : ""
                  , l = t.find(".filter_items__user_value");
                return s.length && this.presetSaveRequest(s, {
                    action: i ? "PUT" : "POST",
                    name: r().trim(s.find(".filter_items__user_value").val() || ""),
                    selection: i || "",
                    query: a,
                    pipeline_id: "leads" === APP.getBaseEntity() ? o().propertyOf(APP)(["data", "current_view", "pipeline_id"]) : ""
                }),
                this.sortMode(!0),
                t.addClass("filter__list__item-edit-mode"),
                l.prev("span").remove(),
                l.show().removeAttr("readonly").val(l.val()),
                l.focus(),
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
                    start: function(e, s) {
                        t._sorting = !0,
                        s.item.addClass("sorted"),
                        v.call(this, s, t._$window.scrollTop())
                    },
                    stop: function(e, s) {
                        o().delay(o().bind((function() {
                            this._sorting = !1
                        }
                        ), t), 200),
                        s.item.css("margin-top", "").removeClass("sorted")
                    },
                    update: o().bind(this.updateSort, this),
                    sort: function(e, s) {
                        var i = t._$window
                          , r = i.scrollTop()
                          , n = i.height()
                          , o = s.item.offset().top;
                        r - o > -70 && (r -= 10),
                        r + n - (o + s.item.height()) < 70 && (r += 10),
                        i.scrollTop(r),
                        v.call(this, s, r)
                    }
                })) : this._sortable && (this.$el.sortable("destroy"),
                this._sortable = !1)
            },
            getSortData: function(e) {
                return e.item.parent().find(".js-filter__common_settings__item-sortable").map((function() {
                    var e = r()(this)
                      , t = ((0,
                    _.parseNum)(r()(this).prev("li").attr("data-sort")) || 0) + 1;
                    return e.attr("data-sort", t),
                    {
                        id: e.attr("data-id"),
                        sort: t
                    }
                }
                ))
            },
            updateSort: function(e, t) {
                var s = this.getSortData(t)
                  , i = t.item.data("xhr");
                void 0 !== i && 4 !== i.readyState && i.abort(),
                i = this.savePreset("PATCH", {
                    filter: r().makeArray(s)
                }),
                t.item.data("xhr", i)
            },
            isPresetPrivate: function() {
                var e = this.getPresetEntity();
                return "talks" === e || e && APP.isCard()
            },
            sortMode: function(e, t) {
                var s, i, r = this.$el.find("li:not(.filter__list__item-save):not(.filter__common_settings__item-trash)"), n = r.first().attr("data-id");
                (0,
                p.isFeatureAvailable)("show_default_preset_modal") && t && !this.add_new_preset ? (e && (this._id_first_preset = n),
                e || this._id_first_preset === n || (s = r.first().attr("title"),
                i = this.isPresetPrivate() ? (0,
                _.i18n)('"%s" will be set as your default preset filter. This will not affect other users.').replace("%s", s) : (0,
                _.i18n)('The "%s" preset will be used by you and all users as the default preset.').replace("%s", s),
                new g.default({
                    text: (0,
                    _.i18n)("Please note"),
                    message: [{
                        text: i
                    }],
                    no_actions: !0
                }))) : this._showRibbonText(e),
                this.add_new_preset = !1,
                e ? r.addClass("filter__list__item-edit-sortable-mode") : r.removeClass("filter__list__item-edit-sortable-mode"),
                r.closest(".filter__list__item-system-can-edit") && (r.removeClass("filter__list__item-system-can-edit"),
                r.first().hasClass("filter__list__item-system-preset") && r.first().addClass("filter__list__item-system-can-edit"))
            },
            _showRibbonText: function(e) {
                this.options.filter._elem("ribbon_text").remove(),
                e && (this.options.filter.$el.append('<div class="'.concat(this.options.filter._class("ribbon_text"), '">').concat((0,
                _.i18n)("First preset is used by default"), "</div>")),
                this.options.filter._dropElemCache("ribbon_text"))
            },
            presetEditExit: function() {
                if (this.$preset_in_edit)
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
                var s = this.getPresetEntity();
                return r().ajax({
                    url: "/api/".concat(s, "/custom_presets/").concat("PUT" === e ? t.selection : ""),
                    contentType: "application/json",
                    type: e,
                    dataType: "json",
                    data: JSON.stringify(t)
                })
            },
            presetSaveRequest: function(e, t) {
                var s = []
                  , i = e.hasClass(this._class("selected"))
                  , n = ""
                  , a = !1;
                return this.preset_saving ? r().Deferred.reject() : (this.preset_saving = !0,
                this.savePreset(t.action, t).always(o().bind((function() {
                    this.preset_saving = !1
                }
                ), this)).done(o().bind((function(o) {
                    var u, c, h = o.response;
                    this.$el.removeClass("filter-add-mode-active"),
                    ("PUT" === t.action ? h : h.accessEdit) ? (u = h.query ? h.query : t.query,
                    c = h.id,
                    n = "".concat(l().history.location.pathname, "?").concat(u, "&sel=").concat(c),
                    e.hasClass("filter__list__item-edit-sortable-mode") && (a = !0),
                    e.replaceWith(s = r()(d()({
                        ref: "/tmpl/filter/bookmark.twig"
                    }).render({
                        item: {
                            link: n,
                            label: t.name,
                            id: c || t.selection,
                            can_edit: !0,
                            sort: t.sort
                        }
                    }))),
                    a && s.addClass("filter__list__item-edit-sortable-mode"),
                    (i || "add" === t.ACTION) && this.presetSaveRequestRestoreSelection({
                        $new_el: s,
                        url: n,
                        selected: i,
                        action: t.ACTION
                    })) : this.presetEditExit()
                }
                ), this)))
            },
            presetSaveRequestRestoreSelection: function(e) {
                this.$(this._selector("selected")).removeClass(this._class("selected")),
                e.$new_el.addClass(this._class("selected")),
                APP.router.navigate(e.url, {
                    replace: e.selected,
                    trigger: "add" === e.action
                })
            },
            presetIsTrash: function(e) {
                return e.indexOf("/trash") >= 0
            }
        })
    }
    ,
    41188: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => o
        });
        var i = s(55188)
          , r = s.n(i)
          , n = s(328731);
        const o = n.default.extend({
            getHighlightedItem: function(e, t) {
                var s, i = r().keys(t.users);
                return i.length ? (s = r().chain(i).sortBy((function(e) {
                    return e
                }
                )).first().value(),
                r().first(r().values(t.users[s]))) : n.default.prototype.getHighlightedItem.apply(this, arguments)
            }
        });
        var a = "../build/transpiled/components/filter/users_select";
        window.define(a, (function() {
            var e = "undefined"
              , s = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return s && s.default || s
        }
        )),
        window.require([a])
    }
    ,
    858458: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => n
        });
        var i = s(55188)
          , r = s.n(i);
        function n(e, t) {
            var s;
            if (e.length && this.form && this._hasDescribedSelector("form_input") && (t = t || e.data("input-name"),
            s = e.find(this._selector("form_input", t)).map((function(e, t) {
                return t.value
            }
            )),
            this.form.model.get(t) || s.length)) {
                switch (s.length) {
                case 0:
                    s = "";
                    break;
                case 1:
                    s = r()(s).first();
                    break;
                default:
                    s = r()(s).flatten()
                }
                this.form.model.set(t, s),
                this.form.checkChanges()
            }
        }
    }
    ,
    328731: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => k
        });
        var i = s(661533)
          , r = s.n(i)
          , n = s(55188)
          , o = s.n(n)
          , a = s(460159)
          , l = s.n(a)
          , u = s(880774)
          , d = s(678640)
          , c = s(853073)
          , h = s(579569)
          , _ = s(577486)
          , p = s(758173)
          , f = s(50888)
          , m = c.keycodes.BACKSPACE
          , g = c.keycodes.ENTER
          , v = c.keycodes.TAB
          , y = c.keycodes.ESCAPE;
        r()(document).on("loaded_users:null", (function() {
            APP.constant("loaded_users", null)
        }
        ));
        var b = p.default.extend({
            overlay_id: "users_select_overlay",
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s];
                return o().extend({}, p.default.prototype._classes.apply(this, t), {
                    suggest: "js-multisuggest-suggest",
                    group: "users-select__head",
                    group_choose: "users-select__head-allgroup",
                    item_selected: "multisuggest__suggest-item_selected",
                    disabled_item: "users-select__suggest-item-disabled",
                    disabled_reason: "users-select__suggest-item-disabled-reason",
                    disabled_reason_tip: "users-select__suggest-item-disabled-reason-tip",
                    disabled_reason_tip_show: "users-select__suggest-item-disabled-reason_show"
                })
            },
            events: o().extend({}, p.default.prototype.events, {
                "click .js-filter-save-managers": "onSaveClick",
                "click .js-filter-cancel-managers": "onCancelClick",
                "keydown .js-multisuggest-input": "onSelectOneKeydown",
                "multisuggest:set_suggest": "setUsers",
                "multisuggest:item:choose": "itemChoose"
            }),
            initialize: function(e) {
                e = o().extend({
                    $el: this.$el.parent(),
                    input_name: "users_select",
                    input_group_name: "users_select",
                    existing_items: [],
                    template: "/tmpl/users_select/users_select.twig",
                    users_template: "/tmpl/users_select/wrapper/index.twig",
                    replace: !0,
                    select_group_like_item: !1,
                    disable_groups_for_select: [],
                    select_group_like_item_only: !1,
                    select_one: !1,
                    select_one_group: !1,
                    item_template: "/tmpl/users_select/item.twig"
                }, e);
                var t = this.getSelectedItems({
                    input_group_name: e.input_group_name
                });
                t.length && (e.existing_items = t),
                this.users = {
                    groups: {},
                    allmanagers: {},
                    managers: {}
                },
                p.default.prototype.initialize.call(this, o().extend(e, {
                    no_absolute_positioning: e.no_absolute_positioning,
                    onInit: o().bind(this.onInit, this, e.onInit),
                    onDrop: o().bind((function(e) {
                        e.draggable && (e.draggable.addClass("users-select__remove-after-render").hide(),
                        this.$el.append(e.draggable))
                    }
                    ), this)
                }))
            },
            destroy: function(e) {
                var t, s = this.$el, i = this.$(".js-multisuggest-input"), n = null === (t = i.val()) || void 0 === t ? void 0 : t.trim();
                !0 !== e && n && i.val("").trigger({
                    type: "keydown",
                    keyCode: g,
                    inputValue: n
                });
                var a = this.getSelectedItems()
                  , u = r()(l()({
                    ref: this.options.items_template || "/tmpl/users_select/users_select_items.twig"
                }).render(o().extend({
                    id: this.options.id,
                    class_name: this.options.class_name || "",
                    input_name: this.options.input_name,
                    items: a
                }, this.options.onRenderItemsParams ? this.options.onRenderItemsParams(a) : {})));
                o().isFunction(this.options.onDestroy) && this.options.onDestroy.call(this, a, n, e),
                this.options.id && this.$el.attr("id") !== this.options.id && (s = r()("#".concat(this.options.id))),
                s.replaceWith(u),
                u.find('input[type="checkbox"]').trigger("change"),
                u.find("input.js-focuser").last().focus(),
                p.default.prototype.destroy.call(this)
            },
            escapeDestroy: function(e) {
                if (e.keyCode === y)
                    return this.destroy(!0),
                    !1
            },
            onInit: function(e) {
                this.$el.addClass("users-select-wrapper_editing"),
                o().isFunction(e) && e.call(this)
            },
            setPositions: function() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s];
                p.default.prototype.setPositions.apply(this, t),
                o().isFunction(this.options.onSetPositions) && this.options.onSetPositions.call(this),
                this.$list.toggleClass("hidden", !this.$list.text()),
                this.sticky_headers && this.sticky_headers.refresh()
            },
            bindEvents: function() {
                p.default.prototype.bindEvents.call(this),
                APP.is_touch_device && this.$el.on("focus blur", ".js-multisuggest-input", o().bind((function() {
                    o().delay(o().bind(this.setPositions, this), 1e3)
                }
                ), this)),
                this.$list.on("click", ".users-select__head-allgroup", o().bind(this.addGroupClick, this)).on("suggest:suggest:click click", ".users-select__head", o().bind(this.addGroupClick, this)).on("click", ".users-select__suggest-item-disabled", o().bind(this.disabledItemClick, this)).on("mouseover", ".users-select__suggest-item-disabled", o().bind(this.disabledItemMouseOver, this)).on("mouseleave", ".users-select__suggest-item-disabled", o().bind(this.disabledItemMouseLeave, this)),
                APP.is_touch_device || (this.sticky_headers = this._addComponent(f.default, {
                    el: this.$list.find(this._selector("suggest")),
                    selector: ".users-select__head-title",
                    max_sticky_count: 6,
                    exclude_scrollbar: !1,
                    filterElements: function(e) {
                        return o().filter(e, (function(e) {
                            return !r()(e).closest(".users-select-row__inner").hasClass("hidden")
                        }
                        ))
                    }
                }))
            },
            onSelectOneKeydown: function(e) {
                if (this.options.select_one && e.keyCode === m)
                    return e.stopPropagation(),
                    !0
            },
            _getRenderParams: function() {
                return o().extend({
                    input_name: this.options.input_name
                }, o().isFunction(this.options.onRenderParams) ? this.options.onRenderParams.call(this) : {})
            },
            _render: function() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s];
                p.default.prototype._render.apply(this, t),
                this.$list.hide()
            },
            disabledItemClick: function(e) {
                var t, s = r()(e.currentTarget);
                this._hasClass("disabled_item", s) && (t = s.find(this._selector("disabled_reason")),
                this._addClass("disabled_reason_tip_show", t))
            },
            disabledItemMouseOver: function(e) {
                var t = r()(e.currentTarget);
                if (!this._hasClass("item_selected", t)) {
                    var s = t.closest(".js-multisuggest-suggest").find(this._selector("item_selected"));
                    this._removeClass("item_selected", s),
                    this._addClass("item_selected", t),
                    this.locateDisableReason(t)
                }
            },
            disabledItemMouseLeave: function(e) {
                var t = r()(e.currentTarget).find(this._selector("disabled_reason"));
                this._removeClass("disabled_reason_tip_show", t)
            },
            addGroupClick: function(e) {
                var t, s = r()(e.currentTarget).closest(this._selector("group")).attr("data-id"), i = s.replace("group_", ""), n = r()(e.currentTarget).closest(this._selector("group")), a = this.users.allmanagers;
                e.stopPropagation && e.stopPropagation(),
                this.options.select_one || this.options.select_one_group || !n.find(this._selector("group_choose")).length || (this.options.select_group_like_item && !o().includes(this.options.disable_groups_for_select, s) && (a = [{
                    title: (0,
                    h.get)("groups")[s],
                    id: i,
                    group: "y",
                    input_name: this.options.input_group_name
                }]),
                t = o().chain(a).filter((function(e) {
                    return e.group === s || "y" === e.group && e.id === i
                }
                )).map((function(e) {
                    var t = this.$el.find('.js-multisuggest-item[data-group="'.concat(e.group, '"][data-id="').concat(e.id, '"]'));
                    return t.length && t.remove(),
                    this.getHtmlElem({
                        title: e.title,
                        id: e.id,
                        input_name: e.input_name || this.options.input_name,
                        group: e.group
                    })
                }
                ), this).value(),
                this._elem("input").val(""),
                this._elem("input_wrapper").before(t),
                this.options.select_group_like_item && !o().includes(this.options.disable_groups_for_select, s) && this.options.select_group_like_item_only && this._findElem("list_item").each((function(e, t) {
                    var i = r()(t);
                    i.data("group") === s && i.remove()
                }
                )),
                !this.options.select_group_like_item || this.options.select_group_like_item_only ? n.parent().remove() : this.setUsers(e, !1),
                o().isFunction(this.options.onGroupChoosed) && this.options.onGroupChoosed.call(this),
                this.setPositions())
            },
            setExistsUsersGroup: function() {
                var e = {};
                this.options.existing_items || (o().each(this.users.allmanagers, (function(t) {
                    var s = this.$(".js-multisuggest-item[data-id=".concat(t.id, "]"));
                    e[t.id] = {
                        id: t.id,
                        title: t.title,
                        group: this.users.allmanagers[t.id].group
                    },
                    s.attr("data-group", this.users.allmanagers[t.id].group)
                }
                ), this),
                this.options.existing_items = e)
            },
            getHtmlElem: function(e) {
                return l()({
                    ref: this.options.item_template
                }).render({
                    item: e
                })
            },
            itemChoose: function(e, t) {
                var s, i, n = this.el.querySelectorAll(".js-multisuggest-item"), a = this.el.querySelector(".js-multisuggest-input"), l = a.value, c = t.suggest_params && o().contains([g, v], t.suggest_params.keyCode);
                o().isUndefined(this.$el.data("values-hash")[t.id]) || (i = this.$el.data("values-hash")[t.id],
                t.group = i.group,
                t.source_name = i.show_source ? i.source_name : "",
                t.original_title = i.origin_title ? "(".concat((0,
                u.capitalize)(i.origin_title), ") / ") : "",
                t.title = t.source_name + t.original_title + i.title,
                t.talk_id = i.talk_id || "",
                i.talk_info && (t.title += " (".concat(i.talk_info, ")"))),
                e && e.stopPropagation && e.stopPropagation(),
                t.is_new && !(0,
                d.isValidEmail)(t.value) || (a.value = "",
                t.is_new ? (o().each(n, (function(e) {
                    e.parentNode.removeChild(e)
                }
                )),
                r()(a.parentNode).before(this.getHtmlElem(t))) : (s = o().filter(n, (function(e) {
                    return r()(e).text() === (t.title || "").toString()
                }
                )),
                this.options.select_one && n.length > 0 && n[0].parentNode.removeChild(n[0]),
                !this.options.select_one && s.length || !r().trim(t.title) || ("y" !== t.group || this.options.select_one_group) && r()(a.parentNode).before(this.getHtmlElem(t))),
                this.options.select_one ? this.destroy() : (this.removeSuggestItem(t),
                (l || c) && this.$el.trigger("multisuggest:set_suggest", [!1]),
                this.$el.trigger("multisuggest:item:choosed"),
                APP.is_touch_device || a.focus()))
            },
            removeSuggestItem: function(e) {
                var t = this.$list.find('.js-multisuggest-item[data-id="'.concat(e.id, '"]')).parent()
                  , s = t.closest(".users-select__body");
                t.remove(),
                this.closingAnEmptyGroup(s),
                this.setPositions()
            },
            closingAnEmptyGroup: function(e) {
                e.is(":empty") && e.parent().remove()
            },
            onItemRemove: function() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s];
                this._render_users_cache = {},
                this.$el.trigger("multisuggest:set_suggest", [!1]),
                p.default.prototype.onItemRemove.apply(this, t),
                APP.is_touch_device || this.$(".js-multisuggest-input").focus()
            },
            loadItems: function() {
                var e = this;
                this.items_load_promises = [],
                this.loaded_users = [],
                this.$list.addClass("js-loading"),
                !this.options.load_data && APP.constant("loaded_users") ? (this.loaded_users = APP.constant("loaded_users"),
                this.items_load_promises.push(Promise.resolve())) : this.items_load_promises.push(r().ajax({
                    url: "/ajax/get_managers_with_group/",
                    type: "POST",
                    data: this.options.load_data || {},
                    dataType: "json"
                }).done((function(t) {
                    e.loaded_users = t,
                    e.options.load_data || APP.constant("loaded_users", t),
                    o().each(o().where(t.managers, {
                        free_user: "N"
                    }), (function(e) {
                        (0,
                        h.add)(e)
                    }
                    ))
                }
                ))),
                setTimeout((function() {
                    Promise.all(e.items_load_promises).then((function(t) {
                        e.loadHelper(t[0])
                    }
                    ))
                }
                ))
            },
            loadHelper: function(e) {
                var t = o().result(this.options, "users", {});
                e = e || this.loaded_users,
                this.users = {
                    managers: e.managers,
                    allmanagers: o().extend({}, t.managers, e.managers),
                    groups: o().extend({}, t.groups, e.groups)
                },
                this.options.disabled_users && o().each(this.users.allmanagers, (function(e) {
                    e.amojo_id || (e.active = !1)
                }
                )),
                this.setExistsUsersGroup(),
                this.$list.removeClass("js-loading"),
                this.setItems({
                    from_load: !0
                }),
                this.setPositions()
            },
            setItems: function() {
                var e = this.loadManagersForTheSelector();
                this._elem("loader").remove(),
                this.$el.data("values-hash", e).data("groups-hash", this.users.groups),
                this.$el.trigger("multisuggest:set_suggest", this._elem("input").val() || !1),
                this.options.from_load && !o().keys(e).length && this.checkSuggestsExists(!1)
            },
            loadManagersForTheSelector: function() {
                return o().isUndefined(this.users.allmanagers) ? {} : o().extend({}, this.users.allmanagers)
            },
            findGroup: function(e) {
                var t = this.$el.data("groups-hash") || {}
                  , s = this.$el.find(".multisuggest__list").find(".multisuggest__list-item:not(.multisuggest__list-item_input)");
                return t = o().filter(t, (function(t, i) {
                    var n = (t || "").toString().toLowerCase()
                      , a = (0,
                    u.transliterate)(n)
                      , l = (0,
                    u.transliterate)(n, "punto");
                    return n && (a.match(e) || l.match(e) || n.match(e)) && this.options.select_one_group && !o().filter(s, (function(e) {
                        return "y" === r()(e).data("group") && r()(e).data("id") === i
                    }
                    ), this).length
                }
                ), this),
                o().isUndefined(t) ? [] : t
            },
            findUser: function(e) {
                var t = this.$el.data("values-hash") || {}
                  , s = this.$el.find(".multisuggest__list").find(".multisuggest__list-item:not(.multisuggest__list-item_input)");
                return o().filter(t, (function(t) {
                    var i = (t.title || "").toString().toLowerCase()
                      , n = (t.login || "").toString().toLowerCase()
                      , a = (0,
                    u.transliterate)(i)
                      , l = (0,
                    u.transliterate)(i, "punto");
                    return i && (a.match(e) || l.match(e) || i.match(e) || n.match(e)) && (this.options.select_one || !o().filter(s, (function(e) {
                        return this.options.select_one_group && "y" === r()(e).data("group") ? r()(e).data("id") === t.group : r()(e).attr("data-id") === t.id.toString()
                    }
                    ), this).length)
                }
                ), this)
            },
            setUsers: function(e, t) {
                var s, i, r = this.getSelectedItems() || {}, n = {}, a = !1;
                e.stopPropagation(),
                !1 === t && (t = ""),
                o().isUndefined(t) || (i = new _.UnsafeRegExp("(^|\\s)".concat(t ? t.replace(/(\[|\/)/gi, "\\$1") : ""),"i"),
                n = this.findGroup(i),
                s = this.findUser(i, n)),
                o().contains(["events", "statsCalls"], APP.getBaseEntity()) && (a = !!r.filter((function(e) {
                    return "0" === e.id
                }
                )).length);
                var u = this.getRenderUsersAndGroups({
                    users: s,
                    groups: n,
                    selected_item: r,
                    value: t
                });
                this.options.has_voice && (o().each(u.users.external, o().bind((function(e) {
                    e.is_disabled = !e.supports_voice,
                    e.is_disabled && (e.disable_reason = this.options.has_voice.reason_text_external)
                }
                ), this)),
                o().each(u.groups, o().bind((function(e) {
                    e.selectable = "external" === e.id,
                    e.is_disabled = "external" !== e.id,
                    e.disable_reason = this.options.reason_text_internal
                }
                ), this))),
                !0 === (o().isEmpty(u.users) && !o().findWhere(u.groups, {
                    hidden: !1
                })) ? this.$list.hide() : this._render_users_cache && o().isEqual(this._render_users_cache, u) && !a || (this.$list.show().find(".multisuggest__suggest").html(l()({
                    ref: this.options.users_template
                }).render({
                    class_name: "users_select_wrapper",
                    select_one: this.options.select_one,
                    rows: u.groups,
                    items: u.users,
                    user_bot: a
                })),
                o().isFunction(this.options.onRenderSuggest) && this.options.onRenderSuggest.call(this),
                this.setPositions()),
                this._elem("input").trigger("multisuggest:select-first", [this.getHighlightedItem(r[0], u)]),
                this._render_users_cache = u
            },
            locateDisableReason: function(e) {
                var t = e.find(this._selector("disabled_reason"))
                  , s = e.find(this._selector("disabled_reason_tip"))
                  , i = e.position().top
                  , r = t.innerHeight();
                i < r ? (s.css("transform", "rotate(45deg)"),
                t.css("top", "2px"),
                s.css("top", "-4px")) : (s.css("transform", "rotate(-135deg)"),
                t.css("top", "".concat(-(r + 28), "px")),
                s.css("top", "".concat(r - 4, "px")))
            },
            getHighlightedItem: function(e) {
                return e
            },
            getRenderUsersAndGroups: function(e) {
                var t = o().reduce(e.users, (function(e, t) {
                    return o().isArray(e[t.group]) || (e[t.group] = []),
                    !1 === this.options.disabled_users ? !0 === t.active && e[t.group].push(t) : e[t.group].push(t),
                    e
                }
                ), {}, this)
                  , s = this.getRenderAllGroup(e.groups, t, e.selected_item);
                return this.options.teammate_mention && (delete t.external,
                delete s.external,
                delete t.bots,
                delete s.bots),
                {
                    users: t,
                    groups: s
                }
            },
            getRenderAllGroup: function(e, t, s) {
                var i = this.$el.data("groups-hash") || {};
                return o().reduce(i, (function(i, r, n) {
                    var a = n.replace("group_", "")
                      , l = !o().includes(this.options.disable_groups_for_select, a);
                    return i[n] = {
                        title: r,
                        selectable: !this.options.select_one && l,
                        select_title: this.options.select_group_like_item && l ? (0,
                        u.i18n)("Select") : null,
                        hidden: !(t[n] || !this.options.select_one && o().indexOf(e, r) + 1),
                        id: n,
                        all_select: o().contains(["other_users"], n) || Boolean(o().findWhere(s, {
                            group: "y",
                            id: a
                        })) || !l
                    },
                    i
                }
                ), {}, this)
            },
            _getSelectedItems: function() {
                return p.default.prototype.getSelectedItems.apply(this, arguments)
            },
            getSelectedItems: function(e) {
                var t, s = this._getSelectedItems(e), i = this.users && this.users.allmanagers ? this.users.allmanagers : (0,
                h.get)(), r = o().propertyOf(e)("input_group_name"), n = o().propertyOf(this.options)("input_group_name");
                return o().map(s, (function(e) {
                    return o().has(i[e.id], "source_group") && (e.title = "".concat(i[e.id].source_group, "(").concat(i[e.id].origin_title, ") / ").concat(i[e.id].title),
                    i[e.id].talk_info && (e.title += "(".concat(i[e.id].talk_info, ")"))),
                    (t = o().extend(o().pick(e, "id", "group", "title", "raw_title"), {
                        name: e.title,
                        is_group: "y" === e.group,
                        talk_id: o().propertyOf(i)([e.id, "talk_id"]) || ""
                    })).is_group ? t.input_name = r || n : (t.group = i[e.id] && i[e.id].group,
                    t.active = i[e.id] && i[e.id].active),
                    t
                }
                ), this)
            }
        });
        const k = b;
        var P = "../build/transpiled/interface/users_select";
        window.define(P, (function() {
            var e = "undefined"
              , s = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return s && s.default || s
        }
        )),
        window.require([P])
    }
    ,
    689118: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            getDefaultDatePresets: () => r
        });
        var i = s(880774);
        function r() {
            return [{
                id: "current_day",
                label: (0,
                i.i18n)("Today (filter)")
            }, {
                id: "yesterday",
                label: (0,
                i.i18n)("Yesterday (filter)")
            }, {
                id: "past_x_days",
                label: (0,
                i.i18n)("Last %s days")
            }, {
                id: "current_week",
                label: (0,
                i.i18n)("Current week (filter)")
            }, {
                id: "previous_week",
                label: (0,
                i.i18n)("Last week (filter)")
            }, {
                id: "current_month",
                label: (0,
                i.i18n)("Current month (filter)")
            }, {
                id: "previous_month",
                label: (0,
                i.i18n)("Last month (filter)")
            }, {
                id: "current_quarter",
                label: (0,
                i.i18n)("Current quarter (filter)")
            }, {
                id: "current_year",
                label: (0,
                i.i18n)("Current year (filter)")
            }]
        }
        var n = "../build/transpiled/utils/date_presets";
        window.define(n, (function() {
            var e = "undefined"
              , s = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return s && s.default || s
        }
        )),
        window.require([n])
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
        e._sentryDebugIds[t] = "e511efa0-b82a-4aa6-ae02-bf24980a1a48",
        e._sentryDebugIdIdentifier = "sentry-dbid-e511efa0-b82a-4aa6-ae02-bf24980a1a48")
    } catch (e) {}
}();
//# sourceMappingURL=10456.2a6f34315a5c5b5c8fb8.js.map
