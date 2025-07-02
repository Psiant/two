"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[12172], {
    510236: (e, t, n) => {
        n.r(t),
        n.d(t, {
            TextArea: () => p
        });
        var a = n(824246)
          , r = n(827378)
          , i = n(22538)
          , o = n(55436)
          , s = n(847306)
          , l = n(445857)
          , c = n(432467)
          , u = n(901926)
          , d = n(799591)
          , f = n(311347);
        n(957935);
        const p = (0,
        r.forwardRef)(( (e, t) => {
            const {className: n="", isDisabled: r, isReadOnly: p, isInvalid: m=!1, isAutosized: _=!1, isPlaceholderVisibleOnFocus: h=!1, invalidDescription: v, onAutosize: y=s.noop, maxHeight: g, value: b, theme: w, ...x} = e
              , k = (0,
            o.useThemeClassName)(w)
              , C = (0,
            f.useAutosizeTextarea)(y, _, [b, _]);
            return (0,
            a.jsxs)("div", {
                className: (0,
                i.c)("_wrapper_1afq7_1", k, n),
                children: [(0,
                a.jsx)("div", {
                    className: (0,
                    i.c)("_textarea_container_1afq7_7", {
                        _invalid_1afq7_69: m,
                        _disabled_1afq7_64: r
                    }),
                    children: (0,
                    a.jsx)("textarea", {
                        style: {
                            maxHeight: g
                        },
                        ref: (0,
                        l.mergeRefs)(C, t),
                        className: (0,
                        i.c)(c.CustomScrollClassName, "_textarea_1afq7_7", {
                            _placeholder_visible_1afq7_46: h
                        }),
                        disabled: r,
                        readOnly: p,
                        value: b,
                        ...x
                    })
                }), !(!m || !v) && (0,
                a.jsx)(u.Text, {
                    className: (0,
                    i.c)("_invalid_description_1afq7_69"),
                    size: "m",
                    theme: d.TextPrimaryTheme,
                    children: v
                })]
            })
        }
        ));
        p.displayName = "TextArea"
    }
    ,
    498716: (e, t, n) => {
        n.r(t),
        n.d(t, {
            TextareaDarkTheme: () => i,
            TextareaLightTheme: () => r
        });
        const a = {
            "--crm-ui-kit-textarea-disabled-border-color": "var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-textarea-color": "var(--crm-ui-kit-palette-text-primary)",
            "--crm-ui-kit-textarea-disabled-color": "var(--crm-ui-kit-palette-text-primary)",
            "--crm-ui-kit-textarea-placeholder-color": "var(--crm-ui-kit-palette-placeholder-primary)",
            "--crm-ui-kit-textarea-error-border-color": "var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-textarea-error-color": "var(--crm-ui-kit-color-error)",
            "--crm-ui-kit-textarea-error-placeholder-color": "var(--crm-ui-kit-palette-placeholder-primary)",
            "--crm-ui-kit-textarea-background-color": "var(--crm-ui-kit-palette-background-primary)",
            "--crm-ui-kit-textarea-disabled-background-color": "transparent",
            "--crm-ui-kit-textarea-disabled-opacity": "0.6",
            "--crm-ui-kit-textarea-font-weight": "400",
            "--crm-ui-kit-textarea-font-size": "var(--crm-ui-kit-base-font-size)",
            "--crm-ui-kit-textarea-line-height": "19px",
            "--crm-ui-kit-textarea-padding-top": "8px",
            "--crm-ui-kit-textarea-padding-horizontal": "9px",
            "--crm-ui-kit-textarea-padding-bottom": "7px",
            "--crm-ui-kit-textarea-border-radius": "3px",
            "--crm-ui-kit-textarea-spacing": "4px",
            "--crm-ui-kit-textarea-width": "100%",
            "--crm-ui-kit-textarea-min-height": "56px",
            "--crm-ui-kit-textarea-border-width": "1px",
            "--crm-ui-kit-textarea-border-style": "solid",
            "--crm-ui-kit-textarea-scrollbar-thumb-background": "var(--crm-ui-kit-palette-scrollbar-thumb-background)",
            "--crm-ui-kit-textarea-scrollbar-offset": "4px"
        }
          , r = {
            ...a,
            "--crm-ui-kit-textarea-border-color": "var(--crm-ui-kit-palette-border-default)"
        }
          , i = {
            ...a,
            "--crm-ui-kit-textarea-border-color": "var(--crm-ui-kit-palette-border-primary)"
        }
    }
    ,
    311347: (e, t, n) => {
        n.r(t),
        n.d(t, {
            useAutosizeTextarea: () => r
        });
        var a = n(827378);
        const r = (e, t, n) => {
            const r = (0,
            a.useRef)(null)
              , i = (0,
            a.useRef)()
              , o = (0,
            a.useCallback)((n => {
                t && n.offsetParent && (n.style.height = "",
                n.style.height = `${n.scrollHeight}px`,
                n.scrollHeight !== i.current && e && (e(n),
                i.current = n.scrollHeight))
            }
            ), [t, e])
              , s = (0,
            a.useCallback)(( () => {
                const e = r.current;
                e && o(e)
            }
            ), [r, o]);
            return (0,
            a.useLayoutEffect)(s, [...n, s]),
            r
        }
    }
    ,
    534139: (e, t, n) => {
        n.r(t),
        n.d(t, {
            TextArea: () => a.TextArea,
            TextareaDarkTheme: () => r.TextareaDarkTheme,
            TextareaLightTheme: () => r.TextareaLightTheme
        });
        var a = n(510236)
          , r = n(498716)
    }
    ,
    221167: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        const a = {
            body: "cb648a32",
            "body--s": "a7b89b68c",
            "body--m": "a7b89b686",
            "body--l": "a7b89b685",
            "body--image--m": "a2ffdaf59",
            "body--image--l": "a2ffdaf58",
            "body--slide--top": "a837fd2aa",
            "body--slide--right": "a2e7619f2",
            "body--slide--bottom": "f54b85d6",
            "body--slide--left": "a09bef571",
            "body-inner": "a421f13f0",
            "body-inner--s": "c2dc563a",
            "body-inner--m": "c2dc5646",
            "body-inner--l": "c2dc5648",
            close: "a112f55a",
            "close-icon": "a0f2234b3",
            hidden: "a47b2e1af",
            "modal-popup": "a48dd80a7"
        }
    }
    ,
    654247: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        const a = {
            plate: "a2db95f4a",
            "plate--active": "a40217c20",
            "plate--hidden": "a27a33ed8",
            body: "e4534224",
            "body--s": "a74dc7db6",
            "body--m": "a74dc7dc2",
            "body--l": "a74dc7dc4",
            content: "a09f908a6",
            "content--s": "a8b540ff4",
            "content--m": "a8b541000",
            "content--l": "a8b541002",
            "title--s": "a17c5ecc7",
            "title--m": "a17c5ecc1",
            "title--l": "a17c5ecc0",
            "image-wrapper": "a61c29655",
            "image-wrapper--s": "a7354fc5e",
            "image-wrapper--m": "a7354fc58",
            "image-wrapper--l": "a7354fc57",
            image: "a2d572d8f",
            "image--s": "a53ff62e4",
            "image--m": "a53ff62de",
            "image--l": "a53ff62dd"
        }
    }
    ,
    618749: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        const a = {
            wrapper: "a00a3c048",
            "image-wrapper": "a37bd6616"
        }
    }
    ,
    215015: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        const a = {
            wrapper: "a483d1168",
            option: "ab70e600",
            chosen: "d54af006"
        }
    }
    ,
    464587: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        const a = {
            wrapper: "a2f94da70",
            icon: "a02e7fbbc",
            title: "a5ab54b75"
        }
    }
    ,
    957935: (e, t, n) => {
        n.r(t)
    }
    ,
    702481: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => S,
            downloadFile: () => k
        });
        var a = n(661533)
          , r = n.n(a)
          , i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , l = n.n(s)
          , c = n(161320)
          , u = n.n(c)
          , d = n(880774)
          , f = n(886965)
          , p = n(340958)
          , m = n(847837);
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function h(e, t, n, a, r, i, o) {
            try {
                var s = e[i](o)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        function v(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(a, r) {
                    var i = e.apply(t, n);
                    function o(e) {
                        h(i, a, r, o, s, "next", e)
                    }
                    function s(e) {
                        h(i, a, r, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function g(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var a, r, i = [], o = !0, s = !1;
                    try {
                        for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value),
                        !t || i.length !== t); o = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        r = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return i
                }
            }(e, t) || w(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(e) {
            return function(e) {
                if (Array.isArray(e))
                    return _(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || w(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function w(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
            }
        }
        function x(e, t) {
            var n, a, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, i[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    a = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        function k(e) {
            var t = document.createElement("a");
            t.href = e,
            t.download = e.split("/").pop(),
            document.body.appendChild(t),
            r()(window).trigger("page-preventer:disable-unload"),
            t.click(),
            document.body.removeChild(t),
            r()(window).trigger("page-preventer:enable-unload")
        }
        function C(e) {
            try {
                return JSON.parse(e).file_uuid
            } catch (t) {
                return e
            }
        }
        const S = p.default.extend({
            controlClassName: "js-control-drive-field",
            _classes: function() {
                return {
                    name: "js-drive-field-name",
                    size: "drive-field__size",
                    main_menu: "js-drive-field-main-menu",
                    substitute: "js-drive-field-substitute",
                    file: "js-drive-field-file",
                    download: "js-drive-field-download",
                    versions: "js-drive-field-versions",
                    delete: "js-drive-field-delete",
                    versions_tips: "js-drive-field-versions-tip",
                    versions_tip: "drive-field__versions-tip",
                    versions_tip_item: "drive-field__versions-tip-item",
                    versions_tip_item_name: "drive-field__versions-tip-item-name",
                    versions_tip_item_date: "drive-field__versions-tip-item-date",
                    versions_tip_item_wrapper: "js-drive-field-versions-tip-item",
                    upload_progress: "drive-field__progress",
                    upload_progress_bar_wrapper: "drive-field__progress-bar-wrapper",
                    upload_progress_bar: "drive-field__progress-bar",
                    upload_abort: "drive-field__progress-abort"
                }
            },
            _selectors: function() {
                return {
                    value_input: 'input[type="hidden"]'
                }
            },
            document_events: function() {
                var e;
                return y(e = {}, "tip:hidden ".concat(this._selector("main_menu")), "onMainMenuHidden"),
                y(e, "tip:hidden ".concat(this._selector("versions_tip")), "onVersionsTipHidden"),
                e
            },
            events: function() {
                var e;
                return y(e = {}, "click ".concat(this._selector("name")), "onNameFocus"),
                y(e, "click ".concat(this._selector("size")), "onNameFocus"),
                y(e, "click ".concat(this._selector("substitute")), "onSubstituteClick"),
                y(e, "change ".concat(this._selector("file")), "onFileChange"),
                y(e, "click ".concat(this._selector("download")), "onDownloadClick"),
                y(e, "click ".concat(this._selector("versions")), "onVersionsClick"),
                y(e, "click ".concat(this._selector("delete")), "onDeleteClick"),
                y(e, "click ".concat(this._selector("upload_abort")), "onUploadAbort"),
                y(e, "click ".concat(this._selector("versions_tip_item_wrapper")), "onSetVersionClick"),
                y(e, "controls:change ".concat(this._selector("value_input")), "onFileUuidChangeOutside"),
                y(e, "drive-field:abort-upload ".concat(this._selector("file")), "onUploadAbort"),
                y(e, "drive-field:get-filename ".concat(this._selector("value_input")), "proxyFileNameToDataAttrs"),
                e
            },
            initialize: function() {
                p.default.prototype.initialize.apply(this, arguments);
                var e = this.$el.data();
                this._cached_versions = null,
                this._uploading_client_id = JSON.stringify(o().pick(e, "fieldId", "elementId", "elementType")),
                this._drive_api = m.default.setContext(e.elementId, e.elementType, e.leadElementId);
                var t = this._drive_api.getUploadingByClientId(this._uploading_client_id);
                t.length && this._setUploading(t[0].file, t[0].uploading, t[0].progress)
            },
            _setUUID: function(e) {
                this.$el.data("uuid", e),
                this._elem("value_input").val(e).trigger("change:with-default"),
                this._elem("delete").toggleClass("hidden", !e)
            },
            _setName: function(e, t) {
                var n = this
                  , a = o().unescape(this._elem("name").text().trim());
                return this._elem("name").attr("title", o().escape(e)).attr("data-size", t).text(o().escape(e)),
                this._elem("size").text(o().escape(t ? "(".concat((0,
                d.formatFileSize)(t), ")") : "")),
                this._elem("name").trigger("file-name:change"),
                this.$el.toggleClass("empty", !e),
                function() {
                    n._setName(a)
                }
            },
            _getFileName: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.without_size
                  , a = t.without_extension
                  , r = e.name
                  , i = [];
                return !0 !== a && e.metadata && e.metadata.extension && (r += ".".concat(e.metadata.extension)),
                i.push(r),
                e.size && !0 !== n && i.push(e.size),
                i
            },
            _setUploading: function(e, t, n) {
                var a = this
                  , r = this._setName.apply(this, b(this._getFileName(e, {
                    without_extension: !0
                })));
                this._setUploadingProgress(n),
                this._uploading = t,
                this._uploading.progress((function(e) {
                    a._setUploadingProgress(e)
                }
                )),
                this._uploading.then((function(e) {
                    if (!1 === e)
                        r();
                    else {
                        var t = g(a._getFileName(e, {
                            without_size: !0
                        }), 1)[0];
                        a._setUUID(e.uuid),
                        a._updateCFValue({
                            file_uuid: e.uuid,
                            file_name: t,
                            file_size: e.size
                        }),
                        a._cached_versions = null
                    }
                    a._setUploadingProgress(!1),
                    a._uploading = null
                }
                ), (function() {
                    a.$el.one(AMOCRM.animation_event, (function() {
                        a.$el.removeClass("animated shake"),
                        setTimeout((function() {
                            a._setUploadingProgress(!1)
                        }
                        ), 500)
                    }
                    )).addClass("animated shake")
                }
                ))
            },
            _setUploadingProgress: l()._preload(["/tmpl/controls/button.twig"], (function(e) {
                if (!1 === e)
                    return this.$el.removeClass("progress"),
                    this._elem("upload_progress").remove(),
                    this._dropElemCache("upload_progress"),
                    this._dropElemCache("upload_progress_bar"),
                    void this._elem("file").trigger("drive-field:uploading-change", !1);
                this.$el.hasClass("progress") || (this.$el.addClass("progress"),
                this._elem("value_input").before('<span class="'.concat(this._class("upload_progress"), '"><span class="').concat(this._class("upload_progress_bar"), '"></span>\n            <span class="').concat(this._class("upload_abort"), '"><svg class="svg-icon svg-common--file-abort-dims">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--file-abort"></use>\n            </svg></span>\n          </span>'))),
                this._elem("upload_progress_bar").attr("data-percent", Math.ceil(e)),
                this._elem("file").trigger("drive-field:uploading-change", !0)
            }
            )),
            _updateCFValue: function(e) {
                var t = e.file_uuid
                  , n = e.file_name
                  , a = e.file_size
                  , i = this.$el.data()
                  , s = i.fieldId
                  , l = i.elementId
                  , c = i.elementType
                  , u = i.leadElementId
                  , d = ""
                  , p = {
                    file_uuid: t,
                    file_name: n,
                    file_size: a
                };
                this._elem("value_input").val(JSON.stringify(p)),
                l ? (d = o().find(AMOCRM.element_types, (function(e) {
                    return e === c
                }
                )) ? "/ajax/v4/".concat((0,
                f.convertElementType)(c, "string"), "/").concat(l) : u ? "/ajax/v4/catalogs/".concat(c, "/elements/").concat(l, "?parent_element_type=2&parent_element_id=").concat(u) : "/ajax/v4/catalogs/".concat(c, "/elements/").concat(l),
                r().ajax({
                    url: d,
                    type: "PATCH",
                    data: JSON.stringify({
                        custom_fields_values: [{
                            field_id: s,
                            values: t ? [{
                                value: {
                                    file_uuid: t,
                                    file_name: n,
                                    file_size: a
                                }
                            }] : null
                        }]
                    })
                })) : this._elem("value_input").trigger("change")
            },
            _uploadFile: function(e) {
                return this._drive_api.uploadFile(e, {
                    file_uuid: this.$el.data("uuid"),
                    client_id: this._uploading_client_id
                })
            },
            onSubstituteClick: function(e) {
                this._elem("main_menu").trigger("tip:show", [!1]),
                r()(e.target).is("label") || r()(e.currentTarget).find("label").trigger("click")
            },
            onDownloadClick: function(e) {
                var t = this
                  , n = r()(e.currentTarget)
                  , a = this.$el.data("uuid")
                  , i = function() {
                    n.one(AMOCRM.animation_event, (function() {
                        n.removeClass("animated shake")
                    }
                    )).addClass("animated shake")
                };
                a ? this._drive_api.getMetadata(a).then((function(e) {
                    var n = o().propertyOf(e)(["_links", "download", "href"]);
                    n ? (t._elem("main_menu").trigger("tip:show", [!1]),
                    k(n)) : i()
                }
                ), i) : i()
            },
            onFileChange: function(e) {
                return v((function() {
                    var t, n;
                    return x(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return t = o().propertyOf(e)(["currentTarget", "files", 0]),
                            setTimeout((function() {
                                e.currentTarget.value = ""
                            }
                            )),
                            t ? [4, m.default.checkCleaningRules([t])] : [2];
                        case 1:
                            return a.sent() ? (n = this._uploadFile(t),
                            this._setUploading(t, n, 1),
                            [2]) : [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            onVersionsClick: function(e) {
                return v((function() {
                    var t, n, a, i, s, c, d;
                    return x(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            if (t = this,
                            n = r()(e.currentTarget),
                            a = C(this._elem("value_input").val()),
                            e.stopPropagation(),
                            !a)
                                return [2];
                            if (this._cached_versions)
                                return [3, 4];
                            f.label = 1;
                        case 1:
                            return f.trys.push([1, 3, , 4]),
                            i = this,
                            [4, this._drive_api.getVersions(a)];
                        case 2:
                            return i._cached_versions = f.sent(),
                            [3, 4];
                        case 3:
                            return f.sent(),
                            n.one(AMOCRM.animation_event, (function() {
                                n.removeClass("animated shake")
                            }
                            )).addClass("animated shake"),
                            [3, 4];
                        case 4:
                            return this._cached_versions && (this._elem("main_menu").trigger("tip:show", [!1]),
                            s = "",
                            c = o().map(this._cached_versions, (function(e) {
                                var n = u()(e.created_at, "X")
                                  , a = n.format(AMOCRM.system.format.date.date);
                                n.isSame(u()(), "year") && (a = n.format(AMOCRM.system.format.date.date_short)),
                                e.is_main && (s = e.uuid);
                                var r = g(t._getFileName(e, {
                                    without_size: !0
                                }), 1)[0];
                                return {
                                    id: e.uuid,
                                    class_name: t._class("versions_tip_item_wrapper"),
                                    text: '<div class="'.concat(t._class("versions_tip_item"), '"><span class="').concat(t._class("versions_tip_item_name"), ' js-control-file-name" title="').concat(r, '">').concat(o().escape(r), '</span><span class="').concat(t._class("versions_tip_item_date"), '">').concat(a, "</span></div>"),
                                    should_be_raw: !0
                                }
                            }
                            )),
                            d = r()(l()({
                                ref: "/tmpl/common/tip.twig"
                            }).render({
                                class_name: "".concat(this._class("versions_tips"), " ").concat(this._class("versions_tip")),
                                selected: s,
                                items: c,
                                is_custom_tip_holder: !0
                            })),
                            this.$el.append(d),
                            d.trigger("tip:show")),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            onDeleteClick: function() {
                var e, t = this, n = this.$el.data(), a = n.uuid, i = n.elementId, s = n.elementType, l = n.leadElementId;
                e = o().find(AMOCRM.element_types, (function(e) {
                    return e === s
                }
                )) ? "/ajax/v4/".concat((0,
                f.convertElementType)(s, "string"), "/").concat(i, "/files") : l ? "/ajax/v4/catalogs/".concat(s, "/elements/").concat(i, "/files?parent_entity_type=leads&parent_entity_id=").concat(l) : "/ajax/v4/catalogs/".concat(s, "/elements/").concat(i, "/files"),
                this._elem("main_menu").trigger("tip:show", [!1]),
                a && (i ? r().ajax({
                    url: e,
                    type: "DELETE",
                    dataType: "text",
                    data: JSON.stringify([{
                        file_uuid: a
                    }])
                }).then((function() {
                    t._setName(""),
                    t._setUUID(""),
                    t._updateCFValue({
                        file_uuid: ""
                    })
                }
                )) : this._drive_api.deleteFile(a).then((function() {
                    t._setName(""),
                    t._setUUID("")
                }
                )))
            },
            onNameFocus: function(e) {
                e.stopPropagation(),
                this._elem("value_input").attr("disabled") || (this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this.$el.hasClass("empty") ? this.$('[type="file"]').click() : (this._elem("main_menu").trigger("tip:show"),
                this.$el.addClass("focused")))
            },
            onMainMenuHidden: function() {
                this.$el.removeClass("focused")
            },
            onVersionsTipHidden: function() {
                this._elem("versions_tip").remove(),
                this._dropElemCache("versions_tip")
            },
            onSetVersionClick: function(e) {
                var t = this
                  , n = r()(e.currentTarget)
                  , a = n.attr("data-id");
                this._drive_api.switchFileVersion(this.$el.data("uuid"), a).then((function(e) {
                    t._setName.apply(t, b(t._getFileName(e))),
                    t._cached_versions = o().map(t._cached_versions, (function(e) {
                        return o().extend({}, e, {
                            is_main: e.uuid === a
                        })
                    }
                    )),
                    n.trigger("tip:select")
                }
                ), (function() {
                    n.one(AMOCRM.animation_event, (function() {
                        n.removeClass("animated shake")
                    }
                    )).addClass("animated shake")
                }
                ))
            },
            onUploadAbort: function() {
                this._uploading && this._uploading.abort()
            },
            onFileUuidChangeOutside: function() {
                return v((function() {
                    var e, t;
                    return x(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return (e = C(this._elem("value_input").val())) === this.$el.data("uuid") ? [3, 4] : e ? [4, this._drive_api.getMetadata(e)] : [3, 2];
                        case 1:
                            return t = n.sent(),
                            this._setName.apply(this, b(this._getFileName(t))),
                            this._cached_versions = null,
                            [3, 3];
                        case 2:
                            this._setName(""),
                            n.label = 3;
                        case 3:
                            this._setUUID(e),
                            n.label = 4;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            proxyFileNameToDataAttrs: function(e) {
                var t = r()(e.currentTarget)
                  , n = this._elem("name").attr("data-size") || "";
                t.data("file_name", o().unescape(this._elem("name").attr("title").trim())).data("file_size", n.trim())
            }
        });
        var T = "../build/transpiled/interface/controls/drive_field";
        window.define(T, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([T])
    }
    ,
    112904: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => i
        });
        var a = n(161320)
          , r = n.n(a);
        function i(e) {
            switch (e) {
            case "before_end_of_week":
                return r()().day(r()().get("day") < 5 ? 5 : 7);
            case "next_week":
                return r()().add(1, "week");
            case "next_month":
                return r()().add(1, "month");
            case "next_year":
                return r()().add(1, "year");
            case "today":
            default:
                return r()();
            case "tomorrow":
                return r()().add(1, "day");
            case "after_15_minutes":
                return r()().add(15, "minutes");
            case "after_30_minutes":
                return r()().add(30, "minutes");
            case "in_an_hour":
                return r()().add(1, "hours")
            }
        }
    }
    ,
    582147: (e, t, n) => {
        n.r(t),
        n.d(t, {
            addCustomType: () => f,
            changeCompleteTill: () => u,
            completeTask: () => c,
            loadTaskTypes: () => d,
            saveLastPreset: () => m,
            saveTaskTypes: () => p
        });
        var a = n(661533)
          , r = n.n(a)
          , i = n(55188)
          , o = n.n(i)
          , s = n(579569)
          , l = {
            close: "/ajax/todo/multiple/close/",
            api: "/ajax/v2_5/tasks",
            task_types: "/ajax/tasks/types"
        };
        function c(e) {
            return r().ajax({
                url: l.close,
                type: "POST",
                dataType: "json",
                data: {
                    ID: [e.id]
                }
            })
        }
        function u(e, t, n) {
            return r().ajax({
                url: l.api,
                type: "POST",
                data: {
                    update: [{
                        id: e,
                        complete_till_at: t,
                        duration: n || 0,
                        updated_at: (Date.now() / 1e3).toFixed()
                    }]
                }
            })
        }
        function d(e) {
            var t = r().Deferred();
            return e = !!o().isBoolean(e) && e,
            !APP.constant("task_types") || e ? r().ajax({
                url: l.task_types
            }).done((function(e) {
                APP.constant("task_types", e),
                t.resolve(r().extend(!0, {}, e))
            }
            )) : t.resolve(r().extend(!0, {}, APP.constant("task_types"))),
            t.promise()
        }
        function f(e) {
            return r().ajax({
                url: "/ajax/tasks/types/",
                data: {
                    ACTION: "ADD",
                    NAME: e.name,
                    ICON_ID: e.icon_id,
                    COLOR: e.icon_color
                },
                dataType: "json",
                type: "POST"
            })
        }
        function p(e, t) {
            return r().ajax({
                url: l.task_types,
                type: "POST",
                dataType: "json",
                data: {
                    add: e,
                    delete: t,
                    ACTION: "ALL_EDIT"
                }
            })
        }
        function m(e) {
            return o().extend((0,
            s.current)("settings"), {
                default_task_preset: e
            }),
            r().ajax({
                url: "/ajax/card/defaults/tasks",
                type: "POST",
                dataType: "json",
                data: {
                    date: e
                }
            })
        }
        var _ = "../build/transpiled/network/todos/api";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    260012: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getSurveyName: () => _,
            saveSurveyResult: () => h
        });
        var a = n(55188)
          , r = n.n(a)
          , i = n(104737)
          , o = n(242473)
          , s = n(56100)
          , l = n(417438);
        function c(e, t, n, a, r, i, o) {
            try {
                var s = e[i](o)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        var u, d, f = "/ajax/v4/feedback/survey", p = "init_survey", m = function(e) {
            return {
                ai_agent_activation: l.Surveys.AI_AGENT_ACTIVATION_BY_PROMO
            }[e]
        }, _ = (u = function() {
            var e, t;
            return function(e, t) {
                var n, a, r, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; o; )
                                try {
                                    if (n = 1,
                                    a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                    0) : a.next) && !(r = r.call(a, i[1])).done)
                                        return r;
                                    switch (a = 0,
                                    r && (i = [2 & i[0], r.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        r = i;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        a = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < r[1]) {
                                            o.label = r[1],
                                            r = i;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2],
                                            o.ops.push(i);
                                            break
                                        }
                                        r[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, o)
                                } catch (e) {
                                    i = [6, e],
                                    a = 0
                                } finally {
                                    n = r = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }(this, (function(n) {
                switch (n.label) {
                case 0:
                    return e = (0,
                    o.getQueryStringAsJsonObject)(window.location.search)[p],
                    r().isString(e) ? ((0,
                    s.removeQueryKeyWithRedirect)([p]),
                    [2, m(e)]) : [4, i.default.request({
                        url: f,
                        method: "GET"
                    })];
                case 1:
                    return t = n.sent(),
                    [2, r().propertyOf(t)(["response", "survey", "name"])]
                }
            }
            ))
        }
        ,
        d = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, a) {
                var r = u.apply(e, t);
                function i(e) {
                    c(r, n, a, i, o, "next", e)
                }
                function o(e) {
                    c(r, n, a, i, o, "throw", e)
                }
                i(void 0)
            }
            ))
        }
        ,
        function() {
            return d.apply(this, arguments)
        }
        ), h = function(e) {
            var t = e.name
              , n = {
                data: e.data,
                metadata: e.metadata
            };
            return i.default.request({
                url: "".concat(f, "/").concat(t, "/result"),
                method: "POST",
                data: n
            })
        }
    }
    ,
    320526: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getSurveyName: () => a.getSurveyName,
            saveSurveyResult: () => a.saveSurveyResult
        });
        var a = n(260012)
    }
    ,
    82607: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var a = n(292554)
          , r = n.n(a)
          , i = n(661533)
          , o = n.n(i)
          , s = n(827378)
          , l = n.n(s)
          , c = n(55188)
          , u = n.n(c)
          , d = n(73280)
          , f = n(617861)
          , p = n(139145)
          , m = n(221167);
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var h = r().bind(m.default);
        const v = function(e) {
            var t, n = e.children, a = e.interval, r = e.onClose, i = e.className, s = void 0 === i ? "" : i, c = e.size, m = void 0 === c ? "m" : c, v = e.isCloseButtonVisible, y = void 0 === v || v, g = e.isCloseOnEscapeKeyDownEnabled, b = void 0 === g || g, w = e.onCloseButtonClick, x = void 0 === w ? u().noop : w, k = e.customPosition, C = void 0 === k ? null : k, S = e.isPopup, T = void 0 !== S && S, E = e.slideDirection, A = e.container, N = e.hideDistance, O = void 0 === N ? 500 : N, I = (0,
            p.default)({
                children: n,
                interval: a
            }), P = I.components, M = I.currentIndex, j = I.currentChildProps, R = I.changeSlide;
            C && (t = function(e) {
                var t = C.top
                  , n = void 0 === t ? "auto" : t
                  , a = C.right
                  , r = void 0 === a ? "auto" : a
                  , i = C.bottom
                  , o = void 0 === i ? "auto" : i
                  , s = C.left
                  , l = void 0 === s ? "auto" : s
                  , c = "auto" === r ? "auto" : "calc(".concat(r, " + var(--aside-width))");
                e.css("top", n).css("right", c).css("bottom", o).css("left", l)
            }
            );
            var D, U = function() {
                R()
            }, F = (0,
            f.default)(), z = F.ModalProvider, B = F.modalBodyElRef, $ = function() {
                E && B.current ? (o()(B.current).css(E, "-".concat(O, "px")),
                setTimeout((function() {
                    r()
                }
                ), 1e3)) : r()
            }, q = function() {
                $()
            };
            return l().createElement(z, {
                onCloseRequest: q,
                onModalPosition: t,
                bodyClassName: "".concat(h("body", "body--".concat(m), (D = {},
                _(D, "body--image--".concat(m), j.image),
                _(D, "body--slide--".concat(E), E),
                D)), " ").concat(s),
                bodyInnerClassName: h("body-inner", "body-inner--".concat(m)),
                modalClassName: h({
                    "modal-popup": T
                }),
                isOverlayEnabled: !T,
                container: A,
                isCloseOnEscapeKeyDownEnabled: b
            }, l().Children.map(P, (function(e, t) {
                return l().cloneElement(e, {
                    onSlideChange: U,
                    onClose: q,
                    isActive: t === M,
                    size: m
                })
            }
            )), l().createElement(d.IconButton, {
                theme: d.IconButtonSecondaryTheme,
                className: h("close", {
                    hidden: !y
                }),
                onClick: function() {
                    x(),
                    $()
                },
                iconName: "common--cross-close",
                iconClassName: h("close-icon")
            }))
        }
    }
    ,
    505935: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var a = n(55188)
          , r = n.n(a)
          , i = n(827378)
          , o = n.n(i)
          , s = n(292554)
          , l = n.n(s)
          , c = n(529062)
          , u = n(701106)
          , d = n(654247)
          , f = l().bind(d.default);
        const p = function(e) {
            var t, n, a, i = e.image, s = e.title, l = e.children, d = e.isActive, p = e.mainButtonText, m = e.onMainButtonClick, _ = void 0 === m ? r().noop : m, h = e.secondaryButtonText, v = e.onSecondaryButtonClick, y = e.onSlideChange, g = e.size, b = e.bodyClassName, w = void 0 === b ? "" : b, x = e.imageClassName, k = void 0 === x ? "" : x;
            return o().createElement("div", {
                className: f("plate", (t = {
                    "plate--active": d,
                    "plate--hidden": !d
                },
                n = "plate--".concat(g),
                a = g,
                n in t ? Object.defineProperty(t, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = a,
                t))
            }, i && o().createElement("picture", {
                className: f("image-wrapper", "image-wrapper--".concat(g))
            }, o().createElement("img", {
                className: f("image", "image--".concat(g), k),
                src: i["1x"],
                srcSet: i["2x"],
                alt: ""
            })), o().createElement("div", {
                className: "".concat(f("body", "body--".concat(g)), " ").concat(w)
            }, o().createElement("div", {
                className: f("content", "content--".concat(g))
            }, o().createElement(u.default, {
                type: "h2",
                size: "s" === g ? "l" : "xxl",
                className: f("title--".concat(g))
            }, s), l), o().createElement("div", null, p && o().createElement(c.Button, {
                theme: c.ButtonPrimaryTheme,
                type: "button",
                onClick: function() {
                    _()
                },
                isDisabled: !d
            }, p), h && o().createElement(c.Button, {
                theme: c.ButtonSecondaryTheme,
                type: "button",
                onClick: function() {
                    v ? v() : y && y()
                },
                isDisabled: !d
            }, h))))
        }
    }
    ,
    139145: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var a = n(827378)
          , r = n.n(a);
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        const o = function(e) {
            var t, n, o = e.children, s = e.interval, l = (t = (0,
            a.useState)(0),
            n = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(t) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var a, r, i = [], o = !0, s = !1;
                    try {
                        for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value),
                        !t || i.length !== t); o = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        r = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
            }(t, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), c = l[0], u = l[1], d = r().Children.toArray(o).filter((function(e) {
                return "object" == typeof e
            }
            )), f = d[c].props, p = (0,
            a.useRef)(null), m = function() {
                p.current && clearTimeout(p.current),
                c === d.length - 1 ? u(0) : u(c + 1)
            };
            return (0,
            a.useEffect)((function() {
                return s && (p.current && clearTimeout(p.current),
                p.current = setTimeout((function() {
                    m()
                }
                ), s)),
                function() {
                    p.current && clearTimeout(p.current)
                }
            }
            ), [c]),
            {
                currentIndex: c,
                currentChildProps: f,
                changeSlide: m,
                components: d
            }
        }
    }
    ,
    246541: (e, t, n) => {
        n.r(t),
        n.d(t, {
            GlobalUnifiedModal: () => a.default,
            GlobalUnifiedModalContent: () => r.default
        });
        var a = n(82607)
          , r = n(505935)
    }
    ,
    426113: (e, t, n) => {
        n.r(t),
        n.d(t, {
            StepsContext: () => l,
            default: () => c
        });
        var a = n(55188)
          , r = n.n(a)
          , i = n(827378)
          , o = n.n(i);
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var l = (0,
        i.createContext)({
            activeStep: null,
            changeStep: r().noop
        });
        const c = function(e) {
            var t, n, a = e.children, r = e.initialStep, c = (t = (0,
            i.useState)(r),
            n = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(t) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var a, r, i = [], o = !0, s = !1;
                    try {
                        for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value),
                        !t || i.length !== t); o = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        r = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }(t, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), u = c[0], d = c[1];
            return o().createElement(l.Provider, {
                value: {
                    activeStep: u,
                    changeStep: function(e) {
                        d(e)
                    }
                }
            }, a)
        }
    }
    ,
    360502: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var a = n(827378)
          , r = n.n(a)
          , i = n(426113);
        const o = function(e, t) {
            return function(n) {
                return r().createElement(i.default, {
                    initialStep: t
                }, r().createElement(e, n))
            }
        }
    }
    ,
    710275: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => i
        });
        var a = n(827378)
          , r = n(426113);
        const i = function() {
            var e = (0,
            a.useContext)(r.StepsContext);
            return {
                activeStep: e.activeStep,
                changeStep: e.changeStep
            }
        }
    }
    ,
    613092: (e, t, n) => {
        n.r(t),
        n.d(t, {
            useSteps: () => a.default,
            withStepsProvider: () => r.default
        });
        var a = n(710275)
          , r = n(360502)
    }
    ,
    801461: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var a = n(827378)
          , r = n.n(a)
          , i = n(55188)
          , o = n.n(i)
          , s = n(500034)
          , l = n(720923)
          , c = n(792971)
          , u = n(589051)
          , d = ["/dashboard/", "/leads/pipeline/", "/settings/communications/"]
          , f = function(e, t) {
            return r().lazy((function() {
                return e().then((function(e) {
                    return {
                        default: e[t]
                    }
                }
                ))
            }
            ))
        }
          , p = f((function() {
            return Promise.all([n.e(58606), n.e(33006), n.e(60706)]).then(n.bind(n, 353256))
        }
        ), "AiTrialExpiredSurveyPopup")
          , m = f((function() {
            return Promise.all([n.e(58606), n.e(33006), n.e(60706)]).then(n.bind(n, 353256))
        }
        ), "AiAgentActivationPopup")
          , _ = f((function() {
            return Promise.all([n.e(92738), n.e(84732), n.e(52110)]).then(n.bind(n, 821483))
        }
        ), "WaLiteMigrationSurvey")
          , h = f((function() {
            return n.e(6957).then(n.bind(n, 906957))
        }
        ), "SatisfactionSurveyPopup");
        const v = (0,
        l.default)((function(e) {
            var t = e.onModalCloseRequest
              , n = e.onModalLearnMoreClick
              , i = function() {
                return o().some(d, (function(e) {
                    return window.location.pathname.startsWith(e)
                }
                ))
            }
              , l = (0,
            u.useSurvey)({
                onError: function() {
                    t()
                }
            })
              , f = l.survey
              , v = l.saveSurvey
              , y = function(e) {
                v(e)
            }
              , g = null;
            switch (f) {
            case c.Surveys.KOMMO_AI_TRIAL:
                i() && (g = r().createElement(p, {
                    onCloseRequest: t,
                    onSuccess: y
                }));
                break;
            case c.Surveys.AI_AGENT_ACTIVATION:
                i() && (g = r().createElement(m, {
                    onCloseRequest: t,
                    onSuccess: y
                }));
                break;
            case c.Surveys.AI_AGENT_ACTIVATION_BY_PROMO:
                (0,
                s.isFeatureAvailable)("ai_agent_viewable") && (i() || "chats" === APP.getBaseEntity()) && (g = r().createElement(m, {
                    onCloseRequest: t,
                    onSuccess: y
                }));
                break;
            case c.Surveys.WACA_PROMOTION:
                (i() || "widgetsSettings" === APP.getBaseEntity()) && (g = r().createElement(_, {
                    onCloseRequest: t,
                    onModalLearnMoreClick: n,
                    onSuccess: y
                }));
                break;
            case c.Surveys.CUSTOMER_SATISFACTION:
                g = r().createElement(h, {
                    onCloseRequest: t,
                    onSuccess: y
                })
            }
            return r().createElement(a.Suspense, null, g)
        }
        ))
    }
    ,
    792971: (e, t, n) => {
        var a;
        n.r(t),
        n.d(t, {
            Surveys: () => a
        }),
        function(e) {
            e.KOMMO_AI_TRIAL = "kommo_ai_trial",
            e.AI_AGENT_ACTIVATION = "want_turn_on_ai_agent",
            e.AI_AGENT_ACTIVATION_BY_PROMO = "ai_agent_activation_by_promo",
            e.WACA_PROMOTION = "walite_to_waca_promotion",
            e.CUSTOMER_SATISFACTION = "customer_satisfaction",
            e.AI_USAGE_FEEDBACK = "ai_usage_feedback"
        }(a || (a = {}))
    }
    ,
    415058: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => i
        });
        var a = n(456552)
          , r = n(417438);
        const i = function() {
            var e = (0,
            a.useQueryClient)();
            return {
                invalidateSurveyRequest: function() {
                    e.removeQueries(r.SURVEY_QUERY_KEY, {
                        exact: !0
                    })
                }
            }
        }
    }
    ,
    589051: (e, t, n) => {
        n.r(t),
        n.d(t, {
            useSurvey: () => a.useSurvey
        });
        var a = n(876203)
    }
    ,
    876203: (e, t, n) => {
        n.r(t),
        n.d(t, {
            QUERY_KEY: () => c,
            useSurvey: () => d
        });
        var a = n(456552)
          , r = n(320526);
        function i(e, t, n, a, r, i, o) {
            try {
                var s = e[i](o)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        function o(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(a, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                        i(o, a, r, s, l, "next", e)
                    }
                    function l(e) {
                        i(o, a, r, s, l, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        function s(e, t) {
            var n, a, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, i[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    a = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        var l, c = ["survey"], u = (l = o((function() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, (0,
                    r.getSurveyName)()];
                case 1:
                    return [2, e.sent()]
                }
            }
            ))
        }
        )),
        function() {
            return l.apply(this, arguments)
        }
        ), d = function(e) {
            var t = e.onError
              , n = (0,
            a.useQuery)({
                queryKey: c,
                queryFn: u,
                onError: function() {
                    t()
                },
                staleTime: 36e5,
                refetchOnMount: !0,
                retry: !1
            }).data
              , i = function() {
                var e = o((function(e) {
                    var t;
                    return s(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]),
                            [4, (0,
                            r.saveSurveyResult)(e)];
                        case 1:
                            return n.sent(),
                            [3, 3];
                        case 2:
                            return t = n.sent(),
                            console.error(t),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return {
                survey: n,
                saveSurvey: i
            }
        }
    }
    ,
    417438: (e, t, n) => {
        n.r(t),
        n.d(t, {
            BaseStep: () => s.default,
            ChoosableOptions: () => o.default,
            SURVEY_QUERY_KEY: () => a.QUERY_KEY,
            Success: () => l.default,
            SurveyManager: () => i.default,
            Surveys: () => c.Surveys,
            useInvalidateSurveyRequest: () => r.default
        });
        var a = n(876203)
          , r = n(415058)
          , i = n(801461)
          , o = n(271109)
          , s = n(970948)
          , l = n(781053)
          , c = n(792971)
    }
    ,
    970948: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var a = n(827378)
          , r = n.n(a)
          , i = n(292554)
          , o = n.n(i)
          , s = n(618749)
          , l = o().bind(s.default);
        const c = function(e) {
            var t = e.children
              , n = e.className
              , a = e.images;
            return r().createElement("div", {
                className: l("wrapper", n)
            }, a && r().createElement("picture", {
                className: l("image-wrapper")
            }, r().createElement("img", {
                className: l("image"),
                src: a["1x"],
                srcSet: "".concat(a["2x"], " 2x")
            })), t)
        }
    }
    ,
    271109: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var a = n(55188)
          , r = n.n(a)
          , i = n(827378)
          , o = n.n(i)
          , s = n(292554)
          , l = n.n(s)
          , c = n(215015)
          , u = l().bind(c.default);
        const d = function(e) {
            var t = e.options
              , n = e.chosenOptions
              , a = void 0 === n ? [] : n
              , i = e.onChoose
              , s = e.className;
            return o().createElement("div", {
                className: u("wrapper", s)
            }, r().map(t, (function(e) {
                var t = e.id
                  , n = e.value;
                return o().createElement("span", {
                    className: u("option", {
                        chosen: r().contains(a, t)
                    }),
                    key: t,
                    onClick: function() {
                        i(t)
                    }
                }, n)
            }
            )))
        }
    }
    ,
    781053: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var a = n(827378)
          , r = n.n(a)
          , i = n(292554)
          , o = n.n(i)
          , s = n(916569)
          , l = n(701106)
          , c = n(491967)
          , u = n(880774)
          , d = n(464587)
          , f = o().bind(d.default);
        const p = function() {
            return r().createElement("div", {
                className: f("wrapper")
            }, r().createElement(c.default, {
                type: "svg",
                name: "settings--widgets--check",
                className: f("icon")
            }), r().createElement(l.default, {
                type: "h2",
                size: "xxl",
                className: f("title")
            }, (0,
            u.i18n)("Feedback received!")), r().createElement(s.Text, {
                theme: s.TextPrimaryTheme,
                size: "l"
            }, (0,
            u.i18n)("Thank you for taking the time to help improve Kommo.")))
        }
    }
    ,
    720923: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var a = n(827378)
          , r = n.n(a)
          , i = n(456552)
          , o = new i.QueryClient({
            defaultOptions: {
                queries: {
                    retry: !1,
                    refetchOnMount: !1,
                    refetchOnWindowFocus: !1
                }
            }
        });
        const s = function(e) {
            var t = e.displayName || e.name || "Component"
              , n = function(t) {
                return r().createElement(i.QueryClientProvider, {
                    client: o
                }, r().createElement(e, t))
            };
            return n.displayName = "withQueryProvider(".concat(t, ")"),
            n
        }
    }
    ,
    242473: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getQueryStringAsJsonObject: () => a
        });
        var a = function(e) {
            var t = function(e) {
                var t = e.split("[");
                if (t.length > 1) {
                    var n = [];
                    t.forEach((function(e) {
                        var t = e.replace(/[?[\]\\ ]/g, "");
                        n.push(t)
                    }
                    )),
                    c(i, n, i[e]),
                    delete i[e]
                }
            };
            e = e.substring(e.indexOf("?") + 1);
            for (var n, a = /([^&=]+)=?([^&]*)/g, r = /\+/g, i = {}, o = function(e) {
                return decodeURIComponent(e.replace(r, " "))
            }; n = a.exec(e); ) {
                var s = o(n[1])
                  , l = o(n[2]);
                "[]" === s.substring(s.length - 2) ? (s = s.substring(0, s.length - 2),
                i[s] || (i[s] = []),
                i[s].push(l)) : i[s] = l
            }
            var c = function(e, t, n) {
                for (var a = t.length - 1, r = 0; r < a; r++) {
                    var i = t[r];
                    i in e || (e[i] = {}),
                    e = e[i]
                }
                e[t[a]] = n
            };
            for (var u in i)
                t(u);
            return i
        }
    }
    ,
    56100: (e, t, n) => {
        n.r(t),
        n.d(t, {
            removeQueryKeyWithRedirect: () => r
        });
        var a = n(312309)
          , r = function(e) {
            var t = (0,
            a.removeQueryParam)(e);
            APP.router.navigate(window.location.pathname + (t ? "?".concat(t) : ""), {
                trigger: !1,
                replace: !0
            })
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
        e._sentryDebugIds[t] = "016329a6-15a7-4a5d-acd2-e632ee1dcd20",
        e._sentryDebugIdIdentifier = "sentry-dbid-016329a6-15a7-4a5d-acd2-e632ee1dcd20")
    } catch (e) {}
}();
//# sourceMappingURL=12172.83e717e9d66791300c3c.js.map
