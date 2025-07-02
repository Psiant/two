"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[39877, 2934], {
    437307: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => a
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(974839)
          , o = n.n(r);
        const a = o().Collection.extend({
            set: function(t, e) {
                var n = this.pluck("id")
                  , i = o().Collection.prototype.set.apply(this, arguments);
                return e.save_for_render && (this._fetched = s().isArray(i) ? i : [i],
                this._fetched = s().reject(this._fetched, (function(t) {
                    return s().contains(n, t.get("id"))
                }
                ))),
                i
            },
            searchTerm: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.links = null,
                this.fetch({
                    reset: !0,
                    url: this._getSearchUrl(t)
                })
            },
            _getSearchUrl: function() {
                return s().result(this, "url")
            },
            getFetchedItems: function() {
                return this._fetched
            },
            hasNextPage: function() {
                return s().isUndefined(this.links) || this.links && this.links.next
            },
            clearForReset: function() {
                this.reset(),
                this.links = null
            }
        });
        var l = "../build/transpiled/components/base/suggest/collection";
        window.define(l, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    262562: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => _
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(521466)
          , d = n(300432);
        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        const _ = c.default.extend({
            _list: null,
            _classes: function() {
                return {
                    add_new_btn: "js-suggest__add-new",
                    load_more_btn: "js-suggest__load-more-link",
                    suggest_input: "js-suggest-input",
                    load_more_block: "suggest__load-more",
                    loading: "suggest__load-more_loading",
                    input_loader: "js-suggest-input-loader",
                    items_suggest: "suggest__items-suggest",
                    empty_plug: "suggest__empty-plug",
                    not_found_plug: "suggest__not-found-plug",
                    hidden: "h-hidden"
                }
            },
            events: function() {
                var t = o().result(c.default.prototype, "events", {});
                return t["click ".concat(this._selector("add_new_btn"))] = "onAddNewClick",
                t["click ".concat(this._selector("load_more_btn"))] = "loadMore",
                t["input ".concat(this._selector("suggest_input"))] = "onSuggestInput",
                t["keydown ".concat(this._selector("suggest_input"))] = "onSuggestInputKeydown",
                t
            },
            initialize: function(t) {
                return c.default.prototype.initialize.call(this),
                this._setParams(t)._initCollection(),
                this
            },
            _setParams: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.options = t,
                this._template_params = {},
                this._ItemsCollection = this._ItemsCollection || t._ItemsCollection,
                this._ItemView = this._ItemView || t._ItemView,
                !this._ItemsCollection)
                    throw new Error("No collection constructor provided! ".concat(JSON.stringify(t)));
                if (!this._ItemView)
                    throw new Error("No item view constructor provided! ".concat(JSON.stringify(t)));
                return this
            },
            _initCollection: function() {
                this._list = new this._ItemsCollection([],this._getCollectionParams(this.options))
            },
            _getCollectionParams: function(t) {
                return o().extend({}, t.collection_params || {})
            },
            fetchData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = (this.options.fetch_params || []).concat([l()._preload(this._getTemplates())(), this._list.fetch()]).concat(this._getFetchParams());
                return new Promise(o().bind((function(n) {
                    Promise.all(e).then(o().bind((function() {
                        this._onDataFetch.apply(this, arguments),
                        this.render(n),
                        t.rerender || (this._setListeners(this._list),
                        this._addComponent(d.default, this._getAutoloadParams(this.options)))
                    }
                    ), this))
                }
                ), this))
            },
            rerender: function() {
                return this._list.clearForReset(),
                this.fetchData({
                    rerender: !0
                })
            },
            _getAutoloadParams: function(t) {
                return o().extend({}, {
                    element: this._getScrollContainer().get(0),
                    onLoadMore: o().bind(this.loadMore, this),
                    conditions: {
                        "max-bottom": 350
                    }
                }, t.autoload_params || {})
            },
            loadMore: function() {
                this._list.hasNextPage() && !this._fetching && (this._toggleLoadMoreLoader({
                    load: !0
                }),
                this._fetching = !0,
                this._list.fetch({
                    silent: !0,
                    remove: !1,
                    save_for_render: !0
                }).then(o().bind((function() {
                    this._fetching = !1,
                    this.renderItems(this._getFetchedItems())
                }
                ), this), o().bind(this._toggleLoadMoreLoader, this, {
                    load: !1
                })))
            },
            _getFetchParams: function() {
                return []
            },
            _getFetchedItems: function() {
                return this._list.getFetchedItems()
            },
            _onDataFetch: function() {
                throw new Error("Must be implemented in subclass!")
            },
            _setListeners: function() {
                throw new Error("Must be implemented in subclass!")
            },
            _getTemplates: function() {
                if (!this._templates)
                    throw new Error("No templates for render specified!");
                return o().values(this._templates)
            },
            render: function(t) {
                var e = this._getRenderItems();
                if (!this._templates.main)
                    throw new Error("No template provided!");
                this.$el.html(l()({
                    ref: this._templates.main
                }).render(o().extend(this._template_params, this._getTemplateParams(e)))),
                this.renderItems(e),
                o().isFunction(t) && t()
            },
            renderItems: function(t) {
                var e = document.createDocumentFragment();
                t = t || this._getRenderItems();
                var n = [this.renderAddNewButton(), this.renderLoadMoreButton(), this.renderEmptyPlug(!t.length && !this._search_term), this.renderNotFoundPlug(!t.length && this._search_term)];
                o().each(t, (function(t) {
                    e.appendChild(this._addComponent(this._ItemView, this._getItemParams(this.options, t)).render().el)
                }
                ), this),
                o().each(n, (function(t) {
                    o().isElement(t) && e.appendChild(t)
                }
                )),
                this._getItemsHolder().append(e),
                o().isFunction(this.updateAddNewButton) && this.updateAddNewButton()
            },
            _getItemParams: function(t, e) {
                return o().extend({}, {
                    model: e,
                    isTyping: o().bind(this.isTyping, this)
                }, t.item_params || {})
            },
            renderLoadMoreButton: function() {
                if (this._findElem("load_more_block").remove(),
                this._list.hasNextPage())
                    return s()(l()({
                        ref: "/tmpl/common/suggest/load_more.twig"
                    }).render(this._getLoadMoreButtonParams(this.options))).get(0)
            },
            renderAddNewButton: function() {
                if (this._findElem("add_new_btn").remove(),
                this._search_term && !this.options.cant_add && this._templates.add_new && !this._matchesSearchQuery())
                    return s()(l()({
                        ref: this._templates.add_new
                    }).render(o().extend(this.options.add_new_btn_params || {}, {
                        name: this._search_term
                    }))).get(0)
            },
            renderEmptyPlug: function(t) {
                if (this._findElem("empty_plug").remove(),
                this._templates.empty_plug && t)
                    return s()(l()({
                        ref: this._templates.empty_plug
                    }).render(this.options.empty_plug_params || {})).get(0)
            },
            renderNotFoundPlug: function(t) {
                if (this._findElem("not_found_plug").remove(),
                this._templates.not_found_plug && t)
                    return s()(l()({
                        ref: this._templates.not_found_plug
                    }).render(o().extend(this.options.not_found_plug_params || {}, {
                        search_term: this._search_term
                    }))).get(0)
            },
            _matchesSearchQuery: function() {
                var t = this._getSearchMatchingParams()
                  , e = o().map(this._getRenderItems(), (function(e) {
                    return e.get(t)
                }
                ));
                return o().contains(e, this._search_term)
            },
            _toggleSearchLoader: function(t) {
                this._toggleClass("hidden", "input_loader", (t || {}).hide),
                this._is_typing = !(t || {}).hide
            },
            _toggleLoadMoreLoader: function(t) {
                this._findElem("load_more_block").toggleClass(this._class("loading"), (t || {}).hide)
            },
            _getSearchMatchingParams: function() {
                return "name"
            },
            _getRenderItems: function() {
                return this._list.models
            },
            _getTemplateParams: function() {
                return {}
            },
            _getItemsHolder: function() {
                return this._elem("items_suggest")
            },
            _getScrollContainer: function() {
                return this._getItemsHolder()
            },
            _getLoadMoreButtonParams: function(t) {
                return o().extend({}, t.load_more_btn_params || {})
            },
            onSuggestInput: function(t) {
                var e = s()(t.target).val().trim();
                e !== this._search_term && (this._toggleSearchLoader({
                    hide: !1
                }),
                this._debouncedSearch.call(this, e))
            },
            _debouncedSearch: o().debounce((function(t) {
                this._search_term = t,
                this._list.searchTerm({
                    search: t
                }).then(o().bind((function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var i;
                    this._onSearchFetch.apply(this, function(t) {
                        if (Array.isArray(t))
                            return u(t)
                    }(i = e) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                            return Array.from(t)
                    }(i) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t)
                                return u(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                        }
                    }(i) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    this._getScrollContainer().scrollTop(0),
                    this.renderItems(this._getSearchedItems()),
                    this._toggleSearchLoader({
                        hide: !0
                    })
                }
                ), this), o().bind(this._toggleSearchLoader, this, {
                    hide: !0
                }))
            }
            ), 500),
            _onSearchFetch: o().noop,
            _getSearchedItems: function() {
                return this._getRenderItems()
            },
            onAddNewClick: function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                this.addNewItem()
            },
            onSuggestInputKeydown: function(t) {
                13 === t.keyCode && (t.preventDefault(),
                t.stopPropagation(),
                this.addNewItem())
            },
            isTyping: function() {
                return this._is_typing
            },
            addNewItem: o().noop
        });
        var h = "../build/transpiled/components/base/suggest/index";
        window.define(h, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    679471: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => o
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(521466);
        const o = r.default.extend({
            initialize: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r.default.prototype.initialize.call(this),
                this.areActionsBlocked = s().isFunction(t.isTyping) ? t.isTyping : s().noop,
                this.listenTo(this.model.collection, "reset", s().bind((function() {
                    this.destroy(!0)
                }
                ), this))
            }
        });
        var a = "../build/transpiled/components/base/suggest/item";
        window.define(a, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    407341: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => d
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(871082)
          , o = n.n(r)
          , a = n(678640)
          , l = n(240130)
          , c = n(777464);
        const d = o().Collection.extend({
            model: l.default.Base,
            initialize: function(t, e) {
                this.pages = {
                    current: 0,
                    next: !0
                },
                this.catalog_id = e.catalog_id || 0
            },
            url: function() {
                var t = {
                    catalog_id: this.catalog_id,
                    page_size: 25
                };
                switch (!0) {
                case 0 === this.pages.current:
                    return c.default.getListUrl({
                        qs_params: t
                    });
                case this.hasNextPage():
                    return t.page = ++this.pages.current,
                    c.default.getListUrl({
                        qs_params: t
                    });
                default:
                    return ""
                }
            },
            hasNextPage: function() {
                return this.pages.next
            },
            parse: function(t) {
                return (0,
                a.hasKeys)(t, ["response", "pagination", "pages"]) && (this.pages.current = t.response.pagination.pages.current,
                this.pages.next = this.pages.current < t.response.pagination.pages.total),
                (0,
                a.hasKeys)(t, ["response", "catalog_elements"]) ? t.response.catalog_elements : []
            },
            searchTerm: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.links = null,
                this.fetch({
                    remove: !1,
                    url: this._getSearchUrl(t)
                })
            },
            _getSearchUrl: function(t) {
                var e = {
                    catalog_id: this.catalog_id
                };
                return t.search && (e.term = t.search || ""),
                c.default.getListUrl({
                    qs_params: e
                })
            },
            getItems: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return s().isUndefined(t.selected) ? s().map(this.models, (function(t) {
                    return {
                        id: t.get("id"),
                        name: t.get("name"),
                        sku: t.getSKU()
                    }
                }
                )) : this.filter((function(e) {
                    return e.get("selected") === t.selected
                }
                ))
            }
        });
        var u = "../build/transpiled/components/filter/catalogs/collection";
        window.define(u, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    240130: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => l
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(871082)
          , o = {
            selected: !1
        }
          , a = n.n(r)().Model.extend({
            getSKU: function() {
                var t = s().findWhere(this.get("custom_fields"), {
                    code: "SKU"
                });
                return t && t.values ? s().first(t.values).value : ""
            }
        });
        const l = {
            Base: a.extend({
                defaults: s().clone(o)
            }),
            Selected: a.extend({
                defaults: s().extend(s().clone(o), {
                    selected: !0
                })
            })
        };
        var c = "../build/transpiled/components/filter/catalogs/model";
        window.define(c, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    925301: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => h
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(661533)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(407341)
          , d = n(758173)
          , u = n(717414)
          , _ = n(300432);
        const h = d.default.extend({
            events: s().extend({}, d.default.prototype.events, {
                "multisuggest:set_suggest": "inputSearch"
            }),
            _selectors: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return s().extend({}, d.default.prototype._selectors.apply(this, e), {
                    item_input: ".js-multisuggest-list .js-multisuggest-item input[type=checkbox]"
                })
            },
            initialize: function(t) {
                this.entity = t.entity,
                this.options = t,
                this._initCollection(),
                d.default.prototype.initialize.call(this, {
                    $el: t.$el,
                    $container: t.$container,
                    class_name: t.class_name,
                    suggest_class_name: t.suggest_class_name,
                    replace: !0,
                    cant_add: !0,
                    template: "/tmpl/filter/products/items.twig",
                    item_template: "/tmpl/filter/products/item.twig",
                    inner_item_tmpl: "/tmpl/filter/products/item.twig",
                    existing_items: t.existing_items || {},
                    items: t.items,
                    onInit: s().bind(this.onInit, this, t.onInit),
                    onDestroy: t.onDestroy,
                    onAddItem: t.onAddItem,
                    onRemoveItem: t.onRemoveItem,
                    onItemRemoved: s().bind(this.onItemRemoved, this, t.onItemRemoved),
                    onItemChoosed: s().bind(this.onItemChoosed, this, t.onItemChoosed),
                    onRenderItemsParams: t.onRenderItemsParams
                }),
                this._hideFirstOnScrollThrottled = s().throttle(s().bind(this._hideFirstOnScroll, this), 50, {
                    trailing: !1
                }),
                this._showOnScrollEndThrottled = s().throttle(s().bind(this._showOnScrollEnd, this), 300, {
                    leading: !1
                }),
                window.addEventListener("scroll", this._hideFirstOnScrollThrottled, {
                    capture: !0
                }),
                window.addEventListener("scroll", this._showOnScrollEndThrottled, {
                    capture: !0
                })
            },
            destroy: function() {
                var t = s().map(this.getSelectedItems(), (function(t) {
                    return s().extend({
                        name: t.title
                    }, t)
                }
                ));
                this.rerenderInput(t),
                s().isFunction(this.options.onDestroy) && this.options.onDestroy.call(this, t),
                window.removeEventListener("scroll", this._hideFirstOnScrollThrottled, {
                    capture: !0
                }),
                window.removeEventListener("scroll", this._showOnScrollEndThrottled, {
                    capture: !0
                }),
                d.default.prototype.destroy.call(this)
            },
            _initCollection: function() {
                this.collection = new c.default([],this._getCollectionParams(this.options))
            },
            _getCollectionParams: function(t) {
                return t.catalog_id ? {
                    catalog_id: t.catalog_id
                } : {}
            },
            _hideFirstOnScroll: function(t) {
                this.$list && this.$list.is(":visible") && t.target !== this.$list.get(0).firstChild && (this._hidden_on_scroll = !0,
                this.$list.addClass("hidden"))
            },
            _showOnScrollEnd: function() {
                this._hidden_on_scroll && (this.$list.removeClass("hidden"),
                this.setPositions(),
                this._hidden_on_scroll = !1)
            },
            fetchData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = (this.options.fetch_params || []).concat([this.collection.fetch()]);
                return new Promise(s().bind((function() {
                    Promise.all(e).then(s().bind((function() {
                        this.setItems({
                            items: this.collection.getItems(),
                            selected: this.collection.getItems({
                                selected: !0
                            }),
                            from_load: !0
                        }),
                        this._elem("input").val() && this._elem("input").trigger("input"),
                        this.setPositions(),
                        t.rerender || this._addComponent(_.default, this._getAutoloadParams(this.options))
                    }
                    ), this))
                }
                ), this))
            },
            _getAutoloadParams: function(t) {
                return s().extend({}, {
                    element: this._getScrollContainer().get(0),
                    onLoadMore: s().bind(this.loadMore, this),
                    conditions: {
                        "max-bottom": 350
                    }
                }, t.autoload_params || {})
            },
            loadMore: function() {
                this.collection.hasNextPage() && !this._fetching && (this._toggleLoadMoreLoader({
                    load: !0
                }),
                this._fetching = !0,
                this.collection.fetch({
                    silent: !0,
                    remove: !1
                }).then(s().bind((function() {
                    this._fetching = !1,
                    this.setItems({
                        items: this.collection.getItems(),
                        selected: this.collection.getItems({
                            selected: !0
                        }),
                        from_load: !0
                    })
                }
                ), this), s().bind(this._toggleLoadMoreLoader, this, {
                    load: !1
                })))
            },
            _toggleLoadMoreLoader: s().noop,
            _getScrollContainer: function() {
                return o()(".multisuggest__suggest.js-multisuggest-suggest.custom-scroll")
            },
            inputSearch: function(t, e) {
                this.collection.hasNextPage() && e.length > 2 && (t.stopPropagation(),
                this.collection.searchTerm({
                    search: e
                }).then(s().bind((function() {
                    this._fetching = !1,
                    this.setItems({
                        items: this.collection.getItems(),
                        selected: this.collection.getItems({
                            selected: !0
                        }),
                        from_load: !0
                    }),
                    this.$el.data("values-hash", this.items).trigger("multisuggest:set_suggest", e.toString())
                }
                ), this), s().bind(this._toggleLoadMoreLoader, this, {
                    load: !1
                })))
            },
            onInit: function(t) {
                s().isFunction(t) && t.call(this)
            },
            onItemChoosed: function(t) {
                s().isFunction(t) && t.call(this)
            },
            onItemRemoved: function(t) {
                s().isFunction(t) && t.call(this)
            },
            clickToChoose: function(t) {
                u.default.clickItem(o()(t.currentTarget), {
                    template: this.options.item_template
                }),
                s().isFunction(this.options.onAddItem) && this.options.onAddItem(o()(t.currentTarget))
            },
            setPositions: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                d.default.prototype.setPositions.apply(this, e),
                this.$list.css({
                    width: this.$el.width() + 5
                }),
                s().isFunction(this.options.onSetPositions) && this.options.onSetPositions.call(this),
                this.sticky_headers && this.sticky_headers.refresh()
            },
            _checkVisibilityForPositioning: s().noop,
            loadItems: function() {
                this.fetchData()
            },
            getSelectedItems: function() {
                return s().toArray(this.$(this._selector("list_item")).map((function(t, e) {
                    return s().extend({}, o()(e).data())
                }
                )))
            },
            rerenderInput: function(t) {
                this.options.items_template && this.$el.replaceWith(o()(l()({
                    ref: this.options.items_template
                }).render(s().extend({
                    id: this.options.id,
                    class_name: this.options.class_name || "",
                    items: t
                }, this.options.onRenderItemsParams ? this.options.onRenderItemsParams(t) : {}))))
            }
        });
        var f = "../build/transpiled/components/filter/catalogs/select";
        window.define(f, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    956799: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => u
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(889378)
          , d = function(t) {
            var e = this;
            this.options = s().extend({}, t || {}),
            this.options.id && (this.modal = new c.default({
                class_name: "modal-list",
                init: l()._preload(["/tmpl/common/modal/delete.twig"], (function(t) {
                    e.$modal_body = t,
                    t.html(l()({
                        ref: "/tmpl/common/modal/delete.twig"
                    }).render({
                        caption: APP.lang.filter_preset_remove_caption,
                        message: [{
                            text: APP.lang.filter_preset_remove_msg
                        }],
                        accept_text: APP.lang.filter_preset_remove_accept_button
                    })).trigger("modal:loaded").trigger("modal:centrify"),
                    document.activeElement.blur(),
                    t.on("click", ".modal-body__actions__save", o().bind(e.removeRequest, e)),
                    this.$modal.on("click", (function(t) {
                        t.stopPropagation()
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
            this.xhr || (this.xhr = s().ajax({
                url: "/api/".concat(this.options.entity_preset, "/custom_presets/").concat(this.options.id),
                type: "DELETE"
            }).done(o().bind((function(t) {
                1 === t.response && (this.xhr = null,
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
        const u = d;
        var _ = "../build/transpiled/components/filter/delete_preset";
        window.define(_, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    324586: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => c
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(880774)
          , o = n(572779)
          , a = n(758173)
          , l = n(559739);
        const c = l.default.extend({
            _selectors: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = l.default.prototype._selectors.apply(this, e);
                return s().extend({}, i, {
                    item_by_group_id: '.js-multisuggest-item[data-group-id="%s"]',
                    not_selectable_item_by_id: '.js-multisuggest-item-not-selectable[data-id="%s"]'
                })
            },
            initialize: function(t) {
                var e = this
                  , n = t.onItemChoosed || s().noop;
                this.entity = t.entity,
                this.options = t,
                a.default.prototype.initialize.call(this, {
                    $el: t.$el,
                    $container: t.$container,
                    class_name: t.class_name,
                    suggest_class_name: t.suggest_class_name,
                    replace: !0,
                    cant_add: !s().isBoolean(t.cant_add) || t.cant_add,
                    template: "/tmpl/filter/tags/wrapper.twig",
                    items_template: t.items_template || "/tmpl/filter/tags/items.twig",
                    existing_items: t.tags || {},
                    items: t.items,
                    onInit: t.onInit,
                    onDestroy: t.onDestroy,
                    onAddItem: t.onAddItem,
                    onRemoveItem: t.onRemoveItem,
                    onItemRemoved: t.onItemRemoved,
                    onItemChoosed: function() {
                        e.toggleGroupsVisibility(),
                        n.call(this)
                    },
                    onRenderItemsParams: t.onRenderItemsParams,
                    loadItems: t.loadItems
                })
            },
            onInit: s().noop,
            destroy: function() {
                this.options.cant_add || this.save();
                var t = s().map(this.getSelectedItems(), (function(t) {
                    return s().extend({
                        name: t.title
                    }, t)
                }
                ));
                this.rerenderInput(t),
                s().isFunction(this.options.onDestroy) && this.options.onDestroy.call(this, t),
                a.default.prototype.destroy.apply(this)
            },
            setPositions: function() {
                a.default.prototype.setPositions.apply(this),
                this.toggleGroupsVisibility(),
                this.$list.css({
                    width: this.$el.width() + 5,
                    left: parseFloat(this.$list.css("left")) - 3
                }),
                s().isFunction(this.options.onSetPositions) && this.options.onSetPositions.apply(this)
            },
            parseLoadedTags: function(t, e) {
                var n = []
                  , i = this;
                return s().each(t, (function(t) {
                    (i.options.full_tags || t.frequency) && (e && (t.entity = e,
                    t.group_id = e),
                    t.is_filter_by_id = !0,
                    n.push(t))
                }
                )),
                n
            },
            toggleGroupsVisibility: function() {
                var t = this.options.entity
                  , e = this;
                s().isArray(t) && (s().each(t, (function(t) {
                    e.$list.find(e._selector("item_by_group_id", t)).length || e.$list.find(e._selector("not_selectable_item_by_id", t)).remove()
                }
                )),
                e.$list.find(this._selector("item")).length || e.$el.removeClass("multisuggest_show-suggest").trigger("multisuggest:no_value"))
            },
            loadItems: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = this.options.entity
                  , a = this;
                if (s().isArray(i)) {
                    var c = {}
                      , d = 0;
                    a.$list.addClass("js-loading"),
                    s().each(i, (function(t) {
                        c[t] = [],
                        (0,
                        o.getFullTagsList)({
                            entity: t
                        }).then((function(e) {
                            var n;
                            d++,
                            c[t] = a.parseLoadedTags(e.items, t),
                            d === i.length && (n = s().chain(c).map((function(t, e) {
                                return t.unshift({
                                    id: e,
                                    type: "head",
                                    class_name: "js-multisuggest-item-not-selectable",
                                    name: (0,
                                    r.i18n)((0,
                                    r.capitalize)(e))
                                }),
                                t
                            }
                            ), []).values().flatten().value(),
                            a.$list.removeClass("js-loading"),
                            a.setItems({
                                items: n,
                                selected: a.options.existing_items,
                                from_load: !0
                            }),
                            a.setPositions())
                        }
                        ))
                    }
                    ))
                } else
                    l.default.prototype.loadItems.apply(this, e)
            }
        });
        var d = "../build/transpiled/components/filter/fast_tags";
        window.define(d, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    230593: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => d
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(925301);
        const d = {
            events: {
                "click .filter-search__linked_entity": "initLinkedEntity"
            },
            initLinkedEntity: function(t) {
                var e = s()(t.currentTarget)
                  , n = e.closest(".filter-search__linked_entity-holder");
                t.stopPropagation(),
                n.parent().parent().find(".js-filter-search__entity-header").click(),
                this._linkedEntity = new c.default({
                    $el: e,
                    suggest_class_name: "filter__linked_entity-suggest linked_entity-suggest-list",
                    items_template: "/tmpl/filter/linked_entity/select.twig",
                    catalog_id: n.data("search-in-id"),
                    onRenderItemsParams: function() {
                        return {
                            input_name: n.data("input-name") || "",
                            inner_item_tmpl: "/tmpl/filter/linked_entity/item.twig"
                        }
                    },
                    existing_items: s().map(e.find(".js-multisuggest-item"), (function(t) {
                        return {
                            id: parseInt(s()(t).attr("data-id")) || 0,
                            name: s()(t).attr("data-title")
                        }
                    }
                    )),
                    onInit: o().bind((function() {
                        e.parent().addClass("js-in-edit"),
                        this._fixFilterForSuggest({
                            fix: !0
                        })
                    }
                    ), this),
                    onDestroy: o().bind((function(t) {
                        this._linkedEntity = null,
                        e.parent().removeClass("js-in-edit"),
                        this._fixFilterForSuggest({
                            fix: !1
                        }),
                        this.refreshSelectedElements(t, n)
                    }
                    ), this)
                })
            },
            refreshSelectedElements: function(t, e) {
                var n = !0
                  , i = e.data("input-name");
                (!t || o().isArray(t) && !t.length) && (e.find(".filter-search__linked_entity").html(l()({
                    ref: "/tmpl/filter/linked_entity/select.twig"
                }).render({
                    items: t || [],
                    input_name: i,
                    inner_item_tmpl: "/tmpl/filter/linked_entity/item.twig"
                })),
                this._linkedEntity && this._linkedEntity.destroy(),
                n = !1),
                this.checkSuggestValues(e, i),
                e.toggleClass("glow", n)
            }
        }
    }
    ,
    704622: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => l
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r);
        function a(t) {
            return t.data("element-type") || APP.element_types[APP.getBaseEntity()] || APP.getBaseEntity()
        }
        const l = {
            cacheFilledInputName: function(t, e) {
                var n = a(e.closest(this._selector("entity_wrapper")));
                o().isArray(this.checked_fields[n]) || (this.checked_fields[n] = []);
                var i = this.checked_fields[n];
                o().contains(i, t) || i.push(t)
            },
            unsetFilledInputName: function(t) {
                var e = t.find(":input:not(.js-filter-clear-skip)")
                  , n = t.closest(this._selector("entity_wrapper"));
                if (n.length) {
                    var i = a(n)
                      , r = this.checked_fields[i];
                    if (o().contains(["tags", "users"], t.data("tmpl"))) {
                        var l = t.data("input-name");
                        o().isArray(r) && o().contains(r, l) && r.splice(o().indexOf(r, l), 1)
                    }
                    e.length && o().isArray(r) && s().each(e, (function(t, e) {
                        var n = s()(e).attr("name");
                        o().contains(r, n) && r.splice(o().indexOf(r, n), 1)
                    }
                    )),
                    this.setEntityWrapperClass()
                }
            },
            resetFilledInputNames: function() {
                o().isEmpty(this.checked_fields) || o().each(o().keys(this.checked_fields), (function(t) {
                    this.checked_fields[t] = []
                }
                ), this)
            },
            setEntityWrapperClass: function() {
                o().each(this.checked_fields, (function(t, e) {
                    this._findElem("entity_wrapper_by_type", e).length && this._findElem("entity_wrapper_by_type", e).toggleClass("filter-search__entity-wrapper_filled", !!t.length)
                }
                ), this)
            }
        }
    }
    ,
    517790: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => d
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(925301);
        const d = {
            events: {
                "click .filter-search__products": "initProducts"
            },
            initProducts: function(t) {
                var e = s()(t.currentTarget)
                  , n = e.closest(".filter-search__products-holder");
                t.stopPropagation(),
                n.parent().parent().find(".js-filter-search__entity-header").click(),
                this._products = new c.default({
                    $el: e,
                    entity: n.data("element-type-name") || APP.getBaseEntity(),
                    suggest_class_name: "filter__products-suggest products-suggest-list",
                    items_template: "/tmpl/filter/products/select.twig",
                    catalog_id: APP.constant("account").products.catalog_id,
                    onRenderItemsParams: function() {
                        return {
                            input_name: n.data("input-name") || "",
                            inner_item_tmpl: "/tmpl/filter/products/item.twig"
                        }
                    },
                    existing_items: s().map(e.find(".js-multisuggest-item"), (function(t) {
                        return {
                            id: parseInt(s()(t).attr("data-id")) || 0,
                            sku: s()(t).attr("data-sku") || "",
                            name: s()(t).attr("data-title")
                        }
                    }
                    )),
                    onInit: o().bind((function() {
                        e.parent().addClass("js-in-edit"),
                        this._fixFilterForSuggest({
                            fix: !0
                        })
                    }
                    ), this),
                    onDestroy: o().bind((function(t) {
                        this._products = null,
                        e.parent().removeClass("js-in-edit"),
                        this._fixFilterForSuggest({
                            fix: !1
                        }),
                        this.refreshSelectedProducts(t, n)
                    }
                    ), this)
                })
            },
            refreshSelectedProducts: function(t, e) {
                var n = !0
                  , i = e.data("input-name") || "product[]";
                (!t || o().isArray(t) && !t.length) && (e.find(".filter-search__products").html(l()({
                    ref: "/tmpl/filter/products/select.twig"
                }).render({
                    items: t || [],
                    input_name: i,
                    inner_item_tmpl: "/tmpl/filter/products/item.twig"
                })),
                this._products && this._products.destroy(),
                n = !1),
                this.checkSuggestValues(e, i),
                this.form.model.set("filter[products][]", t.length > 0 ? o().pluck(t, "id") : ""),
                e.toggleClass("glow", n)
            }
        }
    }
    ,
    279444: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => d
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(324586);
        const d = {
            events: {
                "click .filter-search__tags": "initTags"
            },
            initTags: function(t) {
                var e = s()(t.currentTarget)
                  , n = e.closest(".filter-search__tags-holder");
                t.stopPropagation(),
                this._tags = new c.default({
                    $el: e,
                    entity: n.data("element-type-name") || APP.getBaseEntity(),
                    suggest_class_name: "filter__tags-suggest fast-tags-suggest-list",
                    items_template: "/tmpl/filter/tags/items.twig",
                    onRenderItemsParams: function() {
                        return {
                            input_name: n.data("input-name") || ""
                        }
                    },
                    tags: s().map(e.find(".js-multisuggest-item"), (function(t) {
                        return {
                            id: parseInt(s()(t).attr("data-id")) || 0,
                            color: s()(t).attr("data-color"),
                            name: s()(t).text()
                        }
                    }
                    )),
                    onInit: o().bind((function() {
                        e.parent().addClass("js-in-edit"),
                        this._fixFilterForSuggest({
                            fix: !0
                        })
                    }
                    ), this),
                    onDestroy: o().bind((function(t) {
                        this._tags = null,
                        e.parent().removeClass("js-in-edit"),
                        this._fixFilterForSuggest({
                            fix: !1
                        }),
                        this.refreshSelectedTags(t, n)
                    }
                    ), this)
                })
            },
            refreshSelectedTags: function(t, e, n) {
                var i = !0
                  , s = (e = e || this._findElem("tags_field")).data("input-name") || "tag[]";
                e.find(".filter-search__tags").html(l()({
                    ref: "/tmpl/filter/tags/items.twig"
                }).render({
                    items: t || [],
                    input_name: s
                })),
                (!t || o().isArray(t) && !t.length) && (this._tags && this._tags.destroy(),
                i = !1),
                (o().isUndefined(n) || n) && this.checkSuggestValues(e, s),
                e.toggleClass("glow", i)
            }
        }
    }
    ,
    196924: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => c
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(460159)
          , o = n.n(r)
          , a = n(41188)
          , l = n(661533);
        const c = {
            events: {
                "click .filter-search__users-select-holder .js-multisuggest": "initUsersSelectManagers"
            },
            usersSelectClear: function(t) {
                this._users_select && this._users_select.destroy(),
                this.refreshSelectedUsers.apply(this, arguments),
                this.form.checkChanges()
            },
            refreshSelectedUsers: function(t, e, n) {
                return this._refreshSelectedUsers({
                    items: t || [],
                    $wrapper: e,
                    input_name: e.data("input-name"),
                    template: n
                })
            },
            _refreshSelectedUsers: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = !0
                  , n = t.$wrapper
                  , i = n.find(".js-multisuggest");
                (!t.items || s().isArray(t.items) && !t.items.length || t.is_important_render) && (i.replaceWith(o()({
                    ref: t.template || "/tmpl/users_select/users_select_items.twig"
                }).render(s().extend(t, {
                    id: i.attr("id")
                }))),
                t.is_important_render ? (!t.items || s().isArray(t.items) && !t.items.length) && (e = !1) : e = !1),
                s().isFunction(this.checkSuggestValues) && this.checkSuggestValues(n, t.input_name),
                n.toggleClass("glow", e)
            },
            initUsersSelectManagers: function(t, e) {
                var n = this
                  , i = l(t.currentTarget)
                  , r = i.closest(".filter-search__users-select-holder")
                  , o = r.data("input-name");
                t.stopPropagation(),
                this._users_select = new a.default(s().extend({
                    el: t.currentTarget,
                    id: i.attr("id"),
                    input_name: o,
                    suggest_class_name: "filter__users-select-suggest",
                    replace: !0,
                    select_one: !1,
                    not_remove: !1,
                    disable_groups_for_select: this.params.disable_groups_for_select,
                    disabled_users: this.params.disabled_users,
                    users: s().has(this.params, "users") ? this.params.users : {},
                    existing_items: function() {
                        return l.makeArray(r.find(".js-multisuggest-item").map((function() {
                            return {
                                id: l(this).attr("data-id"),
                                title: l.trim(l(this).text())
                            }
                        }
                        )))
                    },
                    onInit: function() {
                        this.$el.closest(".filter__custom_settings__item").addClass("js-in-edit"),
                        s().isFunction(n._fixFilterForSuggest) && n._fixFilterForSuggest({
                            fix: !0
                        })
                    },
                    onRenderSuggest: function() {
                        this.$list.width(r.outerWidth())
                    },
                    onItemChoosed: function() {
                        this.$el.parent().scrollTop(1e4)
                    },
                    onGroupChoosed: function() {
                        this.$el.parent().scrollTop(1e4)
                    },
                    onDestroy: function(t) {
                        this.$el.closest(".filter__custom_settings__item").removeClass("js-in-edit"),
                        s().isFunction(n._fixFilterForSuggest) && n._fixFilterForSuggest({
                            fix: !1
                        }),
                        n.refreshSelectedUsers(t, r),
                        n._users_select = null
                    }
                }, e))
            }
        }
    }
    ,
    743094: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => u
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(880774);
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function a(t, e, n) {
            return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var s = Object.getOwnPropertyDescriptor(i, e);
                    return s.get ? s.get.call(n || t) : s.value
                }
            }
            ,
            a(t, e, n || t)
        }
        function l(t) {
            return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            l(t)
        }
        function c(t, e) {
            return c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            c(t, e)
        }
        function d(t) {
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
                var n, i = l(t);
                if (e) {
                    var s = l(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else
                    n = i.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((n = e) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var n
                }(this, n)
            }
        }
        var u = function(t) {
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
                e && c(t, e)
            }(u, t);
            var e, n, i = d(u);
            function u() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, u),
                i.apply(this, arguments)
            }
            return e = u,
            n = [{
                key: "_selectors",
                value: function() {
                    return {
                        header: ".segments-filter__header",
                        and_radio: '[name="filter[segments_logic]"][value="and"]',
                        item_checkboxes: 'input[type="checkbox"]',
                        item_name: '.suggest-segments__item_filter-list[data-id="%s"] .suggest-segments__name',
                        item: '.segments-filter__item[data-id="%s"]',
                        items: ".segments-filter__item",
                        empty_find_item: ".segments-filter__item_empty-find",
                        checked_item: ".segments-filter__item-checkbox:checked"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        header_visible: "segments-filter__header_visible"
                    }
                }
            }, {
                key: "events",
                get: function() {
                    return s().extend({
                        "click .js-segments-filter-header-clear": "clear",
                        "input .segments-filter__input": "findSegments"
                    }, a(l(u.prototype), "events", this))
                }
            }, {
                key: "initialize",
                value: function(t) {
                    var e = t.segments;
                    this.segments = e,
                    a(l(u.prototype), "initialize", this).apply(this, arguments),
                    this.listenTo(this.model, "all", s().throttle(s().bind(this.checkChanged, this), 400))
                }
            }, {
                key: "clear",
                value: function() {
                    this._findElem("and_radio").click(),
                    this._findElem("item_checkboxes").attr("checked", !1).trigger("change")
                }
            }, {
                key: "getNameSelected",
                value: function(t) {
                    return this._findElem("item_name", t).text().trim()
                }
            }, {
                key: "findSegments",
                value: function(t) {
                    var e = this
                      , n = String(t.target.value).toLowerCase()
                      , i = s().map(this._findElem("checked_item"), (function(t) {
                        return parseInt(t.value)
                    }
                    ))
                      , o = 0;
                    this._findElem("items").show(),
                    this._findElem("empty_find_item").hide();
                    var a = s().map(this.segments.list, (function(t) {
                        var r = -1 !== String(t.name).toLowerCase().indexOf(n);
                        if (r && o++,
                        !r && !s().contains(i, t.id))
                            return e._selector("item").replace("%s", t.id)
                    }
                    ));
                    0 === o && this._findElem("empty_find_item").show().text((0,
                    r.i18n)("No segments were found for «%s»").replace("%s", n)),
                    this.$el.find(s().compact(a).join(", ")).hide()
                }
            }, {
                key: "checkChanged",
                value: function() {
                    var t = s().isEmpty(this.model.get("filter[segments][]"));
                    t && "and" !== this.model.get("filter[segments_logic]") && (this.model.set("filter[segments_logic]", "and"),
                    this._findElem("and_radio").click()),
                    this._findElem("header").toggleClass(this._class("header_visible"), !t)
                }
            }],
            n && o(e.prototype, n),
            u
        }(n(929658).default.View)
          , _ = "../build/transpiled/components/filter/segments";
        window.define(_, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    704320: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => p
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(460159)
          , o = n.n(r)
          , a = n(880774)
          , l = n(521466)
          , c = n(661533);
        function d(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function u(t, e, n) {
            return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var s = Object.getOwnPropertyDescriptor(i, e);
                    return s.get ? s.get.call(n || t) : s.value
                }
            }
            ,
            u(t, e, n || t)
        }
        function _(t) {
            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            _(t)
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
                var n, i = _(t);
                if (e) {
                    var s = _(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else
                    n = i.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((n = e) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var n
                }(this, n)
            }
        }
        var p = function(t) {
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
            var e, n, i = f(r);
            function r() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                i.apply(this, arguments)
            }
            return e = r,
            n = [{
                key: "default_value",
                get: function() {
                    return ""
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        'controls:change [name="statistic_select"]': "onFieldSelect"
                    }
                }
            }, {
                key: "initialize",
                value: function(t) {
                    var e = t.fields
                      , n = t.findCustomFieldElement;
                    this.fields = e,
                    this.findCustomFieldElement = n,
                    this.renderSelect(),
                    u(_(r.prototype), "initialize", this).apply(this, arguments)
                }
            }, {
                key: "renderSelect",
                value: function() {
                    var t = this
                      , e = "/tmpl/controls/select.twig"
                      , n = s().reduce(s().keys(this.fields), (function(e, n) {
                        return e.concat([{
                            id: n,
                            option: t.fields[n].title
                        }])
                    }
                    ), [{
                        id: this.default_value,
                        option: (0,
                        a.i18n)("Select field")
                    }]);
                    o()._preload([e])().then((function() {
                        t.$el.html(o()({
                            ref: e
                        }).render({
                            name: "statistic_select",
                            items: n,
                            selected: t.default_value
                        }))
                    }
                    ))
                }
            }, {
                key: "onFieldSelect",
                value: function(t) {
                    var e = c(t.currentTarget).val();
                    if (e !== this.default_value) {
                        var n = "filter[cf][".concat(e, "]");
                        this.findCustomFieldElement(n).removeClass("hidden").insertBefore(this.$el),
                        delete this.fields[e],
                        this.renderSelect()
                    }
                }
            }],
            n && d(e.prototype, n),
            r
        }(l.default)
          , g = "../build/transpiled/components/filter/statistic";
        window.define(g, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    814055: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => f
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(880774)
          , o = n(237262)
          , a = n(262562)
          , l = n(702934)
          , c = n(988882)
          , d = n(486318)
          , u = n(517729)
          , _ = n(661533)
          , h = d.default.extend({
            searchTerm: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.links = null,
                this.remove(this.filter((function(t) {
                    return !t.get("selected")
                }
                ))),
                this.fetch({
                    remove: !1,
                    url: this._getSearchUrl(t)
                })
            }
        });
        const f = a.default.extend({
            _ItemsCollection: h,
            _ItemView: c.default,
            _need_rerender: null,
            tag_input_name: "tag[]",
            className: "filter-search__tags-lib tags-lib",
            id: "filter-search__tags-lib",
            _classes: function() {
                return s().extend({}, s().result(a.default.prototype, "_classes"), {
                    hidden: "h-hidden",
                    header: "tags-lib__header",
                    tags_logic_visible: "tags-lib__header_tags-logic-visible",
                    manage_btn: "js-tags-lib__manage",
                    deselect_btn: "js-tags-lib__header-deselect"
                })
            },
            _selectors: function() {
                return s().extend({}, s().result(a.default.prototype, "_selectors"), {
                    tags_logic_inputs: ".tags-lib__tags-logic-holder input"
                })
            },
            events: function() {
                var t = s().result(a.default.prototype, "events", {});
                return t["click ".concat(this._selector("manage_btn"))] = "showTagsManageModal",
                t["click ".concat(this._selector("deselect_btn"))] = "deselectAll",
                t
            },
            _setParams: function() {
                return a.default.prototype._setParams.apply(this, arguments),
                this.entity = this.options.entity || APP.getBaseEntity(),
                this.tag_input_name = this.options.tag_input_name || this.tag_input_name,
                s().isFunction(this.options.checkSuggestValues) && (this.checkTagItemsChanges = s().bind((function() {
                    this.options.checkSuggestValues(this.$el, this.tag_input_name)
                }
                ), this)),
                this
            },
            _initCollection: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = this._getCollectionParams(this.options);
                i.url_params.qs_params = {
                    filter: {
                        id: this.options.selected_tags
                    }
                },
                a.default.prototype._initCollection.apply(this, e),
                this.options.selected_tags && this.options.selected_tags.length && (this._sel = new this._ItemsCollection([],s().extend({
                    model: u.default.Selected
                }, i)))
            },
            _getCollectionParams: function(t) {
                return {
                    url_params: {
                        entity: this.entity,
                        pipeline_id: t.pipeline_id
                    }
                }
            },
            _getFetchParams: function() {
                return [this._sel ? this._sel.fetch() : s().noop]
            },
            _onDataFetch: function() {
                var t;
                this._sel && (t = s().map(this._sel.models, (function(t) {
                    return t.toJSON()
                }
                )),
                this._list.set(t, {
                    merge: !0,
                    remove: !1
                }))
            },
            _setListeners: function(t) {
                this.listenTo(t, "change:selected", this.onTagsLibItemChange)
            },
            _templates: {
                main: "/tmpl/filter/tags_lib/index.twig",
                item: "/tmpl/filter/tags_lib/item.twig",
                empty_plug: "/tmpl/filter/tags_lib/empty_plug.twig",
                not_found_plug: "/tmpl/common/tags/not_found_plug.twig"
            },
            _getRenderItems: function() {
                return this._list.getSortedBySelected()
            },
            renderNotFoundPlug: function() {
                var t = s().reject(this._list.getSortedByFrequency(), (function(t) {
                    return t.get("selected")
                }
                ));
                return a.default.prototype.renderNotFoundPlug.call(this, !t.length && this._search_term)
            },
            _getFetchedItems: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = a.default.prototype._getFetchedItems.apply(this, e);
                return s().filter(i, (function(t) {
                    return t.get("total")
                }
                ))
            },
            _getSearchedItems: function() {
                return this._list.getNonSelectedItems()
            },
            _getTemplateParams: function(t) {
                return s().extend({
                    manage_tags: (0,
                    o.isAdmin)(),
                    has_tags: t.length
                }, this.options.tags_logic_enabled ? {
                    tags_logic: {
                        disabled: !this._list.getSelectedItemsCount(),
                        name: this.options.tags_logic_input_name || "",
                        value: this.options.getTagsLogicValue()
                    }
                } : {})
            },
            _getScrollContainer: function() {
                return this.options.$filter_scroller
            },
            _getLoadMoreButtonParams: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = a.default.prototype._getLoadMoreButtonParams.apply(this, e);
                return s().extend(i, {
                    class_name: "tags-lib__item tags-lib__item_load-more",
                    inner_class_name: "tags-lib__link-text",
                    button_text: (0,
                    r.i18n)("More tags")
                })
            },
            onTagsLibItemChange: function(t) {
                this._sel || (this._sel = new this._ItemsCollection),
                t.get("selected") ? this._sel.add(t.toJSON()) : (this._sel.remove(t),
                this.checkTagItemsChanges()),
                this.toggleTagsLogic()
            },
            onSuggestInput: function(t) {
                var e = _(t.target).val().trim();
                e !== this._search_term && (this._toggleSearchLoader({
                    hide: !1
                }),
                this._debouncedSearch.call(this, e))
            },
            toggleTagsLogic: function() {
                var t = this._findElem("tags_logic_inputs")
                  , e = !this._list.getSelectedItemsCount();
                t.length && (e && t.filter('[value="or"]').trigger("custom_radio_change"),
                t.trigger("controls:disable", e),
                this._toggleClass("tags_logic_visible", "header", !e))
            },
            _checkRemovedTags: function() {
                this.checkTagItemsChanges(),
                this.toggleTagsLogic()
            },
            onTagsManageModalDestroy: function(t) {
                if ((t = t || {}).deleted_tags && t.deleted_tags.length && (this._list.removeTags(t.deleted_tags),
                this._checkRemovedTags(),
                s().chain(t.deleted_tags).map((function(t) {
                    return t.get("total")
                }
                )).reduce((function(t, e) {
                    return t + e
                }
                ), 0).value() && s().isFunction(this.options.setNeedReload) && this.options.setNeedReload({
                    reload: !0
                }),
                this._list.getSortedByFrequency().length || this.renderItems()),
                t.tags_changed)
                    return this._$document.trigger("page:reload")
            },
            showTagsManageModal: function() {
                this._addComponent(l.default, {
                    entity: this.entity,
                    onDestroy: s().bind(this.onTagsManageModalDestroy, this),
                    item_params: {
                        colored_tags_available: s().contains(["leads", "leads-pipeline"], APP.data.current_entity)
                    }
                }).fetchData()
            },
            deselectAll: function() {
                var t = this._list.getItems({
                    selected: !0
                });
                s().each(t, (function(t) {
                    t.set("selected", !1, {
                        silent: !0
                    }),
                    t.trigger("tag:update")
                }
                )),
                this._sel && this._sel.reset(),
                this._checkRemovedTags()
            },
            updateTags: function(t, e) {
                this._list && (t.length || e.length) && (this._need_rerender = !0)
            },
            checkNeedRerender: function(t) {
                t = s().isFunction(t) ? t : s().noop,
                this._need_rerender ? (this._dropElemCache(),
                this._sel && (this._sel.updateSelectedTagsIds(),
                this._sel.reset(),
                this._sel.links = null),
                this.rerender().then(s().bind((function() {
                    t(),
                    this.checkTagItemsChanges()
                }
                ), this)),
                this._need_rerender = !this._need_rerender) : t()
            }
        })
    }
    ,
    988882: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => l
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(460159)
          , o = n.n(r)
          , a = n(679471);
        const l = a.default.extend({
            tagName: "li",
            className: "tags-lib__item",
            _classes: function() {
                return {
                    inner_name: "js-tags-lib__item-name"
                }
            },
            events: function() {
                var t = s().result(a.default.prototype, "events", {});
                return t["click ".concat(this._selector("inner_name"))] = "onTagsLibItemClick",
                t
            },
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                a.default.prototype.initialize.apply(this, e),
                this.listenTo(this.model, "change:selected", this.render),
                this.listenTo(this.model, "tag:update", this.render),
                this.listenTo(this.model, "remove", s().bind((function() {
                    this.destroy(!0)
                }
                ), this))
            },
            render: function() {
                return this.$el.attr("data-tag-id", this.model.get("id")).attr("data-color", this.model.get("color")).toggleClass("tags-lib__item_selected", !!this.model.get("selected")).html(o()({
                    ref: "/tmpl/filter/tags_lib/item.twig"
                }).render(this.model.toJSON())),
                this
            },
            onTagsLibItemClick: function() {
                var t = this.model.get("selected");
                this.areActionsBlocked() || (this.model.set("selected", !t),
                t || this.$("input").trigger("controls:change"))
            }
        });
        var c = "../build/transpiled/components/filter/tags_lib/item";
        window.define(c, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    41188: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => o
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(328731);
        const o = r.default.extend({
            getHighlightedItem: function(t, e) {
                var n, i = s().keys(e.users);
                return i.length ? (n = s().chain(i).sortBy((function(t) {
                    return t
                }
                )).first().value(),
                s().first(s().values(e.users[n]))) : r.default.prototype.getHighlightedItem.apply(this, arguments)
            }
        });
        var a = "../build/transpiled/components/filter/users_select";
        window.define(a, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    391192: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => s
        });
        var i = n(661533);
        function s(t) {
            t.length && t.reverse().each((function() {
                var t = i(this);
                switch (t[0].type.toString().toLowerCase()) {
                case "text":
                case "hidden":
                    t.val("").trigger("controls:change");
                    break;
                case "radio":
                    t.prop("checked", !this.value).trigger("change");
                    break;
                case "checkbox":
                    t.prop("checked", !1).removeAttr("checked").trigger("change")
                }
            }
            ))
        }
    }
    ,
    742161: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => l
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(886965);
        function l() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = arguments.length > 1 ? arguments[1] : void 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            o().each(t, (function(t, i) {
                var r, l = !1;
                if (!o().isArray(t) && !t && !n.mind_empty)
                    return !0;
                if (o().isArray(t) || (t = [t]),
                l = !1,
                i.indexOf("[!") >= 0 && (i = i.replace("[!", "["),
                l = !0),
                "filter[status_id][]" === i && (1 === t.length && !l && o().contains((0,
                a.getLeadsWinlostStatuses)(), parseInt(o().first(t))) && (r = e ? this._findElem("leads_checkbox_by_status", o().first(t)) : this._findElem("leads_checkbox_by_status_single_ppl", o().first(t))),
                2 === t.length && l && (r = this._findElem("leads_checkbox"))),
                (r = r && r.length ? r : this._findElem("filter_input", i)).length)
                    switch (r[0].type.toString().toLowerCase()) {
                    case "text":
                    case "hidden":
                        (t[0] || n.mind_empty) && r.val(t[0] || "").trigger("controls:change");
                        break;
                    case "radio":
                    case "checkbox":
                        s().each(r, (function(e, n) {
                            var i, r = s()(n);
                            i = l ? -1 === o().indexOf(t, n.value) : o().indexOf(t, n.value) >= 0,
                            r.attr("checked", i),
                            r.prop("checked", i),
                            ("checkbox" === r.attr("type") || i) && r.trigger("change")
                        }
                        ))
                    }
                return !0
            }
            ), this)
        }
        var c = "../build/transpiled/components/filter/utils/fill";
        window.define(c, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    329223: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => a
        });
        var i = n(55188)
          , s = n.n(i);
        function r(t) {
            return s()(t).map((function(t) {
                return parseInt(t)
            }
            )).reduce((function(t, e) {
                return t + e
            }
            ), 0)
        }
        function o(t, e, n) {
            for (var i = 0, s = [t]; i < n - 1; i++)
                s.push(t += +e);
            return r(s)
        }
        const a = function t(e, n, i) {
            var a, l, c, d;
            for (a in i = i || {},
            e)
                s()(e).has(a) && (c = e[a],
                l = n ? "".concat(n, "[").concat(a, "]") : a,
                s().isObject(c) ? (d = s().keys(c),
                s().every(d, (function(t) {
                    return !s().isNaN(parseInt(t)) && !s().isObject(c[t])
                }
                )) && o(0, 1, d.length) === r(d) ? i["".concat(l, "[]")] = s().values(c) : t(c, l, i)) : i[l] = c);
            return i
        };
        var l = "../build/transpiled/components/filter/utils/parse";
        window.define(l, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    858458: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => r
        });
        var i = n(55188)
          , s = n.n(i);
        function r(t, e) {
            var n;
            if (t.length && this.form && this._hasDescribedSelector("form_input") && (e = e || t.data("input-name"),
            n = t.find(this._selector("form_input", e)).map((function(t, e) {
                return e.value
            }
            )),
            this.form.model.get(e) || n.length)) {
                switch (n.length) {
                case 0:
                    n = "";
                    break;
                case 1:
                    n = s()(n).first();
                    break;
                default:
                    n = s()(n).flatten()
                }
                this.form.model.set(e, n),
                this.form.checkChanges()
            }
        }
    }
    ,
    234158: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => h
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(880774)
          , d = n(678640)
          , u = n(521466)
          , _ = n(889378);
        const h = u.default.extend({
            _url: function() {
                throw new Error("Must be overridden")
            },
            $el: null,
            _xhr: null,
            _destroy_from_modal: !1,
            _ajax_params: null,
            _callbacks: {
                afterDestroy: o().noop,
                destroy: o().noop,
                complete: o().noop,
                failed: o().noop
            },
            initialize: function(t) {
                this.options = o().extend({}, t),
                u.default.prototype.initialize.apply(this, arguments),
                this.setParams(t),
                this.initModal()
            },
            destroy: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                this._destroy_from_modal || this.modal && o().isFunction(this.modal.destroy) && !1 !== this.modal.destroy() && delete this.modal,
                u.default.prototype.destroy.apply(this, e),
                this._callbacks.afterDestroy.apply(this, e)
            },
            tryAgain: o().noop,
            initModal: function() {
                return this.modal = new _.default({
                    class_name: "modal-list ".concat(this._class("modal")),
                    preload_templates: o().result(this, "preload", []),
                    init: o().bind(this._initModal, this),
                    tryAgain: o().bind(this.tryAgain, this),
                    destroy: o().bind((function() {
                        return this._xhr && !o().isUndefined(this._xhr.status) && this._xhr.abort(),
                        !1 !== this._callbacks.destroy.call(this) && (this._destroy_from_modal = !0,
                        this.destroy(),
                        !0)
                    }
                    ), this)
                }),
                this
            },
            _initModal: function(t) {
                this.setElement(t).render().center().preventClicks()
            },
            save: function(t) {
                this._elem("save_btn").trigger("button:load:start"),
                this._xhr || (this._xhr = this._makeRequest(t).always(o().bind(this.actionComplete, this)))
            },
            _makeRequest: function(t) {
                var e = this.getDataForRequest(t);
                return s().ajax(o().extend({
                    url: o().result(this, "_url"),
                    data: e,
                    type: "POST",
                    dataType: "json"
                }, this._ajax_params || {}))
            },
            actionComplete: function(t) {
                if (t = (0,
                d.cleanResponse)(t),
                this._elem("save_btn").trigger("button:load:stop"),
                !this.isValidResponse(t))
                    throw this._xhr = null,
                    this._callbacks.failed.call(this, t),
                    this.destroy(),
                    new Error("Invalid response: ".concat(JSON.stringify(t)));
                this._xhr = null,
                this._callbacks.complete.call(this, t),
                this.destroy()
            },
            setParams: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o().each(this._callbacks, (function(e, n) {
                    this._callbacks[n] = this.wrapCallback(n, t[n])
                }
                ), this),
                t.url && (this._url = t.url),
                this
            },
            wrapCallback: function(t, e) {
                return o().isFunction(e) || (e = o().noop),
                e
            },
            getDataForRequest: function() {
                throw new Error("Must be implemented by subclass!")
            },
            isValidResponse: function(t) {
                return !!t
            },
            _classes: function() {
                return {
                    modal: "action_modal",
                    actions: "modal-body__actions",
                    save_btn: "modal-body__actions__save"
                }
            },
            center: function() {
                return this.$el.trigger("modal:loaded").trigger("modal:centrify"),
                document.activeElement && document.activeElement.blur(),
                this
            },
            events: function() {
                var t = {};
                return t["click ".concat(this._selector("save_btn"), ":not(.button-input-disabled)")] = "clickSaveBtn",
                t
            },
            preventClicks: function() {
                return this.modal.$modal.on("click".concat(this.ns), (function(t) {
                    t.stopPropagation()
                }
                )),
                this
            },
            clickSaveBtn: function() {
                this.save()
            },
            _template: "/tmpl/common/modal/delete.twig",
            preload: function() {
                return [this._template]
            },
            render: function() {
                var t = l()({
                    ref: this._template
                });
                return this.$el.trigger("modal:loaded"),
                this.$el.html(t.render(this.getTemplateParams())),
                this
            },
            getTemplateParams: function() {
                return {
                    caption: (0,
                    c.i18n)("Caption text"),
                    message: [{
                        text: (0,
                        c.i18n)("This is forever! Seriously, think!")
                    }],
                    accept_text: (0,
                    c.i18n)("Confirm")
                }
            }
        });
        var f = "../build/transpiled/components/modals/action";
        window.define(f, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    202800: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => o
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(234158);
        const o = r.default.extend({
            _classes: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return s().extend(r.default.prototype._classes.apply(this, e), {
                    modal: "confirm_catalog_delete"
                })
            },
            _template: "/tmpl/common/modal/delete.twig"
        });
        var a = "../build/transpiled/components/modals/delete";
        window.define(a, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    486318: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => d
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(567952)
          , o = n.n(r)
          , a = n(437307)
          , l = n(517729)
          , c = n(863055);
        const d = a.default.extend({
            model: l.default.Base,
            initialize: function(t, e) {
                this.url_params = e.url_params || {}
            },
            url: function() {
                switch (!0) {
                case !this.links:
                    return (0,
                    c.getTagsListUrl)(o()(this.url_params));
                case this.hasNextPage() && !s().isUndefined(this.links):
                    return this.links.next.href;
                default:
                    return ""
                }
            },
            _getSearchUrl: function(t) {
                var e = {};
                return t.search ? e = {
                    search: t.search || ""
                } : this.url_params.qs_params && this.url_params.qs_params.search && delete this.url_params.qs_params.search,
                this.url_params.qs_params = s().extend(this.url_params.qs_params || {}, e),
                this.url()
            },
            getSortedByFrequency: function() {
                return s().chain(this.models).filter((function(t) {
                    return t.get("total")
                }
                )).sortBy((function(t) {
                    return t.get("name")
                }
                )).sortBy((function(t) {
                    return -1 * parseInt(t.get("total"))
                }
                )).value()
            },
            getSortedBySelected: function() {
                return s().sortBy(this.getSortedByFrequency(), (function(t) {
                    return !t.get("selected")
                }
                ))
            },
            getNonSelectedItems: function() {
                return s().filter(this.getSortedByFrequency(), (function(t) {
                    return !t.get("selected")
                }
                ))
            },
            getSelectedItemsCount: function() {
                return this.getItems({
                    selected: !0
                }).length
            },
            getItems: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return s().isUndefined(t.selected) ? this.models : this.filter((function(e) {
                    return e.get("selected") === t.selected
                }
                ))
            },
            clearForReset: function() {
                a.default.prototype.clearForReset.call(this),
                this.url_params.qs_params && this.url_params.qs_params.search && delete this.url_params.qs_params.search
            },
            updateSelectedTagsIds: function() {
                this.url_params.qs_params = {
                    filter: {
                        id: this.pluck("id")
                    }
                }
            },
            removeTags: function(t) {
                if (t) {
                    var e = s().chain(t).map((function(t) {
                        return t.get("id")
                    }
                    )).map((function(t) {
                        return this.get(t)
                    }
                    ), this).reject((function(t) {
                        return s().isUndefined(t)
                    }
                    )).value();
                    e.length && this.remove(e)
                }
            }
        });
        var u = "../build/transpiled/components/tags/collection";
        window.define(u, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    36473: (t, e, n) => {
        n.r(e),
        n.d(e, {
            colors: () => i
        });
        var i = ["", "#EBEBEB", "#D0D0D0", "#F2DDF7", "#D1A4DC", "#FF8F92", "#FFC8C8", "#C7DB8C", "#DDEBB5", "#8699DA", "#AABDFF", "#FFCE5A", "#FFE193", "#90CDB0", "#C6F4DE", "#A9A5D7", "#D8D5FF", "#86C0FC", "#832161", "#6A0F49", "#0C7C59", "#10599D", "#9D2B32", "#247BA0"]
          , s = "../build/transpiled/components/tags/constant";
        window.define(s, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    712793: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => l
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(880774)
          , o = n(202800)
          , a = n(572779);
        const l = o.default.extend({
            _tags: null,
            save: function() {
                this._elem("save_btn").trigger("button:load:start"),
                this._xhr || (this._xhr = (0,
                a.deleteTags)(this._tags).always(s().bind(this.actionComplete, this)))
            },
            setParams: function(t) {
                var e = o.default.prototype.setParams.apply(this, arguments);
                if (!t.tags.length)
                    throw new Error("Tag items not provided in params: ".concat(JSON.stringify(t)));
                return this._tags = t.tags,
                e
            },
            isValidResponse: function(t) {
                return (t || {}).deleted
            },
            getTemplateParams: function() {
                var t = [];
                return 1 === this._tags.length ? (t.push((0,
                r.i18n)("Are you sure you want to delete the «%s» tag?").replace("%s", s().escape(s().first(this._tags).name))),
                t.push((0,
                r.i18n)("The tag will be removed from all leads."))) : (t.push((0,
                r.i18n)("Are you sure you want to delete selected tags?")),
                t.push((0,
                r.i18n)("Tags will be removed from all leads."))),
                {
                    caption: (0,
                    r.i18n)("Delete tags"),
                    message: [{
                        text: t.join(" ")
                    }],
                    accept_text: (0,
                    r.i18n)("Confirm")
                }
            }
        });
        var c = "../build/transpiled/components/tags/modals/delete";
        window.define(c, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    702934: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => g
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(880774)
          , l = n(889378)
          , c = n(262562)
          , d = n(486318)
          , u = n(517729)
          , _ = n(400249)
          , h = n(166544)
          , f = n(572779)
          , p = n(36473);
        const g = c.default.extend({
            _ItemsCollection: d.default,
            _ItemView: _.default,
            deleted_tags: null,
            added_tags: null,
            _selectors: function() {
                return o().extend({}, o().result(c.default.prototype, "_selectors"), {
                    manage_restrict: "#modal-tags-lib-manage__restrict",
                    color_picker: ".js-modal-tags-lib-manage__icon-wrapper"
                })
            },
            events: function() {
                var t = o().result(c.default.prototype, "events", {});
                return t["change ".concat(this._selector("manage_restrict"))] = "onRestrictSwitcherChange",
                t["click ".concat(this._selector("color_picker"))] = "onChangeNewTagColor",
                t
            },
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                c.default.prototype.initialize.apply(this, e),
                this.colored_tags_available && (this.color_picker = this._addComponent(h.default))
            },
            _setParams: function() {
                return c.default.prototype._setParams.apply(this, arguments),
                this.deleted_tags = [],
                this.added_tags = [],
                this.tags_changed = !1,
                this.colored_tags_available = this.options.item_params.colored_tags_available,
                this._template_params.colored_tags_available = this.colored_tags_available,
                this
            },
            destroy: function() {
                o().isFunction(this.options.onDestroy) && this.options.onDestroy({
                    deleted_tags: this.deleted_tags,
                    added_tags: this.added_tags,
                    tags_changed: this.tags_changed
                }),
                c.default.prototype.destroy.call(this)
            },
            _getCollectionParams: function(t) {
                return {
                    url_params: {
                        entity: t.entity || APP.getBaseEntity()
                    }
                }
            },
            _getFetchParams: function() {
                return [(0,
                f.getAccountSettings)().then(o().bind((function(t) {
                    this._template_params.tags_editable = t.tags_editable
                }
                ), this))]
            },
            _onDataFetch: o().noop,
            _setListeners: function(t) {
                this.listenTo(t, "remove", this.onTagsRemove),
                this.listenTo(t, "add", this.onTagsAdd),
                this.listenTo(t, "change", this.onTagsChanged)
            },
            _templates: {
                main: "/tmpl/common/tags/manage/modal.twig",
                item: "/tmpl/common/tags/manage/item.twig",
                add_new: "/tmpl/common/tags/add_new.twig",
                empty_plug: "/tmpl/common/tags/empty_plug.twig",
                not_found_plug: "/tmpl/common/tags/not_found_plug.twig"
            },
            render: function() {
                this.modal = new l.default({
                    class_name: "modal-list modal-tags-lib-manage",
                    init: o().bind((function(t) {
                        this.setElement(t),
                        c.default.prototype.render.apply(this, arguments),
                        this.$el.trigger("modal:loaded"),
                        this._elem("suggest_input").focus(),
                        this.$el.trigger("modal:centrify"),
                        APP.is_touch_device && this._elem("items_suggest").css("minHeight", this._elem("items_suggest").height())
                    }
                    ), this),
                    destroy: o().bind(this.destroy, this)
                })
            },
            renderAddNewButton: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = c.default.prototype.renderAddNewButton.apply(this, e);
                return this.$el.find(this._selector("color_picker")).toggleClass("hidden", !(i && this.colored_tags_available)),
                i
            },
            updateAddNewButton: function() {
                var t = this._getItemsHolder().find(".new-tag");
                if (t.length && !o().isUndefined(this.saved_add_new_color)) {
                    var e = this.saved_add_new_color;
                    t.css({
                        borderColor: e ? "#".concat(e) : "",
                        backgroundImage: e ? "linear-gradient(0deg, ".concat((0,
                        a.hex2rgba)("#".concat(e), .3), ", ").concat((0,
                        a.hex2rgba)("#".concat(e), .3), ")") : ""
                    }),
                    t.attr("data-color", e || ""),
                    this._elem("suggest_input").focus()
                }
            },
            _getLoadMoreButtonParams: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = c.default.prototype._getLoadMoreButtonParams.apply(this, e);
                return o().extend(i, {
                    class_name: "tags-lib__item tags-lib__item_load-more",
                    inner_class_name: "tags-lib__link-text",
                    button_text: (0,
                    a.i18n)("More tags")
                })
            },
            onChangeNewTagColor: function(t) {
                var e = this.isTyping()
                  , n = this;
                if (!e) {
                    var i = t.target.getBoundingClientRect();
                    this.$overflow_color_picker = s()(this.color_picker.getTemplate(p.colors)),
                    this.$el.append(this.$overflow_color_picker);
                    var r = this.$overflow_color_picker.find(".segments-color-picker");
                    this.$overflow_color_picker.on("click", (function() {
                        n.$overflow_color_picker.remove()
                    }
                    )),
                    r.on("click", ".segments-color-picker__item", (function(t) {
                        var e = s()(t.target).attr("data-color") || null;
                        n._getItemsHolder().find(".new-tag").length && (n.saved_add_new_color = o().isString(e) ? e.slice(1) : e,
                        n.updateAddNewButton())
                    }
                    )),
                    r.css({
                        left: "".concat(i.x - r.width() + i.width - 5, "px"),
                        top: "".concat(i.y + i.height + 5, "px")
                    })
                }
            },
            onRestrictSwitcherChange: function(t) {
                var e = s()(t.currentTarget);
                this._restrict_xhr && this._restrict_xhr.abort(),
                this._restrict_xhr = (0,
                f.setAccountSettings)({
                    tags_editable: !e.prop("checked")
                }).always(o().bind((function() {
                    this._restrict_xhr = null
                }
                ), this)).done(o().bind((function(t) {
                    (t || {}).updated || this.modal.showError()
                }
                ), this)).fail(o().bind((function(t) {
                    "abort" !== t.statusText && this.modal.showError()
                }
                ), this))
            },
            addNewItem: function() {
                var t = this._elem("suggest_input").val()
                  , e = this._getItemsHolder().find(".new-tag").attr("data-color") || null
                  , n = new u.default.Base({
                    name: t.trim(),
                    entity: this.options.entity,
                    color: e
                });
                return this.saved_add_new_color = null,
                n.save().then(o().bind((function() {
                    this._list.push(n)
                }
                ), this)).fail(o().bind((function() {
                    this.modal.showError()
                }
                ), this))
            },
            onTagsRemove: function(t) {
                this.deleted_tags.push(t),
                this._list.length || this.renderItems()
            },
            onTagsChanged: function() {
                this.tags_changed = !0
            },
            onTagsAdd: function(t) {
                this.added_tags.push(t),
                this._elem("suggest_input").val("").trigger("input").focus()
            }
        });
        var m = "../build/transpiled/components/tags/modals/manage/index";
        window.define(m, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    400249: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => f
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(460159)
          , o = n.n(r)
          , a = n(880774)
          , l = n(679471)
          , c = n(712793)
          , d = n(166544)
          , u = n(572779)
          , _ = n(36473)
          , h = n(661533);
        const f = l.default.extend({
            tagName: "li",
            className: "tags-lib__item tags-lib__item_suggest",
            _classes: function() {
                return {
                    delete_icon: "js-tags-lib__item-delete",
                    color: "js-tags-lib__item-color",
                    tag_name: "tags-lib__item-name"
                }
            },
            events: function() {
                var t = s().result(l.default.prototype, "events", {});
                return t["click ".concat(this._selector("delete_icon"))] = "onDeleteClick",
                t["click ".concat(this._selector("color"))] = "onChangeColor",
                t
            },
            initialize: function(t) {
                l.default.prototype.initialize.apply(this, arguments),
                this.colored_tags_available = Boolean(t.colored_tags_available),
                this.colored_tags_available && (this.color_picker = this._addComponent(d.default)),
                this.listenTo(this.model, "remove", s().bind((function() {
                    this.destroy(!0)
                }
                ), this))
            },
            changeColor: function(t) {
                var e = this.$el.attr("data-tag-id");
                s().isUndefined(t) || (s().isString(t) && "#" === t[0] && (t = t.slice(1)),
                this.model.set("color", t),
                this.render(),
                (0,
                u.setTagColor)({
                    entity: "leads",
                    id: Number(e),
                    color: t
                }))
            },
            render: function() {
                var t = this.model.get("color");
                return this.$el.attr("data-tag-id", this.model.get("id")).attr("data-color", t).html(o()({
                    ref: "/tmpl/common/tags/manage/item.twig"
                }).render(s().extend({}, this.model.toJSON(), {
                    colored_tags_available: this.colored_tags_available
                }))),
                this.colored_tags_available && t && (this.$el.find(this._selector("tag_name")).css({
                    borderColor: "#".concat(t),
                    backgroundColor: (0,
                    a.hex2rgba)("#".concat(t), .3)
                }),
                this.$el.find(this._selector("color")).css({
                    borderColor: "#".concat(t),
                    backgroundColor: "#".concat(t)
                })),
                this
            },
            onDeleteClick: function() {
                if (!this.areActionsBlocked())
                    return new c.default({
                        tags: [this.model.toJSON()],
                        complete: s().bind((function() {
                            this.model.collection.remove(this.model)
                        }
                        ), this)
                    })
            },
            onChangeColor: function(t) {
                var e = this.areActionsBlocked()
                  , n = this;
                if (!e) {
                    var i = t.target.getBoundingClientRect();
                    this.$overflow_color_picker = h(this.color_picker.getTemplate(_.colors)),
                    this.$el.append(this.$overflow_color_picker);
                    var s = this.$overflow_color_picker.find(".segments-color-picker");
                    this.$overflow_color_picker.on("click", (function() {
                        n.$overflow_color_picker.remove()
                    }
                    )),
                    s.on("click", ".segments-color-picker__item", (function(t) {
                        var e = h(t.target).attr("data-color") || null;
                        n.changeColor(e)
                    }
                    )),
                    s.css({
                        left: "".concat(i.x - s.width() + i.width - 5, "px"),
                        top: "".concat(i.y + i.height + 5, "px")
                    })
                }
            }
        });
        var p = "../build/transpiled/components/tags/modals/manage/item";
        window.define(p, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    517729: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => c
        });
        var i = n(55188)
          , s = n.n(i)
          , r = n(974839)
          , o = n.n(r)
          , a = {
            total: 0,
            selected: !1,
            object_type: {
                code: "tags",
                id: APP.element_types.tags
            }
        }
          , l = o().Model.extend({
            url: function() {
                var t = this.get("entity");
                return !0 === this.isNew() ? t ? "/ajax/v3/%s/tags/".replace("%s", t) : "/ajax/v3/tags/" : o().Model.prototype.url.call(this)
            },
            parse: function(t) {
                return t.added && t._embedded && (t = s().first(t._embedded.items)),
                o().Model.prototype.parse.call(this, t)
            },
            sync: function(t, e, n) {
                return "create" === t && (n = s().extend(n || {}, {
                    contentType: "application/json",
                    data: JSON.stringify([{
                        name: e.get("name"),
                        color: e.get("color")
                    }])
                })),
                o().Model.prototype.sync.call(this, t, e, n)
            }
        });
        const c = {
            Base: l.extend({
                defaults: s().clone(a)
            }),
            Selected: l.extend({
                defaults: s().extend(s().clone(a), {
                    selected: !0
                })
            })
        };
        var d = "../build/transpiled/components/tags/model";
        window.define(d, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    754660: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => c
        });
        var i = n(661533)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(267651)
          , l = n.n(a);
        l().subscribe("cf-group:toggle", (function(t, e) {
            s()('.js-cf-group[data-id="'.concat(e.attr("data-id"), '"]')).not(e).trigger(t)
        }
        ));
        const c = {
            _toggleCFGroupCallback: "_toggleCFGroup",
            events: {
                "cf-group:toggle .js-cf-group": "toggleCFGroupUI",
                "click .js-cf-group": "toggleCFGroupClick"
            },
            toggleCFGroupUI: function(t) {
                var e = s()(t.currentTarget)
                  , n = Math.abs(e.attr("data-folded") - 1);
                return e.attr("data-folded", n),
                this[this._toggleCFGroupCallback](e),
                n
            },
            toggleCFGroupClick: function(t) {
                var e = s()(t.currentTarget)
                  , n = +e.data("element-type") || APP.element_types[APP.getBaseEntity()];
                if (0 !== parseInt(e.attr("data-foldable")) && !e.hasClass("need_hide")) {
                    var i = this.toggleCFGroupUI(t);
                    this._toggleCFGroupAjax({
                        action: "group_folding",
                        id: e.attr("data-id"),
                        show: i,
                        element_type: n
                    }),
                    l().publish("cf-group:toggle", e)
                }
            },
            _toggleCFGroupAjax: o().debounce((function(t) {
                s().ajax({
                    url: "/ajax/settings/profile/",
                    data: t,
                    type: "POST"
                })
            }
            ), 200),
            _toggleCFGroup: function(t) {
                var e = t.next()[0];
                "none" === e.style.display ? e.style.display = "" : e.style.display = "none"
            }
        };
        var d = "../build/transpiled/interface/account/mixins/cf_groups";
        window.define(d, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    166544: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => c
        });
        var i = n(55188)
          , s = n.n(i);
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function o(t) {
            return o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            o(t)
        }
        function a(t, e) {
            return a = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            a(t, e)
        }
        function l(t) {
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
                var n, i = o(t);
                if (e) {
                    var s = o(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else
                    n = i.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((n = e) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var n
                }(this, n)
            }
        }
        var c = function(t) {
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
                e && a(t, e)
            }(o, t);
            var e, n, i = l(o);
            function o() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                i.apply(this, arguments)
            }
            return e = o,
            (n = [{
                key: "getTemplate",
                value: function(t) {
                    return s().template('<div class="segments-page__overflow">\n        <div class="segments-color-picker">\n          '.concat(s().map(t, (function(t) {
                        return '\n            <div class="segments-color-picker__item-wrap">\n              <span class="segments-color-picker__item" '.concat(t ? 'data-color="' + t + '" style="background: ' + t + '"' : "", '"></span>\n              <span class="segments-color-picker__item-hover"></span>\n            </div>\n          ')
                    }
                    )).join(""), "\n        </div>\n      </div>"))()
                }
            }]) && r(e.prototype, n),
            o
        }(n(521466).default)
          , d = "../build/transpiled/interface/color_picker";
        window.define(d, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    580868: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => b
        });
        var i = n(161320)
          , s = n.n(i)
          , r = n(55188)
          , o = n.n(r)
          , a = n(340958)
          , l = n(220030)
          , c = n(661533);
        function d(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function _(t, e, n) {
            return e && u(t.prototype, e),
            n && u(t, n),
            t
        }
        function h(t, e, n) {
            return h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var s = Object.getOwnPropertyDescriptor(i, e);
                    return s.get ? s.get.call(n || t) : s.value
                }
            }
            ,
            h(t, e, n || t)
        }
        function f(t) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            f(t)
        }
        function p(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && g(t, e)
        }
        function g(t, e) {
            return g = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            g(t, e)
        }
        function m(t) {
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
                var n, i = f(t);
                if (e) {
                    var s = f(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else
                    n = i.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((n = e) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var n
                }(this, n)
            }
        }
        var y = function(t) {
            p(n, t);
            var e = m(n);
            function n() {
                return d(this, n),
                e.apply(this, arguments)
            }
            return _(n, [{
                key: "_classes",
                value: function() {
                    return o().extend({
                        first_calendar_input: "date_field_with-time_range-input_first",
                        second_calendar_input: "date_field_with-time_range-input_second",
                        inputs_box: "date_field_with-time_range-box",
                        date_time_field: "date_field_with-time_range",
                        hyphen: "date_field_with-time_range-hyphen"
                    }, h(f(n.prototype), "_classes", this).apply(this, arguments))
                }
            }, {
                key: "events",
                value: function() {
                    var t = h(f(n.prototype), "events", this).apply(this, arguments);
                    return t["controls:change.filter ".concat(this._selector("date_field"))] = "inputInDate",
                    t["keydown " + this._selector("date_field")] = "onDateKeyDown",
                    t["keyup " + this._selector("date_field")] = "onDateKeyUp",
                    t
                }
            }, {
                key: "container",
                value: function() {
                    var t = !!this.$container
                      , e = h(f(n.prototype), "container", this).apply(this, arguments);
                    return t || this.$container.css(Modernizr.prefixed("transform"), "translateY(-7px)"),
                    e
                }
            }, {
                key: "getDateTimeInput",
                value: function(t) {
                    var e = t.closest(this._selector("inputs_box"))
                      , n = e.find(this._selector("first_calendar_input"))
                      , i = e.find(this._selector("second_calendar_input"))
                      , s = e.find(this._selector("hyphen"));
                    return {
                        $main_field: e,
                        $first_input: n,
                        $second_input: i,
                        $hyphen: s
                    }
                }
            }, {
                key: "setDateTimeInInput",
                value: function(t, e, n) {
                    var i = t.getSelected();
                    return i ? o().isString(i) && (i = s()(i, n)) : i = s()(),
                    i.hour(Math.floor(e / 60)),
                    i.minutes(Math.floor(e % 60)),
                    i
                }
            }, {
                key: "onDateKeyDown",
                value: function(t) {
                    var e = this.getDateTimeInput(c(t.target)).$first_input
                      , n = c(t.currentTarget)
                      , i = t.keyCode;
                    return 8 === i && 0 === n.val().length ? (e.trigger("focus"),
                    e.trigger("controls:date:check-empty"),
                    !1) : 189 !== i && void 0
                }
            }, {
                key: "onDateKeyUp",
                value: function(t) {
                    var e = this.getDateTimeInput(c(t.target))
                      , n = e.$first_input
                      , i = e.$second_input
                      , s = c(t.currentTarget)
                      , r = t.keyCode;
                    37 === r && 0 === s[0].selectionStart ? (n.trigger("focus"),
                    n.trigger("controls:date:check-empty"),
                    this.$el.trigger("date-time-filter:date-change")) : 39 === r && s[0].selectionStart === s.val().length || 189 === r ? (i.trigger("focus"),
                    n.trigger("autosize:important"),
                    i.trigger("date-time-filter:date-change"),
                    i.trigger("controls:date:check-empty")) : this.$el.trigger("date-time-filter:date-change")
                }
            }, {
                key: "onDateClickedSingle",
                value: function() {
                    h(f(n.prototype), "onDateClickedSingle", this).apply(this, arguments),
                    this.$input.trigger("controls:date:clicked")
                }
            }, {
                key: "_onInputClickToShow",
                value: function(t) {
                    var e = this.getDateTimeInput(c(t.target))
                      , n = e.$first_input
                      , i = e.$second_input;
                    !n.val() && i.val() && n.trigger("focus")
                }
            }, {
                key: "_onChangeWithoutTimeHandle",
                value: function(t) {
                    var e = c(t.currentTarget)
                      , n = this.getDateTimeInput(c(t.currentTarget))
                      , i = n.$hyphen
                      , s = n.$first_input
                      , r = n.$second_input;
                    if (i.toggleClass("hidden", !s.val() || !r.val()),
                    e.val()) {
                        if (!e.val().split(" ").length < 2 && this._onInputHandle(),
                        e.trigger("autosize:important"),
                        this._elem("second_calendar_input").length && 2 === s.val().split(" ").length && r.val().split(" ").length < 2) {
                            var o;
                            o = this._format === APP.system.format.date.date ? APP.system.format.date.full : APP.system.format.date.year_short;
                            var a = this.setDateTimeInInput(r.data("kalendae"), 1439, o);
                            r.val(a.format(o)).trigger("autosize:important"),
                            s.trigger("focus"),
                            r.trigger("focus")
                        }
                        this.$el.trigger("date-time-filter:date-change")
                    } else
                        this.$el.trigger("date-time-filter:date-change")
                }
            }, {
                key: "_onTimeplanerFifteenClick",
                value: function(t) {
                    var e = c(t.currentTarget)
                      , n = s()(e.text().trim(), APP.system.format.date.time);
                    this._setSelectedTime(60 * n.hour() + n.minutes())
                }
            }, {
                key: "_updateInputValueWithTime",
                value: function(t) {
                    var e, n, i = this.getDateTimeInput(this._elem("date_field")), s = i.$first_input, r = i.$second_input;
                    e = this._format === APP.system.format.date.date ? APP.system.format.date.full : APP.system.format.date.year_short,
                    !r.val() && s.val() ? (n = this.setDateTimeInInput(s.data("kalendae"), t, e),
                    s.val(n.format(e)).trigger("autosize:important"),
                    r.trigger("focus")) : (n = this.setDateTimeInInput(this._elem("date_field").data("kalendae"), t, e),
                    this.$input.val(n.format(e)).trigger("controls:date:check-empty").trigger("autosize:important"),
                    s.trigger("focus"),
                    s.val() && s.val().split(" ").length < 2 && (n = this.setDateTimeInInput(s.data("kalendae"), 0, e),
                    s.val(n.format(e)).trigger("autosize:important")),
                    r.trigger("focus"))
                }
            }, {
                key: "onShowSingle",
                value: function() {
                    var t = this.container()
                      , e = this.$input.closest(this._selector("date_time_field")).offset();
                    t.removeClass("kalendae-at-top").css({
                        top: e.top,
                        left: e.left - 1
                    }),
                    t.visible() || t.addClass("kalendae-at-top"),
                    this._updateCurrentTime()
                }
            }], [{
                key: "controlClassName",
                get: function() {
                    return "js-control-date-time-in-range"
                }
            }]),
            n
        }(l.default)
          , v = function(t) {
            p(n, t);
            var e = m(n);
            function n() {
                return d(this, n),
                e.apply(this, arguments)
            }
            return _(n, [{
                key: "_classes",
                value: function() {
                    return {
                        input: "date_field",
                        hyphen: "js-filter-date-time-hyphen",
                        first_calendar_input: "date_field_with-time_range-input_first",
                        second_calendar_input: "date_field_with-time_range-input_second",
                        first_calendar_box: "date_field_with-time_range-box_first",
                        second_calendar_box: "date_field_with-time_range-box_second",
                        calendar_image: "date_time_field_wrapper--calendar-with-time",
                        date_time_field: "date_field_with-time_range"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    var t = {};
                    return t["controls:date:clicked ".concat(this._selector("input"), ":first")] = "_focusToDateField",
                    t["click ".concat(this._selector("calendar_image"))] = "_calendarFocus",
                    t["controls:change ".concat(this._selector("input"))] = "_inputsWidth",
                    t["controls:date:check-empty ".concat(this._selector("input"))] = "_placeHyphen",
                    t
                }
            }, {
                key: "initialize",
                value: function() {
                    h(f(n.prototype), "initialize", this).apply(this, arguments),
                    this._placeHyphen({
                        currentTarget: this.$("".concat(this._selector("input")))
                    })
                }
            }, {
                key: "_calendarFocus",
                value: function(t) {
                    c(t.target).closest(this._selector("date_time_field")).find("".concat(this._selector("first_calendar_input"))).trigger("focus")
                }
            }, {
                key: "_focusToDateField",
                value: function() {
                    var t = this;
                    c(document).one("mouseup", (function() {
                        t.$("".concat(t._selector("input"))).trigger("focus")
                    }
                    ))
                }
            }, {
                key: "_inputsWidth",
                value: function(t) {
                    var e = c(t.currentTarget).val()
                      , n = this._elem("first_calendar_input")
                      , i = this._elem("second_calendar_input")
                      , s = this._elem("first_calendar_box")
                      , r = this._elem("second_calendar_box");
                    e || i.val() || n.val() ? (s.width("auto"),
                    r.width("100%")) : (s.width("100%"),
                    r.width("auto"))
                }
            }, {
                key: "_placeHyphen",
                value: function(t) {
                    var e = c(t.currentTarget)
                      , n = this._elem("first_calendar_input")
                      , i = this._elem("second_calendar_input");
                    this._elem("hyphen").toggleClass("hidden", !(n.val() && i.val() || e.hasClass(this._class("second_calendar_input")) && n.val()))
                }
            }], [{
                key: "controlClassName",
                get: function() {
                    return "js-date-time-range-control"
                }
            }]),
            n
        }(a.default);
        y.extend(y);
        const b = v.extend(v);
        var w = "../build/transpiled/interface/controls/date/with_time/range";
        window.define(w, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([w])
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
        t._sentryDebugIds[e] = "96f87b2b-54c9-4880-9e22-fb6d71509cea",
        t._sentryDebugIdIdentifier = "sentry-dbid-96f87b2b-54c9-4880-9e22-fb6d71509cea")
    } catch (t) {}
}();
//# sourceMappingURL=39877.d01d37e2aa0bbe20c085.js.map
