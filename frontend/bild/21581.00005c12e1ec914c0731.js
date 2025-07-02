"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[21581], {
    758173: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => d
        });
        var n = i(661533)
          , s = i.n(n)
          , o = i(460159)
          , r = i.n(o)
          , a = i(55188)
          , l = i.n(a)
          , u = i(521466)
          , c = i(717414);
        const d = u.default.extend({
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
                this.options = s().extend(this.options || {}, {
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
                s()("html").removeClass("has-suggest-manager"),
                this.$list.remove(),
                u.default.prototype.destroy.apply(this, arguments)
            },
            toggleCanEdit: function(e) {
                var t = s()(".js-multisuggest-input")
                  , i = e ? "Y" : "N";
                t && (t.attr("data-can-add", i),
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
                s()("html").addClass("has-suggest-manager"),
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
                return s().makeArray(this.$(this._selector("list_item")).map((function(e, t) {
                    var i = s()(t);
                    return l().extend(i.data(), {
                        id: i.attr("data-id"),
                        raw_title: i.text(),
                        title: i.text().trim()
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
                s()(e.currentTarget).hasClass("suggest-manager-lib__actions") || e.stopPropagation()
            },
            clickToChoose: function(e) {
                c.default.clickItem(s()(e.currentTarget)),
                e.stopPropagation(),
                l().isFunction(this.options.onAddItem) && this.options.onAddItem(s()(e.currentTarget))
            },
            clickToRemoveChoosed: function(e) {
                var t = s()(e.currentTarget);
                t.addClass("js-active"),
                c.default.removeItem(t),
                l().isFunction(this.options.onRemoveItem) && this.options.onRemoveItem(t)
            },
            groupChatRemoveTag: function(e) {
                s()(e.currentTarget).find("js-chat_user_remove") && (s()(e.currentTarget).addClass("js-active"),
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
                return r()._preload([e], l().bind(this._render, this, e))()
            },
            _render: function(e) {
                this.setElement(s()(r()({
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
                  , i = t.offset() || {
                    left: 0,
                    top: 0
                }
                  , n = e.top + this.$el[0].offsetHeight + 5
                  , s = this.$list.find(".js-multisuggest-suggest");
                this.$list.css(Modernizr.prefixed("transform"), ""),
                this.options.no_absolute_positioning || ("static" === t.css("position") && (i = {
                    left: 0,
                    top: 0
                }),
                this.$list.css({
                    top: n,
                    left: e.left - i.left
                })),
                s.get(0).style.height = "",
                this._checkVisibilityForPositioning(s)
            },
            _checkVisibilityForPositioning: function(e) {
                var t, i = this.$el.offset(), n = i.top - 15 - s()(window).scrollTop() - (this.options.topbar_offset || 0), o = i.top + this.$el[0].offsetHeight + 5, r = this.options.$relative_to ? this.options.$relative_to.outerHeight() : window.innerHeight;
                this.$list.is(":visible") && !this.$list.visible() && (this.$list.css(Modernizr.prefixed("transform"), "translateY(calc(-100% - ".concat(this.el.offsetHeight + 15, "px))")),
                this.$list.visible() || (n > r - o ? t = n : (t = r - o,
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
        var p = "../build/transpiled/components/base/suggest_manager";
        window.define(p, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([p])
    }
    ,
    394369: (e, t, i) => {
        i.r(t),
        i.d(t, {
            ALL_ACCEPTED_TYPES: () => S,
            ATTACHMENT_TYPES: () => P,
            AttachmentModel: () => T,
            AttachmentsCollection: () => $,
            PICTURE_ACCEPTED_TYPES: () => C,
            VIDEO_ACCEPTED_TYPES: () => A,
            VOICE_ACCEPTED_TYPES: () => x
        });
        var n = i(55188)
          , s = i.n(n)
          , o = i(871082)
          , r = i(500034)
          , a = i(987280)
          , l = i(847837)
          , u = i(628612);
        function c(e, t, i, n, s, o, r) {
            try {
                var a = e[o](r)
                  , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, s)
        }
        function d(e) {
            return function() {
                var t = this
                  , i = arguments;
                return new Promise((function(n, s) {
                    var o = e.apply(t, i);
                    function r(e) {
                        c(o, n, s, r, a, "next", e)
                    }
                    function a(e) {
                        c(o, n, s, r, a, "throw", e)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function p(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function h(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function f(e, t, i) {
            return t && h(e.prototype, t),
            i && h(e, i),
            e
        }
        function _(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function g(e, t, i) {
            return g = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var s = Object.getOwnPropertyDescriptor(n, t);
                    return s.get ? s.get.call(i || e) : s.value
                }
            }
            ,
            g(e, t, i || e)
        }
        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            m(e)
        }
        function v(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && w(e, t)
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    _(e, t, i[t])
                }
                ))
            }
            return e
        }
        function b(e, t) {
            return !t || "object" != ((i = t) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t;
            var i
        }
        function w(e, t) {
            return w = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            w(e, t)
        }
        function k(e) {
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
                var i, n = m(e);
                if (t) {
                    var s = m(this).constructor;
                    i = Reflect.construct(n, arguments, s)
                } else
                    i = n.apply(this, arguments);
                return b(this, i)
            }
        }
        function E(e, t) {
            var i, n, s, o, r = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function a(o) {
                return function(a) {
                    return function(o) {
                        if (i)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (i = 1,
                                n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                                0) : n.next) && !(s = s.call(n, o[1])).done)
                                    return s;
                                switch (n = 0,
                                s && (o = [2 & o[0], s.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    s = o;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                        r.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && r.label < s[1]) {
                                        r.label = s[1],
                                        s = o;
                                        break
                                    }
                                    if (s && r.label < s[2]) {
                                        r.label = s[2],
                                        r.ops.push(o);
                                        break
                                    }
                                    s[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                o = t.call(e, r)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                i = s = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        }
        var P = {
            picture: "picture",
            video: "video",
            audio: "audio",
            voice: "voice",
            document: "document"
        }
          , F = {}
          , I = {}
          , C = ["image/png", "image/jpeg", "image/jpg", "image/bmp", "image/webp", "image/gif"]
          , A = ["video/mp4"]
          , x = ["ogg", "opus"]
          , S = C.concat(A);
        function j(e) {
            return s().contains(C, e) ? P.picture : s().contains(A, e) ? P.video : P.document
        }
        var T = function(e) {
            v(i, e);
            var t = k(i);
            function i() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                p(this, i);
                var o = n.id
                  , r = n.file_id
                  , c = n.name
                  , d = n.type
                  , h = n.is_uploading
                  , f = n.is_deletable
                  , _ = void 0 === f || f
                  , g = n.is_external
                  , m = void 0 !== g && g
                  , v = n.preview_url
                  , y = n.file
                  , w = n.is_error
                  , k = n.onPreviewLoadError
                  , E = void 0 === k ? function() {
                    e.set({
                        preview_url: "error preview url",
                        is_error: !0
                    })
                }
                : k;
                if (e = t.call(this, {
                    id: o,
                    file_id: r,
                    name: c,
                    type: d,
                    is_external: m,
                    is_uploading: h,
                    is_deletable: _,
                    preview_url: v,
                    file: y,
                    is_error: w
                }),
                y)
                    return (0,
                    u.generateBlobFromFile)({
                        file: y
                    }).then((function(t) {
                        var i = t.blobUrl
                          , n = t.blob;
                        F[y.name] = i,
                        I[i] = {
                            blob: n
                        },
                        e.set({
                            preview_url: i || null
                        })
                    }
                    )).catch((function() {
                        E()
                    }
                    )),
                    b(e);
                if (r) {
                    if (m)
                        return F[r] ? (e.set({
                            preview_url: F[r],
                            is_uploading: !1
                        }),
                        b(e)) : (e.set({
                            is_uploading: !0
                        }),
                        l.default.getMetadata(r).then((function(t) {
                            var i = s().contains([P.video, P.picture], d)
                              , n = s().propertyOf(t)(["_links", "download", "href"]);
                            i ? e.getBlob(n).then((function(e) {
                                F[r] = e,
                                n = e
                            }
                            )).finally((function() {
                                e.set({
                                    preview_url: n,
                                    is_uploading: !1
                                })
                            }
                            )) : e.set({
                                preview_url: "without preview",
                                is_uploading: !1
                            })
                        }
                        )).catch((function() {
                            e.set({
                                is_error: !0,
                                is_uploading: !1,
                                preview_url: "error preview url"
                            }),
                            E()
                        }
                        )),
                        b(e));
                    (0,
                    a.getFile)({
                        id: r
                    }).subscribe((function(t) {
                        e.set({
                            preview_url: d === P.video && t.preview_320 || t.preview_200 || null
                        })
                    }
                    ), E)
                }
                return e
            }
            return f(i, [{
                key: "checkIsAttachmentWithPreview",
                value: function() {
                    var e = this.get("type");
                    return s().contains([P.picture, P.video], e)
                }
            }, {
                key: "getBlob",
                value: function(e) {
                    return fetch(e).then((t = d((function(e) {
                        return E(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, e.arrayBuffer()];
                            case 1:
                                return [2, {
                                    buffer: t.sent(),
                                    mimeType: e.headers.get("content-type") || "image/png"
                                }]
                            }
                        }
                        ))
                    }
                    )),
                    function(e) {
                        return t.apply(this, arguments)
                    }
                    )).then((function(e) {
                        var t = e.buffer
                          , i = e.mimeType
                          , n = new Blob([t],{
                            type: i
                        })
                          , s = URL.createObjectURL(n);
                        return I[s] = {
                            blob: n
                        },
                        s
                    }
                    ));
                    var t
                }
            }, {
                key: "checkIsPreviewRequired",
                value: function() {
                    return this.checkIsAttachmentWithPreview() && !this.get("preview_url")
                }
            }, {
                key: "checkIsLoading",
                value: function() {
                    return this.get("is_uploading") || this.checkIsPreviewRequired()
                }
            }, {
                key: "checkIsUploaded",
                value: function() {
                    return Boolean(this.get("file_id"))
                }
            }, {
                key: "uploadFile",
                value: function() {
                    var e = this
                      , t = this.get("file");
                    return t ? (this._upload_promise || (this._upload_promise = new Promise((function(i, n) {
                        e.set({
                            is_uploading: !0
                        }),
                        (0,
                        r.isFeatureAvailable)("amocrm_drive") ? l.default.uploadFile(t, {
                            with_preview: !0
                        }).then((function(t) {
                            if (!t)
                                return n();
                            var o, a = s().propertyOf(t)(["_links", "download_version", "href"]), l = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , t = e.type
                                  , i = s().propertyOf(e)(["metadata", "mime_type"])
                                  , n = s().propertyOf(e)(["metadata", "extension"]);
                                return t === (P.audio || P.voice) ? !(0,
                                r.isFeatureAvailable)("salesbot_voice_message") && s().contains(x, n) ? P.voice : t : j(i)
                            }(t);
                            e.getBlob(a).then((function(e) {
                                F[t.uuid] = e,
                                o = l === P.picture || P.video ? e : ""
                            }
                            )).finally((function() {
                                e.set({
                                    is_uploading: !1,
                                    is_external: !0,
                                    file_id: t.uuid,
                                    name: [t.name, t.metadata.extension].join("."),
                                    type: l,
                                    preview_url: o,
                                    file: null
                                }),
                                i()
                            }
                            ))
                        }
                        ), n) : (0,
                        a.uploadFile)({
                            file: t
                        }).subscribe((function(t) {
                            var n = t.amo_type
                              , s = t.id
                              , o = t.name
                              , r = t.preview_200
                              , a = t.preview_320;
                            e.set({
                                is_uploading: !1,
                                file_id: s,
                                name: o,
                                type: n,
                                preview_url: e.get("preview_url") || r || a || null,
                                file: null
                            }),
                            i()
                        }
                        ), n)
                    }
                    ))),
                    this._upload_promise) : Promise.resolve()
                }
            }, {
                key: "convertFile",
                value: function(e) {
                    var t = this;
                    return d((function() {
                        var i;
                        return E(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return i = t.get("file_id"),
                                [4, l.default.convertFile(i, e)];
                            case 1:
                                return [2, n.sent()]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }], [{
                key: "makeFromExistingAttachment",
                value: function(e) {
                    var t = e.file_id
                      , n = e.type;
                    return new i(y({
                        id: t,
                        file_id: t,
                        name: e.name,
                        type: n,
                        is_deletable: e.is_deletable,
                        is_uploading: !1,
                        is_external: e.is_external,
                        preview_url: null,
                        file: null,
                        is_error: !1
                    }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
                }
            }, {
                key: "makeFromFile",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new i(y({
                        id: s().escape(e.name),
                        file_id: null,
                        name: e.name,
                        type: j(e.type),
                        is_uploading: !1,
                        preview_url: null,
                        file: e,
                        is_error: !1
                    }, t))
                }
            }, {
                key: "getBlobObjectFromBlobUrl",
                value: function(e) {
                    var t = I[e];
                    return t ? t.blob : null
                }
            }]),
            i
        }(o.Model)
          , $ = function(e) {
            v(i, e);
            var t = k(i);
            function i() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = n.with_single_attachment, o = void 0 !== s && s, r = n.attachment_models;
                return p(this, i),
                (e = t.call(this, r))._with_single_attachment = o,
                e
            }
            return f(i, [{
                key: "add",
                value: function(e, t) {
                    return this._with_single_attachment && this.remove(this.filter((function(t) {
                        return t.id !== e.id
                    }
                    ))),
                    g(m(i.prototype), "add", this).call(this, e, t)
                }
            }, {
                key: "remove",
                value: function(e) {
                    if (this._with_single_attachment) {
                        var t = e || this.at(0)
                          , n = !s().isArray(t) && t.get("file_id");
                        n && delete F[n],
                        g(m(i.prototype), "remove", this).call(this, t)
                    } else
                        delete F[e],
                        g(m(i.prototype), "remove", this).call(this, e)
                }
            }, {
                key: "uploadFileAttachments",
                value: function() {
                    return Promise.all(this.map((function(e) {
                        return e.uploadFile()
                    }
                    ))).then(s().noop)
                }
            }]),
            i
        }(o.Collection)
          , R = "../build/transpiled/interface/uploads/attachments_collection";
        window.define(R, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([R])
    }
    ,
    564e3: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => E
        });
        var n = i(661533)
          , s = i.n(n)
          , o = i(55188)
          , r = i.n(o)
          , a = i(460159)
          , l = i.n(a)
          , u = i(395882)
          , c = i.n(u)
          , d = i(500034)
          , p = i(880774)
          , h = i(889378)
          , f = i(847837)
          , _ = i(521466)
          , g = i(394369);
        function m(e, t, i, n, s, o, r) {
            try {
                var a = e[o](r)
                  , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, s)
        }
        function v(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function y(e, t, i) {
            return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = b(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var s = Object.getOwnPropertyDescriptor(n, t);
                    return s.get ? s.get.call(i || e) : s.value
                }
            }
            ,
            y(e, t, i || e)
        }
        function b(e) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            b(e)
        }
        function w(e, t) {
            return w = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            w(e, t)
        }
        function k(e) {
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
                var i, n = b(e);
                if (t) {
                    var s = b(this).constructor;
                    i = Reflect.construct(n, arguments, s)
                } else
                    i = n.apply(this, arguments);
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
        var E = function(e) {
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
                t && w(e, t)
            }(o, e);
            var t, i, n = k(o);
            function o(e) {
                var t, i = e.onCompleteUploadFile, s = e.onFileApiWindowOver, a = e.callbackFileApiElOver, l = e.url_upload, u = e.onRemoveFile, c = e.onBeforeUploadFile, d = e.onBeforeCheck, p = e.onCheckFailed, h = e.onFileQueueChanged, f = e.onAddAttach, _ = e.getEditing, g = e.max_size_file, m = e.onSendError, v = e.template_item, y = e.accept, b = e.check_file_type, w = void 0 !== b && b;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                (t = n.call.apply(n, [this].concat(Array.prototype.slice.call(arguments)))).onCompleteUploadFile = r().isFunction(i) ? i : r().noop,
                t.onRemoveFile = r().isFunction(u) ? u : r().noop,
                t.onBeforeUploadFile = r().isFunction(c) ? c : r().noop,
                t.onBeforeCheck = r().isFunction(d) ? d : r().noop,
                t.onCheckFailed = r().isFunction(p) ? p : r().noop,
                t.onAddAttach = r().isFunction(f) ? f : r().noop,
                t.getEditing = r().isFunction(_) ? _ : function() {
                    return !0
                }
                ,
                t.onSendError = r().isFunction(m) ? m : r().noop,
                t.onFileApiWindowOver = r().isFunction(s) ? s : r().noop,
                t.callbackFileApiElOver = r().isFunction(a) ? a : r().noop,
                t.onFileQueueChanged = r().isFunction(h) ? h : r().noop,
                t.template_item = v || "/tmpl/notes/attach.twig",
                t.max_size_file = g || null,
                t.url_upload = l || "",
                t.check_file_type = w,
                t._files_queue = [],
                t.applyAcceptAttr(y),
                t
            }
            return t = o,
            i = [{
                key: "isValidType",
                value: function(e) {
                    return !this.check_file_type || r().contains(g.ALL_ACCEPTED_TYPES, e)
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        file_input: 'input[type="file"]'
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        "click .js-attach-remove": "removeFileClick",
                        "mouseover .js-attach-item-error": "onErrorIconHover",
                        "mouseout .js-attach-item-error": "onErrorIconHoverOut"
                    }
                }
            }, {
                key: "onErrorIconHoverOut",
                value: function(e) {
                    s()(e.currentTarget).closest(".js-attach-item").find(".js-error_tip").remove()
                }
            }, {
                key: "onErrorIconHover",
                value: function(e) {
                    var t = s()(e.currentTarget).closest(".js-attach-item")
                      , i = (0,
                    p.i18n)("Failed to upload file");
                    t.append('<div class="feed-note__joined-attach-item-error_tip js-error_tip">' + i + "</div>")
                }
            }, {
                key: "initialize",
                value: function(e) {
                    var t = e.with_dnd
                      , i = void 0 === t || t;
                    r().bindAll(this, "onFileApiInput", "onFileApiElOver", "onFileApiElDrop", "onFileApiWindowOver"),
                    y(b(o.prototype), "initialize", this).call(this),
                    c().event.on(this._elem("file_input").get(0), "change", this.onFileApiInput),
                    this._with_dnd = i,
                    this._with_dnd && (c().event.dnd(this.$el.get(0), this.onFileApiElOver, this.onFileApiElDrop),
                    c().event.dnd(window, this.onFileApiWindowOver, r().noop))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$(".js-attachments").html(""),
                    c().event.off(this._elem("file_input").get(0), "change", this.onFileApiInput),
                    this._with_dnd && (c().event.dnd.off(this.$el.get(0)),
                    c().event.dnd.off(window)),
                    this._current_uploading && this._current_uploading.abort(),
                    y(b(o.prototype), "destroy", this).call(this)
                }
            }, {
                key: "attach",
                set: function(e) {
                    this._files_queue.push(e),
                    this.onFileQueueChanged(),
                    this.renderAttach(e, {
                        loading: this.loading
                    }),
                    this.loading = !1
                }
            }, {
                key: "applyAcceptAttr",
                value: function(e) {
                    if (!r().isEmpty(e)) {
                        var t = r().reduce(e, (function(e, t) {
                            switch (t) {
                            case g.ATTACHMENT_TYPES.picture:
                                return e.concat(g.PICTURE_ACCEPTED_TYPES);
                            case g.ATTACHMENT_TYPES.video:
                                return e.concat(g.VIDEO_ACCEPTED_TYPES);
                            default:
                                return e.concat(t)
                            }
                        }
                        ), []);
                        this._elem("file_input").attr("accept", t.join(","))
                    }
                }
            }, {
                key: "onFileApiElDrop",
                value: function(e) {
                    this.getEditing() && r().each(e, this.addAttach, this)
                }
            }, {
                key: "onFileApiInput",
                value: function(e) {
                    var t, i = this;
                    return (t = function() {
                        var t;
                        return function(e, t) {
                            var i, n, s, o, r = {
                                label: 0,
                                sent: function() {
                                    if (1 & s[0])
                                        throw s[1];
                                    return s[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return o = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            },
                            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }
                            ),
                            o;
                            function a(o) {
                                return function(a) {
                                    return function(o) {
                                        if (i)
                                            throw new TypeError("Generator is already executing.");
                                        for (; r; )
                                            try {
                                                if (i = 1,
                                                n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                                                0) : n.next) && !(s = s.call(n, o[1])).done)
                                                    return s;
                                                switch (n = 0,
                                                s && (o = [2 & o[0], s.value]),
                                                o[0]) {
                                                case 0:
                                                case 1:
                                                    s = o;
                                                    break;
                                                case 4:
                                                    return r.label++,
                                                    {
                                                        value: o[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    r.label++,
                                                    n = o[1],
                                                    o = [0];
                                                    continue;
                                                case 7:
                                                    o = r.ops.pop(),
                                                    r.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                        r = 0;
                                                        continue
                                                    }
                                                    if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                                        r.label = o[1];
                                                        break
                                                    }
                                                    if (6 === o[0] && r.label < s[1]) {
                                                        r.label = s[1],
                                                        s = o;
                                                        break
                                                    }
                                                    if (s && r.label < s[2]) {
                                                        r.label = s[2],
                                                        r.ops.push(o);
                                                        break
                                                    }
                                                    s[2] && r.ops.pop(),
                                                    r.trys.pop();
                                                    continue
                                                }
                                                o = t.call(e, r)
                                            } catch (e) {
                                                o = [6, e],
                                                n = 0
                                            } finally {
                                                i = s = 0
                                            }
                                        if (5 & o[0])
                                            throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0
                                        }
                                    }([o, a])
                                }
                            }
                        }(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return t = c().getFiles(e),
                                i.onBeforeCheck(),
                                [4, f.default.checkCleaningRules(t)];
                            case 1:
                                return n.sent() ? (r().each(t, i.addAttach, i),
                                i._elem("file_input").val(""),
                                [2]) : (i.onCheckFailed(),
                                [2])
                            }
                        }
                        ))
                    }
                    ,
                    function() {
                        var e = this
                          , i = arguments;
                        return new Promise((function(n, s) {
                            var o = t.apply(e, i);
                            function r(e) {
                                m(o, n, s, r, a, "next", e)
                            }
                            function a(e) {
                                m(o, n, s, r, a, "throw", e)
                            }
                            r(void 0)
                        }
                        ))
                    }
                    )()
                }
            }, {
                key: "onTypeValidationError",
                value: function() {
                    this.type_validation_modal = new h.default({
                        destroy: r().bind((function() {
                            this.type_validation_modal = null
                        }
                        ), this)
                    }).showError((0,
                    p.i18n)("Invalid file type"), !1)
                }
            }, {
                key: "addAttach",
                value: function(e) {
                    return !(r().find(this._files_queue, (function(t) {
                        return e.name === t.name
                    }
                    )) || this.max_size_file && !this.checkSizeFile(e) || (this.isValidType(e.type) ? (this.attach = e,
                    this.onAddAttach(e),
                    this.onFileQueueChanged(),
                    0) : (this.onTypeValidationError(),
                    1)))
                }
            }, {
                key: "getFileSize",
                value: function(e) {
                    return r().reduce([e].concat(this._files_queue), (function(e, t) {
                        return e + t.size
                    }
                    ), 0)
                }
            }, {
                key: "checkSizeFile",
                value: function(e) {
                    var t = this.getFileSize(e)
                      , i = (t - c().MB * this.max_size_file) / c().MB
                      , n = Math.floor(10 * i) / 10
                      , s = !!e && !e.size;
                    return !(t > 0 && n > 0 || s) || (this.error_size_modal || this.errorSizeFile(n, s),
                    !1)
                }
            }, {
                key: "errorSizeFile",
                value: function(e, t) {
                    var i = (0,
                    p.i18n)(t ? "Unable to send an empty file" : "You have exceeded the maximum file size for attachments within a single message by #SIZE# MB.".replace("#SIZE#", e));
                    this.onSendError(),
                    this.error_size_modal = new h.default({
                        destroy: r().bind((function() {
                            this.error_size_modal = null
                        }
                        ), this)
                    }).showError(i, !1)
                }
            }, {
                key: "renderAttach",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = t.failed
                      , n = void 0 !== i && i
                      , s = t.loading
                      , o = void 0 !== s && s
                      , a = r().escape(e.name)
                      , u = e.id || a
                      , c = this.$(r().compact([e.id ? '.js-attach-item[data-id="'.concat(e.id, '"]') : null, '.js-attach-item[data-id="'.concat(a, '"]')]).join(","))
                      , d = l()({
                        ref: this.template_item
                    }).render({
                        filename: a,
                        id: u,
                        failed: n,
                        loading: o
                    });
                    c.length ? c.replaceWith(d) : this.$(".js-attachments").append(d)
                }
            }, {
                key: "removeFileClick",
                value: function(e) {
                    var t = s()(e.currentTarget).closest(".js-attach-item").attr("data-id");
                    e.stopPropagation(),
                    this._removeAttachment(t)
                }
            }, {
                key: "_removeAttachment",
                value: function(e) {
                    var t = this.$('.js-attach-item[data-id="' + e + '"]');
                    this._files_queue = r().filter(this._files_queue, (function(e) {
                        return t.attr("data-id") !== r().escape(e.file_id) && t.attr("data-id") !== r().escape(e.name)
                    }
                    )),
                    this.onFileQueueChanged(),
                    this.onRemoveFile(e),
                    t.remove()
                }
            }, {
                key: "uploadFiles",
                value: function() {
                    var e = this
                      , t = r().map(this._files_queue, (function(t) {
                        if (!t.load)
                            return t.load = !0,
                            e.uploadFile(t)
                    }
                    ), this)
                      , i = this.onBeforeUploadFile();
                    return Promise.all(t.concat(i)).then(r().bind((function() {
                        this._files_queue = [],
                        this.onFileQueueChanged()
                    }
                    ), this))
                }
            }, {
                key: "uploadFile",
                value: function(e) {
                    var t = this;
                    return new Promise((function(i, n) {
                        (0,
                        d.isFeatureAvailable)("amocrm_drive") ? (t._current_uploading = f.default.uploadFile(e, {
                            only_auth: !0
                        }),
                        t._current_uploading.then((function(e) {
                            if (e) {
                                var s = r().compact([e.name, e.metadata.extension]).join(".");
                                t.onCompleteUploadFile({
                                    note: {
                                        params: {
                                            text: s,
                                            link: e._links.download,
                                            drive: {
                                                file_uuid: e.uuid,
                                                version_uuid: e.version_uuid,
                                                file_size: e.size
                                            }
                                        },
                                        links: e._links
                                    }
                                }, i, n)
                            }
                        }
                        ))) : t._current_uploading = c().upload({
                            url: t.url_upload,
                            files: {
                                UserFile: e
                            },
                            complete: function(e, o) {
                                if (e)
                                    n(e);
                                else {
                                    var r;
                                    try {
                                        r = s().parseJSON(o.response)
                                    } catch (e) {
                                        return void n(e)
                                    }
                                    "fail" !== r.status ? t.onCompleteUploadFile(r, i, n) : n(r.error)
                                }
                            }
                        })
                    }
                    ))
                }
            }, {
                key: "onFileApiElOver",
                value: function(e) {
                    var t = this.$el;
                    this.getEditing() && (t.hasClass("js-note") || (t = this.$(".js-note")),
                    this.callbackFileApiElOver(e),
                    t.toggleClass("js-dnd-after", e))
                }
            }, {
                key: "onFileApiWindowOver",
                value: function(e) {
                    var t;
                    this.getEditing() && (t = this.$el,
                    this.$el.hasClass("js-note") || (t = this.$el.children(".js-note")),
                    this.onFileApiWindowOver(e),
                    t.toggleClass("js-dnd-before", e))
                }
            }],
            i && v(t.prototype, i),
            o
        }(_.default)
    }
    ,
    328731: (e, t, i) => {
        i.r(t),
        i.d(t, {
            default: () => w
        });
        var n = i(661533)
          , s = i.n(n)
          , o = i(55188)
          , r = i.n(o)
          , a = i(460159)
          , l = i.n(a)
          , u = i(880774)
          , c = i(678640)
          , d = i(853073)
          , p = i(579569)
          , h = i(577486)
          , f = i(758173)
          , _ = i(50888)
          , g = d.keycodes.BACKSPACE
          , m = d.keycodes.ENTER
          , v = d.keycodes.TAB
          , y = d.keycodes.ESCAPE;
        s()(document).on("loaded_users:null", (function() {
            APP.constant("loaded_users", null)
        }
        ));
        var b = f.default.extend({
            overlay_id: "users_select_overlay",
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                return r().extend({}, f.default.prototype._classes.apply(this, t), {
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
            events: r().extend({}, f.default.prototype.events, {
                "click .js-filter-save-managers": "onSaveClick",
                "click .js-filter-cancel-managers": "onCancelClick",
                "keydown .js-multisuggest-input": "onSelectOneKeydown",
                "multisuggest:set_suggest": "setUsers",
                "multisuggest:item:choose": "itemChoose"
            }),
            initialize: function(e) {
                e = r().extend({
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
                f.default.prototype.initialize.call(this, r().extend(e, {
                    no_absolute_positioning: e.no_absolute_positioning,
                    onInit: r().bind(this.onInit, this, e.onInit),
                    onDrop: r().bind((function(e) {
                        e.draggable && (e.draggable.addClass("users-select__remove-after-render").hide(),
                        this.$el.append(e.draggable))
                    }
                    ), this)
                }))
            },
            destroy: function(e) {
                var t, i = this.$el, n = this.$(".js-multisuggest-input"), o = null === (t = n.val()) || void 0 === t ? void 0 : t.trim();
                !0 !== e && o && n.val("").trigger({
                    type: "keydown",
                    keyCode: m,
                    inputValue: o
                });
                var a = this.getSelectedItems()
                  , u = s()(l()({
                    ref: this.options.items_template || "/tmpl/users_select/users_select_items.twig"
                }).render(r().extend({
                    id: this.options.id,
                    class_name: this.options.class_name || "",
                    input_name: this.options.input_name,
                    items: a
                }, this.options.onRenderItemsParams ? this.options.onRenderItemsParams(a) : {})));
                r().isFunction(this.options.onDestroy) && this.options.onDestroy.call(this, a, o, e),
                this.options.id && this.$el.attr("id") !== this.options.id && (i = s()("#".concat(this.options.id))),
                i.replaceWith(u),
                u.find('input[type="checkbox"]').trigger("change"),
                u.find("input.js-focuser").last().focus(),
                f.default.prototype.destroy.call(this)
            },
            escapeDestroy: function(e) {
                if (e.keyCode === y)
                    return this.destroy(!0),
                    !1
            },
            onInit: function(e) {
                this.$el.addClass("users-select-wrapper_editing"),
                r().isFunction(e) && e.call(this)
            },
            setPositions: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                f.default.prototype.setPositions.apply(this, t),
                r().isFunction(this.options.onSetPositions) && this.options.onSetPositions.call(this),
                this.$list.toggleClass("hidden", !this.$list.text()),
                this.sticky_headers && this.sticky_headers.refresh()
            },
            bindEvents: function() {
                f.default.prototype.bindEvents.call(this),
                APP.is_touch_device && this.$el.on("focus blur", ".js-multisuggest-input", r().bind((function() {
                    r().delay(r().bind(this.setPositions, this), 1e3)
                }
                ), this)),
                this.$list.on("click", ".users-select__head-allgroup", r().bind(this.addGroupClick, this)).on("suggest:suggest:click click", ".users-select__head", r().bind(this.addGroupClick, this)).on("click", ".users-select__suggest-item-disabled", r().bind(this.disabledItemClick, this)).on("mouseover", ".users-select__suggest-item-disabled", r().bind(this.disabledItemMouseOver, this)).on("mouseleave", ".users-select__suggest-item-disabled", r().bind(this.disabledItemMouseLeave, this)),
                APP.is_touch_device || (this.sticky_headers = this._addComponent(_.default, {
                    el: this.$list.find(this._selector("suggest")),
                    selector: ".users-select__head-title",
                    max_sticky_count: 6,
                    exclude_scrollbar: !1,
                    filterElements: function(e) {
                        return r().filter(e, (function(e) {
                            return !s()(e).closest(".users-select-row__inner").hasClass("hidden")
                        }
                        ))
                    }
                }))
            },
            onSelectOneKeydown: function(e) {
                if (this.options.select_one && e.keyCode === g)
                    return e.stopPropagation(),
                    !0
            },
            _getRenderParams: function() {
                return r().extend({
                    input_name: this.options.input_name
                }, r().isFunction(this.options.onRenderParams) ? this.options.onRenderParams.call(this) : {})
            },
            _render: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                f.default.prototype._render.apply(this, t),
                this.$list.hide()
            },
            disabledItemClick: function(e) {
                var t, i = s()(e.currentTarget);
                this._hasClass("disabled_item", i) && (t = i.find(this._selector("disabled_reason")),
                this._addClass("disabled_reason_tip_show", t))
            },
            disabledItemMouseOver: function(e) {
                var t = s()(e.currentTarget);
                if (!this._hasClass("item_selected", t)) {
                    var i = t.closest(".js-multisuggest-suggest").find(this._selector("item_selected"));
                    this._removeClass("item_selected", i),
                    this._addClass("item_selected", t),
                    this.locateDisableReason(t)
                }
            },
            disabledItemMouseLeave: function(e) {
                var t = s()(e.currentTarget).find(this._selector("disabled_reason"));
                this._removeClass("disabled_reason_tip_show", t)
            },
            addGroupClick: function(e) {
                var t, i = s()(e.currentTarget).closest(this._selector("group")).attr("data-id"), n = i.replace("group_", ""), o = s()(e.currentTarget).closest(this._selector("group")), a = this.users.allmanagers;
                e.stopPropagation && e.stopPropagation(),
                this.options.select_one || this.options.select_one_group || !o.find(this._selector("group_choose")).length || (this.options.select_group_like_item && !r().includes(this.options.disable_groups_for_select, i) && (a = [{
                    title: (0,
                    p.get)("groups")[i],
                    id: n,
                    group: "y",
                    input_name: this.options.input_group_name
                }]),
                t = r().chain(a).filter((function(e) {
                    return e.group === i || "y" === e.group && e.id === n
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
                this.options.select_group_like_item && !r().includes(this.options.disable_groups_for_select, i) && this.options.select_group_like_item_only && this._findElem("list_item").each((function(e, t) {
                    var n = s()(t);
                    n.data("group") === i && n.remove()
                }
                )),
                !this.options.select_group_like_item || this.options.select_group_like_item_only ? o.parent().remove() : this.setUsers(e, !1),
                r().isFunction(this.options.onGroupChoosed) && this.options.onGroupChoosed.call(this),
                this.setPositions())
            },
            setExistsUsersGroup: function() {
                var e = {};
                this.options.existing_items || (r().each(this.users.allmanagers, (function(t) {
                    var i = this.$(".js-multisuggest-item[data-id=".concat(t.id, "]"));
                    e[t.id] = {
                        id: t.id,
                        title: t.title,
                        group: this.users.allmanagers[t.id].group
                    },
                    i.attr("data-group", this.users.allmanagers[t.id].group)
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
                var i, n, o = this.el.querySelectorAll(".js-multisuggest-item"), a = this.el.querySelector(".js-multisuggest-input"), l = a.value, d = t.suggest_params && r().contains([m, v], t.suggest_params.keyCode);
                r().isUndefined(this.$el.data("values-hash")[t.id]) || (n = this.$el.data("values-hash")[t.id],
                t.group = n.group,
                t.source_name = n.show_source ? n.source_name : "",
                t.original_title = n.origin_title ? "(".concat((0,
                u.capitalize)(n.origin_title), ") / ") : "",
                t.title = t.source_name + t.original_title + n.title,
                t.talk_id = n.talk_id || "",
                n.talk_info && (t.title += " (".concat(n.talk_info, ")"))),
                e && e.stopPropagation && e.stopPropagation(),
                t.is_new && !(0,
                c.isValidEmail)(t.value) || (a.value = "",
                t.is_new ? (r().each(o, (function(e) {
                    e.parentNode.removeChild(e)
                }
                )),
                s()(a.parentNode).before(this.getHtmlElem(t))) : (i = r().filter(o, (function(e) {
                    return s()(e).text() === (t.title || "").toString()
                }
                )),
                this.options.select_one && o.length > 0 && o[0].parentNode.removeChild(o[0]),
                !this.options.select_one && i.length || !s().trim(t.title) || ("y" !== t.group || this.options.select_one_group) && s()(a.parentNode).before(this.getHtmlElem(t))),
                this.options.select_one ? this.destroy() : (this.removeSuggestItem(t),
                (l || d) && this.$el.trigger("multisuggest:set_suggest", [!1]),
                this.$el.trigger("multisuggest:item:choosed"),
                APP.is_touch_device || a.focus()))
            },
            removeSuggestItem: function(e) {
                var t = this.$list.find('.js-multisuggest-item[data-id="'.concat(e.id, '"]')).parent()
                  , i = t.closest(".users-select__body");
                t.remove(),
                this.closingAnEmptyGroup(i),
                this.setPositions()
            },
            closingAnEmptyGroup: function(e) {
                e.is(":empty") && e.parent().remove()
            },
            onItemRemove: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                this._render_users_cache = {},
                this.$el.trigger("multisuggest:set_suggest", [!1]),
                f.default.prototype.onItemRemove.apply(this, t),
                APP.is_touch_device || this.$(".js-multisuggest-input").focus()
            },
            loadItems: function() {
                var e = this;
                this.items_load_promises = [],
                this.loaded_users = [],
                this.$list.addClass("js-loading"),
                !this.options.load_data && APP.constant("loaded_users") ? (this.loaded_users = APP.constant("loaded_users"),
                this.items_load_promises.push(Promise.resolve())) : this.items_load_promises.push(s().ajax({
                    url: "/ajax/get_managers_with_group/",
                    type: "POST",
                    data: this.options.load_data || {},
                    dataType: "json"
                }).done((function(t) {
                    e.loaded_users = t,
                    e.options.load_data || APP.constant("loaded_users", t),
                    r().each(r().where(t.managers, {
                        free_user: "N"
                    }), (function(e) {
                        (0,
                        p.add)(e)
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
                var t = r().result(this.options, "users", {});
                e = e || this.loaded_users,
                this.users = {
                    managers: e.managers,
                    allmanagers: r().extend({}, t.managers, e.managers),
                    groups: r().extend({}, t.groups, e.groups)
                },
                this.options.disabled_users && r().each(this.users.allmanagers, (function(e) {
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
                this.options.from_load && !r().keys(e).length && this.checkSuggestsExists(!1)
            },
            loadManagersForTheSelector: function() {
                return r().isUndefined(this.users.allmanagers) ? {} : r().extend({}, this.users.allmanagers)
            },
            findGroup: function(e) {
                var t = this.$el.data("groups-hash") || {}
                  , i = this.$el.find(".multisuggest__list").find(".multisuggest__list-item:not(.multisuggest__list-item_input)");
                return t = r().filter(t, (function(t, n) {
                    var o = (t || "").toString().toLowerCase()
                      , a = (0,
                    u.transliterate)(o)
                      , l = (0,
                    u.transliterate)(o, "punto");
                    return o && (a.match(e) || l.match(e) || o.match(e)) && this.options.select_one_group && !r().filter(i, (function(e) {
                        return "y" === s()(e).data("group") && s()(e).data("id") === n
                    }
                    ), this).length
                }
                ), this),
                r().isUndefined(t) ? [] : t
            },
            findUser: function(e) {
                var t = this.$el.data("values-hash") || {}
                  , i = this.$el.find(".multisuggest__list").find(".multisuggest__list-item:not(.multisuggest__list-item_input)");
                return r().filter(t, (function(t) {
                    var n = (t.title || "").toString().toLowerCase()
                      , o = (t.login || "").toString().toLowerCase()
                      , a = (0,
                    u.transliterate)(n)
                      , l = (0,
                    u.transliterate)(n, "punto");
                    return n && (a.match(e) || l.match(e) || n.match(e) || o.match(e)) && (this.options.select_one || !r().filter(i, (function(e) {
                        return this.options.select_one_group && "y" === s()(e).data("group") ? s()(e).data("id") === t.group : s()(e).attr("data-id") === t.id.toString()
                    }
                    ), this).length)
                }
                ), this)
            },
            setUsers: function(e, t) {
                var i, n, s = this.getSelectedItems() || {}, o = {}, a = !1;
                e.stopPropagation(),
                !1 === t && (t = ""),
                r().isUndefined(t) || (n = new h.UnsafeRegExp("(^|\\s)".concat(t ? t.replace(/(\[|\/)/gi, "\\$1") : ""),"i"),
                o = this.findGroup(n),
                i = this.findUser(n, o)),
                r().contains(["events", "statsCalls"], APP.getBaseEntity()) && (a = !!s.filter((function(e) {
                    return "0" === e.id
                }
                )).length);
                var u = this.getRenderUsersAndGroups({
                    users: i,
                    groups: o,
                    selected_item: s,
                    value: t
                });
                this.options.has_voice && (r().each(u.users.external, r().bind((function(e) {
                    e.is_disabled = !e.supports_voice,
                    e.is_disabled && (e.disable_reason = this.options.has_voice.reason_text_external)
                }
                ), this)),
                r().each(u.groups, r().bind((function(e) {
                    e.selectable = "external" === e.id,
                    e.is_disabled = "external" !== e.id,
                    e.disable_reason = this.options.reason_text_internal
                }
                ), this))),
                !0 === (r().isEmpty(u.users) && !r().findWhere(u.groups, {
                    hidden: !1
                })) ? this.$list.hide() : this._render_users_cache && r().isEqual(this._render_users_cache, u) && !a || (this.$list.show().find(".multisuggest__suggest").html(l()({
                    ref: this.options.users_template
                }).render({
                    class_name: "users_select_wrapper",
                    select_one: this.options.select_one,
                    rows: u.groups,
                    items: u.users,
                    user_bot: a
                })),
                r().isFunction(this.options.onRenderSuggest) && this.options.onRenderSuggest.call(this),
                this.setPositions()),
                this._elem("input").trigger("multisuggest:select-first", [this.getHighlightedItem(s[0], u)]),
                this._render_users_cache = u
            },
            locateDisableReason: function(e) {
                var t = e.find(this._selector("disabled_reason"))
                  , i = e.find(this._selector("disabled_reason_tip"))
                  , n = e.position().top
                  , s = t.innerHeight();
                n < s ? (i.css("transform", "rotate(45deg)"),
                t.css("top", "2px"),
                i.css("top", "-4px")) : (i.css("transform", "rotate(-135deg)"),
                t.css("top", "".concat(-(s + 28), "px")),
                i.css("top", "".concat(s - 4, "px")))
            },
            getHighlightedItem: function(e) {
                return e
            },
            getRenderUsersAndGroups: function(e) {
                var t = r().reduce(e.users, (function(e, t) {
                    return r().isArray(e[t.group]) || (e[t.group] = []),
                    !1 === this.options.disabled_users ? !0 === t.active && e[t.group].push(t) : e[t.group].push(t),
                    e
                }
                ), {}, this)
                  , i = this.getRenderAllGroup(e.groups, t, e.selected_item);
                return this.options.teammate_mention && (delete t.external,
                delete i.external,
                delete t.bots,
                delete i.bots),
                {
                    users: t,
                    groups: i
                }
            },
            getRenderAllGroup: function(e, t, i) {
                var n = this.$el.data("groups-hash") || {};
                return r().reduce(n, (function(n, s, o) {
                    var a = o.replace("group_", "")
                      , l = !r().includes(this.options.disable_groups_for_select, a);
                    return n[o] = {
                        title: s,
                        selectable: !this.options.select_one && l,
                        select_title: this.options.select_group_like_item && l ? (0,
                        u.i18n)("Select") : null,
                        hidden: !(t[o] || !this.options.select_one && r().indexOf(e, s) + 1),
                        id: o,
                        all_select: r().contains(["other_users"], o) || Boolean(r().findWhere(i, {
                            group: "y",
                            id: a
                        })) || !l
                    },
                    n
                }
                ), {}, this)
            },
            _getSelectedItems: function() {
                return f.default.prototype.getSelectedItems.apply(this, arguments)
            },
            getSelectedItems: function(e) {
                var t, i = this._getSelectedItems(e), n = this.users && this.users.allmanagers ? this.users.allmanagers : (0,
                p.get)(), s = r().propertyOf(e)("input_group_name"), o = r().propertyOf(this.options)("input_group_name");
                return r().map(i, (function(e) {
                    return r().has(n[e.id], "source_group") && (e.title = "".concat(n[e.id].source_group, "(").concat(n[e.id].origin_title, ") / ").concat(n[e.id].title),
                    n[e.id].talk_info && (e.title += "(".concat(n[e.id].talk_info, ")"))),
                    (t = r().extend(r().pick(e, "id", "group", "title", "raw_title"), {
                        name: e.title,
                        is_group: "y" === e.group,
                        talk_id: r().propertyOf(n)([e.id, "talk_id"]) || ""
                    })).is_group ? t.input_name = s || o : (t.group = n[e.id] && n[e.id].group,
                    t.active = n[e.id] && n[e.id].active),
                    t
                }
                ), this)
            }
        });
        const w = b;
        var k = "../build/transpiled/interface/users_select";
        window.define(k, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([k])
    }
    ,
    526161: (e, t, i) => {
        i.r(t),
        i.d(t, {
            generateIifeBlob: () => n
        });
        var n = function(e) {
            try {
                return URL.createObjectURL(new Blob(["(".concat(e, ")()")],{
                    type: "text/javascript"
                }))
            } catch (e) {
                return null
            }
        }
    }
    ,
    656211: (e, t, i) => {
        i.r(t),
        i.d(t, {
            generateIifeBlob: () => n.generateIifeBlob
        });
        var n = i(526161)
    }
    ,
    577376: (e, t, i) => {
        i.r(t),
        i.d(t, {
            convertHeic: () => a
        });
        var n = i(923345);
        function s(e, t, i, n, s, o, r) {
            try {
                var a = e[o](r)
                  , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, s)
        }
        var o, r, a = (o = function(e) {
            var t, s, o;
            return function(e, t) {
                var i, n, s, o, r = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (i = 1,
                                    n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                                    0) : n.next) && !(s = s.call(n, o[1])).done)
                                        return s;
                                    switch (n = 0,
                                    s && (o = [2 & o[0], s.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            r.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && r.label < s[1]) {
                                            r.label = s[1],
                                            s = o;
                                            break
                                        }
                                        if (s && r.label < s[2]) {
                                            r.label = s[2],
                                            r.ops.push(o);
                                            break
                                        }
                                        s[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, r)
                                } catch (e) {
                                    o = [6, e],
                                    n = 0
                                } finally {
                                    i = s = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }(this, (function(r) {
                switch (r.label) {
                case 0:
                    return [4, (0,
                    n.isWebWorkerAvailable)()];
                case 1:
                    if ((t = r.sent()) !== n.WorkerSupportStatus.OK)
                        throw new Error("Broken image worker: ".concat(t));
                    r.label = 2;
                case 2:
                    return r.trys.push([2, 5, , 6]),
                    [4, i.e(87875).then(i.t.bind(i, 887875, 23))];
                case 3:
                    return [4, (0,
                    r.sent().default)({
                        blob: e,
                        toType: "image/jpeg",
                        quality: 1
                    })];
                case 4:
                    return [2, r.sent()];
                case 5:
                    throw a = s = r.sent(),
                    l = Error,
                    o = (null != l && "undefined" != typeof Symbol && l[Symbol.hasInstance] ? l[Symbol.hasInstance](a) : a instanceof l) ? s.message : JSON.stringify(s),
                    new Error("Failed to convert HEIC image with heic2any: ".concat(o));
                case 6:
                    return [2]
                }
                var a, l
            }
            ))
        }
        ,
        r = function() {
            var e = this
              , t = arguments;
            return new Promise((function(i, n) {
                var r = o.apply(e, t);
                function a(e) {
                    s(r, i, n, a, l, "next", e)
                }
                function l(e) {
                    s(r, i, n, a, l, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        function(e) {
            return r.apply(this, arguments)
        }
        )
    }
    ,
    805922: (e, t, i) => {
        function n(e, t, i, n, s, o, r) {
            try {
                var a = e[o](r)
                  , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, s)
        }
        i.r(t),
        i.d(t, {
            generateBlobFromFile: () => a
        });
        var s, o, r = function(e) {
            return new Promise((function(t, i) {
                var n = new FileReader;
                n.onload = function(e) {
                    var n, s = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                    s ? t(s) : i(new Error("Failed to read file data"))
                }
                ,
                n.onerror = function() {
                    i(new Error("Failed to read file"))
                }
                ,
                n.readAsDataURL(e)
            }
            ))
        }, a = (s = function(e) {
            var t, i, n, s, o, a;
            return function(e, t) {
                var i, n, s, o, r = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (i = 1,
                                    n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                                    0) : n.next) && !(s = s.call(n, o[1])).done)
                                        return s;
                                    switch (n = 0,
                                    s && (o = [2 & o[0], s.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            r.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && r.label < s[1]) {
                                            r.label = s[1],
                                            s = o;
                                            break
                                        }
                                        if (s && r.label < s[2]) {
                                            r.label = s[2],
                                            r.ops.push(o);
                                            break
                                        }
                                        s[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, r)
                                } catch (e) {
                                    o = [6, e],
                                    n = 0
                                } finally {
                                    i = s = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }(this, (function(l) {
                switch (l.label) {
                case 0:
                    return t = e.file,
                    [4, r(t)];
                case 1:
                    return i = l.sent(),
                    n = atob(i.split(",")[1]),
                    s = Array.from(n, (function(e) {
                        return e.charCodeAt(0)
                    }
                    )),
                    o = new Uint8Array(s),
                    a = new Blob([o],{
                        type: t.type
                    }),
                    [2, {
                        blobUrl: URL.createObjectURL(a),
                        blob: a
                    }]
                }
            }
            ))
        }
        ,
        o = function() {
            var e = this
              , t = arguments;
            return new Promise((function(i, o) {
                var r = s.apply(e, t);
                function a(e) {
                    n(r, i, o, a, l, "next", e)
                }
                function l(e) {
                    n(r, i, o, a, l, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        function(e) {
            return o.apply(this, arguments)
        }
        )
    }
    ,
    709827: (e, t, i) => {
        i.r(t),
        i.d(t, {
            getHeicImagePreview: () => u
        });
        var n = i(55188)
          , s = i.n(n)
          , o = i(577376);
        function r(e, t, i, n, s, o, r) {
            try {
                var a = e[o](r)
                  , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, s)
        }
        var a, l, u = (a = function(e) {
            var t, i, n, r, a, l, u, c;
            return function(e, t) {
                var i, n, s, o, r = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (i = 1,
                                    n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                                    0) : n.next) && !(s = s.call(n, o[1])).done)
                                        return s;
                                    switch (n = 0,
                                    s && (o = [2 & o[0], s.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            r.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && r.label < s[1]) {
                                            r.label = s[1],
                                            s = o;
                                            break
                                        }
                                        if (s && r.label < s[2]) {
                                            r.label = s[2],
                                            r.ops.push(o);
                                            break
                                        }
                                        s[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, r)
                                } catch (e) {
                                    o = [6, e],
                                    n = 0
                                } finally {
                                    i = s = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }(this, (function(d) {
                switch (d.label) {
                case 0:
                    return i = e.file,
                    [4, (0,
                    o.convertHeic)(i)];
                case 1:
                    return n = d.sent(),
                    r = s().isArray(n) ? n[0] : n,
                    a = URL.createObjectURL(r),
                    l = (null === (t = a.split("/").pop()) || void 0 === t ? void 0 : t.split("#")[0]) || i.lastModified,
                    u = i.name.replace(/\.(heic|heif)$/i, "_".concat(l, ".jpg")),
                    c = new File([r],u,{
                        type: "image/jpeg"
                    }),
                    [2, {
                        previewUrl: a,
                        blob: r,
                        convertedFile: c
                    }]
                }
            }
            ))
        }
        ,
        l = function() {
            var e = this
              , t = arguments;
            return new Promise((function(i, n) {
                var s = a.apply(e, t);
                function o(e) {
                    r(s, i, n, o, l, "next", e)
                }
                function l(e) {
                    r(s, i, n, o, l, "throw", e)
                }
                o(void 0)
            }
            ))
        }
        ,
        function(e) {
            return l.apply(this, arguments)
        }
        )
    }
    ,
    593723: (e, t, i) => {
        i.r(t),
        i.d(t, {
            getImagePreview: () => p
        });
        var n = i(55188)
          , s = i.n(n)
          , o = i(643095)
          , r = i(169867)
          , a = i(709827);
        function l(e, t, i, n, s, o, r) {
            try {
                var a = e[o](r)
                  , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, s)
        }
        var u, c, d = function(e) {
            return new Promise((function(t, i) {
                var n = new FileReader;
                n.onload = function(e) {
                    var n, o = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                    s().isString(o) ? t(o) : i(new Error("Failed to read file as data URL"))
                }
                ,
                n.onerror = function() {
                    return i(new Error("FileReader error"))
                }
                ,
                n.readAsDataURL(e)
            }
            ))
        }, p = (u = function(e) {
            var t, i, n, l, u, c, p;
            return function(e, t) {
                var i, n, s, o, r = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (i = 1,
                                    n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                                    0) : n.next) && !(s = s.call(n, o[1])).done)
                                        return s;
                                    switch (n = 0,
                                    s && (o = [2 & o[0], s.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            r.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && r.label < s[1]) {
                                            r.label = s[1],
                                            s = o;
                                            break
                                        }
                                        if (s && r.label < s[2]) {
                                            r.label = s[2],
                                            r.ops.push(o);
                                            break
                                        }
                                        s[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, r)
                                } catch (e) {
                                    o = [6, e],
                                    n = 0
                                } finally {
                                    i = s = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }(this, (function(h) {
                switch (h.label) {
                case 0:
                    if (!(0,
                    r.isHeicHeifImage)(e))
                        return [3, 5];
                    h.label = 1;
                case 1:
                    return h.trys.push([1, 3, , 5]),
                    [4, (0,
                    a.getHeicImagePreview)({
                        file: e
                    })];
                case 2:
                    return t = h.sent(),
                    i = t.convertedFile,
                    n = t.previewUrl,
                    [2, {
                        file: i,
                        previewUrl: n,
                        type: "image"
                    }];
                case 3:
                    return l = h.sent(),
                    (0,
                    o.captureException)(l),
                    [4, d(e)];
                case 4:
                    return u = h.sent(),
                    [2, {
                        file: e,
                        previewUrl: u,
                        type: "application"
                    }];
                case 5:
                    return [4, d(e)];
                case 6:
                    return c = h.sent(),
                    p = function(e) {
                        if ((0,
                        r.isHeicHeifImage)(e))
                            return "image";
                        var t = e.type;
                        switch (s().first(t.split("/"))) {
                        case "image":
                            return "image";
                        case "video":
                            return "video";
                        default:
                            return "application"
                        }
                    }(e),
                    [2, {
                        file: e,
                        previewUrl: c,
                        type: p
                    }]
                }
            }
            ))
        }
        ,
        c = function() {
            var e = this
              , t = arguments;
            return new Promise((function(i, n) {
                var s = u.apply(e, t);
                function o(e) {
                    l(s, i, n, o, r, "next", e)
                }
                function r(e) {
                    l(s, i, n, o, r, "throw", e)
                }
                o(void 0)
            }
            ))
        }
        ,
        function(e) {
            return c.apply(this, arguments)
        }
        )
    }
    ,
    628612: (e, t, i) => {
        i.r(t),
        i.d(t, {
            HEIC_HEIF_MIME_TYPES: () => a.HEIC_HEIF_MIME_TYPES,
            generateBlobFromFile: () => n.generateBlobFromFile,
            getImagePreview: () => r.getImagePreview,
            setFallbackImage: () => s.setFallbackImage,
            svgToPng: () => o.svgToPng
        });
        var n = i(805922)
          , s = i(925458)
          , o = i(840307)
          , r = i(593723)
          , a = i(169867)
    }
    ,
    169867: (e, t, i) => {
        i.r(t),
        i.d(t, {
            HEIC_HEIF_MIME_TYPES: () => o,
            isHeicHeifImage: () => a
        });
        var n = i(55188)
          , s = i.n(n)
          , o = ["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]
          , r = [".heic", ".heif"]
          , a = function(e) {
            if (e.type) {
                var t = e.type.toLowerCase();
                if (s().contains(o, t))
                    return !0
            }
            if (e.name) {
                var i = e.name.toLowerCase();
                return s().some(r, (function(e) {
                    return i.endsWith(e)
                }
                ))
            }
            return !1
        }
    }
    ,
    925458: (e, t, i) => {
        i.r(t),
        i.d(t, {
            setFallbackImage: () => s
        }),
        i(827378);
        var n = i(880774)
          , s = function(e) {
            var t = APP.constant("user").id;
            e.currentTarget.src = (0,
            n.getDefaultAvatar)(t)
        }
    }
    ,
    840307: (e, t, i) => {
        i.r(t),
        i.d(t, {
            svgToPng: () => n
        });
        var n = function(e) {
            var t = e.svgString
              , i = e.onLoad
              , n = e.width
              , s = void 0 === n ? 300 : n
              , o = e.height
              , r = void 0 === o ? 300 : o
              , a = new Image
              , l = new Blob([t],{
                type: "image/svg+xml;charset=utf-8"
            })
              , u = URL.createObjectURL(l);
            a.onload = function() {
                var e = document.createElement("canvas");
                e.width = s,
                e.height = r;
                var t = e.getContext("2d");
                null == t || t.drawImage(a, 0, 0, s, r);
                var n = e.toDataURL("image/png");
                URL.revokeObjectURL(u),
                i(n)
            }
            ,
            a.src = u
        }
    }
    ,
    923345: (e, t, i) => {
        i.r(t),
        i.d(t, {
            WorkerSupportStatus: () => n.WorkerSupportStatus,
            isWebWorkerAvailable: () => n.isWebWorkerAvailable
        });
        var n = i(690335)
    }
    ,
    690335: (e, t, i) => {
        i.r(t),
        i.d(t, {
            WorkerSupportStatus: () => n,
            isWebWorkerAvailable: () => u
        });
        var n, s = i(55188), o = i.n(s), r = i(913781), a = i(656211), l = 500;
        function u() {
            return new Promise((function(e) {
                if (!r.is_supported)
                    return e("unsupported");
                var t = null
                  , i = null
                  , n = function(t, n) {
                    n && clearTimeout(n),
                    i && i.terminate(),
                    e(t)
                };
                try {
                    var s = (0,
                    a.generateIifeBlob)((function() {
                        onmessage = function() {
                            postMessage("pong")
                        }
                    }
                    ));
                    if (o().isNull(s))
                        return n("init-failed");
                    i = new Worker(s),
                    t = setTimeout((function() {
                        n("timeout", t)
                    }
                    ), l),
                    i.onmessage = function(e) {
                        "pong" === e.data ? n("ok", t) : n("init-failed", t)
                    }
                    ,
                    i.onerror = function() {
                        n("init-failed", t)
                    }
                    ,
                    i.postMessage("ping")
                } catch (e) {
                    n("init-failed", t)
                }
            }
            ))
        }
        !function(e) {
            e.OK = "ok",
            e.UNSUPPORTED = "unsupported",
            e.TIMEOUT = "timeout",
            e.INIT_FAILED = "init-failed"
        }(n || (n = {}))
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
        e._sentryDebugIds[t] = "d77dc5c9-7a55-43cc-8052-db015fd39124",
        e._sentryDebugIdIdentifier = "sentry-dbid-d77dc5c9-7a55-43cc-8052-db015fd39124")
    } catch (e) {}
}();
//# sourceMappingURL=21581.00005c12e1ec914c0731.js.map
