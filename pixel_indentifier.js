!function() {
    "use strict";
    window.AMOPIXEL_IDENTIFIER || function(d, r) {
        function e() {
            var e = document.getElementById("amo_pixel_identifier_js");
            e && e.src && (e = e.src.match(/(http.+\.\w+)\//)) && e[1] && (o.base_host = e[1],
            "function" == typeof window.postMessage && window.addEventListener("message", i.handlePostMessage, !1),
            "object" == typeof window.AMOPIXEL_IDENTIFIER_PARAMS && null !== window.AMOPIXEL_IDENTIFIER_PARAMS && "function" == typeof window.AMOPIXEL_IDENTIFIER_PARAMS.onload && (o.callbacks.onload = window.AMOPIXEL_IDENTIFIER_PARAMS.onload),
            i.insertIframe(o.base_host))
        }
        var o = {
            base_host: "",
            visitor_uid: null,
            callbacks: {
                onload: function() {}
            }
        }
          , i = {
            insertIframe: function(e) {
                var o = document.getElementsByTagName("script")[0]
                  , i = document.createElement("iframe")
                  , t = d && d.visitor_id ? d.visitor_id : ""
                  , n = d && d.id ? d.id : ""
                  , s = d && d.hash ? d.hash : ""
                  , a = r && r.token ? r.token : ""
                  , t = {
                    origin: location.origin,
                    visitor_id: t,
                    id: n,
                    hash: s,
                    token: a
                };
                i.src = e + "/pixel/html/person.html?params=" + encodeURIComponent(JSON.stringify(t)),
                i.setAttribute("style", "display:none!important"),
                o.parentNode.insertBefore(i, o)
            },
            handlePostMessage: function(e) {
                e.origin === o.base_host && e.data && "object" == typeof (e = JSON.parse(e.data)) && "pixel_identifier" === e.message_id && e.visitor_uid && (window.removeEventListener("message", i.handlePostMessage, !1),
                o.visitor_uid = e.visitor_uid,
                o.callbacks.onload(window.AMOPIXEL_IDENTIFIER))
            }
        };
        e.prototype.getVisitorUid = function() {
            return o.visitor_uid
        }
        ,
        e.prototype.destroy = function() {
            window.removeEventListener("message", i.handlePostMessage, !1),
            delete window.AMOPIXEL_IDENTIFIER
        }
        ,
        window.AMOPIXEL_IDENTIFIER = new e
    }
    .call(window, window.amo_social_button || window.crm_plugin || {}, window.gso || {})
}();
