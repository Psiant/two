(window.webpackChunk = window.webpackChunk || []).push([[6058, 34441, 6268, 48672, 42281, 42532, 37634, 77778, 96406], {
    818194: (t, e, i) => {
        var n, o, s;
        o = [i(661533)],
        n = function(t) {
            var e, i, n, o, s, a, r, l, d, c, u, p, _, h, f, m, g, v, y, b, k, w, E, x, P, C, A, T, S = ('<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',
            e = {
                showEvent: "click",
                onShow: function() {},
                onBeforeShow: function() {},
                onHide: function() {},
                onChange: function() {},
                onSubmit: function() {},
                colorScheme: "light",
                color: "auto",
                livePreview: !0,
                flat: !1,
                layout: "full",
                submit: 1,
                submitText: "OK",
                height: 156,
                polyfill: !1
            },
            i = function(e, i) {
                var n = D(e);
                t(i).data("colpick").fields.eq(1).val(n.r).end().eq(2).val(n.g).end().eq(3).val(n.b).end()
            }
            ,
            n = function(e, i) {
                t(i).data("colpick").fields.eq(4).val(Math.round(e.h)).end().eq(5).val(Math.round(e.s)).end().eq(6).val(Math.round(e.b)).end()
            }
            ,
            o = function(e, i) {
                t(i).data("colpick").fields.eq(0).val(R(e))
            }
            ,
            s = function(e, i) {
                t(i).data("colpick").selector.css("backgroundColor", "#" + R({
                    h: e.h,
                    s: 100,
                    b: 100
                })),
                t(i).data("colpick").selectorIndic.css({
                    left: parseInt(t(i).data("colpick").height * e.s / 100, 10),
                    top: parseInt(t(i).data("colpick").height * (100 - e.b) / 100, 10)
                })
            }
            ,
            a = function(e, i) {
                t(i).data("colpick").hue.css("top", parseInt(t(i).data("colpick").height - t(i).data("colpick").height * e.h / 360, 10))
            }
            ,
            r = function(e, i) {
                t(i).data("colpick").currentColor.css("backgroundColor", "#" + R(e))
            }
            ,
            l = function(e, i) {
                t(i).data("colpick").newColor.css("backgroundColor", "#" + R(e))
            }
            ,
            d = function(e) {
                var r, d = t(this).parent().parent();
                this.parentNode.className.indexOf("_hex") > 0 ? (d.data("colpick").color = r = O(A(this.value)),
                i(r, d.get(0)),
                n(r, d.get(0))) : this.parentNode.className.indexOf("_hsb") > 0 ? (d.data("colpick").color = r = P({
                    h: parseInt(d.data("colpick").fields.eq(4).val(), 10),
                    s: parseInt(d.data("colpick").fields.eq(5).val(), 10),
                    b: parseInt(d.data("colpick").fields.eq(6).val(), 10)
                }),
                i(r, d.get(0)),
                o(r, d.get(0))) : (d.data("colpick").color = r = j(C({
                    r: parseInt(d.data("colpick").fields.eq(1).val(), 10),
                    g: parseInt(d.data("colpick").fields.eq(2).val(), 10),
                    b: parseInt(d.data("colpick").fields.eq(3).val(), 10)
                })),
                o(r, d.get(0)),
                n(r, d.get(0))),
                s(r, d.get(0)),
                a(r, d.get(0)),
                l(r, d.get(0)),
                d.data("colpick").onChange.apply(d.parent(), [r, R(r), D(r), d.data("colpick").el, 0])
            }
            ,
            c = function(e) {
                t(this).parent().removeClass("colpick_focus")
            }
            ,
            u = function() {
                t(this).parent().parent().data("colpick").fields.parent().removeClass("colpick_focus"),
                t(this).parent().addClass("colpick_focus")
            }
            ,
            p = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                var i = t(this).parent().find("input").focus()
                  , n = {
                    el: t(this).parent().addClass("colpick_slider"),
                    max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                    y: e.pageY,
                    field: i,
                    val: parseInt(i.val(), 10),
                    preview: t(this).parent().parent().data("colpick").livePreview
                };
                t(document).mouseup(n, h),
                t(document).mousemove(n, _)
            }
            ,
            _ = function(t) {
                return t.data.field.val(Math.max(0, Math.min(t.data.max, parseInt(t.data.val - t.pageY + t.data.y, 10)))),
                t.data.preview && d.apply(t.data.field.get(0), [!0]),
                !1
            }
            ,
            h = function(e) {
                return d.apply(e.data.field.get(0), [!0]),
                e.data.el.removeClass("colpick_slider").find("input").focus(),
                t(document).off("mouseup", h),
                t(document).off("mousemove", _),
                !1
            }
            ,
            f = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                var i = {
                    cal: t(this).parent(),
                    y: t(this).offset().top
                };
                t(document).on("mouseup touchend", i, g),
                t(document).on("mousemove touchmove", i, m);
                var n = "touchstart" == e.type ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                return d.apply(i.cal.data("colpick").fields.eq(4).val(parseInt(360 * (i.cal.data("colpick").height - (n - i.y)) / i.cal.data("colpick").height, 10)).get(0), [i.cal.data("colpick").livePreview]),
                !1
            }
            ,
            m = function(t) {
                var e = "touchmove" == t.type ? t.originalEvent.changedTouches[0].pageY : t.pageY;
                return d.apply(t.data.cal.data("colpick").fields.eq(4).val(parseInt(360 * (t.data.cal.data("colpick").height - Math.max(0, Math.min(t.data.cal.data("colpick").height, e - t.data.y))) / t.data.cal.data("colpick").height, 10)).get(0), [t.data.preview]),
                !1
            }
            ,
            g = function(e) {
                return i(e.data.cal.data("colpick").color, e.data.cal.get(0)),
                o(e.data.cal.data("colpick").color, e.data.cal.get(0)),
                t(document).off("mouseup touchend", g),
                t(document).off("mousemove touchmove", m),
                !1
            }
            ,
            v = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                var i, n = {
                    cal: t(this).parent(),
                    pos: t(this).offset()
                };
                return n.preview = n.cal.data("colpick").livePreview,
                t(document).on("mouseup touchend", n, b),
                t(document).on("mousemove touchmove", n, y),
                "touchstart" == e.type ? (pageX = e.originalEvent.changedTouches[0].pageX,
                i = e.originalEvent.changedTouches[0].pageY) : (pageX = e.pageX,
                i = e.pageY),
                d.apply(n.cal.data("colpick").fields.eq(6).val(parseInt(100 * (n.cal.data("colpick").height - (i - n.pos.top)) / n.cal.data("colpick").height, 10)).end().eq(5).val(parseInt(100 * (pageX - n.pos.left) / n.cal.data("colpick").height, 10)).get(0), [n.preview]),
                !1
            }
            ,
            y = function(t) {
                var e;
                return "touchmove" == t.type ? (pageX = t.originalEvent.changedTouches[0].pageX,
                e = t.originalEvent.changedTouches[0].pageY) : (pageX = t.pageX,
                e = t.pageY),
                d.apply(t.data.cal.data("colpick").fields.eq(6).val(parseInt(100 * (t.data.cal.data("colpick").height - Math.max(0, Math.min(t.data.cal.data("colpick").height, e - t.data.pos.top))) / t.data.cal.data("colpick").height, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(t.data.cal.data("colpick").height, pageX - t.data.pos.left)) / t.data.cal.data("colpick").height, 10)).get(0), [t.data.preview]),
                !1
            }
            ,
            b = function(e) {
                return i(e.data.cal.data("colpick").color, e.data.cal.get(0)),
                o(e.data.cal.data("colpick").color, e.data.cal.get(0)),
                t(document).off("mouseup touchend", b),
                t(document).off("mousemove touchmove", y),
                !1
            }
            ,
            k = function(e) {
                var i = t(this).parent()
                  , n = i.data("colpick").color;
                i.data("colpick").origColor = n,
                r(n, i.get(0)),
                i.data("colpick").onSubmit(n, R(n), D(n), i.data("colpick").el)
            }
            ,
            w = function(e) {
                e && e.stopPropagation();
                var i = t("#" + t(this).data("colpickId"));
                e && !i.data("colpick").polyfill && e.preventDefault(),
                i.data("colpick").onBeforeShow.apply(this, [i.get(0)]);
                var n = t(this).offset()
                  , o = n.top + this.offsetHeight
                  , s = n.left
                  , a = x()
                  , r = i.width();
                s + r > a.l + a.w && (s -= r),
                i.css({
                    left: s + "px",
                    top: o + "px"
                }),
                0 != i.data("colpick").onShow.apply(this, [i.get(0)]) && i.show(),
                t("html").mousedown({
                    cal: i
                }, E),
                i.mousedown((function(t) {
                    t.stopPropagation()
                }
                ))
            }
            ,
            E = function(e) {
                var i = t("#" + t(this).data("colpickId"));
                e && (i = e.data.cal),
                0 != i.data("colpick").onHide.apply(this, [i.get(0)]) && i.hide(),
                t("html").off("mousedown", E)
            }
            ,
            x = function() {
                var t = "CSS1Compat" == document.compatMode;
                return {
                    l: window.pageXOffset || (t ? document.documentElement.scrollLeft : document.body.scrollLeft),
                    w: window.innerWidth || (t ? document.documentElement.clientWidth : document.body.clientWidth)
                }
            }
            ,
            P = function(t) {
                return {
                    h: Math.min(360, Math.max(0, t.h)),
                    s: Math.min(100, Math.max(0, t.s)),
                    b: Math.min(100, Math.max(0, t.b))
                }
            }
            ,
            C = function(t) {
                return {
                    r: Math.min(255, Math.max(0, t.r)),
                    g: Math.min(255, Math.max(0, t.g)),
                    b: Math.min(255, Math.max(0, t.b))
                }
            }
            ,
            A = function(t) {
                var e = 6 - t.length;
                if (e > 0) {
                    for (var i = [], n = 0; n < e; n++)
                        i.push("0");
                    i.push(t),
                    t = i.join("")
                }
                return t
            }
            ,
            T = function() {
                var e = t(this).parent()
                  , r = e.data("colpick").origColor;
                e.data("colpick").color = r,
                i(r, e.get(0)),
                o(r, e.get(0)),
                n(r, e.get(0)),
                s(r, e.get(0)),
                a(r, e.get(0)),
                l(r, e.get(0))
            }
            ,
            {
                init: function(_) {
                    if ("auto" === (_ = t.extend({}, e, _ || {})).color)
                        ;
                    else if ("string" == typeof _.color)
                        _.color = O(_.color);
                    else if (null != _.color.r && null != _.color.g && null != _.color.b)
                        _.color = j(_.color);
                    else {
                        if (null == _.color.h || null == _.color.s || null == _.color.b)
                            return this;
                        _.color = P(_.color)
                    }
                    return this.each((function() {
                        if (!t(this).data("colpickId")) {
                            var e = t.extend({}, _);
                            if ("auto" === _.color && (e.color = t(this).val() ? O(t(this).val()) : {
                                h: 0,
                                s: 0,
                                b: 0
                            }),
                            e.origColor = e.color,
                            "function" == typeof _.polyfill && (e.polyfill = _.polyfill(this)),
                            e.polyfill && t(this).is("input") && "color" === this.type)
                                return;
                            var h = "collorpicker_" + parseInt(1e3 * Math.random());
                            t(this).data("colpickId", h);
                            var m = t('<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>').attr("id", h);
                            m.addClass("colpick_" + e.layout + (e.submit ? "" : " colpick_" + e.layout + "_ns")),
                            "light" != e.colorScheme && m.addClass("colpick_" + e.colorScheme),
                            m.find("div.colpick_submit").html(e.submitText).click(k),
                            e.fields = m.find("input").change(d).blur(c).focus(u),
                            m.find("div.colpick_field_arrs").mousedown(p).end().find("div.colpick_current_color").click(T),
                            e.selector = m.find("div.colpick_color").on("mousedown touchstart", v),
                            e.selectorIndic = e.selector.find("div.colpick_selector_outer"),
                            e.el = this,
                            e.hue = m.find("div.colpick_hue_arrs"),
                            huebar = e.hue.parent();
                            var g, y, b = navigator.userAgent.toLowerCase(), E = "Microsoft Internet Explorer" === navigator.appName, x = E ? parseFloat(b.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]) : 0, P = ["#ff0000", "#ff0080", "#ff00ff", "#8000ff", "#0000ff", "#0080ff", "#00ffff", "#00ff80", "#00ff00", "#80ff00", "#ffff00", "#ff8000", "#ff0000"];
                            if (E && x < 10)
                                for (g = 0; g <= 11; g++)
                                    y = t("<div></div>").attr("style", "height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=" + P[g] + ", endColorstr=" + P[g + 1] + '); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + P[g] + ", endColorstr=" + P[g + 1] + ')";'),
                                    huebar.append(y);
                            else
                                stopList = P.join(","),
                                huebar.attr("style", "background:-webkit-linear-gradient(top," + stopList + "); background: -o-linear-gradient(top," + stopList + "); background: -ms-linear-gradient(top," + stopList + "); background:-moz-linear-gradient(top," + stopList + "); -webkit-linear-gradient(top," + stopList + "); background:linear-gradient(to bottom," + stopList + "); ");
                            m.find("div.colpick_hue").on("mousedown touchstart", f),
                            e.newColor = m.find("div.colpick_new_color"),
                            e.currentColor = m.find("div.colpick_current_color"),
                            m.data("colpick", e),
                            i(e.color, m.get(0)),
                            n(e.color, m.get(0)),
                            o(e.color, m.get(0)),
                            a(e.color, m.get(0)),
                            s(e.color, m.get(0)),
                            r(e.color, m.get(0)),
                            l(e.color, m.get(0)),
                            e.flat ? (m.appendTo(this).show(),
                            m.css({
                                position: "relative",
                                display: "block"
                            })) : (m.appendTo(document.body),
                            t(this).on(e.showEvent, w),
                            m.css({
                                position: "absolute"
                            }))
                        }
                    }
                    ))
                },
                showPicker: function() {
                    return this.each((function() {
                        t(this).data("colpickId") && w.apply(this)
                    }
                    ))
                },
                hidePicker: function() {
                    return this.each((function() {
                        t(this).data("colpickId") && E.apply(this)
                    }
                    ))
                },
                setColor: function(e, d) {
                    if (d = void 0 === d ? 1 : d,
                    "string" == typeof e)
                        e = O(e);
                    else if (null != e.r && null != e.g && null != e.b)
                        e = j(e);
                    else {
                        if (null == e.h || null == e.s || null == e.b)
                            return this;
                        e = P(e)
                    }
                    return this.each((function() {
                        if (t(this).data("colpickId")) {
                            var c = t("#" + t(this).data("colpickId"));
                            c.data("colpick").color = e,
                            c.data("colpick").origColor = e,
                            i(e, c.get(0)),
                            n(e, c.get(0)),
                            o(e, c.get(0)),
                            a(e, c.get(0)),
                            s(e, c.get(0)),
                            l(e, c.get(0)),
                            c.data("colpick").onChange.apply(c.parent(), [e, R(e), D(e), c.data("colpick").el, 1]),
                            d && r(e, c.get(0))
                        }
                    }
                    ))
                },
                destroy: function(e, i) {
                    t("#" + t(this).data("colpickId")).remove()
                }
            }), I = function(t) {
                return {
                    r: (t = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16)) >> 16,
                    g: (65280 & t) >> 8,
                    b: 255 & t
                }
            }, O = function(t) {
                return j(I(t))
            }, j = function(t) {
                var e = {
                    h: 0,
                    s: 0,
                    b: 0
                }
                  , i = Math.min(t.r, t.g, t.b)
                  , n = Math.max(t.r, t.g, t.b)
                  , o = n - i;
                return e.b = n,
                e.s = 0 != n ? 255 * o / n : 0,
                0 != e.s ? t.r == n ? e.h = (t.g - t.b) / o : t.g == n ? e.h = 2 + (t.b - t.r) / o : e.h = 4 + (t.r - t.g) / o : e.h = -1,
                e.h *= 60,
                e.h < 0 && (e.h += 360),
                e.s *= 100 / 255,
                e.b *= 100 / 255,
                e
            }, D = function(t) {
                var e = {}
                  , i = t.h
                  , n = 255 * t.s / 100
                  , o = 255 * t.b / 100;
                if (0 == n)
                    e.r = e.g = e.b = o;
                else {
                    var s = o
                      , a = (255 - n) * o / 255
                      , r = i % 60 * (s - a) / 60;
                    360 == i && (i = 0),
                    i < 60 ? (e.r = s,
                    e.b = a,
                    e.g = a + r) : i < 120 ? (e.g = s,
                    e.b = a,
                    e.r = s - r) : i < 180 ? (e.g = s,
                    e.r = a,
                    e.b = a + r) : i < 240 ? (e.b = s,
                    e.r = a,
                    e.g = s - r) : i < 300 ? (e.b = s,
                    e.g = a,
                    e.r = a + r) : i < 360 ? (e.r = s,
                    e.g = a,
                    e.b = s - r) : (e.r = 0,
                    e.g = 0,
                    e.b = 0)
                }
                return {
                    r: Math.round(e.r),
                    g: Math.round(e.g),
                    b: Math.round(e.b)
                }
            }, M = function(e) {
                var i = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
                return t.each(i, (function(t, e) {
                    1 == e.length && (i[t] = "0" + e)
                }
                )),
                i.join("")
            }, R = function(t) {
                return M(D(t))
            };
            t.fn.extend({
                colpick: S.init,
                colpickHide: S.hidePicker,
                colpickShow: S.showPicker,
                colpickSetColor: S.setColor,
                colpickDestroy: S.destroy
            }),
            t.extend({
                colpick: {
                    rgbToHex: M,
                    rgbToHsb: j,
                    hsbToHex: R,
                    hsbToRgb: D,
                    hexToHsb: O,
                    hexToRgb: I
                }
            })
        }
        ,
        void 0 === (s = n.apply(e, o)) || (t.exports = s);
        var a = "colorpicker";
        window.define(a, (function() {
            var e = "undefined"
              , i = typeof __webpack_exports__ === e ? typeof s === e ? typeof t === e ? void 0 : t.exports : s : __webpack_exports__;
            return i && i.default || i
        }
        )),
        window.require([a])
    }
    ,
    532153: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => n
        });
        const n = {
            wrapper: "a24bc3453",
            content: "a034c378e",
            "image-wrapper": "fad9343e",
            image: "a2006491b",
            title: "a209fc218",
            button: "a556b011c",
            description: "a6a7a53bc"
        }
    }
    ,
    597052: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => n
        });
        const n = {
            button: "a116d0ed7",
            icon: "a782bc95e",
            "content-wrapper": "a432e158c",
            contents: "eac22502",
            state: "e43c5768"
        }
    }
    ,
    937634: (t, e, i) => {
        "use strict";
        var n = i(331542);
        e.createRoot = n.createRoot,
        e.hydrateRoot = n.hydrateRoot
    }
    ,
    398457: t => {
        function e(t) {
            if (!t)
                throw new Error("missing options");
            if (!t.handler)
                throw new Error("missing handler parameter");
            this.scrollElement = t.scrollElement || window,
            this.conditions = t.conditions || {},
            this.handler = t.handler,
            this.values = {},
            this.tracked = {},
            this.success = !1,
            this.throttleVal = t.throttle || 100,
            this.processing = !1,
            this.stopped = !1,
            this._parse(),
            "pageYOffset"in this.scrollElement ? (this._addBottom(),
            this._addTop()) : (this._addBottomEl(),
            this._addTopEl(),
            this._addScrollLeft()),
            this._addWidth(),
            this._onScroll()
        }
        e.prototype.addCondition = function(t, e) {
            this.conditions[t] = e,
            this._parse()
        }
        ,
        e.prototype.removeCondition = function(t) {
            delete this.conditions[t],
            this._parse()
        }
        ,
        e.prototype.addTracker = function(t, e) {
            this.tracked[t] = {
                cb: e,
                name: t
            }
        }
        ,
        e.prototype._addBottom = function() {
            this.addTracker("bottom", (function(t) {
                return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - (t.pageYOffset + t.innerHeight)
            }
            ))
        }
        ,
        e.prototype._addTop = function() {
            this.addTracker("top", (function(t) {
                return t.pageYOffset
            }
            ))
        }
        ,
        e.prototype._addBottomEl = function() {
            this.addTracker("bottom", (function(t) {
                return Math.max(t.scrollHeight, t.offsetHeight) - (t.scrollTop + t.offsetHeight)
            }
            ))
        }
        ,
        e.prototype._addTopEl = function() {
            this.addTracker("top", (function(t) {
                return t.scrollTop
            }
            ))
        }
        ,
        e.prototype._addScrollLeft = function() {
            this.addTracker("scrollLeft", (function(t) {
                return t.scrollLeft
            }
            ))
        }
        ,
        e.prototype._addWidth = function() {
            this.addTracker("width", (function(t) {
                return t.innerWidth
            }
            ))
        }
        ,
        e.prototype._parse = function() {
            for (var t in this._parsed = {},
            this._wantedTrackers = [],
            this._parsedMax = {},
            this._parsedMin = {},
            this.conditions)
                if (this.conditions.hasOwnProperty(t))
                    switch (t.substr(0, 4)) {
                    case "min-":
                        this._wantedTrackers.push(t.substr(4, t.length)),
                        this._parsedMin[t.substr(4, t.length)] = this.conditions[t];
                        break;
                    case "max-":
                        this._wantedTrackers.push(t.substr(4, t.length)),
                        this._parsedMax[t.substr(4, t.length)] = this.conditions[t];
                        break;
                    default:
                        this._wantedTrackers.push(t),
                        this._parsed[t] = this.conditions[t]
                    }
        }
        ,
        e.prototype._check = function() {
            var t = [];
            for (var e in this.values)
                this._parsed.hasOwnProperty(e) && t.push(this._parsed[e] == this.values[e]),
                this._parsedMin.hasOwnProperty(e) && t.push(this._parsedMin[e] <= this.values[e]),
                this._parsedMax.hasOwnProperty(e) && t.push(this._parsedMax[e] >= this.values[e]);
            if (t.length && -1 == t.indexOf(!1)) {
                this.processing = !0;
                var i = this._done.bind(this);
                window.requestAnimationFrame(this.handler.bind(this, this.values, i))
            }
        }
        ,
        e.prototype._done = function() {
            this.processing = !1
        }
        ,
        e.prototype._onScroll = function() {
            this._onScrollHandler = this._throttledHandler(),
            this.scrollElement.addEventListener("scroll", this._onScrollHandler, !1)
        }
        ,
        e.prototype._throttledHandler = function() {
            var t = this;
            return this.throttle((function(e) {
                if (t._wantedTrackers.length && !t.processing) {
                    for (var i = 0; i < t._wantedTrackers.length; i++)
                        t.tracked[t._wantedTrackers[i]] && (t.values[t._wantedTrackers[i]] = t.tracked[t._wantedTrackers[i]].cb(t.scrollElement || window));
                    window.requestAnimationFrame(t._check.bind(t))
                }
            }
            ), this.throttleVal)
        }
        ,
        e.prototype.stop = function() {
            this.stopped || (this.scrollElement.removeEventListener("scroll", this._onScrollHandler, !1),
            this.stopped = !0)
        }
        ,
        e.prototype.resume = function() {
            this.stopped && this._onScroll(),
            this.stopped = !1
        }
        ,
        e.prototype.throttle = function(t, e) {
            var i, n = !0;
            return function() {
                var o = this
                  , s = arguments;
                if (n)
                    return t.apply(o, s),
                    void (n = !1);
                i || (i = !0,
                setTimeout((function() {
                    t.apply(o, s),
                    i = !1
                }
                ), e))
            }
        }
        ,
        t.exports && (t.exports = e);
        var i = "steady";
        window.define(i, (function() {
            var e = "undefined"
              , i = typeof __webpack_exports__ === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof t === e ? void 0 : t.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return i && i.default || i
        }
        )),
        window.require([i])
    }
    ,
    288607: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => P
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(811707)
          , l = i(521466)
          , d = i(891411)
          , c = i(403447)
          , u = i(564638);
        function p(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function _(t, e, i) {
            return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var n = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)); )
                        ;
                    return t
                }(t, e);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get ? o.get.call(i || t) : o.value
                }
            }
            ,
            _(t, e, i || t)
        }
        function h(t) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            h(t)
        }
        function f(t, e) {
            return f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            f(t, e)
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
                var i, n = h(t);
                if (e) {
                    var o = h(this).constructor;
                    i = Reflect.construct(n, arguments, o)
                } else
                    i = n.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((i = e) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var i
                }(this, i)
            }
        }
        var g = !1
          , v = !1
          , y = !1
          , b = {
            x: 0,
            y: 0
        }
          , k = !1
          , w = [];
        function E(t) {
            var e = o()(t);
            return !e.hasClass("draggable_text") && e.contents().filter((function() {
                return 3 == +this.nodeType
            }
            )).text().trim().length
        }
        function x(t) {
            w.length && a().forEach(w, (function(e) {
                e.onResize(t)
            }
            ))
        }
        o()((function() {
            o()("html").addClass("scrollbar-width-" + r.scrollBarWidth),
            o()(document).on("hs:pane:hide", ".js-hs-wrapper", (function() {
                o()(this).children(".hs__pane").hide()
            }
            )).on("hs:pane:show", ".js-hs-wrapper", (function() {
                o()(this).children(".hs__pane").show()
            }
            )).on("hs:pause", ".js-hs-wrapper", (function() {
                o()(this).children(".js-hs-scroller").addClass("h-scroll-blocked")
            }
            )).on("hs:resume", ".js-hs-wrapper", (function() {
                o()(this).children(".js-hs-scroller").removeClass("h-scroll-blocked")
            }
            )),
            o()(window).on("hs:resize", x).on("resize.hs", a().throttle(x, u.WINDOW_RESIZE_THROTTLE_DELAY)).on("scroll.hs", (function(t) {
                w.length && a().forEach(w, (function(e) {
                    e.onWindowScroll(t)
                }
                ))
            }
            ))
        }
        ));
        var P = function(t) {
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
                e && f(t, e)
            }(s, t);
            var e, i, n = m(s);
            function s() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                n.apply(this, arguments)
            }
            return e = s,
            i = [{
                key: "document_events",
                value: function() {
                    return {
                        mouseup: "_onMouseUp"
                    }
                }
            }, {
                key: "initialize",
                value: function(t) {
                    return _(h(s.prototype), "initialize", this).apply(this, arguments),
                    this.options = t || {},
                    this.$scroller = this.options.$scroller,
                    this.$wrapper = this.options.$wrapper,
                    this.$wrapper.addClass("js-hs-wrapper"),
                    this.options.selectable_content && this.$scroller.addClass("content-touch-selectable"),
                    !(!this.$scroller.length || this.$scroller.data("hs") || APP.is_touch_device) && (this.$pane = o()('<div class="hs__pane"><div class="hs__bar"></div></div>'),
                    this.$bar = this.$pane.children(".hs__bar"),
                    this.options.hide_scrollbar && this.$pane.addClass("hs__pane_hidden"),
                    this.options.no_boundary && this.$wrapper.addClass("hs-wrapper_hide-boundary"),
                    this.dragged = !1,
                    this.$bar.draggable({
                        axis: "x",
                        containment: "parent",
                        start: a().bind((function() {
                            this.dragged = !0,
                            this.$pane.addClass("active")
                        }
                        ), this),
                        drag: a().bind((function(t) {
                            var e = (t.clientX - t.clientX - parseInt(this.$bar.css("left"))) * (this.$scroller[0].scrollWidth - this.$scroller[0].clientWidth);
                            this.pos(e / this.kpos())
                        }
                        ), this),
                        stop: a().bind((function() {
                            this.dragged = !1,
                            this.$pane.removeClass("active")
                        }
                        ), this)
                    }),
                    this._initScrollMap(),
                    this._initFixedHeader(),
                    this.$wrapper.addClass("hs-wrapper").append(this.$pane),
                    this.refresh(),
                    this.handScroll(),
                    this.$scroller.data("hs", this),
                    w.push(this),
                    this)
                }
            }, {
                key: "_initScrollMap",
                value: function() {
                    var t = this;
                    a().isObject(this.options.scroll_map_options) && this.options.$items_container.length && (this.scroll_map = this._addComponent(d.ScrollMap, {
                        $items_container: this.options.$items_container,
                        default_position: this.options.scroll_map_options.default_position,
                        rleft: function(e) {
                            return t.rleft(e)
                        },
                        rscreen: function() {
                            return t.rscreen()
                        },
                        onDestroy: function() {
                            t.scroll_map = null
                        }
                    }),
                    this.scroll_map.render())
                }
            }, {
                key: "_initFixedHeader",
                value: function() {
                    var t = this;
                    a().isObject(this.options.fixed_header_options) && this.options.$items_container.length && (this.fixed_header = this._addComponent(c.FixedHeader, {
                        append_to: this.options.fixed_header_options.append_to,
                        head_cell_selector: this.options.fixed_header_options.head_cell_selector,
                        head_cell_info_selector: this.options.fixed_header_options.head_cell_info_selector,
                        visible_items_amount: this.options.fixed_header_options.visible_items_amount,
                        entity: this.options.fixed_header_options.entity || "",
                        scroll_offset: this.options.fixed_header_options.scroll_offset || 0,
                        $items_container: this.options.$items_container,
                        pos: function(e) {
                            return t.pos(e)
                        },
                        onDestroy: function() {
                            t.fixed_header = null
                        }
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = w.indexOf(this);
                    this.$bar && this.$bar.data("ui-draggable") && this.$bar.draggable("destroy"),
                    this.$pane && this.$pane.off().remove(),
                    this.$scroller.length && this.$scroller.removeData().off(),
                    t > -1 && w.splice(t, 1),
                    _(h(s.prototype), "destroy", this).call(this)
                }
            }, {
                key: "refresh",
                value: function() {
                    this.updatePane(),
                    this.options.hide_scrollbar || this._processBarOnScroll()
                }
            }, {
                key: "_processBarOnScroll",
                value: function(t) {
                    var e = this.rleft() * this.$pane.width() || 0;
                    t || this.$bar.css("left", e),
                    e < .6 ? this._hs_at_start || (this._hs_at_start = !0,
                    this.$wrapper.addClass("hs-at-start"),
                    a().isFunction(this.options.onReachStart) && this.options.onReachStart()) : (this._hs_at_start = !1,
                    this.$wrapper.removeClass("hs-at-start"),
                    a().isFunction(this.options.onLeaveStart) && this.options.onLeaveStart()),
                    this.bar_width + e > this.pane_width - .6 ? this._hs_at_end || (this._hs_at_end = !0,
                    this.$wrapper.addClass("hs-at-end"),
                    a().isFunction(this.options.onReachEnd) && this.options.onReachEnd()) : (this._hs_at_end = !1,
                    this.$wrapper.removeClass("hs-at-end"),
                    a().isFunction(this.options.onLeaveEnd) && this.options.onLeaveEnd())
                }
            }, {
                key: "pos",
                value: function(t) {
                    var e = "pageXOffset"
                      , i = this.$scroller[0][e] ? e : "scrollLeft";
                    return a().isUndefined(t) || (this.$scroller[0][i] = Math.abs(t)),
                    this.$scroller[0][i]
                }
            }, {
                key: "rpos",
                value: function() {
                    var t = this.$scroller[0];
                    return this.pos() / (t.scrollWidth - t.clientWidth || 1)
                }
            }, {
                key: "rleft",
                value: function(t) {
                    var e = this.$scroller[0];
                    return a().isUndefined(t) || this.pos(e.scrollWidth * t),
                    this.pos() / e.scrollWidth
                }
            }, {
                key: "rscreen",
                value: function() {
                    var t = this.$scroller[0];
                    return t.clientWidth / (t.scrollWidth || 1)
                }
            }, {
                key: "kpos",
                value: function() {
                    return this.$pane[0].clientWidth - this.$bar[0].offsetWidth
                }
            }, {
                key: "updatePane",
                value: function() {
                    o().isFunction(this.options.beforeUpdate) && this.options.beforeUpdate.call(this),
                    this.rscreen() < 1 ? (this.$pane.show(),
                    this.$wrapper.removeClass("hs__wrapper_no-boundary"),
                    this.$scroller.removeClass("hs-wrapper_no-hand")) : (this.$pane.hide(),
                    this.$wrapper.addClass("hs__wrapper_no-boundary"),
                    this.$scroller.addClass("hs-wrapper_no-hand"));
                    var t = Math.round(this.$pane[0].offsetWidth * this.rscreen());
                    return this.$bar.width(t),
                    this.bar_width = this.$bar[0].offsetWidth,
                    this.pane_width = this.$pane[0].offsetWidth,
                    this.scroll_map && (this.scroll_map.onScreenWidthUpdate(),
                    this.scroll_map.onScreenPositionUpdate()),
                    this.fixed_header && this.fixed_header.onScreenResize(),
                    this
                }
            }, {
                key: "isDragged",
                value: function() {
                    return y
                }
            }, {
                key: "_onMouseUp",
                value: function() {
                    this._$document.triggerHandler("menu:start-hover"),
                    this.selection_prevented && (this.selection_prevented = !1,
                    o()("body").removeClass("block-selection-prepended"),
                    this.$scroller.find(".block-selection-prepended").removeClass("block-selection-prepended").addClass("block-selectable")),
                    y = !1,
                    g = !1,
                    v = !1,
                    this.$scroller.removeClass("hand-cursor-dragging")
                }
            }, {
                key: "handScroll",
                value: function() {
                    var t, e = this;
                    this.$scroller.off(this.ns).one("mousemove" + this.ns, a().bind(this.updatePane, this)).on("mousedown" + this.ns, ".js-hs-prevent", (function() {
                        v = !0
                    }
                    )).on("mousedown" + this.ns, a().bind((function(e) {
                        if (this._$document.triggerHandler("menu:stop-hover"),
                        E(e.target) || (this.selection_prevented = !0,
                        o()("body").addClass("block-selection-prepended"),
                        this.$scroller.find(".block-selectable").removeClass("block-selectable").addClass("block-selection-prepended")),
                        o()(e.target).is(":input"))
                            return !0;
                        v || (b = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        g = !0,
                        t = e.clientX,
                        this.options.selectable_content && E(e.target) || this.$scroller.addClass("hand-cursor-dragging"))
                    }
                    ), this)).on("click" + this.ns, (function(t) {
                        if (y)
                            return y = !1,
                            !1;
                        k || o()(t.target).is(":input") || E(t.target) ? k = !1 : window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
                    }
                    )).on("mousemove" + this.ns, a().throttle((function(i) {
                        var n = e.rscreen() < 1;
                        if (!0 === g && (k = !0),
                        e.scroll_map && e.scroll_map.onMouseMove(i),
                        e.selection_prevented && n && !o()(i.currentTarget).closest(".js-hs-scroll-stop").length) {
                            if (!0 === g) {
                                var s = e.$scroller.scrollLeft() + (t - i.clientX);
                                (Math.abs(b.x - i.pageX) > 5 || Math.abs(b.y - i.pageY)) && (y = !0),
                                e.$scroller.scrollLeft(s),
                                t = i.clientX
                            }
                            o()(i.target).is(":input") || i.preventDefault()
                        }
                    }
                    ), 13)).on("scroll" + this.ns, a().throttle((function() {
                        e.scroll_map && e.scroll_map.onScreenPositionUpdate(),
                        e.fixed_header && e.fixed_header.onHsScroll(),
                        e.options.hide_scrollbar || e._processBarOnScroll(e.dragged)
                    }
                    ), 13))
                }
            }, {
                key: "onResize",
                value: function(t) {
                    this.updatePane(),
                    this.scroll_map && this.scroll_map.onWindowResize(t)
                }
            }, {
                key: "onWindowScroll",
                value: function() {
                    this.fixed_header && this.fixed_header.onWindowScroll()
                }
            }, {
                key: "scrollPause",
                value: function() {
                    this._hide_scrollbar_margin = parseInt(this.$scroller.css("marginBottom")),
                    this.$scroller.off(this.ns).addClass("h-scroll-blocked").css("marginBottom", 0)
                }
            }, {
                key: "scrollMapSetLoading",
                value: function(t, e) {
                    this.scroll_map && this.scroll_map.setLoading(t, e)
                }
            }, {
                key: "scrollResume",
                value: function() {
                    this.$scroller.removeClass("h-scroll-blocked").css("marginBottom", this._hide_scrollbar_margin),
                    this.handScroll()
                }
            }],
            i && p(e.prototype, i),
            s
        }(l.default)
          , C = "../build/transpiled/common/hs";
        window.define(C, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([C])
    }
    ,
    300432: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => c
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(398457)
          , a = i.n(s)
          , r = []
          , l = function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return a().apply(this, e)
        };
        (l.prototype = Object.create(a().prototype)).throttle = o().throttle;
        var d = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.steady_loader = new l({
                scrollElement: t.element || window,
                conditions: t.conditions || {
                    "max-bottom": 100
                },
                throttle: t.throttle || 100,
                handler: function(e, i) {
                    var n = t.onLoadMore();
                    n && n.then ? n.then(i) : i()
                }
            }),
            r.push(this.steady_loader)
        };
        d.prototype.destroy = function() {
            var t = o().indexOf(r, this.steady_loader);
            this.steady_loader && this.steady_loader.stop(),
            r.splice(t, 1)
        }
        ;
        const c = d;
        var u = "../build/transpiled/components/base/autoload";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    837911: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => f
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(827378)
          , a = i.n(s)
          , r = i(937634)
          , l = i(521466)
          , d = i(294728)
          , c = i(643095)
          , u = i(775813);
        function p(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        var _ = p({}, u.ErrorVariants.NO_ACCESS, 204)
          , h = p({}, u.ErrorVariants.CONNECTION_PROBLEM, 0);
        const f = l.default.extend({
            space_template: "/tmpl/common/404page.twig",
            initialize: function(t) {
                l.default.prototype.initialize.apply(this, arguments),
                this.options = t || {},
                this.render()
            },
            destroy: function() {
                var t;
                null === (t = this.unmountErrorHandler) || void 0 === t || t.call(this)
            },
            render: function() {
                var t, e = this, i = this.options, n = i.jqXHR, s = i.message_options, a = void 0 === s ? {} : s, r = null == n ? void 0 : n.responseJSON;
                r && (t = this.getErrorCode(r));
                var l = function(t) {
                    var i = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {}
                              , n = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(i, t).enumerable
                            }
                            )))),
                            n.forEach((function(e) {
                                p(t, e, i[e])
                            }
                            ))
                        }
                        return t
                    }({
                        variant: t
                    }, a);
                    e.unmountErrorHandler = e.mountErrorHandler(i),
                    (0,
                    c.sentryLogErrorHandler)({
                        errXHR: n,
                        variant: t
                    })
                };
                switch (!0) {
                case t === _[u.ErrorVariants.NO_ACCESS]:
                    l(u.ErrorVariants.NO_ACCESS);
                    break;
                case (null == n ? void 0 : n.status) === h[u.ErrorVariants.CONNECTION_PROBLEM]:
                    l(u.ErrorVariants.CONNECTION_PROBLEM);
                    break;
                default:
                    var f = this._addComponent(d.default, o().extend({}, this.options.space_options, {
                        jqXHR: n
                    }));
                    this.$el.append(f.$el)
                }
            },
            mountErrorHandler: function(t) {
                var e = a().createElement(u.ErrorMessage, t)
                  , i = (0,
                r.createRoot)(this.el);
                return i.render(e),
                function() {
                    i.unmount()
                }
            },
            getErrorCode: function(t) {
                return o().propertyOf(t)(["response", "errors", 0, "code"])
            }
        });
        var m = "../build/transpiled/components/base/error_handler";
        window.define(m, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([m])
    }
    ,
    696884: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => o
        });
        var n = ["845275ac-22e4-4778-9e9a-3b5d06e9e914", "45e0ff46-eef9-463f-a725-8b97dfd1cca0", "27850382-d297-47ab-a74c-544ee8cc895d", "7da05ed4-4a9d-48a9-a92f-efc81aff9e31", "eed2daac-a9fe-4b47-ab9f-d0ca5c0f17a6", "7691f5d1-d4f7-4466-9ac3-8a316b1557ae", "66396ad3-95f7-477d-bd4e-a596a94087c5", "966d8f59-55bc-4961-be32-f319c176a295", "49ae13e7-b75a-4fc0-9f39-c5c2812dcb34", "da877054-c483-4da2-91f7-2e5aeacbaedf", "b83b697f-1f6c-4726-b36b-a57b6593173b", "be2d1c42-351b-40d0-97b7-5d2e1314b079", "f6cb24c9-8d27-4a96-9720-9efd6af539c1", "de4475bb-73ad-4fe6-a2df-3d2b7cb7cb84"];
        (0,
        i(500034).isFeatureAvailable)("global_inbox") && n.push("3c9022fd-ac7d-48f4-ad24-7b5121417aa3");
        const o = {
            STATE_UNINITIALIZED: -1,
            STATE_SHOW_CONTENT: 1,
            STATE_SHOW_LOADING: 2,
            STATE_SHOW_ERROR: 3,
            STATE_ONLY_SUPPORT: 4,
            MODE_NORMAL: 1,
            MODE_ONLY_SUPPORT: 2,
            EVENT_READ: "read",
            EVENT_DELETE: "delete",
            EVENT_NEW: "new",
            LOCAL_STORAGE_KEY: "_amojo_direct",
            PAGE_COUNT: 50,
            ENTER: 13,
            ESC_KEY: 27,
            ENTER_KEY: 13,
            ARROW_DOWN: 40,
            ARROW_UP: 38,
            LEFT_MENU_WIDTH: 65,
            TYPE_DIRECT: "chat_direct",
            TYPE_GROUP: "chat_group",
            SYSTEM_CREATE_GROUP: "group_chat_create",
            AMO_CHATS_GROUP_TYPE: 18,
            FIXED_CORE_PROVIDERS: n,
            EMOTION_FILTER_NAME: "emotion",
            EMOTIONS: {
                NEUTRAL: "NEUTRAL",
                NEGATIVE: "NEGATIVE",
                POSITIVE: "POSITIVE"
            }
        };
        var s = "../build/transpiled/components/base/inbox/constants";
        window.define(s, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([s])
    }
    ,
    186467: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => c
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(288607);
        function l(t, e) {
            return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
        }
        var d = function(t) {
            this.options = o().extend({
                appendTo: o()(document.body)
            }, t || {}),
            this.$el = o()(this.options.el),
            this.$page_holder = o()("#page_holder"),
            this.$manage = this.options.manage ? o()(this.options.manage.el) : [],
            this.$scrollable = this.$el.find(".js-scroll-x-container"),
            this.$pipeline_content = this.$scrollable.find(".pipeline_wrapper"),
            this.$window = o()(window),
            this.$body = o()("body"),
            this.makeSortable(),
            this.makeDroppable(),
            this.hs = new r.default({
                $wrapper: this.$scrollable.parent(),
                $scroller: this.$scrollable,
                $items_container: this.$pipeline_content,
                static_width: this.options.hs_options && this.options.hs_options.static_width,
                hide_scrollbar: this.options.hs_options && this.options.hs_options.hide_scrollbar,
                no_boundary: this.options.hs_options && this.options.hs_options.no_boundary,
                scroll_map_options: {
                    default_position: {
                        right: 26,
                        bottom: 9
                    }
                },
                fixed_header_options: a().extend({
                    head_cell_selector: ".pipeline_cell-head",
                    append_to: "#list__body-right"
                }, this.options.hs_options && this.options.hs_options.fixed_header_options || {})
            })
        };
        d.prototype.holding = null,
        d.prototype.freezScroll = !1,
        d.prototype.setPipelinePosition = function(t, e, i) {
            var n = this
              , o = 0
              , s = n.$scrollable.scrollLeft()
              , a = n.$scrollable.width()
              , r = i.item.outerWidth()
              , l = n.$scrollable.offset().left
              , d = n.$scrollable.offset().left + a
              , c = i.helper.offset().left
              , u = i.helper.offset().left + r;
            c <= l + 100 ? o = -(10 + Math.floor((100 - (c - l)) / 10)) : u >= d - 100 && (o = 10 + Math.floor((100 - (d - u)) / 10)),
            n.$scrollable.scrollLeft(s + o)
        }
        ,
        d.prototype.makeSortable = function(t) {
            var e = this
              , i = this.$el.find(".pipeline_items__list")
              , n = Math.max(this.$el.find(".js-pipeline-row").closest(".pipeline_row").height(), 50)
              , s = o()("html").hasClass("explorer");
            !1 === t || this.options.is_dnd_disabled ? this._sortable("destroy") : this.$el.find(".js-pipeline-row").sortable({
                containment: a().isUndefined(this.options.containment) ? document.body : this.options.containment,
                appendTo: this.options.appendTo,
                connectWith: ".js-pipeline-row",
                items: ".js-pipeline-sortable",
                forceHelperSizeType: !0,
                handle: this.options.handle || !1,
                helper: "clone",
                tolerance: this.options.tolerance || "pointer",
                opacity: .7,
                placeholder: this.options.placeholder || "pipeline-item-placeholder pipeline_leads__item_placeholder",
                forcePlaceholderSizeType: !0,
                scroll: !1,
                zIndex: 999,
                refreshPositions: !0,
                start: function(t, a) {
                    var r;
                    e.$body.css("overflow-x", "hidden"),
                    a.item.css({
                        opacity: .2
                    }).show(),
                    e.hs && e.hs.scroll_map && (r = e.$manage.find(".js-pipeline-droppable").height(),
                    e.hs.scroll_map.move({
                        bottom: r + 9
                    })),
                    e.item_new = o()(this),
                    e.item_old = o()(this),
                    a.placeholder.height(a.item.outerHeight()).width(a.item.outerWidth()).hide(),
                    o()(this).addClass("ui-sorting ui-sorting-this"),
                    e.$manage.length && e.$page_holder.addClass("pipeline-show-manage"),
                    s && i.each((function() {
                        o()(this).css("min-height", "".concat(n, "px"))
                    }
                    )),
                    (l(e.options.appendTo, o()) ? e.options.appendTo[0] : e.options.appendTo) !== document.body && o()(this).sortable("refreshPositions"),
                    "function" == typeof e.options.start && e.options.start.apply(this, [a, e])
                },
                beforestop: function(t, i) {
                    (l(e.options.appendTo, o()) ? e.options.appendTo[0] : e.options.appendTo) !== document.body && i.helper.css("margin-top", "")
                },
                sort: function(t, i) {
                    var n = o()(this);
                    "function" == typeof e.options.sort && e.options.sort.apply(this, [i, e]),
                    e.options.noHS && e.$scrollable.parent().scrollLeft(0),
                    e.holding || (e.holding = setInterval((function() {
                        e.freezScroll || (e.setPipelinePosition(this, t, i),
                        a().throttle((function() {
                            (document.contains && document.contains(n.get(0)) || n.closest("body").length) && n.sortable("refreshPositions")
                        }
                        ), 50))
                    }
                    ), 50))
                },
                change: function(t, i) {
                    e.item_new = i.placeholder.closest(".js-pipeline-row").clone(),
                    e.item_old.attr("data-id") == e.item_new.attr("data-id") || e.item_new.hasClass("js-pipeline-no-drop") ? (i.placeholder.hide(),
                    o()(this).addClass("ui-sorting-this")) : (i.placeholder.show(),
                    o()(this).removeClass("ui-sorting-this")),
                    e.checkPlaceholderVisibility(i.placeholder)
                },
                receive: function(t, i) {
                    e.item_new.hasClass("js-pipeline-no-drop") && i.sender.addClass("cancel").sortable("cancel")
                },
                over: function(t, i) {
                    e.item_new = o()(this),
                    "function" == typeof e.options.over && e.options.over.apply(this, [i, e]),
                    o()(this).append(i.placeholder),
                    e.checkPlaceholderVisibility(i.placeholder)
                },
                stop: function(t, n) {
                    clearInterval(e.holding),
                    e.holding = null,
                    e.freezScroll = !1,
                    e.hs && e.hs.scroll_map && e.hs.scroll_map.move(null);
                    var r = "".concat(e.item_new.attr("data-id"))
                      , l = "".concat(e.item_old.attr("data-id"));
                    n.item.removeAttr("style"),
                    e.$body.css("overflow-x", ""),
                    o()(this).hasClass("cancel") ? (o()(this).removeClass("cancel").sortable("cancel"),
                    e.options.canceled && e.options.canceled.apply(this, [n, e])) : r && l !== r ? e.options.change.apply(this, [n, e]) : (o()(this).sortable("cancel"),
                    e.options.immutable && e.options.immutable.apply(this, [n, e])),
                    o()(this).removeClass("ui-sorting ui-sorting-this"),
                    e.$manage.length && (e.$page_holder.removeClass("pipeline-show-manage"),
                    a().isFunction(e.options.manageHide) && a().delay(a().bind(e.options.manageHide, this), 500)),
                    s && i.each((function() {
                        o()(this).css("min-height", "")
                    }
                    )),
                    "function" == typeof e.options.stop && e.options.stop.apply(this, [n, e])
                }
            })
        }
        ,
        d.prototype.makeDroppable = function(t) {
            var e = this;
            this.$manage.length && (!1 === t || this.options.is_dnd_disabled ? this.$manage.find(".js-pipeline-droppable").droppable() && this.$manage.find(".js-pipeline-droppable").droppable("destroy") : this.$manage.find(".js-pipeline-droppable").droppable({
                refreshPositions: !0,
                tolerance: this.options.manage.tolerance || "pointer",
                accept: ".js-pipeline-row *",
                over: function(t, i) {
                    e.freezScroll = !0,
                    i.helper.addClass("pipeline-manage-overed pipeline_leads__item-".concat(o()(this).data("status-id")))
                },
                out: function(t, i) {
                    e.freezScroll = !1,
                    i.helper.removeClass("pipeline-manage-overed pipeline_leads__item-".concat(o()(this).data("status-id")))
                },
                drop: function(t, i) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    i.draggable.closest(".js-pipeline-row").addClass("cancel"),
                    o()(t.target).hasClass("pipeline_manage__item") && i.draggable.addClass("h-hidden"),
                    "function" == typeof e.options.manage.drop && a().delay(a().bind((function() {
                        e.options.manage.drop.apply(this, [i, e])
                    }
                    ), this), APP.is_touch_device ? 50 : 0)
                }
            }))
        }
        ,
        d.prototype._sortable = function(t) {
            return this.$el.find(".js-pipeline-row").sortable() && this.$el.find(".js-pipeline-row").sortable(t),
            this
        }
        ,
        d.prototype.checkPlaceholderVisibility = function(t) {
            var e, i = 0;
            t.css(Modernizr.prefixed("transform"), ""),
            t.get(0).getBoundingClientRect().top >= 0 || (i = this.$window.scrollTop() - t.offset().top + 65),
            this.hs && this.hs.fixed_header && this.hs.fixed_header.getOffsetBelow && (e = this.hs.fixed_header.getOffsetBelow(),
            t.position().top < e && (i = e - t.position().top)),
            i && t.css(Modernizr.prefixed("transform"), "translateY(".concat(i, "px)"))
        }
        ,
        d.prototype.scrollPause = function() {
            this.freezScroll = !0,
            this.hs.scrollPause()
        }
        ,
        d.prototype.scrollResume = function() {
            this.freezScroll = !1,
            this.hs.scrollResume()
        }
        ,
        d.prototype.enable = function() {
            return this._sortable("enable")
        }
        ,
        d.prototype.disable = function() {
            return this._sortable("disable")
        }
        ,
        d.prototype.refresh = function() {
            this.makeSortable()
        }
        ,
        d.prototype.destroy = function() {
            this.hs && this.hs.destroy(),
            this.pipeline_fixed_header && (this.pipeline_fixed_header.destroy(),
            this.pipeline_fixed_header = null),
            this.makeSortable(!1),
            this.makeDroppable(!1)
        }
        ;
        const c = d;
        var u = "../build/transpiled/components/base/pipeline/index";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    10026: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => d
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(886965)
          , a = i(661533)
          , r = {}
          , l = function() {};
        o().extend(l.prototype, {
            _matching_entities: {
                contacts: ["companies"]
            },
            _positionId: function() {
                return (0,
                s.getMatchingEntity)() + APP.data.is_card
            },
            savePosition: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._positionId()
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                    return a(window).scrollTop()
                }
                ;
                return r[t] = e(),
                t
            },
            getPosition: function(t) {
                return r[t || this._positionId()] || 0
            },
            restorePosition: function(t, e) {
                (e = e || function(t) {
                    a(window).scrollTop(t)
                }
                )(this.getPosition(t)),
                this.clearPosition(t)
            },
            clearPosition: function(t) {
                r[t || this._positionId()] = null
            }
        }),
        a(document).on("page:entity_changed", (function() {
            r = {}
        }
        ));
        const d = new l;
        var c = "../build/transpiled/components/base/scroll_saver";
        window.define(c, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([c])
    }
    ,
    294728: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => c
        });
        var n = i(460159)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(880774)
          , l = i(521466)
          , d = i(643095);
        const c = l.default.extend({
            template: "/tmpl/common/404page.twig",
            initialize: function(t) {
                l.default.prototype.initialize.apply(this, arguments),
                this.options = t || {},
                this.render(),
                this.options.jqXHR && (0,
                d.sentryLogSpaceError)({
                    errXHR: this.options.jqXHR,
                    extra: this.options.sentryExtra
                })
            },
            render: function() {
                return o()._preload([this.template])().then(a().bind((function() {
                    this.$el.html(o()({
                        ref: this.template
                    }).render({
                        title: this.options.title || (0,
                        r.i18n)("Nothing here,"),
                        text: this.options.text || (0,
                        r.i18n)("just an empty space, sorry")
                    }))
                }
                ), this))
            }
        });
        var u = "../build/transpiled/components/base/space";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    419743: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => r
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(744561)
          , a = i(495707);
        const r = s.default.extend({
            model: a.default,
            url: function() {
                return "/ajax/v2_5/tasks/"
            },
            getOriginCollection: function() {
                return this
            },
            parse: function() {
                var t = s.default.prototype.parse.apply(this, arguments);
                return o().map(t, (function(t) {
                    return o().extend(t, {
                        object_type: {
                            id: APP.element_types.todo,
                            code: "tasks"
                        }
                    })
                }
                ))
            }
        })
    }
    ,
    495707: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => r
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(46225)
          , a = i(661533);
        const r = s.default.extend({
            sync: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this._pending || (this._pending = !0,
                this._loading = a.ajax({
                    url: "/private/notes/edit2.php",
                    data: this._getSyncData(t),
                    dataType: "json",
                    type: "POST"
                }).done(i.success || o().noop).fail(i.error || o().noop)),
                this._loading
            },
            parse: function(t) {
                var e = {
                    id: t.task ? t.task.id : t.id,
                    type: t.type || t.task_type,
                    data: t.data || {
                        text: t.text
                    },
                    author_name: t.author_name,
                    responsible_user_id: t.responsible_user || t.responsible_user_id,
                    complete_till: t.complete_till || t.complete_till_at,
                    object_type: {
                        id: APP.element_types.todo,
                        code: "tasks"
                    },
                    status: o().contains([1, 0], parseInt(t.status)) ? t.status : t.is_completed,
                    visible: !0,
                    linked: t.linked || {},
                    manager: t.manager || {},
                    user: t.user || {},
                    completable: !0,
                    editable: t.task ? t.task.editable : t.editable || !1,
                    deletable: t.task ? t.task.deletable : t.deletable || !1
                };
                return this.attributes && (e = o().mapObject(e, o().bind((function(t, e) {
                    return (o().isUndefined(t) || "data" === e && o().isUndefined(t.text)) && (t = this.attributes[e]),
                    t
                }
                ), this))),
                o().extend(o().pick(t, "id", "is_new", "object_type", "created_by", "element_id", "element_type", "updated_at", "result", "duration", "is_completed", "completable", "editable", "deletable", "icon_color", "icon_id", "type_name", "date", "dashboard", "expired", "duration_words"), e)
            }
        });
        var l = "../build/transpiled/components/base/todo/model";
        window.define(l, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([l])
    }
    ,
    412469: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => l
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(686030)
          , a = i(486264)
          , r = i(661533);
        const l = s.default.extend({
            _important_save: !1,
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                s.default.prototype.initialize.apply(this, e),
                this.listenTo(this.model, "destroy", o().bind((function() {
                    o().isFunction(this.options.onDelete) ? this.options.onDelete(this.model) : this._$document.trigger("list:reload")
                }
                ), this))
            },
            _resetScrollPosAfterFocus: o().noop(),
            _updateSticky: function() {
                this.$el.closest(".modal-body").trigger("modal:centrify")
            },
            _getTemplate: function(t) {
                return "edit" === t ? "/tmpl/todo/form/edit.twig" : "/tmpl/todo/form/view.twig"
            },
            _classes: function() {
                return o().extend({}, o().result(s.default.prototype, "_classes", {}), {
                    linked: "card-task__linked-for-todo"
                })
            },
            events: o().extend({}, s.default.prototype.events || {}, {
                "click .card-task__linked-for-todo-unlink": "onUnlinkClick",
                "suggest:loaded .card-task__linked-for-todo-suggest": "onLinkedSuggestLoaded",
                "suggest:changed .card-task__linked-for-todo-suggest": "onLinkedSuggestChanged"
            }),
            onUnlinkClick: function() {
                this._elem("linked").addClass("".concat(this._class("linked"), "_in-edit")),
                this.onLinkedSuggestChanged({}, r()),
                this.$(".js-todo-form-suggest").val("").focus()
            },
            onLinkedSuggestLoaded: function(t, e, i) {
                i.trigger("suggest:reset", [o().map(e.items, (function(t) {
                    return {
                        raw_highlight: !0,
                        id: t.id,
                        text: t.name,
                        additional_data: 'data-element-type="'.concat(APP.element_types[t.type], '"')
                    }
                }
                ))])
            },
            onLinkedSuggestChanged: function(t, e) {
                this.$('[name="element_id"]').val(e.attr("data-value-id")).trigger("change"),
                this._elem("linked").data("element-name", e.find(".control--suggest--list--item-inner").attr("title")).attr("data-element-type", e.attr("data-element-type"))
            },
            _isFutureTask: function() {
                return !1
            },
            _render: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                s.default.prototype._render.apply(this, e),
                this.$el.attr("class", "todo-form")
            },
            edit: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                s.default.prototype.edit.apply(this, e),
                this.el.classList.remove("".concat(this.className, "-in-edit"))
            },
            cancel: function(t) {
                var e, i;
                s.default.prototype.cancel.apply(this, arguments),
                this.model.get("is_completed") ? this.$el.trigger("modal:centrify") : (this.model.get("status") && o().isFunction(this.options.onComplete) && this.options.onComplete(!this.model.get("has_clone")),
                e = t,
                (null != (i = r.Event) && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](e) : e instanceof i) && o().isFunction(this.options.onCancel) && this.model.get("is_new") && this.options.onCancel())
            },
            _copyFormToModel: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var n = this._form.model.get("element_id");
                s.default.prototype._copyFormToModel.apply(this, e),
                n !== this._form.model.defaults.element_id && this.model.set({
                    element_id: this._form.model.get("element_id"),
                    element_type: n ? this._elem("linked").attr("data-element-type") : "",
                    element_name: n ? this._elem("linked").data("element-name") : ""
                })
            },
            save: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var n;
                return this._important_save = !0,
                this.model.get("is_completed") ? (n = {
                    $el: this.$el,
                    model: this.model
                },
                void a.default._updateResultCompletedTask(n)) : s.default.prototype.save.apply(this, e).then(o().bind((function() {
                    this._important_save = !1,
                    this.options.onAdd(this.model.toJSON())
                }
                ), this))
            },
            hasChanges: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return !!this._important_save || s.default.prototype.hasChanges.apply(this, e)
            },
            _highlightSave: function() {
                s.default.prototype._highlightSave.apply(this, [!0])
            }
        })
    }
    ,
    19534: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => h
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(161320)
          , a = i.n(s)
          , r = i(315702)
          , l = i(579569)
          , d = i(500034)
          , c = i(23456)
          , u = i(889378)
          , p = i(419743)
          , _ = i(412469);
        const h = u.default.extend({
            initialize: function(t) {
                t = o().extend({
                    init: this._onInit,
                    destroy: this._onDestroy,
                    class_name: "modal-list modal-todo",
                    disable_enter_keydown: !0
                }, t || {}),
                u.default.prototype.initialize.call(this, t)
            },
            _onDestroy: function() {
                this.options && o().isFunction(this.options.onDestroy) && this.options.onDestroy()
            },
            _onInit: function() {
                this._collection = new p.default([],{
                    element_id: this.options.todo_id,
                    element_type: APP.element_types.todo
                }),
                this.listenToOnce(this._collection, "add", this._onTodoLoaded),
                this.options.todo_id ? this._collection.fetch({
                    data: {
                        id: this.options.todo_id
                    }
                }) : this._collection.add({
                    is_new: !0,
                    task_type: 1,
                    responsible_user_id: (0,
                    l.current)("id")
                }).set(this.options.model_attrs || {})
            },
            _onTodoLoaded: function() {
                this._collection.embedded = o().extend({}, this._collection.embedded || {}, this.options.embedded || {}),
                this._collection.first().set(this.options.todo_options),
                this._task = this._addComponent(_.default, {
                    models: [this._collection.first().set({
                        element_name: this.options.element_name
                    })],
                    getExtraData: o().bind((function() {
                        return {
                            leads: this._collection.embedded.leads || {},
                            customers: this._collection.embedded.customers || {},
                            contacts: this._collection.embedded.contacts || {},
                            companies: this._collection.embedded.companies || {}
                        }
                    }
                    ), this),
                    onCancel: o().bind(this.destroy, this),
                    onAdd: o().bind((function(t) {
                        if (o().isFunction(this.options.onSave) ? this.options.onSave(t) : this._$document.trigger("page:reload"),
                        this.options.show_success ? (this._elem("body_inner").html(""),
                        this.showSuccess()) : this.destroy(),
                        (0,
                        d.isFeatureAvailable)("is_customization_for_global")) {
                            var e = "task-event-sent";
                            if (r.storeWithExpiration.get(e))
                                return;
                            var i = "other";
                            "todo" === APP.getBaseEntity() && (i = "Calendar");
                            var n = a()().add(1, "days").startOf("day").diff(a()());
                            (0,
                            c.kommoLogAmplitude)("taskSet", {
                                "Task source": i
                            }),
                            r.storeWithExpiration.set(e, "Y", n)
                        }
                        return Promise.resolve()
                    }
                    ), this),
                    onComplete: o().bind((function(t) {
                        this.destroy(),
                        o().isFunction(this.options.onRemove) ? this.options.onRemove() : t && this._$document.trigger("page:reload")
                    }
                    ), this),
                    onDelete: o().bind((function(t) {
                        this.destroy(),
                        o().isFunction(this.options.onDelete) ? this.options.onDelete(t) : this._$document.trigger("page:reload")
                    }
                    ), this),
                    scrollUpdate: o().noop
                }),
                this._elem("body").append('<div class="modal-body__inner"></div>'),
                this._elem("body_inner").append(this._task.el),
                this._task.render().then(o().bind((function() {
                    this._task.model.get("is_new") && this._task.enterEditMode(),
                    this.onModalCentrify()
                }
                ), this))
            }
        })
    }
    ,
    179013: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => g
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(880774)
          , c = i(937634)
          , u = i(521466)
          , p = i(889378)
          , _ = i(339095)
          , h = i(827378)
          , f = "/ajax/sync/calendars/"
          , m = ["google_calendar"];
        const g = u.default.extend({
            events: {
                "click .js-calendar-sync-toggler": "_onStateToggle",
                "click .js-calendar-sync-setup": "_onCalendarWidgetSetup"
            },
            _classes: function() {
                return {
                    calendar_status: "js-calendar-sync-status",
                    calendar_status_custom_enable: "js-calendar-sync-status-custom-enable",
                    calendar_status_custom_enabled: "js-calendar-sync-status-custom-enabled",
                    calendar_item: "js-calendar-sync-item",
                    calendar_error: "js-calendar-error"
                }
            },
            _selectors: function() {
                return {
                    googleButtonContainer: "#google-button-container"
                }
            },
            initialize: function() {
                u.default.prototype.initialize.apply(this, arguments)
            },
            _requestSystemCalendars: function() {
                return o().ajax({
                    url: "".concat(f, "info/?source=v3"),
                    type: "GET",
                    dataType: "json"
                })
            },
            showModal: function() {
                this.modal = new p.default({
                    class_name: "modal-list modal-calendar-sync",
                    preload_templates: ["/tmpl/todo/calendar/modal_sync.twig"],
                    init: a().bind((function(t) {
                        this._requestSystemCalendars().done(a().bind((function(e) {
                            this.system_calendars = e._embedded,
                            this.widget_calendars = this._getWidgetCalendars(),
                            this.setElement(t),
                            t.trigger("modal:loaded").html(l()({
                                ref: "/tmpl/todo/calendar/modal_sync.twig"
                            }).render({
                                system_calendars: this.system_calendars,
                                widget_calendars: this._prepareWidgetsRender(this.widget_calendars),
                                lang: APP.lang
                            })).trigger("modal:centrify"),
                            this._initGoogleButton()
                        }
                        ), this))
                    }
                    ), this)
                })
            },
            _initGoogleButton: function() {
                var t = this._findElem("googleButtonContainer")[0];
                if (t) {
                    this.googleButtonRoot = c.createRoot(t);
                    var e = h.createElement(_.default, {
                        buttonContent: (0,
                        d.i18n)("Continue with Google")
                    });
                    this.googleButtonRoot.render(e)
                }
            },
            destroy: function() {
                this.googleButtonRoot && (this.googleButtonRoot.unmount(),
                this.googleButtonRoot = null),
                u.default.prototype.destroy.apply(this, arguments)
            },
            _getWidgetCalendars: function() {
                var t = APP.widgets.list;
                return a().reduce(a().keys(t), (function(e, i) {
                    var n = t[i]
                      , o = n.callbacks && n.callbacks.calendarSync;
                    return o && (e[i] = o()),
                    e
                }
                ), {})
            },
            _onSuccessWidgetLoading: function(t, e) {
                var i = this.$el.find('[data-calendar-id="'.concat(t, '"]'));
                e ? this._setEnabledStatus(i) : this._setDisabledStatus(i),
                i.removeClass("js-loading")
            },
            _onFailedWidgetLoading: function(t, e) {
                var i = this.$el.find('[data-calendar-id="'.concat(t, '"]'))
                  , n = i.find(this._selector("calendar_error"));
                i.addClass("js-error"),
                n.text(e || APP.lang.error)
            },
            _prepareWidgetsRender: function(t) {
                var e = this;
                return a().reduce(a().keys(t), (function(i, n) {
                    var o = t[n]
                      , s = APP.widgets.list[n].params
                      , r = a().isFunction(o.onSetup)
                      , l = !a().isBoolean(o.enabled)
                      , d = !l && o.enabled;
                    return l && o.enabled.then((function(t) {
                        e._onSuccessWidgetLoading(n, t)
                    }
                    ), (function(t) {
                        e._onFailedWidgetLoading(n, t)
                    }
                    )),
                    i[n] = a().extend({
                        is_setup_possible: r,
                        is_loading: l,
                        is_enabled: d,
                        icon: "".concat(s.path, "/images/logo_small.png?v=").concat(s.version)
                    }, a().pick(o, "name", "description")),
                    i
                }
                ), {})
            },
            _showErrorModal: function(t) {
                this._error_modal || (this._error_modal = this._addComponent(p.default, {
                    destroy: a().bind((function() {
                        delete this._error_modal
                    }
                    ), this)
                }).showError(t, !1))
            },
            _enableCalendar: function(t) {
                var e = t.data("calendar-id");
                switch (t.data("calendar-origin")) {
                case "system":
                    return window.open(this.system_calendars[e]._links.href),
                    o().Deferred().resolve().promise();
                case "widget":
                    return this.widget_calendars[e].onEnable();
                default:
                    throw new Error("Unknown calendar origin.")
                }
            },
            _disableCalendar: function(t) {
                var e = t.data("calendar-id");
                switch (t.data("calendar-origin")) {
                case "system":
                    return o().ajax({
                        url: "".concat(f, "disable/"),
                        type: "POST",
                        data: {
                            calendar_type: e,
                            current_auth_email: this.system_calendars[e].current_auth_email
                        },
                        dataType: "json"
                    });
                case "widget":
                    return this.widget_calendars[e].onDisable();
                default:
                    throw new Error("Unknown calendar origin.")
                }
            },
            _setEnabledStatus: function(t) {
                var e = t.attr("data-calendar-id")
                  , i = a().includes(m, e)
                  , n = t.find(this._selector("calendar_status"));
                i || n.html(APP.lang["Fully on"]),
                t.addClass("js-active")
            },
            _setDisabledStatus: function(t) {
                var e = t.attr("data-calendar-id")
                  , i = a().includes(m, e)
                  , n = t.find(this._selector("calendar_status"));
                i || n.html(APP.lang.enable),
                t.removeClass("js-active")
            },
            _onStateToggle: function(t) {
                var e = this
                  , i = o()(t.currentTarget).closest(this._selector("calendar_item"));
                i.hasClass("js-active") ? this._disableCalendar(i).then((function() {
                    e._setDisabledStatus(i)
                }
                ), (function(t) {
                    e._showErrorModal(t)
                }
                )) : this._enableCalendar(i).then((function() {
                    e._setEnabledStatus(i)
                }
                ), (function(t) {
                    e._showErrorModal(t)
                }
                ))
            },
            _onCalendarWidgetSetup: function(t) {
                var e = o()(t.currentTarget).closest(this._selector("calendar_item")).data("calendar-id");
                this.widget_calendars[e].onSetup()
            }
        });
        var v = "../build/transpiled/components/base/todo_sync";
        window.define(v, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([v])
    }
    ,
    403447: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            FixedHeader: () => h
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(460159)
          , a = i.n(s)
          , r = i(521466)
          , l = i(661533);
        function d(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function c(t, e, i) {
            return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var n = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
                        ;
                    return t
                }(t, e);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get ? o.get.call(i || t) : o.value
                }
            }
            ,
            c(t, e, i || t)
        }
        function u(t) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            u(t)
        }
        function p(t, e) {
            return p = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            p(t, e)
        }
        function _(t) {
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
                var i, n = u(t);
                if (e) {
                    var o = u(this).constructor;
                    i = Reflect.construct(n, arguments, o)
                } else
                    i = n.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((i = e) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var i
                }(this, i)
            }
        }
        var h = function(t) {
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
                e && p(t, e)
            }(s, t);
            var e, i, n = _(s);
            function s() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                n.apply(this, arguments)
            }
            return e = s,
            i = [{
                key: "_classes",
                value: function() {
                    return {
                        hidden_header: "hs-fixed-header_hidden",
                        header_items_wrapper: "hs-fixed-header__items-wrapper",
                        header_stats_no_transition: "hs-fixed-header__stats-no-transition",
                        header_stats_hidden: "hs-fixed-header__stats-hidden"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return t = {},
                    i = "_onHeaderClick",
                    (e = "click ".concat(this._selector("header_items_wrapper")))in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i,
                    t;
                    var t, e, i
                }
            }, {
                key: "initialize",
                value: function(t) {
                    c(u(s.prototype), "initialize", this).apply(this, arguments),
                    this.options = t || {},
                    this._cache = {
                        items_container_offset_top: 0,
                        items_container_offset_left: 0,
                        fixed_header_height: 0,
                        original_header_height: 0
                    },
                    this._is_shown = !1,
                    this._is_preloading = !0,
                    this.render()
                }
            }, {
                key: "destroy",
                value: function() {
                    c(u(s.prototype), "destroy", this).call(this, !0),
                    o().isFunction(this.options.onDestroy) && this.options.onDestroy()
                }
            }, {
                key: "_template",
                get: function() {
                    return "/tmpl/common/hs/fixed_header.twig"
                }
            }, {
                key: "render",
                get: function() {
                    return this._is_preloading = !0,
                    a()._preload([this._template], "_render")
                }
            }, {
                key: "_render",
                value: function() {
                    this._is_preloading = !1;
                    var t = l(a()({
                        ref: this._template
                    }).render({
                        entity: this.options.entity,
                        is_shown: this._is_shown
                    })).appendTo(this.options.append_to || "body");
                    this.setElement(t);
                    var e = this.options.$items_container.offset() || {};
                    this._cache.items_container_offset_left = (e.left || 0) + this.options.pos(),
                    this._cache.items_container_offset_top = e.top || 0,
                    this.$el.css({
                        top: this._cache.items_container_offset_top
                    }),
                    this.rerenderItems(),
                    this._updateWidth()
                }
            }, {
                key: "isNeedHide",
                value: function(t) {
                    var e = this.options.visible_items_amount;
                    return !o().isUndefined(e) && t > e
                }
            }, {
                key: "rerenderItems",
                value: function() {
                    var t = this
                      , e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).only_cache_update
                      , i = void 0 !== e && e
                      , n = this.options.$items_container.find(this.options.head_cell_selector)
                      , o = 0;
                    !1 === i && this._elem("header_items_wrapper").empty(),
                    this._cache.original_header_height = 0,
                    n.each((function(e, n) {
                        var s = l(n)
                          , a = l();
                        !1 === i && ((a = s.clone()).removeAttr("data-id").removeAttr("id").find("[id],[data-id]").removeAttr("data-id").removeAttr("id"),
                        a.find(t.options.head_cell_info_selector).remove()),
                        s.is(":hidden") ? a.addClass("hidden") : (o++,
                        t.isNeedHide(o) ? a.addClass("hidden") : t._cache.original_header_height = Math.ceil(Math.max(t._cache.original_header_height, s.get(0).getBoundingClientRect().top + t._$window.scrollTop()))),
                        !1 === i && t._elem("header_items_wrapper").append(a)
                    }
                    )),
                    this._cache.fixed_header_height = this.$el.height(),
                    this._toggleShow()
                }
            }, {
                key: "_getScrollParams",
                value: function() {
                    var t = this._$window.scrollTop();
                    return {
                        window_scroll_top: t,
                        is_scrolled_enough_to_show: t > 0 && this._cache.original_header_height < t + this.options.scroll_offset
                    }
                }
            }, {
                key: "_showFixedHeader",
                value: function() {
                    var t = this;
                    if (!0 !== this._is_shown) {
                        if (this._is_shown = !0,
                        this.options.head_cell_info_selector) {
                            var e = this.options.$items_container.find(this.options.head_cell_info_selector).addClass([this._class("header_stats_no_transition"), this._class("header_stats_hidden")].join(" "));
                            setTimeout((function() {
                                e.removeClass(t._class("header_stats_no_transition"))
                            }
                            ))
                        }
                        this._removeClass("hidden_header"),
                        this._updateLeftPosition()
                    }
                }
            }, {
                key: "_hideFixedHeader",
                value: function() {
                    !1 !== this._is_shown && (this._is_shown = !1,
                    this.options.head_cell_info_selector && this.options.$items_container.find(this.options.head_cell_info_selector).removeClass([this._class("header_stats_no_transition"), this._class("header_stats_hidden")].join(" ")),
                    this._addClass("hidden_header"))
                }
            }, {
                key: "_onHeaderClick",
                value: function() {
                    this._$window.scrollTop(0)
                }
            }, {
                key: "_toggleShow",
                value: function() {
                    this._getScrollParams().is_scrolled_enough_to_show ? this._showFixedHeader() : this._hideFixedHeader()
                }
            }, {
                key: "_updateLeftPosition",
                value: function() {
                    this.$el.css({
                        left: this._cache.items_container_offset_left - this.options.pos()
                    })
                }
            }, {
                key: "_updateWidth",
                value: function() {
                    this.$el.width(this.options.$items_container.width())
                }
            }, {
                key: "getOffsetBelow",
                value: function() {
                    return this.$el.offset().top - this._cache.items_container_offset_top + this._cache.fixed_header_height
                }
            }, {
                key: "onWindowScroll",
                value: function() {
                    this._is_preloading || this._toggleShow()
                }
            }, {
                key: "onHsScroll",
                value: function() {
                    this._is_preloading || this._updateLeftPosition()
                }
            }, {
                key: "onScreenResize",
                value: function() {
                    this._is_preloading || (this.rerenderItems({
                        only_cache_update: !0
                    }),
                    this._updateWidth())
                }
            }],
            i && d(e.prototype, i),
            s
        }(r.default)
          , f = "../build/transpiled/components/hs/fixed_header";
        window.define(f, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([f])
    }
    ,
    891411: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            ScrollMap: () => f
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(521466)
          , a = i(460159)
          , r = i.n(a)
          , l = i(661533);
        function d(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function c(t, e, i) {
            return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var n = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
                        ;
                    return t
                }(t, e);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get ? o.get.call(i || t) : o.value
                }
            }
            ,
            c(t, e, i || t)
        }
        function u(t) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            u(t)
        }
        function p(t, e) {
            return p = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            p(t, e)
        }
        function _(t) {
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
                var i, n = u(t);
                if (e) {
                    var o = u(this).constructor;
                    i = Reflect.construct(n, arguments, o)
                } else
                    i = n.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((i = e) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var i
                }(this, i)
            }
        }
        function h(t) {
            return "".concat(100 * Number.parseFloat(t).toFixed(2), "%")
        }
        var f = function(t) {
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
                e && p(t, e)
            }(s, t);
            var e, i, n = _(s);
            function s() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                n.apply(this, arguments)
            }
            return e = s,
            i = [{
                key: "_selectors",
                value: function() {
                    return {
                        screen_position: ".js-hs-scroll-map-screen-position",
                        item_by_index: ".hs-scroll-map__item:nth(%s)"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        hidden: "hidden",
                        active: "hs-scroll-map_active",
                        loading: "hs-scroll-map_loading",
                        item: "hs-scroll-map__item",
                        item_loading: "hs-scroll-map__item_loading"
                    }
                }
            }, {
                key: "initialize",
                value: function(t) {
                    c(u(s.prototype), "initialize", this).apply(this, arguments),
                    this.options = t || {}
                }
            }, {
                key: "destroy",
                value: function() {
                    this._elem("screen_position").draggable("destroy"),
                    c(u(s.prototype), "destroy", this).call(this, !0),
                    o().isFunction(this.options.onDestroy) && this.options.onDestroy()
                }
            }, {
                key: "_template",
                get: function() {
                    return "/tmpl/common/hs/scroll_map.twig"
                }
            }, {
                key: "render",
                get: function() {
                    var t;
                    return this._items_number = (t = this.options.$items_container,
                    o().reduce(t.children(), (function(t, e) {
                        return (i = e).offsetWidth > 0 && i.offsetHeight > 0 ? t + 1 : t;
                        var i
                    }
                    ), 0)),
                    this._items_number < 4 ? (this.destroy(),
                    o().noop) : (this._is_preloading = !0,
                    r()._preload([this._template], "_render"))
                }
            }, {
                key: "_render",
                value: function() {
                    this._is_preloading = !1,
                    this._debounced_disable_function = {};
                    var t = l(r()({
                        ref: this._template
                    }).render({
                        items_number: this._items_number
                    })).appendTo("body");
                    this.setElement(t),
                    this._initDraggable(),
                    this.move(null),
                    this._cached_sizes = {
                        width: this.$el.width(),
                        height: this.$el.height()
                    },
                    this.onScreenWidthUpdate(),
                    this.onScreenPositionUpdate()
                }
            }, {
                key: "_initDraggable",
                value: function() {
                    var t = this
                      , e = null
                      , i = 0;
                    this._elem("screen_position").draggable({
                        axis: "x",
                        containment: this.$el,
                        addClasses: !1,
                        start: function() {
                            t._is_dragging = !0,
                            t._elem("screen_position").css({
                                cursor: "grabbing"
                            })
                        },
                        drag: o().throttle((function(n, o) {
                            var s = o.position.left;
                            if (e !== s) {
                                i || (i = t._elem("screen_position").parent().width()),
                                e = s;
                                var a = s / i;
                                t.options.rleft(a)
                            }
                        }
                        ), 20),
                        stop: function() {
                            t._is_dragging = !1,
                            t._elem("screen_position").css({
                                cursor: ""
                            })
                        }
                    })
                }
            }, {
                key: "_temporaryActivate",
                value: function() {
                    var t = this;
                    this._addClass("active"),
                    this._debounced_disable_function.cancel && this._debounced_disable_function.cancel(),
                    this._debounced_disable_function = o().debounce((function() {
                        t.$el.is(":hover") ? t._temporaryActivate() : t._removeClass("active")
                    }
                    ), 650),
                    this._debounced_disable_function()
                }
            }, {
                key: "_updateCachedOffset",
                value: function() {
                    this._cached_offset = this.$el.position()
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    this._is_preloading || t.clientX < this._cached_offset.left - 50 || t.clientY < this._cached_offset.top - 50 || t.clientX > this._cached_offset.left + this._cached_sizes.width + 50 || t.clientY > this._cached_offset.top + this._cached_sizes.height + 50 || this._temporaryActivate()
                }
            }, {
                key: "onWindowResize",
                value: function() {
                    this._is_preloading || this._updateCachedOffset()
                }
            }, {
                key: "onScreenPositionUpdate",
                value: function() {
                    this._is_preloading || (this._toggleClass("hidden", !this._is_shown),
                    this._is_shown && (this._temporaryActivate(),
                    this._is_dragging || this._elem("screen_position").css({
                        left: h(this.options.rleft())
                    })))
                }
            }, {
                key: "onScreenWidthUpdate",
                value: function() {
                    if (!this._is_preloading) {
                        var t = this.options.rscreen();
                        this._is_shown = t < 1,
                        this._is_shown && this._elem("screen_position").css({
                            width: h(t)
                        })
                    }
                }
            }, {
                key: "move",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (o().isObject(t)) {
                        if (t.top && this.$el.css("top", t.top),
                        t.right) {
                            var e = t.right ? "calc(".concat(t.right, "px + var(--aside-width))") : "var(--aside-width)";
                            this.$el.css("right", e)
                        }
                        t.bottom && this.$el.css("bottom", t.bottom),
                        t.left && this.$el.css("left", t.left),
                        this._updateCachedOffset()
                    } else
                        this.move(o().extend({
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        }, this.options.default_position))
                }
            }, {
                key: "setLoading",
                value: function(t, e) {
                    -1 === t ? (this._toggleClass("item_loading", "item", e),
                    this._toggleClass("loading", e)) : (this._elem("item_by_index", t).toggleClass(this._class("item_loading"), e),
                    e && !this._hasClass("loading") ? this._addClass("loading") : e || this._findElem("item_loading").length || this._removeClass("loading"))
                }
            }],
            i && d(e.prototype, i),
            s
        }(s.default)
          , m = "../build/transpiled/components/hs/scroll_map";
        window.define(m, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([m])
    }
    ,
    803110: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = i(55188)
          , o = i.n(n);
        function s(t, e, i, n, o, s, a) {
            try {
                var r = t[s](a)
                  , l = r.value
            } catch (t) {
                return void i(t)
            }
            r.done ? e(l) : Promise.resolve(l).then(n, o)
        }
        const a = {
            events: {
                "click .js-list-export": "onExportClick"
            },
            onExportClick: function(t) {
                return (e = function() {
                    return function(t, e) {
                        var i, n, o, s, a = {
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
                            next: r(0),
                            throw: r(1),
                            return: r(2)
                        },
                        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        s;
                        function r(s) {
                            return function(r) {
                                return function(s) {
                                    if (i)
                                        throw new TypeError("Generator is already executing.");
                                    for (; a; )
                                        try {
                                            if (i = 1,
                                            n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, s[1])).done)
                                                return o;
                                            switch (n = 0,
                                            o && (s = [2 & s[0], o.value]),
                                            s[0]) {
                                            case 0:
                                            case 1:
                                                o = s;
                                                break;
                                            case 4:
                                                return a.label++,
                                                {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                n = s[1],
                                                s = [0];
                                                continue;
                                            case 7:
                                                s = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                    a.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && a.label < o[1]) {
                                                    a.label = o[1],
                                                    o = s;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2],
                                                    a.ops.push(s);
                                                    break
                                                }
                                                o[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            s = e.call(t, a)
                                        } catch (t) {
                                            s = [6, t],
                                            n = 0
                                        } finally {
                                            i = o = 0
                                        }
                                    if (5 & s[0])
                                        throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }([s, r])
                            }
                        }
                    }(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return t.preventDefault(),
                            i.e(24951).then(i.bind(i, 724951)),
                            o().contains(["todo"], APP.getBaseEntity()) ? [4, i.e(32943).then(i.bind(i, 332943))] : [3, 2];
                        case 1:
                            return new (0,
                            e.sent().default)({
                                id: "export"
                            }),
                            [3, 4];
                        case 2:
                            return [4, Promise.all([i.e(95882), i.e(5353)]).then(i.bind(i, 5353))];
                        case 3:
                            new (0,
                            e.sent().default)({}),
                            e.label = 4;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ,
                function() {
                    var t = this
                      , i = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, i);
                        function r(t) {
                            s(a, n, o, r, l, "next", t)
                        }
                        function l(t) {
                            s(a, n, o, r, l, "throw", t)
                        }
                        r(void 0)
                    }
                    ))
                }
                )();
                var e
            }
        };
        var r = "../build/transpiled/components/lists/actions/export/mixin";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    942532: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => u
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(460159)
          , a = i.n(s)
          , r = i(55188)
          , l = i.n(r)
          , d = i(889378)
          , c = function(t) {
            var e = this;
            this.options = o().extend({}, t),
            this.modal = new d.default({
                class_name: "modal-list modal-todo-result",
                init: a()._preload(["/tmpl/common/modal/todo_result.twig"], (function(t) {
                    e.$modal_body = t,
                    t.html(a()({
                        ref: "/tmpl/common/modal/todo_result.twig"
                    }).render()).trigger("modal:loaded").trigger("modal:centrify"),
                    e.init()
                }
                )),
                destroy: function() {
                    e.$modal_body && e.$modal_body.off(),
                    e.save_xhr && void 0 !== e.save_xhr.status && e.save_xhr.abort(),
                    "function" == typeof e.options.cancel && !0 !== e.has_result && e.options.cancel()
                }
            })
        };
        c.prototype.init = function() {
            var t = this
              , e = this.$modal_body.find("#modal_todo_result");
            e.trigger("controls:textarea:autosize"),
            APP.is_touch_device || e.focus(),
            this.$modal_body.on(APP.click_event, ".js-modal-accept", (function() {
                t.save()
            }
            )).on(APP.click_event, ".button-cancel", (function() {
                "function" == typeof t.options.skip && t.options.skip()
            }
            )).on("focus keyup", "#modal_todo_result", (function() {
                t.unvalidate()
            }
            ))
        }
        ,
        c.prototype.unvalidate = function() {
            this.$modal_body.find("#modal_todo_result").hasClass("validate-has-error") && this.$modal_body.find("#modal_todo_result").removeClass("validate-has-error")
        }
        ,
        c.prototype.validate = function() {
            return o().trim(this.$modal_body.find("#modal_todo_result").val())
        }
        ,
        c.prototype.save = function() {
            var t = this
              , e = this.validate();
            e ? this.save_xhr = o().ajax({
                url: "/private/notes/edit2.php",
                data: {
                    ELEMENT_ID: this.options.id,
                    ACTION: "ADD_NOTE",
                    NOTE_TYPE: 13,
                    BODY: e,
                    ELEMENT_TYPE: 4
                },
                type: "POST",
                dataType: "json",
                success: function(e) {
                    "ok" === e.status ? (t.has_result = !0,
                    (l().isUndefined(t.options.noreload) || !1 === t.options.noreload) && ("todo" === APP.data.current_entity ? o()(document).trigger("list:reload") : o()(document).trigger("page:reload", ["line"])),
                    t.modal.showSuccess(e.message)) : t.modal.showError()
                },
                error: function() {
                    t.modal.showError()
                }
            }) : this.$modal_body.find("#modal_todo_result").focus().addClass("validate-has-error")
        }
        ;
        const u = c;
        var p = "../build/transpiled/components/lists/actions/todo_result";
        window.define(p, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([p])
    }
    ,
    930092: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(312309);
        const a = {
            events: {
                "click .js-list-caption-link": "onTopNavigationButtonClick"
            },
            onTopNavigationButtonClick: function(t) {
                var e = (0,
                s.getQueryString)();
                return o()(t.currentTarget).addClass("list-top-nav__icon-button_active").siblings(".js-list-caption-link").removeClass("list-top-nav__icon-button_active"),
                APP.router.navigate(t.currentTarget.getAttribute("href") + (e ? "?".concat(e) : ""), {
                    trigger: !0,
                    no_loading: !0
                }),
                !1
            }
        };
        var r = "../build/transpiled/components/lists/mixins/navigation";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    118412: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => _
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(460159)
          , a = i.n(s)
          , r = i(661533)
          , l = i.n(r)
          , d = i(500034)
          , c = i(521466)
          , u = ["settings", "dev"];
        (0,
        d.isFeatureAvailable)("global_marketplace") && u.push("widgetsSettings");
        var p = c.default.extend({
            template: "/tmpl/settings/menu_item.twig",
            max_iteration_counter: 5,
            is_checked: !1,
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                c.default.prototype.initialize.apply(this, e),
                this.observer = new MutationObserver(o().bind(this.onMutation, this)),
                a()._preload([this.template]),
                this.observer.observe(document.body, {
                    attributeOldValue: !0,
                    characterData: !0,
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                })
            },
            destroy: function() {
                this.observer.disconnect()
            },
            onMutation: function(t) {
                var e = this;
                p.isMutationAvailable() && t.forEach((function(t) {
                    var i = o().find(t.removedNodes, (function(t) {
                        return "pay" === t.id || "/settings/pay/" === t.pathname
                    }
                    ));
                    e.is_checked && (i || "pay" === t.target.id || "/settings/pay/" === t.target.pathname || "pay" === t.oldValue && "id" === t.attributeName || "/settings/pay/" === t.oldValue && "href" === t.attributeName) && (o().contains(["href", "onclick", "id", "class", "style"], t.attributeName) || i) ? (e.is_checked = !1,
                    e.appendDefaultLink()) : e.is_checked || (e.is_checked = !0)
                }
                ))
            },
            appendDefaultLink: function() {
                var t = a()({
                    ref: this.template
                }).render({
                    item: {
                        label: APP.lang.bill_header,
                        link: "/settings/pay/",
                        selected: l()("#pay").hasClass("aside__list-item_selected")
                    },
                    item_name: "pay"
                });
                l()("#pay").remove(),
                l()("#widgets").length ? l()("#widgets").after(t) : l()("#account").after(t),
                --this.max_iteration_counter || this.observer.disconnect()
            }
        });
        p.isMutationAvailable = function() {
            var t = APP.getBaseEntity();
            return o().contains(u, t)
        }
        ;
        const _ = p;
        var h = "../build/transpiled/components/pay/billing_link_observer";
        window.define(h, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([h])
    }
    ,
    896406: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => w
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(267651)
          , c = i.n(d)
          , u = i(312309)
          , p = i(880774)
          , _ = i(678640)
          , h = i(811707)
          , f = i(643095)
          , m = i(521466)
          , g = i(118412)
          , v = i(10026)
          , y = i(837911)
          , b = i(598701)
          , k = {};
        o().ajaxSetup({
            beforeSend: function(t) {
                t.done((function(t) {
                    a().isObject(t) && (t.response && (t.response.lang && APP.addLang(t.response.lang),
                    t.response.user_rights && APP.constant("user_rights", a().extend(APP.constant("user_rights"), t.response.user_rights)),
                    (0,
                    _.hasKeys)(t, ["response", "redirect"]) && a().isString(t.response.redirect) && APP.router.navigate(t.response.redirect, {
                        trigger: !0,
                        replace: !0
                    })),
                    t.js_params && a().isObject(t.js_params.constants) && a().each(t.js_params.constants, (function(t, e) {
                        APP.constant(e, t)
                    }
                    )))
                }
                ))
            }
        }),
        k._construct = function(t) {
            this._destroyed || (this.setElement(document.querySelector(this._getContainerSelector())),
            this.el.className = this.className || "",
            this.$el.on("click".concat(this.ns), ".js-filter-preset-link", a().bind(this._presetLinkClick, this)).on("click".concat(this.ns), ".js-list-top-nav__text-button_submenu", (function(t) {
                c().publish("hover_menu:show", o()(t.currentTarget).data("entity"))
            }
            )),
            this._$document.on("page:overlay:show".concat(this.ns), a().bind(this._showOverlay, this)).on("page:overlay:hide".concat(this.ns), a().bind(this._hideOverlay, this)),
            this.construct(t),
            this._initComponents.apply(this, arguments),
            APP.data.is_card || this._$document.triggerHandler("widgets:load"),
            t.first_load ? o()(a().bind((function() {
                this.page_constructed = !0,
                this._$document.trigger("page:construct")
            }
            ), this)) : (this.page_constructed = !0,
            this._$document.trigger("page:construct").triggerHandler("page:changed")),
            b.handleEndComponentLoading(b.components.page),
            APP.setTitle(this._title()))
        }
        ,
        k._request = function(t) {
            var e, i, n = this.template;
            null !== (i = (e = t).isOverlayEnabled) && void 0 !== i || (e.isOverlayEnabled = !0),
            t.isOverlayEnabled && this._showOverlay(),
            a().isFunction(n) && (n = n.call(this)),
            Promise.all([k._xhr.call(this, t.construct_options), l()._preload(k._getTemplates.call(this))()]).then(a().bind((function(e) {
                var i = this;
                e[0] && e[0].redirect || !0 === this._destroyed ? this.destroy() : (t.isOverlayEnabled && this._hideOverlay(),
                e[0] && e[0].template && (n = "/tmpl/".concat(e[0].template.name)),
                this._renderPage({
                    response: e[0],
                    container: this._getContainerSelector(),
                    template: n,
                    options: (t || {}).construct_options || {}
                }),
                v.default.restorePosition(),
                o()((function() {
                    k._construct.call(i, a().extend(t.construct_options, {
                        response: e[0]
                    }))
                }
                )))
            }
            ), this)).catch(a().bind((function(t) {
                a().isUndefined(t) || this._hideOverlay(),
                b.handleEndComponentLoading(b.components.page)
            }
            ), this))
        }
        ,
        k._xhr = function(t) {
            var e;
            return new Promise(a().bind((function(i, n) {
                k._curr_xhr && (a().result(k._curr_xhr, "abort", a().noop),
                a().result(k._curr_xhr, "reject", a().noop)),
                k._curr_xhr = this._makeRequest(t).always(a().bind((function() {
                    var t = document.getElementById("page_holder");
                    (t.children.length || APP.is_card) && (document.getElementById("card_holder").style.display = "none",
                    t.style.display = ""),
                    this._$document.triggerHandler("page:change:stop"),
                    k._curr_xhr = null,
                    setTimeout((function() {
                        APP.page_xhr = null
                    }
                    ))
                }
                ), this)).done(a().bind((function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (e = a().isEmpty(t) || t.response ? t.response : t) && e.lang && APP.addLang(e.lang),
                    e && e.user_rights && APP.constant("user_rights", a().extend(APP.constant("user_rights") || {}, e.user_rights)),
                    this._$document.trigger("page:changed", [{
                        querystring: (0,
                        u.getQueryString)()
                    }]),
                    i(e)
                }
                ), this)).fail(a().bind((function(t, e) {
                    var i = (0,
                    p.i18n)("Something went wrong");
                    if ("error" === e) {
                        this._$document.triggerHandler("page:changed");
                        var o = {
                            el: this._getContainerSelector(),
                            title: i,
                            text: (0,
                            p.i18n)("page_404_mail_text")
                        };
                        this._addComponent(y.default, {
                            jqXHR: t,
                            space_options: o
                        }),
                        this._title(i)
                    }
                    "abort" === e && this.destroy(),
                    n("error" === e ? t.responseJSON || {} : void 0)
                }
                ), this)),
                APP.page_xhr = k._curr_xhr
            }
            ), this))
        }
        ,
        k._getTemplates = function() {
            var t = this.template;
            return t && a().isFunction(t) && (t = t.call(this)),
            a().isArray(t) || (t = [t]),
            a().isArray(this.preload) && (t = a().unique(t.concat(this.preload))),
            a().compact(t)
        }
        ,
        k._renderPage = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.response || {}
              , i = t.template
              , n = t.container || "#page_holder";
            if (i) {
                var o = l()({
                    ref: i
                }).render("/tmpl/common/404page.twig" === i ? e : this._updateResponseData(e));
                (0,
                h.replaceHtml)(document.querySelector(n), o)
            }
        }
        ;
        const w = m.default.extend({
            endpoint: null,
            template: null,
            preload: [],
            _destroyed: !1,
            construct: a().noop,
            destruct: a().noop,
            initialize: function(t) {
                b.trackStartComponentLoading(b.components.page),
                (0,
                f.startBrowserTracingSpan)({
                    entity: APP.data.current_entity
                }),
                m.default.prototype.initialize.call(this, a().extend(t, {
                    init_components: !1
                })),
                g.default.isMutationAvailable() && this._addComponent(g.default),
                this.setNS(),
                t = a().extend(t || {}, {
                    first_load: APP.first_load
                }),
                this.page_constructed = !1;
                var e = document.getElementById("template_params");
                APP.first_load && !e ? l()._preload(k._getTemplates.call(this), a().bind((function() {
                    o()(a().bind(k._construct, this, t))
                }
                ), this))() : k._request.call(this, {
                    construct_options: t,
                    isOverlayEnabled: !e
                })
            },
            destroy: function(t) {
                this._destroyed = !0,
                this._$document.off("page:overlay:show".concat(this.ns)).off("page:overlay:hide".concat(this.ns)).off("page:reload".concat(this.ns)).off("list:reload".concat(this.ns)),
                !1 !== t && this.destruct(),
                m.default.prototype.destroy.apply(this, arguments)
            },
            _request: k._request,
            _updateResponseData: function(t) {
                return t
            },
            _makeRequest: function(t, e) {
                var i = document.getElementById("template_params");
                if (i) {
                    var n = i.textContent;
                    i.remove();
                    try {
                        var s = JSON.parse(n);
                        return o().Deferred().resolve(s)
                    } catch (t) {
                        return o().Deferred().reject()
                    }
                }
                return o().ajax(a().extend({
                    url: this._getEndpoint(t.route_args),
                    data: this._getEndpointData(t.route_args),
                    type: this._getEndpointType(t.route_args),
                    dataType: "json"
                }, e || {}))
            },
            _getEndpoint: function() {
                var t = (0,
                u.getQueryString)();
                return this.endpoint + (t ? "?".concat(t) : "")
            },
            _getEndpointData: function() {
                return {}
            },
            _getEndpointType: function() {
                return "POST"
            },
            _getContainerSelector: function() {
                return "#page_holder"
            },
            _renderPage: function(t) {
                k._renderPage.call(this, t)
            },
            _presetLinkClick: function(t) {
                var e = o()(t.currentTarget);
                e.parent().find(".filter__list__item-selected,.aside__list-item_selected").removeClass("filter__list__item-selected aside__list-item_selected"),
                e.addClass("filter__list__item-selected aside__list-item_selected")
            },
            _title: function() {
                var t = "".concat(APP.getBaseEntity(), "_head_title");
                return a().isUndefined(APP.lang[t]) ? null : (0,
                p.i18n)(t)
            },
            _showOverlay: function() {
                var t = this._$window.scrollTop();
                this._$body.get(0).classList.add("page-loading"),
                this._$window.on(["mousewheel.".concat(this.ns, ".disable_scroll"), "DOMMouseScroll.".concat(this.ns, ".disable_scroll"), "touchmove.".concat(this.ns, ".disable_scroll")].join(" "), (function(t) {
                    t.preventDefault()
                }
                )),
                this._$window.on("scroll.".concat(this.ns, ".disable_scroll"), (function(e) {
                    e.currentTarget.scrollTop = "".concat(t, "px")
                }
                ))
            },
            _hideOverlay: function() {
                this._$body.get(0).classList.remove("page-loading"),
                this._$window.off(".disable_scroll")
            },
            _getInstance: function() {
                return this
            }
        });
        var E = "../build/transpiled/core/page";
        window.define(E, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([E])
    }
    ,
    590385: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            list: () => m,
            subscribe: () => g,
            unsubscribe: () => v
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(661533)
          , a = i.n(s)
          , r = i(987081)
          , l = i(128508)
          , d = i(814193)
          , c = {
            base: "/ajax/v1/subscriptions",
            list: "/ajax/v3/subscriptions"
        };
        function u(t, e) {
            var i = {
                request: {
                    subscriptions: {}
                }
            };
            return i.request.subscriptions[e] = t,
            i
        }
        function p(t) {
            var e = new d.default;
            return o().each(t, (function(t) {
                e.add(t)
            }
            )),
            e
        }
        function _(t) {
            return c[t] ? c[t] : "".concat(c.base, "/").concat(t)
        }
        function h(t) {
            return function(e) {
                return e ? "list" === t ? e._embedded && e._embedded.subscriptions || {} : e.response.subscriptions[t] : null
            }
        }
        function f(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET";
            return function() {
                return 0 === t.entity_id ? Promise.resolve() : a().ajaxPromisify({
                    url: e,
                    type: i,
                    data: t,
                    dataType: "json"
                })
            }
        }
        function m(t, e) {
            var i = {
                entity_type: t,
                entity_id: e
            };
            return r.from(f(i, _("list"))()).pipe(l.map(h("list")), l.map(p))
        }
        function g(t) {
            return r.from(f(u(t, "subscribe"), _("subscribe"), "POST")()).pipe(l.map(h("subscribe")))
        }
        function v(t) {
            return r.from(f(u(t, "unsubscribe"), _("unsubscribe"), "POST")()).pipe(l.map(h("unsubscribe")))
        }
        var y = "../build/transpiled/interface/card/controls/subscribers/network/api";
        window.define(y, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([y])
    }
    ,
    814193: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = i(871082)
          , o = i.n(n)
          , s = i(267643);
        const a = o().Collection.extend({
            model: s.default
        });
        var r = "../build/transpiled/interface/card/controls/subscribers/network/collection";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    267643: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => o
        });
        var n = i(871082);
        const o = i.n(n)().Model.extend({
            defaults: {
                user_id: 0,
                group_id: 0
            },
            initialize: function() {
                this.attributes.user_id = parseInt(this.attributes.user_id) || 0,
                this.attributes.group_id = parseInt(this.attributes.group_id) || 0,
                this.id = this._makeId()
            },
            _makeId: function() {
                return this.attributes.user_id > 0 ? this.attributes.user_id : "group_".concat(this.attributes.group_id)
            }
        });
        var s = "../build/transpiled/interface/card/controls/subscribers/network/model";
        window.define(s, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([s])
    }
    ,
    783446: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => h
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(987081)
          , a = i(128508)
          , r = i(579569)
          , l = i(814193)
          , d = i(267643)
          , c = i(590385)
          , u = i(661533)
          , p = {};
        function _(t, e) {
            var i = "".concat(t).concat(e);
            return p[i] ? p[i] : (this.hash = i,
            this.entity_type = parseInt(t),
            this.entity_id = parseInt(e),
            this.items = new l.default,
            this.updates$ = new s.Subject,
            this._changes = {},
            this.reset$ = new s.BehaviorSubject(!0),
            this.list$ = new s.ReplaySubject(1),
            this.loading$ = new s.BehaviorSubject(!1),
            this.sync_state$ = new s.BehaviorSubject(!0),
            p[i] = this,
            this.init(),
            this)
        }
        o().extend(_.prototype, {
            init: function() {
                var t = s.merge(this.reset$, s.fromEvent(u(document), "users:list:changed")).pipe(a.switchMap(o().bind(this.fetch, this)), a.combineLatestWith((0,
                r.fetch)(), this.onlyActive), a.map(this.resetItems, this))
                  , e = s.fromEvent(this.items, "add remove").pipe(a.switchMap(o().bind((function() {
                    return s.of(this.items)
                }
                ), this)));
                s.merge(e, t).pipe(a.map((function(t) {
                    return {
                        action: "reset",
                        items: t.toArray()
                    }
                }
                ))).subscribe(this.list$)
            },
            onlyActive: function(t, e) {
                var i = t.clone();
                return i.models = o().filter(i.models, (function(t) {
                    if (t.get("user_id") > 0) {
                        if (!e.managers[t.get("user_id")])
                            return !1
                    } else if (!e.groups["group_".concat(t.get("group_id"))])
                        return !1;
                    return !0
                }
                )),
                i
            },
            fetch: function() {
                return this.startLoading().pipe(a.flatMap(o().bind((function() {
                    return c.list(this.entity_type, this.entity_id)
                }
                ), this)), a.tap({
                    complete: o().bind(this.stopLoading, this)
                }))
            },
            save: function() {
                return this.startLoading().pipe(a.switchMap(o().bind(this.makeSaveObserverChain, this)), a.tap({
                    next: o().bind((function(t) {
                        t.add && t.add.success && (t.add.success.user_id && t.add.success.user_id.length > 0 && o().each(t.add.success.user_id, (function(t) {
                            var e = new d.default({
                                user_id: t
                            });
                            this._changes = o().omit(this._changes, e.id),
                            this.items.add(e)
                        }
                        ), this),
                        t.add.success.group_id && t.add.success.group_id.length > 0 && o().each(t.add.success.group_id, (function(t) {
                            var e = new d.default({
                                group_id: t
                            });
                            this._changes = o().omit(this._changes, e.id),
                            this.items.add(e)
                        }
                        ), this)),
                        t.remove && t.remove.success && (t.remove.success.user_id && t.remove.success.user_id.length > 0 && o().each(t.remove.success.user_id, (function(t) {
                            var e = new d.default({
                                user_id: t
                            });
                            this._changes = o().omit(this._changes, e.id),
                            this.items.remove(e)
                        }
                        ), this),
                        t.remove.success.group_id && t.remove.success.group_id.length > 0 && o().each(t.remove.success.group_id, (function(t) {
                            var e = new d.default({
                                group_id: t
                            });
                            this._changes = o().omit(this._changes, e.id),
                            this.items.remove(e)
                        }
                        ), this)),
                        this.stopLoading(),
                        this._changes = {},
                        this._updateState()
                    }
                    ), this)
                }))
            },
            count: function() {
                return this.items.length
            },
            makeSaveObserverChain: function() {
                var t, e = {
                    user_id: [],
                    group_id: []
                }, i = {
                    user_id: [],
                    group_id: []
                };
                return o().each(this._changes, (function(t) {
                    var n = t.model;
                    -1 === t.state ? n.get("user_id") > 0 ? i.user_id.push(n.get("user_id")) : i.group_id.push(n.get("group_id")) : 1 === t.state && (n.get("user_id") > 0 ? e.user_id.push(n.get("user_id")) : e.group_id.push(n.get("group_id")))
                }
                ), this),
                t = s.of({
                    remove: {},
                    add: {}
                }),
                (e.user_id.length || e.group_id.length) && (t = s.zip(t, c.subscribe(o().extend(e, {
                    entity_type: this.entity_type,
                    entity_id: this.entity_id,
                    event: "chat_message"
                }))).pipe(a.map((function(t) {
                    return t[0].add = t[1],
                    t[0]
                }
                )))),
                (i.user_id.length || i.group_id.length) && (t = s.zip(t, c.unsubscribe(o().extend(i, {
                    entity_type: this.entity_type,
                    entity_id: this.entity_id,
                    event: "chat_message"
                }))).pipe(a.map((function(t) {
                    return t[0].remove = t[1],
                    t[0]
                }
                )))),
                t
            },
            unsubscribe: function(t) {
                var e = this.items.get(t);
                return e && this._markRemoved(e),
                this
            },
            subscribe: function(t) {
                var e, i = t.toString().replace("group_", "");
                return e = i === t.toString() ? new d.default({
                    user_id: t
                }) : new d.default({
                    group_id: i
                }),
                this._markAdded(e),
                this
            },
            subscribeUser: function(t) {
                var e = new d.default({
                    user_id: t
                });
                this._markAdded(e)
            },
            subscribeGroup: function(t) {
                new d.default({
                    group_id: t
                })
            },
            unsubscribeUser: function(t) {
                var e = new d.default({
                    user_id: t
                });
                this._markRemoved(e)
            },
            unsubscribeGroup: function(t) {
                var e = new d.default({
                    group_id: t
                });
                this._markRemoved(e)
            },
            _markRemoved: function(t) {
                this._changes[t.id] || (this._changes[t.id] = {
                    state: 0,
                    model: t
                }),
                this._changes[t.id].state--,
                this._updateState()
            },
            _markAdded: function(t) {
                this._changes[t.id] || (this._changes[t.id] = {
                    state: 0,
                    model: t
                }),
                this._changes[t.id].state++,
                this._updateState()
            },
            _updateState: function() {
                var t = o().reduce(o().values(this._changes), (function(t, e) {
                    return t.state + e.state
                }
                ));
                this.sync_state$.next(0 === t)
            },
            resetItems: function(t) {
                return this._changes = {},
                this.sync_state$.next(!0),
                this.items.reset(t.toJSON(), {
                    silent: !0
                }),
                this.updates$.next({
                    action: "add",
                    items: t.toArray()
                }),
                t
            },
            startLoading: function() {
                return this.loading$.next(!0),
                s.of(!0)
            },
            stopLoading: function() {
                this.loading$.next(!1)
            },
            destroy: function() {
                p = o().omit(p, this.hash)
            }
        });
        const h = _;
        var f = "../build/transpiled/interface/card/controls/subscribers/network/service";
        window.define(f, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([f])
    }
    ,
    814748: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => c
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(460159)
          , a = i.n(s)
          , r = i(340958)
          , l = i(582147)
          , d = i(661533);
        i(818194);
        const c = r.default.extend({
            controlClassName: "card-task__type-wrapper",
            _selectors: function() {
                return {
                    text: "textarea",
                    type_name: 'input[name="task_type_name"]',
                    type: 'input[name="type"]:checked',
                    preview: ".card-task__type",
                    opened: ".card-task__type-opened",
                    scroller: ".card-task__types"
                }
            },
            _classes: function() {
                return {
                    right_position: "card-task__type-icon-picker_right-position"
                }
            },
            document_events: {
                "controls:hide:private": "_hide",
                "click .card-task__type-opened": "_stopPropagation",
                'change .card-task__types-item input[name="type"]': "_customTypeChange",
                'keydown .card-task__types-item input[name="task_type_name"]': "_onCustomTypeKeydown",
                toggleWidgetPanel: "_setPositions",
                "touchstart .card-task__types-item-label": "_checkTaskTypeCheckedOnClick",
                "mouseup .card-task__types-item-label": "_checkTaskTypeCheckedOnClick",
                "click .card-task__types-item-label_custom .task_type_select__icon": "_openIconPicker",
                "click .modal-body__inner__todo-types__item__iconpick__icon-wrap": "_onTypeIconChosen",
                "click .modal-body__inner__todo-types__item__iconpick__ok": "_hide"
            },
            events: {
                click: "_open",
                "task-comment:refresh": "_refresh",
                "task-comment:type-save": "_saveCustomType"
            },
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                r.default.prototype.initialize.apply(this, e),
                this._$opened_node = null,
                this._$window.on("resize".concat(this.ns), o().bind(this._setPositions, this))
            },
            destroy: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._$opened_node && (this.$el.append(this._$opened_node),
                this._$opened_node = null),
                r.default.prototype.destroy.apply(this, e)
            },
            _onCustomTypeKeydown: function(t) {
                13 === t.keyCode && this._hide()
            },
            _customTypeChange: function(t) {
                var e = d(t.currentTarget);
                this._$opened_node && ("custom" === e.val() ? (this._$opened_node.find(this._selector("type_name")).show().focus(),
                this._openIconPicker()) : (this._$opened_node.find(this._selector("type_name")).val("").hide(),
                this._hide()))
            },
            _open: function(t) {
                var e, i;
                this._$opened_node || (t && t.stopPropagation && t.stopPropagation(),
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this._$opened_node = this._elem("opened"),
                this._toggleBodyOverlay(this._$opened_node, this._hide),
                e = this._$opened_node.find(this._selector("scroller")),
                (i = this._$opened_node.find(this._selector("type"))).length || (i = this._$opened_node.find('input[type="radio"]:first')),
                e.scrollTop(i.parent().position().top - e.height() / 2),
                this._setPositions())
            },
            _openIconPicker: function() {
                var t = this;
                this._$opened_node && !this._$icon_picker && (this._$icon_picker = d(a()({
                    ref: "/tmpl/common/modal/todo_type_icon_picker.twig"
                }).render({
                    color: this.$('[name="icon_color"]').val(),
                    class_name: "card-task__type-icon-picker"
                })),
                this._$opened_node.append(this._$icon_picker),
                this._$icon_picker.find(".modal-body__inner__todo-types__item__colorpick").colpick({
                    layout: "hex",
                    isTransparent: !1,
                    height: 152,
                    flat: !0,
                    color: this.$('[name="icon_color"]').val(),
                    onChange: function() {
                        var e = this.find(".colpick_hex_field input").val();
                        t._$icon_picker.find("svg").css("fill", "#".concat(e)),
                        t._$opened_node.find(".card-task__types-item-label_custom svg").css("fill", "#".concat(e)),
                        t._$opened_node.find('[name="icon_color"]').val(e)
                    }
                }),
                this._$icon_picker.offset().left < 0 && this._$icon_picker.addClass(this._class("right_position")))
            },
            _hide: function() {
                var t = this._hideIconPicker();
                return !1 !== t && (t = this._hideControl()),
                t
            },
            _hideIconPicker: function() {
                if (this._$opened_node)
                    return this._$opened_node.find(this._selector("type_name")).val() || "custom" !== this._$opened_node.find(this._selector("type")).val() ? void (this._$icon_picker && (this._$icon_picker.remove(),
                    this._$icon_picker = null)) : (this._shakeCustomTypeOnError(),
                    !1)
            },
            _hideControl: function() {
                var t, e, i, n = "";
                if (this._$opened_node) {
                    if (i = this._$opened_node.find(this._selector("type_name")).val(),
                    t = this._$opened_node.find(this._selector("type")).val(),
                    e = APP.constant("task_types")["key_".concat(t)] || {
                        icon_id: this._$opened_node.find('[name="icon_id"]').val(),
                        color: this._$opened_node.find('[name="icon_color"]').val()
                    },
                    !i && "custom" === t)
                        return this._shakeCustomTypeOnError(),
                        !1;
                    n = i || this._$opened_node.find(".card-task__types-item input:checked + .card-task__types-item-label").html(),
                    this.$(".card-task__type").html(a()({
                        ref: "/tmpl/common/tasks_type_name.twig"
                    }).render({
                        icon_class_name: "card-task__type-icon",
                        text_class_name: this.$(".card-task__type").data("class-name-text"),
                        type: parseInt(t),
                        type_name: n,
                        type_icon: e.icon_id,
                        type_color: e.color
                    })),
                    this._toggleBodyOverlay(!1),
                    this.$el.removeClass("opened"),
                    this._$opened_node.hide(),
                    this._$opened_node = null,
                    this.$el.find('input[type="hidden"], input:checked, '.concat(this._selector("type_name"))).trigger("change")
                }
            },
            _refresh: function() {
                this._open(),
                this._hide()
            },
            _shakeCustomTypeOnError: function() {
                if (this._$opened_node) {
                    var t = this._$opened_node.find('[name="task_type_name"]').closest(".card-task__types-item");
                    t.addClass("animated shake"),
                    o().delay(o().bind((function() {
                        t.removeClass("animated shake")
                    }
                    )), 400)
                }
            },
            _setPositions: function() {
                if (this._$opened_node) {
                    var t = this._elem("preview").get(0).getBoundingClientRect()
                      , e = this._$window.scrollTop();
                    this._$opened_node.css({
                        display: "",
                        top: t.top + e,
                        left: t.left,
                        zIndex: this._maxControlBodyZIndex
                    }).css(Modernizr.prefixed("transform"), ""),
                    this._$window.height() - this._$opened_node.get(0).getBoundingClientRect().bottom < 10 && this._$opened_node.css("top", t.bottom + e).css(Modernizr.prefixed("transform"), "translateY(calc(-100% + 21px))")
                }
            },
            _toggleBodyOverlay: function(t) {
                return r.default.prototype._toggleBodyOverlay.call(this, t, this._hide)
            },
            _stopPropagation: function(t) {
                t.stopPropagation()
            },
            _checkTaskTypeCheckedOnClick: function(t) {
                var e = t.currentTarget.parentNode.querySelector("input:checked");
                t.stopPropagation(),
                e && "custom" !== e.value && this._hide()
            },
            _onTypeIconChosen: function(t) {
                if (this._$opened_node) {
                    var e = d(t.currentTarget).find("svg").clone();
                    this._$opened_node.find(".card-task__types-item-label_custom svg").replaceWith(e),
                    this._$opened_node.find('[name="icon_id"]').val(e.attr("data-icon-id"))
                }
            },
            _saveCustomType: function() {
                var t, e = this._findElem("type_name").val(), i = this._findElem("type").val(), n = parseInt(this.$('[name="icon_id"]').val()), s = this.$('[name="icon_color"]').val(), a = function(t) {
                    this.$el.trigger("task-comment:type-saved", [t])
                };
                if (!e)
                    return "custom" === i && (this._shakeCustomTypeOnError(),
                    i = !1),
                    void a.call(this, i);
                (0,
                l.addCustomType)({
                    name: e,
                    icon_id: n,
                    icon_color: s
                }).done(o().bind((function(r) {
                    "OK" === r.status ? ((t = o().isEmpty(APP.constant("task_types")) ? {} : APP.constant("task_types"))["key_".concat(r.data.ID)] = {
                        id: r.data.ID,
                        option: o().escape(e),
                        icon_id: n,
                        color: s
                    },
                    APP.constant("task_types", t),
                    i = r.data.ID) : (this._shakeCustomTypeOnError(),
                    i = !1),
                    a.call(this, i)
                }
                ), this)).fail(o().bind(a, this, !1))
            }
        });
        var u = "../build/transpiled/interface/card/controls/task_type";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    378091: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => d
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(880774)
          , a = i(579569)
          , r = i(783446)
          , l = i(328731);
        const d = l.default.extend({
            _show_all: null,
            _classes: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return o().extend({}, l.default.prototype._classes.apply(this, e), {
                    title_text: "users-select__head-title-text"
                })
            },
            initialize: function(t) {
                o().extend(t, {
                    users_template: "/tmpl/users_select/wrapper/amojo.twig",
                    select_one_group: !0
                }),
                l.default.prototype.initialize.apply(this, arguments)
            },
            _getChatMembers: function() {
                var t = (0,
                a.get)(!0)
                  , e = [];
                if (o().isUndefined(this.options.entity))
                    return !1;
                var i = new r.default(this.options.entity.element_type,this.options.entity.id);
                return o().each(i.items.models, (function(i) {
                    0 === i.attributes.user_id ? o().each(t, (function(t) {
                        t.group === "group_".concat(i.attributes.group_id) && t.amojo_id && e.push(t.amojo_id)
                    }
                    )) : t[i.id] && t[i.id].amojo_id && e.push(t[i.id].amojo_id)
                }
                )),
                e || {}
            },
            getRenderUsersAndGroups: function(t) {
                var e = {}
                  , i = {}
                  , n = {}
                  , r = this.$el.data("values-hash")
                  , d = this.$el.data("groups-hash")
                  , c = o().isFunction(this.options.getChatMembers) ? this.options.getChatMembers() : this._getChatMembers()
                  , u = o().filter(d, (function(e, i) {
                    var n = o().find(r, (function(t) {
                        return t.group_id === i && parseInt(t.id) !== parseInt((0,
                        a.current)("id"))
                    }
                    ));
                    return this.options.select_groups && o().contains(t.groups, e) && n
                }
                ), this);
                return i = o().reduce(t.users, (function(t, e) {
                    var i = e.group;
                    return "external" === i ? (e.option = o().escape(e.option),
                    e.title = o().escape(e.title)) : i = "members",
                    -1 === o().indexOf(c, e.amojo_id || e.id) && "external" !== e.group || this.options.exclude_me && parseInt(e.id) === (0,
                    a.current)("id") || (o().isArray(t[i]) || (t[i] = []),
                    t[i].push(e)),
                    t
                }
                ), {}, this),
                this._show_all || !o().without(o().keys(i), "external").length || t.value && u.length && this.options.select_groups || o().isNull(this._show_all) && t.selected_item[0].is_group ? (e = l.default.prototype.getRenderUsersAndGroups.apply(this, arguments),
                i.members && (e.users.members = [{
                    id: "show_members",
                    group: "members",
                    title: (0,
                    s.i18n)("Show participants only")
                }],
                e.groups.members.hidden = !1,
                e.groups.members.hide_title = !0),
                this.options.select_groups && o().each(e.groups, (function(t) {
                    o().contains(["group_free_users", "external", "bots", "members"], t.id) || (t.selectable = !0,
                    t.hidden = !o().contains(u, t.title))
                }
                )),
                e.users = o().reduce(e.users, (function(t, i, n) {
                    var s = o().filter(i, (function(t) {
                        return !this.options.exclude_me || parseInt(t.id) !== (0,
                        a.current)("id")
                    }
                    ), this);
                    return s.length && e.groups[n] ? (t[n] = s,
                    e.groups[n].hidden = !1) : this.options.select_groups || (e.groups[n].hidden = !0),
                    t
                }
                ), {}, this),
                this.showOnlyExternalUsersIfHasLoadMore(e, t.selected_item[0])) : (n = o().reduce(["external", "members"], (function(t, e) {
                    return t[e] = {
                        title: d[e],
                        hidden: !i[e] && -1 === o().indexOf(u, d[e]),
                        selectable: this.options.select_groups && "members" === e,
                        id: e
                    },
                    t
                }
                ), {}, this),
                i.members && (n.members.select_title = (0,
                s.i18n)("Write to all"),
                i.members.push({
                    id: "show_all",
                    group: "members",
                    title: (0,
                    s.i18n)("Show all users in chat")
                })),
                this.options.teammate_mention && (delete i.external,
                delete n.external,
                delete i.bots,
                delete n.bots),
                this.showOnlyExternalUsersIfHasLoadMore({
                    users: i,
                    groups: n
                }, t.selected_item[0]))
            },
            showOnlyExternalUsersIfHasLoadMore: function(t, e) {
                !e || !e.active && e.is_group;
                var i, n, a = t.users.external || [];
                return e = e || {},
                a.length && "more_chats" === a[a.length - 1].id ? ((this._show_internal || e.active || e.is_group) && !1 !== this._show_internal ? (i = o().extend(t.users, {
                    external: [{
                        id: "show_external",
                        group: "external",
                        title: (0,
                        s.i18n)("Show contacts")
                    }]
                }),
                n = o().extend({}, t.groups, {
                    external: o().extend(t.groups.external, {
                        hidden: !1,
                        hide_title: !0
                    })
                })) : (i = {
                    internal: [{
                        id: "show_internal",
                        group: "internal",
                        title: (0,
                        s.i18n)("Show users")
                    }],
                    external: t.users.external
                },
                (n = {
                    internal: t.groups.members,
                    external: t.groups.external
                }).internal.hidden = !1,
                n.internal.hide_title = !0),
                {
                    users: i,
                    groups: n
                }) : t
            },
            getHighlightedItem: function(t, e) {
                if (t.is_group)
                    return t;
                var i = o().chain(e.users).clone().toArray().flatten().filter((function(t) {
                    return "show_all" !== t.id
                }
                )).value();
                return (t = o().findWhere(i, {
                    id: t.id
                })) || (t = i[0]),
                t
            },
            itemChoose: function(t, e) {
                var i, n = this;
                switch (!0) {
                case "more_chats" === e.id:
                    t.stopPropagation(),
                    o().isFunction(this.options.loadChats) && (i = this.$list.find(this._selector("suggest")).scrollTop(),
                    this.$list.find('.js-multisuggest-item[data-id="'.concat(e.id, '"]')).append('<span class="spinner-icon" style="width: 9px; height: 9px; margin-left: 5px;"></span>'),
                    this.options.loadChats().then((function() {
                        n.$(".js-multisuggest-input").val(""),
                        n.loadHelper(),
                        n.$list.find(n._selector("suggest")).scrollTop(i)
                    }
                    )));
                    break;
                case "show_external" === e.id:
                case "show_internal" === e.id:
                    t.stopPropagation(),
                    this._show_internal = "show_internal" === e.id,
                    this.setUsers(t, !1);
                    break;
                case "show_members" === e.id:
                case "show_all" === e.id:
                    t.stopPropagation(),
                    this.$(".js-multisuggest-input").val(""),
                    this._show_all = "show_all" === e.id,
                    this._show_internal = !0,
                    this.setUsers(t, !1);
                    break;
                default:
                    l.default.prototype.itemChoose.apply(this, arguments)
                }
            },
            setExistsUsersGroup: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this.users.groups.members = (0,
                s.i18n)("Participants"),
                l.default.prototype.setExistsUsersGroup.apply(this, e)
            },
            loadItems: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                l.default.prototype.loadItems.apply(this, e),
                o().isFunction(this.options.loadChats) && this.items_load_promises.push(this.options.loadChats())
            },
            addGroupClick: o().noop
        });
        var c = "../build/transpiled/interface/card/controls/users_select";
        window.define(c, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([c])
    }
    ,
    559739: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => p
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(237262)
          , c = i(758173)
          , u = i(572779);
        const p = c.default.extend({
            _skip_save: ["amoforms", "chat_send", "import", "digital_pipeline", "mailparser", "salesbot-designer"],
            _tags_for_deletion: null,
            _tags_for_addition: null,
            events: a().extend({}, c.default.prototype.events, {
                "multisuggest:select-first": "setPositions"
            }),
            _classes: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var n = c.default.prototype._classes.apply(this, e);
                return a().extend({}, n, {
                    outside_loader: "js-multisuggest-outside-loader"
                })
            },
            initialize: function(t) {
                this.options = {
                    cant_add: a().isUndefined(t.cant_add) ? "D" === (0,
                    d.getRights)("tags", "add") : t.cant_add
                },
                c.default.prototype.initialize.call(this, a().extend({}, t, {
                    $el: t.$input_container ? t.$input_container : t.$container,
                    existing_items: t.tags || {},
                    can_remove: !0,
                    replace: t.replace,
                    cant_add: this.options.cant_add,
                    topbar_offset: t.topbar_offset || 0,
                    no_absolute_positioning: t.no_absolute_positioning,
                    render_hidden: t.render_hidden,
                    $relative_to: t.$relative_to,
                    $container: t.$container,
                    autosize: t.autosize,
                    onInit: a().bind(this.onInit, this, t.onInit),
                    onItemChoosed: a().bind(this.onItemChoosed, this, t.onItemChoosed)
                }))
            },
            destroy: function() {
                var t = this;
                new Promise((function(e) {
                    t.hasModifications() ? t.save().then(e) : (t.rerenderInput(t.old_tags),
                    e())
                }
                )).then((function() {
                    a().isFunction(t.options.onDestroy) && t.options.onDestroy.call(t)
                }
                )),
                c.default.prototype.destroy.call(t)
            },
            onInit: function(t) {
                var e = this.options.area
                  , i = a().isArray(e) ? a().map(e, (function(t) {
                    return "fast-tags-".concat(t)
                }
                )).join(" ") : "fast-tags-".concat(e)
                  , n = a().isArray(e) ? a().map(e, (function(t) {
                    return "fast-tags-suggest-".concat(t)
                }
                )).join(" ") : "fast-tags-suggest-".concat(e);
                this.options.area && (this.$el.addClass(i),
                this.$list.addClass(n)),
                this.old_tags = a().filter(this.options.existing_items, (function(t) {
                    var e = parseInt(t.id);
                    return !a().isNaN(e) && e > 0
                }
                )),
                a().isFunction(t) && t.call(this)
            },
            onItemChoosed: function(t) {
                a().isFunction(t) && t.call(this)
            },
            setPositions: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                c.default.prototype.setPositions.apply(this, e),
                a().isFunction(this.options.onSetPositions) && this.options.onSetPositions.apply(this)
            },
            loadItems: function() {
                var t = this.options.entity || APP.getBaseEntity();
                this.$list.addClass("js-loading"),
                (0,
                u.getFullTagsList)({
                    entity: t
                }).then(a().bind((function(t) {
                    this.$list.removeClass("js-loading"),
                    t = this.parseLoadedTags(t.items),
                    this.setItems({
                        items: t,
                        selected: this.options.existing_items,
                        from_load: !0
                    }),
                    this.setPositions()
                }
                ), this))
            },
            rerenderInput: function(t) {
                this.options.items_template && this.$el.replaceWith(o()(l()({
                    ref: this.options.items_template
                }).render(a().extend({
                    id: this.options.id,
                    class_name: this.options.class_name || "",
                    items: t
                }, this.options.onRenderItemsParams ? this.options.onRenderItemsParams(t) : {}))))
            },
            saveSuccess: function(t) {
                return this.saved_tags = t,
                this.rerenderInput(t),
                a().isFunction(this.options.onSaveSuccess) && this.options.onSaveSuccess.call(this, t),
                t
            },
            save: function() {
                var t, e = this._elem("input");
                return e.val() && !this.options.cant_add && (this.$el.trigger("multisuggest:item:choose", {
                    title: e.val()
                }),
                e.val("")),
                t = this.getSelectedItems(),
                this._elem("outside_loader").show(),
                this.createNewTags(t).finally(a().bind((function(t) {
                    return this._elem("outside_loader").hide(),
                    t
                }
                ), this)).then(a().bind((function(e) {
                    return t = e,
                    a().first(this.options.id) <= 0 || a().contains(this._skip_save, this.options.entity) || this.options.entity_skip_save ? Promise.resolve() : this.save_xhr = (0,
                    u.setTags)({
                        entity: this.options.entity,
                        ids: this.options.id,
                        tags: this.prepareTagsForRequest(a().values(o().extend(!0, {}, e)), this.old_tags)
                    })
                }
                ), this)).then(a().bind((function() {
                    this.saveSuccess(t)
                }
                ), this)).catch(a().bind((function() {
                    a().isFunction(this.options.onSaveFail) && this.options.onSaveFail.call(this, {
                        items: this.old_tags
                    })
                }
                ), this))
            },
            hasModifications: function() {
                var t = this.getSelectedItems();
                return !a().isEqual(a().sortBy(a().pluck(t, "id")), a().sortBy(a().pluck(this.old_tags, "id"))) || !(!this._elem("input").val() || this.options.cant_add)
            },
            getTags: function() {
                return this.saved_tags || this.getSelectedItems()
            },
            getSelectedItems: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var n = c.default.prototype.getSelectedItems.apply(this, e);
                return a().map(n, (function(t) {
                    return a().extend(t, {
                        id: parseInt(t.id) || 0
                    })
                }
                ))
            },
            parseLoadedTags: function(t) {
                return t
            },
            createNewTags: function(t, e) {
                var i = a().chain(t).filter((function(t) {
                    return !t.id
                }
                )).pluck("raw_title").value();
                return e = e || this.options.entity,
                new Promise((function(n, o) {
                    i.length ? (0,
                    u.createNewTags)(i, e).done((function(e) {
                        t = a()(t).filter((function(t) {
                            return t.id
                        }
                        )).concat(e.items),
                        n(t)
                    }
                    )).fail(o) : n(t)
                }
                ))
            },
            prepareTagsForRequest: function(t, e) {
                var i = a().chain(t).filter((function(t) {
                    return t.id
                }
                )).map((function(t) {
                    return parseInt(t.id)
                }
                )).value()
                  , n = a().map(e, (function(t) {
                    return parseInt(t.id)
                }
                ));
                this._tags_for_deletion || (this._tags_for_deletion = []),
                a().each(a().difference(n, i), (function(t) {
                    var i = a().findWhere(e, {
                        id: t
                    });
                    t <= 0 || this._tags_for_deletion.push(a().extend(i, {
                        deleted: !0
                    }))
                }
                ), this),
                this._tags_for_addition || (this._tags_for_addition = []);
                var o = this._tags_for_deletion;
                return this._tags_for_deletion = [],
                a().each(a().difference(i, n), (function(e) {
                    var i = a().findWhere(t, {
                        id: e
                    });
                    this._tags_for_addition.push(i)
                }
                ), this),
                t.concat(o)
            }
        });
        var _ = "../build/transpiled/interface/fast_tags";
        window.define(_, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([_])
    }
    ,
    77778: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => p
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(880774)
          , c = i(500034)
          , u = i(889378);
        const p = u.default.extend({
            _template: "/tmpl/leads_pipeline/tile_settings.twig",
            events: function() {
                var t = a().result(u.default.prototype, "events", {});
                return a().extend(t, {
                    "change .control--select--input": "onChange",
                    "change .tile-settings__checkbox .control-checkbox__body input": "onCheckboxChange",
                    "click .js-modal-accept": "onSaveClick"
                })
            },
            _fieldPositions: ["position_1", "position_2", "position_3", "position_4", "position_5", "position_6", "position_7"],
            _requiredPosition: "position_5",
            _setOptions: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var n = u.default.prototype._setOptions.apply(this, e);
                return this.options = a().extend({}, this.options, {
                    init: a().bind(this._onInit, this),
                    class_name: "modal-list tile-settings",
                    preload_templates: this._template
                }),
                n
            },
            _getUrl: function() {
                return "/ajax/v2/pipeline/".concat(this.options.pipeline_id, "/settings/tile")
            },
            _loadTileSettings: function() {
                var t = this._getUrl();
                return o().ajax({
                    url: t,
                    type: "GET",
                    dataType: "json"
                }).done(a().bind((function(t) {
                    var e = t._embedded.items.settings.tile.positions;
                    this._settings = t._embedded.items.settings,
                    this._settings.tile.positions = {},
                    a().each(this._fieldPositions, a().bind((function(t) {
                        this._settings.tile.positions[t] = e[t.split("_")[1] - 1]
                    }
                    ), this))
                }
                ), this))
            },
            _onInit: function(t) {
                this._selected_positions = [],
                this._loadTileSettings().then(a().bind((function() {
                    t.append(l()({
                        ref: this._template
                    }).render({
                        fields: this._getRenderParams(),
                        show_avatar: this._settings.tile.show_avatar,
                        apply_for_all: this._settings.tile.apply_for_all,
                        show_last_message: this._settings.tile.show_last_message
                    })),
                    this.onModalCentrify(),
                    this._filterSelectItems()
                }
                ), this))
            },
            _setDefaults: function() {
                var t = APP.constant("account")
                  , e = t.cf || {}
                  , i = t.predefined_cf || {}
                  , n = {}
                  , o = [APP.element_types.leads, APP.element_types.contacts, APP.element_types.companies]
                  , s = {
                    leads: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Lead"),
                        disabled: !0
                    }, {
                        id: "2__id",
                        option: (0,
                        d.i18n)("Lead ID")
                    }, {
                        id: "2__name",
                        option: (0,
                        d.i18n)("Lead title")
                    }, {
                        id: "2__date_create",
                        option: (0,
                        d.i18n)("Date create")
                    }, {
                        id: "2__budget",
                        option: (0,
                        d.i18n)("budget")
                    }, {
                        id: "2__manager",
                        option: (0,
                        d.i18n)("Resp. user")
                    }],
                    contacts: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Main contact"),
                        disabled: !0
                    }, {
                        id: "1__name",
                        option: [(0,
                        d.i18n)("Contact"), (0,
                        d.i18n)("Name")].join(": ")
                    }],
                    companies: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Company"),
                        disabled: !0
                    }, {
                        id: "3__name",
                        option: [(0,
                        d.i18n)("Company"), (0,
                        d.i18n)("Name")].join(": ")
                    }]
                }
                  , r = [{
                    id: "-1",
                    option: (0,
                    d.i18n)("No value")
                }];
                return (0,
                c.isFeatureAvailable)("operday") && s.leads.push({
                    id: "2__labor_cost",
                    option: (0,
                    d.i18n)("Labor costs (column)")
                }),
                a().extend(n, e, i),
                a().each(n, (function(t) {
                    a().each(t.ELEMENT_TYPES, (function(e) {
                        ~o.indexOf(e) && s[a().findKey(APP.element_types, (function(t) {
                            return t == e
                        }
                        ))].push({
                            id: "".concat(e, "__").concat(t.ID),
                            option: 2 === parseInt(e) ? t.NAME : [(0,
                            d.i18n)(1 === parseInt(e) ? "Contact" : "Company"), t.NAME].join(": ")
                        })
                    }
                    ), this)
                }
                ), this),
                a().union(r, s.leads, s.contacts, s.companies, s.date)
            },
            _getRenderParams: function() {
                var t, e = this._setDefaults(), i = {}, n = this._settings.tile ? this._settings.tile.positions : {};
                return this._fieldPositions.forEach(a().bind((function(o) {
                    (t = n[o].entity_type ? [n[o].entity_type, n[o].field_name].join("__") : null) && this._selected_positions.push(t),
                    i[o] = {
                        items: o === this._requiredPosition ? a().rest(e) : e,
                        selected: t || ""
                    }
                }
                ), this)),
                i
            },
            _setSettings: function(t, e) {
                var i = this._settings.tile || {}
                  , n = this._settings.tile ? this._settings.tile.positions : {}
                  , o = {};
                o[t] = {
                    field_name: e.split("__")[1],
                    entity_type: e.split("__")[0]
                },
                a().extend(n, o),
                this._settings.tile = a().extend(i, {
                    positions: n
                })
            },
            _saveTileSettings: function() {
                var t = this.options.pipeline_id
                  , e = "/ajax/v2/pipeline/".concat(t, "/settings/tile")
                  , i = {};
                return (i = {
                    settings: {
                        tile: this._settings.tile
                    }
                }).settings.tile.positions = a().mapObject(i.settings.tile.positions, (function(t) {
                    return -1 === parseInt(t.entity_type) ? [] : t
                }
                )),
                i.settings.tile.apply_for_all = document.getElementById("apply_for_all").checked,
                i.settings.tile.show_avatar = document.getElementById("show_avatar").checked,
                i.settings.tile.show_last_message = document.getElementById("show_last_message").checked,
                o().ajax({
                    url: e,
                    type: "POST",
                    data: JSON.stringify(i),
                    dataType: "json"
                })
            },
            _filterSelectItems: function(t, e) {
                var i = this
                  , n = this.$el.find(".control--select--list");
                e && -1 != e && (this._selected_positions = a().without(this._selected_positions, e)),
                t && -1 != t && this._selected_positions.push(t),
                n.each((function(t, e) {
                    o()(e).children().each((function(t, e) {
                        o()(e).toggle(!~i._selected_positions.indexOf(o()(e).attr("data-value")) || o()(e).hasClass("control--select--list--item-selected"))
                    }
                    ))
                }
                ))
            },
            onChange: function(t) {
                var e = o()(t.currentTarget)
                  , i = e.val()
                  , n = e.attr("data-prev-value")
                  , s = e.attr("name");
                e.prev(".control--select--button").attr("data-before", ""),
                this._setSettings(s, i),
                this._filterSelectItems(i, n)
            },
            onCheckboxChange: function(t) {
                var e = o()(t.currentTarget)
                  , i = e.closest(".tile-settings__body")
                  , n = i.find(".tile-settings__last-message")
                  , s = i.find(".tile-settings__avatar");
                -1 != e.attr("id").indexOf("last_message") && n.toggle(e.value),
                -1 != e.attr("id").indexOf("show_avatar") && s.toggle(e.value)
            },
            onSaveClick: function(t) {
                var e = o()(t.currentTarget);
                e.trigger("button:load:start"),
                this._saveTileSettings().then(a().bind((function() {
                    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                        i[n] = arguments[n];
                    u.default.prototype.destroy.apply(this, i),
                    e.trigger("button:load:stop"),
                    o()(document).trigger("page:reload")
                }
                ), this))
            }
        });
        var _ = "../build/transpiled/interface/leads/pipeline/tile_modal";
        window.define(_, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([_])
    }
    ,
    312114: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => l
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(678640)
          , a = i(579569)
          , r = i(378091);
        const l = {
            events: {
                "click .js-feed-users": "onUserSelectInitClick"
            },
            onUserSelectInitClick: function(t) {
                t.stopPropagation(),
                this._initUsersSelect()
            },
            _getUsersSelectParams: function() {
                var t = this;
                return o().extend({
                    el: this.$(".js-feed-users").get(0),
                    inner_id: "feed_users_select",
                    input_name: "feed_compose_user",
                    class_name: "feed-compose-user",
                    select_one: !0,
                    exclude_me: "chat" === this.options._type,
                    select_groups: "chat" === this.options._type,
                    entity: o().isFunction(this._getElement) ? this._getElement() : {},
                    not_remove: !1,
                    disabled_users: !0,
                    users: o().bind(this._getUsers || o().noop, this),
                    existing_items: o().isFunction(this._getExistingUsers) ? this._getExistingUsers() : {},
                    load_data: !!o().isFunction(this._getUsersSelectData) && this._getUsersSelectData(),
                    items_template: "/tmpl/notes/feed_user.twig",
                    loadChats: function() {
                        return o().isFunction(t._loadUsersSelectChats) ? t._loadUsersSelectChats() : Promise.resolve()
                    },
                    onRenderItemsParams: function(t) {
                        return t[0] || {}
                    },
                    onInit: function() {
                        t._elem("textarea").css("padding-left", "0px")
                    },
                    onRenderSuggest: function() {
                        this.$list.find(".users-select-row__inner").css({
                            width: "auto",
                            minWidth: 250,
                            maxWidth: 370
                        })
                    },
                    onDestroy: function(e, i, n) {
                        this.options.teammate_mention && !i && n && t._elem("textarea").html("@"),
                        o().has(t._selectors(), "quick_actions") && t._elem("quick_actions").removeClass("hidden"),
                        !e.length && (0,
                        s.isValidEmail)(i) && ((e = o().reduce((0,
                        a.get)(!0), (function(t, e) {
                            return e.login === i && (t = {
                                group: "",
                                title: e.title,
                                id: e.id
                            }),
                            t
                        }
                        ), null)) || (e = [{
                            is_new: !0,
                            group: "",
                            title: i
                        }])),
                        o().isFunction(t._onUserChanged) && t._onUserChanged(e[0])
                    }
                }, o().result(this, "_getViewUsersSelectParams", {}))
            },
            _initUsersSelect: function(t) {
                return o().has(this._selectors(), "quick_actions") && this._elem("quick_actions").addClass("hidden"),
                this._addComponent(r.default, o().extend(this._getUsersSelectParams(), t || {}))
            }
        };
        var d = "../build/transpiled/interface/notes/views/add/mixins/users_select";
        window.define(d, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([d])
    }
    ,
    486264: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => d
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r);
        l()._preload(["/tmpl/todo/form/completed_task.twig", "/tmpl/todo/form/task_result.twig"])();
        const d = {
            _selectors: {
                wrapper: ".card-task__result-wrapper__inner",
                result: ".task_edit_result",
                paragraph: ".card-task__result-wrapper__inner__paragraph",
                editor: ".card-task__result-wrapper__result-editor",
                submit_btn: ".js-task-submit"
            },
            _setEditClick: function(t) {
                if (this.$el = t.$el,
                this.$el.parent().show(),
                this._findElem("paragraph").hide(),
                !this.$el.data("is_open_editor")) {
                    var e = {
                        template_name: "completed_task",
                        render_data: {
                            task_id: t.task_id,
                            result_id: t.result.id,
                            result_text: t.result.text
                        }
                    };
                    this._render(e);
                    var i = this._findElem("result");
                    i.on("input change", {
                        prev_result: t.result.text,
                        $submit_btn: this._findElem("submit_btn")
                    }, this._validateResult),
                    i.focus(),
                    this.$el.data("is_open_editor", !0),
                    this.$el.trigger("modal:centrify")
                }
            },
            _getTemplate: function(t) {
                return a().isUndefined(t) && (t = "completed_task"),
                {
                    completed_task: "/tmpl/todo/form/completed_task.twig",
                    task_result: "/tmpl/todo/form/task_result.twig"
                }[t]
            },
            _getRenderedTemplate: function(t) {
                var e = this._getTemplate(t.template_name);
                return l()({
                    ref: e
                }).render({
                    render_data: t.render_data
                })
            },
            _render: function(t) {
                this.$el.append(this._getRenderedTemplate(t))
            },
            _updateResultCompletedTask: function(t) {
                var e;
                this.$el = t.$el;
                var i = t.model.get("id")
                  , n = t.model.get("result")
                  , s = n.id
                  , r = this._findElem("result");
                e = r.val();
                var l = this._findElem("submit_btn");
                if (this._validateResult({
                    data: {
                        result: e,
                        prev_result: n.text,
                        $submit_btn: l
                    }
                })) {
                    l.trigger("button:load:start", ["white"]);
                    var d = {
                        BODY: e,
                        NOTE_TYPE: 13,
                        ACTION: "EDIT_NOTE",
                        ELEMENT_TYPE: 4
                    };
                    a().isEmpty(n) ? (d.ELEMENT_ID = i,
                    d.ACTION = "ADD_NOTE") : d.ID = s,
                    o().ajax({
                        url: "/private/notes/edit2.php",
                        data: d,
                        method: "POST"
                    }).done(a().bind((function() {
                        var i = this._findElem("paragraph")
                          , o = this._findElem("editor")
                          , s = this.$el.data("is_open_editor");
                        n.text = a().escape(e),
                        t.model.set("result", n);
                        var r = {
                            template_name: "task_result",
                            render_data: n
                        };
                        o.remove(),
                        e = this._getRenderedTemplate(r),
                        i.html(e),
                        i.show(),
                        a().isUndefined(s) && (this.$el = this._findElem("wrapper")),
                        this.$el.data("is_open_editor", !1),
                        this.$el.trigger("modal:centrify"),
                        this.$el.trigger("modal:need-page-reload")
                    }
                    ), this))
                }
            },
            _findElem: function(t) {
                return this.$el.find(this._selectors[t])
            },
            _validateResult: function(t) {
                var e, i = "button-input-disabled", n = {};
                e = t.type ? o()(this).val().trim() : t.data.result.trim();
                var s = t.data.prev_result
                  , r = t.data.$submit_btn;
                switch (!0) {
                case a().isEmpty(e):
                case s === a().escape(e):
                    n.is = !0
                }
                return n.is ? (r.toggleClass(i, !0),
                t.type && t.stopPropagation(),
                !1) : (r.toggleClass(i, !1),
                !0)
            }
        };
        var c = "../build/transpiled/interface/notes/views/completed_task";
        window.define(c, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([c])
    }
    ,
    653288: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => c
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(161320)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(661533);
        const c = {
            events: {
                "click .js-task-complete-btn": "complete",
                "click .js-todo-result:not(.button-input-disabled)": "setResult",
                "click .js-todo-result-skip": "skipResultClick",
                "click .js-task-result-button": "completeClick",
                "click .js-clone-task-preset": "_onPresetClick",
                "focus .card-task__result-wrapper__inner__textarea": "_showCloneControls"
            },
            completeClick: function(t) {
                var e = d.Deferred()
                  , i = this._form.model.get("result")
                  , n = this.$(".js-task-result-button");
                if ("Y" !== n.attr("data-loading"))
                    return t && t.stopPropagation && t.stopPropagation(),
                    n.trigger("button:load:start", ["white"]),
                    this._cloneThis(this._getCloneData()).then(o().bind((function(t) {
                        this.model.set({
                            date_modify: a()().unix(),
                            status: 1,
                            result_form: !0,
                            result_text: i,
                            has_clone: !!t
                        }),
                        t && this.model.collection.add(t),
                        this.model.complete({
                            silent: Boolean(i) || !o().isUndefined(t)
                        }).then(o().bind(this._setResult, this, i), o().bind((function() {
                            this.model.set({
                                status: 0
                            }),
                            this._loadStop()
                        }
                        ), this)).then(o().bind((function() {
                            t && (this.$el.addClass("hidden"),
                            this.options.onAdd(t).then(o().bind((function() {
                                this.cancel(),
                                this.$el.removeClass("hidden"),
                                this._scrollOnEdit()
                            }
                            ), this)))
                        }
                        ), this)).then(e.resolve)
                    }
                    ), this)),
                    e.promise()
            },
            _setResult: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.is_open = !1,
                this.model.set("result_form", !1),
                t && (this._setChanges(!1),
                this.model.resultNotSync(t, e)),
                this.cancel()
            },
            _onPresetClick: function(t) {
                var e = d(t.currentTarget)
                  , i = e.parent()
                  , n = a()();
                switch (t.stopPropagation(),
                i.children().not(e).remove(),
                e.attr("data-preset")) {
                case "tomorrow":
                    n.add(1, "days");
                    break;
                case "next_week":
                    n.add(1, "weeks");
                    break;
                case "next_month":
                    n.add(1, "months")
                }
                this.$('[name="clone_task"]').prop("checked", !0).trigger("change"),
                i.html(l()({
                    ref: "/tmpl/common/tasks_date.twig"
                }).render({
                    date: n.set("hours", 23).set("minutes", 59).format(APP.system.format.date.full),
                    main_user: this.model.get("responsible_user_id"),
                    type: this._form.model.get("type"),
                    typeName: this._form.model.get("task_type_name"),
                    duration: 0,
                    wrapper_class_name: "card-task__clone__dates__preset-datetime-wrapper"
                })).find(".tasks-date").one("controls:view:init", (function() {
                    i.find(".tasks-date__caption-date").click()
                }
                ))
            },
            _onDateCloneChange: function(t) {
                var e = d(t.currentTarget).parent();
                e.parent().children().not(e).remove(),
                this.$('[name="clone_task"]').prop("checked", !0).trigger("change")
            },
            _changeCloneDateRadio: function() {
                var t = this.$('.card-task__clone__dates__preset-datetime [name="date"]').val();
                this.$(".js-task-clone-preset-custom").val(t)
            },
            _getCloneData: function() {
                var t = [this.$('.card-task__clone__dates [name="date"]').val(), this.$('.card-task__clone__dates [name="time"]').val()].join(" ").trim();
                return t || (t = a()().add(1, "days").hours("23").minute("59").format(APP.system.format.date.full)),
                {
                    timestamp: this._getTimeStampFromString(t),
                    duration: this.$('.card-task__clone__dates [name="duration"]').val() || 0
                }
            },
            _cloneThis: function(t) {
                var e = d.Deferred()
                  , i = this.model.clone();
                return this.$(".card-task__clone__checkbox input:checked").length ? this.$(".card-task__type-wrapper").one("task-comment:type-saved".concat(this.ns), o().bind((function(n, o) {
                    i.set({
                        complete_till: t.timestamp,
                        duration: t.duration,
                        id: null,
                        result_form: !1,
                        status: 0,
                        type: o || i.get("type")
                    }),
                    i.save().then((function() {
                        e.resolve(i.toJSON())
                    }
                    ))
                }
                ), this)).trigger("task-comment:type-save") : e.resolve(),
                e.promise()
            },
            _showCloneControls: function() {
                this.$el.css("height", "").find(".card-task__clone").css("display", Modernizr.prefixed("flex")),
                this.model.trigger("notes:update-sticky")
            },
            _loadStop: function() {
                this.$(".js-task-result-button").trigger("button:load:stop")
            },
            complete: function(t) {
                return t && (t.stopPropagation(),
                d(t.currentTarget).find(".js-task-complete-icon").addClass("animated tada")),
                this.model.set({
                    date_modify: a()().unix(),
                    status: 1,
                    result_form: !0
                }),
                this.model.complete().then(o().bind((function() {
                    this.cancel(),
                    APP.is_touch_device || this.$(".task-complete__textarea-input").focus()
                }
                ), this))
            },
            showCompleted: function() {
                this.model.set({
                    date_modify: a()().unix(),
                    status: 1,
                    result_form: !0
                }),
                this.model.trigger("sync", this.model),
                this.cancel()
            },
            skipResultClick: function() {
                this.model.set("result_form", !1),
                this.cancel()
            },
            setResult: function(t) {
                var e = this._form.model.get("task_result");
                return t && t.stopPropagation(),
                o().isEmpty(this.validate()) ? this.model._pending ? this.model._loading : (this.model.set({
                    result_form: !1
                }),
                this._findElem("submit").trigger("button:load:start", ["white"]),
                this.model.result(e).then(o().bind(this.cancel, this))) : new Promise((function(t, e) {
                    e("Empty result text")
                }
                ))
            }
        };
        var u = "../build/transpiled/interface/notes/views/mixins/task_complete";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    686030: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => A
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(162262)
          , a = i.n(s)
          , r = i(230385)
          , l = i.n(r)
          , d = i(880774)
          , c = i(887977)
          , u = i(811707)
          , p = i(237262)
          , _ = i(579569)
          , h = i(736747)
          , f = i(486264)
          , m = i(353032)
          , g = i(653288)
          , v = i(312114)
          , y = i(775193)
          , b = i(105655)
          , k = i(112904)
          , w = i(661533);
        i(814748);
        var E = o().invert(APP.element_types)
          , x = null
          , P = {}
          , C = h.default.extend({
            _selectors: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return o().extend({}, h.default.prototype._selectors.apply(this, e), {
                    comment: ".card-task__type-wrapper",
                    task_date: ".tasks-date",
                    result_textarea: ".js-task-result-textarea",
                    editable_control: ".js-control-contenteditable",
                    textarea: ".control-contenteditable__area",
                    result_completed_task: ".js-edit-result-completed-task",
                    task_inner: ".card-task__inner"
                })
            },
            events: o().extend({}, h.default.prototype.events || {}, {
                "click .js-task-edit-cancel": "cancel",
                "click .js-task-submit:not(.button-input-disabled)": "save",
                "click .card-task__inner": "editClick",
                "click:note_expander .js-note-expander": "_updateSticky",
                "click .card-task__result-wrapper": "_stopPropagation",
                "mousedown .js-task-result-textarea": "_saveScrollPosBeforeFocus",
                "touchstart .js-task-result-textarea": "_saveScrollPosBeforeFocus",
                "focus .js-task-result-textarea": "_resetScrollPosAfterFocus",
                'change [name="type"]': "_onChangeTypeFocusOnText",
                "autosize.resized .js-task-result-textarea": "_updateSticky",
                "input [contenteditable]": "onContenteditableInput",
                "focus [contenteditable]": "_updateActiveInput",
                "input .js-task-result-textarea": "updateLastInputInfo"
            }),
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                h.default.prototype.initialize.apply(this, e),
                this.model.get("is_add") || a().mixin(this, g.default),
                this.models.length > 1 && a().mixin(this, m.default.prototype),
                this.listenTo(this.model, "sync", this._startFutureTimer, this),
                o().propertyOf(this)(["model", "collection"]) && this.listenTo(this.model.collection, "notes:update-sticky", this._restoreFocus, this),
                this.listenTo(this.model, "task:complete-after-chat", this._focusCompleteAfterChat, this),
                this._startFutureTimer()
            },
            destroy: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._check_complete_interval && clearInterval(this._check_complete_interval),
                h.default.prototype.destroy.apply(this, e)
            },
            _stopPropagation: function(t) {
                t.stopPropagation()
            },
            _restoreFocus: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this._editing && t.after_resort && o().propertyOf(P)(["$active_input", "length"]) && (P.$active_input.addClass("js-cursor-autoset-disabled"),
                P.$active_input.trigger("focus"),
                o().delay((function() {
                    P.$active_input.removeClass("js-cursor-autoset-disabled")
                }
                ), 1),
                (0,
                u.setCursorPosition)(P.$active_input, P.end_position, P.cursorNode),
                this._scrollOnEdit())
            },
            _setEditClick: function(t) {
                var e, i = w(t.target).hasClass("js-note-expander");
                if (this.model.get("is_completed") && !i)
                    return e = {
                        $el: this._findElem("result_completed_task"),
                        task_id: this.model.get("id"),
                        result: this.model.get("result")
                    },
                    void f.default._setEditClick(e);
                h.default.prototype._setEditClick.apply(this, arguments)
            },
            cancel: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                if (this.is_open)
                    return this.is_open = !1,
                    this._editing = !1,
                    P = {},
                    this.$(".card-task").removeClass("expanded"),
                    this._updateSticky(),
                    void (this._form && this._form.destroy());
                this.model.set("result_form", !1),
                h.default.prototype.cancel.apply(this, e)
            },
            _render: function(t) {
                var e = this._isFutureTask();
                h.default.prototype._render.apply(this, arguments),
                e && this.el.parentNode && this.el.parentNode.classList["edit" === t ? "add" : "remove"]("editing"),
                "edit" === t || e || (this._initForm(),
                this._subscribeToFormChanges())
            },
            _updateTasksDateTitle: function() {
                this._findElem("task_date").attr("data-responsible", this._form.model.get("main_user")).attr("data-title", this._form.model.get("body")).attr("data-type", this._form.model.get("type")).attr("data-type-name", this._form.model.get("task_type_name"))
            },
            _isFutureTask: function() {
                var t = this.model.get("complete_till");
                switch (!0) {
                case o().isUndefined(t):
                    t = l()().hour(23).minutes(59).format("X");
                    break;
                case o().isString(t):
                    t = this._getTimeStampFromString(t)
                }
                return l().utc(t, "X").tz(APP.system.timezone).isAfter(l()())
            },
            _focusCompleteAfterChat: function() {
                this.is_open || this.edit(),
                o().delay(o().bind((function() {
                    this.$el.addClass("animated js-complete-after-chat").one(APP.animation_event + this.ns, o().bind((function() {
                        this.$el.removeClass("animated js-complete-after-chat")
                    }
                    ), this))
                }
                ), this), 150)
            },
            edit: function() {
                var t = this.is_open
                  , e = !1;
                this.model.get("status") ? (e = !0,
                this.model.set("result_form", !0),
                this._render(),
                this.el.classList.add("".concat(this.className, "-in-edit"))) : t || (e = !0,
                this.is_open = !0,
                this.$(".card-task").addClass("expanded"),
                this._updateSticky()),
                this._editing = !0,
                e ? (this._initForm(),
                this._subscribeToFormChanges(),
                this.$("textarea").trigger("controls:textarea:autosize"),
                (0,
                c.setCursorToEnd)(this.$("textarea"))) : this.enterEditMode()
            },
            _subscribeToFormChanges: function() {
                var t = this;
                this._form.model.on("has_changes has_reverted", (function() {
                    t._updateTasksDateTitle()
                }
                ))
            },
            editClick: function(t) {
                this.is_open && (t.stopPropagation(),
                this.enterEditMode())
            },
            enterEditMode: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                !0 === this.model.get("editable") && (this.is_open = !1,
                this._form && (this._form.destroy(),
                this._form = null),
                h.default.prototype.edit.apply(this, e),
                this._subscribeToFormChanges(),
                this.$el.one("controls:view:init", this._selector("editable_control"), o().bind((function() {
                    APP.is_touch_device || (0,
                    c.setCursorToEnd)(this._elem("textarea"))
                }
                ), this)),
                this._scrollOnEdit(),
                this._updateSticky())
            },
            _scrollOnEdit: function() {
                this._isFutureTask() && o().isFunction(this.options.scrollToEnd) && this.options.scrollToEnd(this.$el)
            },
            _onChangeTypeFocusOnText: function() {
                var t = this._findElem("textarea");
                t.length && (t.focus(),
                this._putCursorToEnd({
                    currentTarget: t.get(0)
                }))
            },
            _getRenderParams: function(t) {
                var e = this.model.get("complete_till")
                  , i = o().reduce(APP.constant("task_types"), (function(t, e, i) {
                    var n = parseInt(e.icon_id) > 0 ? e.icon_id : 0
                      , s = e.color;
                    return t[i] = {
                        id: e.id,
                        icon_id: e.icon_id,
                        color: e.color,
                        option: ['<span class="task_type_select__icon">', '<svg class="svg-icon svg-tasks--types-icons--'.concat(n, '-dims" style="fill: #').concat(s || "568FFA", '">'), '<use xlink:href="#tasks--types-icons--'.concat(n, '"></use>'), "</svg>", "</span>"].join("") + o().escape(e.option)
                    },
                    t
                }
                ), {})
                  , n = (0,
                p.isAdmin)()
                  , s = o().extend({
                    1: {
                        id: 1,
                        option: '<span class="task_type_select__icon icon icon-inline icon-follow-up"></span>'.concat(APP.todo_types[1])
                    },
                    2: {
                        id: 2,
                        option: '<span class="task_type_select__icon icon icon-inline icon-case-red"></span>'.concat(APP.todo_types[2])
                    }
                }, i, n ? {
                    custom: {
                        id: "custom",
                        option: '<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--0-dims"><use xlink:href="#tasks--types-icons--0"></use></svg></span>'.concat(APP.lang.tasks_custom)
                    }
                } : {})
                  , a = APP.todo_types[this.model.get("type")]
                  , r = i["key_".concat(this.model.get("type"))] || {}
                  , d = this.model._getResult()
                  , c = this.model.get("result")
                  , u = (0,
                _.current)("settings").default_task_preset
                  , h = o().contains(["after_15_minutes", "after_30_minutes", "in_an_hour"], u)
                  , f = h ? 1800 : 0;
                return a || (a = r.option),
                o().isString(e) ? e = this._getTimeStampFromString(e) : !e && u && (e = (0,
                k.default)(u).tz(APP.system.timezone),
                h || (e = e.hours(23).minutes(59)),
                e = e.unix()),
                o().extend({
                    duration: f
                }, this.model.toJSON(), {
                    is_edit: "edit" === t || this.model.get("result_form"),
                    template: this._getTemplateName(),
                    _templates: b.default,
                    complete_till: e,
                    main_element_type: this.options.element_type,
                    element_type_code: E[this.model.get("element_type")],
                    type_name: a,
                    type_icon: r.icon_id,
                    type_color: r.color,
                    expired: e <= l()().unix(),
                    expired_diff: Math.abs(l()().diff(l()(e, "X"), "days")),
                    is_not_exist: !this.model.get("element_id"),
                    is_today: l().utc(e, "X").tz(APP.system.timezone).isSame(l()(), "day"),
                    is_future: l().utc(e, "X").tz(APP.system.timezone).isAfter(l()()),
                    task_types: s,
                    joined: o().map(o().without(this.models, this.model), (function(t) {
                        return o().extend(t.toJSON(), {
                            _links: t.links,
                            element_id: t.get("element_id"),
                            element_type_code: E[t.get("element_type")],
                            extra: o().extend(this.options.getExtraData(t), {
                                users: this._getUsers()
                            })
                        })
                    }
                    ), this),
                    result: c || d && d.toJSON(),
                    extra: o().extend(this.options.getExtraData(this.model), {
                        users: this._getUsers()
                    })
                })
            },
            _getExistingUsers: function() {
                var t = this._getUsers()[this.model.get("responsible_user_id")] || {};
                return [o().extend({
                    id: this.model.get("responsible_user_id"),
                    title: t.full_name || (0,
                    d.i18n)("notes_user_deleted")
                }, t)]
            },
            _getTemplateName: function() {
                return "task"
            },
            _getTemplate: function(t) {
                return this.model.get("status") ? "/tmpl/notes/types/task_completed.twig" : "edit" === t ? "/tmpl/cards/tasks/edit.twig" : "/tmpl/cards/tasks/view.twig"
            },
            _copyFormToModel: function() {
                var t = APP.constant("user") || {}
                  , e = parseInt(this._form.model.get("type"))
                  , i = [this._form.model.get("date"), this._form.model.get("time")].join(" ")
                  , n = this._getTimeStampFromString(i);
                this.model.set({
                    complete_till: n,
                    duration: this._form.model.get("duration"),
                    type: e,
                    data: o().extend({}, this.model.get("data"), {
                        text: this._form.model.get("body") || ""
                    }),
                    responsible_user_id: this._form.model.get("main_user"),
                    created_by: t.id,
                    expired: l()(n, "X").tz(APP.system.timezone).isBefore(l()().tz(APP.system.timezone))
                })
            },
            _getTimeStampFromString: function(t) {
                return l()(t, "".concat(APP.system.format.date.date, " ").concat(APP.system.format.date.time)).unix() - 60 * (new Date).getTimezoneOffset() + 60 * l().tz.zone(APP.system.timezone).utcOffset(l()())
            },
            validate: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return !this._form.model.get("task_result") && this.model.get("status") && (t = o().extend(t || {}, {
                    task_result: !1
                })),
                o().isEmpty(t) || this.$el.addClass("note-has-error"),
                t
            },
            _saveScrollPosBeforeFocus: function() {
                x = o().compose((function() {
                    x = null
                }
                ), this.options.scrollUpdate())
            },
            _resetScrollPosAfterFocus: function(t) {
                this.$("textarea").trigger("controls:textarea:autosize"),
                o().isFunction(x) && (x(),
                this._afterRender()),
                this._updateActiveInput(t)
            },
            save: function() {
                return new Promise(o().bind((function(t, e) {
                    var i = this.validate();
                    if (this.model._pending)
                        e("model already saving");
                    else
                        switch (!0) {
                        case !(this._editing && this._findElem("editable_control").length || this.model.get("status")):
                            this.completeClick().then(t, e);
                            break;
                        case parseInt(this.model.get("status")) > 0:
                            this.setResult().then(t, e);
                            break;
                        case !o().isEmpty(i):
                            e(i);
                            break;
                        default:
                            if (!0 === this._custom_type_pending)
                                return void e("custom todo type saving");
                            this._findElem("submit").trigger("button:load:start", ["white"]),
                            this._custom_type_pending = !0,
                            this.$el.one("task-comment:type-saved".concat(this.ns), this._selector("comment"), o().bind((function(i, n) {
                                this._custom_type_pending = !1,
                                !1 !== n ? (this._form.model.set("type", n),
                                this.model.set("type", n),
                                h.default.prototype.save.call(this).then(t, e)) : e()
                            }
                            ), this)),
                            this._findElem("comment").trigger("task-comment:type-save")
                        }
                }
                ), this))
            },
            _onUserChanged: function(t) {
                t && !t.is_new ? this.$(".js-task-main_user").val(t.id).trigger("change") : t = (0,
                _.get)(this.model.get("responsible_user_id"))
            },
            _startFutureTimer: function() {
                this._isFutureTask() && !this.model.get("is_new") && (clearInterval(this._check_complete_interval),
                this._check_complete_interval = setInterval(o().bind(this._checkIsComplete, this), 6e3))
            },
            _checkIsComplete: function() {
                this._isFutureTask() || this._findElem("result_textarea").val() || (this.render(),
                this.model.trigger("note:view:update", this.model),
                clearInterval(this._check_complete_interval))
            },
            _updateSticky: function() {
                var t = o().isFunction(this.options.scrollUpdate) && this.options.scrollUpdate();
                o().isFunction(t) || (t = o().noop),
                this.model.trigger("notes:update-sticky", t)
            },
            updateLastInputInfo: function(t) {
                this._updateActiveInput(t),
                this._updateEndPosition(t)
            },
            onContenteditableInput: function(t) {
                this._updateSticky(t),
                this.updateLastInputInfo(t)
            },
            _updateActiveInput: function(t) {
                o().extend(P, {
                    $active_input: w(t.currentTarget)
                }),
                o().defaults(P, {
                    end_position: 0
                })
            },
            _updateEndPosition: function(t) {
                var e = window.getSelection();
                o().extend(P, {
                    end_position: o().propertyOf(w(t.currentTarget))(["0", "selectionEnd"]) || 1 === e.rangeCount && e.getRangeAt(0).endOffset || 0,
                    cursorNode: e.baseNode
                })
            }
        });
        a().mixin(C, v.default, y.default);
        const A = C;
        var T = "../build/transpiled/interface/notes/views/task";
        window.define(T, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([T])
    }
    ,
    353032: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => p
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(889378)
          , a = i(77305)
          , r = i(577830)
          , l = i(736747)
          , d = i(900882)
          , c = i(392517)
          , u = i(661533);
        const p = l.default.extend({
            events: o().extend({}, l.default.prototype.events || {}, {
                "click .js-note-mail-share": "shareThread",
                "click .js-note-mail-message": "viewMail",
                "click .js-note-mail-resend": "resendOnClick"
            }),
            resendOnClick: function(t) {
                var e = this.model.get("data");
                t.preventDefault(),
                c.default.resendMessage(e.params.link_data.thread_id, e.params.link_data.message_id),
                e.params.delivery.status = "queued",
                this.model.set("data", e),
                this._render()
            },
            shareThread: function(t) {
                var e = {
                    id: +u(t.currentTarget).attr("data-note_id"),
                    entity_type: +u(t.currentTarget).attr("data-element_type")
                }
                  , i = +u(t.currentTarget).attr("data-thread_id");
                e.entity_type = o().invert(APP.element_types)[e.entity_type],
                e.entity_type = e.entity_type.substring(0, e.entity_type.length - 1),
                c.default.getThread(i).done((function() {
                    new a.default({
                        class_name: "modal-list",
                        text: APP.lang.mail_confirm_share_access,
                        accept: function() {
                            var t = {
                                contacts: [],
                                companies: [],
                                leads: [],
                                customers: []
                            }
                              , n = {};
                            n[APP.element_types.contacts] = "contacts",
                            n[APP.element_types.leads] = "leads",
                            n[APP.element_types.companies] = "companies",
                            n[APP.element_types.customers] = "customers",
                            t[APP.data.current_entity].push(+APP.data.current_card.id),
                            APP.data.current_card && APP.data.current_card.linked_forms && APP.data.current_card.linked_forms.form_models && APP.data.current_card.linked_forms.form_models.each((function(e) {
                                e.get("ID") && t[n[e.get("ELEMENT_TYPE")]].push(+e.get("ID"))
                            }
                            )),
                            c.default.shareThread(i, t, e).done(o().bind((function() {
                                this.requestSuccess(APP.lang.mail_share_success),
                                u(document).trigger("page:reload")
                            }
                            ), this)).fail(r.default.threadCommonFailModal)
                        }
                    })
                }
                )).fail(r.default.threadCommonFailModal)
            },
            viewMail: function(t) {
                var e, i, n = this, a = u(t.currentTarget), r = a.attr("data-thread_id"), l = a.attr("data-contact_id");
                return this.thread_modal = new s.default({
                    class_name: "modal-list thread_modal",
                    init: function(t) {
                        this.threadView = new d.default({
                            id: r,
                            filter: {
                                contact_id: l
                            },
                            el: t,
                            in_modal: !0,
                            destroyFromReply: o().bind(this.destroy, this),
                            modalShowError: o().bind(this.showError, this),
                            onload: function() {
                                t.trigger("modal:loaded").trigger("modal:centrify"),
                                t.on("click", ".thread_letter__contacts a, .mail_thread__linked_lead a", (function(t) {
                                    t.preventDefault(),
                                    e = window.location.pathname,
                                    i = u(t.currentTarget).attr("href"),
                                    n.thread_modal.destroy(),
                                    e !== i && (APP.router.navigate(i, {
                                        trigger: !0
                                    }),
                                    n._$document.trigger("page:show:overlay"),
                                    u("#card_change_loader").trigger("overlay:show"))
                                }
                                ))
                            }
                        })
                    },
                    destroy: function() {
                        u("#card_change_loader").trigger("overlay:hide"),
                        n.thread_modal.threadView.destroy()
                    }
                }),
                !1
            }
        });
        var _ = "../build/transpiled/interface/notes/views/types/mail";
        window.define(_, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([_])
    }
    ,
    614102: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = i(871082)
          , o = i.n(n)
          , s = i(495707);
        const a = o().Collection.extend({
            model: s.default
        });
        var r = "../build/transpiled/interface/todos/collection";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    980528: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => p
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(312309)
          , l = i(988050)
          , d = i(179013)
          , c = i(391753);
        o()(document).ajaxComplete((function(t, e) {
            e.getResponseHeader("X-Core-Server") && e.getResponseHeader("X-Core-Tasks") && c.default.updateItemCounter({
                entity: "todo",
                count: e.getResponseHeader("X-Core-Tasks")
            })
        }
        ));
        var u = function(t) {
            this.view = t,
            this.sync = new d.default,
            t.$el.on("click".concat(this.ns), ".js-list-caption-link", (function() {
                var e = o()(this)
                  , i = (0,
                r.getQueryString)()
                  , n = e.attr("data-calendar-view")
                  , s = (n || "").replace("agenda", "").toLowerCase();
                return t.$el.find(".list__top__preset .list-top-nav__text-button_active").not(this).removeClass("list-top-nav__text-button_active"),
                e.addClass("list-top-nav__text-button_active"),
                t.$calendar && t.$calendar.length && n ? (t.search.filter.setUrl("/todo/calendar/".concat(s, "/")),
                t.search.filter.$(".filter__list__item a").each((function() {
                    o()(this).attr("href", o()(this).attr("href").replace(/\/todo\/calendar\/(\w+)\//, "/todo/calendar/".concat(s, "/")))
                }
                )),
                (0,
                l.set)({
                    name: "LAST_PLACE_TODO",
                    value: "calendar/".concat(s)
                }),
                APP.router.navigate(e.attr("href") + (i ? "?".concat(i) : ""), {
                    trigger: !1,
                    replace: !1
                }),
                t.$calendar.fullCalendar("changeView", n)) : APP.router.navigate(e.attr("href") + (i ? "?".concat(i) : ""), {
                    trigger: !0
                }),
                !1
            }
            )).on("click".concat(this.ns), ".js-modal-custom-types", (function() {
                i.e(41616).then(i.bind(i, 541616)).then((function(t) {
                    new (0,
                    t.default)
                }
                ))
            }
            )).on("click".concat(this.ns), ".js-todos-sync:not(.js-disabled)", a().bind((function() {
                this.sync.showModal()
            }
            ), this)),
            "#sync_calendars" === window.location.hash && this.sync.showModal()
        };
        u.prototype.ns = ".todos:page:common",
        u.prototype.destroy = function() {
            this.view && this.view.$el.off(this.ns),
            this.sync && this.sync.destroy()
        }
        ;
        const p = u;
        var _ = "../build/transpiled/interface/todos/common";
        window.define(_, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([_])
    }
    ,
    221244: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            prepare: () => o
        });
        var n = i(312309);
        function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = n.QStoJSON(t);
            return e.filter_date_from && e.filter_date_to && !e.filter_date_switch ? n.setQueryParam({
                filter_date_switch: "created"
            }, {
                only_query_string: !0,
                query_string: t
            }).substr(1) : t
        }
        var s = "../build/transpiled/interface/todos/helpers/filter_prepare";
        window.define(s, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([s])
    }
    ,
    45761: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => r
        });
        var n = i(460159)
          , o = i.n(n)
          , s = i(521466)
          , a = i(495707);
        const r = s.default.extend({
            model: a.default,
            className: "todo-line__item    js-hs-prevent js-pipeline-sortable ui-sortable-handle",
            initialize: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return s.default.prototype.initialize.call(this),
                this.options = t,
                this
            },
            render: function(t) {
                var e, i = this.model.get("id");
                return e = "expire" === t ? "todo-line__item todo-line__item_expired js-hs-prevent js-pipeline-sortable ui-sortable-handle" : "today" === t ? "todo-line__item js-hs-prevent js-pipeline-sortable ui-sortable-handle" : "complete" === t ? "todo-line__item todo-line__item_transparent todo-line__item_complete js-hs-prevent" : "todo-line__item todo-line__item_transparent js-hs-prevent js-pipeline-sortable ui-sortable-handle",
                this.$el.attr({
                    id: i,
                    "data-id": i.replace("id_", ""),
                    class: "".concat(e, " animated zoomIn")
                }),
                this.$el.html(o()({
                    ref: "/tmpl/todo/line/item_tmpl.twig"
                }).render({
                    row: {
                        ID: t
                    },
                    item: this.model.toJSON(),
                    tile_config: APP.constant("tile_config"),
                    can_edit: this.model.get("can_edit")
                })),
                this._dropElemCache(),
                this
            }
        });
        var l = "../build/transpiled/interface/todos/item";
        window.define(l, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([l])
    }
    ,
    428645: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => f
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(161320)
          , a = i.n(s)
          , r = i(128508)
          , l = i(886965)
          , d = i(880774)
          , c = i(869445)
          , u = i(661533)
          , p = [7, 8, 51, 53]
          , _ = [70, 14, 72, 73, 50, 57]
          , h = [25];
        const f = {
            events: {
                "click .context-menu__item-autoupdate": "_onAUTogglerClick"
            },
            destroy: function() {
                this._manageAUSubscription("unsubscribe"),
                this._auto_update_ws_state && this._auto_update_ws_state.unsubscribe(),
                this._$document.off("filter:deserialize:callback.todo-au-filter")
            },
            bindExistingItems: function() {
                this._auto_update_enabled = !1,
                this._auto_update_entity = (0,
                l.convertElementType)(APP.element_types[APP.getBaseEntity()], "single"),
                this.todoline_auto_update && (this._$document.on("filter:deserialize:callback.todo-au-filter", o().bind((function() {
                    this._auto_update_enabled = !this.search.filter._getOptionsCount({
                        exclude_entity_defaults: !0
                    }),
                    this._auto_update_ws_state = c.default.status.subscribe(o().bind((function(t) {
                        t.state === WebSocket.OPEN && (this._auto_update && this._manageAUSubscription("unsubscribe"),
                        this._manageAUSubscription("subscribe"))
                    }
                    ), this))
                }
                ), this)),
                this.listenTo(this._items, "remove:by-socket"))
            },
            _onAUTogglerClick: function() {
                var t = this.$(".context-menu__item-autoupdate[data-checkable-checked]").length;
                u.ajax({
                    url: "/ajax/v2/tasks/pipeline/settings/auto_update",
                    data: {
                        enable: t ? 0 : 1
                    }
                }).done(o().bind((function() {
                    this._$document.trigger("page:reload")
                }
                ), this))
            },
            _manageAUSubscription: function(t) {
                var e = [this._auto_update_entity, "events"].join(":");
                this._auto_update_enabled && (c.default.send([{
                    method: t,
                    params: {
                        channel: e
                    }
                }]),
                "subscribe" === t ? this._auto_update = c.default.subscribe(e).pipe(r.filter((function(t) {
                    return t.body && t.body.payload && t.body.channel === e
                }
                )), r.map((function(t) {
                    return t.body.payload
                }
                ))).subscribe(o().bind(this._handleAUMessage, this), o().bind(this._manageAUSubscription, this, "subscribe")) : this._auto_update && (this._auto_update.unsubscribe(),
                this._auto_update = null))
            },
            _getLinkedEntityName: function(t) {
                return "leads" === t.entity ? (0,
                d.leadName)(t.name, t.id) : "customers" === t.entity ? (0,
                d.customerName)(t.name, t.id) : t.name
            },
            _mutateAUPayloadToModel: function(t) {
                var e;
                return e = o().isEmpty(t.type_name) && 1 === t.type ? (0,
                d.i18n)("TODO_FOLLOW_UP") : o().isEmpty(t.type_name) && 2 === t.type ? (0,
                d.i18n)("TASKS_LIST_MEETING") : t.type_name,
                o().extend({
                    period: this._periodSet(t.date),
                    complate: t.completed,
                    completable: t.completable,
                    dashboard: t.dashboard,
                    date: t.date,
                    duration: t.duration || 0,
                    duration_words: t.duration_words,
                    deletable: t.deletable,
                    editable: t.editable,
                    event_type: t.event_type,
                    expired: t.expired,
                    icon_color: t.icon_color,
                    icon_id: t.icon_id,
                    id: t.id,
                    task: {
                        id: t.id
                    },
                    linked: o().isEmpty(t.linked) ? [] : {
                        company: o().isEmpty(t.linked.company) ? "" : {
                            id: t.linked.company.id,
                            name: t.linked.company.name,
                            uri: t.linked.company.uri
                        },
                        entity: t.linked.entity,
                        id: t.linked.id,
                        mainContact: o().isEmpty(t.linked.mainContact) ? "" : {
                            id: t.linked.mainContact.id,
                            name: t.linked.mainContact.name,
                            uri: t.linked.mainContact.uri
                        },
                        name: this._getLinkedEntityName(t.linked),
                        status_color: o().isEmpty(t.linked.status_color) ? "" : t.linked.status_color,
                        status_name: o().isEmpty(t.linked.status_name) ? "" : t.linked.status_name,
                        uri: t.linked.uri
                    },
                    manager: {
                        created_by: {
                            id: t.manager.created_by.id,
                            name: 0 === t.manager.created_by.id ? (0,
                            d.i18n)("Bot") : t.manager.created_by.name
                        },
                        main_user: {
                            id: t.manager.main_user.id,
                            name: t.manager.main_user.name
                        }
                    },
                    text: o().isEmpty(t.text) ? "" : t.text,
                    type: t.type,
                    type_name: e,
                    user: {
                        id: t.user.id,
                        name: t.user.name
                    }
                })
            },
            _checkUpdateCounts: function(t, e) {
                var i = 0;
                if (o().each(this.$el.find(".pipeline_cell-group-this_week,.pipeline_cell-group-next_week,.pipeline_cell-group-this_month,.pipeline_cell-group-future").find(".block-counter"), (function(t) {
                    i += parseInt(u(t).data("count"))
                }
                )),
                0 === this.counts[e])
                    switch (e) {
                    case "today":
                    case "tomorrow":
                        return;
                    default:
                        i < 1 && t.addClass("hidden"),
                        this.$el.find(".pipeline_cell-group-".concat(e)).addClass("hidden")
                    }
            },
            updateEvent: function(t, e, i) {
                var n, s = this.$el.find(".pipeline_cell-four-column"), a = this.$el.find(".pipeline_cell-group-".concat(n, " .block-counter"));
                return !!e.completed || (o().each(this.period_items, (function(t, e) {
                    t[i] && (n = e)
                }
                )),
                !!n && (a.attr("data-count") && (this.counts[n] = --this.counts[n],
                a.attr("data-count", this.counts[n]).text((0,
                d.numeralWord)(this.counts[n], (0,
                d.i18n)("to-do,to-dos"), !0))),
                this.$el.find("#".concat(e.id)).addClass("animated zoomOut"),
                this.$el.find("#".concat(e.id)).remove(),
                a.attr("data-count") && this._checkUpdateCounts(t, n),
                delete this.period_items[n][i],
                o().keys(this.period_items[n]).length || (delete this.period_items[n],
                this.checkShowedColumn()),
                void (s.find(".pipeline_cell:not(.hidden)").length || s.addClass("hidden"))))
            },
            checkShowedColumn: function() {
                var t = o().filter(this.$el.find(".pipeline_wrapper>.pipeline_cell:not(.pipeline_cell-four-column)"), (function(t) {
                    return !u(t).hasClass("hidden")
                }
                ))
                  , e = this.$el.find(".pipeline_cell-four-column");
                t.length < 3 && e.before(e.find(".pipeline_cell:first"))
            },
            appendTask: function(t, e, i) {
                var n, s = APP.system.format.date.date + APP.system.format.date.time, r = this.$el.find(".pipeline_items__list[data-id=".concat(i, "]")), l = o().find(t, (function(t) {
                    var i = t.date;
                    return o().isNumber(i) || (i = a()(i, s).format("X")),
                    i > e.date
                }
                ), this);
                return l && (n = r.find("#".concat(l.id))),
                n
            },
            _handleAUMessage: function(t) {
                var e, i, n, s = this._mutateAUPayloadToModel(t), a = this._periodSet(t.date), r = this.$el.find(".pipeline_items__list[data-id=".concat(a, "]")), l = this.$el.find(".pipeline_cell-group-".concat(a)), c = this.$el.find(".pipeline_cell-four-column"), u = this.$el.find(".pipeline_cell-group-".concat(a, " .block-counter")), f = t.event_type, m = t.id.replace("id", "");
                if (o().contains(p, f) || o().contains(h, f))
                    return u.attr("data-count") && (this.counts[a] = --this.counts[a],
                    u.attr("data-count", this.counts[a]).text((0,
                    d.numeralWord)(this.counts[a], (0,
                    d.i18n)("to-do,to-dos"), !0))),
                    void (0 !== this.$el.find("#".concat(t.id)).length && (delete this.period_items[a][m],
                    o().keys(this.period_items[a]).length || (delete this.period_items[a],
                    this.checkShowedColumn()),
                    this.$el.find("#".concat(t.id)).addClass("animated zoomOut"),
                    this.$el.find("#".concat(t.id)).remove(),
                    u.attr("data-count") && this._checkUpdateCounts(c, a)));
                if (!(o().contains(_, f) && this.updateEvent(c, t, m) || 0 === r.length)) {
                    o().isEmpty(this.period_items[a]) ? (this.period_items[a] = {},
                    this.period_items[a][s.id.slice(2)] = s,
                    n = this.$el.find(".pipeline_items__list[data-id=".concat(a, "]"))) : (e = this.appendTask(this.period_items[a], t, a),
                    this.period_items[a][s.id.slice(2)] = s,
                    e || (e = r.find(".todo-line__item").last(),
                    i = !0)),
                    this._items.add(s, {
                        merge: !0
                    }),
                    this.existed_items[s.id.slice(2)] = s;
                    var g = this._startComponent("todolineitemmodel", {}, o().extend(s, {
                        tile_config: this.tile_config
                    }), {
                        merge: !0
                    });
                    (o().isNaN(this.counts[a]) || o().isUndefined(this.counts[a])) && (this.counts[a] = 0),
                    0 === this.counts[a] && this.showColumn(l, a),
                    this.counts[a] = ++this.counts[a],
                    0 !== this.counts[a] && o().contains(["this_week", "next_week", "this_month"], a) && c.removeClass("hidden"),
                    o().isEmpty(e) ? (n.html(g.el),
                    this._elemCountInside(u, a, l)) : (i ? e.after(g.el) : e.before(g.el),
                    this._elemCountInside(u, a, l)),
                    g.render(a),
                    o().delay((function() {
                        g.el.classList.remove("animated", "zoomIn")
                    }
                    ), 300)
                }
            },
            _elemCountInside: function(t, e, i) {
                t.attr("data-count") && (t.attr("data-count", this.counts[e]).text((0,
                d.numeralWord)(this.counts[e], (0,
                d.i18n)("to-do,to-dos"), !0)),
                i.removeClass("hidden"))
            },
            showColumn: function(t, e) {
                var i = o().filter(this.$el.find(".pipeline_wrapper>.pipeline_cell:not(.pipeline_cell-four-column)"), (function(t) {
                    return !u(t).hasClass("hidden")
                }
                ))
                  , n = this.$el.find(".pipeline_cell-four-column");
                i.length > 2 ? (n.removeClass("hidden"),
                "expire" === e && n.prepend(u(i[2]))) : o().contains(["tomorrow", "this_week", "next_week", "this_month", "future"], e) && (n.before(t),
                n.find(".pipeline_cell:not(.hidden)").length || n.addClass("hidden"))
            },
            _periodSet: function(t) {
                var e = a().unix(t).format();
                return e < a()().format() ? "expire" : e >= a()().format() && e <= a()().endOf("day").format() ? "today" : e >= a()().add(1, "day").startOf("day").format() && e <= a()().add(1, "day").endOf("day").format() ? "tomorrow" : e >= a()().add(2, "days").startOf("day").format() && e <= a()().endOf("week").format() ? "this_week" : e >= a()().add(1, "week").day(1).startOf("day").format() && e <= a()().add(1, "week").endOf("week").format() ? "next_week" : e >= a()().startOf("month").format() && e <= a()().endOf("month").format() ? "this_month" : e >= a()().add(1, "month").day(1).startOf("month").format() ? "future" : void 0
            }
        };
        var m = "../build/transpiled/interface/todos/mixins/auto_update";
        window.define(m, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([m])
    }
    ,
    773298: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => d
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(460159)
          , a = i.n(s)
          , r = i(312309);
        function l(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        const d = {
            destruct: function() {
                this.count_xhr && (this.count_xhr.abort(),
                this.count_xhr = null)
            },
            initSummary: function() {
                var t = this
                  , e = {
                    summary_todos: 0
                }
                  , i = (0,
                r.getQueryString)();
                this.count_xhr = o().ajax({
                    url: "".concat(this.urls.count).concat(i ? "&" + i : ""),
                    type: "GET"
                }).success((function(i) {
                    if (e.summary_todos = i.count,
                    t._renderHeaderCount)
                        return t._renderHeaderCount(i.count_by_periods),
                        void t._elem("list_top_search_summary").html(a()({
                            ref: "/tmpl/search_summary/todo/index.twig"
                        }).render({
                            summary: e
                        }));
                    t.search_summary = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {}
                              , n = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(i, t).enumerable
                            }
                            )))),
                            n.forEach((function(e) {
                                l(t, e, i[e])
                            }
                            ))
                        }
                        return t
                    }({
                        template: "todo"
                    }, e),
                    t._initPagination(i.count),
                    t.search.$el.find("#list-top-search__summary").html(a()({
                        ref: "/tmpl/search_summary/todo/index.twig"
                    }).render({
                        summary: e
                    }))
                }
                ))
            }
        };
        var c = "../build/transpiled/interface/todos/mixins/init_summary";
        window.define(c, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([c])
    }
    ,
    965479: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => u
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(880774)
          , c = i(889378);
        const u = i(77778).default.extend({
            _template: "/tmpl/todo/line/tile_settings.twig",
            _fieldPositions: ["position_1", "position_2", "position_3", "position_4", "position_5", "position_6", "position_7", "position_8", "position_9"],
            _requiredPosition: "position_4",
            _getUrl: function() {
                return "/ajax/v2/tasks/pipeline/settings"
            },
            _setOptions: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var n = c.default.prototype._setOptions.apply(this, e);
                return this.options = a().extend({}, this.options, {
                    init: a().bind(this._onInit, this),
                    class_name: "modal-list tile-settings tile-settings-todo",
                    preload_templates: this._template
                }),
                n
            },
            _onInit: function(t) {
                this._selected_positions = [],
                this._loadTileSettings().then(a().bind((function() {
                    t.append(l()({
                        ref: this._template
                    }).render({
                        fields: this._getRenderParams(),
                        apply_for_all: this._settings.tile.apply_for_all
                    })),
                    this.onModalCentrify()
                }
                ), this))
            },
            _setDefaults: function() {
                var t = {}
                  , e = [APP.element_types.todo, APP.element_types.leads, APP.element_types.contacts, APP.element_types.companies, APP.element_types.customers]
                  , i = {
                    todo: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Task"),
                        disabled: !0
                    }, {
                        id: "4__type_name",
                        option: (0,
                        d.i18n)("Task type")
                    }, {
                        id: "4__manager",
                        option: (0,
                        d.i18n)("Response")
                    }, {
                        id: "4__date",
                        option: (0,
                        d.i18n)("Date")
                    }, {
                        id: "4__text",
                        option: (0,
                        d.i18n)("Text")
                    }],
                    leads: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Lead"),
                        disabled: !0
                    }, {
                        id: "2__name",
                        option: (0,
                        d.i18n)("Lead title")
                    }, {
                        id: "2__status_name",
                        option: [(0,
                        d.i18n)("Lead"), (0,
                        d.i18n)("Status")].join(": ")
                    }],
                    contacts: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Contact"),
                        disabled: !0
                    }, {
                        id: "1__name",
                        option: [(0,
                        d.i18n)("Contact"), (0,
                        d.i18n)("First name")].join(": ")
                    }],
                    companies: [{
                        id: "0",
                        option: (0,
                        d.i18n)("Company"),
                        disabled: !0
                    }, {
                        id: "3__name",
                        option: [(0,
                        d.i18n)("Company"), (0,
                        d.i18n)("Name")].join(": ")
                    }]
                }
                  , n = [{
                    id: "-1",
                    option: (0,
                    d.i18n)("No value")
                }];
                return a().extend(t),
                a().each(t, (function(t) {
                    a().each(t.ELEMENT_TYPES, (function(n) {
                        a().contains(e.indexOf(n)) && i[a().findKey(APP.element_types, (function(t) {
                            return t == n
                        }
                        ))].push({
                            id: "".concat(n, "__").concat(t.ID),
                            option: 2 == n ? t.NAME : [(0,
                            d.i18n)(1 == n ? "Contact" : "Company"), t.NAME].join(": ")
                        })
                    }
                    ), this)
                }
                ), this),
                a().union(n, i.todo, i.leads, i.companies, i.contacts)
            },
            _saveTileSettings: function() {
                var t = {};
                return (t = {
                    settings: {
                        tile: this._settings.tile
                    }
                }).settings.tile.positions = a().mapObject(t.settings.tile.positions, (function(t) {
                    return -1 == t.entity_type ? [] : t
                }
                )),
                o().ajax({
                    url: "/ajax/v2/tasks/pipeline/settings",
                    type: "POST",
                    data: JSON.stringify(t),
                    dataType: "json"
                })
            }
        });
        var p = "../build/transpiled/interface/todos/tile_modal";
        window.define(p, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([p])
    }
    ,
    572779: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            createNewTags: () => p,
            deleteTags: () => _,
            getAccountSettings: () => m,
            getFullTagsList: () => c,
            getTagName: () => y,
            getTagsById: () => u,
            getTagsList: () => v,
            getTagsListUrl: () => b,
            setAccountSettings: () => g,
            setTagColor: () => f,
            setTags: () => h
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(567952)
          , a = i.n(s)
          , r = i(863055)
          , l = i(661533)
          , d = {
            name_keys: ["raw_title", "name", "label", "title"],
            getTagName: function(t) {
                var e;
                return t = t || {},
                o()(d.name_keys).each((function(i) {
                    o().isUndefined(t[i]) || (e = t[i])
                }
                )),
                e
            },
            getTagsList: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise((function(e) {
                    l.ajax({
                        url: (0,
                        r.getTagsListUrl)(a()(t)),
                        type: "GET",
                        dataType: "json"
                    }).done((function(t) {
                        e(d.parseResponse(t))
                    }
                    )).fail((function() {
                        e(d.parseResponse())
                    }
                    ))
                }
                ))
            },
            getTagsListUrl: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = (0,
                r.parseEntity)(t.entity)
                  , i = o().isEmpty(t.qs_params) ? "" : "/?".concat(l.param(t.qs_params));
                return ("leads" === e ? "/ajax/v3/leads".concat(t.pipeline_id ? "/pipeline/".concat(t.pipeline_id) : "", "/tags") : "/ajax/v3".concat(e ? "/".concat(e) : "", "/tags")) + i
            },
            getDeleteUrl: function(t) {
                var e, i;
                return 1 === t.length ? e = o()(t).first().id : (i = {
                    filter: {
                        id: o()(t).pluck("id")
                    }
                },
                e = "?".concat(l.param(i))),
                "/ajax/v3/tags/".concat(e)
            },
            parseResponse: function(t) {
                return o().isEmpty(t) ? {
                    total: 0,
                    items: []
                } : {
                    total: t.total,
                    items: o().map(t._embedded.items, (function(t) {
                        return {
                            id: t.id,
                            name: t.name,
                            frequency: t.total || 0,
                            color: t.color
                        }
                    }
                    ))
                }
            },
            parseEntity: function(t) {
                switch (t) {
                case "amoforms":
                case "mailparser":
                    return "leads";
                case "stats":
                    switch (window.location.pathname) {
                    case "/stats/consolidated/":
                        return "leads";
                    case "/stats/consolidated/contacts/":
                        return "contacts"
                    }
                    break;
                case "salesbot-designer":
                case "chat_send":
                    return "";
                case "import":
                case "digital_pipeline":
                    return APP.getBaseEntity();
                default:
                    return t
                }
            }
        };
        function c(t) {
            return t = o().extend(t || {}, {
                qs_params: {
                    limit: -1
                }
            }),
            d.getTagsList(t)
        }
        function u(t) {
            return t.length ? l.ajax({
                url: "/ajax/v3/tags/",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
                data: l.param({
                    filter: {
                        id: t
                    }
                })
            }) : l.Deferred().reject({
                error: "No tag ids provided!"
            })
        }
        function p(t, e) {
            return t.length ? (e = (0,
            r.parseEntity)(e),
            l.ajax({
                url: e ? "/ajax/v3/%s/tags/".replace("%s", e) : "/ajax/v3/tags/",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(o().map(t, (function(t) {
                    return {
                        name: t
                    }
                }
                )))
            }).then(d.parseResponse)) : l.Deferred().reject({
                error: "No tag names provided!"
            })
        }
        function _(t) {
            return t.length ? l.ajax({
                url: d.getDeleteUrl(t),
                type: "DELETE",
                dataType: "json"
            }) : l.Deferred().reject({
                error: "No tags provided!"
            })
        }
        function h(t) {
            return o().isEmpty(t) ? l.Deferred().reject({
                error: "No options provided!"
            }) : l.ajax({
                url: "/ajax/v3/".concat((0,
                r.parseEntity)(t.entity)),
                type: "PATCH",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(o().map(t.ids, (function(e) {
                    return {
                        id: e,
                        tags: o().map(t.tags, (function(e) {
                            return {
                                id: e.id || 0,
                                name: d.getTagName(e),
                                deleted: !!e.deleted,
                                old_pipeline_id: t.old_pipeline_id || !1
                            }
                        }
                        ))
                    }
                }
                )))
            })
        }
        function f(t) {
            return o().isEmpty(t) ? l.Deferred().reject({
                error: "No options provided!"
            }) : l.ajax({
                url: "/ajax/v4/".concat((0,
                r.parseEntity)(t.entity), "/tags/").concat(t.id),
                type: "PATCH",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    color: t.color
                })
            })
        }
        function m() {
            return l.ajax({
                url: "/ajax/v3/accounts/".concat((APP.constant("account") || {}).id),
                type: "GET",
                dataType: "json"
            })
        }
        function g(t) {
            return t ? l.ajax({
                url: "/ajax/v3/accounts/".concat((APP.constant("account") || {}).id),
                type: "PATCH",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(t)
            }) : l.Deferred().reject({
                error: "No options provided!"
            })
        }
        var v = d.getTagsList
          , y = d.getTagName
          , b = d.getTagsListUrl
          , k = "../build/transpiled/network/tags/api";
        window.define(k, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([k])
    }
    ,
    974183: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => R
        });
        var n = i(661533)
          , o = i.n(n)
          , s = i(55188)
          , a = i.n(s)
          , r = i(460159)
          , l = i.n(r)
          , d = i(162262)
          , c = i.n(d)
          , u = i(161320)
          , p = i.n(u)
          , _ = i(312309)
          , h = i(880774)
          , f = i(678640)
          , m = i(896406)
          , g = i(803904)
          , v = i(300432)
          , y = i(77305)
          , b = i(186467)
          , k = i(19534)
          , w = i(942532)
          , E = i(980528)
          , x = i(803110)
          , P = i(965479)
          , C = i(614102)
          , A = i(45761)
          , T = i(221244)
          , S = i(930092)
          , I = i(428645)
          , O = i(773298);
        function j(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        i(850624);
        var D = {}
          , M = m.default.extend({
            endpoint: "/ajax/todo/line/",
            template: "/tmpl/todo/line/page.twig",
            preload: ["/tmpl/todo/line/item_in.twig", "/tmpl/search_summary/todo/index.twig", "stylesheets/_chunks/pipeline.css", "stylesheets/_chunks/todos.css"],
            urls: {
                count: "/ajax/todo/line?only_count=Y&with_periods=Y"
            },
            _selectors: function() {
                return {
                    pipeline: "#pipeline_holder",
                    manage: "#pipeline_manage",
                    sidebar: "#sidebar",
                    three_cols: ".pipeline_wrapper > .pipeline_status",
                    load_more: ".todo-line__load-more",
                    list_top_search_summary: "#list-top-search__summary"
                }
            },
            events: a().extend({}, m.default.prototype.events || {}, {
                "click #todo_add_btn:not(.js-disabled)": "addClick",
                "click .todo-line__load-more": "loadMoreClick",
                "click .todo-line__item": "todoClick",
                "click .js-list-settings": "showTileView"
            }),
            components: function() {
                return a().chain(this._components).reject((function(t) {
                    return t.defer_init
                }
                )).map((function(t) {
                    if (!a().isFunction(t.params))
                        throw new Error("Component params not defined!");
                    return [t.class, t.params.call(this)]
                }
                ), this).value()
            },
            construct: function(t) {
                this.params = t || {},
                (0,
                f.hasKeys)(this.params, ["response", "tile_config"]) && APP.constant("tile_config", this.params.response.tile_config),
                this.tile_config = APP.constant("tile_config"),
                this.search = this._startComponent("search"),
                this.filter_pipelines = APP.constant("filter_pipelines") || t.response.filter.pipelines,
                this.init(),
                this.params.response ? (this.todoline_auto_update = this.params.response.todoline_auto_update,
                this.period_items = this.params.response.items,
                this.counts = this.params.response.count_by_periods) : (this.todoline_auto_update = APP.constant("todoline_auto_update"),
                this.period_items = APP.constant("existed_items"),
                this.counts = APP.constant("count_by_periods")),
                c().mixin(this, O.default),
                this.initSummary(),
                this.bindExistingItems(this.period_items)
            },
            destruct: function() {
                APP.constant("tile_config", null),
                D = {},
                this._$document.off("page:changed".concat(this.ns))
            },
            init: function() {
                var t = this;
                this.params.response ? this.existed_items = this.params.response.items : this.existed_items = APP.constant("existed_items"),
                this.period_items = this.existed_items,
                this.existed_items = a().reduce(this.existed_items, (function(t, e) {
                    return a().extend(t, e)
                }
                ), {}),
                this.pipeline = this._addComponent(b.default, {
                    el: this.$el,
                    containment: !1,
                    hs_options: {
                        static_width: !0,
                        hide_scrollbar: !0,
                        no_boundary: !0,
                        fixed_header_options: {
                            head_cell_info_selector: ".js-fixed-header-stats",
                            scroll_offset: 65,
                            entity: "todos",
                            visible_items_amount: 4
                        }
                    },
                    manage: {
                        el: this._elem("manage"),
                        drop: function(e) {
                            var i = e.draggable.closest(".js-pipeline-row").data("id")
                              , n = o()(this).data("status-id")
                              , s = e.draggable.attr("id").split("_")[1]
                              , a = e.draggable;
                            t.todoManage({
                                period_old: i,
                                period_new: n,
                                noteID: s,
                                uiItem: a,
                                remove: !0,
                                need_list_reload: !0
                            })
                        }
                    },
                    appendTo: this.$el,
                    change: function(e, i) {
                        var n = i.item_old.data("id")
                          , o = i.item_new.data("id")
                          , s = e.item.attr("id").split("_")[1]
                          , a = e.item;
                        "completed" === o && i.item_new.prepend(a),
                        t.todoManage({
                            period_old: n,
                            period_new: o,
                            noteID: s,
                            uiItem: a,
                            remove: !1
                        })
                    },
                    immutable: function(t) {
                        t.item.removeAttr("style")
                    }
                }),
                this._$window.on("resize".concat(this.ns), a().debounce(a().bind(this.minHeight, this), 50)).triggerHandler("resize".concat(this.ns)),
                this._$document.one("page:changed".concat(this.ns), a().bind(this.checkShowTask, this))
            },
            checkShowTask: function() {
                var t = (0,
                _.getQueryParam)("task_setup");
                if (t) {
                    this.$el.find(".todo-line__item[data-id=".concat(t, "]")).trigger("click");
                    var e = (0,
                    _.removeQueryParam)(["task_setup"]);
                    APP.router.navigate(window.location.pathname + (e ? "?".concat(e) : ""), {
                        trigger: !1,
                        replace: !0
                    })
                }
            },
            _components: [{
                name: "autoload",
                class: v.default,
                params: function() {
                    return {
                        onLoadMore: a().bind(this.onLoadMore, this)
                    }
                }
            }, {
                name: "todoscommon",
                class: E.default,
                params: function(t, e, i) {
                    return a().extend({
                        $el: this.$el,
                        $page_holder: this.$el,
                        need_list_reload: !0,
                        model: this.itemsPush(a().extend(e), i || {})
                    }, t || {})
                }
            }, {
                name: "todolineitemmodel",
                class: A.default,
                params: function(t, e, i) {
                    return a().extend({
                        $el: this.$el,
                        $page_holder: this.$el,
                        model: this.itemsPush(e, i || {})
                    }, t || {})
                }
            }, {
                name: "search",
                class: g.default,
                defer_init: !0,
                params: function() {
                    return {
                        filter: {
                            el: this._elem("sidebar"),
                            is_list: !0,
                            is_clear: !0,
                            disabled_users: !1,
                            pipelines: this.filter_pipelines,
                            url: a().propertyOf(this)(["params", "response", "filter", "url"]) ? this.params.response.filter.url : "",
                            preset_filter: a().propertyOf(this)(["params", "response", "filter", "preset_filter"]) ? this.params.response.filter.preset_filter : ""
                        }
                    }
                }
            }],
            itemsPush: function(t, e) {
                return this._items.add(t, a().extend({
                    silent: !0
                }, e))
            },
            bindExistingItems: function(t) {
                var e = a().reduce(t, (function(t, e, i) {
                    return t.concat(a().map(e, (function(t) {
                        return a().extend(t, {
                            status: parseInt(i)
                        })
                    }
                    )))
                }
                ), []);
                this._items = new C.default,
                a().each(e, (function(t) {
                    this._startComponent("todolineitemmodel", {
                        el: document.getElementById(t.id)
                    }, a().extend(t, {
                        tile_config: this.tile_config
                    }))
                }
                ), this),
                this.listenTo(this._items)
            },
            _startComponent: function(t) {
                var e, i = a().findWhere(this._components, {
                    name: t
                }), n = Array.prototype.slice.call(arguments, 1);
                if (!a().isFunction(i.class))
                    throw new Error("Component is not a constructor!");
                return n.unshift(i),
                this._addComponent(i.class, this._getComponentParams.apply(this, function(t) {
                    if (Array.isArray(t))
                        return j(t)
                }(e = n) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return j(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name),
                        "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? j(t, e) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))
            },
            _getComponentParams: function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return a().isString(t) && (t = a().findWhere(this._components, {
                    name: t
                })),
                t && a().isFunction(t.params) ? t.params.apply(this, e) : {}
            },
            showTileView: function() {
                this.tileModal = this._addComponent(P.default)
            },
            addClick: function() {
                this._addComponent(k.default)
            },
            todoClick: function(t) {
                var e = o()(t.currentTarget).attr("data-id")
                  , i = this.existed_items["_".concat(e)]
                  , n = {};
                o()(t.target).closest("a").length || (i && i.linked && (i.linked.mainContact && "companies" !== i.linked.entity && (n.contacts = {},
                n.contacts[i.linked.mainContact.id] = i.linked.mainContact),
                i.linked.company && (n.companies = {},
                n.companies[i.linked.company.id] = i.linked.company),
                i.linked.id && (n[i.linked.entity] = {},
                n[i.linked.entity][i.linked.id] = {
                    id: i.linked.id,
                    name: i.linked.name
                })),
                this._addComponent(k.default, {
                    todo_id: e,
                    embedded: n,
                    todo_options: {
                        editable: i.editable,
                        deletable: i.deletable
                    }
                }))
            },
            loadMoreClick: function(t) {
                var e, i = o()(t.currentTarget), n = i.closest(".js-pipeline-row").attr("data-id"), s = APP.constant("user_rights"), r = s.leads && s.leads.change_status, d = this.$('.js-pipeline-row[data-id="'.concat(n, '"]')).children(), c = 0;
                if (i.hasClass("todo-line__load-more_loading"))
                    return !1;
                t.preventDefault(),
                i.addClass("todo-line__load-more_loading"),
                D[n] ? (c = 10 * D[n] + 1,
                D[n]++) : (D[n] = 2,
                c = 11),
                e = (e = c - d.length) < 0 ? 10 : e;
                var u = {
                    json: !0,
                    page: D[n],
                    ELEMENT_COUNT: 10,
                    period_id: n,
                    LOST_ELEMENTS: e
                };
                switch ("expired" !== n && (u.STATUS = 0),
                n) {
                case "expire":
                    u.filter = {
                        status: ["failed"]
                    };
                    break;
                case "today":
                    u.filter_date_from = p()().format("".concat(APP.system.format.date.date, " ").concat(APP.system.format.date.time)),
                    u.filter_date_to = "".concat(p()().format(APP.system.format.date.date), " 23:59:59");
                    break;
                case "tomorrow":
                    u.filter_date_from = "".concat(p()().add(1, "days").format(APP.system.format.date.date), " 00:00:00"),
                    u.filter_date_to = "".concat(p()().add(1, "days").format(APP.system.format.date.date), " 23:59:59");
                    break;
                case "this_week":
                    u.filter_date_from = "".concat(p()().add(2, "days").format(APP.system.format.date.date), " 00:00:00"),
                    u.filter_date_to = "".concat(p()().endOf("week").format(APP.system.format.date.date), " 23:59:59");
                    break;
                case "next_week":
                    u.filter_date_from = "".concat(p().max(p()().add(1, "week").startOf("week"), p()().add(2, "days").startOf("day")).format(APP.system.format.date.date), " 00:00:00"),
                    u.filter_date_to = "".concat(p()().add(1, "week").endOf("week").format(APP.system.format.date.date), " 23:59:59");
                    break;
                case "this_month":
                    u.filter_date_from = "".concat(p()().add(1, "week").endOf("week").format(APP.system.format.date.date), " 00:00:00"),
                    u.filter_date_to = "".concat(p()().endOf("month").format(APP.system.format.date.date), " 23:59:59");
                    break;
                case "future":
                    u.filter_date_from = "".concat(p()().endOf("month").add(1, "day").format(APP.system.format.date.date), " 00:00:00")
                }
                "created" === (0,
                _.getQueryParam)("filter_date_switch") && a().contains(["today", "tomorrow", "this_week", "next_week", "this_month", "future"], n) && (u.filter_date_from_create = (0,
                _.getQueryParam)("filter_date_from"),
                u.filter_date_to_create = (0,
                _.getQueryParam)("filter_date_to")),
                o().ajax({
                    url: "/ajax/todo/multiple/loadmore/?".concat((0,
                    _.getQueryString)()),
                    data: u,
                    type: "POST",
                    dataType: "json"
                }).done(a().bind((function(t) {
                    var e = t.response
                      , o = e.tile_config
                      , s = {};
                    this.existed_items = a().extend(this.existed_items, e.items),
                    (s = a().extend(this.period_items))[n] = a().extend(s[n], e.items),
                    this.period_items = a().extend(s),
                    this.bindExistingItems(this.period_items),
                    i.before(a().map(e.items, (function(t) {
                        return l()({
                            ref: "/tmpl/todo/line/item_in.twig"
                        }).render({
                            tile_config: o,
                            item: t,
                            row: {
                                ID: n
                            },
                            can_edit: r
                        })
                    }
                    )).join("")),
                    a().keys(e.items).length < 10 && (i.hide(),
                    1 === e.pagination.total) || (i.removeClass("todo-line__load-more_loading"),
                    this.pipeline.refresh())
                }
                ), this))
            },
            onLoadMore: function() {
                this._findElem("three_cols").find(this._selector("load_more")).click()
            },
            minHeight: function() {
                this._elem("pipeline").css("min-height", this._$window.height() - 110)
            },
            removeConfirm: function(t) {
                var e = this;
                this._confirm = new y.default({
                    class_name: "modal-list",
                    text: APP.lang.multiple_delete_invite,
                    accept: function() {
                        e.updateHeaderCount(t.period_old, -1),
                        this.requestStart().xhr = o().ajax({
                            url: "/ajax/todo/multiple/delete/",
                            type: "POST",
                            dataType: "json",
                            data: {
                                ACTION: "DELETE",
                                ID: [t.noteID]
                            }
                        }).done(a().bind((function(i) {
                            "success" === i.status ? (this.requestSuccess(),
                            t.uiItem.remove(),
                            e.$el.trigger("page:reload")) : (this.requestFail(),
                            e.pipelineSort.sortable("cancel"))
                        }
                        ), this))
                    },
                    destroy: function() {
                        t.uiItem.length && t.uiItem.removeClass("h-hidden").removeAttr("style")
                    }
                })
            },
            statusChange: function(t) {
                var e, i, n = this, s = "_".concat(t.noteID), r = APP.system.timezone, d = p()().tz(r), c = this.existed_items[s], u = p()(c.date, "X").tz(r), _ = u.format("H"), h = u.format("m"), f = function(t, e) {
                    return t.clone().hours(e ? "23" : _).minutes(e ? "59" : h)
                };
                switch (t.period_new) {
                case "completed":
                    return this.statusDone(t),
                    !1;
                case "today":
                    (e = f(d)) < d && (e = f(e, !0),
                    c.duration = 0);
                    break;
                case "tomorrow":
                    e = f(d.add(1, "days"));
                    break;
                case "after_tomorrow":
                case "this_week":
                    e = f(d.add(2, "days"));
                    break;
                case "this_month":
                    i = d._d.getMonth(),
                    e = f(d.add(2, "week").day(1)._d.getMonth() === i ? d : d.add(1, "months").date(0));
                    break;
                case "next_week":
                    e = f(d.add(1, "week").day(1));
                    break;
                case "next_month":
                case "future":
                    e = f(d.add(1, "month").startOf("month"))
                }
                return c.date = e.format("X"),
                c.expired = !1,
                this.updateHeaderCount(t.period_old, -1),
                this.updateHeaderCount(t.period_new, 1),
                o().ajax({
                    url: "/ajax/todo/multiple/edit/",
                    type: "POST",
                    dataType: "json",
                    data: {
                        task: {
                            body: c.text,
                            duration: c.duration,
                            date: e.format(APP.system.format.date.full),
                            main_user_id: c.manager.main_user.id,
                            elementtype: c.linked.element_type,
                            type: c.type
                        },
                        parties: {
                            id: c.linked.id,
                            entity: c.linked.entity
                        },
                        task_id: t.noteID
                    },
                    success: function() {
                        a().isString(t.period_new) && t.remove && t.uiItem.remove(),
                        t.need_list_reload && n._$document.trigger("list:reload"),
                        o().ajax({
                            url: "/ajax/todo/multiple/loadmore/?",
                            dataType: "json"
                        }).done(a().bind((function(e) {
                            var i = e.response.tile_config;
                            a().contains(["today", "tomorrow", "this_week", "next_week", "this_month", "future"], t.period_new) && (t.uiItem.replaceWith(l()({
                                ref: "/tmpl/todo/line/item_in.twig"
                            }).render({
                                tile_config: i,
                                item: n.existed_items[s],
                                row: {
                                    ID: t.period_new
                                }
                            })),
                            n.pipeline.refresh())
                        }
                        ), this))
                    }
                }),
                !0
            },
            filterPrepareAction: function(t) {
                return (0,
                T.prepare)(t)
            },
            updateHeaderCount: function(t, e) {
                var i, n, s = o()("#status_id_".concat(t)), a = s.find(".block-counter"), r = s.parent().next(".js-pipeline-row").children();
                a.attr("data-count") && (n = parseInt(a.attr("data-count")) + e,
                a.attr("data-count", n).text((0,
                h.numeralWord)(n, (0,
                h.i18n)("to-do,to-dos"), !0))),
                0 === r.length && (s.closest(".pipeline_cell").remove(),
                this.$('.js-pipeline-droppable[data-status-id="'.concat(t, '"]')).show()),
                1 === r.length && (i = r.get(0)).classList.contains("todo-line__load-more") && (o()(i).is(":hidden") ? (s.closest(".pipeline_cell").remove(),
                this.$('.js-pipeline-droppable[data-status-id="'.concat(t, '"]')).show()) : r.get(0).click())
            },
            statusDone: function(t) {
                o().ajax({
                    url: "/ajax/todo/multiple/close/",
                    type: "POST",
                    dataType: "json",
                    data: {
                        ID: [t.noteID]
                    }
                }).done(a().bind((function() {
                    t.uiItem.addClass("todo-line__item_complete todo-line__item_transparent").removeClass("h-hidden"),
                    t.uiItem.hasClass("todo-line__item_expired") && this.expiredDone(t),
                    new w.default({
                        id: t.noteID,
                        cancel: a().bind((function() {
                            this._$document.trigger("page:reload")
                        }
                        ), this)
                    })
                }
                ), this))
            },
            expiredDone: function(t) {
                var e = t.uiItem.clone().removeClass("todo-line__item_expired h-hidden")
                  , i = this.$('.pipeline_items__list[data-id="today"]');
                t.uiItem.remove(),
                i.append(e)
            },
            todoManage: function(t) {
                switch (t.period_new) {
                case "delete":
                    this.removeConfirm(t);
                    break;
                case "done":
                    this.statusDone(t),
                    t.uiItem.removeAttr("style");
                    break;
                default:
                    t.period_old !== t.period_new && "expire" !== t.period_new && (t.uiItem.removeClass("task-expired"),
                    this.statusChange(t)),
                    t.uiItem.removeAttr("style")
                }
            },
            _renderHeaderCount: function(t) {
                a().each(t, (function(t, e) {
                    o()("#status_id_".concat(e)).find(".block-counter").attr("data-count", t).text((0,
                    h.numeralWord)(t, (0,
                    h.i18n)("to-do,to-dos"), !0))
                }
                ))
            }
        });
        c().mixin(M, x.default, S.default, I.default);
        const R = M
    }
    ,
    23456: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            kommoLogAmplitude: () => s
        });
        var n = i(55188)
          , o = i.n(n)
          , s = function(t, e, i) {
            o().isFunction(window.logAmplitudeEvent) && window.logAmplitudeEvent(t, e, i)
        }
    }
    ,
    273218: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => C
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(827378)
          , a = i(292554)
          , r = i.n(a)
          , l = i(724329)
          , d = i(916569)
          , c = i(529062)
          , u = i(701106)
          , p = i(729153)
          , _ = i(880774)
          , h = i(369409)
          , f = i(500034)
          , m = i(189967)
          , g = i(226764)
          , v = i(422859)
          , y = i(532153)
          , b = i(827378);
        function k(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        var w = r().bind(y.default)
          , E = (0,
        h.getCDNPath)("/frontend/images/interface/i/")
          , x = function(t) {
            var e = t.variant
              , i = t.isRetina
              , n = void 0 !== i && i;
            return e === v.ErrorVariants.CONNECTION_PROBLEM ? g.default : "".concat(E, n ? "black_hole_2x.png" : "black_hole.png")
        }
          , P = function() {
            var t = "/leads/";
            switch (!0) {
            case (0,
            m.isImboxSection)():
                t = (0,
                f.isFeatureAvailable)("is_customization_for_global") ? "/chats/" : "/imbox/";
                break;
            case APP.isCard() && "leads" === APP.getBaseEntity():
            case "leads-pipeline" === APP.data.current_entity:
                t = "/leads/";
                break;
            case "mail" === APP.getBaseEntity():
                t = "/mail/inbox/"
            }
            return {
                handleClick: function() {
                    APP.router.navigate(t, {
                        replace: !0,
                        trigger: !0
                    })
                }
            }
        }().handleClick;
        const C = function(t) {
            var e = (0,
            s.useRef)(o().noop)
              , i = function() {
                p.default.check().fail((function() {
                    e.current()
                }
                )).done((function() {
                    return APP.router.reload()
                }
                ))
            }
              , n = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {}
                      , n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }
                    )))),
                    n.forEach((function(e) {
                        k(t, e, i[e])
                    }
                    ))
                }
                return t
            }({}, (0,
            l.useConst)((function() {
                var t;
                return k(t = {}, v.ErrorVariants.NO_ACCESS, {
                    title: (0,
                    _.i18n)("You can't view this page"),
                    text: "".concat((0,
                    _.i18n)("This content may have been deleted,"), "\n").concat((0,
                    _.i18n)("or you don’t have permission to view it.")),
                    buttonText: (0,
                    _.i18n)("Go back"),
                    onButtonClick: P
                }),
                k(t, v.ErrorVariants.CONNECTION_PROBLEM, {
                    title: "".concat((0,
                    _.i18n)("Can't connect to"), " ").concat((0,
                    _.i18n)("{{brand_name.without_article}}")),
                    text: (0,
                    _.i18n)("Please check your connection and try again."),
                    buttonText: (0,
                    _.i18n)("Refresh"),
                    onButtonClick: i
                }),
                t
            }
            ))[t.variant], t)
              , a = n.variant
              , r = n.title
              , h = n.text
              , f = n.buttonText
              , m = n.onButtonClick;
            return b.createElement("div", {
                className: w("wrapper")
            }, b.createElement("div", {
                className: w("content")
            }, b.createElement("div", {
                className: w("central-block")
            }, b.createElement("picture", {
                className: w("image-wrapper")
            }, b.createElement("img", {
                src: x({
                    variant: a
                }),
                alt: a.split("_").join(" "),
                srcSet: x({
                    variant: a,
                    isRetina: !0
                }),
                className: w("image")
            })), b.createElement("div", {
                className: w("text-block")
            }, b.createElement(u.default, {
                type: "h2",
                size: "xxl",
                className: w("title")
            }, r), b.createElement(d.Text, {
                theme: d.TextPrimaryTheme,
                className: w("description"),
                size: "l"
            }, h)), b.createElement(c.Button, {
                theme: c.ButtonNeutralTheme,
                onClick: function() {
                    m()
                },
                className: w("button"),
                showInvalidAnimationRef: e
            }, f))))
        }
    }
    ,
    226764: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => n
        });
        const n = "data:image/png;base64,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"
    }
    ,
    775813: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            ErrorMessage: () => n.default,
            ErrorVariants: () => o.ErrorVariants
        });
        var n = i(273218)
          , o = i(422859)
    }
    ,
    422859: (t, e, i) => {
        "use strict";
        var n;
        i.r(e),
        i.d(e, {
            ErrorVariants: () => n
        }),
        function(t) {
            t.NO_ACCESS = "no_access",
            t.CONNECTION_PROBLEM = "connection_problem"
        }(n || (n = {}))
    }
    ,
    339095: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => p
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(292554)
          , a = i.n(s)
          , r = i(491967)
          , l = i(880774)
          , d = i(597052)
          , c = i(827378)
          , u = a().bind(d.default);
        const p = function(t) {
            var e = t.onClick
              , i = void 0 === e ? o().noop : e
              , n = t.buttonContent
              , s = void 0 === n ? (0,
            l.i18n)("Sign in with Google") : n;
            return c.createElement("button", {
                onClick: i,
                className: u("button")
            }, c.createElement("div", {
                className: u("state")
            }), c.createElement("div", {
                className: u("content-wrapper")
            }, c.createElement(r.default, {
                type: "svg",
                name: "common--google-sm",
                className: u("icon")
            }), c.createElement("span", {
                className: u("contents")
            }, s)))
        }
    }
    ,
    669868: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            getFullTagsList: () => u
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(104737)
          , a = i(23713);
        function r(t, e, i, n, o, s, a) {
            try {
                var r = t[s](a)
                  , l = r.value
            } catch (t) {
                return void i(t)
            }
            r.done ? e(l) : Promise.resolve(l).then(n, o)
        }
        function l(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        var d, c, u = (d = function() {
            var t, e, i, n, r = arguments;
            return function(t, e) {
                var i, n, o, s, a = {
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
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                },
                "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }
                ),
                s;
                function r(s) {
                    return function(r) {
                        return function(s) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (i = 1,
                                    n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, s[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (s = [2 & s[0], o.value]),
                                    s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        n = s[1],
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            a.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && a.label < o[1]) {
                                            a.label = o[1],
                                            o = s;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                            a.ops.push(s);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    s = e.call(t, a)
                                } catch (t) {
                                    s = [6, t],
                                    n = 0
                                } finally {
                                    i = o = 0
                                }
                            if (5 & s[0])
                                throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, r])
                    }
                }
            }(this, (function(d) {
                switch (d.label) {
                case 0:
                    return c = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {}
                              , n = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(i, t).enumerable
                            }
                            )))),
                            n.forEach((function(e) {
                                l(t, e, i[e])
                            }
                            ))
                        }
                        return t
                    }({}, t = r.length > 0 && void 0 !== r[0] ? r[0] : {}),
                    u = null != (u = {
                        qsParams: {
                            limnit: -1
                        }
                    }) ? u : {},
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u)) : function(t, e) {
                        var i = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(t);
                            i.push.apply(i, n)
                        }
                        return i
                    }(Object(u)).forEach((function(t) {
                        Object.defineProperty(c, t, Object.getOwnPropertyDescriptor(u, t))
                    }
                    )),
                    t = c,
                    [4, s.default.request({
                        url: (0,
                        a.getTagsListUrl)(t)
                    })];
                case 1:
                    return e = d.sent(),
                    o().isEmpty(e) ? [2, {
                        total: 0,
                        items: []
                    }] : (i = e.total,
                    n = e.Embedded.items,
                    [2, {
                        total: i,
                        items: o().map(n, (function(t) {
                            var e = t.id
                              , i = t.name
                              , n = t.total;
                            return {
                                id: e,
                                name: i,
                                frequency: void 0 === n ? 0 : n,
                                color: t.color
                            }
                        }
                        ))
                    }])
                }
                var c, u
            }
            ))
        }
        ,
        c = function() {
            var t = this
              , e = arguments;
            return new Promise((function(i, n) {
                var o = d.apply(t, e);
                function s(t) {
                    r(o, i, n, s, a, "next", t)
                }
                function a(t) {
                    r(o, i, n, s, a, "throw", t)
                }
                s(void 0)
            }
            ))
        }
        ,
        function() {
            return c.apply(this, arguments)
        }
        )
    }
    ,
    810740: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            getFullTagsList: () => n.getFullTagsList
        });
        var n = i(669868)
    }
    ,
    585521: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            getTagsListUrl: () => r
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(968276)
          , a = i(661533)
          , r = function(t) {
            var e = t.entity
              , i = t.qsParams
              , n = void 0 === i ? {} : i
              , r = t.pipelineId
              , l = (0,
            s.parseEntity)(e)
              , d = o().isEmpty(n) ? "" : "/?".concat(a.param(n));
            return ("leads" === l ? "/ajax/v3/leads".concat(r ? "/pipeline/".concat(r) : "", "/tags") : "/ajax/v3".concat(l ? "/".concat(l) : "", "/tags")) + d
        }
    }
    ,
    61428: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            getTagsListUrl: () => n.getTagsListUrl
        });
        var n = i(585521)
    }
    ,
    23713: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            getTagsListUrl: () => n.getTagsListUrl,
            parseEntity: () => o.parseEntity
        });
        var n = i(61428)
          , o = i(968276)
    }
    ,
    968276: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            parseEntity: () => n
        });
        var n = function(t) {
            switch (t) {
            case "amoforms":
            case "mailparser":
                return "leads";
            case "stats":
                switch (window.location.pathname) {
                case "/stats/consolidated/":
                    return "leads";
                case "/stats/consolidated/contacts/":
                    return "contacts"
                }
                return t;
            case "salesbot-designer":
            case "chat_send":
                return "";
            case "import":
            case "digital_pipeline":
                return APP.getBaseEntity();
            default:
                return t
            }
        }
    }
    ,
    863055: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            getFullTagsList: () => n.getFullTagsList,
            getTagsListUrl: () => o.getTagsListUrl,
            parseEntity: () => o.parseEntity
        });
        var n = i(810740)
          , o = i(23713)
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
        t._sentryDebugIds[e] = "36db6da4-a1ae-4807-9de2-1eb1421a9da9",
        t._sentryDebugIdIdentifier = "sentry-dbid-36db6da4-a1ae-4807-9de2-1eb1421a9da9")
    } catch (t) {}
}();
//# sourceMappingURL=6058.e323cc04bd143e93aef2.js.map
