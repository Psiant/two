(window.webpackChunk = window.webpackChunk || []).push([[882], {
    130860: (e, t, i) => {
        var n;
        function a() {
            "use strict";
            var e, t, i, n = window.crypto || window.msCrypto;
            if (!e && n && n.getRandomValues)
                try {
                    var a = new Uint8Array(16);
                    i = e = function() {
                        return n.getRandomValues(a),
                        a
                    }
                    ,
                    e()
                } catch (e) {}
            if (!e) {
                var o = new Array(16);
                t = e = function() {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                        o[t] = e >>> ((3 & t) << 3) & 255;
                    return o
                }
                ,
                "undefined" != typeof console && console.warn && console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")
            }
            for (var s = "function" == typeof Buffer ? Buffer : Array, r = [], l = {}, c = 0; c < 256; c++)
                r[c] = (c + 256).toString(16).substr(1),
                l[r[c]] = c;
            function d(e, t) {
                var i = t || 0
                  , n = r;
                return n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]]
            }
            var u = e()
              , _ = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]
              , m = 16383 & (u[6] << 8 | u[7])
              , h = 0
              , p = 0;
            function f(t, i, n) {
                var a = i && n || 0;
                "string" == typeof t && (i = "binary" === t ? new s(16) : null,
                t = null);
                var o = (t = t || {}).random || (t.rng || e)();
                if (o[6] = 15 & o[6] | 64,
                o[8] = 63 & o[8] | 128,
                i)
                    for (var r = 0; r < 16; r++)
                        i[a + r] = o[r];
                return i || d(o)
            }
            var g = f;
            return g.v1 = function(e, t, i) {
                var n = t && i || 0
                  , a = t || []
                  , o = null != (e = e || {}).clockseq ? e.clockseq : m
                  , s = null != e.msecs ? e.msecs : (new Date).getTime()
                  , r = null != e.nsecs ? e.nsecs : p + 1
                  , l = s - h + (r - p) / 1e4;
                if (l < 0 && null == e.clockseq && (o = o + 1 & 16383),
                (l < 0 || s > h) && null == e.nsecs && (r = 0),
                r >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                h = s,
                p = r,
                m = o;
                var c = (1e4 * (268435455 & (s += 122192928e5)) + r) % 4294967296;
                a[n++] = c >>> 24 & 255,
                a[n++] = c >>> 16 & 255,
                a[n++] = c >>> 8 & 255,
                a[n++] = 255 & c;
                var u = s / 4294967296 * 1e4 & 268435455;
                a[n++] = u >>> 8 & 255,
                a[n++] = 255 & u,
                a[n++] = u >>> 24 & 15 | 16,
                a[n++] = u >>> 16 & 255,
                a[n++] = o >>> 8 | 128,
                a[n++] = 255 & o;
                for (var f = e.node || _, g = 0; g < 6; g++)
                    a[n + g] = f[g];
                return t || d(a)
            }
            ,
            g.v4 = f,
            g.parse = function(e, t, i) {
                var n = t && i || 0
                  , a = 0;
                for (t = t || [],
                e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                    a < 16 && (t[n + a++] = l[e])
                }
                )); a < 16; )
                    t[n + a++] = 0;
                return t
            }
            ,
            g.unparse = d,
            g.BufferClass = s,
            g._rng = e,
            g._mathRNG = t,
            g._whatwgRNG = i,
            g
        }
        e.exports ? e.exports = new a : void 0 === (n = function() {
            return new a
        }
        .call(t, i, t, e)) || (e.exports = n);
        var o = "js-uuid";
        window.define(o, (function() {
            var t = "undefined"
              , i = typeof __webpack_exports__ === t ? typeof n === t ? typeof e === t ? void 0 : e.exports : n : __webpack_exports__;
            return i && i.default || i
        }
        )),
        window.require([o])
    }
    ,
    214826: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => E
        });
        var n = i(661533)
          , a = i.n(n)
          , o = i(460159)
          , s = i.n(o)
          , r = i(55188)
          , l = i.n(r)
          , c = i(810427)
          , d = i.n(c)
          , u = i(161320)
          , _ = i.n(u)
          , m = i(579569)
          , h = i(848655)
          , p = i(880774)
          , f = i(889378)
          , g = i(77305)
          , v = i(328731)
          , y = i(392517);
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var w = d().extend({
            options: null,
            vars: {},
            managers: (0,
            m.get)(),
            user_id: null,
            modal: null,
            initialize: function(e) {
                var t = this
                  , i = APP.constant("user") || {};
                this.options = a().extend({}, e),
                this.user_id = this.options.user_id || i.id || "",
                this.options.from_list ? this.list = APP.data.current_view : this.options.from_card && (this.card = APP.data.card_page),
                this.modal = new f.default({
                    class_name: "modal-list ".concat(this.options.class_name),
                    preload_templates: l().compact([t.options.template || "/tmpl/common/modal/add_entity/add_entity.twig", "customers" === this.options.subEntity && "stylesheets/_chunks/customers.css"]),
                    init: function(e) {
                        t.vars.$modal_body = e,
                        t.vars.template = s()({
                            ref: t.options.template || "/tmpl/common/modal/add_entity/add_entity.twig"
                        }),
                        t.init(),
                        l().isFunction(t.options.init) && t.options.init.call(t),
                        e.on("change", "[name=next_date]", (function() {
                            var t = a()(this);
                            _()(t.val(), (0,
                            h.format)("parse")).isValid() ? e.find(".js-modal-accept").removeClass("button-input-disabled") : e.find(".js-modal-accept").addClass("button-input-disabled")
                        }
                        )).on("click", ".js-modal-accept:not(.button-input-disabled)", (function() {
                            for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                                i[n] = arguments[n];
                            if ("function" == typeof t.options.confirm)
                                t.options.confirm.call(t);
                            else if (t.options.from_list || t.options.from_card) {
                                var a;
                                t.options.needConfirm ? (a = t).onModalAccept.apply(a, function(e) {
                                    if (Array.isArray(e))
                                        return b(e)
                                }(o = i) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(o) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e)
                                            return b(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name),
                                        "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(e, t) : void 0
                                    }
                                }(o) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()) : t.doAjax()
                            } else
                                this.save_xhr = t.doAjax();
                            var o
                        }
                        ))
                    },
                    destroy: function() {
                        t.reassign_select && l().isFunction(t.reassign_select.destroy) && t.reassign_select.destroy(),
                        l().isFunction(t.options.destroy) && t.options.destroy.call(t),
                        t.vars.$modal_body && t.vars.$modal_body.off(),
                        this.save_xhr && void 0 !== this.save_xhr.status && this.save_xhr.abort()
                    }
                })
            },
            initReassignUsersSelect: function(e, t) {
                var i = a()(e.currentTarget);
                e.stopPropagation(),
                this.reassign_select = new v.default(l().extend({
                    el: i,
                    id: "reassign-users_select_holder",
                    class_name: "modal-reassign__users-select",
                    suggest_class_name: "modal-reassign__users-select-suggest",
                    input_name: "reassign_user_id",
                    select_one: !0,
                    not_remove: !0,
                    in_modal: !0,
                    existing_items: a().map(i.find(".js-multisuggest-item"), (function(e) {
                        return {
                            id: a()(e).attr("data-id"),
                            title: l().escape(a().trim(a()(e).text()))
                        }
                    }
                    )),
                    onInit: function() {
                        this.$list.css({
                            zIndex: 9999
                        })
                    }
                }, t))
            },
            onModalAccept: function() {
                var e = this
                  , t = "multiple_modal_add_".concat(this.options.subEntity, "_confirm_text");
                this.modal.hide(),
                this.confirm = new g.default({
                    text: (0,
                    p.i18n)(t),
                    accept_text: APP.lang.button_yes,
                    decline_text: APP.lang.button_no,
                    accept: function() {
                        e.modal.show(),
                        e.doAjax(),
                        this.destroy()
                    }
                })
            },
            init: function() {
                var e = this
                  , t = this.managers
                  , i = l().without(e.options.exclude, e.user_id.toString());
                i && i.length && (t = l().filter(t, (function(e, t) {
                    return -1 === l().indexOf(i, t)
                }
                ))),
                this.vars.$modal_body.html(this.vars.template.render(a().extend({
                    title: this.options.title,
                    managers: {
                        class_name: "control--select-white modal-body__inner__managers-select",
                        selected: this.user_id,
                        bg_color: "#fff",
                        items: t
                    },
                    subentity: e.options.subEntity,
                    next_date: _()().format(APP.system.format.date.date)
                }, this.options.template_params))).trigger("modal:loaded").trigger("modal:centrify"),
                this.vars.$modal_body.on("click", "#reassign-users_select_holder", l().bind(e.initReassignUsersSelect, e))
            },
            doAjax: function(e) {
                var t, i = this, n = {
                    responsible_id: i.vars.$modal_body.find("input:hidden:not(.js-focuser)").val()
                };
                return (e = e || {}).entity = e.entity || this.options.entity,
                e.subEntity = e.subEntity || this.options.subEntity,
                e.id = e.id || this.options.id,
                "customers" === e.subEntity && (n = l().extend(n, {
                    next_date: _()(i.vars.$modal_body.find("[name=next_date]").val(), (0,
                    h.format)("parse")).format("X")
                })),
                i.vars.$modal_body.hide(),
                i.options.id ? l().isArray(i.options.id) ? t = i.options.id : (t = []).push(i.options.id) : t = l().map(APP.data.current_list.where({
                    is_checked: !0
                }), (function(e) {
                    return e.get("id")
                }
                )),
                y.default.createEntitiesFromThreads(t, e.subEntity, n).done((function() {
                    l().isFunction(e.callback) ? e.callback() : i.options.from_list ? i._$document.trigger("list:reload") : i.card && i.card.reload ? i.card.reload() : i._$document.trigger("page:reload"),
                    i.modal.show(),
                    i.modal.showSuccess(),
                    i.options.in_modal && i.options.done.resolve(),
                    i.options.changing && i.options.changing.resolve()
                }
                )).fail((function() {
                    i.modal.showError()
                }
                ))
            }
        });
        const E = w;
        var x = "../build/transpiled/components/lists/actions/add_entity";
        window.define(x, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([x])
    }
    ,
    166570: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => E
        });
        var n = i(661533)
          , a = i.n(n)
          , o = i(55188)
          , s = i.n(o)
          , r = i(871082)
          , l = i.n(r)
          , c = i(460159)
          , d = i.n(c)
          , u = i(162262)
          , _ = i.n(u)
          , m = i(880774)
          , h = i(510144)
          , p = i(889378)
          , f = i(77305)
          , g = i(94217)
          , v = i(778231)
          , y = i(358373)
          , b = "write_mail"
          , w = h.default.View.extend({
            options: null,
            modal: null,
            send_locked: !1,
            subviews: {},
            defaults: {},
            events: s().extend({}, h.default.View.prototype.events || {}, {
                "click .js-modal-accept": "onSendClick",
                "controls:change .modal_write-mail__templates-select": "changeTemplate",
                "controls:change .modal_write-mail__mailboxes-select": "onMailboxChange",
                "click .modal_write-mail__templates-select .control--select--list-opened": "onTemplateSelect",
                "click .mail-action__tag": "insertMarker",
                "click .js-navigate-mailboxes": "openMailboxSettings"
            }),
            _selectors: function() {
                return {
                    templates_select: ".modal_write-mail__templates-select",
                    templates_select_input: ".modal_write-mail__templates-select input",
                    mailboxes_select_input: ".modal_write-mail__mailboxes-select input",
                    mailbox_form__error_select: ".mailbox-form__error-select",
                    controls_select_input: ".control--select--input",
                    template_content: ".mail-action__template-content",
                    template_subject: "#template-subject",
                    template_content_html: "#template-content-html",
                    recipients_container: ".mail-action__settings-item_recipients .mail-action__settings-input",
                    ccopy_container: ".mail-action__settings-item_ccopy .mail-action__settings-input",
                    mail_suggest: ".mail-suggest",
                    send_button: ".js-modal-accept"
                }
            },
            initialize: function(e) {
                h.default.View.prototype.initialize.apply(this, arguments),
                this.options = s().extend({}, e),
                this.sub_entity = this.options.subEntity || this.options.sub_entity,
                this.thread_id = this.options.id || [],
                this.options.from_list ? (this.list = APP.data.current_view,
                this.selected_mailbox = this.list.mailbox_id) : this.options.from_card && (this.card = APP.data.card_page,
                this.sub_entity = "reply",
                this.selected_mailbox = e.box_id),
                this.initModal()
            },
            initModal: function() {
                var e = this;
                this.modal = new p.default({
                    class_name: "modal-list modal_write-mail modal_mail-action",
                    init: function(t) {
                        e.setElement(t),
                        e._makeRequest()
                    },
                    destroy: function(t) {
                        if (!e.force_exit && (e.form_modified || e.recipients_modified))
                            return a()(".modal.modal-list.modal-leave-confirm.js-modal-confirm").length || APP.router.confirmPageChange(e._confirmModalConfig, s().noop),
                            !1;
                        e.destroy(),
                        s().invoke(e.subviews, "destroy"),
                        APP.router.preventPageChange(!1, b),
                        e.compose_xhr && void 0 !== e.compose_xhr.status && e.compose_xhr.abort(),
                        s().isFunction(t) && t()
                    }
                })
            },
            _makeRequest: function() {
                this.preInit()
            },
            preInit: function() {
                a().when(this.templates_xhr = this.getTemplatesList(), this.mailboxes_xhr = this.getMailboxesList(), this.reply_data_xhr = "reply" === this.sub_entity ? this.getReplyData() : this.getRecipientsList()).then(s().bind((function() {
                    this.init()
                }
                ), this))
            },
            init: function() {
                var e = ["recipients"];
                this.initCollections(),
                this.render().then(s().bind((function() {
                    this.watchForm(),
                    this.changeTemplate(),
                    this.onMailboxChange(),
                    this.$el.trigger("modal:loaded").trigger("modal:centrify"),
                    this.initPagePreventer(),
                    APP.router.preventPageChange(!1, b),
                    "reply" === this.sub_entity && e.push("ccopy"),
                    s().each(e, s().bind((function(e) {
                        this.subviews[e] = new v.default({
                            $container: this._findElem("".concat(e, "_container")),
                            items: this[e],
                            class_name: "mail-suggest_".concat(e),
                            data_type: e
                        }),
                        this.defaults[e] = JSON.stringify(this.subviews[e].items_collection.toJSON()),
                        this.listenTo(this.subviews[e].items_collection, "remove", this.onMailboxCollectionChange),
                        this.listenTo(this.subviews[e].items_collection, "add", this.onMailboxCollectionChange)
                    }
                    ), this))
                }
                ), this))
            },
            initCollections: function() {
                var e, t, i = this, n = "reply" === this.sub_entity;
                this.templates_collection = new (l().Collection),
                this.mailboxes_collection = new (l().Collection),
                !n && this.templates.length || (e = {
                    name: APP.lang.mail_template_empty_name,
                    id: "blank",
                    subject: n ? this.reply_data.subject : "",
                    content: n ? this.reply_data.content : ""
                },
                this.templates.unshift(e)),
                this.templates && s().each(i.templates, (function(e) {
                    e.option = e.name,
                    i.templates_collection.push(new (l().Model)(e))
                }
                )),
                this.mailboxes.length || (t = {
                    id: 0,
                    email: APP.lang.no_available_mailboxes
                },
                this.mailboxes = [t]),
                this.mailboxes && s().each(i.mailboxes, (function(e) {
                    e.option = e.email,
                    i.mailboxes_collection.push(new (l().Model)(e))
                }
                ))
            },
            render: d()._preload(["/tmpl/mail/modal/write_mail.twig"], "_render"),
            _render: function() {
                var e = 0
                  , t = this.mailboxes_collection.get(this.selected_mailbox)
                  , i = this.mailboxes_collection.first();
                s().isUndefined(t) ? s().isUndefined(i) || (e = i.get("id")) : e = t.get("id"),
                this.$el.trigger("modal:loaded").html(d()({
                    ref: "/tmpl/mail/modal/write_mail.twig"
                }).render({
                    markers: this.markers,
                    reply: "reply" === this.sub_entity,
                    templates: {
                        class_name: "modal_write-mail__templates-select",
                        items: this.templates_collection.toJSON()
                    },
                    mailboxes: {
                        class_name: "modal_write-mail__mailboxes-select",
                        selected: e,
                        items: this.mailboxes_collection.toJSON()
                    }
                }))
            },
            initPagePreventer: function() {
                this._confirmModalConfig = {
                    message: APP.lang.write_mail_on_modal_close,
                    gray_button: !0,
                    accept: s().bind((function(e) {
                        this.force_exit = !0,
                        this.modal.destroy(),
                        s().isFunction(e) && e()
                    }
                    ), this)
                },
                APP.router.registerPreventConfig(this._confirmModalConfig, b)
            },
            watchForm: function() {
                var e = this;
                this._findElem("controls_select_input").addClass("js-form-changes-skip"),
                this.initModelFromForm(),
                this._elem("send_button").trigger("button:save:enable"),
                this.model.on("has_changes", (function() {
                    e.form_modified = !0,
                    APP.router.preventPageChange(!0, b)
                }
                )).on("has_reverted", (function() {
                    e.form_modified = !1,
                    APP.router.preventPageChange(!1, b)
                }
                ))
            },
            getTemplatesList: function() {
                var e = this
                  , t = {
                    render: !0,
                    mode: this.sub_entity,
                    template_params: {
                        "contact.name": this.options.recipient_name
                    }
                };
                return g.default.getMailTemplates(t).done((function(t) {
                    e.templates = t.items,
                    e.markers = t.markers
                }
                )).fail((function(t) {
                    e.renderErrorModal(t, !1)
                }
                ))
            },
            getMailboxesList: function() {
                var e = this;
                return g.default.getMailboxes({
                    list: "short",
                    active: 1
                }).done((function(t) {
                    e.mailboxes = t.items
                }
                )).fail((function(t) {
                    e.renderErrorModal(t, !1)
                }
                ))
            },
            getRecipientsList: function() {
                var e = this
                  , t = {
                    type: "income",
                    threads: this.thread_id
                };
                return g.default.getRecipients(t).done((function(t) {
                    e.recipients = t
                }
                )).fail((function(t) {
                    e.renderErrorModal(t, !1)
                }
                ))
            },
            getReplyData: function() {
                return g.default.getThreadReplyData(this.thread_id).done(s().bind(this.resolveRecipients, this)).fail(s().bind((function(e) {
                    this.renderErrorModal(e, !1)
                }
                ), this))
            },
            resolveRecipients: function(e) {
                this.recipients = e.to,
                this.ccopy = e.cc,
                this.reply_data = e
            },
            onMailboxCollectionChange: function() {
                var e = this
                  , t = this.subviews.recipients.items_collection.length + ("reply" === this.sub_entity ? this.subviews.ccopy.items_collection.length : null)
                  , i = ["recipients"];
                "reply" === this.sub_entity && i.push("ccopy"),
                this._elem("send_button").trigger("button:save:".concat(t ? "enable" : "disable")),
                this.send_locked = !t,
                s().every(i, (function(t) {
                    return e.defaults[t] === JSON.stringify(e.subviews[t].items_collection.toJSON())
                }
                )) ? (this.recipients_modified = !1,
                APP.router.preventPageChange(!(!this.recipients_modified && !this.form_modified), b)) : (this.recipients_modified = !0,
                APP.router.preventPageChange(!0, b))
            },
            onMailboxChange: function() {
                var e = +this._elem("mailboxes_select_input").val()
                  , t = this.mailboxes_collection.get(e);
                s().isUndefined(t) && (t = this.mailboxes_collection.first());
                var i = t.get("smtp");
                void 0 !== e && 0 === e ? (this._elem("send_button").trigger("button:save:disable"),
                this.send_locked = !0) : (this._elem("mailbox_form__error_select").toggle(!i),
                this.send_locked = !i,
                this._elem("send_button").trigger("button:save:".concat(i ? "enable" : "disable")))
            },
            changeTemplate: function() {
                var e = this._findElem("controls_select_input").val()
                  , t = this.templates_collection.get(e);
                t.get("subject") && this._elem("template_subject").val((0,
                m.unescapeHTML)(t.get("subject"))).trigger("input"),
                this._elem("template_content").val(t.get("content")).trigger("input").trigger("controls:textarea:autosize"),
                t.get("content_html") ? this._elem("template_content_html").prop("checked", !0).trigger("change") : this._elem("template_content_html").attr("checked", !1).trigger("change"),
                this.form_modified = !1,
                this.model.updateDefaults()
            },
            onTemplateSelect: function(e) {
                var t = a()(e.target).closest(".control--select--list--item").data("value");
                if (this.form_modified)
                    return this.confirm = new f.default({
                        text: APP.lang.write_mail_on_template_select,
                        accept: s().bind((function() {
                            this.confirm.destroy(),
                            this._elem("templates_select_input").val(t).trigger("controls:change:visual").trigger("controls:change")
                        }
                        ), this),
                        decline: s().bind((function() {
                            return this.confirm.destroy(),
                            !1
                        }
                        ), this)
                    }),
                    !1
            },
            onSendClick: function(e) {
                if (this.send_locked)
                    return !1;
                var t = "reply" === this.sub_entity && this.subviews.ccopy.items_collection.where({
                    invalid: !0
                }).length;
                if (this.subviews.recipients.items_collection.where({
                    invalid: !0
                }).length || t)
                    return this.modal.showError(APP.lang.write_mail_incorrect_recipients);
                var i = s().extend(this.model.toJSON(), {
                    from: +this._elem("mailboxes_select_input").val(),
                    to: this.subviews.recipients.items_collection.toJSON()
                });
                "reply" === this.sub_entity && (i.cc = this.subviews.ccopy.items_collection.toJSON()),
                this._elem("send_button").trigger("button:load:start"),
                this.send_locked = !0,
                this.compose_xhr = this.composeReply(e, i)
            },
            composeReply: function(e, t) {
                var i, n = this;
                if ("reply" === this.sub_entity) {
                    var a = this.thread_id.length ? this.thread_id.pop() : null;
                    i = g.default.composeReply(a, t)
                } else
                    i = g.default.composeMailing(t);
                return i.always((function() {
                    n.$el.show(),
                    n._elem("send_button").trigger("button:load:stop")
                }
                )).done((function(t) {
                    n.force_exit = !0,
                    APP.router.preventPageChange(!1, b),
                    t.message = APP.lang.write_mail_sent_success,
                    n.modal.show(),
                    n.modal.showSuccess(t.message),
                    s().isFunction(e.callback) ? e.callback() : n.options.from_list ? n._$document.trigger("list:reload") : n.card && n.card.reload ? n.card.reload() : n._$document.trigger("page:reload"),
                    s().isFunction(e.success) && (n.force_exit = !0)
                }
                )).fail((function(e) {
                    n.renderErrorModal(e),
                    n.send_locked = !1
                }
                ))
            },
            openMailboxSettings: function() {
                var e = +this._elem("mailboxes_select_input").val();
                this.force_exit = !0,
                this.modal.destroy(),
                s().isFunction(this.options.setNeedReload) && this.options.setNeedReload(),
                this._$document.trigger("mailbox:view:settings", e)
            },
            renderErrorModal: function(e, t) {
                var i;
                if (t = "boolean" != typeof t || t,
                e.responseJSON)
                    switch (e.responseJSON.error) {
                    case 410:
                        i = APP.lang.mail_letter_deleted,
                        t = !1;
                        break;
                    case 403:
                        i = APP.lang.mail_letter_view_forbidden,
                        t = !1
                    }
                this.modal.showError(i, t)
            }
        });
        _().mixin(w, y.default);
        const E = w;
        var x = "../build/transpiled/components/lists/actions/write_mail";
        window.define(x, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([x])
    }
    ,
    94217: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => l
        });
        var n, a = i(55188), o = i.n(a), s = i(857098), r = function() {
            (n = new s.default("/api/v1.1")).loadBackendVersion()
        };
        o().extend(r.prototype, {
            linkLead: function(e, t) {
                var i = n.makeUrl("/account_id/mail/leads/link")
                  , a = {
                    lead_id: t,
                    thread_id: e
                };
                return n.request("POST", i, a)
            },
            unlinkLead: function(e) {
                var t = n.makeUrl("/account_id/mail/leads/unlink")
                  , i = {
                    thread_id: e
                };
                return n.request("POST", t, i)
            },
            getAddressesWithoutContact: function(e) {
                var t = n.makeUrl("/account_id/mail/address")
                  , i = {
                    thread_ids: e,
                    type: "without_contact"
                };
                return n.request("GET", t, i)
            },
            linkAddress: function(e, t) {
                var i = n.makeUrl("/account_id/mail/address/link")
                  , a = {
                    id: t,
                    address_id: e
                };
                return n.request("POST", i, a)
            },
            listThreads: function(e, t, i, a) {
                var o = n.makeUrl("/account_id/mail/list")
                  , s = {
                    page: t || 1,
                    folder: e,
                    mailbox_id: i
                };
                return n.request("GET", o, s, {}, a || {})
            },
            restoreThreads: function(e) {
                var t = n.makeUrl("/account_id/mail/threads/restore")
                  , i = {
                    threads: e
                };
                return n.request("POST", t, i)
            },
            deleteThreads: function(e) {
                var t = n.makeUrl("/account_id/mail/threads/delete")
                  , i = o().extend({}, {
                    threads: e
                });
                return n.request("POST", t, i)
            },
            createEntitiesFromThreads: function(e, t, i) {
                var a = n.makeUrl("/account_id/mail/".concat(t))
                  , s = o().extend({}, i, {
                    threads: e
                });
                return n.request("POST", a, s)
            },
            deleteMailbox: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes/".concat(e, "/delete"));
                return n.request("POST", t)
            },
            enableMailbox: function(e, t) {
                var i = n.makeUrl("/account_id/mail/mailboxes/".concat(e, "/connect"));
                return n.request("POST", i, t)
            },
            disableMailbox: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes/".concat(e, "/disconnect"));
                return n.request("POST", t)
            },
            syncMailbox: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes/".concat(e, "/sync"));
                return n.request("POST", t)
            },
            addMailbox: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes");
                return n.request("POST", t, e)
            },
            saveMailbox: function(e, t, i) {
                var a = n.makeUrl("/account_id/mail/mailboxes/".concat(e, "?save=").concat(i));
                return n.request("POST", a, t)
            },
            getMailbox: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes/".concat(e));
                return n.request("GET", t)
            },
            getMailboxes: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes");
                return n.request("GET", t, e)
            },
            getMailboxStatus: function(e) {
                var t = n.makeUrl("/account_id/mail/mailboxes/status")
                  , i = {
                    id: e
                };
                return n.request("GET", t, i)
            },
            getCounters: function() {
                var e = n.makeUrl("/account_id/mail/mailboxes/counters");
                return n.request("GET", e)
            },
            getThread: function(e, t, i) {
                var a = n.makeUrl("/account_id/mail/threads/".concat(e));
                return n.request("GET", a, t || {}, {}, i)
            },
            getMessage: function(e) {
                var t = n.makeUrl("/account_id/mail/messages/".concat(e));
                return n.request("GET", t)
            },
            readThread: function(e, t) {
                var i = n.makeUrl("/account_id/mail/threads/view")
                  , a = {
                    threads: e
                };
                return n.request("POST", i, a, {}, t)
            },
            shareThread: function(e, t) {
                var i = n.makeUrl("/account_id/mail/threads/share")
                  , a = o().extend(t, {
                    threads: e
                });
                return n.request("POST", i, a)
            },
            findSettings: function(e) {
                var t = n.makeUrl("/account_id/mail/settings")
                  , i = {
                    email: e
                };
                return n.request("GET", t, i)
            },
            getThreadReplyData: function(e) {
                var t = n.makeUrl("/account_id/mail/threads/".concat(e, "/reply"));
                return n.request("GET", t)
            },
            composeReply: function(e, t) {
                var i = e ? "threads/".concat(e, "/reply") : "reply"
                  , a = n.makeUrl("/account_id/mail/".concat(i));
                return n.request("POST", a, t)
            },
            composeMailing: function(e) {
                var t = n.makeUrl("/account_id/mail/compose");
                return n.request("POST", t, e)
            },
            getRecipients: function(e) {
                var t = n.makeUrl("/account_id/mail/threads/recipients");
                return n.request("GET", t, e)
            },
            getMailTemplates: function(e) {
                var t = n.makeUrl("/account_id/mail/templates");
                return n.request("GETJSON", t, e)
            },
            createMailTemplate: function(e) {
                var t = n.makeUrl("/account_id/mail/templates");
                return n.request("POST", t, e)
            },
            updateMailTemplate: function(e) {
                var t = n.makeUrl("/account_id/mail/templates/".concat(e.id));
                return n.request("POST", t, e)
            },
            removeMailTemplate: function(e) {
                var t = n.makeUrl("/account_id/mail/templates/".concat(e.id, "/delete"));
                return n.request("POST", t, e)
            },
            updateMailTemplatesSort: function(e) {
                var t = n.makeUrl("/account_id/mail/templates/sort");
                return n.request("POST", t, e)
            }
        });
        const l = new r;
        var c = "../build/transpiled/components/mail/api";
        window.define(c, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([c])
    }
    ,
    392517: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => h
        });
        var n, a = i(55188), o = i.n(a), s = i(395882), r = i.n(s), l = i(130860), c = i.n(l), d = i(857098), u = i(115129), _ = i(661533), m = function() {
            (n = new d.default("/api/v2")).loadBackendVersion(),
            this.eTags = {},
            this.setBackendVersion = o().bind(n.setBackendVersion, n)
        };
        o().extend(m.prototype, {
            registerAccount: function(e, t) {
                var i = n.makeUrl("/register")
                  , a = {
                    account_id: +e,
                    domain: t
                };
                return n.request("POST", i, a)
            },
            sendMessage: function(e, t, i, a, s, r, l, c, d) {
                var u = n.makeUrl("/account_id/messages/send")
                  , _ = {
                    subject: i,
                    attachments: r || {},
                    content_type: s || "text",
                    content: a,
                    template_fields: l || {}
                };
                return o().isNull(d) || (_.entity_id = +c,
                _.entity_type = d),
                o().isObject(e) ? _.from = e : _.from = {
                    mailbox_id: +e
                },
                _ = o().extend(_, t),
                n.request("POST", u, _)
            },
            getComposeDataForEntity: function(e, t) {
                var i = n.makeUrl("/account_id/type/entity_id/compose", {
                    entity_id: e,
                    type: t
                });
                return n.request("GET", i)
            },
            createEntitiesFromThreads: function(e, t, i, a) {
                var o = n.makeUrl("/account_id/type/create", {
                    type: t
                })
                  , s = {
                    thread_id: e,
                    fields: i,
                    name: a
                };
                return n.request("POST", o, s)
            },
            linkEntityToThread: function(e, t, i) {
                var a = n.makeUrl("/account_id/threads/thread_id/link", {
                    thread_id: e
                })
                  , o = {
                    entity_type: t,
                    entity_id: i
                };
                return n.request("POST", a, o)
            },
            listThreads: function(e, t, i, a, s) {
                var r, l = {
                    fields: e,
                    type: t,
                    page: i || 1
                };
                return r = a ? n.makeUrl("/account_id/mailboxes/mailbox_id/threads", {
                    mailbox_id: a
                }) : n.makeUrl("/account_id/threads"),
                l = o().extend({}, l, s),
                n.request("GET", r, l, null, {
                    cache: !1
                })
            },
            getThread: function(e, t) {
                var i = n.makeUrl("/account_id/threads/thread_id", {
                    thread_id: e
                });
                return n.request("GET", i, null, null, t)
            },
            shareThreads: function(e) {
                var t = n.makeUrl("/account_id/threads/share");
                return n.request("POST", t, e || [])
            },
            getExternalAddresses: function() {
                var e = n.makeUrl("/account_id/whitelist/external");
                return n.request("GET", e)
            },
            updateExternalAddresses: function(e) {
                var t = n.makeUrl("/account_id/whitelist/external")
                  , i = o().isEmpty(e) ? "DELETE" : "POST";
                return n.request(i, t, e || [])
            },
            shareThread: function(e, t, i) {
                t = o().isObject(t) ? t : {};
                var a = n.makeUrl("/account_id/threads/thread_id/share", {
                    thread_id: e
                })
                  , s = o().extend(t, {
                    note: i
                });
                return n.request("POST", a, s)
            },
            resendThreads: function(e) {
                var t = n.makeUrl("/account_id/threads/resend");
                return n.request("POST", t, e || [])
            },
            getMessages: function(e, t, i, a) {
                var o = n.makeUrl("/account_id/threads/thread_id/messages", {
                    thread_id: e
                });
                return n.request("GET", o, {
                    page: t,
                    limit: i,
                    opened_at: !0
                }, null, a)
            },
            resendMessage: function(e, t) {
                var i = n.makeUrl("/account_id/threads/thread_id/messages/message_id/resend", {
                    thread_id: e,
                    message_id: t
                });
                return n.request("POST", i)
            },
            resendThread: function(e) {
                var t = n.makeUrl("/account_id/threads/thread_id/resend", {
                    thread_id: e
                });
                return n.request("POST", t)
            },
            unlinkThread: function(e) {
                var t = n.makeUrl("/account_id/threads/thread_id/unlink", {
                    thread_id: e
                });
                return n.request("POST", t)
            },
            linkThread: function(e, t, i) {
                var a = n.makeUrl("/account_id/threads/thread_id/link", {
                    thread_id: e
                })
                  , o = {
                    entity_type: t,
                    entity_id: i
                };
                return n.request("POST", a, o)
            },
            requestOAuthConnect: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = n.makeUrl("/account_id/mailboxes/oauth")
                  , s = o().extend({
                    provider: e,
                    back_url: t
                }, i);
                return n.request("GETJSON", a, s)
            },
            completeOAuthConnect: function(e, t, i, a, o) {
                var s = {
                    name: e,
                    token: t
                };
                a && (s.user_id = a,
                s.access = o ? u.default.MAILBOX_ACCESS_ADMIN : u.default.MAILBOX_ACCESS_OWNER),
                i && (s.settings = i);
                var r = n.makeUrl("/account_id/mailboxes/oauth");
                return n.request("POST", r, s)
            },
            requestOAuthMailboxConnect: function(e, t) {
                var i = n.makeUrl("/account_id/mailboxes/mailbox_id/oauth", {
                    mailbox_id: e
                })
                  , a = {
                    back_url: t
                };
                return n.request("GETJSON", i, a)
            },
            enableOAuthMailbox: function(e, t) {
                return this.enableMailbox(e, {
                    token: t
                })
            },
            getUploadSandbox: function() {
                var e = n.makeUrl("/account_id/upload");
                return n.request("GET", e)
            },
            createParserTemplate: function(e, t, i) {
                var a = n.makeUrl("/account_id/mailboxes/mailbox_id/message_template", {
                    mailbox_id: e
                })
                  , o = {
                    content: t,
                    content_markers: i
                };
                return n.request("POST", a, o)
            },
            updateParserTemplate: function(e, t, i, a) {
                var o = n.makeUrl("/account_id/mailboxes/mailbox_id/message_template", {
                    mailbox_id: e
                })
                  , s = {
                    content: t,
                    content_markers: i,
                    fields_info: a || {}
                };
                return n.request("POST", o, s)
            },
            getParserTemplate: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/mailbox_id/message_template", {
                    mailbox_id: e
                });
                return n.request("GET", t)
            },
            fetchAttachment: function(e) {
                var t = n.makeUrl("/account_id/attachments/".concat(e));
                return n.request("POST", t)
            },
            getAttachment: function(e) {
                var t = n.makeUrl("/account_id/attachments/".concat(e));
                return n.request("GET", t)
            },
            uploadFiles: function(e, t) {
                var i = _.Deferred()
                  , a = {
                    "X-Upload-Version": 2,
                    "X-Upload-Token": t.token,
                    "X-Upload-Key": t.key
                };
                return r().upload({
                    cache: !0,
                    url: t.url,
                    headers: a,
                    complete: function(e, o) {
                        !1 === e ? n.requestRaw("GET", t.url, {}, a).done((function(e) {
                            i.resolve(e)
                        }
                        )).fail((function(e) {
                            i.reject(e.responseJSON || {
                                error_code: "complete_failed"
                            }, e)
                        }
                        )) : i.reject({
                            error_code: "upload_failed",
                            message: e
                        }, o)
                    },
                    fileupload: function(e, t, n) {
                        var a;
                        (a = i).notify.apply(a, arguments)
                    },
                    fileprogress: function(e, t, n, a) {
                        i.notify(e, n, t, a)
                    },
                    filecomplete: function(e, t, n, a) {
                        i.notify(e, t, n, a)
                    },
                    prepare: function(e, t) {
                        t.headers["X-Upload-Id"] = c()().toString(),
                        e.uuid = t.headers["X-Upload-Id"]
                    },
                    files: e,
                    chunkSize: +r().MB,
                    chunkUploadRetry: 3
                }),
                i
            },
            getTemplates: function(e) {
                var t = n.makeUrl("/account_id/templates")
                  , i = {};
                return o().isUndefined(e) || (i.type = e),
                n.resolveOnCache(n.request("GET", t, i, this.applyEtag("templates")), n.makeRequest("GET", t, i))
            },
            touchTemplates: function() {
                var e = n.makeUrl("/account_id/templates");
                return n.request("HEAD", e, null, this.applyEtag("templates"))
            },
            addTemplate: function(e, t) {
                var i = n.makeUrl("/account_id/templates")
                  , a = {
                    name: e,
                    fields: t || {}
                };
                return n.request("POST", i, a).done(this.storeEtagOnDone("templates"))
            },
            updateTemplate: function(e, t) {
                var i = n.makeUrl("/account_id/templates/".concat(e));
                return n.request("PATCH", i, t).done(this.storeEtagOnDone("templates"))
            },
            getTemplate: function(e) {
                var t = n.makeUrl("/account_id/templates/".concat(e));
                return n.resolveOnCache(n.request("GET", t, null, this.applyEtag("templates")), n.makeRequest("GET", t))
            },
            removeTemplate: function(e) {
                var t = n.makeUrl("/account_id/templates/".concat(e));
                return n.request("DELETE", t).done(this.storeEtagOnDone("templates"))
            },
            sortTemplate: function(e, t) {
                return this.updateTemplate(e, {
                    sort: {
                        after: t
                    }
                }).done(this.storeEtagOnDone("templates"))
            },
            getTemplateMarkers: function() {
                var e = _.Deferred();
                return e.resolve([{
                    name: "contact_name",
                    code: "{{contact.name}}"
                }, {
                    name: "profile_name",
                    code: "{{profile.name}}"
                }, {
                    name: "profile_phone",
                    code: "{{profile.phone}}"
                }]),
                e.promise()
            },
            getMailboxes: function(e) {
                var t = n.makeUrl("/account_id/mailboxes");
                return n.request("GET", t, {
                    mode: e
                })
            },
            getMailbox: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/".concat(e));
                return n.request("GET", t)
            },
            getMailboxStatus: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/mailbox_id/status", {
                    mailbox_id: e
                });
                return n.request("GET", t)
            },
            getMailboxesStatus: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/status");
                return n.request("GET", t, {
                    id: e || []
                })
            },
            enableMailbox: function(e, t) {
                var i = n.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                })
                  , a = o().extend({
                    active: !0
                }, t || {});
                return n.request("PATCH", i, a)
            },
            cancelConnection: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/mailbox_id/cancel", {
                    mailbox_id: e
                });
                return n.request("POST", t)
            },
            addMailbox: function(e, t, i, a) {
                var o = n.makeUrl("/account_id/mailboxes");
                return (t = t || {}).email = e,
                i && (t.user_id = +i,
                t.access = a ? u.default.MAILBOX_ACCESS_ADMIN : u.default.MAILBOX_ACCESS_OWNER),
                n.request("POST", o, t)
            },
            createMailbox: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/create")
                  , i = {
                    type: e
                };
                return n.request("POST", t, i)
            },
            getMailboxSetupSettings: function(e) {
                var t = n.makeUrl("/account_id/mailbox_setup/mailbox_id", {
                    mailbox_id: e
                });
                return n.request("GET", t)
            },
            getMailboxConfirmMessage: function(e) {
                var t = n.makeUrl("/account_id/mailbox_setup/mailbox_id/confirm_message", {
                    mailbox_id: e
                });
                return n.request("GET", t)
            },
            getTemplateMessage: function(e) {
                var t = n.makeUrl("/account_id/threads/thread_id/messages/parser_message_template", {
                    thread_id: e
                });
                return n.request("GET", t)
            },
            updateMailbox: function(e, t) {
                var i = n.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                return t = t || {},
                n.request("PATCH", i, t)
            },
            updateMailboxSetup: function(e, t, i) {
                var a = n.makeUrl("/account_id/mailbox_setup/mailbox_id", {
                    mailbox_id: e
                })
                  , o = {
                    status: t,
                    state: i
                };
                return n.request("PATCH", a, o)
            },
            changeMailboxAuth: function(e, t) {
                var i = n.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                })
                  , a = {
                    auth: t
                };
                return n.request("PATCH", i, a)
            },
            getDomain: function(e) {
                var t = n.makeUrl("/account_id/domains/domain_id", {
                    domain_id: e
                });
                return n.request("GET", t)
            },
            getDomainStatus: function(e, t) {
                var i = n.makeUrl("/account_id/domains/domain_id/status/uuid", {
                    domain_id: e,
                    uuid: t
                });
                return n.request("GET", i)
            },
            checkDomain: function(e) {
                var t = n.makeUrl("/account_id/domains/domain_id/check", {
                    domain_id: e
                });
                return n.request("POST", t)
            },
            changeMailboxOwner: function(e, t, i) {
                var a = n.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                if (o().isUndefined(t))
                    throw new Error("Logic error user_id must be set");
                var s = {
                    user_id: t
                };
                return t && (s.access = i ? u.default.MAILBOX_ACCESS_ADMIN : u.default.MAILBOX_ACCESS_OWNER),
                n.request("PATCH", a, s)
            },
            disableMailbox: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                return n.request("PATCH", t, {
                    active: !1
                })
            },
            deleteMailbox: function(e) {
                var t = n.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                return n.request("DELETE", t)
            },
            readThread: function(e) {
                var t = n.makeUrl("/account_id/threads/read")
                  , i = {
                    threads: e
                };
                return n.request("POST", t, i)
            },
            unreadThread: function(e) {
                var t = n.makeUrl("/account_id/threads/unread")
                  , i = {
                    threads: e
                };
                return n.request("POST", t, i)
            },
            getUserSignature: function(e) {
                var t = n.makeUrl("/account_id/signatures")
                  , i = {
                    user_id: e
                };
                return n.resolveOnCache(n.request("GET", t, i, this.applyEtag("signatures")), n.makeRequest("GET", t, i))
            },
            getSignatures: function() {
                var e = n.makeUrl("/account_id/signatures");
                return n.resolveOnCache(n.request("GET", e, null, this.applyEtag("signature")), n.makeRequest("GET", e))
            },
            touchSignatures: function() {
                var e = n.makeUrl("/account_id/signatures");
                return n.request("HEAD", e, null, this.applyEtag("signature"))
            },
            addSignature: function(e, t) {
                var i = n.makeUrl("/account_id/signatures")
                  , a = {
                    user_id: e,
                    content: t
                };
                return n.request("POST", i, a).done(this.storeEtagOnDone("signature"))
            },
            updateSignature: function(e, t, i) {
                var a = n.makeUrl("/account_id/signatures/signature_id", {
                    signature_id: e
                })
                  , o = {
                    content: i,
                    user_id: t
                };
                return n.request("PATCH", a, o).done(this.storeEtagOnDone("signature"))
            },
            deleteSignature: function(e) {
                var t = n.makeUrl("/account_id/signatures/signature_id", {
                    signature_id: e
                });
                return n.request("DELETE", t).done(this.storeEtagOnDone("signature"))
            },
            applyEtag: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.eTags[e] && (t["If-None-Match"] = this.eTags[e],
                delete this.eTags[e]),
                t
            },
            storeEtagOnDone: function(e) {
                return o().bind((function(t, i, n) {
                    var a = n.getResponseHeader("ETag");
                    o().isEmpty(a) || (this.eTags[e] = a)
                }
                ), this)
            }
        });
        const h = new m;
        var p = "../build/transpiled/components/mail/api_v2";
        window.define(p, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([p])
    }
    ,
    857098: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => u
        });
        var n = i(55188)
          , a = i.n(n)
          , o = i(661533)
          , s = i.n(o)
          , r = i(988050)
          , l = i(729153);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var d = function(e, t) {
            this.base_path = e,
            this.headers = a().extend({
                "X-Requested-With": "XMLHttpRequest"
            }, t || {})
        };
        a().extend(d.prototype, {
            loadBackendVersion: function() {
                var e;
                (e = (0,
                r.get)("amomail_backend")) && (e = JSON.parse(e),
                a().isString(e.backend) && (this.headers["X-App-Api-Backend"] = e.backend),
                this.headers["X-App-Version"] = e.version)
            },
            setBackendVersion: function(e, t) {
                if (a().isUndefined(e) && a().isUndefined(t) || a().isUndefined(t) && "current" === e)
                    return (0,
                    r.set)({
                        name: "amomail_backend",
                        value: "{}",
                        expiredays: -1
                    }),
                    delete this.headers["X-App-Api-Backend"],
                    void delete this.headers["X-App-Version"];
                e = e || "current",
                this.headers["X-App-Version"] = e;
                var i = {
                    backend: null,
                    version: e
                };
                a().isString(t) && (this.headers["X-App-Api-Backend"] = t,
                i.backend = t),
                (0,
                r.set)({
                    name: "amomail_backend",
                    expiredays: 1,
                    value: JSON.stringify(i)
                })
            },
            getParams: function() {
                var e = APP.constant("amomail") || {};
                return {
                    enabled: e.enabled,
                    account_id: APP.constant("account").id,
                    base_url: e.server_base + this.base_path,
                    auth_token: e.auth_token || ""
                }
            },
            getAjaxDefaults: function(e) {
                var t = {
                    xhrFields: {
                        withCredentials: !0
                    },
                    contentType: "application/json; charset=UTF-8"
                };
                return t.headers = a().extend({}, this.headers, e || {}),
                t
            },
            resolveOnCache: function(e, t) {
                var i = s().Deferred()
                  , n = a().bind((function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    i.resolve.apply(this, t)
                }
                ), this)
                  , o = a().bind((function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    i.reject(this, t)
                }
                ), this);
                return e.done((function(e, i, a) {
                    304 === a.status ? t().done(n).fail(o) : n.apply(this, arguments)
                }
                )).fail(o),
                i.promise()
            },
            makeRequest: function() {
                var e = Array.prototype.slice.call(arguments);
                return a().bind((function() {
                    return this.request.apply(this, function(e) {
                        if (Array.isArray(e))
                            return c(e)
                    }(t = e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                            return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return c(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name),
                            "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(e, t) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                    var t
                }
                ), this)
            },
            checkAccount: function() {
                var e = this.getParams()
                  , t = APP.constant("amomail");
                if (e.enabled || !APP.constant("amomail")) {
                    var i = s().Deferred();
                    return i.resolve(),
                    i.promise()
                }
                var n = "".concat(t.server_base, "/api/v2/register")
                  , o = APP.constant("account")
                  , r = {
                    account_id: o.id,
                    domain: o.subdomain
                }
                  , l = a().extend(this.getAjaxDefaults(), {
                    url: n,
                    data: JSON.stringify(r),
                    type: "POST",
                    dataType: "json"
                })
                  , c = s().ajax(l);
                return c.done((function() {
                    t.enabled = !0
                }
                )),
                c
            },
            makeUrl: function(e, t) {
                var i = this.getParams();
                return t = t || {},
                i.account_id && (t.account_id = i.account_id),
                a().each(t, (function(t, i) {
                    e = e.replace(i, t)
                }
                )),
                i.base_url + e
            },
            _request: function(e, t, i, n, o) {
                var r = s().Deferred();
                n = n || {},
                i = i || {},
                "GET" !== e && (i = JSON.stringify(i),
                "GETJSON" === e ? n["X-Http-Method-Override"] = "GET" : "POST" !== e && (n["X-Http-Method-Override"] = e),
                e = "POST");
                var c = a().extend(this.getAjaxDefaults(n), {
                    url: t,
                    data: i,
                    type: e,
                    dataType: "json"
                }, o || {});
                return s().ajax(c).done((function() {
                    r.resolve.apply(null, arguments)
                }
                )).fail((function(e) {
                    401 === e.status ? l.default.checkAuth((function() {
                        return s().ajax(c)
                    }
                    ), 0).done((function() {
                        r.resolve.apply(null, arguments)
                    }
                    )).fail((function() {
                        r.reject.apply(null, arguments)
                    }
                    )) : r.reject.apply(null, arguments)
                }
                )),
                r.promise()
            },
            requestRaw: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , o = arguments.length > 4 ? arguments[4] : void 0
                  , r = a().extend({
                    url: t,
                    data: i,
                    type: e,
                    headers: n,
                    dataType: "json"
                }, o || {});
                return s().ajax(r)
            },
            request: function(e, t, i, n, o) {
                var s = this;
                return this.checkAccount().always((function() {
                    s.request = s._request
                }
                )).then(a().bind(s._request, this, e, t, i, n, o))
            }
        });
        const u = d;
        var _ = "../build/transpiled/components/mail/base_api";
        window.define(_, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([_])
    }
    ,
    115129: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            MAILBOX_AUTH_TYPES: () => m,
            MAILBOX_ERRORS: () => _,
            MAILBOX_ERROR_GROUPS_CODES: () => f,
            MAILBOX_GENERAL_ERRORS: () => d,
            MAILBOX_GENERAL_ERROR_CODES: () => u,
            MAILBOX_GROUPS_ERROR: () => p,
            MAILBOX_STATES: () => n,
            MAILBOX_STATE_CODES: () => a,
            MAILBOX_STATUSES: () => o,
            MAILBOX_STATUS_CODES: () => s,
            MAILBOX_TYPES: () => r,
            MAILBOX_TYPE_CODES: () => l,
            MAILBOX_VALIDATION_ERRORS: () => c,
            default: () => h
        });
        var n = {
            complete: "complete",
            locked: "locked",
            connection: "connection",
            convertation: "convertation"
        }
          , a = [n.complete, n.locked, n.connection, n.convertation]
          , o = {
            connection: "connection",
            import: "import",
            sync: "sync",
            locked: "locked",
            disabled: "disabled",
            complete: "complete"
        }
          , s = [o.connection, o.import, o.sync, o.locked, o.disabled, o.complete]
          , r = {
            internal: "internal",
            shared: "shared",
            private: "private",
            parser: "parser"
        }
          , l = [r.internal, r.shared, r.private, r.parser]
          , c = {
            temporary_locked: "temporary_locked"
        }
          , d = {
            locked: "locked",
            reauth_required: "reauthorization_required",
            oauth_conn_error: "oauth_connection_error",
            conn_error: "connection_error",
            list_folders: "list_folders",
            no_sent_folders: "no_sent_folder"
        }
          , u = [d.locked, d.reauth_required, d.oauth_conn_error, d.conn_error, d.list_folders, d.no_sent_folders]
          , _ = {
            auth_invalid_credentials: "auth.invalid_credentials",
            auth_token_refresh: "auth.token_refresh",
            imap_auth_error: "imap.auth.error",
            imap_conn_error: "imap.conn.error",
            imap_conn_timeout: "imap.conn.timeout",
            imap_conn_wrong_proto: "imap.conn.wrong_proto",
            imap_conn_tls_invalid_cert: "imap.conn.tls_invalid_cert",
            smtp_auth_error: "smtp.auth.error",
            smtp_conn_error: "smtp.conn.error",
            smtp_conn_timeout: "smtp.conn.timeout",
            smtp_conn_wrong_proto: "smtp.conn.wrong_proto",
            smtp_conn_tls_invalid_cert: "smtp.conn.tls_invalid_cert"
        }
          , m = {
            login: "login",
            oauth: "oauth"
        };
        const h = {
            MAILER_AMO: "amo",
            MAILER_PROVIDER: "provider",
            MAILBOX_ACCESS_OWNER: 0,
            MAILBOX_ACCESS_ADMIN: 1
        };
        var p = {
            connection_group_error: "connection_group_error",
            timeout_group_error: "timeout_group_error",
            auth_group_error: "auth_group_error",
            oauth_group_error: "oauth_group_error"
        }
          , f = [p.connection_group_error, p.timeout_group_error, p.auth_group_error, p.oauth_group_error]
          , g = "../build/transpiled/components/mail/constants";
        window.define(g, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([g])
    }
    ,
    932555: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            getCurrencyCode: () => l,
            getCurrencyId: () => r,
            getCurrencySymbol: () => c,
            getFields: () => d
        });
        var n = i(55188)
          , a = i.n(n)
          , o = i(880774)
          , s = i(500034);
        function r(e) {
            var t;
            return a().each(AMOCRM.constant("invoice_currencies"), (function(i, n) {
                0 !== n && i.currency !== e || (t = i.id)
            }
            )),
            t
        }
        function l(e) {
            var t;
            return (0,
            s.isFeatureAvailable)("multi_currency") ? a().each(AMOCRM.constant("invoice_currencies"), (function(i, n) {
                0 !== n && i.id !== e || (t = i.currency)
            }
            )) : t = AMOCRM.system.locale.currency,
            t
        }
        function c(e) {
            return Object.prototype.hasOwnProperty.call(AMOCRM.constant("currencies_used"), e) ? AMOCRM.constant("currencies_used")[e].currency_symbol : AMOCRM.system.locale.currency_symbol
        }
        function d(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = c(e)
              , n = AMOCRM.constant("invoice_currencies").length > 1;
            return [{
                id: "sku",
                code: "sku",
                shown: !0,
                template: "invoice_cell",
                type_code: "invoice_cell",
                title: (0,
                o.i18n)("SKU"),
                editable: !0,
                width: 20
            }, {
                id: "description",
                code: "description",
                shown: !0,
                template: "invoice_cell",
                type_code: "invoice_cell",
                title: (0,
                o.i18n)("Name"),
                editable: !0,
                width: 30
            }, {
                id: "unit_price",
                code: "unit_price",
                shown: !0,
                template: "invoice_cell",
                type_code: "invoice_cell",
                title: "".concat((0,
                o.i18n)("Price"), ", ").concat(i),
                editable: !0,
                sortable: !!n && t,
                sorted: !!n && t,
                width: 12
            }, {
                id: "quantity",
                code: "quantity",
                shown: !0,
                template: "invoice_cell",
                type_code: "invoice_cell",
                title: (0,
                o.i18n)("Count"),
                editable: !0,
                width: 10
            }, {
                id: "discount",
                code: "discount",
                shown: !0,
                template: "invoice_cell",
                type_code: "invoice_cell",
                title: (0,
                o.i18n)("Discount (invoice)"),
                editable: !0,
                width: 10
            }, {
                id: "vat",
                code: "vat",
                shown: !0,
                template: "invoice_cell",
                type_code: "invoice_cell",
                title: "",
                editable: !0,
                sortable: t,
                sorted: t,
                width: 12
            }, {
                id: "sum",
                code: "sum",
                shown: !0,
                template: "invoice_cell",
                type_code: "text",
                title: "".concat((0,
                o.i18n)("Total short (invoice)"), ", ").concat(i),
                width: 15
            }]
        }
        var u = "../build/transpiled/interface/catalogs/element/utils";
        window.define(u, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    261015: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => y
        });
        var n = i(661533)
          , a = i.n(n)
          , o = i(871082)
          , s = i.n(o)
          , r = i(460159)
          , l = i.n(r)
          , c = i(880774)
          , d = i(889378)
          , u = i(810427)
          , _ = i.n(u)
          , m = i(94217)
          , h = "/tmpl/mail/modal/add_contacts.twig"
          , p = "/tmpl/mail/modal/contacts_list_view.twig"
          , f = s().Model.extend({
            onSave: null,
            save: function() {
                var e = this;
                return this.onSave = a().Deferred(),
                m.default.linkAddress().done((function() {
                    e.onSave.resolve()
                }
                )).fail((function(t, i, n) {
                    var a = {
                        req_obj: t,
                        msg: i,
                        error: n
                    };
                    e.onSave.reject(a)
                }
                )),
                this.onSave.promise()
            }
        })
          , g = s().Collection.extend({
            onFetch: null,
            model: f,
            fetch: function(e) {
                var t = this
                  , i = e.threadIds || [];
                return this.onFetch = a().Deferred(),
                m.default.getAddressesWithoutContact(i).done((function(e) {
                    t.add(e.items),
                    t.onFetch.resolve(e)
                }
                )).fail((function(e, i, n) {
                    var a = {
                        req_obj: e,
                        msg: i,
                        error: n
                    };
                    t.onFetch.reject(a)
                }
                )),
                this.onFetch.promise()
            }
        })
          , v = _().extend({
            template: p,
            threadIds: null,
            dataLoaded: null,
            collection: null,
            parent: null,
            events: {
                "click #contact-list__checkbox-all": "onToggleAll",
                "click .js-contact-checkbox input": "onCheckboxChange"
            },
            _selectors: function() {
                return {
                    footer: ".contacts-list__footer",
                    checkboxes: ".js-contact-checkbox input",
                    mainCheckbox: "#contact-list__checkbox-all",
                    buttonCreate: "#add-contacts-create-button",
                    buttonCreateLabel: ".button-input-inner__text",
                    buttonNext: "",
                    buttonSkip: ""
                }
            },
            initialize: function(e) {
                var t = this;
                this.threadIds = e.threadIds,
                this.$container = e.container,
                this.modal = e.modal,
                this.parent = e.parent,
                this.collection = new g,
                this.collection.fetch({
                    threadIds: this.threadIds
                }).done((function(e) {
                    t.render(e)
                }
                ))
            },
            render: l()._preload([p], "_render"),
            _render: function(e) {
                var t = {
                    all_contacts: APP.lang.mail_modal_all_contacts_checkbox,
                    count: e.items.length,
                    items: e.items,
                    button_text_start: APP.lang.mail_modal_add_button_text_create,
                    button_text_end: APP.lang.mail_letter_contacts_more_contacts
                };
                this.$el.html(l()({
                    ref: this.template
                }).render(t)),
                this.$container.html(this.$el),
                this._findElem("mainCheckbox").trigger("click"),
                this.setButtonTitle()
            },
            destroy: function() {
                this.collection.reset(),
                this.collection = null,
                this.remove()
            },
            onToggleAll: function(e) {
                this.toggleAll(a()(e.currentTarget))
            },
            onCheckboxChange: function(e) {
                var t = e.currentTarget.checked
                  , i = +a()(e.currentTarget).val()
                  , n = this._findElem("mainCheckbox")
                  , o = n.closest(".control-checkbox");
                this.collection.findWhere({
                    address_id: i
                }).set("checked", t);
                var s = this.collection.where({
                    checked: !0
                }).length;
                s === this.collection.length ? (n.prop("checked", !0),
                o.removeClass("control-checkbox-dash")) : (s > 0 ? o.addClass("control-checkbox-dash") : o.removeClass("control-checkbox-dash"),
                n.prop("checked", !1)),
                this.setButtonTitle()
            },
            toggleAll: function(e) {
                var t = e.prop("checked")
                  , i = this.collection.where({
                    checked: !0
                }).length
                  , n = e.closest(".control-checkbox");
                i > 0 && (t = !1,
                e.prop("checked", !1)),
                this.collection.each((function(e) {
                    e.set("checked", t)
                }
                )),
                this._findElem("checkboxes").each((function() {
                    this.checked = t
                }
                )),
                n.removeClass("control-checkbox-dash"),
                this.setButtonTitle()
            },
            setButtonTitle: function() {
                var e = this.$container.find(this._selector("buttonCreate"))
                  , t = this.collection.where({
                    checked: !0
                }).length
                  , i = "".concat(APP.lang.mail_modal_add_button_text_create, " ").concat(t, " ").concat((0,
                c.numeralWord)(t, APP.lang.mail_letter_contacts_more_contacts));
                e.find(this._selector("buttonCreateLabel")).text(i),
                t > 0 ? (e.addClass("button-input_blue"),
                e.removeClass("button-input-disabled"),
                e.prop("disabled", !1)) : (e.removeClass("button-input_blue"),
                e.addClass("button-input-disabled"),
                e.prop("disabled", !0))
            }
        });
        const y = _().extend({
            template: h,
            modal: null,
            subview: null,
            threadIds: [],
            _selectors: function() {
                return {
                    subviewContainer: ".add-contact-view__subview-container"
                }
            },
            initialize: function(e) {
                var t, i;
                t = e.threadIds,
                (null != (i = Array) && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](t) : t instanceof i) ? this.threadIds = e.threadIds : "number" == typeof e.threadIds && (this.threadIds = [e.threadIds]),
                this.render()
            },
            render: l()._preload([h], "_render"),
            _render: function() {
                var e = this;
                this.$el.html(l()({
                    ref: this.template
                }).render({
                    title: APP.lang.multiple_modal_add_contacts_title
                })),
                this.modal = new d.default({
                    init: function(t) {
                        t.trigger("modal:loaded").html(e.$el).trigger("modal:centrify")
                    }
                }),
                this.showList()
            },
            showList: function() {
                this.subview = new v({
                    threadIds: this.threadIds,
                    container: this._findElem("subviewContainer"),
                    modal: this.modal,
                    parent: this
                })
            },
            showForm: function() {}
        });
        var b = "../build/transpiled/interface/mail/add_contacts";
        window.define(b, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([b])
    }
    ,
    577830: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => s
        });
        var n = i(889378)
          , a = i(77305)
          , o = {
            threadCommonFailModal: function(e) {
                var t, i;
                if (e.responseJSON && e.responseJSON.error_code && (i = e.responseJSON.error_code,
                APP.lang["mail_error_".concat(i)] && (t = APP.lang["mail_error_".concat(i)])),
                !t && e.status)
                    switch (e.status) {
                    case 410:
                        t = APP.lang.mail_letter_deleted;
                        break;
                    case 403:
                        t = APP.lang.mail_letter_view_forbidden;
                        break;
                    case 404:
                        t = APP.lang.page_404_caption
                    }
                t ? (new n.default).showError(t, !1) : o.commonErrorConfirm()
            },
            commonErrorConfirm: function() {
                new a.default({
                    class_name: "modal-list",
                    template: "/tmpl/mail/modal/connection_error.twig"
                })
            }
        };
        const s = o;
        var r = "../build/transpiled/interface/mail/common/modals";
        window.define(r, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    778231: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => b
        });
        var n = i(661533)
          , a = i.n(n)
          , o = i(55188)
          , s = i.n(o)
          , r = i(871082)
          , l = i.n(r)
          , c = i(460159)
          , d = i.n(c)
          , u = i(811707)
          , _ = i(880774)
          , m = i(521466)
          , h = i(392517)
          , p = i(577830);
        function f(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        var g = {}
          , v = /[?:<+](.*)[?:>+]/g
          , y = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[\da-z](?:[\da-z-_]*[\da-z])?\.)+[a-z]{2,}$/i;
        g[32] = function(e, t) {
            var i = t.$input.prop("selectionStart") === t.value.length;
            if ((y.test(t.value.trim()) || f(t.value.match(v), Array)) && i)
                return e.preventDefault(),
                this.parseMailboxInput({
                    id: t.cmid || ++this.counter,
                    value: t.value,
                    edit: !!t.cmid
                })
        }
        ,
        g[8] = function(e, t) {
            var i = a()(e.target).closest(".mail-suggest__list__item")
              , n = i.data("id");
            t.value.length || this.deletion_blocked || (i.hasClass("multiple-suggest__list__input") ? this.items_collection.remove(this.items_collection.last()) : (this.items_collection.remove(this.items_collection.get(n)),
            this.onSuggestFocus()),
            this.deletion_blocked = !0)
        }
        ,
        g[27] = function(e, t) {
            a()(e.target).closest(".mail-suggest__list__item").hasClass("mail-suggest__list__item_in-edit") && (e.stopImmediatePropagation(),
            this.active_edits = !1,
            this.updateMailboxItem(this.items_collection.get(t.cmid)),
            this._findElem("mail_suggest__list_item_by_id", t.cmid).focus())
        }
        ,
        g[37] = function(e, t) {
            var i = a()(e.target).closest(".mail-suggest__list__item");
            t.value.length || i.prev(".mail-suggest__list__item").focus()
        }
        ;
        const b = m.default.extend({
            enter_keys: [13, 9],
            mailbox_item_template: {
                ref: "/tmpl/mail/modal/mailbox_suggest_item.twig"
            },
            mailbox_input_template: {
                ref: "/tmpl/controls/suggest.twig"
            },
            events: {
                "click .multiple-suggest__list": "onSuggestFocus",
                "click .mail-suggest__list__item:not(.multiple-suggest__list__input)": "clickToEditMailbox",
                "keydown .mail-suggest__list__item:focus": "onListItemKeydown",
                "click .tag_close": "clickToRemoveMailbox",
                "keydown .mail-suggest__input": "onMailboxKeydown",
                "keyup .mail-suggest__input": "onMailboxKeyup",
                "paste .mail-suggest__input": "onMailboxPaste",
                "input .mail-suggest__input": "autoStretchInput",
                "blur .mail-suggest__input": "onMailboxBlur",
                "input .mail-suggest__input:not(.mail-suggest__input_in-edit)": "onMailboxInput",
                "mousedown .js-control--suggest--list": "onControlSuggestClickDown",
                "touchstart .js-control--suggest--list": "onControlSuggestClickDown",
                "suggest:changed .control--suggest--input": "onSuggestChanged",
                "suggest:loaded .js-suggest-contact-company-pei": "peiSuggestLoaded"
            },
            _selectors: function() {
                return {
                    parent_div: ".mail-suggest.mail-suggest_ext_addresses",
                    mail_suggest__input: ".mail-suggest__input",
                    multiple_suggest__list__input: ".multiple-suggest__list__input",
                    mail_suggest__list_items: ".mail-suggest__list__item[data-id]",
                    mail_suggest__list_item_by_id: ".mail-suggest__list__item[data-id=%s]",
                    error_tooltip: ".js-error-tooltip",
                    error_element: ".mail-suggest__list__item_invalid:first"
                }
            },
            initialize: function(e) {
                m.default.prototype.initialize.call(this),
                this.options = e || {},
                this.items_collection = new (l().Collection),
                this.options.items && this.setItems(this.options.items),
                this._$window.on("resize".concat(this.ns), s().debounce(s().bind((function() {
                    this.autoStretchInput(),
                    this.processEmailInputError()
                }
                ), this), 50)),
                this.counter = this.items_collection.length,
                this.listenTo(this.items_collection, "add", this.renderMailboxItem),
                this.listenTo(this.items_collection, "remove", this.removeMailboxItem),
                this.listenTo(this.items_collection, "reset", this.resetMailboxItems),
                this.listenTo(this.items_collection, "model:change", this.updateMailboxItem),
                this.listenTo(this.items_collection, "all", this.autoStretchInput),
                this.render().then(s().bind((function() {
                    this.autoStretchInput(),
                    this.autoStretchTooltip()
                }
                ), this))
            },
            destroy: function() {
                this.items_collection.reset(),
                m.default.prototype.destroy.call(this, !0)
            },
            setItems: function(e) {
                var t = [];
                s().each(e, (function(i) {
                    i.id = s().indexOf(e, i) + 1,
                    i.name = i.name ? i.name : "",
                    t.push(new (l().Model)(i))
                }
                )),
                this.items_collection.reset(t)
            },
            render: d()._preload(["/tmpl/mail/modal/mailbox_suggest.twig"], "_render"),
            _render: function() {
                var e = !!s().isUndefined(this.options.search_contacts) || this.options.search_contacts
                  , t = {
                    placeholder: this.options.placeholder || "",
                    input_class_name: "js-suggest-contact-company-pei mail-suggest__input js-form-changes-skip",
                    data_type: this.options.data_type,
                    mailboxes: this.items_collection.toJSON(),
                    label_flag: this.options.label_flag,
                    class_name: this.options.class_name
                };
                e && (t.ajax = {
                    url: "/private/ajax/search.php",
                    params: "type=contacts&q=#q#&query_type=email"
                });
                var i = a()(d()({
                    ref: "/tmpl/mail/modal/mailbox_suggest.twig"
                }).render(t));
                this.setElement(i),
                this.options.$container.append(i),
                this._elem("mail_suggest__input").autosizeInput()
            },
            onSuggestFocus: function(e) {
                var t = e ? a()(e.target) : null;
                e && (t.closest(".mail-suggest__list__item").length || t.hasClass("mail-suggest__list__item") || this.active_edits) ? t.hasClass("js-error-tooltip") && this._elem("mail_suggest__input").focus() : this._elem("mail_suggest__input").focus()
            },
            processEmailInputError: function() {
                var e = this._findElem("error_element")
                  , t = this._elem("error_tooltip")
                  , i = e.position();
                e.length && !e.hasClass("mail-suggest__list__item_in-edit") ? (i.left += e.outerWidth(),
                i.top += t.outerHeight() - e.outerHeight() - 5,
                t.css(i),
                t.visible() ? t.removeClass("left") : (i.left = e.position().left - t.outerWidth(),
                i.left -= parseInt(t.css("margin-right")),
                t.css("left", i.left).addClass("left")),
                t.show().addClass("showed")) : t.removeClass("showed").hide()
            },
            onMailboxKeydown: function(e) {
                var t = a()(e.target)
                  , i = t.closest(".mail-suggest__list__item")
                  , n = i.find(".control--suggest--list--item-selected")
                  , o = i.data("id")
                  , r = t.val();
                return s().indexOf(this.enter_keys, e.keyCode) >= 0 ? (e.preventDefault(),
                e.stopPropagation(),
                n.length ? this.onSuggestChanged(e, n) : this.parseMailboxInput({
                    id: o || ++this.counter,
                    value: r,
                    edit: !!o
                })) : s().isFunction(g[e.keyCode]) ? g[e.keyCode].call(this, e, {
                    value: r,
                    cmid: o,
                    $input: t
                }) : void 0
            },
            onMailboxKeyup: function(e) {
                8 === e.keyCode && (this.deletion_blocked = !1)
            },
            onMailboxInput: function(e) {
                var t = a()(e.target);
                this.clipboard_paste && t.val().length && (this.clipboard_paste = !1,
                this._elem("mail_suggest__input").val("").trigger("input"))
            },
            onMailboxPaste: function(e) {
                var t, i = this, n = a()(e.target).val(), o = e.originalEvent.clipboardData.getData("Text");
                n.length || (this.clipboard_paste = !0,
                s().each(this.parseClipboardInput(o), (function(e) {
                    i.items_collection.any((function(t) {
                        return t.get("email").toLowerCase() === e.email.toLowerCase()
                    }
                    )) || (t = !y.test(e.email),
                    i.items_collection.add({
                        id: ++i.counter,
                        name: e.name || "",
                        email: e.email,
                        invalid: t
                    }),
                    t && i.processEmailInputError())
                }
                )),
                "ext_addresses" === this.options.data_type && i.saveChanges(),
                APP.is_touch_device || this.onSuggestFocus())
            },
            onControlSuggestClickDown: function() {
                this.click_down = !0,
                setTimeout(s().bind((function() {
                    this.click_down = !1
                }
                ), this), 100)
            },
            onMailboxBlur: function(e) {
                var t = a()(e.currentTarget)
                  , i = t.closest(".mail-suggest__list__item")
                  , n = t.val().trim()
                  , o = i.data("id");
                if (!this.click_down && (i.hasClass("mail-suggest__list__item_in-edit") && this.active_edits || i.hasClass("multiple-suggest__list__input")))
                    return this.parseMailboxInput({
                        id: o || ++this.counter,
                        value: n,
                        edit: !!o,
                        blur: !0
                    })
            },
            parseClipboardInput: function(e) {
                for (var t, i = /(?:"?([A-Z][^<"]+)"?\s*)?<?([^>\s,;]+)/g, n = []; t = i.exec(e); )
                    t[1] && (t[1] = t[1].trim()),
                    n.push({
                        name: t[1],
                        email: t[2]
                    });
                return n
            },
            parseMailboxInput: function(e) {
                var t = e.value.trim()
                  , i = f(t.match(v), Array) ? t.match(v).shift().replace(/[<>]/gi, "") : ""
                  , n = i.length ? i : t
                  , a = i.length ? t.replace(t.match(v).shift(), "").trim() : ""
                  , o = y.test(n);
                return this.processMailboxInput({
                    id: e.id,
                    name: a,
                    email: n,
                    len: t.length,
                    invalid: !o,
                    edit: e.edit,
                    blur: e.blur
                })
            },
            processMailboxInput: function(e) {
                var t;
                this.active_edits = !1;
                var i = this.items_collection.any((function(t) {
                    if (t.id !== e.id)
                        return t.get("email").toLowerCase() === e.email.toLowerCase()
                }
                ));
                e.edit ? (t = this.items_collection.get(e.id),
                i || !e.len ? this.items_collection.remove(t) : (t.set(e),
                this.items_collection.trigger("model:change", t))) : i || !e.len ? this._elem("mail_suggest__input").val("").trigger("input") : this.items_collection.add(e),
                this.processEmailInputError(),
                "ext_addresses" === this.options.data_type && this.old_value !== e.email && this.saveChanges(),
                APP.is_touch_device || e.blur || this.onSuggestFocus()
            },
            saveChanges: function() {
                var e = this
                  , t = [];
                this.items_collection.each((function(e) {
                    e.get("invalid") || t.push(e.get("email"))
                }
                )),
                h.default.updateExternalAddresses(t).done(s().bind((function(t) {
                    e.items_collection.each((function(i) {
                        t && s().has(t, "invalid_emails") && !s().isEmpty(t.invalid_emails) && s().each(t.invalid_emails, (function(t) {
                            t === i.get("email") && (i.set("invalid", !0),
                            e.items_collection.trigger("model:change", i))
                        }
                        )),
                        i.get("invalid") || i.set("saved", !0)
                    }
                    ))
                }
                ))).fail(s().bind((function() {
                    p.default.commonErrorConfirm()
                }
                )))
            },
            clickToEditMailbox: function(e) {
                var t, i = a()(e.currentTarget).closest(".mail-suggest__list__item"), n = i.data("id"), o = this.items_collection.get(n), r = o.get("name"), l = r ? "".concat(r, " <").concat(o.get("email"), ">") : o.get("email");
                this.old_value = l,
                this.active_edits = !0,
                this.edit_cmid = n,
                i.hasClass("mail-suggest__list__item_in-edit") || i.hasClass("multiple-suggest__list__input") || (t = {
                    placeholder: "",
                    input_class_name: "js-suggest-contact-company-pei mail-suggest__input js-form-changes-skip",
                    type: "email",
                    styled_input: !0
                },
                (!!s().isUndefined(this.options.search_contacts) || this.options.search_contacts) && (t.ajax = {
                    url: "/private/ajax/search.php",
                    params: "type=contacts&q=#q#&query_type=email"
                }),
                i.html(d()(this.mailbox_input_template).render(t)).addClass("mail-suggest__list__item_in-edit").find("input").val(l).select().autosizeInput(),
                this.processEmailInputError(),
                this.autoStretchInput())
            },
            clickToRemoveMailbox: function(e) {
                var t = a()(e.target).closest(".mail-suggest__list__item")
                  , i = this.items_collection.get(t.data("id"));
                e.stopPropagation(),
                this.items_collection.remove(i)
            },
            renderMailboxItem: function(e, t) {
                s().isUndefined(t) && (t = !0),
                this._elem("multiple_suggest__list__input").before(d()(this.mailbox_item_template).render(e.toJSON())),
                t && this._elem("mail_suggest__input").val("").trigger("input")
            },
            updateMailboxItem: function(e) {
                this._findElem("mail_suggest__list_item_by_id", e.id).replaceWith(d()(this.mailbox_item_template).render(e.toJSON())),
                this.autoStretchInput()
            },
            removeMailboxItem: function(e) {
                this._findElem("mail_suggest__list_item_by_id", e.id).remove(),
                this.processEmailInputError(),
                "ext_addresses" === this.options.data_type && e.get("saved") && this.saveChanges(),
                this.active_edits = !1
            },
            resetMailboxItems: function() {
                this._findElem("mail_suggest__list_items").remove(),
                this.items_collection.each((function(e) {
                    this.renderMailboxItem(e, !1)
                }
                ), this),
                this.active_edits = !1,
                this._elem("mail_suggest__input").val("").trigger("input")
            },
            onListItemKeydown: function(e) {
                var t, i = a()(e.target);
                37 === e.keyCode ? i.prev(".mail-suggest__list__item").focus() : 39 === e.keyCode ? this.focusNext(i) : 13 === e.keyCode ? (e.preventDefault(),
                e.stopImmediatePropagation(),
                i.click()) : 46 !== e.keyCode && 8 !== e.keyCode || (e.preventDefault(),
                e.stopImmediatePropagation(),
                this.focusNext(i),
                t = this.items_collection.get(i.data("id")),
                this.items_collection.remove(t))
            },
            focusNext: function(e) {
                var t = e.next(".mail-suggest__list__item");
                t.hasClass("multiple-suggest__list__input") ? t.find("input").focus() : t.focus()
            },
            autoStretchInput: function() {
                var e = this._elem("mail_suggest__input");
                e.css("min-width", 5);
                var t = (e.offset() || {}).left
                  , i = this.$el.offset().left
                  , n = this.$el.outerWidth() - (t - i) - 15
                  , a = e.attr("placeholder");
                if (a) {
                    var o = (0,
                    u.getTextWidth)(a, e.css("font"));
                    n < o && (n = o)
                }
                this._elem("mail_suggest__input").css("min-width", n)
            },
            autoStretchTooltip: function() {
                var e = this._elem("error_tooltip");
                e.css("width", e.outerWidth() + 1)
            },
            peiSuggestLoaded: function(e, t, i) {
                var n = []
                  , o = ""
                  , r = "email";
                "ok" === t.status ? (a().each(t.result, (function(e, t) {
                    o = [s().escape(t.element_type === APP.element_types.contacts ? (0,
                    _.contactName)(t.name) : t.name), t.company_name ? ', <span style="color: rgba(103,110,121,0.502)">'.concat(s().escape(t.company_name), "</span>") : ""].join(""),
                    t[r] && t[r].length && (o += '<div class="suggest-item-pei">'.concat(s().escape(t[r].join(", ")), "</div>")),
                    n.push({
                        id: t.id,
                        title: t.name,
                        text: o,
                        raw_highlight: !0
                    })
                }
                )),
                i.trigger("suggest:reset", [n])) : i.trigger("suggest:reset", [[]])
            },
            onSuggestChanged: function(e, t) {
                var i = t.closest(".mail-suggest__list__item")
                  , n = this.active_edits ? this.edit_cmid : i.data("id")
                  , a = t.find(".suggest-item-pei").text()
                  , o = t.children(".control--suggest--list--item-inner").prop("title");
                return this.processMailboxInput({
                    id: n || ++this.counter,
                    name: o || "",
                    email: a,
                    invalid: !y.test(a),
                    len: !0,
                    edit: !!n
                })
            }
        });
        var w = "../build/transpiled/interface/mail/mailbox_suggest";
        window.define(w, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([w])
    }
    ,
    358373: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => s
        });
        var n = i(661533)
          , a = i.n(n)
          , o = i(811707);
        const s = {
            insertMarker: function(e, t) {
                var i = a()(e.target).text()
                  , n = t || a()(this._selector("template_content"));
                if (n) {
                    var s = n.prop("selectionStart")
                      , r = n.val()
                      , l = r.substring(0, s)
                      , c = r.substring(s, r.length);
                    n.val(l + i + c).trigger("change"),
                    (0,
                    o.setCursorPosition)(n, l.length + i.length)
                }
            }
        };
        var r = "../build/transpiled/interface/mail/mixins/insert_marker";
        window.define(r, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    900882: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => M
        });
        var n, a = i(661533), o = i.n(a), s = i(55188), r = i.n(s), l = i(871082), c = i.n(l), d = i(460159), u = i.n(d), _ = i(880774), m = i(887977), h = i(889378), p = i(77305), f = i(521466), g = i(288607), v = i(214826), y = i(261015), b = i(166570), w = i(300432), E = i(110656), x = i(94217), k = i(392517), A = i(950731), C = i(549488);
        i(168258),
        i(521170);
        var T = c().Collection.extend({
            _pending: !1,
            initialize: function(e, t) {
                this.options = t || {},
                this.on("letter:collection:destroy", this.letterDestroy)
            },
            fetch: function(e) {
                return e.page = e.page || 1,
                this._pending = !0,
                k.default.getMessages(e.id, e.page, 10, this.options.ajax_params)
            },
            destroy: function() {
                this.each((function(e) {
                    e.destroy()
                }
                ), this)
            },
            letterDestroy: function(e) {
                this.remove({
                    id: e
                })
            }
        })
          , P = c().Model.extend({
            initialize: function() {},
            destroy: function() {}
        })
          , S = f.default.extend({
            events: {
                "click .thread_letter__message a": "checkOuterHref",
                "click .feed-note__mail-content a": "checkOuterHref",
                "click .js-letter-show-line-contacts": "showContactsInline",
                "click .js-letter-show-all-contacts": "showHiddenContacts",
                "click .js-letter-hide-all-contacts": "hideShownContacts",
                "click .js-letter-show-all-contacts-to": "showAllContactsTo",
                "click .js-letter-show-all-copies": "showAllCopies",
                "click .js-letter-remove": "removeLetter",
                "click .thread_letter__attachment": "getFile",
                mousedown: "toggleThreadModeStart",
                click: "toggleThreadModeStop"
            },
            errorFlag: !1,
            _classes: function() {
                return {
                    load_icon: "thread_letter__attachment-container--loading"
                }
            },
            _selectors: function() {
                return {
                    contacts: ".js-letter-contacts-table",
                    fromShort: ".thread-letter__contacts-from_short",
                    fromFull: ".thread-letter__contacts-from_full",
                    toShort: ".thread-letter__contacts-to_short",
                    toLine: ".thread-letter__contacts-to_line",
                    toFull: ".thread-letter__contacts-to_full",
                    toAll: ".thread-letter__contacts-to_all",
                    copies: ".thread_letter__copy",
                    copiesAll: ".thread-letter__copy_all",
                    attachment: ".thread_letter__attachment",
                    attachment_loader: ".thread_letter__attachment-loader"
                }
            },
            initialize: function(e) {
                this.active_ajaxes = {},
                this.in_modal = e.in_modal
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                r().each(this.active_ajaxes, (function(e) {
                    e.abort()
                }
                )),
                f.default.prototype.destroy.apply(this, t)
            },
            checkOuterHref: function(e) {
                var t = o()(e.currentTarget)
                  , i = t.attr("href");
                i.indexOf(window.location.host) < 0 && !t.attr("target") && (e.preventDefault(),
                window.open(i, "_blank"))
            },
            _createErrorModal: function(e) {
                var t = this;
                return new p.default({
                    class_name: "modal-list file_error_modal",
                    accept_text: "ОК",
                    should_be_raw: !0,
                    text: '<span class="file_error">'.concat(e, "</span>"),
                    destroy: function() {
                        t.errorFlag = !1
                    }
                })
            },
            getFile: function(e) {
                if (e.preventDefault(),
                e.stopPropagation(),
                !o()(e.currentTarget).hasClass("thread_letter__attachment_blocked")) {
                    if ("archived" !== o()(e.currentTarget).data("state")) {
                        var t, i = o()(e.currentTarget), n = i.parents(".thread_letter__attachment-container"), a = "".concat(i.data("id")), s = this, l = 0, c = 3e3, d = r().bind(this._createErrorModal, this), u = function() {
                            n.removeClass("thread_letter__attachment-container--loading"),
                            delete s.active_ajaxes[a]
                        }, m = function(e, i) {
                            var n;
                            u(),
                            "abort" !== i && (e.responseJSON && "fail" === (n = e.responseJSON).status ? s.errorFlag || (t = APP.lang["file_error_".concat(n.code)],
                            r().isUndefined(t) && (t = APP.lang.file_error_unknown),
                            d(t),
                            s.errorFlag = !0) : s.errorFlag || (t = APP.lang.file_error_load_failed,
                            d(t),
                            s.errorFlag = !0))
                        }, h = function() {
                            s.active_ajaxes[a] = k.default.getAttachment(a).done((function(e) {
                                switch (e.status) {
                                case "not_downloaded":
                                    s.active_ajaxes[a] = k.default.fetchAttachment(a).done((function() {
                                        l > 1 ? (u(),
                                        d(APP.lang.file_error_load_failed)) : (l++,
                                        setTimeout(h, c))
                                    }
                                    )).fail(m);
                                    break;
                                case "processing":
                                    setTimeout(h, c),
                                    c *= 1.5;
                                    break;
                                case "complete":
                                    u(),
                                    window.open(e.url, "_self");
                                    break;
                                case "fail":
                                    u(),
                                    s.errorFlag || (t = APP.lang["file_error_".concat(e.code)],
                                    r().isUndefined(t) && (t = APP.lang.file_error_unknown),
                                    d(t),
                                    s.errorFlag = !0)
                                }
                            }
                            )).fail(m)
                        };
                        return s.active_ajaxes[a] || (s._addClass("load_icon", n),
                        h()),
                        !1
                    }
                    this._createErrorModal((0,
                    _.i18n)("You haven’t visited your account for a long time, so we’ve archived and safely stored your data. When you’re ready to access your data again, please contact our tech support in the chat."))
                }
            },
            showContactsInline: function() {
                var e = this._findElem("toShort")
                  , t = this._findElem("toLine");
                e.hide(),
                t.css({
                    display: "inline-block"
                }),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            showHiddenContacts: function() {
                var e = this._elem("fromShort")
                  , t = this._elem("fromFull")
                  , i = this._elem("contacts")
                  , n = this._findElem("toLine");
                i.css({
                    display: "table"
                }),
                e.hide(),
                t.css({
                    display: "inline-block"
                }),
                n.hide(),
                this.showFullContactsTo(),
                this.showFullCopies(),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            hideShownContacts: function() {
                var e = this._elem("fromShort")
                  , t = this._elem("fromFull");
                this._elem("contacts").hide(),
                e.css({
                    display: "inline-block"
                }),
                t.hide(),
                this.hideFullContactsTo(),
                this.hideFullCopies(),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            showFullContactsTo: function() {
                var e = this._elem("toShort")
                  , t = this._elem("toFull");
                e.hide(),
                t.css({
                    display: "inline-block"
                }),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            showAllContactsTo: function() {
                var e = this._elem("toFull")
                  , t = this._elem("toAll");
                e.hide(),
                t.css({
                    display: "inline-block"
                }),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            hideFullContactsTo: function() {
                var e = this._elem("toShort")
                  , t = this._elem("toFull")
                  , i = this._elem("toAll");
                e.css({
                    display: "inline-block"
                }),
                t.hide(),
                i.hide(),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            showFullCopies: function() {
                var e = this._elem("copies")
                  , t = this._elem("copiesAll");
                e.css({
                    display: "inline-block"
                }),
                t.hide(),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            showAllCopies: function() {
                var e = this._elem("copies")
                  , t = this._elem("copiesAll");
                e.hide(),
                t.css({
                    display: "inline-block"
                }),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            hideFullCopies: function() {
                var e = this._elem("copies")
                  , t = this._elem("copiesAll");
                e.hide(),
                t.hide(),
                this.in_modal && o()(".modal-body").trigger("modal:centrify")
            },
            removeLetter: function() {
                var e = this;
                new p.default({
                    text: APP.lang.mail_letter_remove_confirm,
                    destroy: function() {
                        this.accepted && e.$el.trigger("letter:field:remove", e.id).remove()
                    }
                })
            },
            toggleThreadModeStart: function() {
                this.is_fast_click = !0,
                r().delay(r().bind((function() {
                    this.is_fast_click = !1
                }
                ), this), 300)
            },
            toggleThreadModeStop: function(e) {
                var t = e.which
                  , i = e.button
                  , n = (0,
                m.getSelectedText)();
                this.is_fast_click && (1 !== t && 0 !== i || 0 !== n.length || this.$el.toggleClass("feed-note-wrapper-mail_message--opened"))
            }
        });
        const M = f.default.extend({
            modal: null,
            ready: !1,
            ns: ".thread",
            list: null,
            compose_data: {},
            _page: 1,
            events: {
                "click .js-mail_thread__create_contact": "createLinkedEntity",
                "click .js-mail_thread__create_lead": "createLinkedEntity",
                "click .js-mail_thread__create_customer": "createLinkedEntity",
                "click .js-mail_thread__link_lead": "onClickLinkLead",
                "click #search_clear_button": "onClickCloseSearch",
                "click .js-mail_thread__delete_thread": "onClickDeleteThread",
                "click .js-mail_thread__restore_thread": "onClickRestoreThread",
                "click .js-linked-entity-unlink": "unlinkLead",
                "click .js-thread-letter-email": "createLinkedEntity",
                "click .js-thread-letter-email-blocked": "createLinkedEntityBlocked",
                "click .js-mail_thread__write_mail": "writeMail",
                "letter:field:remove .thread_letter__holder": "removeLetter",
                "input .js-control--suggest--input-ajax": "onSuggestInput",
                "click .mail_thread__action .control--suggest--list--item": "onItemClick",
                "click .feed-compose.minimized": "toggleCompose",
                "click .js-note-edit-cancel": "cancel"
            },
            _selectors: function() {
                return {
                    actions: ".mail_thread__actions",
                    buttons: ".mail_thread__action_buttons",
                    thread_caption: ".mail_thread__caption",
                    thread_wrapper: ".mail_thread__wrapper",
                    letter_wrapper: ".thread_letter__holder",
                    close_search_button: "#search_clear_button",
                    link_button_action: "#link-button-action",
                    suggest_action: "#suggest-action",
                    suggest_input: ".js-control--suggest--input-ajax",
                    suggest_list: ".js-control--suggest--list",
                    card_scroller_fake: ".card-scroller-fake",
                    modal_body: ".modal-body",
                    delete_button_action: "#mail_thread__delete_thread",
                    restore_button_action: "#mail_thread__restore_thread",
                    overlay: "#thread_change_loader",
                    spinner: "#thread_spinner",
                    compose: ".feed-compose",
                    scroller_inner: ".notes-wrapper__scroller-inner",
                    custom_scroll: ".notes-wrapper__scroller.custom-scroll"
                }
            },
            parent: null,
            hasChanges: function() {
                return n
            },
            initialize: function(e) {
                var t = this;
                f.default.prototype.initialize.call(this, arguments),
                o()(window).on("scroll.thread wheel.thread touchmove.thread", (function() {
                    t.setSpinnerPosition()
                }
                )),
                n = e.needReloadList || !1,
                this.parent = e.parent,
                this.initOptions(e),
                this.setComposeData(),
                this.getAjaxLetters()
            },
            showOverlay: function() {
                this.hideOverlay(),
                this.$el.find("#thread_change_loader").length ? this.$page_change_overlay = o()("#thread_change_loader") : (this.$page_change_overlay = o()('<div class="default-overlay" id="thread_change_loader" style="background: rgba(255,255,255,0.4);z-index: 22;"><span id="thread_spinner" class="spinner-icon spinner-icon-abs-center"></span></div>'),
                this.$el.append(this.$page_change_overlay)),
                this.setSpinnerPosition(),
                this.$page_change_overlay.trigger("overlay:show")
            },
            hideOverlay: function() {
                this.options.params.in_modal ? this.$page_change_overlay && this.$page_change_overlay.trigger("overlay:hide") : o()(document).trigger("page:hide:overlay")
            },
            setSpinnerPosition: function() {
                var e = this._findElem("spinner");
                if (e.length) {
                    var t, i = window.scrollY || window.pageYOffset, n = o()(window).height(), a = e.parent(), s = a.offset().top, r = a.height(), l = i - s, c = l + n;
                    l < 0 && (l = 0),
                    c > r && (c = r),
                    t = l + (c - l) / 2 - 25,
                    e.css({
                        top: t
                    })
                }
            },
            setListChanged: function() {
                n = !0
            },
            onItemClick: function(e) {
                var t = this
                  , i = o()(e.currentTarget).data("value-id")
                  , n = this.options.params.id;
                this.showOverlay(),
                x.default.linkLead(n, i).done((function() {
                    t.setListChanged(),
                    t.reload(),
                    (new h.default).showSuccess()
                }
                )).fail((function(e) {
                    var i = JSON.parse(e.responseText) || {};
                    i.message_code && "api_unavailable" === i.message_code && (new h.default({
                        init: t.reload.bind(t)
                    }).showError(APP.lang["mail_error_".concat(i.message_code)], !1),
                    t.setListChanged())
                }
                ))
            },
            onSuggestInput: function(e) {
                var t = this
                  , i = o()(e.currentTarget).parent()
                  , n = i.find(this._selector("suggest_list"))
                  , a = this._findElem("suggest_input")
                  , s = a.val().trim()
                  , r = this._findElem("close_search_button");
                s.length >= 3 ? (i.hasClass("control--suggest-loading") || (r.hide(),
                i.addClass("control--suggest-loading").append('<span class="control--suggest--loader spinner-icon"></span>')),
                o().ajax({
                    url: a.data("url"),
                    type: "GET",
                    data: {
                        term: s
                    },
                    success: function(e) {
                        var a = e.response.items.leads.other;
                        a.length && n.removeClass("control--suggest--list").addClass("control--suggest--list-opened").css("display", ""),
                        a.length > 15 && (a = a.splice(0, 15)),
                        t.renderSuggest(a),
                        i.removeClass("control--suggest-loading").children(".control--suggest--loader").remove(),
                        r.show()
                    }
                })) : (n.html("").removeClass("control--suggest--list-opened").addClass("control--suggest--list"),
                i.css("z-index", "").children(".control--suggest--loader").remove())
            },
            renderSuggest: function(e) {
                var t = []
                  , i = this._findElem("suggest_list");
                e.length ? (r().each(e, (function(e) {
                    t.push({
                        id: e.id,
                        title: [e.name, (0,
                        _.contactName)(e.contact_name), e.company_name].join(", "),
                        type: APP.element_types.leads,
                        text: u()({
                            ref: "/tmpl/mail/suggest.twig"
                        }).render({
                            name: e.name,
                            contact_name: e.contact_name,
                            company_name: e.company_name,
                            type: "lead"
                        }),
                        raw_highlight: !0
                    })
                }
                ), this),
                i.trigger("suggest:reset", [t])) : i.trigger("suggest:reset", [[]])
            },
            checkAsRead: function() {
                var e = this
                  , t = this.id;
                x.default.readThread(t).done((function() {
                    o()(document).trigger("mail:update:counter"),
                    e.setListChanged()
                }
                ))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                o()(document).trigger("thread:closing"),
                o()(window).off(this.ns),
                o()(document).off("controls:hide:only"),
                this.letters_collection && this.letters_collection.destroy(),
                f.default.prototype.destroy.apply(this, t)
            },
            reload: function(e) {
                e && this.setListChanged(),
                this.getAjaxLetters()
            },
            initOptions: function(e) {
                e = r().extend({
                    filter: {}
                }, e),
                this.options = {
                    params: e,
                    items: {}
                }
            },
            setComposeData: function() {
                this.id && x.default.getThreadReplyData(this.id).then(r().bind((function(e) {
                    r().each(e.to, (function(e) {
                        e.name || (e.name = ""),
                        e.email = [e.email],
                        e.element_type = APP.element_types.mail
                    }
                    )),
                    e.element_type = e.type,
                    this.compose_data = e
                }
                ), this))
            },
            getAjaxLetters: function() {
                var e, t, i, n, a = this, o = {
                    no_loader: this.options.params.in_modal
                };
                Promise.all([k.default.getThread(this.options.params.id), k.default.getMessages(this.options.params.id, 1, 10, o), A.default.getPipelinesWithUnsorted(), (0,
                C.getCustomersPeriods)()]).then((function(o) {
                    e = o[0],
                    t = o[1],
                    i = o[2].pipelines,
                    n = o[3],
                    a.options.params.in_modal || (e.status_info = a.getStatusInfo(e, i, n)),
                    a.options.params.in_modal || APP.first_load ? a.onSuccess(e, t) : a.options.params.animationEnd.done((function() {
                        a.onSuccess(e, t)
                    }
                    ))
                }
                )).catch((function(e) {
                    a.options.params.in_modal || !a.options.params.in_side_card ? a.renderError(e) : a.options.params.animationEnd.done((function() {
                        a.renderError(e)
                    }
                    ))
                }
                ))
            },
            getStatusInfo: function(e, t, i) {
                var n = {}
                  , a = {};
                return e.entity && e.entity.status_id && ((n = r().map(t, (function(e) {
                    return e.statuses
                }
                ))).push(i),
                n = r().flatten(n),
                (a = r().findWhere(n, {
                    id: e.entity.status_id
                }) || {}).pipeline_id && t[a.pipeline_id] && (a.pipeline_name = t[a.pipeline_id].name)),
                a
            },
            renderError: function(e) {
                var t, i, n = this.$el;
                switch (e.status) {
                case 403:
                    i = APP.lang.mail_letter_view_forbidden,
                    t = "/tmpl/mail/thread/403page.twig";
                    break;
                case 410:
                    i = APP.lang.mail_letter_deleted,
                    t = "/tmpl/mail/thread/404page.twig";
                    break;
                default:
                    i = APP.lang.page_404_caption,
                    t = "/tmpl/mail/thread/403page.twig"
                }
                this.options.params.in_modal ? this.options.params.modalShowError(i, !1) : u()._preload([t], (function() {
                    n.append(u()({
                        ref: t
                    }).render({
                        title: i,
                        text: (0,
                        _.i18n)("page_404_mail_text")
                    }))
                }
                ))(),
                this.options.params.onload.call(this, !0)
            },
            onSuccess: u()._preload(["/tmpl/mail/thread/card.twig", "/tmpl/mail/suggest.twig", "/tmpl/customers/common/add_entity_customer.twig", "/tmpl/mail/thread/404page.twig", "/tmpl/mail/thread/403page.twig", "/tmpl/mail/thread/message.twig"], "_onSuccess"),
            _onSuccess: function(e, t) {
                e.unread && this.checkAsRead(),
                this.options.actions = e.actions,
                this.options.items = t.items,
                this.options.thread_id = e.id,
                this.options.thread_name = e.name,
                this.options.entity = e.entity,
                this.options.status_info = e.status_info,
                this.options.total_messages = +t.total,
                this.renderLetters()
            },
            renderLetters: function() {
                this.options.params.in_modal || (APP.setTitle(this.options.thread_name),
                this.options.params.onload.call(this, !0));
                var e = [{
                    svg_icon_absolute: "dashboard--open-pipeline",
                    text: APP.lang.card_to_card,
                    class_name: "js-linked-entity-show",
                    href: this.options.entity ? this.options.entity.url : "#"
                }];
                this.options.entity && this.options.actions.unlink && e.push({
                    icon: "unlink",
                    class_name: "js-linked-entity-unlink",
                    text: APP.lang.card_unlink,
                    enabled: this.options.actions.unlink || !1
                });
                var t = {
                    items: this.options.items,
                    name: this.options.thread_name,
                    template: this.options.params,
                    in_modal: this.options.params.in_modal,
                    entity: this.options.entity,
                    status_info: this.options.status_info,
                    first_load: APP.first_load || !APP.data.current_list,
                    actions: this.options.actions,
                    more_items: e,
                    ajax: {
                        url: "/ajax/v1/elements/list",
                        params: "term=#q#"
                    },
                    leads: []
                };
                this.options.params.reverse && t.items.reverse(),
                t.entity && "lead" === t.entity.type && "" === t.entity.name && (t.entity.name = "#".concat(t.entity.id));
                var i = o()(u()({
                    ref: "/tmpl/mail/thread/card.twig"
                }).render(t));
                i.find(".thread_letter__message_container a").each((function(e) {
                    o()(e).attr({
                        rel: "nofollow",
                        target: "_blank"
                    })
                }
                )),
                i.find(".feed-note__mail-content-summary_text font").each((function(e, t) {
                    o()(t).attr("size", "fix")
                }
                )),
                i.find(".thread_letter__message font").each((function(e, t) {
                    o()(t).attr("size", "fix")
                }
                )),
                this.$el.empty().append(i),
                this.initCollection(),
                this.options.params.in_modal && this.options.params.onload.call(this, !0),
                this._findElem("card_scroller_fake").hide(),
                this.$el.find(".thread_letter__message_inner").each((function() {
                    var e = o()(this);
                    new g.default({
                        $wrapper: e.parent(),
                        $scroller: e,
                        selectable_content: !0
                    })
                }
                )),
                this.delegateEvents(),
                this.onClickCloseSearch(),
                this.options.params.in_modal || this.hideOverlay(),
                this.compose = this._addComponent(E.default, {
                    _type: "email",
                    $notes_scroller: o()(".notes-wrapper__scroller.custom-scroll"),
                    getExtraData: r().bind(this._getExtraData, this),
                    getMailComposeData: r().bind(this._fetchMailComposeData, this),
                    getMainContactId: r().bind(this._getMainContactId, this),
                    onAdd: r().bind(this._addMessage, this),
                    onCancel: r().noop,
                    onToggleClassModificator: r().bind(this._toggleClassModificator, this)
                }),
                this._findElem("compose").find(".feed-compose__inner").html("").append(this.compose.el),
                this.compose.edit(!1),
                this.scrollThreadBottom(),
                this.initLoader(this.options.params.in_modal ? o()(".modal-scroller") : this.$(".notes-wrapper__scroller"), this.options.params.reverse ? {
                    "max-top": 300
                } : {
                    "max-bottom": 300
                }),
                this.ready = !0
            },
            initLoader: function(e, t) {
                this._addComponent(w.default, {
                    element: e.get(0),
                    conditions: t,
                    throttle: 100,
                    onLoadMore: r().bind(this.loadMore, this)
                })
            },
            loadMore: function() {
                this.letters_collection._pending || this.options.total_messages === this.letters_collection.length || (this._page++,
                this.letters_collection.fetch({
                    id: this.id,
                    page: this._page
                }).then(r().bind((function(e) {
                    this.insertLoadedMessages(e.items),
                    this.letters_collection._pending = !1
                }
                ), this)))
            },
            _addMessage: function(e) {
                this.letters_collection.fetch({
                    id: e
                }).then(r().bind((function(t) {
                    this.letters_collection._pending = !1,
                    this.options.params.id ? (this.compose.cleanView(),
                    this.cancel(),
                    +this.options.params.id == +e && (this.options.items = t.items,
                    this.insertLastMessage(r().first(t.items)),
                    this.scrollThreadBottom(),
                    this.hideOverlay())) : this.initNewThread(e, r().first(t.items))
                }
                ), this))
            },
            insertLoadedMessages: function(e) {
                var t, i = [], n = this._elem("custom_scroll").scrollTop(), a = this._elem("scroller_inner").height(), s = this.options.params.in_modal ? "/tmpl/mail/thread/letter.twig" : "/tmpl/mail/thread/message.twig";
                this.options.params.reverse && (e = e.reverse()),
                r().each(e, r().bind((function(e) {
                    t = o()(u()({
                        ref: s
                    }).render({
                        item: e
                    })),
                    i.push(t),
                    this.letters_collection.push(this.addLetter(t, e).model)
                }
                ), this)),
                this.options.params.in_modal ? this.$el.find(".mail_thread__list").append(i) : this.$el.find(".js-notes").prepend(i),
                this._elem("custom_scroll").scrollTop(n + this._elem("scroller_inner").height() - a)
            },
            insertLastMessage: function(e) {
                var t = o()(u()({
                    ref: "/tmpl/mail/thread/message.twig"
                }).render({
                    item: e
                }));
                this.$el.find(".js-notes").append(t),
                this._animateInsert(t[0]),
                this.addLetter(t, e)
            },
            toggleCompose: function() {
                this._findElem("compose").hasClass("minimized") && (this._findElem("compose").removeClass("minimized"),
                this.compose.onOpenCompose())
            },
            cancel: function() {
                this._findElem("compose").addClass("minimized")
            },
            _getExtraData: function() {
                return this.id ? {
                    elements: this.compose_data.to,
                    chats: {}
                } : {
                    elements: {},
                    chats: {}
                }
            },
            _getMainContactId: function() {
                if (APP.data.current_card)
                    return APP.data.current_card.getMainContactId()
            },
            _fetchMailComposeData: function() {
                return this.id ? x.default.getThreadReplyData(this.id).then(r().bind((function(e) {
                    return [e]
                }
                ))) : o().Deferred()
            },
            _toggleClassModificator: function(e, t) {
                t ? this.$el.addClass(e) : this.$el.removeClass(e)
            },
            onClickLinkLead: function() {
                var e = this._findElem("close_search_button")
                  , t = this._findElem("link_button_action")
                  , i = this._findElem("suggest_action");
                this.$el.addClass("search-active"),
                e.show(),
                t.addClass("hidden-block"),
                i.removeClass("hidden-block"),
                this._findElem("suggest_input").focus()
            },
            onClickCloseSearch: function() {
                var e = this._findElem("link_button_action")
                  , t = this._findElem("suggest_action");
                this.$el.removeClass("search-active"),
                e.removeClass("hidden-block"),
                t.addClass("hidden-block"),
                this._findElem("suggest_input").val(""),
                this._findElem("suggest_list").empty().hide()
            },
            unlinkLead: function() {
                var e = this
                  , t = this.options.params.id;
                this.showOverlay(),
                k.default.unlinkThread(t).done((function() {
                    e.setListChanged(),
                    e.reload()
                }
                )).fail((function(t) {
                    var i = JSON.parse(t.responseText) || {};
                    i.error_code && "api_unavailable" === i.error_code && (new h.default({
                        init: e.reload.bind(e)
                    }).showError(APP.lang["mail_error_".concat(i.error_code)], !1),
                    e.setListChanged())
                }
                ))
            },
            initCollection: function() {
                var e = this.options.items;
                this.letters_collection = new T([],{
                    ajax_params: {
                        no_loader: this.options.params.in_modal
                    }
                }),
                r().each(e, (function(e) {
                    this.letters_collection.push(this.addLetter(o()("#thread_letter_".concat(e.id)), e).model)
                }
                ), this)
            },
            addLetter: function(e, t) {
                return this._addComponent(S, {
                    el: e,
                    model: new P(t),
                    id: t.id,
                    unread: !!t.unread,
                    sent: !!t.sent,
                    in_modal: this.options.params.in_modal
                })
            },
            createLinkedEntity: function(e) {
                var t = o()(e.currentTarget).attr("data-entity");
                this.callLinkModal(t)
            },
            createLinkedEntityBlocked: function() {
                (new h.default).showError(APP.lang.mail_letter_create_contact_blocked, !1)
            },
            callLinkModal: function(e, t) {
                var i, n, a = this, s = o().Deferred(), l = o().Deferred(), c = {
                    id: this.id,
                    entity: e,
                    from_list: !1,
                    from_card: !0,
                    subEntity: "".concat(e, "s"),
                    in_modal: this.options.params.in_modal,
                    done: s,
                    changing: l
                };
                t = t || this.id,
                "customer" === e && (c = r().extend(c, {
                    template: "/tmpl/customers/common/add_entity_customer.twig"
                })),
                this.onClickCloseSearch(),
                s.done(this.reload.bind(this)),
                l.done((function() {
                    a.setListChanged()
                }
                )),
                i = t,
                (null != (n = Array) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? n[Symbol.hasInstance](i) : i instanceof n) || (t = [+t]),
                new v.default(c)
            },
            createLinkedContact: function() {
                this.modal = new y.default({
                    threadIds: this.options.thread_id,
                    card: this
                })
            },
            removeLetter: function(e, t) {
                this.letters_collection.trigger("letter:collection:destroy", t)
            },
            getLastRecipient: function() {
                var e = r().findWhere(this.options.items, {
                    sent: !1
                });
                return e ? e.to : null
            },
            writeMail: function() {
                !0 === this.options.params.in_modal ? x.default.getThreadReplyData(this.options.thread_id).then(r().bind((function(e) {
                    e = r().extend(e, {
                        from: this.getLastRecipient()
                    }),
                    o()(document).trigger("notes:compose:switch", ["email", e]),
                    this.options.params.destroyFromReply()
                }
                ), this)) : this.modal = new b.default({
                    entity: APP.data.current_entity,
                    sub_entity: "reply",
                    from_card: !0,
                    id: [this.options.thread_id],
                    box_id: this.mailbox,
                    in_modal: this.options.params.in_modal,
                    setNeedReload: r().bind(this.setListChanged, this)
                },this)
            },
            scrollThreadBottom: function() {
                this.$(".notes-wrapper__scroller.custom-scroll").scrollTop(this.$(".notes-wrapper__scroller-inner").height())
            },
            initNewThread: function(e) {
                this.options.params.id = e,
                this.id = e,
                APP.router.navigate("/mail/thread/".concat(e), {
                    trigger: !1,
                    replace: !0
                }),
                this.setComposeData(),
                this.getAjaxLetters()
            },
            _animateInsert: r().throttle((function(e) {
                e.classList.add("feed-note-wrapper_animate-entrance"),
                o()(e).one(APP.animation_event, r().bind((function() {
                    e.classList.remove("feed-note-wrapper_animate-entrance")
                }
                ), this))
            }
            ), 0, {
                leading: !1
            })
        });
        var O = "../build/transpiled/interface/mail/thread";
        window.define(O, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([O])
    }
    ,
    744561: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => m
        });
        var n = i(55188)
          , a = i.n(n)
          , o = i(974839)
          , s = i.n(o)
          , r = i(653322)
          , l = i(46225)
          , c = i(932555)
          , d = i(272061)
          , u = i(661533)
          , _ = a().invert(APP.element_types);
        const m = s().Collection.extend({
            url: function(e) {
                var t = _[this.element_type];
                switch (!0) {
                case "stats" === e && !a().isUndefined(this.element_id):
                    return "/ajax/v3/".concat(t, "/").concat(this.element_id, "/stats");
                case !this.links && !a().isUndefined(this.element_id):
                    return "catalog_elements" === t && a().propertyOf(this)(["element_info", "catalog_id"]) ? "/ajax/v3/catalogs/".concat(this.element_info.catalog_id, "/elements/").concat(this.element_id, "/timeline") : "/ajax/v3/".concat(t, "/").concat(this.element_id, "/timeline");
                case this.hasNextPage() && !a().isUndefined(this.links):
                    return this.links.next;
                default:
                    return ""
                }
            },
            model: l.default,
            initialize: function(e, t) {
                this.tasks_results = new r.default,
                this.element_id = t.element_id,
                this.element_type = t.element_type,
                this.element_info = t.element_info,
                this.on("add", this._setVisible, this)
            },
            parse: function(e, t) {
                var i;
                if (t = t || {},
                !e || a().isArray(e) && !e.length)
                    return this.links = {},
                    [];
                e = JSON.parse(e),
                this._pending = !1,
                i = a().clone(e._embedded.items),
                a().each(i, (function(e) {
                    e.date_create && e.msec_created_at && (e._date_create = e.date_create,
                    e.date_create = e.msec_created_at),
                    e.type === d.default.INVOICE && (e.currency_code = (0,
                    c.getCurrencyCode)(this.element_info.currency_id))
                }
                ), this),
                this.tasks_results.add(a().values(e._embedded.tasks_results));
                var n = s().Collection.prototype.parse.apply(this, [e]);
                return t.silent || this.trigger("fetched", i),
                n
            },
            hasNextPage: function() {
                return a().isUndefined(this.links) || this.links && this.links.next
            },
            reset: function(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).silent && delete this.links,
                s().Collection.prototype.reset.apply(this, arguments)
            },
            _fetch: function(e) {
                return e = a().extend(e || {}, {
                    remove: !1,
                    dataType: "text"
                }),
                s().Collection.prototype.fetch.call(this, e)
            },
            fetch: function(e) {
                var t = u.Deferred()
                  , i = a().bind((function(e) {
                    this._pending = !1,
                    t.resolve(e)
                }
                ), this);
                return this.url() ? (this._pending = !0,
                this._fetch(e).then(i, i),
                t.promise()) : t.resolve([])
            },
            _prepareModel: function(e, t) {
                return t = a().extend(t || {}, {
                    parse: !1
                }),
                e.date_create && e.msec_created_at && (e._date_create || (e._date_create = e.date_create),
                e.date_create = e.msec_created_at),
                s().Collection.prototype._prepareModel.call(this, e, t)
            },
            getStats: function() {
                return u.ajax({
                    url: this.url("stats"),
                    type: "GET",
                    dataType: "json"
                }).then((function(e) {
                    return [{
                        id: this.element_id,
                        count: e.notes || 0,
                        users: a().map(e._embedded.users, (function(e) {
                            return {
                                id: e.id,
                                count: e.notes
                            }
                        }
                        )),
                        calls: e.calls || {},
                        letters: e.letters || 0,
                        tasks: e.tasks || {},
                        visited_pages: e.visited_pages || {}
                    }]
                }
                ))
            }
        });
        var h = "../build/transpiled/interface/notes/collection";
        window.define(h, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([h])
    }
    ,
    653322: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => s
        });
        var n = i(974839)
          , a = i.n(n)
          , o = i(46225);
        const s = a().Collection.extend({
            model: o.default
        });
        var r = "../build/transpiled/interface/notes/results_collection";
        window.define(r, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    509962: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => r
        });
        var n = i(579569)
          , a = i(392517)
          , o = {}
          , s = function(e, t) {
            return new Promise((function(i, n) {
                o[e] ? i(o[e]) : t().then((function(t) {
                    o[e] = t,
                    i(o[e])
                }
                ), n)
            }
            ))
        };
        const r = {
            flush: function() {
                o = {}
            },
            get: function(e) {
                switch (e) {
                case "signature":
                    return s("signature", (function() {
                        return a.default.getUserSignature((0,
                        n.current)("id"))
                    }
                    ));
                case "templates":
                    return s("templates", (function() {
                        return a.default.getTemplates()
                    }
                    ));
                case "compose":
                    return s("compose", (function() {
                        return a.default.getMailboxes("compose")
                    }
                    ))
                }
            }
        };
        var l = "../build/transpiled/interface/notes/utils/mail_provider";
        window.define(l, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([l])
    }
    ,
    110656: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => S
        });
        var n = i(55188)
          , a = i.n(n)
          , o = i(460159)
          , s = i.n(o)
          , r = i(162262)
          , l = i.n(r)
          , c = i(267651)
          , d = i.n(c)
          , u = i(880774)
          , _ = i(887977)
          , m = i(678640)
          , h = i(579569)
          , p = i(237262)
          , f = i(886965)
          , g = i(182423)
          , v = i(23456)
          , y = i(500034)
          , b = i(752094)
          , w = i(392517)
          , E = i(115129)
          , x = i(509962)
          , k = i(159100)
          , A = i(103984)
          , C = i(744561)
          , T = i(353256)
          , P = i(661533);
        const S = b.default.extend({
            className: "feed-compose__inner_mail",
            file_uploader_component: k.default,
            events: a().extend({}, b.default.prototype.events || {}, {
                "input .feed-compose__message-area[contenteditable]": "checkForm",
                "change .js-control-wysiwyg .js-wysiwyg-input": "onChange",
                "input .js-compose-mail-subject_field-container input": "checkForm",
                "input .js-compose-mail-to_field-container input": "checkForm",
                "input .js-compose-mail-cc_field-container input": "checkForm",
                "controls:change .js-compose-mail-subject_field-container input": "checkForm",
                "controls:change #mail-template": "onTemplateChange"
            }),
            _classes: function() {
                return a().extend({}, b.default.prototype._classes.apply(this) || {}, {
                    to_container: "js-compose-mail-to_field-container",
                    cc_container: "js-compose-mail-cc_field-container",
                    subject_container: "js-compose-mail-subject_field-container",
                    sender_container: "js-compose-mail-sender_field-container",
                    content_type: "js-mail-content-type",
                    templates_line: "js-compose-mail-templates",
                    templates_container: "js-compose-mail-templates_field-container"
                })
            },
            _selectors: function() {
                return a().extend({}, b.default.prototype._selectors.apply(this) || {}, {
                    subject_input: ".js-compose-mail-subject_field-container input",
                    sender_input: ".js-compose-mail-sender_field-container input",
                    recepient_input: ".js-compose-mail-to_field-container input",
                    textarea: ".js-wysiwyg-input",
                    textarea_input: ".js-control-wysiwyg .ql-editor[contenteditable]",
                    file_input: "#mail-attach-filenew",
                    mail_template: "#mail-template",
                    wysiwyg_area: ".js-control-wysiwyg",
                    simple_area: ".js-control-contenteditable",
                    simple_area_wrapper: ".feed-compose__message-wrapper",
                    simple_area_input: ".js-control-contenteditable .control-contenteditable__area"
                })
            },
            _getTemplate: function() {
                return "/tmpl/notes/adding/mail.twig"
            },
            onChange: function() {
                var e = this._findElem("textarea_input").text();
                ((0,
                y.isFeatureAvailable)("airewriter") || (0,
                y.isFeatureAvailable)("kommo_ai_trial_started") && !(0,
                y.isFeatureAvailable)("kommo_ai_trial_ended")) && (d().publish(T.FEED_COMPOSE_INPUT_CHANGE, e),
                this.toggleAiRewrite(e)),
                this.checkForm()
            },
            _getRenderParams: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                return a().extend({
                    emails: this.emails,
                    is_mail_en: "mail" === APP.getBaseEntity() && "en" === APP.lang_id
                }, b.default.prototype._getRenderParams.apply(this, t))
            },
            _putCursorToEnd: a().noop,
            getExistingText: function() {
                return ""
            },
            getText: function() {
                return this._findElem("textarea_input").text().trim()
            },
            setTextFromAiHelpers: function(e) {
                var t = e.text;
                (0,
                y.isFeatureAvailable)("ai_rewriter_fast_reply") && (null == e ? void 0 : e.isAnswer) && (t = this._elem("textarea").text() + (e.text || "")),
                this.setExistingText(t)
            },
            setExistingText: function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") || this.options.text;
                ((0,
                y.isFeatureAvailable)("airewriter") || (0,
                y.isFeatureAvailable)("kommo_ai_trial_started") && !(0,
                y.isFeatureAvailable)("kommo_ai_trial_ended")) && this._elem("wysiwyg_area").trigger("control:input:change", e),
                this._elem("textarea").val(e).trigger("change"),
                this.$(".control--select--input").trigger("controls:change:visual"),
                ((0,
                y.isFeatureAvailable)("airewriter") || (0,
                y.isFeatureAvailable)("kommo_ai_trial_started") && !(0,
                y.isFeatureAvailable)("kommo_ai_trial_ended")) && this.toggleAiRewrite(e)
            },
            _getLastRecipient: function(e) {
                return e && e.get("data").params.to ? e.get("data").params.to.email : null
            },
            onKeyPressed: a().noop,
            onOpenCompose: function() {
                var e = this.options.$notes_scroller
                  , t = e.find(".js-notes-filter-and-chat-users")
                  , i = e[0].scrollHeight > e[0].offsetHeight;
                t.length && i && t.css("margin-top", 115),
                this._findElem("wysiwyg_area").show(),
                this._findElem("simple_area_wrapper").hide(),
                this.$el.find("textarea").autosize(),
                (0,
                u.stripTags)(this._form.model.get("message")) || this.updateSignature(),
                (0,
                _.setCursorPosition)(this._elem("textarea_input"), 0),
                this._renderTemplates(),
                this._actualizeRecipients(),
                this.emails.length || this._$document.trigger("notes:compose:switch", ["note"])
            },
            onFoldCompose: function() {
                this.options.$notes_scroller.find(".js-notes-filter-and-chat-users").css("margin-top", ""),
                this._actualizeRecipients()
            },
            minimizeOrCancel: function() {
                return !!this._form.hasChanges()
            },
            initialize: function(e) {
                this.options = e || {},
                this.recipient_types = ["to", "cc"],
                a().isFunction(this.options.getLastTimelineEmail) ? this.last_recipient = this._getLastRecipient(this.options.getLastTimelineEmail()) : this.last_recipient = null,
                this.subviews = [],
                b.default.prototype.initialize.call(this, e),
                l().mixin(this, A.default),
                a().bindAll(this, "loadMailboxData", "loadComposeData", "loadSignature", "_renderSender", "cleanView"),
                this.model.set("mailboxes", [])
            },
            setParamsOnSwitch: function() {
                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this, o = !a().isArray(i.to), s = o ? i.email : a().first(i.to).email, r = o ? "" : i.subject, l = a().propertyOf(i)(["from"]);
                s && (this._findElem("to_container").one("controls:view:init", (function(e) {
                    P(e.target).find("input").val(s).trigger("controls:change:visual")
                }
                )),
                this._findElem("to_container").find("input").val(s).trigger("controls:change:visual"),
                this._findElem("subject_input").val(r).trigger("controls:change")),
                l && this._findElem("sender_container").one("controls:view:init", (function(o) {
                    (e = n.model.get("mailboxes")).length && (t = a().findWhere(e, {
                        option: i.from[0].email
                    })) && P(o.target).find("input").val(t.id).trigger("controls:change:visual")
                }
                ))
            },
            destroy: function(e) {
                this.onFoldCompose(),
                this.stopListening(this.model),
                b.default.prototype.cancel.apply(this, arguments),
                b.default.prototype.destroy.call(this, e)
            },
            _render: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                b.default.prototype._render.apply(this, t),
                this._actualizeRecipients(),
                this.listenTo(this.model, "change:subject", this.updateSubject),
                this.listenTo(this.model, "change:templates", this._renderTemplates),
                this.listenTo(this.model, "change:signature", this.updateSignature),
                this.listenTo(this.model, "change:mailboxes", this._renderSender),
                this.loadData().then(a().bind(this._renderSender, this)),
                this.$el.attr("class", "js-note feed-compose_mail")
            },
            updateSignature: function() {
                var e = this.model.get("signature") ? this.model.get("signature") : ""
                  , t = e ? "<p><br></p>".concat(e) : "";
                this._findElem("textarea").val(t).trigger("input")
            },
            edit: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                b.default.prototype.edit.apply(this, t),
                this.listenTo(this._form.model, "has_reverted", this._renderSender)
            },
            save: function() {
                return new Promise(a().bind((function(e, t) {
                    var i = this;
                    if ("Y" === this._findElem("submit").attr("data-loading"))
                        return t();
                    this._findElem("submit").trigger("button:load:start", ["white"]),
                    this._findElem("cancel").hide(),
                    this._findElem("textarea").prop("disabled", !0),
                    ((0,
                    y.isFeatureAvailable)("airewriter") || (0,
                    y.isFeatureAvailable)("kommo_ai_trial_started") && !(0,
                    y.isFeatureAvailable)("kommo_ai_trial_ended")) && d().publish(T.FEED_COMPOSE_SUBMIT);
                    var n = function() {
                        i._findElem("textarea").prop("disabled", !1),
                        i._findElem("cancel").show(),
                        i._findElem("submit").trigger("button:load:stop")
                    };
                    this._preUploadFiles().then(a().bind(this.send, this), a().bind((function() {
                        n(),
                        t()
                    }
                    ), this)).then(a().bind((function(e) {
                        this.showNotes(e.message_id).then(a().bind((function() {
                            n(),
                            this.cleanView()
                        }
                        ), this))
                    }
                    ), this)).then(e, t)
                }
                ), this))
            },
            _getLinkedEmails: function() {
                return a().chain(this.options.getExtraData().elements).reduce((function(e, t) {
                    return e.concat(a().map(t.email, (function(e) {
                        var i = a().isUndefined(t.name) ? "" : t.name;
                        return {
                            element_id: t.id,
                            id: e,
                            name: i,
                            option: i ? "".concat(i, " <").concat(e, ">") : e
                        }
                    }
                    )))
                }
                ), []).uniq((function(e) {
                    return e.id
                }
                )).value()
            },
            loadData: function() {
                return this.data_promise || (this.data_promise = P.when(this.loadComposeData(), this.loadTemplatesData(), this.loadMailboxData(), this.loadSignature())),
                this.data_promise.promise()
            },
            loadTemplatesData: function() {
                return x.default.get("templates").then(a().bind((function(e) {
                    this.model.set("templates", a().map(e, (function(e) {
                        return {
                            id: e.id,
                            option: e.name,
                            content_type: e.fields && e.fields.type || "text"
                        }
                    }
                    )))
                }
                ), this))
            },
            loadMailboxData: function() {
                var e = this
                  , t = parseInt((0,
                h.current)("id"));
                return x.default.get("compose").then((function(i) {
                    var n = a().chain(i).map((function(e) {
                        return {
                            id: e.id,
                            option: e.email,
                            user_id: e.user_id,
                            type: e.type
                        }
                    }
                    )).sort((function(e, i) {
                        switch (t) {
                        case parseInt(i.user_id):
                            return 1;
                        case parseInt(e.user_id):
                            return -1;
                        default:
                            return 0
                        }
                    }
                    )).sortBy((function(e) {
                        return (0,
                        p.isAdmin)() ? e : e.type === E.MAILBOX_TYPES.private ? 0 : 1
                    }
                    )).value();
                    e.model.set("mailboxes", n)
                }
                ), a().bind(this._sendError, this))
            },
            loadComposeData: function(e) {
                return this.options.getMailComposeData(e).then(a().bind(this._loadComposeData, this))
            },
            _loadComposeData: function(e) {
                var t = P.Deferred();
                if (0 === e.length)
                    return t.resolve();
                this.threads = e;
                var i = e[0];
                return this.model.set("subject", i.subject),
                t.resolve()
            },
            loadSignature: function() {
                return x.default.get("signature").then(a().bind((function(e) {
                    e && e.items && e.items[0] && this.model.set("signature", e.items[0].content)
                }
                ), this))
            },
            _renderSender: function() {
                var e = this.model.get("mailboxes")
                  , t = "";
                e.length && (t = '<span class="feed-compose_mail__sender">'.concat(e[0].option, '<input type="hidden" name="sender" value="').concat(e[0].id, '"></span>'),
                e.length > 1 && (t = s()({
                    ref: "/tmpl/controls/select.twig"
                }).render({
                    class_name: "feed-compose_mail__select",
                    name: "sender",
                    id: "mail-sender",
                    items: e
                })),
                this._findElem("sender_container").html(t))
            },
            _renderTemplates: function() {
                var e = this.model.get("templates") || [];
                e.length && this._findElem("templates_line").removeClass("hidden").find(this._selector("templates_container")).html(s()({
                    ref: "/tmpl/controls/select.twig"
                }).render({
                    class_name: "feed-compose_mail__select js-form-changes-skip",
                    name: "template",
                    id: "mail-template",
                    need_escape: !0,
                    items: [{
                        id: "",
                        option: "..."
                    }].concat(e)
                }))
            },
            _actualizeRecipients: function() {
                var e, t = this._getLinkedEmails(), i = this._findElem("to_container"), n = i.find("input").val();
                t.length && !a().isEqual(a().pluck(t, "id"), a().pluck(this.emails, "id")) ? (e = a().findIndex(t, a().bind((function(e) {
                    return e.id === n || e.id === this.last_recipient
                }
                ), this)),
                i.html(t.length > 1 ? s()({
                    ref: "/tmpl/controls/select.twig"
                }).render({
                    class_name: "feed-compose_mail__select",
                    items: t,
                    name: "to",
                    selected: (t[e > -1 ? e : 0] || {}).id
                }) : ['<input type="hidden" name="to" value="'.concat(t[0].id, '">'), a().escape(t[0].option)].join(""))) : this.options.is_new_thread && i.html(s()({
                    ref: "/tmpl/controls/input.twig"
                }).render({
                    class_name: "feed-compose_mail__input",
                    name: "to",
                    value: ""
                })),
                this.emails = t
            },
            handleTriggerOptions: function(e) {
                e && a().isArray(e.to) && (this._getLinkedEmails = a().wrap(this._getLinkedEmails, a().bind((function(t) {
                    var i = t.call(this) || [];
                    return this._getLinkedEmails = t,
                    a().chain(e.to).map((function(e) {
                        return {
                            id: e.email,
                            name: e.name || "",
                            option: a().escape("".concat(e.name || "", " <").concat(e.email, ">"))
                        }
                    }
                    )).reject((function(e) {
                        return a().contains(a().pluck(i, "id"), e.id)
                    }
                    )).value().concat(i)
                }
                ), this)))
            },
            onTemplateChange: function(e) {
                var t, i = P(e.currentTarget), n = this.model.get("signature") ? this.model.get("signature") : "";
                i.val() ? w.default.getTemplate(i.val()).done(a().bind((function(e) {
                    this._findElem("content_type").data("is-html", "html" === e.fields.type).trigger("controls:change"),
                    e.fields.subject && this.$('[name="subject"]').val(e.fields.subject).trigger("change"),
                    "html" === e.fields.type ? (t = e.fields.content,
                    this._findElem("wysiwyg_area").hide(),
                    this._findElem("simple_area_wrapper").show(),
                    this._findElem("simple_area_input").text(t).trigger("input")) : (t = (0,
                    u.cleanXSSContent)(e.fields.content).replace(/\r\n|\n/g, "<br/>"),
                    n && (t += "<p><br></p>".concat(n)),
                    this._findElem("simple_area_wrapper").hide(),
                    this._findElem("simple_area_input").text(""),
                    this._findElem("wysiwyg_area").show(),
                    this._findElem("textarea").val(t).trigger("input"),
                    this._findElem("textarea_input").trigger("input")),
                    this.file_uploader.template = e
                }
                ), this)) : this.cleanView()
            },
            cleanView: function() {
                var e = this.model.get("signature") ? this.model.get("signature") : "";
                this._findElem("wysiwyg_area").show(),
                this._findElem("simple_area_wrapper").hide(),
                this._findElem("simple_area_input").text(""),
                this._findElem("mail_template").val("").trigger("controls:change:visual"),
                this._findElem("textarea").val(e ? "<p><br></p>".concat(e) : "").trigger("input"),
                this._initAttachWrap(),
                this.loadComposeData(!0),
                this._highlightSave(!1),
                this._setChanges(!1),
                this._findElem("cancel").show()
            },
            updateSubject: function() {
                this._findElem("subject_container").html(s()({
                    ref: "/tmpl/controls/suggest.twig"
                }).render({
                    class_name: "feed-compose_mail__input-wrapper",
                    input_class_name: "feed-compose_mail__input",
                    name: "subject",
                    value: a().escape((this.threads[0] || {}).subject),
                    items: a().map(this.threads, (function(e) {
                        return {
                            id: e.id,
                            value: a().escape(e.subject)
                        }
                    }
                    ))
                }))
            },
            checkForm: function() {
                var e, t, i = 0, n = !0, o = this;
                a().each(o.recipient_types, (function(e) {
                    ((t = o._findElem("".concat(e, "_container")).find("input").val()) || "to" === e) && (i++,
                    n = n && (0,
                    m.isValidEmailForSending)(t))
                }
                ));
                var s = this._findElem("subject_input").val().trim().length > 0
                  , r = (0,
                u.stripTags)(this._findElem("textarea").val() || "").replace(/&#xFEFF;/i, "").trim().length > 0;
                r = r || this._findElem("simple_area_input").text().trim().length > 0;
                var l = !a().isEmpty(this.file_uploader.attachments);
                e = s && (r || l) && i > 0 && n,
                this._highlightSave(e)
            },
            _sendError: function() {
                this.$el.addClass("animated shake"),
                this._findElem("textarea").prop("disabled", !1),
                a().delay(a().bind((function() {
                    this.$el.removeClass("animated shake")
                }
                ), this), 200)
            },
            _getEntityElement: function() {
                var e = a().find(this.options.getExtraData().elements, (function(e) {
                    var t = parseInt(e.element_type);
                    return t === APP.element_types.leads || t === APP.element_types.customers || t === APP.element_types.contacts || t === APP.element_types.companies || t === APP.element_types.mail
                }
                ));
                return e && (e.type = (0,
                f.convertElementType)(e.element_type, "single")),
                e
            },
            _setChanges: a().noop,
            getOptionsFileUploader: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                var n = b.default.prototype.getOptionsFileUploader.apply(this, t);
                return a().extend(n, {
                    onSendError: a().bind(this._sendError, this),
                    onBeforeUploadFile: a().bind((function() {
                        this._highlightSave(!1)
                    }
                    ), this),
                    onFileQueueChanged: a().bind((function() {
                        this.checkForm()
                    }
                    ), this),
                    onAddAttach: a().noop,
                    max_size_file: 20
                })
            },
            _preUploadFiles: function() {
                return this.file_uploader ? this.file_uploader.checkSizeFile() ? this.file_uploader.upload_promises || Promise.resolve() : Promise.reject() : Promise.resolve()
            },
            send: function() {
                var e, t, i, n, o = this._getEntityElement() || {}, s = {}, r = this._findElem("to_container").find("input").val(), l = this.getTemplateParams({
                    entity_to_use: a().find(this.options.getExtraData().elements, (function(e) {
                        if (a().contains([APP.element_types.contacts, APP.element_types.companies], e.element_type))
                            return a().contains(e.email, r)
                    }
                    ))
                });
                return a().each(this.recipient_types, (function(i) {
                    e = this._findElem("".concat(i, "_container")).find("input").val(),
                    t = a().find(this.emails, (function(t) {
                        return t.id === e
                    }
                    )) || {},
                    e && ("cc" === i ? (n = e.replace(/,/g, " ").replace(/\s\s+/g, " ").trim().split(" "),
                    e = a().map(n, (function(e) {
                        return {
                            email: e,
                            name: ""
                        }
                    }
                    )),
                    s[i] = e) : (e = {
                        email: e,
                        name: ""
                    },
                    s[i] = [e]),
                    a().isUndefined(t.element_id) || (e.id = t.element_id))
                }
                ), this),
                "" === (i = this._findElem("simple_area_input").text().trim()) && (i = this._findElem("textarea").val().trim()),
                i.indexOf('<li class="ql-indent') > -1 && (i = (0,
                g.quillDecodeIndent)(i)),
                w.default.sendMessage({
                    mailbox_id: this._findElem("sender_input").val().trim(),
                    name: l["profile.name"]
                }, s, this._findElem("subject_input").val().trim(), i, "html", this.file_uploader.attachments, l, o.id ? o.id : null, o.type ? o.type : null).done(a().bind((function(e) {
                    e && e.thread_id && e.message_id && this.options.onAdd(e.thread_id),
                    (0,
                    v.kommoLogAmplitude)("emailSent")
                }
                ), this)).fail(a().bind(this._sendError, this))
            },
            showNotes: function(e) {
                var t = P.Deferred()
                  , i = this._getEntityElement()
                  , n = this;
                if (!i || i.element_type === APP.element_types.mail)
                    return t.reject(),
                    t.promise();
                var a = new C.default([],{
                    element_id: i.id,
                    element_type: i.element_type
                });
                return a.fetch({
                    page: 0,
                    limit: 10
                }).done((function() {
                    var i = a.chain().filter((function(t) {
                        if (parseInt(t.get("type")) !== APP.note_types.mail_message || !t.has("data"))
                            return !1;
                        var i = t.get("data");
                        return i && i.params.link_data && parseInt(i.params.link_data.message_id) === parseInt(e)
                    }
                    )).map((function(e) {
                        return e.toJSON()
                    }
                    )).value();
                    n.options.onAdd(i),
                    t.resolve()
                }
                )).done(t.resolve).fail(t.reject),
                t.promise()
            }
        });
        var M = "../build/transpiled/interface/notes/views/add/mail";
        window.define(M, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([M])
    }
    ,
    159100: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            default: () => p
        });
        var n = i(55188)
          , a = i.n(n)
          , o = i(392517)
          , s = i(564e3)
          , r = i(661533);
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function c(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function d(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function u(e, t, i) {
            return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var a = Object.getOwnPropertyDescriptor(n, t);
                    return a.get ? a.get.call(i || e) : a.value
                }
            }
            ,
            u(e, t, i || e)
        }
        function _(e) {
            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            _(e)
        }
        function m(e, t) {
            return m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            m(e, t)
        }
        function h(e) {
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
                var i, n = _(e);
                if (t) {
                    var a = _(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else
                    i = n.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((i = t) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof t ? c(e) : t;
                    var i
                }(this, i)
            }
        }
        var p = function(e) {
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
                t && m(e, t)
            }(s, e);
            var t, i, n = h(s);
            function s(e) {
                var t, i = e.attachments;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                (t = n.call.apply(n, [this].concat(Array.prototype.slice.call(arguments)))).current_template = [],
                i && a().isArray(i) && (t._attachments = {},
                a().each(i, (function(e) {
                    t._attachments[e.id] = e
                }
                ), c(t))),
                t
            }
            return t = s,
            (i = [{
                key: "addAttach",
                value: function(e) {
                    this.loading = !0,
                    u(_(s.prototype), "addAttach", this).call(this, e) && this.uploadFiles()
                }
            }, {
                key: "getFileSize",
                value: function(e) {
                    var t = 0;
                    return e && (t = a().reduce([e].concat(this._files_queue), (function(e, t) {
                        return e + t.size
                    }
                    ), 0)),
                    this.attachments && (t += a().reduce(this.attachments, (function(e, t) {
                        return e + t.size
                    }
                    ), 0)),
                    t
                }
            }, {
                key: "removeFileClick",
                value: function(e) {
                    var t = r(e.currentTarget).closest(".js-attach-item").attr("data-id");
                    t && (this.attachments = {
                        remove: t
                    }),
                    e.stopPropagation(),
                    this._removeAttachment(t)
                }
            }, {
                key: "template",
                set: function(e) {
                    this.current_template.length && (a().each(this.current_template, (function(e) {
                        this.attachments = {
                            remove: e.id
                        },
                        this.onRemoveFile(e.id),
                        this.$('.js-attach-item[data-id="' + a().escape(e.id) + '"]').remove()
                    }
                    ), this),
                    this.current_template = []),
                    a().each(e.fields.attachments, (function(e) {
                        var t;
                        this.attachments = e,
                        this.current_template = (t = this.current_template,
                        function(e) {
                            if (Array.isArray(e))
                                return l(e)
                        }(t) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                return Array.from(e)
                        }(t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return l(e, t);
                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === i && e.constructor && (i = e.constructor.name),
                                "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? l(e, t) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()).concat([e])
                    }
                    ), this)
                }
            }, {
                key: "attachments",
                get: function() {
                    return this._attachments
                },
                set: function(e) {
                    var t = {};
                    this._attachments || (this._attachments = {}),
                    e.remove ? this._attachments = a().omit(this._attachments, e.remove) : (!1 === e.key && (t.failed = !0),
                    this.renderAttach(e, t),
                    this._attachments[e.id] = e)
                }
            }, {
                key: "uploadFiles",
                value: function() {
                    return this.upload_promises = u(_(s.prototype), "uploadFiles", this).call(this),
                    this.upload_promises
                }
            }, {
                key: "uploadFile",
                value: function(e) {
                    return new Promise(a().bind((function(t, i) {
                        o.default.getUploadSandbox().done(a().bind((function(n) {
                            this.uploadMailFile(n, e, t, i)
                        }
                        ), this))
                    }
                    ), this))
                }
            }, {
                key: "uploadMailFile",
                value: function(e, t, i, n) {
                    o.default.uploadFiles([t], e).done(a().bind((function(e) {
                        a().each(e, (function(e) {
                            this.attachments = e
                        }
                        ), this),
                        i()
                    }
                    ), this)).fail(a().bind((function() {
                        this.renderAttach(t, {
                            failed: !0
                        }),
                        n()
                    }
                    ), this))
                }
            }]) && d(t.prototype, i),
            s
        }(s.default)
          , f = "../build/transpiled/interface/uploads/mail";
        window.define(f, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([f])
    }
    ,
    549488: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            getCustomersPeriods: () => r
        });
        var n = i(55188)
          , a = i.n(n)
          , o = i(661533)
          , s = null;
        function r() {
            return s || (s = o.Deferred(),
            o.ajax({
                url: "/ajax/v1/customers_periods/list",
                method: "GET",
                dataType: "JSON"
            }).then((function(e) {
                var t = a().propertyOf(e)(["response", "customers_periods", "list"]);
                s.resolve(a().values(t) || [])
            }
            )),
            s.promise())
        }
        o(document).on("page:changed", (function() {
            s = null
        }
        ));
        var l = "../build/transpiled/network/customers/api";
        window.define(l, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([l])
    }
    ,
    182423: (e, t, i) => {
        "use strict";
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function a(e) {
            return function(e) {
                if (Array.isArray(e))
                    return n(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return n(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        i.r(t),
        i.d(t, {
            quillDecodeIndent: () => u,
            quillEncodeIndent: () => _
        });
        var o = function(e) {
            return +(e.className || "0").replace(/[^\d]/g, "")
        }
          , s = function(e) {
            return "ql-indent-".concat(e)
        }
          , r = function(e) {
            return e[e.length - 1]
        }
          , l = function(e, t) {
            r(e).appendChild(t)
        }
          , c = function(e, t, i) {
            var n = Array.from(t.children).filter((function(t) {
                return t.tagName === e
            }
            )).map((function(n) {
                return Array.from(t.removeChild(n).children).map((function(t) {
                    return c(e, n.removeChild(t), i + 1)
                }
                )).reduce((function(e, t) {
                    return a(e).concat(a(t))
                }
                ), [])
            }
            )).reduce((function(e, t) {
                return a(e).concat(a(t))
            }
            ), []);
            return [{
                classes: t.className,
                content: t.innerHTML,
                indent: i
            }].concat(a(n))
        }
          , d = function(e) {
            var t = "";
            return e.indent > 0 && (t += "".concat(s(e.indent))),
            e.classes.length > 0 && (t += " ".concat(e.classes)),
            "<li".concat(t.length > 0 ? ' class="'.concat(t, '"') : "", ">").concat(e.content, "</li>")
        };
        function u(e) {
            if (!e || 0 === e.length)
                return e;
            var t = window.document.createElement("div");
            t.setAttribute("style", "display: none;"),
            t.innerHTML = e,
            ["ul", "ol"].forEach((function(e) {
                Array.from(t.querySelectorAll(e)).forEach((function(t) {
                    var i = Array.from(t.children).filter((function(e) {
                        return "LI" === e.tagName
                    }
                    ))
                      , n = []
                      , a = document.createElement(e);
                    n.push(a);
                    var c = i.map((function(e) {
                        return o(e)
                    }
                    ));
                    i.forEach((function(t, i) {
                        var a = c[i - 1] || 0
                          , o = c[i]
                          , d = c[i + 1] || 0
                          , u = ["decimal", "lower-alpha", "lower-roman"];
                        if (t.className = t.className.replace(s(o), ""),
                        o > a)
                            for (var _ = o - a; _ > 0; ) {
                                var m = r(n)
                                  , h = document.createElement(e)
                                  , p = "margin: 0px; list-style-type: ".concat("ol" === e ? u[(o - _ + 1) % u.length] : "disc", ";");
                                h.setAttribute("style", p),
                                m.appendChild(h),
                                n.push(h),
                                _--
                            }
                        if (l(n, t),
                        o > d)
                            for (var f = o - d; f > 0; )
                                n.pop(),
                                f--
                    }
                    )),
                    t.innerHTML = a.innerHTML
                }
                ))
            }
            ));
            var i = t.innerHTML;
            return t.remove(),
            i
        }
        function _(e) {
            if (!e || 0 === e.length)
                return e;
            var t = window.document.createElement("div");
            t.setAttribute("style", "display: none;"),
            t.innerHTML = e,
            ["ul", "ol"].forEach((function(e) {
                Array.from(t.querySelectorAll(e)).forEach((function(t) {
                    var i = Array.from(t.children).filter((function(e) {
                        return "LI" === e.tagName
                    }
                    )).map((function(t) {
                        return c(e.toUpperCase(), t, 0)
                    }
                    )).reduce((function(e, t) {
                        return a(e).concat(a(t))
                    }
                    ), []).map((function(e) {
                        return d(e)
                    }
                    )).reduce((function(e, t) {
                        return "".concat(e).concat(t)
                    }
                    ), "");
                    t.innerHTML = i
                }
                ))
            }
            ));
            var i = t.innerHTML;
            return t.remove(),
            i
        }
        var m = "../build/transpiled/utils/quill_list_fix";
        window.define(m, (function() {
            var e = "undefined"
              , i = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return i && i.default || i
        }
        )),
        window.require([m])
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
        e._sentryDebugIds[t] = "b7834696-11ec-4023-b90a-5e89d491dd96",
        e._sentryDebugIdIdentifier = "sentry-dbid-b7834696-11ec-4023-b90a-5e89d491dd96")
    } catch (e) {}
}();
//# sourceMappingURL=882.ee8597fb3d5ebc9d6d59.js.map
