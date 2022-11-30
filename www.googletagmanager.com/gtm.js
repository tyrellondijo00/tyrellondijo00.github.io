// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "4",

      macros: [
        { function: "__e" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleRatio",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleTime",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        {
          function: "__gaawc",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendPageView: true,
          vtp_enableSendToServerContainer: false,
          vtp_measurementId: "G-WM0F08JFKM",
          vtp_enableUserProperties: true,
          vtp_enableEuid: false,
          vtp_enableSendFirstPartyUserDataForSgtm: false,
          tag_id: 4,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_eventName: "click_button_form",
          vtp_measurementId: "G-WM0F08JFKM",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: false,
          vtp_enableEuid: false,
          tag_id: 6,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_eventName: "form_popup_true",
          vtp_measurementId: "G-WM0F08JFKM",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: false,
          vtp_enableEuid: false,
          tag_id: 8,
        },
        { function: "__cl", tag_id: 9 },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector:
            "#popup-notification \u003E div.popup__wrap.text-center",
          vtp_firingFrequency: "MANY_PER_ELEMENT",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "57624438_7",
          tag_id: 10,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        {
          function: "_css",
          arg0: ["macro", 1],
          arg1: "#form \u003E div.text-right.text\\:max-sm-center \u003E button",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.elementVisibility" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)57624438_7($|,)))",
        },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 3, 4],
        ],
        [
          ["if", 1, 2],
          ["add", 1],
        ],
        [
          ["if", 3, 4],
          ["add", 2],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Gk = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function () {},
    oa = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    pa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    qa = Array.isArray,
    ra = function (a, b) {
      if (a && qa(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    sa = function (a, b) {
      if (!pa(a) || !pa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ua = function (a, b) {
      for (var c = new ta(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    xa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    za = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function (a) {
      var b = [];
      if (qa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Da = function () {
      return new Date(Date.now());
    },
    z = function () {
      return Da().getTime();
    },
    ta = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ta.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ta.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ha = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ka = /^\w{1,9}$/,
    La = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ka.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ma = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Pa() {
    for (var a = Qa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ra() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Qa, Sa;
  function Ta(a) {
    Qa = Qa || Ra();
    Sa = Sa || Pa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Qa[m], Qa[n], Qa[p], Qa[q]);
    }
    return b.join("");
  }
  function Ua(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Sa[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Qa = Qa || Ra();
    Sa = Sa || Pa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Va = {},
    Wa = function (a, b) {
      Va[a] = Va[a] || [];
      Va[a][b] = !0;
    },
    Xa = function () {
      delete Va.GA4_EVENT;
    },
    Ya = function (a) {
      var b = Va[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Ta(c.join("")).replace(/\.+$/, "");
    };
  var Za = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var $a,
    ab = function () {
      if (void 0 === $a) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          $a = a;
        } else $a = a;
      }
      return $a;
    };
  var cb = function (a, b) {
    this.h = b === bb ? a : "";
  };
  cb.prototype.toString = function () {
    return this.h + "";
  };
  var bb = {};
  var db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function eb() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function fb(a) {
    return -1 != eb().indexOf(a);
  }
  function gb() {
    return fb("Firefox") || fb("FxiOS");
  }
  function hb() {
    return ((fb("Chrome") || fb("CriOS")) && !fb("Edge")) || fb("Silk");
  }
  var ib = {},
    jb = function (a, b) {
      this.h = b === ib ? a : "";
    };
  jb.prototype.toString = function () {
    return this.h.toString();
  };
  var kb = function (a) {
      return a instanceof jb && a.constructor === jb
        ? a.h
        : "type_error:SafeHtml";
    },
    lb = function (a) {
      var b = a,
        c = ab(),
        d = c ? c.createHTML(b) : b;
      return new jb(d, ib);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function mb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var E = window,
    F = document,
    nb = navigator,
    ob = F.currentScript && F.currentScript.src,
    pb = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a];
    },
    qb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    rb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    sb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function tb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var ub = function (a, b, c, d, e) {
      var f = F.createElement("script");
      tb(f, d, rb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        l = a,
        m = ab(),
        n = m ? m.createScriptURL(l) : l;
      g = new cb(n, bb);
      f.src =
        g instanceof cb && g.constructor === cb
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        u =
          null ==
          (t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : t.call(q, "script[nonce]");
      (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      qb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var r = F.getElementsByTagName("script")[0] || F.body || F.head;
        r.parentNode.insertBefore(f, r);
      }
      return f;
    },
    vb = function () {
      if (ob) {
        var a = ob.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    wb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = F.createElement("iframe")), (l = !0));
      tb(g, c, sb);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (l) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(g, m);
      }
      qb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    xb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    yb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    zb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    Ab = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Bb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Cb = function (a) {
      var b = F.createElement("div"),
        c = b,
        d = lb("A<div>" + a + "</div>");
      void 0 !== c.tagName && mb(c);
      c.innerHTML = kb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Db = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Eb = function (a) {
      var b;
      try {
        b = nb.sendBeacon && nb.sendBeacon(a);
      } catch (c) {
        Wa("TAGGING", 15);
      }
      b || xb(a);
    },
    Fb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Gb = function () {
      var a = E.performance;
      if (a && oa(a.now)) return a.now();
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ib = function (a) {
      if (null == a) return String(a);
      var b = Hb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Jb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Kb = function (a) {
      if (!a || "object" != Ib(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Jb(a, "constructor") &&
          !Jb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Jb(a, b);
    },
    J = function (a, b) {
      var c = b || ("array" == Ib(a) ? [] : {}),
        d;
      for (d in a)
        if (Jb(a, d)) {
          var e = a[d];
          "array" == Ib(e)
            ? ("array" != Ib(c[d]) && (c[d] = []), (c[d] = J(e, c[d])))
            : Kb(e)
            ? (Kb(c[d]) || (c[d] = {}), (c[d] = J(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Lb = function (a) {
    if (void 0 === a || qa(a) || Kb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Mb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Oh: a("consent"),
      Lf: a("convert_case_to"),
      Mf: a("convert_false_to"),
      Nf: a("convert_null_to"),
      Of: a("convert_true_to"),
      Pf: a("convert_undefined_to"),
      sk: a("debug_mode_metadata"),
      Ra: a("function"),
      Ue: a("instance_name"),
      Ei: a("live_only"),
      Fi: a("malware_disabled"),
      Gi: a("metadata"),
      Ji: a("original_activity_id"),
      wk: a("original_vendor_template_id"),
      vk: a("once_on_load"),
      Ii: a("once_per_event"),
      Sg: a("once_per_load"),
      xk: a("priority_override"),
      yk: a("respected_consent_types"),
      Wg: a("setup_tags"),
      Qc: a("tag_id"),
      Xg: a("teardown_tags"),
    };
  })();
  var ic;
  var jc = [],
    kc = [],
    lc = [],
    mc = [],
    nc = [],
    oc = {},
    pc,
    qc,
    sc = function () {
      var a = rc;
      qc = qc || a;
    },
    tc,
    uc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = oc[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.dh && d.dh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.bh && (f.vtp_gtmCachedValues = d.bh);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = jc[m];
                  break;
                case 1:
                  n = mc[m];
                  break;
                default:
                  l = "";
                  break a;
              }
              var p = n && n[Mb.Ue];
              l = p ? String(p) : "";
            }
          }
          b.name = l;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : ic(c, f, b);
    },
    wc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = vc(a[e], b, c));
      return d;
    },
    vc = function (a, b, c) {
      if (qa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(vc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = jc[f];
            if (!g || b.nf(g)) return;
            c[f] = !0;
            var l = String(g[Mb.Ue]);
            try {
              var m = wc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = uc(m, { event: b, index: f, type: 2, name: l });
              tc && (d = tc.Yi(d, m));
            } catch (x) {
              b.qh && b.qh(x, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[vc(a[n], b, c)] = vc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = vc(a[q], b, c);
              qc && (p = p || t === qc.Rd);
              d.push(t);
            }
            return qc && p ? qc.Zi(d) : d.join("");
          case "escape":
            d = vc(a[1], b, c);
            if (qc && qa(a[1]) && "macro" === a[1][0] && qc.yj(a))
              return qc.Qj(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Nb[a[u]] && (d = Nb[a[u]](d));
            return d;
          case "tag":
            var r = a[1];
            if (!mc[r])
              throw Error("Unable to resolve tag reference " + r + ".");
            return (d = { jh: a[2], index: r });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = xc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    xc = function (a, b, c) {
      try {
        return pc(wc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Ac = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = yc(a), f = 0; f < kc.length; f++) {
        var g = kc[f],
          l = zc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < mc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    zc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    yc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = xc(lc[c], a));
        return b[c];
      };
    };
  var Bc = {
    Yi: function (a, b) {
      b[Mb.Lf] &&
        "string" === typeof a &&
        (a = 1 == b[Mb.Lf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Mb.Nf) && null === a && (a = b[Mb.Nf]);
      b.hasOwnProperty(Mb.Pf) && void 0 === a && (a = b[Mb.Pf]);
      b.hasOwnProperty(Mb.Of) && !0 === a && (a = b[Mb.Of]);
      b.hasOwnProperty(Mb.Mf) && !1 === a && (a = b[Mb.Mf]);
      return a;
    },
  };
  var Yc = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Zc(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var ad = function (a) {
      return $c ? F.querySelectorAll(a) : null;
    },
    ed = function (a, b) {
      if (!$c) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    fd = !1;
  if (F.querySelectorAll)
    try {
      var gd = F.querySelectorAll(":root");
      gd && 1 == gd.length && gd[0] == F.documentElement && (fd = !0);
    } catch (a) {}
  var $c = fd;
  var O = function (a) {
    Wa("GTM", a);
  };
  var P = {
      g: {
        F: "ad_storage",
        R: "analytics_storage",
        If: "region",
        Jf: "consent_updated",
        Kf: "wait_for_update",
        Sh: "app_remove",
        Th: "app_store_refund",
        Uh: "app_store_subscription_cancel",
        Vh: "app_store_subscription_convert",
        Wh: "app_store_subscription_renew",
        Qf: "add_payment_info",
        Rf: "add_shipping_info",
        mc: "add_to_cart",
        nc: "remove_from_cart",
        Sf: "view_cart",
        Ib: "begin_checkout",
        oc: "select_item",
        sb: "view_item_list",
        Jb: "select_promotion",
        tb: "view_promotion",
        Ba: "purchase",
        qc: "refund",
        Ha: "view_item",
        Tf: "add_to_wishlist",
        Xh: "first_open",
        Yh: "first_visit",
        va: "gtag.config",
        Ca: "gtag.get",
        Zh: "in_app_purchase",
        sc: "page_view",
        ai: "session_start",
        we: "user_engagement",
        Kb: "gclid",
        ia: "ads_data_redaction",
        X: "allow_ad_personalization_signals",
        xe: "allow_custom_scripts",
        bi: "allow_display_features",
        uc: "allow_enhanced_conversions",
        Lb: "allow_google_signals",
        wa: "allow_interest_groups",
        vd: "auid",
        ci: "auto_detection_enabled",
        Wa: "aw_remarketing",
        wd: "aw_remarketing_only",
        vc: "discount",
        wc: "aw_feed_country",
        xc: "aw_feed_language",
        Z: "items",
        yc: "aw_merchant_id",
        Uf: "aw_basket_type",
        xd: "campaign_content",
        yd: "campaign_id",
        zd: "campaign_medium",
        Ad: "campaign_name",
        zc: "campaign",
        Bd: "campaign_source",
        Cd: "campaign_term",
        kb: "client_id",
        di: "content_group",
        ei: "content_type",
        Da: "conversion_cookie_prefix",
        Ac: "conversion_id",
        Xa: "conversion_label",
        qa: "conversion_linker",
        ye: "conversion_api",
        Ya: "cookie_domain",
        Ia: "cookie_expires",
        Za: "cookie_flags",
        Bc: "cookie_name",
        ze: "cookie_path",
        Pa: "cookie_prefix",
        ub: "cookie_update",
        Mb: "country",
        ma: "currency",
        Cc: "customer_lifetime_value",
        Dc: "custom_map",
        fi: "debug_mode",
        aa: "developer_id",
        Vf: "disable_merchant_reported_purchases",
        gi: "dc_custom_params",
        hi: "dc_natural_search",
        Ae: "dynamic_event_settings",
        ii: "affiliation",
        Wf: "checkout_option",
        Xf: "checkout_step",
        ji: "coupon",
        Yf: "item_list_name",
        Zf: "list_name",
        ki: "promotions",
        Ec: "shipping",
        ag: "tax",
        Dd: "engagement_time_msec",
        Fc: "enhanced_client_id",
        Gc: "enhanced_conversions",
        cg: "enhanced_conversions_automatic_settings",
        Hc: "estimated_delivery_date",
        Be: "euid_logged_in_state",
        Nb: "event_callback",
        Ob: "event_developer_id_string",
        dg: "event",
        Ed: "event_settings",
        Fd: "event_timeout",
        li: "experiments",
        Ce: "firebase_id",
        Gd: "first_party_collection",
        Hd: "_x_20",
        vb: "_x_19",
        eg: "fledge",
        fg: "flight_error_code",
        gg: "flight_error_message",
        hg: "gac_gclid",
        Id: "gac_wbraid",
        ig: "gac_wbraid_multiple_conversions",
        Ic: "ga_restrict_domain",
        De: "ga_temp_client_id",
        jg: "gdpr_applies",
        kg: "geo_granularity",
        ab: "value_callback",
        Qa: "value_key",
        Pb: "global_developer_id_string",
        tk: "google_ono",
        lb: "google_signals",
        Jd: "google_tld",
        Kd: "groups",
        lg: "gsa_experiment_id",
        mg: "iframe_state",
        Ld: "ignore_referrer",
        Ee: "internal_traffic_results",
        Md: "is_legacy_loaded",
        ng: "is_passthrough",
        Ja: "language",
        Fe: "legacy_developer_id_string",
        ra: "linker",
        Qb: "accept_incoming",
        Rb: "decorate_forms",
        T: "domains",
        Jc: "url_position",
        og: "method",
        Sb: "new_customer",
        pg: "non_interaction",
        mi: "optimize_id",
        Ka: "page_location",
        Ge: "page_path",
        La: "page_referrer",
        Tb: "page_title",
        qg: "passengers",
        rg: "phone_conversion_callback",
        ni: "phone_conversion_country_code",
        sg: "phone_conversion_css_class",
        oi: "phone_conversion_ids",
        ug: "phone_conversion_number",
        vg: "phone_conversion_options",
        wg: "quantity",
        Kc: "redact_device_info",
        He: "redact_enhanced_user_id",
        ri: "redact_ga_client_id",
        si: "redact_user_id",
        Nd: "referral_exclusion_definition",
        nb: "restricted_data_processing",
        ui: "retoken",
        xg: "screen_name",
        wb: "screen_resolution",
        vi: "search_term",
        xa: "send_page_view",
        xb: "send_to",
        Lc: "session_duration",
        Od: "session_engaged",
        Ie: "session_engaged_time",
        ob: "session_id",
        Pd: "session_number",
        Ub: "delivery_postal_code",
        yg: "tc_privacy_string",
        zg: "temporary_client_id",
        wi: "tracking_id",
        Je: "traffic_type",
        Ea: "transaction_id",
        na: "transport_url",
        Ag: "trip_type",
        Mc: "update",
        cb: "url_passthrough",
        Ke: "_user_agent_architecture",
        Le: "_user_agent_bitness",
        Me: "_user_agent_full_version_list",
        Bg: "_user_agent_mobile",
        Ne: "_user_agent_model",
        Oe: "_user_agent_platform",
        Pe: "_user_agent_platform_version",
        Cg: "_user_agent_wait",
        Qe: "_user_agent_wow64",
        ca: "user_data",
        Dg: "user_data_auto_latency",
        Eg: "user_data_auto_meta",
        Fg: "user_data_auto_multi",
        Gg: "user_data_auto_selectors",
        Hg: "user_data_auto_status",
        Ig: "user_data_mode",
        Re: "user_data_settings",
        sa: "user_id",
        Ma: "user_properties",
        Jg: "us_privacy_string",
        ka: "value",
        Qd: "wbraid",
        Kg: "wbraid_multiple_conversions",
        Ng: "_host_name",
        Og: "_in_page_command",
        Pg: "_is_linker_valid",
        Qg: "_is_passthrough_cid",
        Rg: "non_personalized_ads",
        zk: "sst_parameters",
      },
    },
    Ed = {},
    Fd = Object.freeze(
      ((Ed[P.g.X] = 1),
      (Ed[P.g.uc] = 1),
      (Ed[P.g.Lb] = 1),
      (Ed[P.g.Z] = 1),
      (Ed[P.g.Ya] = 1),
      (Ed[P.g.Ia] = 1),
      (Ed[P.g.Za] = 1),
      (Ed[P.g.Bc] = 1),
      (Ed[P.g.ze] = 1),
      (Ed[P.g.Pa] = 1),
      (Ed[P.g.ub] = 1),
      (Ed[P.g.Dc] = 1),
      (Ed[P.g.aa] = 1),
      (Ed[P.g.Ae] = 1),
      (Ed[P.g.Nb] = 1),
      (Ed[P.g.Ed] = 1),
      (Ed[P.g.Fd] = 1),
      (Ed[P.g.Gd] = 1),
      (Ed[P.g.Ic] = 1),
      (Ed[P.g.lb] = 1),
      (Ed[P.g.Jd] = 1),
      (Ed[P.g.Kd] = 1),
      (Ed[P.g.Ee] = 1),
      (Ed[P.g.Md] = 1),
      (Ed[P.g.ra] = 1),
      (Ed[P.g.He] = 1),
      (Ed[P.g.Nd] = 1),
      (Ed[P.g.nb] = 1),
      (Ed[P.g.xa] = 1),
      (Ed[P.g.xb] = 1),
      (Ed[P.g.Lc] = 1),
      (Ed[P.g.Ie] = 1),
      (Ed[P.g.Ub] = 1),
      (Ed[P.g.na] = 1),
      (Ed[P.g.Mc] = 1),
      (Ed[P.g.Re] = 1),
      (Ed[P.g.Ma] = 1),
      Ed)
    );
  Object.freeze([
    P.g.Ka,
    P.g.La,
    P.g.Tb,
    P.g.Ja,
    P.g.xg,
    P.g.sa,
    P.g.Ce,
    P.g.di,
  ]);
  var Gd = {},
    Hd = Object.freeze(
      ((Gd[P.g.Sh] = 1),
      (Gd[P.g.Th] = 1),
      (Gd[P.g.Uh] = 1),
      (Gd[P.g.Vh] = 1),
      (Gd[P.g.Wh] = 1),
      (Gd[P.g.Xh] = 1),
      (Gd[P.g.Yh] = 1),
      (Gd[P.g.Zh] = 1),
      (Gd[P.g.ai] = 1),
      (Gd[P.g.we] = 1),
      Gd)
    ),
    Id = {},
    Jd = Object.freeze(
      ((Id[P.g.Qf] = 1),
      (Id[P.g.Rf] = 1),
      (Id[P.g.mc] = 1),
      (Id[P.g.nc] = 1),
      (Id[P.g.Sf] = 1),
      (Id[P.g.Ib] = 1),
      (Id[P.g.oc] = 1),
      (Id[P.g.sb] = 1),
      (Id[P.g.Jb] = 1),
      (Id[P.g.tb] = 1),
      (Id[P.g.Ba] = 1),
      (Id[P.g.qc] = 1),
      (Id[P.g.Ha] = 1),
      (Id[P.g.Tf] = 1),
      Id)
    ),
    Kd = Object.freeze([P.g.X, P.g.Lb, P.g.ub]),
    Md = Object.freeze([].concat(Kd)),
    Nd = Object.freeze([P.g.Ia, P.g.Fd, P.g.Lc, P.g.Ie, P.g.Dd]),
    Od = Object.freeze([].concat(Nd)),
    Pd = {},
    Qd = ((Pd[P.g.F] = "1"), (Pd[P.g.R] = "2"), Pd),
    Rd = {},
    Sd = Object.freeze(
      ((Rd[P.g.X] = 1),
      (Rd[P.g.uc] = 1),
      (Rd[P.g.wa] = 1),
      (Rd[P.g.Wa] = 1),
      (Rd[P.g.wd] = 1),
      (Rd[P.g.vc] = 1),
      (Rd[P.g.wc] = 1),
      (Rd[P.g.xc] = 1),
      (Rd[P.g.Z] = 1),
      (Rd[P.g.yc] = 1),
      (Rd[P.g.Da] = 1),
      (Rd[P.g.qa] = 1),
      (Rd[P.g.Ya] = 1),
      (Rd[P.g.Ia] = 1),
      (Rd[P.g.Za] = 1),
      (Rd[P.g.Pa] = 1),
      (Rd[P.g.ma] = 1),
      (Rd[P.g.Cc] = 1),
      (Rd[P.g.aa] = 1),
      (Rd[P.g.Vf] = 1),
      (Rd[P.g.Gc] = 1),
      (Rd[P.g.Hc] = 1),
      (Rd[P.g.Ce] = 1),
      (Rd[P.g.Gd] = 1),
      (Rd[P.g.Md] = 1),
      (Rd[P.g.Ja] = 1),
      (Rd[P.g.Sb] = 1),
      (Rd[P.g.Ka] = 1),
      (Rd[P.g.La] = 1),
      (Rd[P.g.rg] = 1),
      (Rd[P.g.sg] = 1),
      (Rd[P.g.ug] = 1),
      (Rd[P.g.vg] = 1),
      (Rd[P.g.nb] = 1),
      (Rd[P.g.xa] = 1),
      (Rd[P.g.xb] = 1),
      (Rd[P.g.Ub] = 1),
      (Rd[P.g.Ea] = 1),
      (Rd[P.g.na] = 1),
      (Rd[P.g.Mc] = 1),
      (Rd[P.g.cb] = 1),
      (Rd[P.g.ca] = 1),
      (Rd[P.g.sa] = 1),
      (Rd[P.g.ka] = 1),
      Rd)
    );
  Object.freeze(P.g);
  var Td = {},
    Ud = (E.google_tag_manager = E.google_tag_manager || {}),
    Vd = Math.random();
  Td.Pc = "bs0";
  Td.Xe = Number("0") || 0;
  Td.fa = "dataLayer";
  Td.Qh =
    "ChAIgJucnAYQ6MqEhsvUtt85EiQAChcRk4FXZFXjKei3qYT/1/XZl35p9yxcD7xh2ZCCQyznUAkaAtn9";
  var Wd = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Xd = { __paused: !0, __tg: !0 },
    Yd;
  for (Yd in Wd) Wd.hasOwnProperty(Yd) && (Xd[Yd] = !0);
  var Zd = Aa(""),
    $d = Aa(""),
    ae,
    be = !1;
  ae = be;
  var ce,
    de = !1;
  ce = de;
  var ee,
    fe = !1;
  ee = fe;
  var ge,
    he = !1;
  ge = he;
  Td.ud = "www.googletagmanager.com";
  var ie = "" + Td.ud + (ae ? "/gtag/js" : "/gtm.js"),
    je = null,
    ke = null,
    le = {},
    me = {},
    ne = {},
    oe = function () {
      var a = Ud.sequence || 1;
      Ud.sequence = a + 1;
      return a;
    };
  Td.Ph = "";
  var pe = "";
  Td.Vd = pe;
  var qe = new ta(),
    re = {},
    se = {},
    ve = {
      name: Td.fa,
      set: function (a, b) {
        J(Ja(a, b), re);
        te();
      },
      get: function (a) {
        return ue(a, 2);
      },
      reset: function () {
        qe = new ta();
        re = {};
        te();
      },
    },
    ue = function (a, b) {
      return 2 != b ? qe.get(a) : we(a);
    },
    we = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = re, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    xe = function (a, b) {
      se.hasOwnProperty(a) || (qe.set(a, b), J(Ja(a, b), re), te());
    },
    te = function (a) {
      k(se, function (b, c) {
        qe.set(b, c);
        J(Ja(b), re);
        J(Ja(b, c), re);
        a && delete se[b];
      });
    },
    ye = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? we(a) : qe.get(a);
      "array" === Ib(d) || "object" === Ib(d) ? (c = J(d)) : (c = d);
      return c;
    };
  var ze,
    Ae = !1,
    Be = function (a) {
      if (!Ae) {
        Ae = !0;
        ze = ze || {};
      }
      return ze[a];
    };
  var Ce = function () {
      var a = E.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    De = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle)
        return !0;
      var c = E.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(")", l))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null));
      }
      return !1;
    };
  var Ee = function () {
      var a = F.body,
        b = F.documentElement || (a && a.parentElement),
        c,
        d;
      if (F.compatMode && "BackCompat" !== F.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    Fe = function (a) {
      var b = Ee(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var Ge = [],
    He = !(!E.IntersectionObserver || !E.IntersectionObserverEntry),
    Ie = function (a, b, c) {
      for (
        var d = new E.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < Ge.length; f++) if (!Ge[f]) return (Ge[f] = d), f;
      return Ge.push(d) - 1;
    },
    Le = function (a, b, c) {
      function d(l, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: l.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: 0 < m,
            rootBounds: n,
            target: l,
            time: z(),
          };
        G(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (l, m) {
        return l - m;
      });
      return function () {
        for (var l = 0; l < b.length; l++) {
          var m = Fe(b[l]);
          if (m > e[l])
            for (; f[l] < c.length - 1 && m >= c[f[l] + 1]; )
              d(b[l], m), f[l]++;
          else if (m < e[l])
            for (; 0 <= f[l] && m <= c[f[l]]; ) d(b[l], m), f[l]--;
          e[l] = m;
        }
      };
    },
    Me = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (He) {
        var e = !1;
        G(function () {
          e || Le(a, b, c)();
        });
        return Ie(
          function (f) {
            e = !0;
            for (var g = { hc: 0 }; g.hc < f.length; g = { hc: g.hc }, g.hc++)
              G(
                (function (l) {
                  return function () {
                    return a(f[l.hc]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return E.setInterval(Le(a, b, c), 1e3);
    },
    Ne = function (a) {
      He
        ? 0 <= a &&
          a < Ge.length &&
          Ge[a] &&
          (Ge[a].disconnect(), (Ge[a] = void 0))
        : E.clearInterval(a);
    };
  var Oe = /:[0-9]+$/,
    Pe = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Se = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Qe(a.protocol) || Qe(E.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : E.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || E.location.hostname)
            .replace(Oe, "")
            .toLowerCase());
      return Re(a, b, c, d, e);
    },
    Re = function (a, b, c, d, e) {
      var f,
        g = Qe(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Te(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Oe, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Wa("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Pe(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Qe = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Te = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ue = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Wa("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Oe, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Ve = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ue(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var We = {};
  var yf = {},
    zf = function (a, b) {
      if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a))
        return E._gtmexpgrp[a];
      void 0 === yf[a] && (yf[a] = Math.floor(Math.random() * b));
      return yf[a];
    };
  var Bf = { fh: "KE", Wj: "KE-30" };
  var Cf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Df = function (a) {
    Df[" "](a);
    return a;
  };
  Df[" "] = function () {};
  var Ff = function () {
    var a = Ef,
      b = "kf";
    if (a.kf && a.hasOwnProperty(b)) return a.kf;
    var c = new a();
    return (a.kf = c);
  };
  var Ef = function () {
    var a = {};
    this.h = function () {
      var b = Cf.h,
        c = Cf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[Cf.h] = !0;
    };
  };
  var Gf = [];
  function Hf() {
    var a = pb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: If,
        update: Jf,
        addListener: Kf,
        notifyListeners: Lf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function If(a, b, c, d, e, f) {
    var g = Hf();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = t;
        q &&
          E.setTimeout(function () {
            l[a] === t &&
              t.quiet &&
              ((t.quiet = !1), Mf(a), Lf(), Wa("TAGGING", 2));
          }, f);
      }
    }
  }
  function Jf(a, b) {
    var c = Hf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Nf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Nf(c, a);
      f.quiet ? ((f.quiet = !1), Mf(a)) : g !== d && Mf(a);
    }
  }
  function Kf(a, b) {
    Gf.push({ bf: a, ij: b });
  }
  function Mf(a) {
    for (var b = 0; b < Gf.length; ++b) {
      var c = Gf[b];
      qa(c.bf) && -1 !== c.bf.indexOf(a) && (c.vh = !0);
    }
  }
  function Lf(a, b) {
    for (var c = 0; c < Gf.length; ++c) {
      var d = Gf[c];
      if (d.vh) {
        d.vh = !1;
        try {
          d.ij({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Nf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Of = function (a) {
      var b = Hf();
      b.accessedAny = !0;
      return Nf(b, a);
    },
    Pf = function (a) {
      var b = Hf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Qf = function (a) {
      var b = Hf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Rf = function () {
      if (!Ff().h()) return !1;
      var a = Hf();
      a.accessedAny = !0;
      return a.active;
    },
    Sf = function () {
      var a = Hf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Tf = function (a, b) {
      Hf().addListener(a, b);
    },
    Uf = function (a, b) {
      Hf().notifyListeners(a, b);
    },
    Vf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Qf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Tf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Wf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Of(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Tf(d, function (f) {
          var g = c();
          0 < g.length && ((f.bf = g), a(f));
        });
    };
  function Xf() {}
  function Yf() {}
  function Zf(a) {
    for (var b = [], c = 0; c < $f.length; c++) {
      var d = a($f[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var $f = [P.g.F, P.g.R],
    ag = function (a) {
      var b = a[P.g.If];
      b && O(40);
      var c = a[P.g.Kf];
      c && O(41);
      for (
        var d = qa(b) ? b : [b], e = { ic: 0 };
        e.ic < d.length;
        e = { ic: e.ic }, ++e.ic
      )
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== P.g.If && g !== P.g.Kf) {
                var m = d[f.ic],
                  n = Bf.fh,
                  p = Bf.Wj;
                Hf().set(g, l, m, n, p, c);
              }
            };
          })(e)
        );
    },
    bg = function (a, b) {
      k(a, function (c, d) {
        Hf().update(c, d);
      });
      Uf(b.eventId, b.priorityId);
    },
    cg = function (a) {
      var b = Of(a);
      return void 0 != b ? b : !0;
    },
    dg = function () {
      return "G1" + Zf(Of);
    },
    eg = function (a, b) {
      Wf(a, b);
    },
    fg = function (a, b) {
      Vf(a, b);
    };
  var gg = [];
  gg[7] = !0;
  gg[9] = !0;
  gg[27] = !0;
  gg[6] = !0;
  gg[12] = !0;
  gg[11] = !0;
  gg[13] = !0;
  gg[15] = !0;
  gg[23] = !0;
  gg[29] = !0;
  gg[35] = !0;
  gg[36] = !0;
  gg[38] = !0;
  gg[43] = !0;
  gg[44] = !0;
  a: {
    for (var hg, ig, jg = 0; hg === ig; )
      if (
        ((hg = Math.floor(2 * Math.random())),
        (ig = Math.floor(2 * Math.random())),
        jg++,
        20 < jg)
      )
        break a;
    hg ? (gg[46] = !0) : (gg[47] = !0);
  }
  gg[54] = !0;
  gg[57] = !0;
  gg[60] = !0;
  var R = function (a) {
    return !!gg[a];
  };
  var kg = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var lg = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var mg = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ng = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function og(a) {
    return "null" !== a.origin;
  }
  var rg = function (a, b, c, d) {
      return pg(d) ? lg(a, String(b || qg()), c) : [];
    },
    Bg = function (a, b, c, d, e) {
      if (pg(e)) {
        var f = sg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = tg(
            f,
            function (g) {
              return g.be;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = tg(
            f,
            function (g) {
              return g.fd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Cg(a, b, c, d) {
    var e = qg(),
      f = window;
    og(f) && (f.document.cookie = a);
    var g = qg();
    return e != g || (void 0 != c && 0 <= rg(b, g, !1, d).indexOf(c));
  }
  var Gg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v;
      }
      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r;
      }
      if (!pg(c.rb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Dg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.Dk);
      f = d(f, "samesite", c.Ek);
      c.Fk && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Eg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!Fg(q, c.path) && Cg(t, a, b, c.rb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Fg(m, c.path) ? 1 : Cg(f, a, b, c.rb) ? 0 : 1;
    },
    Hg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Gg(a, b, c);
    };
  function tg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function sg(a, b, c) {
    for (var d = [], e = rg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), be: 1 * m[0] || 1, fd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Dg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Ig = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Jg = /(^|\.)doubleclick\.net$/i,
    Fg = function (a, b) {
      return (
        Jg.test(window.document.location.hostname) || ("/" === b && Ig.test(a))
      );
    },
    qg = function () {
      return og(window) ? window.document.cookie : "";
    },
    Eg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Jg.test(e) || Ig.test(e) || a.push("none");
      return a;
    },
    pg = function (a) {
      if (!Ff().h() || !a || !Rf()) return !0;
      if (!Qf(a)) return !1;
      var b = Of(a);
      return null == b ? !0 : !!b;
    };
  var Kg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (kg(a) & 2147483647)) : String(b);
    },
    Lg = function (a) {
      return [Kg(a), Math.round(z() / 1e3)].join(".");
    },
    Og = function (a, b, c, d, e) {
      var f = Mg(b);
      return Bg(a, f, Ng(c), d, e);
    },
    Pg = function (a, b, c, d) {
      var e = "" + Mg(c),
        f = Ng(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Mg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Ng = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Qg = function () {
    Ud.dedupe_gclid || (Ud.dedupe_gclid = "" + Lg());
    return Ud.dedupe_gclid;
  };
  var Rg = function () {
    var a = !1;
    return a;
  };
  var Sg = { M: "GTM-MTTQ6WZ", Hb: "57624438" },
    Tg = { sh: "GTM-MTTQ6WZ", th: "GTM-MTTQ6WZ" };
  Sg.Ve = Aa("");
  var Ug = function () {
      return Tg.sh ? Tg.sh.split("|") : [Sg.M];
    },
    Vg = function () {
      return Tg.th ? Tg.th.split("|") : [];
    },
    Wg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Yg = function () {
      for (var a = Xg(), b = Ug(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || pa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = Vg(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Sg.Hb] = 2;
    },
    Zg = function (a) {
      return !!Xg().container[a];
    },
    $g = function () {
      var a = Xg().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (pa(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    ah = function () {
      var a = {};
      k(Xg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function Xg() {
    var a = Ud.tidr;
    a || ((a = new Wg()), (Ud.tidr = a));
    return a;
  }
  var bh = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: "g",
      OPT: "o",
    },
    ch = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    dh = function (a) {
      var b = Sg.M.split("-"),
        c = b[0].toUpperCase();
      if (R(45)) {
        var d = {};
        d.aj = Sg.M;
        d.bk = Td.Xe;
        d.fk = Td.Pc;
        d.Hj = Sg.Ve ? 2 : 1;
        ae ? ((d.pe = ch[c]), d.pe || (d.pe = 0)) : (d.pe = ge ? 13 : 10);
        ee ? (d.tf = 1) : Rg() ? (d.tf = 2) : (d.tf = 3);
        var e;
        var f = d.pe,
          g = d.tf;
        void 0 === f
          ? (e = "")
          : (g || (g = 0),
            (e =
              "" +
              Zc(1, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (f << 2) | g
              ]));
        var l = d.Ak,
          m =
            4 +
            e +
            (l
              ? "" +
                Zc(2, 1) +
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                  l
                ]
              : ""),
          n,
          p = d.fk;
        n = p && Yc.test(p) ? "" + Zc(3, 2) + p : "";
        var q,
          t = d.bk;
        q = t
          ? "" +
            Zc(4, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              t
            ]
          : "";
        var u;
        var r = d.aj;
        if (r && a) {
          var v = r.split("-"),
            w = v[0].toUpperCase();
          if ("GTM" !== w && "OPT" !== w) u = "";
          else {
            var y = v[1];
            u =
              "" +
              Zc(5, 3) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                1 + y.length
              ] +
              (d.Hj || 0) +
              y;
          }
        } else u = "";
        return m + n + q + u;
      }
      var x = bh[c] || "i",
        A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        B = "w";
      ae && (B = Rg() ? "s" : "o");
      ce
        ? ("w" === B && (B = "x"), "o" === B && (B = "q"))
        : ee
        ? ("w" === B && (B = "y"), "o" === B && (B = "r"))
        : ge && (B = "z");
      return "2" + B + x + (4 === Td.Pc.length ? Td.Pc.slice(1) : Td.Pc) + A;
    };
  function eh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var fh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function gh() {
    return fb("iPhone") && !fb("iPod") && !fb("iPad");
  }
  function hh() {
    gh() || fb("iPad") || fb("iPod");
  }
  fb("Opera");
  fb("Trident") || fb("MSIE");
  fb("Edge");
  !fb("Gecko") ||
    (-1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge")) ||
    fb("Trident") ||
    fb("MSIE") ||
    fb("Edge");
  -1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") && fb("Mobile");
  fb("Macintosh");
  fb("Windows");
  fb("Linux") || fb("CrOS");
  var ih = la.navigator || null;
  ih && (ih.appVersion || "").indexOf("X11");
  fb("Android");
  gh();
  fb("iPad");
  fb("iPod");
  hh();
  eb().toLowerCase().indexOf("kaios");
  var jh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    kh = /#|$/,
    lh = function (a, b) {
      var c = a.search(kh),
        d = jh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    mh = /[?&]($|#)/,
    nh = function (a, b, c) {
      for (
        var d, e = a.search(kh), f = 0, g, l = [];
        0 <= (g = jh(a, f, b, e));

      )
        l.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(mh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var u = d.indexOf("?"),
          r;
        0 > u || u > t ? ((u = t), (r = "")) : (r = d.substring(u + 1, t));
        q = [d.slice(0, u), r, d.slice(t)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var oh = function (a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  function ph(a) {
    if (!a || !F.head) return null;
    var b = qh("META");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var rh = function () {
      if (E.top == E) return 0;
      var a = E.location.ancestorOrigins;
      if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
      var b;
      var c = E.top;
      try {
        var d;
        if ((d = !!c && null != c.location.href))
          b: {
            try {
              Df(c.foo);
              d = !0;
              break b;
            } catch (e) {}
            d = !1;
          }
        b = d;
      } catch (e) {
        b = !1;
      }
      return b ? 1 : 2;
    },
    qh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function sh(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = qh("IMG", a.document);
    if (c) {
      var e = function () {
        if (c) {
          var f = a.google_image_requests,
            g = Za(f, d);
          0 <= g && Array.prototype.splice.call(f, g, 1);
        }
        d.removeEventListener && d.removeEventListener("load", e, !1);
        d.removeEventListener && d.removeEventListener("error", e, !1);
      };
      fh(d, "load", e);
      fh(d, "error", e);
    }
    d.src = b;
    a.google_image_requests.push(d);
  }
  var uh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      oh(a, function (d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d));
      });
      th(c, b);
    },
    th = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      c.fetch
        ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : sh(c, a, void 0 === b ? !1 : b);
    };
  var vh = function () {};
  var wh = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    xh = function (a, b, c) {
      this.m = a;
      this.h = null;
      this.K = {};
      this.Ga = 0;
      this.P = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null;
    };
  ka(xh, vh);
  xh.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = ng(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.P &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.P));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = wh(c)),
          (c.internalBlockOnErrors = b.D),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      yh(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  xh.prototype.removeEventListener = function (a) {
    a && a.listenerId && yh(this, "removeEventListener", null, a.listenerId);
  };
  var Ah = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = zh(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && zh(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? zh(a.purpose.legitimateInterests, b) &&
                zh(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    zh = function (a, b) {
      return !(!a || !a[b]);
    },
    yh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (Bh(a)) {
        Ch(a);
        var f = ++a.Ga;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Bh = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Ch = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        fh(a.m, "message", a.B));
    },
    Dh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = wh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (uh({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Eh = !0;
  Eh = !1;
  var Fh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Gh = eh("", 550),
    Hh = eh("", 500);
  function Ih() {
    var a = Ud.tcf || {};
    return (Ud.tcf = a);
  }
  var Nh = function () {
    var a = Ih(),
      b = new xh(E, Eh ? 3e3 : -1);
    if (
      !0 === E.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof E.__tcfapi ||
        "function" === typeof b.m.__tcfapi ||
        null != Bh(b))
    ) {
      a.active = !0;
      a.hd = {};
      Jh();
      var c = null;
      Eh
        ? (c = E.setTimeout(function () {
            Kh(a);
            Lh(a);
            c = null;
          }, Hh))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Kh(a), Lh(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Mh()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Fh)
                if (Fh.hasOwnProperty(g))
                  if ("1" === g) {
                    var l,
                      m = d,
                      n = !0;
                    n = void 0 === n ? !1 : n;
                    l = Dh(m)
                      ? !1 === m.gdprApplies ||
                        "tcunavailable" === m.tcString ||
                        (void 0 === m.gdprApplies && !n) ||
                        "string" !== typeof m.tcString ||
                        !m.tcString.length
                        ? !0
                        : Ah(m, "1", 0)
                      : !1;
                    f["1"] = l;
                  } else f[g] = Ah(d, g, Fh[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.hd = e), Lh(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Kh(a), Lh(a);
      }
    }
  };
  function Kh(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Eh && (a.hd = Mh());
  }
  function Jh() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Gh), a);
    ag(b);
  }
  function Mh() {
    var a = {},
      b;
    for (b in Fh) Fh.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Lh(a) {
    var b = {},
      c = ((b.ad_storage = a.hd["1"] ? "granted" : "denied"), b);
    bg(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Oh() }
    );
  }
  var Oh = function () {
      var a = Ih();
      return a.active ? a.tcString || "" : "";
    },
    Ph = function () {
      var a = Ih();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Qh = function (a) {
      if (!Fh.hasOwnProperty(String(a))) return !0;
      var b = Ih();
      return b.active && b.hd ? !!b.hd[String(a)] : !0;
    };
  var Rh = ["L", "S", "Y"],
    Sh = ["S", "E"],
    Th = { sampleRate: "0.005000", Kh: "", Jh: Number("5"), Ih: Number("") },
    Uh =
      0 <= F.location.search.indexOf("?gtm_latency=") ||
      0 <= F.location.search.indexOf("&gtm_latency="),
    Vh;
  if (!(Vh = Uh)) {
    var Wh = Math.random(),
      Xh = Th.sampleRate;
    Vh = Wh < Xh;
  }
  var Yh = Vh,
    Zh = "https://www.googletagmanager.com/a?id=" + Sg.M + "&cv=4",
    $h = {
      label: Sg.M + " Container",
      children: [{ label: "Initialization", children: [] }],
    };
  function ai() {
    return [Zh, "&v=3&t=t", "&pid=" + sa(), "&rv=" + Td.Pc].join("");
  }
  var bi = ai();
  function ci() {
    bi = ai();
  }
  var di = {},
    ei = "",
    fi = "",
    gi = "",
    hi = "",
    ii = [],
    ji = "",
    ki = {},
    li = !1,
    mi = {},
    ni = {},
    oi = {},
    pi = "",
    qi = void 0,
    ri = {},
    si = {},
    ti = void 0,
    ui = 5;
  0 < Th.Jh && (ui = Th.Jh);
  var vi = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        zj: function () {
          return c < a ? !1 : z() - d[c % a] < b;
        },
        Xj: function () {
          var f = c++ % a;
          d[f] = z();
        },
      };
    })(ui, 1e3),
    wi = 1e3,
    xi = "";
  function yi(a, b) {
    var c = qi;
    if (void 0 === c) return "";
    var d = Ya("GTM"),
      e = Ya("TAGGING"),
      f = Ya("HEALTH"),
      g = bi,
      l = di[c] ? "" : "&es=1",
      m = ri[c],
      n = zi(c),
      p = Ai(),
      q = ei,
      t = fi,
      u = pi,
      r = Bi(a),
      v = gi,
      w = hi,
      y = Ci(a, b),
      x;
    return [
      g,
      l,
      m,
      n,
      d ? "&u=" + d : "",
      e ? "&ut=" + e : "",
      f ? "&h=" + f : "",
      p,
      q,
      t,
      u,
      r,
      v,
      w,
      y,
      x,
      ji ? "&dl=" + encodeURIComponent(ji) : "",
      0 < ii.length ? "&tdp=" + ii.join(".") : "",
      Td.Xe ? "&x=" + Td.Xe : "",
      "&z=0",
    ].join("");
  }
  function Ei(a) {
    ti && (E.clearTimeout(ti), (ti = void 0));
    if (void 0 !== qi && (!di[qi] || ei || fi || Fi(a)))
      if (void 0 === Gi[qi] && (si[qi] || vi.zj() || 0 >= wi--))
        O(1), (si[qi] = !0);
      else {
        void 0 === Gi[qi] && vi.Xj();
        var b = yi(!0, a);
        a ? Eb(b) : xb(b);
        if (hi || (ji && 0 < ii.length)) {
          var c = b.replace("/a?", "/td?");
          xb(c);
        }
        di[qi] = !0;
        ji = hi = gi = pi = fi = ei = "";
        ii = [];
      }
  }
  function Hi() {
    ti || (ti = E.setTimeout(Ei, 500));
  }
  function Ii(a) {
    var b = String(a[Mb.Ra] || "").replace(/_/g, "");
    0 === b.indexOf("cvt") && (b = "cvt");
    return b;
  }
  function Ji(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
  }
  function Ki() {
    2022 <= yi().length && Ei();
  }
  function Ai() {
    return (
      "&tc=" +
      mc.filter(function (a) {
        return a;
      }).length
    );
  }
  var Mi = function (a, b) {
      if (Yh && !si[a] && qi !== a) {
        Ei();
        qi = a;
        gi = ei = "";
        ri[a] = "&e=" + Ji(b) + "&eid=" + a;
        Hi();
      }
    },
    Ni = function (a, b, c, d) {
      if (Yh && b) {
        var e = Ii(b),
          f = c + e;
        if (!si[a]) {
          a !== qi && (Ei(), (qi = a));
          ei = ei ? ei + "." + f : "&tr=" + f;
          var g = b["function"];
          if (!g)
            throw Error("Error: No function name given for function call.");
          var l = (oc[g] ? "1" : "2") + e;
          gi = gi ? gi + "." + l : "&ti=" + l;
          Hi();
          Ki();
        }
      }
    },
    Oi = function (a, b, c) {
      if (Yh && a && a[Mb.Qc]) {
        var d = b + "." + a[Mb.Qc];
        oi[d] = c;
        "html" == Ii(a) && xi == d && (ei += ":" + Math.floor(c));
      }
    };
  function Bi(a) {}
  function zi(a) {}
  var Vi = function (a, b, c) {
      if (Yh && void 0 !== a && !si[a]) {
        a !== qi && (Ei(), (qi = a));
        var d = c + b;
        fi = fi ? fi + "." + d : "&epr=" + d;
        Hi();
        Ki();
      }
    },
    Wi = function (a, b, c) {},
    Xi = ["S", "P", "C", "Z"],
    Yi = {},
    Zi = ((Yi[1] = 5), (Yi[2] = 5), (Yi[3] = 5), Yi),
    $i = {},
    Gi = {},
    Di = void 0,
    aj = function (a, b) {
      var c = !1;
      if (!Yh || Gi[a] || 0 === Zi[b]) return !1;
      --Zi[b];
      Gi[a] = b;
      c = !0;
      return c;
    },
    bj = function (a, b, c) {
      if (!Yh || !Gi[a]) return;
      var d = $i[a];
      d || ($i[a] = d = {});
      d[b] = c;
    };
  function Ci(a, b) {
    var c;
    if (!qi || !Fi(b)) return "";
    var d = $i[qi];
    c =
      "&al=" +
      Xi.filter(function (e) {
        return void 0 !== d[e];
      })
        .map(function (e) {
          return e + Math.floor(d[e]);
        })
        .join(".") +
      (".Z" + Gi[qi]);
    a && delete $i[qi];
    return c;
  }
  function Fi(a) {
    var b = !1;
    if (!qi || !$i[qi]) return !1;
    b = a || "C" in $i[qi];
    return b;
  }
  var cj = function () {
    if (Yh) {
      E.setInterval(ci, 864e5);
      yb(E, "pagehide", function () {
        qi && Gi[qi] && Ei(!0);
        for (var a in $i) $i.hasOwnProperty(a) && ((qi = Number(a)), Ei(!0));
      });
    }
  };
  gb();
  gh() || fb("iPod");
  fb("iPad");
  !fb("Android") || hb() || gb() || fb("Opera") || fb("Silk");
  hb();
  !fb("Safari") ||
    hb() ||
    fb("Coast") ||
    fb("Opera") ||
    fb("Edge") ||
    fb("Edg/") ||
    fb("OPR") ||
    gb() ||
    fb("Silk") ||
    fb("Android") ||
    hh();
  var dj = {},
    ej = null,
    fj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ej) {
        ej = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(""));
          dj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ej[q] && (ej[q] = p);
          }
        }
      }
      for (
        var t = dj[f],
          u = Array(Math.floor(b.length / 3)),
          r = t[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = t[y >> 2],
          C = t[((y & 3) << 4) | (x >> 4)],
          H = t[((x & 15) << 2) | (A >> 6)],
          I = t[A & 63];
        u[w++] = "" + B + C + H + I;
      }
      var D = 0,
        K = r;
      switch (b.length - v) {
        case 2:
          (D = b[v + 1]), (K = t[(D & 15) << 2] || r);
        case 1:
          var M = b[v];
          u[w] = "" + t[M >> 2] + t[((M & 3) << 4) | (D >> 4)] + K + r;
      }
      return u.join("");
    };
  var gj =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function hj() {
    var a;
    return null != (a = E.google_tag_data) ? a : (E.google_tag_data = {});
  }
  function ij() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function jj() {
    var a, b;
    return null !=
      (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function kj() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = E.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function lj() {
    if (!kj()) return null;
    var a = hj();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData
      .getHighEntropyValues(gj)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  var mj,
    nj = function () {
      if (kj() && ((mj = z()), !jj())) {
        var a = lj();
        a &&
          (a.then(function () {
            O(95);
          }),
          a.catch(function () {
            O(96);
          }));
      }
    },
    pj = function (a) {
      var b = oj.rk,
        c = function (g, l) {
          try {
            a(g, l);
          } catch (m) {}
        },
        d = ij();
      if (d) c(d);
      else {
        var e = jj();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = E.setTimeout(function () {
            c.bd || ((c.bd = !0), O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.bd || ((c.bd = !0), O(104), E.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.bd || ((c.bd = !0), O(105), E.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    qj = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      a &&
        ((b.m[P.g.Ke] = a.architecture),
        (b.m[P.g.Le] = a.bitness),
        a.fullVersionList &&
          (b.m[P.g.Me] = a.fullVersionList
            .map(function (d) {
              return (
                encodeURIComponent(d.brand || "") +
                ";" +
                encodeURIComponent(d.version || "")
              );
            })
            .join("|")),
        c && (b.m[P.g.Bg] = a.mobile ? "1" : "0"),
        (b.m[P.g.Ne] = a.model),
        (b.m[P.g.Oe] = a.platform),
        (b.m[P.g.Pe] = a.platformVersion),
        (b.m[P.g.Qe] = a.wow64 ? "1" : "0"));
    };
  function rj(a, b, c, d) {
    var e,
      f = Number(null != a.Ta ? a.Ta : void 0);
    0 !== f && (e = new Date((b || z()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      rb: d,
    };
  }
  var sj = ["1"],
    Jj = {},
    Kj = {},
    Mj = function (a) {
      return Jj[Lj(a)];
    },
    Pj = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Lj(a.prefix);
      if (!Jj[c] && !Nj(c, a.path, a.domain) && b) {
        var d = Lj(a.prefix),
          e = Lg();
        if (0 === Oj(d, e, a)) {
          var f = pb("google_tag_data", {});
          f._gcl_au || (f._gcl_au = e);
        }
        Nj(c, a.path, a.domain);
      }
    };
  function Oj(a, b, c, d) {
    var e = Pg(b, "1", c.domain, c.path),
      f = rj(c, d);
    f.rb = "ad_storage";
    return Hg(a, e, f);
  }
  function Nj(a, b, c) {
    var d = Og(a, b, c, sj, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((Jj[a] = e.slice(0, 2).join(".")),
        (Kj[a] = { id: e.slice(2, 4).join("."), ph: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Kj[a] = { id: e.slice(0, 2).join("."), ph: Number(e[2]) || 0 })
      : (Jj[a] = d);
    return !0;
  }
  function Lj(a) {
    return (a || "_gcl") + "_au";
  }
  var Qj;
  var Uj = function () {
      var a = Rj,
        b = Sj,
        c = Tj(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        yb(F, "mousedown", d);
        yb(F, "keyup", d);
        yb(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Vj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Tj().decorators.push(f);
    },
    Wj = function (a, b, c) {
      for (var d = Tj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Ga(e, g.callback());
        }
      }
      return e;
    };
  function Tj() {
    var a = pb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Xj = /(.*?)\*(.*?)\*(.*)/,
    Yj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Zj = /^(?:www\.|m\.|amp\.)+/,
    ak = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function bk(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var dk = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Ta(String(d))));
      }
    var e = b.join("*");
    return ["1", ck(e), e].join("*");
  };
  function ck(a, b) {
    var c = [
        E.navigator.userAgent,
        new Date().getTimezoneOffset(),
        nb.userLanguage || nb.language,
        Math.floor(z() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Qj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Qj = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Qj[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function ek() {
    return function (a) {
      var b = Ue(E.location.href),
        c = b.search.replace("?", ""),
        d = Pe(c, "_gl", !0) || "";
      a.query = fk(d) || {};
      var e = Se(b, "fragment").match(bk("_gl"));
      a.fragment = fk((e && e[3]) || "") || {};
    };
  }
  function gk(a, b) {
    var c = bk(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var hk = function (a, b) {
      b || (b = "_gl");
      var c = ak.exec(a);
      if (!c) return "";
      var d = c[1],
        e = gk(b, (c[2] || "").slice(1)),
        f = gk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    ik = function (a) {
      var b = ek(),
        c = Tj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d;
    },
    fk = function (a) {
      try {
        var b = jk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Ua(d[e + 1]);
            c[f] = g;
          }
          Wa("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Wa("TAGGING", 8);
      }
    };
  function jk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Xj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === ck(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Wa("TAGGING", 7);
      }
    }
  }
  function kk(a, b, c, d) {
    function e(p) {
      p = gk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = ak.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function lk(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Wj(b, 1, c),
      e = Wj(b, 2, c),
      f = Wj(b, 3, c);
    if (Ha(d)) {
      var g = dk(d);
      c ? mk("_gl", g, a) : nk("_gl", g, a, !1);
    }
    if (!c && Ha(e)) {
      var l = dk(e);
      nk("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              nk(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              mk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && kk(n, p, q);
        }
  }
  function nk(a, b, c, d) {
    if (c.href) {
      var e = kk(a, b, c.href, void 0 === d ? !1 : d);
      db.test(e) && (c.href = e);
    }
  }
  function mk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = F.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = kk(a, b, c.action);
        db.test(n) && (c.action = n);
      }
    }
  }
  function Rj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || lk(e, e.hostname);
      }
    } catch (g) {}
  }
  function Sj(a) {
    try {
      if (a.action) {
        var b = Se(Ue(a.action), "host");
        lk(a, b);
      }
    } catch (c) {}
  }
  var ok = function (a, b, c, d) {
      Uj();
      Vj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    pk = function (a, b) {
      Uj();
      Vj(a, [Re(E.location, "host", !0)], b, !0, !0);
    },
    qk = function () {
      var a = F.location.hostname,
        b = Yj.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Zj, ""),
        m = e.replace(Zj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    rk = function (a, b) {
      return !1 === a ? !1 : a || b || qk();
    };
  var sk = {};
  var tk = function (a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ef: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function uk(a, b) {
    var c = tk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ef] || (d[c[e].Ef] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), da: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ef].push(g);
      }
    }
    return d;
  }
  var vk = /^\w+$/,
    wk = /^[\w-]+$/,
    xk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    yk = function () {
      if (!Ff().h() || !Rf()) return !0;
      var a = Of("ad_storage");
      return null == a ? !0 : !!a;
    },
    zk = function (a, b) {
      Qf("ad_storage")
        ? yk()
          ? a()
          : Wf(a, "ad_storage")
        : b
        ? Wa("TAGGING", 3)
        : Vf(
            function () {
              zk(a, !0);
            },
            ["ad_storage"]
          );
    },
    Bk = function (a) {
      return Ak(a).map(function (b) {
        return b.da;
      });
    },
    Ak = function (a) {
      var b = [];
      if (!og(E) || !F.cookie) return b;
      var c = rg(a, F.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { od: d.od }, e++) {
        var f = Ck(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.od = g.da;
          var m = g.timestamp,
            n = g.labels,
            p = ra(
              b,
              (function (q) {
                return function (t) {
                  return t.da === q.od;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Dk(p.labels, n || [])))
            : b.push({ version: l, da: d.od, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Ek(b);
    };
  function Dk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Fk(a) {
    return a && "string" == typeof a && a.match(vk) ? a : "_gcl";
  }
  var Hk = function () {
      var a = Ue(E.location.href),
        b = Se(a, "query", !1, void 0, "gclid"),
        c = Se(a, "query", !1, void 0, "gclsrc"),
        d = Se(a, "query", !1, void 0, "wbraid"),
        e = Se(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Pe(f, "gclid");
        c = c || Pe(f, "gclsrc");
        d = d || Pe(f, "wbraid");
      }
      return Gk(b, c, e, d);
    },
    Gk = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && wk.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(wk))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Jk = function (a) {
      var b = Hk();
      zk(function () {
        Ik(b, !1, a);
      });
    };
  function Ik(a, b, c, d, e) {
    function f(w, y) {
      var x = Kk(w, g);
      x && (Hg(x, y, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Fk(c.prefix);
    d = d || z();
    var l = rj(c, d, !0);
    l.rb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == sk.enable_gbraid_cookie_write
        ? 0
        : sk.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var q = a.gb[0],
        t = Kk("gb", g),
        u = !1;
      if (!b)
        for (var r = Ak(t), v = 0; v < r.length; v++)
          r[v].da === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Mk = function (a, b) {
      var c = ik(!0);
      zk(function () {
        for (var d = Fk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== xk[f]) {
            var g = Kk(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Lk(l), z()),
                n;
              b: {
                var p = m;
                if (og(E))
                  for (
                    var q = rg(g, F.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (Lk(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = rj(b, m, !0);
                u.rb = "ad_storage";
                Hg(g, l, u);
              }
            }
          }
        }
        Ik(Gk(c.gclid, c.gclsrc), !1, b);
      });
    },
    Kk = function (a, b) {
      var c = xk[a];
      if (void 0 !== c) return b + c;
    },
    Lk = function (a) {
      return 0 !== Nk(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Ck(a) {
    var b = Nk(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          da: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Nk(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !wk.test(a[2])
      ? []
      : a;
  }
  var Ok = function (a, b, c, d, e) {
      if (qa(b) && og(E)) {
        var f = Fk(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Kk(a[m], f);
              if (n) {
                var p = rg(n, F.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        zk(function () {
          ok(g, b, c, d);
        });
      }
    },
    Ek = function (a) {
      return a.filter(function (b) {
        return wk.test(b.da);
      });
    },
    Pk = function (a, b) {
      if (og(E)) {
        for (var c = Fk(b.prefix), d = {}, e = 0; e < a.length; e++)
          xk[a[e]] && (d[a[e]] = xk[a[e]]);
        zk(function () {
          k(d, function (f, g) {
            var l = rg(c + g, F.cookie, void 0, "ad_storage");
            l.sort(function (u, r) {
              return Lk(r) - Lk(u);
            });
            if (l.length) {
              var m = l[0],
                n = Lk(m),
                p = 0 !== Nk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Nk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Ik(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Qk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Rk = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Rf()) {
        var c = Hk();
        if (Qk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          pk(function () {
            return d;
          }, 3);
          pk(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Sk = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!yk()) return e;
      var f = Ak(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.da]
            .concat(l.labels || [], [b])
            .join("."),
          p = rj(c, m, !0);
        p.rb = "ad_storage";
        Hg(a, n, p);
      }
      return e;
    };
  function Tk(a, b) {
    var c = Fk(b),
      d = Kk(a, c);
    if (!d) return 0;
    for (var e = Ak(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Uk(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Vk = function (a) {
    var b = Math.max(Tk("aw", a), Uk(yk() ? uk() : {}));
    return Math.max(Tk("gb", a), Uk(yk() ? uk("_gac_gb", !0) : {})) > b;
  };
  var $k = /[A-Z]+/,
    al = /\s/,
    bl = function (a) {
      if (h(a)) {
        a = Ca(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if ($k.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (al.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, U: c + "-" + d[0], I: d };
          }
        }
      }
    },
    dl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = bl(a[c]);
        d && (b[d.id] = d);
      }
      cl(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function cl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.I[1] && b.push(d.U);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var fl = function (a, b, c, d) {
      return (2 === el() || d || "http:" != E.location.protocol ? a : b) + c;
    },
    el = function () {
      var a = vb(),
        b;
      if (1 === a)
        a: {
          var c = ie;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = F.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var rl = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = J(c.eventMetadata || {});
      this.H = !1;
    },
    sl = function (a, b, c) {
      var d = T(a.h, b);
      void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c);
    },
    tl = function (a, b, c) {
      var d = Be(a.target.U);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function ul(a) {
    return {
      getDestinationId: function () {
        return a.target.U;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        return void (a.m[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        sl(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.H = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return T(a.h, b);
      },
    };
  }
  var Nl = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.m = e;
      this.D = f;
      this.P = g;
      this.B = l;
      this.eventMetadata = m;
      this.O = n;
      this.N = p;
      this.C = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.m[b]) return a.m[b];
      Yh && Ol(a, a.D[b], a.P[b]) && (O(71), O(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Pl = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.m);
      b(a.D);
      if (Yh)
        for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            O(71);
            O(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Ql = function (a, b, c) {
      function d(m) {
        Kb(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Yh) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Ol(a, e, l)) O(71), O(81);
        f = g;
        e = l;
      }
      return f ? e : void 0;
    },
    Rl = function (a) {
      var b = [P.g.zc, P.g.xd, P.g.yd, P.g.zd, P.g.Ad, P.g.Bd, P.g.Cd],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.m)) return c;
      e(a.D);
      if (Yh) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.P);
        Ol(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Ol = function (a, b, c) {
      if (!Yh) return !1;
      try {
        if (b === c) return !1;
        var d = Ib(b);
        if (d !== Ib(c) || !((Kb(b) && Kb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Ol(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Ol(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        O(72);
      }
      return !1;
    },
    Sl = function (a, b) {
      this.zi = a;
      this.Ai = b;
      this.D = {};
      this.Lg = {};
      this.h = {};
      this.K = {};
      this.m = {};
      this.Nc = {};
      this.B = {};
      this.kc = function () {};
      this.Ga = function () {};
      this.P = !1;
    },
    Tl = function (a, b) {
      a.D = b;
      return a;
    },
    Ul = function (a, b) {
      a.Lg = b;
      return a;
    },
    Vl = function (a, b) {
      a.h = b;
      return a;
    },
    Wl = function (a, b) {
      a.K = b;
      return a;
    },
    Xl = function (a, b) {
      a.m = b;
      return a;
    },
    Yl = function (a, b) {
      a.Nc = b;
      return a;
    },
    Zl = function (a, b) {
      a.B = b || {};
      return a;
    },
    $l = function (a, b) {
      a.kc = b;
      return a;
    },
    am = function (a, b) {
      a.Ga = b;
      return a;
    },
    bm = function (a) {
      a.P = !0;
      return a;
    },
    cm = function (a) {
      return new Nl(
        a.zi,
        a.Ai,
        a.D,
        a.Lg,
        a.h,
        a.K,
        a.m,
        a.Nc,
        a.B,
        a.kc,
        a.Ga,
        a.P
      );
    };
  function gm() {
    return "attribution-reporting";
  }
  function hm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var im = !1;
  function jm() {
    if (hm("join-ad-interest-group") && oa(nb.joinAdInterestGroup)) return !0;
    im ||
      (ph(
        "A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (im = !0));
    return hm("join-ad-interest-group") && oa(nb.joinAdInterestGroup);
  }
  function km(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > z() - d) {
        Wa("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          F.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Wa("TAGGING", 10);
          return;
        }
      } catch (e) {}
    wb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: z() },
      c
    );
  }
  function lm() {
    return R(60)
      ? "https://td.doubleclick.net"
      : "https://googleads.g.doubleclick.net";
  }
  var mm = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    nm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    om = /^\d+\.fls\.doubleclick\.net$/,
    pm = /;gac=([^;?]+)/,
    qm = /;gacgb=([^;?]+)/,
    rm = /;gclaw=([^;?]+)/,
    sm = /;gclgb=([^;?]+)/;
  function tm(a, b) {
    if (om.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(mm)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var um = function (a, b, c) {
    var d = yk() ? uk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Sk("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + l.join(","));
    }
    return { lj: f ? e.join(";") : "", kj: tm(d, qm) };
  };
  function vm(a, b, c) {
    if (om.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(nm)) return [{ da: d[1] }];
    } else return Ak((a || "_gcl") + b);
    return [];
  }
  var wm = function (a) {
      return vm(a, "_aw", rm)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    xm = function (a) {
      return vm(a, "_gb", sm)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    ym = function (a, b) {
      var c = Sk(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var zm = function () {
    if (oa(E.__uspapi)) {
      var a = "";
      try {
        E.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var jn = function (a, b) {
    var c,
      d = E.GooglebQhCsO;
    d || ((d = {}), (E.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var kn = function (a, b) {
    var c = lh(a, "fmt");
    if (b) {
      var d = lh(a, "random"),
        e = lh(a, "label") || "";
      if (!d) return !1;
      var f = fj(
        decodeURIComponent(e.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(d.replace(/\+/g, " "))
      );
      if (!jn(f, b)) return !1;
    }
    c && 4 != c && (a = nh(a, "rfmt", c));
    var g = nh(a, "fmt", 4);
    ub(
      g,
      function () {
        E.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((E.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var An = function () {
      this.h = {};
    },
    Bn = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Cn = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    En = function (a, b, c, d, e) {};
  function Gn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ue("" + c + b).href;
    }
  }
  function Hn(a, b) {
    return ce || ee ? Gn(a, b) : void 0;
  }
  function In() {
    return !!Td.Vd && "SGTM_TOKEN" !== Td.Vd.split("@@").join("");
  }
  var Kn = function (a, b, c, d) {
      if (!Jn() && !Zg(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + Td.fa,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = In();
        l && (f += "&sign=" + Td.Vd);
        var m = Hn(b, e + f);
        if (!m) {
          var n = Td.ud + e;
          l &&
            ob &&
            g &&
            (n = ob.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = fl("https://", "http://", n + f);
        }
        Xg().container[a] = { state: 1, context: d };
        ub(m);
      }
    },
    Ln = function (a, b, c) {
      var d;
      if ((d = !Jn())) {
        var e = Xg().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if ($g())
          (Xg().destination[a] = { state: 0, transportUrl: b, context: c }),
            O(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Td.fa +
            "&cx=c";
          In() && (f += "&sign=" + Td.Vd);
          var g = Hn(b, f);
          g || (g = fl("https://", "http://", Td.ud + f));
          Xg().destination[a] = { state: 1, context: c };
          ub(g);
        }
    };
  function Jn() {
    if (Rg()) {
      return !0;
    }
    return !1;
  }
  var Mn = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Nn = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    On = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Pn =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Sn = function (a) {
      var b = ue("gtm.allowlist") || ue("gtm.whitelist");
      b && O(9);
      ae && (b = ["google", "gtagfl", "lcl", "zone"]);
      Qn &&
        Rn() &&
        ((b = []),
        window.console &&
          window.console.log &&
          window.console.log("GTM blocked. See go/13687728."));
      var c = b && Ia(Ba(b), Nn),
        d = ue("gtm.blocklist") || ue("gtm.blacklist");
      d || ((d = ue("tagTypeBlacklist")) && O(3));
      d ? O(8) : (d = []);
      Rn() &&
        ((d = Ba(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ba(d).indexOf("google") && O(2);
      var e = d && Ia(Ba(d), On),
        f = {};
      return function (g) {
        var l = g && g[Mb.Ra];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = me[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      O(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) t = u;
          else {
            var r = ua(e, m || []);
            r && O(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = ua(e, Pn));
        return (f[l] = v);
      };
    },
    Qn = !1;
  var Rn = function () {
    return Mn.test(E.location && E.location.hostname);
  };
  var Tn = { initialized: 11, complete: 12, interactive: 13 },
    Un = {},
    Vn = Object.freeze(((Un[P.g.xa] = !0), Un)),
    Wn =
      0 <= F.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= F.location.search.indexOf("&gtm_diagnostics="),
    Yn = function (a, b, c) {
      if (Yh && "config" === a && !(1 < bl(b).I.length)) {
        var d,
          e = pb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = J(c.D);
        J(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = Xn(d[l], f);
          m.length && (Wn && console.log(m), g.push(l));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            hi = hi ? hi + "!" + n : "&tdc=" + n;
          }
          Wa("TAGGING", Tn[F.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function Zn(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Xn(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var u = t[q];
        return void 0 === u ? Vn[q] : u;
      },
      f;
    for (f in Zn(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Ib(l) || "array" === Ib(l),
        p = "object" === Ib(m) || "array" === Ib(m);
      if (n && p) Xn(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var $n = !1,
    ao = 0,
    bo = [];
  function co(a) {
    if (!$n) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        $n = !0;
        for (var e = 0; e < bo.length; e++) G(bo[e]);
      }
      bo.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function eo() {
    if (!$n && 140 > ao) {
      ao++;
      try {
        F.documentElement.doScroll("left"), co();
      } catch (a) {
        E.setTimeout(eo, 50);
      }
    }
  }
  var fo = function (a) {
    $n ? a() : bo.push(a);
  };
  var go = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Sg.M,
    };
  };
  var io = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = { tags: [] };
      this.P = !1;
      this.m = this.B = 0;
      ho(this, a, b);
    },
    jo = function (a, b, c, d) {
      if (Xd.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Kb(d) && (e = J(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    ko = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    lo = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    ho = function (a, b, c) {
      void 0 !== b && mo(a, b);
      c &&
        E.setTimeout(function () {
          return lo(a);
        }, Number(c));
    },
    mo = function (a, b) {
      var c = Fa(function () {
        return G(function () {
          b(Sg.M, a.K);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    no = function (a) {
      a.B++;
      return Fa(function () {
        a.m++;
        a.P && a.m >= a.B && lo(a);
      });
    },
    oo = function (a) {
      a.P = !0;
      a.m >= a.B && lo(a);
    };
  var po = function () {
      function a(d) {
        return !pa(d) || 0 > d ? 0 : d;
      }
      if (!Ud._li && E.performance && E.performance.timing) {
        var b = E.performance.timing.navigationStart,
          c = pa(ve.get("gtm.start")) ? ve.get("gtm.start") : 0;
        Ud._li = { cst: a(c - b), cbt: a(ke - b) };
      }
    },
    qo = function (a) {
      E.performance && E.performance.mark(Sg.M + "_" + a + "_start");
    },
    ro = function (a) {
      if (E.performance) {
        var b = Sg.M + "_" + a + "_start",
          c = Sg.M + "_" + a + "_duration";
        E.performance.measure(c, b);
        var d = E.performance.getEntriesByName(c)[0];
        E.performance.clearMarks(b);
        E.performance.clearMeasures(c);
        var e = Ud._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Ud._p = e));
        return d.duration;
      }
    },
    so = function () {
      var a = Gb();
      if (void 0 !== a) {
        var b = Ud._p || {};
        b.PAGEVIEW = a;
        Ud._p = b;
      }
    };
  var to = {},
    uo = function () {
      return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject];
    },
    vo = !1;
  function yo() {
    return E.GoogleAnalyticsObject || "ga";
  }
  var zo = function (a) {},
    Ao = function (a, b) {
      return function () {
        var c = uo(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Fo(a, b, c, d) {
    var e = mc[a],
      f = Go(a, b, c, d);
    if (!f) return null;
    var g = vc(e[Mb.Wg], c, []);
    if (g && g.length) {
      var l = g[0];
      f = Fo(
        l.index,
        { O: f, N: 1 === l.jh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function Go(a, b, c, d) {
    function e() {
      if (f[Mb.Fi]) l();
      else {
        var w = wc(f, c, []),
          y = w[Mb.Oh];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!cg(y[x])) {
              l();
              return;
            }
        var A = jo(c.zb, String(f[Mb.Ra]), Number(f[Mb.Qc]), w[Mb.Gi]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            Ni(c.id, mc[a], "5", I);
            ko(c.zb, A, "success", I);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            Ni(c.id, mc[a], "6", I);
            ko(c.zb, A, "failure", I);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Ni(c.id, f, "1");
        var C = function () {
          var I = z() - H;
          Ni(c.id, f, "7", I);
          ko(c.zb, A, "exception", I);
          B || ((B = !0), l());
        };
        var H = z();
        try {
          uc(w, { event: c, index: a, type: 1 });
        } catch (I) {
          C(I);
        }
      }
    }
    var f = mc[a],
      g = b.O,
      l = b.N,
      m = b.terminate;
    if (c.nf(f)) return null;
    var n = vc(f[Mb.Xg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Fo(p.index, { O: g, N: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.jh ? m : q;
    }
    if (f[Mb.Sg] || f[Mb.Ii]) {
      var t = f[Mb.Sg] ? nc : c.lk,
        u = g,
        r = l;
      if (!t[a]) {
        e = Fa(e);
        var v = Ho(a, t, e);
        g = v.O;
        l = v.N;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }
  function Ho(a, b, c) {
    var d = [],
      e = [];
    b[a] = Io(d, e, c);
    return {
      O: function () {
        b[a] = Jo;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      N: function () {
        b[a] = Ko;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Io(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Jo(a) {
    a();
  }
  function Ko(a, b) {
    b();
  }
  var Mo = function (a, b) {
      return 1 === arguments.length ? Lo("config", a) : Lo("config", a, b);
    },
    No = function (a, b, c) {
      c = c || {};
      c[P.g.xb] = a;
      return Lo("event", b, c);
    };
  function Lo(a) {
    return arguments;
  }
  var Oo = function () {
    this.h = [];
    this.m = [];
  };
  Oo.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  Oo.prototype.listen = function (a) {
    this.m.push(a);
  };
  Oo.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Oo.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Qo = function (a, b, c) {
      Po().enqueue(a, b, c);
    },
    So = function () {
      var a = Ro;
      Po().listen(a);
    };
  function Po() {
    var a = Ud.mb;
    a || ((a = new Oo()), (Ud.mb = a));
    return a;
  }
  var $o = function (a) {
      var b = Ud.zones;
      return b
        ? b.getIsAllowedFn(Ug(), a)
        : function () {
            return !0;
          };
    },
    ap = function (a) {
      var b = Ud.zones;
      return b ? b.isActive(Ug(), a) : !0;
    };
  var dp = function (a, b) {
    for (var c = [], d = 0; d < mc.length; d++)
      if (a[d]) {
        var e = mc[d];
        var f = no(b.zb);
        try {
          var g = Fo(d, { O: f, N: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = oc[p];
            m.call(l, {
              Fh: n,
              wh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else bp(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(cp);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length;
  };
  function cp(a, b) {
    var c,
      d = b.wh,
      e = a.wh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Fh,
        l = b.Fh;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function bp(a, b) {
    if (Yh) {
      var c = function (d) {
        var e = b.nf(mc[d]) ? "3" : "4",
          f = vc(mc[d][Mb.Wg], b, []);
        f && f.length && c(f[0].index);
        Ni(b.id, mc[d], e);
        var g = vc(mc[d][Mb.Xg], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var gp = !1,
    ep;
  var Jp = function (a) {
    var b = z(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (gp) return !1;
      gp = !0;
    }
    var l,
      m = !1;
    if (ap(c)) l = $o(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      m = !0;
      l = $o(Number.MAX_SAFE_INTEGER);
    }
    Mi(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var t = {
        id: c,
        priorityId: d,
        name: e,
        nf: Sn(l),
        lk: [],
        qh: function () {
          O(6);
          Wa("HEALTH", 0);
        },
        bh: hp(),
        dh: Gp(c),
        zb: new io(q, p),
      },
      u = Ac(t);
    m && (u = Hp(u));
    var r = dp(u, t),
      v = !1;
    oo(t.zb);
    ("gtm.js" !== e && "gtm.sync" !== e) || zo(Sg.M);
    return Ip(u, r) || v;
  };
  function Gp(a) {
    return function (b) {
      Yh && (Lb(b) || Wi(a, "input", b));
    };
  }
  function hp() {
    var a = {};
    a.event = ye("event", 1);
    a.ecommerce = ye("ecommerce", 1);
    a.gtm = ye("gtm");
    a.eventModel = ye("eventModel");
    return a;
  }
  function Hp(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(mc[c][Mb.Ra]);
        if (Wd[d] || void 0 !== mc[c][Mb.Ji] || ne[d]) b[c] = !0;
        R(58) ||
          (0 !== mc[c][Mb.Ra].indexOf("__ccd") &&
            0 !== mc[c][Mb.Ra].indexOf("__ogt") &&
            "__set_product_settings" !== mc[c][Mb.Ra]) ||
          (b[c] = !0);
      }
    return b;
  }
  function Ip(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && mc[c] && !Xd[String(mc[c][Mb.Ra])]) return !0;
    return !1;
  }
  var Lp = function (a, b, c, d) {
      Kp.push("event", [b, a], c, d);
    },
    Mp = function (a, b, c, d) {
      Kp.push("get", [a, b], c, d);
    },
    Np = function () {
      this.status = 1;
      this.D = {};
      this.h = {};
      this.K = {};
      this.P = null;
      this.B = {};
      this.m = !1;
    },
    Op = function (a, b, c, d) {
      var e = z();
      this.type = a;
      this.m = e;
      this.W = b || "";
      this.h = c;
      this.messageContext = d;
    },
    Pp = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    Qp = function (a, b) {
      var c = bl(b);
      return (a.m[c.U] = a.m[c.U] || new Np());
    },
    Rp = function (a, b, c, d) {
      if (d.W) {
        var e = Qp(a, d.W),
          f = e.P;
        if (f) {
          var g = J(c),
            l = J(e.D[d.W]),
            m = J(e.B),
            n = J(e.h),
            p = J(a.B),
            q = {};
          if (Yh)
            try {
              q = J(re);
            } catch (v) {
              O(72);
            }
          var t = bl(d.W).prefix,
            u = function (v) {
              Vi(d.messageContext.eventId, t, v);
              var w = g[P.g.Nb];
              w && G(w);
            },
            r = cm(
              am(
                $l(
                  Zl(
                    Xl(
                      Wl(
                        Yl(
                          Vl(
                            Ul(
                              Tl(
                                new Sl(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              l
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (u) {
                      var v = u;
                      u = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            Vi(d.messageContext.eventId, t, "1"),
              Yn(d.type, d.W, r),
              f(d.W, b, d.m, r);
          } catch (v) {
            Vi(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  Pp.prototype.register = function (a, b, c) {
    var d = Qp(this, a);
    3 !== d.status &&
      ((d.P = b), (d.status = 3), c && (J(d.h, c), (d.h = c)), this.flush());
  };
  Pp.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!bl(c)) return;
      if (c) {
        var e = bl(c);
        e &&
          1 === Qp(this, c).status &&
          ((Qp(this, c).status = 2), this.push("require", [{}], e.U, {}));
      }
      Qp(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new Op(a, c, b, d));
    d.deferrable || this.flush();
  };
  Pp.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || Qp(this, f.W).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = Qp(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.h[0], function (t, u) {
              J(Ja(t, u), b.B);
            });
            break;
          case "config":
            g = Qp(this, f.W);
            e.hb = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  J(Ja(u, r), t.hb);
                };
              })(e)
            );
            var l = !!e.hb[P.g.Mc];
            delete e.hb[P.g.Mc];
            var m = bl(f.W),
              n = m.U === m.id;
            l || (n ? (g.B = {}) : (g.D[f.W] = {}));
            (g.m && l) || Rp(this, P.g.va, e.hb, f);
            g.m = !0;
            n ? J(e.hb, g.B) : (J(e.hb, g.D[f.W]), O(70));
            d = !0;
            break;
          case "event":
            g = Qp(this, f.W);
            e.nd = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  J(Ja(u, r), t.nd);
                };
              })(e)
            );
            Rp(this, f.h[1], e.nd, f);
            break;
          case "get":
            g = Qp(this, f.W);
            var p = {},
              q = ((p[P.g.Qa] = f.h[0]), (p[P.g.ab] = f.h[1]), p);
            Rp(this, P.g.Ca, q, f);
        }
        this.h.shift();
        Sp(this, f);
      }
      e = { hb: e.hb, nd: e.nd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Sp = function (a, b) {
      if ("require" !== b.type)
        if (b.W)
          for (var c = Qp(a, b.W).K[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.K)
                for (var g = f.K[b.type] || [], l = 0; l < g.length; l++)
                  g[l]();
            }
    },
    Tp = function (a, b) {
      var c = Kp,
        d = J(b);
      J(Qp(c, a).h, d);
      Qp(c, a).h = d;
    },
    Kp = new Pp();
  var Up = {},
    Vp = {},
    Wp = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { sd: d.sd, pd: d.pd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          (d.sd = bl(f)),
            d.sd &&
              (ra(
                Vg(),
                (function (p) {
                  return function (q) {
                    return p.sd.U === q;
                  };
                })(d)
              )
                ? b.push(f)
                : c.push(f));
        else {
          var g = Up[f] || [];
          d.pd = {};
          g.forEach(
            (function (p) {
              return function (q) {
                return (p.pd[q] = !0);
              };
            })(d)
          );
          for (var l = Ug(), m = 0; m < l.length; m++)
            if (d.pd[l[m]]) {
              b = b.concat(Vg());
              break;
            }
          var n = Vp[f] || [];
          n.length && (b = b.concat(n));
        }
      }
      return { Ij: b, Kj: c };
    },
    Xp = function (a) {
      k(Up, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Yp = function (a) {
      k(Vp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zp = "HA GF G UA AW DC MC".split(" "),
    $p = !1,
    aq = !1;
  function bq(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: oe() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var cq = {
      config: function (a, b) {
        var c = bq(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Kb(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = bl(a[1]);
          if (e) {
            Mi(c.eventId, "gtag.config");
            var f = e.U,
              g = e.id !== f;
            if (g ? -1 === Vg().indexOf(f) : -1 === Ug().indexOf(f)) {
              if (!R(61) || !d[P.g.Md]) {
                var l = d[P.g.na] || Kp.B[P.g.na];
                g
                  ? Ln(f, l, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : Kn(f, l, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
              }
            } else {
              if ($d && !g && !d[P.g.Mc]) {
                var m = aq;
                aq = !0;
                if (m) return;
              }
              $p || O(43);
              if (!b.noTargetGroup)
                if (g) {
                  Yp(e.id);
                  var n = e.id,
                    p = d[P.g.Kd] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var t = Vp[p[q]] || [];
                    Vp[p[q]] = t;
                    0 > t.indexOf(n) && t.push(n);
                  }
                } else {
                  Xp(e.id);
                  var u = e.id,
                    r = d[P.g.Kd] || "default";
                  r = r.toString().split(",");
                  for (var v = 0; v < r.length; v++) {
                    var w = Up[r[v]] || [];
                    Up[r[v]] = w;
                    0 > w.indexOf(u) && w.push(u);
                  }
                }
              delete d[P.g.Kd];
              var y = b.eventMetadata || {};
              y.hasOwnProperty("is_external_event") ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[P.g.Nb];
              for (var x = g ? [e.id] : Vg(), A = 0; A < x.length; A++) {
                var B = J(b);
                Kp.push("config", [d], x[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = bq(a, b),
            d = a[1];
          "default" === d ? ag(a[2]) : "update" === d && bg(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!Kb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = J(e)),
            e[P.g.Nb] && (g.eventCallback = e[P.g.Nb]),
            e[P.g.Fd] && (g.eventTimeout = e[P.g.Fd]));
          var l = bq(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            t = q && q[P.g.xb];
          void 0 === t &&
            ((t = ue(P.g.xb, 2)), void 0 === t && (t = "default"));
          if (h(t) || qa(t)) {
            var u = t.toString().replace(/\s+/g, "").split(","),
              r = Wp(u),
              v = r.Ij,
              w = r.Kj;
            if (w.length)
              for (
                var y = (q && q[P.g.na]) || Kp.B[P.g.na], x = 0;
                x < w.length;
                x++
              ) {
                var A = bl(w[x]);
                A &&
                  Ln(A.U, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = dl(v);
          } else p = void 0;
          var B = p;
          if (B) {
            Mi(m, c);
            for (var C = [], H = 0; H < B.length; H++) {
              var I = B[H],
                D = J(b);
              if (-1 !== Zp.indexOf(I.prefix)) {
                var K = J(d),
                  M = D.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !D.fromContainerExecution);
                D.eventMetadata = M;
                delete K[P.g.Nb];
                Lp(c, K, I.id, D);
              }
              C.push(I.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[P.g.xb] = C.join())
              : delete g.eventModel[P.g.xb];
            $p || O(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
          var c = bl(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            $p || O(43);
            var f = Kp.B[P.g.na];
            if (
              !ra(Vg(), function (l) {
                return c.U === l;
              })
            )
              Ln(c.U, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Zp.indexOf(c.prefix)) {
              bq(a, b);
              var g = {};
              Xf(J(((g[P.g.Qa] = d), (g[P.g.ab] = e), g)));
              Mp(
                d,
                function (l) {
                  G(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          $p = !0;
          var c = bq(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Kb(a[1])
          ? (c = J(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            Kb(a[2]) || qa(a[2]) ? (c[a[1]] = J(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = bq(a, b),
            e = d.eventId,
            f = d.priorityId;
          J(c);
          var g = J(c);
          Kp.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          R(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    dq = { policy: !0 };
  var eq = function (a) {
      var b = E[Td.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    fq = function (a) {
      var b = E[Td.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var gq = !1,
    hq = [];
  function iq() {
    if (!gq) {
      gq = !0;
      for (var a = 0; a < hq.length; a++) G(hq[a]);
    }
  }
  var jq = function (a) {
    gq ? G(a) : hq.push(a);
  };
  var Aq = function (a) {
    if (zq(a)) return a;
    this.h = a;
  };
  Aq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var zq = function (a) {
    return !a || "object" !== Ib(a) || Kb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Aq.prototype.getUntrustedMessageValue = Aq.prototype.getUntrustedMessageValue;
  var Bq = 0,
    Cq = {},
    Dq = [],
    Eq = [],
    Fq = !1,
    Gq = !1;
  function Hq(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Iq = function (a) {
      return E[Td.fa].push(a);
    },
    Jq = function (a, b) {
      var c = Ud[Td.fa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = E.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (E.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Kq(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && xe(e), xe(e, f));
    });
    je || (je = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = oe()), (a["gtm.uniqueEventId"] = d), xe("gtm.uniqueEventId", d));
    return Jp(a);
  }
  function Lq(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Mq() {
    var a;
    if (Eq.length) a = Eq.shift();
    else if (Dq.length) a = Dq.shift();
    else return;
    var b;
    var c = a;
    if (Fq || !Lq(c.message)) b = c;
    else {
      Fq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = oe());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Dq.unshift(l, c);
      if (Yh && Sg.M) {
        var m;
        if (Sg.Ve) {
          var n = Sg.M,
            p = Xg().destination[n];
          m = p && p.context;
        } else {
          var q = Sg.M,
            t = Xg().container[q];
          m = t && t.context;
        }
        var u = m,
          r,
          v = Ue(E.location.href);
        r = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution,
          y = u && u.source,
          x = Sg.M,
          A = Sg.Hb,
          B = Sg.Ve;
        ji || (ji = r);
        ii.push(
          x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function Nq() {
    for (var a = !1, b; !Gq && (b = Mq()); ) {
      Gq = !0;
      delete re.eventModel;
      te();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Gq = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = ue(l, 1);
            if (qa(m) || Kb(m)) m = J(m);
            se[l] = m;
          }
        try {
          if (oa(d))
            try {
              d.call(ve);
            } catch (C) {}
          else if (qa(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                u = ue(p.join("."), 2);
              if (null != u)
                try {
                  u[q].apply(u, t);
                } catch (C) {}
            }
          } else {
            var r = void 0,
              v = !1;
            if (xa(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = cq[d[0]];
                  if (w && (!e.fromContainerExecution || !dq[d[0]])) {
                    r = w(d, e);
                    break a;
                  }
                }
                r = void 0;
              }
              (v = r && "set" === d[0] && !!r.event) && O(101);
            } else r = d;
            if (r) {
              var y = Kq(r, e);
              a = y || a;
              v && y && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && te(!0);
          var x = d["gtm.uniqueEventId"];
          if ("number" === typeof x) {
            for (var A = Cq[String(x)] || [], B = 0; B < A.length; B++)
              Eq.push(Oq(A[B]));
            A.length && Eq.sort(Hq);
            delete Cq[String(x)];
            x > Bq && (Bq = x);
          }
          Gq = !1;
        }
      }
    }
    return !a;
  }
  function Pq() {
    var b = Nq();
    try {
      eq(Sg.M);
    } catch (c) {}
    return b;
  }
  function Ro(a) {
    if (Bq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Cq[b] = Cq[b] || [];
      Cq[b].push(a);
    } else
      Eq.push(Oq(a)),
        Eq.sort(Hq),
        G(function () {
          Gq || Nq();
        });
  }
  function Oq(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Rq = function () {
      function a(f) {
        var g = {};
        if (zq(f)) {
          var l = f;
          f = zq(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = pb(Td.fa, []),
        c = (Ud[Td.fa] = Ud[Td.fa] || {});
      !0 === c.pruned && O(83);
      Cq = Po().get();
      So();
      fo(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      jq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Ud.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Aq(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Dq.push.apply(Dq, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Nq() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Dq.push.apply(Dq, e);
      if (Qq()) {
        G(Pq);
      }
    },
    Qq = function () {
      var a = !0;
      return a;
    };
  function Sq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = z();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Tq(a) {
    return a && 0 === a.indexOf("pending:") ? Sq(a.substr(8)) : !1;
  }
  var rc = {};
  rc.Rd = new String("undefined");
  var Wq = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Fb(a, "className"),
        "gtm.elementId": a["for"] || Ab(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Fb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Fb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Xq = function (a) {
      Ud.hasOwnProperty("autoEventsSettings") || (Ud.autoEventsSettings = {});
      var b = Ud.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Yq = function (a, b, c) {
      Xq(a)[b] = c;
    },
    Zq = function (a, b, c, d) {
      var e = Xq(a),
        f = Ea(e, b, d);
      e[b] = c(f);
    },
    $q = function (a, b, c) {
      var d = Xq(a);
      return Ea(d, b, c);
    };
  var fr = !!E.MutationObserver,
    gr = void 0,
    hr = function (a) {
      if (!gr) {
        var b = function () {
          var c = F.body;
          if (c)
            if (fr)
              new MutationObserver(function () {
                for (var e = 0; e < gr.length; e++) G(gr[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              yb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  G(function () {
                    d = !1;
                    for (var e = 0; e < gr.length; e++) G(gr[e]);
                  }));
              });
            }
        };
        gr = [];
        F.body ? b() : G(b);
      }
      gr.push(a);
    };
  var tr = E.clearTimeout,
    ur = E.setTimeout,
    V = function (a, b, c, d) {
      if (Rg()) {
        b && G(b);
      } else return ub(a, b, c, d);
    },
    vr = function () {
      return new Date();
    },
    wr = function () {
      return E.location.href;
    },
    xr = function (a) {
      return Se(Ue(a), "fragment");
    },
    yr = function (a) {
      return Te(Ue(a));
    },
    zr = function (a, b) {
      return ue(a, b || 2);
    },
    Ar = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Iq(a)))
        : (d = Iq(a));
      return d;
    },
    Br = function (a, b) {
      E[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === E[a] || (c && !E[a])) && (E[a] = b);
      return E[a];
    },
    Cr = function (a, b, c) {
      return rg(a, b, void 0 === c ? !0 : !!c);
    },
    Dr = function (a, b, c) {
      return 0 === Hg(a, b, c);
    },
    Er = function (a, b) {
      if (Rg()) {
        b && G(b);
      } else wb(a, b);
    },
    Fr = function (a) {
      return !!$q(a, "init", !1);
    },
    Gr = function (a) {
      Yq(a, "init", !0);
    },
    Hr = function (a, b, c) {
      Yh && (Lb(a) || Wi(c, b, a));
    };
  var es = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function fs(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var gs = new ta();
  function hs(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = gs.get(e);
      f || ((f = new RegExp(b, d)), gs.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function is(a, b) {
    function c(g) {
      var l = Ue(g),
        m = Se(l, "protocol"),
        n = Se(l, "host", !0),
        p = Se(l, "port"),
        q = Se(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function js(a) {
    return ks(a) ? 1 : 0;
  }
  function ks(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = J(a, {});
        J({ arg1: c[d], any_of: void 0 }, e);
        if (js(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < es.length; g++) {
                var l = es[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return fs(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return hs(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return is(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  function Cs() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  var Ds = function () {
      var a = Cs();
      a.hid = a.hid || sa();
      return a.hid;
    },
    Es = function (a, b) {
      var c = Cs();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var at = function () {
      var a = !0;
      (Qh(7) && Qh(9) && Qh(10)) || (a = !1);
      return a;
    },
    bt = function () {
      var a = !0;
      (Qh(3) && Qh(4)) || (a = !1);
      return a;
    };
  var Et = window,
    Ft = document,
    Gt = function (a) {
      var b = Et._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Et["ga-disable-" + a]))
        return !0;
      try {
        var c = Et.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = lg("AMP_TOKEN", String(Ft.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Ft.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Ot(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[P.g.Ma] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Xt = function (a, b) {};
  function Wt(a, b) {
    var c = function () {};
    return c;
  }
  function Yt(a, b, c) {}
  var Tv = Wt;
  var Uv = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  var Vv = encodeURI,
    X = encodeURIComponent,
    Wv = function (a, b, c) {
      xb(a, b, c);
    },
    Xv = function (a, b) {
      if (!a) return !1;
      var c = Se(Ue(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Yv = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { o: {} };
  (Y.o.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.s = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.o.f = ["google"]),
    (function () {
      (function (a) {
        Y.__f = a;
        Y.__f.s = "f";
        Y.__f.isVendorTemplate = !0;
        Y.__f.priorityOverride = 0;
        Y.__f.isInfrastructure = !1;
      })(function (a) {
        var b = zr("gtm.referrer", 1) || F.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Se(
                Ue(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : yr(String(b))
          : String(b);
      });
    })();
  (Y.o.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = Wq(c, "gtm.click");
          Ar(d);
        }
      }
      (function (b) {
        Y.__cl = b;
        Y.__cl.s = "cl";
        Y.__cl.isVendorTemplate = !0;
        Y.__cl.priorityOverride = 0;
        Y.__cl.isInfrastructure = !1;
      })(function (b) {
        if (!Fr("cl")) {
          var c = W("document");
          yb(c, "click", a, !0);
          Gr("cl");
        }
        G(b.vtp_gtmOnSuccess);
      });
    })();
  (Y.o.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.s = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : zr("gtm.url", 1)) || wr();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return yr(String(c));
        var e = Ue(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              l = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? qa(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, "").split(","))
              : (n = [String(l)]);
            for (var p = 0; p < n.length; p++) {
              var q = Se(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Se(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.o.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.s = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = zr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Hr(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.o.aev = ["google"]),
    (function () {
      function a(t, u, r, v, w) {
        w || (w = "element");
        var y = u + "." + r,
          x;
        if (n.hasOwnProperty(y)) x = n[y];
        else {
          var A = t[w];
          if (A && ((x = v(A)), (n[y] = x), p.push(y), 35 < p.length)) {
            var B = p.shift();
            delete n[B];
          }
        }
        return x;
      }
      function b(t, u, r) {
        var v = t[q[u]];
        return void 0 !== v ? v : r;
      }
      function c(t, u) {
        if (!t) return !1;
        var r = d(wr());
        qa(u) ||
          (u = String(u || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [r], w = 0; w < u.length; w++) {
          var y = u[w];
          if (y.hasOwnProperty("is_regex"))
            if (y.is_regex)
              try {
                y = new RegExp(y.domain);
              } catch (B) {
                continue;
              }
            else y = y.domain;
          var x = d(t);
          if (y instanceof RegExp) {
            if (y.test(x)) return !1;
          } else {
            var A = y;
            if (0 != A.length) {
              if (0 <= x.indexOf(A)) return !1;
              v.push(d(A));
            }
          }
        }
        return !Xv(t, v);
      }
      function d(t) {
        m.test(t) || (t = "http://" + t);
        return Se(Ue(t), "HOST", !0);
      }
      function e(t, u, r, v) {
        switch (t) {
          case "SUBMIT_TEXT":
            return a(u, r, "FORM." + t, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(u, r, "FORM." + t, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return l(u, "id", v);
          case "INTERACTED_FIELD_NAME":
            return l(u, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return l(u, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var y = u.interactedFormFieldPosition;
            return void 0 === y ? v : y;
          case "INTERACT_SEQUENCE_NUMBER":
            var x = u.interactSequenceNumber;
            return void 0 === x ? v : x;
          default:
            return v;
        }
      }
      function f(t) {
        switch (t.tagName.toLowerCase()) {
          case "input":
            return Ab(t, "value");
          case "button":
            return Bb(t);
          default:
            return null;
        }
      }
      function g(t) {
        if ("form" === t.tagName.toLowerCase() && t.elements) {
          for (var u = 0, r = 0; r < t.elements.length; r++)
            cr(t.elements[r]) && u++;
          return u;
        }
      }
      function l(t, u, r) {
        var v = t.interactedFormField;
        return (v && Ab(v, u)) || r;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (t) {
        Y.__aev = t;
        Y.__aev.s = "aev";
        Y.__aev.isVendorTemplate = !0;
        Y.__aev.priorityOverride = 0;
        Y.__aev.isInfrastructure = !1;
      })(function (t) {
        var u = t.vtp_gtmEventId,
          r = t.vtp_defaultValue,
          v = t.vtp_varType,
          w = t.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var y = w.element;
            return (y && y.tagName) || r;
          case "TEXT":
            return a(w, u, v, Bb) || r;
          case "URL":
            var x;
            a: {
              var A = String(w.elementUrl || r || ""),
                B = Ue(A),
                C = String(t.vtp_component || "URL");
              switch (C) {
                case "URL":
                  x = A;
                  break a;
                case "IS_OUTBOUND":
                  x = c(A, t.vtp_affiliatedDomains);
                  break a;
                default:
                  x = Se(
                    B,
                    C,
                    t.vtp_stripWww,
                    t.vtp_defaultPages,
                    t.vtp_queryKey
                  );
              }
            }
            return x;
          case "ATTRIBUTE":
            var H;
            if (void 0 === t.vtp_attribute) H = b(w, v, r);
            else {
              var I = w.element;
              H = (I && Ab(I, t.vtp_attribute)) || r || "";
            }
            return H;
          case "MD":
            var D = t.vtp_mdValue,
              K = a(w, u, "MD", or);
            return D && K ? rr(K, D) || r : K || r;
          case "FORM":
            return e(String(t.vtp_component || "SUBMIT_TEXT"), w, u, r);
          default:
            var M = b(w, v, r);
            Hr(M, "aev", t.vtp_gtmEventId);
            return M;
        }
      });
    })();

  (Y.o.evl = ["google"]),
    (function () {
      function a() {
        var f = Number(zr("gtm.start")) || 0;
        return vr().getTime() - f;
      }
      function b(f, g, l, m) {
        function n() {
          if (!De(f.target)) {
            g.has(d.Ud) || g.set(d.Ud, "" + a());
            g.has(d.Se) || g.set(d.Se, "" + a());
            var q = 0;
            g.has(d.Wd) && (q = Number(g.get(d.Wd)));
            q += 100;
            g.set(d.Wd, "" + q);
            if (q >= l) {
              var t = Wq(f.target, "gtm.elementVisibility", [g.h]),
                u = Fe(f.target);
              t["gtm.visibleRatio"] = Math.round(1e3 * u) / 10;
              t["gtm.visibleTime"] = l;
              t["gtm.visibleFirstTime"] = Number(g.get(d.Se));
              t["gtm.visibleLastTime"] = Number(g.get(d.Ud));
              Ar(t);
              m();
            }
          }
        }
        if (!g.has(d.Oc) && (0 == l && n(), !g.has(d.Vb))) {
          var p = W("self").setInterval(n, 100);
          g.set(d.Oc, p);
        }
      }
      function c(f) {
        f.has(d.Oc) &&
          (W("self").clearInterval(Number(f.get(d.Oc))), f.m(d.Oc));
      }
      var d = {
          Oc: "polling-id-",
          Se: "first-on-screen-",
          Ud: "recent-on-screen-",
          Wd: "total-visible-time-",
          Vb: "has-fired-",
        },
        e = function (f, g) {
          this.element = f;
          this.h = g;
        };
      e.prototype.has = function (f) {
        return !!this.element.getAttribute("data-gtm-vis-" + f + this.h);
      };
      e.prototype.get = function (f) {
        return this.element.getAttribute("data-gtm-vis-" + f + this.h);
      };
      e.prototype.set = function (f, g) {
        this.element.setAttribute("data-gtm-vis-" + f + this.h, g);
      };
      e.prototype.m = function (f) {
        this.element.removeAttribute("data-gtm-vis-" + f + this.h);
      };
      (function (f) {
        Y.__evl = f;
        Y.__evl.s = "evl";
        Y.__evl.isVendorTemplate = !0;
        Y.__evl.priorityOverride = 0;
        Y.__evl.isInfrastructure = !1;
      })(function (f) {
        function g() {
          var y = !1,
            x = null;
          if ("CSS" === m) {
            try {
              x = ad(n);
            } catch (I) {}
            y = !!x && v.length != x.length;
          } else if ("ID" === m) {
            var A = F.getElementById(n);
            A && ((x = [A]), (y = 1 != v.length || v[0] !== A));
          }
          x || ((x = []), (y = 0 < v.length));
          if (y) {
            for (var B = 0; B < v.length; B++) {
              var C = new e(v[B], u);
              c(C);
            }
            v = [];
            for (var H = 0; H < x.length; H++) v.push(x[H]);
            0 <= w && Ne(w);
            0 < v.length && (w = Me(l, v, [t]));
          }
        }
        function l(y) {
          var x = new e(y.target, u);
          y.intersectionRatio >= t
            ? x.has(d.Vb) ||
              b(
                y,
                x,
                q,
                "ONCE" === r
                  ? function () {
                      for (var A = 0; A < v.length; A++) {
                        var B = new e(v[A], u);
                        B.set(d.Vb, "1");
                        c(B);
                      }
                      Ne(w);
                      if (p && gr)
                        for (var C = 0; C < gr.length; C++)
                          gr[C] === g && gr.splice(C, 1);
                    }
                  : function () {
                      x.set(d.Vb, "1");
                      c(x);
                    }
              )
            : (c(x),
              "MANY_PER_ELEMENT" === r && x.has(d.Vb) && (x.m(d.Vb), x.m(d.Wd)),
              x.m(d.Ud));
        }
        var m = f.vtp_selectorType,
          n;
        "ID" === m
          ? (n = String(f.vtp_elementId))
          : "CSS" === m && (n = String(f.vtp_elementSelector));
        var p = !!f.vtp_useDomChangeListener,
          q =
            (f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration)) || 0,
          t = (Number(f.vtp_onScreenRatio) || 50) / 100,
          u = f.vtp_uniqueTriggerId,
          r = f.vtp_firingFrequency,
          v = [],
          w = -1;
        g();
        p && hr(g);
        G(f.vtp_gtmOnSuccess);
      });
    })();

  (Y.o.gaawc = ["google"]),
    (function () {
      (function (a) {
        Y.__gaawc = a;
        Y.__gaawc.s = "gaawc";
        Y.__gaawc.isVendorTemplate = !0;
        Y.__gaawc.priorityOverride = 10;
        Y.__gaawc.isInfrastructure = !1;
      })(function (a) {
        var b = String(a.vtp_measurementId);
        if (!h(b) || 0 >= b.indexOf("-")) G(a.vtp_gtmOnFailure);
        else {
          var c = Yv(a.vtp_fieldsToSet, "name", "value") || {};
          if (c.hasOwnProperty(P.g.Ma) || a.vtp_userProperties) {
            var d = c[P.g.Ma] || {};
            J(Yv(a.vtp_userProperties, "name", "value"), d);
            c[P.g.Ma] = d;
          }
          a.vtp_enableSendToServerContainer &&
            a.vtp_serverContainerUrl &&
            ((c[P.g.na] = a.vtp_serverContainerUrl), (c[P.g.Gd] = !0));
          var e = a.vtp_userDataVariable;
          e && (c[P.g.ca] = e);
          Uv(c, Kd, function (f) {
            return Aa(f);
          });
          Uv(c, Nd, function (f) {
            return Number(f);
          });
          c.send_page_view = a.vtp_sendPageView;
          Qo(Mo(b, c), a.vtp_gtmEventId, {
            noTargetGroup: !0,
            originatingEntity: go(a.vtp_gtmEntityIndex, a.vtp_gtmEntityName),
          });
          G(a.vtp_gtmOnSuccess);
        }
      });
    })();
  (Y.o.gaawe = ["google"]),
    (function () {
      function a(f, g, l) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = l(f[g[m]]));
      }
      function b(f, g, l) {
        var m = {},
          n = function (r, v) {
            m[r] = m[r] || v;
          },
          p = function (r, v, w) {
            w = void 0 === w ? !1 : w;
            c.push(6);
            if (r) {
              m.items = m.items || [];
              for (var y = {}, x = 0; x < r.length; y = { Fb: y.Fb }, x++)
                (y.Fb = {}),
                  k(
                    r[x],
                    (function (B) {
                      return function (C, H) {
                        w && "id" === C
                          ? (B.Fb.promotion_id = H)
                          : w && "name" === C
                          ? (B.Fb.promotion_name = H)
                          : (B.Fb[C] = H);
                      };
                    })(y)
                  ),
                  m.items.push(y.Fb);
            }
            if (v)
              for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A, v[A]);
          },
          q;
        "dataLayer" === f.vtp_getEcommerceDataFrom
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Kb(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Kb(q)) {
          var t = !1,
            u;
          for (u in q)
            q.hasOwnProperty(u) &&
              (t || (c.push(5), (t = !0)),
              "currencyCode" === u
                ? n("currency", q.currencyCode)
                : "impressions" === u && g === P.g.sb
                ? p(q.impressions, null)
                : "promoClick" === u && g === P.g.Jb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : "promoView" === u && g === P.g.tb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(u)
                ? g === e[u] && p(q[u].products, q[u].actionField)
                : (m[u] = q[u]));
          J(m, l);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Y.__gaawe = f;
        Y.__gaawe.s = "gaawe";
        Y.__gaawe.isVendorTemplate = !0;
        Y.__gaawe.priorityOverride = 0;
        Y.__gaawe.isInfrastructure = !1;
      })(function (f) {
        var g = String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (h(g) && 0 === g.indexOf("G-")) {
          var l = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (Jd.hasOwnProperty(l) || "checkout_option" === l) &&
            b(f, l, m);
          var n = Yv(f.vtp_eventParameters, "name", "value"),
            p;
          for (p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          var q = f.vtp_userDataVariable;
          q && (m[P.g.ca] = q);
          if (m.hasOwnProperty(P.g.Ma) || f.vtp_userProperties) {
            var t = m[P.g.Ma] || {};
            J(Yv(f.vtp_userProperties, "name", "value"), t);
            m[P.g.Ma] = t;
          }
          var u = {
            originatingEntity: go(f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (0 < c.length) {
            var r = {};
            u.eventMetadata = ((r.event_usage = c), r);
          }
          a(m, Kd, function (w) {
            return Aa(w);
          });
          a(m, Nd, function (w) {
            return Number(w);
          });
          var v = f.vtp_gtmEventId;
          u.noGtmEvent = !0;
          Qo(No(g, l, m), v, u);
          G(f.vtp_gtmOnSuccess);
        } else G(f.vtp_gtmOnFailure);
      });
    })();

  var px = {};
  px.dataLayer = ve;
  px.callback = function (a) {
    le.hasOwnProperty(a) && oa(le[a]) && le[a]();
    delete le[a];
  };
  px.bootstrap = 0;
  px._spx = !1;
  function qx() {
    Ud[Sg.M] = Ud[Sg.M] || px;
    Sg.Hb && (Ud["ctid_" + Sg.Hb] = px);
    Yg();
    $g() ||
      k(ah(), function (a, b) {
        Ln(a, b.transportUrl, b.context);
        O(92);
      });
    Ga(me, Y.o);
    tc = Bc;
  }
  (function (a) {
    function b() {
      m = F.documentElement.getAttribute("data-tag-assistant-present");
      Sq(m) && (l = g.xi);
    }
    if (!E["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (F.referrer) {
        var d = Ue(F.referrer);
        c = "cct.google" === Re(d, "host");
      }
      if (!c) {
        var e = rg("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((E["__TAGGY_INSTALLED"] = !0),
        ub("https://cct.google/taggy/agent.js"));
    }
    if (ge) a();
    else {
      var f = function (r) {
          var v = "GTM",
            w = "GTM";
          ae ? ((v = "OGT"), (w = "GTAG")) : ge && (w = v = "OPT");
          var y = E["google.tagmanager.debugui2.queue"];
          y ||
            ((y = []),
            (E["google.tagmanager.debugui2.queue"] = y),
            ub(
              "https://" +
                Td.ud +
                "/debug/bootstrap?id=" +
                Sg.M +
                "&src=" +
                w +
                "&cond=" +
                r +
                "&gtm=" +
                dh()
            ));
          var x = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: ob,
              containerProduct: v,
              debug: !1,
              id: Sg.M,
              isGte: $d,
            },
          };
          x.data.resume = function () {
            a();
          };
          Td.Ph && (x.data.initialPublish = !0);
          y.push(x);
        },
        g = { uk: 1, yi: 2, Ki: 3, Rh: 4, xi: 5 },
        l = void 0,
        m = void 0,
        n = Se(E.location, "query", !1, void 0, "gtm_debug");
      Sq(n) && (l = g.yi);
      if (!l && F.referrer) {
        var p = Ue(F.referrer);
        "tagassistant.google.com" === Re(p, "host") && (l = g.Ki);
      }
      if (!l) {
        var q = rg("__TAG_ASSISTANT");
        q.length && q[0].length && (l = g.Rh);
      }
      l || b();
      if (!l && R(54) && Tq(m)) {
        var t = function () {
            if (u) return !0;
            u = !0;
            b();
            l && ob ? f(l) : a();
          },
          u = !1;
        yb(
          F,
          "TADebugSignal",
          function () {
            t();
          },
          !1
        );
        E.setTimeout(function () {
          t();
        }, 200);
      } else l && ob ? f(l) : a();
    }
  })(function () {
    var a = !1;
    a && qo("INIT");
    Ff().m();
    Nh();
    sk.enable_gbraid_cookie_write = !0;
    if (Sg.Hb ? Ud["ctid_" + Sg.Hb] : Ud[Sg.M]) {
      var b = Ud.zones;
      b && b.unregisterChild(Ug());
    } else {
      (R(11) || R(13) || R(55) || R(48)) && nj();
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        jc.push(d[e]);
      for (var f = c.tags || [], g = 0; g < f.length; g++) mc.push(f[g]);
      for (var l = c.predicates || [], m = 0; m < l.length; m++) lc.push(l[m]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], t = {}, u = 0; u < q.length; u++)
          t[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        kc.push(t);
      }
      oc = Y;
      pc = js;
      qx();
      Rq();
      $n = !1;
      ao = 0;
      if (
        ("interactive" == F.readyState && !F.createEventObject) ||
        "complete" == F.readyState
      )
        co();
      else {
        yb(F, "DOMContentLoaded", co);
        yb(F, "readystatechange", co);
        if (F.createEventObject && F.documentElement.doScroll) {
          var r = !0;
          try {
            r = !E.frameElement;
          } catch (A) {}
          r && eo();
        }
        yb(E, "load", co);
      }
      gq = !1;
      "complete" === F.readyState ? iq() : yb(E, "load", iq);
      cj();
      R(46) && (O(111), Wa("HEALTH", 1));
      R(47) && (O(112), Wa("HEALTH", 2));
      ke = z();
      px.bootstrap = ke;
      if (a) {
        var x = ro("INIT");
      }
    }
  });
})();
