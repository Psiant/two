/*! For license information please see 95882.c131f8be75f5da3ac6da.js.LICENSE.txt */
(window.webpackChunk = window.webpackChunk || []).push([[95882], {
    395882: (e, t, n) => {
        var a, i = n(661533), r = n(661533);
        !function(e) {
            "use strict";
            var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype
              , n = e.Blob && function() {
                try {
                    return Boolean(new Blob)
                } catch (e) {
                    return !1
                }
            }()
              , a = n && e.Uint8Array && function() {
                try {
                    return 100 === new Blob([new Uint8Array(100)]).size
                } catch (e) {
                    return !1
                }
            }()
              , i = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder
              , r = (n || i) && e.atob && e.ArrayBuffer && e.Uint8Array && function(e) {
                var t, r, o, s, l, u;
                for (t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURIComponent(e.split(",")[1]),
                r = new ArrayBuffer(t.length),
                o = new Uint8Array(r),
                s = 0; s < t.length; s += 1)
                    o[s] = t.charCodeAt(s);
                return l = e.split(",")[0].split(":")[1].split(";")[0],
                n ? new Blob([a ? o : r],{
                    type: l
                }) : ((u = new i).append(r),
                u.getBlob(l))
            }
            ;
            e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function(e, n, a) {
                a && t.toDataURL && r ? e(r(this.toDataURL(n, a))) : e(this.mozGetAsFile("blob", n))
            }
            : t.toDataURL && r && (t.toBlob = function(e, t, n) {
                e(r(this.toDataURL(t, n)))
            }
            )),
            e.dataURLtoBlob = r
        }(window),
        function(e, t) {
            "use strict";
            var n = 1
              , a = function() {}
              , r = e.document
              , o = r.doctype || {}
              , s = e.navigator.userAgent
              , l = e.createObjectURL && e || e.URL && URL.revokeObjectURL && URL || e.webkitURL && webkitURL
              , u = e.Blob
              , c = e.File
              , f = e.FileReader
              , d = e.FormData
              , p = e.XMLHttpRequest
              , h = i
              , m = !(!(c && f && (e.Uint8Array || d || p.prototype.sendAsBinary)) || /safari\//i.test(s) && !/chrome\//i.test(s) && /windows/i.test(s))
              , g = m && "withCredentials"in new p
              , v = m && !!u && !!(u.prototype.webkitSlice || u.prototype.mozSlice || u.prototype.slice)
              , y = e.dataURLtoBlob
              , w = /img/i
              , b = /canvas/i
              , A = /img|canvas/i
              , x = /input/i
              , I = /^data:[^,]+,/
              , F = e.Math
              , _ = function(t) {
                return (t = new e.Number(F.pow(1024, t))).from = function(e) {
                    return F.round(e * this)
                }
                ,
                t
            }
              , R = {}
              , T = []
              , E = "abort progress error load loadend"
              , C = "status statusText readyState response responseXML responseText responseBody".split(" ")
              , D = "currentTarget"
              , k = "preventDefault"
              , P = function(e) {
                return e && "length"in e
            }
              , U = function(e, t, n) {
                if (e)
                    if (P(e))
                        for (var a = 0, i = e.length; a < i; a++)
                            a in e && t.call(n, e[a], a, e);
                    else
                        for (var r in e)
                            e.hasOwnProperty(r) && t.call(n, e[r], r, e)
            }
              , L = function(e) {
                for (var t = arguments, n = 1, a = function(t, n) {
                    e[n] = t
                }; n < t.length; n++)
                    U(t[n], a);
                return e
            }
              , B = function(e, t, n) {
                if (e) {
                    var a = j.uid(e);
                    R[a] || (R[a] = {});
                    var i = f && e && e instanceof f;
                    U(t.split(/\s+/), (function(t) {
                        h && !i ? h.event.add(e, t, n) : (R[a][t] || (R[a][t] = []),
                        R[a][t].push(n),
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
                    }
                    ))
                }
            }
              , S = function(e, t, n) {
                if (e) {
                    var a = j.uid(e)
                      , i = R[a] || {}
                      , r = f && e && e instanceof f;
                    U(t.split(/\s+/), (function(t) {
                        if (h && !r)
                            h.event.remove(e, t, n);
                        else {
                            for (var a = i[t] || [], o = a.length; o--; )
                                if (a[o] === n) {
                                    a.splice(o, 1);
                                    break
                                }
                            e.addEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                        }
                    }
                    ))
                }
            }
              , z = function(e, t, n) {
                B(e, t, (function a(i) {
                    S(e, t, a),
                    n(i)
                }
                ))
            }
              , H = function(t) {
                return t.target || (t.target = e.event && e.event.srcElement || r),
                3 === t.target.nodeType && (t.target = t.target.parentNode),
                t
            }
              , M = function(e) {
                var t = r.createElement("input");
                return t.setAttribute("type", "file"),
                e in t
            }
              , j = {
                version: "2.0.5",
                cors: !1,
                html5: !0,
                media: !1,
                formData: !0,
                multiPassResize: !0,
                debug: !1,
                pingUrl: !1,
                multiFlash: !1,
                flashAbortTimeout: 0,
                withCredentials: !0,
                staticPath: "./dist/",
                flashUrl: 0,
                flashImageUrl: 0,
                postNameConcat: function(e, t) {
                    return e + (null != t ? "[" + t + "]" : "")
                },
                ext2mime: {
                    jpg: "image/jpeg",
                    tif: "image/tiff",
                    txt: "text/plain"
                },
                accept: {
                    "image/*": "art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd",
                    "audio/*": "m4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs",
                    "video/*": "m4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl"
                },
                uploadRetry: 0,
                networkDownRetryTimeout: 5e3,
                chunkSize: 0,
                chunkUploadRetry: 0,
                chunkNetworkDownRetryTimeout: 2e3,
                KB: _(1),
                MB: _(2),
                GB: _(3),
                TB: _(4),
                EMPTY_PNG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=",
                expando: "fileapi" + (new Date).getTime(),
                uid: function(e) {
                    return e ? e[j.expando] = e[j.expando] || j.uid() : (++n,
                    j.expando + n)
                },
                log: function() {
                    j.debug && e.console && console.log && (console.log.apply ? console.log.apply(console, arguments) : console.log([].join.call(arguments, " ")))
                },
                newImage: function(e, t) {
                    var n = r.createElement("img");
                    return t && j.event.one(n, "error load", (function(e) {
                        t("error" == e.type, n),
                        n = null
                    }
                    )),
                    n.src = e,
                    n
                },
                getXHR: function() {
                    var t;
                    if (p)
                        t = new p;
                    else if (e.ActiveXObject)
                        try {
                            t = new ActiveXObject("MSXML2.XMLHttp.3.0")
                        } catch (e) {
                            t = new ActiveXObject("Microsoft.XMLHTTP")
                        }
                    return t
                },
                isArray: P,
                support: {
                    dnd: g && "ondrop"in r.createElement("div"),
                    cors: g,
                    html5: m,
                    chunked: v,
                    dataURI: !0,
                    accept: M("accept"),
                    multiple: M("multiple")
                },
                event: {
                    on: B,
                    off: S,
                    one: z,
                    fix: H
                },
                throttle: function(t, n) {
                    var a, i;
                    return function() {
                        i = arguments,
                        a || (t.apply(e, i),
                        a = setTimeout((function() {
                            a = 0,
                            t.apply(e, i)
                        }
                        ), n))
                    }
                },
                F: function() {},
                parseJSON: function(t) {
                    return e.JSON && JSON.parse ? JSON.parse(t) : new Function("return (" + t.replace(/([\r\n])/g, "\\$1") + ");")()
                },
                trim: function(e) {
                    return (e = String(e)).trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                defer: function() {
                    var e, n, i = [], r = {
                        resolve: function(t, o) {
                            for (r.resolve = a,
                            n = t || !1,
                            e = o; o = i.shift(); )
                                o(n, e)
                        },
                        then: function(a) {
                            n !== t ? a(n, e) : i.push(a)
                        }
                    };
                    return r
                },
                queue: function(e) {
                    var t = 0
                      , n = 0
                      , a = !1
                      , i = !1
                      , r = {
                        inc: function() {
                            n++
                        },
                        next: function() {
                            t++,
                            setTimeout(r.check, 0)
                        },
                        check: function() {
                            t >= n && !a && r.end()
                        },
                        isFail: function() {
                            return a
                        },
                        fail: function() {
                            !a && e(a = !0)
                        },
                        end: function() {
                            i || (i = !0,
                            e())
                        }
                    };
                    return r
                },
                each: U,
                afor: function(e, t) {
                    var n = 0
                      , a = e.length;
                    P(e) && a-- ? function i() {
                        t(a != n && i, e[n], n++)
                    }() : t(!1)
                },
                extend: L,
                isFile: function(e) {
                    return m && e && e instanceof c
                },
                isBlob: function(e) {
                    return m && e && e instanceof u
                },
                isCanvas: function(e) {
                    return e && b.test(e.nodeName)
                },
                getFilesFilter: function(e) {
                    return (e = "string" == typeof e ? e : e.getAttribute && e.getAttribute("accept") || "") ? new RegExp("(" + e.replace(/\./g, "\\.").replace(/,/g, "|") + ")$","i") : /./
                },
                readAsDataURL: function(e, t) {
                    j.isCanvas(e) ? O(e, t, "load", j.toDataURL(e)) : q(e, t, "DataURL")
                },
                readAsBinaryString: function(e, t) {
                    N("BinaryString") ? q(e, t, "BinaryString") : q(e, (function(e) {
                        if ("load" == e.type)
                            try {
                                e.result = j.toBinaryString(e.result)
                            } catch (t) {
                                e.type = "error",
                                e.message = t.toString()
                            }
                        t(e)
                    }
                    ), "DataURL")
                },
                readAsArrayBuffer: function(e, t) {
                    q(e, t, "ArrayBuffer")
                },
                readAsText: function(e, t, n) {
                    n || (n = t,
                    t = "utf-8"),
                    q(e, n, "Text", t)
                },
                toDataURL: function(e, t) {
                    return "string" == typeof e ? e : e.toDataURL ? e.toDataURL(t || "image/png") : void 0
                },
                toBinaryString: function(t) {
                    return e.atob(j.toDataURL(t).replace(I, ""))
                },
                readAsImage: function(e, n, a) {
                    if (j.isFile(e))
                        if (l) {
                            var i = l.createObjectURL(e);
                            i === t ? O(e, n, "error") : j.readAsImage(i, n, a)
                        } else
                            j.readAsDataURL(e, (function(t) {
                                "load" == t.type ? j.readAsImage(t.result, n, a) : (a || "error" == t.type) && O(e, n, t, null, {
                                    loaded: t.loaded,
                                    total: t.total
                                })
                            }
                            ));
                    else if (j.isCanvas(e))
                        O(e, n, "load", e);
                    else if (w.test(e.nodeName))
                        if (e.complete)
                            O(e, n, "load", e);
                        else {
                            var r = "error abort load";
                            z(e, r, (function t(a) {
                                "load" == a.type && l && l.revokeObjectURL(e.src),
                                S(e, r, t),
                                O(e, n, a, e)
                            }
                            ))
                        }
                    else if (e.iframe)
                        O(e, n, {
                            type: "error"
                        });
                    else {
                        var o = j.newImage(e.dataURL || e);
                        j.readAsImage(o, n, a)
                    }
                },
                checkFileObj: function(e) {
                    var t = {}
                      , n = j.accept;
                    return "object" == typeof e ? t = e : t.name = (e + "").split(/\\|\//g).pop(),
                    null == t.type && (t.type = t.name.split(".").pop()),
                    U(n, (function(e, n) {
                        ((e = new RegExp(e.replace(/\s/g, "|"),"i")).test(t.type) || j.ext2mime[t.type]) && (t.type = j.ext2mime[t.type] || n.split("/")[0] + "/" + t.type)
                    }
                    )),
                    t
                },
                getDropFiles: function(e, t) {
                    var n = []
                      , a = K(e)
                      , i = P(a.items) && a.items[0] && X(a.items[0])
                      , r = j.queue((function() {
                        t(n)
                    }
                    ));
                    U((i ? a.items : a.files) || [], (function(e) {
                        r.inc();
                        try {
                            i ? W(e, (function(e, t) {
                                e ? j.log("[err] getDropFiles:", e) : n.push.apply(n, t),
                                r.next()
                            }
                            )) : function(e, t) {
                                if (!e.type && e.size % 4096 == 0 && e.size <= 102400)
                                    if (f)
                                        try {
                                            var n = new f;
                                            z(n, E, (function(e) {
                                                var a = "error" != e.type;
                                                t(a),
                                                a && n.abort()
                                            }
                                            )),
                                            n.readAsDataURL(e)
                                        } catch (e) {
                                            t(!1)
                                        }
                                    else
                                        t(null);
                                else
                                    t(!0)
                            }(e, (function(t) {
                                t && n.push(e),
                                r.next()
                            }
                            ))
                        } catch (e) {
                            r.next(),
                            j.log("[err] getDropFiles: ", e)
                        }
                    }
                    )),
                    r.check()
                },
                getFiles: function(e, t, n) {
                    var a = [];
                    return n ? (j.filterFiles(j.getFiles(e), t, n),
                    null) : (e.jquery && (e.each((function() {
                        a = a.concat(j.getFiles(this))
                    }
                    )),
                    e = a,
                    a = []),
                    "string" == typeof t && (t = j.getFilesFilter(t)),
                    e.originalEvent ? e = H(e.originalEvent) : e.srcElement && (e = H(e)),
                    e.dataTransfer ? e = e.dataTransfer : e.target && (e = e.target),
                    e.files ? (a = e.files,
                    m || (a[0].blob = e,
                    a[0].iframe = !0)) : !m && G(e) ? j.trim(e.value) && ((a = [j.checkFileObj(e.value)])[0].blob = e,
                    a[0].iframe = !0) : P(e) && (a = e),
                    j.filter(a, (function(e) {
                        return !t || t.test(e.name)
                    }
                    )))
                },
                getTotalSize: function(e) {
                    for (var t = 0, n = e && e.length; n--; )
                        t += e[n].size;
                    return t
                },
                getInfo: function(e, t) {
                    var n = {}
                      , a = T.concat();
                    j.isFile(e) ? function i() {
                        var r = a.shift();
                        r ? r.test(e.type) ? r(e, (function(e, a) {
                            e ? t(e) : (L(n, a),
                            i())
                        }
                        )) : i() : t(!1, n)
                    }() : t("not_support_info", n)
                },
                addInfoReader: function(e, t) {
                    t.test = function(t) {
                        return e.test(t)
                    }
                    ,
                    T.push(t)
                },
                filter: function(e, t) {
                    for (var n, a = [], i = 0, r = e.length; i < r; i++)
                        i in e && (n = e[i],
                        t.call(n, n, i, e) && a.push(n));
                    return a
                },
                filterFiles: function(e, t, n) {
                    if (e.length) {
                        var a, i = e.concat(), r = [], o = [];
                        !function e() {
                            i.length ? (a = i.shift(),
                            j.getInfo(a, (function(n, i) {
                                (t(a, !n && i) ? r : o).push(a),
                                e()
                            }
                            ))) : n(r, o)
                        }()
                    } else
                        n([], e)
                },
                upload: function(e) {
                    (e = L({
                        jsonp: "callback",
                        prepare: j.F,
                        beforeupload: j.F,
                        upload: j.F,
                        fileupload: j.F,
                        fileprogress: j.F,
                        filecomplete: j.F,
                        progress: j.F,
                        complete: j.F,
                        pause: j.F,
                        imageOriginal: !0,
                        chunkSize: j.chunkSize,
                        chunkUploadRetry: j.chunkUploadRetry,
                        uploadRetry: j.uploadRetry
                    }, e)).imageAutoOrientation && !e.imageTransform && (e.imageTransform = {
                        rotate: "auto"
                    });
                    var t, n = new j.XHR(e), i = this._getFilesDataArray(e.files), r = this, o = 0, s = 0, l = !1;
                    return U(i, (function(e) {
                        o += e.size
                    }
                    )),
                    n.files = [],
                    U(i, (function(e) {
                        n.files.push(e.file)
                    }
                    )),
                    n.total = o,
                    n.loaded = 0,
                    n.filesLeft = i.length,
                    e.beforeupload(n, e),
                    t = function() {
                        var u, c = i.shift(), f = c && c.file, d = !1, p = (u = {},
                        U(e, (function(e, t) {
                            e && "object" == typeof e && void 0 === e.nodeType && (e = L({}, e)),
                            u[t] = e
                        }
                        )),
                        u);
                        if (n.filesLeft = i.length,
                        f && f.name === j.expando && (f = null,
                        j.log("[warn] FileAPI.upload() — called without files")),
                        ("abort" != n.statusText || n.current) && c) {
                            if (l = !1,
                            n.currentFile = f,
                            f && !1 === e.prepare(f, p))
                                return void t.call(r);
                            p.file = f,
                            r._getFormData(p, c, (function(l) {
                                s || e.upload(n, e);
                                var u = new j.XHR(L({}, p, {
                                    upload: f ? function() {
                                        e.fileupload(f, u, p)
                                    }
                                    : a,
                                    progress: f ? function(t) {
                                        d || (d = t.loaded === t.total,
                                        e.fileprogress({
                                            type: "progress",
                                            total: c.total = t.total,
                                            loaded: c.loaded = t.loaded
                                        }, f, u, p),
                                        e.progress({
                                            type: "progress",
                                            total: o,
                                            loaded: n.loaded = s + c.size * (t.loaded / t.total) | 0
                                        }, f, u, p))
                                    }
                                    : a,
                                    complete: function(a) {
                                        U(C, (function(e) {
                                            n[e] = u[e]
                                        }
                                        )),
                                        f && (c.total = c.total || c.size,
                                        c.loaded = c.total,
                                        a || (this.progress(c),
                                        d = !0,
                                        s += c.size,
                                        n.loaded = s),
                                        e.filecomplete(a, u, f, p)),
                                        setTimeout((function() {
                                            t.call(r)
                                        }
                                        ), 0)
                                    }
                                }));
                                n.abort = function(e) {
                                    e || (i.length = 0),
                                    this.current = e,
                                    u.abort()
                                }
                                ,
                                u.send(l)
                            }
                            ))
                        } else {
                            var h = 200 == n.status || 201 == n.status || 204 == n.status;
                            e.complete(!h && (n.statusText || "error"), n, e),
                            l = !0
                        }
                    }
                    ,
                    setTimeout(t, 0),
                    n.append = function(e, a) {
                        e = j._getFilesDataArray([].concat(e)),
                        U(e, (function(e) {
                            o += e.size,
                            n.files.push(e.file),
                            a ? i.unshift(e) : i.push(e)
                        }
                        )),
                        n.statusText = "",
                        l && t.call(r)
                    }
                    ,
                    n.remove = function(e) {
                        for (var t, n = i.length; n--; )
                            i[n].file == e && (t = i.splice(n, 1),
                            o -= t.size);
                        return t
                    }
                    ,
                    n
                },
                _getFilesDataArray: function(e) {
                    var t = []
                      , n = {};
                    if (G(e)) {
                        var a = j.getFiles(e);
                        n[e.name || "file"] = null !== e.getAttribute("multiple") ? a : a[0]
                    } else
                        P(e) && G(e[0]) ? U(e, (function(e) {
                            n[e.name || "file"] = j.getFiles(e)
                        }
                        )) : n = e;
                    return U(n, (function e(n, a) {
                        P(n) ? U(n, (function(t) {
                            e(t, a)
                        }
                        )) : n && (n.name || n.image) && t.push({
                            name: a,
                            file: n,
                            size: n.size,
                            total: n.size,
                            loaded: 0
                        })
                    }
                    )),
                    t.length || t.push({
                        file: {
                            name: j.expando
                        }
                    }),
                    t
                },
                _getFormData: function(e, t, n) {
                    var a = t.file
                      , i = t.name
                      , r = a.name
                      , o = a.type
                      , s = j.support.transform && e.imageTransform
                      , l = new j.Form
                      , u = j.queue((function() {
                        n(l)
                    }
                    ))
                      , c = s && function(e) {
                        var t;
                        for (t in e)
                            if (e.hasOwnProperty(t) && !(e[t]instanceof Object || "overlay" === t || "filter" === t))
                                return !0;
                        return !1
                    }(s)
                      , f = j.postNameConcat;
                    U(e.data, (function e(t, n) {
                        "object" == typeof t ? U(t, (function(t, a) {
                            e(t, f(n, a))
                        }
                        )) : l.append(n, t)
                    }
                    )),
                    function t(n) {
                        n.image ? (u.inc(),
                        n.toData((function(e, n) {
                            r = r || (new Date).getTime() + ".png",
                            t(n),
                            u.next()
                        }
                        ))) : j.Image && s && (/^image/.test(n.type) || A.test(n.nodeName)) ? (u.inc(),
                        c && (s = [s]),
                        j.Image.transform(n, s, e.imageAutoOrientation, (function(t, a) {
                            if (c && !t)
                                y || j.flashEngine || (l.multipart = !0),
                                l.append(i, a[0], r, s[0].type || o);
                            else {
                                var d = 0;
                                t || U(a, (function(e, t) {
                                    y || j.flashEngine || (l.multipart = !0),
                                    s[t].postName || (d = 1),
                                    l.append(s[t].postName || f(i, t), e, r, s[t].type || o)
                                }
                                )),
                                (t || e.imageOriginal) && l.append(f(i, d ? "original" : null), n, r, o)
                            }
                            u.next()
                        }
                        ))) : r !== j.expando && l.append(i, n, r)
                    }(a),
                    u.check()
                },
                reset: function(e, t) {
                    var n, a;
                    return h ? (a = h(e).clone(!0).insertBefore(e).val("")[0],
                    t || h(e).remove()) : (n = e.parentNode,
                    (a = n.insertBefore(e.cloneNode(!0), e)).value = "",
                    t || n.removeChild(e),
                    U(R[j.uid(e)], (function(t, n) {
                        U(t, (function(t) {
                            S(e, n, t),
                            B(a, n, t)
                        }
                        ))
                    }
                    ))),
                    a
                },
                load: function(e, t) {
                    var n = j.getXHR();
                    return n ? (n.open("GET", e, !0),
                    n.overrideMimeType && n.overrideMimeType("text/plain; charset=x-user-defined"),
                    B(n, "progress", (function(e) {
                        e.lengthComputable && t({
                            type: e.type,
                            loaded: e.loaded,
                            total: e.total
                        }, n)
                    }
                    )),
                    n.onreadystatechange = function() {
                        if (4 == n.readyState)
                            if (n.onreadystatechange = null,
                            200 == n.status) {
                                var a = {
                                    name: (e = e.split("/"))[e.length - 1],
                                    size: n.getResponseHeader("Content-Length"),
                                    type: n.getResponseHeader("Content-Type")
                                };
                                a.dataURL = "data:" + a.type + ";base64," + j.encode64(n.responseBody || n.responseText),
                                t({
                                    type: "load",
                                    result: a
                                }, n)
                            } else
                                t({
                                    type: "error"
                                }, n)
                    }
                    ,
                    n.send(null)) : t({
                        type: "error"
                    }),
                    n
                },
                encode64: function(e) {
                    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                      , n = ""
                      , a = 0;
                    for ("string" != typeof e && (e = String(e)); a < e.length; ) {
                        var i, r, o = 255 & e.charCodeAt(a++), s = 255 & e.charCodeAt(a++), l = 255 & e.charCodeAt(a++), u = o >> 2, c = (3 & o) << 4 | s >> 4;
                        isNaN(s) ? i = r = 64 : (i = (15 & s) << 2 | l >> 6,
                        r = isNaN(l) ? 64 : 63 & l),
                        n += t.charAt(u) + t.charAt(c) + t.charAt(i) + t.charAt(r)
                    }
                    return n
                }
            };
            function O(e, t, n, a, i) {
                var r = {
                    type: n.type || n,
                    target: e,
                    result: a
                };
                L(r, i),
                t(r)
            }
            function N(e) {
                return f && !!f.prototype["readAs" + e]
            }
            function q(e, n, a, i) {
                if (j.isBlob(e) && N(a)) {
                    var r = new f;
                    B(r, E, (function t(a) {
                        var i = a.type;
                        "progress" == i ? O(e, n, a, a.target.result, {
                            loaded: a.loaded,
                            total: a.total
                        }) : "loadend" == i ? (S(r, E, t),
                        r = null) : O(e, n, a, a.target.result)
                    }
                    ));
                    try {
                        i ? r["readAs" + a](e, i) : r["readAs" + a](e)
                    } catch (a) {
                        O(e, n, "error", t, {
                            error: a.toString()
                        })
                    }
                } else
                    O(e, n, "error", t, {
                        error: "filreader_not_support_" + a
                    })
            }
            function X(e) {
                var t;
                return e.getAsEntry ? t = e.getAsEntry() : e.webkitGetAsEntry && (t = e.webkitGetAsEntry()),
                t
            }
            function W(e, t) {
                if (e)
                    if (e.isFile)
                        e.file((function(n) {
                            n.fullPath = e.fullPath,
                            t(!1, [n])
                        }
                        ), (function(e) {
                            t("FileError.code: " + e.code)
                        }
                        ));
                    else if (e.isDirectory) {
                        var n = e.createReader()
                          , a = [];
                        n.readEntries((function(e) {
                            j.afor(e, (function(e, n) {
                                W(n, (function(n, i) {
                                    n ? j.log(n) : a = a.concat(i),
                                    e ? e() : t(!1, a)
                                }
                                ))
                            }
                            ))
                        }
                        ), (function(e) {
                            t("directory_reader: " + e)
                        }
                        ))
                    } else
                        W(X(e), t);
                else
                    t("invalid entry")
            }
            function G(e) {
                return x.test(e && e.tagName)
            }
            function K(e) {
                return (e.originalEvent || e || "").dataTransfer || {}
            }
            j.addInfoReader(/^image/, (function(e, t) {
                if (!e.__dimensions) {
                    var n = e.__dimensions = j.defer();
                    j.readAsImage(e, (function(e) {
                        var t = e.target;
                        n.resolve("load" != e.type && "error", {
                            width: t.width,
                            height: t.height
                        }),
                        t.src = j.EMPTY_PNG,
                        t = null
                    }
                    ))
                }
                e.__dimensions.then(t)
            }
            )),
            j.event.dnd = function(e, t, n) {
                var a, i;
                n || (n = t,
                t = j.F),
                f ? (B(e, "dragenter dragleave dragover", (function(e) {
                    for (var n = K(e).types, r = n && n.length, o = !1; r--; )
                        if (~n[r].indexOf("File")) {
                            e[k](),
                            i !== e.type && ("dragleave" != (i = e.type) && t.call(e[D], !0, e),
                            o = !0);
                            break
                        }
                    o && (clearTimeout(a),
                    a = setTimeout((function() {
                        t.call(e[D], "dragleave" != i, e)
                    }
                    ), 50))
                }
                )),
                B(e, "drop", (function(e) {
                    e[k](),
                    i = 0,
                    t.call(e[D], !1, e),
                    j.getDropFiles(e, (function(t) {
                        n.call(e[D], t, e)
                    }
                    ))
                }
                ))) : j.log("Drag'n'Drop -- not supported")
            }
            ,
            j.event.dnd.off = function(e, t, n) {
                S(e, "dragenter dragleave dragover", t),
                S(e, "drop", n)
            }
            ,
            h && !h.fn.dnd && (h.fn.dnd = function(e, t) {
                return this.each((function() {
                    j.event.dnd(this, e, t)
                }
                ))
            }
            ,
            h.fn.offdnd = function(e, t) {
                return this.each((function() {
                    j.event.dnd.off(this, e, t)
                }
                ))
            }
            ),
            e.FileAPI = L(j, e.FileAPI),
            j.log("FileAPI: " + j.version),
            j.log("protocol: " + e.location.protocol),
            j.log("doctype: [" + o.name + "] " + o.publicId + " " + o.systemId),
            U(r.getElementsByTagName("meta"), (function(e) {
                /x-ua-compatible/i.test(e.getAttribute("http-equiv")) && j.log("meta.http-equiv: " + e.getAttribute("content"))
            }
            )),
            j.flashUrl || (j.flashUrl = j.staticPath + "FileAPI.flash.swf"),
            j.flashImageUrl || (j.flashImageUrl = j.staticPath + "FileAPI.flash.image.swf"),
            j.flashWebcamUrl || (j.flashWebcamUrl = j.staticPath + "FileAPI.flash.camera.swf")
        }(window, void 0),
        function(e, t, n) {
            "use strict";
            var a = Math.min
              , i = Math.round
              , r = function() {
                return t.createElement("canvas")
            }
              , o = !1
              , s = {
                8: 270,
                3: 180,
                6: 90,
                7: 270,
                4: 180,
                5: 90
            };
            try {
                o = r().toDataURL("image/png").indexOf("data:image/png") > -1
            } catch (e) {}
            function l(t) {
                if (t instanceof l) {
                    var n = new l(t.file);
                    return e.extend(n.matrix, t.matrix),
                    n
                }
                if (!(this instanceof l))
                    return new l(t);
                this.file = t,
                this.size = t.size || 100,
                this.matrix = {
                    sx: 0,
                    sy: 0,
                    sw: 0,
                    sh: 0,
                    dx: 0,
                    dy: 0,
                    dw: 0,
                    dh: 0,
                    resize: 0,
                    deg: 0,
                    quality: 1,
                    filter: 0
                }
            }
            l.prototype = {
                image: !0,
                constructor: l,
                set: function(t) {
                    return e.extend(this.matrix, t),
                    this
                },
                crop: function(e, t, a, i) {
                    return a === n && (a = e,
                    i = t,
                    e = t = 0),
                    this.set({
                        sx: e,
                        sy: t,
                        sw: a,
                        sh: i || a
                    })
                },
                resize: function(e, t, n) {
                    return /min|max/.test(t) && (n = t,
                    t = e),
                    this.set({
                        dw: e,
                        dh: t || e,
                        resize: n
                    })
                },
                preview: function(e, t) {
                    return this.resize(e, t || e, "preview")
                },
                rotate: function(e) {
                    return this.set({
                        deg: e
                    })
                },
                filter: function(e) {
                    return this.set({
                        filter: e
                    })
                },
                overlay: function(e) {
                    return this.set({
                        overlay: e
                    })
                },
                clone: function() {
                    return new l(this)
                },
                _load: function(t, n) {
                    var a = this;
                    /img|video/i.test(t.nodeName) ? n.call(a, null, t) : e.readAsImage(t, (function(e) {
                        n.call(a, "load" != e.type, e.result)
                    }
                    ))
                },
                _apply: function(t, n) {
                    var i, o = r(), s = this.getMatrix(t), u = o.getContext("2d"), c = t.videoWidth || t.width, f = t.videoHeight || t.height, d = s.deg, p = s.dw, h = s.dh, m = c, g = f, v = s.filter, y = t, w = s.overlay, b = e.queue((function() {
                        t.src = e.EMPTY_PNG,
                        n(!1, o)
                    }
                    )), A = e.renderImageToCanvas;
                    for (d -= 360 * Math.floor(d / 360),
                    t._type = this.file.type; s.multipass && a(m / p, g / h) > 2; )
                        m = m / 2 + .5 | 0,
                        g = g / 2 + .5 | 0,
                        (i = r()).width = m,
                        i.height = g,
                        y !== t ? (A(i, y, 0, 0, y.width, y.height, 0, 0, m, g),
                        y = i) : (A(y = i, t, s.sx, s.sy, s.sw, s.sh, 0, 0, m, g),
                        s.sx = s.sy = s.sw = s.sh = 0);
                    o.width = d % 180 ? h : p,
                    o.height = d % 180 ? p : h,
                    o.type = s.type,
                    o.quality = s.quality,
                    u.rotate(d * Math.PI / 180),
                    A(u.canvas, y, s.sx, s.sy, s.sw || y.width, s.sh || y.height, 180 == d || 270 == d ? -p : 0, 90 == d || 180 == d ? -h : 0, p, h),
                    p = o.width,
                    h = o.height,
                    w && e.each([].concat(w), (function(t) {
                        b.inc();
                        var n = new window.Image
                          , a = function() {
                            var i = 0 | t.x
                              , r = 0 | t.y
                              , o = t.w || n.width
                              , s = t.h || n.height
                              , l = t.rel;
                            i = 1 == l || 4 == l || 7 == l ? (p - o + i) / 2 : 2 == l || 5 == l || 8 == l ? p - (o + i) : i,
                            r = 3 == l || 4 == l || 5 == l ? (h - s + r) / 2 : l >= 6 ? h - (s + r) : r,
                            e.event.off(n, "error load abort", a);
                            try {
                                u.globalAlpha = t.opacity || 1,
                                u.drawImage(n, i, r, o, s)
                            } catch (e) {}
                            b.next()
                        };
                        e.event.on(n, "error load abort", a),
                        n.src = t.src,
                        n.complete && a()
                    }
                    )),
                    v && (b.inc(),
                    l.applyFilter(o, v, b.next)),
                    b.check()
                },
                getMatrix: function(t) {
                    var n, r, o = e.extend({}, this.matrix), s = o.sw = o.sw || t.videoWidth || t.naturalWidth || t.width, l = o.sh = o.sh || t.videoHeight || t.naturalHeight || t.height, u = o.dw = o.dw || s, c = o.dh = o.dh || l, f = s / l, d = u / c, p = o.resize;
                    return "preview" == p ? u == s && c == l || (d >= f ? r = (n = s) / d : n = (r = l) * d,
                    n == s && r == l || (o.sx = ~~((s - n) / 2),
                    o.sy = ~~((l - r) / 2),
                    s = n,
                    l = r)) : p && (s > u || l > c ? "min" == p ? (u = i(f < d ? a(s, u) : c * f),
                    c = i(f < d ? u / f : a(l, c))) : (u = i(f >= d ? a(s, u) : c * f),
                    c = i(f >= d ? u / f : a(l, c))) : (u = s,
                    c = l)),
                    o.sw = s,
                    o.sh = l,
                    o.dw = u,
                    o.dh = c,
                    o.multipass = e.multiPassResize,
                    o
                },
                _trans: function(t) {
                    this._load(this.file, (function(n, a) {
                        if (n)
                            t(n);
                        else
                            try {
                                this._apply(a, t)
                            } catch (n) {
                                e.log("[err] FileAPI.Image.fn._apply:", n),
                                t(n)
                            }
                    }
                    ))
                },
                get: function(t) {
                    if (e.support.transform) {
                        var n = this
                          , a = n.matrix;
                        "auto" == a.deg ? e.getInfo(n.file, (function(e, i) {
                            a.deg = s[i && i.exif && i.exif.Orientation] || 0,
                            n._trans(t)
                        }
                        )) : n._trans(t)
                    } else
                        t("not_support_transform");
                    return this
                },
                toData: function(e) {
                    return this.get(e)
                }
            },
            l.exifOrientation = s,
            l.transform = function(t, a, i, r) {
                function o(o, s) {
                    var u = {}
                      , c = e.queue((function(e) {
                        r(e, u)
                    }
                    ));
                    o ? c.fail() : e.each(a, (function(e, a) {
                        if (!c.isFail()) {
                            var r = new l(s.nodeType ? s : t);
                            if ("function" == typeof e ? e(s, r) : e.width ? r[e.preview ? "preview" : "resize"](e.width, e.height, e.strategy) : e.maxWidth && (s.width > e.maxWidth || s.height > e.maxHeight) && r.resize(e.maxWidth, e.maxHeight, "max"),
                            e.crop) {
                                var o = e.crop;
                                r.crop(0 | o.x, 0 | o.y, o.w || o.width, o.h || o.height)
                            }
                            e.rotate === n && i && (e.rotate = "auto"),
                            r.set({
                                deg: e.rotate,
                                type: e.type || t.type || "image/png",
                                quality: e.quality || 1,
                                overlay: e.overlay,
                                filter: e.filter
                            }),
                            c.inc(),
                            r.toData((function(e, t) {
                                e ? c.fail() : (u[a] = t,
                                c.next())
                            }
                            ))
                        }
                    }
                    ))
                }
                t.width ? o(!1, t) : e.getInfo(t, o)
            }
            ,
            e.each(["TOP", "CENTER", "BOTTOM"], (function(t, n) {
                e.each(["LEFT", "CENTER", "RIGHT"], (function(e, a) {
                    l[t + "_" + e] = 3 * n + a,
                    l[e + "_" + t] = 3 * n + a
                }
                ))
            }
            )),
            l.toCanvas = function(e) {
                var n = t.createElement("canvas");
                return n.width = e.videoWidth || e.width,
                n.height = e.videoHeight || e.height,
                n.getContext("2d").drawImage(e, 0, 0),
                n
            }
            ,
            l.fromDataURL = function(t, n, a) {
                var i = e.newImage(t);
                e.extend(i, n),
                a(i)
            }
            ,
            l.applyFilter = function(t, n, a) {
                "function" == typeof n ? n(t, a) : window.Caman && window.Caman("IMG" == t.tagName ? l.toCanvas(t) : t, (function() {
                    "string" == typeof n ? this[n]() : e.each(n, (function(e, t) {
                        this[t](e)
                    }
                    ), this),
                    this.render(a)
                }
                ))
            }
            ,
            e.renderImageToCanvas = function(t, n, a, i, r, o, s, l, u, c) {
                try {
                    return t.getContext("2d").drawImage(n, a, i, r, o, s, l, u, c)
                } catch (t) {
                    throw e.log("renderImageToCanvas failed"),
                    t
                }
            }
            ,
            e.support.canvas = e.support.transform = o,
            e.Image = l
        }(FileAPI, document),
        function(e) {
            "use strict";
            !function(e) {
                if (window.navigator && window.navigator.platform && /iP(hone|od|ad)/.test(window.navigator.platform)) {
                    var t = e.renderImageToCanvas;
                    e.detectSubsampling = function(e) {
                        var t, n;
                        return e.width * e.height > 1048576 && ((t = document.createElement("canvas")).width = t.height = 1,
                        (n = t.getContext("2d")).drawImage(e, 1 - e.width, 0),
                        0 === n.getImageData(0, 0, 1, 1).data[3])
                    }
                    ,
                    e.detectVerticalSquash = function(e, t) {
                        var n, a, i, r, o = e.naturalHeight || e.height, s = document.createElement("canvas"), l = s.getContext("2d");
                        for (t && (o /= 2),
                        s.width = 1,
                        s.height = o,
                        l.drawImage(e, 0, 0),
                        n = l.getImageData(0, 0, 1, o).data,
                        a = 0,
                        i = o,
                        r = o; r > a; )
                            0 === n[4 * (r - 1) + 3] ? i = r : a = r,
                            r = i + a >> 1;
                        return r / o || 1
                    }
                    ,
                    e.renderImageToCanvas = function(n, a, i, r, o, s, l, u, c, f) {
                        if ("image/jpeg" === a._type) {
                            var d, p, h, m, g = n.getContext("2d"), v = document.createElement("canvas"), y = 1024, w = v.getContext("2d");
                            if (v.width = y,
                            v.height = y,
                            g.save(),
                            (d = e.detectSubsampling(a)) && (i /= 2,
                            r /= 2,
                            o /= 2,
                            s /= 2),
                            p = e.detectVerticalSquash(a, d),
                            d || 1 !== p) {
                                for (r *= p,
                                c = Math.ceil(y * c / o),
                                f = Math.ceil(y * f / s / p),
                                u = 0,
                                m = 0; m < s; ) {
                                    for (l = 0,
                                    h = 0; h < o; )
                                        w.clearRect(0, 0, y, y),
                                        w.drawImage(a, i, r, o, s, -h, -m, o, s),
                                        g.drawImage(v, 0, 0, y, y, l, u, c, f),
                                        h += y,
                                        l += c;
                                    m += y,
                                    u += f
                                }
                                return g.restore(),
                                n
                            }
                        }
                        return t(n, a, i, r, o, s, l, u, c, f)
                    }
                }
            }(FileAPI)
        }(),
        function(e, t) {
            "use strict";
            var n = t.document
              , a = t.FormData
              , i = function() {
                this.items = []
            }
              , r = t.encodeURIComponent;
            function o(t, n, a) {
                var i = t.blob
                  , r = t.file;
                if (r) {
                    if (!i.toDataURL)
                        return void e.readAsBinaryString(i, (function(e) {
                            "load" == e.type && n(t, e.result)
                        }
                        ));
                    var o = {
                        "image/jpeg": ".jpe?g",
                        "image/png": ".png"
                    }
                      , s = o[t.type] ? t.type : "image/png"
                      , l = o[s] || ".png"
                      , u = i.quality || 1;
                    r.match(new RegExp(l + "$","i")) || (r += l.replace("?", "")),
                    t.file = r,
                    t.type = s,
                    !a && i.toBlob ? i.toBlob((function(e) {
                        n(t, e)
                    }
                    ), s, u) : n(t, e.toBinaryString(i.toDataURL(s, u)))
                } else
                    n(t, i)
            }
            i.prototype = {
                append: function(e, t, n, a) {
                    this.items.push({
                        name: e,
                        blob: t && t.blob || (null == t ? "" : t),
                        file: t && (n || t.name),
                        type: t && (a || t.type)
                    })
                },
                each: function(e) {
                    for (var t = 0, n = this.items.length; t < n; t++)
                        e.call(this, this.items[t])
                },
                toData: function(t, n) {
                    n._chunked = e.support.chunked && n.chunkSize > 0 && 1 == e.filter(this.items, (function(e) {
                        return e.file
                    }
                    )).length,
                    e.support.html5 ? e.formData && !this.multipart && a ? n._chunked ? (e.log("FileAPI.Form.toPlainData"),
                    this.toPlainData(t)) : (e.log("FileAPI.Form.toFormData"),
                    this.toFormData(t)) : (e.log("FileAPI.Form.toMultipartData"),
                    this.toMultipartData(t)) : (e.log("FileAPI.Form.toHtmlData"),
                    this.toHtmlData(t))
                },
                _to: function(t, n, a, i) {
                    var r = e.queue((function() {
                        n(t)
                    }
                    ));
                    this.each((function(e) {
                        a(e, t, r, i)
                    }
                    )),
                    r.check()
                },
                toHtmlData: function(t) {
                    this._to(n.createDocumentFragment(), t, (function(t, a) {
                        var i, r = t.blob;
                        t.file ? (e.reset(r, !0),
                        r.name = t.name,
                        a.appendChild(r)) : ((i = n.createElement("input")).name = t.name,
                        i.type = "hidden",
                        i.value = r,
                        a.appendChild(i))
                    }
                    ))
                },
                toPlainData: function(e) {
                    this._to({}, e, (function(e, t, n) {
                        e.file && (t.type = e.file),
                        e.blob.toBlob ? (n.inc(),
                        o(e, (function(e, a) {
                            t.name = e.name,
                            t.file = a,
                            t.size = a.length,
                            t.type = e.type,
                            n.next()
                        }
                        ))) : e.file ? (t.name = e.blob.name,
                        t.file = e.blob,
                        t.size = e.blob.size,
                        t.type = e.type) : (t.params || (t.params = []),
                        t.params.push(r(e.name) + "=" + r(e.blob))),
                        t.start = -1,
                        t.end = t.file && t.file.FileAPIReadPosition || -1,
                        t.retry = 0
                    }
                    ))
                },
                toFormData: function(e) {
                    this._to(new a, e, (function(e, t, n) {
                        e.blob && e.blob.toBlob ? (n.inc(),
                        o(e, (function(e, a) {
                            t.append(e.name, a, e.file),
                            n.next()
                        }
                        ))) : e.file ? t.append(e.name, e.blob, e.file) : t.append(e.name, e.blob),
                        e.file && t.append("_" + e.name, e.file)
                    }
                    ))
                },
                toMultipartData: function(t) {
                    this._to([], t, (function(e, t, n, a) {
                        n.inc(),
                        o(e, (function(e, i) {
                            t.push("--_" + a + '\r\nContent-Disposition: form-data; name="' + e.name + '"' + (e.file ? '; filename="' + r(e.file) + '"' : "") + (e.file ? "\r\nContent-Type: " + (e.type || "application/octet-stream") : "") + "\r\n\r\n" + (e.file ? i : r(i)) + "\r\n"),
                            n.next()
                        }
                        ), !0)
                    }
                    ), e.expando)
                }
            },
            e.Form = i
        }(FileAPI, window),
        function(e, t) {
            "use strict";
            var n = function() {}
              , a = e.document
              , i = function(e) {
                this.uid = t.uid(),
                this.xhr = {
                    abort: n,
                    getResponseHeader: n,
                    getAllResponseHeaders: n
                },
                this.options = e
            }
              , r = {
                "": 1,
                XML: 1,
                Text: 1,
                Body: 1
            };
            i.prototype = {
                status: 0,
                statusText: "",
                constructor: i,
                getResponseHeader: function(e) {
                    return this.xhr.getResponseHeader(e)
                },
                getAllResponseHeaders: function() {
                    return this.xhr.getAllResponseHeaders() || {}
                },
                end: function(a, i) {
                    var r = this
                      , o = r.options;
                    r.end = r.abort = n,
                    r.status = a,
                    i && (r.statusText = i),
                    t.log("xhr.end:", a, i),
                    o.complete(200 != a && 201 != a && (r.statusText || "unknown"), r),
                    r.xhr && r.xhr.node && setTimeout((function() {
                        var t = r.xhr.node;
                        try {
                            t.parentNode.removeChild(t)
                        } catch (e) {}
                        try {
                            delete e[r.uid]
                        } catch (e) {}
                        e[r.uid] = r.xhr.node = null
                    }
                    ), 9)
                },
                abort: function() {
                    this.end(0, "abort"),
                    this.xhr && (this.xhr.aborted = !0,
                    this.xhr.abort())
                },
                send: function(e) {
                    var t = this
                      , n = this.options;
                    e.toData((function(e) {
                        n.upload(n, t),
                        t._send.call(t, n, e)
                    }
                    ), n)
                },
                _send: function(n, i) {
                    var o, s = this, l = s.uid, u = n.url;
                    if (t.log("XHR._send:", i),
                    n.cache || (u += (~u.indexOf("?") ? "&" : "?") + t.uid()),
                    i.nodeName) {
                        var c = n.jsonp;
                        u = u.replace(/([a-z]+)=(\?)/i, "$1=" + l),
                        n.upload(n, s),
                        (o = a.createElement("div")).innerHTML = '<form target="' + l + '" action="' + u + '" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;"><iframe name="' + l + '" src="javascript:false;"></iframe>' + (c && n.url.indexOf("=?") < 0 ? '<input value="' + l + '" name="' + c + '" type="hidden"/>' : "") + "</form>";
                        var f = o.getElementsByTagName("form")[0]
                          , d = o.getElementsByTagName("iframe")[0];
                        f.appendChild(i),
                        t.log(f.parentNode.innerHTML),
                        a.body.appendChild(o),
                        s.xhr.node = o;
                        var p = function(e) {
                            if (~u.indexOf(e.origin))
                                try {
                                    var n = t.parseJSON(e.data);
                                    n.id == l && h(n.status, n.statusText, n.response)
                                } catch (e) {
                                    h(0, e.message)
                                }
                        }
                          , h = e[l] = function(n, a, i) {
                            s.readyState = 4,
                            s.responseText = i,
                            s.end(n, a),
                            t.event.off(e, "message", p),
                            e[l] = o = d = d.onload = null
                        }
                        ;
                        s.xhr.abort = function() {
                            try {
                                d.stop ? d.stop() : d.contentWindow.stop ? d.contentWindow.stop() : d.contentWindow.document.execCommand("Stop")
                            } catch (e) {}
                            h(0, "abort")
                        }
                        ,
                        t.event.on(e, "message", p),
                        d.onload = function() {
                            try {
                                var e = d.contentWindow
                                  , n = e.document
                                  , a = e.result || t.parseJSON(n.body.innerHTML);
                                h(a.status, a.statusText, a.response)
                            } catch (e) {
                                t.log("[transport.onload]", e)
                            }
                        }
                        ,
                        s.readyState = 2,
                        f.submit(),
                        f = null
                    } else {
                        if (u = u.replace(/([a-z]+)=(\?)&?/i, ""),
                        this.xhr && this.xhr.aborted)
                            return void t.log("Error: already aborted");
                        if (o = s.xhr = t.getXHR(),
                        i.params && (u += (u.indexOf("?") < 0 ? "?" : "&") + i.params.join("&")),
                        o.open("POST", u, !0),
                        t.withCredentials && (o.withCredentials = "true"),
                        n.headers && n.headers["X-Requested-With"] || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        t.each(n.headers, (function(e, t) {
                            o.setRequestHeader(t, e)
                        }
                        )),
                        n._chunked) {
                            o.upload && o.upload.addEventListener("progress", t.throttle((function(e) {
                                i.retry || n.progress({
                                    type: e.type,
                                    total: i.size,
                                    loaded: i.start + e.loaded,
                                    totalSize: i.size
                                }, s, n)
                            }
                            ), 100), !1),
                            o.onreadystatechange = function() {
                                var e = parseInt(o.getResponseHeader("X-Last-Known-Byte"), 10);
                                if (s.status = o.status,
                                s.statusText = o.statusText,
                                s.readyState = o.readyState,
                                4 == o.readyState) {
                                    for (var a in r)
                                        s["response" + a] = o["response" + a];
                                    if (o.onreadystatechange = null,
                                    !o.status || o.status - 201 > 0)
                                        if (t.log("Error: " + o.status),
                                        (!o.status && !o.aborted || 500 == o.status || 416 == o.status) && ++i.retry <= n.chunkUploadRetry) {
                                            var l = o.status ? 0 : t.chunkNetworkDownRetryTimeout;
                                            n.pause(i.file, n),
                                            t.log("X-Last-Known-Byte: " + e),
                                            e ? i.end = e : (i.end = i.start - 1,
                                            416 == o.status && (i.end = i.end - n.chunkSize)),
                                            setTimeout((function() {
                                                s._send(n, i)
                                            }
                                            ), l)
                                        } else
                                            s.end(o.status);
                                    else
                                        i.retry = 0,
                                        i.end == i.size - 1 ? s.end(o.status) : (t.log("X-Last-Known-Byte: " + e),
                                        e && (i.end = e),
                                        i.file.FileAPIReadPosition = i.end,
                                        setTimeout((function() {
                                            s._send(n, i)
                                        }
                                        ), 0));
                                    o = null
                                }
                            }
                            ,
                            i.start = i.end + 1,
                            i.end = Math.max(Math.min(i.start + n.chunkSize, i.size) - 1, i.start);
                            var m = i.file
                              , g = (m.slice || m.mozSlice || m.webkitSlice).call(m, i.start, i.end + 1);
                            i.size && !g.size ? setTimeout((function() {
                                s.end(-1)
                            }
                            )) : (o.setRequestHeader("Content-Range", "bytes " + i.start + "-" + i.end + "/" + i.size),
                            o.setRequestHeader("Content-Disposition", "attachment; filename=" + encodeURIComponent(i.name)),
                            o.setRequestHeader("Content-Type", i.type || "application/octet-stream"),
                            o.send(g)),
                            m = g = null
                        } else if (o.upload && o.upload.addEventListener("progress", t.throttle((function(e) {
                            n.progress(e, s, n)
                        }
                        ), 100), !1),
                        o.onreadystatechange = function() {
                            if (s.status = o.status,
                            s.statusText = o.statusText,
                            s.readyState = o.readyState,
                            4 == o.readyState) {
                                for (var e in r)
                                    s["response" + e] = o["response" + e];
                                if (o.onreadystatechange = null,
                                !o.status || o.status > 201)
                                    if (t.log("Error: " + o.status),
                                    (!o.status && !o.aborted || 500 == o.status) && (n.retry || 0) < n.uploadRetry) {
                                        n.retry = (n.retry || 0) + 1;
                                        var a = t.networkDownRetryTimeout;
                                        n.pause(n.file, n),
                                        setTimeout((function() {
                                            s._send(n, i)
                                        }
                                        ), a)
                                    } else
                                        s.end(o.status);
                                else
                                    s.end(o.status);
                                o = null
                            }
                        }
                        ,
                        t.isArray(i)) {
                            o.setRequestHeader("Content-Type", "multipart/form-data; boundary=_" + t.expando);
                            var v = i.join("") + "--_" + t.expando + "--";
                            if (o.sendAsBinary)
                                o.sendAsBinary(v);
                            else {
                                var y = Array.prototype.map.call(v, (function(e) {
                                    return 255 & e.charCodeAt(0)
                                }
                                ));
                                o.send(new Uint8Array(y).buffer)
                            }
                        } else
                            o.send(i)
                    }
                }
            },
            t.XHR = i
        }(window, FileAPI),
        function(e, t) {
            "use strict";
            var n = e.URL || e.webkitURL
              , a = e.document
              , o = e.navigator
              , s = o.getUserMedia || o.webkitGetUserMedia || o.mozGetUserMedia || o.msGetUserMedia
              , l = !!s;
            t.support.media = l;
            var u = function(e) {
                this.video = e
            };
            u.prototype = {
                isActive: function() {
                    return !!this._active
                },
                start: function(e) {
                    var t, i, r = this, l = r.video, u = function(n) {
                        r._active = !n,
                        clearTimeout(i),
                        clearTimeout(t),
                        e && e(n, r)
                    };
                    s.call(o, {
                        video: !0
                    }, (function(e) {
                        r.stream = e,
                        l.src = n.createObjectURL(e),
                        t = setInterval((function() {
                            (function(e) {
                                var t, n = a.createElement("canvas"), i = !1;
                                try {
                                    (t = n.getContext("2d")).drawImage(e, 0, 0, 1, 1),
                                    i = 255 != t.getImageData(0, 0, 1, 1).data[4]
                                } catch (e) {}
                                return i
                            }
                            )(l) && u(null)
                        }
                        ), 1e3),
                        i = setTimeout((function() {
                            u("timeout")
                        }
                        ), 5e3),
                        l.play()
                    }
                    ), u)
                },
                stop: function() {
                    try {
                        this._active = !1,
                        this.video.pause(),
                        this.stream.stop()
                    } catch (e) {}
                },
                shot: function() {
                    return new c(this.video)
                }
            },
            u.get = function(e) {
                return new u(e.firstChild)
            }
            ,
            u.publish = function(e, n, o) {
                "function" == typeof n && (o = n,
                n = {}),
                n = t.extend({}, {
                    width: "100%",
                    height: "100%",
                    start: !0
                }, n),
                e.jquery && (e = e[0]);
                var s = function(t) {
                    if (t)
                        o(t);
                    else {
                        var a = u.get(e);
                        n.start ? a.start(o) : o(null, a)
                    }
                };
                if (e.style.width = f(n.width),
                e.style.height = f(n.height),
                t.html5 && l) {
                    var c = a.createElement("video");
                    c.style.width = f(n.width),
                    c.style.height = f(n.height),
                    i ? r(e).empty() : e.innerHTML = "",
                    e.appendChild(c),
                    s()
                } else
                    u.fallback(e, n, s)
            }
            ,
            u.fallback = function(e, t, n) {
                n("not_support_camera")
            }
            ;
            var c = function(e) {
                var n = e.nodeName ? t.Image.toCanvas(e) : e
                  , a = t.Image(n);
                return a.type = "image/png",
                a.width = n.width,
                a.height = n.height,
                a.size = n.width * n.height * 4,
                a
            };
            function f(e) {
                return e >= 0 ? e + "px" : e
            }
            u.Shot = c,
            t.Camera = u
        }(window, FileAPI),
        function(e, t, n) {
            "use strict";
            var a = e.document
              , i = e.location
              , r = e.navigator
              , o = n.each;
            n.support.flash = function() {
                var t = r.mimeTypes
                  , a = !1;
                if (r.plugins && "object" == typeof r.plugins["Shockwave Flash"])
                    a = r.plugins["Shockwave Flash"].description && !(t && t["application/x-shockwave-flash"] && !t["application/x-shockwave-flash"].enabledPlugin);
                else
                    try {
                        a = !(!e.ActiveXObject || !new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                    } catch (e) {
                        n.log("Flash -- does not supported.")
                    }
                return a && /^file:/i.test(i) && n.log("[warn] Flash does not work on `file:` protocol."),
                a
            }(),
            n.support.flash && (!n.html5 || !n.support.html5 || n.cors && !n.support.cors || n.media && !n.support.media) && function() {
                var s = n.uid()
                  , l = 0
                  , u = {}
                  , c = /^https?:/i
                  , f = {
                    _fn: {},
                    init: function() {
                        var e = a.body && a.body.firstChild;
                        if (e)
                            do {
                                if (1 == e.nodeType) {
                                    n.log("FlashAPI.state: awaiting");
                                    var t = a.createElement("div");
                                    return t.id = "_" + s,
                                    p(t, {
                                        top: 1,
                                        right: 1,
                                        width: 5,
                                        height: 5,
                                        position: "absolute",
                                        zIndex: "1000000"
                                    }),
                                    e.parentNode.insertBefore(t, e),
                                    void f.publish(t, s)
                                }
                            } while (e = e.nextSibling);
                        l < 10 && setTimeout(f.init, 50 * ++l)
                    },
                    publish: function(e, t, a) {
                        a = a || {},
                        e.innerHTML = d({
                            id: t,
                            src: y(n.flashUrl, "r=" + n.version),
                            wmode: a.camera ? "" : "transparent",
                            flashvars: "callback=" + (a.onEvent || "FileAPI.Flash.onEvent") + "&flashId=" + t + "&storeKey=" + r.userAgent.match(/\d/gi).join("") + "_" + n.version + (f.isReady || (n.pingUrl ? "&ping=" + n.pingUrl : "")) + "&timeout=" + n.flashAbortTimeout + (a.camera ? "&useCamera=" + y(n.flashWebcamUrl) : "") + "&debug=" + (n.debug ? "1" : "")
                        })
                    },
                    ready: function() {
                        n.log("FlashAPI.state: ready"),
                        f.ready = n.F,
                        f.isReady = !0,
                        f.patch(),
                        f.patchCamera && f.patchCamera(),
                        n.event.on(a, "mouseover", f.mouseover),
                        n.event.on(a, "click", (function(e) {
                            f.mouseover(e) && (e.preventDefault ? e.preventDefault() : e.returnValue = !0)
                        }
                        ))
                    },
                    getEl: function() {
                        return a.getElementById("_" + s)
                    },
                    getWrapper: function(e) {
                        do {
                            if (/js-fileapi-wrapper/.test(e.className))
                                return e
                        } while ((e = e.parentNode) && e !== a.body)
                    },
                    mouseover: function(t) {
                        var i = n.event.fix(t).target;
                        if (/input/i.test(i.nodeName) && "file" == i.type) {
                            var r = i.getAttribute(s)
                              , o = f.getWrapper(i);
                            if (n.multiFlash) {
                                if ("i" == r || "r" == r)
                                    return !1;
                                if ("p" != r) {
                                    i.setAttribute(s, "i");
                                    var l = a.createElement("div");
                                    if (!o)
                                        return void n.log("[err] FlashAPI.mouseover: js-fileapi-wrapper not found");
                                    p(l, {
                                        top: 0,
                                        left: 0,
                                        width: i.offsetWidth + 100,
                                        height: i.offsetHeight + 100,
                                        zIndex: "1000000",
                                        position: "absolute"
                                    }),
                                    o.appendChild(l),
                                    f.publish(l, n.uid()),
                                    i.setAttribute(s, "p")
                                }
                                return !0
                            }
                            if (o) {
                                var u = function(t) {
                                    var n = t.getBoundingClientRect()
                                      , i = a.body
                                      , r = (t && t.ownerDocument).documentElement;
                                    return {
                                        top: n.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || i.clientTop || 0),
                                        left: n.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || i.clientLeft || 0),
                                        width: n.right - n.left,
                                        height: n.bottom - n.top
                                    }
                                }(o);
                                p(f.getEl(), u),
                                f.curInp = i
                            }
                        } else
                            /object|embed/i.test(i.nodeName) || p(f.getEl(), {
                                top: 1,
                                left: 1,
                                width: 5,
                                height: 5
                            })
                    },
                    onEvent: function(e) {
                        var t = e.type;
                        if ("ready" == t) {
                            try {
                                f.getInput(e.flashId).setAttribute(s, "r")
                            } catch (e) {}
                            return f.ready(),
                            setTimeout((function() {
                                f.mouseenter(e)
                            }
                            ), 50),
                            !0
                        }
                        "ping" === t ? n.log("(flash -> js).ping:", [e.status, e.savedStatus], e.error) : "log" === t ? n.log("(flash -> js).log:", e.target) : t in f && setTimeout((function() {
                            n.log("FlashAPI.event." + e.type + ":", e),
                            f[t](e)
                        }
                        ), 1)
                    },
                    mouseenter: function(e) {
                        var t = f.getInput(e.flashId);
                        if (t) {
                            f.cmd(e, "multiple", null != t.getAttribute("multiple"));
                            var a = []
                              , i = {};
                            o((t.getAttribute("accept") || "").split(/,\s*/), (function(e) {
                                n.accept[e] && o(n.accept[e].split(" "), (function(e) {
                                    i[e] = 1
                                }
                                ))
                            }
                            )),
                            o(i, (function(e, t) {
                                a.push(t)
                            }
                            )),
                            f.cmd(e, "accept", a.length ? a.join(",") + "," + a.join(",").toUpperCase() : "*")
                        }
                    },
                    get: function(t) {
                        return a[t] || e[t] || a.embeds[t]
                    },
                    getInput: function(e) {
                        if (!n.multiFlash)
                            return f.curInp;
                        try {
                            var t = f.getWrapper(f.get(e));
                            if (t)
                                return t.getElementsByTagName("input")[0]
                        } catch (t) {
                            n.log('[err] Can not find "input" by flashId:', e, t)
                        }
                    },
                    select: function(e) {
                        var i, r = f.getInput(e.flashId), s = n.uid(r), l = e.target.files;
                        o(l, (function(e) {
                            n.checkFileObj(e)
                        }
                        )),
                        u[s] = l,
                        a.createEvent ? ((i = a.createEvent("Event")).files = l,
                        i.initEvent("change", !0, !0),
                        r.dispatchEvent(i)) : t ? t(r).trigger({
                            type: "change",
                            files: l
                        }) : ((i = a.createEventObject()).files = l,
                        r.fireEvent("onchange", i))
                    },
                    cmd: function(e, t, a, i) {
                        try {
                            return n.log("(js -> flash)." + t + ":", a),
                            f.get(e.flashId || e).cmd(t, a)
                        } catch (r) {
                            n.log("(js -> flash).onError:", r),
                            i || setTimeout((function() {
                                f.cmd(e, t, a, !0)
                            }
                            ), 50)
                        }
                    },
                    patch: function() {
                        n.flashEngine = !0,
                        h(n, {
                            getFiles: function(e, t, a) {
                                if (a)
                                    return n.filterFiles(n.getFiles(e), t, a),
                                    null;
                                var i = n.isArray(e) ? e : u[n.uid(e.target || e.srcElement || e)];
                                return i ? (t && (t = n.getFilesFilter(t),
                                i = n.filter(i, (function(e) {
                                    return t.test(e.name)
                                }
                                ))),
                                i) : this.parent.apply(this, arguments)
                            },
                            getInfo: function(e, t) {
                                if (m(e))
                                    this.parent.apply(this, arguments);
                                else if (e.isShot)
                                    t(null, e.info = {
                                        width: e.width,
                                        height: e.height
                                    });
                                else {
                                    if (!e.__info) {
                                        var a = e.__info = n.defer();
                                        f.cmd(e, "getFileInfo", {
                                            id: e.id,
                                            callback: g((function t(n, i) {
                                                v(t),
                                                a.resolve(n, e.info = i)
                                            }
                                            ))
                                        })
                                    }
                                    e.__info.then(t)
                                }
                            }
                        }),
                        n.support.transform = !0,
                        n.Image && h(n.Image.prototype, {
                            get: function(e, t) {
                                return this.set({
                                    scaleMode: t || "noScale"
                                }),
                                this.parent(e)
                            },
                            _load: function(e, t) {
                                if (n.log("FlashAPI.Image._load:", e),
                                m(e))
                                    this.parent.apply(this, arguments);
                                else {
                                    var a = this;
                                    n.getInfo(e, (function(n) {
                                        t.call(a, n, e)
                                    }
                                    ))
                                }
                            },
                            _apply: function(e, t) {
                                if (n.log("FlashAPI.Image._apply:", e),
                                m(e))
                                    this.parent.apply(this, arguments);
                                else {
                                    var a = this.getMatrix(e.info)
                                      , i = t;
                                    f.cmd(e, "imageTransform", {
                                        id: e.id,
                                        matrix: a,
                                        callback: g((function r(o, s) {
                                            n.log("FlashAPI.Image._apply.callback:", o),
                                            v(r),
                                            o ? i(o) : n.support.html5 || n.support.dataURI && !(s.length > 3e4) ? (a.filter && (i = function(e, i) {
                                                e ? t(e) : n.Image.applyFilter(i, a.filter, (function() {
                                                    t(e, this.canvas)
                                                }
                                                ))
                                            }
                                            ),
                                            n.newImage("data:" + e.type + ";base64," + s, i)) : w({
                                                width: a.deg % 180 ? a.dh : a.dw,
                                                height: a.deg % 180 ? a.dw : a.dh,
                                                scale: a.scaleMode
                                            }, s, i)
                                        }
                                        ))
                                    })
                                }
                            },
                            toData: function(e) {
                                var t = this.file
                                  , a = t.info
                                  , i = this.getMatrix(a);
                                n.log("FlashAPI.Image.toData"),
                                m(t) ? this.parent.apply(this, arguments) : ("auto" == i.deg && (i.deg = n.Image.exifOrientation[a && a.exif && a.exif.Orientation] || 0),
                                e.call(this, !t.info, {
                                    id: t.id,
                                    flashId: t.flashId,
                                    name: t.name,
                                    type: t.type,
                                    matrix: i
                                }))
                            }
                        }),
                        n.Image && h(n.Image, {
                            fromDataURL: function(e, t, a) {
                                !n.support.dataURI || e.length > 3e4 ? w(n.extend({
                                    scale: "exactFit"
                                }, t), e.replace(/^data:[^,]+,/, ""), (function(e, t) {
                                    a(t)
                                }
                                )) : this.parent(e, t, a)
                            }
                        }),
                        h(n.Form.prototype, {
                            toData: function(e) {
                                for (var t = this.items, a = t.length; a--; )
                                    if (t[a].file && m(t[a].blob))
                                        return this.parent.apply(this, arguments);
                                n.log("FlashAPI.Form.toData"),
                                e(t)
                            }
                        }),
                        h(n.XHR.prototype, {
                            _send: function(e, t) {
                                if (t.nodeName || t.append && n.support.html5 || n.isArray(t) && "string" == typeof t[0])
                                    return this.parent.apply(this, arguments);
                                var a, i, r = {}, l = {}, u = this;
                                if (o(t, (function(e) {
                                    var t;
                                    e.file ? (l[e.name] = e = {
                                        id: (t = e.blob).id,
                                        name: t.name,
                                        matrix: t.matrix,
                                        flashId: t.flashId
                                    },
                                    i = e.id,
                                    a = e.flashId) : r[e.name] = e.blob
                                }
                                )),
                                i || (a = s),
                                !a)
                                    return n.log("[err] FlashAPI._send: flashId -- undefined"),
                                    this.parent.apply(this, arguments);
                                n.log("FlashAPI.XHR._send: " + a + " -> " + i),
                                u.xhr = {
                                    headers: {},
                                    abort: function() {
                                        f.cmd(a, "abort", {
                                            id: i
                                        })
                                    },
                                    getResponseHeader: function(e) {
                                        return this.headers[e]
                                    },
                                    getAllResponseHeaders: function() {
                                        return this.headers
                                    }
                                };
                                var c = n.queue((function() {
                                    f.cmd(a, "upload", {
                                        url: y(e.url.replace(/([a-z]+)=(\?)&?/i, "")),
                                        data: r,
                                        files: i ? l : null,
                                        headers: e.headers || {},
                                        callback: g((function t(a) {
                                            var i = a.type
                                              , r = a.result;
                                            n.log("FlashAPI.upload." + i),
                                            "progress" == i ? (a.loaded = Math.min(a.loaded, a.total),
                                            a.lengthComputable = !0,
                                            e.progress(a)) : "complete" == i ? (v(t),
                                            "string" == typeof r && (u.responseText = r.replace(/%22/g, '"').replace(/%5c/g, "\\").replace(/%26/g, "&").replace(/%25/g, "%")),
                                            u.end(a.status || 200)) : "abort" != i && "error" != i || (u.end(a.status || 0, a.message),
                                            v(t))
                                        }
                                        ))
                                    })
                                }
                                ));
                                o(l, (function(e) {
                                    c.inc(),
                                    n.getInfo(e, c.next)
                                }
                                )),
                                c.check()
                            }
                        })
                    }
                };
                function d(e) {
                    return ('<object id="#id#" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + (e.width || "100%") + '" height="' + (e.height || "100%") + '"><param name="movie" value="#src#" /><param name="flashvars" value="#flashvars#" /><param name="swliveconnect" value="true" /><param name="allowscriptaccess" value="always" /><param name="allownetworking" value="all" /><param name="menu" value="false" /><param name="wmode" value="#wmode#" /><embed flashvars="#flashvars#" swliveconnect="true" allownetworking="all" allowscriptaccess="always" name="#id#" src="#src#" width="' + (e.width || "100%") + '" height="' + (e.height || "100%") + '" menu="false" wmode="transparent" type="application/x-shockwave-flash"></embed></object>').replace(/#(\w+)#/gi, (function(t, n) {
                        return e[n]
                    }
                    ))
                }
                function p(e, t) {
                    var n, a;
                    if (e && e.style)
                        for (n in t) {
                            "number" == typeof (a = t[n]) && (a += "px");
                            try {
                                e.style[n] = a
                            } catch (e) {}
                        }
                }
                function h(e, t) {
                    o(t, (function(t, n) {
                        var a = e[n];
                        e[n] = function() {
                            return this.parent = a,
                            t.apply(this, arguments)
                        }
                    }
                    ))
                }
                function m(e) {
                    return e && !e.flashId
                }
                function g(e) {
                    var t = e.wid = n.uid();
                    return f._fn[t] = e,
                    "FileAPI.Flash._fn." + t
                }
                function v(e) {
                    try {
                        f._fn[e.wid] = null,
                        delete f._fn[e.wid]
                    } catch (e) {}
                }
                function y(e, t) {
                    if (!c.test(e)) {
                        if (/^\.\//.test(e) || "/" != e.charAt(0)) {
                            var n = i.pathname;
                            e = ((n = n.substr(0, n.lastIndexOf("/"))) + "/" + e).replace("/./", "/")
                        }
                        "//" != e.substr(0, 2) && (e = "//" + i.host + e),
                        c.test(e) || (e = i.protocol + e)
                    }
                    return t && (e += (/\?/.test(e) ? "&" : "?") + t),
                    e
                }
                function w(e, t, i) {
                    var r, o = n.uid(), s = a.createElement("div"), l = 10;
                    for (r in e)
                        s.setAttribute(r, e[r]),
                        s[r] = e[r];
                    p(s, e),
                    e.width = "100%",
                    e.height = "100%",
                    s.innerHTML = d(n.extend({
                        id: o,
                        src: y(n.flashImageUrl, "r=" + n.uid()),
                        wmode: "opaque",
                        flashvars: "scale=" + e.scale + "&callback=" + g((function e() {
                            return v(e),
                            --l > 0 && function() {
                                try {
                                    f.get(o).setImage(t)
                                } catch (e) {
                                    n.log('[err] FlashAPI.Preview.setImage -- can not set "base64":', e)
                                }
                            }(),
                            !0
                        }
                        ))
                    }, e)),
                    i(!1, s),
                    s = null
                }
                n.Flash = f,
                n.newImage("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", (function(e, t) {
                    n.support.dataURI = !(1 != t.width || 1 != t.height),
                    f.init()
                }
                ))
            }()
        }(window, i, FileAPI),
        function(e, t, n) {
            "use strict";
            var a = n.each
              , i = [];
            n.support.flash && n.media && !n.support.media && function() {
                function e(e) {
                    var t = e.wid = n.uid();
                    return n.Flash._fn[t] = e,
                    "FileAPI.Flash._fn." + t
                }
                function t(e) {
                    try {
                        n.Flash._fn[e.wid] = null,
                        delete n.Flash._fn[e.wid]
                    } catch (e) {}
                }
                var r = n.Flash;
                n.extend(n.Flash, {
                    patchCamera: function() {
                        n.Camera.fallback = function(a, i, o) {
                            var s = n.uid();
                            n.log("FlashAPI.Camera.publish: " + s),
                            r.publish(a, s, n.extend(i, {
                                camera: !0,
                                onEvent: e((function e(a) {
                                    "camera" === a.type && (t(e),
                                    a.error ? (n.log("FlashAPI.Camera.publish.error: " + a.error),
                                    o(a.error)) : (n.log("FlashAPI.Camera.publish.success: " + s),
                                    o(null)))
                                }
                                ))
                            }))
                        }
                        ,
                        a(i, (function(e) {
                            n.Camera.fallback.apply(n.Camera, e)
                        }
                        )),
                        i = [],
                        n.extend(n.Camera.prototype, {
                            _id: function() {
                                return this.video.id
                            },
                            start: function(a) {
                                var i = this;
                                r.cmd(this._id(), "camera.on", {
                                    callback: e((function e(r) {
                                        t(e),
                                        r.error ? (n.log("FlashAPI.camera.on.error: " + r.error),
                                        a(r.error, i)) : (n.log("FlashAPI.camera.on.success: " + i._id()),
                                        i._active = !0,
                                        a(null, i))
                                    }
                                    ))
                                })
                            },
                            stop: function() {
                                this._active = !1,
                                r.cmd(this._id(), "camera.off")
                            },
                            shot: function() {
                                n.log("FlashAPI.Camera.shot:", this._id());
                                var e = n.Flash.cmd(this._id(), "shot", {});
                                return e.type = "image/png",
                                e.flashId = this._id(),
                                e.isShot = !0,
                                new n.Camera.Shot(e)
                            }
                        })
                    }
                }),
                n.Camera.fallback = function() {
                    i.push(arguments)
                }
            }()
        }(window, 0, FileAPI),
        void 0 === (a = function() {
            return FileAPI
        }
        .apply(t, [])) || (e.exports = a);
        var o = "FileAPI";
        window.define(o, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof a === t ? typeof e === t ? void 0 : e.exports : a : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([o])
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
        e._sentryDebugIds[t] = "4465273c-796f-4de2-8036-f2e8d2611f72",
        e._sentryDebugIdIdentifier = "sentry-dbid-4465273c-796f-4de2-8036-f2e8d2611f72")
    } catch (e) {}
}();
//# sourceMappingURL=95882.c131f8be75f5da3ac6da.js.map
