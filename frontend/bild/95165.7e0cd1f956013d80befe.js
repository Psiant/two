(window.webpackChunk = window.webpackChunk || []).push([[95165], {
    295165: (e, t, i) => {
        var n, a;
        n = [i(460159), i(94849), i(92474)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header_403: twig.bind(this.block_header_403, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("header_403", t, i)),
                    e.append('<div class="p403"><div class="p403-content"><div class="p403-centralblock"><div class="p403-img"></div><div class="p403-title">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('</div><div class="p403-text">'),
                    e.append("text"in t ? t.text : ""),
                    e.append('</div></div><div class="p403-vertical-align"></div></div></div>')
                }
                ,
                t.prototype.block_header_403 = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_403page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/403page", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header_404: twig.bind(this.block_header_404, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("header_404", t, i)),
                    e.append('<div class="p404"><div class="p404-content"><div class="p404-centralblock"><div class="p404-img"></div><div class="p404-title">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('</div><div class="p404-text">'),
                    e.append("text"in t ? t.text : ""),
                    e.append('</div></div><div class="p404-vertical-align"></div></div></div>')
                }
                ,
                t.prototype.block_header_404 = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_404page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/404page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="arrow-icon '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.545435 6.00001L10.1377 6.00001L8.34158 7.64647C8.12856 7.84171 8.12856 8.15831 8.34158 8.35357C8.55456 8.54881 8.89995 8.54881 9.11296 8.35357L11.8402 5.85358C12.0533 5.65834 12.0533 5.34174 11.8402 5.14648L9.11296 2.64648C9.00642 2.54884 8.86685 2.50001 8.72725 2.50001C8.58765 2.50001 8.44805 2.54884 8.34158 2.64648C8.12856 2.84171 8.12856 3.15831 8.34158 3.35358L10.1377 5.00001L0.545435 5.00001C0.244199 5.00001 -1.9548e-05 5.22387 -1.95721e-05 5.50001C-1.95963e-05 5.77614 0.244199 6.00001 0.545435 6.00001Z" fill="#2E3540"/></svg></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_arrow_icon"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/arrow_icon", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.src = "url"in t ? t.url : "",
                    "url"in t && t.url || (t.src = this.env_.filter("avatar", "id"in t ? t.id : "")),
                    e.append('<div class="n-avatar '),
                    e.append(twig.filter.escape(this.env_, "class"in t ? t.class : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append(twig.filter.escape(this.env_, "attrs"in t ? t.attrs : "", "light_escape", null, !0)),
                    e.append(" "),
                    twig.empty("id"in t ? t.id : "") || (e.append(' id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(" style=\"background-image: url('"),
                    e.append(twig.filter.escape(this.env_, "src"in t ? t.src : "", "light_escape", null, !0)),
                    e.append("')"),
                    "id"in t && t.id ? e.append(twig.filter.escape(this.env_, ", url('" + this.env_.filter("avatar", "id"in t ? t.id : "") + "')", "light_escape", null, !0)) : e.append(""),
                    e.append('">'),
                    "with_error"in t && t.with_error && (e.append('<svg class="svg-icon svg-common--warning-dims '),
                    e.append(twig.filter.escape(this.env_, "error_icon_class"in t ? t.error_icon_class : "", "light_escape", null, !0)),
                    e.append('"><use xlink:href="#common--warning"></use></svg>')),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_avatar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/avatar", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        footer: twig.bind(this.block_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="info-bubble '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><span class="info-bubble__text">'),
                    e.append(twig.filter.escape(this.env_, "bubble_text"in t ? t.bubble_text : "", "light_escape", null, !0)),
                    "bubbleLink"in t && t.bubbleLink && (e.append('&nbsp;<a class="bubble-link '),
                    e.append("isExternalLink"in t && t.isExternalLink ? "" : "js-navigate-link"),
                    e.append('" href="'),
                    e.append(twig.filter.escape(this.env_, "bubbleLink"in t ? t.bubbleLink : "", "light_escape", null, !0)),
                    e.append('" '),
                    "isExternalLink"in t && t.isExternalLink && e.append(' target="_blank" '),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "bubbleLinkTitle"in t ? t.bubbleLinkTitle : ""), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</span>"),
                    e.append(this.renderBlock("footer", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_bubble"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/bubble", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "colors"in i && i.colors || (i.colors = ["#000", "#800000", "#8B4513", "#2F4F4F", "#008080", "#000080", "#4B0082", "#696969", "#B22222", "#A52A2A", "#DAA520", "#006400", "#40E0D0", "#0000CD", "#800080", "#808080", "#F00", "#FF8C00", "#FFD700", "#008000", "#0FF", "#00F", "#EE82EE", "#A9A9A9", "#FFA07A", "#FFA500", "#FFFF00", "#00FF00", "#AFEEEE", "#ADD8E6", "#DDA0DD", "#D3D3D3", "#FFF0F5", "#FAEBD7", "#FFFFE0", "#F0FFF0", "#F0FFFF", "#F0F8FF", "#E6E6FA", "#FFF"]),
                    i.color_items = [],
                    i._parent = i;
                    var a = "colors"in i ? i.colors : "";
                    twig.forEach(a, (function(e, t) {
                        i.color_index = t,
                        i.clr = e,
                        i.color_items = twig.filter.merge("color_items"in i ? i.color_items : "", [{
                            text: '<span data-value="' + ("clr"in i ? i.clr : "") + '" style="background-color: ' + ("clr"in i ? i.clr : "") + '">&nbsp;</span>',
                            should_be_raw: !0,
                            value: "clr"in i ? i.clr : "",
                            class_name: "ql-picker-item " + ("item_class_name"in i ? twig.filter.def("item_class_name"in i ? i.item_class_name : "", "") : "")
                        }])
                    }
                    ), this),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "class_name"in i ? i.class_name : "",
                        items: "color_items"in i ? i.color_items : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_colorpicker_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/colorpicker_tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("item"in t ? t.item : "", "is_connect_btn") ? (e.append('<button class="button-input__context-menu__item__source-btn '),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "btn_class_name"), "light_escape", null, !0)),
                    e.append('" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "bg_color"), "light_escape", null, !0)),
                    e.append('" '),
                    e.append(twig.attr("item"in t ? t.item : "", "additional_btn_data")),
                    e.append(' type="button"><svg class="button-input__context-menu__item__icon svg-icon svg-inbox--social--'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "svg_icon"), "light_escape", null, !0)),
                    e.append("-dims "),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon_class"), "light_escape", null, !0)),
                    e.append('"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#inbox--social--'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "svg_icon"), "light_escape", null, !0)),
                    e.append('"></use></svg><div class="button-input__context-menu__item__source-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "text"), "light_escape", null, !0)),
                    e.append("</div></button>")) : (e.append('<div class="button-input__context-menu__item__source-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "text"), "light_escape", null, !0)),
                    e.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_context_menu_inner_sources"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/context_menu_inner_sources", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    e.append('<div class="tips js-tip '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "style"in t && "style"in t && t.style) {
                        e.append('style="'),
                        t._parent = t;
                        var n = "style"in t ? t.style : "";
                        twig.forEach(n, (function(i, n) {
                            t.prop = n,
                            t.value = i,
                            e.append(twig.filter.escape(this.env_, "prop"in t ? t.prop : "", "light_escape", null, !0)),
                            e.append(":"),
                            e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                            e.append(";")
                        }
                        ), this),
                        e.append('"')
                    }
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_copy_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/copy_tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="error-notice"><div><svg class="svg-icon svg-common--warning-stroked-dims"><use xlink:href="#common--warning-stroked"></use></svg></div><div class="error-notice-text">'),
                    e.append("text"in t ? t.text : ""),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_error_notice"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/error_notice", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="tips-item js-tips-item '),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" data-value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                    e.append('" data-suggestion-type="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "suggestion_type"), "light_escape", null, !0)),
                    e.append('" data-forced="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "forced"), "light_escape", null, !0)),
                    e.append('" '),
                    e.append(twig.attr("item"in t ? t.item : "", "additional_data")),
                    e.append('><span class="tips-item__favorites-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "text"), "light_escape", null, !0)),
                    e.append("</span>"),
                    twig.attr("item"in t ? t.item : "", "without_favorite") || (e.append('<svg class="svg-icon svg-inbox--outline-star-dims tips-item__favorites-icon tips-item__favorites-icon--blue '),
                    e.append(twig.attr("item"in t ? t.item : "", "favorite") ? "tips-item__favorites-icon--checked" : ""),
                    e.append(' js-suggestions-favorites"><use xlink:href="#inbox--outline-star"></use></svg>')),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_favorite_tip_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/favorite_tip_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "oauth_link"in i && i.oauth_link ? (t.append('<a class="google-button '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, "oauth_link"in i ? i.oauth_link : "", "light_escape", null, !0)),
                    t.append('" target="_blank" ><div class="google-button__login button-input button-input-inner"><svg class="svg-icon svg-common--google-sm-dims"><use xlink:href="#common--google-sm"></use></svg><span class="google-button__login-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Authorize"), "light_escape", null, !0)),
                    t.append("</span></div></a>")) : (t.append('<div class="google-button '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    "ok" != twig.attr(twig.attr("render_params"in i ? i.render_params : "", "google_auth"), "status") ? (t.append('<div class="google-button__login js-google-button__login button-input"><div class="button-input-inner"><svg class="svg-icon svg-common--google-sm-dims"><use xlink:href="#common--google-sm"></use></svg><span class="google-button__login-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Authorize"), "light_escape", null, !0)),
                    t.append("</span></div></div>")) : (twig.attr("render_params"in i ? i.render_params : "", "is_folder") ? new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        text: twig.attr("render_params"in i ? i.render_params : "", "picker_text"),
                        class_name: "button-input button-input_folder js-google-button__picker",
                        svg_class_name: "controls--folder"
                    }) : new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        text: twig.attr("render_params"in i ? i.render_params : "", "picker_text"),
                        class_name: "button-input button-input_add js-google-button__picker",
                        svg_class_name: "controls--button-add"
                    }),
                    t.append('<div class="widget-settings__chat-and-handler-user-authorization button-input"><div class="button-input-inner"><div class="widget-settings__chat-and-handler-user-person">'),
                    twig.attr("render_params"in i ? i.render_params : "", "with_user_photo") && (t.append('<div class="widget-settings__chat-and-handler-user-photo-container"><img class="widget-settings__chat-and-handler-user-photo" src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("render_params"in i ? i.render_params : "", "google_auth"), "avatar"), "light_escape", null, !0)),
                    t.append('" alt=""onerror="this.src=\''),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("avatar", twig.attr("user_info"in i ? i.user_info : "", "id")), "light_escape", null, !0)),
                    t.append('\'"><span class="icon icon-google-small"></span></div>')),
                    t.append('<span class="widget-settings__chat-and-handler-user-name" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("render_params"in i ? i.render_params : "", "google_auth"), "name") ? twig.attr(twig.attr("render_params"in i ? i.render_params : "", "google_auth"), "name") : this.env_.filter("i18n", "Profile name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("render_params"in i ? i.render_params : "", "google_auth"), "name") ? twig.attr(twig.attr("render_params"in i ? i.render_params : "", "google_auth"), "name") : this.env_.filter("i18n", "Profile name"), "light_escape", null, !0)),
                    t.append('</span></div><div class="widget-settings__chat-and-handler-user-login-container"><span class="widget-settings__chat-and-handler-user-login">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Log out"), "light_escape", null, !0)),
                    t.append('</span><svg class="svg-icon svg-digital_pipeline--fb_form_logout-dims js-google-main__logout"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#digital_pipeline--fb_form_logout"></use></svg></div></div></div>')),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_google_auth_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/google_auth_button", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "is_top"in i && i.is_top && (t.append('<div class="list-multiple-actions__inner"><div class="list-multiple-actions__actions-wrapper">'),
                    "is_list"in i && i.is_list && (i.checked_class = "",
                    i.checked = !1,
                    "all_checked"in i && i.all_checked ? i.checked = !0 : i.checked_class = "control-checkbox-dash",
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: ("checked_class"in i ? i.checked_class : "") + " multiple-actions__top-checkbox",
                        checked: "checked"in i ? i.checked : "",
                        id: "multiple_actions_checkbox"
                    })))),
                    i.icons = {
                        accept: "checkmark-green",
                        add_contacts: "add-user",
                        add_customers: "add-lead",
                        add_leads: "add-lead",
                        add_task: "clock-blue",
                        change_status: "status-change",
                        change_task_date: "clock-blue",
                        change_task_type: "reassign",
                        change_task_type_in_list: "reassign",
                        close: "close-tasks",
                        decline: "unsorted-decline",
                        delete_user: "delete-trash",
                        delete_group: "delete-trash",
                        delete_thread: "delete-trash",
                        edit: "pencil",
                        link: "chain",
                        mailing: "mailing",
                        manage_tags: "tags",
                        merge: "merge-action",
                        multi_read: "multi-read",
                        resend: "mail-reply",
                        open: "open-tasks",
                        reassign: "reassign",
                        reply: "mail-reply",
                        restore: "restore",
                        restore_thread: "restore",
                        change_group: "reassign",
                        deactivate: "eye",
                        activate: "eye",
                        rename: "pencil",
                        rename_group: "pencil"
                    },
                    i.svg_icons = {
                        deactivate_bot: "multiactions--deactivate_bot",
                        activate_bot: "multiactions--activate_bot",
                        delete: "common--trash",
                        link: "common--linking-chain",
                        chat_send: "multiactions--chats",
                        change_role: "common--edit-pencil",
                        copy: "common--copy",
                        stop_bot: "salesbot--stop-icon",
                        stop: "common--stop",
                        reset_bot: "common--refresh",
                        export_bot: "common--export--export",
                        change_field: "multiactions--field-change",
                        email_confirm: "common--mail"
                    },
                    i._parent = i;
                    var a = "rights"in i ? i.rights : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.item = e,
                        twig.attr("item"in i ? i.item : "", "type") && (t.append('<div class="list-multiple-actions__item js-list-multiple-actions__item" data-type="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "type"), "light_escape", null, !0)),
                        t.append('" data-params="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "params"), "light_escape", null, !0)),
                        t.append('">'),
                        twig.attr("svg_icons"in i ? i.svg_icons : "", twig.attr("item"in i ? i.item : "", "type"), void 0, "array") ? (t.append('<span class="list-multiple-actions__item__icon"><svg class="svg-icon svg-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("svg_icons"in i ? i.svg_icons : "", twig.attr("item"in i ? i.item : "", "type"), void 0, "array"), "light_escape", null, !0)),
                        t.append('-dims"><use xlink:href="#'),
                        t.append(twig.filter.escape(this.env_, twig.attr("svg_icons"in i ? i.svg_icons : "", twig.attr("item"in i ? i.item : "", "type"), void 0, "array"), "light_escape", null, !0)),
                        t.append('"></use></svg></span>')) : twig.attr("icons"in i ? i.icons : "", twig.attr("item"in i ? i.item : "", "type"), void 0, "array") && (t.append('<span class="list-multiple-actions__item__icon icon icon-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("icons"in i ? i.icons : "", twig.attr("item"in i ? i.item : "", "type"), void 0, "array"), "light_escape", null, !0)),
                        t.append('"></span>')),
                        i.lang_key = "multiple_" + twig.attr("item"in i ? i.item : "", "type") + "_label",
                        twig.attr("lang"in i ? i.lang : "", "lang_key"in i ? i.lang_key : "", void 0, "array") ? t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "lang_key"in i ? i.lang_key : "")), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", twig.attr("item"in i ? i.item : "", "type")), "light_escape", null, !0)),
                        t.append('<span class="list-multiple-actions__item-more js-list-multiple-actions__item-more"><span class="list-multiple-actions__item__icon icon icon-v-dots-2"></span>'),
                        t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "More")), "light_escape", null, !0)),
                        t.append("</span></div>"))
                    }
                    ), this),
                    "is_top"in i && i.is_top && (t.append("</div>"),
                    twig.contains(["leads", "customers"], "entity"in i ? i.entity : "") && (i.show_sum = !0),
                    t.append('<div id="multiple_total" class="list-multiple-actions__total">'),
                    "en" == ("lang_id"in i ? i.lang_id : "") ? (t.append(twig.filter.escape(this.env_, "selected_count"in i ? i.selected_count : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "list_selected")), "light_escape", null, !0))) : (t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "list_selected")), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "selected_count"in i ? i.selected_count : "", "light_escape", null, !0))),
                    t.append('<span class="list-multiple-actions__total-sum '),
                    "show_sum"in i && i.show_sum || t.append("h-hidden"),
                    t.append('" id="actions__total__sum" data-before="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "list_selected_total"), "light_escape", null, !0)),
                    t.append('">'),
                    "show_sum"in i && i.show_sum ? (t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", "checked_sum"in i ? i.checked_sum : ""), "light_escape", null, !0))) : t.append('<span class="spinner-icon list-multiple-actions__total-sum__spinner"></span>'),
                    t.append("</span></div>"),
                    "show_close_btn"in i && i.show_close_btn && (t.append('<div class="list-multiple-actions__close-btn js-list-multiple-actions__close-btn">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Close")), "light_escape", null, !0)),
                    t.append('<span class="list-multiple-actions__close-icon"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span></div>')),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_multiple_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/multiple_actions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        upper_block: twig.bind(this.block_upper_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="notice '),
                    "is_big"in t && t.is_big && e.append("notice--big"),
                    e.append(" "),
                    "is_absolute"in t && t.is_absolute && e.append("notice--absolute"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "main_class_name"in t ? t.main_class_name : "", "light_escape", null, !0)),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("upper_block", t, i)),
                    e.append('<div class="notice__hover-wrapper '),
                    e.append(twig.filter.escape(this.env_, "wrapper_class_name"in t ? t.wrapper_class_name : "", "light_escape", null, !0)),
                    e.append('"><span data-is-cancelable="'),
                    e.append(twig.filter.escape(this.env_, "is_cancelable"in t ? t.is_cancelable : "", "light_escape", null, !0)),
                    e.append('" class="notice__text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    "is_cancelable"in t && t.is_cancelable && e.append('<button type="button" class="js-notice-hide notice__cancel"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></button>'),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_upper_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_notice"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/notice", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="connected_container"><svg class="svg-icon svg-common--done-dims "><use xlink:href="#common--done"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Your internet connection was restored"), "light_escape", null, !0)),
                    t.append('</div><div class="reconnected_container"><span class="spinner-icon" style="width: 10px; height: 10px; margin-right: 8px;"></span>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "No internet connection"), "light_escape", null, !0)),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Reconnect") + (("connect_timeout"in i ? i.connect_timeout : "") >= 1 ? " (" + ("connect_timeout"in i ? i.connect_timeout : "") + ")" : ""),
                        class_name: "offline-notifier__button js-reconnect"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_offline"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/offline", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i;
                    var n = e;
                    (e = new twig.StringBuffer).append('<script>(function(a,m,o,c,r,m){a[m]={id:"'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('",hash:"'),
                    e.append(twig.filter.escape(this.env_, "hash"in t ? t.hash : "", "light_escape", null, !0)),
                    e.append('",locale:"'),
                    e.append(twig.filter.escape(this.env_, "locale"in t ? t.locale : "", "light_escape", null, !0)),
                    e.append("\",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};a[o+'Config']=a[o+'Config']||{};a[o+'Config'].hidden=!0;var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='"),
                    e.append(twig.filter.escape(this.env_, "gso_host"in t ? t.gso_host : "", "light_escape", null, !0)),
                    e.append("/js/button.js';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'));<\/script>"),
                    n.append(twig.spaceless(e.toString())),
                    e = n
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_onlinechat_embed_code"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/onlinechat_embed_code", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="progress__inner">'),
                    "width"in t && t.width || (t.width = 0),
                    e.append('<div class="progress__status"><div class="progress__filler" '),
                    "push_text"in t && t.push_text && (e.append('style="width: '),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append('%"')),
                    e.append("></div>"),
                    "link"in t && t.link ? (e.append('<a target="_blank" href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" class="progress__status-text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="progress__status-text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('</div><div class="progress__bar-wrapper"><div class="progress__bar" style="width: '),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append('%"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_progress_bar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/progress_bar", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "bottom_to_top" == ("type"in t ? t.type : "") ? (t.ribbon_class_name = "ribbon--bottomToTop",
                    t.layout = new twig.Markup('<svg class="svg-icon svg-common--ribbon--ribbon-bottom-to-top-dims"><use xlink:href="#common--ribbon--ribbon-bottom-to-top"></use></svg>')) : "left_to_top" == ("type"in t ? t.type : "") ? (t.ribbon_class_name = "ribbon--leftToTop",
                    t.layout = new twig.Markup('<svg class="svg-icon svg-common--ribbon--ribbon-left-to-top-dims"><use xlink:href="#common--ribbon--ribbon-left-to-top"></use></svg>')) : t.layout = new twig.Markup('<div class="ribbon__base-layout"></div>'),
                    e.append('<div class="ribbon '),
                    e.append(twig.filter.escape(this.env_, "ribbon_class_name"in t ? t.ribbon_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "layout"in t ? t.layout : "", "light_escape", null, !0)),
                    e.append('<span class="ribbon__text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_ribbon"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/ribbon", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body_block: twig.bind(this.block_body_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/tip.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.item_template = "favorites_available"in t && t.favorites_available ? "interface/common/favorite_tip_item.twig" : "interface/common/tip_item.twig",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var p = twig.count(a);
                        s.revindex0 = p - 1,
                        s.revindex = p,
                        s.length = p,
                        s.last = 1 === p
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        twig.attr("item"in i ? i.item : "", "sticky_header") ? (t.append('<div class="tips-item-sticky-wrapper">'),
                        new (e._get("interface/common/tip_item.twig"))(this.env_).render_(t, i),
                        t.append("</div>")) : new (e._get("item_template"in i ? i.item_template : ""))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_sticky_headers_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/sticky_headers_tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="tabs">'),
                    t._parent = t;
                    var n = "items"in t ? t.items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<input type="radio" name="'),
                        e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                        e.append('" id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('" class="hidden tabs__input" '),
                        twig.attr("item"in t ? t.item : "", "is_checked") && e.append('checked="checked"'),
                        e.append('><label class="tabs__item '),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append('" for="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "lang"), "light_escape", null, !0)),
                        e.append("</label>")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tabs"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tabs", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.calendar_id = twig.functions.random(this.env_, 1e4),
                    t.times_items = [{
                        value: "00:00"
                    }, {
                        value: "01:00"
                    }, {
                        value: "02:00"
                    }, {
                        value: "03:00"
                    }, {
                        value: "04:00"
                    }, {
                        value: "05:00"
                    }, {
                        value: "06:00"
                    }, {
                        value: "07:00"
                    }, {
                        value: "08:00"
                    }, {
                        value: "09:00"
                    }, {
                        value: "10:00"
                    }, {
                        value: "11:00"
                    }, {
                        value: "12:00"
                    }, {
                        value: "13:00"
                    }, {
                        value: "14:00"
                    }, {
                        value: "15:00"
                    }, {
                        value: "16:00"
                    }, {
                        value: "17:00"
                    }, {
                        value: "18:00"
                    }, {
                        value: "19:00"
                    }, {
                        value: "20:00"
                    }, {
                        value: "21:00"
                    }, {
                        value: "22:00"
                    }, {
                        value: "23:00"
                    }],
                    12 == ("_time_format"in t ? t._time_format : "") && (t.times_items = [{
                        value: "12:00 AM"
                    }, {
                        value: "1:00 AM"
                    }, {
                        value: "2:00 AM"
                    }, {
                        value: "3:00 AM"
                    }, {
                        value: "4:00 AM"
                    }, {
                        value: "5:00 AM"
                    }, {
                        value: "6:00 AM"
                    }, {
                        value: "7:00 AM"
                    }, {
                        value: "8:00 AM"
                    }, {
                        value: "9:00 AM"
                    }, {
                        value: "10:00 AM"
                    }, {
                        value: "11:00 AM"
                    }, {
                        value: "12:00 PM"
                    }, {
                        value: "1:00 PM"
                    }, {
                        value: "2:00 PM"
                    }, {
                        value: "3:00 PM"
                    }, {
                        value: "4:00 PM"
                    }, {
                        value: "5:00 PM"
                    }, {
                        value: "6:00 PM"
                    }, {
                        value: "7:00 PM"
                    }, {
                        value: "8:00 PM"
                    }, {
                        value: "9:00 PM"
                    }, {
                        value: "10:00 PM"
                    }, {
                        value: "11:00 PM"
                    }]),
                    "date"in t && t.date || (t.default_date = "tomorrow",
                    t.date = this.env_.filter("task_date", "tomorrow", "timestamp")),
                    t.presets = [{
                        period: "after_15_minutes",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_after_15_minutes")
                    }, {
                        period: "after_30_minutes",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_after_30_minutes")
                    }, {
                        period: "in_an_hour",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_in_an_hour")
                    }, {
                        period: "today",
                        title: twig.attr("lang"in t ? t.lang : "", "Today")
                    }, {
                        period: "tomorrow",
                        title: twig.attr("lang"in t ? t.lang : "", "Tomorrow")
                    }, {
                        period: "before_end_of_week",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_before_end_of_week")
                    }, {
                        period: "next_week",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_next_week")
                    }, {
                        period: "next_month",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_next_month")
                    }, {
                        period: "next_year",
                        title: twig.attr("lang"in t ? t.lang : "", "tasks_period_next_year")
                    }],
                    t.is_all_day = this.env_.filter("task_date", "date"in t ? t.date : "", "time") == twig.attr("lang"in t ? t.lang : "", "tasks_all_day"),
                    e.append('<div class="tasks-date '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" data-responsible='),
                    e.append(twig.filter.escape(this.env_, "main_user"in t ? t.main_user : "", "light_escape", null, !0)),
                    e.append(' data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" data-type="'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('" data-title="'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append('" data-type-name="'),
                    e.append(twig.filter.escape(this.env_, "typeName"in t ? t.typeName : "", "light_escape", null, !0)),
                    e.append('"><input type="hidden" id="task_edit_duration" name="duration" value="'),
                    e.append(twig.filter.escape(this.env_, "duration"in t ? t.duration : "", "light_escape", null, !0)),
                    e.append('"><input type="hidden" id="task_edit_time" name="time" value="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : "", "time"), "light_escape", null, !0)),
                    e.append('">'),
                    t.task_time_value = "is_all_day"in t && t.is_all_day ? "" : this.env_.filter("task_date", "date"in t ? t.date : "", "time"),
                    ("duration"in t ? t.duration : "") > 0 && (t.task_time_value = this.env_.filter("task_date", "date"in t ? t.date : "", "time") + " - " + this.env_.filter("task_date", Number("date"in t ? t.date : "") + Number("duration"in t ? t.duration : ""), "time")),
                    e.append('<div class="tasks-date__caption '),
                    "disabled"in t && t.disabled && e.append("tasks-date__caption_disabled"),
                    e.append('"><span class="tasks-date__caption-date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "date"in t ? t.date : "", "date"), "light_escape", null, !0)),
                    e.append('</span><span class="tasks-date__caption-time" data-hide-time='),
                    e.append("is_all_day"in t && t.is_all_day ? 1 : 0),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "task_time_value"in t ? t.task_time_value : "", "light_escape", null, !0)),
                    e.append('</span></div><div class="tasks-date__wrapper '),
                    e.append(twig.filter.escape(this.env_, "wrapper_class_name"in t ? t.wrapper_class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="tasks-date__controls"><div class="tasks-date__controls-date js-control-date-tasks-date js-tasks-date-input-bg" data-calendar-id="'),
                    e.append(twig.filter.escape(this.env_, "calendar_id"in t ? t.calendar_id : "", "light_escape", null, !0)),
                    e.append('"><input class="tasks-date__controls-date-input" id="task_edit_date" name="date" value="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "default_date"in t && t.default_date ? "default_date"in t ? t.default_date : "" : "date"in t ? t.date : "", "short"), "light_escape", null, !0)),
                    e.append('"></div><div class="tasks-date__controls-time js-tasks-date-input-bg"><input class="tasks-date__controls-time-input js-tasks-date-time-input js-control-format-time" value="'),
                    e.append(twig.filter.escape(this.env_, "task_time_value"in t ? t.task_time_value : "", "light_escape", null, !0)),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "tasks_all_day"), "light_escape", null, !0)),
                    e.append('"></div></div><div class="tasks-date__wrapper-inner"><div class="tasks-date__list custom-scroll">'),
                    t._parent = t;
                    var n = "presets"in t ? t.presets : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<div class="tasks-date__list__item js-tasks-date-preset" data-period="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "period"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append("</div>")
                    }
                    ), this),
                    e.append('</div><div class="tasks-date__datetime"><div class="tasks-date__calendar custom-scroll" id="tasks_date_calendar_'),
                    e.append(twig.filter.escape(this.env_, "calendar_id"in t ? t.calendar_id : "", "light_escape", null, !0)),
                    e.append('"></div><div class="tasks-date__time-planner js-tasks-date-timeplanner"></div></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tasks_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tasks_date", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="task-type-name-with-icon"><span class="task-type-name-with-icon__padding"></span><span class="task-type-name-with-icon__icon '),
                    e.append(twig.filter.escape(this.env_, "icon_class_name"in t ? t.icon_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    twig.contains([1, 2, "1", "2"], "type"in t ? t.type : "") ? (e.append('<span class="icon icon-'),
                    2 == ("type"in t ? t.type : "") ? e.append("case-red") : e.append("follow-up"),
                    e.append('"></span>')) : (t.icon_id = this.env_.filter("default_task_type_icon", "type_icon"in t ? t.type_icon : ""),
                    t.color = this.env_.filter("default_task_type_color", "type_color"in t ? t.type_color : ""),
                    e.append('<svg class="svg-icon svg-tasks--types-icons--'),
                    e.append(twig.filter.escape(this.env_, "icon_id"in t ? t.icon_id : "", "light_escape", null, !0)),
                    e.append('-dims" style="fill: '),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append('"><use xlink:href="#tasks--types-icons--'),
                    e.append(twig.filter.escape(this.env_, "icon_id"in t ? t.icon_id : "", "light_escape", null, !0)),
                    e.append('"></use></svg>')),
                    e.append("</span>"),
                    t.type_name = twig.filter.def(this.env_.filter("striptags", "type_name"in t ? t.type_name : ""), this.env_.filter("i18n", "Task type deleted")),
                    e.append('<span class="task-type-name-with-icon__text '),
                    e.append(twig.filter.escape(this.env_, "text_class_name"in t ? t.text_class_name : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "type_name"in t ? t.type_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "type_name"in t ? t.type_name : "", "light_escape", null, !0)),
                    e.append("</span></span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tasks_type_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tasks_type_name", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        top_block: twig.bind(this.block_top_block, this),
                        body_block: twig.bind(this.block_body_block, this),
                        bottom_block: twig.bind(this.block_bottom_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i;
                    var n = e;
                    (e = new twig.StringBuffer).append('<div class="tips js-tip'),
                    "is_overflowed"in t && t.is_overflowed && e.append("-overflowed"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "selected"in t && t.selected && (e.append("tips_has-selected "),
                    "selected_at_right"in t && t.selected_at_right && e.append("tips_selected-right")),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append('><div class="tips__inner custom-scroll js-tip-items">'),
                    e.append(this.renderBlock("top_block", t, i)),
                    e.append(this.renderBlock("body_block", t, i)),
                    e.append(this.renderBlock("bottom_block", t, i)),
                    e.append("</div></div>"),
                    t.inner_tip = new twig.Markup(e.toString()),
                    e = n,
                    "is_custom_tip_holder"in t && t.is_custom_tip_holder ? e.append(twig.filter.escape(this.env_, "inner_tip"in t ? t.inner_tip : "", "light_escape", null, !0)) : (e.append('<div class="js-tip-holder">'),
                    e.append(twig.filter.escape(this.env_, "inner_tip"in t ? t.inner_tip : "", "light_escape", null, !0)),
                    e.append("</div>"))
                }
                ,
                t.prototype.block_top_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var p = twig.count(a);
                        s.revindex0 = p - 1,
                        s.revindex = p,
                        s.length = p,
                        s.last = 1 === p
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/common/tip_item.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.block_bottom_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.tip_text = !twig.attr("item"in i ? i.item : "", "text") && twig.attr("item"in i ? i.item : "", "label") ? twig.attr("item"in i ? i.item : "", "label") : twig.attr("item"in i ? i.item : "", "text"),
                    t.append('<div class="tips-item js-tips-item '),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "class_name"), "light_escape", null, !0)),
                    t.append(" "),
                    "selected"in i && i.selected && twig.attr("item"in i ? i.item : "", "id") == ("selected"in i ? i.selected : "") && t.append("tips-item_selected"),
                    t.append('" '),
                    t.append(twig.attr("item"in i ? i.item : "", "additional_data")),
                    t.append(' data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('" data-forced="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "forced"), "light_escape", null, !0)),
                    t.append('" data-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "value"), "light_escape", null, !0)),
                    t.append('" data-suggestion-type="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "suggestion_type"), "light_escape", null, !0)),
                    t.append('">'),
                    i.has_left_icon = twig.attr("item"in i ? i.item : "", "icon") || twig.attr("item"in i ? i.item : "", "svg_icon") || twig.attr("item"in i ? i.item : "", "custom_icon") || twig.attr("item"in i ? i.item : "", "image_icon") || twig.attr("item"in i ? i.item : "", "avatar"),
                    "has_left_icon"in i && i.has_left_icon && (t.append('<span class="tips-icon-container">'),
                    twig.attr("item"in i ? i.item : "", "icon") && (t.append('<span class="tips-icon icon icon-inline icon-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon"), "light_escape", null, !0)),
                    t.append('"></span>')),
                    twig.attr("item"in i ? i.item : "", "svg_icon") && (t.append('<span class="tips-icon tips-svg-icon"><svg class="svg-icon svg-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "svg_icon"), "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "svg_icon"), "light_escape", null, !0)),
                    t.append('"></use></svg></span>')),
                    twig.attr("item"in i ? i.item : "", "custom_icon") && (t.append('<span class="tips-icon '),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "custom_icon"), "light_escape", null, !0)),
                    t.append('"></span>')),
                    twig.attr("item"in i ? i.item : "", "image_icon") && (t.append('<img src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "image_icon"), "light_escape", null, !0)),
                    t.append('" class="tips-icon" width="14" height="14" alt="'),
                    t.append(twig.filter.escape(this.env_, "tip_text"in i ? i.tip_text : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("item"in i ? i.item : "", "avatar") && new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class: "tips-item__avatar",
                        url: twig.attr("item"in i ? i.item : "", "avatar")
                    })),
                    t.append("</span>")),
                    twig.attr("item"in i ? i.item : "", "href") ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "href"), "light_escape", null, !0)),
                    t.append('" class="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link_class_name"), "light_escape", null, !0)),
                    t.append('" '),
                    twig.attr("item"in i ? i.item : "", "blank") && t.append(' target="_blank" '),
                    t.append(">"),
                    twig.attr("item"in i ? i.item : "", "should_be_raw") ? t.append("tip_text"in i ? i.tip_text : "") : t.append(twig.filter.escape(this.env_, "tip_text"in i ? i.tip_text : "", "light_escape", null, !0)),
                    t.append("</a>")) : "has_checkbox"in i && i.has_checkbox ? new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id"),
                        value: twig.attr("item"in i ? i.item : "", "value"),
                        name: twig.attr("has_checkbox"in i ? i.has_checkbox : "", "name"),
                        class_name: twig.attr("has_checkbox"in i ? i.has_checkbox : "", "class_name"),
                        checked: twig.attr("item"in i ? i.item : "", "checked"),
                        should_be_raw: !!twig.attr("item"in i ? i.item : "", "should_be_raw", void 0, void 0, !0) && twig.filter.def(twig.attr("item"in i ? i.item : "", "should_be_raw"), !1),
                        text: "tip_text"in i ? i.tip_text : ""
                    })) : twig.attr("item"in i ? i.item : "", "should_be_raw") ? t.append("tip_text"in i ? i.tip_text : "") : t.append(twig.filter.escape(this.env_, "tip_text"in i ? i.tip_text : "", "light_escape", null, !0)),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tip_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tip_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_add_caption"), "light_escape", null, !0)),
                    t.append('</h2><form id="modal_add_task_form" class="todo-form"><div class="modal-body__inner__task-date-time clearfix">'),
                    new (e._get("interface/common/tasks_date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : "",
                        wrapper_class_name: "modal-body__inner__task-date-time-wrapper",
                        disabled: !twig.attr("rights"in i ? i.rights : "", "edit")
                    })),
                    t.append("</div>"),
                    "need_linked_input"in i && i.need_linked_input && (t.append('<div class="modal-todo__linked-wrapper '),
                    twig.attr("linked"in i ? i.linked : "", "id") && t.append("has-link"),
                    t.append('">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "todo_form_linked",
                        name: "linked",
                        input_class_name: "js-todo-form-suggest",
                        class_name: "validate-error-wrapper todo_item_manage-suggest",
                        placeholder: this.env_.filter("i18n", "tasks_linked_placeholder"),
                        ajax: {
                            url: "/ajax/todo/search/",
                            params: "search_string=#q#"
                        },
                        value: twig.attr("linked"in i ? i.linked : "", "value"),
                        value_id: twig.attr("linked"in i ? i.linked : "", "id"),
                        additional_data: 'data-no-filter="y" data-entity="' + twig.attr("linked"in i ? i.linked : "", "entity") + '"',
                        disabled: !twig.attr("rights"in i ? i.rights : "", "edit")
                    })),
                    t.append('<a href="'),
                    twig.attr("linked"in i ? i.linked : "", "uri") ? t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "uri"), "light_escape", null, !0)) : (t.append("/"),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "entity"), "light_escape", null, !0)),
                    t.append("/detail/"),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "id"), "light_escape", null, !0))),
                    t.append('" class="modal-todo__linked-wrapper__link js-navigate-link" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "card_to_card"), "light_escape", null, !0)),
                    t.append(": "),
                    t.append(twig.filter.escape(this.env_, twig.attr("linked"in i ? i.linked : "", "value"), "light_escape", null, !0)),
                    t.append('"><span class="icon icon-inline icon-to-card"></span></a></div>')),
                    t.append('<div class="modal-body__inner-add-task__managers-suggest-wrapper">'),
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, {
                        items: [twig.attr(twig.attr("managers"in i ? i.managers : "", "items"), twig.attr("managers"in i ? i.managers : "", "selected"), void 0, "array")],
                        class_name: "modal-add_task__users-select",
                        id: "add_task-users_select_holder",
                        input_name: "main_user"
                    }),
                    t.append("</div>"),
                    new (e._get("interface/common/task_types/in_modal.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        task_types: twig.attr("task_types"in i ? i.task_types : "", "items"),
                        name: "type",
                        selected: twig.attr("task_types"in i ? i.task_types : "", "selected"),
                        class_name: "validate-error-wrapper modal-body__inner-add-task__task_types control--select-white",
                        disabled: !twig.attr("rights"in i ? i.rights : "", "edit")
                    })),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "add_task__textarea",
                        name: "body",
                        value: this.env_.filter("task_text", "body"in i ? i.body : ""),
                        class_name: "validate-error-wrapper textarea-autosize modal-body__inner__textarea",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "multiple_task_add_comment"),
                        disabled: !twig.attr("rights"in i ? i.rights : "", "edit")
                    })),
                    twig.attr("rights"in i ? i.rights : "", "edit") && new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    "has_remove"in i && i.has_remove && twig.attr("rights"in i ? i.rights : "", "delete") && (t.append('<div id="todo-form-delete" class="todo-form__delete" title="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "multiple_delete_label")), "light_escape", null, !0)),
                    t.append('"><span class="icon icon-delete-trash"></span></div>')),
                    t.append("</form></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_todo"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/todo", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="notes-tip__wrapper tooltip__wrapper '),
                    "class_name"in t && t.class_name && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" ")),
                    e.append(" "),
                    "direction"in t && t.direction && (e.append(" tooltip__wrapper_on"),
                    e.append(twig.filter.escape(this.env_, "direction"in t ? t.direction : "", "light_escape", null, !0)),
                    e.append(" ")),
                    e.append('" '),
                    "width"in t && t.width && ("width"in t ? t.width : "") >= 0 && (e.append(' style="width: '),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append('px" ')),
                    e.append('><div class="notes-tip tooltip"><div class="tooltip__container">'),
                    "title"in t && t.title && (e.append('<div class="widget_settings_block__title">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="notes-tip__inner tooltip__inner"><div class="notes-tip__text tooltip__text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("<br>"),
                    "button"in t && t.button && (e.append('<div class="sidebar__notifications__bar-trial-buy"><a href="/settings/pay/" class="js-navigate-link"><button type="button" class="button-input button-input_blue"><span class="button-input-inner "><span class="button-input-inner__text">'),
                    e.append(twig.filter.escape(this.env_, "button"in t ? t.button : "", "light_escape", null, !0)),
                    e.append("</span></span></button></a></div>")),
                    e.append("</div></div>"),
                    "ribbon"in t && t.ribbon && (e.append('<div class="tooltip__ribbon">'),
                    e.append(twig.filter.escape(this.env_, "ribbon"in t ? t.ribbon : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tooltip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tooltip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list-top-nav__icon-button list-top-nav__icon-button_dark list-top-nav__icon-button_context list-top-nav__button-more">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "button_more"),
                        svg_class_name: "controls--button-more",
                        inner_class_name: "button-input-more-inner",
                        class_name: "button_class_name"in i ? i.button_class_name : "",
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        context_menu_class_name: "context_menu_class_name"in i ? i.context_menu_class_name : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_top_actions_more"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/top_actions_more", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list-top-nav__button-more_newbie">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "More"),
                        text: this.env_.filter("i18n", "More"),
                        plain: !0,
                        svg_class_name: "controls--button-more",
                        class_name: "button_class_name"in i ? i.button_class_name : "",
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        context_menu_class_name: "context_menu_class_name"in i ? i.context_menu_class_name : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_top_actions_more_newbie"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/top_actions_more_newbie", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list-top-nav__text-button list-top-nav__text-button_funnel list-top-nav__text-button_submenu js-list-top-nav__text-button_submenu" data-entity="'),
                    e.append(twig.filter.escape(this.env_, "data_entity"in t ? t.data_entity : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "item_title"in t ? t.item_title : "", "light_escape", null, !0)),
                    e.append('"><span class="clip-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, "item_title"in t ? t.item_title : "", "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_top_nav_submenu_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/top_nav_submenu_button", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__top__pipeline-preset list__top__pipeline-preset_newbie"><div class="list-top-nav__text-button list-top-nav__text-button_funnel list-top-nav__text-button_submenu js-list-top-nav__text-button_submenu list-top-nav__text-button_newbie" data-entity="'),
                    t.append(twig.filter.escape(this.env_, "data_entity"in i ? i.data_entity : "", "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "item_title"in i ? i.item_title : "", "light_escape", null, !0)),
                    t.append('"><span class="clip-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, "item_title"in i ? i.item_title : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: ["dark", "dropdown"],
                        user_rank: "newbie",
                        svg_class_name: "common--arrow-down",
                        additional_data: 'data-entity="' + ("data_entity"in i ? i.data_entity : "") + '"'
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_top_nav_submenu_button_newbie"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/top_nav_submenu_button_newbie", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list-top-nav__buttons-wrapper">'),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        link: "pipeline_link"in i ? i.pipeline_link : "",
                        type: "pipe",
                        js_caption: !0,
                        active: twig.attr("selected"in i ? i.selected : "", "pipe"),
                        title: twig.attr("lang"in i ? i.lang : "", "menu_title"),
                        svg_class_name: "common--pipe"
                    })),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        link: "list_link"in i ? i.list_link : "",
                        type: "list",
                        js_caption: !0,
                        active: twig.attr("selected"in i ? i.selected : "", "list"),
                        title: twig.attr("lang"in i ? i.lang : "", "menu_list"),
                        svg_class_name: "common--list"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_top_nav_view"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/top_nav_view", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list-top-nav__buttons-wrapper list-top-nav__buttons-wrapper_newbie"><span class="list-top-nav__buttons-wrapper_title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "navigation_view"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        link: "pipeline_link"in i ? i.pipeline_link : "",
                        type: "pipe",
                        user_rank: "user_rank"in i ? i.user_rank : "",
                        js_caption: !0,
                        active: twig.attr("selected"in i ? i.selected : "", "pipe"),
                        title: twig.attr("lang"in i ? i.lang : "", "menu_title"),
                        data_entity: "data_entity"in i ? i.data_entity : "",
                        svg_class_name: "common--pipe-small"
                    })),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        link: "list_link"in i ? i.list_link : "",
                        type: "list",
                        user_rank: "user_rank"in i ? i.user_rank : "",
                        js_caption: !0,
                        active: twig.attr("selected"in i ? i.selected : "", "list"),
                        title: twig.attr("lang"in i ? i.lang : "", "menu_list"),
                        data_entity: "data_entity"in i ? i.data_entity : "",
                        svg_class_name: "common--list-small"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_top_nav_view_newbie"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/top_nav_view_newbie", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="tour-tip '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" id="tour_tip_'),
                    t.append(twig.filter.escape(this.env_, "index"in i ? i.index : "", "light_escape", null, !0)),
                    t.append('" data-index="'),
                    t.append(twig.filter.escape(this.env_, "index"in i ? i.index : "", "light_escape", null, !0)),
                    t.append('"><span class="tour-tip__close js-tour-cancel"><span class="icon icon-white-close"></span></span><span class="tour-tip__step">'),
                    t.append(twig.filter.escape(this.env_, "step"in i ? i.step : "", "light_escape", null, !0)),
                    t.append('</span><div class="tour-tip__inner">'),
                    "caption"in i && i.caption && (t.append('<div class="tour-tip__caption">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append("</div>")),
                    "text"in i && i.text && (t.append('<div class="tour-tip__text">'),
                    t.append(twig.filter.escape(this.env_, "text"in i ? i.text : "", "light_escape", null, !0)),
                    t.append("</div>")),
                    "button"in i && i.button && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("button"in i ? i.button : "", "text"),
                        class_name: "tour-tip__button " + twig.attr("button"in i ? i.button : "", "class_name")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tour_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tour_tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    i.colors = ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#85144B", "#F012BE", "#B10DC9", "#111111", "#AAAAAA", "#DDDDDD", "#FFFFFF", "#CCFF33", "#CC99FF", "#FF6699", "#9966FF"],
                    i.unsorted_is_enabled = "y" == twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "add_to_unsorted"),
                    t.append('<div class="amoforms_banner"><div class="amoforms_banner-inner"><div class="amoforms_banner-image"></div><div class="amoforms_banner-text"><div class="amoforms_banner-head"><div class="amoforms_banner-header">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_new_constructor"), "light_escape", null, !0)),
                    t.append('</div><div class="amoforms_banner-button js-amoforms_banner-convert-form">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_move_form"), "light_escape", null, !0)),
                    t.append('</div></div><div class="amoforms_banner-description"><span class="amoforms_banner-link js-amoforms_banner-create-form">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_create_new_form"), "light_escape", null, !0)),
                    t.append("</span>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_try_new_form"), "light_escape", null, !0)),
                    t.append('</div></div></div></div><form autocomplete="off" data-form_id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "id"), "light_escape", null, !0)),
                    t.append('" id="amoforms_creation_form" action="/ajax/amoforms/save/'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "id"), "light_escape", null, !0)),
                    t.append('" method="post"><div id="amoforms_creation_form_wrapper"><dl class="card-top-name"><dd class="card-top-name__name-wrapper "><span class="amoforms_top_form_delete">'),
                    twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "id") ? new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "delete_cf_settings",
                        class_name: "button-cancel js-settings-cf-delete",
                        icon_class_name: "icon-delete-trash",
                        text: twig.attr("lang"in i ? i.lang : "", "amoforms_button_delete_form")
                    })) : t.append("&nbsp;"),
                    t.append('</span></dd><dt class="card-top-name__actions-wrapper">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "reset_cf_settings",
                        class_name: "button-cancel js-settings-cf-reset",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "save_cf_settings",
                        class_name: "button-input-disabled js-settings-cf-save js-button-with-loader card-top-name__right__save",
                        text: twig.attr("lang"in i ? i.lang : "", "button_save")
                    })),
                    t.append("</dt></dl>"),
                    t.append('<div class="amoforms_work-area"><div class="amoforms_white-background">\x3c!-- amoforms_white-background --\x3e</div><div id="amoforms_dnd_logo"></div>'),
                    t.append('<div class="amoforms__logo_wrapper js-fileapi-wrapper"><div class="amoforms__logo_inner " id="choose"><div class="amoforms__logo_inner2"><span class="spinner-icon"></span>'),
                    twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "logo"), "value") ? (t.append('<img class="amoforms__logo" src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("params"in i ? i.params : "", "form_server") + "/forms/img/logo/" + twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "logo"), "value") + "?" + twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "date_edit"), "light_escape", null, !0)),
                    t.append('" alt="logo">')) : t.append('<img class="amoforms__logo amoforms-defualt-logo" src="/frontend/images/amocrm_logo_gray.png" alt="logo">'),
                    t.append('</div><div class="amoforms_form_text_header_inner">'),
                    t.append('<div style="overflow: hidden;width: 0;height: 0;"><input id="password" type="password" name="password" /></div><input id="amoforms-input-setting-logo-value" class="text-input" type="text" name="name"'),
                    twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "id") ? "image" == twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "logo"), "type") ? twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "logo"), "value") ? (t.append('value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "logo"), "value"), "light_escape", null, !0)),
                    t.append('"')) : t.append('value=""') : (t.append('value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "name"), "light_escape", null, !0)),
                    t.append('"')) : t.append('value=""'),
                    t.append('placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_logo_holder"), "light_escape", null, !0)),
                    t.append('"></div><div class="amoforms__logo_file"><div class="amoforms_form_header_text" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_header_text"), "light_escape", null, !0)),
                    t.append('"><span class="icon icon-icon-text"></span></div><label id="amoforms_select_logo_file" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_load_image"), "light_escape", null, !0)),
                    t.append('" for="amoforms__logo_file__input"><span class="icon icon-icon-image-upload"></span></label>'),
                    new (e._get("interface/controls/file.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class: "amoforms__logo_file__input",
                        name: "files",
                        text: "",
                        id: "amoforms__logo_file__input"
                    })),
                    t.append('<div id="amoforms_logo_delete"><span class="icon icon-delete-trash"></span></div><div id="spinner-profile" class="amoforms__logo_loader"></div></div></div><div class="errors" style="display: none"><p class="warning"></p></div></div>'),
                    t.append('<div id="amoforms-fields-list" class="selected-fields ui-sortable">'),
                    twig.attr("params"in i ? i.params : "", "form_params")) {
                        i._parent = i;
                        var a = twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "fields")
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var p = twig.count(a);
                            s.revindex0 = p - 1,
                            s.revindex = p,
                            s.length = p,
                            s.last = 1 === p
                        }
                        twig.forEach(a, (function(n, a) {
                            i.field_id_and_type = a,
                            i.field = n,
                            twig.attr("field"in i ? i.field : "", "disabled") || new (e._get("interface/common/amoforms/field_block.twig"))(this.env_).render_(t, i),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    } else
                        i._parent = i,
                        a = twig.attr("params"in i ? i.params : "", "fields"),
                        s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        },
                        twig.countable(a) && (p = twig.count(a),
                        s.revindex0 = p - 1,
                        s.revindex = p,
                        s.length = p,
                        s.last = 1 === p),
                        twig.forEach(a, (function(n, a) {
                            i.field_id_and_type = a,
                            i.field = n,
                            new (e._get("interface/common/amoforms/field_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                new_form: !0
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this);
                    t.append("</div>"),
                    t.append('<div class="amoforms_unselected-fields">'),
                    twig.attr("params"in i ? i.params : "", "form_params") && (i._parent = i,
                    a = twig.attr("params"in i ? i.params : "", "fields"),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (p = twig.count(a),
                    s.revindex0 = p - 1,
                    s.revindex = p,
                    s.length = p,
                    s.last = 1 === p),
                    twig.forEach(a, (function(n, a) {
                        i.field_id_and_type = a,
                        i.field = n,
                        twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "fields"), "field_id_and_type"in i ? i.field_id_and_type : "", void 0, "array") || twig.attr("field"in i ? i.field : "", "disabled") || new (e._get("interface/common/amoforms/field_block.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)),
                    t.append("</div>"),
                    t.append('<div id="amoforms_form_footer"><div class="amoforms-submit-button-wrapper amoforms-submit-button-wrapper-noedit" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "bg_color") || "#0074D9", "light_escape", null, !0)),
                    t.append(';"><input name="settings[buttons][submit][label]" style="color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "font_color") || "#ffffff", "light_escape", null, !0)),
                    t.append(';" type="text" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "label") || twig.attr("lang"in i ? i.lang : "", "amoforms_button_form_submit"), "light_escape", null, !0)),
                    t.append('"><i class="icon amoform-pencil-white"></i></div>'),
                    t.append('<div id="amoforms_button-submit_controls"><div id="amoforms_button-submit_background-color-block" >'),
                    t.append('<span>Background</span><div class="amoforms-button-color color-box" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_btn_color"), "light_escape", null, !0)),
                    t.append('" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "bg_color") || "#0074D9", "light_escape", null, !0)),
                    t.append(' ;"></div>'),
                    i.color_items = [],
                    i._parent = i,
                    a = "colors"in i ? i.colors : "",
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.color = e,
                        i.text_color = '<span data-color="' + ("color"in i ? i.color : "") + '" style="background-color: ' + ("color"in i ? i.color : "") + '">&nbsp;</span>',
                        i.color_item = {
                            text: "text_color"in i ? i.text_color : "",
                            should_be_raw: !0,
                            class_name: "amoforms-pallete-color-block",
                            additional_data: 'data-status-id="' + ("status_html_id"in i ? i.status_html_id : "") + '"'
                        },
                        i.color_items = twig.filter.merge("color_items"in i ? i.color_items : "", ["color_item"in i ? i.color_item : ""])
                    }
                    ), this),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: ("status_html_id"in i ? i.status_html_id : "") + "-amofomrs-bg-color-palette",
                        class_name: "amofomrs-bg-color-palette",
                        items: "color_items"in i ? i.color_items : ""
                    })),
                    t.append("</div>"),
                    t.append('<div id="amoforms_button-submit_color-block" ><span>Color</span><div class="amoforms-font-color color-box" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_btn_font_color"), "light_escape", null, !0)),
                    t.append('" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "font_color"), "light_escape", null, !0)),
                    t.append(' ;"></div>'),
                    i.color_items = [],
                    i._parent = i,
                    a = "colors"in i ? i.colors : "",
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.color = e,
                        i.text_color = '<span data-color="' + ("color"in i ? i.color : "") + '" style="background-color: ' + ("color"in i ? i.color : "") + '">&nbsp;</span>',
                        i.color_item = {
                            text: "text_color"in i ? i.text_color : "",
                            should_be_raw: !0,
                            class_name: "amoforms-pallete-color-font-block",
                            additional_data: 'data-status-id="' + ("status_html_id"in i ? i.status_html_id : "") + '"'
                        },
                        i.color_items = twig.filter.merge("color_items"in i ? i.color_items : "", ["color_item"in i ? i.color_item : ""])
                    }
                    ), this),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: ("status_html_id"in i ? i.status_html_id : "") + "-amofomrs-bg-color-palette",
                        class_name: "amofomrs-bg-color-palette",
                        items: "color_items"in i ? i.color_items : ""
                    })),
                    t.append('</div></div></div></div>\x3c!-- amoforms_work-area --\x3e<input type="hidden" name="settings[sidebar]" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "sidebar"), "light_escape", null, !0)),
                    t.append('" id="amoforms-input-setting-right-sidebar"><input type="hidden" name="settings[logo][type]"  id="amoforms-input-setting-logo-type"  value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "logo"), "type"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="settings[buttons][submit][font_color]" id="amoforms-button-submit-font-color" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "font_color") || "#FFFFFF", "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="settings[buttons][submit][bg_color]"id="amoforms-button-submit-bg-color"value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "buttons"), "submit"), "bg_color") || "#0074D9", "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="action" value="APPLY_CHANGES"/><input type="hidden" name="AJAX_MODE" value="Y"/>'),
                    t.append('<div id="amoforms-creation-result-div"><div id="amoforms-embed-code-div"><p><a id="amoforms-embed-page" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "page"), "light_escape", null, !0)),
                    t.append('" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_demonstration"), "light_escape", null, !0)),
                    t.append('</a></p><p><a class="amoforms-dop-settings-info-link" href="#">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_additional_information"), "light_escape", null, !0)),
                    t.append('</a></p><p><a id="d_clip_button" href="#copy">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_copy_and_past_this_code"), "light_escape", null, !0)),
                    t.append('</a></p><div id="amoforms-tip_copy-complete" class="tips js-tip">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_form_code_copied"), "light_escape", null, !0)),
                    t.append('</div><textarea id="amoforms-embed-code-text" readonly></textarea><p><a id="d_short_clip_button" href="#copy">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_copy_and_past_short_code"), "light_escape", null, !0)),
                    t.append('</a></p><div id="amoforms-short-tip_copy-complete" class="tips js-tip">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_form_code_copied"), "light_escape", null, !0)),
                    t.append('</div><textarea id="amoforms-short-code-text" readonly></textarea></div></div><div class="clear"></div></div> '),
                    t.append('<div id="amoforms_dop_settings_wrapper"><div id="amoforms_dop_settings" ><div class="amofroms_setting_panel_toggler"><i class="icon icon-amoforms-setting"></i>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_sidebar"), "light_escape", null, !0)),
                    t.append('</div><div class="amoforms_setting_panel">'),
                    t.append('<div class="amoforms_setting_panel-col50">'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-add_to_unsorted"><label class="amoforms-checkbox control-checkbox"><input type="checkbox" name="settings[add_to_unsorted]" id="amoforms_settings_add_to_unsorted" value="y" '),
                    t.append("unsorted_is_enabled"in i && i.unsorted_is_enabled ? "checked" : ""),
                    t.append('><span class="control-checkbox__helper"></span></label><label for="amoforms_settings_add_to_unsorted">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_add_to_unsorted"), "light_escape", null, !0)),
                    t.append('</label><div class="clear"></div></div>'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-lead_status amoforms_element_not_for_unsorted '),
                    t.append("unsorted_is_enabled"in i && i.unsorted_is_enabled ? "disabled" : ""),
                    t.append('"><label for="amoforms_settings_leadstatus" class="amoforms_dop_setting-lead_status without_float">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_lead_status"), "light_escape", null, !0)),
                    t.append("</label>"),
                    twig.attr("params"in i ? i.params : "", "has_pipelines") ? (i.template_params = twig.filter.merge("template_params"in i ? i.template_params : "", {
                        selected_pipeline_id: twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "lead_pipe"),
                        selected: twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "lead_status")
                    }),
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, "template_params"in i ? i.template_params : "")) : (i.template_params = twig.filter.merge("template_params"in i ? i.template_params : "", {
                        name: "settings[lead_status]"
                    }, {
                        item_id: "amoforms_settings_leadstatus"
                    }),
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, "template_params"in i ? i.template_params : "")),
                    t.append("</div>"),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-response_user without_float amoforms_element_not_for_unsorted  '),
                    t.append("unsorted_is_enabled"in i && i.unsorted_is_enabled ? "disabled" : ""),
                    t.append('"><label for="amoforms_settings_responseuser" class="amoforms_dop_setting-response_user without_float">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_response_user"), "light_escape", null, !0)),
                    t.append('</label><div class="amoforms-users_select_holder">'),
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: [twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "items"), twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "selected"), void 0, "array")],
                        class_name: "amoforms_settings__users-select",
                        id: "amoforms_dop_setting-responseuser",
                        input_name: "response_user_id"
                    })),
                    t.append("</div></div>"),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-create_task amoforms_element_not_for_unsorted '),
                    t.append("unsorted_is_enabled"in i && i.unsorted_is_enabled ? "disabled" : ""),
                    t.append('"><label class="amoforms-checkbox control-checkbox"><input type="checkbox" name="settings[create_task]" id="amoforms_settings_createtask" value="y" '),
                    t.append("y" == twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "create_task") ? "checked" : ""),
                    t.append('><span class="control-checkbox__helper"></span></label><label for="amoforms_settings_createtask">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_create_task"), "light_escape", null, !0)),
                    t.append('</label><div class="clear"></div></div>'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-add_tags"><div class="amoforms_dop_setting-add_tags-wrap">'),
                    t.append('<input type="hidden" name="settings[tags_enabled]" id="amoforms_settings_add_tags" value="y"></div><div id="amoforms_settings_add_tags_container"><div id="add_tags" class="amoforms_card-top-name__add-tags-label">'),
                    new (e._get("interface/common/fast_tags/fast_tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        can_add: !0,
                        items: twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "tags")
                    })),
                    t.append('</div><input type="hidden" name="tags" id="card_tags"></div><div class="clear"></div></div>'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-success_message"><label for="amoforms_settings_successmesage" class="amoforms_dop_setting-success_message without_float">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_success_message_title"), "light_escape", null, !0)),
                    t.append('</label><div class="control-wrapper control--value-wrapper control--textarea" data-type="textarea"><textarea name="settings[success_message]" id="amoforms_settings_successmesage" class="control--textarea--input text-input" placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_success_message"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "success_message"), "light_escape", null, !0)),
                    t.append('</textarea></div><div class="clear"></div></div></div>'),
                    t.append('<div class="amoforms_setting_panel-col50">'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-ga"><label class="amoforms-checkbox control-checkbox"><input type="checkbox" name="settings[ga]" id="amoforms_settings_ga" value="y" '),
                    t.append("y" == twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "ga") ? "checked" : ""),
                    t.append('><span class="control-checkbox__helper"></span></label><label for="amoforms_settings_ga">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_ga"), "light_escape", null, !0)),
                    t.append('</label><div class="clear"></div></div>'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-modal_form"><label class="amoforms-checkbox control-checkbox"><input type="checkbox" name="settings[modal_form]" id="amoforms_settings_modalform" value="y" '),
                    t.append("y" == twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "modal_form") ? "checked" : ""),
                    t.append('><span class="control-checkbox__helper"></span></label><label for="amoforms_settings_modalform">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_modal_form"), "light_escape", null, !0)),
                    t.append('</label><div class="clear"></div></div>'),
                    t.append('<div class="amoforms_dop_setting amoforms_dop_setting-custom_css"><label for="amoforms_settings_customcss" class="amoforms_dop_setting-custom_css without_float">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_custom_css_title"), "light_escape", null, !0)),
                    t.append('</label><div class="control-wrapper control--value-wrapper" data-type="textarea"><textarea name="css" rows="1" id="amoforms_settings_customcss" class="text-input" placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_custom_css"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "css"), "light_escape", null, !0)),
                    t.append('</textarea></div><div class="clear"></div></div></div><div class="clear"></div></div></div></div></form>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_edit_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/edit_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.field_html_name = "fields[" + ("field_id_and_type"in i ? i.field_id_and_type : "") + "]",
                    t.append('<div class="amoforms_field_block '),
                    t.append(twig.attr("field"in i ? i.field : "", "sort") || "new_form"in i && i.new_form ? "" : "amoforms_field_block-unselected"),
                    t.append('">'),
                    "view" != ("view_mode"in i ? i.view_mode : "") && t.append('<div class="amoforms-cd_dots_wrapper"><span class="cf_dots icon icon-v-dots "></span></div>'),
                    t.append('<div class="amoforms-left-side-wrapper-form">'),
                    i.element_type_name = twig.attr("lang"in i ? i.lang : "", "amoforms_entity_" + twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "field_id_and_type"in i ? i.field_id_and_type : "", void 0, "array"), "element_type")),
                    t.append('<div class="field-name-original" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "field_id_and_type"in i ? i.field_id_and_type : "", void 0, "array"), "name"), "light_escape", null, !0)),
                    t.append(" "),
                    "element_type_name"in i && i.element_type_name && (t.append("("),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append(")")),
                    t.append('"><span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "field_id_and_type"in i ? i.field_id_and_type : "", void 0, "array"), "name"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    "element_type_name"in i && i.element_type_name && (t.append('<span class="field-name-original-entity">('),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append(")</span>")),
                    t.append("</div>"),
                    "view" != ("view_mode"in i ? i.view_mode : "") && (t.append('<div class="amoforms_checkbox_selection-wrapper"><label class="amoforms_checkbox_selection amoforms_checkbox_toform" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_field_disable"), "light_escape", null, !0)),
                    t.append('"><input type="checkbox" class="amoforms_checkbox_selection-field" value="on" '),
                    t.append(twig.attr("field"in i ? i.field : "", "sort") || "new_form"in i && i.new_form ? 'checked="checked"' : ""),
                    t.append(' name="'),
                    t.append(twig.filter.escape(this.env_, ("field_html_name"in i ? i.field_html_name : "") + "[is_selected]", "light_escape", null, !0)),
                    t.append('"><span class="icon amoforms_checkbox__helper '),
                    t.append(twig.attr("field"in i ? i.field : "", "sort") || "new_form"in i && i.new_form ? "icon-amoform-checkbox-inform" : "icon-amoform-checkbox-hide"),
                    t.append('"></span></label></div>')),
                    t.append('</div><div class="amoforms_field_in-form_wrapper">'),
                    "view" != ("view_mode"in i ? i.view_mode : "") && (t.append('<div class="amoforms-field-name-wrapper"><input class="amoforms_field-name_in-form text-input" type="text" placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_field_name"), "light_escape", null, !0)),
                    t.append('" name="'),
                    t.append(twig.filter.escape(this.env_, ("field_html_name"in i ? i.field_html_name : "") + "[name]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('" maxlength="255" autocomplete="off"><span class="amoform-icon-pencil icon icon-pencil" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_pencil_edit"), "light_escape", null, !0)),
                    t.append('"></span><span class="amoforoms-field-name_required '),
                    t.append("y" == twig.attr("field"in i ? i.field : "", "required") ? "" : "hide"),
                    t.append('">*</span></div>')),
                    "view" == ("view_mode"in i ? i.view_mode : "") && (t.append('<label for="'),
                    t.append(twig.filter.escape(this.env_, "field_html_name"in i ? i.field_html_name : "", "light_escape", null, !0)),
                    t.append('" class="amoforms-view-input">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    "y" == twig.attr("field"in i ? i.field : "", "required") && t.append('<span class="amoforms_iframe_field-required">*</span>'),
                    t.append("</label>")),
                    t.append('<div class="amoforms_field_options_in-form"><div class="amoforms_field-preview_wrapper">'),
                    new (e._get("interface/common/amoforms/field_preview.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    "view" != ("view_mode"in i ? i.view_mode : "") && (t.append('<div class="amoforms_required-field_wrapper">'),
                    t.append('<div class="amoforms-checkbox-wrapper">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: ("field_html_name"in i ? i.field_html_name : "") + "[required]",
                        id: ("field_html_name"in i ? i.field_html_name : "") + "[required]",
                        checked: "y" == twig.attr("field"in i ? i.field : "", "required"),
                        value: "on",
                        class_name: "amoforms_checkbox_required"
                    })),
                    t.append('<label for="'),
                    t.append(twig.filter.escape(this.env_, ("field_html_name"in i ? i.field_html_name : "") + "[required]", "light_escape", null, !0)),
                    t.append('" class="required-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_required_field"), "light_escape", null, !0)),
                    t.append("</label></div></div>")),
                    t.append("</div></div></div>\x3c!-- /amoforms_field_block --\x3e")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_field_block"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/field_block", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    "numeric" == twig.attr("field"in t ? t.field : "", "type"))
                        e.append('<input type="text" id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('" class="amoforms-validate_number text-input '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : " "),
                        e.append('">');
                    else if ("checkbox" == twig.attr("field"in t ? t.field : "", "type"))
                        e.append('<div class="amoforms-checkbox-wrapper"><label class="amoforms-checkbox "><input type="checkbox" id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('" class="'),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : " "),
                        e.append('"></label></div>');
                    else if ("multiselect" == twig.attr("field"in t ? t.field : "", "type")) {
                        e.append('<label for="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']"><select class="amoforms-input-multiselect '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : " "),
                        e.append('" id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, ("field_html_name"in t ? t.field_html_name : "") + "[]", "light_escape", null, !0)) : e.append(""),
                        e.append('" multiple>'),
                        t._parent = t;
                        var n = twig.attr("field"in t ? t.field : "", "enums");
                        twig.forEach(n, (function(i, n) {
                            t.enum_id = n,
                            t.enum = i,
                            e.append('<option value="'),
                            e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "option"), "light_escape", null, !0)),
                            e.append("</option>")
                        }
                        ), this),
                        e.append("</select></label>")
                    } else if ("select" == twig.attr("field"in t ? t.field : "", "type"))
                        e.append('<label  for="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']"><select class="amoforms-input-select '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append('" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('" id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append("]\"><option value=''>...</option>"),
                        t._parent = t,
                        n = twig.attr("field"in t ? t.field : "", "enums"),
                        twig.forEach(n, (function(i, n) {
                            t.enum_id = n,
                            t.enum = i,
                            e.append('<option value="'),
                            e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "option"), "light_escape", null, !0)),
                            e.append("</option>")
                        }
                        ), this),
                        e.append("</select></label>");
                    else if ("date" == twig.attr("field"in t ? t.field : "", "type"))
                        e.append('<input class="amoform-input-pikaday text-input '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append('" id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" type="text" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('" value="" placeholder="">');
                    else if ("url" == twig.attr("field"in t ? t.field : "", "type"))
                        e.append('<input type="text" id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" class="text-input '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append('" placeholder="http://..." name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('">');
                    else if ("multitext" == twig.attr("field"in t ? t.field : "", "type")) {
                        if (e.append('<input id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" type="text" class="text-input '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append(" "),
                        e.append("email" == twig.attr("field"in t ? t.field : "", "validation_type") ? "amoforms-validate_email" : ""),
                        e.append('" placeholder="'),
                        e.append("email" == twig.attr("field"in t ? t.field : "", "validation_type") ? "mail@example.com" : ""),
                        "phone" == twig.attr("field"in t ? t.field : "", "validation_type") ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "amoforms_placeholder_phone"), "light_escape", null, !0)) : e.append(""),
                        e.append('" '),
                        "view_mode"in t && t.view_mode) {
                            e.append(' name="'),
                            e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                            e.append("["),
                            t._parent = t,
                            n = twig.filter.keys(twig.attr("field"in t ? t.field : "", "enums"));
                            var a = {
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(n)) {
                                var s = twig.count(n);
                                a.revindex0 = s - 1,
                                a.revindex = s,
                                a.length = s,
                                a.last = 1 === s
                            }
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.enum_id = i,
                                twig.attr(a, "first") ? e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)) : e.append(""),
                                ++a.index0,
                                ++a.index,
                                a.first = !1,
                                a.length && (--a.revindex0,
                                --a.revindex,
                                a.last = 0 === a.revindex0)
                            }
                            ), this),
                            e.append(']" ')
                        }
                        e.append(">")
                    } else
                        "textarea" == twig.attr("field"in t ? t.field : "", "type") ? (e.append('<textarea class="amoforms-textarea text-input text-input-textarea '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append('" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('"></textarea>')) : "radiobutton" == twig.attr("field"in t ? t.field : "", "type") ? (e.append('<div class="amofomrs-radio-container '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : " "),
                        e.append('">'),
                        t._parent = t,
                        n = twig.attr("field"in t ? t.field : "", "enums"),
                        twig.forEach(n, (function(i, n) {
                            t.enum_id = n,
                            t.enum = i,
                            e.append('<label class="amoforms-radiobutton" '),
                            e.append('><input type="radio" name="'),
                            e.append(twig.filter.escape(this.env_, "view_mode"in t && t.view_mode ? "field_html_name"in t ? t.field_html_name : "" : "tmp[" + ("field_html_name"in t ? t.field_html_name : "") + "]", "light_escape", null, !0)),
                            e.append('" class="fields['),
                            e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                            e.append(']" value="'),
                            e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)),
                            e.append('"> '),
                            e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "option"), "light_escape", null, !0)),
                            e.append("</label>")
                        }
                        ), this),
                        e.append("</div>")) : "streetaddress" == twig.attr("field"in t ? t.field : "", "type") ? (e.append('<textarea id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" class="amoforms-textarea text-input text-input-textarea '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append('" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('"></textarea>')) : "smart_address" == twig.attr("field"in t ? t.field : "", "type") ? (t._parent = t,
                        n = twig.attr("field"in t ? t.field : "", "sub_types"),
                        twig.forEach(n, (function(i, n) {
                            if (t.subtype_name = n,
                            t.subtype_options = i,
                            "country" == ("subtype_name"in t ? t.subtype_name : "")) {
                                e.append('<label  for="fields['),
                                e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                e.append(']"><select class="amoforms-input-subtype amoforms-input-select '),
                                e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                                e.append('" name="'),
                                "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                                e.append("["),
                                e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                e.append(']" id="fields['),
                                e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                                e.append("]["),
                                e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                e.append("]\"><option value=''>"),
                                e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                e.append("</option>");
                                var a = twig.attr("subtype_options"in t ? t.subtype_options : "", "variants");
                                twig.forEach(a, (function(i, n) {
                                    t.country_id = n,
                                    t.country_name = i,
                                    e.append('<option value="'),
                                    e.append(twig.filter.escape(this.env_, "country_id"in t ? t.country_id : "", "light_escape", null, !0)),
                                    e.append('">'),
                                    e.append(twig.filter.escape(this.env_, "country_name"in t ? t.country_name : "", "light_escape", null, !0)),
                                    e.append("</option>")
                                }
                                ), this),
                                e.append("</select></label>")
                            } else
                                "zip" == ("subtype_name"in t ? t.subtype_name : "") ? (e.append('<input type="text" id="fields['),
                                e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                                e.append("]["),
                                e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                e.append(']" name="'),
                                "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                                e.append("["),
                                e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                e.append(']" class="amoforms-input-subtype amoforms-validate_number text-input '),
                                e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : " "),
                                e.append('" placeholder="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                e.append('">')) : (e.append('<input id="fields['),
                                e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                                e.append("]["),
                                e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                e.append(']" type="text" name="'),
                                "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                                e.append("["),
                                e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                e.append(']" class="amoforms-input-subtype text-input '),
                                e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                                e.append('" placeholder="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                e.append('">'))
                        }
                        ), this)) : (e.append('<input id="fields['),
                        e.append(twig.filter.escape(this.env_, "field_id_and_type"in t ? t.field_id_and_type : "", "light_escape", null, !0)),
                        e.append(']" type="text" name="'),
                        "view_mode"in t && t.view_mode ? e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)) : e.append(""),
                        e.append('" class="text-input '),
                        e.append("y" == twig.attr("field"in t ? t.field : "", "required") ? "amoforms-validate_required" : ""),
                        e.append(" "),
                        e.append("email" == twig.attr("field"in t ? t.field : "", "validation_type") ? "amoforms-validate_email" : ""),
                        e.append('" placeholder="'),
                        e.append("email" == twig.attr("field"in t ? t.field : "", "validation_type") ? "mail@amocrm.com" : ""),
                        e.append('">'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_field_preview"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/field_preview", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="amoforms_inner_modal"><div class="amoforms_inner_modal-content"><p>'),
                    e.append(twig.attr("lang"in t ? t.lang : "", "amoforms_modal_intro")),
                    e.append('<p class="amoforms_modal__header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "amoforms_modal_create_and_edit_header"), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.attr("lang"in t ? t.lang : "", "amoforms_modal_create_and_edit")),
                    e.append('<p class="amoforms_modal__header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "amoforms_modal_amoCRM_settings_header"), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.attr("lang"in t ? t.lang : "", "amoforms_modal_amoCRM_settings")),
                    e.append('<p class="amoforms_modal__header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "amoforms_modal_site_settings_header"), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.attr("lang"in t ? t.lang : "", "amoforms_modal_site_settings")),
                    e.append('<p class="amoforms_modal__header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "amoforms_modal_google_analytics_header"), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.attr("lang"in t ? t.lang : "", "amoforms_modal_google_analytics")),
                    e.append('<p class="amoforms_modal__header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "amoforms_modal_goal_settings_header"), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.attr("lang"in t ? t.lang : "", "amoforms_modal_goal_settings")),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_inner_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/inner_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    e.append('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Form</title><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"><link rel="stylesheet" href="/forms/assets/css/system_iframe.css"></head><body><div class="outer-form-box"><form action="'),
                    e.append(twig.filter.escape(this.env_, "form_server"in t ? t.form_server : "", "light_escape", null, !0)),
                    e.append('/queue/add" method="post" class="outer-form">'),
                    "text" == twig.attr(twig.attr(twig.attr("form"in t ? t.form : "", "settings"), "logo"), "type") && (e.append('<h1 class="outer-form__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("form"in t ? t.form : "", "name"), "light_escape", null, !0)),
                    e.append("</h1>")),
                    e.append('<input type="hidden" name="form_id" id="form_id" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("form"in t ? t.form : "", "id"), "light_escape", null, !0)),
                    e.append('"><input type="hidden" name="hash" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("form"in t ? t.form : "", "hash"), "light_escape", null, !0)),
                    e.append('"><input type="hidden" name="user_origin" id="user_origin" value="" /><input type="hidden" id="amoform_iframe_lang" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("form"in t ? t.form : "", "settings"), "language"), "light_escape", null, !0)),
                    e.append('">'),
                    twig.attr(twig.attr("form"in t ? t.form : "", "settings"), "ga")) {
                        t._parent = t;
                        var n = "ga_fields"in t ? t.ga_fields : "";
                        twig.forEach(n, (function(i, n) {
                            t.field_id_and_type = n,
                            t.field = i,
                            e.append('<input type="hidden" name="fields['),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "id"), "light_escape", null, !0)),
                            e.append("_"),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "element_type"), "light_escape", null, !0)),
                            e.append(']" id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "dom_id"), "light_escape", null, !0)),
                            e.append('" value="" />')
                        }
                        ), this)
                    }
                    t._parent = t,
                    n = twig.attr("form"in t ? t.form : "", "fields"),
                    twig.forEach(n, (function(i, n) {
                        if (t.field_id_and_type = n,
                        t.field = i,
                        !twig.attr("field"in t ? t.field : "", "disabled")) {
                            if (e.append('<div class="outer-form__row">'),
                            t.field_html_name = "fields[" + ("field_id_and_type"in t ? t.field_id_and_type : "") + "]",
                            t.required_field = "y" == twig.attr("field"in t ? t.field : "", "required") ? '<span class="amoforms_iframe_field-required">&nbsp;*</span>' : "",
                            "radiobutton" == twig.attr("field"in t ? t.field : "", "type")) {
                                e.append('<p class="outer-form__label">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</p>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append("<div "),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append('class="amoforms-validate_required"'),
                                e.append(">");
                                var a = twig.attr("field"in t ? t.field : "", "enums");
                                twig.forEach(a, (function(i, n) {
                                    t.enum_id = n,
                                    t.enum = i,
                                    e.append('<div class="outer-form__switch outer-form__switch--radio"><label class="outer-form__switch-label"><input class="outer-form__switch-input '),
                                    e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                    e.append('" type="radio" name="'),
                                    e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                    e.append('" value="'),
                                    e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)),
                                    e.append('">'),
                                    e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "option"), "light_escape", null, !0)),
                                    e.append("</label></div>")
                                }
                                ), this),
                                e.append("</div>")
                            } else if ("checkbox" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<div class="outer-form__switch"><label class="outer-form__switch-label"><input type="checkbox" class="outer-form__switch-input '),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append('"id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append("</div>");
                            else if ("multiselect" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<div class="outer-form__select"><select class="outer-form__field outer-form__field--select'),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append('" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('[]" multiple>'),
                                a = twig.attr("field"in t ? t.field : "", "enums"),
                                twig.forEach(a, (function(i, n) {
                                    t.enum_id = n,
                                    t.enum = i,
                                    e.append('<option value="'),
                                    e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)),
                                    e.append('">'),
                                    e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "option"), "light_escape", null, !0)),
                                    e.append("</option>")
                                }
                                ), this),
                                e.append("</select></div>");
                            else if ("select" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<div class="outer-form__select"><select class="outer-form__field outer-form__field--select'),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append("\"><option value=''>...</option>"),
                                a = twig.attr("field"in t ? t.field : "", "enums"),
                                twig.forEach(a, (function(i, n) {
                                    t.enum_id = n,
                                    t.enum = i,
                                    e.append('<option value="'),
                                    e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)),
                                    e.append('">'),
                                    e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "option"), "light_escape", null, !0)),
                                    e.append("</option>")
                                }
                                ), this),
                                e.append("</select></div>");
                            else if ("textarea" == twig.attr("field"in t ? t.field : "", "type") || "streetaddress" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<textarea class="outer-form__field outer-form__field--textarea'),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append('" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('"></textarea>');
                            else if ("smart_address" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<p class="outer-form__label">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</p>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                a = twig.attr("field"in t ? t.field : "", "sub_types"),
                                twig.forEach(a, (function(i, n) {
                                    if (t.subtype_name = n,
                                    t.subtype_options = i,
                                    "country" == ("subtype_name"in t ? t.subtype_name : "")) {
                                        e.append('<label class="outer-form__label" for="fields['),
                                        e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                        e.append(']"><select class="outer-form__field outer-form__field--select '),
                                        "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                        e.append('"id="'),
                                        e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                        e.append("["),
                                        e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                        e.append(']" name="'),
                                        e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                        e.append("["),
                                        e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                        e.append("]\"><option value=''>"),
                                        e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                        e.append("</option>");
                                        var a = twig.attr("subtype_options"in t ? t.subtype_options : "", "variants");
                                        twig.forEach(a, (function(i, n) {
                                            t.country_id = n,
                                            t.country_name = i,
                                            e.append('<option value="'),
                                            e.append(twig.filter.escape(this.env_, "country_id"in t ? t.country_id : "", "light_escape", null, !0)),
                                            e.append('">'),
                                            e.append(twig.filter.escape(this.env_, "country_name"in t ? t.country_name : "", "light_escape", null, !0)),
                                            e.append("</option>")
                                        }
                                        ), this),
                                        e.append("</select></label>")
                                    } else
                                        "zip" == ("subtype_name"in t ? t.subtype_name : "") ? (e.append('<input class="outer-form__field outer-form__field--input amoforms-validate_number '),
                                        "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                        e.append('"type="text" id="'),
                                        e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                        e.append("["),
                                        e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                        e.append(']" name="'),
                                        e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                        e.append("["),
                                        e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                        e.append(']" placeholder="'),
                                        e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                        e.append('">')) : (e.append('<input class="outer-form__field outer-form__field--input '),
                                        "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                        e.append('"type="text" id="'),
                                        e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                        e.append("["),
                                        e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                        e.append(']" name="'),
                                        e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                        e.append("["),
                                        e.append(twig.filter.escape(this.env_, "subtype_name"in t ? t.subtype_name : "", "light_escape", null, !0)),
                                        e.append(']" placeholder="'),
                                        e.append(twig.filter.escape(this.env_, twig.attr("subtype_options"in t ? t.subtype_options : "", "title"), "light_escape", null, !0)),
                                        e.append('">'))
                                }
                                ), this);
                            else if ("numeric" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<input class="outer-form__field outer-form__field--input'),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append(' amoforms-validate_number"type="text" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">');
                            else if ("date" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<input class="outer-form__field outer-form__field--input amoform-input-pikaday '),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append('"type="text" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" value="" placeholder="">');
                            else if ("url" == twig.attr("field"in t ? t.field : "", "type"))
                                e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<input class="outer-form__field outer-form__field--input '),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                e.append('"type="text" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" placeholder="http://...">');
                            else {
                                if (e.append('<label class="outer-form__label" for="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</label>"),
                                e.append("required_field"in t ? t.required_field : ""),
                                e.append('<input class="outer-form__field outer-form__field--input'),
                                "y" == twig.attr("field"in t ? t.field : "", "required") && e.append("amoforms-validate_required"),
                                "email" == twig.attr("field"in t ? t.field : "", "validation_type") && e.append("amoforms-validate_email"),
                                e.append('"type="text" id="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                e.append('" name="'),
                                e.append(twig.filter.escape(this.env_, "field_html_name"in t ? t.field_html_name : "", "light_escape", null, !0)),
                                twig.attr("field"in t ? t.field : "", "enums")) {
                                    e.append("["),
                                    a = twig.filter.keys(twig.attr("field"in t ? t.field : "", "enums"));
                                    var s = {
                                        parent: loop,
                                        index0: 0,
                                        index: 1,
                                        first: !0
                                    };
                                    if (twig.countable(a)) {
                                        var p = twig.count(a);
                                        s.revindex0 = p - 1,
                                        s.revindex = p,
                                        s.length = p,
                                        s.last = 1 === p
                                    }
                                    twig.forEach(a, (function(i, n) {
                                        t._key = n,
                                        t.enum_id = i,
                                        twig.attr(s, "first") ? e.append(twig.filter.escape(this.env_, "enum_id"in t ? t.enum_id : "", "light_escape", null, !0)) : e.append(""),
                                        ++s.index0,
                                        ++s.index,
                                        s.first = !1,
                                        s.length && (--s.revindex0,
                                        --s.revindex,
                                        s.last = 0 === s.revindex0)
                                    }
                                    ), this),
                                    e.append("]")
                                }
                                e.append('" placeholder="'),
                                e.append("email" == twig.attr("field"in t ? t.field : "", "validation_type") ? "mail@amocrm.com" : ""),
                                e.append('">')
                            }
                            e.append("</div>")
                        }
                    }
                    ), this),
                    e.append('<div class="outer-form__row outer-form__row--btn"><button id="button_submit" class="outer-form__btn" type="submit">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("form"in t ? t.form : "", "settings"), "buttons"), "submit"), "label"), "light_escape", null, !0)),
                    e.append('</button></div><div class="amoforms-footer-modal-push"></div></form></div></body><script>var form_type_gso = true;<\/script><script src="/forms/assets/js/pikaday/pikaday.js" type="text/javascript"><\/script><script src="/forms/assets/js/amoforms_iframe.js" type="text/javascript"><\/script></html>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_system_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/system_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<!DOCTYPE html><html><head><meta charset="utf-8" /><link rel="stylesheet" href="/forms/assets/css/iframe.css" type="text/css" />'),
                    twig.filter.length(this.env_, twig.filter.trim(twig.attr("form"in i ? i.form : "", "css"))) > 0 && (t.append('<link rel="stylesheet" type="text/css" href="/forms/css/form_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("form"in i ? i.form : "", "id"), "light_escape", null, !0)),
                    t.append("_"),
                    t.append(twig.filter.escape(this.env_, twig.attr("form"in i ? i.form : "", "hash"), "light_escape", null, !0)),
                    t.append('.css" />')),
                    t.append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></head><body><div id="amofroms_main_wrapper"><form id="amoforms_form" class="amoforms-form amoforms-view-form" action="'),
                    t.append(twig.filter.escape(this.env_, "form_server"in i ? i.form_server : "", "light_escape", null, !0)),
                    t.append('/queue/add" method="post">'),
                    "image" == twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "logo"), "type") && "" != twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "logo"), "value") ? (t.append('<div id="amoforms_logo"><img src="/forms/img/logo/'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "logo"), "value"), "light_escape", null, !0)),
                    t.append("?time="),
                    t.append(twig.filter.escape(this.env_, "time"in i ? i.time : "", "light_escape", null, !0)),
                    t.append('" alt="logo"></div>')) : "text" == twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "logo"), "type") ? (t.append('<div id="amoforms_logo_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("form"in i ? i.form : "", "name"), "light_escape", null, !0)),
                    t.append("</div>")) : t.append('<div id="amoforms_logo"><img src="/forms/img/amocrm_logo_gray.png" alt="logo"></div>'),
                    i._parent = i;
                    var a = twig.attr("form"in i ? i.form : "", "fields")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var p = twig.count(a);
                        s.revindex0 = p - 1,
                        s.revindex = p,
                        s.length = p,
                        s.last = 1 === p
                    }
                    twig.forEach(a, (function(n, a) {
                        i.field_id_and_type = a,
                        i.field = n,
                        twig.attr("field"in i ? i.field : "", "disabled") || new (e._get("interface/common/amoforms/field_block.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('<input type="hidden" name="form_id" id="form_id" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("form"in i ? i.form : "", "id"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="hash" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("form"in i ? i.form : "", "hash"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" name="user_origin" id="user_origin" value="" />'),
                    twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "ga") && (i._parent = i,
                    a = "ga_fields"in i ? i.ga_fields : "",
                    twig.forEach(a, (function(e, n) {
                        i.field_id_and_type = n,
                        i.field = e,
                        t.append('<input type="hidden" name="fields['),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "id"), "light_escape", null, !0)),
                        t.append("_"),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "element_type"), "light_escape", null, !0)),
                        t.append(']" id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "dom_id"), "light_escape", null, !0)),
                        t.append('" value="" />')
                    }
                    ), this)),
                    t.append('<div id="button_submit_wrapper" style="background-color: '),
                    twig.attr(twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "buttons"), "submit"), "bg_color") ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "buttons"), "submit"), "bg_color"), "light_escape", null, !0)) : t.append("#ffffff"),
                    t.append(';"><buttonstyle="color: '),
                    twig.attr(twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "buttons"), "submit"), "font_color") ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "buttons"), "submit"), "font_color"), "light_escape", null, !0)) : t.append("#ffffff"),
                    t.append(';" type="submit"id="button_submit"class="">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "buttons"), "submit"), "label"), "light_escape", null, !0)),
                    t.append('</button></div><div class="amoforms-footer-modal-push"></div>'),
                    "show_copyright"in i && i.show_copyright && (t.append('<div class="amoforms-footer-copyright"><p>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "amoforms_powered_by"), "light_escape", null, !0)),
                    t.append(' <a target="_blank" href="https://'),
                    t.append(twig.filter.escape(this.env_, "base_host"in i ? i.base_host : "", "light_escape", null, !0)),
                    t.append('/?utm_source=forms&utm_medium=client&utm_campaign=forms"><img src="/forms/img/view-small-logo.png" alt="logo"></a></p></div>')),
                    t.append('<input type="hidden" id="amoform_iframe_lang" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("form"in i ? i.form : "", "settings"), "language"), "light_escape", null, !0)),
                    t.append('"></form> \x3c!-- /amoform-form --\x3e</div><div style="height: 20px; width:100%;"><br></div></body><script src="/forms/assets/js/pikaday/pikaday.js" type="text/javascript"><\/script><script src="/forms/assets/js/amoforms_iframe.js" type="text/javascript"><\/script></html>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_view_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/view_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner welcome-amoform-wrapper"><h2 class="modal-body__caption head_2" style="width: 100%">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_caption"), "light_escape", null, !0)),
                    t.append('</h2><div class="welcome-amoform"><ul class="welcome-amoform__list"><li class="welcome-amoform__list__item"><span class="welcome-amoform__icon welcome-amoform__icon-code"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis1_insert"), "light_escape", null, !0)),
                    t.append(' <span id="welcome_amoform_copy_code" class="welcome-amoform__list__item__code blue-link local-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis1_form_code"), "light_escape", null, !0)),
                    t.append("<b>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis1_copied"), "light_escape", null, !0)),
                    t.append("</b></span> "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis1_to_your_site"), "light_escape", null, !0)),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("form"in i ? i.form : "", "page"), "light_escape", null, !0)),
                    t.append('" target="_blank" class="blue-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis1_ready_page"), "light_escape", null, !0)),
                    t.append('</a></li><li class="welcome-amoform__list__item"><span class="welcome-amoform__icon welcome-amoform__icon-lead"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis2"), "light_escape", null, !0)),
                    t.append('</li><li class="welcome-amoform__list__item"><span class="welcome-amoform__icon welcome-amoform__icon-settings"></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis3_part1"), "light_escape", null, !0)),
                    t.append(' <span class="blue-link local-link js-form-settings">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form_thesis3_part2"), "light_escape", null, !0)),
                    t.append("</span></li></ul></div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: twig.attr("lang"in i ? i.lang : "", "button_next"),
                        no_cancel: !0,
                        button_class: "button-input_blue"
                    })),
                    t.append('</div><div class="welcome-amoform__wireframe-wrapper"><div class="welcome-amoform__locker"></div><div class="welcome-amoform__wireframe"></div><div class="welcome-amoform__tab-caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_your_site"), "light_escape", null, !0)),
                    t.append('</div><div class="welcome-amoform__form"><h2 class="welcome-amoform__form__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_form"), "light_escape", null, !0)),
                    t.append('</h2><ul class="welcome-amoform__form__items"><li class="welcome-amoform__form__items__item"><span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_full_name"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, i),
                    t.append('</li><li class="welcome-amoform__form__items__item"><span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_phone"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_phone_number")
                    })),
                    t.append('</li><li class="welcome-amoform__form__items__item"><span>Email</span>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: "mail@example.com"
                    })),
                    t.append('</li><li class="welcome-amoform__form__items__item welcome-amoform__form__items__item-textarea"><span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_note"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, i),
                    t.append("</li></ul>"),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        disabled: !0,
                        text: twig.attr("lang"in i ? i.lang : "", "welcome_tour_step3_send"),
                        class_name: "welcome-amoform__form__submit"
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_amoforms_welcome_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/amoforms/welcome_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="unsorted__chat-detail__body">'),
                    i._parent = i;
                    var a = "messages"in i ? i.messages : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(n, a) {
                        if (i._key = a,
                        i.message = n,
                        !twig.attr("message"in i ? i.message : "", "hide")) {
                            i.outbound = 1 == twig.attr("message"in i ? i.message : "", "manager"),
                            i.has_message = 0,
                            t.append('<div class="unsorted__chat-detail__body__row chat_'),
                            "outbound"in i && i.outbound && t.append("_our_"),
                            t.append("_row "),
                            twig.attr(s, "index") > 2 && t.append("unsorted__chat-detail__body__row_for-hidden"),
                            t.append('"><div class="unsorted__chat-detail__body__chat_'),
                            "outbound"in i && i.outbound && t.append("_our_"),
                            t.append('_message">');
                            var p = twig.attr("message"in i ? i.message : "", "data")
                              , l = {
                                parent: s,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            twig.forEach(p, (function(n, a) {
                                i._key = a,
                                i.mess = n,
                                twig.attr("mess"in i ? i.mess : "", "hide") || (twig.contains(["text", "image", "location", "file", "audio"], twig.attr("mess"in i ? i.mess : "", "type")) && (i.has_message = 1,
                                new (e._get("interface/common/chats/messages/" + twig.attr("mess"in i ? i.mess : "", "type") + ".twig"))(this.env_).render_(t, twig.extend({}, i, "mess"in i ? i.mess : ""))),
                                ++l.index0,
                                ++l.index,
                                l.first = !1)
                            }
                            ), this),
                            "has_message"in i && i.has_message || new (e._get("interface/common/chats/messages/text.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                text: ""
                            })),
                            "outbound"in i && i.outbound && (t.append('<span class="chat_time">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("message"in i ? i.message : "", "date"), "time"), "light_escape", null, !0)),
                            t.append("</span>")),
                            t.append("</div>"),
                            "outbound"in i && i.outbound && (t.append('<span class="chat_time">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("message"in i ? i.message : "", "date"), "time"), "light_escape", null, !0)),
                            t.append("</span>")),
                            t.append("</div>"),
                            ++s.index0,
                            ++s.index,
                            s.first = !1
                        }
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this),
                        loader: twig.bind(this.block_loader, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.without_input = !0,
                    "fake_items"in t && t.fake_items || (t.fake_items = []),
                    twig.filter.length(this.env_, "items"in t ? t.items : "") || ("can_add"in t && t.can_add ? (t.add_label = "add_label_text"in t && t.add_label_text ? "add_label_text"in t ? t.add_label_text : "" : twig.attr("lang"in t ? t.lang : "", "card_add_tag"),
                    "add_label"in t && t.add_label || (t.add_label = twig.attr("lang"in t ? t.lang : "", "add_tags")),
                    t.items = [{
                        id: "add_tag",
                        title: "add_label"in t ? t.add_label : "",
                        is_last: !0
                    }]) : t.items = []),
                    t.items = twig.filter.merge("fake_items"in t ? t.fake_items : "", this.env_.filter("mark_last_item", "items"in t ? t.items : "")),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_fast_tags_fast_tags"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/fast_tags/fast_tags", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.name = (twig.attr("item"in t ? t.item : "", "id"),
                    twig.attr("item"in t ? t.item : "", "title")),
                    t.title = "new" == twig.attr("item"in t ? t.item : "", "id") ? this.env_.filter("striptags", twig.attr("item"in t ? t.item : "", "title")) : "name"in t ? t.name : "",
                    "name"in t && t.name || (t.name = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name")),
                    "title"in t && t.title || (t.title = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name")),
                    t.class_name = ("class_name"in t ? t.class_name : "") + " multisuggest__list-item",
                    "title"in t && t.title && (t.tag_styles = "",
                    twig.attr("item"in t ? t.item : "", "color") && (t.tag_styles = "border-color: #" + twig.attr("item"in t ? t.item : "", "color") + "; background-color: " + this.env_.filter("hex2rgba", twig.attr("item"in t ? t.item : "", "color"), .3)),
                    e.append('<li class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "is_fake") ? e.append("js-multisuggest-fake") : e.append("js-multisuggest-item"),
                    e.append('" '),
                    twig.attr("item"in t ? t.item : "", "is_deleted") && e.append('data-status="deleted"'),
                    e.append(' data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" '),
                    "tag_styles"in t && t.tag_styles && (e.append('data-color="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "color"), "light_escape", null, !0)),
                    e.append('" style="'),
                    e.append(twig.filter.escape(this.env_, "tag_styles"in t ? t.tag_styles : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    twig.attr("item"in t ? t.item : "", "is_last") && e.append('<input type="text" class="js-focuser js-form-changes-skip" readonly="readonly" onkeydown="([13,8].indexOf(event.which)+1)&&this.parentNode.click()" onclick="return false">'),
                    e.append('<span class="tag" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "title"in t ? t.title : ""), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    "scoring" == twig.attr("item"in t ? t.item : "", "id") && (e.append('<div id="scoring_card_hint" class="content__account__note__wrapper bottom card-top-name__scoring_hint"><div class="content__account__note bottom">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "scoring_hint"), "light_escape", null, !0)),
                    e.append("</div></div>")),
                    e.append("</li>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_fast_tags_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/fast_tags/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_items: twig.bind(this.block_before_items, this),
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.item_tmpl = "interface/common/fast_tags/item.twig",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_before_items = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="multisuggest__suggest-loader multisuggest__suggest-loader--outside js-multisuggest-outside-loader" style="display: none"><span class="spinner-icon"></span></span>')
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager fast-tags-suggest '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_fast_tags_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/fast_tags/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="hs-fixed-header '),
                    "is_shown"in t && t.is_shown || e.append("hs-fixed-header_hidden"),
                    e.append('" '),
                    "entity"in t && t.entity && (e.append('data-entity="'),
                    e.append(twig.filter.escape(this.env_, "entity"in t ? t.entity : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append('><div class="hs-fixed-header__items-wrapper"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_hs_fixed_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/hs/fixed_header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="hs-scroll-map"><div class="hs-scroll-map__items-wrapper"><div class="hs-scroll-map__screen-position js-hs-scroll-map-screen-position"></div>'),
                    t._parent = t;
                    var n = twig.range(1, "items_number"in t ? t.items_number : "");
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<div class="hs-scroll-map__item"></div>')
                    }
                    ), this),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_hs_scroll_map"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/hs/scroll_map", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    t.append('<div class="list__top__actions">'),
                    i.is_pipeline_templates_available = twig.attr(twig.attr(twig.attr("js_params"in i ? i.js_params : "", "constants"), "leads_list_template_params"), "is_pipeline_templates_available"),
                    i.current_id = "",
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || ("is_plug"in i ? i.is_plug : ""),
                    "pipelines"in i && i.pipelines) {
                        i._parent = i;
                        var a = "pipelines"in i ? i.pipelines : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.item = e,
                            twig.attr("item"in i ? i.item : "", "selected") && (i.current_id = twig.attr("item"in i ? i.item : "", "id"))
                        }
                        ), this)
                    }
                    "current_id"in i && i.current_id || !("pipeline_id"in i) || !i.pipeline_id || (i.current_id = "pipeline_id"in i ? i.pipeline_id : ""),
                    "is_plug"in i && i.is_plug || (i.context_menu = [],
                    i.donload_item = {
                        svg_icon: "download",
                        text: twig.attr("lang"in i ? i.lang : "", "unsorted_export_title"),
                        class_name: "js-list-export"
                    },
                    i.upload_item = {
                        svg_icon: "upload",
                        text: twig.attr("lang"in i ? i.lang : "", "unsorted_import_excel_title"),
                        class_name: "js-list-import"
                    },
                    i.lead_tile = {
                        svg_icon: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? "edit-card-layout" : "settings-key",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Edit card layout") : this.env_.filter("i18n", "Card view"),
                        class_name: "js-lead_tile"
                    },
                    i.broadcast = {
                        svg_icon: "broadcasting",
                        text: this.env_.filter("i18n", "New broadcast"),
                        class_name: "js-broadcasting-create"
                    },
                    i.edit_pipeline = {
                        svg_icon: "edit-pipeline",
                        text: this.env_.filter("i18n", "Edit pipeline"),
                        class_name: "js-edit-pipeline context-menu__item_divider"
                    },
                    i.multiactions = {
                        svg_icon: "multiactions",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Select multiple") : this.env_.filter("i18n", "Multiple actions"),
                        class_name: "js-multiactions"
                    },
                    i.list_print = {
                        svg_icon: "print",
                        text: twig.attr("lang"in i ? i.lang : "", "button_print"),
                        class_name: "js-list-print"
                    },
                    i.settings_key = {
                        svg_icon: "settings-key",
                        text: twig.attr("lang"in i ? i.lang : "", "button_list_settings"),
                        class_name: "js-list-settings"
                    },
                    i.setup_button_class_name = "list-top-nav__button-setup__" + ("user_rank"in i ? i.user_rank : ""),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        svg_icon: "settings",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline_glob") : twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline"),
                        class_name: ("master" != ("user_rank"in i ? i.user_rank : "") ? "setup_button_class_name"in i ? i.setup_button_class_name : "" : "list-top-nav__button-setup") + "_context",
                        href: "/settings/pipeline/leads" + ("current_id"in i && i.current_id ? "/" + ("current_id"in i ? i.current_id : "") : "")
                    }])),
                    "is_kommo"in i && i.is_kommo && "is_admin"in i && i.is_admin && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["broadcast"in i ? i.broadcast : ""])),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? "list_type"in i && i.list_type || !twig.attr("_account_features"in i ? i._account_features : "", "pipeline_template_settings") || "is_list"in i && i.is_list || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["edit_pipeline"in i ? i.edit_pipeline : ""])) : ((twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company")) && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["upload_item"in i ? i.upload_item : ""])),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "export") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["donload_item"in i ? i.donload_item : ""]))),
                    "is_list"in i && i.is_list && ("list_type"in i && i.list_type || !twig.attr("_account_features"in i ? i._account_features : "", "pipeline_template_settings") || !("is_pipeline_templates_available"in i) || !i.is_pipeline_templates_available || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["edit_pipeline"in i ? i.edit_pipeline : ""])),
                    i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["list_print"in i ? i.list_print : ""]),
                    "is_unsorted"in i && i.is_unsorted || !("has_items"in i) || !i.has_items || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["settings_key"in i ? i.settings_key : ""]))),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && ("show_cbh"in i && i.show_cbh && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        svg_icon: "cbh",
                        text: twig.attr("lang"in i ? i.lang : "", "unsorted_cbh_title"),
                        class_name: "js-cbh-install"
                    }])),
                    "is_list"in i && i.is_list || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["lead_tile"in i ? i.lead_tile : ""]))),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") && ((twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company")) && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["upload_item"in i ? i.upload_item : ""])),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "export") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["donload_item"in i ? i.donload_item : ""]))),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "duplicate_search") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        svg_icon: "merge",
                        text: twig.attr("lang"in i ? i.lang : "", "duplicate_search"),
                        class_name: "js-duplicate-search"
                    }])),
                    "is_list"in i && i.is_list || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["multiactions"in i ? i.multiactions : ""]),
                    i.unread_item_control = {
                        type: "switcher",
                        switcher_wrapper_class: "switcher_unread controls-switcher-blue",
                        name: "unread_first"
                    },
                    twig.attr(twig.attr("sorting"in i ? i.sorting : "", "settings"), "unread_first") && (i.unread_item_control = twig.filter.merge("unread_item_control"in i ? i.unread_item_control : "", {
                        checked: "checked"
                    })),
                    i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        text: this.env_.filter("i18n", "Sort"),
                        class_name: "context-menu__item_header"
                    }]),
                    i._parent = i,
                    a = twig.attr("sorting"in i ? i.sorting : "", "variants"),
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        twig.attr("item"in i ? i.item : "", "id") == twig.attr(twig.attr("sorting"in i ? i.sorting : "", "settings"), "by") ? (i.class_name = "context-menu__item js-sort__item context-menu__item_active",
                        i.data_attr = "data-sort-type=" + twig.attr(twig.attr("sorting"in i ? i.sorting : "", "settings"), "type") + " data-sort-by=" + twig.attr("item"in i ? i.item : "", "id")) : (i.class_name = "context-menu__item js-sort__item",
                        i.data_attr = "data-sort-type=desc data-sort-by=" + twig.attr("item"in i ? i.item : "", "id")),
                        i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                            text: twig.attr("item"in i ? i.item : "", "name"),
                            class_name: "class_name"in i ? i.class_name : "",
                            svg_icon_left: "sort-arrow",
                            icon_left_class: "svg-icon__context",
                            additional_data: "data_attr"in i ? i.data_attr : ""
                        }])
                    }
                    ), this),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        text: this.env_.filter("i18n", "Auto update"),
                        class_name: "context-menu__item context-menu__item-autoupdate context-menu__item_divider",
                        checkable: !0,
                        checkable_checked: "pipeline_auto_update"in i ? i.pipeline_auto_update : "",
                        svg_icon_left_absolute: "controls--select-checked"
                    }]))),
                    "context_menu"in i && i.context_menu && (twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_actions_more_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        button_class_name: "button-input-more-newbie",
                        context_menu_class_name: "context-menu-pipeline context-menu-pipeline__newbie " + (twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") ? "" : "context-menu__correct-position")
                    })) : new (e._get("interface/common/top_actions_more.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        button_class_name: "button-input-more",
                        context_menu_class_name: "context-menu-pipeline " + (twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") ? "" : "context-menu__correct-position")
                    }))),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && ("current_id"in i && i.current_id ? i.dp_link = "/settings/pipeline/leads/" + ("current_id"in i ? i.current_id : "") : i.dp_link = "/settings/pipeline/leads",
                    t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "dp_link"in i ? i.dp_link : "", "light_escape", null, !0)),
                    t.append('" data-href="'),
                    t.append(twig.filter.escape(this.env_, "dp_link"in i ? i.dp_link : "", "light_escape", null, !0)),
                    t.append('" class="js-navigate-link list-top-nav__button-setup '),
                    "master" != ("user_rank"in i ? i.user_rank : "") ? t.append(twig.filter.escape(this.env_, "setup_button_class_name"in i ? i.setup_button_class_name : "", "light_escape", null, !0)) : t.append(""),
                    t.append('"><span class="button-input button-input_add">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") && t.append('<svg class="svg-icon svg-common--flash-pipeline-dims" style=\'margin-bottom: -4px;\'><use xlink:href="#common--flash-pipeline"></use></svg>'),
                    t.append('<span class="button-input-inner__text button-input-inner__text_short-settings">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? twig.attr("lang"in i ? i.lang : "", "button_setup_glob") : twig.attr("lang"in i ? i.lang : "", "button_setup"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline_glob") : twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline"), "light_escape", null, !0)),
                    t.append("</span></span></a>"))),
                    t.append('<a href="'),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") && t.append("/leads/add/"),
                    "current_id"in i && i.current_id && t.append(twig.filter.escape(this.env_, "?pipeline_id=" + ("current_id"in i ? i.current_id : ""), "light_escape", null, !0)),
                    t.append('" data-href="/leads/add/" class="button-input button-input_add button-input_add-lead content-table__name-link'),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") ? t.append(" button-input_blue js-navigate-link") : t.append(" js-disabled button-input-disabled"),
                    t.append('"><svg class="svg-icon svg-controls--button-add-dims"><use xlink:href="#controls--button-add"></use></svg><span class="button-input-inner__text button-input-inner__text_short '),
                    "newbie" == ("user_rank"in i ? i.user_rank : "") && t.append("button-input-inner__text_short__newbie"),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_add_new_lead_short"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_add_new_lead"), "light_escape", null, !0)),
                    t.append("</span></a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_leads_top_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/leads/top_actions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    t.append('<div class="list__top__preset">'),
                    "pipelines"in i && i.pipelines) {
                        i._parent = i;
                        var a = "pipelines"in i ? i.pipelines : ""
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var p = twig.count(a);
                            s.revindex0 = p - 1,
                            s.revindex = p,
                            s.length = p,
                            s.last = 1 === p
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.item = n,
                            twig.attr("item"in i ? i.item : "", "selected") && (i.pipeline_link = "/leads/pipeline/" + twig.attr("item"in i ? i.item : "", "id"),
                            i.list_link = "/leads/list/pipeline/" + twig.attr("item"in i ? i.item : "", "id"),
                            twig.attr("_account_features"in i ? i._account_features : "", "simplified_first_line") ? new (e._get("interface/common/top_nav_submenu_button_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item_title: twig.attr("item"in i ? i.item : "", "title"),
                                data_entity: "leads"
                            })) : new (e._get("interface/common/top_nav_submenu_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item_title: twig.attr("item"in i ? i.item : "", "title"),
                                data_entity: "leads"
                            })),
                            twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_nav_view_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                selected: "selected"in i ? i.selected : "",
                                user_rank: "user_rank"in i ? i.user_rank : "",
                                data_entity: "leads",
                                pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                                list_link: "list_link"in i ? i.list_link : ""
                            })) : new (e._get("interface/common/top_nav_view.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                selected: "selected"in i ? i.selected : "",
                                pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                                list_link: "list_link"in i ? i.list_link : ""
                            }))),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        "/leads/list/" != twig.attr("filter"in i ? i.filter : "", "url") && "/leads/trash/" != twig.attr("filter"in i ? i.filter : "", "url") || (i.plug_title = twig.attr("lang"in i ? i.lang : "", "list_all_leads"),
                        new (e._get("interface/common/top_nav_submenu_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item_title: "plug_title"in i ? i.plug_title : "",
                            data_entity: "leads"
                        })),
                        new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            link: "/leads/list/",
                            type: "list",
                            active: !0,
                            js_caption: !0,
                            title: twig.attr("lang"in i ? i.lang : "", "menu_list"),
                            svg_class_name: "common--list"
                        })))
                    } else
                        i.pipeline_link = "/leads/pipeline/",
                        i.list_link = "/leads/list/pipeline/",
                        twig.attr("_account_features"in i ? i._account_features : "", "simplified_first_line") ? new (e._get("interface/common/top_nav_submenu_button_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item_title: twig.attr("lang"in i ? i.lang : "", "menu_title"),
                            data_entity: "leads"
                        })) : new (e._get("interface/common/top_nav_submenu_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item_title: twig.attr("lang"in i ? i.lang : "", "menu_title"),
                            data_entity: "leads"
                        })),
                        twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_nav_view_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            selected: "selected"in i ? i.selected : "",
                            user_rank: "user_rank"in i ? i.user_rank : "",
                            data_entity: "leads",
                            pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                            list_link: "list_link"in i ? i.list_link : ""
                        })) : new (e._get("interface/common/top_nav_view.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            selected: "selected"in i ? i.selected : "",
                            pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                            list_link: "list_link"in i ? i.list_link : ""
                        }));
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_leads_top_nav"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/leads/top_nav", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        not_in_list: twig.bind(this.block_not_in_list, this),
                        static: twig.bind(this.block_static, this),
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("pagination"in t ? t.pagination : "", "available_rows_count") && twig.attr("pagination"in t ? t.pagination : "", "selected_rows_count_value") && twig.filter.length(this.env_, "items"in t ? t.items : "") > twig.functions.min(twig.attr("pagination"in t ? t.pagination : "", "available_rows_count")) && (t.need_show_rows_count_option = !0),
                    (twig.attr("pagination"in t ? t.pagination : "", "total") > 1 || "need_show_rows_count_option"in t && t.need_show_rows_count_option || twig.attr("pagination"in t ? t.pagination : "", "only_rows")) && (t.multi_page = !0),
                    e.append(this.renderBlock("not_in_list", t, i)),
                    e.append(this.renderBlock("static", t, i)),
                    e.append('<div class="list list-'),
                    e.append(twig.filter.escape(this.env_, "entity"in t ? t.entity : "", "light_escape", null, !0)),
                    e.append(" "),
                    "list_type"in t && t.list_type && (e.append("list-"),
                    e.append(twig.filter.escape(this.env_, "entity"in t ? t.entity : "", "light_escape", null, !0)),
                    e.append("-"),
                    e.append(twig.filter.escape(this.env_, "list_type"in t ? t.list_type : "", "light_escape", null, !0))),
                    e.append(" "),
                    "aside_toggleable"in t && e.append("aside-toggleable"),
                    e.append("  "),
                    "list_page_holder_class_name"in t && t.list_page_holder_class_name && e.append(twig.filter.escape(this.env_, "list_page_holder_class_name"in t ? t.list_page_holder_class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "customers_entity"in t ? t.customers_entity : "", "light_escape", null, !0)),
                    e.append('" id="list_page_holder"><div class="list__body clearfix"><div id="list__body-right" class="list__body-right '),
                    "no_fixed_top"in t && t.no_fixed_top && e.append("list__body-right_no-fixed-top"),
                    e.append(" "),
                    "multi_page"in t && t.multi_page && e.append("list__body-right_has-footer"),
                    e.append('">'),
                    e.append(this.renderBlock("list_top_right", t, i)),
                    e.append('<div class="list__body__holder '),
                    e.append(twig.filter.escape(this.env_, "body_class_name"in t ? t.body_class_name : "", "light_escape", null, !0)),
                    e.append('" id="list_holder">'),
                    e.append(this.renderBlock("list_body", t, i)),
                    e.append("</div>"),
                    e.append(this.renderBlock("list_footer", t, i)),
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.block_not_in_list = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_top_right = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_list_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/list/list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    i.max_links_count = 7,
                    ("page"in i ? i.page : "") > 4 && ("page"in i ? i.page : "") < ("max_page"in i ? i.max_page : "") - 3 ? (i.start_page = ("page"in i ? i.page : "") - 2,
                    i.end_page = Number("page"in i ? i.page : "") + Number(2)) : ("page"in i ? i.page : "") > ("max_page"in i ? i.max_page : "") - 5 ? (i.start_page = ("max_page"in i ? i.max_page : "") - 4,
                    i.end_page = "max_page"in i ? i.max_page : "") : (i.start_page = 1,
                    i.end_page = 5),
                    ("start_page"in i ? i.start_page : "") < 1 && (i.start_page = 1),
                    (("max_page"in i ? i.max_page : "") > 1 || "only_rows"in i && i.only_rows) && (t.append('<div class="pagination-buttons">'),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, {
                        class_name: "js-pagination-prev",
                        type: "pagination",
                        svg_class_name: "common--bold-arrow"
                    }),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, {
                        class_name: "js-pagination-next",
                        type: "pagination",
                        svg_class_name: "common--bold-arrow"
                    }),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-pagination-prev pagination-buttons__btn",
                        icon_class_name: "icon-page-prev"
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-pagination-next pagination-buttons__btn",
                        icon_class_name: "icon-page-next"
                    })),
                    t.append("</div>")),
                    t.append('<div class="pagination-pages">'),
                    ("start_page"in i ? i.start_page : "") > 1 && (t.append('<div class="pagination-link__wrapper"><a href="#" class="pagination-link js-pagination-link" data-page="1">1</a></div>'),
                    ("max_page"in i ? i.max_page : "") >= ("max_links_count"in i ? i.max_links_count : "") && ("start_page"in i ? i.start_page : "") > 2 && t.append('<div class="pagination-link__wrapper"><span class="pagination-ellipsis">...</span></div>')),
                    ("max_page"in i ? i.max_page : "") > 1) {
                        i._parent = i;
                        var a = twig.range("start_page"in i ? i.start_page : "", "end_page"in i ? i.end_page : "");
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.p = e,
                            t.append('<div class="pagination-link__wrapper '),
                            ("p"in i ? i.p : "") == ("page"in i ? i.page : "") && t.append("pagination-link__wrapper-active"),
                            t.append('"><a href="#" class="pagination-link js-pagination-link" data-page="'),
                            t.append(twig.filter.escape(this.env_, "p"in i ? i.p : "", "light_escape", null, !0)),
                            t.append('">'),
                            t.append(twig.filter.escape(this.env_, "p"in i ? i.p : "", "light_escape", null, !0)),
                            t.append("</a></div>")
                        }
                        ), this)
                    }
                    ("end_page"in i ? i.end_page : "") < ("max_page"in i ? i.max_page : "") && (("max_page"in i ? i.max_page : "") >= ("max_links_count"in i ? i.max_links_count : "") && ("end_page"in i ? i.end_page : "") < ("max_page"in i ? i.max_page : "") - 1 && t.append('<div class="pagination-link__wrapper"><span class="pagination-ellipsis">...</span></div>'),
                    t.append('<div class="pagination-link__wrapper"><a href="#" class="pagination-link js-pagination-link" data-page="'),
                    t.append(twig.filter.escape(this.env_, "max_page"in i ? i.max_page : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "max_page"in i ? i.max_page : "", "light_escape", null, !0)),
                    t.append("</a></div>")),
                    t.append("</div>"),
                    (("max_page"in i ? i.max_page : "") > 1 || "only_rows"in i && i.only_rows) && t.append('<div class="pagination__descr"><div class="pagination__descr__item pagination__descr__item-mac">← Alt →</div><div class="pagination__descr__item pagination__descr__item-win">← Ctrl →</div></div>'),
                    twig.attr("pagination"in i ? i.pagination : "", "available_rows_count") && twig.attr("pagination"in i ? i.pagination : "", "selected_rows_count_value") && (i.items = [],
                    i._parent = i,
                    a = twig.attr("pagination"in i ? i.pagination : "", "available_rows_count"),
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.row_count = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: "row_count"in i ? i.row_count : "",
                            option: "row_count"in i ? i.row_count : "",
                            value: "row_count"in i ? i.row_count : ""
                        }])
                    }
                    ), this),
                    t.append('<div class="pagination__rows"><div class="pagination__rows-label"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show rows"), "light_escape", null, !0)),
                    t.append('</p></div><div class="pagination__rows-select">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: twig.attr("pagination"in i ? i.pagination : "", "selected_rows_count_value"),
                        items: "items"in i ? i.items : "",
                        input_special_class: "js-pagination-rows-input"
                    })),
                    t.append("</div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_list_pagination"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/list/pagination", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest_top: twig.bind(this.block_suggest_top, this),
                        loader: twig.bind(this.block_loader, this),
                        input_icon: twig.bind(this.block_input_icon, this),
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="suggest '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(' js-suggest">'),
                    e.append(this.renderBlock("suggest_top", t, i)),
                    e.append('<ul class="suggest__list js-suggest-list">'),
                    "without_input"in t && t.without_input || (e.append('<li class="suggest__list-item suggest__list-item_input"><span class="js-suggest-hint suggest__hint"></span><input type="text" class="suggest__input js-suggest-input" value="" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("loader", t, i)),
                    e.append(this.renderBlock("input_icon", t, i)),
                    e.append("</li>")),
                    e.append("</ul>"),
                    e.append(this.renderBlock("suggest", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_suggest_top = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="suggest__input-loader js-suggest-input-loader h-hidden"><span class="spinner-icon"></span></span>')
                }
                ,
                t.prototype.block_input_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<ul class="suggest__items-suggest '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "no_scroll"in t && t.no_scroll || e.append("custom-scroll"),
                    e.append('"></ul>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_suggest_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/suggest/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="suggest__load-more '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><span class="js-suggest__load-more-link '),
                    e.append(twig.filter.escape(this.env_, "inner_class_name"in t ? t.inner_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "button_text"in t ? t.button_text : "", "light_escape", null, !0)),
                    e.append('</span><span class="suggest__load-more-loader '),
                    e.append(twig.filter.escape(this.env_, "spinner_class_name"in t ? t.spinner_class_name : "", "light_escape", null, !0)),
                    e.append('"><span class="spinner-icon"></span></span></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_suggest_load_more"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/suggest/load_more", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        actions: twig.bind(this.block_actions, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="modal-body__actions '),
                    e.append(twig.filter.escape(this.env_, "actions__class_name"in t ? t.actions__class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("actions", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_actions = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "button_text"in i && i.button_text || (i.button_text = twig.attr("lang"in i ? i.lang : "", "button_save")),
                    "cancel_text"in i && i.cancel_text || (i.cancel_text = twig.attr("lang"in i ? i.lang : "", "button_cancel")),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "button_text"in i ? i.button_text : "",
                        class_name: "js-modal-accept js-button-with-loader modal-body__actions__save " + ("button_class"in i ? i.button_class : ""),
                        tab_index: 1,
                        disabled: "button_disabled"in i ? i.button_disabled : "",
                        id: "button_id"in i ? i.button_id : ""
                    })),
                    "no_cancel"in i && i.no_cancel || new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, {
                        lang: "lang"in i ? i.lang : "",
                        text: "cancel_text"in i ? i.cancel_text : "",
                        tab_index: 2,
                        class_name: "button_cancel_class"in i ? i.button_cancel_class : ""
                    }),
                    !0 === ("has_trash"in i ? i.has_trash : "") ? t.append('<div class="modal-body__trash-holder"><span class="icon icon-inline icon-gray-trash"></span></div>') : "has_trash"in i && i.has_trash && (t.append('<span class="modal-body__actions__trash js-modal-trash '),
                    t.append(twig.filter.escape(this.env_, "trash_class_name"in i ? i.trash_class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    "trash_should_be_raw"in i && i.trash_should_be_raw ? t.append("has_trash"in i ? i.has_trash : "") : t.append(twig.filter.escape(this.env_, "has_trash"in i ? i.has_trash : "", "light_escape", null, !0)),
                    t.append("</span>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/actions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Change field"), "light_escape", null, !0)),
                    t.append('</h2><div class="js-cf-to-change-selector">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "field_id",
                        input_class_name: "js-form-changes-skip",
                        items: "fields"in i ? i.fields : ""
                    })),
                    t.append('</div><div class="js-cf-to-change-value modal-body__inner-change-field"></div>'),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_disabled: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_change_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/change_field", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "title"in i && i.title || (i.title = twig.attr("lang"in i ? i.lang : "", "multiple_reassign_title")),
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, "title"in i ? i.title : ""), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, "statuses"in i ? i.statuses : "")),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_change_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/change_status", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><div style="display: flex; align-items: baseline"><span style="margin-right: 5px;">'),
                    t.append(twig.filter.escape(this.env_, "description"in i ? i.description : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/common/tasks_date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        date: "date"in i ? i.date : ""
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_change_task_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/change_task_date", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'),
                    "delete_type_name"in i && i.delete_type_name && (t.append('<h2 class="head_2">Вы действительно хотите удалить тип задачи «'),
                    t.append(twig.filter.escape(this.env_, "delete_type_name"in i ? i.delete_type_name : "", "light_escape", null, !0)),
                    t.append("»</h2>")),
                    t.append('<div class="modal-body__header"><h2 class="head_2">'),
                    t.append(twig.filter.escape(this.env_, "description"in i ? i.description : "", "light_escape", null, !0)),
                    t.append("&nbsp;</h2>"),
                    new (e._get("interface/common/task_types/in_card.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "type"in i ? i.type : "",
                        type_name: "type_name"in i ? i.type_name : "",
                        task_types: "task_types"in i ? i.task_types : "",
                        need_option_icon: !0,
                        opened_class_name: "card-task__type-opened_with-border",
                        text_class_name: "task-type-name-with-icon__text_without-after",
                        wrapper_class_name: "card-task__type-wrapper_with-border"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: twig.attr("lang"in i ? i.lang : "", "confirm__yes"),
                        cancel_text: twig.attr("lang"in i ? i.lang : "", "confirm__no")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_change_task_type"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/change_task_type", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "chat_send"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "chat_message",
                        class_name: "modal__chat-send__textarea",
                        placeholder: this.env_.filter("i18n", "Message to send")
                    })),
                    t.append('<div id="add_tags" class="modal__chat-send__add-tags-label">'),
                    new (e._get("interface/common/fast_tags/fast_tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        can_add: !0,
                        items: []
                    })),
                    t.append('</div><input type="hidden" name="tags" id="tags" value=""><div>'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "to_all",
                        class_name: "modal__todo-result__checkbox",
                        text: this.env_.filter("i18n", "To all found"),
                        checked: !0
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: this.env_.filter("i18n", "Send message"),
                        cancel_text: twig.attr("lang"in i ? i.lang : "", "cancel")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_chats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/chats", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        message_body: twig.bind(this.block_message_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "accept_text"in i && i.accept_text || (i.accept_text = twig.attr("lang"in i ? i.lang : "", "confirm__yes")),
                    "decline_text"in i && i.decline_text || (i.decline_text = twig.attr("lang"in i ? i.lang : "", "confirm__no")),
                    t.append('<div class="modal-body__inner">'),
                    "no_close"in i && i.no_close || t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'),
                    t.append('<h2 class="modal-body__caption head_2">'),
                    "should_be_raw"in i && i.should_be_raw ? t.append("text"in i ? i.text : "") : t.append(twig.filter.escape(this.env_, "text"in i ? i.text : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    t.append(this.renderBlock("message_body", i, n)),
                    "no_actions"in i && i.no_actions || new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        no_cancel: "no_cancel"in i ? i.no_cancel : "",
                        button_text: "accept_text"in i ? i.accept_text : "",
                        cancel_text: "decline_text"in i ? i.decline_text : "",
                        button_class: "button_class"in i ? i.button_class : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_message_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t._parent = t;
                    var n = "message"in t ? t.message : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<p class="modal-body__paragraph-text '),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append('">'),
                        twig.attr("item"in t ? t.item : "", "should_be_raw") ? e.append(twig.attr("item"in t ? t.item : "", "text")) : e.append(twig.filter.escape(this.env_, twig.filter.def(this.env_.filter("i18n", twig.attr("item"in t ? t.item : "", "text")), twig.attr("item"in t ? t.item : "", "text_i18n")), "light_escape", null, !0)),
                        e.append("</p>")
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_confirm"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/confirm", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_add_widget_title"), "light_escape", null, !0)),
                    t.append('</h2><p class="std-p std-p-first">'),
                    t.append(twig.attr("lang"in i ? i.lang : "", "dashboard_add_widget_ssl_info")),
                    t.append('</p><p class="std-p">'),
                    t.append("example_link"in i ? i.example_link : ""),
                    t.append('</p><div class="dashboard_widgets-input"><span class="icon icon-dash-ssl"></span>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "dashboard_add_widget_url",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "dashboard_add_widget_placeholder")
                    })),
                    t.append('</div><div class="dashboard_widgets-size-input"><span class="dashboard_widgets-size__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_add_widget_width"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "dashboard_add_widget_width",
                        value: 2,
                        class_name: "dashboard_widgets-size dashboard_widgets-size__width",
                        max_length: 1
                    })),
                    t.append('<span class="dashboard_widgets-size__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_add_widget_height"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "dashboard_add_widget_height",
                        value: 1,
                        class_name: "dashboard_widgets-size dashboard_widgets-size__height",
                        max_length: 1
                    })),
                    t.append('</div><div class="dashbord_save_error_widget_custom"></div>'),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_dashboard_widget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/dashboard_widget", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    i._parent = i;
                    var a = "message"in i ? i.message : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.item = e,
                        t.append('<p class="modal-body__paragraph-text">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "text"), "light_escape", null, !0)),
                        t.append("</p>")
                    }
                    ), this),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: "accept_text"in i ? i.accept_text : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_delete"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/delete", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "delete-modal-body-checkbox",
                        name: "delete_checkbox",
                        text: "checkbox_text"in i ? i.checkbox_text : ""
                    })),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: "accept_text"in i ? i.accept_text : "",
                        button_disabled: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_delete_lead"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/delete_lead", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "text"in i && i.text || (i.text = twig.attr("lang"in i ? i.lang : "", "modal_error_caption")),
                    t.append('<div class="modal-body__inner modal-body__inner-error js-modal-error"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'),
                    this.env_.test("iterable", "text"in i ? i.text : "")) {
                        i.first_el = !0,
                        i._parent = i;
                        var a = "text"in i ? i.text : "";
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.error = e,
                            t.append('<h2 class="modal-body__caption head_2 modal-body__caption-error modal-body__caption-error_array '),
                            "first_el"in i && i.first_el && t.append("modal-body__caption-error_first"),
                            t.append('">'),
                            t.append("error"in i ? i.error : ""),
                            t.append("</h2>"),
                            i.first_el = !1
                        }
                        ), this)
                    } else
                        t.append('<h2 class="modal-body__caption head_2 modal-body__caption-error">'),
                        t.append("text"in i ? i.text : ""),
                        t.append("</h2>");
                    "no_retry"in i && i.no_retry || new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "modal_error_btn"),
                        class_name: "js-modal-try-again"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="modal-body__inner"><iframe src="'),
                    e.append(twig.filter.escape(this.env_, "frame_url"in t ? t.frame_url : "", "light_escape", null, !0)),
                    e.append('" style="width: 100%;"></iframe></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_iframe"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/iframe", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.description = "catalogs" == ("entity"in t ? t.entity : "") ? "import catalog decription" : "SPA_TEMPLATE__NEW_IMPORT_MODAL_DESCR",
                    t.caption = twig.attr("lang"in t ? t.lang : "", "button_import"),
                    "caption"in t && t.caption || (t.caption = this.env_.filter("i18n", "Import")),
                    e.append('<div class="modal-body__inner import_popup"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption">'),
                    e.append(twig.filter.escape(this.env_, "caption"in t ? t.caption : "", "light_escape", null, !0)),
                    e.append('</h2><ul class="import-popup__list"><li class="import-popup__item"><svg class="import-popup__item-icon svg-icon"><use xlink:href="#common--export--excel"></use></svg><div class="new-import__in-modal" data-dnd="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "drop_your_files_here"), "light_escape", null, !0)),
                    e.append('"><span class="new-import__in-modal__title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Import from Excel file"), "light_escape", null, !0)),
                    e.append('</span><div class="new-import__in-modal__descr">'),
                    e.append(this.env_.filter("i18n", "description"in t ? t.description : "")),
                    e.append('</div><div class="new-import__in-modal__actions"><label for="new_import_load"><div class="button-input" id="new_import_load_btn"><span class="button-input-inner "><spanclass="button-input-inner__text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "new_import_modal_load_file"), "light_escape", null, !0)),
                    e.append('</span></span></div></label><input type="file" id="new_import_load" class="hidden" tabindex="-1" name="DATA_FILE">'),
                    t._parent = t;
                    var n = "example"in t ? t.example : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.ex = i,
                        e.append('<a class="new-import__in-modal__example blue-link" href="/example/import_example_'),
                        e.append(twig.filter.escape(this.env_, "ex"in t ? t.ex : "", "light_escape", null, !0)),
                        e.append("_beta_"),
                        e.append(twig.filter.escape(this.env_, "lang_id"in t ? t.lang_id : "", "light_escape", null, !0)),
                        e.append('.csv"target="_blank">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "new_import_modal_example"), "light_escape", null, !0)),
                        e.append("</a>")
                    }
                    ), this),
                    e.append('</div></li><li class="import-popup__item"><svg class="import-popup__item-icon svg-icon"><use xlink:href="#common--export--google-sheets"></use></svg><div class="new-import__in-modal"><span class="new-import__in-modal__title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Import from Google Sheets"), "light_escape", null, !0)),
                    e.append('</span><div class="new-import__in-modal__descr">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Import from Google Sheets Description"), "light_escape", null, !0)),
                    e.append('</div><div class="new-import__in-modal__actions"><div class="modal-export__format-google"></div></div></div></li></ul><a id="show_imported_list" class="new-import__in-modal__show-imported-list blue-link"href="#">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "new_import_modal_show_list"), "light_escape", null, !0)),
                    e.append('</a><div id="new_import_iframe_wrapper" class="new-import__in-modal__loading"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "customers" == ("entity"in i ? i.entity : "") && (i.entity_lang_1 = this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), 10),
                    i.entity_lang_2 = twig.filter.lower(this.env_, this.env_.filter("i18n", "Customers"))),
                    i.items = [{
                        id: "full",
                        option: this.env_.filter("format", this.env_.filter("i18n", "All %s"), "entity_lang_2"in i ? i.entity_lang_2 : "")
                    }, {
                        id: "current_filter",
                        option: this.env_.filter("format", this.env_.filter("i18n", "All %s (filter applied)"), "entity_lang_2"in i ? i.entity_lang_2 : "")
                    }],
                    "is_list"in i && i.is_list && (i.items = twig.filter.merge("items"in i ? i.items : "", [{
                        id: "one_page",
                        option: this.env_.filter("format", this.env_.filter("i18n", "Current page only (customers)"), "entity_lang_2"in i ? i.entity_lang_2 : "")
                    }]));
                    var a = t;
                    t = new twig.StringBuffer,
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "content",
                        selected: "full",
                        items: "items"in i ? i.items : "",
                        class_name: "modal-export__select"
                    })),
                    i.select = new twig.Markup(t.toString()),
                    t = a,
                    "export" == ("modal_type"in i ? i.modal_type : "") ? i.caption = this.env_.filter("format", this.env_.filter("i18n", "%s Export"), "entity_lang_1"in i ? i.entity_lang_1 : "") : i.caption = this.env_.filter("i18n", "Import"),
                    t.append('<div class="modal-body__inner export_popup clearfix"><div class="modal-export__header"><h3 class="modal-export__header-title">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append('</h3><div class="modal-export__header-buttons">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    "export" == ("modal_type"in i ? i.modal_type : "") && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "caption"in i ? i.caption : "",
                        class_name: "button-input_blue modal-export__create-button"
                    })),
                    t.append('</div></div><div class="modal-export__formats">'),
                    i._parent = i;
                    var s = "formats"in i ? i.formats : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        p.revindex0 = l - 1,
                        p.revindex = l,
                        p.length = l,
                        p.last = 1 === l
                    }
                    twig.forEach(s, (function(n, a) {
                        if (i._key = a,
                        i.format = n,
                        t.append('<input class="modal-export__format-input hidden" name="type" '),
                        twig.attr(p, "first") && t.append("checked"),
                        t.append(' type="radio" id="'),
                        t.append(twig.filter.escape(this.env_, "modal_type"in i ? i.modal_type : "", "light_escape", null, !0)),
                        t.append("_"),
                        t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "value"), "light_escape", null, !0)),
                        t.append('" value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "value"), "light_escape", null, !0)),
                        t.append('" /><label class="modal-export__format" for="'),
                        t.append(twig.filter.escape(this.env_, "modal_type"in i ? i.modal_type : "", "light_escape", null, !0)),
                        t.append("_"),
                        t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "value"), "light_escape", null, !0)),
                        t.append('"><div class="modal-export__format-icon"><svg class="svg-icon '),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("format"in i ? i.format : "", "icon"), "class_name"), "light_escape", null, !0)),
                        t.append('"><use xlink:href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("format"in i ? i.format : "", "icon"), "source"), "light_escape", null, !0)),
                        t.append('"></use></svg></div><div class="modal-export__format-content"><div class="modal-export__format-title">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "name"), "light_escape", null, !0)),
                        t.append('</div><div class="modal-export__format-text">'),
                        t.append(twig.attr("format"in i ? i.format : "", "description")),
                        t.append("</div>"),
                        !twig.attr("format"in i ? i.format : "", "external_source"))
                            if ("import" == ("modal_type"in i ? i.modal_type : "")) {
                                t.append('<input type="file" id="new_import_load_'),
                                t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "value"), "light_escape", null, !0)),
                                t.append("_"),
                                t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "entity_source"), "light_escape", null, !0)),
                                t.append('" class="new_import_load hidden" data-format="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "value"), "light_escape", null, !0)),
                                t.append('" tabindex="-1" name="DATA_FILE"><div class="new-import__in-modal__actions"><label for="new_import_load_'),
                                t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "value"), "light_escape", null, !0)),
                                t.append("_"),
                                t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "entity_source"), "light_escape", null, !0)),
                                t.append('"><div class="button-input" id="new_import_load_btn"><span class="button-input-inner "><span class="button-input-inner__text">'),
                                t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "new_import_modal_load_file"), "light_escape", null, !0)),
                                t.append("</span></span></div></label>");
                                var s = twig.attr("format"in i ? i.format : "", "example");
                                twig.forEach(s, (function(e, n) {
                                    i._key = n,
                                    i.ex = e,
                                    t.append('<a class="new-import__in-modal__example blue-link" href="/example/import_example_'),
                                    t.append(twig.filter.escape(this.env_, "ex"in i ? i.ex : "", "light_escape", null, !0)),
                                    t.append("_beta_"),
                                    t.append(twig.filter.escape(this.env_, "lang_id"in i ? i.lang_id : "", "light_escape", null, !0)),
                                    "customers" == ("entity"in i ? i.entity : "") && twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_full_enabled") && t.append("_amochats"),
                                    t.append('.csv"target="_blank">'),
                                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "new_import_modal_example"), "light_escape", null, !0)),
                                    t.append("</a>")
                                }
                                ), this),
                                t.append("</div>")
                            } else
                                t.append(twig.filter.escape(this.env_, "select"in i ? i.select : "", "light_escape", null, !0)),
                                twig.attr("format"in i ? i.format : "", "need_encoding") && (t.append('<div class="modal-export__format-encoding">'),
                                new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    name: "encoding",
                                    id: "encoding-checkbox-input",
                                    checked: !1
                                })),
                                t.append('<label for="encoding-checkbox-input">'),
                                t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "ASCII encoding"), "light_escape", null, !0)),
                                t.append("</label></div>"));
                        twig.attr("format"in i ? i.format : "", "external_source") && ("export" == ("modal_type"in i ? i.modal_type : "") ? (t.append('<div class="modal-export__format-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "external_source"), "light_escape", null, !0)),
                        t.append('"></div><div class="modal-export__format-folder hidden"><span class="modal-export__folder-text">'),
                        t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                        t.append("</span>"),
                        new (e._get("interface/common/arrow_icon.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "modal-export__folder-arrow"
                        })),
                        t.append('<span class="modal-export__folder-name"></span></div>')) : (t.append('<div class="modal-export__format-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("format"in i ? i.format : "", "external_source"), "light_escape", null, !0)),
                        t.append(' new-import__in-modal__actions"></div>'))),
                        t.append("</div></label>"),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append("</div>"),
                    "import_clientbank_exchange" != ("import_type"in i ? i.import_type : "") && (t.append('<a id="show_imported_list" class="new-import__in-modal__show-imported-list blue-link" href="#">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "new_import_modal_show_list"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_export"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_export", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="modal-body__inner mail_popup" style="position: relative; height: 100%;"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'),
                    e.append('<style>span.spinner-icon{position: absolute;top:50%;left: 50%;z-index: 999;}</style><span class="spinner-icon" id="loadImg"></span><iframe id="mail_iframe" src="'),
                    e.append(twig.filter.escape(this.env_, "iframeUrl"in t ? t.iframeUrl : "", "light_escape", null, !0)),
                    e.append('" frameborder="0" style="width: 100%; height: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;" onload="document.getElementById(\'loadImg\').style.display=\'none\';"></iframe></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_mail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/mail", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "title"in i && i.title || (i.title = twig.attr("lang"in i ? i.lang : "", "multiple_reassign_title")),
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, "title"in i ? i.title : ""), "light_escape", null, !0)),
                    t.append("</h2>"),
                    "change_status" == ("action"in i ? i.action : "") ? new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "managers"in i ? i.managers : "")) : (t.append("<div>"),
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: [twig.attr(twig.attr("managers"in i ? i.managers : "", "items"), twig.attr("managers"in i ? i.managers : "", "selected"), void 0, "array")],
                        class_name: "modal-reassign__users-select",
                        id: "reassign-users_select_holder",
                        input_name: "reassign_user_id"
                    })),
                    t.append("</div>")),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_reassign"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/reassign", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var a = twig.attr("managers"in i ? i.managers : "", "items");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        twig.attr("item"in i ? i.item : "", "id") == twig.attr("managers"in i ? i.managers : "", "selected") && (i.manager_name = twig.attr("item"in i ? i.item : "", "option"))
                    }
                    ), this),
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.filter.replace("title_before"in i ? i.title_before : "", {
                        "#NAME#": "manager_name"in i ? i.manager_name : ""
                    })), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "title_after"in i ? i.title_after : "", "light_escape", null, !0)),
                    t.append('</h2><input type="hidden" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("managers"in i ? i.managers : "", "selected"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_reassign_linked"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/reassign_linked", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "accept_text"in i && i.accept_text || (i.accept_text = twig.attr("lang"in i ? i.lang : "", "confirm__yes")),
                    "decline_text"in i && i.decline_text || (i.decline_text = twig.attr("lang"in i ? i.lang : "", "confirm__no")),
                    t.append('<div class="modal-body__inner">'),
                    "no_close"in i && i.no_close || t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'),
                    t.append('<h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, "text"in i ? i.text : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    i._parent = i;
                    var a = "message"in i ? i.message : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.item = e,
                        t.append('<p class="modal-body__paragraph-text">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", twig.attr("item"in i ? i.item : "", "text")), "light_escape", null, !0)),
                        t.append("</p>")
                    }
                    ), this),
                    t.append('<div class="modal-body__sign-control">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "sign",
                        class_name: "signed-confirm-modal_sign",
                        text: "sign_label"in i ? i.sign_label : "",
                        value: "signed"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        no_cancel: "no_cancel"in i ? i.no_cancel : "",
                        button_text: "accept_text"in i ? i.accept_text : "",
                        cancel_text: "decline_text"in i ? i.decline_text : "",
                        button_class: "button_class"in i ? i.button_class : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_signed_confirm"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/signed_confirm", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "msg"in t && t.msg || (t.msg = twig.attr("lang"in t ? t.lang : "", "modal_success")),
                    e.append('<div class="modal-body__inner modal-body__inner-success js-modal-success"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><div class="modal-body__inner__success"><span class="icon icon-inline icon-modal-success"></span></div><p class="modal-body__innner__message-success">'),
                    e.append("msg"in t ? t.msg : ""),
                    e.append("</p></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_success"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/success", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_result"), "light_escape", null, !0)),
                    t.append("</h2><div>"),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "modal_todo_result",
                        class_name: "modal__todo-result__textarea"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        cancel_text: twig.attr("lang"in i ? i.lang : "", "cancel")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_todo_result"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/todo_result", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner__todo-types__item__icon-select '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('"><div class="modal-body__inner__todo-types__item__icon-select-wrapper"><div class="modal-body__inner__todo-types__item__iconpick">'),
                    i._parent = i;
                    var a = twig.range(0, 71);
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.i = e,
                        t.append('<div class="modal-body__inner__todo-types__item__iconpick__icon-wrap"><svg class="svg-icon svg-tasks--types-icons--'),
                        t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                        t.append('-dims modal-body__inner__todo-types__item__iconpick__icon" data-icon-id="'),
                        t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                        t.append('" '),
                        "color"in i && i.color && (t.append('style="fill: '),
                        t.append(twig.filter.escape(this.env_, "color"in i ? i.color : "", "light_escape", null, !0)),
                        t.append(';"')),
                        t.append('><use xlink:href="#tasks--types-icons--'),
                        t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                        t.append('"></use></svg></div>')
                    }
                    ), this),
                    t.append('</div><div class="modal-body__inner__todo-types__item__colorpick"></div></div><div class="modal-body__inner__todo-types__item__iconpick__ok-wrapper">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        text: "OK",
                        class_name: "modal-body__inner__todo-types__item__iconpick__ok"
                    }),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_todo_type_icon_picker"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/todo_type_icon_picker", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.is_responsible_user_available = twig.attr("_account_features"in i ? i._account_features : "", "responsible_user_available"),
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    "is_responsible_user_available"in i && i.is_responsible_user_available && (t.append('<div class="modal-body__ur-managers">'),
                    "with_remove"in i && i.with_remove && (t.append('<p style="margin-bottom:10px">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "users_reassign_confirm"), "light_escape", null, !0)),
                    t.append("</p>")),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "managers"in i ? i.managers : "")),
                    t.append("</div>")),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: "is_responsible_user_available"in i && i.is_responsible_user_available ? this.env_.filter("i18n", "Save") : this.env_.filter("i18n", "Delete")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_users_reassign"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/users_reassign", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="modal '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="modal-scroller custom-scroll"><div class="modal-body modal-body-loading '),
                    "float_animation"in t && t.float_animation && e.append("modal-body-float-animation"),
                    e.append('"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<li class="tags-lib__item tags-lib__item_suggest js-suggest__add-new" data-id="new"><div class="tags-lib__item-name h-text-overflow" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "fast_tags_empty"), "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon svg-common--arrow-left-cornered-dims tags-lib__item-arrow-icon"><use xlink:href="#common--arrow-left-cornered"></use></svg>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "fast_tags_empty"), "light_escape", null, !0)),
                    e.append('&nbsp;<span class="new-tag">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span></div></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_add_new"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/add_new", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "text"in t && t.text || (t.text = this.env_.filter("i18n", "You don't have any tags")),
                    e.append('<li class="tags-lib__item tags-lib__item_empty-plug '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(' suggest__empty-plug"><div class="tags-lib__item-name">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_empty_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/empty_plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/common/tags/wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "modal-tags__tags-wrapper",
                        items: "existed_tags"in i ? i.existed_tags : ""
                    })),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="modal-body__tag__wrapper"><span class="modal-body__tag tag" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("tag"in t ? t.tag : "", "id"), "light_escape", null, !0)),
                    e.append('"><span class="modal-body__tag__v-dots"></span><span class="modal-body__tag__inner">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("tag"in t ? t.tag : "", "label"), "light_escape", null, !0)),
                    e.append("</span></span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "text"in t && t.text || (t.text = this.env_.filter("i18n", "No tags found for «%s»")),
                    e.append('<li class="tags-lib__item tags-lib__item_not-found-plug '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(' suggest__not-found-plug"><div class="tags-lib__item-name">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.replace("text"in t ? t.text : "", {
                        "%s": "search_term"in t ? t.search_term : ""
                    }), "light_escape", null, !0)),
                    e.append("</div></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_not_found_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/not_found_plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        loader: twig.bind(this.block_loader, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="card-task__type-wrapper '),
                    t.append(twig.filter.escape(this.env_, "wrapper_class_name"in i ? i.wrapper_class_name : "", "light_escape", null, !0)),
                    t.append('"><div class="card-task__type" data-class-name-text="'),
                    t.append(twig.filter.escape(this.env_, "text_class_name"in i ? i.text_class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/tasks_type_name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        icon_class_name: "card-task__type-icon",
                        type: "type"in i ? i.type : "",
                        type_name: "type_name"in i ? i.type_name : "",
                        type_icon: "type_icon"in i ? i.type_icon : "",
                        type_color: "type_color"in i ? i.type_color : ""
                    })),
                    t.append('</div><div class="card-task__type-opened '),
                    t.append(twig.filter.escape(this.env_, "opened_class_name"in i ? i.opened_class_name : "", "light_escape", null, !0)),
                    t.append('" style="display: none"><ul class="card-task__types custom-scroll">'),
                    i.rand = twig.functions.random(this.env_, 1e3),
                    i._parent = i;
                    var a = "task_types"in i ? i.task_types : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.task_type = e,
                        t.append('<li class="card-task__types-item"><input type="radio" class="hidden" id="task_type_'),
                        t.append(twig.filter.escape(this.env_, "rand"in i ? i.rand : "", "light_escape", null, !0)),
                        t.append("_"),
                        t.append(twig.filter.escape(this.env_, twig.attr("task_type"in i ? i.task_type : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        twig.attr("task_type"in i ? i.task_type : "", "id") == ("type"in i ? i.type : "") && t.append('checked="checked"'),
                        t.append(' value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("task_type"in i ? i.task_type : "", "id"), "light_escape", null, !0)),
                        t.append('" name="type"><label class="card-task__types-item-label '),
                        "custom" == twig.attr("task_type"in i ? i.task_type : "", "id") && t.append("card-task__types-item-label_custom"),
                        t.append('" for="task_type_'),
                        t.append(twig.filter.escape(this.env_, "rand"in i ? i.rand : "", "light_escape", null, !0)),
                        t.append("_"),
                        t.append(twig.filter.escape(this.env_, twig.attr("task_type"in i ? i.task_type : "", "id"), "light_escape", null, !0)),
                        t.append('">'),
                        "need_option_icon"in i && i.need_option_icon && (1 == twig.attr("task_type"in i ? i.task_type : "", "id") ? (t.append('<span class="task_type_select__icon icon icon-inline icon-follow-up"></span>'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_follow_up"), "light_escape", null, !0))) : 2 == twig.attr("task_type"in i ? i.task_type : "", "id") ? (t.append('<span class="task_type_select__icon icon icon-inline icon-case-red"></span>'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_meeting"), "light_escape", null, !0))) : "custom" == twig.attr("task_type"in i ? i.task_type : "", "id") ? (t.append('<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--0-dims"><use xlink:href="#tasks--types-icons--0"></use></svg></span>'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_custom"), "light_escape", null, !0))) : (t.append('<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--'),
                        t.append(twig.filter.escape(this.env_, twig.attr("task_type"in i ? i.task_type : "", "icon_id"), "light_escape", null, !0)),
                        t.append('-dims" style="fill: #'),
                        twig.attr("task_type"in i ? i.task_type : "", "color") ? t.append(twig.filter.escape(this.env_, twig.attr("task_type"in i ? i.task_type : "", "color"), "light_escape", null, !0)) : t.append("568FFA"),
                        t.append('"><use xlink:href="#tasks--types-icons--'),
                        t.append(twig.filter.escape(this.env_, twig.attr("task_type"in i ? i.task_type : "", "icon_id"), "light_escape", null, !0)),
                        t.append('"></use></svg></span>'))),
                        t.append(twig.attr("task_type"in i ? i.task_type : "", "option")),
                        "custom" == twig.attr("task_type"in i ? i.task_type : "", "id") && t.append('<input type="text" name="task_type_name" class="card-task__types-item-custom-input" maxlength="16"><input type="hidden" name="icon_id"><input type="hidden" name="icon_color">'),
                        t.append("</label></li>")
                    }
                    ), this),
                    t.append("</ul></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_task_types_in_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/task_types/in_card", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="task-types-holder">'),
                    i.items = [{
                        id: 1,
                        option: '<span class="task_type_select__icon icon icon-inline icon-follow-up"></span>' + twig.attr("lang"in i ? i.lang : "", "tasks_follow_up"),
                        should_be_raw: !0
                    }, {
                        id: 2,
                        option: '<span class="task_type_select__icon icon icon-inline icon-case-red"></span>' + twig.attr("lang"in i ? i.lang : "", "tasks_meeting"),
                        should_be_raw: !0
                    }],
                    i._parent = i;
                    var a = "task_types"in i ? i.task_types : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.custom_task_type = e,
                        i.icon_id = this.env_.filter("default_task_type_icon", twig.attr("custom_task_type"in i ? i.custom_task_type : "", "icon_id")),
                        i.color = this.env_.filter("default_task_type_color", twig.attr("custom_task_type"in i ? i.custom_task_type : "", "color")),
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("custom_task_type"in i ? i.custom_task_type : "", "id"),
                            option: '<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--' + ("icon_id"in i ? i.icon_id : "") + '-dims" style="fill: ' + ("color"in i ? i.color : "") + '"><use xlink:href="#tasks--types-icons--' + ("icon_id"in i ? i.icon_id : "") + '"></use></svg></span>' + twig.attr("custom_task_type"in i ? i.custom_task_type : "", "option"),
                            should_be_raw: !0
                        }])
                    }
                    ), this),
                    i.items = twig.filter.merge("items"in i ? i.items : "", [{
                        id: "custom",
                        class_name: "js-task-type-custom",
                        option: '<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--0-dims"><use xlink:href="#tasks--types-icons--0"></use></svg></span>' + twig.attr("lang"in i ? i.lang : "", "tasks_custom"),
                        should_be_raw: !0
                    }]),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        bg_color: "bg_color"in i ? i.bg_color : "",
                        id: "task_edit_type",
                        selected: "selected"in i ? i.selected : "",
                        class_name: "task_type_select js-task-type-select " + ("class_name"in i ? i.class_name : ""),
                        items: "items"in i ? i.items : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    t.append('<div class="task-types-holder__custom"><svg class="task-types-holder__custom__icon svg-icon svg-tasks--types-icons--0-dims"><use xlink:href="#tasks--types-icons--0"></use></svg>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "task_type_custom",
                        name: "task_type_name",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "tasks_custom_placeholder"),
                        class_name: "task-types-holder__custom__input",
                        max_length: "16"
                    })),
                    t.append('<span class="task-types-holder__custom__cancel"><span class="icon icon-clear"></span></span><span class="spinner-icon task-types-holder__custom__loader"></span></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_task_types_in_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/task_types/in_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i;
                    var n = e;
                    e = new twig.StringBuffer,
                    t._parent = t;
                    var a = "imgs"in t ? t.imgs : "";
                    twig.forEach(a, (function(i, n) {
                        t.key = n,
                        t.img = i,
                        e.append('<img data-key="'),
                        e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                        e.append('" src="'),
                        e.append(twig.filter.escape(this.env_, "img"in t ? t.img : "", "light_escape", null, !0)),
                        e.append('" class="popular-chat-swiper__img">')
                    }
                    ), this),
                    t.swiper = new twig.Markup(e.toString()),
                    (e = n).append('<div class="popular-chat-swiper" tabindex="-1"><div class="popular-chat-swiper__show-container">'),
                    twig.attr("_account_features"in t ? t._account_features : "", "global_marketplace") && e.append('<svg class="svg-icon popular-chat-swiper__arrow-left svg-settings--widgets--arrow-left-dims"><use xlink:href="#settings--widgets--arrow-left"></use></svg>'),
                    e.append('<div class="popular-chat-swiper__arrow-left popular-chat-swiper__img-arrow"></div><div class="popular-chat-swiper__arrow-right popular-chat-swiper__img-arrow"></div>'),
                    e.append(twig.filter.escape(this.env_, "swiper"in t ? t.swiper : "", "light_escape", null, !0)),
                    twig.attr("_account_features"in t ? t._account_features : "", "global_marketplace") && e.append('<svg class="svg-icon popular-chat-swiper__arrow-right svg-settings--widgets--arrow-left-dims "><use xlink:href="#settings--widgets--arrow-left"></use></svg>'),
                    e.append('</div><div class="popular-chat-swiper__mini-container">'),
                    e.append(twig.filter.escape(this.env_, "swiper"in t ? t.swiper : "", "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_widgets_swiper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/widgets/swiper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        data_attr: twig.bind(this.block_data_attr, this),
                        logo: twig.bind(this.block_logo, this),
                        desc: twig.bind(this.block_desc, this),
                        button: twig.bind(this.block_button, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("widget"in t ? t.widget : "", "code") && ("integration" == ("type"in t ? t.type : "") ? (t.status_text = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "Installed" : "global_marketplace"in t && t.global_marketplace ? "Install" : "Key generated",
                    t.status_class = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "installed" : "global_marketplace"in t && t.global_marketplace ? "install" : "Key generated") : "service" == ("type"in t ? t.type : "") ? (t.status_text = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "Installed" : "Disconnected",
                    t.status_class = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "installed" : "install") : ("own_integrations" == ("category"in t ? t.category : "") ? "global_marketplace"in t && t.global_marketplace ? (t.status_text = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "Installed" : twig.attr("widget"in t ? t.widget : "", "is_showcase") ? "View" : "Install",
                    t.status_class = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "installed" : "install") : (t.status_text = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "Installed" : "Disconnected",
                    t.status_class = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "installed" : "disconnected") : "isBroadcasting"in t && t.isBroadcasting ? (t.status_text = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "Connect" : twig.attr("widget"in t ? t.widget : "", "is_showcase") ? "View" : "Install",
                    t.status_class = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "connect" : "install") : (t.status_text = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "Installed" : twig.attr("widget"in t ? t.widget : "", "is_showcase") ? "View" : "Install",
                    t.status_class = "installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "installed" : "install"),
                    "base_integration" == ("type"in t ? t.type : "") && ("global_marketplace"in t && t.global_marketplace ? (t.status_text = twig.contains(["disconnected", "installed"], twig.attr("widget"in t ? t.widget : "", "state")) ? "Installed" : twig.attr("widget"in t ? t.widget : "", "is_showcase") ? "View" : "Install",
                    t.status_class = twig.contains(["disconnected", "installed"], twig.attr("widget"in t ? t.widget : "", "state")) ? "installed" : "install") : t.status_class = "not_installed" == twig.attr("widget"in t ? t.widget : "", "state") ? "install" : "disconnected" == twig.attr("widget"in t ? t.widget : "", "state") ? "installed" : twig.attr("widget"in t ? t.widget : "", "state"))),
                    t.logo = twig.attr("widget"in t ? t.widget : "", "logo"),
                    t.descr = twig.attr("widget"in t ? t.widget : "", "descr"),
                    t.name = twig.attr(twig.attr("widget"in t ? t.widget : "", "langs"), "widget.name", void 0, "array") ? this.env_.filter("striptags", twig.attr(twig.attr("widget"in t ? t.widget : "", "langs"), "widget.name", void 0, "array")) : twig.attr("widget"in t ? t.widget : "", "name"),
                    t.card_type = "type"in t && t.type ? "type"in t ? t.type : "" : "widget",
                    t.status_text = this.env_.filter("i18n", "status_text"in t ? t.status_text : ""),
                    "short_rating"in t || (t.short_rating = !1),
                    e.append('<div class="widget-card__wrapper '),
                    "from_search"in t && t.from_search && e.append("widget-card-block_wrapper-search"),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('"'),
                    e.append(this.renderBlock("data_attr", t, i)),
                    e.append(">"),
                    "Y" != twig.attr("widget"in t ? t.widget : "", "must_pay") || "global_marketplace"in t && t.global_marketplace ? !twig.attr("widget"in t ? t.widget : "", "dp_ready") || "global_marketplace"in t && t.global_marketplace || e.append('<svg class="dp-pic svg-common--widgets--ribbon--digital-pipeline-dims"><use xlink:href="#common--widgets--ribbon--digital-pipeline"></use></svg>') : e.append('<svg class="dp-pic svg-common--widgets--ribbon--advaced-dims"><use xlink:href="#common--widgets--ribbon--advaced"></use></svg>'),
                    e.append('<div id="'),
                    "bf.skype" == twig.attr("widget"in t ? t.widget : "", "code") ? e.append("skype") : e.append(twig.filter.escape(this.env_, twig.attr("widget"in t ? t.widget : "", "code"), "light_escape", null, !0)),
                    e.append('" data-code="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("widget"in t ? t.widget : "", "code"), "light_escape", null, !0)),
                    e.append('" class="widget-card '),
                    "base_integration" == ("card_type"in t ? t.card_type : "") && e.append(" service-card-block-full "),
                    "widget" == ("card_type"in t ? t.card_type : "") ? e.append("widget-card-block js-open-widget-card") : "new-widget" == ("card_type"in t ? t.card_type : "") ? e.append("widget-card-new") : "integration" == ("card_type"in t ? t.card_type : "") ? e.append("integration-card-block") : "service" == ("card_type"in t ? t.card_type : "") ? e.append("service-card-block") : e.append("widget-card-block"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "status_class"in t ? t.status_class : "", "light_escape", null, !0)),
                    e.append('" data-type="'),
                    e.append(twig.filter.escape(this.env_, "card_type"in t ? t.card_type : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("logo", t, i)),
                    e.append('<div class="widget-card-notice"><div class="widget-card-description">'),
                    "isBroadcasting"in t && t.isBroadcasting ? (e.append('<div class="widget-card-description__heading"><p class="widget-card-description__name h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('</p><p class="widget-card-description__text h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, "descr"in t ? t.descr : "", "light_escape", null, !0)),
                    e.append("</p></div>")) : (e.append('<p class="widget-card-description__name h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</p>")),
                    "widget" != ("card_type"in t ? t.card_type : "") || 0 != twig.attr("widget"in t ? t.widget : "", "custom") || !twig.attr("widget"in t ? t.widget : "", "show_stars") || "global_marketplace"in t && t.global_marketplace || (e.append('<span class="widget-card-description__rating">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("widget"in t ? t.widget : "", "rating"), "light_escape", null, !0)),
                    e.append('<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#92989B"/></svg></span>')),
                    e.append("</div>"),
                    e.append(this.renderBlock("desc", t, i)),
                    e.append(this.renderBlock("button", t, i)),
                    e.append("</div></div></div>"))
                }
                ,
                t.prototype.block_data_attr = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_logo = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_desc = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_button = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_widgets_template"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/widgets/template", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/chats/messages/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="js-audio_wrapper audio_wrapper"><a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" class="js-call-play icon--play action_icons"><span class="icon icon-inline js-icon-play icon-call-link-listen"></span><span class="icon icon-inline js-icon-stop icon-call-link-stop"></span><span class="spinner-icon player-loading"></span></a><a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" download="" class="download_icon" target="_blank"><span class="icon icon-inline icon-call-link-download"></span></a></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages_audio"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages/audio", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<p class="note-chat_text"><span class="block-selectable">'),
                    e.append(this.renderBlock("content", t, i)),
                    e.append("</span></p>")
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages_base"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages/base", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/chats/messages/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="file_wrapper"><span class="icon icon-inline icon-attach"></span><a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" target="_blank" class="file_link">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</a></span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages/file", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/chats/messages/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="image_wrapper"><a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" target="_blank"><img src="'),
                    e.append(twig.filter.escape(this.env_, ("preview"in t ? t.preview : "") || ("link"in t ? t.link : ""), "light_escape", null, !0)),
                    e.append('" alt="'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append('" class="chats__conversation__message-image"/></a></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages_image"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages/image", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/chats/messages/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="location_wrapper"><span class="icon icon-inline icon-map-pointer"></span><a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" target="_blank" class="map_link">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</a></span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages_location"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages/location", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/chats/messages/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_chats_messages_text"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/chats/messages/text", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        extend: twig.bind(this.block_extend, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "title"in i && i.title || (i.title = this.env_.filter("i18n", "multiple_modal_add_" + ("subentity"in i ? i.subentity : "") + "_title")),
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, "title"in i ? i.title : ""), "light_escape", null, !0)),
                    t.append("</h2><div>"),
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: [twig.attr(twig.attr("managers"in i ? i.managers : "", "items"), twig.attr("managers"in i ? i.managers : "", "selected"), void 0, "array")],
                        class_name: "modal-reassign__users-select",
                        id: "reassign-users_select_holder",
                        input_name: "reassign_user_id"
                    })),
                    t.append("</div>"),
                    t.append(this.renderBlock("extend", i, n)),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: twig.attr("lang"in i ? i.lang : "", "multiple_modal_submit_button_title")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_extend = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_add_entity_add_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/add_entity/add_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner export_popup clearfix"><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Export completed"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    twig.attr("last_load_file"in i ? i.last_load_file : "", "has_last") && (t.append('<div class="modal-export__last-file"><svg class="svg-icon svg-common--export--load-file-dims"><use xlink:href="#common--export--load-file"></use></svg><div class="modal-export__file-container"><div class="modal-export__file-info"><a class="modal-export__file-name" download="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "name"), "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "link"), "light_escape", null, !0)),
                    t.append('" '),
                    t.append(twig.attr("last_load_file"in i ? i.last_load_file : "", "blank") ? 'target="_blank"' : ""),
                    t.append(">"),
                    twig.attr("last_load_file"in i ? i.last_load_file : "", "blank") ? t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "link"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "name"), "light_escape", null, !0)),
                    t.append("</a>"),
                    "mb" == twig.attr("last_load_file"in i ? i.last_load_file : "", "file_size_unit") ? i.unit = this.env_.filter("i18n", "MB") : i.unit = this.env_.filter("i18n", "KB"),
                    t.append('<span class="modal-export__file-size">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "file_size"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, "unit"in i ? i.unit : "", "light_escape", null, !0)),
                    t.append("&nbsp;/&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "elements_count"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "line,lines"), twig.attr("last_load_file"in i ? i.last_load_file : "", "elements_count")), "light_escape", null, !0)),
                    t.append('</span></div><span class="modal-export__file-time">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "date") + " " + this.env_.filter("i18n", "at") + " " + twig.attr("last_load_file"in i ? i.last_load_file : "", "time"), "light_escape", null, !0)),
                    t.append("</span></div></div>"),
                    twig.attr("last_load_file"in i ? i.last_load_file : "", "blank") || (t.append('<div class="modal-body__actions"><a download="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "name"), "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "link"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Download file"),
                        svg_class_name: "common--export--download",
                        class_name: "button-input_blue modal-export__save-button"
                    })),
                    t.append("</a></div>"))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_complete"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/complete", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        additional_formats: twig.bind(this.block_additional_formats, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/modal/export/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_additional_formats = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/common/modal/export/format_template.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "export_vcf",
                        value: "vcf",
                        icon: "v-card",
                        title: twig.attr("lang"in i ? i.lang : "", "popup_export_vcard"),
                        description: twig.attr("lang"in i ? i.lang : "", "export_vcard")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_contacts"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/contacts", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        is_list_params: twig.bind(this.block_is_list_params, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/modal/export/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.entity_lang_1 = this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), 10),
                    t.entity_lang_2 = twig.filter.lower(this.env_, this.env_.filter("i18n", "Customers")),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_is_list_params = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_list"in t && t.is_list && (t.items = twig.filter.merge("items"in t ? t.items : "", [{
                        id: "one_page",
                        option: this.env_.filter("format", this.env_.filter("i18n", "Current page only (customers)"), "entity_lang_2"in t ? t.entity_lang_2 : "")
                    }]))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_customers"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/customers", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/common/modal/export/format_template.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "export_excel",
                        value: "excel",
                        icon: "excel",
                        title: this.env_.filter("i18n", "Excel"),
                        description: this.env_.filter("format", this.env_.filter("i18n", "Export your customer list to a Microsoft Excel file"), "entity_lang_1"in i ? i.entity_lang_1 : "")
                    })),
                    new (e._get("interface/common/modal/export/format_template.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "export_csv",
                        value: "csv",
                        icon: "csv",
                        title: this.env_.filter("i18n", "CSV-file"),
                        description: this.env_.filter("i18n", "Export your customer list to a format supported by programs such as Google Sheets, OpenOffice, Excel and more"),
                        need_encoding: !0
                    })),
                    new (e._get("interface/common/modal/export/format_template.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "export_google",
                        value: "google",
                        icon: "google-sheets",
                        title: this.env_.filter("i18n", "Google Sheets"),
                        description: this.env_.filter("i18n", "Export customers to google"),
                        need_container: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_default_formats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/default_formats", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<input class="modal-export__format-input hidden" name="type" type="radio" id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)),
                    t.append('"/><label class="modal-export__format" for="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"><div class="modal-export__format-icon"><svg class="svg-icon svg-common--export--'),
                    t.append(twig.filter.escape(this.env_, "icon"in i ? i.icon : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#common--export--'),
                    t.append(twig.filter.escape(this.env_, "icon"in i ? i.icon : "", "light_escape", null, !0)),
                    t.append('"></use></svg></div><div class="modal-export__format-content"><div class="modal-export__format-title">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('</div><div class="modal-export__format-text">'),
                    t.append(twig.filter.escape(this.env_, "description"in i ? i.description : "", "light_escape", null, !0)),
                    t.append("</div>"),
                    t.append(twig.filter.escape(this.env_, "select"in i ? i.select : "", "light_escape", null, !0)),
                    "need_encoding"in i && i.need_encoding && (t.append('<div class="modal-export__format-encoding">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "encoding",
                        id: "encoding-checkbox-input",
                        value: "on",
                        checked: !1
                    })),
                    t.append('<label for="encoding-checkbox-input">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "ASCII encoding"), "light_escape", null, !0)),
                    t.append("</label></div>")),
                    "need_container"in i && i.need_container && (t.append('<div class="modal-export__format-'),
                    t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)),
                    t.append('"></div>')),
                    t.append("</div></label>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_format_template"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/format_template", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        params: twig.bind(this.block_params, this),
                        is_list_params: twig.bind(this.block_is_list_params, this),
                        additional_formats: twig.bind(this.block_additional_formats, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append(this.renderBlock("params", i, n)),
                    t.append('<div class="modal-body__inner export_popup clearfix"><div class="modal-export__header"><h3 class="modal-export__header-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format", this.env_.filter("i18n", "%s Export"), "entity_lang_1"in i ? i.entity_lang_1 : ""), "light_escape", null, !0)),
                    t.append('</h3><div class="modal-export__header-buttons">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Export"),
                        class_name: "button-input_blue modal-export__create-button",
                        disabled: !0
                    })),
                    t.append('</div></div><div class="modal-export__formats">'),
                    new (e._get("interface/common/modal/export/default_formats.twig"))(this.env_).render_(t, i),
                    t.append(this.renderBlock("additional_formats", i, n)),
                    t.append("</div>"),
                    twig.attr("last_load_file"in i ? i.last_load_file : "", "has_last") && (t.append('<div class="modal-export__last-file"><span class="modal-export__file-time">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format", this.env_.filter("i18n", "Last exported: %s at %s"), twig.attr("last_load_file"in i ? i.last_load_file : "", "date"), twig.attr("last_load_file"in i ? i.last_load_file : "", "time")), "light_escape", null, !0)),
                    t.append("</span>"),
                    "mb" == twig.attr("last_load_file"in i ? i.last_load_file : "", "file_size_unit") ? i.unit = this.env_.filter("i18n", "MB") : i.unit = this.env_.filter("i18n", "KB"),
                    t.append('<span class="modal-export__file-size">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "file_size"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, "unit"in i ? i.unit : "", "light_escape", null, !0)),
                    t.append("&nbsp;/&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "elements_count"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "line,lines"), twig.attr("last_load_file"in i ? i.last_load_file : "", "elements_count")), "light_escape", null, !0)),
                    t.append('</span><div class="modal-export__file-container"><svg class="svg-icon svg-common--export--load-file-dims"><use xlink:href="#common--export--load-file"></use></svg><a class="modal-export__file-name" download="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "name"), "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "link"), "light_escape", null, !0)),
                    t.append('" '),
                    t.append(twig.attr("last_load_file"in i ? i.last_load_file : "", "blank") ? 'target="_blank"' : ""),
                    t.append(">"),
                    twig.attr("last_load_file"in i ? i.last_load_file : "", "blank") ? t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "link"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("last_load_file"in i ? i.last_load_file : "", "name"), "light_escape", null, !0)),
                    t.append("</a></div></div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.block_params = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.items = [{
                        id: "full",
                        option: this.env_.filter("format", this.env_.filter("i18n", "All %s"), "entity_lang_2"in i ? i.entity_lang_2 : "")
                    }, {
                        id: "current_filter",
                        option: this.env_.filter("format", this.env_.filter("i18n", "All %s (filter applied)"), "entity_lang_2"in i ? i.entity_lang_2 : "")
                    }],
                    t.append(this.renderBlock("is_list_params", i, n));
                    var a = t;
                    t = new twig.StringBuffer,
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "content",
                        selected: "full",
                        items: "items"in i ? i.items : "",
                        class_name: "modal-export__select"
                    })),
                    i.select = new twig.Markup(t.toString()),
                    t = a
                }
                ,
                t.prototype.block_is_list_params = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_list"in t && t.is_list && (t.items = twig.filter.merge("items"in t ? t.items : "", [{
                        id: "one_page",
                        option: twig.filter.lower(this.env_, this.env_.filter("i18n", "Current page only"))
                    }]))
                }
                ,
                t.prototype.block_additional_formats = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/modal/export/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_leads"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/leads", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    "list"in t && t.list) {
                        e.append('<ul class="ical_actions">'),
                        t._parent = t;
                        var n = "list"in t ? t.list : "";
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.item = i,
                            e.append("<li>"),
                            e.append(twig.filter.escape(this.env_, "item"in t ? t.item : "", "light_escape", null, !0)),
                            e.append("<br></li>")
                        }
                        ), this),
                        e.append("</ul>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_text_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/text_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="modal-body__inner export_popup clearfix"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "button_export"), "light_escape", null, !0)),
                    e.append('</h2><div id="export" class="popup_settings_block clearfix"><div class="export_popup__list clearfix"><div class="export_popup__item"><span class="export_popup__icon calendar"></span><span class="export_popup__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "ical_export_title"), "light_escape", null, !0)),
                    e.append("</span><p>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "export_ical"), "light_escape", null, !0)),
                    e.append('</p><a href="/v1/tasks/ical/'),
                    "query_string"in t && t.query_string && "?" != ("query_string"in t ? t.query_string : "") ? (e.append(twig.filter.escape(this.env_, "query_string"in t ? t.query_string : "", "light_escape", null, !0)),
                    e.append("&")) : e.append("?"),
                    e.append(twig.filter.escape(this.env_, "rss_link"in t ? t.rss_link : "", "light_escape", null, !0)),
                    e.append('" id="result_list_settings" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "ical_export_link"), "light_escape", null, !0)),
                    e.append('</a></div><div class="export_popup__item"><span class="export_popup__icon outlook"></span><span class="export_popup__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "outlook_export_title"), "light_escape", null, !0)),
                    e.append('</span><p><ul class="outlook_actions"><li>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "export_outlook_marker_list"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "export_outlook_marker_list_1"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "export_outlook_marker_list_2"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "export_outlook_marker_list_3"), "light_escape", null, !0)),
                    e.append('</li></ul></p><a href="webcal://'),
                    e.append(twig.filter.escape(this.env_, "host"in t ? t.host : "", "light_escape", null, !0)),
                    e.append("/v1/tasks/ical/"),
                    "query_string"in t && t.query_string && "?" != ("query_string"in t ? t.query_string : "") ? (e.append(twig.filter.escape(this.env_, "query_string"in t ? t.query_string : "", "light_escape", null, !0)),
                    e.append("&")) : e.append("?"),
                    e.append(twig.filter.escape(this.env_, "rss_link"in t ? t.rss_link : "", "light_escape", null, !0)),
                    e.append('" id="result_list_settings" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "outlook_export_title"), "light_escape", null, !0)),
                    e.append('</a></div><div class="export_popup__item"><span class="export_popup__icon calendar"></span><span class="export_popup__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_title"), "light_escape", null, !0)),
                    e.append("</span><p>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_text"), "light_escape", null, !0)),
                    e.append('</p><ul class="outlook_actions"><li>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_text_1"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_text_2"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_text_3"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_text_4"), "light_escape", null, !0)),
                    e.append("</li><li>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "google_export_text_5"), "light_escape", null, !0)),
                    e.append("</li></ul>"),
                    "" != ("rss_link"in t ? t.rss_link : "") && (e.append('<p class="text_link">https://'),
                    e.append(twig.filter.escape(this.env_, "host"in t ? t.host : "", "light_escape", null, !0)),
                    e.append("/v1/tasks/ical/"),
                    "query_string"in t && t.query_string && "?" != ("query_string"in t ? t.query_string : "") ? (e.append(twig.filter.escape(this.env_, "query_string"in t ? t.query_string : "", "light_escape", null, !0)),
                    e.append("&")) : e.append("?"),
                    e.append(twig.filter.escape(this.env_, "rss_link"in t ? t.rss_link : "", "light_escape", null, !0)),
                    e.append("&r="),
                    e.append(twig.filter.escape(this.env_, "rand"in t ? t.rand : "", "light_escape", null, !0)),
                    e.append("</p>")),
                    e.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_export_todo"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/export/todo", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="sheets-settings"><h3 class="widget-settings__chat-header">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Google Sheets settings"), "light_escape", null, !0)),
                    t.append('</h3><div class="new-import__checkbox '),
                    "show_import"in i && i.show_import || t.append(" hidden "),
                    t.append('">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "start_import",
                        id: "start_import",
                        checked: !1,
                        value: "Y",
                        text: this.env_.filter("i18n", "Import current entries")
                    })),
                    t.append('</div><div class="sheets-settings__sheets"></div><input type="hidden" id="sheets-settings__pipeline-id" name="pipeline_id" value="'),
                    t.append(twig.filter.escape(this.env_, "pipeline_id"in i ? i.pipeline_id : "", "light_escape", null, !0)),
                    t.append('"><div class="sheets-settings__setting sheets-settings__setting-tags"><div class="sheets-settings__setting-description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add tags"), "light_escape", null, !0)),
                    t.append('</div><div id="sheets-settings__tags" class="sheets-settings__tags sheets-settings__setting-field form-group__control">'),
                    new (e._get("interface/common/fast_tags/fast_tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        can_add: !0,
                        items: "selected_tags"in i ? i.selected_tags : ""
                    })),
                    t.append('</div></div><div class="sheets-settings__setting sheets-settings__setting-status"><div class="sheets-settings__setting-description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "lead_status"), "light_escape", null, !0)),
                    t.append('</div><div class="sheets-settings__setting-field form-group__control">'),
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        inner_class_name: "sheets-settings__setting-status-control",
                        class_name: "sheets-settings__setting-status-control",
                        has_pipelines: !0,
                        items: "pipelines"in i ? i.pipelines : "",
                        multiple: !1,
                        show_unsorted: !0,
                        name: "status_id",
                        selected_pipe: {
                            name: "selected_pipeline_id"
                        },
                        selected_pipeline_id: "selected_pipeline_id"in i ? i.selected_pipeline_id : "",
                        selected: "selected"in i ? i.selected : ""
                    })),
                    t.append('</div></div><div class="sheets-settings__setting sheets-settings__setting-users '),
                    "is_unsorted"in i && i.is_unsorted && t.append("h-hidden"),
                    t.append('"><div class="sheets-settings__setting-description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Responsible user"), "light_escape", null, !0)),
                    t.append('</div><div class="sheets-settings__setting-field-wrapper"><div class="sheets-settings__setting-field sheets-settings__setting-field-users form-group__control">'),
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        class_name: "sheets-settings__setting-field-suggest",
                        input_name: "responsible_user_id",
                        not_remove: !0
                    })),
                    t.append('</div></div></div><div class="sheets-settings__buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "sheets-settings__buttons-save button-input button-input-disabled"
                    }),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "sheets-settings__buttons-cancel"
                    }),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_google_sheets_settings"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/google_sheets/settings", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="new-import__entity-form__variants" '),
                    1 == ("hide_entity"in i ? i.hide_entity : "") && t.append(' style="display:none" '),
                    t.append(">"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "entities_items"in i ? i.entities_items : "",
                        selected: "element_type"in i ? i.element_type : "",
                        class_name: "new-import__cf-form__input",
                        name: "cf[add][0][element_type]"
                    })),
                    t.append("</div>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "cf_types"in i ? i.cf_types : "",
                        class_name: "new-import__cf-form__input",
                        id: "import_cf_form_type",
                        name: "cf[add][0][type_id]",
                        selected_before: twig.attr("lang"in i ? i.lang : "", "import_cf_type") + ": "
                    })),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "new-import__cf-form__input text-input-visible-placeholder",
                        name: "cf[add][0][name]",
                        id: "import_cf_form_name",
                        placeholder: this.env_.filter("i18n", "table_cf_name")
                    })),
                    t.append('<div class="new-import__cf-form__variants" id="import_cf_form_variants" style="display: none">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "new-import__cf-form__input",
                        name: "cf[add][0][enums][0][value]",
                        id: "import_cf_form_variant_1",
                        placeholder: this.env_.filter("i18n", "table_cf_variant") + " 1"
                    })),
                    t.append('<input type="hidden" name="cf[add][0][enums][0][sort]" value="0">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "new-import__cf-form__input",
                        name: "cf[add][0][enums][1][value]",
                        id: "import_cf_form_variant_2",
                        placeholder: this.env_.filter("i18n", "table_cf_variant") + " 2"
                    })),
                    t.append('<input type="hidden" name="cf[add][0][enums][1][sort]" value="1"></div><div class="new-import__cf-form__actions new-import__cf-form__input">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "modal_save"),
                        class_name: "js-import-cf-save js-button-with-loader",
                        disabled: !0,
                        tab_index: 1
                    })),
                    t.append("\x3c!--\t--\x3e"),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "modal_cancel"),
                        tab_index: 2
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_cf_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/cf_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        delimeter: twig.bind(this.block_delimeter, this),
                        tags_title: twig.bind(this.block_tags_title, this),
                        save_template: twig.bind(this.block_save_template, this),
                        modal_actions: twig.bind(this.block_modal_actions, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/modal/import_beta/settings.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_delimeter = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_tags_title = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="new-import__settings__title new-import__settings__title--small">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "import_settings_autotag"), "light_escape", null, !0)),
                    e.append(":</span> ")
                }
                ,
                t.prototype.block_save_template = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_modal_actions = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: twig.attr("lang"in i ? i.lang : "", "button_next"),
                        button_class: "js-settings-next-google"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_google_settings"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/google_settings", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption import_list__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_caption"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    twig.filter.length(this.env_, "rows"in i ? i.rows : "")) {
                        t.append('<div class="import_list__table"><div class="import_list__table_std-row import_list__table_header"><div class="import_list__table_cell file_cell">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_cell_file"), "light_escape", null, !0)),
                        t.append('</div><div class="import_list__table_cell date_cell">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_cell_date"), "light_escape", null, !0)),
                        t.append('</div><div class="import_list__table_cell added_by_cell">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_cell_added"), "light_escape", null, !0)),
                        t.append('</div><div class="import_list__table_cell status_cell">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_cell_status"), "light_escape", null, !0)),
                        t.append("</div></div>"),
                        i._parent = i;
                        var a = "rows"in i ? i.rows : ""
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var p = twig.count(a);
                            s.revindex0 = p - 1,
                            s.revindex = p,
                            s.length = p,
                            s.last = 1 === p
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.row = n,
                            t.append('<div class="import_list__table_std-row import_list__table_row"><div class="import_list__table_cell file_cell"><a href="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "link"), "light_escape", null, !0)),
                            t.append('" class="import_proc__show_prev__link" style="padding-left:0" target="_blank">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "name"), "light_escape", null, !0)),
                            t.append('</a></div><div class="import_list__table_cell date_cell">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "created"), "light_escape", null, !0)),
                            t.append('</div><div class="import_list__table_cell added_by_cell">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "user_name"), "light_escape", null, !0)),
                            t.append('</div><div class="import_list__table_cell status_cell" data-status="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "status"), "light_escape", null, !0)),
                            t.append('" data-job-id="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "id"), "light_escape", null, !0)),
                            t.append('">'),
                            new (e._get("interface/common/modal/import_beta/list_status_cell.twig"))(this.env_).render_(t, twig.extend({}, i, "row"in i ? i.row : "")),
                            t.append("</div></div>"),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append("</div>")
                    } else
                        t.append('<div class="import_list__table-empty"><span>'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_empty"), "light_escape", null, !0)),
                        t.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_import_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/import_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    0 == ("status"in i ? i.status : "") && t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_status_queue"), "light_escape", null, !0)),
                    1 == ("status"in i ? i.status : "") && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_status_import"), "light_escape", null, !0)),
                    new (e._get("interface/common/modal/import_beta/status_bar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        status: "process",
                        process: "Y"
                    }))),
                    2 == ("status"in i ? i.status : "") && (t.append('<div class="status_cell__error"><span class="status_cell_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_error"), "light_escape", null, !0)),
                    t.append(':</span>&ensp;<span class="status_cell_description">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr("messages"in i ? i.messages : "", "errors"), ". "), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    3 == ("status"in i ? i.status : "") && (t.append('<div class="status_cell__success"><span class="status_cell_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_list_status_import_success"), "light_escape", null, !0)),
                    t.append("</span></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_list_status_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/list_status_cell", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.class_name = "queue",
                    1 == ("status"in i ? i.status : "") && (i.class_name = "process"),
                    2 == ("status"in i ? i.status : "") && (i.class_name = "error"),
                    3 == ("status"in i ? i.status : "") && (i.class_name = "success"),
                    i.WORKER_TYPE_1C_IMPORT = 1,
                    t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption import_proc__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_caption_" + ("class_name"in i ? i.class_name : ""), void 0, "array"), "light_escape", null, !0)),
                    t.append('</h2><div class="import_proc__wrapper '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/common/modal/import_beta/status_bar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        error: "Y",
                        process: "Y"
                    })),
                    t.append('<div class="import_proc__hint queue">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_queued_message"), "light_escape", null, !0)),
                    t.append("</div>"),
                    i.has_stats = !twig.attr("messages"in i ? i.messages : "", "stats"),
                    i._parent = i;
                    var a = twig.attr("messages"in i ? i.messages : "", "stats");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.s = e,
                        ("s"in i ? i.s : "") > 0 && (i.has_stats = !0)
                    }
                    ), this),
                    t.append('<div class="import_proc__hint success" style="display: '),
                    "has_stats"in i && i.has_stats && 1 != ("status"in i ? i.status : "") ? t.append("block") : t.append("none"),
                    t.append('">'),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "info"), "worker_type", void 0, void 0, !0) ? twig.attr(twig.attr("messages"in i ? i.messages : "", "info"), "worker_type") == ("WORKER_TYPE_1C_IMPORT"in i ? i.WORKER_TYPE_1C_IMPORT : "") && twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "invoices") >= 0 && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_found"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "invoices"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_invoices"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "invoices")), "light_escape", null, !0)),
                    t.append('&nbsp;<a class="blue-link" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "info"), "url"), "light_escape", null, !0)),
                    t.append('" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_show"), "light_escape", null, !0)),
                    t.append("</a>")) : (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_success_message"), "light_escape", null, !0)),
                    t.append(":&nbsp;"),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "customers") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "customers"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_customers"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "customers")), "light_escape", null, !0)),
                    (twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "contacts") || twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "companies") || twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "leads")) && t.append(", ")),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "leads") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "leads"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_leads"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "leads")), "light_escape", null, !0)),
                    (twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "contacts") || twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "companies")) && t.append(", ")),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "contacts") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "contacts"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_contacts"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "contacts")), "light_escape", null, !0)),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "companies") && t.append(", ")),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "companies") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "companies"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_companies"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "companies")), "light_escape", null, !0)),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "contacts") && t.append(", ")),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "catalogs") && (t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "catalogs"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_catalogs"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "catalogs")), "light_escape", null, !0))),
                    t.append(".")),
                    t.append("</div>"),
                    twig.attr(twig.attr("messages"in i ? i.messages : "", "info"), "worker_type") == ("WORKER_TYPE_1C_IMPORT"in i ? i.WORKER_TYPE_1C_IMPORT : "") && twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "invoices_not_found") >= 0 && ("job_id"in i && i.job_id && (i.invoices_not_found_url = "/import/table/" + ("job_id"in i ? i.job_id : "")),
                    t.append('<div class="import_proc__hint success" style="display: '),
                    "has_stats"in i && i.has_stats && 1 != ("status"in i ? i.status : "") ? t.append("block") : t.append("none"),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_not_found"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "invoices_not_found"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "import_processing_added_invoices"), twig.attr(twig.attr("messages"in i ? i.messages : "", "stats"), "invoices_not_found")), "light_escape", null, !0)),
                    t.append('&nbsp;<a class="blue-link" href="'),
                    "invoices_not_found_url"in i && i.invoices_not_found_url ? t.append(twig.filter.escape(this.env_, "invoices_not_found_url"in i ? i.invoices_not_found_url : "", "light_escape", null, !0)) : t.append("#"),
                    t.append('" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_show"), "light_escape", null, !0)),
                    t.append("</a></div>")),
                    t.append('<div class="import_proc__hint error">'),
                    t.append(twig.filter.join(twig.attr("messages"in i ? i.messages : "", "errors"), "<br>")),
                    t.append('</div><div class="import_proc__footer">'),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: twig.attr("lang"in i ? i.lang : "", "import_processing_continue"),
                        button_class: "js-processing-cont-to-work",
                        no_cancel: !0
                    })),
                    twig.attr("messages"in i ? i.messages : "", "info") && twig.attr(twig.attr("messages"in i ? i.messages : "", "info"), "tags") && (i.tags = twig.attr(twig.attr("messages"in i ? i.messages : "", "info"), "tags"),
                    t.append(" "),
                    i._parent = i,
                    a = "tags"in i ? i.tags : "",
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.tag = e,
                        (twig.attr("tag"in i ? i.tag : "", "entity_type") == ("entity_id"in i ? i.entity_id : "") || 1 == twig.attr("tag"in i ? i.tag : "", "entity_type") && 3 == ("entity_id"in i ? i.entity_id : "")) && (i.tag_id = twig.attr("tag"in i ? i.tag : "", "id"))
                    }
                    ), this)),
                    "tag_id"in i && i.tag_id && (t.append('<div id="import_proc__show_prev" class="import_proc__show_prev js_import__show_prev"><span class="icon icon-inline"></span><span class="import_proc__show_prev__link" data-system-tag="'),
                    t.append(twig.filter.escape(this.env_, "tag_id"in i ? i.tag_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_processing_show_imported_data"), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_processing"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/processing", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        delimeter: twig.bind(this.block_delimeter, this),
                        tags_title: twig.bind(this.block_tags_title, this),
                        save_template: twig.bind(this.block_save_template, this),
                        modal_actions: twig.bind(this.block_modal_actions, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption import_list__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_settings_title"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    i.template_data = !1,
                    twig.filter.length(this.env_, "templates"in i ? i.templates : "") && (t.append('<div><span class="new-import__settings__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_settings_template"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "tmpls"in i ? i.tmpls : "",
                        selected: "template"in i ? i.template : "",
                        id: "template_select",
                        class_name: "new-import__settings__delimiter"
                    })),
                    t.append("</div>"),
                    i.template_data = twig.attr(twig.attr("templates"in i ? i.templates : "", "template"in i ? i.template : "", void 0, "array"), "data")),
                    t.append('<form id="new_import_settings_form" action="/ajax/import/run/">'),
                    t.append(this.renderBlock("delimeter", i, n)),
                    new (e._get("interface/common/modal/import_beta/table.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        data: "data"in i ? i.data : "",
                        selected_fields: "selected_fields"in i ? i.selected_fields : ""
                    })),
                    t.append("</form>"),
                    1 != ("hide_tags"in i ? i.hide_tags : "") && (t.append('<div class="new-import__settings__bottom">'),
                    t.append(this.renderBlock("tags_title", i, n)),
                    t.append('<div class="new-import__settings__bottom__tags filter__custom_settings__item_suggest-manager" id="autotag_input">'),
                    new (e._get("interface/common/tags/wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "tags"in i ? i.tags : "",
                        without_input: !0
                    })),
                    t.append("</div></div>")),
                    t.append(this.renderBlock("save_template", i, n)),
                    "entity"in i && twig.contains(["customers", "contacts", "companies", "leads"], "entity"in i ? i.entity : "") && (t.append('<div class="new-import__checkbox">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "update_entity_input",
                        id: "update_entity_input",
                        checked: !1,
                        value: "y",
                        text: twig.attr("lang"in i ? i.lang : "", "import_settings_update_import")
                    })),
                    t.append("</div>")),
                    t.append(this.renderBlock("modal_actions", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_delimeter = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="new-import__settings__delimiter-wrapper"><span class="new-import__settings__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_settings_delimiter"), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: "delimiter"in i ? i.delimiter : "",
                        items: [{
                            id: "dot-comma",
                            option: twig.attr("lang"in i ? i.lang : "", "import_settings_delimiter_dot_comma")
                        }, {
                            id: "comma",
                            option: twig.attr("lang"in i ? i.lang : "", "import_settings_delimiter_comma")
                        }, {
                            id: "tab",
                            option: twig.attr("lang"in i ? i.lang : "", "import_settings_delimiter_tab")
                        }],
                        id: "delimiter_select",
                        name: "delimiter",
                        class_name: "new-import__settings__delimiter"
                    })),
                    t.append("</div>"),
                    "columns_limit_hit"in i && i.columns_limit_hit && (t.append('<p class="new-import__error">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_settings_columns_limit"), "light_escape", null, !0)),
                    t.append("</p>")),
                    t.append('<p style="display: none" class="new-import__error" id="import_cf_max_count">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_cf_max_count"), "light_escape", null, !0)),
                    t.append('</p><div class="new-import__checkbox">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "first_names_r",
                        id: "first_names_input",
                        checked: !("template_data"in i && i.template_data) || twig.attr("template_data"in i ? i.template_data : "", "have_headers"),
                        value: "Y",
                        text: twig.attr("lang"in i ? i.lang : "", "import_settings_dont_import_first_line")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_tags_title = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="new-import__settings__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "import_settings_autotag"), "light_escape", null, !0)),
                    e.append(":</span>")
                }
                ,
                t.prototype.block_save_template = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div id="import_keep_changes" class="new-import__checkbox new-import__checkbox-save-tmpl" style="'),
                    ("template"in i ? i.template : "") > -1 && t.append("display: none"),
                    t.append('"><div style="margin-left: 150px; margin-bottom: 10px; '),
                    ("template"in i ? i.template : "") < 0 && t.append("display: none"),
                    t.append('">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "template_id",
                        id: "template_id_checkbox",
                        value: "template"in i ? i.template : "",
                        text: twig.attr("lang"in i ? i.lang : "", "import_settings_change_current_template")
                    })),
                    t.append('</div><div id="new_import_template_save"><span class="new-import__settings__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "button_save"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "import_settings_template")), "light_escape", null, !0)),
                    t.append(":</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "template_name",
                        id: "template_name_input",
                        class_name: "new-import__settings__input",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "import_settings_template_name")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_modal_actions = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: twig.attr("lang"in i ? i.lang : "", "button_next"),
                        button_class: "js-settings-next"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_settings"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/settings", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="import_proc__process_wrapper'),
                    "status"in t && "process" != ("status"in t ? t.status : "") && e.append(" to_right"),
                    e.append('">'),
                    2 != ("status"in t ? t.status : "") && "Y" != ("error"in t ? t.error : "") || (e.append('<div class="import_proc__process_wrapper__try_again js_import__try_again"><span class="icon icon-inline icon-restore"></span><span class="import_proc__process_wrapper__try_again__text import_proc__show_prev__link">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "import_processing_retry"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    "Y" == ("process"in t ? t.process : "") && (3 == ("status"in t ? t.status : "") && (t.numerator = 100),
                    e.append('<div class="import_proc__process_wrapper__bar '),
                    ("numerator"in t ? t.numerator : "") > 90 && e.append("import_proc__process_wrapper__bar-right-percents"),
                    e.append('"><div class="import_proc__process_wrapper__bar__actual" data-percent="'),
                    e.append(twig.filter.escape(this.env_, "numerator"in t ? t.numerator : "", "light_escape", null, !0)),
                    e.append('%" style="width: '),
                    e.append(twig.filter.escape(this.env_, "numerator"in t ? t.numerator : "", "light_escape", null, !0)),
                    e.append('%"></div><span class="import_proc__process_wrapper__bar__procents js_import__process_percents">'),
                    2 == ("status"in t ? t.status : "") ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "import_processing_error"), "light_escape", null, !0)) : (e.append(twig.filter.escape(this.env_, "numerator"in t ? t.numerator : "", "light_escape", null, !0)),
                    e.append("%")),
                    e.append("</span></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_status_bar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/status_bar", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="new-import__settings__scroller__wrapper"><div class="hs-wrapper new-import__settings__scroller" id="new_import_settings_scroller_wrapper"><div class="js-hs-scroller custom-scroll" data-horizontal="y" id="new_import_settings_scroller"><div class="import_list__table import_list__table-fixed">'),
                    i._parent = i;
                    var a = "data"in i ? i.data : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var p = twig.count(a);
                        s.revindex0 = p - 1,
                        s.revindex = p,
                        s.length = p,
                        s.last = 1 === p
                    }
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.row = e,
                        t.append('<div class="import_list__table_std-row '),
                        ("template_data"in i && i.template_data && twig.attr("template_data"in i ? i.template_data : "", "have_headers") || !("template_data"in i) || !i.template_data) && twig.attr(s, "first") ? t.append("import_list__table_header") : t.append("import_list__table_row"),
                        t.append('" '),
                        twig.attr(s, "first") && t.append('id="new_import_table_header"'),
                        t.append(" "),
                        twig.attr(s, "index0") > 2 && t.append('style="display: none"'),
                        t.append(">");
                        var a = "row"in i ? i.row : "";
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.col = e,
                            t.append('<div class="import_list__table_cell field_cell"><span class="block-selectable">'),
                            t.append(twig.filter.escape(this.env_, "col"in i ? i.col : "", "light_escape", null, !0)),
                            t.append("</span></div>")
                        }
                        ), this),
                        t.append("</div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('<div class="'),
                    "first_line_is_caption"in i && i.first_line_is_caption && twig.attr(s, "first") ? t.append("import_list__table_header") : t.append("import_list__table_row"),
                    t.append('">'),
                    i._parent = i,
                    a = "selected_fields"in i ? i.selected_fields : "",
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (p = twig.count(a),
                    s.revindex0 = p - 1,
                    s.revindex = p,
                    s.length = p,
                    s.last = 1 === p),
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.field = n,
                        t.append('<div class="import_list__table_cell field_settings_cell">'),
                        i.selected_value = twig.attr("selected_fields"in i ? i.selected_fields : "", twig.attr(s, "index0"), void 0, "array"),
                        new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            items: "fields"in i ? i.fields : "",
                            selected: "selected_value"in i ? i.selected_value : "",
                            name: "field_" + twig.attr(s, "index0"),
                            class_name: "new-import__settings__field",
                            additional_data: 'data-overflow-container="#new_import_settings_scroller_wrapper" data-save-overflow="true"'
                        })),
                        t.append('<div class="field_settings_cell__add-list" style="display: none;">'),
                        i.addable_checked = !1,
                        twig.attr(twig.attr("template_data"in i ? i.template_data : "", "addable"), "selected_value"in i ? i.selected_value : "", void 0, "array") && (i.addable_checked = !0),
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            text: this.env_.filter("i18n", "import_add_lists_variants"),
                            name: "is_addable_" + twig.attr(s, "index0"),
                            checked: "addable_checked"in i ? i.addable_checked : ""
                        })),
                        t.append("</div></div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_beta_table"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_beta/table", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div id="csv_import">'),
                    twig.filter.length(this.env_, "strNotice"in i ? i.strNotice : "") > 0 && (t.append('<div id="csv_import_notice" class="import_error"><b>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "csv_warnings"), "light_escape", null, !0)),
                    t.append(":</b><br />"),
                    t.append(twig.filter.escape(this.env_, "strNotice"in i ? i.strNotice : "", "light_escape", null, !0)),
                    t.append("</div>")),
                    twig.filter.length(this.env_, "strError"in i ? i.strError : "") > 0 && (t.append('<div id="csv_import_error_message" class="send_report import_error"><b>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "csv_errors"), "light_escape", null, !0)),
                    t.append(":</b><br />"),
                    t.append(twig.filter.escape(this.env_, "strError"in i ? i.strError : "", "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<form method="POST" action="import_csv" enctype="multipart/form-data" id="dataload">'),
                    1 == ("step"in i ? i.step : "") && new (e._get("interface/common/modal/import_iframe/step_1.twig"))(this.env_).render_(t, i),
                    2 == ("step"in i ? i.step : "") && new (e._get("interface/common/modal/import_iframe/step_2.twig"))(this.env_).render_(t, i),
                    3 == ("step"in i ? i.step : "") && new (e._get("interface/common/modal/import_iframe/step_3.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_iframe_import_iframe"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_iframe/import_iframe", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div id="import" class="popup_settings_block import__custom_styles"><div class="import_popup__list block clearfix" id="switch_import_type"><div class="import_popup__item"><span class="import_popup__icon csv-file"></span><span class="import_popup__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_popup_csv"), "light_escape", null, !0)),
                    t.append("</span><p>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_contacts_import_text"), "light_escape", null, !0)),
                    t.append('</p><div id="upl_csv" class="import_popup__next custom_import_popup__next">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "upl_csv",
                        text: twig.attr("lang"in i ? i.lang : "", "import_csv_load_file"),
                        class_name: "import_popup__button"
                    })),
                    t.append('<input id="import_file_csv" name="DATA_FILE" type="file" />'),
                    "CONTACTS" == ("entity"in i ? i.entity : "") ? (t.append('<a class="download_example" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_download_example_link"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_download_example"), "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<a class="download_example" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_download_example_link_leads"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_download_example"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append("</div></div>"),
                    "CONTACTS" == ("entity"in i ? i.entity : "") && (t.append('<div class="import_popup__item"><span class="import_popup__icon vcard-file"></span><span class="import_popup__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_popup_vcard"), "light_escape", null, !0)),
                    t.append("</span><p>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_vcard_contacts_import_text"), "light_escape", null, !0)),
                    t.append('</p><div id="upl_vcf" class="import_popup__next custom_import_popup__next">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "upl_vcf",
                        text: twig.attr("lang"in i ? i.lang : "", "import_csv_load_file"),
                        class_name: "import_popup__button"
                    })),
                    t.append('<input id="import_file_vcf" name="DATA_FILE" type="file" /><a class="download_example" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_vcard_download_example_link"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_download_example"), "light_escape", null, !0)),
                    t.append("</a></div></div>")),
                    t.append('<div class="import_popup__item"><span class="import_popup__icon copypaste"></span><span class="import_popup__title">'),
                    "CONTACTS" == ("entity"in i ? i.entity : "") ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_popup_copy_paste_contacts"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_popup_copy_paste_deals"), "light_escape", null, !0)),
                    t.append("</span><p>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_copy_past_text"), "light_escape", null, !0)),
                    t.append('</p><div id="show_area" class="import_popup__next custom_import_popup__next start_import">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "show_area",
                        text: twig.attr("lang"in i ? i.lang : "", "import_copy_past_button_start"),
                        class_name: "import_popup__button button-input_blue"
                    })),
                    t.append('</div></div></div><div id="copy_past_block" class="copy_paste_block csv_block block copy_paste_block" style="display:none;"><span class="import_popup__icon copypaste"></span><span class="import_popup__title">'),
                    "CONTACTS" == ("entity"in i ? i.entity : "") ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_popup_copy_paste_contacts"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_popup_copy_paste_deals"), "light_escape", null, !0)),
                    t.append("</span><p>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_copy_past_text"), "light_escape", null, !0)),
                    t.append('</p><div id="copy_paste_error_text"></div><div class="copy_paste_block__textarea_wrapper">'),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "import_data",
                        id: "upl_area",
                        class_name: "textarea-autosize copy_paste_block__textarea"
                    })),
                    t.append('</div><a href="#" id="upl_ta" class="">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "import_csv_next"), "light_escape", null, !0)),
                    t.append('</a></div><input type="hidden" id="url_data_file" name="URL_DATA_FILE" value=""><input name="delimiter" id="delimiter" type="hidden" value="" />')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_iframe_step_1"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_iframe/step_1", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "dot-comma" == ("delimiter"in i ? i.delimiter : "") ? i.delim_desc = twig.attr("lang"in i ? i.lang : "", "semicolon") : "comma" == ("delimiter"in i ? i.delimiter : "") ? i.delim_desc = twig.attr("lang"in i ? i.lang : "", "comma") : "tab" == ("delimiter"in i ? i.delimiter : "") && (i.delim_desc = twig.attr("lang"in i ? i.lang : "", "tab")),
                    t.append('<div class="import_csv_dataload_wrapper"><div id="import_csv_dataload" class="import_csv_dataload">'),
                    "delimiter"in i && i.delimiter) {
                        if (t.append('<div class="chose_separator">'),
                        "not found" == ("delimiter"in i ? i.delimiter : "") ? (t.append('<div class="import_csv_dataload__separator_text">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "set_delimiter"), "light_escape", null, !0)),
                        t.append("</div>"),
                        new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: "delimiter",
                            class_name: "chose_separator_select",
                            name: "delimiter",
                            items: [{
                                id: "dot-comma",
                                option: twig.attr("lang"in i ? i.lang : "", "semicolon")
                            }, {
                                id: "comma",
                                option: twig.attr("lang"in i ? i.lang : "", "comma")
                            }, {
                                id: "tab",
                                option: twig.attr("lang"in i ? i.lang : "", "tab")
                            }]
                        }))) : (t.append('<div class="import_csv_dataload__separator_text">'),
                        twig.attr("lang"in i ? i.lang : "", "warning") && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "warning"), "light_escape", null, !0)),
                        t.append(" <br/>")),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "set_delimiter1"), "light_escape", null, !0)),
                        t.append(' <span id="delimiter">'),
                        t.append(twig.filter.escape(this.env_, "delim_desc"in i ? i.delim_desc : "", "light_escape", null, !0)),
                        t.append('</span><div class="changed"><div id="change_delimiter" class="change_delimiter">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "change"), "light_escape", null, !0)),
                        t.append('</div><div class="change_delimiter_show_hide_block" style="display:none;"><p><span class="delimiter-option" data-delimiter="dot-comma">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "semicolon"), "light_escape", null, !0)),
                        t.append('</span></p><p><span class="delimiter-option" data-delimiter="comma">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "comma"), "light_escape", null, !0)),
                        t.append('</span></p><p><span class="delimiter-option" data-delimiter="tab">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tab"), "light_escape", null, !0)),
                        t.append('</span></p></div></div></div><input name="delimiter" id="delimiter" type="hidden" value="'),
                        t.append(twig.filter.escape(this.env_, "delimiter"in i ? i.delimiter : "", "light_escape", null, !0)),
                        t.append('" onchange="changeDelimiter(this.value);" />')),
                        t.append('<input type="hidden" name="URL_DATA_FILE" id="url_data_file" value="'),
                        t.append(twig.filter.escape(this.env_, "dataTempFileName"in i ? i.dataTempFileName : "", "light_escape", null, !0)),
                        t.append('"><div class="import_csv_dataload__settings" id="first_names" '),
                        "not found" == ("delimiter"in i ? i.delimiter : "") && t.append(' style="display:none;" '),
                        t.append('><div class="import_csv_dataload__settings_item">'),
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: "first_names_r",
                            id: "first_names_input",
                            checked: !0,
                            value: "Y"
                        })),
                        t.append('<label for="first_names_input">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "first_row"), "light_escape", null, !0)),
                        t.append('</label></div><div class="import_csv_dataload__settings_item">'),
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: "autotag",
                            id: "autotag",
                            checked: !0,
                            value: "Y"
                        })),
                        t.append('<label for="autotag">'),
                        "CONTACTS" == ("entity"in i ? i.entity : "") ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "autotag_contacts"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "autotag_deals"), "light_escape", null, !0)),
                        t.append("</label></div></div>"),
                        !twig.empty("templates"in i ? i.templates : "")) {
                            t.append('<div id="use_template_wrap"><div>'),
                            t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "fields_match"), "light_escape", null, !0)),
                            t.append(" "),
                            t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "or"), "light_escape", null, !0)),
                            t.append('<div class="changed"><div id="use_template" class="use_template">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "use_template"), "light_escape", null, !0)),
                            t.append(' <span id="current-template-name"></span></div><div class="use_template_show_hide_block" style="display:none;">'),
                            i._parent = i;
                            var a = "templates"in i ? i.templates : "";
                            twig.forEach(a, (function(e, n) {
                                i.key = n,
                                i.item = e,
                                t.append('<p><span data-template-name="'),
                                t.append(twig.filter.escape(this.env_, "key"in i ? i.key : "", "light_escape", null, !0)),
                                t.append('" title="'),
                                t.append(twig.filter.escape(this.env_, "key"in i ? i.key : "", "light_escape", null, !0)),
                                t.append('" class="use_template_name">'),
                                t.append(twig.filter.escape(this.env_, "key"in i ? i.key : "", "light_escape", null, !0)),
                                t.append('</span><span data-template-name="'),
                                t.append(twig.filter.escape(this.env_, "key"in i ? i.key : "", "light_escape", null, !0)),
                                t.append('" class="delete_template"><img src="/images/template_del.gif" title="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "delete_template"), "light_escape", null, !0)),
                                t.append('"></span></p>')
                            }
                            ), this),
                            t.append("</div></div></div></div>")
                        }
                        t.append("</div>")
                    }
                    t.append('</div><div id="table-wrapper" class="overflow_block"><table id="table_fields">'),
                    i._parent = i,
                    a = "arDataFileFields"in i ? i.arDataFileFields : "";
                    var s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var p = twig.count(a);
                        s.revindex0 = p - 1,
                        s.revindex = p,
                        s.length = p,
                        s.last = 1 === p
                    }
                    twig.forEach(a, (function(e, n) {
                        i.i = n,
                        i.row = e,
                        t.append('<tr id="tr_'),
                        t.append(twig.filter.escape(this.env_, "i"in i ? i.i : "", "light_escape", null, !0)),
                        t.append('" '),
                        twig.attr(s, "first") && t.append(' class="checkbox_checked" '),
                        t.append(">");
                        var a = "row"in i ? i.row : "";
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.cell = e,
                            t.append('<td><div class="td_inner">'),
                            t.append(twig.filter.escape(this.env_, "cell"in i ? i.cell : "", "light_escape", null, !0)),
                            t.append("</td>")
                        }
                        ), this),
                        t.append("</tr>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('<tr id="tr_fields">'),
                    i._parent = i,
                    a = twig.attr("arDataFileFields"in i ? i.arDataFileFields : "", 0, void 0, "array"),
                    twig.forEach(a, (function(e, n) {
                        i.j = n,
                        i.cell = e,
                        t.append('<td><select name="field_'),
                        t.append(twig.filter.escape(this.env_, "j"in i ? i.j : "", "light_escape", null, !0)),
                        t.append('" id="field_'),
                        t.append(twig.filter.escape(this.env_, "j"in i ? i.j : "", "light_escape", null, !0)),
                        t.append('">');
                        var a = "arAvailFields"in i ? i.arAvailFields : "";
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.item = e,
                            t.append("<option "),
                            twig.attr("item"in i ? i.item : "", "disabled", void 0, "array") && t.append("disabled"),
                            t.append(' value="'),
                            twig.attr("item"in i ? i.item : "", "multi", void 0, "array") ? (t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "value", void 0, "array"), "light_escape", null, !0)),
                            t.append("_"),
                            t.append(twig.filter.escape(this.env_, "j"in i ? i.j : "", "light_escape", null, !0))) : t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "value", void 0, "array"), "light_escape", null, !0)),
                            t.append('" '),
                            twig.attr("item"in i ? i.item : "", "value", void 0, "array") == twig.attr("arSelectedFields"in i ? i.arSelectedFields : "", "j"in i ? i.j : "", void 0, "array") && t.append(' selected="selected" '),
                            t.append(">"),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name", void 0, "array"), "light_escape", null, !0)),
                            t.append("</option>")
                        }
                        ), this),
                        t.append("</select></td>")
                    }
                    ), this),
                    t.append('</tr></table></div><div style="margin-bottom: 26px;" id="template_name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "save_template"), "light_escape", null, !0)),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "popup_input",
                        name: "template_name",
                        style: {
                            width: "300px"
                        },
                        placeholder: twig.attr("lang"in i ? i.lang : "", "template_default_name")
                    })),
                    t.append("</div><div>"),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "import_csv_next"),
                        type: "submit",
                        class_name: "import__next_button"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_iframe_step_2"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_iframe/step_2", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="import_csv_dataload_wrapper import_csv_dataload__final_wrapper">'),
                    "bAllLinesLoaded"in t && t.bAllLinesLoaded && (e.append("<div><b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "loading_complete"), "light_escape", null, !0)),
                    e.append("</b></div>")),
                    e.append("<div>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "totaly_rows"), "light_escape", null, !0)),
                    e.append(" <b>"),
                    e.append(twig.filter.escape(this.env_, "line_num"in t ? t.line_num : "", "light_escape", null, !0)),
                    e.append("</b></div><div>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "correct_rows"), "light_escape", null, !0)),
                    e.append(" <b>"),
                    e.append(twig.filter.escape(this.env_, "correct_lines"in t ? t.correct_lines : "", "light_escape", null, !0)),
                    e.append("</b></div><div>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "rows_with_warnings"), "light_escape", null, !0)),
                    e.append(" <b>"),
                    e.append(twig.filter.escape(this.env_, "warning_lines"in t ? t.warning_lines : "", "light_escape", null, !0)),
                    e.append("</b></div><div>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "rows_with_errors"), "light_escape", null, !0)),
                    e.append(" <b>"),
                    e.append(twig.filter.escape(this.env_, "error_lines"in t ? t.error_lines : "", "light_escape", null, !0)),
                    e.append("</b></div>"),
                    ("correct_lines"in t ? t.correct_lines : "") > 0 && "bAllLinesLoaded"in t && t.bAllLinesLoaded && "Y" == ("autotag"in t ? t.autotag : "") && (e.append('<div id="import_csv_result_link">'),
                    "DEALS" == ("entity"in t ? t.entity : "") ? t.type = "leads" : t.type = "contacts",
                    e.append('<a href="javascript:void(0)" onClick="window.parent.location = \'/'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append("/list/?tag[]="),
                    e.append(twig.filter.escape(this.env_, "resultTag"in t ? t.resultTag : "", "light_escape", null, !0)),
                    e.append("'; return false;\">"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "show_loaded_data"), "light_escape", null, !0)),
                    e.append("</a></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_import_iframe_step_3"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/import_iframe/step_3", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner progress_error"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2 progress__header">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('</h2><div class="progress__title-error">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "error"), "light_escape", null, !0)),
                    t.append('!</div><div class="progress__inner"><div class="progress__bar-wrapper"><div class="progress__bar"></div></div></div><div class="progress__messages">'),
                    t.append(twig.filter.escape(this.env_, "message"in i ? i.message : "", "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: "button_text"in i && i.button_text ? "button_text"in i ? i.button_text : "" : this.env_.filter("i18n", "Continue with crm"),
                        button_class: "js-progress-cont-to-work",
                        no_cancel: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_progress_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/progress/error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2 progress__header">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('</h2><div class="progress__messages"></div>'),
                    3 == ("status"in i ? i.status : "") && (i.numerator = 100),
                    new (e._get("interface/common/progress_bar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        width: "numerator"in i ? i.numerator : "",
                        text: ("numerator"in i ? i.numerator : "") + "%",
                        push_text: !0
                    })),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        actions__class_name: 3 == ("status"in i ? i.status : "") || "need_show_button"in i && i.need_show_button ? "" : "h-hidden",
                        button_text: "button_text"in i && i.button_text ? "button_text"in i ? i.button_text : "" : this.env_.filter("i18n", "Continue with crm"),
                        button_class: "js-progress-cont-to-work",
                        no_cancel: !("show_cancel"in i && i.show_cancel),
                        button_cancel_class: "show_cancel"in i && i.show_cancel ? "js-progress-cancel" : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_progress_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/progress/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.icon_id = this.env_.filter("default_task_type_icon", "icon_id"in i ? i.icon_id : ""),
                    i.color = this.env_.filter("default_task_type_color", "color"in i ? i.color : ""),
                    "stub"in i && i.stub || t.append('<span class="modal-body__inner__todo-types__item__handle"><span class="icon icon-v-dots"></span></span>'),
                    t.append('<div class="modal-body__inner__todo-types__item__icon-wrap '),
                    "stub"in i && i.stub && t.append(" stub "),
                    t.append('"><svg class="svg-icon svg-tasks--types-icons--'),
                    t.append(twig.filter.escape(this.env_, "icon_id"in i ? i.icon_id : "", "light_escape", null, !0)),
                    t.append('-dims modal-body__inner__todo-types__item__iconpick__icon"style="fill: '),
                    t.append(twig.filter.escape(this.env_, "color"in i ? i.color : "", "light_escape", null, !0)),
                    t.append('"><use xlink:href="#tasks--types-icons--'),
                    t.append(twig.filter.escape(this.env_, "icon_id"in i ? i.icon_id : "", "light_escape", null, !0)),
                    t.append('"></use></svg></div>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        name: "task_types_name",
                        class_name: "modal-body__inner__todo-types__item__input js-todo-type-item-name",
                        value: this.env_.filter("striptags", "name"in i ? i.name : ""),
                        placeholder: twig.attr("lang"in i ? i.lang : "", "tasks_custom_placeholder"),
                        additional_data: 'data-placeholder="' + twig.attr("lang"in i ? i.lang : "", "tasks_custom_placeholder") + '"',
                        max_length: 16
                    })),
                    "stub"in i && i.stub || new (e._get("interface/controls/delete_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "modal-body__inner__todo-types__item__remove js-remove-todo-type-item"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_todo_type_todo_type"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/todo_type/todo_type", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        sortable_area: twig.bind(this.block_sortable_area, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "button_todo_custom_types"), "light_escape", null, !0)),
                    t.append('</h2><form id="custom_types_form"><div class="modal-body__inner__todo-types__item default"><div class="modal-body__inner__todo-types__item__icon-wrap"><div class="modal-body__inner__todo-types__item__icon icon icon-follow-up"></div></div>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        class_name: "modal-body__inner__todo-types__item__input js-form-changes-skip",
                        value: twig.attr("lang"in i ? i.lang : "", "tasks_follow_up"),
                        disabled: !0
                    })),
                    t.append('</div><div class="modal-body__inner__todo-types__item default modal-body__inner__todo-types__item_mb"><div class="modal-body__inner__todo-types__item__icon-wrap"><div class="modal-body__inner__todo-types__item__icon icon icon-case-red" style="top: 10px"></div></div>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        class_name: "modal-body__inner__todo-types__item__input js-form-changes-skip",
                        value: twig.attr("lang"in i ? i.lang : "", "tasks_meeting"),
                        disabled: !0
                    })),
                    t.append('</div><div class="modal-body__inner__todo-types"><div class="js-sortable-area">'),
                    t.append(this.renderBlock("sortable_area", i, n)),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/todo_type_icon_picker.twig"))(this.env_).render_(t, {
                        color: "color"in i ? i.color : "",
                        class_name: "hidden"
                    }),
                    t.append("</div></form>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "button",
                        button_disabled: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_sortable_area = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_todo_type_todo_types_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/todo_type/todo_types_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div id="unsorted--linkup-block"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    "is_retail_functions_enabled"in i && i.is_retail_functions_enabled ? (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "unsorted_modal_linking_up"), "light_escape", null, !0)),
                    t.append(":")) : (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "unsorted_modal_linking_up_without_customer"), "light_escape", null, !0)),
                    t.append(":")),
                    t.append("</h2>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, "suggest"in i ? i.suggest : "")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_unsorted_linking_up_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/unsorted_linking_up/modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.main_class_name = "users-select__body__item",
                    "head" == ("type"in t ? t.type : "") && (t.main_class_name = "users-select__head-title users-select__head-title_linking_up"),
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "main_class_name"in t ? t.main_class_name : "", "light_escape", null, !0)),
                    e.append(' pipeline-unsorted__linking_up_modal__suggest_item">'),
                    "head" == ("type"in t ? t.type : "") ? e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)) : (e.append('<div class="multisuggest__suggest-item pipeline-unsorted__linking_up_modal__suggest_linked">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    "contact"in t && t.contact && (this.env_.filter("contact_name", twig.attr("contact"in t ? t.contact : "", "name")) && (e.append(',&nbsp;<span style="color:#999">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr("contact"in t ? t.contact : "", "name")), "light_escape", null, !0)),
                    e.append("</span>")),
                    (twig.attr("contact"in t ? t.contact : "", "phone") || twig.attr("contact"in t ? t.contact : "", "email")) && (e.append(',<div class="control--suggest--list--item-additional">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("contact"in t ? t.contact : "", "phone"), "light_escape", null, !0)),
                    twig.attr("contact"in t ? t.contact : "", "phone") && twig.attr("contact"in t ? t.contact : "", "email") && e.append(", "),
                    e.append(twig.filter.escape(this.env_, twig.attr("contact"in t ? t.contact : "", "email"), "light_escape", null, !0)),
                    e.append("</div>"))),
                    e.append("</div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_modal_unsorted_linking_up_suggest_list_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/modal/unsorted_linking_up/suggest_list_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest_top: twig.bind(this.block_suggest_top, this),
                        input_icon: twig.bind(this.block_input_icon, this),
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/suggest/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.tags_add_blocked = !("tags_editable"in t && t.tags_editable),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest_top = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-tags-lib-manage__restrict">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Prevent users from creating new tags"), "light_escape", null, !0)),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        switcher_wrapper_class: "controls-switcher-blue",
                        checked: "tags_add_blocked"in i ? i.tags_add_blocked : "",
                        class_name: "modal-tags-lib-manage__restrict-switcher js-modal-tags-lib-manage__restrict-switcher",
                        id: "modal-tags-lib-manage__restrict",
                        name: "tags_editable"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_input_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "colored_tags_available"in t && t.colored_tags_available && e.append('<span class="modal-tags-lib-manage__icon-wrapper js-modal-tags-lib-manage__icon-wrapper"><svg class="svg-icon svg-common--choose_color-dims modal-tags-lib-manage__icon"><use xlink:href="#common--choose_color"></use></svg></span>')
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<ul class="suggest__items-suggest '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append(' custom-scroll"></ul>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_manage_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/manage/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="tags-lib__item-name h-text-overflow" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</div>"),
                    "total"in t && (e.append('<div class="tags-lib__item-frequency">'),
                    e.append(twig.filter.escape(this.env_, "total"in t ? t.total : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    "colored_tags_available"in t && t.colored_tags_available && e.append('<div class="tags-lib__item-color js-tags-lib__item-color"></div>'),
                    e.append('<div class="tags-lib__item-delete js-tags-lib__item-delete"><svg class="svg-icon svg-common--trash-dims "><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--trash"></use></svg></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_manage_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/manage/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Manage tags"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/common/tags/manage/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "modal-tags-lib-manage__suggest",
                        suggest_class_name: "modal-tags-lib-manage__items-suggest",
                        placeholder: this.env_.filter("i18n", "Find or add a tag")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_common_tags_manage_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/common/tags/manage/modal", t)
            }()
        }
        .apply(t, n)) || (e.exports = a)
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
        e._sentryDebugIds[t] = "0cac2e9e-96fd-43b0-bb5a-827a8bf45a98",
        e._sentryDebugIdIdentifier = "sentry-dbid-0cac2e9e-96fd-43b0-bb5a-827a8bf45a98")
    } catch (e) {}
}();
//# sourceMappingURL=95165.7e0cd1f956013d80befe.js.map
