"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[58606], {
    967482: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => r
        });
        const r = n.p + "images/1098a699e820ce1c902274ea3790bc79.svg"
    }
    ,
    604874: (e, t, n) => {
        n.r(t),
        n.d(t, {
            ABORT_ERROR_MESSAGE: () => D,
            ANSWER_URL: () => R,
            BASE_URL: () => b,
            BASE_YCLOUD_API_URL: () => L,
            KNOWLEDGE_BASE_DEFAULT_URL: () => P,
            MARK_ANSWER_URL: () => A,
            MARK_REWRITER_URL: () => m,
            MARK_TASK_URL: () => _,
            REWRITER_URL: () => E,
            TASK_URL: () => T,
            addSource: () => H,
            addYCloud: () => ve,
            cancelSourceUploading: () => $,
            checkYCloudKeyStatus: () => ye,
            connectAiTrial: () => we,
            deleteMultipleRow: () => z,
            deleteRow: () => V,
            get: () => M,
            getEmotionDetectionSettings: () => Re,
            getPage: () => ae,
            getSourcePages: () => re,
            getSources: () => Y,
            getTaskSuggestionSettings: () => de,
            getYCloud: () => ge,
            grammar: () => J,
            mark: () => W,
            markTrialExpiredShown: () => Ee,
            post: () => G,
            profanity: () => B,
            reloadPage: () => oe,
            removeMultiplePage: () => se,
            removePage: () => ue,
            removeYCloud: () => Se,
            requestAiTrial: () => be,
            setAnswerOnboarding: () => pe,
            summarize: () => F,
            switchMultiplePageAvailability: () => ce,
            switchMultipleSourceAvailability: () => Q,
            switchSourceAvailability: () => X,
            toggleAnswerSettings: () => fe,
            toggleEmotionDetectionSettings: () => Te,
            toggleTaskSuggestionSettings: () => le,
            tone: () => K,
            updateNameSource: () => ee,
            updatePage: () => ie,
            updateSourceData: () => te,
            updateSourcePagesLang: () => ne,
            updateUrlSource: () => Z,
            updateYCloud: () => he
        });
        var r = n(567952)
          , a = n.n(r)
          , i = n(623967)
          , u = n.n(i)
          , o = n(55188)
          , s = n.n(o)
          , c = n(286340)
          , l = n(197634)
          , d = n(886965)
          , f = n(661533);
        function p(e, t, n, r, a, i, u) {
            try {
                var o = e[i](u)
                  , s = o.value
            } catch (e) {
                return void n(e)
            }
            o.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function g(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);
                    function u(e) {
                        p(i, r, a, u, o, "next", e)
                    }
                    function o(e) {
                        p(i, r, a, u, o, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    v(e, t, n[t])
                }
                ))
            }
            return e
        }
        function S(e, t) {
            var n, r, a, i, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function o(i) {
                return function(o) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = u.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < a[1]) {
                                        u.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    a[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, o])
                }
            }
        }
        var y, w = "", b = APP.constant("airewriter").url, E = "".concat(b, "/api/v1/rewrite_text"), R = "".concat(b, "/api/v1/answer"), T = "".concat(b, "/api/v1/task"), m = "".concat(b, "/api/v1/rewrite_text/stats/mark_used"), A = "".concat(b, "/api/v1/answer/stats/mark_used"), _ = "".concat(b, "/api/v1/task/stats/mark_used"), P = "".concat(b, "/api/v1/source"), O = "".concat(b, "/api/v1/multi/source/disable"), N = "".concat(b, "/api/v1/multi/source/delete"), I = "".concat(b, "/api/v1/summarize_talk"), k = "".concat(b, "/api/v1/tone/analyze"), L = "".concat(b, "/api/v1/ycloud/apikey"), U = "/ajax/v4/emotion_detector/settings", C = "/ajax/v4/airewriter/task_suggestion/settings", D = "AbortError", x = function() {
            return f.ajax({
                url: "/ajax/v4/airewriter/issue_token",
                method: "POST"
            })
        }, j = null, q = (y = g((function(e) {
            var t, n, r, a;
            return S(this, (function(i) {
                switch (i.label) {
                case 0:
                    t = function(t) {
                        return f.ajax(f.extend(!0, {}, e, {
                            url: e.url,
                            beforeSend: function(t) {
                                e.signal && (e.signal.onabort = t.abort)
                            },
                            headers: {
                                "X-Auth-Token": t,
                                "x-language": (0,
                                d.isCustomers)() && s().includes(["leads", "customers"], APP.getBaseEntity()) ? (0,
                                c.getEntityLangInCustomers)(APP.getBaseEntity()) : (0,
                                d.getLangId)()
                            },
                            contentType: "application/json"
                        }))
                    }
                    ,
                    i.label = 1;
                case 1:
                    return i.trys.push([1, 6, 9, 10]),
                    w ? [4, t(w)] : [3, 3];
                case 2:
                    return [2, i.sent()];
                case 3:
                    return j || (j = g((function() {
                        var e, t;
                        return S(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, x()];
                            case 1:
                                return e = n.sent().token,
                                w = e,
                                [2, e];
                            case 2:
                                throw t = n.sent(),
                                j = null,
                                t;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))()),
                    [4, j];
                case 4:
                    return n = i.sent(),
                    [4, t(n)];
                case 5:
                    return [2, i.sent()];
                case 6:
                    if (0 === (r = i.sent()).status)
                        throw new Error(D);
                    return 403 !== r.status ? [3, 8] : [4, x()];
                case 7:
                    return a = i.sent(),
                    w = a.token,
                    [2, t(w)];
                case 8:
                    throw JSON.parse(r.responseText);
                case 9:
                    return w && (j = null),
                    [7];
                case 10:
                    return [2]
                }
            }
            ))
        }
        )),
        function(e) {
            return y.apply(this, arguments)
        }
        ), M = function() {
            var e = g((function(e) {
                var t;
                return S(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, q(e)];
                    case 1:
                        return t = n.sent(),
                        [2, a()(t)]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), G = function() {
            var e = g((function(e) {
                var t, n, r;
                return S(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return t = e.url,
                        n = e.data,
                        [4, q({
                            url: t,
                            method: "POST",
                            data: JSON.stringify(h({}, u()(n)))
                        })];
                    case 1:
                        return r = i.sent(),
                        [2, a()(r)]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), W = function() {
            var e = g((function(e) {
                var t, n;
                return S(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e.url,
                        n = e.data,
                        [4, q({
                            url: t,
                            method: "POST",
                            data: JSON.stringify(h({}, u()(n)))
                        })];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), F = function() {
            var e = g((function(e) {
                var t, n, r;
                return S(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return t = e.talkId,
                        n = e.elementId,
                        r = e.elementType,
                        [4, q({
                            url: "".concat(I, "/").concat(t),
                            method: "POST",
                            data: JSON.stringify({
                                date_format: APP.system.format.date.date,
                                entity_id: n,
                                entity_type: r
                            })
                        })];
                    case 1:
                        return a.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), B = function() {
            var e = g((function(e) {
                var t, n;
                return S(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = APP.constant("ai_services").prdservice,
                        n = t.server_url,
                        [4, f.ajax({
                            url: "".concat(n, "/api/detect"),
                            method: "POST",
                            data: JSON.stringify({
                                text: e,
                                lang: APP.lang_id
                            }),
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), J = function() {
            var e = g((function(e) {
                var t, n;
                return S(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = APP.constant("ai_services").spell_checker_service,
                        n = t.server_url,
                        [4, f.ajax({
                            url: "".concat(n, "/api/check/grammar"),
                            method: "POST",
                            data: JSON.stringify({
                                text: e,
                                lang: APP.lang_id
                            }),
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), K = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: "".concat(k),
                            method: "POST",
                            data: JSON.stringify({
                                text: e
                            })
                        })];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), Y = function() {
            var e = g((function(e) {
                var t, n, r, i, u, o, s, c;
                return S(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return n = e.totalLimit,
                        r = e.page,
                        i = e.orderBy,
                        u = e.orderType,
                        o = r ? "".concat(P, "?page=").concat(r) : "".concat(P, "?limit=").concat(n),
                        i && u && (o = "".concat(o, "&order_by=").concat(i, "&order_type=").concat(u)),
                        [4, q({
                            url: o
                        })];
                    case 1:
                        return s = l.sent(),
                        [2, a()({
                            items: null !== (c = null == s || null === (t = s._embedded) || void 0 === t ? void 0 : t.sources) && void 0 !== c ? c : null == s ? void 0 : s.sources[0],
                            currentPage: null == s ? void 0 : s._page,
                            isNextPageAvailable: (null == s ? void 0 : s._page) ? (null == s ? void 0 : s._page) < (null == s ? void 0 : s._page_count) : null == s ? void 0 : s.is_next_page_available
                        })]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), H = function() {
            var e = g((function(e) {
                var t;
                return S(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, q({
                            url: P,
                            method: "POST",
                            data: JSON.stringify(e),
                            contentType: "application/json"
                        })];
                    case 1:
                        return t = n.sent(),
                        [2, a()(null == t ? void 0 : t.source)]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), z = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: N,
                            method: "POST",
                            data: JSON.stringify(e),
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), V = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: "".concat(P, "/").concat(e),
                            method: "DELETE",
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), Q = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: O,
                            data: JSON.stringify(e),
                            method: "POST",
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), X = function() {
            var e = g((function(e, t) {
                return S(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, q({
                            url: "".concat(P, "/").concat(t, "/disable"),
                            data: JSON.stringify(e),
                            method: "POST",
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(), Z = function() {
            var e = g((function(e) {
                var t;
                return S(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return t = e.id,
                        [4, q({
                            url: "".concat(P, "/").concat(t, "/update_pages"),
                            method: "POST",
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), $ = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: "".concat(P, "/").concat(e, "/cancel"),
                            method: "POST",
                            contentType: "application/json"
                        })];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), ee = function() {
            var e = g((function(e) {
                var t, n;
                return S(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e.id,
                        n = e.value,
                        (0,
                        l.isEmptyString)(n) ? [2] : [4, q({
                            url: "".concat(P, "/").concat(t),
                            method: "PUT",
                            data: JSON.stringify({
                                name: n
                            })
                        })];
                    case 1:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), te = function() {
            var e = g((function(e) {
                var t, n;
                return S(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e.id,
                        (n = e.data).name && (0,
                        l.isEmptyString)(n.name) ? [2] : [4, q({
                            url: "".concat(P, "/").concat(t),
                            method: "PUT",
                            data: JSON.stringify(h({}, u()(n)))
                        })];
                    case 1:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), ne = function() {
            var e = g((function(e) {
                var t, n;
                return S(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e.id,
                        n = e.data,
                        [4, q({
                            url: "".concat(P, "/").concat(t, "/pages/lang"),
                            method: "PATCH",
                            data: JSON.stringify(h({}, u()(n)))
                        })];
                    case 1:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), re = function() {
            var e = g((function(e) {
                var t, n, r, i, u, o, s, c, l, d, f, p;
                return S(this, (function(g) {
                    switch (g.label) {
                    case 0:
                        return n = e.sourceId,
                        r = e.totalLimit,
                        i = e.page,
                        u = e.orderBy,
                        o = e.orderType,
                        s = e.term,
                        c = e.signal,
                        l = "".concat(P, "/").concat(n, "/page"),
                        d = i ? "".concat(l, "?page=").concat(i) : "".concat(l, "?limit=").concat(r),
                        u && o && (d = "".concat(d, "&order_by=").concat(u, "&order_type=").concat(o)),
                        s && (d = "".concat(d, "&term=").concat(s)),
                        [4, q({
                            url: d,
                            signal: c
                        })];
                    case 1:
                        return f = g.sent(),
                        [2, a()({
                            items: null !== (p = null == f || null === (t = f._embedded) || void 0 === t ? void 0 : t.pages) && void 0 !== p ? p : null == f ? void 0 : f.pages[0],
                            currentPage: null == f ? void 0 : f._page,
                            pageCount: null == f ? void 0 : f._page_count,
                            isNextPageAvailable: (null == f ? void 0 : f._page) ? (null == f ? void 0 : f._page) < (null == f ? void 0 : f._page_count) : null == f ? void 0 : f.is_next_page_available
                        })]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), ae = function(e) {
            var t = e.sourceId
              , n = e.pageId;
            return q({
                url: "".concat(P, "/").concat(t, "/page/").concat(n)
            })
        }, ie = function(e) {
            var t = e.sourceId
              , n = e.pageId
              , r = e.data;
            return q({
                url: "".concat(P, "/").concat(t, "/page/").concat(n),
                method: "PATCH",
                data: JSON.stringify(h({}, u()(r)))
            })
        }, ue = function(e) {
            var t = e.sourceId
              , n = e.pageId;
            return q({
                url: "".concat(P, "/").concat(t, "/page/").concat(n),
                method: "DELETE"
            })
        }, oe = function(e) {
            var t = e.sourceId
              , n = e.pageId;
            return q({
                url: "".concat(P, "/").concat(t, "/page/").concat(n, "/reload"),
                method: "PUT"
            })
        }, se = function(e) {
            var t = e.sourceId
              , n = e.data;
            return q({
                url: "".concat(P, "/").concat(t, "/pages/delete"),
                method: "PATCH",
                data: JSON.stringify(h({}, u()(n)))
            })
        }, ce = function(e) {
            var t = e.sourceId
              , n = e.data;
            return q({
                url: "".concat(P, "/").concat(t, "/pages/disable"),
                method: "PATCH",
                data: JSON.stringify(h({}, u()(n)))
            })
        }, le = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: C,
                            method: "POST",
                            data: JSON.stringify({
                                is_ai_task_suggestion_enabled: e
                            })
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), de = function() {
            var e = g((function() {
                return S(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, M({
                            url: C
                        })];
                    case 1:
                        return [2, e.sent()]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), fe = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, q({
                            url: "".concat(R, "/settings"),
                            method: "POST",
                            data: JSON.stringify({
                                ai_answer_enable: e
                            })
                        })];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), pe = function() {
            var e = g((function() {
                return S(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, q({
                            url: "/api/v4/features",
                            method: "POST",
                            data: JSON.stringify({
                                is_ai_user_onboarding_completed: {
                                    is_available: !0,
                                    user_id: APP.constant("user").id
                                }
                            })
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), ge = function() {
            return q({
                url: L
            })
        }, ve = function(e) {
            return q({
                url: L,
                method: "POST",
                data: JSON.stringify(h({}, u()(e))),
                contentType: "application/json"
            })
        }, he = function(e) {
            return q({
                url: L,
                method: "PUT",
                data: JSON.stringify(h({}, u()(e))),
                contentType: "application/json"
            })
        }, Se = function(e) {
            return q({
                url: "".concat(L, "/").concat(e),
                method: "DELETE",
                contentType: "application/json"
            })
        }, ye = function(e) {
            var t = e.id
              , n = e.data;
            return q({
                url: "".concat(L, "/").concat(t),
                method: "PUT",
                data: JSON.stringify(h({}, u()(n))),
                contentType: "application/json"
            })
        }, we = function() {
            return f.ajax({
                url: "/ajax/v4/packages/kommo_ai_trial/connect",
                method: "POST"
            })
        }, be = function(e) {
            var t = {
                type: e
            };
            return f.ajax({
                url: "/ajax/v4/airewriter/user_request",
                method: "POST",
                data: JSON.stringify(t),
                contentType: "application/json"
            })
        }, Ee = function() {
            var e = {
                is_kait_expired_modal_shown: {
                    is_available: !0,
                    user_id: APP.constant("user").id
                }
            };
            return f.ajax({
                url: "/ajax/v4/features",
                method: "POST",
                data: JSON.stringify(e),
                contentType: "application/json"
            })
        }, Re = function() {
            var e = g((function() {
                return S(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, M({
                            url: U
                        })];
                    case 1:
                        return [2, e.sent()]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), Te = function() {
            var e = g((function(e) {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, G({
                            url: U,
                            data: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    ,
    292562: (e, t, n) => {
        n.r(t),
        n.d(t, {
            AnswerUsingStatuses: () => l,
            AvailableSummarizeEntityTypes: () => c,
            RewriteStatusRequest: () => o,
            RewriterErrorCodes: () => s,
            SourceErrorStatus: () => i,
            SourceLoadingStatus: () => a,
            SourceOrigins: () => u,
            SourcesType: () => r,
            TaskTypes: () => f,
            TaskUsingStatuses: () => d,
            TrialUserRequest: () => p
        });
        var r, a, i, u, o, s, c, l, d, f, p, g = n(19050);
        !function(e) {
            e[e.URL = 1] = "URL",
            e[e.FILE = 2] = "FILE",
            e[e.TEXT = 3] = "TEXT"
        }(r || (r = {})),
        function(e) {
            e[e.IN_PROGRESS = 1] = "IN_PROGRESS",
            e[e.SUCCESS = 2] = "SUCCESS",
            e[e.FAIL = 3] = "FAIL",
            e[e.UPDATE = 4] = "UPDATE",
            e[e.STOP = 5] = "STOP",
            e[e.DELETED = 6] = "DELETED",
            e[e.UPDATE_CANCEL = 7] = "UPDATE_CANCEL"
        }(a || (a = {})),
        function(e) {
            e[e.SOMETHING_WENT_WRONG = 1] = "SOMETHING_WENT_WRONG",
            e[e.INVALID_LANG = 2] = "INVALID_LANG",
            e[e.SITE_NOT_AVAILABLE = 3] = "SITE_NOT_AVAILABLE",
            e[e.PARSE_FAIL = 4] = "PARSE_FAIL",
            e[e.UNSUPPORTED_FORMAT = 5] = "UNSUPPORTED_FORMAT",
            e[e.LARGE_FILE = 6] = "LARGE_FILE",
            e[e.INVALID_FILE_FORMAT = 7] = "INVALID_FILE_FORMAT",
            e[e.BROKEN_FILE = 8] = "BROKEN_FILE",
            e[e.TOO_MANY_FILES = 9] = "TOO_MANY_FILES"
        }(i || (i = {})),
        function(e) {
            e.USER = "user",
            e.SHOPIFY = "shopify",
            e.WOOCOMMERCE = "woocom",
            e.NUVEMSHOP = "nuvemshop",
            e.LAZADA = "lazada"
        }(u || (u = {})),
        function(e) {
            e.SUCCESS = "success",
            e.PENDING = "pending",
            e.ERROR = "error",
            e.LOADING = "loading"
        }(o || (o = {})),
        function(e) {
            e[e.NOT_FOUND = 404] = "NOT_FOUND",
            e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED",
            e[e.VALIDATION_ERROR = 400] = "VALIDATION_ERROR"
        }(s || (s = {})),
        function(e) {
            e[e.LEADS = g.default.leads] = "LEADS",
            e[e.CUSTOMERS = g.default.customers] = "CUSTOMERS",
            e[e.CONTACTS = g.default.contacts] = "CONTACTS"
        }(c || (c = {})),
        function(e) {
            e[e.OPEN_ANSWER = 1] = "OPEN_ANSWER",
            e[e.SHOW_ANSWER = 2] = "SHOW_ANSWER",
            e[e.SEND_ANSWER = 3] = "SEND_ANSWER",
            e[e.EDIT_ANSWER = 4] = "EDIT_ANSWER",
            e[e.SKIP_ANSWER = 5] = "SKIP_ANSWER",
            e[e.CLOSE_ANSWER = 6] = "CLOSE_ANSWER"
        }(l || (l = {})),
        function(e) {
            e[e.CORRECT_TASK = 1] = "CORRECT_TASK",
            e[e.EDIT_TASK = 2] = "EDIT_TASK"
        }(d || (d = {})),
        function(e) {
            e[e.FOLLOW_UP = 1] = "FOLLOW_UP",
            e[e.MEET = 2] = "MEET",
            e[e.CUSTOM = 3] = "CUSTOM"
        }(f || (f = {})),
        function(e) {
            e.UPGRADE_REQUESTED = "upgrade_requested",
            e.TRIAL_REQUESTED = "trial_requested",
            e.AGENT_REQUESTED = "ai_agent_requested"
        }(p || (p = {}))
    }
    ,
    700682: (e, t, n) => {
        n.r(t),
        n.d(t, {
            checkAgentPreviewTasks: () => L,
            clearAgentPreviewDialog: () => C,
            disableAiAgent: () => I,
            getAgentPreviewMessages: () => k,
            getAgentSettings: () => T,
            getAgentSources: () => E,
            getAllChannels: () => P,
            getBaseAgentSettings: () => A,
            getIsAiAgentEnabled: () => N,
            importAgentKnowledge: () => O,
            resetAgentSources: () => R,
            saveAgentSettings: () => m,
            saveBaseAgentSettings: () => _,
            sendAgentPreviewMessage: () => U
        });
        var r = n(55188)
          , a = n.n(r)
          , i = n(104737)
          , u = n(604874)
          , o = n(661533);
        function s(e, t, n, r, a, i, u) {
            try {
                var o = e[i](u)
                  , s = o.value
            } catch (e) {
                return void n(e)
            }
            o.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function c(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);
                    function u(e) {
                        s(i, r, a, u, o, "next", e)
                    }
                    function o(e) {
                        s(i, r, a, u, o, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        function l(e, t) {
            var n, r, a, i, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function o(i) {
                return function(o) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = u.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < a[1]) {
                                        u.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    a[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, o])
                }
            }
        }
        var d = "".concat(u.BASE_URL, "/api/v1/agent")
          , f = "".concat(d, "/knowledge")
          , p = "".concat(d, "/settings")
          , g = "".concat(f, "/import")
          , v = "".concat(f, "/reset")
          , h = "".concat("/ajax/v4/airewriter/agent", "/settings")
          , S = "/ajax/v4/talks/agent/multiple"
          , y = null
          , w = function() {
            y = null
        };
        o(document).on("page:entity_changed", w);
        var b, E = (b = c((function() {
            return l(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, (0,
                    u.get)({
                        url: f
                    })];
                case 1:
                    return [2, e.sent()]
                }
            }
            ))
        }
        )),
        function() {
            return b.apply(this, arguments)
        }
        ), R = function() {
            var e = c((function() {
                return l(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, (0,
                        u.post)({
                            url: v
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), T = function() {
            var e = c((function() {
                return l(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, (0,
                        u.get)({
                            url: p
                        })];
                    case 1:
                        return [2, e.sent()]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), m = function() {
            var e = c((function(e) {
                return l(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, (0,
                        u.post)({
                            url: p,
                            data: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), A = function() {
            var e = c((function() {
                return l(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return a().isNull(y) ? [4, y = (0,
                        u.get)({
                            url: h
                        })] : [2, y];
                    case 1:
                        return [2, e.sent()]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), _ = function() {
            var e = c((function(e) {
                return l(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return w(),
                        [4, (0,
                        u.post)({
                            url: h,
                            data: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), P = function() {
            var e = c((function() {
                var e, t;
                return l(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, i.default.request({
                            url: "/ajax/v4/sources?only=chats&with=supports_delivery_notification,is_widget_disabled"
                        })];
                    case 1:
                        return [2, (null == (t = n.sent()) || null === (e = t.Embedded) || void 0 === e ? void 0 : e.sources) || []]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), O = function() {
            var e = c((function(e) {
                return l(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, (0,
                        u.post)({
                            url: g,
                            data: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), N = function(e) {
            var t = e.talkIds;
            return i.default.request({
                url: "".concat(S),
                method: "POST",
                data: {
                    talk_ids: t
                },
                contentType: "application/json"
            })
        }, I = function(e) {
            var t = e.talkIds;
            return i.default.request({
                url: "".concat(S, "/cancel"),
                method: "POST",
                data: {
                    talk_ids: t
                },
                contentType: "application/json"
            })
        }, k = function() {
            var e = c((function() {
                return l(this, (function(e) {
                    return [2, (0,
                    u.get)({
                        url: "".concat(u.BASE_URL, "/api/v1/agent/preview/messages")
                    })]
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), L = function() {
            var e = c((function(e) {
                var t;
                return l(this, (function(n) {
                    return t = e.taskId,
                    [2, (0,
                    u.get)({
                        url: "".concat(u.BASE_URL, "/api/v1/agent/preview/execute/").concat(t)
                    })]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), U = function() {
            var e = c((function(e) {
                return l(this, (function(t) {
                    return [2, (0,
                    u.post)({
                        url: "".concat(u.BASE_URL, "/api/v1/agent/preview/execute"),
                        data: e
                    })]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), C = function() {
            var e = c((function() {
                return l(this, (function(e) {
                    return [2, (0,
                    u.get)({
                        url: "".concat(u.BASE_URL, "/api/v1/agent/preview/clean"),
                        method: "DELETE"
                    })]
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }()
    }
    ,
    908658: (e, t, n) => {
        var r, a;
        n.r(t),
        n.d(t, {
            PreviewMessageTypes: () => a,
            ProductsImportStatus: () => r
        }),
        function(e) {
            e[e.NONE = 0] = "NONE",
            e[e.ACCEPTED = 1] = "ACCEPTED",
            e[e.IN_PROGRESS = 2] = "IN_PROGRESS",
            e[e.COMPLETED = 3] = "COMPLETED"
        }(r || (r = {})),
        function(e) {
            e.Incoming = "incoming",
            e.Outgoing = "outgoing"
        }(a || (a = {}))
    }
    ,
    593444: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getRewriterRequest: () => f,
            postRewriterRequest: () => g
        });
        var r = n(717068)
          , a = n(880774)
          , i = n(604874)
          , u = n(292562);
        function o(e, t, n, r, a, i, u) {
            try {
                var o = e[i](u)
                  , s = o.value
            } catch (e) {
                return void n(e)
            }
            o.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function s(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);
                    function u(e) {
                        o(i, r, a, u, s, "next", e)
                    }
                    function s(e) {
                        o(i, r, a, u, s, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        function c(e, t) {
            var n, r, a, i, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function o(i) {
                return function(o) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = u.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < a[1]) {
                                        u.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    a[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, o])
                }
            }
        }
        var l, d = (l = s((function(e) {
            var t, n, r, o, s, l, d, f, p, g, v, h, S, y, w, b, E, R;
            return c(this, (function(c) {
                switch (c.label) {
                case 0:
                    t = e.jobUuid,
                    n = e.maxRequestCount,
                    r = e.url,
                    o = e.resolve,
                    s = e.reject,
                    l = e.requestCount,
                    d = e.incrementRequestCount,
                    f = e.clearRequestCount,
                    c.label = 1;
                case 1:
                    return c.trys.push([1, 3, , 4]),
                    [4, (0,
                    i.get)({
                        url: "".concat(r, "/").concat(t)
                    })];
                case 2:
                    switch (p = c.sent(),
                    g = p.status,
                    v = p.answer,
                    h = void 0 === v ? "" : v,
                    S = p.detail,
                    y = void 0 === S ? "" : S,
                    w = p.answerId,
                    b = p.usedReferences,
                    g) {
                    case u.RewriteStatusRequest.ERROR:
                        f(),
                        s({
                            detail: y
                        });
                        break;
                    case u.RewriteStatusRequest.PENDING:
                        l === n ? (f(),
                        s({
                            detail: (0,
                            a.i18n)("Something went wrong"),
                            code: u.RewriterErrorCodes.NOT_FOUND
                        })) : d();
                        break;
                    case u.RewriteStatusRequest.LOADING:
                    case u.RewriteStatusRequest.SUCCESS:
                        h && f()
                    }
                    return o({
                        answer: h,
                        status: g,
                        answerId: w,
                        usedReferences: b
                    }),
                    [3, 4];
                case 3:
                    return E = c.sent(),
                    R = E.detail ? E : {
                        detail: (0,
                        a.i18n)("Something went wrong"),
                        code: u.RewriterErrorCodes.NOT_FOUND
                    },
                    f(),
                    s(R),
                    [3, 4];
                case 4:
                    return [2]
                }
            }
            ))
        }
        )),
        function(e) {
            return l.apply(this, arguments)
        }
        ), f = function() {
            var e = s((function(e) {
                var t, n, a, i, u, o, s, l, f, p;
                return c(this, (function(c) {
                    return t = e.jobUuid,
                    n = e.maxRequestCount,
                    a = e.url,
                    i = e.requestCount,
                    u = e.clearRequestCount,
                    o = e.incrementRequestCount,
                    s = new r.SplitPromise,
                    l = s.promise,
                    f = s.resolve,
                    p = s.reject,
                    d({
                        jobUuid: t,
                        resolve: f,
                        reject: p,
                        maxRequestCount: n,
                        url: a,
                        requestCount: i,
                        clearRequestCount: u,
                        incrementRequestCount: o
                    }),
                    [2, l]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), p = function() {
            var e = s((function(e) {
                var t, n, r, o, s, l, d, f, p, g, v, h, S, y, w, b, E;
                return c(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        t = e.text,
                        n = e.id,
                        r = e.resolve,
                        o = e.reject,
                        c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]),
                        [4, (0,
                        i.post)({
                            url: i.REWRITER_URL,
                            data: {
                                rewriteTypes: [n],
                                text: t
                            }
                        })];
                    case 2:
                        return s = c.sent(),
                        l = s.status,
                        d = s.answer,
                        f = void 0 === d ? "" : d,
                        p = s.jobUuid,
                        g = void 0 === p ? "" : p,
                        v = s.detail,
                        h = void 0 === v ? "" : v,
                        S = s.answerId,
                        y = s.usedReferences,
                        w = s.code,
                        f || l === u.RewriteStatusRequest.PENDING ? (r({
                            answer: f,
                            status: l,
                            jobUuid: g,
                            answerId: S,
                            usedReferences: y
                        }),
                        [2]) : (!h && g || o({
                            detail: h,
                            code: w
                        }),
                        [3, 4]);
                    case 3:
                        return b = c.sent(),
                        E = b.detail ? b : {
                            detail: (0,
                            a.i18n)("Something went wrong"),
                            code: u.RewriterErrorCodes.NOT_FOUND
                        },
                        o(E),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), g = function() {
            var e = s((function(e) {
                var t, n, a, i, u, o;
                return c(this, (function(s) {
                    return t = e.text,
                    n = e.id,
                    a = new r.SplitPromise,
                    i = a.promise,
                    u = a.resolve,
                    o = a.reject,
                    p({
                        text: t,
                        id: n,
                        resolve: u,
                        reject: o
                    }),
                    [2, i]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    ,
    555424: (e, t, n) => {
        n.r(t),
        n.d(t, {
            getTaskRequest: () => f
        });
        var r = n(717068)
          , a = n(880774)
          , i = n(604874)
          , u = n(292562);
        function o(e, t, n, r, a, i, u) {
            try {
                var o = e[i](u)
                  , s = o.value
            } catch (e) {
                return void n(e)
            }
            o.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function s(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);
                    function u(e) {
                        o(i, r, a, u, s, "next", e)
                    }
                    function s(e) {
                        o(i, r, a, u, s, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        function c(e, t) {
            var n, r, a, i, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function o(i) {
                return function(o) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = u.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < a[1]) {
                                        u.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    a[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, o])
                }
            }
        }
        var l, d = (l = s((function(e) {
            var t, n, r, o, s, l, d, f, p, g, v, h, S, y, w, b, E, R, T;
            return c(this, (function(c) {
                switch (c.label) {
                case 0:
                    t = e.jobUuid,
                    n = e.maxRequestCount,
                    r = e.url,
                    o = e.resolve,
                    s = e.reject,
                    l = e.requestCount,
                    d = e.incrementRequestCount,
                    f = e.clearRequestCount,
                    c.label = 1;
                case 1:
                    return c.trys.push([1, 3, , 4]),
                    [4, (0,
                    i.get)({
                        url: "".concat(r, "/").concat(t)
                    })];
                case 2:
                    switch (p = c.sent(),
                    g = p.status,
                    v = p.taskId,
                    h = void 0 === v ? null : v,
                    S = p.taskText,
                    y = void 0 === S ? "" : S,
                    w = p.taskDeadline,
                    b = void 0 === w ? null : w,
                    E = p.taskType,
                    g) {
                    case u.RewriteStatusRequest.ERROR:
                        f(),
                        s({
                            detail: (0,
                            a.i18n)("Something went wrong")
                        });
                        break;
                    case u.RewriteStatusRequest.PENDING:
                        l + 1 === n ? (f(),
                        s({
                            detail: (0,
                            a.i18n)("Something went wrong"),
                            code: u.RewriterErrorCodes.NOT_FOUND
                        })) : d();
                        break;
                    case u.RewriteStatusRequest.LOADING:
                    case u.RewriteStatusRequest.SUCCESS:
                        b && f()
                    }
                    return o({
                        taskId: h,
                        taskDeadline: b,
                        status: g,
                        taskText: y,
                        taskType: E
                    }),
                    [3, 4];
                case 3:
                    return R = c.sent(),
                    T = R.detail ? R : {
                        detail: (0,
                        a.i18n)("Something went wrong"),
                        code: u.RewriterErrorCodes.NOT_FOUND
                    },
                    f(),
                    s(T),
                    [3, 4];
                case 4:
                    return [2]
                }
            }
            ))
        }
        )),
        function(e) {
            return l.apply(this, arguments)
        }
        ), f = function() {
            var e = s((function(e) {
                var t, n, a, i, u, o, s, l, f, p;
                return c(this, (function(c) {
                    return t = e.jobUuid,
                    n = e.maxRequestCount,
                    a = e.url,
                    i = e.requestCount,
                    u = e.incrementRequestCount,
                    o = e.clearRequestCount,
                    s = new r.SplitPromise,
                    l = s.promise,
                    f = s.resolve,
                    p = s.reject,
                    d({
                        jobUuid: t,
                        resolve: f,
                        reject: p,
                        maxRequestCount: n,
                        url: a,
                        requestCount: i,
                        incrementRequestCount: u,
                        clearRequestCount: o
                    }),
                    [2, l]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    ,
    960190: (e, t, n) => {
        n.r(t),
        n.d(t, {
            AvailableSummarizeEntityTypes: () => c.AvailableSummarizeEntityTypes,
            KNOWLEDGE_BASE_DEFAULT_URL: () => s.KNOWLEDGE_BASE_DEFAULT_URL,
            PreviewMessage: () => l.PreviewMessage,
            PreviewMessageTypes: () => l.PreviewMessageTypes,
            ProductsImportStatus: () => l.ProductsImportStatus,
            REWRITER_URL: () => s.REWRITER_URL,
            RewriteStatusRequest: () => c.RewriteStatusRequest,
            RewriterErrorCodes: () => c.RewriterErrorCodes,
            SourceErrorStatus: () => c.SourceErrorStatus,
            SourceLoadingStatus: () => c.SourceLoadingStatus,
            SourceOrigins: () => c.SourceOrigins,
            SourcesType: () => c.SourcesType,
            TaskTypes: () => c.TaskTypes,
            TaskUsingStatuses: () => c.TaskUsingStatuses,
            addSource: () => s.addSource,
            cancelSourceUploading: () => s.cancelSourceUploading,
            checkAgentPreviewTasks: () => o.checkAgentPreviewTasks,
            clearAgentPreviewDialog: () => o.clearAgentPreviewDialog,
            connectAiTrial: () => s.connectAiTrial,
            deleteMultipleRow: () => s.deleteMultipleRow,
            deleteRow: () => s.deleteRow,
            disableAiAgent: () => o.disableAiAgent,
            get: () => s.get,
            getAgentPreviewMessages: () => o.getAgentPreviewMessages,
            getAgentSettings: () => o.getAgentSettings,
            getAgentSources: () => o.getAgentSources,
            getAllChannels: () => o.getAllChannels,
            getBaseAgentSettings: () => o.getBaseAgentSettings,
            getEmotionDetectionSettings: () => s.getEmotionDetectionSettings,
            getIsAiAgentEnabled: () => o.getIsAiAgentEnabled,
            getPage: () => s.getPage,
            getRewriterRequest: () => u.getRewriterRequest,
            getSourcePages: () => s.getSourcePages,
            getSources: () => s.getSources,
            getTaskSuggestionSettings: () => s.getTaskSuggestionSettings,
            grammar: () => s.grammar,
            importAgentKnowledge: () => o.importAgentKnowledge,
            mark: () => s.mark,
            markAnswer: () => a.default,
            markRewriter: () => r.default,
            markTrialExpiredShown: () => s.markTrialExpiredShown,
            post: () => s.post,
            postAnswerRequest: () => i.default,
            postRewriterRequest: () => u.postRewriterRequest,
            profanity: () => s.profanity,
            reloadPage: () => s.reloadPage,
            removeMultiplePage: () => s.removeMultiplePage,
            removePage: () => s.removePage,
            requestAiTrial: () => s.requestAiTrial,
            resetAgentSources: () => o.resetAgentSources,
            saveAgentSettings: () => o.saveAgentSettings,
            saveBaseAgentSettings: () => o.saveBaseAgentSettings,
            sendAgentPreviewMessage: () => o.sendAgentPreviewMessage,
            setAnswerOnboarding: () => s.setAnswerOnboarding,
            summarize: () => s.summarize,
            switchMultiplePageAvailability: () => s.switchMultiplePageAvailability,
            switchMultipleSourceAvailability: () => s.switchMultipleSourceAvailability,
            switchSourceAvailability: () => s.switchSourceAvailability,
            toggleAnswerSettings: () => s.toggleAnswerSettings,
            toggleEmotionDetectionSettings: () => s.toggleEmotionDetectionSettings,
            toggleTaskSuggestionSettings: () => s.toggleTaskSuggestionSettings,
            tone: () => s.tone,
            updateNameSource: () => s.updateNameSource,
            updatePage: () => s.updatePage,
            updateSourceData: () => s.updateSourceData,
            updateSourcePagesLang: () => s.updateSourcePagesLang,
            updateUrlSource: () => s.updateUrlSource
        });
        var r = n(872767)
          , a = n(743773)
          , i = n(746716)
          , u = n(593444)
          , o = n(700682)
          , s = n(604874)
          , c = n(292562)
          , l = n(908658)
    }
    ,
    743773: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var r = n(604874);
        const a = function(e) {
            var t = e.data
              , n = e.answerId;
            (0,
            r.mark)({
                url: "".concat(r.MARK_ANSWER_URL, "/").concat(n),
                data: t
            })
        }
    }
    ,
    872767: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => i
        });
        var r = n(604874);
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const i = function(e) {
            var t, n = e.currentText, i = e.rewriterAnswer, u = i.answer, o = i.answerId;
            t = n === u ? {
                data: {
                    isUsed: !0
                }
            } : {
                data: {
                    isUsed: !1,
                    userText: n
                }
            },
            (0,
            r.mark)(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                url: "".concat(r.MARK_REWRITER_URL, "/").concat(o)
            }, t))
        }
    }
    ,
    746716: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => g,
            postGenerateAnswerRequest: () => p
        });
        var r = n(717068)
          , a = n(880774)
          , i = n(292562)
          , u = n(604874);
        function o(e, t, n, r, a, i, u) {
            try {
                var o = e[i](u)
                  , s = o.value
            } catch (e) {
                return void n(e)
            }
            o.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function s(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);
                    function u(e) {
                        o(i, r, a, u, s, "next", e)
                    }
                    function s(e) {
                        o(i, r, a, u, s, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        function c(e, t) {
            var n, r, a, i, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function o(i) {
                return function(o) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = u.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < a[1]) {
                                        u.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    a[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, o])
                }
            }
        }
        var l, d = (l = s((function(e) {
            var t, n, r, o, s, l, d, f, p, g, v, h, S, y, w, b, E, R;
            return c(this, (function(c) {
                switch (c.label) {
                case 0:
                    t = e.url,
                    n = void 0 === t ? u.ANSWER_URL : t,
                    r = e.data,
                    o = e.resolve,
                    s = e.reject,
                    c.label = 1;
                case 1:
                    return c.trys.push([1, 3, , 4]),
                    [4, (0,
                    u.post)({
                        url: n,
                        data: r
                    })];
                case 2:
                    return l = c.sent(),
                    d = l.status,
                    f = l.answer,
                    p = void 0 === f ? "" : f,
                    g = l.jobUuid,
                    v = void 0 === g ? "" : g,
                    h = l.detail,
                    S = void 0 === h ? "" : h,
                    y = l.answerId,
                    w = l.usedReferences,
                    b = l.code,
                    p || d === i.RewriteStatusRequest.PENDING || d === i.RewriteStatusRequest.LOADING ? (o({
                        answer: p,
                        status: d,
                        usedReferences: w,
                        jobUuid: v,
                        answerId: y
                    }),
                    [2]) : (!S && v || s({
                        detail: S,
                        code: b
                    }),
                    [3, 4]);
                case 3:
                    return E = c.sent(),
                    R = E.detail ? E : {
                        detail: (0,
                        a.i18n)("Something went wrong. Please Try again."),
                        code: i.RewriterErrorCodes.NOT_FOUND
                    },
                    s(R),
                    [3, 4];
                case 4:
                    return [2]
                }
            }
            ))
        }
        )),
        function(e) {
            return l.apply(this, arguments)
        }
        ), f = function() {
            var e = s((function(e) {
                var t, n, a, i, u, o, s, l;
                return c(this, (function(c) {
                    return t = e.lastMessageId,
                    n = e.talkId,
                    a = e.entityId,
                    i = e.entityType,
                    u = new r.SplitPromise,
                    o = u.promise,
                    s = u.resolve,
                    l = u.reject,
                    d({
                        data: {
                            talkId: n,
                            lastMessageId: t,
                            entityId: a,
                            entityType: i
                        },
                        resolve: s,
                        reject: l
                    }),
                    [2, o]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), p = function() {
            var e = s((function(e) {
                var t, n, a, i, o, s, l, f;
                return c(this, (function(c) {
                    return t = e.text,
                    n = e.talkId,
                    a = e.entityId,
                    i = e.entityType,
                    o = new r.SplitPromise,
                    s = o.promise,
                    l = o.resolve,
                    f = o.reject,
                    d({
                        data: {
                            talkId: n,
                            text: t,
                            entityId: a,
                            entityType: i
                        },
                        url: "".concat(u.ANSWER_URL, "/direct"),
                        resolve: l,
                        reject: f
                    }),
                    [2, s]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        const g = f
    }
    ,
    58256: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var r = n(717068)
          , a = n(880774)
          , i = n(292562)
          , u = n(604874);
        function o(e, t, n, r, a, i, u) {
            try {
                var o = e[i](u)
                  , s = o.value
            } catch (e) {
                return void n(e)
            }
            o.done ? t(s) : Promise.resolve(s).then(r, a)
        }
        function s(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var i = e.apply(t, n);
                    function u(e) {
                        o(i, r, a, u, s, "next", e)
                    }
                    function s(e) {
                        o(i, r, a, u, s, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        function c(e, t) {
            var n, r, a, i, u = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function o(i) {
                return function(o) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = u.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < a[1]) {
                                        u.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && u.label < a[2]) {
                                        u.label = a[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    a[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, o])
                }
            }
        }
        var l, d = (l = s((function(e) {
            var t, n, r, o, s, l, d, f, p, g, v, h, S, y, w, b, E, R, T;
            return c(this, (function(c) {
                switch (c.label) {
                case 0:
                    t = e.messageId,
                    n = e.talkId,
                    r = e.elementId,
                    o = e.elementType,
                    s = e.resolve,
                    l = e.reject,
                    c.label = 1;
                case 1:
                    return c.trys.push([1, 3, , 4]),
                    [4, (0,
                    u.post)({
                        url: u.TASK_URL,
                        data: {
                            talkId: n,
                            lastMessageId: t,
                            entityId: r,
                            entityType: o
                        }
                    })];
                case 2:
                    return d = c.sent(),
                    f = d.status,
                    p = d.taskId,
                    g = void 0 === p ? null : p,
                    v = d.taskText,
                    h = void 0 === v ? "" : v,
                    S = d.jobUuid,
                    y = void 0 === S ? "" : S,
                    w = d.taskDeadline,
                    b = void 0 === w ? null : w,
                    E = d.taskType,
                    h || f === i.RewriteStatusRequest.PENDING || f === i.RewriteStatusRequest.LOADING ? (s({
                        taskId: g,
                        taskText: h,
                        status: f,
                        taskDeadline: b,
                        jobUuid: y,
                        taskType: E
                    }),
                    [2]) : (!h && y || l({
                        taskText: h
                    }),
                    [3, 4]);
                case 3:
                    return R = c.sent(),
                    T = R.detail ? R : {
                        detail: (0,
                        a.i18n)("Something went wrong. Please Try again."),
                        code: i.RewriterErrorCodes.NOT_FOUND
                    },
                    l(T),
                    [3, 4];
                case 4:
                    return [2]
                }
            }
            ))
        }
        )),
        function(e) {
            return l.apply(this, arguments)
        }
        ), f = function() {
            var e = s((function(e) {
                var t, n, a, i, u, o, s, l;
                return c(this, (function(c) {
                    return t = e.messageId,
                    n = e.talkId,
                    a = e.elementId,
                    i = e.elementType,
                    u = new r.SplitPromise,
                    o = u.promise,
                    s = u.resolve,
                    l = u.reject,
                    d({
                        talkId: n,
                        messageId: t,
                        elementId: a,
                        elementType: i,
                        resolve: s,
                        reject: l
                    }),
                    [2, o]
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        const p = f
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
        e._sentryDebugIds[t] = "84fb62f0-8f22-45d2-b352-105b0b0a2311",
        e._sentryDebugIdIdentifier = "sentry-dbid-84fb62f0-8f22-45d2-b352-105b0b0a2311")
    } catch (e) {}
}();
//# sourceMappingURL=58606.987b8967e3075c4214b8.js.map
