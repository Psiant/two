(window.webpackChunk = window.webpackChunk || []).push([[40182], {
    693671: function(e, t, n) {
        var i, o;
        i = [n(661533)],
        o = function(e) {
            return function(e) {
                var t, n, i;
                n = {
                    ESC: 27,
                    TAB: 9,
                    ENTER: 13,
                    CTRL: 17,
                    A: 65,
                    P: 80,
                    N: 78,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    BACKSPACE: 8,
                    SPACE: 32
                },
                t = {
                    beforeSave: function(e) {
                        return o.arrayToDefaultHash(e)
                    },
                    matcher: function(e, t, n, i) {
                        var o, r, s;
                        return e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
                        n && (e = "(?:^|\\s)" + e),
                        o = decodeURI("%C3%80"),
                        r = decodeURI("%C3%BF"),
                        (s = new RegExp(e + "([A-Za-z" + o + "-" + r + "0-9_" + (i ? " " : "") + "'.+-]*)$|" + e + "([^\\x00-\\xff]*)$","gi").exec(t)) ? s[2] || s[1] : null
                    },
                    filter: function(e, t, n) {
                        var i, o, r, s;
                        for (i = [],
                        o = 0,
                        s = t.length; o < s; o++)
                            r = t[o],
                            ~new String(r[n]).toLowerCase().indexOf(e.toLowerCase()) && i.push(r);
                        return i
                    },
                    remoteFilter: null,
                    sorter: function(e, t, n) {
                        var i, o, r, s;
                        if (!e)
                            return t;
                        for (i = [],
                        o = 0,
                        s = t.length; o < s; o++)
                            (r = t[o]).atwho_order = new String(r[n]).toLowerCase().indexOf(e.toLowerCase()),
                            r.atwho_order > -1 && i.push(r);
                        return i.sort((function(e, t) {
                            return e.atwho_order - t.atwho_order
                        }
                        ))
                    },
                    tplEval: function(e, t) {
                        var n;
                        n = e;
                        try {
                            return "string" != typeof e && (n = e(t)),
                            n.replace(/\$\{([^\}]*)\}/g, (function(e, n, i) {
                                return t[n]
                            }
                            ))
                        } catch (e) {
                            return ""
                        }
                    },
                    highlighter: function(e, t) {
                        var n;
                        return t ? (n = new RegExp(">\\s*([^<]*?)(" + t.replace("+", "\\+") + ")([^<]*)\\s*<","ig"),
                        e.replace(n, (function(e, t, n, i) {
                            return "> " + t + "<strong>" + n + "</strong>" + i + " <"
                        }
                        ))) : e
                    },
                    beforeInsert: function(e, t, n) {
                        return e
                    },
                    beforeReposition: function(e) {
                        return e
                    },
                    afterMatchFailed: function(e, t) {}
                },
                i = function() {
                    function t(t) {
                        this.currentFlag = null,
                        this.controllers = {},
                        this.aliasMaps = {},
                        this.$inputor = e(t),
                        this.setupRootElement(),
                        this.listen()
                    }
                    return t.prototype.createContainer = function(t) {
                        var n;
                        return null != (n = this.$el) && n.remove(),
                        e(t.body).append(this.$el = e("<div class='atwho-container'></div>"))
                    }
                    ,
                    t.prototype.setupRootElement = function(t, n) {
                        var i, o;
                        if (null == n && (n = !1),
                        t)
                            this.window = t.contentWindow,
                            this.document = t.contentDocument || this.window.document,
                            this.iframe = t;
                        else {
                            this.document = this.$inputor[0].ownerDocument,
                            this.window = this.document.defaultView || this.document.parentWindow;
                            try {
                                this.iframe = this.window.frameElement
                            } catch (o) {
                                if (i = o,
                                this.iframe = null,
                                e.fn.atwho.debug)
                                    throw new Error("iframe auto-discovery is failed.\nPlease use `setIframe` to set the target iframe manually.\n" + i)
                            }
                        }
                        return this.createContainer((this.iframeAsRoot = n) ? this.document : document)
                    }
                    ,
                    t.prototype.controller = function(e) {
                        var t, n, i, o;
                        if (this.aliasMaps[e])
                            n = this.controllers[this.aliasMaps[e]];
                        else
                            for (i in o = this.controllers)
                                if (t = o[i],
                                i === e) {
                                    n = t;
                                    break
                                }
                        return n || this.controllers[this.currentFlag]
                    }
                    ,
                    t.prototype.setContextFor = function(e) {
                        return this.currentFlag = e,
                        this
                    }
                    ,
                    t.prototype.reg = function(e, t) {
                        var n, i;
                        return i = (n = this.controllers)[e] || (n[e] = this.$inputor.is("[contentEditable]") ? new a(this,e) : new s(this,e)),
                        t.alias && (this.aliasMaps[t.alias] = e),
                        i.init(t),
                        this
                    }
                    ,
                    t.prototype.listen = function() {
                        return this.$inputor.on("compositionstart", (e = this,
                        function(t) {
                            var n;
                            return null != (n = e.controller()) && n.view.hide(),
                            e.isComposing = !0,
                            null
                        }
                        )).on("compositionend", function(e) {
                            return function(t) {
                                return e.isComposing = !1,
                                setTimeout((function(t) {
                                    return e.dispatch(t)
                                }
                                )),
                                null
                            }
                        }(this)).on("keyup.atwhoInner", function(e) {
                            return function(t) {
                                return e.onKeyup(t)
                            }
                        }(this)).on("keydown.atwhoInner", function(e) {
                            return function(t) {
                                return e.onKeydown(t)
                            }
                        }(this)).on("blur.atwhoInner", function(e) {
                            return function(t) {
                                var n;
                                if (n = e.controller())
                                    return n.expectedQueryCBId = null,
                                    n.view.hide(t, n.getOpt("displayTimeout"))
                            }
                        }(this)).on("click.atwhoInner", function(e) {
                            return function(t) {
                                return e.dispatch(t)
                            }
                        }(this)).on("scroll.atwhoInner", function(e) {
                            return function() {
                                var t;
                                return t = e.$inputor.scrollTop(),
                                function(n) {
                                    var i, o;
                                    return i = n.target.scrollTop,
                                    t !== i && null != (o = e.controller()) && o.view.hide(n),
                                    t = i,
                                    !0
                                }
                            }
                        }(this)());
                        var e
                    }
                    ,
                    t.prototype.shutdown = function() {
                        var e, t;
                        for (e in t = this.controllers)
                            t[e].destroy(),
                            delete this.controllers[e];
                        return this.$inputor.off(".atwhoInner"),
                        this.$el.remove()
                    }
                    ,
                    t.prototype.dispatch = function(e) {
                        var t, n, i, o;
                        if (void 0 !== e) {
                            for (t in o = [],
                            i = this.controllers)
                                n = i[t],
                                o.push(n.lookUp(e));
                            return o
                        }
                    }
                    ,
                    t.prototype.onKeyup = function(t) {
                        var i;
                        switch (t.keyCode) {
                        case n.ESC:
                            t.preventDefault(),
                            null != (i = this.controller()) && i.view.hide();
                            break;
                        case n.DOWN:
                        case n.UP:
                        case n.CTRL:
                        case n.ENTER:
                            e.noop();
                            break;
                        case n.P:
                        case n.N:
                            t.ctrlKey || this.dispatch(t);
                            break;
                        default:
                            this.dispatch(t)
                        }
                    }
                    ,
                    t.prototype.onKeydown = function(t) {
                        var i, o;
                        if ((o = null != (i = this.controller()) ? i.view : void 0) && o.visible())
                            switch (t.keyCode) {
                            case n.ESC:
                                t.preventDefault(),
                                o.hide(t);
                                break;
                            case n.UP:
                                t.preventDefault(),
                                o.prev();
                                break;
                            case n.DOWN:
                                t.preventDefault(),
                                o.next();
                                break;
                            case n.P:
                                if (!t.ctrlKey)
                                    return;
                                t.preventDefault(),
                                o.prev();
                                break;
                            case n.N:
                                if (!t.ctrlKey)
                                    return;
                                t.preventDefault(),
                                o.next();
                                break;
                            case n.TAB:
                            case n.ENTER:
                            case n.SPACE:
                                if (!o.visible())
                                    return;
                                if (!this.controller().getOpt("spaceSelectsMatch") && t.keyCode === n.SPACE)
                                    return;
                                if (!this.controller().getOpt("tabSelectsMatch") && t.keyCode === n.TAB)
                                    return;
                                o.highlighted() ? (t.preventDefault(),
                                o.choose(t)) : o.hide(t);
                                break;
                            default:
                                e.noop()
                            }
                    }
                    ,
                    t
                }();
                var o, r = [].slice;
                o = function() {
                    function n(t, n) {
                        this.app = t,
                        this.at = n,
                        this.$inputor = this.app.$inputor,
                        this.id = this.$inputor[0].id || this.uid(),
                        this.expectedQueryCBId = null,
                        this.setting = null,
                        this.query = null,
                        this.pos = 0,
                        this.range = null,
                        0 === (this.$el = e("#atwho-ground-" + this.id, this.app.$el)).length && this.app.$el.append(this.$el = e("<div id='atwho-ground-" + this.id + "'></div>")),
                        this.model = new l(this),
                        this.view = new c(this)
                    }
                    return n.prototype.uid = function() {
                        return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
                    }
                    ,
                    n.prototype.init = function(t) {
                        return this.setting = e.extend({}, this.setting || e.fn.atwho.default, t),
                        this.view.init(),
                        this.model.reload(this.setting.data)
                    }
                    ,
                    n.prototype.destroy = function() {
                        return this.trigger("beforeDestroy"),
                        this.model.destroy(),
                        this.view.destroy(),
                        this.$el.remove()
                    }
                    ,
                    n.prototype.callDefault = function() {
                        var n, i, o, s;
                        s = arguments[0],
                        n = 2 <= arguments.length ? r.call(arguments, 1) : [];
                        try {
                            return t[s].apply(this, n)
                        } catch (o) {
                            return i = o,
                            e.error(i + " Or maybe At.js doesn't have function " + s)
                        }
                    }
                    ,
                    n.prototype.trigger = function(e, t) {
                        var n, i;
                        return null == t && (t = []),
                        t.push(this),
                        i = (n = this.getOpt("alias")) ? e + "-" + n + ".atwho" : e + ".atwho",
                        this.$inputor.trigger(i, t)
                    }
                    ,
                    n.prototype.callbacks = function(e) {
                        return this.getOpt("callbacks")[e] || t[e]
                    }
                    ,
                    n.prototype.getOpt = function(e, t) {
                        try {
                            return this.setting[e]
                        } catch (e) {
                            return null
                        }
                    }
                    ,
                    n.prototype.insertContentFor = function(t) {
                        var n, i;
                        return i = this.getOpt("insertTpl"),
                        n = e.extend({}, t.data("item-data"), {
                            "atwho-at": this.at
                        }),
                        this.callbacks("tplEval").call(this, i, n, "onInsert")
                    }
                    ,
                    n.prototype.renderView = function(e) {
                        var t;
                        return t = this.getOpt("searchKey"),
                        e = this.callbacks("sorter").call(this, this.query.text, e.slice(0, 1001), t),
                        this.view.render(e.slice(0, this.getOpt("limit")))
                    }
                    ,
                    n.arrayToDefaultHash = function(t) {
                        var n, i, o, r;
                        if (!e.isArray(t))
                            return t;
                        for (r = [],
                        n = 0,
                        o = t.length; n < o; n++)
                            i = t[n],
                            e.isPlainObject(i) ? r.push(i) : r.push({
                                name: i
                            });
                        return r
                    }
                    ,
                    n.prototype.lookUp = function(e) {
                        var t, n;
                        if ((!e || "click" !== e.type || this.getOpt("lookUpOnClick")) && (!this.getOpt("suspendOnComposing") || !this.app.isComposing))
                            return (t = this.catchQuery(e)) ? (this.app.setContextFor(this.at),
                            (n = this.getOpt("delay")) ? this._delayLookUp(t, n) : this._lookUp(t),
                            t) : (this.expectedQueryCBId = null,
                            t)
                    }
                    ,
                    n.prototype._delayLookUp = function(e, t) {
                        var n, i, o;
                        return n = Date.now ? Date.now() : (new Date).getTime(),
                        this.previousCallTime || (this.previousCallTime = n),
                        0 < (i = t - (n - this.previousCallTime)) && i < t ? (this.previousCallTime = n,
                        this._stopDelayedCall(),
                        this.delayedCallTimeout = setTimeout((o = this,
                        function() {
                            return o.previousCallTime = 0,
                            o.delayedCallTimeout = null,
                            o._lookUp(e)
                        }
                        ), t)) : (this._stopDelayedCall(),
                        this.previousCallTime !== n && (this.previousCallTime = 0),
                        this._lookUp(e))
                    }
                    ,
                    n.prototype._stopDelayedCall = function() {
                        if (this.delayedCallTimeout)
                            return clearTimeout(this.delayedCallTimeout),
                            this.delayedCallTimeout = null
                    }
                    ,
                    n.prototype._generateQueryCBId = function() {
                        return {}
                    }
                    ,
                    n.prototype._lookUp = function(t) {
                        var n;
                        return n = function(e, t) {
                            if (e === this.expectedQueryCBId)
                                return t && t.length > 0 ? this.renderView(this.constructor.arrayToDefaultHash(t)) : this.view.hide()
                        }
                        ,
                        this.expectedQueryCBId = this._generateQueryCBId(),
                        this.model.query(t.text, e.proxy(n, this, this.expectedQueryCBId))
                    }
                    ,
                    n
                }();
                var s, a, l, c, u, d = function(e, t) {
                    for (var n in t)
                        h.call(t, n) && (e[n] = t[n]);
                    function i() {
                        this.constructor = e
                    }
                    return i.prototype = t.prototype,
                    e.prototype = new i,
                    e.__super__ = t.prototype,
                    e
                }, h = {}.hasOwnProperty;
                s = function(t) {
                    function n() {
                        return n.__super__.constructor.apply(this, arguments)
                    }
                    return d(n, t),
                    n.prototype.catchQuery = function() {
                        var e, t, n, i, o, r, s;
                        if (t = this.$inputor.val(),
                        e = this.$inputor.caret("pos", {
                            iframe: this.app.iframe
                        }),
                        s = t.slice(0, e),
                        !((i = "string" == typeof (o = this.callbacks("matcher").call(this, this.at, s, this.getOpt("startWithSpace"), this.getOpt("acceptSpaceBar")))) && o.length < this.getOpt("minLen", 0)))
                            return i && o.length <= this.getOpt("maxLen", 20) ? (n = (r = e - o.length) + o.length,
                            this.pos = r,
                            o = {
                                text: o,
                                headPos: r,
                                endPos: n
                            },
                            this.trigger("matched", [this.at, o.text])) : (o = null,
                            this.view.hide()),
                            this.query = o
                    }
                    ,
                    n.prototype.rect = function() {
                        var t, n, i;
                        if (t = this.$inputor.caret("offset", this.pos - 1, {
                            iframe: this.app.iframe
                        }))
                            return this.app.iframe && !this.app.iframeAsRoot && (n = e(this.app.iframe).offset(),
                            t.left += n.left,
                            t.top += n.top),
                            i = this.app.document.selection ? 0 : 2,
                            {
                                left: t.left,
                                top: t.top,
                                bottom: t.top + t.height + i
                            }
                    }
                    ,
                    n.prototype.insert = function(e, t) {
                        var n, i, o, r, s;
                        return s = "" + (o = (i = (n = this.$inputor).val()).slice(0, Math.max(this.query.headPos - this.at.length, 0))) + (e += r = "" === (r = this.getOpt("suffix")) ? r : r || " ") + i.slice(this.query.endPos || 0),
                        n.val(s),
                        n.caret("pos", o.length + e.length, {
                            iframe: this.app.iframe
                        }),
                        n.is(":focus") || n.focus(),
                        n.change()
                    }
                    ,
                    n
                }(o),
                d = function(e, t) {
                    for (var n in t)
                        h.call(t, n) && (e[n] = t[n]);
                    function i() {
                        this.constructor = e
                    }
                    return i.prototype = t.prototype,
                    e.prototype = new i,
                    e.__super__ = t.prototype,
                    e
                }
                ,
                h = {}.hasOwnProperty,
                a = function(t) {
                    function i() {
                        return i.__super__.constructor.apply(this, arguments)
                    }
                    return d(i, t),
                    i.prototype._getRange = function() {
                        var e;
                        if ((e = this.app.window.getSelection()).rangeCount > 0)
                            return e.getRangeAt(0)
                    }
                    ,
                    i.prototype._setRange = function(t, n, i) {
                        if (null == i && (i = this._getRange()),
                        i && n)
                            return n = e(n)[0],
                            "after" === t ? (i.setEndAfter(n),
                            i.setStartAfter(n)) : (i.setEndBefore(n),
                            i.setStartBefore(n)),
                            i.collapse(!1),
                            this._clearRange(i)
                    }
                    ,
                    i.prototype._clearRange = function(e) {
                        var t;
                        if (null == e && (e = this._getRange()),
                        t = this.app.window.getSelection(),
                        null == this.ctrl_a_pressed)
                            return t.removeAllRanges(),
                            t.addRange(e)
                    }
                    ,
                    i.prototype._movingEvent = function(e) {
                        var t;
                        return "click" === e.type || (t = e.which) === n.RIGHT || t === n.LEFT || t === n.UP || t === n.DOWN
                    }
                    ,
                    i.prototype._unwrap = function(t) {
                        var n;
                        return (n = (t = e(t).unwrap().get(0)).nextSibling) && n.nodeValue && (t.nodeValue += n.nodeValue,
                        e(n).remove()),
                        t
                    }
                    ,
                    i.prototype.catchQuery = function(t) {
                        var i, o, r, s, a, l, c, u, d, h, p, f;
                        if ((f = this._getRange()) && f.collapsed) {
                            if (t.which === n.ENTER)
                                return (o = e(f.startContainer).closest(".atwho-query")).contents().unwrap(),
                                o.is(":empty") && o.remove(),
                                (o = e(".atwho-query", this.app.document)).text(o.text()).contents().last().unwrap(),
                                void this._clearRange();
                            if (/firefox/i.test(navigator.userAgent)) {
                                if (e(f.startContainer).is(this.$inputor))
                                    return void this._clearRange();
                                t.which === n.BACKSPACE && f.startContainer.nodeType === document.ELEMENT_NODE && (d = f.startOffset - 1) >= 0 ? ((r = f.cloneRange()).setStart(f.startContainer, d),
                                e(r.cloneContents()).contents().last().is(".atwho-inserted") && (a = e(f.startContainer).contents().get(d),
                                this._setRange("after", e(a).contents().last()))) : t.which === n.LEFT && f.startContainer.nodeType === document.TEXT_NODE && (i = e(f.startContainer.previousSibling)).is(".atwho-inserted") && 0 === f.startOffset && this._setRange("after", i.contents().last())
                            }
                            if (e(f.startContainer).closest(".atwho-inserted").addClass("atwho-query").siblings().removeClass("atwho-query"),
                            (o = e(".atwho-query", this.app.document)).length > 0 && o.is(":empty") && 0 === o.text().length && o.remove(),
                            this._movingEvent(t) || o.removeClass("atwho-inserted"),
                            o.length > 0)
                                switch (t.which) {
                                case n.LEFT:
                                    return this._setRange("before", o.get(0), f),
                                    void o.removeClass("atwho-query");
                                case n.RIGHT:
                                    return this._setRange("after", o.get(0).nextSibling, f),
                                    void o.removeClass("atwho-query")
                                }
                            if (o.length > 0 && (p = o.attr("data-atwho-at-query")) && (o.empty().html(p).attr("data-atwho-at-query", null),
                            this._setRange("after", o.get(0), f)),
                            (r = f.cloneRange()).setStart(f.startContainer, 0),
                            l = "string" == typeof (u = this.callbacks("matcher").call(this, this.at, r.toString(), this.getOpt("startWithSpace"), this.getOpt("acceptSpaceBar"))),
                            0 === o.length && l && (s = f.startOffset - this.at.length - u.length) >= 0 && (f.setStart(f.startContainer, s),
                            o = e("<span/>", this.app.document).attr(this.getOpt("editableAtwhoQueryAttrs")).addClass("atwho-query"),
                            f.surroundContents(o.get(0)),
                            (c = o.contents().last().get(0)) && (/firefox/i.test(navigator.userAgent) ? (f.setStart(c, c.length),
                            f.setEnd(c, c.length),
                            this._clearRange(f)) : this._setRange("after", c, f))),
                            !(l && u.length < this.getOpt("minLen", 0)))
                                return l && u.length <= this.getOpt("maxLen", 20) ? (h = {
                                    text: u,
                                    el: o
                                },
                                this.trigger("matched", [this.at, h.text]),
                                this.query = h) : (this.view.hide(),
                                this.query = {
                                    el: o
                                },
                                o.text().indexOf(this.at) >= 0 && (this._movingEvent(t) && o.hasClass("atwho-inserted") ? o.removeClass("atwho-query") : !1 !== this.callbacks("afterMatchFailed").call(this, this.at, o) && this._setRange("after", this._unwrap(o.text(o.text()).contents().first()))),
                                null)
                        }
                    }
                    ,
                    i.prototype.rect = function() {
                        var t, n;
                        if ((n = this.query.el.offset()) && this.query.el[0].getClientRects().length)
                            return this.app.iframe && !this.app.iframeAsRoot && (t = e(this.app.iframe).offset(),
                            n.left += t.left - this.$inputor.scrollLeft(),
                            n.top += t.top - this.$inputor.scrollTop()),
                            n.bottom = n.top + this.query.el.height(),
                            n
                    }
                    ,
                    i.prototype.insert = function(e, t) {
                        var n, i, o, r, s;
                        return this.$inputor.is(":focus") || this.$inputor.focus(),
                        (i = this.getOpt("functionOverrides")).insert ? i.insert.call(this, e, t) : (r = "" === (r = this.getOpt("suffix")) ? r : r || " ",
                        n = t.data("item-data"),
                        this.query.el.removeClass("atwho-query").addClass("atwho-inserted").html(e).attr("data-atwho-at-query", "" + n["atwho-at"] + this.query.text).attr("contenteditable", "false"),
                        (o = this._getRange()) && (this.query.el.length && o.setEndAfter(this.query.el[0]),
                        o.collapse(!1),
                        o.insertNode(s = this.app.document.createTextNode("" + r)),
                        this._setRange("after", s, o)),
                        this.$inputor.is(":focus") || this.$inputor.focus(),
                        this.$inputor.change())
                    }
                    ,
                    i
                }(o),
                l = function() {
                    function t(e) {
                        this.context = e,
                        this.at = this.context.at,
                        this.storage = this.context.$inputor
                    }
                    return t.prototype.destroy = function() {
                        return this.storage.data(this.at, null)
                    }
                    ,
                    t.prototype.saved = function() {
                        return this.fetch() > 0
                    }
                    ,
                    t.prototype.query = function(e, t) {
                        var n, i, o;
                        return i = this.fetch(),
                        o = this.context.getOpt("searchKey"),
                        i = this.context.callbacks("filter").call(this.context, e, i, o) || [],
                        n = this.context.callbacks("remoteFilter"),
                        i.length > 0 || !n && 0 === i.length ? t(i) : n.call(this.context, e, t)
                    }
                    ,
                    t.prototype.fetch = function() {
                        return this.storage.data(this.at) || []
                    }
                    ,
                    t.prototype.save = function(e) {
                        return this.storage.data(this.at, this.context.callbacks("beforeSave").call(this.context, e || []))
                    }
                    ,
                    t.prototype.load = function(e) {
                        if (!this.saved() && e)
                            return this._load(e)
                    }
                    ,
                    t.prototype.reload = function(e) {
                        return this._load(e)
                    }
                    ,
                    t.prototype._load = function(t) {
                        return "string" == typeof t ? e.ajax(t, {
                            dataType: "json"
                        }).done((n = this,
                        function(e) {
                            return n.save(e)
                        }
                        )) : this.save(t);
                        var n
                    }
                    ,
                    t
                }(),
                c = function() {
                    function t(t) {
                        this.context = t,
                        this.$el = e("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),
                        this.$elUl = this.$el.children(),
                        this.timeoutID = null,
                        this.context.$el.append(this.$el),
                        this.bindEvent()
                    }
                    return t.prototype.init = function() {
                        var e, t;
                        return t = this.context.getOpt("alias") || this.context.at.charCodeAt(0),
                        (e = this.context.getOpt("headerTpl")) && 1 === this.$el.children().length && this.$el.prepend(e),
                        this.$el.attr({
                            id: "at-view-" + t
                        })
                    }
                    ,
                    t.prototype.destroy = function() {
                        return this.$el.remove()
                    }
                    ,
                    t.prototype.bindEvent = function() {
                        var t, n, i, o;
                        return t = this.$el.find("ul"),
                        n = 0,
                        i = 0,
                        t.on("mousemove.atwho-view", "li", (function(o) {
                            var r;
                            if ((n !== o.clientX || i !== o.clientY) && (n = o.clientX,
                            i = o.clientY,
                            !(r = e(o.currentTarget)).hasClass("cur")))
                                return t.find(".cur").removeClass("cur"),
                                r.addClass("cur")
                        }
                        )).on("click.atwho-view", "li", (o = this,
                        function(n) {
                            return t.find(".cur").removeClass("cur"),
                            e(n.currentTarget).addClass("cur"),
                            o.choose(n),
                            n.preventDefault()
                        }
                        ))
                    }
                    ,
                    t.prototype.visible = function() {
                        return e.expr.filters.visible(this.$el[0])
                    }
                    ,
                    t.prototype.highlighted = function() {
                        return this.$el.find(".cur").length > 0
                    }
                    ,
                    t.prototype.choose = function(e) {
                        var t, n;
                        if ((t = this.$el.find(".cur")).length && (n = this.context.insertContentFor(t),
                        this.context._stopDelayedCall(),
                        this.context.insert(this.context.callbacks("beforeInsert").call(this.context, n, t, e), t),
                        this.context.trigger("inserted", [t, e]),
                        this.hide(e)),
                        this.context.getOpt("hideWithoutSuffix"))
                            return this.stopShowing = !0
                    }
                    ,
                    t.prototype.reposition = function(t) {
                        var n, i, o, r;
                        return n = this.context.app.iframeAsRoot ? this.context.app.window : window,
                        t.bottom + this.$el.height() - e(n).scrollTop() > e(n).height() && (t.bottom = t.top - this.$el.height()),
                        t.left > (o = e(n).width() - this.$el.width() - 5) && (t.left = o),
                        i = {
                            left: t.left,
                            top: t.bottom
                        },
                        null != (r = this.context.callbacks("beforeReposition")) && r.call(this.context, i),
                        this.$el.offset(i),
                        this.context.trigger("reposition", [i])
                    }
                    ,
                    t.prototype.next = function() {
                        var e, t, n;
                        return (e = this.$el.find(".cur").removeClass("cur").next()).length || (e = this.$el.find("li:first")),
                        e.addClass("cur"),
                        n = (t = e[0]).offsetTop + t.offsetHeight + (t.nextSibling ? t.nextSibling.offsetHeight : 0),
                        this.scrollTop(Math.max(0, n - this.$el.height()))
                    }
                    ,
                    t.prototype.prev = function() {
                        var e, t, n;
                        return (t = this.$el.find(".cur").removeClass("cur").prev()).length || (t = this.$el.find("li:last")),
                        t.addClass("cur"),
                        e = (n = t[0]).offsetTop + n.offsetHeight + (n.nextSibling ? n.nextSibling.offsetHeight : 0),
                        this.scrollTop(Math.max(0, e - this.$el.height()))
                    }
                    ,
                    t.prototype.scrollTop = function(e) {
                        var t;
                        return (t = this.context.getOpt("scrollDuration")) ? this.$elUl.animate({
                            scrollTop: e
                        }, t) : this.$elUl.scrollTop(e)
                    }
                    ,
                    t.prototype.show = function() {
                        var e;
                        if (!this.stopShowing)
                            return this.visible() || (this.$el.show(),
                            this.$el.scrollTop(0),
                            this.context.trigger("shown")),
                            (e = this.context.rect()) ? this.reposition(e) : void 0;
                        this.stopShowing = !1
                    }
                    ,
                    t.prototype.hide = function(e, t) {
                        var n, i;
                        if (this.visible())
                            return isNaN(t) ? (this.$el.hide(),
                            this.context.trigger("hidden", [e])) : (i = this,
                            n = function() {
                                return i.hide()
                            }
                            ,
                            clearTimeout(this.timeoutID),
                            this.timeoutID = setTimeout(n, t))
                    }
                    ,
                    t.prototype.render = function(t) {
                        var n, i, o, r, s, a, l;
                        if (e.isArray(t) && t.length > 0) {
                            for (this.$el.find("ul").empty(),
                            i = this.$el.find("ul"),
                            l = this.context.getOpt("displayTpl"),
                            o = 0,
                            s = t.length; o < s; o++)
                                r = t[o],
                                r = e.extend({}, r, {
                                    "atwho-at": this.context.at
                                }),
                                a = this.context.callbacks("tplEval").call(this.context, l, r, "onDisplay"),
                                (n = e(this.context.callbacks("highlighter").call(this.context, a, this.context.query.text))).data("item-data", r),
                                i.append(n);
                            return this.show(),
                            this.context.getOpt("highlightFirst") ? i.find("li:first").addClass("cur") : void 0
                        }
                        this.hide()
                    }
                    ,
                    t
                }(),
                u = {
                    load: function(e, t) {
                        var n;
                        if (n = this.controller(e))
                            return n.model.load(t)
                    },
                    isSelecting: function() {
                        var e;
                        return !!(null != (e = this.controller()) ? e.view.visible() : void 0)
                    },
                    hide: function() {
                        var e;
                        return null != (e = this.controller()) ? e.view.hide() : void 0
                    },
                    reposition: function() {
                        var e;
                        if (e = this.controller())
                            return e.view.reposition(e.rect())
                    },
                    setIframe: function(e, t) {
                        return this.setupRootElement(e, t),
                        null
                    },
                    run: function() {
                        return this.dispatch()
                    },
                    destroy: function() {
                        return this.shutdown(),
                        this.$inputor.data("atwho", null)
                    }
                },
                e.fn.atwho = function(t) {
                    var n, o;
                    return n = arguments,
                    o = null,
                    this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each((function() {
                        var r, s;
                        return (s = (r = e(this)).data("atwho")) || r.data("atwho", s = new i(this)),
                        "object" != typeof t && t ? u[t] && s ? o = u[t].apply(s, Array.prototype.slice.call(n, 1)) : e.error("Method " + t + " does not exist on jQuery.atwho") : s.reg(t.at, t)
                    }
                    )),
                    null != o ? o : this
                }
                ,
                e.fn.atwho.default = {
                    at: void 0,
                    alias: void 0,
                    data: null,
                    displayTpl: "<li>${name}</li>",
                    insertTpl: "${atwho-at}${name}",
                    headerTpl: null,
                    callbacks: t,
                    functionOverrides: {},
                    searchKey: "name",
                    suffix: void 0,
                    hideWithoutSuffix: !1,
                    startWithSpace: !0,
                    acceptSpaceBar: !1,
                    highlightFirst: !0,
                    limit: 5,
                    maxLen: 20,
                    minLen: 0,
                    displayTimeout: 300,
                    delay: null,
                    spaceSelectsMatch: !1,
                    tabSelectsMatch: !0,
                    editableAtwhoQueryAttrs: {},
                    scrollDuration: 150,
                    suspendOnComposing: !0,
                    lookUpOnClick: !0
                },
                e.fn.atwho.debug = !1
            }(e)
        }
        .apply(t, i),
        void 0 === o || (e.exports = o)
    },
    105655: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(272061)
          , s = [1, 2, 3, 6, 9, 8, 12, 14, 16, 18, 19, 20, 22, 23, 25, 26, 27, 28, 31, 32, 34, 37]
          , a = [1, 2, 3, 14, 20, 24, 26, 57, 62, 63, 64, 69, 70, 88, 94, 95, 97, 98, 99, 100, 118, 120, 135, 136, 137];
        const l = o().extend({}, o().invert(APP.note_types), {
            15: "mail_message",
            6: "system_note",
            10: "call_in_out",
            11: "call_in_out",
            4: "note",
            9: "system_note",
            8: "system_note",
            14: "main_user_changed",
            16: "site_visit",
            18: "system_note",
            19: "system_note",
            20: "lead_auto_created",
            22: "customer_created",
            23: "transaction",
            62: "invoice",
            25: "service_message",
            26: "system_note",
            27: "system_note",
            57: "customer_status_changed",
            92: "merge",
            101: "dropbox",
            102: "sms",
            103: "sms",
            104: "mention",
            118: "invoice_created",
            24: "geolocation",
            28: "message_cashier",
            29: "payed_1c",
            31: "intent",
            32: "followed_link",
            33: "payed_quickbooks",
            34: "extended_service_message",
            35: "zoom_meeting",
            36: "bill_paid",
            tabula_note: "tabula_note",
            37: "key_action_completed",
            120: "talk_closed",
            135: "talk_marked_answered",
            136: "subscribed_to_notification",
            137: "unsubscribed_from_notification",
            _isSystem: function(e, t) {
                return !!(o().contains(s, e) && o().contains(["systemnotes", "notes"], t) || o().contains(a, e) && "event" === t)
            },
            _get: function(e, t, n) {
                switch (!0) {
                case "event" === t && e === r.default.LEAD_ADDED_EVENT:
                    return "lead_created";
                case "event" === t && e === r.default.CONTACT_ADDED_EVENT:
                    return "contact_created";
                case "event" === t && e === r.default.COMPANY_ADDED_EVENT:
                    return "company_created";
                case "event" === t && e === r.default.CUSTOMER_ADDED_EVENT:
                    return "customer_created";
                case "event" === t && e === r.default.LEAD_STATUS_CHANGED_EVENT:
                    return "lead_status_changed";
                case "opened_talks" === t:
                    return "opened_talks";
                case "tasks" === t:
                    return "task";
                case "event" === t && (e === r.default.FIELD_CHANGED_EVENT || e === r.default.PRICE_CHANGED_EVENT || e === r.default.NAME_CHANGED_EVENT || e === r.default.LTV_CHANGED_EVENT):
                    return "field_changed";
                case "event" === t && (e === r.default.TAG_ADDED || e === r.default.TAG_DELETED):
                    return "tag_event";
                case "event" === t && e === r.default.TALK_CLOSED:
                    return "talk_closed";
                case "event" === t && e === r.default.TALK_READ:
                    return "talk_marked_answered";
                case "event" === t && (e === r.default.CHAT_VIDEO_OPENED || e === r.default.TAG_ADDED || e === r.default.TAG_DELETED || e === r.default.CHAT_VIDEO_OPENED || e === r.default.CHAT_VIDEO_CLOSED || e === r.default.CHAT_PICTURE_OPENED || e === r.default.CHAT_PICTURE_CLOSED || e === r.default.SUBSCRIBED_TO_NOTIFICATION || e === r.default.UNSUBSCRIBED_FROM_NOTIFICATION):
                    return "system_note";
                case "event" === t && (e === r.default.SEGMENT_ATTACHED || e === r.default.SEGMENT_DETACHED):
                    return "segment_change";
                case "event" === t && e === r.default.TRANSACTION_ADDED_EVENT:
                    return "transaction";
                case "notes" === t && (e === APP.note_types.invoice_paid || e === APP.note_types.bill_paid) && n && "QuickBooks" === n:
                    return "payed_quickbooks";
                case "notes" === t && e === APP.note_types.ai_result:
                    return "ai_result";
                default:
                    return this[e]
                }
            }
        });
        var c = "../build/transpiled/interface/notes/templates";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    103984: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(579569)
          , s = n(886965)
          , a = n(880774)
          , l = n(678640);
        const c = {
            getCFTemplateParams: function(e, t) {
                var n = {}
                  , i = {};
                return o().each(e, (function(e) {
                    "file" === e.type ? n["".concat(t, ".cf.").concat(e.id)] = o().propertyOf(e.values[0])("value") : n["".concat(t, ".cf.").concat(e.id)] = o().pluck(e.values, "value").join("CHAINED_LIST" === e.code ? " / " : ", "),
                    o().has(e, "code") && o().contains(["PHONE", "EMAIL", "IM", "SMART_ADDRESS"], e.code) && (i = {},
                    o().each(e.values, (function(e) {
                        i.hasOwnProperty(e.code) || (i[e.code] = []),
                        i[e.code].push(e.value)
                    }
                    )),
                    o().each(i, (function(i, o) {
                        n["".concat(t, ".cf.").concat(e.id, ".").concat(o)] = i.join(", ")
                    }
                    )))
                }
                )),
                n
            },
            getEntityTemplateParams: function(e, t) {
                var n, i = {}, s = APP.constant("lead_statuses") || {}, c = (0,
                r.get)("inactive"), u = (0,
                r.get)(t.main_user_id), d = null;
                switch (u || (u = o().findWhere(c, {
                    id: t.main_user_id.toString()
                })),
                i["".concat(e, ".id")] = t.id,
                i["".concat(e, ".name")] = t.name,
                u && (i["".concat(e, ".responsible")] = u.title,
                i["".concat(e, ".responsible.id")] = u.id,
                i["".concat(e, ".responsible.name")] = u.title,
                i["".concat(e, ".responsible.email")] = u.login,
                i["".concat(e, ".responsible.phone")] = u.phone),
                i = o().extend(i, this.getCFTemplateParams(t.custom_fields, e)),
                t.element_type) {
                case APP.element_types.leads:
                    d = s["s_".concat(t.status_id)],
                    o().isUndefined(d) && (d = o().propertyOf(s)([t.pipeline_id, "statuses", "s_".concat(t.status_id)]) || {}),
                    n = t.price,
                    n = (0,
                    a.currency)(n, 1, 0, !1).trim(),
                    n = "".concat(n, " ").concat(APP.system.locale.currency_symbol),
                    i["".concat(e, ".status")] = d.name || d.option || "",
                    i["".concat(e, ".price")] = n,
                    i["".concat(e, ".personal_page_link")] = o().propertyOf(o().values(APP.constant("card_element").statistic))(["0", "personal_page_link"]);
                    break;
                case APP.element_types.contacts:
                    i["contact.first_name"] = t.first_name || t.name,
                    i["contact.last_name"] = t.last_name || t.name,
                    (0,
                    l.hasKeys)(APP.constant("card_element"), ["profiles", "facebook", "profile_avatar"]) ? i["contact.avatar"] = APP.constant("card_element").profiles.facebook.profile_avatar : t.avatar && (i["contact.avatar"] = t.avatar);
                    break;
                case APP.element_types.customers:
                    n = t.next_price,
                    n = (0,
                    a.currency)(n, 1, 0, !1).trim(),
                    n = "".concat(n, " ").concat(APP.system.locale.currency_symbol),
                    i["".concat(e, ".next_date")] = t.next_date,
                    i["".concat(e, ".next_price")] = n
                }
                return i
            },
            getTemplateParams: function(e) {
                var t = this
                  , n = (0,
                r.current)()
                  , i = {
                    "profile.name": n.name,
                    "profile.phone": n.personal_mobile
                }
                  , a = this.options.getExtraData()
                  , l = []
                  , c = o().first(a.elements) || {}
                  , u = o().last(a.elements) || {}
                  , d = e.entity_to_use;
                return u.element_type === APP.element_types.companies && u !== c ? l.push(c, u) : l.push(c),
                o().each(l, (function(e) {
                    o().extend(i, t.getEntityTemplateParams((0,
                    s.convertElementType)(e.element_type, "single"), e))
                }
                )),
                d && o().extend(i, this.getEntityTemplateParams((0,
                s.convertElementType)(d.element_type, "single"), d)),
                i
            }
        };
        var u = "../build/transpiled/interface/notes/views/add/mixins/template_params";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    752094: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(887977)
          , s = n(678640)
          , a = n(500034)
          , l = n(46225)
          , c = n(89873);
        const u = c.default.extend({
            _selectors: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o().extend({}, c.default.prototype._selectors.apply(this, t), {
                    editable_control: ".js-control-contenteditable",
                    textarea: "[contenteditable]",
                    text_input: '[name="text"]',
                    file_input: '[type="file"]',
                    helper: ".feed-compose__shortcuts-helper-wrapper"
                })
            },
            events: o().extend({}, c.default.prototype.events || {}, {
                "keyup [contenteditable]": "onKeyPressed",
                "input [contenteditable]": "onInput"
            }),
            _getTemplate: function() {
                return "/tmpl/notes/adding/note/index.twig"
            },
            _generateEmptyModel: function(e) {
                return e = e || this.options,
                new l.default({
                    is_new: !0,
                    object_type: {
                        code: "notes",
                        id: 5
                    },
                    element_id: e.element_id,
                    element_type: e.element_type,
                    editable: !0,
                    visible: !0
                })
            },
            setParamsOnSwitch: o().noop,
            getExistingText: function() {
                return this._form.model.get("text")
            },
            setTextFromAiHelpers: function(e) {
                var t = e.text;
                (0,
                a.isFeatureAvailable)("ai_rewriter_fast_reply") && (null == e ? void 0 : e.isAnswer) && (t = this._elem("textarea").text() + (e.text || "")),
                this.setExistingText(t)
            },
            setExistingText: function(e) {
                var t = e || this.options.text;
                e && this._form.model.set("text", t),
                this._elem("textarea").text(t),
                this._elem("text_input").val(t),
                APP.is_touch_device || o().isUndefined(t) || !this._elem("textarea").is(":focus") || (0,
                r.setCursorToEnd)(this._elem("textarea")),
                this.toggleHelpers()
            },
            onFoldCompose: function() {
                this._initAttachWrap()
            },
            onOpenCompose: function() {
                this.$el.one("controls:view:init", this._selector("editable_control"), o().bind((function() {
                    APP.is_touch_device || (0,
                    r.setCursorToEnd)(this._findElem("textarea"))
                }
                ), this))
            },
            initialize: function(e) {
                e.models = [this._generateEmptyModel(e)],
                c.default.prototype.initialize.apply(this, arguments),
                this.models = []
            },
            setMainId: function(e) {
                this.model && o().isFunction(this.model.set) && this.model.set("element_id", e),
                this.options && (this.options.element_id = e)
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                c.default.prototype.cancel.apply(this, t),
                c.default.prototype.destroy.apply(this, t)
            },
            onKeyPressed: function(e) {
                38 === e.keyCode && this._isToggleSwitchAllowed() && o().isFunction(this.options.toggleSwitcher) && this.options.toggleSwitcher(),
                this.toggleHelpers()
            },
            onInput: function() {
                var e = this._elem("textarea").text();
                e || this.toggleAiRewrite(e)
            },
            toggleHelpers: function() {
                var e = this._elem("textarea").text();
                this.toggleAiRewrite(e),
                e ? (this._elem("textarea").addClass("control-contenteditable__area--no-helper"),
                this._elem("helper").addClass("hidden")) : (this._elem("textarea").removeClass("control-contenteditable__area--no-helper"),
                this._elem("helper").removeClass("hidden"))
            },
            toggleAiRewrite: function(e) {
                (0,
                s.isOnlyLetters)(e.trim()) && e && e.length < 1e4 ? this._elem("ai_rewriter").removeClass("hidden") : this._elem("ai_rewriter").addClass("hidden")
            },
            getText: function() {
                return this.getExistingText()
            },
            _isToggleSwitchAllowed: function() {
                return !this._getMessageValue()
            },
            _getMessageValue: function() {
                return this._findElem("text_input").val()
            },
            _render: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                c.default.prototype._render.apply(this, t),
                this.$el.attr("data-dnd-before", APP.lang.notes_dnd_title_before).attr("data-dnd-after", APP.lang.notes_dnd_title_after).attr("class", "js-note feed-compose_note"),
                this.initFieldsMention(),
                (0,
                a.isFeatureAvailable)("is_ai_functionality_enabled_in_feed") && this.initRewriterControl()
            },
            cancel: o().noop,
            _setEditClick: o().noop,
            reset: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                c.default.prototype.cancel.apply(this, t)
            },
            resetCompose: function() {
                this._findElem("textarea").text("").trigger("indent:check"),
                this._findElem("text_input").val("").trigger("change"),
                this._form && this._form.revert(),
                this._setChanges(!1),
                this.model = this._generateEmptyModel(),
                this.models = []
            },
            _removeFileClick: function() {
                c.default.prototype._removeFileClick.apply(this, arguments),
                this._findElem("file_input")[0].value = ""
            },
            validate: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._form.model.get("text") || this._changes.files || (e = o().extend(e || {}, {
                    text: !1
                }),
                this.$el.addClass("note-has-error")),
                e
            },
            save: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this.model
                  , r = (new Date).getTime() / 1e3;
                return this.model.set("date_create", Math.floor(r)),
                this.model.set("msec_created_at", r),
                c.default.prototype.save.apply(this, t).then(o().bind((function() {
                    this.model.set({
                        is_new: !1,
                        deletable: !0
                    }).unset("visible"),
                    !i.get("id") && this.models[0] && this.models[0].get("id") && (i = this.models[0],
                    this.models = o().without(this.models, this.models[0])),
                    this.options.onAdd(o().flatten([o().extend(i.toJSON(), {
                        _links: i.links
                    }), o().map(this.models, (function(e) {
                        return o().extend(e.toJSON(), {
                            _links: e.links
                        })
                    }
                    ))])),
                    this.resetCompose()
                }
                ), this))
            }
        });
        var d = "../build/transpiled/interface/notes/views/add/note";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    78661: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(105655)
          , s = n(736747);
        const a = s.default.extend({
            _getJoinedType: function() {
                switch (r.default._get(this.model.get("type"), this.model.get("object_type").code, "")) {
                case "attachment":
                    return "attachment";
                case "note":
                    return "note";
                case "transaction":
                    return "transactions";
                default:
                    return "joined"
                }
            },
            _getTemplate: function(e) {
                var t = this._getJoinedType();
                return e && "transactions" !== t ? s.default.prototype._getTemplate.apply(this, arguments) : "/tmpl/notes/types/".concat(t, ".twig")
            },
            _getRenderParams: function() {
                var e = o().map(this.models, (function(e) {
                    return o().extend(e.toJSON(), {
                        _links: e.links
                    })
                }
                ));
                return o().extend(s.default.prototype._getRenderParams.apply(this, arguments), {
                    joined: e
                })
            },
            toggleVisible: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = o().filter(this.models, (function(e) {
                    return !e.get("visible")
                }
                ));
                "joined" === this._getJoinedType() && i.length !== this.models.length ? (this.el.style.display = "",
                this.render()) : s.default.prototype.toggleVisible.apply(this, t)
            }
        });
        var l = "../build/transpiled/interface/notes/views/joined/joined";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    89873: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(579569)
          , s = n(564e3)
          , a = n(78661);
        const l = a.default.extend({
            _files_remove: [],
            file_uploader_component: s.default,
            events: o().extend({}, a.default.prototype.events || {}, {
                "click .js-note-pinner": "togglePinClick"
            }),
            _getRenderParams: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = o().map(this.models, (function(e) {
                    return o().extend(e.toJSON(), {
                        _links: e.links
                    })
                }
                ))
                  , r = this.model.links && this.model.links.download && this.model.links.download.href.match(/\.([a-z]{0,4})$/gi, "$1");
                return o().extend(a.default.prototype._getRenderParams.apply(this, t), {
                    joined: o().map(o().filter(i, (function(e) {
                        return e.id !== this.model.id
                    }
                    ), this), (function(e) {
                        var t = e._links.download && e._links.download.href.match(/\.([a-z]{0,4})$/gi, "$1");
                        return o().extend(e, {
                            is_image: !!t && o().contains([".png", ".jpg", ".jpeg", ".gif"], t[0].toLowerCase())
                        })
                    }
                    )),
                    is_image: !!r && o().indexOf([".png", ".jpg", ".jpeg", ".gif"], r[0].toLowerCase()) >= 0
                })
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._removeFilesEvents(),
                a.default.prototype.destroy.apply(this, t)
            },
            edit: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = null;
                o().isFunction(this.options.scrollUpdate) && (i = this.options.scrollUpdate()),
                a.default.prototype.edit.apply(this, t),
                this._initAttachWrap(),
                o().isFunction(this._toggleAttachFileInput) && this._toggleAttachFileInput(),
                o().isFunction(i) && (this.model.trigger("notes:update-sticky"),
                i())
            },
            cancel: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._removeFilesEvents(),
                a.default.prototype.cancel.apply(this, t)
            },
            _removeFilesEvents: function() {
                this.file_uploader && (this._destroyComponent(this.file_uploader),
                this.file_uploader = null)
            },
            removeFile: function(e) {
                var t = this.file_uploader && this.file_uploader.attachments_collection && this.file_uploader.attachments_collection.length;
                e && (this._files_remove = this._files_remove.concat(o().filter(this.models, (function(t) {
                    return (t.id || "").toString() === e.toString()
                }
                )))),
                this._setChanges({
                    files: Boolean(this.model.id) || Boolean(t)
                })
            },
            _initAttachWrap: function() {
                this._removeFilesEvents(),
                this._setChanges({
                    files: !1
                }),
                this.file_uploader = this._addComponent(this.file_uploader_component, this.getOptionsFileUploader())
            },
            getOptionsFileUploader: function() {
                return {
                    el: this.$el,
                    url_upload: this.getUploadUrl(),
                    onCompleteUploadFile: o().bind(this.onCompleteUploadFile, this),
                    onRemoveFile: o().bind(this.removeFile, this),
                    onBeforeUploadFile: o().bind(this._destroyFileAndUpdateModels, this),
                    getEditing: o().bind((function() {
                        return this._editing
                    }
                    ), this),
                    onAddAttach: o().bind((function() {
                        this._setChanges({
                            files: !0
                        })
                    }
                    ), this)
                }
            },
            getUploadUrl: function() {
                return ["/private/notes/upload.php?ACTION=ADD_NOTE&", this.model.get("element_id") ? "ELEMENT_ID=".concat(this.model.get("element_id")) : "TEMP=Y", "&ELEMENT_TYPE=", this.model.get("element_type")].join("")
            },
            _copyFormToModel: function() {
                this.model.set("data", o().extend(this.model.get("data"), {
                    text: this._form.model.get("text")
                }))
            },
            onCompleteUploadFile: function(e, t, n) {
                var i = this.model.clone();
                i.set({
                    id: null,
                    is_new: !1,
                    editable: !0,
                    deletable: !0,
                    date_create: this.model.get("_date_create") || this.model.get("date_create"),
                    created_by: (0,
                    r.current)("id"),
                    type: APP.note_types.attachment,
                    params: e.note.params,
                    data: {
                        text: e.note.params.text,
                        params: e.note.params
                    }
                }),
                i.links = e.note.links || {
                    download: {
                        href: "/download/".concat(e.note.params.link)
                    }
                },
                this.model.collection && this.model.collection.add(i),
                i.save().then((function() {
                    t()
                }
                ), (function() {
                    n()
                }
                )),
                this.models.push(i)
            },
            _destroyFileAndUpdateModels: function() {
                return o().map(this._files_remove, (function(e) {
                    return e.destroy().then(o().bind((function(e) {
                        this.models = o().without(this.models, e),
                        this._files_remove = o().without(this._files_remove, e)
                    }
                    ), this, e))
                }
                ), this)
            },
            togglePinClick: function(e) {
                var t = this.options.scrollUpdate()
                  , n = o().find(this.models, (function(e) {
                    return e.id
                }
                ));
                e.stopPropagation(),
                o().forEach(this.models, (function(e) {
                    e.set("pinned", !e.get("pinned")),
                    e.id && e.pin()
                }
                )),
                this._render(),
                n.trigger("note:view:update", n),
                t()
            },
            updateUploadUrl: function() {
                this.file_uploader.url_upload = this.getUploadUrl()
            },
            save: function() {
                return this._findElem("submit").trigger("button:load:start", ["white"]),
                new Promise(o().bind((function(e, t) {
                    if (!o().isEmpty(this.validate()))
                        return this._findElem("submit").trigger("button:load:stop"),
                        void t();
                    this.model._pending ? t("Already saving") : (this.updateUploadUrl(),
                    this.file_uploader.uploadFiles().then(o().bind((function() {
                        for (var n = this, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
                            o[r] = arguments[r];
                        this._changes.form ? 0 === this.model.get("element_id") ? setTimeout((function() {
                            a.default.prototype.save.apply(n, o).then(e, t)
                        }
                        ), 0) : a.default.prototype.save.apply(this, o).then(e, t) : (this._findElem("submit").trigger("button:load:stop", ["white"]),
                        this.cancel(),
                        e())
                    }
                    ), this), t))
                }
                ), this))
            }
        });
        var c = "../build/transpiled/interface/notes/views/joined/note";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    775193: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            TIP_RENDER_TYPE: () => v,
            default: () => E
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(460159)
          , s = n.n(r)
          , a = n(809228)
          , l = n.n(a)
          , c = n(880774)
          , u = n(579569)
          , d = n(696884)
          , h = n(987280)
          , p = n(227437)
          , f = n(500034)
          , _ = n(340958)
          , m = n(856718)
          , g = n(275649)
          , y = n(661533)
          , v = {
            up: "up",
            down: "down"
        }
          , w = ".feed-note__content .js-feed-note__date, .card-task__date"
          , b = ".control-emoji-reactions-buble-wrapper"
          , x = "feed-context-menu__controller";
        o().once((function() {
            return _.default.forceDirectiveLoad("js-tip-holder", document.createElement("div"))
        }
        ))();
        const E = {
            events: {
                "click .js-feed-note__date": "onContextMenuOverDate",
                "mouseenter .js-feed-note__date": "onContextMenuOverDate",
                "mouseleave .js-feed-note__date": "onContextMenuLeaveDate",
                "mouseenter .card-task__date": "onContextMenuOverDate",
                "mouseleave .card-task__date": "onContextMenuLeaveDate"
            },
            onContextMenuOverDate: function(e) {
                var t = this
                  , n = y(e.currentTarget)
                  , i = n.closest(".feed-note__content, .card-task__inner");
                clearTimeout(this._context_menu_leave_menu_tt),
                clearTimeout(this._context_menu_show_timeout),
                e.stopPropagation && e.stopPropagation(),
                this._$context_menu_date_target && this._$context_menu_date_target.get(0) !== n.get(0) && this.hideContextMenuTip(),
                i.hasClass("quotation__message_type-text") || this.$context_menu_tip || (this.initContextMenuTip(),
                (0 !== this.context_menu_tip_items.length || this.isReactionSupported()) && (this._$context_menu_date_target = n,
                n.addClass(x),
                this._context_menu_show_timeout = o().delay((function() {
                    clearTimeout(t._context_menu_show_timeout),
                    t.showContextMenuTip()
                }
                ), 100)))
            },
            onContextMenuLeaveDate: function() {
                var e = this;
                clearTimeout(this._context_menu_show_timeout),
                this._context_menu_leave_date_tt = setTimeout((function() {
                    return e.hideContextMenuTip()
                }
                ), 200)
            },
            onContextMenuWrapperClick: function(e) {
                e.stopPropagation()
            },
            showContextMenuTip: function() {
                var e = this;
                if (this.$context_menu_tip = y(s()({
                    ref: "/tmpl/notes/defaults/context_menu.twig"
                }).render({
                    items: this.context_menu_tip_items
                })),
                this.$context_menu_tip.on("mouseleave", b, (function(t) {
                    return e.onContextMenuLeaveHide(t)
                }
                )).on("click", ".feed-note__reaction", (function(t) {
                    return e.onContextMenuToggleReaction(t)
                }
                )).on("click", ".feed-context-menu__item.js-tips-item", (function(t) {
                    return e.onContextMenuItemClick(t)
                }
                )).on("mouseover", (function(t) {
                    return e.onContextMenuMouseOver(t)
                }
                )).on("mouseleave", (function(t) {
                    return e.onContextMenuLeaveHide(t)
                }
                )).on("click", (function(t) {
                    return e.onContextMenuWrapperClick(t)
                }
                )),
                this.$context_menu_tip_inner = this.$context_menu_tip.children(),
                this._$body.append(this.$context_menu_tip),
                this.isReactionSupported()) {
                    var t = o().propertyOf(this.model.get("recipient") || this.model.get("author"))("origin");
                    this.emoji_reactions = this._addComponent(p.default, {
                        origin: t,
                        supported_reactions: this.supported_reactions,
                        el: this.$context_menu_tip,
                        message_id: this.model.get("id"),
                        tipMenuHide: o().bind(this.hideContextMenuTip, this),
                        blockScroll: o().bind(this._onIntentOpenedBlockScroll, this)
                    })
                }
                var n = this.setContextMenuTipPosition();
                this.$context_menu_tip_inner.trigger("tip:show"),
                this.$context_menu_tip.trigger("reaction:show", [n]).addClass("tips_slide-down"),
                this.hasContextMenuCopyItem() && (this._context_menu_copy_link = this.initContextMenuCopyLink())
            },
            onContextMenuMouseOver: function() {
                clearTimeout(this._context_menu_leave_menu_tt),
                clearTimeout(this._context_menu_leave_date_tt)
            },
            hideContextMenuTip: function() {
                this._context_menu_copy_link && (this._context_menu_copy_link.destroy(),
                this._context_menu_copy_link = null),
                (this._$context_menu_date_target || this.$(w)).removeClass(x),
                this._$context_menu_date_target = null,
                this.$context_menu_tip && (this.$context_menu_tip.trigger("bubble:hide").remove(),
                this.$context_menu_tip = null),
                o().isFunction(this._onIntentClosedUnblockScroll) && this._onIntentClosedUnblockScroll()
            },
            onContextMenuLeaveHide: function(e) {
                var t = this;
                y(null == e ? void 0 : e.relatedTarget).closest(b).length || y(null == e ? void 0 : e.relatedTarget).closest(".feed-context-menu__wrapper").length || (this._context_menu_leave_menu_tt = setTimeout((function() {
                    return t.hideContextMenuTip()
                }
                ), 200))
            },
            onContextMenuItemClick: function(e) {
                e.stopPropagation();
                var t = y(e.currentTarget).attr("data-type");
                this.onContextMenuClick(t),
                "copy_link" !== t && this.hideContextMenuTip()
            },
            isInstagramComment: function() {
                return (0,
                f.isFeatureAvailable)("ig_replies_to_comments") && o().propertyOf(this.model.get("message_attributes"))(["facebook", "comment_url"]) && "instagram_business" === o().propertyOf(this.model.get("author"))("origin")
            },
            isIncoming: function() {
                var e = m.AmoJoMediator.get()[this.model.get("chat_id")] || {
                    contacts: {},
                    users: {}
                }
                  , t = this.model.get("author");
                return t && Boolean(e && e.contacts[t ? t.id : 0])
            },
            isAiResponseAvailable: function() {
                var e;
                return (0,
                f.isFeatureAvailable)("is_customization_for_global") && (0,
                f.isFeatureAvailable)("is_ai_functionality_enabled_in_feed") && (0,
                f.isFeatureAvailable)("ai_answer") && this.model.get("text") && (null === (e = this.model.get("dialog")) || void 0 === e ? void 0 : e.id)
            },
            isAvailableForChatting: function() {
                var e, t = (0,
                g.get)()[null === (e = this.model.get("author")) || void 0 === e ? void 0 : e.id];
                return !t || t.is_available_for_chatting
            },
            hasContextMenuCopyItem: function() {
                return this.model.get("can_be_retrieved_by_url")
            },
            hasContextMenuQuoteItem: function() {
                return this.model.get("can_be_replied") || this.model.get("can_be_forwarded")
            },
            hasContextMenuForwardItem: function() {
                return this.model.get("chat_id") && this.model.get("author") && this.options.type !== d.default.TYPE_DIRECT
            },
            initContextMenuTip: function() {
                var e = o().propertyOf(this.model.get("author"))("id") === (0,
                u.current)("amojo_id")
                  , t = this.hasContextMenuCopyItem()
                  , n = this.hasContextMenuQuoteItem()
                  , i = this.hasContextMenuForwardItem()
                  , r = this.isInstagramComment()
                  , s = this.isAiResponseAvailable()
                  , a = this.isAvailableForChatting();
                this.context_menu_tip_items = [],
                r && this.model.get("can_be_replied") && (this.context_menu_tip_items.push({
                    class_name: "feed-context-menu__item",
                    id: "answer-to-comment",
                    text: (0,
                    c.i18n)("Reply with comment"),
                    svg_icon: "inbox--comment-thread",
                    additional_data: 'data-type="answer_to_comment"'
                }),
                this.context_menu_tip_items.push({
                    class_name: "feed-context-menu__item",
                    id: "add-reply",
                    text: (0,
                    c.i18n)("Reply with message"),
                    svg_icon: "inbox--meta-logo",
                    additional_data: 'data-type="answer_to_direct"'
                })),
                !e && !r && n && a && this.context_menu_tip_items.push({
                    class_name: "feed-context-menu__item",
                    id: "add-reply",
                    text: (0,
                    c.i18n)("mail_letter_reply"),
                    svg_icon: "inbox--reply",
                    additional_data: 'data-type="add_reply"'
                }),
                i && this.context_menu_tip_items.push({
                    class_name: "feed-context-menu__item",
                    id: "add-quotation",
                    text: (0,
                    c.i18n)("Forward"),
                    svg_icon: "inbox--quotation",
                    additional_data: 'data-type="add_quotation"'
                }),
                s && this.context_menu_tip_items.push({
                    class_name: "feed-context-menu__item",
                    id: "generate-response",
                    text: (0,
                    c.i18n)("Generate response"),
                    svg_icon: "inbox--summarize",
                    additional_data: 'data-type="generate_response"'
                });
                var l = o().result(this, "getContextMenuLinkTo", "");
                t && l && this.context_menu_tip_items.push({
                    class_name: "feed-context-menu__item",
                    id: "copy_link",
                    text: '<span class="js-copy-text">'.concat((0,
                    c.i18n)("Copy link"), "</span>"),
                    svg_icon: "inbox--copy-link",
                    should_be_raw: !0,
                    additional_data: 'data-type="copy_link" data-clipboard-text="'.concat(this.getContextMenuLinkTo(), '"')
                }),
                this.supported_reactions = this.model.get("supported_reactions") || {}
            },
            onContextMenuToggleReaction: function(e) {
                var t = y(e.currentTarget)
                  , n = t.data("emoji")
                  , i = t.find(".feed-note__reaction-avatar-container")
                  , r = o().map(i, (function(e) {
                    return y(e).data("user-id")
                }
                ))
                  , s = o().contains(r, APP.constant("user").amojo_id) ? "" : n;
                (0,
                h.sendReaction)(this.model.get("id"), s).subscribe({
                    error: function() {
                        t.addClass("animated shake"),
                        o().delay((function() {
                            t.removeClass("animated shake")
                        }
                        ), 200)
                    }
                })
            },
            setContextMenuTipPosition: function() {
                var e, t = this._$context_menu_date_target || this.$(w), n = t.offset(), i = Math.round(n.top), o = Math.round(n.left), r = t.height(), s = this.$context_menu_tip_inner.height() + ((null === (e = this.emoji_reactions) || void 0 === e ? void 0 : e.reactions_height) || 0) + 40, a = i + r - (parseInt(this.$context_menu_tip.css("padding-top")) + 2), l = this._$window.height();
                return a + s < l ? (this.$context_menu_tip.css({
                    left: o,
                    top: a
                }),
                v.down) : (this.$context_menu_tip.addClass("feed-context-menu__wrapper-up"),
                this.$context_menu_tip.css({
                    left: o,
                    bottom: l - i - 20
                }),
                v.up)
            },
            initContextMenuCopyLink: function() {
                var e = this
                  , t = new (l())(this.$context_menu_tip.find('[data-type="copy_link"]').get(0));
                return t.on("success", (function(t) {
                    var n = y(t.trigger).find(".js-copy-text")
                      , i = n.text();
                    n.css("width", n.width()).text((0,
                    c.i18n)("Copied")),
                    setTimeout((function() {
                        n.text(i).css("width", ""),
                        e.hideContextMenuTip()
                    }
                    ), 1e3)
                }
                )),
                t
            },
            isReactionSupported: function() {
                return this.model.get("can_be_reacted") && !o().isEmpty(this.supported_reactions)
            },
            onContextMenuClick: function() {}
        };
        var C = "../build/transpiled/interface/notes/views/mixins/context_menu";
        window.define(C, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([C])
    }
    ,
    946934: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(77305);
        const s = {
            events: {
                "click .js-note-delete-btn": "delete"
            },
            delete: function(e) {
                var t = this;
                return !0 === this.model.get("deletable") && (e = o().isString(e) ? e : APP.lang["note_delete_msg".concat("tasks" === this.model.get("object_type").code ? "_task" : "")],
                this.$el.trigger("actions:toggle", [!1]),
                new r.default({
                    class_name: "modal-list",
                    text: e,
                    accept: function() {
                        var e = this;
                        e.requestStart(),
                        Promise.all(o().map(t.models, (function(e) {
                            return e.destroy({
                                wait: !0
                            })
                        }
                        ))).then((function() {
                            e.requestSuccess(APP.lang.multiple_delete_success_msg)
                        }
                        ), (function(t) {
                            t && t.response && t.response.error_message ? e.requestFail(t.response.error_message, !1) : e.requestFail()
                        }
                        ))
                    }
                })),
                !1
            }
        };
        var a = "../build/transpiled/interface/notes/views/mixins/deletable";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    73968: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(267651)
          , s = n.n(r)
          , a = n(278904)
          , l = n(500034)
          , c = n(353256)
          , u = n(661533)
          , d = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t[0] && t[0].stopPropagation && t[0].stopPropagation()
        };
        const h = {
            _uneditable_selector: ":input, label",
            events: {
                keydown: "hotkeys",
                "click .js-note": "_setEditClick",
                "click .js-note-edit-mode-btn": "_setEditClick",
                "click .js-note-edit-cancel": "cancel",
                "click .js-note-add-cancel": "cancel",
                "click .js-note-submit:not(.button-input-disabled)": "save",
                "click .js-note-delete-btn": "delete",
                "focus textarea": "_putCursorToEnd"
            },
            hotkeys: function(e) {
                switch (!0) {
                case 27 === e.keyCode:
                    this.cancel();
                    break;
                case 13 === e.keyCode && (e.ctrlKey || e.metaKey):
                    this.save()
                }
            },
            cancel: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                d.apply(this, t),
                this._editing = !1,
                this._form && (this._form.revert(),
                this._form.destroy(),
                this._form = null),
                this._setChanges(!1),
                this._render(),
                this.model.trigger("notes:update-sticky")
            },
            _setEditClick: function(e) {
                var t = u(e.target)
                  , n = t.add(e.target.parentNode).add(e.target.parentNode.parentNode)
                  , i = t.closest(".amo-player-container").length;
                !n.is(this._uneditable_selector) && !this.isEditable() || n.is("a") || i || e.stopPropagation(),
                n.is("a, :input, label") || !this.isEditable() || i || (this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this.setEdit())
            },
            setEdit: function() {
                !this._editing && this.isEditable() && (o().isFunction(this.options.onEdit) ? this.options.onEdit(this) : this.edit())
            },
            _setChanges: function(e) {
                o().isBoolean(e) && !1 === e ? this._changes = {} : o().extend(this._changes, e),
                this._highlightSave(this.hasChanges())
            },
            hasChanges: function() {
                return o().chain(this._changes).values().compact().value().length
            },
            _copyFormToModel: function() {
                this.model.set("data", o().extend({}, this.model.get("data"), {
                    text: this._form.model.get("text")
                }))
            },
            save: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if (d.apply(this, t),
                this.model._pending || !o().isEmpty(this.validate()))
                    return new Promise(o().bind((function(e, t) {
                        this._findElem("submit").trigger("button:load:stop"),
                        t("Model is loading or no changes")
                    }
                    ), this));
                ((0,
                l.isFeatureAvailable)("airewriter") || (0,
                l.isFeatureAvailable)("kommo_ai_trial_started") && !(0,
                l.isFeatureAvailable)("kommo_ai_trial_ended")) && s().publish(c.FEED_COMPOSE_SUBMIT),
                this._findElem("submit").trigger("button:load:start", ["white"]),
                this._copyFormToModel(),
                this._findElem("cancel").hide();
                var i = function() {
                    this._findElem("submit").trigger("button:load:stop"),
                    this._findElem("cancel").show()
                };
                return this.model.save().then(o().bind(i, this), o().bind(i, this)).then(o().bind(this.cancel, this))
            },
            edit: function(e) {
                this.toggleActions && this.toggleActions(!1),
                this._editing = !0,
                this._changes = {},
                this._render("edit"),
                APP.is_touch_device || !1 === e || this.$("textarea").trigger("controls:textarea:autosize").focus(),
                this._initForm()
            },
            _initForm: function() {
                this._changes = {},
                this._form = this._addComponent(a.default, {
                    el: this.el
                }),
                this._form.model.on("has_changes has_reverted", o().bind((function(e) {
                    e && this._setChanges({
                        form: "has_changes" === e.type
                    })
                }
                ), this), this)
            },
            _highlightSave: function(e) {
                var t = this._findElem("submit");
                !1 === e && t.trigger("button:load:stop"),
                t.trigger("button:".concat(e ? "enable" : "disable"))
            },
            _putCursorToEnd: function(e) {
                var t, n = e.currentTarget, i = u(n), r = i.is("[contenteditable]") ? "text" : "val";
                i.hasClass("js-cursor-autoset-disabled") || (n.setSelectionRange ? (t = 2 * i[r]().length,
                o().delay((function() {
                    n.setSelectionRange(t, t)
                }
                ), 1)) : i[r](i[r]()),
                n.scrollTop = 999999)
            },
            validate: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._form.model.get("text") || (e = o().extend(e || {}, {
                    text: !1
                }),
                this.$el.addClass("note-has-error")),
                e
            },
            isEditable: function() {
                var e, t, n = "editable";
                return "tasks" === this.model.get("object_type").code && (t = !!(e = 1 === this.model.get("status")) && this.model._getResult(),
                (!e || e && !t) && (n = "completable")),
                !0 === this.model.get(n)
            }
        };
        var p = "../build/transpiled/interface/notes/views/mixins/editable";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    293259: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(817932)
          , o = n(498457)
          , r = n(55188)
          , s = n.n(r);
        const a = {
            initialize: function() {
                var e = this;
                this.listenTo(this.model, "search:highlight:init", (function(t) {
                    e.model.set("_search_highlights", t, {
                        silent: !0
                    })
                }
                )).listenTo(this.model, "search:highlight:set", (function(t) {
                    e.model.set("_search_highlights", t, {
                        silent: !0
                    }),
                    e._render()
                }
                )).listenTo(this.model, "search:highlight:unset", (function() {
                    e.model.unset("_search_highlights", {
                        silent: !0
                    }),
                    e._render()
                }
                ))
            },
            _getHighlightParams: function() {
                if (!this.model.get("_search_highlights"))
                    return {};
                var e = (0,
                i.processHighlights)(this._getTextToHighlight(), this.model.get("_search_highlights"));
                return {
                    search_highlight_active: !0,
                    search_highlighted: this._getPreparedHighlightedString((0,
                    o.default)(e))
                }
            },
            _getTextToHighlight: function() {
                var e = s().propertyOf(this.model.get("object_type"))("code");
                switch (!0) {
                case !s().isUndefined(this.model.get("chat_id")):
                    return s().propertyOf(this.model.get("message"))("text") || "";
                case "tasks" === e:
                case "notes" === e:
                    return s().propertyOf(this.model.get("data"))("text") || "";
                default:
                    return ""
                }
            },
            _getPreparedHighlightedString: function(e) {
                return s().reduce(e, (function(e, t) {
                    if (s().keys(t).length) {
                        var n = t.value.split("\n");
                        e += s().map(n, (function(e, t) {
                            var i = "";
                            return e && (i += '<span style="background: yellow; color: #000">'.concat(e, "</span>")),
                            t !== n.length - 1 && (i += "\n"),
                            i
                        }
                        )).join("")
                    } else
                        e += t;
                    return e
                }
                ), "")
            }
        };
        var l = "../build/transpiled/interface/notes/views/mixins/search_highligter";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    884579: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var i = n(55188)
          , o = n.n(i)
          , r = function(e) {
            return "tasks" === e.get("object_type").code && !e.get("status")
        };
        const s = {
            events: {
                "mouseenter .js-note-context": "maybeSomeActionsYes",
                "mouseleave .js-note-context": "maybeSomeActionsNo",
                swipe: "switchActionsSwipe",
                "actions:toggle": "toggleActionsTrigger"
            },
            switchActionsSwipe: function(e, t, n) {
                1 === t && 0 === n && this.toggleActions(!1),
                -1 === t && 0 === n && this.maybeSomeActionsYes()
            },
            maybeSomeActionsYes: function() {
                var e = this.$el.find(".feed-note__context");
                !o().find(this.models, (function(e) {
                    return e.id
                }
                )) || r(this.model) || this._editing || (this.$el.addClass("fixed"),
                e.addClass("feed-note__context_opened"))
            },
            maybeSomeActionsNo: function() {
                this.$el.addClass("fixed").find(".feed-note__context").removeClass("feed-note__context_opened")
            },
            toggleActionsTrigger: function(e, t) {
                t = o().isBoolean(t) ? t : !this.$el.hasClass("hovered"),
                this.toggleActions(t)
            },
            toggleActions: function(e) {
                !this.model.get("editable") && !this.model.get("deletable") || this._editing || !o().find(this.models, (function(e) {
                    return e.id
                }
                )) || r(this.model) || (e ? this.$el.addClass("hovered") : this.$el.removeClass("hovered fixed").find(".feed-note:first").css(Modernizr.prefixed("transform"), ""))
            }
        };
        var a = "../build/transpiled/interface/notes/views/mixins/togglable";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    736747: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => R
        });
        var i = n(661533)
          , o = n.n(i)
          , r = n(55188)
          , s = n.n(r)
          , a = n(460159)
          , l = n.n(a)
          , c = n(162262)
          , u = n.n(c)
          , d = n(312309)
          , h = n(579569)
          , p = n(397850)
          , f = n(804129)
          , _ = n(521466)
          , m = n(105655)
          , g = n(884579)
          , y = n(73968)
          , v = n(946934)
          , w = n(103984)
          , b = n(293259)
          , x = n(775193)
          , E = n(669402)
          , C = n(740495)
          , A = n(804317);
        function T(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        n(560258);
        var k = s().invert(APP.note_types)
          , P = s().invert(APP.element_types)
          , D = [];
        o()(window).on("resize", s().debounce((function() {
            s().each(D, (function(e) {
                e.checkHeaderExpander()
            }
            ))
        }
        ), 150));
        var S = _.default.extend({
            className: "feed-note-wrapper",
            events: {
                "click .js-note-toggle": "toggleText",
                "click .feed-note__header.expandable": "expandHeader",
                "click .js-amojo-reply": "onAmoJoReplyClick",
                "mouseover .feed-note__delivery-status": "handleDeliveryStatusHover",
                "paste .control-contenteditable__area": "_handlePaste"
            },
            _selectors: function() {
                return {
                    submit: ".js-note-submit, .js-task-submit, .js-todo-result, .js-task-result-button",
                    cancel: ".js-note-edit-cancel, .js-task-edit-cancel",
                    header: ".feed-note__header",
                    header_inner: ".feed-note__header-inner",
                    input: ".js-control-contenteditable-input",
                    contenteditable: ".control-contenteditable__area",
                    info_bubble: ".info-bubble",
                    ai_rewriter: ".js-feed-airewriter",
                    file_input: 'input[type="file"]'
                }
            },
            _classes: function() {
                return {
                    animate_entrance: "feed-note-wrapper_animate-entrance"
                }
            },
            initialize: function(e) {
                var t, n;
                _.default.prototype.initialize.apply(this, arguments),
                e = e || {},
                this.models = e.models || [],
                this.options = s().pick(e, (function(e, t) {
                    return "models" !== t
                }
                )),
                !this.model && e.models && (this.model = e.models[0]),
                s().each(this.models, (function(i) {
                    i.get("element_id") || (t = i.get("linked"),
                    n = t && t.id || e.element_id,
                    i.set("element_id", n))
                }
                ), this),
                s().each(this.models, (function(e) {
                    this.listenTo(e, "change:visible", this.toggleVisible),
                    this.listenTo(e, "render", s().bind(this._reRenderFromEvent, this)),
                    this.listenTo(e, "destroy", s().bind((function() {
                        1 === this.models.length && this.model === e || 2 === this.models.length && this.model.isNew() ? this.destroy(!0) : (this.models = s().without(this.models, e),
                        this.render(),
                        e === this.model && (this.model = s().first(this.models)))
                    }
                    ), this))
                }
                ), this),
                this.model.get("visible") || this.toggleVisible(),
                D.push(this),
                u().mixin(this, w.default)
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = D.indexOf(this);
                i > -1 && D.splice(i, 1),
                _.default.prototype.destroy.apply(this, t),
                s().isFunction(this.options.onDestroy) && this.options.onDestroy(this)
            },
            _handlePaste: function(e) {
                (0,
                A.pasteFiles)({
                    event: e,
                    fileInput: this._elem("file_input").get(0)
                })
            },
            initRewriterControl: function() {
                var e = this;
                !this.ai_rewriter_control && s().contains(["chat", "note"], this.options._type) && (this.ai_rewriter_control = this._addComponent(C.default, {
                    el: this._elem("ai_rewriter"),
                    getText: function() {
                        return e.getText()
                    },
                    setText: function(t) {
                        return e.setExistingText(t)
                    },
                    onLoad: this.options.toggleComposeLoader
                }))
            },
            toggleAiRewriter: function(e) {
                e ? this.initRewriterControl() : this.ai_rewriter_control && (this.ai_rewriter_control.destroy(),
                this.ai_rewriter_control = null)
            },
            initFieldsMention: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || this.options.getMainContactId()
                  , t = this.getTemplateParams({
                    entity_to_use: s().findWhere(this.options.getExtraData().elements, {
                        id: e
                    })
                })
                  , n = []
                  , i = (0,
                p.getFieldsAsObject)(!1);
                this._fields_mention && this._destroyComponent(this._fields_mention),
                s().each(t, (function(e, t) {
                    t = "{{".concat(t, "}}"),
                    s().isUndefined(i[t]) || n.push({
                        id: e,
                        option: i[t].name,
                        sort: i[t].sort,
                        element_type: i[t].element_type
                    })
                }
                )),
                this._fields_mention = this._addComponent(E.default, {
                    input: this._elem("input"),
                    contenteditable: this._elem("contenteditable"),
                    should_put_value: !0,
                    mentions: n
                })
            },
            _getTemplateName: function() {
                var e = this.model.get("object_type") || {}
                  , t = this.model.get("data") || {}
                  , n = t && t.params && t.params.service || null;
                return m.default._get(this.model.get("type"), e.code, n)
            },
            _getTemplate: function(e) {
                var t = "/tmpl/notes/types/".concat(this._getTemplateName(), ".twig");
                return "edit" === e && (t = "/tmpl/notes/defaults/note_edit.twig"),
                t
            },
            _getRenderClassName: function() {
                return []
            },
            _getUsers: function() {
                var e = this.options.getExtraData(this.model).users;
                return s().isEmpty(e) ? s().reduce((0,
                h.get)() || {}, (function(e, t) {
                    return e[t.id] = s().extend({}, t, {
                        full_name: t.option
                    }),
                    e
                }
                ), {}) : e
            },
            _getRenderParams: function(e) {
                return s().extend({}, this.model.toJSON(), {
                    is_edit: "edit" === e,
                    note_types: k,
                    main_element_type: this.options.element_type,
                    element_type_code: P[this.model.get("element_type")],
                    template: this._getTemplateName(),
                    is_free_user: APP.constant("user_rights").is_free_user,
                    current_user_id: (0,
                    h.current)("id"),
                    hide_linked: this.isLinkedFieldHidden(),
                    _links: this.model.links,
                    system_props: {
                        need_msec: (0,
                        h.current)("settings").need_msec || !1
                    },
                    extra: s().extend(this.options.getExtraData(this.model), {
                        users: this._getUsers()
                    })
                })
            },
            _reRenderFromEvent: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i;
                this._render.apply(this, function(e) {
                    if (Array.isArray(e))
                        return T(e)
                }(i = t) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(i) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return T(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
                    }
                }(i) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            },
            render: function() {
                return l()._preload(["/tmpl/notes/wrapper.twig"], s().bind(this._render, this))()
            },
            _render: function(e) {
                var t = this.model.get("object_type") || {}
                  , n = this.$el.hasClass(this._class("animate_entrance")) ? this._class("animate_entrance") : "";
                this.el.className = s().union([this.className, "".concat(this.className, "-").concat(this._getTemplateName()), n], this._getRenderClassName(e)).join(" "),
                this.el.style.height = "";
                var i = s().clone(this._getRenderParams(e));
                i.joined = s().sortBy(i.joined, (function(e) {
                    return e.data.text
                }
                ));
                var r = this._getHighlightParams();
                this.el.innerHTML = l()({
                    ref: this._getTemplate(e)
                }).render(s().isEmpty(r) ? i : o().extend(!0, {}, i, r)),
                s().isFunction(this._addSubscribers) && this._addSubscribers(i),
                m.default._isSystem(this.model.get("type"), t.code, this.model.get("note_type")) && this.el.classList.add("".concat(this.className, "_system")),
                "edit" === e && this.el.classList.add("".concat(this.className, "-in-edit")),
                this.model.get("id") && this.$el.attr("data-id", this.model.get("id")),
                !this.model.collection || this.el.parentNode && "[object DocumentFragment]" !== this.el.parentNode.toString() ? this._afterRender(e) : this.model.collection.once("views:tasks:autosize views:added", s().bind(this._afterRender, this, e))
            },
            _afterRender: function() {
                var e = this;
                setTimeout((function() {
                    e.checkHeaderExpander()
                }
                ))
            },
            isLinkedFieldHidden: function() {
                return !(!(0,
                f.isAmoChatsFullEnabled)() || "contacts" !== P[this.model.get("element_type")])
            },
            toggleVisible: function() {
                this.model.get("is_add") || (this.el.style.display = this.model.get("visible") ? "" : "none")
            },
            onAmoJoReplyClick: function(e) {
                e.stopPropagation(),
                this.model.trigger("notes:compose:switch", "chat", {
                    user_id: o()(e.currentTarget).attr("data-id")
                })
            },
            handleDeliveryStatusHover: function(e) {
                var t = o()(e.currentTarget).find(this._selector("info_bubble"));
                if (t.length) {
                    t.css("width", "max-content"),
                    t.removeClass("info-bubble--below");
                    var n = this.$el.offset().left + 10
                      , i = t.offset().left
                      , r = t.outerWidth();
                    if (n > i) {
                        var s = Math.min(Math.round(r + i - n), 425);
                        t.css("width", s)
                    } else
                        r > 425 && t.css("width", 425);
                    t.offset().top < 0 && t.addClass("info-bubble--below")
                }
            },
            toggleText: function(e) {
                var t = o()(e.currentTarget);
                e.preventDefault(),
                t.parent().hide().siblings().show(),
                this.model.trigger("notes:update-sticky")
            },
            expandHeader: function() {
                this._findElem("header").toggleClass("expanded"),
                this._findElem("header_inner").toggleClass("h-feed-note__header-expanded")
            },
            checkHeaderExpander: function() {
                if (m.default._isSystem(this.model.get("type"), (this.model.get("object_type") || {}).code)) {
                    var e = this._findElem("header_inner");
                    e.length && this._findElem("header").toggleClass("expandable", e[0].scrollWidth > e[0].offsetWidth)
                }
            },
            getContextMenuLinkTo: function() {
                var e = this.model.id
                  , t = this.model.get("msec_created_at") || this.model.get("created_at") || this.model.get("date_create")
                  , n = (0,
                d.removeQueryParam)(["t", "tid", "cid"]);
                return window.location.origin + window.location.pathname + (0,
                d.setQueryParam)({
                    t,
                    tid: e
                }, {
                    query_string: n,
                    only_query_string: !0
                })
            }
        });
        u().mixin(S, g.default, y.default, v.default, b.default, x.default);
        const R = S;
        var I = "../build/transpiled/interface/notes/views/note";
        window.define(I, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([I])
    }
    ,
    141686: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            get: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(880774)
          , s = n(886965)
          , a = n(804129);
        function l(e) {
            var t = {};
            return o().each(e, (function(e, n) {
                t[n.toLowerCase()] = e
            }
            )),
            t
        }
        function c() {
            var e = APP.constant("account").customers_enabled || !1
              , t = []
              , n = []
              , i = [APP.element_types.leads, APP.element_types.contacts, APP.element_types.companies]
              , c = [{
                name: (0,
                r.i18n)("Lead name"),
                id: "lead_name",
                element_type: APP.element_types.leads,
                marker: "{{lead.name}}",
                sort: -99
            }, {
                name: (0,
                r.i18n)("lead_status"),
                id: "status",
                element_type: APP.element_types.leads,
                marker: "{{lead.status}}",
                sort: -98
            }, {
                name: (0,
                r.i18n)("Budget"),
                id: "budget",
                element_type: APP.element_types.leads,
                marker: "{{lead.price}}",
                sort: -99
            }, {
                name: "".concat((0,
                r.i18n)("Lead"), " ").concat((0,
                r.i18n)("Client share page URL")),
                id: "personal_page_link",
                element_type: APP.element_types.leads,
                marker: "{{lead.personal_page_link}}",
                sort: -99
            }, {
                name: (0,
                r.i18n)("Contact name"),
                id: "cont_name",
                element_type: APP.element_types.contacts,
                marker: "{{contact.name}}",
                sort: -99
            }, {
                name: (0,
                r.i18n)("Company name"),
                id: "comp_name",
                element_type: APP.element_types.companies,
                marker: "{{company.name}}",
                sort: -99
            }, {
                name: (0,
                r.i18n)("First name"),
                id: "first_name",
                element_type: APP.element_types.contacts,
                marker: "{{contact.first_name}}",
                sort: -98
            }, {
                name: (0,
                r.i18n)("Last name"),
                id: "last_name",
                element_type: APP.element_types.contacts,
                marker: "{{contact.last_name}}",
                sort: -98
            }, {
                name: (0,
                r.i18n)("mail_template_marker_profile_name"),
                id: "profile_name",
                element_type: "profile",
                marker: "{{profile.name}}"
            }, {
                name: (0,
                r.i18n)("mail_template_marker_profile_phone"),
                id: "profile_phone",
                code: "PHONE",
                element_type: "profile",
                marker: "{{profile.phone}}"
            }];
            return e && (c = c.concat([{
                name: (0,
                r.i18n)("Name of customer"),
                id: "customer_name",
                element_type: APP.element_types.customers,
                marker: "{{customer.name}}",
                sort: -97
            }]),
            (0,
            a.isAmoChatsFullEnabled)() || (c = c.concat([{
                name: (0,
                r.i18n)("Expected amount"),
                id: "next_price",
                element_type: APP.element_types.customers,
                marker: "{{customer.next_price}}",
                sort: -96
            }, {
                name: (0,
                r.i18n)("Next purchase"),
                id: "next_date",
                element_type: APP.element_types.customers,
                marker: "{{customer.next_date}}",
                sort: -95
            }])),
            i.push(APP.element_types.customers)),
            o().each(i, (function(e) {
                var t = (0,
                s.convertElementType)(e, "single")
                  , n = (0,
                r.getEntityLang)(e);
                (!(0,
                a.isAmoChatsFullEnabled)() || (0,
                a.isAmoChatsFullEnabled)() && "contact" !== t) && (c = c.concat([{
                    name: "".concat(n, " ID"),
                    id: "".concat(e, "_id"),
                    element_type: e,
                    marker: "{{".concat(t, ".id}}"),
                    sort: -100
                }])),
                (0,
                a.isAmoChatsFullEnabled)() && ((0,
                a.isAmoChatsFullEnabled)() || o().contains(["customer", "contact"], t)) || (c = c.concat([{
                    name: "".concat(n, " ").concat((0,
                    r.i18n)("Responsible user").toLowerCase()),
                    id: "".concat(e, "_responsible"),
                    element_type: e,
                    marker: "{{".concat(t, ".responsible.name}}"),
                    sort: -93
                }, {
                    name: "".concat(n, " ").concat((0,
                    r.i18n)("Responsible user phone").toLowerCase()),
                    id: "".concat(e, "_responsible_phone"),
                    element_type: e,
                    marker: "{{".concat(t, ".responsible.phone}}"),
                    sort: -93
                }, {
                    name: "".concat(n, " ").concat((0,
                    r.i18n)("Responsible user").toLowerCase(), " (ID)"),
                    id: "".concat(e, "_responsible_id"),
                    element_type: e,
                    marker: "{{".concat(t, ".responsible.id}}"),
                    sort: -92
                }, {
                    name: "".concat(n, " ").concat((0,
                    r.i18n)("Responsible user").toLowerCase(), " (Email)"),
                    id: "".concat(e, "_responsible_email"),
                    element_type: e,
                    marker: "{{".concat(t, ".responsible.email}}"),
                    sort: -91
                }]))
            }
            )),
            o().each(APP.constant("account").predefined_cf, (function(e) {
                var t = l(e);
                o().each(t.element_types, (function(e) {
                    var i = (0,
                    s.convertElementType)(e, "single")
                      , l = o().clone(t)
                      , u = (0,
                    r.getEntityLang)(e)
                      , d = "".concat(u, " ").concat(l.name.toLowerCase());
                    switch (l.name = d,
                    l.element_type = e,
                    l.marker = "{{".concat(i, ".cf.").concat(t.id, "}}"),
                    t.code) {
                    case "SMART_ADDRESS":
                        o().each(t.sub_types, (function(n) {
                            var o = (0,
                            r.i18n)("cf_subtype_".concat(n));
                            c.push({
                                name: "".concat(t.name, " (").concat(o, ")"),
                                id: "".concat(t.id, "_").concat(n),
                                code: t.code,
                                element_type: e,
                                marker: "{{".concat(i, ".cf.").concat(t.id, ".").concat(n.toLowerCase(), "}}")
                            })
                        }
                        ));
                        break;
                    case "PHONE":
                    case "EMAIL":
                    case "IM":
                        o().each(t.enums_names, (function(n, o) {
                            c.push({
                                name: "".concat(d, " (").concat(n.MEDIUM, ")"),
                                id: "".concat(t.id, "_").concat(o),
                                code: t.code,
                                element_type: e,
                                marker: "{{".concat(i, ".cf.").concat(t.id, ".").concat(o.toLowerCase(), "}}")
                            })
                        }
                        ))
                    }
                    (!(0,
                    a.isAmoChatsFullEnabled)() || (0,
                    a.isAmoChatsFullEnabled)() && !o().contains(["POINTS", "POSITION"], l.code)) && n.push(l)
                }
                ))
            }
            )),
            o().each(APP.constant("account").cf, (function(e) {
                var n = l(e);
                o().each(n.element_types, (function(e) {
                    var i = (0,
                    s.convertElementType)(e, "single")
                      , r = o().clone(n)
                      , a = "catalog" === i ? ".".concat(e) : "";
                    r.element_type = e,
                    r.marker = "{{".concat(i).concat(a, ".cf.").concat(n.id, "}}"),
                    t.push(r)
                }
                ))
            }
            )),
            c.concat(n, t)
        }
        var u = "../build/transpiled/utils/account/fields_markers";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    397850: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            convertTemplateTypeToHumanText: () => f,
            getFieldByMarker: () => d,
            getFieldByName: () => h,
            getFieldNamesByTypes: () => _,
            getFieldsAsObject: () => l,
            getFieldsByType: () => c,
            getFieldsParams: () => u,
            replaceMarkersByNames: () => p
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(141686)
          , s = {}
          , a = null
          , l = function(e) {
            var t = o().keys(APP.constant("account").cf).length;
            return (e || a !== t) && (s = {},
            o().each((0,
            r.get)(), (function(e) {
                s[e.marker] = e
            }
            )),
            a = t),
            s
        }
          , c = function(e) {
            var t = [];
            return o().each((0,
            r.get)(), (function(n) {
                o().isUndefined(n.id) || o().isUndefined(n.name) || n.element_type === e && t.push({
                    id: n.marker,
                    numeric_id: n.id,
                    code: n.code,
                    option: n.name,
                    sort: n.sort,
                    element_type: n.element_type,
                    type: n.type_code
                })
            }
            )),
            t
        }
          , u = function(e) {
            var t = [];
            return o().isUndefined(e) || e.length <= 0 ? (o().each((0,
            r.get)(), (function(e) {
                t.push({
                    id: e.marker,
                    option: e.name,
                    sort: e.sort,
                    element_type: e.element_type
                })
            }
            )),
            o().sortBy(t, "sort")) : (o().each(e, (function(e) {
                var n = c(e);
                t = t.concat(n)
            }
            )),
            o().sortBy(t, "sort"))
        }
          , d = function(e) {
            return o().find((0,
            r.get)(), (function(t) {
                return t.marker === e
            }
            ))
        }
          , h = function(e) {
            return o().find((0,
            r.get)(), (function(t) {
                return t.name === e
            }
            ))
        }
          , p = function(e) {
            var t = u();
            if (!t.length)
                return e;
            var n = e.replace(/{{[a-zA-Z0-9._-]+}}/gm, (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = o().findWhere(t, {
                    id: e.trim()
                });
                return n ? "[".concat(n.option, "]") : e
            }
            ));
            return n
        }
          , f = function(e) {
            return "waba" === e ? "WhatsApp" : APP.constant("current_brand")
        }
          , _ = function(e, t) {
            return o().object(o().map(t, (function(t) {
                var n = e.find('input[data-type="'.concat(t, '"]'));
                return [t, o().map(n, (function(e) {
                    return e.getAttribute("name")
                }
                ))]
            }
            )))
        }
          , m = "../build/transpiled/utils/fields_params";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    887977: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            getSelectedText: () => c,
            insertContentAtPoint: () => d,
            insertContentAtSelection: () => u,
            restoreSelection: () => p,
            saveSelection: () => h,
            setCursorPosition: () => f,
            setCursorToEnd: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , r = n(55188)
          , s = n.n(r)
          , a = n(661533);
        function l(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        var c = function() {
            var e = "";
            return void 0 !== window.getSelection ? e = window.getSelection().toString() : void 0 !== document.selection && "Text" === document.selection.type && (e = document.selection.createRange().text),
            e
        }
          , u = function(e) {
            var t, n, i = o().parseHTML(e);
            window.getSelection && (t = window.getSelection()).getRangeAt && t.rangeCount && ((n = t.getRangeAt(0)).deleteContents(),
            s().each(i, (function(e) {
                n.insertNode(e),
                n.setStartAfter(e),
                n.setEndAfter(e)
            }
            )),
            t.removeAllRanges(),
            t.addRange(n))
        }
          , d = function(e, t) {
            var n, i, r, s = !1;
            return document.caretPositionFromPoint ? (i = (n = document.caretPositionFromPoint(e.x, e.y)).offsetNode,
            r = n.offset) : document.caretRangeFromPoint ? (i = (n = document.caretRangeFromPoint(e.x, e.y)).startContainer,
            r = n.startOffset) : document.body.createTextRange && (n = document.body.createTextRange()).moveToPoint(e.x, e.y),
            o()("html").hasClass("explorer") ? (n.pasteHTML(t.outerHTML),
            s = !0) : l(i, Text) && "true" === o()(i).closest("[contenteditable]").attr("contentEditable") && (i.parentNode.insertBefore(t, i.splitText(r)),
            s = !0),
            s
        }
          , h = function() {
            var e;
            if (window.getSelection) {
                if ((e = window.getSelection()).getRangeAt && e.rangeCount)
                    return e.getRangeAt(0)
            } else if (document.selection && document.selection.createRange)
                return document.selection.createRange();
            return null
        }
          , p = function(e) {
            var t;
            e && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(),
            t.addRange(e)) : document.selection && e.select && e.select())
        }
          , f = function(e, t) {
            var n, i;
            l(e, a) && e.focus().each((function(e, o) {
                if (o.setSelectionRange)
                    o.setSelectionRange(t, t);
                else if (o.getAttribute("contenteditable") && "false" !== o.contentEditable) {
                    i = window.getSelection(),
                    n = document.createRange();
                    for (var r = 0, s = null, a = 0, l = o.childNodes, c = function(e, t) {
                        n.setStart(e, t),
                        n.setEnd(e, t)
                    }, u = function() {
                        n.collapse(!0),
                        i.removeAllRanges(),
                        i.addRange(n),
                        o.focus()
                    }, d = 0; d < l.length; d++) {
                        var h = l[d]
                          , p = h.nodeType === Node.TEXT_NODE ? h.length : 0;
                        if (r + p >= t) {
                            s = h,
                            a = t - r;
                            break
                        }
                        r += p
                    }
                    if (s)
                        return c(s, a),
                        void u();
                    var f = l[l.length - 1];
                    if (f && f.nodeType === Node.TEXT_NODE)
                        return c(f, f.length),
                        void u();
                    var _ = document.createTextNode("");
                    o.appendChild(_),
                    c(_, 0),
                    u()
                }
            }
            ))
        }
          , _ = function(e) {
            s().contains(["textarea", "input"], e.get(0).tagName.toLowerCase()) ? f(e, e.val().length) : f(e, e.text().length)
        }
          , m = "../build/transpiled/utils/selection";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    817932: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p,
            processHighlights: () => h
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(827378)
          , s = n.n(r)
          , a = n(577486)
          , l = n(296760);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function u(e) {
            return function(e) {
                if (Array.isArray(e))
                    return c(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var d = function(e, t) {
            var n = e.split(new a.UnsafeRegExp(t,"i"));
            return 1 === n.length ? n : o().reduce(n, (function(e, i, o) {
                return o === n.length - 1 ? (e.push(i),
                e) : (e.push(i, {
                    value: t
                }),
                e)
            }
            ), [])
        }
          , h = function(e, t) {
            var n, i, r = function(e, t) {
                return o().reduce(t, (function(t, n, i) {
                    var r;
                    return i ? o().reduce(t, (function(e, t) {
                        var i;
                        if (o().isObject(t))
                            return e;
                        var r = e.indexOf(t)
                          , s = d(t, n);
                        return (i = e).splice.apply(i, [r, 1].concat(u(s))),
                        e
                    }
                    ), u(t)) : ((r = t).push.apply(r, u(d(e, n))),
                    t)
                }
                ), [])
            }(e, t);
            return n = r,
            i = o().reduce(n, (function(e, t, n) {
                var i = e[e.length - 1];
                return n ? o().isObject(t) ? o().isObject(i) ? (i.value += t.value,
                e) : (e.push(t),
                e) : !t.trim() && o().isObject(i) ? (i.value += t,
                e) : (e.push(t),
                e) : (e.push(t),
                e)
            }
            ), []),
            o().compact(i)
        };
        const p = function(e) {
            var t = e.children
              , n = e.highlights
              , i = e.className
              , r = void 0 === i ? "" : i
              , a = e.markClassName
              , c = e.converters
              , u = void 0 === c ? [] : c
              , d = e.lengthRef
              , p = function(e, t) {
                return o().reduce(t, (function(e, t) {
                    return t(e)
                }
                ), e)
            }(h(t, n), u);
            return d && (d.current = o().reduce(p, (function(e, t) {
                return o().isObject(t) ? e + t.value.length : e + t.length
            }
            ), 0)),
            s().createElement("span", {
                className: r
            }, o().map(p, (function(e, t) {
                return o().isObject(e) ? s().createElement(l.default, {
                    className: a,
                    key: t
                }, e.value) : s().createElement("span", {
                    key: t
                }, e)
            }
            )))
        }
    }
    ,
    296760: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(827378)
          , o = n.n(i);
        const r = function(e) {
            var t = e.children
              , n = void 0 === t ? "" : t
              , i = e.className
              , r = void 0 === i ? "" : i;
            return o().createElement("span", {
                className: r,
                style: {
                    background: r ? void 0 : "var(--palette-highlight-mark-background)",
                    color: r ? void 0 : "var(--palette-highlight-mark-text-color)"
                }
            }, n)
        }
    }
    ,
    498457: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(55188)
          , o = n.n(i)
          , r = function(e) {
            var t = e.match(/<a/);
            return o().isNull(t) || !o().isNumber(t.index) ? -1 : t.index
        }
          , s = function(e) {
            var t = e.match(/<a .+>/);
            return o().isNull(t) || !o().isNumber(t.index) ? -1 : t.index
        };
        const a = function(e) {
            return o().reduce(e, (function(e, t, n) {
                var i = e.length - 1
                  , a = e[i];
                return n ? o().isString(t) && o().isString(a) ? (e[i] = a + t,
                e) : o().isObject(t) && o().isString(a) && function(e) {
                    for (var t = "open", n = !1, i = !1, o = 0; e && o > -1; )
                        (o = "open" === t ? r(e) : s(e)) > -1 && "open" === t ? n = !0 : o > -1 && "closed" === t && (i = !0),
                        n && i ? (e = e.slice(o + 2),
                        n = !1,
                        i = !1,
                        t = "open") : t = "open" === t ? "closed" : "open";
                    return "open" === t && -1 === o
                }(a) ? (e[i] = a + t.value,
                e) : e.concat(t) : e.concat(t)
            }
            ), [])
        }
    }
    ,
    193727: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            EXT_FOR_COMPRESSION: () => s,
            compressImage: () => a
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(137233)
          , s = [".png", ".jpg", ".jpeg", ".bmp", ".webp"]
          , a = function(e) {
            var t = e.originalImage
              , n = e.imagePreviewHeight
              , i = e.imagePreviewWidth
              , a = (0,
            r.getFileExtension)(t.src);
            if (!o().contains(s, a))
                return Promise.reject("Format ".concat(a, " not supported for compression"));
            var l = document.createElement("canvas")
              , c = l.getContext("2d");
            if (!c)
                return Promise.reject("Canvas context is null");
            var u = t.naturalWidth
              , d = t.naturalHeight
              , h = n / d > i / u ? n / d * 4 : i / u * 4
              , p = u * h
              , f = d * h;
            return l.width = p,
            l.height = f,
            new Promise((function(e) {
                c.drawImage(t, 0, 0, u * h, d * h),
                l.toBlob((function(t) {
                    t && e(t)
                }
                ), "image/".concat(a.slice(1)), .8)
            }
            ))
        }
    }
    ,
    804317: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            pasteFiles: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , r = n(211792)
          , s = n(394369);
        function a(e, t, n, i, o, r, s) {
            try {
                var a = e[r](s)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        var l, c, u = (l = function(e) {
            var t, n, i;
            return function(e, t) {
                var n, i, o, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }
                ),
                r;
                function a(r) {
                    return function(a) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, r[1])).done)
                                        return o;
                                    switch (i = 0,
                                    o && (r = [2 & r[0], o.value]),
                                    r[0]) {
                                    case 0:
                                    case 1:
                                        o = r;
                                        break;
                                    case 4:
                                        return s.label++,
                                        {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        i = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                            s.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && s.label < o[1]) {
                                            s.label = o[1],
                                            o = r;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2],
                                            s.ops.push(r);
                                            break
                                        }
                                        o[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    r = t.call(e, s)
                                } catch (e) {
                                    r = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, a])
                    }
                }
            }(this, (function(a) {
                return t = e.event,
                n = e.fileInput,
                i = function(e) {
                    var t, n;
                    if (null == (t = "originalEvent"in e ? e.originalEvent.clipboardData : e.clipboardData) ? void 0 : t.getData("text/plain"))
                        return [];
                    var i = null !== (n = null == t ? void 0 : t.files) && void 0 !== n ? n : [];
                    return o().flatten(o().map(i, (function(e) {
                        var t = e.name
                          , n = e.type;
                        if (!o().contains(s.PICTURE_ACCEPTED_TYPES, n))
                            return [];
                        var i = o().last(t.split("."));
                        return [new File([e],"".concat((0,
                        r.v4)(), ".").concat(i),{
                            type: n
                        })]
                    }
                    )))
                }(t),
                i.length > 0 && (function(e) {
                    var t = e.fileInput
                      , n = e.files
                      , i = new DataTransfer;
                    o().each(n, (function(e) {
                        i.items.add(e)
                    }
                    )),
                    t.files = i.files
                }({
                    fileInput: n,
                    files: i
                }),
                n.dispatchEvent(new Event("change"))),
                [2]
            }
            ))
        }
        ,
        c = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, i) {
                var o = l.apply(e, t);
                function r(e) {
                    a(o, n, i, r, s, "next", e)
                }
                function s(e) {
                    a(o, n, i, r, s, "throw", e)
                }
                r(void 0)
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
    211792: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            NIL: () => a.default,
            parse: () => d.default,
            stringify: () => u.default,
            v1: () => i.default,
            v3: () => o.default,
            v4: () => r.default,
            v5: () => s.default,
            validate: () => c.default,
            version: () => l.default
        });
        var i = n(317984)
          , o = n(964711)
          , r = n(870942)
          , s = n(475585)
          , a = n(791513)
          , l = n(943732)
          , c = n(487995)
          , u = n(914325)
          , d = n(364015)
    }
    ,
    481965: (e, t, n) => {
        "use strict";
        function i(e) {
            return 14 + (e + 64 >>> 9 << 4) + 1
        }
        function o(e, t) {
            const n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function r(e, t, n, i, r, s) {
            return o((a = o(o(t, e), o(i, s))) << (l = r) | a >>> 32 - l, n);
            var a, l
        }
        function s(e, t, n, i, o, s, a) {
            return r(t & n | ~t & i, e, t, o, s, a)
        }
        function a(e, t, n, i, o, s, a) {
            return r(t & i | n & ~i, e, t, o, s, a)
        }
        function l(e, t, n, i, o, s, a) {
            return r(t ^ n ^ i, e, t, o, s, a)
        }
        function c(e, t, n, i, o, s, a) {
            return r(n ^ (t | ~i), e, t, o, s, a)
        }
        n.r(t),
        n.d(t, {
            default: () => u
        });
        const u = function(e) {
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = new Uint8Array(t.length);
                for (let n = 0; n < t.length; ++n)
                    e[n] = t.charCodeAt(n)
            }
            return function(e) {
                const t = []
                  , n = 32 * e.length
                  , i = "0123456789abcdef";
                for (let o = 0; o < n; o += 8) {
                    const n = e[o >> 5] >>> o % 32 & 255
                      , r = parseInt(i.charAt(n >>> 4 & 15) + i.charAt(15 & n), 16);
                    t.push(r)
                }
                return t
            }(function(e, t) {
                e[t >> 5] |= 128 << t % 32,
                e[i(t) - 1] = t;
                let n = 1732584193
                  , r = -271733879
                  , u = -1732584194
                  , d = 271733878;
                for (let t = 0; t < e.length; t += 16) {
                    const i = n
                      , h = r
                      , p = u
                      , f = d;
                    n = s(n, r, u, d, e[t], 7, -680876936),
                    d = s(d, n, r, u, e[t + 1], 12, -389564586),
                    u = s(u, d, n, r, e[t + 2], 17, 606105819),
                    r = s(r, u, d, n, e[t + 3], 22, -1044525330),
                    n = s(n, r, u, d, e[t + 4], 7, -176418897),
                    d = s(d, n, r, u, e[t + 5], 12, 1200080426),
                    u = s(u, d, n, r, e[t + 6], 17, -1473231341),
                    r = s(r, u, d, n, e[t + 7], 22, -45705983),
                    n = s(n, r, u, d, e[t + 8], 7, 1770035416),
                    d = s(d, n, r, u, e[t + 9], 12, -1958414417),
                    u = s(u, d, n, r, e[t + 10], 17, -42063),
                    r = s(r, u, d, n, e[t + 11], 22, -1990404162),
                    n = s(n, r, u, d, e[t + 12], 7, 1804603682),
                    d = s(d, n, r, u, e[t + 13], 12, -40341101),
                    u = s(u, d, n, r, e[t + 14], 17, -1502002290),
                    r = s(r, u, d, n, e[t + 15], 22, 1236535329),
                    n = a(n, r, u, d, e[t + 1], 5, -165796510),
                    d = a(d, n, r, u, e[t + 6], 9, -1069501632),
                    u = a(u, d, n, r, e[t + 11], 14, 643717713),
                    r = a(r, u, d, n, e[t], 20, -373897302),
                    n = a(n, r, u, d, e[t + 5], 5, -701558691),
                    d = a(d, n, r, u, e[t + 10], 9, 38016083),
                    u = a(u, d, n, r, e[t + 15], 14, -660478335),
                    r = a(r, u, d, n, e[t + 4], 20, -405537848),
                    n = a(n, r, u, d, e[t + 9], 5, 568446438),
                    d = a(d, n, r, u, e[t + 14], 9, -1019803690),
                    u = a(u, d, n, r, e[t + 3], 14, -187363961),
                    r = a(r, u, d, n, e[t + 8], 20, 1163531501),
                    n = a(n, r, u, d, e[t + 13], 5, -1444681467),
                    d = a(d, n, r, u, e[t + 2], 9, -51403784),
                    u = a(u, d, n, r, e[t + 7], 14, 1735328473),
                    r = a(r, u, d, n, e[t + 12], 20, -1926607734),
                    n = l(n, r, u, d, e[t + 5], 4, -378558),
                    d = l(d, n, r, u, e[t + 8], 11, -2022574463),
                    u = l(u, d, n, r, e[t + 11], 16, 1839030562),
                    r = l(r, u, d, n, e[t + 14], 23, -35309556),
                    n = l(n, r, u, d, e[t + 1], 4, -1530992060),
                    d = l(d, n, r, u, e[t + 4], 11, 1272893353),
                    u = l(u, d, n, r, e[t + 7], 16, -155497632),
                    r = l(r, u, d, n, e[t + 10], 23, -1094730640),
                    n = l(n, r, u, d, e[t + 13], 4, 681279174),
                    d = l(d, n, r, u, e[t], 11, -358537222),
                    u = l(u, d, n, r, e[t + 3], 16, -722521979),
                    r = l(r, u, d, n, e[t + 6], 23, 76029189),
                    n = l(n, r, u, d, e[t + 9], 4, -640364487),
                    d = l(d, n, r, u, e[t + 12], 11, -421815835),
                    u = l(u, d, n, r, e[t + 15], 16, 530742520),
                    r = l(r, u, d, n, e[t + 2], 23, -995338651),
                    n = c(n, r, u, d, e[t], 6, -198630844),
                    d = c(d, n, r, u, e[t + 7], 10, 1126891415),
                    u = c(u, d, n, r, e[t + 14], 15, -1416354905),
                    r = c(r, u, d, n, e[t + 5], 21, -57434055),
                    n = c(n, r, u, d, e[t + 12], 6, 1700485571),
                    d = c(d, n, r, u, e[t + 3], 10, -1894986606),
                    u = c(u, d, n, r, e[t + 10], 15, -1051523),
                    r = c(r, u, d, n, e[t + 1], 21, -2054922799),
                    n = c(n, r, u, d, e[t + 8], 6, 1873313359),
                    d = c(d, n, r, u, e[t + 15], 10, -30611744),
                    u = c(u, d, n, r, e[t + 6], 15, -1560198380),
                    r = c(r, u, d, n, e[t + 13], 21, 1309151649),
                    n = c(n, r, u, d, e[t + 4], 6, -145523070),
                    d = c(d, n, r, u, e[t + 11], 10, -1120210379),
                    u = c(u, d, n, r, e[t + 2], 15, 718787259),
                    r = c(r, u, d, n, e[t + 9], 21, -343485551),
                    n = o(n, i),
                    r = o(r, h),
                    u = o(u, p),
                    d = o(d, f)
                }
                return [n, r, u, d]
            }(function(e) {
                if (0 === e.length)
                    return [];
                const t = 8 * e.length
                  , n = new Uint32Array(i(t));
                for (let i = 0; i < t; i += 8)
                    n[i >> 5] |= (255 & e[i / 8]) << i % 32;
                return n
            }(e), 8 * e.length))
        }
    }
    ,
    718832: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => i
        });
        const i = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        }
    }
    ,
    791513: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => i
        });
        const i = "00000000-0000-0000-0000-000000000000"
    }
    ,
    364015: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(487995);
        const o = function(e) {
            if (!(0,
            i.default)(e))
                throw TypeError("Invalid UUID");
            let t;
            const n = new Uint8Array(16);
            return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24,
            n[1] = t >>> 16 & 255,
            n[2] = t >>> 8 & 255,
            n[3] = 255 & t,
            n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8,
            n[5] = 255 & t,
            n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8,
            n[7] = 255 & t,
            n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8,
            n[9] = 255 & t,
            n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255,
            n[11] = t / 4294967296 & 255,
            n[12] = t >>> 24 & 255,
            n[13] = t >>> 16 & 255,
            n[14] = t >>> 8 & 255,
            n[15] = 255 & t,
            n
        }
    }
    ,
    370325: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => i
        });
        const i = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
    }
    ,
    403135: (e, t, n) => {
        "use strict";
        let i;
        n.r(t),
        n.d(t, {
            default: () => r
        });
        const o = new Uint8Array(16);
        function r() {
            if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !i))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return i(o)
        }
    }
    ,
    301394: (e, t, n) => {
        "use strict";
        function i(e, t, n, i) {
            switch (e) {
            case 0:
                return t & n ^ ~t & i;
            case 1:
            case 3:
                return t ^ n ^ i;
            case 2:
                return t & n ^ t & i ^ n & i
            }
        }
        function o(e, t) {
            return e << t | e >>> 32 - t
        }
        n.r(t),
        n.d(t, {
            default: () => r
        });
        const r = function(e) {
            const t = [1518500249, 1859775393, 2400959708, 3395469782]
              , n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = [];
                for (let n = 0; n < t.length; ++n)
                    e.push(t.charCodeAt(n))
            } else
                Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            const r = e.length / 4 + 2
              , s = Math.ceil(r / 16)
              , a = new Array(s);
            for (let t = 0; t < s; ++t) {
                const n = new Uint32Array(16);
                for (let i = 0; i < 16; ++i)
                    n[i] = e[64 * t + 4 * i] << 24 | e[64 * t + 4 * i + 1] << 16 | e[64 * t + 4 * i + 2] << 8 | e[64 * t + 4 * i + 3];
                a[t] = n
            }
            a[s - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
            a[s - 1][14] = Math.floor(a[s - 1][14]),
            a[s - 1][15] = 8 * (e.length - 1) & 4294967295;
            for (let e = 0; e < s; ++e) {
                const r = new Uint32Array(80);
                for (let t = 0; t < 16; ++t)
                    r[t] = a[e][t];
                for (let e = 16; e < 80; ++e)
                    r[e] = o(r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16], 1);
                let s = n[0]
                  , l = n[1]
                  , c = n[2]
                  , u = n[3]
                  , d = n[4];
                for (let e = 0; e < 80; ++e) {
                    const n = Math.floor(e / 20)
                      , a = o(s, 5) + i(n, l, c, u) + d + t[n] + r[e] >>> 0;
                    d = u,
                    u = c,
                    c = o(l, 30) >>> 0,
                    l = s,
                    s = a
                }
                n[0] = n[0] + s >>> 0,
                n[1] = n[1] + l >>> 0,
                n[2] = n[2] + c >>> 0,
                n[3] = n[3] + u >>> 0,
                n[4] = n[4] + d >>> 0
            }
            return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
        }
    }
    ,
    914325: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s,
            unsafeStringify: () => r
        });
        var i = n(487995);
        const o = [];
        for (let e = 0; e < 256; ++e)
            o.push((e + 256).toString(16).slice(1));
        function r(e, t=0) {
            return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }
        const s = function(e, t=0) {
            const n = r(e, t);
            if (!(0,
            i.default)(n))
                throw TypeError("Stringified UUID is invalid");
            return n
        }
    }
    ,
    317984: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(403135)
          , o = n(914325);
        let r, s, a = 0, l = 0;
        const c = function(e, t, n) {
            let c = t && n || 0;
            const u = t || new Array(16);
            let d = (e = e || {}).node || r
              , h = void 0 !== e.clockseq ? e.clockseq : s;
            if (null == d || null == h) {
                const t = e.random || (e.rng || i.default)();
                null == d && (d = r = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                null == h && (h = s = 16383 & (t[6] << 8 | t[7]))
            }
            let p = void 0 !== e.msecs ? e.msecs : Date.now()
              , f = void 0 !== e.nsecs ? e.nsecs : l + 1;
            const _ = p - a + (f - l) / 1e4;
            if (_ < 0 && void 0 === e.clockseq && (h = h + 1 & 16383),
            (_ < 0 || p > a) && void 0 === e.nsecs && (f = 0),
            f >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            a = p,
            l = f,
            s = h,
            p += 122192928e5;
            const m = (1e4 * (268435455 & p) + f) % 4294967296;
            u[c++] = m >>> 24 & 255,
            u[c++] = m >>> 16 & 255,
            u[c++] = m >>> 8 & 255,
            u[c++] = 255 & m;
            const g = p / 4294967296 * 1e4 & 268435455;
            u[c++] = g >>> 8 & 255,
            u[c++] = 255 & g,
            u[c++] = g >>> 24 & 15 | 16,
            u[c++] = g >>> 16 & 255,
            u[c++] = h >>> 8 | 128,
            u[c++] = 255 & h;
            for (let e = 0; e < 6; ++e)
                u[c + e] = d[e];
            return t || (0,
            o.unsafeStringify)(u)
        }
    }
    ,
    964711: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(926616)
          , o = n(481965);
        const r = (0,
        i.default)("v3", 48, o.default)
    }
    ,
    926616: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            DNS: () => r,
            URL: () => s,
            default: () => a
        });
        var i = n(914325)
          , o = n(364015);
        const r = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
          , s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function a(e, t, n) {
            function a(e, r, s, a) {
                var l;
                if ("string" == typeof e && (e = function(e) {
                    e = unescape(encodeURIComponent(e));
                    const t = [];
                    for (let n = 0; n < e.length; ++n)
                        t.push(e.charCodeAt(n));
                    return t
                }(e)),
                "string" == typeof r && (r = (0,
                o.default)(r)),
                16 !== (null === (l = r) || void 0 === l ? void 0 : l.length))
                    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let c = new Uint8Array(16 + e.length);
                if (c.set(r),
                c.set(e, r.length),
                c = n(c),
                c[6] = 15 & c[6] | t,
                c[8] = 63 & c[8] | 128,
                s) {
                    a = a || 0;
                    for (let e = 0; e < 16; ++e)
                        s[a + e] = c[e];
                    return s
                }
                return (0,
                i.unsafeStringify)(c)
            }
            try {
                a.name = e
            } catch (e) {}
            return a.DNS = r,
            a.URL = s,
            a
        }
    }
    ,
    870942: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var i = n(718832)
          , o = n(403135)
          , r = n(914325);
        const s = function(e, t, n) {
            if (i.default.randomUUID && !t && !e)
                return i.default.randomUUID();
            const s = (e = e || {}).random || (e.rng || o.default)();
            if (s[6] = 15 & s[6] | 64,
            s[8] = 63 & s[8] | 128,
            t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e)
                    t[n + e] = s[e];
                return t
            }
            return (0,
            r.unsafeStringify)(s)
        }
    }
    ,
    475585: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(926616)
          , o = n(301394);
        const r = (0,
        i.default)("v5", 80, o.default)
    }
    ,
    487995: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(370325);
        const o = function(e) {
            return "string" == typeof e && i.default.test(e)
        }
    }
    ,
    943732: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(487995);
        const o = function(e) {
            if (!(0,
            i.default)(e))
                throw TypeError("Invalid UUID");
            return parseInt(e.slice(14, 15), 16)
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
        e._sentryDebugIds[t] = "2765f140-2efd-4047-8e07-78cedcd374fb",
        e._sentryDebugIdIdentifier = "sentry-dbid-2765f140-2efd-4047-8e07-78cedcd374fb")
    } catch (e) {}
}();
//# sourceMappingURL=40182.cfb5bf8fb0e90c11f39d.js.map
