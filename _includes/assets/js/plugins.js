function debugLine(e, t, i) {
    e === !0 && (e = "true"), e === !1 && (e = "false");
    var n = e;
    if ("object" == typeof e) {
        n = "";
        for (name in e) {
            var r = e[name];
            n += " " + name + ": " + r;
        }
    }
    if ((1 != t || i || (n += " " + Math.random()), 1 == i)) {
        var a = jQuery("#debug_line");
        a.width(200), a.height() >= 500 && a.html("");
        var s = a.html();
        n = s + "<br> -------------- <br>" + n;
    }
    jQuery("#debug_line").show().html(n);
}
function debugSide(e) {
    var t = "";
    for (name in e) {
        var i = e[name];
        t += name + " : " + i + "<br>";
    }
    jQuery("#debug_side").show().html(t);
}
function trace(e) {
    "undefined" != typeof console && console.log(e);
}
function UGFunctions() {
    function e(e, t, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : (t[e] = i);
    }
    var t = null,
        i = this,
        n = { starTime: 0, arrThemes: [], isTouchDevice: -1, isRgbaSupported: -1, timeCache: {}, dataCache: {}, lastEventType: "", lastEventTime: 0, lastTouchStartElement: null, touchThreshold: 700, handle: null };
    (this.debugVar = ""),
        (this.z__________FULL_SCREEN___________ = function () {}),
        (this.toFullscreen = function (e, t) {
            if (e.requestFullscreen) e.requestFullscreen();
            else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
            else if (e.webkitRequestFullscreen) e.webkitRequestFullscreen();
            else {
                if (!e.msRequestFullscreen) return !1;
                e.msRequestFullscreen();
            }
            return !0;
        }),
        (this.exitFullscreen = function () {
            if (0 == i.isFullScreen()) return !1;
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.cancelFullScreen) document.cancelFullScreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else {
                if (!document.msExitFullscreen) return !1;
                document.msExitFullscreen();
            }
            return !0;
        }),
        (this.addFullScreenChangeEvent = function (t) {
            document.webkitCancelFullScreen
                ? e("webkitfullscreenchange", document, t)
                : document.msExitFullscreen
                ? e("MSFullscreenChange", document, t)
                : document.mozCancelFullScreen
                ? e("mozfullscreenchange", document, t)
                : e("fullscreenchange", document, t);
        }),
        (this.destroyFullScreenChangeEvent = function () {
            jQuery(document).unbind("fullscreenChange"), jQuery(document).unbind("mozfullscreenchange"), jQuery(document).unbind("webkitfullscreenchange"), jQuery(document).unbind("MSFullscreenChange");
        }),
        (this.getFullScreenElement = function () {
            var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            return e;
        }),
        (this.isFullScreen = function () {
            var e = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
            return (e = !!e);
        }),
        (this.z__________GET_PROPS___________ = function () {}),
        (this.getBrowserPrefix = function () {
            if (null !== t) return t;
            var e = ["webkit", "Moz", "ms", "O"],
                i = document.createElement("div");
            for (var n in e) {
                var r = e[n];
                if (r + "Transform" in i.style) return (r = r.toLowerCase()), (t = r), r;
            }
            return (t = ""), "";
        }),
        (this.getImageInsideParentDataByImage = function (e, t, n) {
            var r = e.parent(),
                a = i.getImageOriginalSize(e),
                s = i.getImageInsideParentData(r, a.width, a.height, t, n);
            return s;
        }),
        (this.getImageInsideParentData = function (e, t, i, n, r, a, s) {
            if (!r) var r = {};
            var o = {};
            if ("undefined" == typeof a) var a = e.width();
            if ("undefined" == typeof s) var s = e.height();
            r.padding_left && (a -= r.padding_left), r.padding_right && (a -= r.padding_right), r.padding_top && (s -= r.padding_top), r.padding_bottom && (s -= r.padding_bottom);
            var l = null,
                u = "100%",
                d = null,
                c = null,
                g = "display:block;margin:0px auto;";
            if (t > 0 && i > 0) {
                if ("down" == n && a > t && s > i) (u = i), (l = t), (c = (a - l) / 2), (d = (s - u) / 2);
                else if ("fill" == n) {
                    var p = t / i;
                    (u = s), (l = u * p), a > l ? ((l = a), (u = l / p), (c = 0), (d = Math.round(((u - s) / 2) * -1))) : ((d = 0), (c = Math.round(((l - a) / 2) * -1)));
                } else {
                    var p = t / i;
                    (u = s), (l = u * p), (d = 0), (c = (a - l) / 2), "fitvert" != n && l > a && ((l = a), (u = l / p), (c = 0), (d = (s - u) / 2));
                }
                (l = Math.floor(l)), (u = Math.floor(u)), (d = Math.floor(d)), (c = Math.floor(c)), (g = "position:absolute;");
            }
            return (
                r.padding_top && (d += r.padding_top),
                r.padding_left && (c += r.padding_left),
                (o.imageWidth = l),
                (o.imageHeight = u),
                (o.imageTop = d),
                (o.imageLeft = c),
                (o.imageRight = c + l),
                0 == d || "100%" == u ? (o.imageBottom = null) : (o.imageBottom = d + u),
                (o.style = g),
                o
            );
        }),
        (this.getElementCenterPosition = function (e, t) {
            var n = e.parent(),
                r = i.getElementSize(e),
                a = i.getElementSize(n),
                s = a.width,
                o = a.height;
            t && void 0 !== t.padding_top && (o -= t.padding_top),
                t && void 0 !== t.padding_bottom && (o -= t.padding_bottom),
                t && void 0 !== t.padding_left && (s -= t.padding_left),
                t && void 0 !== t.padding_right && (s -= t.padding_right);
            var l = {};
            return (l.left = Math.round((s - r.width) / 2)), (l.top = Math.round((o - r.height) / 2)), t && void 0 !== t.padding_top && (l.top += t.padding_top), t && void 0 !== t.padding_left && (l.left += t.padding_left), l;
        }),
        (this.getElementCenterPoint = function (e, t) {
            if (!t) var t = !1;
            var n = i.getElementSize(e),
                r = {};
            return (r.x = n.width / 2), (r.y = n.height / 2), 1 == t && ((r.x += n.left), (r.y += n.top)), (r.x = Math.round(r.x)), (r.y = Math.round(r.y)), r;
        }),
        (this.getMousePosition = function (e, t) {
            var i = { pageX: e.pageX, pageY: e.pageY, clientX: e.clientX, clientY: e.clientY };
            if (
                (e.originalEvent &&
                    e.originalEvent.touches &&
                    e.originalEvent.touches.length > 0 &&
                    ((i.pageX = e.originalEvent.touches[0].pageX), (i.pageY = e.originalEvent.touches[0].pageY), (i.clientX = e.originalEvent.touches[0].clientX), (i.clientY = e.originalEvent.touches[0].clientY)),
                t)
            ) {
                var n = t.offset();
                (i.mouseX = i.pageX - n.left), (i.mouseY = i.pageY - n.top);
            }
            return i;
        }),
        (this.getMouseElementPoint = function (e, t) {
            var n = { x: e.pageX, y: e.pageY },
                r = i.getElementLocalPoint(n, t);
            return r;
        }),
        (this.getElementLocalPoint = function (e, t) {
            var i = {},
                n = t.offset();
            return (i.x = Math.round(e.x - n.left)), (i.y = Math.round(e.y - n.top)), i;
        }),
        (this.getImageOriginalSize = function (e, t, i) {
            if ("undefined" != typeof t && "undefined" != typeof i) return { width: t, height: i };
            var n = e[0];
            if ("undefined" == typeof n) throw new Error("getImageOriginalSize error - Image not found");
            var r = {};
            if ("undefined" == typeof n.naturalWidth) {
                if ("number" == typeof e.data("naturalWidth")) {
                    var r = {};
                    return (r.width = e.data("naturalWidth")), (r.height = e.data("naturalHeight")), r;
                }
                var a = new Image();
                return (a.src = n.src), a.complete ? ((r.width = a.width), (r.height = a.height), e.data("naturalWidth", r.width), e.data("naturalHeight", r.height), r) : { width: 0, height: 0 };
            }
            return (r.width = n.naturalWidth), (r.height = n.naturalHeight), r;
        }),
        (this.getimageRatio = function (e) {
            var t = i.getImageOriginalSize(e),
                n = i.getElementSize(e),
                r = n.width / t.width;
            return r;
        }),
        (this.isImageFitParent = function (e) {
            var t = e.parent(),
                n = i.getElementSize(e),
                r = i.getElementSize(t);
            return n.width <= r.width && n.height <= r.height;
        }),
        (this.getElementSize = function (e) {
            if (void 0 === e) throw new Error("Can't get size, empty element");
            var t = e.position();
            return (t.height = e.outerHeight()), (t.width = e.outerWidth()), (t.left = Math.round(t.left)), (t.top = Math.round(t.top)), (t.right = t.left + t.width), (t.bottom = t.top + t.height), t;
        }),
        (this.isElementBiggerThenParent = function (e) {
            var t = e.parent(),
                n = i.getElementSize(e),
                r = i.getElementSize(t);
            return n.width > r.width || n.height > r.height;
        }),
        (this.isPointInsideElement = function (e, t) {
            var i = e.x >= 0 && e.x < t.width;
            if (0 == i) return !1;
            var n = e.y >= 0 && e.y < t.height;
            return 0 != n;
        }),
        (this.getElementRelativePos = function (e, t, n, r) {
            if (!r) var r = e.parent();
            if ("number" == typeof e) var a = { width: e, height: e };
            else var a = i.getElementSize(e);
            var s = i.getElementSize(r);
            switch (t) {
                case "top":
                case "left":
                    (t = 0), n && (t += n);
                    break;
                case "center":
                    (t = Math.round((s.width - a.width) / 2)), n && (t += n);
                    break;
                case "right":
                    (t = s.width - a.width), n && (t -= n);
                    break;
                case "middle":
                    (t = Math.round((s.height - a.height) / 2)), n && (t += n);
                    break;
                case "bottom":
                    (t = s.height - a.height), n && (t -= n);
            }
            return t;
        }),
        (this.z_________SET_ELEMENT_PROPS_______ = function () {}),
        (this.zoomImageInsideParent = function (e, t, n, r, a, s, o) {
            if (!n) var n = 1.2;
            if (!a) var a = "fit";
            var l,
                u,
                d,
                c,
                g = n,
                p = e.parent(),
                h = i.getElementSize(e),
                m = i.getImageOriginalSize(e),
                f = !1,
                _ = 0,
                v = 0,
                b = 0,
                y = 0;
            if (r) {
                var w = i.getMouseElementPoint(r, e);
                (f = i.isPointInsideElement(w, h)), (b = w.x), (y = w.y);
            } else f = !1;
            if (0 == f) {
                var T = i.getElementCenterPoint(e);
                (b = T.x), (y = T.y);
            }
            if (1 == t) (l = h.height * g), (u = h.width * g), 0 != b && (_ = -(b * g - b)), 0 != y && (v = -(y * g - y));
            else {
                (l = h.height / g), (u = h.width / g);
                var x = i.getImageInsideParentData(p, m.width, m.height, a, o);
                if (u < x.imageWidth) return i.scaleImageFitParent(e, m.width, m.height, a, o), !0;
                1 == f && (0 != b && (_ = -(b / g - b)), 0 != y && (v = -(y / g - y)));
            }
            if (s) {
                var S = 1;
                if ((0 != m.width && (S = u / m.width), S > s)) return !1;
            }
            if ((i.setElementSize(e, u, l), 0 == t && 0 == f)) {
                var I = i.getElementCenterPosition(e);
                (d = I.left), (c = I.top);
            } else (d = h.left + _), (c = h.top + v);
            return i.placeElement(e, d, c), !0;
        }),
        (this.placeElement = function (e, t, n, r, a, s) {
            if (0 == jQuery.isNumeric(t) || 0 == jQuery.isNumeric(n)) {
                if (!s) var s = e.parent();
                var o = i.getElementSize(e),
                    l = i.getElementSize(s);
            }
            if (0 == jQuery.isNumeric(t))
                switch (t) {
                    case "left":
                        (t = 0), r && (t += r);
                        break;
                    case "center":
                        (t = Math.round((l.width - o.width) / 2)), r && (t += r);
                        break;
                    case "right":
                        (t = l.width - o.width), r && (t -= r);
                }
            if (0 == jQuery.isNumeric(n))
                switch (n) {
                    case "top":
                        (n = 0), a && (n += a);
                        break;
                    case "middle":
                    case "center":
                        (n = Math.round((l.height - o.height) / 2)), a && (n += a);
                        break;
                    case "bottom":
                        (n = l.height - o.height), a && (n -= a);
                }
            var u = { position: "absolute", margin: "0px" };
            null !== t && (u.left = t), null !== n && (u.top = n), e.css(u);
        }),
        (this.placeElementInParentCenter = function (e) {
            i.placeElement(e, "center", "middle");
        }),
        (this.setElementSizeAndPosition = function (e, t, i, n, r) {
            var a = { width: n + "px", height: r + "px", left: t + "px", top: i + "px", position: "absolute", margin: "0px" };
            e.css(a);
        }),
        (this.setElementSize = function (e, t, i) {
            var n = { width: t + "px" };
            null !== i && "undefined" != typeof i && (n.height = i + "px"), e.css(n);
        }),
        (this.cloneElementSizeAndPos = function (e, t, n, r, a) {
            var s = e.position();
            if (void 0 == s) throw new Error("Can't get size, empty element");
            n === !0 ? ((s.height = e.outerHeight()), (s.width = e.outerWidth())) : ((s.height = e.height()), (s.width = e.width())),
                (s.left = Math.round(s.left)),
                (s.top = Math.round(s.top)),
                r && (s.left += r),
                a && (s.top += a),
                i.setElementSizeAndPosition(t, s.left, s.top, s.width, s.height);
        }),
        (this.placeImageInsideParent = function (e, t, n, r, a, s) {
            var o = i.getImageInsideParentData(t, n, r, a, s),
                l = "<img";
            null !== o.imageWidth && ((l += " width = '" + o.imageWidth + "'"), (o.style += "width:" + o.imageWidth + ";")),
                null != o.imageHeight &&
                    ("100%" == o.imageHeight ? ((l += " height = '" + o.imageHeight + "'"), (o.style += "height:" + o.imageHeight + ";")) : ((l += " height = '" + o.imageHeight + "'"), (o.style += "height:" + o.imageHeight + "px;"))),
                null !== o.imageTop && (o.style += "top:" + o.imageTop + "px;"),
                null !== o.imageLeft && (o.style += "left:" + o.imageLeft + "px;"),
                (e = i.escapeDoubleSlash(e)),
                (l += " style='" + o.style + "'"),
                (l += ' src="' + e + '"'),
                (l += ">"),
                t.html(l);
            var u = t.children("img");
            return u;
        }),
        (this.scaleImageCoverParent = function (e, t, n) {
            if ("number" == typeof t)
                var r = t,
                    a = n;
            else
                var r = t.outerWidth(),
                    a = t.outerHeight();
            var s = i.getImageOriginalSize(e),
                o = s.width,
                l = s.height,
                u = o / l,
                d = a,
                c = d * u,
                g = 0,
                p = 0;
            r > c ? ((c = r), (d = c / u), (p = 0), (g = Math.round(((d - a) / 2) * -1))) : ((g = 0), (p = Math.round(((c - r) / 2) * -1))),
                (c = Math.round(c)),
                (d = Math.round(d)),
                e.css({ width: c + "px", height: d + "px", left: p + "px", top: g + "px" });
        }),
        (this.scaleImageFitParent = function (e, t, n, r, a) {
            var s = e.parent(),
                o = i.getImageInsideParentData(s, t, n, r, a),
                l = !1,
                u = {};
            return (
                null !== o.imageWidth && ((l = !0), e.removeAttr("width"), (u.width = o.imageWidth + "px")),
                null != o.imageHeight && ((l = !0), e.removeAttr("height"), (u.height = o.imageHeight + "px")),
                null !== o.imageTop && ((l = !0), (u.top = o.imageTop + "px")),
                null !== o.imageLeft && ((l = !0), (u.left = o.imageLeft + "px")),
                1 == l && ((u.position = "absolute"), (u.margin = "0px 0px"), e.css(u)),
                o
            );
        }),
        (this.scaleImageByHeight = function (e, t, n, r) {
            var a = i.getImageOriginalSize(e, n, r),
                s = a.width / a.height,
                o = Math.round(t * s);
            (t = Math.round(t)), i.setElementSize(e, o, t);
        }),
        (this.scaleImageByWidth = function (e, t, n, r) {
            var a = i.getImageOriginalSize(e, n, r),
                s = a.width / a.height,
                o = Math.round(t / s);
            (t = Math.round(t)), i.setElementSize(e, t, o);
        }),
        (this.scaleImageExactSizeInParent = function (e, t, n, r, a, s) {
            var o = e.parent(),
                l = i.getElementSize(o);
            l.width < r && (r = l.width), l.height < a && (a = l.height);
            var u = i.getImageInsideParentData(null, t, n, s, null, r, a),
                d = r,
                c = a,
                g = u.imageLeft,
                p = u.imageLeft,
                h = u.imageTop,
                m = u.imageTop,
                f = Math.round((l.width - r) / 2),
                _ = Math.round((l.height - a) / 2),
                v = u.imageWidth + g + p,
                b = r - v;
            0 != b && (p += b);
            var y = u.imageHeight + h + m,
                b = a - y;
            0 != b && (m += b), e.removeAttr("width"), e.removeAttr("height");
            var w = { position: "absolute", margin: "0px 0px" };
            (w.width = d + "px"), (w.height = c + "px"), (w.left = f + "px"), (w.top = _ + "px"), (w["padding-left"] = g + "px"), (w["padding-top"] = h + "px"), (w["padding-right"] = p + "px"), (w["padding-bottom"] = m + "px"), e.css(w);
            var T = {};
            return (T.imageWidth = d), (T.imageHeight = c), T;
        }),
        (this.showElement = function (e, t, i) {
            e.show().fadeTo(0, 1), t && t.show().fadeTo(0, 1), i && i.show().fadeTo(0, 1);
        }),
        (this.z_________GALLERY_RELATED_FUNCTIONS_______ = function () {}),
        (this.disableButton = function (e, t) {
            if (!t) var t = "ug-button-disabled";
            0 == i.isButtonDisabled(e, t) && e.addClass(t);
        }),
        (this.convertCustomPrefixOptions = function (e, t, i) {
            if (!t) return e;
            var n = {};
            return (
                jQuery.each(e, function (e, r) {
                    if (0 === e.indexOf(t + "_" + i + "_")) {
                        var a = e.replace(t + "_" + i + "_", i + "_");
                        n[a] = r;
                    } else n[e] = r;
                }),
                n
            );
        }),
        (this.enableButton = function (e, t) {
            if (!t) var t = "ug-button-disabled";
            1 == i.isButtonDisabled(e, t) && e.removeClass(t);
        }),
        (this.isButtonDisabled = function (e, t) {
            if (!t) var t = "ug-button-disabled";
            return !!e.hasClass(t);
        }),
        (this.z_________MATH_FUNCTIONS_______ = function () {}),
        (this.normalizeSetting = function (e, t, i, n, r, a) {
            if (!a) var a = !1;
            var s = (r - i) / (n - i);
            return (r = e + (t - e) * s), 1 == a && (e > r && (r = e), r > t && (r = t)), r;
        }),
        (this.getNormalizedValue = function (e, t, i, n, r) {
            var a = (r - e) / (t - e);
            return (r = e + (n - i) * a);
        }),
        (this.getDistance = function (e, t, i, n) {
            var r = Math.round(Math.sqrt(Math.abs((i - e) * (i - e) + (n - t) * (n - t))));
            return r;
        }),
        (this.getMiddlePoint = function (e, t, i, n) {
            var r = {};
            return (r.x = e + Math.round((i - e) / 2)), (r.y = t + Math.round((n - t) / 2)), r;
        }),
        (this.getNumItemsInSpace = function (e, t, i) {
            var n = Math.floor((e + i) / (t + i));
            return n;
        }),
        (this.getNumItemsInSpaceRound = function (e, t, i) {
            var n = Math.round((e + i) / (t + i));
            return n;
        }),
        (this.getSpaceByNumItems = function (e, t, i) {
            var n = e * t + (e - 1) * i;
            return n;
        }),
        (this.getItemSizeInSpace = function (e, t, i) {
            var n = Math.floor((e - (t - 1) * i) / t);
            return n;
        }),
        (this.getColX = function (e, t, i) {
            var n = e * (t + i);
            return n;
        }),
        (this.getColByIndex = function (e, t) {
            var i = t % e;
            return i;
        }),
        (this.getColRowByIndex = function (e, t) {
            var i = Math.floor(e / t),
                n = Math.floor(e % t);
            return { col: n, row: i };
        }),
        (this.getIndexByRowCol = function (e, t, i) {
            if (0 > e) return -1;
            if (0 > t) return -1;
            var n = e * i + t;
            return n;
        }),
        (this.getPrevRowSameColIndex = function (e, t) {
            var n = i.getColRowByIndex(e, t),
                r = i.getIndexByRowCol(n.row - 1, n.col, t);
            return r;
        }),
        (this.getNextRowSameColIndex = function (e, t) {
            var n = i.getColRowByIndex(e, t),
                r = i.getIndexByRowCol(n.row + 1, n.col, t);
            return r;
        }),
        (this.z_________DATA_FUNCTIONS_______ = function () {}),
        (this.setGlobalData = function (e, t) {
            jQuery.data(document.body, e, t);
        }),
        (this.getGlobalData = function (e) {
            var t = jQuery.data(document.body, e);
            return t;
        }),
        (this.z_________EVENT_DATA_FUNCTIONS_______ = function () {}),
        (this.handleScrollTop = function (e) {
            if (0 == i.isTouchDevice()) return null;
            var t = i.getStoredEventData(e),
                r = 15,
                a = 15;
            if (
                (null === t.scrollDir &&
                    (Math.abs(t.diffMouseX) > r
                        ? (t.scrollDir = "hor")
                        : Math.abs(t.diffMouseY) > a &&
                          Math.abs(t.diffMouseY) > Math.abs(t.diffMouseX) &&
                          ((t.scrollDir = "vert"), (t.scrollStartY = t.lastMouseClientY), (t.scrollOrigin = jQuery(document).scrollTop()), (n.dataCache[e].scrollStartY = t.lastMouseClientY), (n.dataCache[e].scrollOrigin = t.scrollOrigin)),
                    (n.dataCache[e].scrollDir = t.scrollDir)),
                "vert" !== t.scrollDir)
            )
                return t.scrollDir;
            var s = (jQuery(document).scrollTop(), t.scrollOrigin - (t.lastMouseClientY - t.scrollStartY));
            return s >= 0 && jQuery(document).scrollTop(s), t.scrollDir;
        }),
        (this.wasVerticalScroll = function (e) {
            var t = i.getStoredEventData(e);
            return "vert" === t.scrollDir;
        }),
        (this.storeEventData = function (e, t, r) {
            var a = i.getMousePosition(e),
                s = jQuery.now(),
                o = {
                    startTime: s,
                    lastTime: s,
                    startMouseX: a.pageX,
                    startMouseY: a.pageY,
                    lastMouseX: a.pageX,
                    lastMouseY: a.pageY,
                    startMouseClientY: a.clientY,
                    lastMouseClientY: a.clientY,
                    scrollTop: jQuery(document).scrollTop(),
                    scrollDir: null,
                };
            r && (o = jQuery.extend(o, r)), (n.dataCache[t] = o);
        }),
        (this.updateStoredEventData = function (e, t, r) {
            if (!n.dataCache[t]) throw new Error("updateEventData error: must have stored cache object");
            var a = n.dataCache[t],
                s = i.getMousePosition(e);
            (a.lastTime = jQuery.now()), void 0 !== s.pageX && ((a.lastMouseX = s.pageX), (a.lastMouseY = s.pageY), (a.lastMouseClientY = s.clientY)), r && (a = jQuery.extend(a, r)), (n.dataCache[t] = a);
        }),
        (this.getStoredEventData = function (e, t) {
            if (!n.dataCache[e]) throw new Error("updateEventData error: must have stored cache object");
            var i = n.dataCache[e];
            return (
                (i.diffMouseX = i.lastMouseX - i.startMouseX),
                (i.diffMouseY = i.lastMouseY - i.startMouseY),
                (i.diffMouseClientY = i.lastMouseClientY - i.startMouseClientY),
                (i.diffTime = i.lastTime - i.startTime),
                t === !0 ? ((i.startMousePos = i.lastMouseY), (i.lastMousePos = i.lastMouseY), (i.diffMousePos = i.diffMouseY)) : ((i.startMousePos = i.lastMouseX), (i.lastMousePos = i.lastMouseX), (i.diffMousePos = i.diffMouseX)),
                i
            );
        }),
        (this.isApproveStoredEventClick = function (e, t) {
            if (!n.dataCache[e]) return !0;
            var r = i.getStoredEventData(e, t),
                a = Math.abs(r.diffMousePos);
            return !(r.diffTime > 400) && !(a > 30);
        }),
        (this.clearStoredEventData = function (e) {
            n.dataCache[e] = null;
        }),
        (this.z_________CHECK_SUPPORT_FUNCTIONS_______ = function () {}),
        (this.isCanvasExists = function () {
            var e = jQuery('<canvas width="500" height="500" > </canvas>')[0];
            return "function" == typeof e.getContext;
        }),
        (this.isScrollbarExists = function () {
            var e = window.innerWidth > document.documentElement.clientWidth;
            return e;
        }),
        (this.isTouchDevice = function () {
            if (-1 !== n.isTouchDevice) return n.isTouchDevice;
            try {
                document.createEvent("TouchEvent"), (n.isTouchDevice = !0);
            } catch (e) {
                n.isTouchDevice = !1;
            }
            return n.isTouchDevice;
        }),
        (this.isRgbaSupported = function () {
            if (-1 !== n.isRgbaSupported) return n.isRgbaSupported;
            var e = document.getElementsByTagName("script")[0],
                t = e.style.color;
            try {
                e.style.color = "rgba(1,5,13,0.44)";
            } catch (e) {}
            var i = e.style.color != t;
            return (e.style.color = t), (n.isRgbaSupported = i), i;
        }),
        (this.z_________GENERAL_FUNCTIONS_______ = function () {}),
        (this.checkMinJqueryVersion = function (e) {
            for (var t = jQuery.fn.jquery.split("."), i = e.split("."), n = 0, r = t.length; r > n; n++) {
                var a = parseInt(t[n]),
                    s = parseInt(i[n]);
                if ("undefined" == typeof i[n]) return !0;
                if (s > a) return !1;
                if (a > s) return !0;
            }
            return !0;
        }),
        (this.getCssSizeParam = function (e) {
            return jQuery.isNumeric(e) ? e + "px" : e;
        }),
        (this.convertHexToRGB = function (e, t) {
            var i = e.replace("#", "");
            return i === e ? e : ((r = parseInt(i.substring(0, 2), 16)), (g = parseInt(i.substring(2, 4), 16)), (b = parseInt(i.substring(4, 6), 16)), (result = "rgba(" + r + "," + g + "," + b + "," + t + ")"), result);
        }),
        (this.timestampToString = function (e) {
            var t = new Date(e),
                i = t.getDate() + "/" + t.getMonth();
            return (i += " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds());
        }),
        (this.getArrTouches = function (e) {
            var t = [];
            return e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 0 && (t = e.originalEvent.touches), t;
        }),
        (this.getArrTouchPositions = function (e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var n = { pageX: e[i].pageX, pageY: e[i].pageY };
                t.push(n);
            }
            return t;
        }),
        (this.startTimeDebug = function () {
            n.starTime = jQuery.now();
        }),
        (this.showTimeDebug = function () {
            var e = jQuery.now(),
                t = e - n.starTime;
            debugLine({ "Time Passed": t }, !0);
        }),
        (this.initProgressIndicator = function (e, t, n) {
            switch (("bar" != e && 0 == i.isCanvasExists() && (e = "bar"), e)) {
                case "bar":
                    var r = new UGProgressBar();
                    r.putHidden(n, t);
                    break;
                default:
                case "pie":
                    var r = new UGProgressPie();
                    r.putHidden(n, t);
                    break;
                case "pie2":
                    t.type_fill = !0;
                    var r = new UGProgressPie();
                    r.putHidden(n, t);
            }
            return r;
        }),
        (this.setButtonMobileReady = function (e) {
            e.on("touchstart", function (e) {
                jQuery(this).addClass("ug-nohover");
            }),
                e.on("mousedown touchend", function (e) {
                    return e.stopPropagation(), e.stopImmediatePropagation(), !1;
                });
        }),
        (this.registerTheme = function (e) {
            n.arrThemes.push(e);
        }),
        (this.getArrThemes = function () {
            return n.arrThemes;
        }),
        (this.isThemeRegistered = function (e) {
            return -1 !== jQuery.inArray(e, n.arrThemes);
        }),
        (this.getFirstRegisteredTheme = function () {
            if (0 == n.arrThemes.length) return "";
            var e = n.arrThemes[0];
            return e;
        }),
        (this.isTimePassed = function (e, t) {
            if (!t) var t = 100;
            var i = jQuery.now();
            0 == n.timeCache.hasOwnProperty(e) ? (lastTime = 0) : (lastTime = n.timeCache[e]);
            var r = i - lastTime;
            return (n.timeCache[e] = i), !(t >= r);
        }),
        (this.whenContiniousEventOver = function (e, t, i) {
            if (!i) var i = 300;
            1 == n.timeCache.hasOwnProperty(e) && null != n.timeCache[e] && (clearTimeout(n.timeCache[e]), (n.timeCache[e] = null)), (n.timeCache[e] = setTimeout(t, i));
        }),
        (this.validateClickTouchstartEvent = function (e) {
            var t = !0,
                i = jQuery.now() - n.lastEventTime;
            return "click" == e && "touchstart" == n.lastEventType && 1e3 > i && (t = !1), (n.lastEventTime = jQuery.now()), (n.lastEventType = e), t;
        }),
        (this.addClassOnHover = function (e, t) {
            if (!t) var t = "ug-button-hover";
            e.hover(
                function () {
                    jQuery(this).addClass(t);
                },
                function () {
                    jQuery(this).removeClass(t);
                }
            );
        }),
        (this.destroyButton = function (e) {
            e.off("mouseenter"), e.off("mouseleave"), e.off("click"), e.off("touchstart"), e.off("touchend"), e.off("mousedown"), e.off("tap");
        }),
        (this.setButtonOnClick = function (e, t) {
            i.setButtonMobileReady(e),
                e.on("click touchstart", function (e) {
                    return (objThis = jQuery(this)), e.stopPropagation(), e.stopImmediatePropagation(), 0 == i.validateClickTouchstartEvent(e.type) || void t(objThis, e);
                });
        }),
        (this.setButtonOnTap = function (e, t) {
            e.on("tap", t),
                0 == i.isTouchDevice()
                    ? e.on("click", function (e) {
                          var t = jQuery(this);
                          return 0 == i.validateClickTouchstartEvent(e.type) || void t.trigger("tap");
                      })
                    : (e.on("touchstart", function (e) {
                          var t = jQuery(this);
                          t.addClass("ug-nohover"), (n.lastTouchStartElement = jQuery(this)), (n.lastEventTime = jQuery.now());
                      }),
                      e.on("touchend", function (e) {
                          var t = jQuery(this);
                          if (0 == t.is(n.lastTouchStartElement)) return !0;
                          if (!n.lastEventTime) return !0;
                          var i = jQuery.now() - n.lastEventTime;
                          return i > n.touchThreshold || void t.trigger("tap");
                      }));
        }),
        (this.loadJs = function (e, t) {
            t === !0 && (e = location.protocol + "//" + e);
            var i = document.createElement("script");
            i.src = e;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(i, n);
        }),
        (this.loadCss = function (e, t) {
            t === !0 && (e = location.protocol + "//" + e);
            var i = document.createElement("link");
            i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(i);
        }),
        (this.addEvent = function (e, t, i) {
            "undefined" != typeof e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i);
        }),
        (this.checkImagesLoaded = function (e, t, i) {
            function n(e, n) {
                r++,
                    "function" == typeof i &&
                        setTimeout(function () {
                            i(e, n);
                        }),
                    r == a &&
                        "function" == typeof t &&
                        setTimeout(function () {
                            t();
                        });
            }
            var r = 0,
                a = e.length;
            return 0 == a && t
                ? (t(), !1)
                : void setTimeout(function () {
                      for (var t = 0; a > t; t++) {
                          var i = e[t];
                          if (void 0 !== i.naturalWidth && 0 !== i.naturalWidth) n(e[t], !1);
                          else {
                              var r = jQuery("<img/>");
                              r.data("index", t),
                                  r.on("load", function () {
                                      var t = jQuery(this).data("index");
                                      n(e[t], !1);
                                  }),
                                  r.on("error", function () {
                                      var t = jQuery(this).data("index");
                                      n(e[t], !0);
                                  }),
                                  r.attr("src", i.src);
                          }
                      }
                  });
        }),
        (this.waitForWidth = function (e, t) {
            var i = e.width();
            return 0 != i
                ? (t(), !1)
                : void (n.handle = setInterval(function () {
                      (i = e.width()), 0 != i && (clearInterval(n.handle), t());
                  }, 300));
        }),
        (this.arrayShuffle = function (e) {
            if ("object" != typeof e) return e;
            for (var t, i, n = e.length; n; t = parseInt(Math.random() * n), i = e[--n], e[n] = e[t], e[t] = i);
            return e;
        }),
        (this.getObjectLength = function (e) {
            var t = 0;
            for (var i in e) t++;
            return t;
        }),
        (this.normalizePercent = function (e) {
            return 0 > e && (e = 0), e > 1 && (e = 1), e;
        }),
        (this.stripTags = function (e) {
            var t = e.replace(/(<([^>]+)>)/gi, "");
            return t;
        }),
        (this.escapeDoubleSlash = function (e) {
            return e.replace('"', '"');
        }),
        (this.htmlentitles = function (e) {
            var t = jQuery("<div/>").text(e).html();
            return t;
        }),
        (this.z_________END_GENERAL_FUNCTIONS_______ = function () {});
}
function UGThumbsGeneral() {
    function e(e, t) {
        var i = T[e],
            n = "";
        0 == j.customThumbs && (n = " ug-thumb-generated");
        var r = i.index + 1,
            a = "style='z-index:" + r + ";'",
            s = "<div class='ug-thumb-wrapper" + n + "' " + a + "></div>";
        if (1 == C.thumb_wrapper_as_link) {
            var o = i.link;
            "" == i.link && (o = "javascript:void(0)");
            var l = "";
            1 == C.thumb_link_newpage && i.link && (l = " target='_blank'");
            var s = "<a href='" + o + "'" + l + " class='ug-thumb-wrapper" + n + "'></a>";
        }
        var u = jQuery(s),
            d = i.objThumbImage;
        if (0 == j.customThumbs) {
            if (1 == C.thumb_show_loader && d) {
                var c = "ug-thumb-loader-dark";
                "bright" == C.thumb_loader_type && (c = "ug-thumb-loader-bright"), u.append("<div class='ug-thumb-loader " + c + "'></div>"), u.append("<div class='ug-thumb-error' style='display:none'></div>");
            }
            if (d) {
                if ((d.addClass("ug-thumb-image"), 1 == C.thumb_image_overlay_effect)) {
                    var g = d.clone().appendTo(u);
                    g.addClass("ug-thumb-image-overlay " + t).removeClass("ug-thumb-image"), g.fadeTo(0, 0), (i.objImageOverlay = g);
                }
                u.append(d);
            }
        }
        return (
            j.isEffectBorder && u.append("<div class='ug-thumb-border-overlay'></div>"),
            j.isEffectOverlay && u.append("<div class='ug-thumb-overlay'></div>"),
            x.append(u),
            j.customThumbs && j.funcSetCustomThumbHtml(u, i),
            (T[e].objThumbWrapper = u),
            u
        );
    }
    function t(e, t, i, n) {
        var r = { width: e + "px", height: t + "px" },
            a = { width: e - j.thumbInnerReduce + "px", height: t - j.thumbInnerReduce + "px" },
            s = ".ug-thumb-loader, .ug-thumb-error, .ug-thumb-border-overlay, .ug-thumb-overlay";
        i ? (n !== !0 && i.css(r), i.find(s).css(a)) : (x.children(".ug-thumb-wrapper").css(r), x.find(s).css(a));
    }
    function i(e, t, i, n) {
        if (!n) var n = !1;
        E.isFakeFullscreen() && (n = !0);
        var r = e.children(".ug-thumb-border-overlay"),
            a = {};
        (a["border-width"] = t + "px"),
            0 != t && (a["border-color"] = i),
            n && n === !0 ? (r.css(a), 0 == t ? r.hide() : r.show()) : (0 == t ? r.stop().fadeOut(C.thumb_transition_duration) : r.show().stop().fadeIn(C.thumb_transition_duration), l(r, a));
    }
    function n(e, t, i) {
        var n = e.children(".ug-thumb-overlay"),
            r = C.thumb_transition_duration;
        i && i === !0 && (r = 0), t ? n.stop(!0).fadeTo(r, j.colorOverlayOpacity) : n.stop(!0).fadeTo(r, 0);
    }
    function r(e, t, i) {
        var n = e.children("img.ug-thumb-image"),
            r = e.children("img.ug-thumb-image-overlay"),
            a = C.thumb_transition_duration;
        i && i === !0 && (a = 0), t ? r.stop(!0).fadeTo(a, 1) : (n.fadeTo(0, 1), r.stop(!0).fadeTo(a, 0));
    }
    function a(e, t) {
        if ((j.isEffectBorder && i(e, C.thumb_selected_border_width, C.thumb_selected_border_color, t), j.isEffectOverlay)) {
            var a = 1 == C.thumb_overlay_reverse;
            n(e, a, t);
        }
        j.isEffectImage && r(e, !1, t), I.trigger(S.events.SETSELECTEDSTYLE, e);
    }
    function s(e) {
        var t = S.getItemByThumb(e);
        return (t.isLoaded = !0), (t.isThumbImageLoaded = !1), 1 == j.customThumbs ? (I.trigger(S.events.IMAGELOADERROR, e), !0) : (e.children(".ug-thumb-loader").hide(), void e.children(".ug-thumb-error").show());
    }
    function o(e) {
        if (C.thumb_round_corners_radius <= 0) return !1;
        var t = { "border-radius": C.thumb_round_corners_radius + "px" };
        e ? (e.css(t), e.find(".ug-thumb-border-overlay").css(t)) : x.find(".ug-thumb-wrapper, .ug-thumb-wrapper .ug-thumb-border-overlay").css(t);
    }
    function l(e, t) {
        e.stop(!0).animate(t, { duration: C.thumb_transition_duration, easing: C.thumb_transition_easing, queue: !1 });
    }
    function u(e) {
        1 == p(e) ? a(e, !0, "redraw") : S.setThumbNormalStyle(e, !0, "redraw");
    }
    function d(e, i, n) {
        if (1 == C.thumb_fixed_size) P.scaleImageCoverParent(i, e);
        else {
            "height" == C.thumb_resize_by ? P.scaleImageByHeight(i, C.thumb_height) : P.scaleImageByWidth(i, C.thumb_width);
            var r = P.getElementSize(i);
            P.placeElement(i, 0, 0), t(r.width, r.height, e);
        }
        e.children(".ug-thumb-loader").hide(), i.show(), 0 == C.thumb_image_overlay_effect ? i.fadeTo(0, 1) : (1 == C.thumb_image_overlay_effect && c(i), i.fadeTo(0, 0), u(e)), I.trigger(S.events.AFTERPLACEIMAGE, e);
    }
    function c(e) {
        var t = e.siblings(".ug-thumb-image-overlay");
        if (0 == t.length) return !1;
        var i = P.getElementSize(e),
            n = { width: i.width + "px", height: i.height + "px", left: i.left + "px", top: i.top + "px" };
        t.css(n), 0 == j.customThumbs && t.fadeTo(0, 1);
    }
    function g() {
        var e = "",
            t = C.thumb_image_overlay_type.split(",");
        for (var i in t) {
            var n = t[i];
            switch (n) {
                case "bw":
                    e += " ug-bw-effect";
                    break;
                case "blur":
                    e += " ug-blur-effect";
                    break;
                case "sepia":
                    e += " ug-sepia-effect";
            }
        }
        return e;
    }
    function p(e) {
        return !!e.hasClass("ug-thumb-selected");
    }
    function h(e, i) {
        i = jQuery(i);
        var n = (S.getItemByThumb(i), P.getElementSize(i));
        t(n.width, n.height, i, !0), u(i);
    }
    function m(e) {
        return 1 == j.touchEnabled ? (objThumbs.off("mouseenter").off("mouseleave"), !0) : void (0 == p(e) && S.setThumbOverStyle(e));
    }
    function f(e) {
        return 1 == j.touchEnabled || void (0 == p(e) && S.setThumbNormalStyle(e, !1));
    }
    function _(e, t) {
        if (!t) var t = !1;
        var i = jQuery(e),
            n = i.parents(".ug-thumb-wrapper");
        return 0 != n.parent().length && ((objItem = S.getItemByThumb(n)), (1 != objItem.isLoaded || t !== !1) && (S.triggerImageLoadedEvent(n, i), void (1 == j.customThumbs ? I.trigger(S.events.PLACEIMAGE, [n, i]) : d(n, i, objItem))));
    }
    function v(e, t, i) {
        (objItem = S.getItemByThumb(t)), (objItem.isLoaded = !0), (objItem.isThumbImageLoaded = !0);
        var n = P.getImageOriginalSize(i);
        (objItem.thumbWidth = n.width), (objItem.thumbHeight = n.height), (objItem.thumbRatioByWidth = n.width / n.height), (objItem.thumbRatioByHeight = n.height / n.width), t.addClass("ug-thumb-ratio-set");
    }
    var b,
        y,
        w,
        T,
        x,
        S = this,
        I = jQuery(S),
        E = new UniteGalleryMain(),
        P = new UGFunctions();
    (this.type = { GET_THUMBS_ALL: "all", GET_THUMBS_RATIO: "ratio", GET_THUMBS_NO_RATIO: "no_ratio", GET_THUMBS_NEW: "new" }),
        (this.events = {
            SETOVERSTYLE: "thumbmouseover",
            SETNORMALSTYLE: "thumbmouseout",
            SETSELECTEDSTYLE: "thumbsetselected",
            PLACEIMAGE: "thumbplaceimage",
            AFTERPLACEIMAGE: "thumb_after_place_image",
            IMAGELOADERROR: "thumbimageloaderror",
            THUMB_IMAGE_LOADED: "thumb_image_loaded",
        });
    var C = {
            thumb_width: 88,
            thumb_height: 50,
            thumb_fixed_size: !0,
            thumb_resize_by: "height",
            thumb_border_effect: !0,
            thumb_border_width: 0,
            thumb_border_color: "#000000",
            thumb_over_border_width: 0,
            thumb_over_border_color: "#d9d9d9",
            thumb_selected_border_width: 1,
            thumb_selected_border_color: "#d9d9d9",
            thumb_round_corners_radius: 0,
            thumb_color_overlay_effect: !0,
            thumb_overlay_color: "#000000",
            thumb_overlay_opacity: 0.4,
            thumb_overlay_reverse: !1,
            thumb_image_overlay_effect: !1,
            thumb_image_overlay_type: "bw",
            thumb_transition_duration: 200,
            thumb_transition_easing: "easeOutQuad",
            thumb_show_loader: !0,
            thumb_loader_type: "dark",
            thumb_wrapper_as_link: !1,
            thumb_link_newpage: !1,
        },
        j = {
            touchEnabled: !1,
            num_thumbs_checking: 0,
            customThumbs: !1,
            funcSetCustomThumbHtml: null,
            isEffectBorder: !1,
            isEffectOverlay: !1,
            isEffectImage: !1,
            colorOverlayOpacity: 1,
            thumbInnerReduce: 0,
            allowOnResize: !0,
            classNewThumb: "ug-new-thumb",
        },
        A = { timeout_thumb_check: 100, thumb_max_check_times: 600, eventSizeChange: "thumb_size_change" };
    (this.init = function (e, t) {
        (y = e.getObjects()),
            (E = e),
            (b = jQuery(e)),
            (w = y.g_objWrapper),
            (T = y.g_arrItems),
            (C = jQuery.extend(C, t)),
            (j.isEffectBorder = C.thumb_border_effect),
            (j.isEffectOverlay = C.thumb_color_overlay_effect),
            (j.isEffectImage = C.thumb_image_overlay_effect);
    }),
        (this._____________EXTERNAL_SETTERS__________ = function () {}),
        (this.setHtmlThumbs = function (t, i) {
            if (((x = t), 1 == j.isEffectImage)) var n = g();
            if (i !== !0) for (var r = E.getNumItems(), a = 0; r > a; a++) e(a, n);
            else {
                var s = S.getThumbs();
                s.removeClass(j.classNewThumb);
                var o = E.getNewAddedItemsIndexes();
                jQuery.each(o, function (t, i) {
                    var r = e(i, n);
                    r.addClass(j.classNewThumb);
                });
            }
        }),
        (this.setThumbNormalStyle = function (e, t, a) {
            if ((1 == j.customThumbs && e.removeClass("ug-thumb-over"), j.isEffectBorder && i(e, C.thumb_border_width, C.thumb_border_color, t), j.isEffectOverlay)) {
                var s = 1 != C.thumb_overlay_reverse;
                n(e, s, t);
            }
            j.isEffectImage && r(e, !0, t), I.trigger(S.events.SETNORMALSTYLE, e);
        }),
        (this.setThumbOverStyle = function (e) {
            if ((1 == j.customThumbs && e.addClass("ug-thumb-over"), j.isEffectBorder && i(e, C.thumb_over_border_width, C.thumb_over_border_color), j.isEffectOverlay)) {
                var t = 1 == C.thumb_overlay_reverse;
                n(e, t);
            }
            1 == j.isEffectImage && r(e, !1), I.trigger(S.events.SETOVERSTYLE, e);
        }),
        (this.setHtmlProperties = function (e) {
            if (!e) var e = S.getThumbs();
            if (
                (0 == j.customThumbs && (1 == C.thumb_fixed_size && t(C.thumb_width, C.thumb_height, e), o(e)),
                e.each(function () {
                    var e = jQuery(this);
                    u(e);
                }),
                j.isEffectOverlay && C.thumb_overlay_color)
            ) {
                var i = {};
                if (P.isRgbaSupported()) {
                    var n = P.convertHexToRGB(C.thumb_overlay_color, C.thumb_overlay_opacity);
                    i["background-color"] = n;
                } else (i["background-color"] = C.thumb_overlay_color), (j.colorOverlayOpacity = C.thumb_overlay_opacity);
                e.find(".ug-thumb-overlay").css(i);
            }
        }),
        (this.setThumbSelected = function (e) {
            return 1 == j.customThumbs && e.removeClass("ug-thumb-over"), 1 == p(e) || (e.addClass("ug-thumb-selected"), void a(e));
        }),
        (this.setThumbUnselected = function (e) {
            e.removeClass("ug-thumb-selected"), S.setThumbNormalStyle(e, !1, "set unselected");
        }),
        (this.setOptions = function (e) {
            C = jQuery.extend(C, e);
        }),
        (this.setThumbInnerReduce = function (e) {
            j.thumbInnerReduce = e;
        }),
        (this.setCustomThumbs = function (e, t, i) {
            if (((j.customThumbs = !0), "function" != typeof e)) throw new Error("The argument should be function");
            (j.funcSetCustomThumbHtml = e),
                -1 == jQuery.inArray("overlay", t) && (j.isEffectOverlay = !1),
                -1 == jQuery.inArray("border", t) && (j.isEffectBorder = !1),
                (j.isEffectImage = !1),
                i && i.allow_onresize === !1 && (j.allowOnResize = !1);
        }),
        (this._____________EXTERNAL_GETTERS__________ = function () {}),
        (this.getOptions = function () {
            return C;
        }),
        (this.getNumThumbs = function () {
            var e = T.length;
            return e;
        }),
        (this.getThumbImage = function (e) {
            var t = e.find(".ug-thumb-image");
            return t;
        }),
        (this.getThumbByIndex = function (e) {
            var t = S.getThumbs();
            if (e >= t.length || 0 > e) throw new Error("Wrong thumb index");
            var i = jQuery(t[e]);
            return i;
        }),
        (this.getThumbs = function (e) {
            var t = ".ug-thumb-wrapper",
                i = ".ug-thumb-ratio-set";
            switch (e) {
                default:
                case S.type.GET_THUMBS_ALL:
                    var n = x.children(t);
                    break;
                case S.type.GET_THUMBS_NO_RATIO:
                    var n = x.children(t).not(i);
                    break;
                case S.type.GET_THUMBS_RATIO:
                    var n = x.children(t + i);
                    break;
                case S.type.GET_THUMBS_NEW:
                    var n = x.children("." + j.classNewThumb);
            }
            return n;
        }),
        (this.getItemByThumb = function (e) {
            var t = e.data("index");
            void 0 === t && (t = e.index());
            var i = T[t];
            return i;
        }),
        (this.isThumbLoaded = function (e) {
            var t = S.getItemByThumb(e);
            return t.isLoaded;
        }),
        (this.getGlobalThumbSize = function () {
            var e = { width: C.thumb_width, height: C.thumb_height };
            return e;
        }),
        (this._____________EXTERNAL_OTHERS__________ = function () {}),
        (this.initEvents = function () {
            var e = ".ug-thumb-wrapper";
            1 == j.allowOnResize && w.on(A.eventSizeChange, h),
                I.on(S.events.THUMB_IMAGE_LOADED, v),
                x.on("touchstart", e, function () {
                    (j.touchEnabled = !0), x.off("mouseenter").off("mouseleave");
                }),
                x.on("mouseenter", e, function (e) {
                    var t = jQuery(this);
                    m(t);
                }),
                x.on("mouseleave", e, function (e) {
                    var t = jQuery(this);
                    f(t);
                });
        }),
        (this.destroy = function () {
            var e = ".ug-thumb-wrapper";
            x.off("touchstart", e), w.off(A.eventSizeChange), x.off("mouseenter", e), x.off("mouseleave", e), I.off(S.events.THUMB_IMAGE_LOADED);
        }),
        (this.loadThumbsImages = function () {
            var e = x.find(".ug-thumb-image");
            P.checkImagesLoaded(e, null, function (e, t) {
                if (0 == t) _(e, !0);
                else {
                    var i = jQuery(e).parent();
                    s(i);
                }
            });
        }),
        (this.triggerImageLoadedEvent = function (e, t) {
            I.trigger(S.events.THUMB_IMAGE_LOADED, [e, t]);
        }),
        (this.hideThumbs = function () {
            x.find(".ug-thumb-wrapper").hide();
        });
}
function UGThumbsStrip() {
    function e(e, i) {
        (I = e.getObjects()),
            (O = e),
            O.attachThumbsPanel("strip", z),
            (S = jQuery(e)),
            (E = I.g_objWrapper),
            (P = I.g_arrItems),
            (N = jQuery.extend(N, i)),
            (L = N.strip_vertical_type),
            1 == L && ((N = jQuery.extend(N, G)), (N = jQuery.extend(N, i)), (i.thumb_resize_by = "width")),
            H.init(e, i),
            t();
    }
    function t() {
        var e = H.getOptions();
        (D.isNotFixedThumbs = e.thumb_fixed_size === !1), (L = N.strip_vertical_type);
    }
    function n() {
        H.setHtmlProperties(),
            a(),
            l(),
            o(),
            0 == D.isRunOnce && (1 == N.strip_control_touch && ((M = new UGTouchThumbsControl()), M.init(z)), 1 == N.strip_control_avia && ((A = new UGAviaControl()), A.init(z)), m(), H.loadThumbsImages(), y()),
            (D.isRunOnce = !0);
    }
    function r(e) {
        (R.stripSize = e),
            0 == L ? (R.stripActiveSize = R.stripSize - N.strip_padding_left - N.strip_padding_right) : (R.stripActiveSize = R.stripSize - N.strip_padding_top - N.strip_padding_bottom),
            R.stripActiveSize < 0 && (R.stripActiveSize = 0);
    }
    function a() {
        var e = j.children(".ug-thumb-wrapper"),
            t = jQuery(e[0]),
            i = t.outerWidth(),
            n = t.outerHeight(),
            a = H.getOptions();
        0 == L
            ? ((R.thumbSize = i), 1 == a.thumb_fixed_size ? (R.thumbSecondSize = n) : (R.thumbSecondSize = a.thumb_height), r(C.width()), (R.stripInnerSize = j.width()))
            : ((R.thumbSize = n), 1 == a.thumb_fixed_size ? (R.thumbSecondSize = i) : (R.thumbSecondSize = a.thumb_width), r(C.height()), (R.stripInnerSize = j.height()));
    }
    function s(e) {
        0 == L ? j.width(e) : j.height(e), (R.stripInnerSize = e), m(), jQuery(z).trigger(z.events.INNER_SIZE_CHANGE);
    }
    function o() {
        var e = j.children(".ug-thumb-wrapper"),
            t = 0,
            n = 0;
        for (0 == L && (n = N.strip_padding_top), i = 0; i < e.length; i++) {
            var r = jQuery(e[i]);
            if (1 == D.isNotFixedThumbs) {
                if (((objItem = H.getItemByThumb(r)), 0 == objItem.isLoaded)) continue;
                r.show();
            }
            k.placeElement(r, t, n), 0 == L ? (t += r.outerWidth() + N.strip_space_between_thumbs) : (n += r.outerHeight() + N.strip_space_between_thumbs);
        }
        if (0 == L) var a = t - N.strip_space_between_thumbs;
        else var a = n - N.strip_space_between_thumbs;
        s(a);
    }
    function l() {
        if (0 == L) {
            var e = R.thumbSecondSize,
                t = {};
            t.height = e + "px";
            var i = {};
            i.height = e + "px";
        } else {
            var n = R.thumbSecondSize,
                t = {};
            t.width = n + "px";
            var i = {};
            i.width = n + "px";
        }
        C.css(t), j.css(i);
    }
    function u(e) {
        var t = z.getInnerStripPos(),
            i = t + e;
        (i = z.fixInnerStripLimits(i)), z.positionInnerStrip(i, !0);
    }
    function d(e) {
        var t = x(e),
            i = -1 * t.min;
        (i = z.fixInnerStripLimits(i)), z.positionInnerStrip(i, !0);
    }
    function c(e) {
        var t = x(e),
            i = -1 * t.max + R.stripSize;
        (i = z.fixInnerStripLimits(i)), z.positionInnerStrip(i, !0);
    }
    function g(e) {
        if (0 == w()) return !1;
        var t = T(),
            i = x(e);
        if (i.min < t.minPosThumbs) {
            var n = e.prev();
            d(n.length ? n : e);
        } else if (i.max > t.maxPosThumbs) {
            var r = e.next();
            c(r.length ? r : e);
        }
    }
    function p() {
        var e = O.getSelectedItem();
        if (null == e) return !0;
        var t = e.objThumbWrapper;
        t && g(t);
    }
    function h() {
        if (0 == w()) return !1;
        var e = z.getInnerStripPos(),
            t = z.fixInnerStripLimits(e);
        e != t && z.positionInnerStrip(t, !0);
    }
    function m() {
        var e = w();
        1 == e ? (A && A.enable(), M && M.enable()) : (A && A.disable(), M && M.disable());
    }
    function f() {
        return !w() && void (0 == L ? k.placeElement(j, N.strip_thumbs_align, 0) : k.placeElement(j, 0, N.strip_thumbs_align));
    }
    function _(e) {
        if (z.isTouchMotionActive()) {
            var t = M.isSignificantPassed();
            if (1 == t) return !0;
        }
        var i = H.getItemByThumb(e);
        O.selectItem(i);
    }
    function v() {
        clearTimeout(D.handle),
            (D.handle = setTimeout(function () {
                o();
            }, 50));
    }
    function b() {
        var e = O.getSelectedItem();
        H.setThumbSelected(e.objThumbWrapper), g(e.objThumbWrapper);
    }
    function y() {
        H.initEvents();
        var e = C.find(".ug-thumb-wrapper");
        e.on("click touchend", function (e) {
            var t = jQuery(this);
            _(t);
        }),
            S.on(O.events.ITEM_CHANGE, b),
            D.isNotFixedThumbs && jQuery(H).on(H.events.AFTERPLACEIMAGE, v);
    }
    function w() {
        return R.stripInnerSize > R.stripActiveSize;
    }
    function T() {
        var e = {},
            t = z.getInnerStripPos();
        return (e.minPosThumbs = -1 * t + 1), (e.maxPosThumbs = -1 * t + R.stripSize - 1), e;
    }
    function x(e) {
        var t = {},
            i = e.position();
        return 0 == L ? ((t.min = i.left), (t.max = i.left + R.thumbSize)) : ((t.min = i.top), (t.max = i.top + R.thumbSize)), t;
    }
    var S,
        I,
        E,
        P,
        C,
        j,
        A,
        M,
        z = this,
        O = new UniteGalleryMain(),
        k = new UGFunctions(),
        L = !1,
        H = new UGThumbsGeneral(),
        k = new UGFunctions(),
        N = {
            strip_vertical_type: !1,
            strip_thumbs_align: "left",
            strip_space_between_thumbs: 6,
            strip_thumb_touch_sensetivity: 15,
            strip_scroll_to_thumb_duration: 500,
            strip_scroll_to_thumb_easing: "easeOutCubic",
            strip_control_avia: !0,
            strip_control_touch: !0,
            strip_padding_top: 0,
            strip_padding_bottom: 0,
            strip_padding_left: 0,
            strip_padding_right: 0,
        },
        D = { isRunOnce: !1, is_placed: !1, isNotFixedThumbs: !1, handle: null },
        R = { stripSize: 0, stripActiveSize: 0, stripInnerSize: 0, thumbSize: 0, thumbSecondSize: 0 };
    this.events = { STRIP_MOVE: "stripmove", INNER_SIZE_CHANGE: "size_change" };
    var G = { strip_thumbs_align: "top", thumb_resize_by: "width" };
    (this.setHtml = function (e) {
        if (!e) {
            var e = E;
            null != N.parent_container && (e = N.parent_container);
        }
        e.append("<div class='ug-thumbs-strip'><div class='ug-thumbs-strip-inner'></div></div>"),
            (C = e.children(".ug-thumbs-strip")),
            (j = C.children(".ug-thumbs-strip-inner")),
            H.setHtmlThumbs(j),
            1 == D.isNotFixedThumbs && H.hideThumbs();
    }),
        (this.destroy = function () {
            var e = C.find(".ug-thumb-wrapper");
            e.off("click"), e.off("touchend"), S.off(O.events.ITEM_CHANGE), jQuery(H).off(H.events.AFTERPLACEIMAGE), M && M.destroy(), A && A.destroy(), H.destroy();
        }),
        (this.________EXTERNAL_GENERAL___________ = function () {}),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.run = function () {
            n();
        }),
        (this.positionInnerStrip = function (e, t) {
            if (void 0 === t) var t = !1;
            if (0 == L) var i = { left: e + "px" };
            else var i = { top: e + "px" };
            0 == t
                ? (j.css(i), z.triggerStripMoveEvent())
                : (z.triggerStripMoveEvent(),
                  j.stop(!0).animate(i, {
                      duration: N.strip_scroll_to_thumb_duration,
                      easing: N.strip_scroll_to_thumb_easing,
                      queue: !1,
                      progress: function () {
                          z.triggerStripMoveEvent();
                      },
                      always: function () {
                          z.triggerStripMoveEvent();
                      },
                  }));
        }),
        (this.triggerStripMoveEvent = function () {
            jQuery(z).trigger(z.events.STRIP_MOVE);
        }),
        (this.isTouchMotionActive = function () {
            if (!M) return !1;
            var e = M.isTouchActive();
            return e;
        }),
        (this.isItemThumbVisible = function (e) {
            var t = e.objThumbWrapper,
                i = t.position(),
                n = -1 * z.getInnerStripPos();
            if (0 == L)
                var r = n + R.stripSize,
                    a = i.left,
                    s = i.left + t.width();
            else
                var r = n + R.stripSize,
                    a = i.top,
                    s = i.top + t.height();
            var o = !1;
            return s >= n && r >= a && (o = !0), o;
        }),
        (this.getInnerStripPos = function () {
            return 0 == L ? j.position().left : j.position().top;
        }),
        (this.getInnerStripLimits = function () {
            var e = {};
            return 0 == L ? (e.maxPos = N.strip_padding_left) : (e.maxPos = N.strip_padding_top), (e.minPos = -(R.stripInnerSize - R.stripActiveSize)), e;
        }),
        (this.fixInnerStripLimits = function (e) {
            var t = z.getInnerStripLimits();
            return e > t.maxPos && (e = t.maxPos), e < t.minPos && (e = t.minPos), e;
        }),
        (this.scrollForeward = function () {
            u(-R.stripSize);
        }),
        (this.scrollBack = function () {
            u(R.stripSize);
        }),
        (this.________EXTERNAL_SETTERS___________ = function () {}),
        (this.setOptions = function (e) {
            (N = jQuery.extend(N, e)), H.setOptions(e), t();
        }),
        (this.setSizeVertical = function (e) {
            if (0 == L) throw new Error("setSizeVertical error, the strip size is not vertical");
            var t = R.thumbSecondSize,
                i = {};
            (i.width = t + "px"), (i.height = e + "px"), C.css(i), r(e);
            var n = {};
            (n.width = t + "px"), (n.left = "0px"), (n.top = "0px"), j.css(n), (D.is_placed = !0), m();
        }),
        (this.setSizeHorizontal = function (e) {
            if (1 == L) throw new Error("setSizeHorizontal error, the strip size is not horizontal");
            var t = R.thumbSecondSize + N.strip_padding_top + N.strip_padding_bottom,
                i = {};
            (i.width = e + "px"), (i.height = t + "px"), C.css(i), r(e);
            var n = N.strip_padding_left,
                a = {};
            (a.height = t + "px"), (a.left = n + "px"), (a.top = "0px"), j.css(a), (D.is_placed = !0), m();
        }),
        (this.setPosition = function (e, t, i, n) {
            k.placeElement(C, e, t, i, n);
        }),
        (this.resize = function (e) {
            0 == L ? (C.width(e), (R.stripActiveSize = e - N.strip_padding_left - N.strip_padding_right)) : (C.height(e), (R.stripActiveSize = e - N.strip_padding_top - N.strip_padding_bottom)), r(e), m(), h(), f(), p();
        }),
        (this.setThumbUnselected = function (e) {
            H.setThumbUnselected(e);
        }),
        (this.setCustomThumbs = function (e) {
            H.setCustomThumbs(e);
        }),
        (this.________EXTERNAL_GETTERS___________ = function () {}),
        (this.getObjects = function () {
            var e = H.getOptions(),
                t = jQuery.extend(N, e),
                i = { g_gallery: O, g_objGallery: S, g_objWrapper: E, g_arrItems: P, g_objStrip: C, g_objStripInner: j, g_aviaControl: A, g_touchThumbsControl: M, isVertical: L, g_options: t, g_thumbs: H };
            return i;
        }),
        (this.getObjThumbs = function () {
            return H;
        }),
        (this.getSelectedThumb = function () {
            var e = O.getSelectedItemIndex();
            return -1 == e ? null : H.getThumbByIndex(e);
        }),
        (this.getSizeAndPosition = function () {
            var e = k.getElementSize(C);
            return e;
        }),
        (this.getHeight = function () {
            var e = C.outerHeight();
            return e;
        }),
        (this.getWidth = function () {
            var e = C.outerWidth();
            return e;
        }),
        (this.getSizes = function () {
            return R;
        }),
        (this.isVertical = function () {
            return L;
        }),
        (this.isPlaced = function () {
            return D.is_placed;
        }),
        (this.isMoveEnabled = function () {
            var e = w();
            return e;
        });
}
function UGTouchThumbsControl() {
    function e() {
        var e = jQuery.now(),
            t = {};
        return (t.passedTime = S.lastTime - S.startTime), (t.lastActiveTime = e - S.buttonReleaseTime), (t.passedDistance = S.lastPos - S.startPos), (t.passedDistanceAbs = Math.abs(t.passedDistance)), t;
    }
    function t() {
        x.thumb_touch_slowFactor = T.normalizeSetting(5e-5, 0.01, 1, 100, y.strip_thumb_touch_sensetivity, !0);
    }
    function i(e) {
        return 0 == w ? T.getMousePosition(e).pageX : T.getMousePosition(e).pageY;
    }
    function n(e) {
        var t = S.mousePos - e,
            i = S.innerPos - t,
            n = h.getInnerStripLimits();
        if (i > n.maxPos) {
            var r = i - n.maxPos;
            i = n.maxPos + r / 3;
        }
        if (i < n.minPos) {
            var r = n.minPos - i;
            i = n.minPos - r / 3;
        }
        h.positionInnerStrip(i);
    }
    function r(e) {
        var t = h.getInnerStripPos();
        (S.mousePos = e), (S.innerPos = t), (S.lastPortionPos = t), (S.lastDeltaTime = 0), (S.lastDeltaPos = 0), (S.startTime = jQuery.now()), (S.startPos = S.innerPos), (S.lastTime = S.startTime), (S.lastPos = S.startPos), (S.speed = 0);
    }
    function a() {
        var e = jQuery.now(),
            t = e - S.lastTime;
        t >= x.touch_portion_time &&
            ((S.lastDeltaTime = e - S.lastTime), S.lastDeltaTime > x.touch_portion_time && (S.lastDeltaTime = x.touch_portion_time), (S.lastDeltaPos = S.lastPos - S.lastPortionPos), (S.lastPortionPos = S.lastPos), (S.lastTime = e));
    }
    function s() {
        var e = x.thumb_touch_slowFactor,
            t = x.minDeltaTime,
            i = x.minPath,
            n = h.getInnerStripPos(),
            r = jQuery.now(),
            a = r - S.lastTime,
            s = n - S.lastPortionPos;
        t > a && S.lastDeltaTime > 0 && ((a = S.lastDeltaTime), (s = S.lastDeltaPos + s)), t > a && (a = t);
        var l = s > 0 ? 1 : -1,
            u = 0;
        a > 0 && (u = s / a);
        var d = ((u * u) / (2 * e)) * l;
        Math.abs(d) <= i && (d = 0);
        var c = h.getInnerStripPos(),
            g = c + d,
            p = h.fixInnerStripLimits(g),
            m = h.getInnerStripLimits(),
            f = x.limitsBreakAddition,
            _ = !1,
            v = p;
        if ((g > m.maxPos && ((_ = !0), (p = f), f > g && (p = g)), g < m.minPos)) {
            _ = !0;
            var y = m.minPos - f;
            (p = y), g > y && (p = g);
        }
        var T = p - c,
            I = Math.abs(Math.round(u / e));
        if ((0 != d && (I = (I * T) / d), c != p)) {
            var E = { left: p + "px" };
            1 == w && (E = { top: p + "px" }), b.animate(E, { duration: I, easing: x.animationEasing, queue: !0, progress: o });
        }
        if (1 == _) {
            var P = x.returnAnimateSpeed,
                C = { left: v + "px" };
            1 == w && (C = { top: v + "px" }), b.animate(C, { duration: P, easing: x.returnAnimationEasing, queue: !0, progress: o });
        }
    }
    function o() {
        (S.lastPos = h.getInnerStripPos()), h.triggerStripMoveEvent();
    }
    function l() {
        return 1 == S.loop_active || ((S.loop_active = !0), void (S.handle = setInterval(a, 10)));
    }
    function u(e) {
        if (0 == S.loop_active) return !0;
        if (e) {
            var t = i(e);
            s(t);
        }
        (S.loop_active = !1), (S.handle = clearInterval(S.handle));
    }
    function d(e) {
        return 0 == S.isControlEnabled || ((S.buttonReleaseTime = jQuery.now()), 0 == S.touch_active ? (u(e), !0) : (e.preventDefault(), (S.touch_active = !1), u(e), void v.removeClass("ug-dragging")));
    }
    function c(e) {
        if (0 == S.isControlEnabled) return !0;
        e.preventDefault(), (S.touch_active = !0);
        var t = i(e);
        b.stop(!0), r(t), l(), v.addClass("ug-dragging");
    }
    function g(e) {
        if (0 == S.isControlEnabled) return !0;
        if (0 == S.touch_active) return !0;
        if ((e.preventDefault(), 0 == e.buttons)) return (S.touch_active = !1), u(e), !0;
        var t = i(e);
        (S.lastPos = h.getInnerStripPos()), n(t), a();
    }
    function p() {
        v.bind("mousedown touchstart", c), jQuery(window).add("body").bind("mouseup touchend", d), jQuery("body").bind("mousemove touchmove", g);
    }
    var h,
        m,
        f,
        _,
        v,
        b,
        y,
        w,
        T = new UGFunctions(),
        x = { touch_portion_time: 200, thumb_touch_slowFactor: 0, minDeltaTime: 70, minPath: 10, limitsBreakAddition: 30, returnAnimateSpeed: 500, animationEasing: "easeOutCubic", returnAnimationEasing: "easeOutCubic" },
        S = {
            touch_active: !1,
            loop_active: !1,
            mousePos: 0,
            innerPos: 0,
            startPos: 0,
            startTime: 0,
            lastTime: 0,
            buttonReleaseTime: 0,
            lastPos: 0,
            lastPortionPos: 0,
            lastDeltaTime: 0,
            lastDeltaPos: 0,
            speed: 0,
            handle: "",
            touchEnabled: !1,
            isControlEnabled: !0,
        };
    (this.enable = function () {
        S.isControlEnabled = !0;
    }),
        (this.disable = function () {
            S.isControlEnabled = !1;
        }),
        (this.init = function (e) {
            (h = e), (_ = e.getObjects()), (m = _.g_gallery), (f = _.g_objGallery), (v = _.g_objStrip), (b = _.g_objStripInner), (y = _.g_options), (w = _.isVertical), t(), p();
        }),
        (this.isSignificantPassed = function () {
            var t = e();
            return t.passedTime > 300 || t.passedDistanceAbs > 30;
        }),
        (this.isTouchActive = function () {
            if (1 == S.touch_active) return !0;
            if (1 == b.is(":animated")) return !0;
            var t = e();
            return t.lastActiveTime < 50;
        }),
        (this.destroy = function () {
            v.unbind("mousedown"), v.unbind("touchstart"), jQuery(window).add("body").unbind("mouseup").unbind("touchend"), jQuery("body").unbind("mousemove").unbind("touchmove");
        });
}
function UGPanelsBase() {
    function e(e, t) {
        switch (n.orientation) {
            case "right":
            case "left":
                var i = { left: e + "px" };
                break;
            case "top":
            case "bottom":
                var i = { top: e + "px" };
        }
        a.stop(!0).animate(i, {
            duration: 300,
            easing: "easeInOutQuad",
            queue: !1,
            complete: function () {
                t && t();
            },
        });
    }
    function t(e) {
        switch (n.orientation) {
            case "right":
            case "left":
                g.placeElement(a, e, null);
                break;
            case "top":
            case "bottom":
                g.placeElement(a, null, e);
        }
    }
    function i() {
        o.trigger(r.events.FINISH_MOVE);
    }
    var n,
        r,
        a,
        s,
        o,
        l,
        u,
        d = new UniteGalleryMain(),
        c = this,
        g = new UGFunctions();
    (this.init = function (e, t, i, a, l) {
        (n = t), (r = i), (d = e), (s = a), (o = l), (u = jQuery(d));
    }),
        (this.setHtml = function (e) {
            if (((a = e), "strip" == n.panelType)) var t = s.strippanel_enable_handle;
            else var t = s.gridpanel_enable_handle;
            if ((1 == t && ((l = new UGPanelHandle()), l.init(r, a, s, n.panelType, d), l.setHtml()), n.isDisabledAtStart === !0)) {
                var i = "<div class='ug-overlay-disabled'></div>";
                a.append(i),
                    setTimeout(function () {
                        a.children(".ug-overlay-disabled").hide();
                    }, n.disabledAtStartTimeout);
            }
        }),
        (this.placeElements = function () {
            l && l.placeHandle();
        }),
        (this.initEvents = function () {
            l &&
                (l.initEvents(),
                u.on(d.events.SLIDER_ACTION_START, function () {
                    l.hideHandle();
                }),
                u.on(d.events.SLIDER_ACTION_END, function () {
                    l.showHandle();
                }));
        }),
        (this.destroy = function () {
            l && (l.destroy(), u.off(d.events.SLIDER_ACTION_START), u.off(d.events.SLIDER_ACTION_END));
        }),
        (this.openPanel = function (s) {
            if (!s) var s = !1;
            return !a.is(":animated") && 0 != n.isClosed && ((n.isClosed = !1), o.trigger(r.events.OPEN_PANEL), void (s === !1 ? e(n.originalPos, i) : (t(n.originalPos), i())));
        }),
        (this.closePanel = function (s) {
            if (!s) var s = !1;
            if (a.is(":animated")) return !1;
            if (1 == n.isClosed) return !1;
            var l = c.getClosedPanelDest();
            (n.isClosed = !0), o.trigger(r.events.CLOSE_PANEL), s === !1 ? e(l, i) : (t(l), i());
        }),
        (this.setClosedState = function (e) {
            (n.originalPos = e), o.trigger(r.events.CLOSE_PANEL), (n.isClosed = !0);
        }),
        (this.setOpenedState = function (e) {
            o.trigger(r.events.OPEN_PANEL), (n.isClosed = !1);
        }),
        (this.getClosedPanelDest = function () {
            var e,
                t = g.getElementSize(a);
            switch (n.orientation) {
                case "left":
                    (n.originalPos = t.left), (e = -n.panelWidth);
                    break;
                case "right":
                    n.originalPos = t.left;
                    var i = d.getSize();
                    e = i.width;
                    break;
                case "top":
                    (n.originalPos = t.top), (e = -n.panelHeight);
                    break;
                case "bottom":
                    n.originalPos = t.top;
                    var i = d.getSize();
                    e = i.height;
            }
            return e;
        }),
        (this.isPanelClosed = function () {
            return n.isClosed;
        }),
        (this.setDisabledAtStart = function (e) {
            return !(0 >= e) && ((n.isDisabledAtStart = !0), void (n.disabledAtStartTimeout = e));
        });
}
function UGPanelHandle() {
    function e() {
        o.removeClass("ug-button-hover");
    }
    function t() {
        o.addClass("ug-button-closed");
    }
    function i() {
        o.removeClass("ug-button-closed");
    }
    function n(e) {
        return e.stopPropagation(), e.stopImmediatePropagation(), 0 == l.validateClickTouchstartEvent(e.type) || void (s.isPanelClosed() ? s.openPanel() : s.closePanel());
    }
    function r() {
        var e = s.getOrientation();
        switch (e) {
            case "right":
            case "left":
                "top" != u.panel_handle_align && "bottom" != u.panel_handle_align && (u.panel_handle_align = "top");
                break;
            case "bottom":
                "left" != u.panel_handle_align && "right" != u.panel_handle_align && (u.panel_handle_align = "left");
                break;
            case "top":
                "left" != u.panel_handle_align && "right" != u.panel_handle_align && (u.panel_handle_align = "right");
        }
    }
    var a,
        s,
        o,
        l = new UGFunctions(),
        u = { panel_handle_align: "top", panel_handle_offset: 0, panel_handle_skin: 0 };
    (this.init = function (e, t, i, n, r) {
        switch (((s = e), (a = t), n)) {
            case "grid":
                (u.panel_handle_align = i.gridpanel_handle_align), (u.panel_handle_offset = i.gridpanel_handle_offset), (u.panel_handle_skin = i.gridpanel_handle_skin);
                break;
            case "strip":
                (u.panel_handle_align = i.strippanel_handle_align), (u.panel_handle_offset = i.strippanel_handle_offset), (u.panel_handle_skin = i.strippanel_handle_skin);
                break;
            default:
                throw new Error("Panel handle error: wrong panel type: " + n);
        }
        var o = r.getOptions(),
            l = o.gallery_skin;
        "" == u.panel_handle_skin && (u.panel_handle_skin = l);
    }),
        (this.setHtml = function () {
            var e = s.getOrientation(),
                t = "ug-panel-handle-tip";
            switch (e) {
                case "right":
                    t += " ug-handle-tip-left";
                    break;
                case "left":
                    t += " ug-handle-tip-right";
                    break;
                case "bottom":
                    t += " ug-handle-tip-top";
                    break;
                case "top":
                    t += " ug-handle-tip-bottom";
            }
            a.append("<div class='" + t + " ug-skin-" + u.panel_handle_skin + "'></div>"), (o = a.children(".ug-panel-handle-tip"));
        }),
        (this.initEvents = function () {
            l.addClassOnHover(o),
                o.bind("click touchstart", n),
                jQuery(s).on(s.events.OPEN_PANEL, function () {
                    e(), i();
                }),
                jQuery(s).on(s.events.CLOSE_PANEL, function () {
                    e(), t();
                });
        }),
        (this.destroy = function () {
            l.destroyButton(o), jQuery(s).off(s.events.OPEN_PANEL), jQuery(s).off(s.events.CLOSE_PANEL);
        }),
        (this.placeHandle = function () {
            var e = l.getElementSize(o);
            r();
            var t = s.getOrientation();
            switch (t) {
                case "left":
                    l.placeElement(o, "right", u.panel_handle_align, -e.width);
                    break;
                case "right":
                    l.placeElement(o, -e.width, u.panel_handle_align, 0, u.panel_handle_offset);
                    break;
                case "top":
                    l.placeElement(o, u.panel_handle_align, "bottom", u.panel_handle_offset, -e.height);
                    break;
                case "bottom":
                    l.placeElement(o, u.panel_handle_align, "top", u.panel_handle_offset, -e.height);
                    break;
                default:
                    throw new Error("Wrong panel orientation: " + t);
            }
        }),
        (this.hideHandle = function () {
            1 == o.is(":visible") && o.hide();
        }),
        (this.showHandle = function () {
            0 == o.is(":visible") && o.show();
        });
}
function UGStripPanel() {
    function e(e, t) {
        (S = e), (_ = jQuery(S)), (C = jQuery.extend(C, t));
        var i = !1;
        1 == C.strippanel_vertical_type && ((C = jQuery.extend(C, j)), (i = !0)), 0 == C.strippanel_enable_buttons && ((C = jQuery.extend(C, A)), (i = !0)), 1 == i && (C = jQuery.extend(C, t));
        var n = S.getOptions(),
            r = n.gallery_skin;
        "" == C.strippanel_buttons_skin && (C.strippanel_buttons_skin = r), (v = S.getElement()), P.init(S, M, T, C, x), (E = new UGThumbsStrip()), E.init(S, C);
    }
    function t() {
        if (0 == C.strippanel_vertical_type) {
            if (0 == M.panelWidth) throw new Error("Strip panel error: The width not set, please set width");
        } else if (0 == M.panelHeight) throw new Error("Strip panel error: The height not set, please set height");
        if (null == M.orientation) throw new Error("Wrong orientation, please set panel orientation before run");
        return !0;
    }
    function i() {
        return (1 != M.isFirstRun || 0 != t()) && (E.run(), o(), d(), f(), (M.isFirstRun = !1), void p());
    }
    function n(e) {
        if (!e) var e = v;
        if ((e.append("<div class='ug-strip-panel'></div>"), (b = e.children(".ug-strip-panel")), 1 == C.strippanel_enable_buttons)) {
            var t = "ug-strip-arrow-left",
                i = "ug-strip-arrow-right";
            1 == C.strippanel_vertical_type && ((t = "ug-strip-arrow-up"), (i = "ug-strip-arrow-down")),
                b.append("<div class='ug-strip-arrow " + t + " ug-skin-" + C.strippanel_buttons_skin + "'><div class='ug-strip-arrow-tip'></div></div>"),
                b.append("<div class='ug-strip-arrow " + i + " ug-skin-" + C.strippanel_buttons_skin + "'><div class='ug-strip-arrow-tip'></div></div>");
        }
        P.setHtml(b), E.setHtml(b), 1 == C.strippanel_enable_buttons && ((w = b.children("." + t)), (y = b.children("." + i))), r();
    }
    function r() {
        "" != C.strippanel_background_color && b.css("background-color", C.strippanel_background_color);
    }
    function a() {
        var e = E.getHeight(),
            t = M.panelWidth;
        if (y) {
            w.height(e), y.height(e);
            var i = w.children(".ug-strip-arrow-tip");
            I.placeElement(i, "center", "middle");
            var n = y.children(".ug-strip-arrow-tip");
            I.placeElement(n, "center", "middle");
        }
        var r = e + C.strippanel_padding_top + C.strippanel_padding_bottom;
        b.width(t), b.height(r), (M.panelHeight = r);
        var a = t - C.strippanel_padding_left - C.strippanel_padding_right;
        if (y) {
            var s = y.outerWidth();
            a = a - 2 * s - 2 * C.strippanel_padding_buttons;
        }
        E.resize(a);
    }
    function s() {
        var e = E.getWidth(),
            t = M.panelHeight;
        if (y) {
            w.width(e), y.width(e);
            var i = w.children(".ug-strip-arrow-tip");
            I.placeElement(i, "center", "middle");
            var n = y.children(".ug-strip-arrow-tip");
            I.placeElement(n, "center", "middle");
        }
        var r = e + C.strippanel_padding_left + C.strippanel_padding_right;
        b.width(r), b.height(t), (M.panelWidth = r);
        var a = t - C.strippanel_padding_top - C.strippanel_padding_bottom;
        if (y) {
            var s = y.outerHeight();
            a = a - 2 * s - 2 * C.strippanel_padding_buttons;
        }
        E.resize(a);
    }
    function o() {
        0 == C.strippanel_vertical_type ? a() : s();
    }
    function l() {
        y && (I.placeElement(w, "left", "top", C.strippanel_padding_left, C.strippanel_padding_top), I.placeElement(y, "right", "top", C.strippanel_padding_right, C.strippanel_padding_top));
        var e = C.strippanel_padding_left;
        y && (e += y.outerWidth() + C.strippanel_padding_buttons), E.setPosition(e, C.strippanel_padding_top);
    }
    function u() {
        y && (I.placeElement(w, "left", "top", C.strippanel_padding_left, C.strippanel_padding_top), I.placeElement(y, "left", "bottom", C.strippanel_padding_left, C.strippanel_padding_bottom));
        var e = C.strippanel_padding_top;
        y && (e += y.outerHeight() + C.strippanel_padding_buttons), E.setPosition(C.strippanel_padding_left, e);
    }
    function d() {
        0 == C.strippanel_vertical_type ? l() : u(), P.placeElements();
    }
    function c(e) {
        return !!I.isButtonDisabled(e) || void ("advance_item" == C.strippanel_buttons_role ? S.nextItem() : E.scrollForeward());
    }
    function g(e) {
        return !!I.isButtonDisabled(e) || void ("advance_item" == C.strippanel_buttons_role ? S.prevItem() : E.scrollBack());
    }
    function p() {
        if (!y) return !0;
        if (0 == E.isMoveEnabled()) return I.disableButton(w), I.disableButton(y), !0;
        var e = E.getInnerStripLimits(),
            t = E.getInnerStripPos();
        t >= e.maxPos ? I.disableButton(w) : I.enableButton(w), t <= e.minPos ? I.disableButton(y) : I.enableButton(y);
    }
    function h() {
        p();
    }
    function m() {
        S.isLastItem() ? I.disableButton(y) : I.enableButton(y), S.isFirstItem() ? I.disableButton(w) : I.enableButton(w);
    }
    function f() {
        if (1 == M.isEventsInited) return !1;
        if (((M.isEventsInited = !0), y))
            if ((I.addClassOnHover(y, "ug-button-hover"), I.addClassOnHover(w, "ug-button-hover"), I.setButtonOnClick(w, g), I.setButtonOnClick(y, c), "advance_item" != C.strippanel_buttons_role))
                jQuery(E).on(E.events.STRIP_MOVE, h), jQuery(E).on(E.events.INNER_SIZE_CHANGE, p), _.on(S.events.SIZE_CHANGE, p);
            else {
                var e = S.getOptions();
                0 == e.gallery_carousel && jQuery(S).on(S.events.ITEM_CHANGE, m);
            }
        P.initEvents();
    }
    var _,
        v,
        b,
        y,
        w,
        T = this,
        x = jQuery(this),
        S = new UniteGalleryMain(),
        I = new UGFunctions(),
        E = new UGThumbsStrip(),
        P = new UGPanelsBase();
    this.events = { FINISH_MOVE: "gridpanel_move_finish", OPEN_PANEL: "open_panel", CLOSE_PANEL: "close_panel" };
    var C = {
            strippanel_vertical_type: !1,
            strippanel_padding_top: 8,
            strippanel_padding_bottom: 8,
            strippanel_padding_left: 0,
            strippanel_padding_right: 0,
            strippanel_enable_buttons: !0,
            strippanel_buttons_skin: "",
            strippanel_padding_buttons: 2,
            strippanel_buttons_role: "scroll_strip",
            strippanel_enable_handle: !0,
            strippanel_handle_align: "top",
            strippanel_handle_offset: 0,
            strippanel_handle_skin: "",
            strippanel_background_color: "",
        },
        j = { strip_vertical_type: !0, strippanel_padding_left: 8, strippanel_padding_right: 8, strippanel_padding_top: 0, strippanel_padding_bottom: 0 },
        A = { strippanel_padding_left: 8, strippanel_padding_right: 8, strippanel_padding_top: 8, strippanel_padding_bottom: 8 },
        M = { panelType: "strip", panelWidth: 0, panelHeight: 0, isEventsInited: !1, isClosed: !1, orientation: null, originalPos: null, isFirstRun: !0 };
    (this.destroy = function () {
        y && (I.destroyButton(y), I.destroyButton(w), jQuery(E).off(E.events.STRIP_MOVE), jQuery(S).off(S.events.ITEM_CHANGE), jQuery(S).off(S.events.SIZE_CHANGE)), P.destroy(), E.destroy();
    }),
        (this.getOrientation = function () {
            return M.orientation;
        }),
        (this.setOrientation = function (e) {
            M.orientation = e;
        }),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.run = function () {
            i();
        }),
        (this.setHtml = function (e) {
            n(e);
        }),
        (this.getElement = function () {
            return b;
        }),
        (this.getSize = function () {
            var e = I.getElementSize(b);
            return e;
        }),
        (this.setWidth = function (e) {
            M.panelWidth = e;
        }),
        (this.setHeight = function (e) {
            M.panelHeight = e;
        }),
        (this.resize = function (e) {
            T.setWidth(e), o(), d();
        }),
        (this.__________Functions_From_Base_____ = function () {}),
        (this.isPanelClosed = function () {
            return P.isPanelClosed();
        }),
        (this.getClosedPanelDest = function () {
            return P.getClosedPanelDest();
        }),
        (this.openPanel = function (e) {
            P.openPanel(e);
        }),
        (this.closePanel = function (e) {
            P.closePanel(e);
        }),
        (this.setOpenedState = function (e) {
            P.setOpenedState(e);
        }),
        (this.setClosedState = function (e) {
            P.setClosedState(e);
        }),
        (this.setCustomThumbs = function (e) {
            E.setCustomThumbs(e);
        }),
        (this.setDisabledAtStart = function (e) {
            P.setDisabledAtStart(e);
        });
}
function UGGridPanel() {
    function e(e, i) {
        (P = e),
            t(),
            i && i.vertical_scroll && (M.gridpanel_vertical_scroll = i.vertical_scroll),
            (M = jQuery.extend(M, i)),
            1 == k.isHorType ? ((M = jQuery.extend(M, O)), (M = jQuery.extend(M, i))) : 1 == M.gridpanel_vertical_scroll && ((M = jQuery.extend(M, z)), (M = jQuery.extend(M, i)), (M.grid_panes_direction = "bottom"));
        var n = P.getOptions(),
            r = n.gallery_skin;
        "" == M.gridpanel_arrows_skin && (M.gridpanel_arrows_skin = r);
        var a = e.getObjects();
        (w = a.g_objWrapper), A.init(P, k, I, M, E), (j = new UGThumbsGrid()), j.init(P, M);
    }
    function t() {
        if (null == k.orientation) throw new Error("Wrong orientation, please set panel orientation before run");
    }
    function i() {
        t(), a(), j.run(), l(), u(), y(), d();
    }
    function n() {
        w.append("<div class='ug-grid-panel'></div>"),
            (T = w.children(".ug-grid-panel")),
            k.isHorType
                ? (T.append("<div class='grid-arrow grid-arrow-left-hortype ug-skin-" + M.gridpanel_arrows_skin + "'></div>"),
                  T.append("<div class='grid-arrow grid-arrow-right-hortype ug-skin-" + M.gridpanel_arrows_skin + "'></div>"),
                  (S = T.children(".grid-arrow-left-hortype")),
                  (x = T.children(".grid-arrow-right-hortype")))
                : 0 == M.gridpanel_vertical_scroll
                ? (T.append("<div class='grid-arrow grid-arrow-left ug-skin-" + M.gridpanel_arrows_skin + "'></div>"),
                  T.append("<div class='grid-arrow grid-arrow-right ug-skin-" + M.gridpanel_arrows_skin + "'></div>"),
                  (S = T.children(".grid-arrow-left")),
                  (x = T.children(".grid-arrow-right")))
                : (T.append("<div class='grid-arrow grid-arrow-up ug-skin-" + M.gridpanel_arrows_skin + "'></div>"),
                  T.append("<div class='grid-arrow grid-arrow-down ug-skin-" + M.gridpanel_arrows_skin + "'></div>"),
                  (S = T.children(".grid-arrow-up")),
                  (x = T.children(".grid-arrow-down"))),
            A.setHtml(T),
            S.fadeTo(0, 0),
            x.fadeTo(0, 0),
            j.setHtml(T),
            r();
    }
    function r() {
        "" != M.gridpanel_background_color && T.css("background-color", M.gridpanel_background_color);
    }
    function a() {
        "center" == M.gridpanel_grid_align && (M.gridpanel_grid_align = "middle");
    }
    function s() {
        var e = M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom,
            t = k.panelHeight - e;
        if (0 == M.gridpanel_arrows_always_on) {
            var i = j.getNumPanesEstimationByHeight(t);
            if (1 == i) return t;
        }
        var n = C.getElementSize(x),
            r = n.height,
            e = r + M.gridpanel_arrows_padding_vert;
        return 1 == M.gridpanel_vertical_scroll && (e *= 2), (e += M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom), (t = k.panelHeight - e);
    }
    function o() {
        var e = M.gridpanel_padding_border_left + M.gridpanel_padding_border_right,
            t = k.panelWidth - e;
        if (0 == M.gridpanel_arrows_always_on) {
            var i = j.getNumPanesEstimationByWidth(t);
            if (1 == i) return t;
        }
        var n = C.getElementSize(x),
            r = n.width;
        return (e += 2 * (r + M.gridpanel_arrows_padding_hor)), (t = k.panelWidth - e);
    }
    function l() {
        var e = !1;
        if (1 == M.gridpanel_arrows_always_on) e = !0;
        else {
            var t = j.getNumPanes();
            t > 1 && (e = !0);
        }
        1 == e ? (x.show().fadeTo(0, 1), S.show().fadeTo(0, 1), (k.arrowsVisible = !0)) : (x.hide(), S.hide(), (k.arrowsVisible = !1));
    }
    function u() {
        var e = j.getSize();
        1 == k.isHorType ? (k.panelHeight = e.height + M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom) : (k.panelWidth = e.width + M.gridpanel_padding_border_left + M.gridpanel_padding_border_right),
            C.setElementSize(T, k.panelWidth, k.panelHeight);
    }
    function d() {
        return 1 != k.isEventsInited && ((k.isEventsInited = !0), S && (C.addClassOnHover(S), j.attachPrevPaneButton(S)), x && (C.addClassOnHover(x), j.attachNextPaneButton(x)), void A.initEvents());
    }
    function c() {
        var e = M.gridpanel_padding_border_left;
        return e;
    }
    function g() {
        var e = M.gridpanel_grid_align,
            t = 0;
        switch (e) {
            case "top":
                t = M.gridpanel_padding_border_top;
                break;
            case "bottom":
                t = M.gridpanel_padding_border_bottom;
        }
        var i = c(),
            n = j.getElement();
        C.placeElement(n, i, e, 0, t);
    }
    function p() {
        var e,
            t,
            i,
            n,
            r = C.getElementSize(S),
            a = j.getSize();
        switch (M.gridpanel_grid_align) {
            default:
            case "top":
                e = M.gridpanel_padding_border_top + r.height + M.gridpanel_arrows_padding_vert;
                break;
            case "middle":
                e = "middle";
                break;
            case "bottom":
                e = k.panelHeight - a.height - r.height - M.gridpanel_padding_border_bottom - M.gridpanel_arrows_padding_vert;
        }
        var s = c(),
            o = j.getElement();
        C.placeElement(o, s, e);
        var a = j.getSize();
        switch (M.gridpanel_arrows_align_vert) {
            default:
            case "center":
            case "middle":
                (t = (a.top - r.height) / 2), (i = a.bottom + (k.panelHeight - a.bottom - r.height) / 2), (n = 0);
                break;
            case "grid":
                (t = a.top - r.height - M.gridpanel_arrows_padding_vert_vert), (i = a.bottom + M.gridpanel_arrows_padding_vert), (n = 0);
                break;
            case "border":
            case "borders":
                (t = M.gridpanel_padding_border_top), (i = "bottom"), (n = M.gridpanel_padding_border_bottom);
        }
        C.placeElement(S, "center", t), C.placeElement(x, "center", i, 0, n);
    }
    function h() {
        1 == k.arrowsVisible ? p() : g();
    }
    function m() {
        var e,
            t,
            i,
            n,
            r = C.getElementSize(S),
            a = j.getSize(),
            s = M.gridpanel_padding_border_top;
        switch (M.gridpanel_grid_align) {
            case "middle":
                switch (M.gridpanel_arrows_align_vert) {
                    default:
                        var o = a.height + M.gridpanel_arrows_padding_vert + r.height;
                        s = (k.panelHeight - o) / 2;
                        break;
                    case "border":
                    case "borders":
                        var l = k.panelHeight - r.height - M.gridpanel_padding_border_bottom;
                        s = (l - a.height) / 2;
                }
                break;
            case "bottom":
                var o = a.height + r.height + M.gridpanel_arrows_padding_vert;
                s = k.panelHeight - o - M.gridpanel_padding_border_bottom;
        }
        var u = j.getElement(),
            d = c();
        C.placeElement(u, d, s);
        var a = j.getSize();
        switch (M.gridpanel_arrows_align_vert) {
            default:
            case "center":
            case "middle":
                (e = a.bottom + (k.panelHeight - a.bottom - r.height) / 2), (i = 0);
                break;
            case "grid":
                (e = a.bottom + M.gridpanel_arrows_padding_vert), (i = 0);
                break;
            case "border":
            case "borders":
                (e = "bottom"), (i = M.gridpanel_padding_border_bottom);
        }
        (t = -r.width / 2 - M.gridpanel_space_between_arrows / 2), C.placeElement(S, "center", e, t, i);
        var n = Math.abs(t);
        C.placeElement(x, "center", e, n, i);
    }
    function f() {
        1 == k.arrowsVisible ? m() : g();
    }
    function _() {
        var e,
            t,
            i,
            n,
            r = C.getElementSize(S),
            a = j.getSize();
        switch (M.gridpanel_grid_align) {
            default:
            case "left":
                e = M.gridpanel_padding_border_left + M.gridpanel_arrows_padding_hor + r.width;
                break;
            case "middle":
            case "center":
                e = "center";
                break;
            case "right":
                e = k.panelWidth - a.width - r.width - M.gridpanel_padding_border_right - M.gridpanel_arrows_padding_hor;
        }
        var s = j.getElement();
        switch ((C.placeElement(s, e, M.gridpanel_padding_border_top), (a = j.getSize()), M.gridpanel_arrows_align_vert)) {
            default:
            case "center":
            case "middle":
                n = (a.height - r.height) / 2 + a.top;
                break;
            case "top":
                n = M.gridpanel_padding_border_top + M.gridpanel_arrows_padding_vert;
                break;
            case "bottom":
                n = k.panelHeight - M.gridpanel_padding_border_bottom - M.gridpanel_arrows_padding_vert - r.height;
        }
        switch (M.gridpanel_arrows_align_hor) {
            default:
            case "borders":
                (t = M.gridpanel_padding_border_left), (i = k.panelWidth - M.gridpanel_padding_border_right - r.width);
                break;
            case "grid":
                (t = a.left - M.gridpanel_arrows_padding_hor - r.width), (i = a.right + M.gridpanel_arrows_padding_hor);
                break;
            case "center":
                (t = (a.left - r.width) / 2), (i = a.right + (k.panelWidth - a.right - r.width) / 2);
        }
        C.placeElement(S, t, n), C.placeElement(x, i, n);
    }
    function v() {
        var e,
            t = j.getSize();
        switch (M.gridpanel_grid_align) {
            default:
            case "left":
                e = M.gridpanel_padding_border_left;
                break;
            case "middle":
            case "center":
                e = "center";
                break;
            case "right":
                e = k.panelWidth - t.width - M.gridpanel_padding_border_right;
        }
        var i = j.getElement();
        C.placeElement(i, e, M.gridpanel_padding_border_top);
    }
    function b() {
        1 == k.arrowsVisible ? _() : v();
    }
    function y() {
        0 == k.isHorType ? (1 == M.gridpanel_vertical_scroll ? h() : f()) : b(), A.placeElements();
    }
    var w,
        T,
        x,
        S,
        I = this,
        E = jQuery(this),
        P = new UniteGalleryMain(),
        C = new UGFunctions(),
        j = new UGThumbsGrid(),
        A = new UGPanelsBase();
    this.events = { FINISH_MOVE: "gridpanel_move_finish", OPEN_PANEL: "open_panel", CLOSE_PANEL: "close_panel" };
    var M = {
            gridpanel_vertical_scroll: !0,
            gridpanel_grid_align: "middle",
            gridpanel_padding_border_top: 10,
            gridpanel_padding_border_bottom: 4,
            gridpanel_padding_border_left: 10,
            gridpanel_padding_border_right: 10,
            gridpanel_arrows_skin: "",
            gridpanel_arrows_align_vert: "middle",
            gridpanel_arrows_padding_vert: 4,
            gridpanel_arrows_align_hor: "center",
            gridpanel_arrows_padding_hor: 10,
            gridpanel_space_between_arrows: 20,
            gridpanel_arrows_always_on: !1,
            gridpanel_enable_handle: !0,
            gridpanel_handle_align: "top",
            gridpanel_handle_offset: 0,
            gridpanel_handle_skin: "",
            gridpanel_background_color: "",
        },
        z = { gridpanel_grid_align: "middle", gridpanel_padding_border_top: 2, gridpanel_padding_border_bottom: 2 },
        O = { gridpanel_grid_align: "center" },
        k = { panelType: "grid", isHorType: !1, arrowsVisible: !1, panelHeight: 0, panelWidth: 0, originalPosX: null, isEventsInited: !1, isClosed: !1, orientation: null };
    (this.destroy = function () {
        S && C.destroyButton(S), x && C.destroyButton(x), A.destroy(), j.destroy();
    }),
        (this.getOrientation = function () {
            return k.orientation;
        }),
        (this.setOrientation = function (e) {
            switch (((k.orientation = e), e)) {
                case "right":
                case "left":
                    k.isHorType = !1;
                    break;
                case "top":
                case "bottom":
                    k.isHorType = !0;
                    break;
                default:
                    throw new Error("Wrong grid panel orientation: " + e);
            }
        }),
        (this.setHeight = function (e) {
            if (1 == k.isHorType) throw new Error("setHeight is not appliable to this orientatio (" + k.orientation + "). Please use setWidth");
            k.panelHeight = e;
            var t = s();
            j.setMaxHeight(t);
        }),
        (this.setWidth = function (e) {
            if (0 == k.isHorType) throw new Error("setWidth is not appliable to this orientatio (" + k.orientation + "). Please use setHeight");
            k.panelWidth = e;
            var t = o();
            j.setMaxWidth(t);
        }),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.setHtml = function () {
            n();
        }),
        (this.run = function () {
            i();
        }),
        (this.getElement = function () {
            return T;
        }),
        (this.getSize = function () {
            var e = C.getElementSize(T);
            return e;
        }),
        (this.__________Functions_From_Base_____ = function () {}),
        (this.isPanelClosed = function () {
            return A.isPanelClosed();
        }),
        (this.getClosedPanelDest = function () {
            return A.getClosedPanelDest();
        }),
        (this.openPanel = function (e) {
            A.openPanel(e);
        }),
        (this.closePanel = function (e) {
            A.closePanel(e);
        }),
        (this.setOpenedState = function (e) {
            A.setOpenedState(e);
        }),
        (this.setClosedState = function (e) {
            A.setClosedState(e);
        }),
        (this.setDisabledAtStart = function (e) {
            A.setDisabledAtStart(e);
        });
}
function UGThumbsGrid() {
    function e(e, t, i) {
        if (((H = e.getObjects()), (F = e), F.attachThumbsPanel("grid", B), (L = jQuery(e)), (N = H.g_objWrapper), (D = H.g_arrItems), i === !0 && (V.isTilesMode = !0), (V.numThumbs = D.length), c(t), 1 == V.isTilesMode)) {
            X.setFixedMode(), X.setApproveClickFunction(P), X.init(e, U);
            var n = X.getOptions();
            (V.tileMaxHeight = n.tile_height), (V.tileMaxWidth = n.tile_width), (Y = X.getObjThumbs());
        } else (t.thumb_fixed_size = !0), Y.init(e, t);
    }
    function t(e) {
        var t = N;
        e && (t = e),
            t.append("<div class='ug-thumbs-grid'><div class='ug-thumbs-grid-inner'></div></div>"),
            (R = t.children(".ug-thumbs-grid")),
            (G = R.children(".ug-thumbs-grid-inner")),
            1 == V.isTilesMode ? X.setHtml(G) : Y.setHtmlThumbs(G);
    }
    function n() {
        if (0 == V.isHorizontal) {
            if (0 == V.gridHeight) throw new Error("You must set height before run.");
        } else if (0 == V.gridWidth) throw new Error("You must set width before run.");
    }
    function r() {
        var e = F.getSelectedItem();
        if ((n(), 1 == V.isFirstTimeRun)) k(), 1 == V.isTilesMode ? (s(), u(), X.run()) : (Y.setHtmlProperties(), u(), Y.loadThumbsImages());
        else if (1 == V.isTilesMode) {
            var t = s();
            1 == t && (u(), X.run());
        }
        if ((m(), 1 == V.isFirstTimeRun && V.isTilesMode)) {
            var i = Y.getThumbs();
            i.each(function (e, t) {
                N.trigger(V.eventSizeChange, jQuery(t));
            }),
                i.fadeTo(0, 1);
        }
        null != e && d(e.index), W.trigger(B.events.PANE_CHANGE, V.currentPane), (V.isFirstTimeRun = !1);
    }
    function a() {
        if (1 == V.isTilesMode) var e = X.getGlobalTileSize();
        else var e = Y.getGlobalThumbSize();
        return e;
    }
    function s() {
        if (0 == V.isTilesMode) throw new Error("Dynamic size can be set only in tiles mode");
        var e = !1,
            t = F.isMobileMode(),
            i = V.spaceBetweenCols;
        1 == t ? ((V.spaceBetweenCols = U.grid_space_between_mobile), (V.spaceBetweenRows = U.grid_space_between_mobile)) : ((V.spaceBetweenCols = U.grid_space_between_cols), (V.spaceBetweenRows = U.grid_space_between_rows)),
            V.spaceBetweenCols != i && (e = !0);
        var n = a(),
            r = n.width,
            s = V.tileMaxWidth,
            o = Q.getNumItemsInSpace(V.gridWidth, V.tileMaxWidth, V.spaceBetweenCols);
        return o < U.grid_min_cols && (s = Q.getItemSizeInSpace(V.gridWidth, U.grid_min_cols, V.spaceBetweenCols)), X.setTileSizeOptions(s), s != r && (e = !0), e;
    }
    function o() {
        var e = a(),
            t = e.height,
            i = V.gridWidth,
            n = U.grid_num_rows * t + (U.grid_num_rows - 1) * V.spaceBetweenRows + 2 * U.grid_padding;
        (V.gridHeight = n), Q.setElementSize(R, i, n), Q.setElementSize(G, i, n), (V.innerWidth = i), (V.innerHeight = n);
    }
    function l() {
        var e = a(),
            t = e.width,
            i = U.grid_num_cols * t + (U.grid_num_cols - 1) * V.spaceBetweenCols + 2 * U.grid_padding,
            n = V.gridHeight;
        (V.gridWidth = i), Q.setElementSize(R, i, n), Q.setElementSize(G, i, n), (V.innerWidth = i), (V.innerHeight = n);
    }
    function u() {
        0 == V.isHorizontal ? l() : o();
    }
    function d(e) {
        var t = S(e);
        return -1 != t && void B.gotoPane(t, "scroll");
    }
    function c(e) {
        (U = jQuery.extend(U, e)),
            Y.setOptions(e),
            (V.isNavigationVertical = "top" == U.grid_panes_direction || "bottom" == U.grid_panes_direction),
            (V.spaceBetweenCols = U.grid_space_between_cols),
            (V.spaceBetweenRows = U.grid_space_between_rows);
    }
    function g() {
        var e = G.children(".ug-thumb-wrapper"),
            t = 0,
            n = 0,
            r = 0,
            a = 0,
            s = 0,
            o = 0;
        (V.innerWidth = 0), (V.numPanes = 1), (V.arrPanes = []), (V.numThumbsInPane = 0), V.arrPanes.push(a);
        var l = e.length;
        for (i = 0; i < l; i++) {
            var u = jQuery(e[i]);
            Q.placeElement(u, t, n);
            var d = u.outerWidth(),
                c = u.outerHeight();
            t > s && (s = t);
            var g = n + c;
            g > o && (o = g);
            var p = s + d;
            p > V.innerWidth && (V.innerWidth = p),
                (t += d + V.spaceBetweenCols),
                r++,
                r >= U.grid_num_cols && ((n += c + V.spaceBetweenRows), (t = a), (r = 0)),
                1 == V.numPanes && V.numThumbsInPane++,
                n + c > V.gridHeight &&
                    ((n = 0), (a = V.innerWidth + V.spaceBetweenCols), (t = a), (r = 0), 1 == V.isMaxHeight && 1 == V.numPanes && ((V.gridHeight = o), R.height(V.gridHeight)), i < l - 1 && (V.numPanes++, V.arrPanes.push(a)));
        }
        G.width(V.innerWidth), 1 == V.isMaxHeight && 1 == V.numPanes && ((V.gridHeight = o), R.height(o));
    }
    function p() {
        var e = G.children(".ug-thumb-wrapper"),
            t = 0,
            n = 0,
            r = 0,
            a = 0,
            s = 0,
            o = 0;
        (V.innerWidth = 0), (V.numPanes = 1), (V.arrPanes = []), (V.numThumbsInPane = 0), V.arrPanes.push(s);
        var l = e.length;
        for (i = 0; i < l; i++) {
            var u = jQuery(e[i]);
            Q.placeElement(u, t, n);
            var d = u.outerWidth(),
                c = u.outerHeight();
            t += d + V.spaceBetweenCols;
            var g = n + c;
            g > r && (r = g), a++, a >= U.grid_num_cols && ((n += c + V.spaceBetweenRows), (t = s), (a = 0)), 1 == V.numPanes && V.numThumbsInPane++, (g = n + c);
            var p = o + V.gridHeight;
            g > p &&
                (1 == V.isMaxHeight && 1 == V.numPanes && ((V.gridHeight = r), R.height(V.gridHeight), (p = V.gridHeight)), (n = p + V.spaceBetweenRows), (o = n), (s = 0), (t = s), (a = 0), i < l - 1 && (V.numPanes++, V.arrPanes.push(n)));
        }
        G.height(r), (V.innerHeight = r), 1 == V.isMaxHeight && 1 == V.numPanes && ((V.gridHeight = r), R.height(r));
    }
    function h() {
        var e = G.children(".ug-thumb-wrapper"),
            t = U.grid_padding,
            n = U.grid_padding,
            r = n,
            a = t,
            s = 0,
            o = 0,
            l = 0,
            u = 0,
            d = 0;
        (V.innerWidth = 0), (V.numPanes = 1), (V.arrPanes = []), (V.numThumbsInPane = 0), V.arrPanes.push(t - U.grid_padding);
        var c = e.length;
        for (i = 0; i < c; i++) {
            var g = jQuery(e[i]),
                p = g.outerWidth(),
                h = g.outerHeight();
            a - t + p > V.gridWidth &&
                (d++,
                (r = 0),
                d >= U.grid_num_rows
                    ? ((d = 0),
                      (t = a),
                      (r = n),
                      (l = 0),
                      1 == V.numPanes && ((V.gridWidth = s + U.grid_padding), R.width(V.gridWidth), (V.gridHeight = u + U.grid_padding), R.height(V.gridHeight)),
                      V.numPanes++,
                      V.arrPanes.push(t - U.grid_padding))
                    : ((a = t), (r = l + V.spaceBetweenRows))),
                Q.placeElement(g, a, r);
            var m = a + p;
            m > s && (s = m);
            var f = r + h;
            f > l && (l = f), f > u && (u = f), f > o && (o = f);
            var m = s + p;
            m > V.innerWidth && (V.innerWidth = m), (a += p + V.spaceBetweenCols), 1 == V.numPanes && V.numThumbsInPane++;
        }
        (V.innerWidth = s + U.grid_padding),
            (V.innerHeight = u + U.grid_padding),
            G.width(V.innerWidth),
            G.height(V.innerHeight),
            1 == V.numPanes && ((V.gridWidth = s + U.grid_padding), (V.gridHeight = u + U.grid_padding), R.width(V.gridWidth), R.height(V.gridHeight));
    }
    function m() {
        0 == V.isHorizontal ? (V.isNavigationVertical ? p() : g()) : h();
    }
    function f(e) {
        if (0 > e || e >= V.numThumbs) throw new Error("Thumb not exists: " + e);
        return !0;
    }
    function _(e) {
        if (e >= V.numPanes || 0 > e) throw new Error("Pane " + index + " doesn't exists.");
        return !0;
    }
    function v(e) {
        var t = T(e);
        return 0 != t && void G.css(t);
    }
    function b(e) {
        var t = T(e);
        return 0 != t && void G.stop(!0).animate(t, { duration: U.grid_transition_duration, easing: U.grid_transition_easing, queue: !1 });
    }
    function y() {
        var e = -V.arrPanes[V.currentPane];
        b(e);
    }
    function w() {
        return 1 == V.isNavigationVertical ? V.gridHeight : V.gridWidth;
    }
    function T(e) {
        var t = {};
        return 1 == V.isNavigationVertical ? (t.top = e + "px") : (t.left = e + "px"), t;
    }
    function x() {
        var e = Q.getElementSize(G);
        return 1 == V.isNavigationVertical ? e.top : e.left;
    }
    function S(e) {
        if (0 == f(e)) return -1;
        var t = Math.floor(e / V.numThumbsInPane);
        return t;
    }
    function I() {
        if (1 == V.numPanes) return !1;
        var e = Q.getStoredEventData(V.storedEventID),
            t = e.diffTime,
            i = x(),
            n = Math.abs(i - e.startInnerPos);
        return n > 30 || (n > 5 && t > 300);
    }
    function E() {
        var e = Q.getStoredEventData(V.storedEventID),
            t = x();
        diffPos = Math.abs(e.startInnerPos - t);
        var i = w(),
            n = Math.round((3 * i) / 8);
        return diffPos >= n || (e.diffTime < 300 && diffPos > 25);
    }
    function P() {
        if (1 == V.numPanes) return !0;
        var e = Q.isApproveStoredEventClick(V.storedEventID, V.isNavigationVertical);
        return e;
    }
    function C(e) {
        if (1 == I()) return !0;
        var t = jQuery(this),
            i = Y.getItemByThumb(t);
        F.selectItem(i);
    }
    function j(e) {
        if (1 == V.numPanes) return !0;
        if (1 == V.touchActive) return !0;
        0 == V.isTilesMode && e.preventDefault(), (V.touchActive = !0);
        var t = { startInnerPos: x() };
        Q.storeEventData(e, V.storedEventID, t);
    }
    function A() {
        if (0 == U.grid_vertical_scroll_ondrag) return !1;
        if (1 == V.isNavigationVertical) return !1;
        var e = Q.handleScrollTop(V.storedEventID);
        return "vert" === e;
    }
    function M(e) {
        if (0 == V.touchActive) return !0;
        e.preventDefault(), Q.updateStoredEventData(e, V.storedEventID);
        var t = Q.getStoredEventData(V.storedEventID, V.isNavigationVertical),
            i = A();
        if (i) return !0;
        var n = t.diffMousePos,
            r = t.startInnerPos + n,
            a = n > 0 ? "prev" : "next",
            s = V.arrPanes[V.numPanes - 1];
        0 == U.grid_carousel && r > 0 && "prev" == a && (r /= 3), 0 == U.grid_carousel && -s > r && "next" == a && (r = t.startInnerPos + n / 3), v(r);
    }
    function z(e) {
        if (0 == V.touchActive) return !0;
        Q.updateStoredEventData(e, V.storedEventID);
        var t = Q.getStoredEventData(V.storedEventID, V.isNavigationVertical);
        if (((V.touchActive = !1), 0 == E())) return y(), !0;
        var i = x(),
            n = i - t.startInnerPos,
            r = n > 0 ? "prev" : "next";
        "next" == r ? (0 == U.grid_carousel && B.isLastPane() ? y() : B.nextPane()) : 0 == U.grid_carousel && B.isFirstPane() ? y() : B.prevPane();
    }
    function O() {
        var e = F.getSelectedItem();
        Y.setThumbSelected(e.objThumbWrapper), d(e.index);
    }
    function k() {
        if (0 == V.isTilesMode) {
            Y.initEvents();
            var e = R.find(".ug-thumb-wrapper");
            e.on("click touchend", C), L.on(F.events.ITEM_CHANGE, O);
        } else X.initEvents();
        R.bind("mousedown touchstart", j), jQuery("body").bind("mousemove touchmove", M), jQuery(window).add("body").bind("mouseup touchend", z);
    }
    var L,
        H,
        N,
        D,
        R,
        G,
        B = this,
        W = jQuery(this),
        F = new UniteGalleryMain(),
        Q = new UGFunctions(),
        Y = new UGThumbsGeneral(),
        X = new UGTileDesign(),
        U = {
            grid_panes_direction: "left",
            grid_num_cols: 2,
            grid_min_cols: 2,
            grid_num_rows: 2,
            grid_space_between_cols: 10,
            grid_space_between_rows: 10,
            grid_space_between_mobile: 10,
            grid_transition_duration: 300,
            grid_transition_easing: "easeInOutQuad",
            grid_carousel: !1,
            grid_padding: 0,
            grid_vertical_scroll_ondrag: !1,
        };
    this.events = { PANE_CHANGE: "pane_change" };
    var V = {
        eventSizeChange: "thumb_size_change",
        isHorizontal: !1,
        isMaxHeight: !1,
        isMaxWidth: !1,
        gridHeight: 0,
        gridWidth: 0,
        innerWidth: 0,
        innerHeight: 0,
        numPanes: 0,
        arrPanes: 0,
        numThumbs: 0,
        currentPane: 0,
        numThumbsInPane: 0,
        isNavigationVertical: !1,
        touchActive: !1,
        startScrollPos: 0,
        isFirstTimeRun: !0,
        isTilesMode: !1,
        storedEventID: "thumbsgrid",
        tileMaxWidth: null,
        tileMaxHeight: null,
        spaceBetweenCols: null,
        spaceBetweenRows: null,
    };
    (this.destroy = function () {
        if (0 == V.isTilesMode) {
            var e = R.find(".ug-thumb-wrapper");
            e.off("click"), e.off("touchend"), L.on(F.events.ITEM_CHANGE), Y.destroy();
        } else X.destroy();
        R.unbind("mousedown"),
            R.unbind("touchstart"),
            jQuery("body").unbind("mousemove"),
            jQuery("body").unbind("touchmove"),
            jQuery(window).add("body").unbind("touchend"),
            jQuery(window).add("body").unbind("mouseup"),
            W.off(B.events.PANE_CHANGE);
    }),
        (this.__________EXTERNAL_GENERAL_________ = function () {}),
        (this.setThumbUnselected = function (e) {
            Y.setThumbUnselected(e);
        }),
        (this.isItemThumbVisible = function (e) {
            var t = e.index,
                i = S(t);
            return i == V.currentPane;
        }),
        (this.__________EXTERNAL_API_________ = function () {}),
        (this.getNumPanesEstimationByHeight = function (e) {
            if (1 == V.isTilesMode) var t = U.tile_height;
            else
                var i = Y.getOptions(),
                    t = i.thumb_height;
            var n = Y.getNumThumbs(),
                r = Math.ceil(n / U.grid_num_cols),
                a = r * t + (r - 1) * V.spaceBetweenRows,
                s = Math.ceil(a / e);
            return s;
        }),
        (this.getNumPanesEstimationByWidth = function (e) {
            if (V.isTilesMode) var t = U.tile_width;
            else
                var i = Y.getOptions(),
                    t = i.thumb_width;
            var n = Y.getNumThumbs(),
                r = Math.ceil(n / U.grid_num_rows),
                a = r * t + (r - 1) * V.spaceBetweenCols,
                s = Math.ceil(a / e);
            return s;
        }),
        (this.getHeightEstimationByWidth = function (e) {
            if (0 == V.isTilesMode) throw new Error("This function works only with tiles mode");
            var t = Y.getNumThumbs(),
                i = Q.getNumItemsInSpace(e, U.tile_width, V.spaceBetweenCols),
                n = Math.ceil(t / i);
            n > U.grid_num_rows && (n = U.grid_num_rows);
            var r = Q.getSpaceByNumItems(n, U.tile_height, V.spaceBetweenRows);
            return (r += 2 * U.grid_padding);
        }),
        (this.getElement = function () {
            return R;
        }),
        (this.getSize = function () {
            var e = Q.getElementSize(R);
            return e;
        }),
        (this.getNumPanes = function () {
            return V.numPanes;
        }),
        (this.isFirstPane = function () {
            return 0 == V.currentPane;
        }),
        (this.isLastPane = function () {
            return V.currentPane == V.numPanes - 1;
        }),
        (this.getPaneInfo = function () {
            var e = { pane: V.currentPane, total: V.numPanes };
            return e;
        }),
        (this.getPane = function () {
            return V.currentPane;
        }),
        (this.setWidth = function (e) {
            (V.gridWidth = e), (V.isHorizontal = !0);
        }),
        (this.setMaxWidth = function (e) {
            (V.gridWidth = e), (V.isMaxWidth = !0), (V.isHorizontal = !0);
        }),
        (this.setHeight = function (e) {
            (V.gridHeight = e), (V.isHorizontal = !1);
        }),
        (this.setMaxHeight = function (e) {
            (V.gridHeight = e), (V.isMaxHeight = !0), (V.isHorizontal = !1);
        }),
        (this.gotoPane = function (e, t) {
            if (0 == _(e)) return !1;
            if (e == V.currentPane) return !1;
            var i = -V.arrPanes[e];
            (V.currentPane = e), b(i), W.trigger(B.events.PANE_CHANGE, e);
        }),
        (this.nextPane = function () {
            var e = V.currentPane + 1;
            if (e >= V.numPanes) {
                if (0 == U.grid_carousel) return !0;
                e = 0;
            }
            B.gotoPane(e, "next");
        }),
        (this.prevPane = function () {
            var e = V.currentPane - 1;
            return !(0 > e && ((e = V.numPanes - 1), 0 == U.grid_carousel)) && void B.gotoPane(e, "prev");
        }),
        (this.attachNextPaneButton = function (e) {
            return (
                Q.setButtonOnClick(e, B.nextPane),
                1 == U.grid_carousel ||
                    (B.isLastPane() && e.addClass("ug-button-disabled"),
                    void W.on(B.events.PANE_CHANGE, function () {
                        B.isLastPane() ? e.addClass("ug-button-disabled") : e.removeClass("ug-button-disabled");
                    }))
            );
        }),
        (this.attachPrevPaneButton = function (e) {
            return (
                Q.setButtonOnClick(e, B.prevPane),
                1 == U.grid_carousel ||
                    (B.isFirstPane() && e.addClass("ug-button-disabled"),
                    void W.on(B.events.PANE_CHANGE, function () {
                        B.isFirstPane() ? e.addClass("ug-button-disabled") : e.removeClass("ug-button-disabled");
                    }))
            );
        }),
        (this.attachBullets = function (e) {
            e.setActive(V.currentPane),
                jQuery(e).on(e.events.BULLET_CLICK, function (t, i) {
                    B.gotoPane(i, "theme"), e.setActive(i);
                }),
                jQuery(B).on(B.events.PANE_CHANGE, function (t, i) {
                    e.setActive(i);
                });
        }),
        (this.getObjTileDesign = function () {
            return X;
        }),
        (this.init = function (t, i, n) {
            e(t, i, n);
        }),
        (this.run = function () {
            r();
        }),
        (this.setHtml = function (e) {
            t(e);
        });
}
function UGTiles() {
    function e(e, i) {
        (g_objects = e.getObjects()), (ae = e), (K = jQuery(e)), ($ = g_objects.g_objWrapper), (ee = g_objects.g_arrItems), (de = jQuery.extend(de, i)), t(), oe.init(e, de), (le = oe.getObjThumbs());
    }
    function t() {
        de.tiles_min_columns < 1 && (de.tiles_min_columns = 1), 0 != de.tiles_max_columns && de.tiles_max_columns < de.tiles_min_columns && (de.tiles_max_columns = de.tiles_min_columns);
    }
    function i(e) {
        if (!e)
            if (J) e = J;
            else var e = $;
        J = e;
        var t = de.tiles_type;
        e.addClass("ug-tiletype-" + t), oe.setHtml(e), e.children(".ug-thumb-wrapper").hide();
    }
    function n() {
        if ((J.addClass("ug-tiles-rest-mode"), (ce.isTransInited = !0), 1 == de.tiles_enable_transition)) {
            J.addClass("ug-tiles-transit");
            var e = oe.getOptions();
            1 == e.tile_enable_image_effect && 0 == e.tile_image_effect_reverse && J.addClass("ug-tiles-transit-overlays"), (ce.isTransActive = !0);
        }
    }
    function r() {
        return se.getElementSize(J).width;
    }
    function a() {
        return 0 != ce.isTransInited && (J.addClass("ug-tiles-transition-active"), J.removeClass("ug-tiles-rest-mode"), 0 != ce.isTransActive && void oe.disableEvents());
    }
    function s() {
        return 0 != ce.isTransInited && (J.removeClass("ug-tiles-transition-active"), void J.addClass("ug-tiles-rest-mode"));
    }
    function o() {
        1 == ce.isTransActive
            ? (setTimeout(function () {
                  oe.enableEvents(), oe.triggerSizeChangeEventAllTiles(), s();
              }, 800),
              ce.handle && clearTimeout(ce.handle),
              (ce.handle = setTimeout(function () {
                  s(), oe.triggerSizeChangeEventAllTiles(), (ce.handle = null);
              }, 2e3)))
            : (oe.triggerSizeChangeEventAllTiles(), s());
    }
    function l() {
        (ue.colWidth = (ue.availWidth - ue.colGap * (ue.numCols - 1)) / ue.numCols), (ue.colWidth = Math.floor(ue.colWidth)), (ue.totalWidth = se.getSpaceByNumItems(ue.numCols, ue.colWidth, ue.colGap));
    }
    function u() {
        if (
            ((ue.colWidth = de.tiles_col_width),
            (ue.minCols = de.tiles_min_columns),
            (ue.maxCols = de.tiles_max_columns),
            0 == ae.isMobileMode() ? (ue.colGap = de.tiles_space_between_cols) : (ue.colGap = de.tiles_space_between_cols_mobile),
            (ue.galleryWidth = r()),
            (ue.availWidth = ue.galleryWidth),
            1 == de.tiles_include_padding && (ue.availWidth = ue.galleryWidth - 2 * ue.colGap),
            1 == de.tiles_exact_width)
        )
            (ue.numCols = se.getNumItemsInSpace(ue.availWidth, ue.colWidth, ue.colGap)),
                ue.maxCols > 0 && ue.numCols > ue.maxCols && (ue.numCols = ue.maxCols),
                ue.numCols < ue.minCols ? ((ue.numCols = ue.minCols), l()) : (ue.totalWidth = ue.numCols * (ue.colWidth + ue.colGap) - ue.colGap);
        else {
            var e = se.getNumItemsInSpaceRound(ue.availWidth, ue.colWidth, ue.colGap);
            e < ue.minCols ? (e = ue.minCols) : 0 != ue.maxCols && e > ue.maxCols && (e = ue.maxCols), (ue.numCols = e), l();
        }
        switch (de.tiles_align) {
            case "center":
            default:
                ue.addX = Math.round((ue.galleryWidth - ue.totalWidth) / 2);
                break;
            case "left":
                ue.addX = 0;
                break;
            case "right":
                ue.addX = ue.galleryWidth - ue.totalWidth;
        }
        for (ue.arrPosx = [], col = 0; col < ue.numCols; col++) {
            var t = se.getColX(col, ue.colWidth, ue.colGap);
            ue.arrPosx[col] = t + ue.addX;
        }
    }
    function d() {
        (ue.maxColHeight = 0), (ue.colHeights = [0]);
    }
    function c() {
        var e = 0,
            t = 999999999;
        for (col = 0; col < ue.numCols; col++) {
            if (void 0 == ue.colHeights[col] || 0 == ue.colHeights[col]) return col;
            ue.colHeights[col] < t && ((e = col), (t = ue.colHeights[col]));
        }
        return e;
    }
    function g(e, t, i, n) {
        if (null === n || "undefined" == typeof n) var n = c();
        var r = 0;
        void 0 !== ue.colHeights[n] && (r = ue.colHeights[n]);
        var a = oe.getTileHeightByWidth(ue.colWidth, e);
        if (null === a) {
            if (1 == de.tiles_enable_transition) throw new Error("Can't know tile height, please turn off transition");
            var s = se.getElementSize(e);
            a = s.height;
        }
        var o = ue.arrPosx[n];
        se.placeElement(e, o, r);
        var l = r + a;
        (ue.colHeights[n] = l + ue.colGap), ue.maxColHeight < l && (ue.maxColHeight = l), 1 == t && e.show().fadeTo(0, 1), 1 == i && J.height(ue.maxColHeight);
    }
    function p(e) {
        e || (e = !1), u(), d();
        var t = le.getThumbs(le.type.GET_THUMBS_RATIO);
        a(), oe.resizeAllTiles(ue.colWidth, oe.resizemode.VISIBLE_ELEMENTS, t);
        for (var i = 0; i < t.length; i++) {
            var n = jQuery(t[i]),
                r = void 0;
            1 == de.tiles_keep_order && (r = se.getColByIndex(ue.numCols, i)), g(n, e, !1, r);
        }
        o();
        var s = J.height();
        1 == ce.isTransActive && s > ue.maxColHeight
            ? setTimeout(function () {
                  J.height(ue.maxColHeight);
              }, 700)
            : J.height(ue.maxColHeight);
    }
    function h(e) {
        var t = e.index(),
            i = ae.getItem(t);
        if (i.ordered_placed === !0) return !1;
        var n = se.getPrevRowSameColIndex(t, ue.numCols);
        if (0 > n) return !0;
        var r = ae.getItem(n);
        return r.ordered_placed === !0;
    }
    function m(e, t) {
        if (t !== !0) {
            var i = h(e);
            if (0 == i) return !1;
        }
        var n = e.index(),
            r = se.getColByIndex(ue.numCols, n),
            a = ae.getItem(n);
        oe.resizeTile(e, ue.colWidth), g(e, !0, !0, r), (a.ordered_placed = !0);
        var s = ae.getNumItems(),
            o = se.getNextRowSameColIndex(n, ue.numCols);
        if (o >= s) return !1;
        var l = le.getThumbByIndex(o),
            u = ae.getItem(o);
        le.isThumbLoaded(l), le.isThumbLoaded(l) && !u.ordered_placed && m(l, !0);
    }
    function f(e, t) {
        if (1 == t) return !1;
        e = jQuery(e);
        var i = jQuery(e).parent();
        le.triggerImageLoadedEvent(i, e), 1 == de.tiles_keep_order ? m(i) : (oe.resizeTile(i, ue.colWidth), g(i, !0, !0));
    }
    function _() {
        var e = le.getThumbs(le.type.GET_THUMBS_NO_RATIO);
        if (!e || 0 == e.length) return !1;
        if (((ce.isAllLoaded = !1), 1 == ce.isFirstPlaced)) {
            u(), d();
            var t = Math.abs(ue.galleryWidth - ue.totalWidth);
            if (1 == de.tiles_set_initial_height && 0 == se.isScrollbarExists() && 25 > t) {
                var i = (e.length, Math.ceil(e.length / ue.numCols)),
                    r = i * de.tiles_col_width * 0.75;
                J.height(r), u();
            }
        }
        e.fadeTo(0, 0);
        var a = e.find("img.ug-thumb-image"),
            s = ue.numCols,
            o = ue.galleryWidth;
        se.checkImagesLoaded(
            a,
            function () {
                u(), (s != ue.numCols || o != ue.galleryWidth) && p(!1), n(), re.trigger(ne.events.ALL_TILES_LOADED);
            },
            function (e, t) {
                1 == ce.isFirstPlaced && ae.triggerEvent(ne.events.TILES_FIRST_PLACED), f(e, t);
            }
        );
    }
    function v() {
        var e = r(),
            t = le.getThumbs(!0),
            i = de.tiles_justified_row_height,
            n = [],
            a = 0,
            s = de.tiles_justified_space_between,
            o = t.length;
        jQuery.each(t, function (e, t) {
            t = jQuery(t);
            var r = le.getItemByThumb(t),
                s = r.thumbWidth,
                o = r.thumbHeight;
            o !== i && (s = Math.floor(r.thumbRatioByWidth * i)), (n[e] = s), (a += s);
        });
        var l = Math.ceil(a / e);
        l > o && (l = o);
        var u = a / l,
            d = [],
            c = 0,
            g = [],
            p = [],
            h = 0,
            m = 0;
        jQuery.each(t, function (e, t) {
            var i = n[e];
            h + i / 2 > (m + 1) * u && ((g[d.length] = c), d.push(p), (p = []), (c = 0), m++), (h += i), (c += i), p.push(t);
        }),
            (g[d.length] = c),
            d.push(p);
        var f = [],
            _ = [],
            v = 0;
        jQuery.each(d, function (t, r) {
            var a = (r.length, g[t]),
                o = (r.length - 1) * s,
                l = (e - o) / a,
                u = Math.round(i * l);
            (v += u), t > 0 && (v += s), _.push(u);
            var d = u / i,
                c = [],
                p = o;
            jQuery.each(r, function (e, t) {
                var i = jQuery(t),
                    r = i.index(),
                    a = n[r],
                    s = Math.round(a * d);
                (c[e] = s), (p += s);
            });
            var h = p - e;
            jQuery.each(c, function (e, t) {
                return 0 != h && (0 > h ? ((c[e] = t + 1), h++) : ((c[e] = t - 1), h--), void (e == c.length - 1 && 0 != h && (c[e] -= h)));
            }),
                (f[t] = c);
        });
        var b = { arrRows: d, arrRowWidths: f, arrRowHeights: _, gap: s, totalHeight: v };
        return b;
    }
    function b(e) {
        if (!e) var e = !1;
        var t = r(),
            i = v();
        J.height(i.totalHeight);
        var n = r();
        n != t && (i = v()), a();
        var s = 0,
            l = 0;
        jQuery.each(i.arrRows, function (t, n) {
            var r = i.arrRowWidths[t],
                a = i.arrRowHeights[t],
                o = 0;
            jQuery.each(n, function (t, n) {
                var u = jQuery(n),
                    d = a,
                    c = r[t];
                oe.resizeTile(u, c, d, oe.resizemode.VISIBLE_ELEMENTS), se.placeElement(u, o, s), (o += c), o > l && (l = o), (o += i.gap), 1 == e && jQuery(n).show();
            }),
                (s += a + i.gap);
        }),
            o();
    }
    function y() {
        var e = jQuery($).find("img.ug-thumb-image"),
            t = le.getThumbs();
        (ce.isAllLoaded = !1),
            t.fadeTo(0, 0),
            se.checkImagesLoaded(
                e,
                function () {
                    setTimeout(function () {
                        b(!0), t.fadeTo(0, 1), ae.triggerEvent(ne.events.TILES_FIRST_PLACED), n(), re.trigger(ne.events.ALL_TILES_LOADED);
                    });
                },
                function (e, t) {
                    e = jQuery(e);
                    var i = jQuery(e).parent();
                    le.triggerImageLoadedEvent(i, e);
                }
            );
    }
    function w() {
        var e = jQuery($).find("img.ug-thumb-image"),
            t = le.getThumbs();
        (ce.isAllLoaded = !1),
            t.fadeTo(0, 0),
            se.checkImagesLoaded(
                e,
                function () {
                    1 == ae.isMobileMode() ? p(!0) : x(!0), ae.triggerEvent(ne.events.TILES_FIRST_PLACED), n(), re.trigger(ne.events.ALL_TILES_LOADED);
                },
                function (e, t) {
                    e = jQuery(e);
                    var i = jQuery(e).parent();
                    le.triggerImageLoadedEvent(i, e);
                }
            );
    }
    function T() {
        var e = r();
        (ge.galleryWidth = e),
            (te = {}),
            (ge.colWidth = de.tiles_nested_col_width),
            (ge.optimalTileWidth = de.tiles_nested_optimal_tile_width),
            (ge.currentGap = de.tiles_space_between_cols),
            1 == ae.isMobileMode() && (ge.currentGap = de.tiles_space_between_cols_mobile),
            null == ge.colWidth
                ? (ge.colWidth = Math.floor(ge.optimalTileWidth / ge.nestedOptimalCols))
                : ge.optimalTileWidth > ge.colWidth
                ? (ge.nestedOptimalCols = Math.ceil(ge.optimalTileWidth / ge.colWidth))
                : (ge.nestedOptimalCols = 1),
            (ge.maxColumns = se.getNumItemsInSpace(e, ge.colWidth, ge.currentGap)),
            (ge.colWidth = se.getItemSizeInSpace(e, ge.maxColumns, ge.currentGap)),
            (ge.gridY = 0),
            (ie = []);
        var t = le.getThumbs(!0);
        switch (
            (t.each(function () {
                var e = jQuery(this),
                    t = S(e);
                ie.push(t);
            }),
            ge.optimalTileWidth > ge.colWidth ? (ge.nestedOptimalCols = Math.ceil(ge.optimalTileWidth / ge.colWidth)) : (ge.nestedOptimalCols = 1),
            (ge.totalWidth = ge.maxColumns * (ge.colWidth + ge.currentGap) - ge.currentGap),
            de.tiles_align)
        ) {
            case "center":
            default:
                ge.addX = Math.round((ge.galleryWidth - ge.totalWidth) / 2);
                break;
            case "left":
                ge.addX = 0;
                break;
            case "right":
                ge.addX = ge.galleryWidth - ge.totalWidth;
        }
        ge.maxGridY = 0;
    }
    function x(e) {
        var t = r();
        T(), P();
        var i = ge.maxGridY * (ge.colWidth + ge.currentGap) - ge.currentGap;
        J.height(i);
        var n = r();
        n != t && (T(), P()), 0 == de.tiles_nested_debug && X(e);
    }
    function S(e) {
        var t,
            i,
            n = {},
            r = ge.colWidth,
            a = ge.currentGap,
            s = oe.getTileImageSize(e),
            o = e.index(),
            l = Math.ceil(I(o) * ((1 * ge.nestedOptimalCols) / 3) + (2 * ge.nestedOptimalCols) / 3),
            u = s.width,
            d = s.height,
            c = u / d;
        return (
            u > d ? ((t = l), (i = Math.round(t / c)), 0 == i && (i = 1)) : ((i = l), (t = Math.round(i * c)), 0 == t && (t = 1)),
            (n.dimWidth = t),
            (n.dimHeight = i),
            (n.width = t * r + a * (t - 1)),
            (n.height = i * r + a * (i - 1)),
            (n.imgWidth = u),
            (n.imgHeight = d),
            (n.left = 0),
            (n.top = 0),
            n
        );
    }
    function I(e) {
        return Math.abs(Math.sin(Math.abs(1e3 * Math.sin(e))));
    }
    function E(e, t) {
        if (0 == t) {
            for (var i = ge.currentItem; i < ie.length; i++) C(i, !0);
            ge.currentItem = ie.length - 1;
        } else C(ge.currentItem, !0);
        for (var i = 0; i <= ge.currentItem; i++) U(i, !0);
        ge.currentItem++;
    }
    function P(e) {
        if (1 == de.tiles_nested_debug) return "undefined" == typeof e && (e = !0), E(!0, e), !1;
        for (var t = 0; t < ie.length; t++) C(t, !0);
    }
    function C(e, t) {
        if (!t) var t = !1;
        ge.maxColHeight = 0;
        for (var i = se.getObjectLength(te), n = ge.gridY; i + 1 >= n; n++) {
            for (var r = 0; r < ge.maxColumns; r++)
                if (0 == B(ge.gridY) || 0 == Q(ge.gridY, r)) {
                    var a = G(r);
                    return void j(e, a, r);
                }
            ge.gridY++;
        }
    }
    function j(e, t, i) {
        var n = jQuery.extend(!0, {}, ie[e]),
            r = n.dimWidth,
            a = t - n.dimWidth,
            s = ge.nestedOptimalCols,
            o = t <= n.dimWidth || 0.33 * s >= a || s >= t;
        if (o) H(e, t);
        else if (s >= a) s >= 4 ? (1 == R(Math.floor(t / 2), i) ? H(e, Math.floor(t / 2) + 1) : H(e, Math.floor(t / 2))) : H(objImage, t);
        else if (1 == R(r, i))
            switch (r >= s) {
                case !0:
                    H(e, r - 1);
                    break;
                case !1:
                    H(e, r + 1);
            }
        n = jQuery.extend(!0, {}, ie[e]);
        var l = k(e, n.dimWidth, i);
        if (ge.columnsValueToEnableHeightResize <= l[0] && ge.maxColumns >= 2 * ge.nestedOptimalCols) {
            var u = L(i, n),
                d = N(e, u.newHeight, !0);
            ie[e].dimHeight = d.dimHeight;
            var c = O(l, d.dimWidth, i),
                g = A(c),
                p = !1;
            g >= 2 && (p = !0), u.newHeight >= n.dimHeight && (n = N(e, u.newHeight, !0));
            var h = M(u.idToResize, u.newHeight, n.dimHeight);
            (n.top = ge.gridY), (n.left = i), h.push({ tileID: e, sizes: n });
            var m = D(h),
                f = D(c);
            return f > m || 1 == p ? void z(h) : void z(c);
        }
        (n.left = i), (n.top = ge.gridY), (ie[e] = n), W(e, n, i, ge.gridY), (ge.maxGridY = n.top + n.dimHeight);
    }
    function A(e) {
        for (var t = 0, i = 0, n = 0; n < e.length - 1; n++) {
            var r = e[n].sizes,
                a = -1,
                s = -1;
            B(r.top + r.dimHeight) && ge.maxColumns > r.left + r.dimWidth && ((a = te[r.top + r.dimHeight - 1][r.left + r.dimWidth]), (s = te[r.top + r.dimHeight][r.left + r.dimWidth])), a != s && t++;
        }
        for (var n = 0; n < e.length - 1; n++) {
            var r = e[n].sizes,
                a = -1,
                s = -1;
            B(r.top + r.dimHeight) && r.left - 1 >= 0 && ((a = te[r.top + r.dimHeight - 1][r.left - 1]), (s = te[r.top + r.dimHeight][r.left - 1])), a != s && i++;
        }
        return Math.max(i, t);
    }
    function M(e, t, i) {
        var n = ie[e],
            r = n.dimHeight,
            a = (n.dimWidth, n.left),
            s = n.top,
            o = (parseInt(s / (ge.colWidth + ge.currentGap)), parseInt(a / (ge.colWidth + ge.currentGap)), r - t + i),
            l = N(e, o, !0),
            u = [];
        return u.push({ tileID: e, sizes: l }), u;
    }
    function z(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t].sizes,
                n = e[t].tileID;
            (ie[n] = jQuery.extend(!0, {}, i)), W(n, i, i.left, i.top);
        }
    }
    function O(e, t) {
        for (var i = 0, n = 0, r = [], a = 0, s = 0, o = 0; o < e[1].length; o++) {
            var l = e[1][o],
                u = ie[e[1][o]];
            if (((n += u.dimHeight), 0 != o)) (i += u.dimHeight), r.push([l, u.dimHeight]);
            else {
                var d = H(l, t, !0);
                (i += d.dimHeight), r.push([e[1][o], d.dimHeight]);
            }
        }
        (a = u.left), (s = u.top);
        for (var c = n, g = [], o = r.length - 1; o >= 0; o--) {
            var p,
                l = r[o][0];
            0 != o
                ? ((p = Math.max(Math.round((1 * n) / 3), Math.floor(r[o][1] * (n / i)))), (c -= p), (d = N(l, p, !0)), (d.left = a), (d.top = s), g.push({ tileID: l, sizes: d }), (s += d.dimHeight))
                : ((p = c), (d = N(l, p, !0)), (d.left = a), (d.top = s), g.push({ tileID: l, sizes: d }));
        }
        return g;
    }
    function k(e, t, i) {
        var n = ge.gridY - 1,
            r = 0,
            a = 0,
            s = 1,
            o = [],
            l = [];
        if ((o.push(e), n >= 0)) {
            for (a = 0; n >= 0; ) {
                if (((r = te[n][i]), ("undefined" != typeof te[n][i - 1] && te[n][i - 1] == te[n][i]) || ("undefined" != typeof te[n][i + t] && te[n][i + t - 1] == te[n][i + t]) || te[n][i] != te[n][i + t - 1]))
                    return l.push(s), l.push(o), l;
                a != r && (s++, o.push(r)), n--, (a = r);
            }
            return l.push(s), l.push(o), l;
        }
        return [0, []];
    }
    function L(e, t) {
        var i = 0,
            n = 0,
            r = t.dimWidth,
            a = t.dimHeight,
            s = 0,
            o = 0,
            l = jQuery.map(te, function (e, t) {
                return [e];
            });
        if ("undefined" == typeof l[ge.gridY] || "undefined" == typeof l[ge.gridY][e - 1]) n = 0;
        else for (var u = 0; "undefined" != typeof te[ge.gridY + u] && -1 != te[ge.gridY + u][e - 1]; ) (s = te[ge.gridY + u][e - 2]), u++, n++;
        if ("undefined" == typeof l[ge.gridY] || "undefined" == typeof l[ge.gridY][e + r]) i = 0;
        else for (u = 0; "undefined" != typeof te[ge.gridY + u] && -1 != te[ge.gridY + u][e + r]; ) (o = te[ge.gridY + u][e + r + 1]), u++, i++;
        var d = 0,
            c = 0;
        Math.abs(a - n) < Math.abs(a - i) && 0 != n ? ((d = n), (c = s)) : 0 != i ? ((d = i), (c = o)) : (d = a);
        var g = { newHeight: d, idToResize: c };
        return g;
    }
    function H(e, t, i) {
        i || (i = !1);
        var n = ge.colWidth,
            r = ge.currentGap,
            a = ie[e],
            s = a.imgWidth,
            o = a.imgHeight,
            l = s / o;
        if (((dimWidth = t), (dimHeight = Math.round(dimWidth / l)), 1 == i)) {
            var u = jQuery.extend(!0, {}, a);
            return (u.dimWidth = dimWidth), (u.dimHeight = dimHeight), (u.width = dimWidth * n + r * (dimWidth - 1)), (u.height = dimHeight * n + r * (dimHeight - 1)), u;
        }
        (a.dimWidth = dimWidth), (a.dimHeight = dimHeight), (a.width = dimWidth * n + r * (dimWidth - 1)), (a.height = dimHeight * n + r * (dimHeight - 1));
    }
    function N(e, t, i) {
        i || (i = !1);
        var n = ie[e],
            r = n.dimWidth,
            a = ge.colWidth,
            s = ge.currentGap;
        if (1 == i) {
            var o = jQuery.extend(!0, {}, n);
            return (o.dimHeight = t), (o.width = r * a + s * (r - 1)), (o.height = t * a + s * (t - 1)), o;
        }
        (n.dimHeight = t), (n.width = r * a + s * (r - 1)), (n.height = t * a + s * (t - 1));
    }
    function D(e) {
        for (var t = 0, i = 0, n = 0; n < e.length; n++) {
            var r = ie[e[n].tileID];
            if (0 == r.dimHeight || 0 == r.height) return;
            (resizeVal = r.dimWidth / r.dimHeight / (r.imgWidth / r.imgHeight)), resizeVal < 1 && (resizeVal = 1 / resizeVal), (t += resizeVal), i++;
        }
        return t / i;
    }
    function R(e, t) {
        var i = ge.gridY - 1;
        return !(0 >= i || 0 == B(i)) && te[i][t + e - 1] != te[i][t + e];
    }
    function G(e) {
        var t = e,
            i = 0;
        if (1 == B(ge.gridY)) for (; 0 == Q(ge.gridY, t); ) i++, t++;
        else i = ge.maxColumns;
        return i;
    }
    function B(e) {
        return "undefined" != typeof te[e];
    }
    function W(e, t, i, n) {
        for (var r = 0; r < t.dimHeight; r++) for (var a = 0; a < t.dimWidth; a++) 0 == B(n + r) && F(n + r), Y(n + r, i + a, e);
    }
    function F(e) {
        te[e] = new Object();
        for (var t = 0; t < ge.maxColumns; t++) te[e][t] = -1;
    }
    function Q(e, t) {
        return -1 != te[e][t];
    }
    function Y(e, t, i) {
        te[e][t] = i;
    }
    function X(e) {
        if (!e) var e = !1;
        a();
        for (var t = 0; t < ie.length; t++) U(t, e);
        J.height(ge.maxColHeight), o();
    }
    function U(e, t) {
        var i = le.getThumbByIndex(e),
            n = ie[e],
            r = n.top * (ge.colWidth + ge.currentGap),
            a = ge.addX + n.left * (ge.colWidth + ge.currentGap);
        oe.resizeTile(i, n.width, n.height, oe.resizemode.VISIBLE_ELEMENTS), se.placeElement(i, a, r), r + n.height > ge.maxColHeight && (ge.maxColHeight = r + n.height), 1 == t && i.fadeTo(0, 1);
    }
    function V() {
        if (1 == ce.isFirstTimeRun) return !0;
        if (0 == ce.isAllLoaded) return !1;
        switch (de.tiles_type) {
            case "columns":
                p(!1);
                break;
            case "justified":
                b(!1);
                break;
            case "nested":
                var e = ae.isMobileMode();
                1 == e ? p(!1) : x(!1);
        }
    }
    function q() {
        re.on(ne.events.ALL_TILES_LOADED, function () {
            ce.isAllLoaded = !0;
        }),
            K.on(ae.events.SIZE_CHANGE, V),
            K.on(ne.events.TILES_FIRST_PLACED, function () {
                ce.isFirstPlaced = !1;
            }),
            oe.initEvents();
    }
    function Z() {
        switch (($.children(".ug-tile").show(), 1 == ce.isFirstTimeRun && q(), oe.run(), de.tiles_type)) {
            default:
            case "columns":
                _();
                break;
            case "justified":
                y();
                break;
            case "nested":
                w();
        }
        ce.isFirstTimeRun = !1;
    }
    var K,
        $,
        J,
        ee,
        te,
        ie,
        ne = this,
        re = jQuery(this),
        ae = new UniteGalleryMain(),
        se = new UGFunctions(),
        oe = new UGTileDesign(),
        le = new UGThumbsGeneral(),
        ue = {},
        de = {
            tiles_type: "columns",
            tiles_col_width: 250,
            tiles_align: "center",
            tiles_exact_width: !1,
            tiles_space_between_cols: 3,
            tiles_space_between_cols_mobile: 3,
            tiles_include_padding: !0,
            tiles_min_columns: 2,
            tiles_max_columns: 0,
            tiles_keep_order: !1,
            tiles_set_initial_height: !0,
            tiles_justified_row_height: 150,
            tiles_justified_space_between: 3,
            tiles_nested_optimal_tile_width: 250,
            tiles_nested_col_width: null,
            tiles_nested_debug: !1,
            tiles_enable_transition: !0,
        };
    this.events = { THUMB_SIZE_CHANGE: "thumb_size_change", TILES_FIRST_PLACED: "tiles_first_placed", ALL_TILES_LOADED: "all_tiles_loaded" };
    var ce = { isFirstTimeRun: !0, handle: null, isTransActive: !1, isTransInited: !1, isFirstPlaced: !0, isAllLoaded: !1 },
        ge = { colWidth: null, nestedOptimalCols: 5, gridY: 0, maxColumns: 0, columnsValueToEnableHeightResize: 3, resizeLeftRightToColumn: !0, currentItem: 0, currentGap: null, optimalTileWidth: null, maxGridY: 0 };
    (this.destroy = function () {
        K.off(ae.events.SIZE_CHANGE), oe.destroy(), K.off(ne.events.TILES_FIRST_PLACED);
    }),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.setHtml = function (e) {
            i(e);
        }),
        (this.getObjTileDesign = function () {
            return oe;
        }),
        (this.run = function () {
            Z();
        }),
        (this.runNewItems = function () {
            if (!J) throw new Error("Can't run new items - parent not set");
            switch ((oe.setHtml(J, !0), oe.run(!0), de.tiles_type)) {
                case "columns":
                    _();
                    break;
                default:
                case "justified":
                case "nested":
                    throw new Error("Tiles type: " + de.tiles_type + " not support load more yet");
            }
        });
}
function UGTileDesign() {
    function e(e, i) {
        (G = e), (k = jQuery(e));
        var r = G.getObjects();
        (H = r.g_objWrapper), (N = G.getArrItems()), (F = jQuery.extend(F, Q)), (F = jQuery.extend(F, i)), t(), W.init(e, F);
        var a = { allow_onresize: !1 },
            s = ["overlay"];
        Y.funcCustomTileHtml && (s = []), W.setCustomThumbs(n, s, a);
        var o = W.getOptions();
        (F = jQuery.extend(F, o)), (Y.ratioByWidth = F.tile_width / F.tile_height), (Y.ratioByHeight = F.tile_height / F.tile_width), F.tile_size_by == D.sizeby.GLOBAL_RATIO && Y.isTextpanelOutside && (Y.hasImageContainer = !0);
    }
    function t() {
        if (
            (1 == F.tile_enable_overlay ? ((F.thumb_overlay_opacity = F.tile_overlay_opacity), (F.thumb_overlay_color = F.tile_overlay_color)) : 0 == F.tile_enable_icons ? (F.thumb_color_overlay_effect = !1) : (F.thumb_overlay_opacity = 0),
            F.tile_as_link && ((F.thumb_wrapper_as_link = !0), (F.thumb_link_newpage = F.tile_link_newpage)),
            1 == F.tile_enable_outline && 0 == F.tile_enable_border && (F.tile_enable_outline = !1),
            (Y.tileInnerReduce = 0),
            F.tile_enable_border && ((Y.tileInnerReduce = 2 * F.tile_border_width), W.setThumbInnerReduce(Y.tileInnerReduce)),
            (Y.isSaparateIcons = !B.isRgbaSupported()),
            1 == F.tile_enable_textpanel)
        ) {
            switch (F.tile_textpanel_position) {
                case "top":
                    F.tile_textpanel_align = "top";
                case "bottom":
                    (Y.isTextpanelOutside = !0), (F.tile_textpanel_always_on = !0), (F.tile_textpanel_offset = 0);
                    break;
                case "inside_top":
                    F.tile_textpanel_align = "top";
                    break;
                case "middle":
                    (F.tile_textpanel_align = "middle"), (F.tile_textpanel_appear_type = "fade");
            }
            0 == F.tile_textpanel_always_on && (Y.isSaparateIcons = !0);
        }
        0 != F.tile_textpanel_offset && ((F.tile_textpanel_appear_type = "fade"), (F.tile_textpanel_margin = F.tile_textpanel_offset)),
            "title_and_desc" == F.tile_textpanel_source && ((F.tile_textpanel_enable_description = !0), (F.tile_textpanel_desc_style_as_title = !0));
    }
    function i() {
        var e = G.isMobileMode();
        switch (((Y.isTextPanelHidden = !1), 1 == e && 0 == F.tile_textpanel_always_on && (Y.isTextPanelHidden = !0), (Y.isVideoplayIconAlwaysOn = F.tile_videoplay_icon_always_on), F.tile_videoplay_icon_always_on)) {
            case "always":
                Y.isVideoplayIconAlwaysOn = !0;
                break;
            case "never":
                Y.isVideoplayIconAlwaysOn = !1;
                break;
            case "mobile_only":
                Y.isVideoplayIconAlwaysOn = 1 == e;
                break;
            case "desktop_only":
                Y.isVideoplayIconAlwaysOn = 0 == e;
        }
    }
    function n(e, t) {
        if ((e.addClass("ug-tile"), Y.funcCustomTileHtml)) return Y.funcCustomTileHtml(e, t), !1;
        var i = "";
        1 == Y.hasImageContainer && (i += "<div class='ug-image-container ug-trans-enabled'>");
        var n = "ug-thumb-image";
        (0 == F.tile_enable_image_effect || 1 == F.tile_image_effect_reverse) && (n += " ug-trans-enabled");
        var r = B.stripTags(t.title);
        (r = B.htmlentitles(r)),
            (i += '<img src="' + B.escapeDoubleSlash(t.urlThumb) + "\" alt='" + r + "' class='" + n + "'>"),
            1 == Y.hasImageContainer && (i += "</div>"),
            e.append(i),
            F.tile_size_by == D.sizeby.GLOBAL_RATIO && e.fadeTo(0, 0);
        var a = {};
        if (
            (1 == F.tile_enable_background && (a["background-color"] = F.tile_background_color),
            1 == F.tile_enable_border &&
                ((a["border-width"] = F.tile_border_width + "px"), (a["border-style"] = "solid"), (a["border-color"] = F.tile_border_color), F.tile_border_radius && (a["border-radius"] = F.tile_border_radius + "px")),
            1 == F.tile_enable_outline && (a.outline = "1px solid " + F.tile_outline_color),
            1 == F.tile_enable_shadow)
        ) {
            var s = F.tile_shadow_h + "px ";
            (s += F.tile_shadow_v + "px "), (s += F.tile_shadow_blur + "px "), (s += F.tile_shadow_spread + "px "), (s += F.tile_shadow_color), (a["box-shadow"] = s);
        }
        e.css(a);
        var o = "";
        if (F.tile_enable_icons) {
            if (0 == F.tile_as_link && 1 == F.tile_enable_action) {
                var l = "ug-button-play ug-icon-zoom";
                "image" != t.type && (l = "ug-button-play ug-icon-play"), (o += "<div class='ug-tile-icon " + l + "' style='display:none'></div>");
            }
            if ((t.link && 1 == F.tile_show_link_icon) || 1 == F.tile_as_link)
                if (0 == F.tile_as_link) {
                    var u = "";
                    1 == F.tile_link_newpage && (u = " target='_blank'"), (o += "<a href='" + t.link + "'" + u + " class='ug-tile-icon ug-icon-link'></a>");
                } else o += "<div class='ug-tile-icon ug-icon-link' style='display:none'></div>";
            var c = Y.isSaparateIcons;
            if ((0 == c && "image" != t.type && 1 == Y.isVideoplayIconAlwaysOn && (c = !0), c)) var g = e;
            else var g = e.children(".ug-thumb-overlay");
            g.append(o);
            var p = g.children("." + l);
            0 == p.length ? (p = null) : p.hide();
            var h = g.children(".ug-icon-link");
            0 == h.length ? (h = null) : h.hide(), h || 1 != F.tile_enable_action || e.addClass("ug-tile-clickable");
        } else 1 == F.tile_enable_action && e.addClass("ug-tile-clickable");
        if (1 == F.tile_enable_image_effect) {
            var m = "";
            0 == F.tile_image_effect_reverse && (m = " ug-trans-enabled");
            var f = "<div class='ug-tile-image-overlay" + m + "' >",
                _ = " ug-" + F.tile_image_effect_type + "-effect";
            (f += '<img src="' + B.escapeDoubleSlash(t.urlThumb) + "\" alt='" + t.title + "' class='" + _ + m + "'>"), (f += "</div>"), e.append(f), 1 == F.tile_image_effect_reverse && e.children(".ug-tile-image-overlay").fadeTo(0, 0);
        }
        if (1 == F.tile_enable_textpanel) {
            var v = new UGTextPanel();
            v.init(G, F, "tile");
            var b = "";
            (1 == F.tile_textpanel_always_on || 1 == Y.isTextpanelOutside) && (b = "ug-trans-enabled"), v.appendHTML(e, b);
            var y = t.title,
                w = "";
            switch (F.tile_textpanel_source) {
                case "desc":
                case "description":
                    y = t.description;
                    break;
                case "desc_title":
                    "" != t.description && (y = t.description);
                    break;
                case "title_and_desc":
                    (y = t.title), (w = t.description);
            }
            if ((v.setTextPlain(y, w), 0 == F.tile_textpanel_always_on && v.getElement().fadeTo(0, 0), e.data("objTextPanel", v), 1 == F.tile_textpanel_always_on)) {
                var T = d(e);
                T.css("z-index", 2);
            }
            if (1 == Y.isTextpanelOutside) {
                var x = "<div class='ug-tile-cloneswrapper'></div>";
                e.append(x);
                var S = e.children(".ug-tile-cloneswrapper"),
                    I = new UGTextPanel();
                I.init(G, F, "tile"), I.appendHTML(S), I.setTextPlain(y, w), e.data("objTextPanelClone", I);
            }
        }
        null !== t.addHtml && e.append(t.addHtml);
    }
    function r(e) {
        var t = e.children(".ug-tile-image-overlay");
        return t;
    }
    function a(e) {
        var t = e.children(".ug-thumb-overlay");
        return t;
    }
    function s(e) {
        if (0 == Y.hasImageContainer) return null;
        var t = e.children(".ug-image-container");
        return t;
    }
    function o(e) {
        var t = e.find(".ug-tile-image-overlay img");
        return t;
    }
    function l(e) {
        var t = e.data("objTextPanel");
        return t;
    }
    function u(e) {
        var t = e.data("objTextPanelClone");
        return t;
    }
    function d(e) {
        var t = e.children(".ug-textpanel");
        return t;
    }
    function c(e) {
        var t = e.find(".ug-tile-cloneswrapper .ug-textpanel");
        if (0 == t.length) throw new Error("text panel cloned element not found");
        return t;
    }
    function g(e) {
        if (1 == Y.isTextpanelOutside) var t = c(e);
        else var t = d(e);
        if (!t) return 0;
        var i = B.getElementSize(t);
        return i.height;
    }
    function p(e) {
        var t = e.find(".ug-icon-link");
        return 0 == t.length ? null : t;
    }
    function h(e) {
        var t = Y.ratioByHeight;
        switch (F.tile_size_by) {
            default:
                t = Y.ratioByHeight;
                break;
            case D.sizeby.IMAGE_RATIO:
                if (!e) throw new Error("tile should be given for tile ratio");
                var i = D.getItemByTile(e);
                if ("undefined" != typeof i.thumbRatioByHeight) {
                    if (0 == i.thumbRatioByHeight) throw (trace(i), new Error("the item ratio not inited yet"));
                    t = i.thumbRatioByHeight;
                }
                break;
            case D.sizeby.CUSTOM:
                return null;
        }
        return t;
    }
    function m(e) {
        var t = e.find(".ug-button-play");
        return 0 == t.length ? null : t;
    }
    function f(e) {
        return !!e.hasClass("ug-thumb-over");
    }
    function _(e) {
        return e.hasClass("ug-tile-clickable");
    }
    function v(e) {
        return 1 == F.tile_enable_icons && 1 == Y.isVideoplayIconAlwaysOn && "image" != e.type;
    }
    function b(e, t, i, n) {
        var a = r(e),
            l = D.getTileImage(e),
            u = o(e);
        (t -= Y.tileInnerReduce), (i -= Y.tileInnerReduce);
        var d = null;
        if (1 == Y.isTextpanelOutside) {
            var c = g(e);
            if (((i -= c), "top" == F.tile_textpanel_position && (d = c), 1 == Y.hasImageContainer)) {
                var p = s(e);
                B.setElementSize(p, t, i), null !== d && B.placeElement(p, 0, d);
            }
        }
        if (0 == F.tile_enable_image_effect) B.scaleImageCoverParent(l, t, i), 0 == Y.hasImageContainer && null !== d && B.placeElement(l, 0, d);
        else {
            var h = "nothing";
            n === !0 && 0 == Y.isTextpanelOutside && (h = 1 == F.tile_image_effect_reverse ? "effect" : "image"),
                "effect" != h && (B.setElementSize(a, t, i), null !== d && B.placeElement(a, 0, d), B.scaleImageCoverParent(u, t, i)),
                "image" != h && (1 == Y.hasImageContainer ? B.scaleImageCoverParent(l, t, i) : "effect" == h ? (B.scaleImageCoverParent(l, t, i), null !== d && B.placeElement(l, 0, d)) : B.cloneElementSizeAndPos(u, l, !1, null, d));
        }
    }
    function y(e, t, i, n) {
        var r = null;
        if ((i && (r = i - Y.tileInnerReduce), n && (n -= Y.tileInnerReduce), "clone" == t)) {
            var a = u(e);
            a.refresh(!0, !0, r);
            var s = D.getItemByTile(e);
            return (s.textPanelCloneSizeSet = !0), !1;
        }
        var o = l(e);
        if (!o) return !1;
        var d = null;
        1 == Y.isTextpanelOutside && (d = g(e)), o.refresh(!1, !0, r, d);
        var c = 1 == F.tile_textpanel_always_on || "fade" == F.tile_textpanel_appear_type;
        if (c)
            if (1 == Y.isTextpanelOutside && n && "bottom" == F.tile_textpanel_position) {
                var p = n - d;
                o.positionPanel(p);
            } else o.positionPanel();
    }
    function w(e) {
        var t = (D.getItemByTile(e), m(e)),
            i = p(e),
            n = B.getElementSize(e);
        b(e, n.width, n.height), 1 == F.tile_enable_textpanel && y(e, "regular", n.width, n.height);
        var r = n.width - Y.tileInnerReduce,
            s = n.height - Y.tileInnerReduce,
            o = 0;
        if (1 == Y.isTextpanelOutside) {
            var l = g(e);
            (s -= l), "top" == F.tile_textpanel_position && (o = l);
        }
        var u = a(e);
        if ((B.setElementSizeAndPosition(u, 0, o, r, s), t || i)) {
            var c = 0;
            if (1 == F.tile_enable_textpanel && 0 == Y.isTextPanelHidden && 0 == Y.isTextpanelOutside) {
                var h = d(e),
                    f = B.getElementSize(h);
                f.height > 0 && (c = Math.floor((f.height / 2) * -1));
            }
        }
        if (t && i) {
            var _ = B.getElementSize(t),
                v = B.getElementSize(i),
                w = F.tile_space_between_icons,
                T = _.width + w + v.width,
                x = Math.floor((n.width - T) / 2);
            w > x && ((w = Math.floor((n.width - _.width - v.width) / 3)), (T = _.width + w + v.width), (x = Math.floor((n.width - T) / 2))), B.placeElement(t, x, "middle", 0, c), B.placeElement(i, x + _.width + w, "middle", 0, c);
        } else t && B.placeElement(t, "center", "middle", 0, c), i && B.placeElement(i, "center", "middle", 0, c);
        t && t.show(), i && i.show();
    }
    function T(e, t) {
        var i = (D.getItemByTile(e), r(e)),
            n = F.thumb_transition_duration;
        if (0 == F.tile_image_effect_reverse) {
            var a = D.getTileImage(e);
            t ? (a.fadeTo(0, 1), i.stop(!0).fadeTo(n, 0)) : i.stop(!0).fadeTo(n, 1);
        } else t ? i.stop(!0).fadeTo(n, 1) : i.stop(!0).fadeTo(n, 0);
    }
    function x(e, t) {
        var i = F.thumb_transition_duration,
            n = d(e);
        if (!n) return !0;
        if ("slide" == F.tile_textpanel_appear_type) {
            var r = B.getElementSize(n);
            if (0 == r.width) return !1;
            var a = -r.height,
                s = 0,
                o = {},
                l = {},
                u = "bottom";
            "inside_top" == F.tile_textpanel_position && (u = "top"), (o[u] = a + "px"), (l[u] = s + "px"), 1 == t ? (n.fadeTo(0, 1), 0 == n.is(":animated") && n.css(o), (l.opacity = 1), n.stop(!0).animate(l, i)) : n.stop(!0).animate(o, i);
        } else 1 == t ? n.stop(!0).fadeTo(i, 1) : n.stop(!0).fadeTo(i, 0);
    }
    function S(e, t, i) {
        var n = F.thumb_transition_duration;
        i && i === !0 && (n = 0);
        var r = m(e),
            a = p(e),
            s = t ? 1 : 0;
        r && r.stop(!0).fadeTo(n, s), a && a.stop(!0).fadeTo(n, s);
    }
    function I(e, t) {
        if (((t = jQuery(t)), F.tile_enable_image_effect && T(t, !0), 1 == F.tile_enable_textpanel && 0 == F.tile_textpanel_always_on && 0 == Y.isTextPanelHidden && x(t, !0), Y.isSaparateIcons && 1 == F.tile_enable_icons)) {
            var i = 1 == F.thumb_overlay_reverse,
                n = D.getItemByTile(t);
            0 == v(n) && S(t, i, !1);
        }
    }
    function E(e, t) {
        if (((t = jQuery(t)), F.tile_enable_image_effect && T(t, !1), 1 == F.tile_enable_textpanel && 0 == F.tile_textpanel_always_on && x(t, !1), 1 == Y.isSaparateIcons && 1 == F.tile_enable_icons)) {
            var i = 1 != F.thumb_overlay_reverse,
                n = D.getItemByTile(t);
            0 == v(n) ? S(t, i, !1) : S(t, !0, !0);
        }
    }
    function P(e) {
        var t = W.getThumbs().not(e);
        t.each(function (e, t) {
            W.setThumbNormalStyle(jQuery(t));
        });
    }
    function C(e, t, i) {
        return (t = jQuery(t)), (1 == F.tile_visible_before_image && t.data("image_placed") !== !0 && i !== !0) || (w(t), void W.setThumbNormalStyle(t));
    }
    function j(e, t, i) {
        w(t), i.fadeTo(0, 1), t.data("image_placed", !0);
    }
    function A(e) {
        return 1 == _(e) ? (R.trigger(D.events.TILE_CLICK, e), !0) : void (0 == f(e) && (P(e), W.setThumbOverStyle(e)));
    }
    function M(e) {
        var t = jQuery(this),
            i = t.prop("tagName").toLowerCase(),
            n = !0;
        if ((Y.funcParentApproveClick && 0 == Y.funcParentApproveClick() && (n = !1), "a" == i)) 0 == n && e.preventDefault();
        else if (0 == f(t)) 1 == n && A(t);
        else {
            if (0 == _(t)) return !0;
            1 == n && R.trigger(D.events.TILE_CLICK, t);
        }
    }
    function z(e) {
        e.stopPropagation();
        var t = jQuery(this).parents(".ug-tile"),
            i = !0;
        return Y.funcParentApproveClick && 0 == Y.funcParentApproveClick() && (i = !1), 0 == f(t) ? (A(t), !0) : 1 == i ? (R.trigger(D.events.TILE_CLICK, t), !1) : void 0;
    }
    function O(e) {
        var t = jQuery(this).parents(".ug-tile");
        Y.funcParentApproveClick && 0 == Y.funcParentApproveClick() && e.preventDefault(), 0 == f(t) && 0 == F.tile_as_link && (e.preventDefault(), A(t));
    }
    var k,
        L,
        H,
        N,
        D = this,
        R = jQuery(this),
        G = new UniteGalleryMain(),
        B = new UGFunctions(),
        W = new UGThumbsGeneral();
    (this.resizemode = { FULL: "full", WRAPPER_ONLY: "wrapper_only", VISIBLE_ELEMENTS: "visible_elements" }),
        (this.sizeby = { GLOBAL_RATIO: "global_ratio", TILE_RATIO: "tile_ratio", IMAGE_RATIO: "image_ratio", CUSTOM: "custom" }),
        (this.events = { TILE_CLICK: "tile_click" });
    var F = {
            tile_width: 250,
            tile_height: 200,
            tile_size_by: D.sizeby.IMAGE_RATIO,
            tile_visible_before_image: !1,
            tile_enable_background: !0,
            tile_background_color: "#F0F0F0",
            tile_enable_border: !1,
            tile_border_width: 3,
            tile_border_color: "#F0F0F0",
            tile_border_radius: 0,
            tile_enable_outline: !1,
            tile_outline_color: "#8B8B8B",
            tile_enable_shadow: !1,
            tile_shadow_h: 1,
            tile_shadow_v: 1,
            tile_shadow_blur: 3,
            tile_shadow_spread: 2,
            tile_shadow_color: "#8B8B8B",
            tile_enable_action: !0,
            tile_as_link: !1,
            tile_link_newpage: !0,
            tile_enable_overlay: !0,
            tile_overlay_opacity: 0.4,
            tile_overlay_color: "#000000",
            tile_enable_icons: !0,
            tile_show_link_icon: !1,
            tile_videoplay_icon_always_on: "never",
            tile_space_between_icons: 26,
            tile_enable_image_effect: !1,
            tile_image_effect_type: "bw",
            tile_image_effect_reverse: !1,
            tile_enable_textpanel: !1,
            tile_textpanel_source: "title",
            tile_textpanel_always_on: !1,
            tile_textpanel_appear_type: "slide",
            tile_textpanel_position: "inside_bottom",
            tile_textpanel_offset: 0,
        },
        Q = {
            thumb_color_overlay_effect: !0,
            thumb_overlay_reverse: !0,
            thumb_image_overlay_effect: !1,
            tile_textpanel_enable_description: !1,
            tile_textpanel_bg_opacity: 0.6,
            tile_textpanel_padding_top: 8,
            tile_textpanel_padding_bottom: 8,
        },
        Y = {
            ratioByHeight: 0,
            ratioByWidth: 0,
            eventSizeChange: "thumb_size_change",
            funcCustomTileHtml: null,
            funcCustomPositionElements: null,
            funcParentApproveClick: null,
            isSaparateIcons: !1,
            tileInnerReduce: 0,
            isTextpanelOutside: !1,
            hasImageContainer: !1,
            isVideoplayIconAlwaysOn: !1,
            isTextPanelHidden: !1,
        };
    (this.loadTileImage = function (e) {
        var t = D.getTileImage(e);
        B.checkImagesLoaded(t, null, function (t, i) {
            j(null, e, jQuery(t));
        });
    }),
        (this.setHtml = function (e, t) {
            (L = e), t !== !0 && i(), W.setHtmlThumbs(e, t);
        }),
        (this.initEvents = function () {
            W.initEvents(),
                jQuery(W).on(W.events.SETOVERSTYLE, I),
                jQuery(W).on(W.events.SETNORMALSTYLE, E),
                jQuery(W).on(W.events.PLACEIMAGE, j),
                H.on(Y.eventSizeChange, C),
                L.on("click", ".ug-tile", M),
                L.on("click", ".ug-tile .ug-button-play", z),
                L.on("click", ".ug-tile .ug-icon-link", O);
        }),
        (this.destroy = function () {
            if (
                (L.off("click", ".ug-tile"),
                L.off("click", ".ug-tile .ug-button-play"),
                L.off("click", ".ug-tile .ug-icon-link"),
                jQuery(W).off(W.events.SETOVERSTYLE),
                jQuery(W).off(W.events.SETNORMALSTYLE),
                jQuery(W).off(W.events.PLACEIMAGE),
                H.off(Y.eventSizeChange),
                1 == F.tile_enable_textpanel)
            ) {
                var e = W.getThumbs();
                jQuery.each(e, function (e, t) {
                    var i = l(jQuery(t));
                    i && i.destroy();
                });
            }
            W.destroy();
        }),
        (this.init = function (t, i, n) {
            e(t, i, n);
        }),
        (this.setFixedMode = function () {
            (F.tile_size_by = D.sizeby.GLOBAL_RATIO), (F.tile_visible_before_image = !0);
        }),
        (this.setApproveClickFunction = function (e) {
            Y.funcParentApproveClick = e;
        }),
        (this.resizeTile = function (e, t, i, n) {
            if ((1 == Y.isTextpanelOutside && y(e, "clone", t), t)) {
                if (!i) var i = D.getTileHeightByWidth(t, e);
            } else
                var t = F.tile_width,
                    i = F.tile_height;
            switch ((B.setElementSize(e, t, i), n)) {
                default:
                case D.resizemode.FULL:
                    D.triggerSizeChangeEvent(e, !0);
                    break;
                case D.resizemode.WRAPPER_ONLY:
                    return !0;
                case D.resizemode.VISIBLE_ELEMENTS:
                    if (Y.funcCustomTileHtml) return D.triggerSizeChangeEvent(e, !0), !0;
                    b(e, t, i, !0), 1 == F.tile_enable_textpanel && 1 == F.tile_textpanel_always_on && t && y(e, "regular", t, i);
            }
        }),
        (this.resizeAllTiles = function (e, t, n) {
            i();
            var r = null;
            if ((F.tile_size_by == D.sizeby.GLOBAL_RATIO && (r = D.getTileHeightByWidth(e)), !n)) var n = W.getThumbs();
            n.each(function (i, n) {
                D.resizeTile(jQuery(n), e, r, t);
            });
        }),
        (this.triggerSizeChangeEvent = function (e, t) {
            if (!e) return !1;
            if (!t) var t = !1;
            H.trigger(Y.eventSizeChange, [e, t]);
        }),
        (this.triggerSizeChangeEventAllTiles = function (e) {
            var t = W.getThumbs();
            t.each(function () {
                var t = jQuery(this);
                D.triggerSizeChangeEvent(t, e);
            });
        }),
        (this.disableEvents = function () {
            var e = W.getThumbs();
            e.css("pointer-events", "none");
        }),
        (this.enableEvents = function () {
            var e = W.getThumbs();
            e.css("pointer-events", "auto");
        }),
        (this.setOptions = function (e) {
            (F = jQuery.extend(F, e)), W.setOptions(e);
        }),
        (this.setTileSizeOptions = function (e) {
            if (F.tile_size_by !== D.sizeby.GLOBAL_RATIO) throw new Error("setNewTileOptions works with global ration only");
            (F.tile_width = e), (F.tile_height = Math.floor(e * Y.ratioByHeight));
        }),
        (this.setCustomFunctions = function (e, t) {
            (Y.funcCustomTileHtml = e), (Y.funcCustomPositionElements = t);
        }),
        (this.run = function (e) {
            var t = W.type.GET_THUMBS_ALL;
            e === !0 && (t = W.type.GET_THUMBS_NEW);
            var i = W.getThumbs(t);
            F.tile_size_by == D.sizeby.GLOBAL_RATIO && D.resizeAllTiles(F.tile_width, D.resizemode.WRAPPER_ONLY, i),
                1 == F.tile_enable_image_effect && 0 == F.tile_image_effect_reverse && i.children(".ug-thumb-image").fadeTo(0, 0),
                W.setHtmlProperties(i),
                1 == F.tile_visible_before_image && (i.children(".ug-thumb-image").fadeTo(0, 0), W.loadThumbsImages());
        }),
        (this._____________EXTERNAL_GETTERS____________ = function () {}),
        (this.getObjThumbs = function () {
            return W;
        }),
        (this.getOptions = function () {
            return F;
        }),
        (this.getTileImage = function (e) {
            var t = e.find("img.ug-thumb-image");
            return t;
        }),
        (this.getItemByTile = function (e) {
            return W.getItemByThumb(e);
        }),
        (this.getTileHeightByWidth = function (e, t) {
            var i = h(t);
            if (null === i) return null;
            var n = Math.floor((e - Y.tileInnerReduce) * i) + Y.tileInnerReduce;
            return t && 1 == Y.isTextpanelOutside && F.tile_size_by == D.sizeby.IMAGE_RATIO && (n += g(t)), n;
        }),
        (this.getTileImageSize = function (e) {
            var t = D.getItemByTile(e);
            if (!t.thumbWidth || !t.thumbHeight) throw new Error("Can't get image size - image not inited.");
            var i = { width: t.thumbWidth, height: t.thumbHeight };
            return i;
        }),
        (this.getGlobalTileSize = function () {
            if (F.tile_size_by != D.sizeby.GLOBAL_RATIO) throw new Error("The size has to be global ratio");
            var e = { width: F.tile_width, height: F.tile_height };
            return e;
        });
}
function UGAviaControl() {
    function e(e) {
        return 0 == m ? e.pageX : e.pageY;
    }
    function t(t) {
        jQuery("body").on("touchstart", function (e) {
            return 0 == f.isControlEnabled || void (f.touchEnabled = !0);
        }),
            jQuery("body").mousemove(function (t) {
                if (0 == f.isControlEnabled) return !0;
                if (1 == f.touchEnabled) return jQuery("body").off("mousemove"), !0;
                f.isMouseInsideStrip = g.ismouseover();
                var i = u.isTouchMotionActive();
                if (1 == f.isMouseInsideStrip && 0 == i) {
                    var n = e(t);
                    l(n);
                } else s();
            });
    }
    function i(e) {
        var t = h.strip_padding_top,
            i = (h.strip_padding_bottom, g.height()),
            n = p.height();
        if (i > n) return null;
        var r = g.offset(),
            a = r.top,
            s = e - a - t;
        if (0 > s) return null;
        var o = h.thumb_height,
            l = i - h.thumb_height,
            u = l - o;
        o > s && (s = o), s > l && (s = l);
        var d = (s - o) / u,
            c = (n - i) * d;
        return (c = -1 * Math.round(c) + t);
    }
    function n(e) {
        var t = h.strip_padding_left,
            i = h.strip_padding_right,
            n = g.width() - t - i,
            r = p.width();
        if (n > r) return null;
        var a = g.offset(),
            s = a.left,
            o = e - s - t,
            l = h.thumb_width,
            u = n - h.thumb_width,
            d = u - l;
        l > o && (o = l), o > u && (o = u);
        var c = (o - l) / d,
            m = (r - n) * c;
        return (m = -1 * Math.round(m) + t);
    }
    function r() {
        if (0 == f.is_strip_moving) return !1;
        var e = u.getInnerStripPos();
        Math.floor(e) == Math.floor(f.strip_finalPos) && s();
        var t,
            i = Math.abs(f.strip_finalPos - e);
        1 > i ? (t = i) : ((t = i / 4), t > 0 && 1 > t && (t = 1)), f.strip_finalPos < e && (t *= -1);
        var n = e + t;
        u.positionInnerStrip(n);
    }
    function a() {
        return 1 != f.isStripMoving && ((f.isStripMoving = !0), void (f.handle_timeout = setInterval(r, 10)));
    }
    function s() {
        return 0 != f.isStripMoving && ((f.isStripMoving = !1), void (f.handle_timeout = clearInterval(f.handle_timeout)));
    }
    function o(e) {
        return 0 == m ? n(e) : i(e);
    }
    function l(e) {
        var t = o(e);
        return null !== t && ((f.is_strip_moving = !0), (f.strip_finalPos = t), void a());
    }
    var u,
        d,
        c,
        g,
        p,
        h,
        m,
        f = { touchEnabled: !1, isMouseInsideStrip: !1, strip_finalPos: 0, handle_timeout: "", isStripMoving: !1, isControlEnabled: !0 };
    (this.enable = function () {
        f.isControlEnabled = !0;
    }),
        (this.disable = function () {
            f.isControlEnabled = !1;
        }),
        (this.init = function (e) {
            (u = e), (c = e.getObjects()), (d = c.g_gallery), (g = c.g_objStrip), (p = c.g_objStripInner), (h = c.g_options), (m = c.isVertical), t();
        }),
        (this.destroy = function () {
            jQuery("body").off("touchstart"), jQuery("body").off("mousemove");
        });
}
function UGSlider() {
    function e(e, t, n) {
        (_e = e), n && ((he = n), (t = Te.convertCustomPrefixOptions(t, he, "slider"))), (te = jQuery(e));
        var r = _e.getObjects();
        if (
            ((ie = r.g_objWrapper),
            (ne = r.g_objThumbs),
            t.hasOwnProperty("slider_progress_indicator_type") && (Ie.slider_progress_indicator_type = t.slider_progress_indicator_type),
            "bar" == Ie.slider_progress_indicator_type && (Ie = jQuery.extend(Ie, Ee)),
            t && me.setOptions(t),
            i(),
            1 == Ie.slider_enable_bullets)
        ) {
            ye = new UGBullets();
            var a = { bullets_skin: Ie.slider_bullets_skin, bullets_space_between: Ie.slider_bullets_space_between };
            ye.init(_e, a);
        }
        Ie.slider_enable_text_panel && ((Se = new UGTextPanel()), Se.init(_e, Ie, "slider")), Ie.slider_enable_zoom_panel && ((pe = new UGZoomButtonsPanel()), pe.init(me, Ie));
        var s = _e.getGalleryID();
        we.init(Ie, !1, s);
    }
    function t() {
        if (1 == Pe.isRunOnce) return !1;
        if (((Pe.isRunOnce = !0), Ie.slider_background_color)) {
            var e = Ie.slider_background_color;
            1 != Ie.slider_background_opacity && (e = Te.convertHexToRGB(e, Ie.slider_background_opacity)), re.css("background-color", e);
        } else 1 != Ie.slider_background_opacity && ((e = Te.convertHexToRGB("#000000", Ie.slider_background_opacity)), re.css("background-color", e));
        1 == Ie.slider_control_swipe && ((ce = new UGTouchSliderControl()), ce.init(me, Ie)), 1 == Ie.slider_control_zoom && ((ge = new UGZoomSliderControl()), ge.init(me, Ie)), Se && Se.run(), V();
    }
    function i() {
        var e = _e.getOptions(),
            t = e.gallery_skin;
        "" == Ie.slider_bullets_skin && (Ie.slider_bullets_skin = t),
            "" == Ie.slider_arrows_skin && (Ie.slider_arrows_skin = t),
            "" == Ie.slider_zoompanel_skin && (Ie.slider_zoompanel_skin = t),
            "" == Ie.slider_play_button_skin && (Ie.slider_play_button_skin = t),
            "" == Ie.slider_fullscreen_button_skin && (Ie.slider_fullscreen_button_skin = t),
            (Ie.video_enable_closebutton = Ie.slider_video_enable_closebutton),
            "zoom" != e.gallery_mousewheel_role && (Ie.slider_zoom_mousewheel = !1);
    }
    function n(e, t) {
        var i = "ug-type-square";
        "round" == Ie.slider_videoplay_button_type && (i = "ug-type-round");
        var n = "";
        return (
            (n += "<div class='ug-slide-wrapper ug-slide" + t + "'>"),
            (n += "<div class='ug-item-wrapper'></div>"),
            (n += "<div class='ug-slider-preloader " + e + "'></div>"),
            (n += "<div class='ug-button-videoplay " + i + "' style='display:none'></div>"),
            (n += "</div>")
        );
    }
    function r(e) {
        e && (ie = e);
        var t = q(),
            i = (_e.getOptions(), "<div class='ug-slider-wrapper'>");
        if (
            ((i += "<div class='ug-slider-inner'>"),
            (i += n(t, 1)),
            (i += n(t, 2)),
            (i += n(t, 3)),
            (i += "</div>"),
            1 == Ie.slider_enable_arrows &&
                ((i += "<div class='ug-slider-control ug-arrow-left ug-skin-" + Ie.slider_arrows_skin + "'></div>"), (i += "<div class='ug-slider-control ug-arrow-right ug-skin-" + Ie.slider_arrows_skin + "'></div>")),
            1 == Ie.slider_enable_play_button && (i += "<div class='ug-slider-control ug-button-play ug-skin-" + Ie.slider_play_button_skin + "'></div>"),
            1 == Ie.slider_enable_fullscreen_button && (i += "<div class='ug-slider-control ug-button-fullscreen ug-skin-" + Ie.slider_fullscreen_button_skin + "'></div>"),
            (i += "</div>"),
            ie.append(i),
            (re = ie.children(".ug-slider-wrapper")),
            (ae = re.children(".ug-slider-inner")),
            (se = ae.children(".ug-slide1")),
            (oe = ae.children(".ug-slide2")),
            (le = ae.children(".ug-slide3")),
            se.data("slidenum", 1),
            oe.data("slidenum", 2),
            le.data("slidenum", 3),
            ye && ye.appendHTML(re),
            1 == Ie.slider_enable_arrows && ((ue = re.children(".ug-arrow-left")), (de = re.children(".ug-arrow-right"))),
            1 == Ie.slider_enable_play_button && (ve = re.children(".ug-button-play")),
            1 == Ie.slider_enable_fullscreen_button && (be = re.children(".ug-button-fullscreen")),
            1 == Ie.slider_enable_progress_indicator)
        ) {
            xe = Te.initProgressIndicator(Ie.slider_progress_indicator_type, Ie, re);
            var r = xe.getType();
            "bar" == r && "pie" == Ie.slider_progress_indicator_type && ((Ie.slider_progress_indicator_type = "bar"), (Ie = jQuery.extend(Ie, Ee))), _e.setProgressIndicator(xe);
        }
        if (1 == Ie.slider_enable_text_panel && (Se.appendHTML(re), 0 == Ie.slider_textpanel_always_on)) {
            var a = Se.getElement();
            a.hide().data("isHidden", !0), (Pe.isTextPanelSaparateHover = !0);
        }
        1 == Ie.slider_enable_zoom_panel && pe.appendHTML(re), we.setHtml(ae);
    }
    function a(e) {
        var t = $(e);
        Te.placeElementInParentCenter(t);
        var i = J(e);
        Te.placeElementInParentCenter(i);
    }
    function s() {
        if (
            (ye &&
                ((objBullets = ye.getElement()),
                Te.placeElement(objBullets, Ie.slider_bullets_align_hor, Ie.slider_bullets_align_vert, Ie.slider_bullets_offset_hor, Ie.slider_bullets_offset_vert),
                Te.placeElement(objBullets, Ie.slider_bullets_align_hor, Ie.slider_bullets_align_vert, Ie.slider_bullets_offset_hor, Ie.slider_bullets_offset_vert)),
            1 == Ie.slider_enable_arrows &&
                (Te.placeElement(ue, Ie.slider_arrow_left_align_hor, Ie.slider_arrow_left_align_vert, Ie.slider_arrow_left_offset_hor, Ie.slider_arrow_left_offset_vert),
                Te.placeElement(de, Ie.slider_arrow_right_align_hor, Ie.slider_arrow_left_align_vert, Ie.slider_arrow_right_offset_hor, Ie.slider_arrow_right_offset_vert)),
            0 == Ie.slider_controls_always_on && M(!0),
            xe)
        ) {
            var e = xe.getElement();
            if ("bar" == Ie.slider_progress_indicator_type) {
                var t = re.width();
                xe.setSize(t), Te.placeElement(e, "left", Ie.slider_progress_indicator_align_vert, 0, Ie.slider_progress_indicator_offset_vert);
            } else Te.placeElement(e, Ie.slider_progress_indicator_align_hor, Ie.slider_progress_indicator_align_vert, Ie.slider_progress_indicator_offset_hor, Ie.slider_progress_indicator_offset_vert);
        }
        Se && Se.positionPanel(), o(), a(se), a(oe), a(le), j();
    }
    function o() {
        if (
            (ve && Te.placeElement(ve, Ie.slider_play_button_align_hor, Ie.slider_play_button_align_vert, Ie.slider_play_button_offset_hor, Ie.slider_play_button_offset_vert),
            be && Te.placeElement(be, Ie.slider_fullscreen_button_align_hor, Ie.slider_fullscreen_button_align_vert, Ie.slider_fullscreen_button_offset_hor, Ie.slider_fullscreen_button_offset_vert),
            pe)
        ) {
            var e = pe.getElement();
            Te.placeElement(e, Ie.slider_zoompanel_align_hor, Ie.slider_zoompanel_align_vert, Ie.slider_zoompanel_offset_hor, Ie.slider_zoompanel_offset_vert);
        }
    }
    function l() {
        var e,
            t,
            i,
            n,
            r = me.getSlidesReference(),
            a = 0,
            s = 0,
            o = 0;
        (i = me.isSlideHasItem(r.objNextSlide)),
            (n = me.isSlideHasItem(r.objPrevSlide)),
            n ? ((o = r.objPrevSlide.outerWidth()), r.objPrevSlide.css("z-index", 1)) : r.objPrevSlide.hide(),
            (t = o + r.objCurrentSlide.outerWidth()),
            (e = t),
            i ? ((e = t + r.objNextSlide.outerWidth()), r.objPrevSlide.css("z-index", 2)) : r.objNextSlide.hide(),
            r.objCurrentSlide.css("z-index", 3),
            Te.placeElement(r.objCurrentSlide, o, a),
            ae.css({ left: -o + "px", width: e + "px" }),
            n && (Te.placeElement(r.objPrevSlide, s, a), Te.showElement(r.objPrevSlide)),
            i && (Te.showElement(r.objNextSlide), Te.placeElement(r.objNextSlide, t, a));
    }
    function u(e) {
        var t = e.data("index");
        if (void 0 === t || null == t) return !1;
        var i = _e.getItem(t);
        return !!i && void f(e, i);
    }
    function d(e) {
        e.stop(!0).show(100);
    }
    function c(e) {
        e.stop(!0).hide(100);
    }
    function g(e, t) {
        var i = Ie.slider_image_border_width;
        if (10 >= i) return i;
        var n = Te.getElementSize(e),
            r = n.width,
            a = n.height;
        if ((t && (t.hasOwnProperty("imageWidth") && (r = t.imageWidth), t.hasOwnProperty("imageHeight") && (a = t.imageHeight)), 0 >= r)) return i;
        var s = a > r ? r : a,
            o = 2 * i,
            l = o / s;
        if (l < Ie.slider_image_border_maxratio) return i;
        var i = (s * Ie.slider_image_border_maxratio) / 2;
        return (i = Math.round(i));
    }
    function p(e, t, i) {
        var n = {};
        if (1 == Ie.slider_image_border) {
            n["border-style"] = "solid";
            var r = g(e, i);
            (n["border-width"] = r + "px"), (n["border-color"] = Ie.slider_image_border_color), (n["border-radius"] = Ie.slider_image_border_radius);
        }
        "image" != t && 1 == Ie.slider_video_constantsize && (n["background-color"] = "#000000"), 1 == Ie.slider_image_shadow && (n["box-shadow"] = "3px 3px 10px 0px #353535"), e.css(n);
    }
    function h(e, t) {
        var i = Ie.slider_video_constantsize_width,
            n = Ie.slider_video_constantsize_height,
            r = Ie.slider_video_constantsize_scalemode,
            a = Te.scaleImageExactSizeInParent(e, t.imageWidth, t.imageHeight, i, n, r);
        return a;
    }
    function m(e, t, i) {
        var n = e.children(".ug-item-wrapper"),
            r = $(e);
        if ("undefined" == typeof t.urlImage || "" == t.urlImage) throw new Error("The slide don't have big image defined ( data-image='imageurl' ). Please check gallery items.", "showbig");
        var a = t.urlImage,
            s = e.data("urlImage");
        e.data("urlImage", a);
        var o = me.getScaleMode(e),
            l = me.getSlideType(e);
        if (((objPadding = me.getObjImagePadding()), s == a && i !== !0)) {
            var u = n.children("img");
            (0 == t.imageWidth || 0 == t.imageHeight) && _e.checkFillImageSize(u, t);
            var g = {};
            (g = "image" != l && 1 == Ie.slider_video_constantsize ? h(u, t) : Te.scaleImageFitParent(u, t.imageWidth, t.imageHeight, o, objPadding)), p(u, l, g), fe.trigger(me.events.AFTER_PUT_IMAGE, e);
        } else if (((u = Te.placeImageInsideParent(a, n, t.imageWidth, t.imageHeight, o, objPadding)), 1 == t.isBigImageLoaded)) {
            if ((u.fadeTo(0, 1), c(r), "image" != l && 1 == Ie.slider_video_constantsize)) var g = h(u, t);
            else var g = Te.getImageInsideParentData(n, t.imageWidth, t.imageHeight, o, objPadding);
            u.css("width", g.imageWidth + "px"), p(u, l, g), fe.trigger(me.events.AFTER_PUT_IMAGE, e);
        } else
            u.fadeTo(0, 0),
                d(r),
                e.data("isLoading", !0),
                me.isSlideCurrent(e) && fe.trigger(me.events.CURRENTSLIDE_LOAD_START),
                u.data("itemIndex", t.index),
                u.on("load", function () {
                    var e = jQuery(this),
                        t = e.data("itemIndex");
                    e.fadeTo(0, 1);
                    var i = e.parent().parent(),
                        n = me.getSlideType(i),
                        r = $(i),
                        a = me.getObjImagePadding(),
                        s = me.getScaleMode(i);
                    c(r), i.data("isLoading", !1), me.isSlideCurrent(i) && fe.trigger(me.events.CURRENTSLIDE_LOAD_END), _e.onItemBigImageLoaded(null, e);
                    var o = _e.getItem(t),
                        l = {};
                    "image" != n && 1 == Ie.slider_video_constantsize ? h(e, o) : (l = Te.scaleImageFitParent(e, o.imageWidth, o.imageHeight, s, a)), e.fadeTo(0, 1), p(e, n, l), fe.trigger(me.events.AFTER_PUT_IMAGE, i);
                });
    }
    function f(e, t) {
        try {
            var i = e.children(".ug-item-wrapper");
            if (null == t) return i.html(""), e.removeData("index"), e.removeData("type"), e.removeData("urlImage"), !1;
            e.data("index"), e.data("index", t.index), e.data("type", t.type), 1 == Ie.slider_enable_links && "image" == t.type && (t.link ? e.addClass("ug-slide-clickable") : e.removeClass("ug-slide-clickable")), m(e, t);
            var n = J(e);
            switch (t.type) {
                case "image":
                    n.hide();
                    break;
                default:
                    n.show();
            }
        } catch (e) {
            throw ("undefined" != typeof e.fileName && "showbig" == e.fileName && _e.showErrorMessageReplaceGallery(e.message), i.html(""), new Error(e));
        }
    }
    function _() {
        if (!Se) return !1;
        if (1 == b()) return !1;
        var e = Se.getElement(),
            t = 0;
        (1 == Pe.isTextPanelSaparateHover || 1 == Ie.slider_textpanel_always_on) && (t = Ie.slider_controls_appear_duration), e.stop().fadeTo(t, 0), e.data("isHidden", !0);
    }
    function v() {
        if (!Se) return !1;
        if (0 == b()) return !1;
        var e = Se.getElement(),
            t = 0;
        (1 == Pe.isTextPanelSaparateHover || 1 == Ie.slider_textpanel_always_on) && (e.show(), Se.positionElements(), (t = Ie.slider_controls_appear_duration)), e.stop().show().fadeTo(t, 1), e.data("isHidden", !1);
    }
    function b() {
        var e = Se.getElement(),
            t = e.data("isHidden");
        return t !== !1;
    }
    function y(e, t) {
        if (void 0 == t) var t = me.getCurrentSlide();
        var i = me.getSlideType(t);
        if (i != e) throw new Error("Wrong slide type: " + i + ", should be: " + e);
        return !0;
    }
    function w() {
        var e = me.getCurrentSlide(),
            t = me.getSlideImage(e),
            i = Te.getElementSize(e),
            n = i.left,
            r = i.top;
        if (1 == Ie.slider_video_constantsize) {
            var a = Te.getElementSize(t);
            (n += a.left), (r += a.top);
        } else (n += Ie.slider_video_padding_left), (r += Ie.slider_video_padding_top);
        we.setPosition(n, r);
    }
    function T() {
        var e = Ie.slider_video_constantsize_width,
            t = Ie.slider_video_constantsize_height;
        we.setSize(e, t);
        var i = we.getObject();
        p(i, "video");
    }
    function x(e, t, i) {
        fe.trigger(me.events.TRANSITION_START);
        var n = Ie.slider_transition;
        switch ((i && (n = i), me.stopSlideAction(null, !0), n)) {
            default:
            case "fade":
                E(t);
                break;
            case "slide":
                S(e, t);
                break;
            case "lightbox_open":
                E(t, !1, !0);
        }
    }
    function S(e, t) {
        var i = me.isAnimating();
        if (1 == i) return (Pe.itemWaiting = t), !0;
        null != Pe.itemWaiting && (Pe.itemWaiting = null);
        var n = me.getSlidesReference();
        switch (e) {
            case "right":
                f(n.objPrevSlide, t), l();
                var r = Te.getElementSize(n.objPrevSlide),
                    a = -r.left;
                me.switchSlideNums("right");
                break;
            case "left":
                f(n.objNextSlide, t), l();
                var s = Te.getElementSize(n.objNextSlide),
                    a = -s.left;
                me.switchSlideNums("left");
                break;
            default:
                throw new Error("wrong direction: " + e);
        }
        var o = Ie.slider_transition_speed,
            u = Ie.slider_transition_easing,
            d = {
                duration: o,
                easing: u,
                queue: !1,
                always: function () {
                    if ((me.stopSlideAction(), we.hide(), null != Pe.itemWaiting)) {
                        var e = K(Pe.itemWaiting);
                        S(e, Pe.itemWaiting);
                    } else me.placeNabourItems(), fe.trigger(me.events.TRANSITION_END);
                },
            };
        ae.animate({ left: a + "px" }, d);
    }
    function I(e, t, i) {
        i ? e.fadeTo(Ie.slider_transition_speed, t, i) : e.fadeTo(Ie.slider_transition_speed, t);
    }
    function E(e, t, i) {
        if (!t) var t = !1;
        var n = me.getSlidesReference();
        f(n.objNextSlide, e);
        var r = Te.getElementSize(n.objCurrentSlide);
        Te.placeElement(n.objNextSlide, r.left, r.top);
        var a = Pe.numCurrent;
        if (((Pe.numCurrent = Pe.numNext), (Pe.numNext = a), fe.trigger(me.events.ITEM_CHANGED), n.objNextSlide.stop(!0), n.objCurrentSlide.stop(!0), 1 == t))
            n.objCurrentSlide.fadeTo(0, 0), n.objNextSlide.fadeTo(0, 1), me.placeNabourItems(), fe.trigger(me.events.TRANSITION_END), i !== !0 && we.hide();
        else {
            if (
                (n.objNextSlide.fadeTo(0, 0),
                I(n.objCurrentSlide, 0, function () {
                    me.placeNabourItems(), fe.trigger(me.events.TRANSITION_END), i !== !0 && we.hide();
                }),
                1 == we.isVisible())
            ) {
                var s = we.getObject();
                I(s, 0);
            }
            I(n.objNextSlide, 1);
        }
    }
    function P() {
        1 == Ie.slider_fullscreen_button_mobilehide && be && be.hide(), 1 == Ie.slider_play_button_mobilehide && ve && ve.hide(), 1 == Ie.slider_zoompanel_mobilehide && pe && pe.getElement().hide();
    }
    function C() {
        1 == Ie.slider_fullscreen_button_mobilehide && be && be.show(), 1 == Ie.slider_play_button_mobilehide && ve && ve.show(), 1 == Ie.slider_zoompanel_mobilehide && pe && pe.getElement().show();
    }
    function j() {
        var e = _e.isMobileMode();
        e ? P() : C();
    }
    function A() {
        var e = re.children(".ug-slider-control");
        return e;
    }
    function M(e) {
        if (0 == Te.isTimePassed("sliderControlsToggle")) return !1;
        if (0 == Pe.isControlsVisible) return !1;
        if (!e) var e = !1;
        var t = A();
        e === !0
            ? t.stop().fadeTo(0, 0).hide()
            : t.stop().fadeTo(Ie.slider_controls_appear_duration, 0, function () {
                  t.hide();
              }),
            (Pe.isControlsVisible = !1);
    }
    function z(e) {
        if (0 == Te.isTimePassed("sliderControlsToggle")) return !1;
        if (1 == Pe.isControlsVisible) return !0;
        if (!e) var e = !1;
        var t = A();
        e === !0 ? t.stop().show() : (t.stop().show().fadeTo(0, 0), t.fadeTo(Ie.slider_controls_appear_duration, 1)), (Pe.isControlsVisible = !0);
    }
    function O() {
        0 == Pe.isControlsVisible ? z() : M();
    }
    function k(e) {
        if (e == Pe.currentControlsMode) return !1;
        switch (e) {
            case "image":
                pe && pe.getElement().show();
                break;
            case "video":
                pe && pe.getElement().hide();
                break;
            default:
                throw new Error("wrong controld mode: " + e);
        }
        Pe.currentControlsMode = e;
    }
    function L(e, t, i) {
        var n = _e.getSelectedItem();
        me.setItem(n, !1, i);
        var r = n.index;
        ye && ye.setActive(r), Se && 0 == Pe.isTextPanelSaparateHover && v(), k("image" == n.type ? "image" : "video");
    }
    function H(e, t) {
        _e.selectItem(t);
    }
    function N(e) {
        return !(!ce || 0 != ce.isTapEventOccured(e)) || void fe.trigger(me.events.CLICK, e);
    }
    function D() {
        var e = me.getCurrentSlide(),
            t = e.hasClass("ug-slide-clickable"),
            i = me.getCurrentItem();
        return t
            ? (0 == Ie.slider_links_newpage ? (location.href = i.link) : window.open(i.link, "_blank"), !0)
            : void (
                  0 == Ie.slider_controls_always_on &&
                  1 == Ie.slider_controls_appear_ontap &&
                  1 == me.isCurrentSlideType("image") &&
                  (O(), Se && 1 == Ie.slider_textpanel_always_on && me.isCurrentSlideType("image") && me.isCurrentSlideImageFit() && v())
              );
    }
    function R(e) {
        Se && me.isCurrentSlideType("image") && 0 == me.isCurrentSlideImageFit() && _();
    }
    function G() {
        z();
    }
    function B() {
        M();
    }
    function W(e) {
        var t = e.parent();
        me.startSlideAction(t);
    }
    function F() {
        _e.isPlayMode() && _e.pausePlaying(), fe.trigger(me.events.ACTION_START);
    }
    function Q() {
        _e.isPlayMode() && _e.continuePlaying(), fe.trigger(me.events.ACTION_END);
    }
    function Y(e, t, i) {
        se.data("index") == t && ((objItem = _e.getItem(t)), m(se, objItem, !0)), oe.data("index") == t && ((objItem = _e.getItem(t)), m(oe, objItem, !0)), le.data("index") == t && ((objItem = _e.getItem(t)), m(le, objItem, !0));
    }
    function X(e, t) {
        t = jQuery(t);
        var i = me.getSlideImage(t),
            n = J(t),
            r = Te.getElementSize(i);
        Te.placeElement(n, "center", "middle", r.left, r.top, i);
    }
    function U(e) {
        var t = J(e);
        Te.addClassOnHover(t), Te.setButtonOnClick(t, W);
    }
    function V() {
        te.on(_e.events.ITEM_IMAGE_UPDATED, Y),
            te.on(_e.events.ITEM_CHANGE, L),
            ye && jQuery(ye).on(ye.events.BULLET_CLICK, H),
            1 == Ie.slider_enable_arrows && (Te.addClassOnHover(de, "ug-arrow-hover"), Te.addClassOnHover(ue, "ug-arrow-hover"), _e.setNextButton(de), _e.setPrevButton(ue)),
            0 == Ie.slider_controls_always_on && re.hover(G, B),
            re.on("touchend click", N),
            fe.on(me.events.CLICK, D),
            Se && 1 == Pe.isTextPanelSaparateHover && re.hover(v, _),
            ve && (Te.addClassOnHover(ve, "ug-button-hover"), _e.setPlayButton(ve)),
            be && (Te.addClassOnHover(be, "ug-button-hover"), _e.setFullScreenToggleButton(be)),
            ge && fe.on(me.events.ZOOM_CHANGE, R),
            pe && pe.initEvents(),
            we.initEvents(),
            jQuery(we).on(we.events.SHOW, F),
            jQuery(we).on(we.events.HIDE, Q),
            U(se),
            U(oe),
            U(le),
            fe.on(me.events.AFTER_PUT_IMAGE, X),
            re.on("mouseenter", ".ug-item-wrapper img", function (e) {
                fe.trigger(me.events.IMAGE_MOUSEENTER);
            }),
            re.on("mouseleave", ".ug-item-wrapper img", function (e) {
                var t = me.isMouseInsideSlideImage(e);
                0 == t && fe.trigger(me.events.IMAGE_MOUSELEAVE);
            });
    }
    function q() {
        var e;
        switch (Ie.slider_loader_type) {
            default:
            case 1:
                e = "ug-loader1";
                break;
            case 2:
                e = "ug-loader2";
                break;
            case 3:
                e = "ug-loader3";
                break;
            case 4:
                e = "ug-loader4";
                break;
            case 5:
                e = "ug-loader5";
                break;
            case 6:
                e = "ug-loader6";
                break;
            case 7:
                e = "ug-loader7";
                break;
            case 8:
                e = "ug-loader8";
                break;
            case 9:
                e = "ug-loader9";
        }
        return "black" == Ie.slider_loader_color && (e += " ug-loader-black"), e;
    }
    function Z(e) {
        switch (e) {
            case 1:
                return se;
            case 2:
                return oe;
            case 3:
                return le;
            default:
                throw new Error("wrong num: " + e);
        }
    }
    function K(e) {
        var t = me.getSlidesReference(),
            i = t.objCurrentSlide.data("index"),
            n = e.index,
            r = "left";
        return i > n && (r = "right"), r;
    }
    function $(e) {
        if (!e) var e = me.getCurrentSlide();
        var t = e.children(".ug-slider-preloader");
        return t;
    }
    function J(e) {
        var t = e.children(".ug-button-videoplay");
        return t;
    }
    function ee(e) {
        if (!e) var e = me.getCurrentSlide();
        var t = e.data("index");
        if (void 0 == t) return null;
        var i = _e.getItem(t);
        return i;
    }
    var te,
        ie,
        ne,
        re,
        ae,
        se,
        oe,
        le,
        ue,
        de,
        ce,
        ge,
        pe,
        he,
        me = this,
        fe = jQuery(me),
        _e = new UniteGalleryMain(),
        ve = null,
        be = null,
        ye = null,
        we = new UGVideoPlayer(),
        Te = new UGFunctions(),
        xe = null,
        Se = null;
    this.events = {
        ITEM_CHANGED: "item_changed",
        BEFORE_SWITCH_SLIDES: "before_switch",
        BEFORE_RETURN: "before_return",
        AFTER_RETURN: "after_return",
        ZOOM_START: "slider_zoom_start",
        ZOOM_END: "slider_zoom_end",
        ZOOMING: "slider_zooming",
        ZOOM_CHANGE: "slider_zoom_change",
        START_DRAG: "start_drag",
        AFTER_DRAG_CHANGE: "after_drag_change",
        ACTION_START: "action_start",
        ACTION_END: "action_end",
        CLICK: "slider_click",
        TRANSITION_START: "slider_transition_start",
        TRANSITION_END: "slider_transition_end",
        AFTER_PUT_IMAGE: "after_put_image",
        IMAGE_MOUSEENTER: "slider_image_mouseenter",
        IMAGE_MOUSELEAVE: "slider_image_mouseleave",
        CURRENTSLIDE_LOAD_START: "slider_current_loadstart",
        CURRENTSLIDE_LOAD_END: "slider_current_loadend",
    };
    var Ie = {
            slider_scale_mode: "fill",
            slider_scale_mode_media: "fill",
            slider_scale_mode_fullscreen: "down",
            slider_item_padding_top: 0,
            slider_item_padding_bottom: 0,
            slider_item_padding_left: 0,
            slider_item_padding_right: 0,
            slider_background_color: "",
            slider_background_opacity: 1,
            slider_image_padding_top: 0,
            slider_image_padding_bottom: 0,
            slider_image_padding_left: 0,
            slider_image_padding_right: 0,
            slider_image_border: !1,
            slider_image_border_width: 10,
            slider_image_border_color: "#ffffff",
            slider_image_border_radius: 0,
            slider_image_border_maxratio: 0.35,
            slider_image_shadow: !1,
            slider_video_constantsize: !1,
            slider_video_constantsize_scalemode: "fit",
            slider_video_constantsize_width: 854,
            slider_video_constantsize_height: 480,
            slider_video_padding_top: 0,
            slider_video_padding_bottom: 0,
            slider_video_padding_left: 0,
            slider_video_padding_right: 0,
            slider_video_enable_closebutton: !0,
            slider_transition: "slide",
            slider_transition_speed: 300,
            slider_transition_easing: "easeInOutQuad",
            slider_control_swipe: !0,
            slider_control_zoom: !0,
            slider_zoom_mousewheel: !0,
            slider_vertical_scroll_ondrag: !1,
            slider_loader_type: 1,
            slider_loader_color: "white",
            slider_enable_links: !0,
            slider_links_newpage: !1,
            slider_enable_bullets: !1,
            slider_bullets_skin: "",
            slider_bullets_space_between: -1,
            slider_bullets_align_hor: "center",
            slider_bullets_align_vert: "bottom",
            slider_bullets_offset_hor: 0,
            slider_bullets_offset_vert: 10,
            slider_enable_arrows: !0,
            slider_arrows_skin: "",
            slider_arrow_left_align_hor: "left",
            slider_arrow_left_align_vert: "middle",
            slider_arrow_left_offset_hor: 20,
            slider_arrow_left_offset_vert: 0,
            slider_arrow_right_align_hor: "right",
            slider_arrow_right_align_vert: "middle",
            slider_arrow_right_offset_hor: 20,
            slider_arrow_right_offset_vert: 0,
            slider_enable_progress_indicator: !0,
            slider_progress_indicator_type: "pie",
            slider_progress_indicator_align_hor: "right",
            slider_progress_indicator_align_vert: "top",
            slider_progress_indicator_offset_hor: 10,
            slider_progress_indicator_offset_vert: 10,
            slider_enable_play_button: !0,
            slider_play_button_skin: "",
            slider_play_button_align_hor: "left",
            slider_play_button_align_vert: "top",
            slider_play_button_offset_hor: 40,
            slider_play_button_offset_vert: 8,
            slider_play_button_mobilehide: !1,
            slider_enable_fullscreen_button: !0,
            slider_fullscreen_button_skin: "",
            slider_fullscreen_button_align_hor: "left",
            slider_fullscreen_button_align_vert: "top",
            slider_fullscreen_button_offset_hor: 11,
            slider_fullscreen_button_offset_vert: 9,
            slider_fullscreen_button_mobilehide: !1,
            slider_enable_zoom_panel: !0,
            slider_zoompanel_skin: "",
            slider_zoompanel_align_hor: "left",
            slider_zoompanel_align_vert: "top",
            slider_zoompanel_offset_hor: 12,
            slider_zoompanel_offset_vert: 92,
            slider_zoompanel_mobilehide: !1,
            slider_controls_always_on: !1,
            slider_controls_appear_ontap: !0,
            slider_controls_appear_duration: 300,
            slider_enable_text_panel: !0,
            slider_textpanel_always_on: !0,
            slider_videoplay_button_type: "square",
        },
        Ee = { slider_progress_indicator_align_hor: "left", slider_progress_indicator_align_vert: "bottom", slider_progress_indicator_offset_hor: 0, slider_progress_indicator_offset_vert: 0 },
        Pe = { isRunOnce: !1, isTextPanelSaparateHover: !1, numPrev: 1, numCurrent: 2, numNext: 3, isControlsVisible: !0, currentControlsMode: "image" };
    (this.switchSlideNums = function (e) {
        switch ((fe.trigger(me.events.BEFORE_SWITCH_SLIDES), e)) {
            case "left":
                var t = Pe.numCurrent;
                (Pe.numCurrent = Pe.numNext), (Pe.numNext = Pe.numPrev), (Pe.numPrev = t);
                break;
            case "right":
                var t = Pe.numCurrent;
                (Pe.numCurrent = Pe.numPrev), (Pe.numPrev = Pe.numNext), (Pe.numNext = t);
                break;
            default:
                throw new Error("wrong direction: " + e);
        }
        fe.trigger(me.events.ITEM_CHANGED);
    }),
        (this.destroy = function () {
            fe.off(me.events.AFTER_PUT_IMAGE),
                te.off(_e.events.ITEM_IMAGE_UPDATED),
                te.off(_e.events.ITEM_CHANGE),
                ye && jQuery(ye).on(ye.events.BULLET_CLICK),
                re.off("mouseenter"),
                re.off("mouseleave"),
                re.off("touchend"),
                re.off("click"),
                fe.off(me.events.CLICK),
                ge && fe.off(me.events.ZOOM_CHANGE),
                fe.off(me.events.BEFORE_SWITCH_SLIDES),
                jQuery(we).off(we.events.SHOW),
                jQuery(we).off(we.events.HIDE),
                we.destroy(),
                re.off("mouseenter", ".ug-item-wrapper img"),
                re.off("mouseleave", ".ug-item-wrapper img");
        }),
        (this.________EXTERNAL_GENERAL___________ = function () {}),
        (this.init = function (t, i, n) {
            e(t, i, n);
        }),
        (this.getSlideImage = function (e) {
            if (!e) var e = me.getCurrentSlide();
            var t = e.find(".ug-item-wrapper img");
            return t;
        }),
        (this.setHtml = function (e) {
            r(e);
        }),
        (this.run = function () {
            t();
        }),
        (this.isInnerInPlace = function () {
            var e = me.getSlidesReference(),
                t = Te.getElementSize(e.objCurrentSlide),
                i = -t.left,
                n = Te.getElementSize(ae);
            return i == n.left;
        }),
        (this.isAnimating = function () {
            var e = ae.is(":animated");
            return e;
        }),
        (this.isSlideCurrent = function (e) {
            var t = e.data("slidenum");
            return Pe.numCurrent == t;
        }),
        (this.isSlideHasItem = function (e) {
            var t = e.data("index");
            return void 0 !== t && null !== t;
        }),
        (this.getObjImagePadding = function () {
            var e = { padding_top: Ie.slider_image_padding_top, padding_bottom: Ie.slider_image_padding_bottom, padding_left: Ie.slider_image_padding_left, padding_right: Ie.slider_image_padding_right };
            return e;
        }),
        (this.getSlidesReference = function () {
            var e = { objPrevSlide: Z(Pe.numPrev), objNextSlide: Z(Pe.numNext), objCurrentSlide: Z(Pe.numCurrent) };
            return e;
        }),
        (this.getCurrentSlide = function () {
            var e = me.getSlidesReference();
            return e.objCurrentSlide;
        }),
        (this.getCurrentItemIndex = function () {
            var e = me.getSlidesReference(),
                t = e.objCurrentSlide.data("index");
            return (null === t || void 0 === t) && (t = -1), t;
        }),
        (this.getCurrentItem = function () {
            var e = me.getCurrentItemIndex();
            if (-1 == e) return null;
            var t = _e.getItem(e);
            return t;
        }),
        (this.getSlideType = function (e) {
            void 0 == e && (e = me.getCurrentSlide());
            var t = e.data("type");
            return t;
        }),
        (this.isMouseInsideSlideImage = function (e) {
            var t = me.getSlideImage(),
                i = Te.getMousePosition(e);
            void 0 === i.pageX && (i = ce.getLastMousePos());
            var n = Te.getMouseElementPoint(i, t),
                r = Te.getElementSize(t);
            return (isMouseInside = Te.isPointInsideElement(n, r)), isMouseInside;
        }),
        (this.isCurrentSlideType = function (e) {
            var t = me.getSlideType();
            return t == e;
        }),
        (this.isCurrentSlideLoadingImage = function () {
            var e = me.getCurrentSlide(),
                t = e.data("isLoading");
            return t === !0;
        }),
        (this.setItem = function (e, t, i) {
            var n = me.getSlidesReference(),
                r = n.objCurrentSlide.data("index"),
                a = e.index;
            if (a == r) return !0;
            var s = void 0 == r;
            if (s) f(n.objCurrentSlide, e), me.placeNabourItems();
            else {
                var o = "left";
                _e.getNumItems(), "next" == i ? (o = "left") : "prev" == i || r > a ? (o = "right") : r > a && (o = "right"), x(o, e, t);
            }
        }),
        (this.placeNabourItems = function () {
            var e = me.getSlidesReference(),
                t = e.objCurrentSlide.data("index"),
                i = _e.getPrevItem(t),
                n = _e.getNextItem(t);
            f(e.objNextSlide, n), f(e.objPrevSlide, i), l();
        }),
        (this.________EXTERNAL_API___________ = function () {}),
        (this.stopSlideAction = function (e, t) {
            e || (e = me.getCurrentSlide()), t === !0 ? we.pause() : we.hide();
        }),
        (this.startSlideAction = function (e) {
            e || (e = me.getCurrentSlide());
            var t = ee(e);
            if ("image" == t.type) return !0;
            switch ((1 == Ie.slider_video_constantsize && T(), w(), we.show(), t.type)) {
                case "youtube":
                    we.playYoutube(t.videoid);
                    break;
                case "vimeo":
                    we.playVimeo(t.videoid);
                    break;
                case "html5video":
                    we.playHtml5Video(t.videoogv, t.videowebm, t.videomp4, t.urlImage);
                    break;
                case "soundcloud":
                    we.playSoundCloud(t.trackid);
                    break;
                case "wistia":
                    we.playWistia(t.videoid);
            }
        }),
        (this.getScaleMode = function (e) {
            if (!e) var e = me.getCurrentSlide();
            var t = me.getSlideType(e);
            return "image" != t ? Ie.slider_scale_mode_media : Ie.slider_scale_mode == Ie.slider_scale_mode_fullscreen ? Ie.slider_scale_mode : 1 == _e.isFullScreen() ? Ie.slider_scale_mode_fullscreen : Ie.slider_scale_mode;
        }),
        (this.getObjects = function () {
            var e = { g_objSlider: re, g_objInner: ae, g_options: Ie, g_objZoomSlider: ge };
            return e;
        }),
        (this.getObjZoom = function () {
            return ge;
        }),
        (this.getOptions = function () {
            return Ie;
        }),
        (this.getElement = function () {
            return re;
        }),
        (this.getVideoObject = function () {
            return we;
        }),
        (this.isCurrentSlideImageFit = function () {
            var e = me.getCurrentSlide();
            me.getSlideType(e), y("image", e);
            var t = me.getSlideImage(e);
            if (0 == t.length) return !1;
            var i = Te.isImageFitParent(t);
            return i;
        }),
        (this.isCurrentImageInPlace = function () {
            var e = me.getSlideImage();
            if (0 == e.length) return !1;
            var t = me.getScaleMode(),
                i = me.getObjImagePadding(),
                n = ee(),
                r = e.parent(),
                a = Te.getImageInsideParentData(r, n.imageWidth, n.imageHeight, t, i),
                s = Te.getElementSize(e),
                o = !1;
            return a.imageWidth == s.width && (o = !0), o;
        }),
        (this.isSlideActionActive = function () {
            return we.isVisible();
        }),
        (this.isSwiping = function () {
            if (!ce) return !1;
            var e = ce.isTouchActive();
            return e;
        }),
        (this.isPreloading = function () {
            var e = $();
            return !!e.is(":visible");
        }),
        (this.setOptions = function (e) {
            he && (e = Te.convertCustomPrefixOptions(e, he, "slider")), (Ie = jQuery.extend(Ie, e));
        }),
        (this.setSize = function (e, t) {
            if (0 > e || 0 > t) return !0;
            var i = {};
            (i.width = e + "px"), (i.height = t + "px"), re.css(i);
            var n = {};
            (n.height = t + "px"), (n.top = "0px"), (n.left = "0px"), ae.css(n);
            var r = {};
            (r.height = t + "px"), (r.width = e + "px"), se.css(r), oe.css(r), le.css(r);
            var a = e - Ie.slider_item_padding_left - Ie.slider_item_padding_right,
                o = t - Ie.slider_item_padding_top - Ie.slider_item_padding_bottom,
                d = {};
            (d.width = a + "px"),
                (d.height = o + "px"),
                (d.top = Ie.slider_item_padding_top + "px"),
                (d.left = Ie.slider_item_padding_left + "px"),
                re.find(".ug-item-wrapper").css(d),
                Se && Se.setSizeByParent(),
                s(),
                u(se),
                u(oe),
                u(le),
                l();
            var c = me.getSlideType();
            if ("image" != c && 1 == Ie.slider_video_constantsize) T();
            else {
                var g = e - Ie.slider_video_padding_left - Ie.slider_video_padding_right,
                    p = t - Ie.slider_video_padding_top - Ie.slider_video_padding_bottom;
                we.setSize(g, p);
            }
            w();
        }),
        (this.refreshSlideItems = function () {
            return 1 == me.isAnimating() || (u(se), u(oe), u(le), void l());
        }),
        (this.isMouseOver = function () {
            return re.ismouseover();
        }),
        (this.setPosition = function (e, t) {
            Te.placeElement(re, e, t);
        }),
        (this.zoomIn = function () {
            return !ge || void ge.zoomIn();
        }),
        (this.zoomOut = function () {
            return !ge || void ge.zoomOut();
        }),
        (this.zoomBack = function () {
            return !ge || void ge.zoomBack();
        });
}
function UGTextPanel() {
    function e(e, t) {
        if (!t) var t = v.textpanel_padding_top;
        var i = t;
        if (d) {
            var n = i;
            f.placeElement(d, 0, n);
            var a = d.is(":visible");
            if (1 == a) {
                var s = f.getElementSize(d),
                    i = s.bottom;
                i > 0 && (b.lastTitleBottom = i);
            } else {
                var i = 20;
                b.lastTitleBottom > 0 && (i = b.lastTitleBottom);
            }
        }
        var o = "";
        if ((c && (o = jQuery.trim(c.text())), "" != o)) {
            var l = i;
            d && (l += v.textpanel_padding_title_description), f.placeElement(c, 0, l);
            var u = jQuery(c).is(":visible");
            if (1 == u) {
                var g = f.getElementSize(c);
                (i = g.bottom), g.height > 0 && (b.lastDescHeight = g.height);
            } else {
                var p = 16;
                b.lastDescHeight > 0 && (p = b.lastDescHeight), (i = l + p);
            }
        }
        if (!v.textpanel_height && 1 == b.setInternalHeight) {
            var h = i + v.textpanel_padding_bottom;
            r(h, e);
        }
    }
    function t() {
        var e = 0;
        if ((d && (e += d.outerHeight()), c)) {
            var t = "";
            c && (t = jQuery.trim(c.text())), "" != t && (d && (e += v.textpanel_padding_title_description), (e += c.outerHeight()));
        }
        return e;
    }
    function i() {
        var i = t(),
            n = (p.height() - i) / 2;
        e(!1, n);
    }
    function n() {
        var i = t(),
            n = p.height() - i - v.textpanel_padding_bottom;
        e(!1, n);
    }
    function r(e, t) {
        if (!t) var t = !1;
        if (1 == t) {
            if (g) {
                var i = g.height();
                e > i && g.height(e);
            }
            var n = { height: e + "px" };
            l.add(p).animate(n, v.textpanel_fade_duration);
        } else g && g.height(e), l.add(p).height(e);
    }
    function a() {
        if (1 == v.textpanel_enable_bg) {
            (g = l.children(".ug-textpanel-bg")), g.fadeTo(0, v.textpanel_bg_opacity);
            var e = { "background-color": v.textpanel_bg_color };
            (e = jQuery.extend(e, v.textpanel_bg_css)), g.css(e);
        }
        if (1 == v.textpanel_enable_title) {
            d = p.children(".ug-textpanel-title");
            var t = {};
            null !== v.textpanel_title_color && (t.color = v.textpanel_title_color),
                null !== v.textpanel_title_font_family && (t["font-family"] = v.textpanel_title_font_family),
                null !== v.textpanel_title_text_align && (t["text-align"] = v.textpanel_title_text_align),
                null !== v.textpanel_title_font_size && (t["font-size"] = v.textpanel_title_font_size + "px"),
                null !== v.textpanel_title_bold && (v.textpanel_title_bold === !0 ? (t["font-weight"] = "bold") : (t["font-weight"] = "normal")),
                v.textpanel_css_title && (t = jQuery.extend(t, v.textpanel_css_title)),
                d.css(t);
        }
        if (1 == v.textpanel_enable_description) {
            c = p.children(".ug-textpanel-description");
            var i = {};
            null !== v.textpanel_desc_color && (i.color = v.textpanel_desc_color),
                null !== v.textpanel_desc_font_family && (i["font-family"] = v.textpanel_desc_font_family),
                null !== v.textpanel_desc_text_align && (i["text-align"] = v.textpanel_desc_text_align),
                null !== v.textpanel_desc_font_size && (i["font-size"] = v.textpanel_desc_font_size + "px"),
                null !== v.textpanel_desc_bold && (v.textpanel_desc_bold === !0 ? (i["font-weight"] = "bold") : (i["font-weight"] = "normal")),
                v.textpanel_css_title && (i = jQuery.extend(i, v.textpanel_css_description)),
                c.css(i);
        }
    }
    function s() {
        var e = h.getSelectedItem();
        m.setText(e.title, e.description);
    }
    function o() {
        jQuery(h).on(h.events.ITEM_CHANGE, s);
    }
    var l,
        u,
        d,
        c,
        g,
        p,
        h,
        m = this,
        f = new UGFunctions(),
        _ = "",
        v = {
            textpanel_align: "bottom",
            textpanel_margin: 0,
            textpanel_text_valign: "middle",
            textpanel_padding_top: 10,
            textpanel_padding_bottom: 10,
            textpanel_height: null,
            textpanel_padding_title_description: 5,
            textpanel_padding_right: 11,
            textpanel_padding_left: 11,
            textpanel_fade_duration: 200,
            textpanel_enable_title: !0,
            textpanel_enable_description: !0,
            textpanel_enable_bg: !0,
            textpanel_bg_color: "#000000",
            textpanel_bg_opacity: 0.4,
            textpanel_title_color: null,
            textpanel_title_font_family: null,
            textpanel_title_text_align: null,
            textpanel_title_font_size: null,
            textpanel_title_bold: null,
            textpanel_css_title: {},
            textpanel_desc_color: null,
            textpanel_desc_font_family: null,
            textpanel_desc_text_align: null,
            textpanel_desc_font_size: null,
            textpanel_desc_bold: null,
            textpanel_css_description: {},
            textpanel_desc_style_as_title: !1,
            textpanel_bg_css: {},
        },
        b = { isFirstTime: !0, setInternalHeight: !0, lastTitleBottom: 0, lastDescHeight: 0 };
    (this.positionElements = function (t) {
        if (!v.textpanel_height || "top" == v.textpanel_text_valign) return e(t), !1;
        switch (v.textpanel_text_valign) {
            default:
            case "top":
                e(!1);
                break;
            case "bottom":
                n();
                break;
            case "center":
            case "middle":
                i();
        }
    }),
        (this.init = function (e, t, i) {
            if (((h = e), i && ((_ = i), (t = f.convertCustomPrefixOptions(t, _, "textpanel"))), t && (v = jQuery.extend(v, t)), 0 == v.textpanel_enable_title && 0 == v.textpanel_enable_description))
                throw new Error("Textpanel Error: The title or description must be enabled");
            v.textpanel_height && v.textpanel_height < 0 && (v.textpanel_height = null),
                1 == v.textpanel_desc_style_as_title &&
                    (v.textpanel_desc_color || (v.textpanel_desc_color = v.textpanel_title_color),
                    v.textpanel_desc_bold || (v.textpanel_desc_bold = v.textpanel_title_bold),
                    v.textpanel_desc_font_family || (v.textpanel_desc_font_family = v.textpanel_title_font_family),
                    v.textpanel_desc_font_size || (v.textpanel_desc_font_size = v.textpanel_title_font_size),
                    v.textpanel_desc_text_align || (v.textpanel_desc_text_align = v.textpanel_title_text_align));
        }),
        (this.appendHTML = function (e, t) {
            (u = e), (t = t ? " " + t : "");
            var i = "<div class='ug-textpanel" + t + "'>";
            1 == v.textpanel_enable_bg && (i += "<div class='ug-textpanel-bg" + t + "'></div>"),
                (i += "<div class='ug-textpanel-textwrapper" + t + "'>"),
                1 == v.textpanel_enable_title && (i += "<div class='ug-textpanel-title" + t + "'></div>"),
                1 == v.textpanel_enable_description && (i += "<div class='ug-textpanel-description" + t + "'></div>"),
                (i += "</div></div>"),
                e.append(i),
                (l = e.children(".ug-textpanel")),
                (p = l.children(".ug-textpanel-textwrapper")),
                a();
        }),
        (this.destroy = function () {
            jQuery(h).off(h.events.ITEM_CHANGE);
        }),
        (this.run = function () {
            m.setSizeByParent(), o();
        }),
        (this.setPanelSize = function (e, t) {
            if (((b.setInternalHeight = !0), t)) b.setInternalHeight = !1;
            else var t = 80;
            v.textpanel_height && (t = v.textpanel_height), l.width(e), l.height(t), g && (g.width(e), g.height(t));
            var i = e - v.textpanel_padding_left - v.textpanel_padding_right,
                n = v.textpanel_padding_left;
            f.setElementSizeAndPosition(p, n, 0, i, t), d && d.width(i), c && c.width(i), 0 == b.isFirstTime && m.positionElements(!1);
        }),
        (this.setSizeByParent = function () {
            var e = f.getElementSize(u);
            m.setPanelSize(e.width);
        }),
        (this.setTextPlain = function (e, t) {
            d && d.html(e), c && c.html(t);
        }),
        (this.setText = function (e, t) {
            1 == b.isFirstTime
                ? (m.setTextPlain(e, t), (b.isFirstTime = !1), m.positionElements(!1))
                : p.stop().fadeTo(v.textpanel_fade_duration, 0, function () {
                      m.setTextPlain(e, t), m.positionElements(!0), jQuery(this).fadeTo(v.textpanel_fade_duration, 1);
                  });
        }),
        (this.positionPanel = function (e, t) {
            var i = {};
            if (void 0 !== e && null !== e) (i.top = e), (i.bottom = "auto");
            else
                switch (v.textpanel_align) {
                    case "top":
                        i.top = v.textpanel_margin + "px";
                        break;
                    case "bottom":
                        (i.top = "auto"), (i.bottom = v.textpanel_margin + "px");
                        break;
                    case "middle":
                        i.top = f.getElementRelativePos(l, "middle", v.textpanel_margin);
                }
            void 0 !== t && null !== t && (i.left = t), l.css(i);
        }),
        (this.setOptions = function (e) {
            _ && (e = f.convertCustomPrefixOptions(e, _, "textpanel")), (v = jQuery.extend(v, e));
        }),
        (this.getElement = function () {
            return l;
        }),
        (this.getSize = function () {
            var e = f.getElementSize(l);
            return e;
        }),
        (this.refresh = function (e, t, i, n) {
            a(), i ? m.setPanelSize(i, n) : m.setSizeByParent(), m.positionElements(!1), t !== !0 && m.positionPanel(), e === !0 && m.show();
        }),
        (this.hide = function () {
            l.hide();
        }),
        (this.show = function () {
            l.show();
        }),
        (this.getOptions = function () {
            return v;
        }),
        (this.getOption = function (e) {
            return 0 == v.hasOwnProperty(e) ? null : v[e];
        });
}
function UGZoomButtonsPanel() {
    function e(e) {
        return !e || !!e.hasClass("ug-zoompanel-button-disabled");
    }
    function t(e) {
        e && e.addClass("ug-zoompanel-button-disabled");
    }
    function i(e) {
        e && e.removeClass("ug-zoompanel-button-disabled");
    }
    function n() {
        if (0 == d.isCurrentSlideType("image")) return !0;
        var n = d.isCurrentSlideImageFit();
        1 == n ? 0 == e(o) && (t(o), t(l)) : 1 == e(o) && (i(o), i(l));
    }
    var r,
        a,
        s,
        o,
        l,
        u = this,
        d = new UGSlider(),
        c = new UGFunctions(),
        g = { slider_zoompanel_skin: "" };
    (this.init = function (e, t) {
        (d = e), t && (g = jQuery.extend(g, t));
    }),
        (this.appendHTML = function (e) {
            a = e;
            var t = "<div class='ug-slider-control ug-zoompanel ug-skin-" + g.slider_zoompanel_skin + "'>";
            (t += "<div class='ug-zoompanel-button ug-zoompanel-plus'></div>"),
                (t += "<div class='ug-zoompanel-button ug-zoompanel-minus ug-zoompanel-button-disabled'></div>"),
                (t += "<div class='ug-zoompanel-button ug-zoompanel-return ug-zoompanel-button-disabled'></div>"),
                (t += "</div>"),
                e.append(t),
                (r = e.children(".ug-zoompanel")),
                (s = r.children(".ug-zoompanel-plus")),
                (o = r.children(".ug-zoompanel-minus")),
                (l = r.children(".ug-zoompanel-return"));
        }),
        (this.setObjects = function (e, t, i) {
            (s = e), (o = t), (l = i), o && o.addClass("ug-zoompanel-button-disabled"), l && l.addClass("ug-zoompanel-button-disabled");
        }),
        (this.getElement = function () {
            return r;
        }),
        (u.initEvents = function () {
            c.addClassOnHover(s, "ug-button-hover"),
                c.addClassOnHover(o, "ug-button-hover"),
                c.addClassOnHover(l, "ug-button-hover"),
                c.setButtonOnClick(s, function () {
                    return 1 == e(s) || void d.zoomIn();
                }),
                c.setButtonOnClick(o, function () {
                    return 1 == e(o) || void d.zoomOut();
                }),
                c.setButtonOnClick(l, function () {
                    return 1 == e(l) || void d.zoomBack();
                }),
                jQuery(d).on(d.events.ZOOM_CHANGE, n),
                jQuery(d).on(d.events.ITEM_CHANGED, n);
        });
}
function UGBullets() {
    function e() {
        var e = "",
            t = "";
        -1 != h.bullets_space_between && (t = " style='margin-left:" + h.bullets_space_between + "px'");
        for (var i = 0; u > i; i++) e += 0 == i ? "<div class='ug-bullet'></div>" : "<div class='ug-bullet'" + t + "></div>";
        if ((a.html(e), !o)) {
            var n = a.find(".ug-bullet:first-child");
            n.length && (o = n.width());
        }
    }
    function t(e) {
        if (1 == l.isActive(e)) return !0;
        var t = e.index();
        jQuery(l).trigger(l.events.BULLET_CLICK, t);
    }
    function i() {
        var e = a.children(".ug-bullet");
        g.setButtonOnClick(e, t),
            e.on("mousedown mouseup", function (e) {
                return !1;
            });
    }
    function n(e) {
        if (0 > e || e >= u) throw new Error("wrong bullet index: " + e);
    }
    function r() {
        if (1 == p.isInited) return !0;
        throw new Error("The bullets are not inited!");
    }
    var a,
        s,
        o,
        l = this,
        u = 0,
        d = new UniteGalleryMain(),
        c = -1,
        g = new UGFunctions(),
        p = { isInited: !1 },
        h = { bullets_skin: "", bullets_addclass: "", bullets_space_between: -1 };
    (this.events = { BULLET_CLICK: "bullet_click" }),
        (this.init = function (e, t, i) {
            (d = e), (u = i ? i : d.getNumItems()), (p.isInited = !0), (h = jQuery.extend(h, t)), "" == h.bullets_skin && (h.bullets_skin = h.gallery_skin);
        }),
        (this.getBulletsWidth = function () {
            if (0 == u) return 0;
            if (!o) return 0;
            var e = u * o + (u - 1) * h.bullets_space_between;
            return e;
        }),
        (this.appendHTML = function (t) {
            (s = t), r();
            var n = "";
            "" != h.bullets_addclass && (n = " " + h.bullets_addclass);
            var o = "<div class='ug-slider-control ug-bullets ug-skin-" + h.bullets_skin + n + "'>";
            (o += "</div>"), (a = jQuery(o)), t.append(a), e(), i();
        }),
        (this.updateNumBullets = function (t) {
            (u = t), e(), i();
        }),
        (this.getElement = function () {
            return a;
        }),
        (this.setActive = function (e) {
            r(), n(e);
            var t = a.children(".ug-bullet");
            t.removeClass("ug-bullet-active");
            var i = jQuery(t[e]);
            i.addClass("ug-bullet-active"), (c = e);
        }),
        (this.isActive = function (e) {
            if ((n(e), "number" != typeof e)) var t = e;
            else var t = a.children(".ug-bullet")[e];
            return !!t.hasClass("ug-bullet-active");
        }),
        (this.getNumBullets = function () {
            return u;
        });
}
function UGProgressBar() {
    var e,
        t,
        i = this,
        n = 0,
        r = new UGFunctions(),
        a = { slider_progressbar_color: "#ffffff", slider_progressbar_opacity: 0.6, slider_progressbar_line_width: 5 };
    (this.put = function (i, n) {
        n && (a = jQuery.extend(a, n)),
            i.append("<div class='ug-progress-bar'><div class='ug-progress-bar-inner'></div></div>"),
            (e = i.children(".ug-progress-bar")),
            (t = e.children(".ug-progress-bar-inner")),
            t.css("background-color", a.slider_progressbar_color),
            e.height(a.slider_progressbar_line_width),
            t.height(a.slider_progressbar_line_width),
            t.width("0%");
        var r = a.slider_progressbar_opacity,
            s = t[0];
        (s.style.opacity = r), (s.style.filter = "alpha(opacity=" + 100 * r + ")");
    }),
        (this.putHidden = function (t, n) {
            i.put(t, n), e.hide();
        }),
        (this.getElement = function () {
            return e;
        }),
        (this.setSize = function (n) {
            e.width(n), t.width(n), i.draw();
        }),
        (this.setPosition = function (t, i, n, a) {
            r.placeElement(e, t, i, n, a);
        }),
        (this.draw = function () {
            var e = 100 * n;
            t.width(e + "%");
        }),
        (this.setProgress = function (e) {
            (n = r.normalizePercent(e)), i.draw();
        }),
        (this.getType = function () {
            return "bar";
        });
}
function UGProgressPie() {
    function e(e) {
        if (!e) var e = 0;
        var t = Math.min(s.slider_progresspie_width, s.slider_progresspie_height) / 2,
            n = i[0].getContext("2d");
        0 == r && ((r = !0), n.rotate(1.5 * Math.PI), n.translate(-2 * t, 0)), n.clearRect(0, 0, s.slider_progresspie_width, s.slider_progresspie_height);
        var a = s.slider_progresspie_width / 2,
            o = s.slider_progresspie_height / 2,
            l = 0,
            u = e * Math.PI * 2;
        if (1 == s.slider_progresspie_type_fill) n.beginPath(), n.moveTo(a, o), n.arc(a, o, t, l, u), n.lineTo(a, o), (n.fillStyle = s.slider_progresspie_color1), n.fill(), n.closePath();
        else {
            (n.globalCompositeOperation = "source-over"),
                n.beginPath(),
                n.moveTo(a, o),
                n.arc(a, o, t, l, u),
                n.lineTo(a, o),
                (n.fillStyle = s.slider_progresspie_color1),
                n.fill(),
                n.closePath(),
                (n.globalCompositeOperation = "destination-out");
            var d = t - s.slider_progresspie_stroke_width;
            n.beginPath(), n.moveTo(a, o), n.arc(a, o, d, l, u), n.lineTo(a, o), (n.fillStyle = s.slider_progresspie_color1), n.fill(), n.closePath();
        }
        1 == s.slider_progresspie_type_fill && ((l = u), (u = 2 * Math.PI), n.beginPath(), n.arc(a, o, t, l, u), n.lineTo(a, o), (n.fillStyle = s.slider_progresspie_color2), n.fill(), n.closePath());
    }
    var t,
        i,
        n = this,
        r = !1,
        a = new UGFunctions(),
        s = { slider_progresspie_type_fill: !1, slider_progresspie_color1: "#B5B5B5", slider_progresspie_color2: "#E5E5E5", slider_progresspie_stroke_width: 6, slider_progresspie_width: 30, slider_progresspie_height: 30 };
    (this.put = function (e, t) {
        t && (s = jQuery.extend(s, t)), e.append("<canvas class='ug-canvas-pie' width='" + s.slider_progresspie_width + "' height='" + s.slider_progresspie_height + "'></canvas>"), (i = e.children(".ug-canvas-pie"));
    }),
        (this.putHidden = function (t, r) {
            n.put(t, r), e(0.1), i.hide();
        }),
        (this.getElement = function () {
            return i;
        }),
        (this.setPosition = function (e, t) {
            a.placeElement(i, e, t);
        }),
        (this.getSize = function () {
            var e = { width: s.slider_progresspie_width, height: s.slider_progresspie_height };
            return e;
        }),
        (this.setProgress = function (i) {
            (i = a.normalizePercent(i)), (t = i), e(i);
        }),
        (this.getType = function () {
            return "pie";
        });
}
function UGTouchSliderControl() {
    function e(e) {
        if (!e) var e = _.getSlidesReference();
        var t = v.getElementSize(e.objCurrentSlide),
            i = -t.left,
            n = v.getElementSize(h),
            r = i - n.left;
        return r;
    }
    function t() {
        var t = _.getSlidesReference(),
            i = e(t),
            n = Math.round((3 * t.objCurrentSlide.width()) / 8);
        if (Math.abs(i) >= n) return !0;
        var r = Math.abs(b.lastMouseX - b.startMouseX);
        if ((Math.abs(b.lastMouseY - b.startMouseY), 20 > r)) return !1;
        var a = jQuery.now(),
            s = a - b.startTime;
        return 500 > s;
    }
    function i(e) {
        if (1 == _.isInnerInPlace()) return !1;
        if ((m.trigger(_.events.BEFORE_RETURN), !e)) var e = _.getSlidesReference();
        var t = v.getElementSize(e.objCurrentSlide),
            i = -t.left;
        h.animate(
            { left: i + "px" },
            {
                duration: f.slider_transition_return_speed,
                easing: f.slider_transition_continuedrag_easing,
                queue: !1,
                progress: function (e, t, n) {
                    if (1 == b.isDragVideo) {
                        var r = v.getElementSize(h),
                            a = r.left,
                            s = a - i,
                            o = b.videoStartX + s;
                        b.videoObject.css("left", o);
                    }
                },
                complete: function () {
                    m.trigger(_.events.AFTER_RETURN);
                },
            }
        );
    }
    function n(e) {
        _.getVideoObject().hide(), _.switchSlideNums(e), _.placeNabourItems();
    }
    function r() {
        var t = _.getSlidesReference(),
            r = e(t);
        if (0 == r) return !1;
        var a = r > 0 ? "left" : "right",
            s = !1;
        switch (a) {
            case "right":
                if (_.isSlideHasItem(t.objPrevSlide))
                    var o = v.getElementSize(t.objPrevSlide),
                        l = -o.left;
                else s = !0;
                break;
            case "left":
                if (_.isSlideHasItem(t.objNextSlide))
                    var u = v.getElementSize(t.objNextSlide),
                        l = -u.left;
                else s = !0;
        }
        1 == s
            ? i(t)
            : h.stop().animate(
                  { left: l + "px" },
                  {
                      duration: f.slider_transition_continuedrag_speed,
                      easing: f.slider_transition_continuedrag_easing,
                      queue: !1,
                      progress: function () {
                          if (1 == b.isDragVideo) {
                              var e = v.getElementSize(h),
                                  t = e.left,
                                  i = t - b.startPosx,
                                  n = b.videoStartX + i;
                              b.videoObject.css("left", n);
                          }
                      },
                      always: function () {
                          n(a), m.trigger(_.events.AFTER_DRAG_CHANGE);
                      },
                  }
              );
    }
    function a(e) {
        var t = b.lastMouseX - b.startMouseX;
        if (0 == t) return !0;
        var i = 0 > t ? "left" : "right",
            n = _.getObjZoom();
        if (n) {
            var r = n.isPanEnabled(e, i);
            if (1 == r) return (b.isInitDataValid = !1), !0;
            if (0 == b.isInitDataValid) return s(e), !0;
        }
        var a = b.startPosx + t;
        if (t > 0 && a > 0) a /= 3;
        else if (0 > t) {
            var o = a + h.width(),
                l = p.width();
            l > o && (a = b.startPosx + t / 3);
        }
        if ((0 == b.isDragging && ((b.isDragging = !0), m.trigger(_.events.START_DRAG)), h.css("left", a + "px"), 1 == b.isDragVideo)) {
            var u = a - b.startPosx,
                d = b.videoStartX + u;
            b.videoObject.css("left", d);
        }
    }
    function s(e) {
        var t = v.getMousePosition(e);
        (b.startMouseX = t.pageX), (b.startMouseY = t.pageY), (b.lastMouseX = b.startMouseX), (b.lastMouseY = b.startMouseY), (b.startTime = jQuery.now());
        var i = v.getArrTouches(e);
        b.startArrTouches = v.getArrTouchPositions(i);
        var n = v.getElementSize(h);
        (b.startPosx = n.left), (b.isInitDataValid = !0), (b.isDragVideo = !1), v.storeEventData(e, b.storedEventID);
    }
    function o(e) {
        b.touch_active = !1;
    }
    function l(e, t) {
        (b.touch_active = !0), s(t);
    }
    function u(e) {
        e.preventDefault(), (b.isDragging = !1), 1 == _.isAnimating() && h.stop(!0, !0);
        var t = v.getArrTouches(e);
        return t.length > 1 ? (1 == b.touch_active && o("1"), !0) : 1 == b.touch_active || void l("1", e);
    }
    function d(e) {
        if (0 == b.touch_active) return !0;
        if (0 == e.buttons) return o("2"), r(), !0;
        v.updateStoredEventData(e, b.storedEventID), e.preventDefault();
        var t = v.getMousePosition(e);
        (b.lastMouseX = t.pageX), (b.lastMouseY = t.pageY);
        var i = null;
        1 == f.slider_vertical_scroll_ondrag && (i = v.handleScrollTop(b.storedEventID)), "vert" !== i && a(e);
    }
    function c(e) {
        var n = v.getArrTouches(e),
            a = n.length,
            s = _.isInnerInPlace();
        if (1 == s && 0 == b.touch_active && 0 == a) return !0;
        if (0 == a && 1 == b.touch_active) {
            o("3");
            var u = !1,
                d = v.wasVerticalScroll(b.storedEventID);
            0 == d && (u = t()), 1 == u ? r() : i();
        } else 1 == a && 0 == b.touch_active && l("2", e);
    }
    function g() {
        p.bind("mousedown touchstart", u), jQuery("body").bind("mousemove touchmove", d), jQuery(window).add("body").bind("mouseup touchend", c);
    }
    var p,
        h,
        m,
        f,
        _ = new UGSlider(),
        v = new UGFunctions(),
        f = { slider_transition_continuedrag_speed: 250, slider_transition_continuedrag_easing: "linear", slider_transition_return_speed: 300, slider_transition_return_easing: "easeInOutQuad" },
        b = {
            touch_active: !1,
            startMouseX: 0,
            startMouseY: 0,
            lastMouseX: 0,
            lastMouseY: 0,
            startPosx: 0,
            startTime: 0,
            isInitDataValid: !1,
            slides: null,
            lastNumTouches: 0,
            isDragging: !1,
            storedEventID: "touchSlider",
            videoStartX: 0,
            isDragVideo: !1,
            videoObject: null,
        };
    (this.isTapEventOccured = function (t) {
        var i = v.getArrTouches(t),
            n = i.length;
        if (0 != n || 0 != b.lastNumTouches) return (b.lastNumTouches = n), !1;
        b.lastNumTouches = n;
        var r = _.getSlidesReference(),
            a = (e(r), Math.abs(b.lastMouseX - b.startMouseX)),
            s = Math.abs(b.lastMouseY - b.startMouseY),
            o = jQuery.now(),
            l = o - b.startTime;
        return 20 > a && 50 > s && 500 > l;
    }),
        (this.init = function (e, t) {
            (_ = e), (m = jQuery(_)), (g_objects = e.getObjects()), (p = g_objects.g_objSlider), (h = g_objects.g_objInner), (f = jQuery.extend(f, t)), g();
        }),
        (this.getLastMousePos = function () {
            var e = { pageX: b.lastMouseX, pageY: b.lastMouseY };
            return e;
        }),
        (this.isTouchActive = function () {
            return b.touch_active;
        });
}
function UGZoomSliderControl() {
    function e(e, t) {
        (x = e), (T = jQuery(x)), (g_objects = e.getObjects()), (y = g_objects.g_objSlider), (w = g_objects.g_objInner), (I = jQuery.extend(I, t)), b();
    }
    function t() {
        var e = x.getScaleMode();
        return "down" != e && (e = "fit"), e;
    }
    function i() {
        var e = jQuery.now(),
            i = e - E.storeImageLastTime;
        if (20 > i) return !1;
        var n = x.getSlidesReference();
        if (((E.objSlide = n.objCurrentSlide), (E.objImage = n.objCurrentSlide.find("img")), 0 == E.objImage.length)) return !1;
        (E.objImageSize = S.getElementSize(E.objImage)), (E.objParent = E.objImage.parent()), (E.objParentSize = S.getElementSize(E.objParent));
        var r = t();
        (objPadding = x.getObjImagePadding()), (E.objFitImageSize = S.getImageInsideParentDataByImage(E.objImage, r, objPadding));
        var e = jQuery.now();
        return (E.storeImageLastTime = e), !0;
    }
    function n(e, i) {
        var n = x.getSlidesReference(),
            r = n.objCurrentSlide.find("img"),
            a = t();
        T.trigger(x.events.ZOOM_START);
        var s = !0,
            o = x.getObjImagePadding();
        if ("back" == e) {
            var l = S.getImageOriginalSize(r);
            S.scaleImageFitParent(r, l.width, l.height, a, o);
        } else {
            var u = "in" == e;
            s = S.zoomImageInsideParent(r, u, I.slider_zoom_step, i, a, I.slider_zoom_max_ratio, o);
        }
        1 == s && (T.trigger(x.events.ZOOMING), T.trigger(x.events.ZOOM_CHANGE), T.trigger(x.events.ZOOM_END));
    }
    function r(e, t, i) {
        var n = S.getArrTouches(t);
        if (i === !0) {
            if (1 != n.length) return !1;
        } else if (n.length > 1) return !1;
        return !!S.isElementBiggerThenParent(e);
    }
    function a(e) {
        var t = S.getMousePosition(e);
        (E.startMouseX = t.pageX),
            (E.startMouseY = t.pageY),
            (E.lastMouseX = E.startMouseX),
            (E.lastMouseY = E.startMouseY),
            (E.startImageX = E.objImageSize.left),
            (E.startImageY = E.objImageSize.top),
            (E.panXActive = E.objImageSize.width > E.objParentSize.width),
            (E.panYActive = E.objImageSize.height > E.objParentSize.height);
    }
    function s(e) {
        (E.isPanActive = !0), a(e);
    }
    function o(e) {
        if (void 0 == E.objImage || 0 == E.objImage.length) return !0;
        var t = S.getMousePosition(e),
            i = (t.pageX - E.startMouseX, t.pageY - E.startMouseY, t.pageX - E.lastMouseX),
            n = t.pageY - E.lastMouseY,
            r = 0 > i ? "left" : "right",
            a = 0 > n ? "up" : "down";
        (E.lastMouseX = t.pageX), (E.lastMouseY = t.pageY);
        var s = S.getElementSize(E.objImage);
        0 == E.panYActive ? (n = 0) : "down" == a && s.top > 0 ? (n /= 3) : "up" == a && s.bottom < E.objParentSize.height && (n /= 3),
            0 == E.panXActive || 0 == x.isInnerInPlace() ? (i = 0) : "right" == r && s.left > 0 ? (i /= 3) : "left" == r && s.right < E.objParentSize.width && (i /= 3);
        var o = s.left + i,
            l = s.top + n;
        S.placeElement(E.objImage, o, l);
    }
    function l() {
        var e = !1,
            t = !1,
            i = 0,
            n = 0,
            r = S.getElementSize(E.objImage),
            a = x.getObjImagePadding(),
            s = S.getElementCenterPosition(E.objImage, a);
        (E.panXActive = E.objImageSize.width > E.objParentSize.width),
            (E.panYActive = E.objImageSize.height > E.objParentSize.height),
            1 == E.panYActive ? (r.top > 0 ? ((n = 0), (t = !0)) : r.bottom < E.objParentSize.height && ((n = E.objParentSize.height - r.height), (t = !0))) : r.top != s.top && ((t = !0), (n = s.top)),
            1 == E.panXActive ? (r.left > 0 ? ((i = 0), (e = !0)) : r.right < E.objParentSize.width && ((i = E.objParentSize.width - r.width), (e = !0))) : r.left != s.left && ((e = !0), (i = s.left));
        var o = {};
        1 == t && (o.top = n + "px"), 1 == e && (o.left = i + "px"), (1 == t || 1 == e) && E.objImage.animate(o, { duration: I.slider_zoom_return_pan_duration, easing: I.slider_zoom_return_pan_easing, queue: !1 });
    }
    function u() {
        return !(!E.objImage || !E.objImage.is(":animated"));
    }
    function d(e) {
        (E.isZoomActive = !0),
            (E.startDistance = S.getDistance(e[0].pageX, e[0].pageY, e[1].pageX, e[1].pageY)),
            0 == E.startDistance && (E.startDistance = 1),
            (E.startMiddlePoint = S.getMiddlePoint(e[0].pageX, e[0].pageY, e[1].pageX, e[1].pageY)),
            (E.objImageSize = S.getElementSize(E.objImage)),
            (E.startImageX = E.objImageSize.left),
            (E.startImageY = E.objImageSize.top),
            (E.imageOrientPoint = S.getElementLocalPoint(E.startMiddlePoint, E.objImage));
        var t = S.isPointInsideElement(E.imageOrientPoint, E.objImageSize);
        0 == t && (E.imageOrientPoint = S.getElementCenterPoint(E.objImage)), T.trigger(x.events.ZOOM_START);
    }
    function c(e) {
        if (0 == E.isZoomActive) return !1;
        var t = S.getArrTouches(e);
        2 != t.length && ((E.isZoomActive = !1), T.trigger(x.events.ZOOM_END));
    }
    function g(e) {
        if (1 == E.isZoomActive) return !0;
        var t = S.getArrTouches(e);
        return 2 != t.length || void d(t);
    }
    function p(e) {
        var t = S.getArrTouches(e),
            i = S.getDistance(t[0].pageX, t[0].pageY, t[1].pageX, t[1].pageY),
            n = i / E.startDistance,
            r = S.getMiddlePoint(t[0].pageX, t[0].pageY, t[1].pageX, t[1].pageY),
            a = E.objImageSize.width * n,
            s = E.objImageSize.height * n,
            o = S.getImageOriginalSize(E.objImage),
            l = 1;
        if ((o.width > 0 && (l = a / o.width), l > I.slider_zoom_max_ratio)) return !0;
        (panX = -(E.imageOrientPoint.x * n - E.imageOrientPoint.x)), (panY = -(E.imageOrientPoint.y * n - E.imageOrientPoint.y));
        var u = r.x - E.startMiddlePoint.x,
            d = r.y - E.startMiddlePoint.y,
            c = E.startImageX + panX + u,
            g = E.startImageY + panY + d;
        S.setElementSizeAndPosition(E.objImage, c, g, a, s), T.trigger(x.events.ZOOMING), T.trigger(x.events.ZOOM_CHANGE);
    }
    function h() {
        if (void 0 == E.objImage || 0 == E.objImage.length) return !0;
        var e = S.getElementSize(E.objImage);
        if (e.width < E.objFitImageSize.imageWidth) {
            E.objImage.css({ position: "absolute", margin: "none" });
            var t = { top: E.objFitImageSize.imageTop + "px", left: E.objFitImageSize.imageLeft + "px", width: E.objFitImageSize.imageWidth + "px", height: E.objFitImageSize.imageHeight + "px" };
            E.objImage.animate(t, { duration: I.slider_zoom_return_pan_duration, easing: I.slider_zoom_return_pan_easing, queue: !1 });
        } else l();
    }
    function m(e) {
        return (
            0 == x.isCurrentSlideType("image") ||
            (i(),
            void 0 == E.objImage ||
                0 == E.objImage.length ||
                (e.preventDefault(), 1 == u() && E.objImage.stop(!0), 1 == E.isZoomActive ? c(e) : g(e), void (1 == E.isZoomActive ? (E.isPanActive = !1) : 1 == r(E.objImage, e) && 1 == E.isZoomedOnce && s(e))))
        );
    }
    function f(e) {
        if (0 == x.isCurrentSlideType("image")) return !0;
        var t = jQuery(e.target);
        if (1 == t.data("ug-button")) return !1;
        if ((i(), void 0 == E.objImage || 0 == E.objImage.length)) return !0;
        var n = E.isPanActive,
            a = E.isZoomActive;
        if (0 == x.isInnerInPlace()) return (E.isZoomActive = !1), (E.isPanActive = !1), !0;
        if ((1 == E.isZoomActive ? c(e) : g(e), 1 == E.isZoomActive)) E.isPanActive = !1;
        else {
            var o = r(E.objImage, e, !0);
            1 == E.isPanActive ? (E.isPanActive = !1) : 1 == o && s(e);
        }
        (n || a) && 0 == E.isZoomActive && 0 == E.isPanActive && h();
    }
    function _(e) {
        return 0 == x.isCurrentSlideType("image") || void (1 == E.isZoomActive ? p(e) : 1 == E.isPanActive && o(e));
    }
    function v(e, t, i, r) {
        if (0 == I.slider_zoom_mousewheel) return !0;
        if (0 == x.isCurrentSlideType("image")) return !0;
        e.preventDefault();
        var a = t > 0,
            s = S.getMousePosition(e),
            o = 1 == a ? "in" : "out";
        n(o, s);
    }
    function b() {
        y.on("mousewheel", v),
            y.bind("mousedown touchstart", m),
            jQuery("body").bind("mousemove touchmove", _),
            jQuery(window).add("body").bind("mouseup touchend", f),
            T.bind(x.events.BEFORE_RETURN, function () {
                h();
            }),
            T.bind(x.events.ITEM_CHANGED, function () {
                E.isZoomedOnce = !1;
            }),
            T.bind(x.events.ZOOM_CHANGE, function () {
                E.isZoomedOnce = !0;
            });
    }
    var y,
        w,
        T,
        x = new UGSlider(),
        S = new UGFunctions(),
        I = { slider_zoom_step: 1.2, slider_zoom_max_ratio: 6, slider_zoom_return_pan_duration: 400, slider_zoom_return_pan_easing: "easeOutCubic" },
        E = {
            isPanActive: !1,
            startMouseX: 0,
            startMouseY: 0,
            lastMouseX: 0,
            lastMouseY: 0,
            startImageX: 0,
            startImageY: 0,
            panXActive: !1,
            panYActive: !1,
            objImage: null,
            objImageSize: null,
            objParent: null,
            objParentSize: null,
            objSlide: null,
            storeImageLastTime: 0,
            isZoomActive: !1,
            startDistance: 0,
            startMiddlePoint: null,
            imageOrientPoint: null,
            objFitImageSize: null,
            isZoomedOnce: !1,
        };
    (this.________EXTERNAL_____________ = function () {}),
        (this.isPanEnabled = function (e, t) {
            if ((i(), void 0 == E.objImage || 0 == E.objImage.length)) return !1;
            if (0 == E.isZoomedOnce) return !1;
            if (0 == r(E.objImage, e)) return !1;
            if (0 == x.isInnerInPlace()) return !1;
            if ("left" == t) {
                if (E.objImageSize.right <= E.objParentSize.width) return !1;
            } else if (E.objImageSize.left >= 0) return !1;
            return !0;
        }),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.zoomIn = function () {
            n("in");
        }),
        (this.zoomOut = function () {
            n("out");
        }),
        (this.zoomBack = function () {
            n("back");
        });
}
function UGWistiaAPI() {
    function e() {
        return "undefined" != typeof Wistia;
    }
    function t(e, t, n, a, s) {
        (r = null), (o = !1);
        var l = e + "_video",
            u = "<div id='" + l + "' class='wistia_embed' style='width:" + n + ";height:" + a + ";' data-video-width='" + n + "' data-video-height='" + a + "'>&nbsp;</div>";
        jQuery("#" + e).html(u), (r = Wistia.embed(t, { version: "v1", videoWidth: n, videoHeight: a, container: l, autoPlay: s })), (o = !0), i();
    }
    function i() {
        r.bind("play", function () {
            s.trigger(a.events.START_PLAYING);
        }),
            r.bind("pause", function () {
                s.trigger(a.events.STOP_PLAYING);
            }),
            r.bind("end", function () {
                s.trigger(a.events.STOP_PLAYING), s.trigger(a.events.VIDEO_ENDED);
            });
    }
    this.isAPILoaded = !1;
    var n,
        r,
        a = this,
        s = jQuery(this),
        o = !1;
    (this.events = { START_PLAYING: "start_playing", STOP_PLAYING: "stop_playing", VIDEO_ENDED: "video_ended" }),
        (this.loadAPI = function () {
            return 1 == g_ugWistiaAPI.isAPILoaded || (e() ? ((g_ugWistiaAPI.isAPILoaded = !0), !0) : (g_ugFunctions.loadJs("fast.wistia.com/assets/external/E-v1.js", !0), void (g_ugWistiaAPI.isAPILoaded = !0)));
        }),
        (this.doCommand = function (e) {
            if (null == r) return !1;
            if (0 == o) return !1;
            switch (e) {
                case "play":
                    r.play();
                    break;
                case "pause":
                    r.pause();
            }
        }),
        (this.pause = function () {
            a.doCommand("pause");
        }),
        (this.play = function () {
            a.doCommand("play");
        }),
        (this.putVideo = function (i, r, a, s, o) {
            return e()
                ? (t(i, r, a, s, o), !0)
                : (this.loadAPI(),
                  void (n = setInterval(function () {
                      e() && (t(i, r, a, s, o), clearInterval(n));
                  }, 500)));
        }),
        (this.isPlayerReady = function () {
            return !(!o || !r);
        });
}
function UGSoundCloudAPI() {
    function e() {
        return "undefined" != typeof SC;
    }
    function t(e, t, n, s, o) {
        (r = null), (g_isPlayerReady = !1);
        var l = e + "_iframe",
            u = location.protocol + "//w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/" + t;
        (u +=
            "&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=true&show_comments=false&amp;show_playcount=true&amp;show_user=false&amp;hide_related=true&amp;visual=true&amp;start_track=0&amp;callback=true"),
            (u += o === !0 ? "&amp;auto_play=true" : "&amp;auto_play=false");
        var d = "<iframe id='" + l + "' src=" + u + " width='" + n + "' height='" + s + "' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        jQuery("#" + e).html(d),
            (r = SC.Widget(l)),
            r.bind(SC.Widget.Events.READY, function () {
                r && ((g_isPlayerReady = !0), i());
            }),
            (a = e);
    }
    function i() {
        r.bind(SC.Widget.Events.PLAY, function () {
            o.trigger(s.events.START_PLAYING);
        }),
            r.bind(SC.Widget.Events.PAUSE, function () {
                o.trigger(s.events.STOP_PLAYING);
            }),
            r.bind(SC.Widget.Events.FINISH, function () {
                o.trigger(s.events.STOP_PLAYING), o.trigger(s.events.VIDEO_ENDED);
            });
    }
    this.isAPILoaded = !1;
    var n,
        r,
        a,
        s = this,
        o = jQuery(this);
    (this.events = { START_PLAYING: "start_playing", STOP_PLAYING: "stop_playing", VIDEO_ENDED: "video_ended" }),
        (this.loadAPI = function () {
            return 1 == g_ugSoundCloudAPI.isAPILoaded || (e() ? ((g_ugSoundCloudAPI.isAPILoaded = !0), !0) : (g_ugFunctions.loadJs("w.soundcloud.com/player/api.js", !0), void (g_ugSoundCloudAPI.isAPILoaded = !0)));
        }),
        (this.putSound = function (i, r, a, s, o) {
            return e()
                ? (t(i, r, a, s, o), !0)
                : (this.loadAPI(),
                  void (n = setInterval(function () {
                      e() && (t(i, r, a, s, o), clearInterval(n));
                  }, 500)));
        }),
        (this.doCommand = function (e) {
            if (null == r) return !1;
            if (0 == g_isPlayerReady) return !1;
            switch (e) {
                case "play":
                    r.play();
                    break;
                case "pause":
                    r.pause();
            }
        }),
        (this.pause = function () {
            s.doCommand("pause");
        }),
        (this.play = function () {
            s.doCommand("play");
        }),
        (this.destroy = function () {
            (g_isPlayerReady = !1), (r = null), a && (jQuery("#" + a).html(""), (a = null));
        });
}
function UGHtml5MediaAPI() {
    function e() {
        return "undefined" != typeof mejs;
    }
    function t(e, t, n, a, s) {
        (r = null), (g_isPlayerReady = !1);
        var o = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/flashmediaelement-cdn.swf",
            l = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/silverlightmediaelement.xap",
            u = e + "_video",
            d = "";
        s && s === !0 && (d = "autoplay='autoplay'");
        var c = "";
        t.posterImage && (c = "poster='" + t.posterImage + "'");
        var g = "<video id='" + u + "' width='" + n + "' height='" + a + "'  controls='controls' preload='none' " + d + " " + c + ">";
        "" != t.mp4 && (g += "<source type='video/mp4' src='" + t.mp4 + "' />"),
            "" != t.webm && (g += "<source type='video/webm' src='" + t.webm + "' />"),
            "" != t.ogv && (g += "<source type='video/ogg' src='" + t.ogv + "' />"),
            (g += "<object width='" + n + "' height='" + a + "' type='application/x-shockwave-flash' data='" + o + "'>"),
            (g += "<param name='movie' value='" + o + "' />"),
            (g += "<param name='flashvars' value='controls=true&file=" + t.mp4 + "' />"),
            (g += "</object>"),
            (g += "</video>"),
            jQuery("#" + e).html(g),
            new MediaElement(u, {
                enablePluginDebug: !1,
                flashName: o,
                silverlightName: l,
                success: function (e, t) {
                    (g_isPlayerReady = !0), (r = e), 0 == s && r.pause(), i();
                },
                error: function (e) {
                    trace(e);
                },
            });
    }
    function i() {
        g_ugFunctions.addEvent(r, "play", function () {
            s.trigger(a.events.START_PLAYING);
        }),
            g_ugFunctions.addEvent(r, "pause", function () {
                s.trigger(a.events.STOP_PLAYING);
            }),
            g_ugFunctions.addEvent(r, "ended", function () {
                s.trigger(a.events.STOP_PLAYING), s.trigger(a.events.VIDEO_ENDED);
            });
    }
    this.isAPILoaded = !1;
    var n,
        r,
        a = this,
        s = jQuery(this);
    (this.events = { START_PLAYING: "start_playing", STOP_PLAYING: "stop_playing", VIDEO_ENDED: "video_ended" }),
        (this.loadAPI = function () {
            return (
                1 == g_ugHtml5MediaAPI.isAPILoaded ||
                (e()
                    ? ((g_ugHtml5MediaAPI.isAPILoaded = !0), !0)
                    : (g_ugFunctions.loadJs("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelement.min.js", !0),
                      g_ugFunctions.loadCss("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelementplayer.min.css", !0),
                      void (g_ugHtml5MediaAPI.isAPILoaded = !0)))
            );
        }),
        (this.putVideo = function (i, r, a, s, o) {
            return e()
                ? (t(i, r, a, s, o), !0)
                : (this.loadAPI(),
                  void (n = setInterval(function () {
                      e() && (t(i, r, a, s, o), clearInterval(n));
                  }, 500)));
        }),
        (this.doCommand = function (e) {
            if (null == r) return !1;
            if (0 == g_isPlayerReady) return !1;
            switch (e) {
                case "play":
                    r.play();
                    break;
                case "pause":
                    r.pause();
            }
        }),
        (this.pause = function () {
            a.doCommand("pause");
        }),
        (this.play = function () {
            a.doCommand("play");
        });
}
function UGVimeoAPI() {
    function e() {
        return "undefined" != typeof Froogaloop;
    }
    function t(e, t, n, a, s) {
        (o = null), (l = !1);
        var u = location.protocol + "//player.vimeo.com/video/" + t + "?api=1";
        s === !0 && (u += "&amp;byline=0&amp;autoplay=1&amp;title=0&amp;portrait=0");
        var d = "<iframe src=" + u + " width='" + n + "' height='" + a + "' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        jQuery("#" + e).html(d);
        var c = jQuery("#" + e + " iframe")[0];
        (o = Froogaloop(c)),
            o.addEvent("ready", function () {
                o && ((l = !0), i());
            }),
            (r = e);
    }
    function i() {
        return (
            !!o &&
            (o.addEvent("cuechange", function () {
                1 == u && a.play();
            }),
            o.addEvent("play", function () {
                s.trigger(a.events.START_PLAYING);
            }),
            o.addEvent("pause", function () {
                s.trigger(a.events.STOP_PLAYING);
            }),
            void o.addEvent("finish", function () {
                s.trigger(a.events.STOP_PLAYING), s.trigger(a.events.VIDEO_ENDED);
            }))
        );
    }
    this.isAPILoaded = !1;
    var n,
        r,
        a = this,
        s = jQuery(this),
        o = null,
        l = !1,
        u = !1;
    (this.events = { START_PLAYING: "start_playing", STOP_PLAYING: "stop_playing", VIDEO_ENDED: "video_ended" }),
        (this.loadAPI = function () {
            return 1 == g_ugVimeoAPI.isAPILoaded || (e() ? ((g_ugVimeoAPI.isAPILoaded = !0), !0) : (g_ugFunctions.loadJs("f.vimeocdn.com/js/froogaloop2.min.js", !0), void (g_ugVimeoAPI.isAPILoaded = !0)));
        }),
        (this.doCommand = function (e) {
            if (null == o) return !1;
            if (0 == l) return !1;
            switch (e) {
                default:
                    o.api(e);
            }
        }),
        (this.pause = function () {
            a.doCommand("pause");
        }),
        (this.play = function () {
            a.doCommand("play");
        }),
        (this.destroy = function () {
            o && (o.api("unload"), (o = null), (l = !1)), r && jQuery("#" + r).html("");
        }),
        (this.putVideo = function (i, r, a, s, o) {
            return e()
                ? (t(i, r, a, s, o), !0)
                : (this.loadAPI(),
                  void (n = setInterval(function () {
                      e() && (t(i, r, a, s, o), clearInterval(n));
                  }, 500)));
        }),
        (this.isPlayerReady = function () {
            return !(!l || !o);
        }),
        (this.changeVideo = function (e, t) {
            return 0 != a.isPlayerReady() && ((u = t), void o.api("loadVideo", e));
        }),
        (this.getVideoImages = function (e, t, i) {
            var n = location.protocol + "//vimeo.com/api/v2/video/" + e + ".json";
            jQuery.get(n, {}, function (e) {
                var n = {};
                (n.preview = e[0].thumbnail_large), (n.thumb = e[0].thumbnail_medium), i(t, n);
            });
        });
}
function UGYoutubeAPI() {
    function e(e, t, r, s, u) {
        o && l && o.destroy();
        var d = { controls: 2, showinfo: c.video_youtube_showinfo, rel: 0 };
        u === !0 && (d.autoplay = 1), (l = !1), (o = new YT.Player(e, { height: s, width: r, videoId: t, playerVars: d, events: { onReady: i, onStateChange: n } })), (a = e);
    }
    function t() {
        return "undefined" != typeof YT && "undefined" != typeof YT.Player;
    }
    function i() {
        l = !0;
    }
    function n() {
        if ("function" != typeof o.getPlayerState) return trace("Youtube API error: can't get player state"), !1;
        var e = o.getPlayerState();
        switch (e) {
            case YT.PlayerState.PLAYING:
                u.trigger(s.events.START_PLAYING);
                break;
            case YT.PlayerState.ENDED:
                u.trigger(s.events.STOP_PLAYING), u.trigger(s.events.VIDEO_ENDED);
                break;
            default:
                d == YT.PlayerState.PLAYING && u.trigger(s.events.STOP_PLAYING);
        }
        d = e;
    }
    this.isAPILoaded = !1;
    var r,
        a,
        s = this,
        o = null,
        l = !1,
        u = jQuery(this),
        d = -1,
        c = { video_youtube_showinfo: !0 };
    (this.events = { START_PLAYING: "start_playing", STOP_PLAYING: "stop_playing", VIDEO_ENDED: "video_ended" }),
        (this.setOptions = function (e) {
            c = jQuery.extend(c, e);
        }),
        (this.putVideo = function (i, n, a, s, o) {
            return t()
                ? (e(i, n, a, s, o), !0)
                : (this.loadAPI(),
                  void (r = setInterval(function () {
                      t() && (e(i, n, a, s, o), clearInterval(r));
                  }, 500)));
        }),
        (this.loadAPI = function () {
            return 1 == g_ugYoutubeAPI.isAPILoaded || ("undefined" != typeof YT ? ((g_ugYoutubeAPI.isAPILoaded = !0), !0) : (g_ugFunctions.loadJs("https://www.youtube.com/player_api", !1), void (g_ugYoutubeAPI.isAPILoaded = !0)));
        }),
        (this.doCommand = function (e, t) {
            if (!o) return !0;
            if (0 == l) return !1;
            switch (e) {
                case "play":
                    if ("function" != typeof o.playVideo) return !1;
                    o.playVideo();
                    break;
                case "pause":
                    if ("function" != typeof o.pauseVideo) return !1;
                    o.pauseVideo();
                    break;
                case "seek":
                    if ("function" != typeof o.seekTo) return !1;
                    o.seekTo(t);
                    break;
                case "stopToBeginning":
                    var i = o.getPlayerState();
                    switch ((o.pauseVideo(), i)) {
                        case YT.PlayerState.PLAYING:
                        case YT.PlayerState.ENDED:
                        case YT.PlayerState.PAUSED:
                            o.seekTo(0);
                    }
            }
        }),
        (this.play = function () {
            s.doCommand("play");
        }),
        (this.pause = function () {
            s.doCommand("pause");
        }),
        (this.destroy = function () {
            try {
                o && ((l = !1), o.clearVideo(), o.destroy());
            } catch (e) {
                jQuery("#" + a).html("");
            }
        }),
        (this.stopToBeginning = function () {
            s.doCommand("stopToBeginning");
        }),
        (this.changeVideo = function (e, t) {
            return 0 != s.isPlayerReady() && void (t && 1 == t ? o.loadVideoById(e, 0, "large") : o.cueVideoById(e, 0, "large"));
        }),
        (this.isPlayerReady = function () {
            return !(!l || !o);
        }),
        (this.getVideoImages = function (e) {
            var t = {};
            return (t.preview = "https://i.ytimg.com/vi/" + e + "/sddefault.jpg"), (t.thumb = "https://i.ytimg.com/vi/" + e + "/default.jpg"), t;
        });
}
function UGVideoPlayer() {
    function e() {
        h.hide();
    }
    function t() {
        m.trigger(h.events.PLAY_START), c && c.hide();
    }
    function i() {
        m.trigger(h.events.PLAY_STOP), c && c.show();
    }
    function n() {
        m.trigger(h.events.VIDEO_ENDED);
    }
    function r() {
        c && (f.setButtonMobileReady(c), f.setButtonOnClick(c, e)),
            jQuery(_).on(_.events.START_PLAYING, t),
            jQuery(_).on(_.events.STOP_PLAYING, i),
            jQuery(_).on(_.events.VIDEO_ENDED, n),
            jQuery(v).on(v.events.START_PLAYING, t),
            jQuery(v).on(v.events.STOP_PLAYING, i),
            jQuery(v).on(v.events.VIDEO_ENDED, n),
            jQuery(b).on(b.events.START_PLAYING, t),
            jQuery(b).on(b.events.STOP_PLAYING, i),
            jQuery(b).on(b.events.VIDEO_ENDED, n),
            jQuery(y).on(y.events.START_PLAYING, t),
            jQuery(y).on(y.events.STOP_PLAYING, i),
            jQuery(y).on(y.events.VIDEO_ENDED, n),
            jQuery(w).on(w.events.START_PLAYING, t),
            jQuery(w).on(w.events.STOP_PLAYING, i),
            jQuery(w).on(w.events.VIDEO_ENDED, n);
    }
    function a(e) {
        var t = ["youtube", "vimeo", "html5", "soundcloud", "wistia"];
        for (var i in t) {
            var n = t[i];
            if (n != e)
                switch (n) {
                    case "youtube":
                        _.pause(), _.destroy(), l.hide();
                        break;
                    case "vimeo":
                        v.pause(), v.destroy(), u.hide();
                        break;
                    case "html5":
                        b.pause(), d.hide();
                        break;
                    case "soundcloud":
                        y.pause(), y.destroy(), g.hide();
                        break;
                    case "wistia":
                        w.pause(), p.hide();
                }
        }
    }
    var s,
        o,
        l,
        u,
        d,
        c,
        g,
        p,
        h = this,
        m = jQuery(this),
        f = new UGFunctions(),
        _ = new UGYoutubeAPI(),
        v = new UGVimeoAPI(),
        b = new UGHtml5MediaAPI(),
        y = new UGSoundCloudAPI(),
        w = new UGWistiaAPI(),
        T = null,
        x = { video_enable_closebutton: !0 };
    this.events = { SHOW: "video_show", HIDE: "video_hide", PLAY_START: "video_play_start", PLAY_STOP: "video_play_stop", VIDEO_ENDED: "video_ended" };
    var S = { standAloneMode: !1, youtubeInnerID: "", vimeoPlayerID: "", html5PlayerID: "", wistiaPlayerID: "", soundCloudPlayerID: "" };
    (this.init = function (e, t, i) {
        if (((s = i), !s)) throw new Error("missing gallery ID for video player, it's a must!");
        (x = jQuery.extend(x, e)), _.setOptions(x), t && 1 == t && (S.standAloneMode = !0);
    }),
        (this.setHtml = function (e) {
            (S.youtubeInnerID = s + "_youtube_inner"),
                (S.vimeoPlayerID = s + "_videoplayer_vimeo"),
                (S.html5PlayerID = s + "_videoplayer_html5"),
                (S.wistiaPlayerID = s + "_videoplayer_wistia"),
                (S.soundCloudPlayerID = s + "_videoplayer_soundcloud");
            var t = "<div class='ug-videoplayer' style='display:none'>";
            (t += "<div class='ug-videoplayer-wrapper ug-videoplayer-youtube' style='display:none'><div id='" + S.youtubeInnerID + "'></div></div>"),
                (t += "<div id='" + S.vimeoPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-vimeo' style='display:none'></div>"),
                (t += "<div id='" + S.html5PlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-html5'></div>"),
                (t += "<div id='" + S.soundCloudPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-soundcloud'></div>"),
                (t += "<div id='" + S.wistiaPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-wistia'></div>"),
                0 == S.standAloneMode && 1 == x.video_enable_closebutton && (t += "<div class='ug-videoplayer-button-close'></div>"),
                (t += "</div>"),
                e.append(t),
                (o = e.children(".ug-videoplayer")),
                (l = o.children(".ug-videoplayer-youtube")),
                (u = o.children(".ug-videoplayer-vimeo")),
                (d = o.children(".ug-videoplayer-html5")),
                (g = o.children(".ug-videoplayer-soundcloud")),
                (p = o.children(".ug-videoplayer-wistia")),
                0 == S.standAloneMode && 1 == x.video_enable_closebutton && (c = o.children(".ug-videoplayer-button-close"));
        }),
        (this.destroy = function () {
            c && (c.off("click"), c.off("touchend")),
                jQuery(_).off(_.events.START_PLAYING),
                jQuery(_).off(_.events.STOP_PLAYING),
                jQuery(v).off(v.events.START_PLAYING),
                jQuery(v).off(v.events.STOP_PLAYING),
                jQuery(b).off(b.events.START_PLAYING),
                jQuery(b).off(b.events.STOP_PLAYING),
                jQuery(y).off(y.events.START_PLAYING, t),
                jQuery(y).off(y.events.STOP_PLAYING, i),
                jQuery(w).off(w.events.START_PLAYING, t),
                jQuery(w).off(w.events.STOP_PLAYING, i),
                (T = null);
        }),
        (this.initEvents = function () {
            r();
        }),
        (this.setSize = function (e, t) {
            f.setElementSize(o, e, t), c && f.placeElement(c, "right", "top");
        }),
        (this.setPosition = function (e, t) {
            f.placeElement(o, e, t);
        }),
        (this.getObject = function () {
            return o;
        }),
        (this.show = function () {
            return 1 == h.isVisible() || (o.show(), o.fadeTo(0, 1), c && c.show(), void m.trigger(h.events.SHOW));
        }),
        (this.hide = function () {
            return 0 == h.isVisible() || (a(), (T = null), o.hide(), void m.trigger(h.events.HIDE));
        }),
        (this.getActiveAPI = function () {
            switch (T) {
                case "youtube":
                    return _;
                case "vimeo":
                    return v;
                case "wistia":
                    return w;
                case "soundcloud":
                    return y;
                case "html5":
                    return b;
                default:
                    return null;
            }
        }),
        (this.pause = function () {
            var e = h.getActiveAPI();
            return null != e && void ("function" == typeof e.pause && e.pause());
        }),
        (this.isVisible = function () {
            return o.is(":visible");
        }),
        (this.playYoutube = function (e, t) {
            if ("undefined" == typeof t) var t = !0;
            a("youtube"), l.show();
            var i = l.children("#" + S.youtubeInnerID);
            0 == i.length && l.append("<div id='" + S.youtubeInnerID + "'></div>"), 1 == _.isPlayerReady() && 1 == S.standAloneMode ? _.changeVideo(e, t) : _.putVideo(S.youtubeInnerID, e, "100%", "100%", t), (T = "youtube");
        }),
        (this.playVimeo = function (e, t) {
            if ("undefined" == typeof t) var t = !0;
            a("vimeo"), u.show(), v.putVideo(S.vimeoPlayerID, e, "100%", "100%", t), (T = "vimeo");
        }),
        (this.playHtml5Video = function (e, t, i, n, r) {
            if ("undefined" == typeof r) var r = !0;
            a("html5"), d.show();
            var s = { ogv: e, webm: t, mp4: i, posterImage: n };
            b.putVideo(S.html5PlayerID, s, "100%", "100%", r), (T = "html5");
        }),
        (this.playSoundCloud = function (e, t) {
            if ("undefined" == typeof t) var t = !0;
            a("soundcloud"), g.show(), y.putSound(S.soundCloudPlayerID, e, "100%", "100%", t), (T = "soundcloud");
        }),
        (this.playWistia = function (e, t) {
            if ("undefined" == typeof t) var t = !0;
            a("wistia"), p.show(), w.putVideo(S.wistiaPlayerID, e, "100%", "100%", t), (T = "wistia");
        });
}
function ugCheckForMinJQueryVersion() {
    var e = g_ugFunctions.checkMinJqueryVersion("1.8.0");
    if (0 == e) throw new Error("The gallery can run from jquery 1.8 You have jQuery " + jQuery.fn.jquery + " Please update your jQuery library.");
}
function ugCheckForErrors(e, t) {
    function i() {
        if ("undefined" == typeof jQuery) throw new Error("jQuery library not included");
    }
    function n() {
        if ("function" == typeof jQuery.fn.unitegallery) return !0;
        var e = "You have some jquery.js library include that comes after the gallery files js include.";
        throw (
            ((e += "<br> This include eliminates the gallery libraries, and make it not work."),
            "cms" == t
                ? ((e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true."),
                  (e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it."))
                : (e += "<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page."),
            new Error(e))
        );
    }
    try {
        "jquery" == t ? (i(), ugCheckForMinJQueryVersion()) : (ugCheckForMinJQueryVersion(), n());
    } catch (i) {
        var r = i.message;
        if (((r = "Unite Gallery Error: " + r), (r = "<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>" + r + "</div>"), "jquery" == t)) {
            var a = document.getElementById(e);
            (a.innerHTML = r), (a.style.display = "block");
        } else jQuery(e).show().html(r);
        return !1;
    }
    return !0;
}
function UniteGalleryMain() {
    function __________INIT_GALLERY_______() {}
    function getThemeFunction(e) {
        var t = e;
        return -1 == t.indexOf("UGTheme_") && (t = "UGTheme_" + t), t;
    }
    function initTheme(objCustomOptions) {
        if (objCustomOptions.hasOwnProperty("gallery_theme")) g_options.gallery_theme = objCustomOptions.gallery_theme;
        else {
            var defaultTheme = g_options.gallery_theme;
            0 == g_ugFunctions.isThemeRegistered(defaultTheme) && (g_options.gallery_theme = g_ugFunctions.getFirstRegisteredTheme());
        }
        var themeFunction = getThemeFunction(g_options.gallery_theme);
        try {
            g_options.gallery_theme = eval(themeFunction);
        } catch (e) {}
        (g_options.gallery_theme = eval(themeFunction)), (g_objTheme = new g_options.gallery_theme()), g_objTheme.init(t, objCustomOptions);
    }
    function resetOptions() {
        (g_options = jQuery.extend({}, g_temp.originalOptions)), (g_selectedItemIndex = -1), (g_selectedItem = null), (g_objSlider = void 0), (g_objThumbs = void 0), (g_objSlider = void 0);
    }
    function checkForStartupErrors() {
        try {
            ugCheckForMinJQueryVersion();
        } catch (e) {
            throwErrorShowMessage(e.message);
        }
        "object" == typeof g_objWrapper.outerWidth() &&
            throwErrorShowMessage("You have some buggy script. most chances jquery-ui.js that destroy jquery outerWidth, outerHeight functions. The gallery can't run. Please update jquery-ui.js to latest version."),
            setTimeout(function () {
                ugCheckForErrors(g_galleryID, "cms");
            }, 5e3);
    }
    function runGallery(e, i, n, r) {
        var a = "object" == typeof i;
        if ((a && (g_temp.objCustomOptions = i), 1 == g_temp.isRunFirstTime)) {
            if (((g_galleryID = e), (g_objWrapper = jQuery(g_galleryID)), 0 == g_objWrapper.length)) return trace("div with id: " + g_galleryID + " not found"), !1;
            (g_objParent = g_objWrapper.parent()),
                checkForStartupErrors(),
                (g_temp.originalOptions = jQuery.extend({}, g_options)),
                a && (g_options = jQuery.extend(g_options, i)),
                1 == g_options.gallery_enable_cache && g_options.gallery_initial_catid && cacheItems(g_options.gallery_initial_catid),
                t.setSizeClass();
            var s = g_objWrapper.children();
            fillItemsArray(s), loadAPIs(), g_objWrapper.find("img").fadeTo(0, 0).hide(), g_objWrapper.show(), clearInitData();
        } else if ((t.destroy(), resetOptions(), (g_options = jQuery.extend(g_options, g_temp.objCustomOptions)), n)) {
            if ((r && 1 == g_options.gallery_enable_cache && cacheItems(r, n), "noitems" == n)) return showErrorMessage("No items in this category", ""), !1;
            g_objWrapper.html(n);
            var s = g_objWrapper.children();
            fillItemsArray(s), loadAPIs(), g_objWrapper.children().fadeTo(0, 0).hide(), g_objWrapper.show(), clearInitData();
        }
        1 == g_temp.isRunFirstTime && 1 == g_options.gallery_enable_tabs && ((g_objTabs = new UGTabs()), g_objTabs.init(t, g_options)),
            1 == g_temp.isRunFirstTime && 1 == g_options.gallery_enable_loadmore && ((g_objLoadMore = new UGLoadMore()), g_objLoadMore.init(t, g_options)),
            a && modifyInitParams(g_temp.objCustomOptions),
            validateParams(),
            1 == g_options.gallery_shuffle && t.shuffleItems(),
            initTheme(g_temp.objCustomOptions),
            setGalleryHtml(),
            setHtmlObjectsProperties();
        var o = g_objWrapper.width();
        0 == o ? g_functions.waitForWidth(g_objWrapper, runGalleryActually) : runGalleryActually();
    }
    function runGalleryActually() {
        t.setSizeClass(),
            0 == g_temp.isFreestyleMode && 1 == g_options.gallery_preserve_ratio && setHeightByOriginalRatio(),
            g_objTheme.run(),
            g_objTabs && g_temp.isRunFirstTime && g_objTabs.run(),
            preloadBigImages(),
            initEvents(),
            g_numItems > 0 && t.selectItem(0),
            1 == g_options.gallery_autoplay && t.startPlayMode(),
            (g_temp.isRunFirstTime = !1);
    }
    function showErrorMessage(e, t) {
        if ("undefined" == typeof t) var t = "<b>Unite Gallery Error: </b>";
        else t = "<b>" + t + ": </b>";
        e = t + e;
        var i = "<div class='ug-error-message-wrapper'><div class='ug-error-message'>" + e + "</div></div>";
        g_objWrapper.children().remove(), g_objWrapper.html(i), g_objWrapper.show();
    }
    function throwErrorShowMessage(e) {
        throw (showErrorMessage(e), new Error(e));
    }
    function modifyInitParams() {
        g_options.gallery_images_preload_type || (g_options.gallery_images_preload_type = "minimal"),
            (void 0 == g_options.gallery_min_height || g_options.gallery_height < g_options.gallery_min_height) && (g_options.gallery_min_height = 0),
            (void 0 == g_options.gallery_min_width || g_options.gallery_width < g_options.gallery_min_width) && (g_options.gallery_min_width = 0);
    }
    function validateParams() {
        if (!g_options.gallery_theme) throw new Error("The gallery can't run without theme");
        if (jQuery.isNumeric(g_options.gallery_height) && g_options.gallery_height < g_options.gallery_min_height) throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");
        if (g_options.gallery_width < g_options.gallery_min_width) throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>");
    }
    function setGalleryHtml() {
        g_objWrapper.addClass("ug-gallery-wrapper"), g_objWrapper.append("<div class='ug-overlay-disabled' style='display:none'></div>"), t.setSizeClass();
    }
    function clearInitData() {
        g_objWrapper.children().remove();
    }
    function storeLastSize() {
        var e = t.getSize();
        (g_temp.lastWidth = e.width), (g_temp.lastHeight = e.height);
    }
    function setHeightByOriginalRatio() {
        var e = t.getSize(),
            i = e.width / e.height;
        if (i != e.orig_ratio) {
            var n = e.width / e.orig_ratio;
            (n = Math.round(n)), n < g_options.gallery_min_height && (n = g_options.gallery_min_height), g_objWrapper.height(n);
        }
    }
    function setHtmlObjectsProperties() {
        var e = g_functions.getCssSizeParam(g_options.gallery_width),
            t = { "max-width": e, "min-width": g_functions.getCssSizeParam(g_options.gallery_min_width) };
        if (0 == g_temp.isFreestyleMode) {
            var i = g_functions.getCssSizeParam(g_options.gallery_height);
            t.height = i;
        } else t.overflow = "visible";
        g_options.gallery_background_color && (t["background-color"] = g_options.gallery_background_color), g_objWrapper.css(t);
    }
    function fillItemByChild(e) {
        var i = t.isMobileMode(),
            n = e.prop("tagName").toLowerCase(),
            r = "";
        if ("a" == n) {
            (r = e.attr("href")), (e = e.children());
            var n = e.prop("tagName").toLowerCase();
        }
        var a = e.data("type");
        void 0 == a && (a = "image");
        var s = {};
        if (((s.type = a), "img" == n)) {
            var o = e.data("lazyload-src");
            o && "" != o && (e.attr("src", o), jQuery.removeData(e, "lazyload-src"));
            var l = e.data("image"),
                u = e.data("thumb");
            "undefined" == typeof l && (l = null), "undefined" == typeof u && (u = null);
            var d = e.attr("src");
            l || (l = d), u || (u = d), u || (u = l), l || (l = u), (s.urlThumb = u), (s.urlImage = l), (s.title = e.attr("alt")), (s.objThumbImage = e), s.objThumbImage.attr("src", s.urlThumb);
        } else {
            if ("image" == a) throw (trace("Problematic gallery item found:"), trace(e), trace("Please look for some third party js script that could add this item to the gallery"), new Error("The item should not be image type"));
            (s.urlThumb = e.data("thumb")), (s.title = e.data("title")), (s.objThumbImage = null), (s.urlImage = e.data("image"));
        }
        if (1 == i) {
            var c = e.data("thumb-mobile");
            "undefined" != typeof c && "" != c && ((s.urlThumb = c), "img" == n && e.attr("src", s.urlThumb));
            var g = e.data("image-mobile");
            "undefined" != typeof g && "" != g && (s.urlImage = g);
        }
        (s.link = r),
            (s.description = e.attr("title")),
            s.description || (s.description = e.data("description")),
            s.description || (s.description = ""),
            (s.isNewAdded = !1),
            (s.isLoaded = !1),
            (s.isThumbImageLoaded = !1),
            (s.objPreloadImage = null),
            (s.isBigImageLoadStarted = !1),
            (s.isBigImageLoaded = !1),
            (s.isBigImageLoadError = !1),
            (s.imageWidth = 0),
            (s.imageHeight = 0),
            (s.thumbWidth = 0),
            (s.thumbHeight = 0),
            (s.thumbRatioByWidth = 0),
            (s.thumbRatioByHeight = 0);
        var p = e.data("width"),
            h = e.data("height");
        p && "number" == typeof p && h && "number" == typeof h && ((s.thumbWidth = p), (s.thumbHeight = h), (s.thumbRatioByWidth = p / h), (s.thumbRatioByHeight = h / p)), (s.addHtml = null);
        var m = void 0 == s.urlImage || "" == s.urlImage,
            f = void 0 == s.urlThumb || "" == s.urlThumb;
        switch (s.type) {
            case "youtube":
                if (((s.videoid = e.data("videoid")), m || f)) {
                    var _ = g_ugYoutubeAPI.getVideoImages(s.videoid);
                    m && (s.urlImage = _.preview), f && ((s.urlThumb = _.thumb), "img" == n && e.attr("src", s.urlThumb));
                }
                g_temp.isYoutubePresent = !0;
                break;
            case "vimeo":
                (s.videoid = e.data("videoid")), (g_temp.isVimeoPresent = !0);
                break;
            case "html5video":
                (s.videoogv = e.data("videoogv")), (s.videowebm = e.data("videowebm")), (s.videomp4 = e.data("videomp4")), (g_temp.isHtml5VideoPresent = !0);
                break;
            case "soundcloud":
                (s.trackid = e.data("trackid")), (g_temp.isSoundCloudPresent = !0);
                break;
            case "wistia":
                (s.videoid = e.data("videoid")), (g_temp.isWistiaPresent = !0);
                break;
            case "custom":
                var v = e.children("img");
                v.length && ((v = jQuery(v[0])), (s.urlThumb = v.attr("src")), (s.title = v.attr("alt")), (s.objThumbImage = v));
                var b = e.children().not("img:first-child");
                b.length && (s.addHtml = b.clone());
        }
        return s.objThumbImage && (s.objThumbImage.removeAttr("data-description", ""), s.objThumbImage.removeAttr("data-image", ""), s.objThumbImage.removeAttr("data-thumb", ""), s.objThumbImage.removeAttr("title", "")), s;
    }
    function fillItemsArray(e, t) {
        if (t !== !0) g_arrItems = [];
        else for (var i = 0; g_numItems > i; i++) g_arrItems[i].isNewAdded = !1;
        for (var i = 0; i < e.length; i++) {
            var n = jQuery(e[i]),
                r = fillItemByChild(n);
            (numIndex = g_arrItems.length), (r.index = numIndex), t === !0 && (r.isNewAdded = !0), g_arrItems.push(r);
        }
        g_numItems = g_arrItems.length;
    }
    function loadAPIs() {
        g_temp.isYoutubePresent && g_ugYoutubeAPI.loadAPI(),
            g_temp.isVimeoPresent && g_ugVimeoAPI.loadAPI(),
            g_temp.isHtml5VideoPresent && g_ugHtml5MediaAPI.loadAPI(),
            g_temp.isSoundCloudPresent && g_ugSoundCloudAPI.loadAPI(),
            g_temp.isWistiaPresent && g_ugWistiaAPI.loadAPI();
    }
    function preloadBigImages() {
        if (("visible" != g_options.gallery_images_preload_type || g_objThumbs || (g_options.gallery_images_preload_type = "minimal"), 1 == g_temp.isAllItemsPreloaded)) return !0;
        switch (g_options.gallery_images_preload_type) {
            default:
            case "minimal":
                break;
            case "all":
                jQuery(g_arrItems).each(function () {
                    preloadItemImage(this);
                });
                break;
            case "visible":
                jQuery(g_arrItems).each(function () {
                    var e = this,
                        t = g_objThumbs.isItemThumbVisible(e);
                    1 == t && preloadItemImage(e);
                });
        }
    }
    function checkPreloadItemImage(e) {
        if (1 == e.isBigImageLoadStarted || 1 == e.isBigImageLoaded || 1 == e.isBigImageLoadError) return !1;
        switch (g_options.gallery_images_preload_type) {
            default:
            case "minimal":
                break;
            case "all":
                preloadItemImage(e);
                break;
            case "visible":
                var t = g_objThumbs.isItemThumbVisible(e);
                1 == t && preloadItemImage(e);
        }
    }
    function preloadItemImage(e) {
        if (1 == e.isBigImageLoadStarted || 1 == e.isBigImageLoaded || 1 == e.isBigImageLoadError) return !0;
        var i = e.urlImage;
        return "" == i || void 0 == i
            ? ((e.isBigImageLoadError = !0), !1)
            : ((e.isBigImageLoadStarted = !0),
              (e.objPreloadImage = jQuery("<img/>").attr("src", i)),
              e.objPreloadImage.data("itemIndex", e.index),
              e.objPreloadImage.on("load", t.onItemBigImageLoaded),
              e.objPreloadImage.on("error", function () {
                  var e = jQuery(this),
                      i = e.data("itemIndex"),
                      n = g_arrItems[i];
                  (n.isBigImageLoadError = !0), (n.isBigImageLoaded = !1);
                  var r = jQuery(this).attr("src");
                  console.log("Can't load image: " + r), g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED, [i, n.urlImage]), n.objThumbImage.attr("src", n.urlThumb);
              }),
              void checkAllItemsStartedPreloading());
    }
    function preloadNearBigImages(e) {
        if (1 == g_temp.isAllItemsPreloaded) return !1;
        if (!e) var e = g_selectedItem;
        if (!e) return !0;
        var t = e.index,
            i = t - 1,
            n = t + 1;
        i > 0 && preloadItemImage(g_arrItems[i]), g_numItems > n && preloadItemImage(g_arrItems[n]);
    }
    function checkAllItemsStartedPreloading() {
        if (1 == g_temp.isAllItemsPreloaded) return !1;
        for (var e in g_arrItems) if (0 == g_arrItems[e].isBigImageLoadStarted) return !1;
        g_temp.isAllItemsPreloaded = !0;
    }
    function __________END_INIT_GALLERY_______() {}
    function __________EVENTS_____________() {}
    function onSliderMouseEnter(e) {
        1 == g_options.gallery_pause_on_mouseover && 0 == t.isFullScreen() && 1 == g_temp.isPlayMode && g_objSlider && 0 == g_objSlider.isSlideActionActive() && t.pausePlaying();
    }
    function onSliderMouseLeave(e) {
        if (1 == g_options.gallery_pause_on_mouseover && 1 == g_temp.isPlayMode && g_objSlider && 0 == g_objSlider.isSlideActionActive()) {
            var i = g_objSlider.isCurrentSlideLoadingImage();
            0 == i && t.continuePlaying();
        }
    }
    function onKeyPress(e) {
        var i = jQuery(e.target);
        if (i.is("textarea") || i.is("select") || i.is("input")) return !0;
        var n = e.charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0,
            r = !0;
        switch (n) {
            case 39:
                t.nextItem();
                break;
            case 37:
                t.prevItem();
                break;
            default:
                r = !1;
        }
        1 == r && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()), g_objGallery.trigger(t.events.GALLERY_KEYPRESS, [n, e]);
    }
    function onGalleryResized() {
        var e = t.getSize();
        if (0 == e.width) return !0;
        t.setSizeClass();
        var e = t.getSize();
        if (e.width != g_temp.lastWidth || (0 == g_temp.isFreestyleMode && e.height != g_temp.lastHeight)) {
            var i = !1;
            if (g_temp.funcCustomHeight) {
                var n = g_temp.funcCustomHeight(e);
                n && (g_objWrapper.height(n), (i = !0));
            }
            0 == i && 1 == g_options.gallery_preserve_ratio && 0 == g_temp.isFreestyleMode && setHeightByOriginalRatio(), storeLastSize(), g_objGallery.trigger(t.events.SIZE_CHANGE);
        }
    }
    function onThumbsChange(e) {
        "visible" == g_options.gallery_images_preload_type && 0 == g_temp.isAllItemsPreloaded && preloadBigImages();
    }
    function onFullScreenChange() {
        var e = g_functions.isFullScreen(),
            i = e ? t.events.ENTER_FULLSCREEN : t.events.EXIT_FULLSCREEN,
            n = g_functions.getGlobalData("fullscreenID");
        return g_galleryID !== n || (e ? g_objWrapper.addClass("ug-fullscreen") : g_objWrapper.removeClass("ug-fullscreen"), g_objGallery.trigger(i), void onGalleryResized());
    }
    function onItemImageUpdated(e, i) {
        var n = t.getItem(i);
        checkPreloadItemImage(n);
    }
    function onCurrentSlideImageLoadEnd() {
        1 == t.isPlayMode() && t.continuePlaying();
    }
    function initEvents() {
        if (
            (g_objWrapper.on("dragstart", function (e) {
                e.preventDefault();
            }),
            g_objGallery.on(t.events.ITEM_IMAGE_UPDATED, onItemImageUpdated),
            g_objThumbs)
        )
            switch (g_temp.thumbsType) {
                case "strip":
                    jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE, onThumbsChange);
                    break;
                case "grid":
                    jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE, onThumbsChange);
            }
        if (
            ("advance" == g_options.gallery_mousewheel_role && 0 == g_temp.isFreestyleMode && g_objWrapper.on("mousewheel", t.onGalleryMouseWheel),
            storeLastSize(),
            jQuery(window).resize(function () {
                g_objWrapper.css("width", "auto"), g_functions.whenContiniousEventOver("gallery_resize", onGalleryResized, g_temp.resizeDelay);
            }),
            setTimeout(function () {
                setInterval(onGalleryResized, 2e3);
            }, 1e4),
            g_functions.addFullScreenChangeEvent(onFullScreenChange),
            g_objSlider)
        ) {
            if (
                (jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED, function () {
                    var e = g_objSlider.getCurrentItemIndex();
                    -1 != e && t.selectItem(e);
                }),
                1 == g_options.gallery_pause_on_mouseover)
            ) {
                var e = g_objSlider.getElement();
                e.hover(onSliderMouseEnter, onSliderMouseLeave),
                    g_objGallery.on(t.events.ENTER_FULLSCREEN, function () {
                        onSliderMouseLeave();
                    });
            }
            retriggerEvent(g_objSlider, g_objSlider.events.ACTION_START, t.events.SLIDER_ACTION_START),
                retriggerEvent(g_objSlider, g_objSlider.events.ACTION_END, t.events.SLIDER_ACTION_END),
                jQuery(g_objSlider).on(g_objSlider.events.CURRENTSLIDE_LOAD_END, onCurrentSlideImageLoadEnd);
        }
        1 == g_options.gallery_control_keyboard && jQuery(document).keydown(onKeyPress);
    }
    function __________GENERAL_______() {}
    function cacheItems(e, t) {
        if (t) {
            var i = t;
            "noitems" != i && (i = jQuery(t).clone());
        } else var i = g_objWrapper.children().clone();
        g_objCache[e] = i;
    }
    function removeAllSizeClasses(e) {
        e || (e = g_objWrapper), e.removeClass("ug-under-480"), e.removeClass("ug-under-780"), e.removeClass("ug-under-960");
    }
    function retriggerEvent(e, t, i) {
        jQuery(e).on(t, function (e) {
            g_objGallery.trigger(i, [this]);
        });
    }
    function advanceNextStep() {
        var e = jQuery.now(),
            i = e - g_temp.playTimeLastStep;
        g_temp.playTimeLastStep = e;
        var n = t.isGalleryVisible();
        if (0 == n) return !1;
        if (((g_temp.playTimePassed += i), g_temp.objProgress)) {
            var r = g_temp.playTimePassed / g_options.gallery_play_interval;
            g_temp.objProgress.setProgress(r);
        }
        g_temp.playTimePassed >= g_options.gallery_play_interval && (t.nextItem(), (g_temp.playTimePassed = 0));
    }
    function unselectSeletedItem() {
        return null == g_selectedItem || (g_objThumbs && g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper), (g_selectedItem = null), void (g_selectedItemIndex = -1));
    }
    function toFakeFullScreen() {
        jQuery("body").addClass("ug-body-fullscreen"), g_objWrapper.addClass("ug-fake-fullscreen"), (g_temp.isFakeFullscreen = !0), g_objGallery.trigger(t.events.ENTER_FULLSCREEN), g_objGallery.trigger(t.events.SIZE_CHANGE);
    }
    function exitFakeFullscreen() {
        jQuery("body").removeClass("ug-body-fullscreen"), g_objWrapper.removeClass("ug-fake-fullscreen"), (g_temp.isFakeFullscreen = !1), g_objGallery.trigger(t.events.EXIT_FULLSCREEN), g_objGallery.trigger(t.events.SIZE_CHANGE);
    }
    var t = this,
        g_galleryID,
        g_objGallery = jQuery(t),
        g_objWrapper,
        g_objParent,
        g_objThumbs,
        g_objSlider,
        g_functions = new UGFunctions(),
        g_objTabs,
        g_objLoadMore,
        g_arrItems = [],
        g_numItems,
        g_selectedItem = null,
        g_selectedItemIndex = -1,
        g_objTheme,
        g_objCache = {};
    this.events = {
        ITEM_CHANGE: "item_change",
        SIZE_CHANGE: "size_change",
        ENTER_FULLSCREEN: "enter_fullscreen",
        EXIT_FULLSCREEN: "exit_fullscreen",
        START_PLAY: "start_play",
        STOP_PLAY: "stop_play",
        PAUSE_PLAYING: "pause_playing",
        CONTINUE_PLAYING: "continue_playing",
        SLIDER_ACTION_START: "slider_action_start",
        SLIDER_ACTION_END: "slider_action_end",
        ITEM_IMAGE_UPDATED: "item_image_updated",
        GALLERY_KEYPRESS: "gallery_keypress",
        GALLERY_BEFORE_REQUEST_ITEMS: "gallery_before_request_items",
        OPEN_LIGHTBOX: "open_lightbox",
        CLOSE_LIGHTBOX: "close_lightbox",
    };
    var g_options = {
            gallery_width: 900,
            gallery_height: 500,
            gallery_min_width: 150,
            gallery_min_height: 100,
            gallery_theme: "default",
            gallery_skin: "default",
            gallery_images_preload_type: "minimal",
            gallery_autoplay: !1,
            gallery_play_interval: 3e3,
            gallery_pause_on_mouseover: !0,
            gallery_mousewheel_role: "zoom",
            gallery_control_keyboard: !0,
            gallery_carousel: !0,
            gallery_preserve_ratio: !0,
            gallery_background_color: "",
            gallery_debug_errors: !1,
            gallery_shuffle: !1,
            gallery_urlajax: null,
            gallery_enable_tabs: !1,
            gallery_enable_loadmore: !1,
            gallery_enable_cache: !0,
            gallery_initial_catid: "",
        },
        g_temp = {
            objCustomOptions: {},
            isAllItemsPreloaded: !1,
            isFreestyleMode: !1,
            lastWidth: 0,
            lastHeigh: 0,
            handleResize: null,
            isInited: !1,
            isPlayMode: !1,
            isPlayModePaused: !1,
            playTimePassed: 0,
            playTimeLastStep: 0,
            playHandle: "",
            playStepInterval: 33,
            objProgress: null,
            isFakeFullscreen: !1,
            thumbsType: null,
            isYoutubePresent: !1,
            isVimeoPresent: !1,
            isHtml5VideoPresent: !1,
            isSoundCloudPresent: !1,
            isWistiaPresent: !1,
            resizeDelay: 100,
            isRunFirstTime: !0,
            originalOptions: {},
            funcCustomHeight: null,
        };
    (this.onItemBigImageLoaded = function (e, t) {
        if (!t) var t = jQuery(this);
        var i = t.data("itemIndex"),
            n = g_arrItems[i];
        n.isBigImageLoaded = !0;
        var r = g_functions.getImageOriginalSize(t);
        (n.imageWidth = r.width), (n.imageHeight = r.height);
    }),
        (this.checkFillImageSize = function (e, t) {
            if (!t) {
                var i = e.data("itemIndex");
                if (void 0 === i) throw new Error("Wrong image given to gallery.checkFillImageSize");
                var t = g_arrItems[i];
            }
            var n = g_functions.getImageOriginalSize(e);
            (t.imageWidth = n.width), (t.imageHeight = n.height);
        }),
        (this.setFreestyleMode = function () {
            g_temp.isFreestyleMode = !0;
        }),
        (this.attachThumbsPanel = function (e, t) {
            (g_temp.thumbsType = e), (g_objThumbs = t);
        }),
        (this.initSlider = function (e, i) {
            if (!e) var e = {};
            (e = jQuery.extend(g_temp.objCustomOptions, e)), (g_objSlider = new UGSlider()), g_objSlider.init(t, e, i);
        }),
        (this.onGalleryMouseWheel = function (e, i, n, r) {
            e.preventDefault(), i > 0 ? t.prevItem() : t.nextItem();
        }),
        (this.destroy = function () {
            if ((g_objWrapper.off("dragstart"), g_objGallery.off(t.events.ITEM_IMAGE_UPDATED), g_objThumbs))
                switch (g_temp.thumbsType) {
                    case "strip":
                        jQuery(g_objThumbs).off(g_objThumbs.events.STRIP_MOVE);
                        break;
                    case "grid":
                        jQuery(g_objThumbs).off(g_objThumbs.events.PANE_CHANGE);
                }
            if ((g_objWrapper.off("mousewheel"), jQuery(window).off("resize"), g_functions.destroyFullScreenChangeEvent(), g_objSlider)) {
                jQuery(g_objSlider).off(g_objSlider.events.ITEM_CHANGED);
                var e = g_objSlider.getElement();
                e.off("mouseenter"),
                    e.off("mouseleave"),
                    g_objGallery.off(t.events.ENTER_FULLSCREEN),
                    jQuery(g_objSlider).off(g_objSlider.events.ACTION_START),
                    jQuery(g_objSlider).off(g_objSlider.events.ACTION_END),
                    jQuery(g_objSlider).off(g_objSlider.events.CURRENTSLIDE_LOAD_END);
            }
            1 == g_options.gallery_control_keyboard && jQuery(document).off("keydown"), g_objTheme && "function" == typeof g_objTheme.destroy && g_objTheme.destroy(), g_objWrapper.html("");
        }),
        (this.getArrItems = function () {
            return g_arrItems;
        }),
        (this.getObjects = function () {
            var e = { g_galleryID: g_galleryID, g_objWrapper: g_objWrapper, g_objThumbs: g_objThumbs, g_objSlider: g_objSlider, g_options: g_options, g_arrItems: g_arrItems, g_numItems: g_numItems };
            return e;
        }),
        (this.getObjSlider = function () {
            return g_objSlider;
        }),
        (this.getItem = function (e) {
            if (0 > e) throw new Error("item with index: " + e + " not found");
            if (e >= g_numItems) throw new Error("item with index: " + e + " not found");
            return g_arrItems[e];
        }),
        (this.getWidth = function () {
            var e = t.getSize();
            return e.width;
        }),
        (this.getHeight = function () {
            var e = t.getSize();
            return e.height;
        }),
        (this.getSize = function () {
            var e = g_functions.getElementSize(g_objWrapper);
            return (e.orig_width = g_options.gallery_width), (e.orig_height = g_options.gallery_height), (e.orig_ratio = e.orig_width / e.orig_height), e;
        }),
        (this.getGalleryID = function () {
            var e = g_galleryID.replace("#", "");
            return e;
        }),
        (this.getNextItem = function (e, t) {
            "object" == typeof e && (e = e.index);
            var i = e + 1;
            if (t !== !0 && 1 == g_numItems) return null;
            if (i >= g_numItems) {
                if (1 != g_options.gallery_carousel && t !== !0) return null;
                i = 0;
            }
            var n = g_arrItems[i];
            return n;
        }),
        (this.getPrevItem = function (e) {
            "object" == typeof e && (e = e.index);
            var t = e - 1;
            if (0 > t) {
                if (1 != g_options.gallery_carousel && forceCarousel !== !0) return null;
                t = g_numItems - 1;
            }
            var i = g_arrItems[t];
            return i;
        }),
        (this.getSelectedItem = function () {
            return g_selectedItem;
        }),
        (this.getSelectedItemIndex = function () {
            return g_selectedItemIndex;
        }),
        (this.getNumItems = function () {
            return g_numItems;
        }),
        (this.isLastItem = function () {
            return g_selectedItemIndex == g_numItems - 1;
        }),
        (this.isFirstItem = function () {
            return 0 == g_selectedItemIndex;
        }),
        (this.getOptions = function () {
            return g_options;
        }),
        (this.getElement = function () {
            return g_objWrapper;
        }),
        (this.___________SET_CONTROLS___________ = function () {}),
        (this.setNextButton = function (e) {
            e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.nextItem);
        }),
        (this.setPrevButton = function (e) {
            e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.prevItem);
        }),
        (this.setFullScreenToggleButton = function (e) {
            e.data("ug-button", !0),
                g_functions.setButtonOnTap(e, t.toggleFullscreen),
                g_objGallery.on(t.events.ENTER_FULLSCREEN, function () {
                    e.addClass("ug-fullscreenmode");
                }),
                g_objGallery.on(t.events.EXIT_FULLSCREEN, function () {
                    e.removeClass("ug-fullscreenmode");
                });
        }),
        (this.destroyFullscreenButton = function (e) {
            g_functions.destroyButton(e), g_objGallery.off(t.events.ENTER_FULLSCREEN), g_objGallery.off(t.events.EXIT_FULLSCREEN);
        }),
        (this.setPlayButton = function (e) {
            e.data("ug-button", !0),
                g_functions.setButtonOnClick(e, t.togglePlayMode),
                g_objGallery.on(t.events.START_PLAY, function () {
                    e.addClass("ug-stop-mode");
                }),
                g_objGallery.on(t.events.STOP_PLAY, function () {
                    e.removeClass("ug-stop-mode");
                });
        }),
        (this.destroyPlayButton = function (e) {
            g_functions.destroyButton(e), g_objGallery.off(t.events.START_PLAY), g_objGallery.off(t.events.STOP_PLAY);
        }),
        (this.setProgressIndicator = function (e) {
            g_temp.objProgress = e;
        }),
        (this.setTextContainers = function (e, i) {
            g_objGallery.on(t.events.ITEM_CHANGE, function () {
                var n = t.getSelectedItem();
                e.html(n.title), i.html(n.description);
            });
        }),
        (this.showDisabledOverlay = function () {
            g_objWrapper.children(".ug-overlay-disabled").show();
        }),
        (this.hideDisabledOverlay = function () {
            g_objWrapper.children(".ug-overlay-disabled").hide();
        }),
        (this.___________END_SET_CONTROLS___________ = function () {}),
        (this.___________PLAY_MODE___________ = function () {}),
        (this.startPlayMode = function () {
            if (
                ((g_temp.isPlayMode = !0),
                (g_temp.isPlayModePaused = !1),
                (g_temp.playTimePassed = 0),
                (g_temp.playTimeLastStep = jQuery.now()),
                (g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval)),
                g_temp.objProgress)
            ) {
                var e = g_temp.objProgress.getElement();
                g_temp.objProgress.setProgress(0), e.show();
            }
            g_objGallery.trigger(t.events.START_PLAY), g_objSlider && 1 == g_objSlider.isCurrentSlideLoadingImage() && t.pausePlaying();
        }),
        (this.resetPlaying = function () {
            return 0 == g_temp.isPlayMode || ((g_temp.playTimePassed = 0), void (g_temp.playTimeLastStep = jQuery.now()));
        }),
        (this.pausePlaying = function () {
            return 1 == g_temp.isPlayModePaused || ((g_temp.isPlayModePaused = !0), clearInterval(g_temp.playHandle), void g_objGallery.trigger(t.events.PAUSE_PLAYING));
        }),
        (this.continuePlaying = function () {
            return 0 == g_temp.isPlayModePaused || ((g_temp.isPlayModePaused = !1), (g_temp.playTimeLastStep = jQuery.now()), void (g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval)));
        }),
        (this.stopPlayMode = function () {
            if (((g_temp.isPlayMode = !1), clearInterval(g_temp.playHandle), (g_temp.playTimePassed = 0), g_temp.objProgress)) {
                var e = g_temp.objProgress.getElement();
                e.hide();
            }
            g_objGallery.trigger(t.events.STOP_PLAY);
        }),
        (this.isPlayMode = function () {
            return g_temp.isPlayMode;
        }),
        (this.togglePlayMode = function () {
            0 == t.isPlayMode() ? t.startPlayMode() : t.stopPlayMode();
        }),
        (this.___________GENERAL_EXTERNAL___________ = function () {}),
        (this.shuffleItems = function () {
            g_arrItems = g_functions.arrayShuffle(g_arrItems);
            for (var e in g_arrItems) g_arrItems[e].index = parseInt(e);
        }),
        (this.setOptions = function (e) {
            g_options = jQuery.extend(g_options, e);
        }),
        (this.selectItem = function (e, i) {
            "number" == typeof e && (e = t.getItem(e));
            var n = e.index;
            if (n == g_selectedItemIndex) return !0;
            if ((unselectSeletedItem(), (g_selectedItem = e), (g_selectedItemIndex = n), g_objGallery.trigger(t.events.ITEM_CHANGE, [e, i]), 1 == g_temp.isPlayMode)) {
                t.resetPlaying();
                var r = g_objSlider.isCurrentSlideLoadingImage();
                1 == r && t.pausePlaying();
            }
        }),
        (this.nextItem = function () {
            var e = g_selectedItemIndex + 1;
            return 0 == g_numItems || (0 == g_options.gallery_carousel && e >= g_numItems) || (e >= g_numItems && (e = 0), void t.selectItem(e, "next"));
        }),
        (this.prevItem = function () {
            var e = g_selectedItemIndex - 1;
            return -1 == g_selectedItemIndex && (e = 0), 0 == g_numItems || (0 == g_options.gallery_carousel && 0 > e) || (0 > e && (e = g_numItems - 1), void t.selectItem(e, "prev"));
        }),
        (this.isFullScreen = function () {
            return 1 == g_temp.isFakeFullscreen || 1 == g_functions.isFullScreen();
        }),
        (this.isFakeFullscreen = function () {
            return g_temp.isFakeFullscreen;
        }),
        (this.toFullScreen = function () {
            g_functions.setGlobalData("fullscreenID", g_galleryID);
            var e = g_objWrapper.get(0),
                t = g_functions.toFullscreen(e);
            0 == t && toFakeFullScreen();
        }),
        (this.exitFullScreen = function () {
            1 == g_temp.isFakeFullscreen ? exitFakeFullscreen() : g_functions.exitFullscreen();
        }),
        (this.toggleFullscreen = function () {
            0 == t.isFullScreen() ? t.toFullScreen() : t.exitFullScreen();
        }),
        (this.resize = function (e, t, i) {
            g_objWrapper.css("width", "auto"), g_objWrapper.css("max-width", e + "px"), t && g_objWrapper.height(t), i || i === !0 || onGalleryResized();
        }),
        (this.setSizeClass = function (e, i) {
            if (!e) var e = g_objWrapper;
            if (!i)
                var n = t.getSize(),
                    i = n.width;
            if (0 == i) var i = jQuery(window).width();
            var r = "";
            return 480 >= i ? (r = "ug-under-480") : 780 >= i ? (r = "ug-under-780") : 960 > i && (r = "ug-under-960"), 1 == e.hasClass(r) || (removeAllSizeClasses(e), void ("" != r && e.addClass(r)));
        }),
        (this.isMobileMode = function () {
            return !!g_objWrapper.hasClass("ug-under-480");
        }),
        (this.isSmallWindow = function () {
            var e = jQuery(window).width();
            return !e || 480 >= e;
        }),
        (this.isGalleryVisible = function () {
            var e = g_objWrapper.is(":visible");
            return e;
        }),
        (this.changeItems = function (e, t) {
            if (!e) var e = "noitems";
            runGallery(g_galleryID, "nochange", e, t);
        }),
        (this.addItems = function (e) {
            if (!e || 0 == e.length) return !1;
            var t = g_objWrapper.children(".ug-newitems-wrapper");
            0 == t.length && g_objWrapper.append("<div class='ug-newitems-wrapper' style='display:none'></div>"), (t = g_objWrapper.children(".ug-newitems-wrapper")), t.append(e);
            var i = jQuery(t.children());
            if ((fillItemsArray(i, !0), loadAPIs(), !g_objTheme || "function" != typeof g_objTheme.addItems)) throw new Error("addItems function not found in the theme");
            t.remove(), g_objTheme.addItems();
        }),
        (this.getNewAddedItemsIndexes = function () {
            var e = [];
            return (
                jQuery.each(g_arrItems, function (t, i) {
                    1 == i.isNewAdded && e.push(t);
                }),
                e
            );
        }),
        (this.showErrorMessageReplaceGallery = function (e) {
            showErrorMessage(e);
        }),
        (this.setFuncCustomHeight = function (e) {
            g_temp.funcCustomHeight = e;
        }),
        (this.__________EXTERNAL_EVENTS_______ = function () {}),
        (this.triggerEvent = function (e, t) {
            t ? ("array" != jQuery.type(t) && (t = [t]), g_objGallery.trigger(e, t)) : g_objGallery.trigger(e);
        }),
        (this.onEvent = function (e, t) {
            g_objGallery.on(e, t);
        }),
        (this.destroyEvent = function (e) {
            g_objGallery.off(e);
        }),
        (this.__________AJAX_REQUEST_______ = function () {}),
        (this.ajaxRequest = function (e, t, i, n) {
            if (!i || "function" != typeof i) throw new Error("ajaxRequest error: success function should be passed");
            var r = g_options.gallery_urlajax;
            if (!r || "" == r) throw new Error("ajaxRequest error: Ajax url don't passed");
            if ("undefined" == typeof t) var t = {};
            var a = { action: "unitegallery_ajax_action", client_action: e, galleryID: g_galleryID, data: t };
            jQuery.ajax({
                type: "post",
                url: g_options.gallery_urlajax,
                dataType: "json",
                data: a,
                success: function (e) {
                    if (!e) throw new Error("Empty ajax response!");
                    if (-1 == e || 0 === e) throw new Error("ajax error!!!");
                    if ("undefined" == typeof e.success) throw new Error("ajax error!!!");
                    return 0 == e.success ? (showErrorMessage(e.message, "ajax error"), !1) : void i(e);
                },
                error: function (e, t, i) {
                    console.log("Ajax Error!!! " + t), (responseText = e.responseText), n && "function" == typeof n ? n(responseText) : trace(responseText);
                },
            });
        }),
        (this.requestNewItems = function (e, i, n) {
            var r = g_options.gallery_enable_cache;
            if ((n || (n = e), 1 == i && (r = !1), 1 == r && g_objCache.hasOwnProperty(n))) {
                var a = g_objCache[n];
                t.changeItems(a, n);
            } else
                g_objGallery.trigger(t.events.GALLERY_BEFORE_REQUEST_ITEMS),
                    t.ajaxRequest("front_get_cat_items", { catid: e }, function (e) {
                        var i = e.html;
                        t.changeItems(i, n);
                    });
        }),
        (this.run = function (e, t) {
            if ((g_options.gallery_debug_errors, t && t.hasOwnProperty("gallery_debug_errors") && (g_options.gallery_debug_errors = t.gallery_debug_errors), 1 == g_options.gallery_debug_errors))
                try {
                    runGallery(e, t);
                } catch (e) {
                    if ("object" == typeof e) {
                        var i = e.message,
                            n = e.lineNumber,
                            r = e.fileName;
                        e.stack, (i += " <br><br> in file: " + r), (i += " <b> line " + n + "</b>"), trace(e);
                    } else var i = e;
                    (i = i.replace("Error:", "")), showErrorMessage(i);
                }
            else runGallery(e, t);
        });
}
function UGLightbox() {
    function e(e, i) {
        (ie = e),
            (X = jQuery(e)),
            (se = jQuery.extend(se, le)),
            (se = jQuery.extend(se, i)),
            (oe.originalOptions = jQuery.extend({}, se)),
            "compact" == se.lightbox_type && ((oe.isCompact = !0), (se = jQuery.extend(se, ue)), (se = jQuery.extend(se, i))),
            t(),
            1 == oe.putSlider ? (ie.initSlider(se, "lightbox"), (g_objects = e.getObjects()), (ne = g_objects.g_objSlider)) : (ne = null),
            1 == se.lightbox_show_textpanel ? ae.init(ie, se, "lightbox") : (ae = null);
    }
    function t() {
        1 == oe.isCompact && 1 == se.lightbox_show_textpanel && (se.lightbox_slider_image_padding_bottom = oe.initTextPanelHeight),
            1 == oe.isCompact && "inside" == se.lightbox_arrows_position && (oe.isArrowsInside = !0),
            1 == oe.isArrowsInside && 0 == se.lightbox_arrows_inside_alwayson && (oe.isArrowsOnHoverMode = !0),
            0 == se.lightbox_show_textpanel && ((oe.isTopPanelEnabled = !1), (oe.topPanelHeight = 0), (se.lightbox_slider_image_padding_top = 0));
    }
    function i() {
        var e = "",
            t = "";
        1 == oe.isCompact && (t = " ug-lightbox-compact"),
            (e += "<div class='ug-gallery-wrapper ug-lightbox" + t + "'>"),
            (e += "<div class='ug-lightbox-overlay'></div>"),
            0 == oe.isCompact && oe.isTopPanelEnabled
                ? ((e += "<div class='ug-lightbox-top-panel'>"), (e += "<div class='ug-lightbox-top-panel-overlay'></div>"), se.lightbox_show_numbers && (e += "<div class='ug-lightbox-numbers'></div>"), (e += "</div>"))
                : se.lightbox_show_numbers && (e += "<div class='ug-lightbox-numbers'></div>"),
            (e += "<div class='ug-lightbox-button-close'></div>"),
            (e += "<div class='ug-lightbox-arrow-left'></div>"),
            (e += "<div class='ug-lightbox-arrow-right'></div>"),
            (e += "</div>"),
            (U = jQuery(e)),
            jQuery("body").append(U),
            ne && ne.setHtml(U),
            (V = U.children(".ug-lightbox-overlay")),
            0 == oe.isCompact && 1 == oe.isTopPanelEnabled && ((J = U.children(".ug-lightbox-top-panel")), 0 == J.length && (J = null)),
            (K = U.find(".ug-lightbox-button-close")),
            se.lightbox_show_numbers && ($ = U.find(".ug-lightbox-numbers")),
            (q = U.children(".ug-lightbox-arrow-left")),
            (Z = U.children(".ug-lightbox-arrow-right")),
            ae && (J ? ae.appendHTML(J) : ae.appendHTML(U));
    }
    function n() {
        if (
            (null !== se.lightbox_overlay_color && V.css("background-color", se.lightbox_overlay_color),
            null !== se.lightbox_overlay_opacity && V.fadeTo(0, se.lightbox_overlay_opacity),
            J && null !== se.lightbox_top_panel_opacity && J.children(".ug-lightbox-top-panel-overlay").fadeTo(0, se.lightbox_top_panel_opacity),
            $)
        ) {
            var e = {};
            null !== se.lightbox_numbers_size && (e["font-size"] = se.lightbox_numbers_size + "px"),
                se.lightbox_numbers_color && (e.color = se.lightbox_numbers_color),
                null !== se.lightbox_numbers_padding_right && (e["padding-right"] = se.lightbox_numbers_padding_right + "px"),
                null !== se.lightbox_numbers_padding_top && (e["padding-top"] = se.lightbox_numbers_padding_top + "px"),
                $.css(e);
        }
    }
    function r(e) {
        if (!ne) return !0;
        var t = { slider_image_padding_top: e };
        ne.setOptions(t), ne.refreshSlideItems();
    }
    function a(e) {
        if (!J) return !1;
        if (!ae) return !1;
        var t = J.height();
        if (0 == t) return !1;
        if (0 == J.is(":visible")) return !1;
        var i = t,
            n = ae.getSize(),
            a = n.height;
        t != oe.topPanelHeight && (i = oe.topPanelHeight), a > i && (i = a), t != i && (J.height(i), ne && 0 == ne.isAnimating() && r(i));
    }
    function s(e) {
        var t = {},
            i = se.lightbox_textpanel_width,
            n = 47,
            r = 40,
            s = e.width - n - r;
        i > s
            ? ((t.textpanel_padding_left = n), (t.textpanel_padding_right = r), (t.textpanel_title_text_align = "center"), (t.textpanel_desc_text_align = "center"))
            : ((t.textpanel_padding_left = Math.floor((e.width - i) / 2)),
              (t.textpanel_padding_right = t.textpanel_padding_left),
              (t.textpanel_title_text_align = "left"),
              (t.textpanel_desc_text_align = "left"),
              se.lightbox_textpanel_title_text_align && (t.textpanel_title_text_align = se.lightbox_textpanel_desc_text_align),
              se.lightbox_textpanel_desc_text_align && (t.textpanel_desc_text_align = se.lightbox_textpanel_desc_text_align)),
            ae.setOptions(t),
            ae.refresh(!0, !0),
            a("positionTextPanelWide"),
            ae.positionPanel();
    }
    function o() {
        return !!J && void J.hide();
    }
    function l() {
        return !!J && void J.show();
    }
    function u(e) {
        if (0 == oe.isOpened) return !1;
        if (!ae) return !1;
        if (!ne) return !1;
        var t = re.getElementSize(U),
            i = ae.getSize();
        if (0 == i.width || i.height > 120) return !1;
        if (!e)
            var n = ne.getSlideImage(),
                e = re.getElementSize(n);
        if (0 == e.height || 0 == e.width) return !1;
        var r = e.bottom + i.height;
        if (r < t.height) return !1;
        var a = ne.getOptions(),
            s = i.height;
        if (s != a.slider_image_padding_bottom) {
            var o = { slider_image_padding_bottom: s };
            if (0 == ne.isAnimating()) return ne.setOptions(o), ne.refreshSlideItems(), !0;
        }
        return !1;
    }
    function d(e, t) {
        if (!e)
            var i = ne.getSlideImage(),
                e = re.getElementSize(i);
        (oe.textPanelTop = e.bottom), t === !0 && ae.positionPanel(oe.textPanelTop, oe.textPanelLeft);
    }
    function c(e) {
        var t = (re.getElementSize(U), ne.getSlideImage()),
            i = re.getElementSize(t);
        if (0 == i.width) return !1;
        (oe.textPanelLeft = i.left), (oe.textPanelTop = i.bottom);
        var n = i.width;
        if ($) {
            var r = re.getElementSize($);
            n -= r.width;
            var a = i.right - r.width;
            re.placeElement($, a, oe.textPanelTop);
        }
        ae && (ae.show(), ae.refresh(!0, !0, n), d(i));
        var s = u(i);
        0 == s && ((oe.positionFrom = "handleCompactTextpanelSizes"), ae && (ae.positionPanel(oe.textPanelTop, oe.textPanelLeft), e === !0 && (e(), C())));
    }
    function g() {
        if (0 == ne.isCurrentSlideType("image")) return !0;
        var e = 1 == ne.isCurrentImageInPlace();
        return e;
    }
    function p(e, t) {
        if (0 == oe.isArrowsInside) return !1;
        if (!q) return !1;
        var i = g();
        if ((q.show(), Z.show(), (oe.positionFrom = "positionArrowsInside"), 1 == oe.isArrowsOnHoverMode && 1 == i && 0 == y() && w(!0), 0 == i))
            var n = re.getElementRelativePos(q, "left", se.lightbox_arrows_offset),
                r = re.getElementRelativePos(q, "middle"),
                a = re.getElementRelativePos(Z, "right", se.lightbox_arrows_offset),
                s = r;
        else
            var o = ne.getSlideImage(),
                l = re.getElementSize(o),
                n = (re.getElementSize(ne.getElement()), re.getElementRelativePos(q, "left", 0, o) + l.left + se.lightbox_arrows_inside_offset),
                r = re.getElementRelativePos(q, "middle", 0, o) + l.top,
                a = re.getElementRelativePos(q, "right", 0, o) + l.left - se.lightbox_arrows_inside_offset,
                s = r;
        if (t === !0) {
            var u = { left: n, top: r },
                d = { left: a, top: s };
            q.stop().animate(u, { duration: oe.fadeDuration }), Z.stop().animate(d, { duration: oe.fadeDuration });
        } else q.stop(), Z.stop(), re.placeElement(q, n, r), re.placeElement(Z, a, s);
        1 == e && x(t);
    }
    function h(e, t) {
        oe.positionFrom = null;
        var i = g(),
            n = 2,
            r = re.getElementRelativePos(K, "right", 2, U);
        if (0 == i)
            var a = n,
                s = r;
        else {
            var o = ne.getSlideImage(),
                l = re.getElementSize(o),
                u = re.getElementSize(ne.getElement()),
                d = re.getElementSize(K);
            u.top == u.height && (u.top = 0);
            var s = u.left + l.right - d.width / 2 + se.lightbox_compact_closebutton_offsetx,
                a = u.top + l.top - d.height / 2 - se.lightbox_compact_closebutton_offsety;
            n > a && (a = n), s > r && (s = r);
        }
        if (t === !0) {
            var c = { left: s, top: a };
            K.stop().animate(c, { duration: oe.fadeDuration });
        } else K.stop(), re.placeElement(K, s, a);
        e === !0 && S(t);
    }
    function m() {
        K && K.stop().fadeTo(oe.fadeDuration, 0), v(), b(), (oe.positionFrom = "hideCompactElements"), 1 == oe.isArrowsInside && w();
    }
    function f() {
        K && K.hide(), q && 1 == oe.isArrowsInside && (q.hide(), Z.hide()), $ && $.hide(), ae && ae.hide();
    }
    function _() {
        var e = re.getElementSize(U);
        J && re.setElementSizeAndPosition(J, 0, 0, e.width, oe.topPanelHeight),
            q &&
                0 == oe.isArrowsInside &&
                (1 == se.lightbox_hide_arrows_onvideoplay && (q.show(), Z.show()), re.placeElement(q, "left", "middle", se.lightbox_arrows_offset), re.placeElement(Z, "right", "middle", se.lightbox_arrows_offset)),
            0 == oe.isCompact && re.placeElement(K, "right", "top", 2, 2),
            ae && ((oe.positionFrom = "positionElements"), 0 == oe.isCompact ? s(e) : (P(), C()));
        var t = e.width,
            i = e.height,
            n = 0,
            r = 0;
        if (ne) {
            if (J) {
                var a = J.height(),
                    o = { slider_image_padding_top: a };
                ne.setOptions(o);
            }
            ne.setSize(t, i), ne.setPosition(r, n);
        }
    }
    function v() {
        ae && ae.getElement().stop().fadeTo(oe.fadeDuration, 0);
    }
    function b() {
        $ && $.stop().fadeTo(oe.fadeDuration, 0);
    }
    function y() {
        if (!oe.lastMouseX) return !0;
        var e = { pageX: oe.lastMouseX, pageY: oe.lastMouseY },
            t = ne.isMouseInsideSlideImage(e);
        return t;
    }
    function w(e, t) {
        return !!q && (1 == oe.isArrowsOnHoverMode && t === !1 ? (1 == y(), !0) : void (e === !0 ? (q.stop().fadeTo(0, 0), Z.stop().fadeTo(0, 0)) : (q.stop().fadeTo(oe.fadeDuration, 0), Z.stop().fadeTo(oe.fadeDuration, 0))));
    }
    function T() {
        if (!q) return !0;
        if (0 == q.is(":visible")) return !0;
        var e = q.css("opacity");
        return 1 != e;
    }
    function x(e, t) {
        return !!q && ((1 == oe.isArrowsOnHoverMode && t !== !0 && 1 == g()) || 1 == ne.isSwiping() || (e !== !0 && (q.stop(), Z.stop()), q.fadeTo(oe.fadeDuration, 1), void Z.fadeTo(oe.fadeDuration, 1)));
    }
    function S(e) {
        e !== !0 && K.stop(), K.fadeTo(oe.fadeDuration, 1);
    }
    function I(e) {
        if (!ae) return !1;
        if (!e) var e = ne.getCurrentItem();
        ae.setTextPlain(e.title, e.description);
    }
    function E(e) {
        if (!$) return !1;
        if (!e) var e = ne.getCurrentItem();
        var t = ie.getNumItems(),
            i = e.index + 1;
        $.html(i + " / " + t);
    }
    function P() {
        return !!ae && void ae.getElement().show().stop().fadeTo(oe.fadeDuration, 1);
    }
    function C() {
        $ && $.stop().fadeTo(oe.fadeDuration, 1);
    }
    function j() {
        return 0 == oe.isCompact || void m();
    }
    function A() {
        if (0 == oe.isCompact) return !0;
        if (((oe.positionFrom = "onZoomChange"), h(!1, !0), p(!1, !0), 1 == oe.isCompact)) {
            var e = ne.isCurrentSlideType("image") && 1 == ne.isCurrentImageInPlace();
            0 == e ? (v(), b()) : ((oe.positionFrom = "onZoomChange"), P(), C());
        }
    }
    function M() {
        if (0 == oe.isCompact) return !0;
        (oe.positionFrom = "onSliderAfterReturn"), h(!0), p(!0);
        var e = u();
        0 == e && c(), P(), C();
    }
    function z(e, t) {
        return (t = jQuery(t)), 0 == oe.isCompact || 0 == ne.isSlideCurrent(t) || ((oe.positionFrom = "onSliderAfterPutImage"), h(!0), p(!0), void c());
    }
    function O() {
        var e = ne.getOptions(),
            t = e.slider_image_padding_top;
        if (J) {
            var i = J.height();
            i != t && r(i);
        }
        if (1 == oe.isCompact) {
            if ((I(), E(), (oe.positionFrom = "onSliderTransitionEnd"), h(!0), p(!0), 0 == ne.isSlideActionActive())) {
                var n = u();
                0 == n && c();
            }
            P(), C();
        }
    }
    function k(e, t) {
        0 == oe.isCompact ? ($ && E(t), ae && (I(t), 0 == oe.isRightNowOpened && (ae.positionElements(!1), a("onchange"), ae.positionPanel()))) : 0 == ne.isAnimating() && (ae && I(t), $ && E(t)),
            0 == oe.isSliderChangedOnce && ((oe.isSliderChangedOnce = !0), te.trigger(ee.events.LIGHTBOX_INIT));
    }
    function L(e, t) {
        var i = ne.getSlideType();
        if ("image" != i && 0 == oe.isCompact && ne.isSlideActionActive()) return !0;
        var n = ne.isPreloading();
        if (1 == n) return ee.close("slider"), !0;
        if (1 == se.lightbox_close_on_emptyspace) {
            var r = ne.isMouseInsideSlideImage(t);
            0 == r && ee.close("slider_inside");
        }
    }
    function H() {
        _();
    }
    function N() {
        J ? o() : $ && $.hide(), q && 1 == se.lightbox_hide_arrows_onvideoplay && (q.hide(), Z.hide());
    }
    function D() {
        J ? (l(), a("onStopVideo")) : $ && $.show(), q && 1 == se.lightbox_hide_arrows_onvideoplay && (q.show(), Z.show());
    }
    function R(e, t, i) {
        var n = !1;
        switch (t) {
            case 27:
                1 == oe.isOpened && ee.close("keypress");
                break;
            case 38:
            case 40:
            case 33:
            case 34:
                n = !0;
        }
        1 == oe.isOpened && 1 == n && i.preventDefault();
    }
    function G() {
        1 == oe.isArrowsOnHoverMode && x(!1, !0);
    }
    function B(e) {
        (oe.positionFrom = "hideCompactElements"), 1 == oe.isArrowsOnHoverMode && 1 == g() && w(!1, !0);
    }
    function W(e) {
        (oe.lastMouseX = e.pageX), (oe.lastMouseY = e.pageY);
        var t = T();
        1 == t && y() && 0 == ne.isAnimating() && ((oe.positionFrom = "onMouseMove"), q && 0 == q.is(":animated") && x(!1, !0));
    }
    function F(e, t, i, n) {
        if (0 == oe.isOpened) return !0;
        switch (se.gallery_mousewheel_role) {
            default:
            case "zoom":
                var r = ne.getSlideType();
                "image" != r && e.preventDefault();
                break;
            case "none":
                e.preventDefault();
                break;
            case "advance":
                ie.onGalleryMouseWheel(e, t, i, n);
        }
    }
    function Q() {
        if (
            (V.on("touchstart", function (e) {
                e.preventDefault();
            }),
            V.on("touchend", function (e) {
                ee.close("overlay");
            }),
            re.addClassOnHover(Z, "ug-arrow-hover"),
            re.addClassOnHover(q, "ug-arrow-hover"),
            re.addClassOnHover(K),
            ie.setNextButton(Z),
            ie.setPrevButton(q),
            K.click(function () {
                ee.close("button");
            }),
            X.on(ie.events.ITEM_CHANGE, k),
            ne)
        ) {
            jQuery(ne).on(ne.events.TRANSITION_END, O), jQuery(ne).on(ne.events.CLICK, L);
            var e = ne.getVideoObject();
            jQuery(e).on(e.events.PLAY_START, N),
                jQuery(e).on(e.events.PLAY_STOP, D),
                jQuery(ne).on(ne.events.START_DRAG, j),
                jQuery(ne).on(ne.events.TRANSITION_START, j),
                jQuery(ne).on(ne.events.AFTER_DRAG_CHANGE, M),
                jQuery(ne).on(ne.events.AFTER_RETURN, M),
                jQuery(ne).on(ne.events.AFTER_PUT_IMAGE, z),
                jQuery(ne).on(ne.events.ZOOM_CHANGE, A),
                jQuery(ne).on(ne.events.IMAGE_MOUSEENTER, G),
                jQuery(ne).on(ne.events.IMAGE_MOUSELEAVE, B);
        }
        jQuery(window).resize(function () {
            return 0 == oe.isOpened || void re.whenContiniousEventOver("lightbox_resize", H, 100);
        }),
            X.on(ie.events.GALLERY_KEYPRESS, R),
            1 == oe.isArrowsOnHoverMode && jQuery(document).bind("mousemove", W),
            U.on("mousewheel", F);
    }
    function Y() {
        (oe.isCompact = !1), t(), (oe.isArrowsInside = !1), (oe.isArrowsOnHoverMode = !1), (se = jQuery.extend({}, oe.originalOptions)), (se.lightbox_arrows_position = "sides"), ne.setOptions(se);
    }
    var X,
        U,
        V,
        q,
        Z,
        K,
        $,
        J,
        ee = this,
        te = jQuery(this),
        ie = new UniteGalleryMain(),
        ne = new UGSlider(),
        re = new UGFunctions(),
        ae = new UGTextPanel(),
        se = {
            lightbox_type: "wide",
            lightbox_show_textpanel: !0,
            lightbox_textpanel_width: 550,
            lightbox_hide_arrows_onvideoplay: !0,
            lightbox_arrows_position: "sides",
            lightbox_arrows_offset: 10,
            lightbox_arrows_inside_offset: 10,
            lightbox_arrows_inside_alwayson: !1,
            lightbox_overlay_color: null,
            lightbox_overlay_opacity: 1,
            lightbox_top_panel_opacity: null,
            lightbox_show_numbers: !0,
            lightbox_numbers_size: null,
            lightbox_numbers_color: null,
            lightbox_numbers_padding_top: null,
            lightbox_numbers_padding_right: null,
            lightbox_compact_closebutton_offsetx: 1,
            lightbox_compact_closebutton_offsety: 1,
            lightbox_close_on_emptyspace: !0,
        };
    this.events = { LIGHTBOX_INIT: "lightbox_init" };
    var oe = {
            topPanelHeight: 44,
            initTextPanelHeight: 26,
            isOpened: !1,
            isRightNowOpened: !1,
            putSlider: !0,
            isCompact: !1,
            fadeDuration: 300,
            positionFrom: null,
            textPanelTop: null,
            textPanelLeft: null,
            isArrowsInside: !1,
            isArrowsOnHoverMode: !1,
            lastMouseX: null,
            lastMouseY: null,
            originalOptions: null,
            isSliderChangedOnce: !1,
            isTopPanelEnabled: !0,
        },
        le = {
            lightbox_slider_controls_always_on: !0,
            lightbox_slider_enable_bullets: !1,
            lightbox_slider_enable_arrows: !1,
            lightbox_slider_enable_progress_indicator: !1,
            lightbox_slider_enable_play_button: !1,
            lightbox_slider_enable_fullscreen_button: !1,
            lightbox_slider_enable_zoom_panel: !1,
            lightbox_slider_enable_text_panel: !1,
            lightbox_slider_scale_mode_media: "down",
            lightbox_slider_scale_mode: "down",
            lightbox_slider_loader_type: 3,
            lightbox_slider_loader_color: "black",
            lightbox_slider_transition: "fade",
            lightbox_slider_image_padding_top: oe.topPanelHeight,
            lightbox_slider_image_padding_bottom: 0,
            lightbox_slider_video_padding_top: 0,
            lightbox_slider_video_padding_bottom: 0,
            lightbox_textpanel_align: "middle",
            lightbox_textpanel_padding_top: 5,
            lightbox_textpanel_padding_bottom: 5,
            slider_video_constantsize: !1,
            lightbox_slider_image_border: !1,
            lightbox_textpanel_enable_title: !0,
            lightbox_textpanel_enable_description: !1,
            lightbox_textpanel_desc_style_as_title: !0,
            lightbox_textpanel_enable_bg: !1,
            video_enable_closebutton: !1,
            lightbox_slider_video_enable_closebutton: !1,
            video_youtube_showinfo: !1,
            lightbox_slider_enable_links: !1,
        },
        ue = {
            lightbox_overlay_opacity: 0.6,
            lightbox_slider_image_border: !0,
            lightbox_slider_image_shadow: !0,
            lightbox_slider_image_padding_top: 30,
            lightbox_slider_image_padding_bottom: 30,
            slider_video_constantsize: !0,
            lightbox_textpanel_align: "bottom",
            lightbox_textpanel_title_text_align: "left",
            lightbox_textpanel_desc_text_align: "left",
            lightbox_textpanel_padding_left: 10,
            lightbox_textpanel_padding_right: 10,
        };
    (this.destroy = function () {
        if ((jQuery(document).unbind("mousemove"), V.off("touchstart"), V.off("touchend"), K.off("click"), X.off(ie.events.ITEM_CHANGE), ne)) {
            jQuery(ne).off(ne.events.TRANSITION_END),
                jQuery(ne).off(ne.events.CLICK),
                jQuery(ne).off(ne.events.START_DRAG),
                jQuery(ne).off(ne.events.TRANSITION_START),
                jQuery(ne).off(ne.events.AFTER_DRAG_CHANGE),
                jQuery(ne).off(ne.events.AFTER_RETURN);
            var e = ne.getVideoObject();
            jQuery(e).off(e.events.PLAY_START), jQuery(e).off(e.events.PLAY_STOP), jQuery(ne).on(ne.events.IMAGE_MOUSEENTER, G), jQuery(ne).on(ne.events.IMAGE_MOUSELEAVE, B), ne.destroy();
        }
        jQuery(window).unbind("resize"), X.off(ie.events.GALLERY_KEYPRESS, R), U.off("mousewheel"), U.remove();
    }),
        (this.open = function (e) {
            var t = ie.getItem(e);
            if (
                ((oe.isOpened = !0),
                (oe.isRightNowOpened = !0),
                setTimeout(function () {
                    oe.isRightNowOpened = !1;
                }, 100),
                ne && ne.setItem(t, "lightbox_open"),
                ae && ae.setTextPlain(t.title, t.description),
                V.stop().fadeTo(0, 0),
                U.show(),
                U.fadeTo(0, 1),
                V.stop().fadeTo(oe.fadeDuration, se.lightbox_overlay_opacity),
                _(),
                1 == oe.isCompact)
            ) {
                var i = ne.isPreloading();
                1 == i ? f() : 1 == oe.isArrowsInside && (q.hide(), Z.hide());
            }
            ne && ne.startSlideAction(), X.trigger(ie.events.OPEN_LIGHTBOX, t);
        }),
        (this.close = function (e) {
            (oe.isOpened = !1), 1 == oe.isCompact && m(), ne && ne.stopSlideAction();
            var t = ne.getSlideType();
            "image" != t
                ? U.hide()
                : U.fadeTo(oe.fadeDuration, 0, function () {
                      U.hide();
                  }),
                X.trigger(ie.events.CLOSE_LIGHTBOX);
        }),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.putHtml = function () {
            var e = ie.isSmallWindow();
            e && 1 == oe.isCompact && Y(), i();
        }),
        (this.run = function () {
            n(), ne && ne.run(), Q();
        });
}
function UGCarousel() {
    function e(e, t) {
        (g_objects = e.getObjects()),
            (W = e),
            (L = jQuery(e)),
            (H = g_objects.g_objWrapper),
            (N = g_objects.g_arrItems),
            (X = jQuery.extend(X, t)),
            Q.setFixedMode(),
            Q.setApproveClickFunction(k),
            Q.init(e, X),
            (Y = Q.getObjThumbs()),
            (X = Q.getOptions()),
            (U.initTileWidth = X.tile_width),
            (U.initTileHeight = X.tile_height),
            (U.tileWidth = X.tile_width);
    }
    function t(e) {
        if (!e) var e = H;
        var t = "<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>";
        H.append(t), (D = H.children(".ug-carousel-wrapper")), (R = D.children(".ug-carousel-inner")), Q.setHtml(R), Y.getThumbs().fadeTo(0, 1);
    }
    function i(e, t) {
        if (!t) var t = (U.initTileHeight / U.initTileWidth) * e;
        U.tileWidth = e;
        var i = { tile_width: e, tile_height: t };
        Q.setOptions(i), (X.tile_width = e), (X.tile_height = t), Q.resizeAllTiles(e), _(!0);
    }
    function n() {
        if (null === U.carouselMaxWidth) throw new Error("The carousel width not set");
        if (U.tileWidth < U.initTileWidth) {
            var e = U.carouselMaxWidth - 2 * X.carousel_padding;
            e > U.initTileWidth && (e = U.initTileWidth), i(e);
            var t = F.getNumItemsInSpace(U.carouselMaxWidth, e, X.carousel_space_between_tiles);
        } else {
            var t = F.getNumItemsInSpace(U.carouselMaxWidth, U.tileWidth, X.carousel_space_between_tiles);
            if (0 >= t) {
                t = 1;
                var e = U.carouselMaxWidth - 2 * X.carousel_padding;
                i(e);
            }
        }
        var n = F.getSpaceByNumItems(t, U.tileWidth, X.carousel_space_between_tiles);
        (n += 2 * X.carousel_padding),
            D.width(n),
            1 == U.isFirstTimeRun
                ? (O(),
                  Q.run(),
                  jQuery.each(N, function (e, t) {
                      t.objThumbWrapper.data("index", e), H.trigger(U.eventSizeChange, [t.objThumbWrapper, !0]), (t.objTileOriginal = t.objThumbWrapper.clone(!0, !0));
                  }),
                  _(!0),
                  1 == X.carousel_autoplay && G.startAutoplay())
                : (1 == X.carousel_autoplay && G.pauseAutoplay(), T(0, !1), 1 == X.carousel_autoplay && G.startAutoplay()),
            E(),
            (U.isFirstTimeRun = !1);
    }
    function r() {
        return F.getElementSize(R).left;
    }
    function a(e) {
        return F.getMousePosition(e).pageX;
    }
    function s() {
        var e = R.children(".ug-thumb-wrapper");
        return e;
    }
    function o(e) {
        var t = F.getNumItemsInSpace(e, U.tileWidth, X.carousel_space_between_tiles);
        return t;
    }
    function l() {
        return s().length;
    }
    function u(e) {
        v(e);
        var t = s(),
            i = jQuery(t[e]);
        return i;
    }
    function d() {
        return R.children(".ug-thumb-wrapper").first();
    }
    function c() {
        return R.children(".ug-thumb-wrapper").last();
    }
    function g(e, t, i) {
        var n = e.data("index");
        if (void 0 == n) throw new Error("every tile should have index!");
        for (var r = [], a = 0; t > a; a++) {
            if ("prev" == i) var s = W.getPrevItem(n, !0);
            else var s = W.getNextItem(n, !0);
            if (!s) throw new Error("the item to add is empty");
            var o = s.objTileOriginal.clone(!0, !0);
            (n = s.index), o.addClass("cloned"), r.push(o);
        }
        return r;
    }
    function p() {
        var e = F.getElementSize(D),
            t = F.getElementSize(R),
            i = t.width - e.width + t.left,
            n = U.sideSpace - i;
        return n;
    }
    function h() {
        var e = -r(),
            t = U.sideSpace - e;
        return t;
    }
    function m() {
        var e = F.getElementSize(D);
        return e.width;
    }
    function f() {
        var e = m(),
            t = o(e);
        return t;
    }
    function _(e) {
        if (!e) var e = !1;
        var t,
            i = s(),
            n = 0,
            r = 0;
        return (
            jQuery.each(i, function (e, a) {
                (a = jQuery(a)), F.placeElement(a, n, 0);
                var s = F.getElementSize(a);
                (n += s.width + X.carousel_space_between_tiles), (r = Math.max(r, s.height)), e == i.length - 1 && (t = s.right);
            }),
            R.width(t),
            (r += 2 * X.carousel_padding),
            e === !0 && (R.height(r), D.height(r)),
            T(U.numCurrent, !1),
            t
        );
    }
    function v(e) {
        if (e > s().length - 1) throw new Error("Wrogn tile number: " + e);
    }
    function b(e, t) {
        if ("left" == t) var i = d();
        else var i = c();
        var n = "left" == t ? "prev" : "next",
            r = g(i, e, n);
        jQuery.each(r, function (e, i) {
            "left" == t ? R.prepend(i) : R.append(i), H.trigger(U.eventSizeChange, i), Q.loadTileImage(i);
        });
    }
    function y(e, t) {
        v(n);
        for (var i = s(), n = i.length, r = 0; e > r; r++) "left" == t ? jQuery(i[r]).remove() : jQuery(i[n - 1 - r]).remove();
    }
    function w(e) {
        var t = { left: e + "px" };
        R.css(t);
    }
    function T(e, t, i) {
        if (void 0 === t) {
            var t = !0;
            if (R.is(":animated")) return !0;
        }
        var n = u(e),
            r = F.getElementSize(n),
            a = -r.left + X.carousel_padding,
            s = { left: a + "px" };
        if (t === !0) {
            var o = X.carousel_scroll_duration,
                l = X.carousel_scroll_easing;
            i === !0 && ((o = U.scrollShortDuration), (l = U.scrollShortEasing)),
                R.stop(!0).animate(s, {
                    duration: o,
                    easing: l,
                    queue: !1,
                    complete: function () {
                        (U.numCurrent = e), I(!0);
                    },
                });
        } else (U.numCurrent = e), R.css(s);
    }
    function x() {
        var e = -r(),
            t = o(e),
            i = F.getElementSize(u(t)).left,
            n = F.getElementSize(u(t + 1)).left;
        return Math.abs(i - e) < Math.abs(n - e) ? t : t + 1;
    }
    function S() {
        var e = x();
        T(e, !0, !0);
    }
    function I() {
        var e = h(),
            t = p(),
            i = 0,
            n = 0,
            r = 0,
            a = 0,
            s = l();
        if (e > U.spaceActionSize) (i = o(e)), b(i, "left"), (U.numCurrent += i);
        else if (e < -U.spaceActionSize) {
            var r = o(Math.abs(e));
            y(r, "left"), (U.numCurrent -= r);
        }
        if ((t > U.spaceActionSize ? ((n = o(t)), b(n, "right")) : t < -U.spaceActionSize && ((a = o(Math.abs(t))), y(a, "right")), a > s)) throw new Error("Can't remove more then num tiles");
        var u = !1;
        return (i || n || r || a) && (_(), (u = !0)), u;
    }
    function E(e) {
        F.placeElement(R, 0, X.carousel_padding), I();
    }
    function P() {
        "left" == X.carousel_autoplay_direction ? G.scrollRight(1) : G.scrollLeft(1);
    }
    function C(e) {
        return (
            1 == U.touchActive ||
            ((U.touchActive = !0),
            G.pauseAutoplay(),
            (U.startTime = jQuery.now()),
            (U.startMousePos = a(e)),
            (U.startInnerPos = r()),
            (U.lastTime = U.startTime),
            (U.lastMousePos = U.startMousePos),
            void F.storeEventData(e, U.storedEventID))
        );
    }
    function j(e) {
        if (0 == U.touchActive) return !0;
        F.updateStoredEventData(e, U.storedEventID), e.preventDefault();
        var t = null;
        if ((1 == X.carousel_vertical_scroll_ondrag && (t = F.handleScrollTop(U.storedEventID)), "vert" === t)) return !0;
        U.lastMousePos = a(e);
        var i = U.lastMousePos - U.startMousePos,
            n = U.startInnerPos + i,
            r = i > 0 ? "prev" : "next",
            s = F.getElementSize(R).width;
        n > 0 && "prev" == r && (n /= 3), -s > n && "next" == r && (n = U.startInnerPos + i / 3), w(n);
    }
    function A(e) {
        return 0 == U.touchActive || ((U.touchActive = !1), S(), void G.unpauseAutoplay());
    }
    function M(e) {
        return 0 == X.carousel_autoplay_pause_onhover || void (1 == U.isPlayMode && 0 == U.isPaused && G.pauseAutoplay());
    }
    function z(e) {
        return 0 == X.carousel_autoplay_pause_onhover || void G.unpauseAutoplay();
    }
    function O() {
        Q.initEvents(), D.bind("mousedown touchstart", C), jQuery("body").bind("mousemove touchmove", j), jQuery(window).add("body").bind("mouseup touchend", A), D.hover(M, z);
    }
    function k() {
        var e = U.lastTime - U.startTime,
            t = Math.abs(U.lastMousePos - U.startMousePos);
        return !(e > 300) && !(t > 30);
    }
    var L,
        H,
        N,
        D,
        R,
        G = this,
        B = jQuery(this),
        W = new UniteGalleryMain(),
        F = new UGFunctions(),
        Q = new UGTileDesign(),
        Y = new UGThumbsGeneral(),
        X = {
            carousel_padding: 8,
            carousel_space_between_tiles: 20,
            carousel_navigation_numtiles: 3,
            carousel_scroll_duration: 500,
            carousel_scroll_easing: "easeOutCubic",
            carousel_autoplay: !0,
            carousel_autoplay_timeout: 3e3,
            carousel_autoplay_direction: "right",
            carousel_autoplay_pause_onhover: !0,
            carousel_vertical_scroll_ondrag: !1,
        };
    this.events = { START_PLAY: "carousel_start_play", PAUSE_PLAY: "carousel_pause_play", STOP_PLAY: "carousel_stop_play" };
    var U = {
        eventSizeChange: "thumb_size_change",
        isFirstTimeRun: !0,
        carouselMaxWidth: null,
        tileWidth: 0,
        initTileWidth: 0,
        initTileHeight: 0,
        sideSpace: 1500,
        spaceActionSize: 500,
        numCurrent: 0,
        touchActive: !1,
        startInnerPos: 0,
        lastTime: 0,
        startTime: 0,
        startMousePos: 0,
        lastMousePos: 0,
        scrollShortDuration: 200,
        scrollShortEasing: "easeOutQuad",
        handle: null,
        isPlayMode: !1,
        isPaused: !1,
        storedEventID: "carousel",
    };
    (this.startAutoplay = function () {
        (U.isPlayMode = !0), (U.isPaused = !1), B.trigger(G.events.START_PLAY), U.handle && clearInterval(U.handle), (U.handle = setInterval(P, X.carousel_autoplay_timeout));
    }),
        (this.unpauseAutoplay = function () {
            return 0 == U.isPlayMode || 0 == U.isPaused || void G.startAutoplay();
        }),
        (this.pauseAutoplay = function () {
            return 0 == U.isPlayMode || ((U.isPaused = !0), U.handle && clearInterval(U.handle), void B.trigger(G.events.PAUSE_PLAY));
        }),
        (this.stopAutoplay = function () {
            return 0 == U.isPlayMode || ((U.isPaused = !1), (U.isPlayMode = !1), U.handle && clearInterval(U.handle), void B.trigger(G.events.STOP_PLAY));
        }),
        (this.destroy = function () {
            U.handle && clearInterval(U.handle),
                B.off(G.events.START_PLAY),
                B.off(G.events.STOP_PLAY),
                D.unbind("mousedown"),
                D.unbind("touchstart"),
                jQuery("body").unbind("mousemove"),
                jQuery("body").unbind("touchmove"),
                jQuery(window).add("body").unbind("mouseup").unbind("touchend"),
                D.off("mouseenter").off("mouseleave"),
                Q.destroy();
        }),
        (this.init = function (t, i, n) {
            n && this.setMaxWidth(n), e(t, i);
        }),
        (this.setMaxWidth = function (e) {
            U.carouselMaxWidth = e;
        }),
        (this.setHtml = function (e) {
            t(e);
        }),
        (this.getElement = function () {
            return D;
        }),
        (this.getObjTileDesign = function () {
            return Q;
        }),
        (this.getEstimatedHeight = function () {
            var e = X.tile_height + 2 * X.carousel_padding;
            return e;
        }),
        (this.run = function () {
            n();
        }),
        (this.scrollRight = function (e) {
            if (!e || "object" == typeof e) var e = X.carousel_navigation_numtiles;
            var t = f();
            e > t && (e = t);
            var i = U.numCurrent - e;
            0 >= i && (i = 0), T(i);
        }),
        (this.scrollLeft = function (e) {
            if (!e || "object" == typeof e) var e = X.carousel_navigation_numtiles;
            var t = f();
            e > t && (e = t);
            var i = l(),
                n = U.numCurrent + e;
            n >= i && (n = i - 1), T(n);
        }),
        (this.setScrollLeftButton = function (e) {
            F.setButtonMobileReady(e), F.setButtonOnClick(e, G.scrollLeft);
        }),
        (this.setScrollRightButton = function (e) {
            F.setButtonMobileReady(e), F.setButtonOnClick(e, G.scrollRight);
        }),
        (this.setPlayPauseButton = function (e) {
            F.setButtonMobileReady(e),
                1 == U.isPlayMode && 0 == U.isPaused && e.addClass("ug-pause-icon"),
                B.on(G.events.START_PLAY, function () {
                    e.addClass("ug-pause-icon");
                }),
                B.on(G.events.STOP_PLAY, function () {
                    e.removeClass("ug-pause-icon");
                }),
                F.setButtonOnClick(e, function () {
                    0 == U.isPlayMode || 1 == U.isPaused ? G.startAutoplay() : G.stopAutoplay();
                });
        });
}
function UGTabs() {
    function e(e, t) {
        (u = e), (s = jQuery(u)), (d = jQuery.extend(d, t)), "select" == d.tabs_type ? (l = jQuery(d.tabs_container)) : (o = jQuery(d.tabs_container + " .ug-tab"));
    }
    function t() {
        a();
    }
    function i(e) {
        u.requestNewItems(e);
    }
    function n() {
        var e = d.tabs_class_selected,
            t = jQuery(this);
        if (t.hasClass(e)) return !0;
        o.not(t).removeClass(e), t.addClass(e);
        var n = t.data("catid");
        return !n || void i(n);
    }
    function r() {
        var e = jQuery(this),
            t = e.val();
        return !t || void i(t);
    }
    function a() {
        "select" == d.tabs_type ? l.change(r) : o.click(n);
    }
    var s,
        o,
        l,
        u = (jQuery(this), new UniteGalleryMain()),
        d = (new UGFunctions(), { tabs_type: "tabs", tabs_container: "#ug_tabs", tabs_class_selected: "ug-tab-selected" });
    (this.events = {}),
        (this.destroy = function () {
            l && l.off("change"), o && o.off("click");
        }),
        (this.init = function (t, i) {
            e(t, i);
        }),
        (this.run = function () {
            t();
        });
}
function UG_API(e) {
    function t(e) {
        var t = { index: e.index, title: e.title, description: e.description, urlImage: e.urlImage, urlThumb: e.urlThumb },
            i = e.objThumbImage.data();
        for (var n in i) {
            switch (n) {
                case "image":
                case "description":
                    continue;
            }
            t[n] = i[n];
        }
        return t;
    }
    var i,
        n = this,
        r = (jQuery(n), new UniteGalleryMain()),
        a = [];
    (r = e),
        (i = jQuery(e)),
        (this.events = { API_INIT_FUNCTIONS: "api_init", API_ON_EVENT: "api_on_event" }),
        (this.on = function (e, s, o) {
            switch ((o !== !0 && a.push({ event: e, func: s }), e)) {
                case "item_change":
                    i.on(r.events.ITEM_CHANGE, function () {
                        var e = r.getSelectedItem(),
                            i = t(e);
                        s(i.index, i);
                    });
                    break;
                case "resize":
                    i.on(r.events.SIZE_CHANGE, s);
                    break;
                case "enter_fullscreen":
                    i.on(r.events.ENTER_FULLSCREEN, s);
                    break;
                case "exit_fullscreen":
                    i.on(r.events.EXIT_FULLSCREEN, s);
                    break;
                case "play":
                    i.on(r.events.START_PLAY, s);
                    break;
                case "stop":
                    i.on(r.events.STOP_PLAY, s);
                    break;
                case "pause":
                    i.on(r.events.PAUSE_PLAYING, s);
                    break;
                case "continue":
                    i.on(r.events.CONTINUE_PLAYING, s);
                    break;
                case "open_lightbox":
                    i.on(r.events.OPEN_LIGHTBOX, s);
                    break;
                case "close_lightbox":
                    i.on(r.events.CLOSE_LIGHTBOX, s);
                    break;
                default:
                    console && console.log("wrong api event: " + e);
            }
            i.trigger(n.events.API_ON_EVENT, [e, s]);
        }),
        (this.play = function () {
            r.startPlayMode();
        }),
        (this.stop = function () {
            r.stopPlayMode();
        }),
        (this.togglePlay = function () {
            r.togglePlayMode();
        }),
        (this.enterFullscreen = function () {
            r.toFullScreen();
        }),
        (this.exitFullscreen = function () {
            r.exitFullScreen();
        }),
        (this.toggleFullscreen = function () {
            r.toggleFullscreen();
        }),
        (this.resetZoom = function () {
            var e = r.getObjSlider();
            return !!e && void e.zoomBack();
        }),
        (this.zoomIn = function () {
            var e = r.getObjSlider();
            return !!e && void e.zoomIn();
        }),
        (this.zoomOut = function () {
            var e = r.getObjSlider();
            return !!e && void e.zoomOut();
        }),
        (this.nextItem = function () {
            r.nextItem();
        }),
        (this.prevItem = function () {
            r.prevItem();
        }),
        (this.selectItem = function (e) {
            r.selectItem(e);
        }),
        (this.resize = function (e, t) {
            t ? r.resize(e, t) : r.resize(e);
        }),
        (this.getItem = function (e) {
            var i = r.getItem(e),
                n = t(i);
            return n;
        }),
        (this.getNumItems = function () {
            var e = r.getNumItems();
            return e;
        }),
        (this.reloadGallery = function (e) {
            if (!e) var e = {};
            r.run(null, e),
                a.map(function (e) {
                    n.on(e.event, e.func, !0);
                });
        }),
        (this.destroy = function () {
            r.destroy();
        }),
        i.trigger(n.events.API_INIT_FUNCTIONS, n);
}
function UGLoadMore() {
    function e() {
        return (
            (a = jQuery("#" + c.loadmore_container)),
            0 != a.length && ((s = a.find(".ug-loadmore-button")), 0 != s.length && ((o = a.find(".ug-loadmore-loader")), 0 != o.length && ((l = a.find(".ug-loadmore-error")), 0 != l.length && void (d.isInited = !0))))
        );
    }
    function t() {
        a.show();
    }
    function i() {
        s.hide(), o.show();
        var e = { numitems: u.getNumItems() };
        u.ajaxRequest(
            "front_loadmore",
            e,
            function (e) {
                o.hide();
                var t = e.html_items,
                    i = e.show_loadmore;
                1 == i ? (s.blur().show(), o.hide()) : a.hide(), u.addItems(t);
            },
            function (e) {
                (e = "Ajax Error!" + e), o.hide(), l.show(), l.html(e);
            }
        );
    }
    function n() {
        u.onEvent("tiles_first_placed", t), s.click(i);
    }
    var r,
        a,
        s,
        o,
        l,
        u = (jQuery(this), new UniteGalleryMain()),
        d = (new UGFunctions(), { isInited: !1 }),
        c = { loadmore_container: "ug_loadmore_wrapper" };
    (this.events = {}),
        (this.destroy = function () {
            return 0 != d.isInited && void 0;
        }),
        (this.init = function (t, i) {
            return (u = t), (r = jQuery(u)), (c = jQuery.extend(c, i)), e(), 0 == d.isInited ? (trace("load more not inited, something is wrong"), !1) : void n();
        });
}
function UGTheme_tiles() {
    function e(e, i) {
        (h = e), (b = jQuery.extend(b, y)), (b = jQuery.extend(b, i)), t(), h.setOptions(b), h.setFreestyleMode(), (d = e.getObjects()), (u = jQuery(e)), (c = d.g_objWrapper), m.init(e, b), f.init(e, b), (v = m.getObjTileDesign());
    }
    function t() {
        switch ((1 == b.theme_enable_preloader && (w.showPreloader = !0), b.theme_appearance_order)) {
            default:
            case "normal":
                break;
            case "shuffle":
                h.shuffleItems();
                break;
            case "keep":
                b.tiles_keep_order = !0;
        }
    }
    function i() {
        c.addClass("ug-theme-tiles"),
            c.append("<div class='ug-tiles-wrapper' style='position:relative'></div>"),
            1 == w.showPreloader && (c.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>"), (g = c.children(".ug-tiles-preloader")), g.fadeTo(0, 0)),
            (p = c.children(".ug-tiles-wrapper")),
            b.theme_gallery_padding && c.css({ "padding-left": b.theme_gallery_padding + "px", "padding-right": b.theme_gallery_padding + "px" }),
            m.setHtml(p),
            f.putHtml();
    }
    function n() {
        g && (g.fadeTo(0, 1), c.height(b.theme_preloading_height), _.placeElement(g, "center", b.theme_preloader_vertpos)), l(), m.run(), f.run();
    }
    function r() {
        i(), n();
    }
    function a(e, t) {
        t = jQuery(t);
        var i = v.getItemByTile(t),
            n = i.index;
        f.open(n);
    }
    function s() {
        if ((p.hide(), g)) {
            g.show();
            var e = _.getElementSize(g),
                t = e.bottom + 30;
            c.height(t);
        }
    }
    function o() {
        null !== b.theme_auto_open && (f.open(b.theme_auto_open), (b.theme_auto_open = null));
    }
    function l() {
        g &&
            h.onEvent(m.events.TILES_FIRST_PLACED, function () {
                c.height("auto"), g.hide();
            }),
            jQuery(v).on(v.events.TILE_CLICK, a),
            u.on(h.events.GALLERY_BEFORE_REQUEST_ITEMS, s),
            jQuery(f).on(f.events.LIGHTBOX_INIT, o);
    }
    var u,
        d,
        c,
        g,
        p,
        h = new UniteGalleryMain(),
        m = new UGTiles(),
        f = new UGLightbox(),
        _ = new UGFunctions(),
        v = new UGTileDesign(),
        b = { theme_enable_preloader: !0, theme_preloading_height: 200, theme_preloader_vertpos: 100, theme_gallery_padding: 0, theme_appearance_order: "normal", theme_auto_open: null },
        y = { gallery_width: "100%" },
        w = { showPreloader: !1 };
    (this.destroy = function () {
        jQuery(v).off(v.events.TILE_CLICK), h.destroyEvent(m.events.TILES_FIRST_PLACED), u.off(h.events.GALLERY_BEFORE_REQUEST_ITEMS), jQuery(f).off(f.events.LIGHTBOX_INIT), m.destroy(), f.destroy();
    }),
        (this.run = function () {
            r();
        }),
        (this.addItems = function () {
            m.runNewItems();
        }),
        (this.init = function (t, i) {
            e(t, i);
        });
}
!(function () {
    "use strict";
    var e,
        t = function (n, r) {
            function a(e) {
                return Math.floor(e);
            }
            function s() {
                var e = w.params.autoplay,
                    t = w.slides.eq(w.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || w.params.autoplay),
                    (w.autoplayTimeoutId = setTimeout(function () {
                        w.params.loop ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w)) : w.isEnd ? (r.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0), w.emit("onAutoplay", w))) : (w._slideNext(), w.emit("onAutoplay", w));
                    }, e));
            }
            function o(t, i) {
                var n = e(t.target);
                if (!n.is(i))
                    if ("string" == typeof i) n = n.parents(i);
                    else if (i.nodeType) {
                        var r;
                        return (
                            n.parents().each(function (e, t) {
                                t === i && (r = i);
                            }),
                            r ? i : void 0
                        );
                    }
                if (0 !== n.length) return n[0];
            }
            function l(e, t) {
                t = t || {};
                var i = window.MutationObserver || window.WebkitMutationObserver,
                    n = new i(function (e) {
                        e.forEach(function (e) {
                            w.onResize(!0), w.emit("onObserverUpdate", w, e);
                        });
                    });
                n.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), w.observers.push(n);
            }
            function u(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!w.params.allowSwipeToNext && ((w.isHorizontal() && 39 === t) || (!w.isHorizontal() && 40 === t))) return !1;
                if (!w.params.allowSwipeToPrev && ((w.isHorizontal() && 37 === t) || (!w.isHorizontal() && 38 === t))) return !1;
                if (
                    !(
                        e.shiftKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.metaKey ||
                        (document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var i = !1;
                        if (w.container.parents("." + w.params.slideClass).length > 0 && 0 === w.container.parents("." + w.params.slideActiveClass).length) return;
                        var n = { left: window.pageXOffset, top: window.pageYOffset },
                            r = window.innerWidth,
                            a = window.innerHeight,
                            s = w.container.offset();
                        w.rtl && (s.left = s.left - w.container[0].scrollLeft);
                        for (
                            var o = [
                                    [s.left, s.top],
                                    [s.left + w.width, s.top],
                                    [s.left, s.top + w.height],
                                    [s.left + w.width, s.top + w.height],
                                ],
                                l = 0;
                            l < o.length;
                            l++
                        ) {
                            var u = o[l];
                            u[0] >= n.left && u[0] <= n.left + r && u[1] >= n.top && u[1] <= n.top + a && (i = !0);
                        }
                        if (!i) return;
                    }
                    w.isHorizontal()
                        ? ((37 !== t && 39 !== t) || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                          ((39 === t && !w.rtl) || (37 === t && w.rtl)) && w.slideNext(),
                          ((37 === t && !w.rtl) || (39 === t && w.rtl)) && w.slidePrev())
                        : ((38 !== t && 40 !== t) || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), 40 === t && w.slideNext(), 38 === t && w.slidePrev()),
                        w.emit("onKeyPress", w, t);
                }
            }
            function d(e) {
                var t = 0,
                    i = 0,
                    n = 0,
                    r = 0;
                return (
                    "detail" in e && (i = e.detail),
                    "wheelDelta" in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                    (n = 10 * t),
                    (r = 10 * i),
                    "deltaY" in e && (r = e.deltaY),
                    "deltaX" in e && (n = e.deltaX),
                    (n || r) && e.deltaMode && (1 === e.deltaMode ? ((n *= 40), (r *= 40)) : ((n *= 800), (r *= 800))),
                    n && !t && (t = n < 1 ? -1 : 1),
                    r && !i && (i = r < 1 ? -1 : 1),
                    { spinX: t, spinY: i, pixelX: n, pixelY: r }
                );
            }
            function c(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0,
                    i = w.rtl ? -1 : 1,
                    n = d(e);
                if (w.params.mousewheelForceToAxis)
                    if (w.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                        t = n.pixelX * i;
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                        t = n.pixelY;
                    }
                else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
                if (0 !== t) {
                    if ((w.params.mousewheelInvert && (t = -t), w.params.freeMode)) {
                        var r = w.getWrapperTranslate() + t * w.params.mousewheelSensitivity,
                            a = w.isBeginning,
                            s = w.isEnd;
                        if (
                            (r >= w.minTranslate() && (r = w.minTranslate()),
                            r <= w.maxTranslate() && (r = w.maxTranslate()),
                            w.setWrapperTransition(0),
                            w.setWrapperTranslate(r),
                            w.updateProgress(),
                            w.updateActiveIndex(),
                            ((!a && w.isBeginning) || (!s && w.isEnd)) && w.updateClasses(),
                            w.params.freeModeSticky
                                ? (clearTimeout(w.mousewheel.timeout),
                                  (w.mousewheel.timeout = setTimeout(function () {
                                      w.slideReset();
                                  }, 300)))
                                : w.params.lazyLoading && w.lazy && w.lazy.load(),
                            w.emit("onScroll", w, e),
                            w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(),
                            0 === r || r === w.maxTranslate())
                        )
                            return;
                    } else {
                        if (new window.Date().getTime() - w.mousewheel.lastScrollTime > 60)
                            if (t < 0)
                                if ((w.isEnd && !w.params.loop) || w.animating) {
                                    if (w.params.mousewheelReleaseOnEdges) return !0;
                                } else w.slideNext(), w.emit("onScroll", w, e);
                            else if ((w.isBeginning && !w.params.loop) || w.animating) {
                                if (w.params.mousewheelReleaseOnEdges) return !0;
                            } else w.slidePrev(), w.emit("onScroll", w, e);
                        w.mousewheel.lastScrollTime = new window.Date().getTime();
                    }
                    return e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1;
                }
            }
            function g(t, i) {
                t = e(t);
                var n,
                    r,
                    a,
                    s = w.rtl ? -1 : 1;
                (n = t.attr("data-swiper-parallax") || "0"),
                    (r = t.attr("data-swiper-parallax-x")),
                    (a = t.attr("data-swiper-parallax-y")),
                    r || a ? ((r = r || "0"), (a = a || "0")) : w.isHorizontal() ? ((r = n), (a = "0")) : ((a = n), (r = "0")),
                    (r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * s + "%" : r * i * s + "px"),
                    (a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i + "%" : a * i + "px"),
                    t.transform("translate3d(" + r + ", " + a + ",0px)");
            }
            function p(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
            }
            if (!(this instanceof t)) return new t(n, r);
            var h = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: 0.02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 },
                    flip: { slideShadows: !0, limitRotation: !0 },
                    cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 },
                    fade: { crossFade: !1 },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: 0.85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0,
                },
                m = r && r.virtualTranslate;
            r = r || {};
            var f = {};
            for (var _ in r)
                if ("object" != typeof r[_] || null === r[_] || r[_].nodeType || r[_] === window || r[_] === document || (void 0 !== i && r[_] instanceof i) || ("undefined" != typeof jQuery && r[_] instanceof jQuery)) f[_] = r[_];
                else {
                    f[_] = {};
                    for (var v in r[_]) f[_][v] = r[_][v];
                }
            for (var b in h)
                if (void 0 === r[b]) r[b] = h[b];
                else if ("object" == typeof r[b]) for (var y in h[b]) void 0 === r[b][y] && (r[b][y] = h[b][y]);
            var w = this;
            if (
                ((w.params = r),
                (w.originalParams = f),
                (w.classNames = []),
                void 0 !== e && void 0 !== i && (e = i),
                (void 0 !== e || (e = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i)) &&
                    ((w.$ = e),
                    (w.currentBreakpoint = void 0),
                    (w.getActiveBreakpoint = function () {
                        if (!w.params.breakpoints) return !1;
                        var e,
                            t = !1,
                            i = [];
                        for (e in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(e) && i.push(e);
                        i.sort(function (e, t) {
                            return parseInt(e, 10) > parseInt(t, 10);
                        });
                        for (var n = 0; n < i.length; n++) (e = i[n]) >= window.innerWidth && !t && (t = e);
                        return t || "max";
                    }),
                    (w.setBreakpoint = function () {
                        var e = w.getActiveBreakpoint();
                        if (e && w.currentBreakpoint !== e) {
                            var t = e in w.params.breakpoints ? w.params.breakpoints[e] : w.originalParams,
                                i = w.params.loop && t.slidesPerView !== w.params.slidesPerView;
                            for (var n in t) w.params[n] = t[n];
                            (w.currentBreakpoint = e), i && w.destroyLoop && w.reLoop(!0);
                        }
                    }),
                    w.params.breakpoints && w.setBreakpoint(),
                    (w.container = e(n)),
                    0 !== w.container.length))
            ) {
                if (w.container.length > 1) {
                    var T = [];
                    return (
                        w.container.each(function () {
                            T.push(new t(this, r));
                        }),
                        T
                    );
                }
                (w.container[0].swiper = w),
                    w.container.data("swiper", w),
                    w.classNames.push(w.params.containerModifierClass + w.params.direction),
                    w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"),
                    w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"), (w.params.slidesPerColumn = 1)),
                    w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"),
                    (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0),
                    w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0),
                    ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? ((w.params.watchSlidesProgress = !0), w.classNames.push(w.params.containerModifierClass + "3d")) : (w.params.effect = "slide")),
                    "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect),
                    "cube" === w.params.effect &&
                        ((w.params.resistanceRatio = 0),
                        (w.params.slidesPerView = 1),
                        (w.params.slidesPerColumn = 1),
                        (w.params.slidesPerGroup = 1),
                        (w.params.centeredSlides = !1),
                        (w.params.spaceBetween = 0),
                        (w.params.virtualTranslate = !0)),
                    ("fade" !== w.params.effect && "flip" !== w.params.effect) ||
                        ((w.params.slidesPerView = 1), (w.params.slidesPerColumn = 1), (w.params.slidesPerGroup = 1), (w.params.watchSlidesProgress = !0), (w.params.spaceBetween = 0), void 0 === m && (w.params.virtualTranslate = !0)),
                    w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1),
                    (w.wrapper = w.container.children("." + w.params.wrapperClass)),
                    w.params.pagination &&
                        ((w.paginationContainer = e(w.params.pagination)),
                        w.params.uniqueNavElements &&
                            "string" == typeof w.params.pagination &&
                            w.paginationContainer.length > 1 &&
                            1 === w.container.find(w.params.pagination).length &&
                            (w.paginationContainer = w.container.find(w.params.pagination)),
                        "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : (w.params.paginationClickable = !1),
                        w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)),
                    (w.params.nextButton || w.params.prevButton) &&
                        (w.params.nextButton &&
                            ((w.nextButton = e(w.params.nextButton)),
                            w.params.uniqueNavElements && "string" == typeof w.params.nextButton && w.nextButton.length > 1 && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))),
                        w.params.prevButton &&
                            ((w.prevButton = e(w.params.prevButton)),
                            w.params.uniqueNavElements && "string" == typeof w.params.prevButton && w.prevButton.length > 1 && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))),
                    (w.isHorizontal = function () {
                        return "horizontal" === w.params.direction;
                    }),
                    (w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction"))),
                    w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"),
                    w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")),
                    w.params.slidesPerColumn > 1 && w.classNames.push(w.params.containerModifierClass + "multirow"),
                    w.device.android && w.classNames.push(w.params.containerModifierClass + "android"),
                    w.container.addClass(w.classNames.join(" ")),
                    (w.translate = 0),
                    (w.progress = 0),
                    (w.velocity = 0),
                    (w.lockSwipeToNext = function () {
                        (w.params.allowSwipeToNext = !1), w.params.allowSwipeToPrev === !1 && w.params.grabCursor && w.unsetGrabCursor();
                    }),
                    (w.lockSwipeToPrev = function () {
                        (w.params.allowSwipeToPrev = !1), w.params.allowSwipeToNext === !1 && w.params.grabCursor && w.unsetGrabCursor();
                    }),
                    (w.lockSwipes = function () {
                        (w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1), w.params.grabCursor && w.unsetGrabCursor();
                    }),
                    (w.unlockSwipeToNext = function () {
                        (w.params.allowSwipeToNext = !0), w.params.allowSwipeToPrev === !0 && w.params.grabCursor && w.setGrabCursor();
                    }),
                    (w.unlockSwipeToPrev = function () {
                        (w.params.allowSwipeToPrev = !0), w.params.allowSwipeToNext === !0 && w.params.grabCursor && w.setGrabCursor();
                    }),
                    (w.unlockSwipes = function () {
                        (w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0), w.params.grabCursor && w.setGrabCursor();
                    }),
                    (w.setGrabCursor = function (e) {
                        (w.container[0].style.cursor = "move"),
                            (w.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                            (w.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                            (w.container[0].style.cursor = e ? "grabbing" : "grab");
                    }),
                    (w.unsetGrabCursor = function () {
                        w.container[0].style.cursor = "";
                    }),
                    w.params.grabCursor && w.setGrabCursor(),
                    (w.imagesToLoad = []),
                    (w.imagesLoaded = 0),
                    (w.loadImage = function (e, t, i, n, r, a) {
                        function s() {
                            a && a();
                        }
                        var o;
                        e.complete && r ? s() : t ? ((o = new window.Image()), (o.onload = s), (o.onerror = s), n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : s();
                    }),
                    (w.preloadImages = function () {
                        function e() {
                            void 0 !== w && null !== w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)));
                        }
                        w.imagesToLoad = w.container.find("img");
                        for (var t = 0; t < w.imagesToLoad.length; t++)
                            w.loadImage(
                                w.imagesToLoad[t],
                                w.imagesToLoad[t].currentSrc || w.imagesToLoad[t].getAttribute("src"),
                                w.imagesToLoad[t].srcset || w.imagesToLoad[t].getAttribute("srcset"),
                                w.imagesToLoad[t].sizes || w.imagesToLoad[t].getAttribute("sizes"),
                                !0,
                                e
                            );
                    }),
                    (w.autoplayTimeoutId = void 0),
                    (w.autoplaying = !1),
                    (w.autoplayPaused = !1),
                    (w.startAutoplay = function () {
                        return void 0 === w.autoplayTimeoutId && !!w.params.autoplay && !w.autoplaying && ((w.autoplaying = !0), w.emit("onAutoplayStart", w), void s());
                    }),
                    (w.stopAutoplay = function (e) {
                        w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), (w.autoplaying = !1), (w.autoplayTimeoutId = void 0), w.emit("onAutoplayStop", w));
                    }),
                    (w.pauseAutoplay = function (e) {
                        w.autoplayPaused ||
                            (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                            (w.autoplayPaused = !0),
                            0 === e
                                ? ((w.autoplayPaused = !1), s())
                                : w.wrapper.transitionEnd(function () {
                                      w && ((w.autoplayPaused = !1), w.autoplaying ? s() : w.stopAutoplay());
                                  }));
                    }),
                    (w.minTranslate = function () {
                        return -w.snapGrid[0];
                    }),
                    (w.maxTranslate = function () {
                        return -w.snapGrid[w.snapGrid.length - 1];
                    }),
                    (w.updateAutoHeight = function () {
                        var e,
                            t = [],
                            i = 0;
                        if ("auto" !== w.params.slidesPerView && w.params.slidesPerView > 1)
                            for (e = 0; e < Math.ceil(w.params.slidesPerView); e++) {
                                var n = w.activeIndex + e;
                                if (n > w.slides.length) break;
                                t.push(w.slides.eq(n)[0]);
                            }
                        else t.push(w.slides.eq(w.activeIndex)[0]);
                        for (e = 0; e < t.length; e++)
                            if (void 0 !== t[e]) {
                                var r = t[e].offsetHeight;
                                i = r > i ? r : i;
                            }
                        i && w.wrapper.css("height", i + "px");
                    }),
                    (w.updateContainerSize = function () {
                        var e, t;
                        (e = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth),
                            (t = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight),
                            (0 === e && w.isHorizontal()) ||
                                (0 === t && !w.isHorizontal()) ||
                                ((e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10)),
                                (t = t - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10)),
                                (w.width = e),
                                (w.height = t),
                                (w.size = w.isHorizontal() ? w.width : w.height));
                    }),
                    (w.updateSlidesSize = function () {
                        (w.slides = w.wrapper.children("." + w.params.slideClass)), (w.snapGrid = []), (w.slidesGrid = []), (w.slidesSizesGrid = []);
                        var e,
                            t = w.params.spaceBetween,
                            i = -w.params.slidesOffsetBefore,
                            n = 0,
                            r = 0;
                        if (void 0 !== w.size) {
                            "string" == typeof t && t.indexOf("%") >= 0 && (t = (parseFloat(t.replace("%", "")) / 100) * w.size),
                                (w.virtualSize = -t),
                                w.rtl ? w.slides.css({ marginLeft: "", marginTop: "" }) : w.slides.css({ marginRight: "", marginBottom: "" });
                            var s;
                            w.params.slidesPerColumn > 1 &&
                                ((s =
                                    Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn),
                                "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (s = Math.max(s, w.params.slidesPerView * w.params.slidesPerColumn)));
                            var o,
                                l = w.params.slidesPerColumn,
                                u = s / l,
                                d = u - (w.params.slidesPerColumn * u - w.slides.length);
                            for (e = 0; e < w.slides.length; e++) {
                                o = 0;
                                var c = w.slides.eq(e);
                                if (w.params.slidesPerColumn > 1) {
                                    var g, p, h;
                                    "column" === w.params.slidesPerColumnFill
                                        ? ((p = Math.floor(e / l)),
                                          (h = e - p * l),
                                          (p > d || (p === d && h === l - 1)) && ++h >= l && ((h = 0), p++),
                                          (g = p + (h * s) / l),
                                          c.css({ "-webkit-box-ordinal-group": g, "-moz-box-ordinal-group": g, "-ms-flex-order": g, "-webkit-order": g, order: g }))
                                        : ((h = Math.floor(e / u)), (p = e - h * u)),
                                        c
                                            .css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== h && w.params.spaceBetween && w.params.spaceBetween + "px")
                                            .attr("data-swiper-column", p)
                                            .attr("data-swiper-row", h);
                                }
                                "none" !== c.css("display") &&
                                    ("auto" === w.params.slidesPerView
                                        ? ((o = w.isHorizontal() ? c.outerWidth(!0) : c.outerHeight(!0)), w.params.roundLengths && (o = a(o)))
                                        : ((o = (w.size - (w.params.slidesPerView - 1) * t) / w.params.slidesPerView),
                                          w.params.roundLengths && (o = a(o)),
                                          w.isHorizontal() ? (w.slides[e].style.width = o + "px") : (w.slides[e].style.height = o + "px")),
                                    (w.slides[e].swiperSlideSize = o),
                                    w.slidesSizesGrid.push(o),
                                    w.params.centeredSlides
                                        ? ((i = i + o / 2 + n / 2 + t),
                                          0 === n && 0 !== e && (i = i - w.size / 2 - t),
                                          0 === e && (i = i - w.size / 2 - t),
                                          Math.abs(i) < 0.001 && (i = 0),
                                          r % w.params.slidesPerGroup == 0 && w.snapGrid.push(i),
                                          w.slidesGrid.push(i))
                                        : (r % w.params.slidesPerGroup == 0 && w.snapGrid.push(i), w.slidesGrid.push(i), (i = i + o + t)),
                                    (w.virtualSize += o + t),
                                    (n = o),
                                    r++);
                            }
                            w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                            var m;
                            if (
                                (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }),
                                (w.support.flexbox && !w.params.setWrapperSize) ||
                                    (w.isHorizontal() ? w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }) : w.wrapper.css({ height: w.virtualSize + w.params.spaceBetween + "px" })),
                                w.params.slidesPerColumn > 1 &&
                                    ((w.virtualSize = (o + w.params.spaceBetween) * s),
                                    (w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween),
                                    w.isHorizontal() ? w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }) : w.wrapper.css({ height: w.virtualSize + w.params.spaceBetween + "px" }),
                                    w.params.centeredSlides))
                            ) {
                                for (m = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && m.push(w.snapGrid[e]);
                                w.snapGrid = m;
                            }
                            if (!w.params.centeredSlides) {
                                for (m = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && m.push(w.snapGrid[e]);
                                (w.snapGrid = m), Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size);
                            }
                            0 === w.snapGrid.length && (w.snapGrid = [0]),
                                0 !== w.params.spaceBetween && (w.isHorizontal() ? (w.rtl ? w.slides.css({ marginLeft: t + "px" }) : w.slides.css({ marginRight: t + "px" })) : w.slides.css({ marginBottom: t + "px" })),
                                w.params.watchSlidesProgress && w.updateSlidesOffset();
                        }
                    }),
                    (w.updateSlidesOffset = function () {
                        for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = w.isHorizontal() ? w.slides[e].offsetLeft : w.slides[e].offsetTop;
                    }),
                    (w.currentSlidesPerView = function () {
                        var e,
                            t,
                            i = 1;
                        if (w.params.centeredSlides) {
                            var n,
                                r = w.slides[w.activeIndex].swiperSlideSize;
                            for (e = w.activeIndex + 1; e < w.slides.length; e++) w.slides[e] && !n && ((r += w.slides[e].swiperSlideSize), i++, r > w.size && (n = !0));
                            for (t = w.activeIndex - 1; t >= 0; t--) w.slides[t] && !n && ((r += w.slides[t].swiperSlideSize), i++, r > w.size && (n = !0));
                        } else for (e = w.activeIndex + 1; e < w.slides.length; e++) w.slidesGrid[e] - w.slidesGrid[w.activeIndex] < w.size && i++;
                        return i;
                    }),
                    (w.updateSlidesProgress = function (e) {
                        if ((void 0 === e && (e = w.translate || 0), 0 !== w.slides.length)) {
                            void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                            var t = -e;
                            w.rtl && (t = e), w.slides.removeClass(w.params.slideVisibleClass);
                            for (var i = 0; i < w.slides.length; i++) {
                                var n = w.slides[i],
                                    r = (t + (w.params.centeredSlides ? w.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + w.params.spaceBetween);
                                if (w.params.watchSlidesVisibility) {
                                    var a = -(t - n.swiperSlideOffset),
                                        s = a + w.slidesSizesGrid[i];
                                    ((a >= 0 && a < w.size) || (s > 0 && s <= w.size) || (a <= 0 && s >= w.size)) && w.slides.eq(i).addClass(w.params.slideVisibleClass);
                                }
                                n.progress = w.rtl ? -r : r;
                            }
                        }
                    }),
                    (w.updateProgress = function (e) {
                        void 0 === e && (e = w.translate || 0);
                        var t = w.maxTranslate() - w.minTranslate(),
                            i = w.isBeginning,
                            n = w.isEnd;
                        0 === t ? ((w.progress = 0), (w.isBeginning = w.isEnd = !0)) : ((w.progress = (e - w.minTranslate()) / t), (w.isBeginning = w.progress <= 0), (w.isEnd = w.progress >= 1)),
                            w.isBeginning && !i && w.emit("onReachBeginning", w),
                            w.isEnd && !n && w.emit("onReachEnd", w),
                            w.params.watchSlidesProgress && w.updateSlidesProgress(e),
                            w.emit("onProgress", w, w.progress);
                    }),
                    (w.updateActiveIndex = function () {
                        var e,
                            t,
                            i,
                            n = w.rtl ? w.translate : -w.translate;
                        for (t = 0; t < w.slidesGrid.length; t++)
                            void 0 !== w.slidesGrid[t + 1]
                                ? n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] - (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2
                                    ? (e = t)
                                    : n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] && (e = t + 1)
                                : n >= w.slidesGrid[t] && (e = t);
                        w.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                            (i = Math.floor(e / w.params.slidesPerGroup)),
                            i >= w.snapGrid.length && (i = w.snapGrid.length - 1),
                            e !== w.activeIndex && ((w.snapIndex = i), (w.previousIndex = w.activeIndex), (w.activeIndex = e), w.updateClasses(), w.updateRealIndex());
                    }),
                    (w.updateRealIndex = function () {
                        w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10);
                    }),
                    (w.updateClasses = function () {
                        w.slides.removeClass(
                            w.params.slideActiveClass +
                                " " +
                                w.params.slideNextClass +
                                " " +
                                w.params.slidePrevClass +
                                " " +
                                w.params.slideDuplicateActiveClass +
                                " " +
                                w.params.slideDuplicateNextClass +
                                " " +
                                w.params.slideDuplicatePrevClass
                        );
                        var t = w.slides.eq(w.activeIndex);
                        t.addClass(w.params.slideActiveClass),
                            r.loop &&
                                (t.hasClass(w.params.slideDuplicateClass)
                                    ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass)
                                    : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                        var i = t.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                        w.params.loop && 0 === i.length && ((i = w.slides.eq(0)), i.addClass(w.params.slideNextClass));
                        var n = t.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                        if (
                            (w.params.loop && 0 === n.length && ((n = w.slides.eq(-1)), n.addClass(w.params.slidePrevClass)),
                            r.loop &&
                                (i.hasClass(w.params.slideDuplicateClass)
                                    ? w.wrapper
                                          .children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]')
                                          .addClass(w.params.slideDuplicateNextClass)
                                    : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass),
                                n.hasClass(w.params.slideDuplicateClass)
                                    ? w.wrapper
                                          .children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]')
                                          .addClass(w.params.slideDuplicatePrevClass)
                                    : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass)),
                            w.paginationContainer && w.paginationContainer.length > 0)
                        ) {
                            var a,
                                s = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                            if (
                                (w.params.loop
                                    ? ((a = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup)),
                                      a > w.slides.length - 1 - 2 * w.loopedSlides && (a -= w.slides.length - 2 * w.loopedSlides),
                                      a > s - 1 && (a -= s),
                                      a < 0 && "bullets" !== w.params.paginationType && (a = s + a))
                                    : (a = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0),
                                "bullets" === w.params.paginationType &&
                                    w.bullets &&
                                    w.bullets.length > 0 &&
                                    (w.bullets.removeClass(w.params.bulletActiveClass),
                                    w.paginationContainer.length > 1
                                        ? w.bullets.each(function () {
                                              e(this).index() === a && e(this).addClass(w.params.bulletActiveClass);
                                          })
                                        : w.bullets.eq(a).addClass(w.params.bulletActiveClass)),
                                "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(a + 1), w.paginationContainer.find("." + w.params.paginationTotalClass).text(s)),
                                "progress" === w.params.paginationType)
                            ) {
                                var o = (a + 1) / s,
                                    l = o,
                                    u = 1;
                                w.isHorizontal() || ((u = o), (l = 1)),
                                    w.paginationContainer
                                        .find("." + w.params.paginationProgressbarClass)
                                        .transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")")
                                        .transition(w.params.speed);
                            }
                            "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, a + 1, s)), w.emit("onPaginationRendered", w, w.paginationContainer[0]));
                        }
                        w.params.loop ||
                            (w.params.prevButton &&
                                w.prevButton &&
                                w.prevButton.length > 0 &&
                                (w.isBeginning
                                    ? (w.prevButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.prevButton))
                                    : (w.prevButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))),
                            w.params.nextButton &&
                                w.nextButton &&
                                w.nextButton.length > 0 &&
                                (w.isEnd
                                    ? (w.nextButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.nextButton))
                                    : (w.nextButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))));
                    }),
                    (w.updatePagination = function () {
                        if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                            var e = "";
                            if ("bullets" === w.params.paginationType) {
                                for (var t = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; i < t; i++)
                                    e += w.params.paginationBulletRender
                                        ? w.params.paginationBulletRender(w, i, w.params.bulletClass)
                                        : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                                w.paginationContainer.html(e), (w.bullets = w.paginationContainer.find("." + w.params.bulletClass)), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination();
                            }
                            "fraction" === w.params.paginationType &&
                                ((e = w.params.paginationFractionRender
                                    ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass)
                                    : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>'),
                                w.paginationContainer.html(e)),
                                "progress" === w.params.paginationType &&
                                    ((e = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>'),
                                    w.paginationContainer.html(e)),
                                "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0]);
                        }
                    }),
                    (w.update = function (e) {
                        function t() {
                            w.rtl, w.translate, (i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate())), w.setWrapperTranslate(i), w.updateActiveIndex(), w.updateClasses();
                        }
                        if (w) {
                            w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set();
                            var i;
                            e
                                ? (w.controller && w.controller.spline && (w.controller.spline = void 0),
                                  w.params.freeMode
                                      ? (t(), w.params.autoHeight && w.updateAutoHeight())
                                      : (("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0)) || t())
                                : w.params.autoHeight && w.updateAutoHeight();
                        }
                    }),
                    (w.onResize = function (e) {
                        w.params.onBeforeResize && w.params.onBeforeResize(w), w.params.breakpoints && w.setBreakpoint();
                        var t = w.params.allowSwipeToPrev,
                            i = w.params.allowSwipeToNext;
                        (w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0),
                            w.updateContainerSize(),
                            w.updateSlidesSize(),
                            ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(),
                            w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                            w.controller && w.controller.spline && (w.controller.spline = void 0);
                        var n = !1;
                        if (w.params.freeMode) {
                            var r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                            w.setWrapperTranslate(r), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight();
                        } else
                            w.updateClasses(), (n = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0));
                        w.params.lazyLoading && !n && w.lazy && w.lazy.load(), (w.params.allowSwipeToPrev = t), (w.params.allowSwipeToNext = i), w.params.onAfterResize && w.params.onAfterResize(w);
                    }),
                    (w.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }),
                    window.navigator.pointerEnabled
                        ? (w.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" })
                        : window.navigator.msPointerEnabled && (w.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }),
                    (w.touchEvents = {
                        start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                        move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                        end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end,
                    }),
                    (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction),
                    (w.initEvents = function (e) {
                        var t = e ? "off" : "on",
                            i = e ? "removeEventListener" : "addEventListener",
                            n = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
                            a = w.support.touch ? n : document,
                            s = !!w.params.nested;
                        if (w.browser.ie) n[i](w.touchEvents.start, w.onTouchStart, !1), a[i](w.touchEvents.move, w.onTouchMove, s), a[i](w.touchEvents.end, w.onTouchEnd, !1);
                        else {
                            if (w.support.touch) {
                                var o = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && { passive: !0, capture: !1 };
                                n[i](w.touchEvents.start, w.onTouchStart, o), n[i](w.touchEvents.move, w.onTouchMove, s), n[i](w.touchEvents.end, w.onTouchEnd, o);
                            }
                            ((r.simulateTouch && !w.device.ios && !w.device.android) || (r.simulateTouch && !w.support.touch && w.device.ios)) &&
                                (n[i]("mousedown", w.onTouchStart, !1), document[i]("mousemove", w.onTouchMove, s), document[i]("mouseup", w.onTouchEnd, !1));
                        }
                        window[i]("resize", w.onResize),
                            w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[t]("click", w.onClickNext), w.params.a11y && w.a11y && w.nextButton[t]("keydown", w.a11y.onEnterKey)),
                            w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[t]("click", w.onClickPrev), w.params.a11y && w.a11y && w.prevButton[t]("keydown", w.a11y.onEnterKey)),
                            w.params.pagination &&
                                w.params.paginationClickable &&
                                (w.paginationContainer[t]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && w.paginationContainer[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)),
                            (w.params.preventClicks || w.params.preventClicksPropagation) && n[i]("click", w.preventClicks, !0);
                    }),
                    (w.attachEvents = function () {
                        w.initEvents();
                    }),
                    (w.detachEvents = function () {
                        w.initEvents(!0);
                    }),
                    (w.allowClick = !0),
                    (w.preventClicks = function (e) {
                        w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                    }),
                    (w.onClickNext = function (e) {
                        e.preventDefault(), (w.isEnd && !w.params.loop) || w.slideNext();
                    }),
                    (w.onClickPrev = function (e) {
                        e.preventDefault(), (w.isBeginning && !w.params.loop) || w.slidePrev();
                    }),
                    (w.onClickIndex = function (t) {
                        t.preventDefault();
                        var i = e(this).index() * w.params.slidesPerGroup;
                        w.params.loop && (i += w.loopedSlides), w.slideTo(i);
                    }),
                    (w.updateClickedSlide = function (t) {
                        var i = o(t, "." + w.params.slideClass),
                            n = !1;
                        if (i) for (var r = 0; r < w.slides.length; r++) w.slides[r] === i && (n = !0);
                        if (!i || !n) return (w.clickedSlide = void 0), void (w.clickedIndex = void 0);
                        if (((w.clickedSlide = i), (w.clickedIndex = e(i).index()), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex)) {
                            var a,
                                s = w.clickedIndex,
                                l = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                            if (w.params.loop) {
                                if (w.animating) return;
                                (a = parseInt(e(w.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                    w.params.centeredSlides
                                        ? s < w.loopedSlides - l / 2 || s > w.slides.length - w.loopedSlides + l / 2
                                            ? (w.fixLoop(),
                                              (s = w.wrapper
                                                  .children("." + w.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + w.params.slideDuplicateClass + ")")
                                                  .eq(0)
                                                  .index()),
                                              setTimeout(function () {
                                                  w.slideTo(s);
                                              }, 0))
                                            : w.slideTo(s)
                                        : s > w.slides.length - l
                                        ? (w.fixLoop(),
                                          (s = w.wrapper
                                              .children("." + w.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + w.params.slideDuplicateClass + ")")
                                              .eq(0)
                                              .index()),
                                          setTimeout(function () {
                                              w.slideTo(s);
                                          }, 0))
                                        : w.slideTo(s);
                            } else w.slideTo(s);
                        }
                    });
                var x,
                    S,
                    I,
                    E,
                    P,
                    C,
                    j,
                    A,
                    M,
                    z,
                    O = "input, select, textarea, button, video",
                    k = Date.now(),
                    L = [];
                (w.animating = !1), (w.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 });
                var H, N;
                (w.onTouchStart = function (t) {
                    if ((t.originalEvent && (t = t.originalEvent), (H = "touchstart" === t.type) || !("which" in t) || 3 !== t.which)) {
                        if (w.params.noSwiping && o(t, "." + w.params.noSwipingClass)) return void (w.allowClick = !0);
                        if (!w.params.swipeHandler || o(t, w.params.swipeHandler)) {
                            var i = (w.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
                                n = (w.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY);
                            if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && i <= w.params.iOSEdgeSwipeThreshold)) {
                                if (
                                    ((x = !0),
                                    (S = !1),
                                    (I = !0),
                                    (P = void 0),
                                    (N = void 0),
                                    (w.touches.startX = i),
                                    (w.touches.startY = n),
                                    (E = Date.now()),
                                    (w.allowClick = !0),
                                    w.updateContainerSize(),
                                    (w.swipeDirection = void 0),
                                    w.params.threshold > 0 && (A = !1),
                                    "touchstart" !== t.type)
                                ) {
                                    var r = !0;
                                    e(t.target).is(O) && (r = !1), document.activeElement && e(document.activeElement).is(O) && document.activeElement.blur(), r && t.preventDefault();
                                }
                                w.emit("onTouchStart", w, t);
                            }
                        }
                    }
                }),
                    (w.onTouchMove = function (t) {
                        if ((t.originalEvent && (t = t.originalEvent), !H || "mousemove" !== t.type)) {
                            if (t.preventedByNestedSwiper) return (w.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX), void (w.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                            if (w.params.onlyExternal)
                                return (
                                    (w.allowClick = !1),
                                    void (
                                        x &&
                                        ((w.touches.startX = w.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
                                        (w.touches.startY = w.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
                                        (E = Date.now()))
                                    )
                                );
                            if (H && w.params.touchReleaseOnEdges && !w.params.loop)
                                if (w.isHorizontal()) {
                                    if ((w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate()) || (w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate())) return;
                                } else if ((w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate()) || (w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate())) return;
                            if (H && document.activeElement && t.target === document.activeElement && e(t.target).is(O)) return (S = !0), void (w.allowClick = !1);
                            if ((I && w.emit("onTouchMove", w, t), !(t.targetTouches && t.targetTouches.length > 1))) {
                                if (((w.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX), (w.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY), void 0 === P)) {
                                    var i;
                                    (w.isHorizontal() && w.touches.currentY === w.touches.startY) || (!w.isHorizontal() && w.touches.currentX === w.touches.startX)
                                        ? (P = !1)
                                        : ((i = (180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX))) / Math.PI),
                                          (P = w.isHorizontal() ? i > w.params.touchAngle : 90 - i > w.params.touchAngle));
                                }
                                if ((P && w.emit("onTouchMoveOpposite", w, t), void 0 === N && ((w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY) || (N = !0)), x)) {
                                    if (P) return void (x = !1);
                                    if (N) {
                                        (w.allowClick = !1),
                                            w.emit("onSliderMove", w, t),
                                            t.preventDefault(),
                                            w.params.touchMoveStopPropagation && !w.params.nested && t.stopPropagation(),
                                            S ||
                                                (r.loop && w.fixLoop(),
                                                (j = w.getWrapperTranslate()),
                                                w.setWrapperTransition(0),
                                                w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                                w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()),
                                                (z = !1),
                                                !w.params.grabCursor || (w.params.allowSwipeToNext !== !0 && w.params.allowSwipeToPrev !== !0) || w.setGrabCursor(!0)),
                                            (S = !0);
                                        var n = (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY);
                                        (n *= w.params.touchRatio), w.rtl && (n = -n), (w.swipeDirection = n > 0 ? "prev" : "next"), (C = n + j);
                                        var a = !0;
                                        if (
                                            (n > 0 && C > w.minTranslate()
                                                ? ((a = !1), w.params.resistance && (C = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + j + n, w.params.resistanceRatio)))
                                                : n < 0 && C < w.maxTranslate() && ((a = !1), w.params.resistance && (C = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - j - n, w.params.resistanceRatio))),
                                            a && (t.preventedByNestedSwiper = !0),
                                            !w.params.allowSwipeToNext && "next" === w.swipeDirection && C < j && (C = j),
                                            !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && C > j && (C = j),
                                            w.params.threshold > 0)
                                        ) {
                                            if (!(Math.abs(n) > w.params.threshold || A)) return void (C = j);
                                            if (!A)
                                                return (
                                                    (A = !0),
                                                    (w.touches.startX = w.touches.currentX),
                                                    (w.touches.startY = w.touches.currentY),
                                                    (C = j),
                                                    void (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                                );
                                        }
                                        w.params.followFinger &&
                                            ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(),
                                            w.params.freeMode &&
                                                (0 === L.length && L.push({ position: w.touches[w.isHorizontal() ? "startX" : "startY"], time: E }),
                                                L.push({ position: w.touches[w.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })),
                                            w.updateProgress(C),
                                            w.setWrapperTranslate(C));
                                    }
                                }
                            }
                        }
                    }),
                    (w.onTouchEnd = function (t) {
                        if ((t.originalEvent && (t = t.originalEvent), I && w.emit("onTouchEnd", w, t), (I = !1), x)) {
                            w.params.grabCursor && S && x && (w.params.allowSwipeToNext === !0 || w.params.allowSwipeToPrev === !0) && w.setGrabCursor(!1);
                            var i = Date.now(),
                                n = i - E;
                            if (
                                (w.allowClick &&
                                    (w.updateClickedSlide(t),
                                    w.emit("onTap", w, t),
                                    n < 300 &&
                                        i - k > 300 &&
                                        (M && clearTimeout(M),
                                        (M = setTimeout(function () {
                                            w &&
                                                (w.params.paginationHide && w.paginationContainer.length > 0 && !e(t.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass),
                                                w.emit("onClick", w, t));
                                        }, 300))),
                                    n < 300 && i - k < 300 && (M && clearTimeout(M), w.emit("onDoubleTap", w, t))),
                                (k = Date.now()),
                                setTimeout(function () {
                                    w && (w.allowClick = !0);
                                }, 0),
                                !x || !S || !w.swipeDirection || 0 === w.touches.diff || C === j)
                            )
                                return void (x = S = !1);
                            x = S = !1;
                            var r;
                            if (((r = w.params.followFinger ? (w.rtl ? w.translate : -w.translate) : -C), w.params.freeMode)) {
                                if (r < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                                if (r > -w.maxTranslate()) return void (w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                                if (w.params.freeModeMomentum) {
                                    if (L.length > 1) {
                                        var a = L.pop(),
                                            s = L.pop(),
                                            o = a.position - s.position,
                                            l = a.time - s.time;
                                        (w.velocity = o / l),
                                            (w.velocity = w.velocity / 2),
                                            Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0),
                                            (l > 150 || new window.Date().getTime() - a.time > 300) && (w.velocity = 0);
                                    } else w.velocity = 0;
                                    (w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio), (L.length = 0);
                                    var u = 1e3 * w.params.freeModeMomentumRatio,
                                        d = w.velocity * u,
                                        c = w.translate + d;
                                    w.rtl && (c = -c);
                                    var g,
                                        p = !1,
                                        h = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                    if (c < w.maxTranslate()) w.params.freeModeMomentumBounce ? (c + w.maxTranslate() < -h && (c = w.maxTranslate() - h), (g = w.maxTranslate()), (p = !0), (z = !0)) : (c = w.maxTranslate());
                                    else if (c > w.minTranslate()) w.params.freeModeMomentumBounce ? (c - w.minTranslate() > h && (c = w.minTranslate() + h), (g = w.minTranslate()), (p = !0), (z = !0)) : (c = w.minTranslate());
                                    else if (w.params.freeModeSticky) {
                                        var m,
                                            f = 0;
                                        for (f = 0; f < w.snapGrid.length; f += 1)
                                            if (w.snapGrid[f] > -c) {
                                                m = f;
                                                break;
                                            }
                                        (c = Math.abs(w.snapGrid[m] - c) < Math.abs(w.snapGrid[m - 1] - c) || "next" === w.swipeDirection ? w.snapGrid[m] : w.snapGrid[m - 1]), w.rtl || (c = -c);
                                    }
                                    if (0 !== w.velocity) u = w.rtl ? Math.abs((-c - w.translate) / w.velocity) : Math.abs((c - w.translate) / w.velocity);
                                    else if (w.params.freeModeSticky) return void w.slideReset();
                                    w.params.freeModeMomentumBounce && p
                                        ? (w.updateProgress(g),
                                          w.setWrapperTransition(u),
                                          w.setWrapperTranslate(c),
                                          w.onTransitionStart(),
                                          (w.animating = !0),
                                          w.wrapper.transitionEnd(function () {
                                              w &&
                                                  z &&
                                                  (w.emit("onMomentumBounce", w),
                                                  w.setWrapperTransition(w.params.speed),
                                                  w.setWrapperTranslate(g),
                                                  w.wrapper.transitionEnd(function () {
                                                      w && w.onTransitionEnd();
                                                  }));
                                          }))
                                        : w.velocity
                                        ? (w.updateProgress(c),
                                          w.setWrapperTransition(u),
                                          w.setWrapperTranslate(c),
                                          w.onTransitionStart(),
                                          w.animating ||
                                              ((w.animating = !0),
                                              w.wrapper.transitionEnd(function () {
                                                  w && w.onTransitionEnd();
                                              })))
                                        : w.updateProgress(c),
                                        w.updateActiveIndex();
                                }
                                return void ((!w.params.freeModeMomentum || n >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()));
                            }
                            var _,
                                v = 0,
                                b = w.slidesSizesGrid[0];
                            for (_ = 0; _ < w.slidesGrid.length; _ += w.params.slidesPerGroup)
                                void 0 !== w.slidesGrid[_ + w.params.slidesPerGroup]
                                    ? r >= w.slidesGrid[_] && r < w.slidesGrid[_ + w.params.slidesPerGroup] && ((v = _), (b = w.slidesGrid[_ + w.params.slidesPerGroup] - w.slidesGrid[_]))
                                    : r >= w.slidesGrid[_] && ((v = _), (b = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]));
                            var y = (r - w.slidesGrid[v]) / b;
                            if (n > w.params.longSwipesMs) {
                                if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && (y >= w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v)),
                                    "prev" === w.swipeDirection && (y > 1 - w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v));
                            } else {
                                if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && w.slideTo(v + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(v);
                            }
                        }
                    }),
                    (w._slideTo = function (e, t) {
                        return w.slideTo(e, t, !0, !0);
                    }),
                    (w.slideTo = function (e, t, i, n) {
                        void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), (w.snapIndex = Math.floor(e / w.params.slidesPerGroup)), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                        var r = -w.snapGrid[w.snapIndex];
                        if ((w.params.autoplay && w.autoplaying && (n || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(t) : w.stopAutoplay()), w.updateProgress(r), w.params.normalizeSlideIndex))
                            for (var a = 0; a < w.slidesGrid.length; a++) -Math.floor(100 * r) >= Math.floor(100 * w.slidesGrid[a]) && (e = a);
                        return !(
                            (!w.params.allowSwipeToNext && r < w.translate && r < w.minTranslate()) ||
                            (!w.params.allowSwipeToPrev && r > w.translate && r > w.maxTranslate() && (w.activeIndex || 0) !== e) ||
                            (void 0 === t && (t = w.params.speed),
                            (w.previousIndex = w.activeIndex || 0),
                            (w.activeIndex = e),
                            w.updateRealIndex(),
                            (w.rtl && -r === w.translate) || (!w.rtl && r === w.translate)
                                ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(r), 1)
                                : (w.updateClasses(),
                                  w.onTransitionStart(i),
                                  0 === t || w.browser.lteIE9
                                      ? (w.setWrapperTranslate(r), w.setWrapperTransition(0), w.onTransitionEnd(i))
                                      : (w.setWrapperTranslate(r),
                                        w.setWrapperTransition(t),
                                        w.animating ||
                                            ((w.animating = !0),
                                            w.wrapper.transitionEnd(function () {
                                                w && w.onTransitionEnd(i);
                                            }))),
                                  0))
                        );
                    }),
                    (w.onTransitionStart = function (e) {
                        void 0 === e && (e = !0),
                            w.params.autoHeight && w.updateAutoHeight(),
                            w.lazy && w.lazy.onTransitionStart(),
                            e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)));
                    }),
                    (w.onTransitionEnd = function (e) {
                        (w.animating = !1),
                            w.setWrapperTransition(0),
                            void 0 === e && (e = !0),
                            w.lazy && w.lazy.onTransitionEnd(),
                            e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))),
                            w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex),
                            w.params.hashnav && w.hashnav && w.hashnav.setHash();
                    }),
                    (w.slideNext = function (e, t, i) {
                        return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i);
                    }),
                    (w._slideNext = function (e) {
                        return w.slideNext(!0, e, !0);
                    }),
                    (w.slidePrev = function (e, t, i) {
                        return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex - 1, t, e, i)) : w.slideTo(w.activeIndex - 1, t, e, i);
                    }),
                    (w._slidePrev = function (e) {
                        return w.slidePrev(!0, e, !0);
                    }),
                    (w.slideReset = function (e, t, i) {
                        return w.slideTo(w.activeIndex, t, e);
                    }),
                    (w.disableTouchControl = function () {
                        return (w.params.onlyExternal = !0), !0;
                    }),
                    (w.enableTouchControl = function () {
                        return (w.params.onlyExternal = !1), !0;
                    }),
                    (w.setWrapperTransition = function (e, t) {
                        w.wrapper.transition(e),
                            "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e),
                            w.params.parallax && w.parallax && w.parallax.setTransition(e),
                            w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e),
                            w.params.control && w.controller && w.controller.setTransition(e, t),
                            w.emit("onSetTransition", w, e);
                    }),
                    (w.setWrapperTranslate = function (e, t, i) {
                        var n = 0,
                            r = 0;
                        w.isHorizontal() ? (n = w.rtl ? -e : e) : (r = e),
                            w.params.roundLengths && ((n = a(n)), (r = a(r))),
                            w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + n + "px, " + r + "px, 0px)") : w.wrapper.transform("translate(" + n + "px, " + r + "px)")),
                            (w.translate = w.isHorizontal() ? n : r);
                        var s,
                            o = w.maxTranslate() - w.minTranslate();
                        (s = 0 === o ? 0 : (e - w.minTranslate()) / o),
                            s !== w.progress && w.updateProgress(e),
                            t && w.updateActiveIndex(),
                            "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate),
                            w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate),
                            w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate),
                            w.params.control && w.controller && w.controller.setTranslate(w.translate, i),
                            w.emit("onSetTranslate", w, w.translate);
                    }),
                    (w.getTranslate = function (e, t) {
                        var i, n, r, a;
                        return (
                            void 0 === t && (t = "x"),
                            w.params.virtualTranslate
                                ? w.rtl
                                    ? -w.translate
                                    : w.translate
                                : ((r = window.getComputedStyle(e, null)),
                                  window.WebKitCSSMatrix
                                      ? ((n = r.transform || r.webkitTransform),
                                        n.split(",").length > 6 &&
                                            (n = n
                                                .split(", ")
                                                .map(function (e) {
                                                    return e.replace(",", ".");
                                                })
                                                .join(", ")),
                                        (a = new window.WebKitCSSMatrix("none" === n ? "" : n)))
                                      : ((a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (i = a.toString().split(","))),
                                  "x" === t && (n = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                                  "y" === t && (n = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                                  w.rtl && n && (n = -n),
                                  n || 0)
                        );
                    }),
                    (w.getWrapperTranslate = function (e) {
                        return void 0 === e && (e = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], e);
                    }),
                    (w.observers = []),
                    (w.initObservers = function () {
                        if (w.params.observeParents) for (var e = w.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                        l(w.container[0], { childList: !1 }), l(w.wrapper[0], { attributes: !1 });
                    }),
                    (w.disconnectObservers = function () {
                        for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();
                        w.observers = [];
                    }),
                    (w.createLoop = function () {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                        var t = w.wrapper.children("." + w.params.slideClass);
                        "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = t.length),
                            (w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10)),
                            (w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides),
                            w.loopedSlides > t.length && (w.loopedSlides = t.length);
                        var i,
                            n = [],
                            r = [];
                        for (
                            t.each(function (i, a) {
                                var s = e(this);
                                i < w.loopedSlides && r.push(a), i < t.length && i >= t.length - w.loopedSlides && n.push(a), s.attr("data-swiper-slide-index", i);
                            }),
                                i = 0;
                            i < r.length;
                            i++
                        )
                            w.wrapper.append(e(r[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                        for (i = n.length - 1; i >= 0; i--) w.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                    }),
                    (w.destroyLoop = function () {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index");
                    }),
                    (w.reLoop = function (e) {
                        var t = w.activeIndex - w.loopedSlides;
                        w.destroyLoop(), w.createLoop(), w.updateSlidesSize(), e && w.slideTo(t + w.loopedSlides, 0, !1);
                    }),
                    (w.fixLoop = function () {
                        var e;
                        w.activeIndex < w.loopedSlides
                            ? ((e = w.slides.length - 3 * w.loopedSlides + w.activeIndex), (e += w.loopedSlides), w.slideTo(e, 0, !1, !0))
                            : (("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides) || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) &&
                              ((e = -w.slides.length + w.activeIndex + w.loopedSlides), (e += w.loopedSlides), w.slideTo(e, 0, !1, !0));
                    }),
                    (w.appendSlide = function (e) {
                        if ((w.params.loop && w.destroyLoop(), "object" == typeof e && e.length)) for (var t = 0; t < e.length; t++) e[t] && w.wrapper.append(e[t]);
                        else w.wrapper.append(e);
                        w.params.loop && w.createLoop(), (w.params.observer && w.support.observer) || w.update(!0);
                    }),
                    (w.prependSlide = function (e) {
                        w.params.loop && w.destroyLoop();
                        var t = w.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var i = 0; i < e.length; i++) e[i] && w.wrapper.prepend(e[i]);
                            t = w.activeIndex + e.length;
                        } else w.wrapper.prepend(e);
                        w.params.loop && w.createLoop(), (w.params.observer && w.support.observer) || w.update(!0), w.slideTo(t, 0, !1);
                    }),
                    (w.removeSlide = function (e) {
                        w.params.loop && (w.destroyLoop(), (w.slides = w.wrapper.children("." + w.params.slideClass)));
                        var t,
                            i = w.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var n = 0; n < e.length; n++) (t = e[n]), w.slides[t] && w.slides.eq(t).remove(), t < i && i--;
                            i = Math.max(i, 0);
                        } else (t = e), w.slides[t] && w.slides.eq(t).remove(), t < i && i--, (i = Math.max(i, 0));
                        w.params.loop && w.createLoop(), (w.params.observer && w.support.observer) || w.update(!0), w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1);
                    }),
                    (w.removeAllSlides = function () {
                        for (var e = [], t = 0; t < w.slides.length; t++) e.push(t);
                        w.removeSlide(e);
                    }),
                    (w.effects = {
                        fade: {
                            setTranslate: function () {
                                for (var e = 0; e < w.slides.length; e++) {
                                    var t = w.slides.eq(e),
                                        i = t[0].swiperSlideOffset,
                                        n = -i;
                                    w.params.virtualTranslate || (n -= w.translate);
                                    var r = 0;
                                    w.isHorizontal() || ((r = n), (n = 0));
                                    var a = w.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                    t.css({ opacity: a }).transform("translate3d(" + n + "px, " + r + "px, 0px)");
                                }
                            },
                            setTransition: function (e) {
                                if ((w.slides.transition(e), w.params.virtualTranslate && 0 !== e)) {
                                    var t = !1;
                                    w.slides.transitionEnd(function () {
                                        if (!t && w) {
                                            (t = !0), (w.animating = !1);
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) w.wrapper.trigger(e[i]);
                                        }
                                    });
                                }
                            },
                        },
                        flip: {
                            setTranslate: function () {
                                for (var t = 0; t < w.slides.length; t++) {
                                    var i = w.slides.eq(t),
                                        n = i[0].progress;
                                    w.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                    var r = i[0].swiperSlideOffset,
                                        a = -180 * n,
                                        s = a,
                                        o = 0,
                                        l = -r,
                                        u = 0;
                                    if ((w.isHorizontal() ? w.rtl && (s = -s) : ((u = l), (l = 0), (o = -s), (s = 0)), (i[0].style.zIndex = -Math.abs(Math.round(n)) + w.slides.length), w.params.flip.slideShadows)) {
                                        var d = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            c = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === d.length && ((d = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>')), i.append(d)),
                                            0 === c.length && ((c = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>')), i.append(c)),
                                            d.length && (d[0].style.opacity = Math.max(-n, 0)),
                                            c.length && (c[0].style.opacity = Math.max(n, 0));
                                    }
                                    i.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)");
                                }
                            },
                            setTransition: function (t) {
                                if ((w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), w.params.virtualTranslate && 0 !== t)) {
                                    var i = !1;
                                    w.slides.eq(w.activeIndex).transitionEnd(function () {
                                        if (!i && w && e(this).hasClass(w.params.slideActiveClass)) {
                                            (i = !0), (w.animating = !1);
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) w.wrapper.trigger(t[n]);
                                        }
                                    });
                                }
                            },
                        },
                        cube: {
                            setTranslate: function () {
                                var t,
                                    i = 0;
                                w.params.cube.shadow &&
                                    (w.isHorizontal()
                                        ? ((t = w.wrapper.find(".swiper-cube-shadow")), 0 === t.length && ((t = e('<div class="swiper-cube-shadow"></div>')), w.wrapper.append(t)), t.css({ height: w.width + "px" }))
                                        : ((t = w.container.find(".swiper-cube-shadow")), 0 === t.length && ((t = e('<div class="swiper-cube-shadow"></div>')), w.container.append(t))));
                                for (var n = 0; n < w.slides.length; n++) {
                                    var r = w.slides.eq(n),
                                        a = 90 * n,
                                        s = Math.floor(a / 360);
                                    w.rtl && ((a = -a), (s = Math.floor(-a / 360)));
                                    var o = Math.max(Math.min(r[0].progress, 1), -1),
                                        l = 0,
                                        u = 0,
                                        d = 0;
                                    n % 4 == 0
                                        ? ((l = 4 * -s * w.size), (d = 0))
                                        : (n - 1) % 4 == 0
                                        ? ((l = 0), (d = 4 * -s * w.size))
                                        : (n - 2) % 4 == 0
                                        ? ((l = w.size + 4 * s * w.size), (d = w.size))
                                        : (n - 3) % 4 == 0 && ((l = -w.size), (d = 3 * w.size + 4 * w.size * s)),
                                        w.rtl && (l = -l),
                                        w.isHorizontal() || ((u = l), (l = 0));
                                    var c = "rotateX(" + (w.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (w.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + d + "px)";
                                    if ((o <= 1 && o > -1 && ((i = 90 * n + 90 * o), w.rtl && (i = 90 * -n - 90 * o)), r.transform(c), w.params.cube.slideShadows)) {
                                        var g = w.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                            p = w.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                        0 === g.length && ((g = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>')), r.append(g)),
                                            0 === p.length && ((p = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>')), r.append(p)),
                                            g.length && (g[0].style.opacity = Math.max(-o, 0)),
                                            p.length && (p[0].style.opacity = Math.max(o, 0));
                                    }
                                }
                                if (
                                    (w.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + w.size / 2 + "px",
                                    }),
                                    w.params.cube.shadow)
                                )
                                    if (w.isHorizontal()) t.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                                    else {
                                        var h = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                            m = 1.5 - (Math.sin((2 * h * Math.PI) / 360) / 2 + Math.cos((2 * h * Math.PI) / 360) / 2),
                                            f = w.params.cube.shadowScale,
                                            _ = w.params.cube.shadowScale / m,
                                            v = w.params.cube.shadowOffset;
                                        t.transform("scale3d(" + f + ", 1, " + _ + ") translate3d(0px, " + (w.height / 2 + v) + "px, " + -w.height / 2 / _ + "px) rotateX(-90deg)");
                                    }
                                var b = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                                w.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (w.isHorizontal() ? 0 : i) + "deg) rotateY(" + (w.isHorizontal() ? -i : 0) + "deg)");
                            },
                            setTransition: function (e) {
                                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                    w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(e);
                            },
                        },
                        coverflow: {
                            setTranslate: function () {
                                for (
                                    var t = w.translate,
                                        i = w.isHorizontal() ? -t + w.width / 2 : -t + w.height / 2,
                                        n = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate,
                                        r = w.params.coverflow.depth,
                                        a = 0,
                                        s = w.slides.length;
                                    a < s;
                                    a++
                                ) {
                                    var o = w.slides.eq(a),
                                        l = w.slidesSizesGrid[a],
                                        u = o[0].swiperSlideOffset,
                                        d = ((i - u - l / 2) / l) * w.params.coverflow.modifier,
                                        c = w.isHorizontal() ? n * d : 0,
                                        g = w.isHorizontal() ? 0 : n * d,
                                        p = -r * Math.abs(d),
                                        h = w.isHorizontal() ? 0 : w.params.coverflow.stretch * d,
                                        m = w.isHorizontal() ? w.params.coverflow.stretch * d : 0;
                                    Math.abs(m) < 0.001 && (m = 0), Math.abs(h) < 0.001 && (h = 0), Math.abs(p) < 0.001 && (p = 0), Math.abs(c) < 0.001 && (c = 0), Math.abs(g) < 0.001 && (g = 0);
                                    var f = "translate3d(" + m + "px," + h + "px," + p + "px)  rotateX(" + g + "deg) rotateY(" + c + "deg)";
                                    if ((o.transform(f), (o[0].style.zIndex = 1 - Math.abs(Math.round(d))), w.params.coverflow.slideShadows)) {
                                        var _ = w.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                            v = w.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                        0 === _.length && ((_ = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>')), o.append(_)),
                                            0 === v.length && ((v = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>')), o.append(v)),
                                            _.length && (_[0].style.opacity = d > 0 ? d : 0),
                                            v.length && (v[0].style.opacity = -d > 0 ? -d : 0);
                                    }
                                }
                                w.browser.ie && (w.wrapper[0].style.perspectiveOrigin = i + "px 50%");
                            },
                            setTransition: function (e) {
                                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                            },
                        },
                    }),
                    (w.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function (t, i) {
                            if (void 0 !== t && (void 0 === i && (i = !0), 0 !== w.slides.length)) {
                                var n = w.slides.eq(t),
                                    r = n.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                                !n.hasClass(w.params.lazyLoadingClass) || n.hasClass(w.params.lazyStatusLoadedClass) || n.hasClass(w.params.lazyStatusLoadingClass) || (r = r.add(n[0])),
                                    0 !== r.length &&
                                        r.each(function () {
                                            var t = e(this);
                                            t.addClass(w.params.lazyStatusLoadingClass);
                                            var r = t.attr("data-background"),
                                                a = t.attr("data-src"),
                                                s = t.attr("data-srcset"),
                                                o = t.attr("data-sizes");
                                            w.loadImage(t[0], a || r, s, o, !1, function () {
                                                if (void 0 !== w && null !== w && w) {
                                                    if (
                                                        (r
                                                            ? (t.css("background-image", 'url("' + r + '")'), t.removeAttr("data-background"))
                                                            : (s && (t.attr("srcset", s), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), a && (t.attr("src", a), t.removeAttr("data-src"))),
                                                        t.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass),
                                                        n.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(),
                                                        w.params.loop && i)
                                                    ) {
                                                        var e = n.attr("data-swiper-slide-index");
                                                        if (n.hasClass(w.params.slideDuplicateClass)) {
                                                            var l = w.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                                            w.lazy.loadImageInSlide(l.index(), !1);
                                                        } else {
                                                            var u = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                            w.lazy.loadImageInSlide(u.index(), !1);
                                                        }
                                                    }
                                                    w.emit("onLazyImageReady", w, n[0], t[0]);
                                                }
                                            }),
                                                w.emit("onLazyImageLoad", w, n[0], t[0]);
                                        });
                            }
                        },
                        load: function () {
                            var t,
                                i = w.params.slidesPerView;
                            if (("auto" === i && (i = 0), w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0), w.params.watchSlidesVisibility))
                                w.wrapper.children("." + w.params.slideVisibleClass).each(function () {
                                    w.lazy.loadImageInSlide(e(this).index());
                                });
                            else if (i > 1) for (t = w.activeIndex; t < w.activeIndex + i; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                            else w.lazy.loadImageInSlide(w.activeIndex);
                            if (w.params.lazyLoadingInPrevNext)
                                if (i > 1 || (w.params.lazyLoadingInPrevNextAmount && w.params.lazyLoadingInPrevNextAmount > 1)) {
                                    var n = w.params.lazyLoadingInPrevNextAmount,
                                        r = i,
                                        a = Math.min(w.activeIndex + r + Math.max(n, r), w.slides.length),
                                        s = Math.max(w.activeIndex - Math.max(r, n), 0);
                                    for (t = w.activeIndex + i; t < a; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                                    for (t = s; t < w.activeIndex; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                                } else {
                                    var o = w.wrapper.children("." + w.params.slideNextClass);
                                    o.length > 0 && w.lazy.loadImageInSlide(o.index());
                                    var l = w.wrapper.children("." + w.params.slidePrevClass);
                                    l.length > 0 && w.lazy.loadImageInSlide(l.index());
                                }
                        },
                        onTransitionStart: function () {
                            w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || (!w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded)) && w.lazy.load();
                        },
                        onTransitionEnd: function () {
                            w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load();
                        },
                    }),
                    (w.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function (e) {
                            var t = w.scrollbar,
                                i = w.isHorizontal()
                                    ? "touchstart" === e.type || "touchmove" === e.type
                                        ? e.targetTouches[0].pageX
                                        : e.pageX || e.clientX
                                    : "touchstart" === e.type || "touchmove" === e.type
                                    ? e.targetTouches[0].pageY
                                    : e.pageY || e.clientY,
                                n = i - t.track.offset()[w.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                r = -w.minTranslate() * t.moveDivider,
                                a = -w.maxTranslate() * t.moveDivider;
                            n < r ? (n = r) : n > a && (n = a), (n = -n / t.moveDivider), w.updateProgress(n), w.setWrapperTranslate(n, !0);
                        },
                        dragStart: function (e) {
                            var t = w.scrollbar;
                            (t.isTouched = !0),
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.setDragPosition(e),
                                clearTimeout(t.dragTimeout),
                                t.track.transition(0),
                                w.params.scrollbarHide && t.track.css("opacity", 1),
                                w.wrapper.transition(100),
                                t.drag.transition(100),
                                w.emit("onScrollbarDragStart", w);
                        },
                        dragMove: function (e) {
                            var t = w.scrollbar;
                            t.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), w.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), w.emit("onScrollbarDragMove", w));
                        },
                        dragEnd: function (e) {
                            var t = w.scrollbar;
                            t.isTouched &&
                                ((t.isTouched = !1),
                                w.params.scrollbarHide &&
                                    (clearTimeout(t.dragTimeout),
                                    (t.dragTimeout = setTimeout(function () {
                                        t.track.css("opacity", 0), t.track.transition(400);
                                    }, 1e3))),
                                w.emit("onScrollbarDragEnd", w),
                                w.params.scrollbarSnapOnRelease && w.slideReset());
                        },
                        draggableEvents: (function () {
                            return w.params.simulateTouch !== !1 || w.support.touch ? w.touchEvents : w.touchEventsDesktop;
                        })(),
                        enableDraggable: function () {
                            var t = w.scrollbar,
                                i = w.support.touch ? t.track : document;
                            e(t.track).on(t.draggableEvents.start, t.dragStart), e(i).on(t.draggableEvents.move, t.dragMove), e(i).on(t.draggableEvents.end, t.dragEnd);
                        },
                        disableDraggable: function () {
                            var t = w.scrollbar,
                                i = w.support.touch ? t.track : document;
                            e(t.track).off(t.draggableEvents.start, t.dragStart), e(i).off(t.draggableEvents.move, t.dragMove), e(i).off(t.draggableEvents.end, t.dragEnd);
                        },
                        set: function () {
                            if (w.params.scrollbar) {
                                var t = w.scrollbar;
                                (t.track = e(w.params.scrollbar)),
                                    w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && t.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (t.track = w.container.find(w.params.scrollbar)),
                                    (t.drag = t.track.find(".swiper-scrollbar-drag")),
                                    0 === t.drag.length && ((t.drag = e('<div class="swiper-scrollbar-drag"></div>')), t.track.append(t.drag)),
                                    (t.drag[0].style.width = ""),
                                    (t.drag[0].style.height = ""),
                                    (t.trackSize = w.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight),
                                    (t.divider = w.size / w.virtualSize),
                                    (t.moveDivider = t.divider * (t.trackSize / w.size)),
                                    (t.dragSize = t.trackSize * t.divider),
                                    w.isHorizontal() ? (t.drag[0].style.width = t.dragSize + "px") : (t.drag[0].style.height = t.dragSize + "px"),
                                    t.divider >= 1 ? (t.track[0].style.display = "none") : (t.track[0].style.display = ""),
                                    w.params.scrollbarHide && (t.track[0].style.opacity = 0);
                            }
                        },
                        setTranslate: function () {
                            if (w.params.scrollbar) {
                                var e,
                                    t = w.scrollbar,
                                    i = (w.translate, t.dragSize);
                                (e = (t.trackSize - t.dragSize) * w.progress),
                                    w.rtl && w.isHorizontal()
                                        ? ((e = -e), e > 0 ? ((i = t.dragSize - e), (e = 0)) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e))
                                        : e < 0
                                        ? ((i = t.dragSize + e), (e = 0))
                                        : e + t.dragSize > t.trackSize && (i = t.trackSize - e),
                                    w.isHorizontal()
                                        ? (w.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), (t.drag[0].style.width = i + "px"))
                                        : (w.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), (t.drag[0].style.height = i + "px")),
                                    w.params.scrollbarHide &&
                                        (clearTimeout(t.timeout),
                                        (t.track[0].style.opacity = 1),
                                        (t.timeout = setTimeout(function () {
                                            (t.track[0].style.opacity = 0), t.track.transition(400);
                                        }, 1e3)));
                            }
                        },
                        setTransition: function (e) {
                            w.params.scrollbar && w.scrollbar.drag.transition(e);
                        },
                    }),
                    (w.controller = {
                        LinearSpline: function (e, t) {
                            var i = (function () {
                                var e, t, i;
                                return function (n, r) {
                                    for (t = -1, e = n.length; e - t > 1; ) n[(i = (e + t) >> 1)] <= r ? (t = i) : (e = i);
                                    return e;
                                };
                            })();
                            (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                            var n, r;
                            this.x.length,
                                (this.interpolate = function (e) {
                                    return e ? ((r = i(this.x, e)), (n = r - 1), ((e - this.x[n]) * (this.y[r] - this.y[n])) / (this.x[r] - this.x[n]) + this.y[n]) : 0;
                                });
                        },
                        getInterpolateFunction: function (e) {
                            w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid));
                        },
                        setTranslate: function (e, i) {
                            function n(t) {
                                (e = t.rtl && "horizontal" === t.params.direction ? -w.translate : w.translate),
                                    "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(t), (a = -w.controller.spline.interpolate(-e))),
                                    (a && "container" !== w.params.controlBy) || ((r = (t.maxTranslate() - t.minTranslate()) / (w.maxTranslate() - w.minTranslate())), (a = (e - w.minTranslate()) * r + t.minTranslate())),
                                    w.params.controlInverse && (a = t.maxTranslate() - a),
                                    t.updateProgress(a),
                                    t.setWrapperTranslate(a, !1, w),
                                    t.updateActiveIndex();
                            }
                            var r,
                                a,
                                s = w.params.control;
                            if (Array.isArray(s)) for (var o = 0; o < s.length; o++) s[o] !== i && s[o] instanceof t && n(s[o]);
                            else s instanceof t && i !== s && n(s);
                        },
                        setTransition: function (e, i) {
                            function n(t) {
                                t.setWrapperTransition(e, w),
                                    0 !== e &&
                                        (t.onTransitionStart(),
                                        t.wrapper.transitionEnd(function () {
                                            a && (t.params.loop && "slide" === w.params.controlBy && t.fixLoop(), t.onTransitionEnd());
                                        }));
                            }
                            var r,
                                a = w.params.control;
                            if (Array.isArray(a)) for (r = 0; r < a.length; r++) a[r] !== i && a[r] instanceof t && n(a[r]);
                            else a instanceof t && i !== a && n(a);
                        },
                    }),
                    (w.hashnav = {
                        onHashCange: function (e, t) {
                            var i = document.location.hash.replace("#", "");
                            i !== w.slides.eq(w.activeIndex).attr("data-hash") && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + i + '"]').index());
                        },
                        attachEvents: function (t) {
                            var i = t ? "off" : "on";
                            e(window)[i]("hashchange", w.hashnav.onHashCange);
                        },
                        setHash: function () {
                            if (w.hashnav.initialized && w.params.hashnav)
                                if (w.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + w.slides.eq(w.activeIndex).attr("data-hash") || "");
                                else {
                                    var e = w.slides.eq(w.activeIndex),
                                        t = e.attr("data-hash") || e.attr("data-history");
                                    document.location.hash = t || "";
                                }
                        },
                        init: function () {
                            if (w.params.hashnav && !w.params.history) {
                                w.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var t = 0, i = w.slides.length; t < i; t++) {
                                        var n = w.slides.eq(t),
                                            r = n.attr("data-hash") || n.attr("data-history");
                                        if (r === e && !n.hasClass(w.params.slideDuplicateClass)) {
                                            var a = n.index();
                                            w.slideTo(a, 0, w.params.runCallbacksOnInit, !0);
                                        }
                                    }
                                w.params.hashnavWatchState && w.hashnav.attachEvents();
                            }
                        },
                        destroy: function () {
                            w.params.hashnavWatchState && w.hashnav.attachEvents(!0);
                        },
                    }),
                    (w.history = {
                        init: function () {
                            if (w.params.history) {
                                if (!window.history || !window.history.pushState) return (w.params.history = !1), void (w.params.hashnav = !0);
                                (w.history.initialized = !0),
                                    (this.paths = this.getPathValues()),
                                    (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit), w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
                            }
                        },
                        setHistoryPopState: function () {
                            (w.history.paths = w.history.getPathValues()), w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1);
                        },
                        getPathValues: function () {
                            var e = window.location.pathname.slice(1).split("/"),
                                t = e.length;
                            return { key: e[t - 2], value: e[t - 1] };
                        },
                        setHistory: function (e, t) {
                            if (w.history.initialized && w.params.history) {
                                var i = w.slides.eq(t),
                                    n = this.slugify(i.attr("data-history"));
                                window.location.pathname.includes(e) || (n = e + "/" + n), w.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null);
                            }
                        },
                        slugify: function (e) {
                            return e
                                .toString()
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w\-]+/g, "")
                                .replace(/\-\-+/g, "-")
                                .replace(/^-+/, "")
                                .replace(/-+$/, "");
                        },
                        scrollToSlide: function (e, t, i) {
                            if (t)
                                for (var n = 0, r = w.slides.length; n < r; n++) {
                                    var a = w.slides.eq(n),
                                        s = this.slugify(a.attr("data-history"));
                                    if (s === t && !a.hasClass(w.params.slideDuplicateClass)) {
                                        var o = a.index();
                                        w.slideTo(o, e, i);
                                    }
                                }
                            else w.slideTo(0, e, i);
                        },
                    }),
                    (w.disableKeyboardControl = function () {
                        (w.params.keyboardControl = !1), e(document).off("keydown", u);
                    }),
                    (w.enableKeyboardControl = function () {
                        (w.params.keyboardControl = !0), e(document).on("keydown", u);
                    }),
                    (w.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }),
                    w.params.mousewheelControl &&
                        (w.mousewheel.event =
                            navigator.userAgent.indexOf("firefox") > -1
                                ? "DOMMouseScroll"
                                : (function () {
                                      var e = "onwheel" in document;
                                      if (!e) {
                                          var t = document.createElement("div");
                                          t.setAttribute("onwheel", "return;"), (e = "function" == typeof t.onwheel);
                                      }
                                      return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e;
                                  })()
                                ? "wheel"
                                : "mousewheel"),
                    (w.disableMousewheelControl = function () {
                        if (!w.mousewheel.event) return !1;
                        var t = w.container;
                        return "container" !== w.params.mousewheelEventsTarged && (t = e(w.params.mousewheelEventsTarged)), t.off(w.mousewheel.event, c), (w.params.mousewheelControl = !1), !0;
                    }),
                    (w.enableMousewheelControl = function () {
                        if (!w.mousewheel.event) return !1;
                        var t = w.container;
                        return "container" !== w.params.mousewheelEventsTarged && (t = e(w.params.mousewheelEventsTarged)), t.on(w.mousewheel.event, c), (w.params.mousewheelControl = !0), !0;
                    }),
                    (w.parallax = {
                        setTranslate: function () {
                            w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                g(this, w.progress);
                            }),
                                w.slides.each(function () {
                                    var t = e(this);
                                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                        g(this, Math.min(Math.max(t[0].progress, -1), 1));
                                    });
                                });
                        },
                        setTransition: function (t) {
                            void 0 === t && (t = w.params.speed),
                                w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    var i = e(this),
                                        n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                                    0 === t && (n = 0), i.transition(n);
                                });
                        },
                    }),
                    (w.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: w.params.zoomMax },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {},
                        },
                        velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                        getDistanceBetweenTouches: function (e) {
                            if (e.targetTouches.length < 2) return 1;
                            var t = e.targetTouches[0].pageX,
                                i = e.targetTouches[0].pageY,
                                n = e.targetTouches[1].pageX,
                                r = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2));
                        },
                        onGestureStart: function (t) {
                            var i = w.zoom;
                            if (!w.support.gestures) {
                                if ("touchstart" !== t.type || ("touchstart" === t.type && t.targetTouches.length < 2)) return;
                                i.gesture.scaleStart = i.getDistanceBetweenTouches(t);
                            }
                            return (i.gesture.slide && i.gesture.slide.length) ||
                                ((i.gesture.slide = e(this)),
                                0 === i.gesture.slide.length && (i.gesture.slide = w.slides.eq(w.activeIndex)),
                                (i.gesture.image = i.gesture.slide.find("img, svg, canvas")),
                                (i.gesture.imageWrap = i.gesture.image.parent("." + w.params.zoomContainerClass)),
                                (i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax),
                                0 !== i.gesture.imageWrap.length)
                                ? (i.gesture.image.transition(0), void (i.isScaling = !0))
                                : void (i.gesture.image = void 0);
                        },
                        onGestureChange: function (e) {
                            var t = w.zoom;
                            if (!w.support.gestures) {
                                if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                                t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
                            }
                            t.gesture.image &&
                                0 !== t.gesture.image.length &&
                                (w.support.gestures ? (t.scale = e.scale * t.currentScale) : (t.scale = (t.gesture.scaleMove / t.gesture.scaleStart) * t.currentScale),
                                t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, 0.5)),
                                t.scale < w.params.zoomMin && (t.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - t.scale + 1, 0.5)),
                                t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"));
                        },
                        onGestureEnd: function (e) {
                            var t = w.zoom;
                            (!w.support.gestures && ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2))) ||
                                (t.gesture.image &&
                                    0 !== t.gesture.image.length &&
                                    ((t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), w.params.zoomMin)),
                                    t.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                                    (t.currentScale = t.scale),
                                    (t.isScaling = !1),
                                    1 === t.scale && (t.gesture.slide = void 0)));
                        },
                        onTouchStart: function (e, t) {
                            var i = e.zoom;
                            i.gesture.image &&
                                0 !== i.gesture.image.length &&
                                (i.image.isTouched ||
                                    ("android" === e.device.os && t.preventDefault(),
                                    (i.image.isTouched = !0),
                                    (i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
                                    (i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)));
                        },
                        onTouchMove: function (e) {
                            var t = w.zoom;
                            if (t.gesture.image && 0 !== t.gesture.image.length && ((w.allowClick = !1), t.image.isTouched && t.gesture.slide)) {
                                t.image.isMoved ||
                                    ((t.image.width = t.gesture.image[0].offsetWidth),
                                    (t.image.height = t.gesture.image[0].offsetHeight),
                                    (t.image.startX = w.getTranslate(t.gesture.imageWrap[0], "x") || 0),
                                    (t.image.startY = w.getTranslate(t.gesture.imageWrap[0], "y") || 0),
                                    (t.gesture.slideWidth = t.gesture.slide[0].offsetWidth),
                                    (t.gesture.slideHeight = t.gesture.slide[0].offsetHeight),
                                    t.gesture.imageWrap.transition(0),
                                    w.rtl && (t.image.startX = -t.image.startX),
                                    w.rtl && (t.image.startY = -t.image.startY));
                                var i = t.image.width * t.scale,
                                    n = t.image.height * t.scale;
                                if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                    if (
                                        ((t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0)),
                                        (t.image.maxX = -t.image.minX),
                                        (t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0)),
                                        (t.image.maxY = -t.image.minY),
                                        (t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                        (t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                                        !t.image.isMoved && !t.isScaling)
                                    ) {
                                        if (
                                            (w.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x) ||
                                            (Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                                        )
                                            return void (t.image.isTouched = !1);
                                        if (
                                            (!w.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y) ||
                                            (Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                                        )
                                            return void (t.image.isTouched = !1);
                                    }
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        (t.image.isMoved = !0),
                                        (t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX),
                                        (t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY),
                                        t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, 0.8)),
                                        t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, 0.8)),
                                        t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, 0.8)),
                                        t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, 0.8)),
                                        t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                        t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                        t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                                        (t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2),
                                        (t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2),
                                        Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                                        Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                                        (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                        (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                        (t.velocity.prevTime = Date.now()),
                                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
                                }
                            }
                        },
                        onTouchEnd: function (e, t) {
                            var i = e.zoom;
                            if (i.gesture.image && 0 !== i.gesture.image.length) {
                                if (!i.image.isTouched || !i.image.isMoved) return (i.image.isTouched = !1), void (i.image.isMoved = !1);
                                (i.image.isTouched = !1), (i.image.isMoved = !1);
                                var n = 300,
                                    r = 300,
                                    a = i.velocity.x * n,
                                    s = i.image.currentX + a,
                                    o = i.velocity.y * r,
                                    l = i.image.currentY + o;
                                0 !== i.velocity.x && (n = Math.abs((s - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (r = Math.abs((l - i.image.currentY) / i.velocity.y));
                                var u = Math.max(n, r);
                                (i.image.currentX = s), (i.image.currentY = l);
                                var d = i.image.width * i.scale,
                                    c = i.image.height * i.scale;
                                (i.image.minX = Math.min(i.gesture.slideWidth / 2 - d / 2, 0)),
                                    (i.image.maxX = -i.image.minX),
                                    (i.image.minY = Math.min(i.gesture.slideHeight / 2 - c / 2, 0)),
                                    (i.image.maxY = -i.image.minY),
                                    (i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX)),
                                    (i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY)),
                                    i.gesture.imageWrap.transition(u).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)");
                            }
                        },
                        onTransitionEnd: function (e) {
                            var t = e.zoom;
                            t.gesture.slide &&
                                e.previousIndex !== e.activeIndex &&
                                (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                                t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                                (t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0),
                                (t.scale = t.currentScale = 1));
                        },
                        toggleZoom: function (t, i) {
                            var n = t.zoom;
                            if (
                                (n.gesture.slide ||
                                    ((n.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex)),
                                    (n.gesture.image = n.gesture.slide.find("img, svg, canvas")),
                                    (n.gesture.imageWrap = n.gesture.image.parent("." + t.params.zoomContainerClass))),
                                n.gesture.image && 0 !== n.gesture.image.length)
                            ) {
                                var r, a, s, o, l, u, d, c, g, p, h, m, f, _, v, b, y, w;
                                void 0 === n.image.touchesStart.x && i
                                    ? ((r = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX), (a = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY))
                                    : ((r = n.image.touchesStart.x), (a = n.image.touchesStart.y)),
                                    n.scale && 1 !== n.scale
                                        ? ((n.scale = n.currentScale = 1),
                                          n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                                          n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                                          (n.gesture.slide = void 0))
                                        : ((n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax),
                                          i
                                              ? ((y = n.gesture.slide[0].offsetWidth),
                                                (w = n.gesture.slide[0].offsetHeight),
                                                (s = n.gesture.slide.offset().left),
                                                (o = n.gesture.slide.offset().top),
                                                (l = s + y / 2 - r),
                                                (u = o + w / 2 - a),
                                                (g = n.gesture.image[0].offsetWidth),
                                                (p = n.gesture.image[0].offsetHeight),
                                                (h = g * n.scale),
                                                (m = p * n.scale),
                                                (f = Math.min(y / 2 - h / 2, 0)),
                                                (_ = Math.min(w / 2 - m / 2, 0)),
                                                (v = -f),
                                                (b = -_),
                                                (d = l * n.scale),
                                                (c = u * n.scale),
                                                d < f && (d = f),
                                                d > v && (d = v),
                                                c < _ && (c = _),
                                                c > b && (c = b))
                                              : ((d = 0), (c = 0)),
                                          n.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + c + "px,0)"),
                                          n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"));
                            }
                        },
                        attachEvents: function (t) {
                            var i = t ? "off" : "on";
                            if (w.params.zoom) {
                                var n = (w.slides, !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && { passive: !0, capture: !1 });
                                w.support.gestures
                                    ? (w.slides[i]("gesturestart", w.zoom.onGestureStart, n), w.slides[i]("gesturechange", w.zoom.onGestureChange, n), w.slides[i]("gestureend", w.zoom.onGestureEnd, n))
                                    : "touchstart" === w.touchEvents.start &&
                                      (w.slides[i](w.touchEvents.start, w.zoom.onGestureStart, n), w.slides[i](w.touchEvents.move, w.zoom.onGestureChange, n), w.slides[i](w.touchEvents.end, w.zoom.onGestureEnd, n)),
                                    w[i]("touchStart", w.zoom.onTouchStart),
                                    w.slides.each(function (t, n) {
                                        e(n).find("." + w.params.zoomContainerClass).length > 0 && e(n)[i](w.touchEvents.move, w.zoom.onTouchMove);
                                    }),
                                    w[i]("touchEnd", w.zoom.onTouchEnd),
                                    w[i]("transitionEnd", w.zoom.onTransitionEnd),
                                    w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom);
                            }
                        },
                        init: function () {
                            w.zoom.attachEvents();
                        },
                        destroy: function () {
                            w.zoom.attachEvents(!0);
                        },
                    }),
                    (w._plugins = []);
                for (var D in w.plugins) {
                    var R = w.plugins[D](w, w.params[D]);
                    R && w._plugins.push(R);
                }
                return (
                    (w.callPlugins = function (e) {
                        for (var t = 0; t < w._plugins.length; t++) e in w._plugins[t] && w._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    }),
                    (w.emitterEventListeners = {}),
                    (w.emit = function (e) {
                        w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var t;
                        if (w.emitterEventListeners[e]) for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    }),
                    (w.on = function (e, t) {
                        return (e = p(e)), w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []), w.emitterEventListeners[e].push(t), w;
                    }),
                    (w.off = function (e, t) {
                        var i;
                        if (((e = p(e)), void 0 === t)) return (w.emitterEventListeners[e] = []), w;
                        if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
                            for (i = 0; i < w.emitterEventListeners[e].length; i++) w.emitterEventListeners[e][i] === t && w.emitterEventListeners[e].splice(i, 1);
                            return w;
                        }
                    }),
                    (w.once = function (e, t) {
                        e = p(e);
                        var i = function () {
                            t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(e, i);
                        };
                        return w.on(e, i), w;
                    }),
                    (w.a11y = {
                        makeFocusable: function (e) {
                            return e.attr("tabIndex", "0"), e;
                        },
                        addRole: function (e, t) {
                            return e.attr("role", t), e;
                        },
                        addLabel: function (e, t) {
                            return e.attr("aria-label", t), e;
                        },
                        disable: function (e) {
                            return e.attr("aria-disabled", !0), e;
                        },
                        enable: function (e) {
                            return e.attr("aria-disabled", !1), e;
                        },
                        onEnterKey: function (t) {
                            13 === t.keyCode &&
                                (e(t.target).is(w.params.nextButton)
                                    ? (w.onClickNext(t), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage))
                                    : e(t.target).is(w.params.prevButton) && (w.onClickPrev(t), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)),
                                e(t.target).is("." + w.params.bulletClass) && e(t.target)[0].click());
                        },
                        liveRegion: e('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function (e) {
                            var t = w.a11y.liveRegion;
                            0 !== t.length && (t.html(""), t.html(e));
                        },
                        init: function () {
                            w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton), w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)),
                                w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.a11y.makeFocusable(w.prevButton), w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)),
                                e(w.container).append(w.a11y.liveRegion);
                        },
                        initPagination: function () {
                            w.params.pagination &&
                                w.params.paginationClickable &&
                                w.bullets &&
                                w.bullets.length &&
                                w.bullets.each(function () {
                                    var t = e(this);
                                    w.a11y.makeFocusable(t), w.a11y.addRole(t, "button"), w.a11y.addLabel(t, w.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1));
                                });
                        },
                        destroy: function () {
                            w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove();
                        },
                    }),
                    (w.init = function () {
                        w.params.loop && w.createLoop(),
                            w.updateContainerSize(),
                            w.updateSlidesSize(),
                            w.updatePagination(),
                            w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()),
                            "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()),
                            w.params.loop
                                ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit)
                                : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit),
                                  0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), (w.lazy.initialImageLoaded = !0)))),
                            w.attachEvents(),
                            w.params.observer && w.support.observer && w.initObservers(),
                            w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(),
                            w.params.zoom && w.zoom && w.zoom.init(),
                            w.params.autoplay && w.startAutoplay(),
                            w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(),
                            w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(),
                            w.params.hashnavReplaceState && (w.params.replaceState = w.params.hashnavReplaceState),
                            w.params.history && w.history && w.history.init(),
                            w.params.hashnav && w.hashnav && w.hashnav.init(),
                            w.params.a11y && w.a11y && w.a11y.init(),
                            w.emit("onInit", w);
                    }),
                    (w.cleanupStyles = function () {
                        w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),
                            w.wrapper.removeAttr("style"),
                            w.slides &&
                                w.slides.length &&
                                w.slides
                                    .removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" "))
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-column")
                                    .removeAttr("data-swiper-row"),
                            w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass),
                            w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass),
                            w.params.prevButton && e(w.params.prevButton).removeClass(w.params.buttonDisabledClass),
                            w.params.nextButton && e(w.params.nextButton).removeClass(w.params.buttonDisabledClass),
                            w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"));
                    }),
                    (w.destroy = function (e, t) {
                        w.detachEvents(),
                            w.stopAutoplay(),
                            w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(),
                            w.params.loop && w.destroyLoop(),
                            t && w.cleanupStyles(),
                            w.disconnectObservers(),
                            w.params.zoom && w.zoom && w.zoom.destroy(),
                            w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(),
                            w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(),
                            w.params.a11y && w.a11y && w.a11y.destroy(),
                            w.params.history && !w.params.replaceState && window.removeEventListener("popstate", w.history.setHistoryPopState),
                            w.params.hashnav && w.hashnav && w.hashnav.destroy(),
                            w.emit("onDestroy"),
                            e !== !1 && (w = null);
                    }),
                    w.init(),
                    w
                );
            }
        };
    t.prototype = {
        isSafari: (function () {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
            lteIE9: (function () {
                var e = document.createElement("div");
                return (e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->"), 1 === e.getElementsByTagName("i").length;
            })(),
        },
        device: (function () {
            var e = window.navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                i = e.match(/(iPad).*OS\s([\d_]+)/),
                n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return { ios: i || r || n, android: t };
        })(),
        support: {
            touch:
                (window.Modernizr && Modernizr.touch === !0) ||
                (function () {
                    return !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch));
                })(),
            transforms3d:
                (window.Modernizr && Modernizr.csstransforms3d === !0) ||
                (function () {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
                })(),
            flexbox: (function () {
                for (
                    var e = document.createElement("div").style,
                        t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),
                        i = 0;
                    i < t.length;
                    i++
                )
                    if (t[i] in e) return !0;
            })(),
            observer: (function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window;
            })(),
            passiveListener: (function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0;
                        },
                    });
                    window.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            })(),
            gestures: (function () {
                return "ongesturestart" in window;
            })(),
        },
        plugins: {},
    };
    for (
        var i = (function () {
                var e = function (e) {
                        var t = this,
                            i = 0;
                        for (i = 0; i < e.length; i++) t[i] = e[i];
                        return (t.length = e.length), this;
                    },
                    t = function (t, i) {
                        var n = [],
                            r = 0;
                        if (t && !i && t instanceof e) return t;
                        if (t)
                            if ("string" == typeof t) {
                                var a,
                                    s,
                                    o = t.trim();
                                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                    var l = "div";
                                    for (
                                        0 === o.indexOf("<li") && (l = "ul"),
                                            0 === o.indexOf("<tr") && (l = "tbody"),
                                            (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
                                            0 === o.indexOf("<tbody") && (l = "table"),
                                            0 === o.indexOf("<option") && (l = "select"),
                                            s = document.createElement(l),
                                            s.innerHTML = t,
                                            r = 0;
                                        r < s.childNodes.length;
                                        r++
                                    )
                                        n.push(s.childNodes[r]);
                                } else for (a = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], r = 0; r < a.length; r++) a[r] && n.push(a[r]);
                            } else if (t.nodeType || t === window || t === document) n.push(t);
                            else if (t.length > 0 && t[0].nodeType) for (r = 0; r < t.length; r++) n.push(t[r]);
                        return new e(n);
                    };
                return (
                    (e.prototype = {
                        addClass: function (e) {
                            if (void 0 === e) return this;
                            for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
                            return this;
                        },
                        removeClass: function (e) {
                            for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
                            return this;
                        },
                        hasClass: function (e) {
                            return !!this[0] && this[0].classList.contains(e);
                        },
                        toggleClass: function (e) {
                            for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
                            return this;
                        },
                        attr: function (e, t) {
                            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                            for (var i = 0; i < this.length; i++)
                                if (2 === arguments.length) this[i].setAttribute(e, t);
                                else for (var n in e) (this[i][n] = e[n]), this[i].setAttribute(n, e[n]);
                            return this;
                        },
                        removeAttr: function (e) {
                            for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                            return this;
                        },
                        data: function (e, t) {
                            if (void 0 !== t) {
                                for (var i = 0; i < this.length; i++) {
                                    var n = this[i];
                                    n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), (n.dom7ElementDataStorage[e] = t);
                                }
                                return this;
                            }
                            if (this[0]) {
                                var r = this[0].getAttribute("data-" + e);
                                return r ? r : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
                            }
                        },
                        transform: function (e) {
                            for (var t = 0; t < this.length; t++) {
                                var i = this[t].style;
                                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e;
                            }
                            return this;
                        },
                        transition: function (e) {
                            "string" != typeof e && (e += "ms");
                            for (var t = 0; t < this.length; t++) {
                                var i = this[t].style;
                                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e;
                            }
                            return this;
                        },
                        on: function (e, i, n, r) {
                            function a(e) {
                                var r = e.target;
                                if (t(r).is(i)) n.call(r, e);
                                else for (var a = t(r).parents(), s = 0; s < a.length; s++) t(a[s]).is(i) && n.call(a[s], e);
                            }
                            var s,
                                o,
                                l = e.split(" ");
                            for (s = 0; s < this.length; s++)
                                if ("function" == typeof i || i === !1) for ("function" == typeof i && ((n = arguments[1]), (r = arguments[2] || !1)), o = 0; o < l.length; o++) this[s].addEventListener(l[o], n, r);
                                else for (o = 0; o < l.length; o++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners.push({ listener: n, liveListener: a }), this[s].addEventListener(l[o], a, r);
                            return this;
                        },
                        off: function (e, t, i, n) {
                            for (var r = e.split(" "), a = 0; a < r.length; a++)
                                for (var s = 0; s < this.length; s++)
                                    if ("function" == typeof t || t === !1) "function" == typeof t && ((i = arguments[1]), (n = arguments[2] || !1)), this[s].removeEventListener(r[a], i, n);
                                    else if (this[s].dom7LiveListeners)
                                        for (var o = 0; o < this[s].dom7LiveListeners.length; o++) this[s].dom7LiveListeners[o].listener === i && this[s].removeEventListener(r[a], this[s].dom7LiveListeners[o].liveListener, n);
                            return this;
                        },
                        once: function (e, t, i, n) {
                            function r(s) {
                                i(s), a.off(e, t, r, n);
                            }
                            var a = this;
                            "function" == typeof t && ((t = !1), (i = arguments[1]), (n = arguments[2])), a.on(e, t, r, n);
                        },
                        trigger: function (e, t) {
                            for (var i = 0; i < this.length; i++) {
                                var n;
                                try {
                                    n = new window.CustomEvent(e, { detail: t, bubbles: !0, cancelable: !0 });
                                } catch (i) {
                                    (n = document.createEvent("Event")), n.initEvent(e, !0, !0), (n.detail = t);
                                }
                                this[i].dispatchEvent(n);
                            }
                            return this;
                        },
                        transitionEnd: function (e) {
                            function t(a) {
                                if (a.target === this) for (e.call(this, a), i = 0; i < n.length; i++) r.off(n[i], t);
                            }
                            var i,
                                n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                                r = this;
                            if (e) for (i = 0; i < n.length; i++) r.on(n[i], t);
                            return this;
                        },
                        width: function () {
                            return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
                        },
                        outerWidth: function (e) {
                            return this.length > 0 ? (e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth) : null;
                        },
                        height: function () {
                            return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
                        },
                        outerHeight: function (e) {
                            return this.length > 0 ? (e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight) : null;
                        },
                        offset: function () {
                            if (this.length > 0) {
                                var e = this[0],
                                    t = e.getBoundingClientRect(),
                                    i = document.body,
                                    n = e.clientTop || i.clientTop || 0,
                                    r = e.clientLeft || i.clientLeft || 0,
                                    a = window.pageYOffset || e.scrollTop,
                                    s = window.pageXOffset || e.scrollLeft;
                                return { top: t.top + a - n, left: t.left + s - r };
                            }
                            return null;
                        },
                        css: function (e, t) {
                            var i;
                            if (1 === arguments.length) {
                                if ("string" != typeof e) {
                                    for (i = 0; i < this.length; i++) for (var n in e) this[i].style[n] = e[n];
                                    return this;
                                }
                                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
                            }
                            if (2 === arguments.length && "string" == typeof e) {
                                for (i = 0; i < this.length; i++) this[i].style[e] = t;
                                return this;
                            }
                            return this;
                        },
                        each: function (e) {
                            for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                            return this;
                        },
                        html: function (e) {
                            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                            for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                            return this;
                        },
                        text: function (e) {
                            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                            for (var t = 0; t < this.length; t++) this[t].textContent = e;
                            return this;
                        },
                        is: function (i) {
                            if (!this[0]) return !1;
                            var n, r;
                            if ("string" == typeof i) {
                                var a = this[0];
                                if (a === document) return i === document;
                                if (a === window) return i === window;
                                if (a.matches) return a.matches(i);
                                if (a.webkitMatchesSelector) return a.webkitMatchesSelector(i);
                                if (a.mozMatchesSelector) return a.mozMatchesSelector(i);
                                if (a.msMatchesSelector) return a.msMatchesSelector(i);
                                for (n = t(i), r = 0; r < n.length; r++) if (n[r] === this[0]) return !0;
                                return !1;
                            }
                            if (i === document) return this[0] === document;
                            if (i === window) return this[0] === window;
                            if (i.nodeType || i instanceof e) {
                                for (n = i.nodeType ? [i] : i, r = 0; r < n.length; r++) if (n[r] === this[0]) return !0;
                                return !1;
                            }
                            return !1;
                        },
                        index: function () {
                            if (this[0]) {
                                for (var e = this[0], t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && t++;
                                return t;
                            }
                        },
                        eq: function (t) {
                            if (void 0 === t) return this;
                            var i,
                                n = this.length;
                            return t > n - 1 ? new e([]) : t < 0 ? ((i = n + t), new e(i < 0 ? [] : [this[i]])) : new e([this[t]]);
                        },
                        append: function (t) {
                            var i, n;
                            for (i = 0; i < this.length; i++)
                                if ("string" == typeof t) {
                                    var r = document.createElement("div");
                                    for (r.innerHTML = t; r.firstChild; ) this[i].appendChild(r.firstChild);
                                } else if (t instanceof e) for (n = 0; n < t.length; n++) this[i].appendChild(t[n]);
                                else this[i].appendChild(t);
                            return this;
                        },
                        prepend: function (t) {
                            var i, n;
                            for (i = 0; i < this.length; i++)
                                if ("string" == typeof t) {
                                    var r = document.createElement("div");
                                    for (r.innerHTML = t, n = r.childNodes.length - 1; n >= 0; n--) this[i].insertBefore(r.childNodes[n], this[i].childNodes[0]);
                                } else if (t instanceof e) for (n = 0; n < t.length; n++) this[i].insertBefore(t[n], this[i].childNodes[0]);
                                else this[i].insertBefore(t, this[i].childNodes[0]);
                            return this;
                        },
                        insertBefore: function (e) {
                            for (var i = t(e), n = 0; n < this.length; n++)
                                if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0]);
                                else if (i.length > 1) for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r]);
                        },
                        insertAfter: function (e) {
                            for (var i = t(e), n = 0; n < this.length; n++)
                                if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                                else if (i.length > 1) for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r].nextSibling);
                        },
                        next: function (i) {
                            return new e(this.length > 0 ? (i ? (this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : []) : this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : []);
                        },
                        nextAll: function (i) {
                            var n = [],
                                r = this[0];
                            if (!r) return new e([]);
                            for (; r.nextElementSibling; ) {
                                var a = r.nextElementSibling;
                                i ? t(a).is(i) && n.push(a) : n.push(a), (r = a);
                            }
                            return new e(n);
                        },
                        prev: function (i) {
                            return new e(
                                this.length > 0
                                    ? i
                                        ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(i)
                                            ? [this[0].previousElementSibling]
                                            : []
                                        : this[0].previousElementSibling
                                        ? [this[0].previousElementSibling]
                                        : []
                                    : []
                            );
                        },
                        prevAll: function (i) {
                            var n = [],
                                r = this[0];
                            if (!r) return new e([]);
                            for (; r.previousElementSibling; ) {
                                var a = r.previousElementSibling;
                                i ? t(a).is(i) && n.push(a) : n.push(a), (r = a);
                            }
                            return new e(n);
                        },
                        parent: function (e) {
                            for (var i = [], n = 0; n < this.length; n++) e ? t(this[n].parentNode).is(e) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                            return t(t.unique(i));
                        },
                        parents: function (e) {
                            for (var i = [], n = 0; n < this.length; n++) for (var r = this[n].parentNode; r; ) e ? t(r).is(e) && i.push(r) : i.push(r), (r = r.parentNode);
                            return t(t.unique(i));
                        },
                        find: function (t) {
                            for (var i = [], n = 0; n < this.length; n++) for (var r = this[n].querySelectorAll(t), a = 0; a < r.length; a++) i.push(r[a]);
                            return new e(i);
                        },
                        children: function (i) {
                            for (var n = [], r = 0; r < this.length; r++) for (var a = this[r].childNodes, s = 0; s < a.length; s++) i ? 1 === a[s].nodeType && t(a[s]).is(i) && n.push(a[s]) : 1 === a[s].nodeType && n.push(a[s]);
                            return new e(t.unique(n));
                        },
                        remove: function () {
                            for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                            return this;
                        },
                        add: function () {
                            var e,
                                i,
                                n = this;
                            for (e = 0; e < arguments.length; e++) {
                                var r = t(arguments[e]);
                                for (i = 0; i < r.length; i++) (n[n.length] = r[i]), n.length++;
                            }
                            return n;
                        },
                    }),
                    (t.fn = e.prototype),
                    (t.unique = function (e) {
                        for (var t = [], i = 0; i < e.length; i++) t.indexOf(e[i]) === -1 && t.push(e[i]);
                        return t;
                    }),
                    t
                );
            })(),
            n = ["jQuery", "Zepto", "Dom7"],
            r = 0;
        r < n.length;
        r++
    )
        window[n[r]] &&
            (function (e) {
                e.fn.swiper = function (i) {
                    var n;
                    return (
                        e(this).each(function () {
                            var e = new t(this, i);
                            n || (n = e);
                        }),
                        n
                    );
                };
            })(window[n[r]]);
    var a;
    (a = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i),
        a &&
            ("transitionEnd" in a.fn ||
                (a.fn.transitionEnd = function (e) {
                    function t(a) {
                        if (a.target === this) for (e.call(this, a), i = 0; i < n.length; i++) r.off(n[i], t);
                    }
                    var i,
                        n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        r = this;
                    if (e) for (i = 0; i < n.length; i++) r.on(n[i], t);
                    return this;
                }),
            "transform" in a.fn ||
                (a.fn.transform = function (e) {
                    for (var t = 0; t < this.length; t++) {
                        var i = this[t].style;
                        i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e;
                    }
                    return this;
                }),
            "transition" in a.fn ||
                (a.fn.transition = function (e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var i = this[t].style;
                        i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e;
                    }
                    return this;
                }),
            "outerWidth" in a.fn ||
                (a.fn.outerWidth = function (e) {
                    return this.length > 0 ? (e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth) : null;
                })),
        (window.Swiper = t);
})(),
    "undefined" != typeof module
        ? (module.exports = window.Swiper)
        : "function" == typeof define &&
          define.amd &&
          define([], function () {
              "use strict";
              return window.Swiper;
          }),
    !(function (e, t) {
        "use strict";
        if (!t) throw new Error("Filterizr requires jQuery to work.");
        var i = function (e) {
            this.init(e);
        };
        (i.prototype = {
            init: function (e) {
                this.root = { x: 0, y: 0, w: e };
            },
            fit: function (e) {
                var t,
                    i,
                    n,
                    r = e.length,
                    a = r > 0 ? e[0].h : 0;
                for (this.root.h = a, t = 0; t < r; t++) (n = e[t]), (i = this.findNode(this.root, n.w, n.h)) ? (n.fit = this.splitNode(i, n.w, n.h)) : (n.fit = this.growDown(n.w, n.h));
            },
            findNode: function (e, t, i) {
                return e.used ? this.findNode(e.right, t, i) || this.findNode(e.down, t, i) : t <= e.w && i <= e.h ? e : null;
            },
            splitNode: function (e, t, i) {
                return (e.used = !0), (e.down = { x: e.x, y: e.y + i, w: e.w, h: e.h - i }), (e.right = { x: e.x + t, y: e.y, w: e.w - t, h: i }), e;
            },
            growDown: function (e, t) {
                var i;
                return (
                    (this.root = { used: !0, x: 0, y: 0, w: this.root.w, h: this.root.h + t, down: { x: 0, y: this.root.h, w: this.root.w, h: t }, right: this.root }), (i = this.findNode(this.root, e, t)) ? this.splitNode(i, e, t) : null
                );
            },
        }),
            (t.fn.filterizr = function () {
                var e = this,
                    i = arguments;
                if ((e._fltr || (e._fltr = t.fn.filterizr.prototype.init(e, "object" == typeof i[0] ? i[0] : void 0)), "string" == typeof i[0])) {
                    if (i[0].lastIndexOf("_") > -1) throw new Error("Filterizr error: You cannot call private methods");
                    if ("function" != typeof e._fltr[i[0]]) throw new Error("Filterizr error: There is no such function");
                    e._fltr[i[0]](i[1], i[2]);
                }
                return e;
            }),
            (t.fn.filterizr.prototype = {
                init: function (e, i) {
                    var n = t(e).extend(t.fn.filterizr.prototype);
                    return (
                        (n.options = {
                            animationDuration: 0.5,
                            callbacks: { onFilteringStart: function () {}, onFilteringEnd: function () {}, onShufflingStart: function () {}, onShufflingEnd: function () {}, onSortingStart: function () {}, onSortingEnd: function () {} },
                            delay: 0,
                            delayMode: "progressive",
                            easing: "ease-out",
                            filter: "all",
                            filterOutCss: { opacity: 0, transform: "scale(0.5)" },
                            filterInCss: { opacity: 1, transform: "scale(1)" },
                            layout: "sameSize",
                            setupControls: !0,
                        }),
                        0 === arguments.length && (i = n.options),
                        1 === arguments.length && "object" == typeof arguments[0] && (i = arguments[0]),
                        i && n.setOptions(i),
                        n.css({ padding: 0, position: "relative" }),
                        (n._lastCategory = 0),
                        (n._isAnimating = !1),
                        (n._isShuffling = !1),
                        (n._isSorting = !1),
                        (n._mainArray = n._getFiltrItems()),
                        (n._subArrays = n._makeSubarrays()),
                        (n._activeArray = n._getCollectionByFilter(n.options.filter)),
                        (n._toggledCategories = {}),
                        (n._typedText = t("input[data-search]").val() || ""),
                        (n._uID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                            var t = (16 * Math.random()) | 0;
                            return ("x" == e ? t : (3 & t) | 8).toString(16);
                        })),
                        n._setupEvents(),
                        n.options.setupControls && n._setupControls(),
                        n.filter(n.options.filter),
                        n
                    );
                },
                filter: function (e) {
                    var t = this,
                        i = t._getCollectionByFilter(e);
                    (t.options.filter = e), t.trigger("filteringStart"), t._handleFiltering(i), t._isSearchActivated() && t.search(t._typedText);
                },
                toggleFilter: function (e) {
                    var t = this,
                        i = [];
                    t.trigger("filteringStart"),
                        e && (t._toggledCategories[e] ? delete t._toggledCategories[e] : (t._toggledCategories[e] = !0)),
                        t._multifilterModeOn() ? ((i = t._makeMultifilterArray()), t._handleFiltering(i), t._isSearchActivated() && t.search(t._typedText)) : (t.filter("all"), t._isSearchActivated() && t.search(t._typedText));
                },
                search: function (e) {
                    var t = this,
                        i = t._multifilterModeOn() ? t._makeMultifilterArray() : t._getCollectionByFilter(t.options.filter),
                        n = [],
                        r = 0;
                    if (t._isSearchActivated()) for (r = 0; r < i.length; r++) i[r].text().toLowerCase().indexOf(e.toLowerCase()) > -1 && n.push(i[r]);
                    if (n.length > 0) t._handleFiltering(n);
                    else if (t._isSearchActivated()) for (r = 0; r < t._activeArray.length; r++) t._activeArray[r]._filterOut();
                    else t._handleFiltering(i);
                },
                shuffle: function () {
                    var e = this;
                    (e._isAnimating = !0), (e._isShuffling = !0), e.trigger("shufflingStart"), (e._mainArray = e._fisherYatesShuffle(e._mainArray)), (e._subArrays = e._makeSubarrays());
                    var t = e._multifilterModeOn() ? e._makeMultifilterArray() : e._getCollectionByFilter(e.options.filter);
                    e._isSearchActivated() ? e.search(e._typedText) : e._placeItems(t);
                },
                sort: function (e, t) {
                    var i = this;
                    if (((e = e || "domIndex"), (t = t || "asc"), (i._isAnimating = !0), (i._isSorting = !0), i.trigger("sortingStart"), "domIndex" !== e && "sortData" !== e && "w" !== e && "h" !== e))
                        for (var n = 0; n < i._mainArray.length; n++) i._mainArray[n][e] = i._mainArray[n].data(e);
                    i._mainArray.sort(i._comparator(e, t)), (i._subArrays = i._makeSubarrays());
                    var r = i._multifilterModeOn() ? i._makeMultifilterArray() : i._getCollectionByFilter(i.options.filter);
                    i._isSearchActivated() ? i.search(i._typedText) : i._placeItems(r);
                },
                setOptions: function (e) {
                    var t = this,
                        i = 0;
                    for (var n in e) t.options[n] = e[n];
                    if (t._mainArray && (e.animationDuration || e.delay || e.easing || e.delayMode))
                        for (i = 0; i < t._mainArray.length; i++) t._mainArray[i].css("transition", "all " + t.options.animationDuration + "s " + t.options.easing + " " + t._mainArray[i]._calcDelay() + "ms");
                    e.callbacks &&
                        (e.callbacks.onFilteringStart || (t.options.callbacks.onFilteringStart = function () {}),
                        e.callbacks.onFilteringEnd || (t.options.callbacks.onFilteringEnd = function () {}),
                        e.callbacks.onShufflingStart || (t.options.callbacks.onShufflingStart = function () {}),
                        e.callbacks.onShufflingEnd || (t.options.callbacks.onShufflingEnd = function () {}),
                        e.callbacks.onSortingStart || (t.options.callbacks.onSortingStart = function () {}),
                        e.callbacks.onSortingEnd || (t.options.callbacks.onSortingEnd = function () {})),
                        t.options.filterInCss.transform || (t.options.filterInCss.transform = "translate3d(0,0,0)"),
                        t.options.filterOutCss.transform || (t.options.filterOutCss.transform = "translate3d(0,0,0)");
                },
                _getFiltrItems: function () {
                    var e = this,
                        i = t(e.find(".filtr-item")),
                        r = [];
                    return (
                        t.each(i, function (i, a) {
                            var s = t(a).extend(n)._init(i, e);
                            r.push(s);
                        }),
                        r
                    );
                },
                _makeSubarrays: function () {
                    for (var e = this, t = [], i = 0; i < e._lastCategory; i++) t.push([]);
                    for (i = 0; i < e._mainArray.length; i++)
                        if ("object" == typeof e._mainArray[i]._category) for (var n = e._mainArray[i]._category.length, r = 0; r < n; r++) t[e._mainArray[i]._category[r] - 1].push(e._mainArray[i]);
                        else t[e._mainArray[i]._category - 1].push(e._mainArray[i]);
                    return t;
                },
                _makeMultifilterArray: function () {
                    for (var e = this, t = [], i = {}, n = 0; n < e._mainArray.length; n++) {
                        var r = e._mainArray[n],
                            a = !1,
                            s = r.domIndex in i == 0;
                        if (Array.isArray(r._category)) {
                            for (var o = 0; o < r._category.length; o++)
                                if (r._category[o] in e._toggledCategories) {
                                    a = !0;
                                    break;
                                }
                        } else r._category in e._toggledCategories && (a = !0);
                        s && a && ((i[r.domIndex] = !0), t.push(r));
                    }
                    return t;
                },
                _setupControls: function () {
                    var e = this;
                    t("*[data-filter]").click(function () {
                        var i = t(this).data("filter");
                        e.options.filter !== i && e.filter(i);
                    }),
                        t("*[data-multifilter]").click(function () {
                            var i = t(this).data("multifilter");
                            "all" === i ? ((e._toggledCategories = {}), e.filter("all")) : e.toggleFilter(i);
                        }),
                        t("*[data-shuffle]").click(function () {
                            e.shuffle();
                        }),
                        t("*[data-sortAsc]").click(function () {
                            var i = t("*[data-sortOrder]").val();
                            e.sort(i, "asc");
                        }),
                        t("*[data-sortDesc]").click(function () {
                            var i = t("*[data-sortOrder]").val();
                            e.sort(i, "desc");
                        }),
                        t("input[data-search]").keyup(function () {
                            (e._typedText = t(this).val()),
                                e._delayEvent(
                                    function () {
                                        e.search(e._typedText);
                                    },
                                    250,
                                    e._uID
                                );
                        });
                },
                _setupEvents: function () {
                    var i = this;
                    t(e).resize(function () {
                        i._delayEvent(
                            function () {
                                i.trigger("resizeFiltrContainer");
                            },
                            250,
                            i._uID
                        );
                    }),
                        i
                            .on("resizeFiltrContainer", function () {
                                i._multifilterModeOn() ? i.toggleFilter() : i.filter(i.options.filter);
                            })
                            .on("filteringStart", function () {
                                i.options.callbacks.onFilteringStart();
                            })
                            .on("filteringEnd", function () {
                                i.options.callbacks.onFilteringEnd();
                            })
                            .on("shufflingStart", function () {
                                (i._isShuffling = !0), i.options.callbacks.onShufflingStart();
                            })
                            .on("shufflingEnd", function () {
                                i.options.callbacks.onShufflingEnd(), (i._isShuffling = !1);
                            })
                            .on("sortingStart", function () {
                                (i._isSorting = !0), i.options.callbacks.onSortingStart();
                            })
                            .on("sortingEnd", function () {
                                i.options.callbacks.onSortingEnd(), (i._isSorting = !1);
                            });
                },
                _calcItemPositions: function () {
                    var e = this,
                        n = e._activeArray,
                        r = 0,
                        a = Math.round(e.width() / e.find(".filtr-item").outerWidth()),
                        s = 0,
                        o = n[0].outerWidth(),
                        l = 0,
                        u = 0,
                        d = 0,
                        c = 0,
                        g = 0,
                        p = [];
                    if ("packed" === e.options.layout) {
                        t.each(e._activeArray, function (e, t) {
                            t._updateDimensions();
                        });
                        var h = new i(e.outerWidth());
                        for (h.fit(e._activeArray), c = 0; c < n.length; c++) p.push({ left: n[c].fit.x, top: n[c].fit.y });
                        r = h.root.h;
                    }
                    if ("horizontal" === e.options.layout) for (s = 1, c = 1; c <= n.length; c++) (o = n[c - 1].outerWidth()), (l = n[c - 1].outerHeight()), p.push({ left: u, top: d }), (u += o), r < l && (r = l);
                    else if ("vertical" === e.options.layout) {
                        for (c = 1; c <= n.length; c++) (l = n[c - 1].outerHeight()), p.push({ left: u, top: d }), (d += l);
                        r = d;
                    } else if ("sameHeight" === e.options.layout) {
                        s = 1;
                        var m = e.outerWidth();
                        for (c = 1; c <= n.length; c++) {
                            o = n[c - 1].width();
                            var f = n[c - 1].outerWidth(),
                                _ = 0;
                            n[c] && (_ = n[c].width()), p.push({ left: u, top: d }), (g = u + o + _) > m ? ((g = 0), (u = 0), (d += n[0].outerHeight()), s++) : (u += f);
                        }
                        r = s * n[0].outerHeight();
                    } else if ("sameWidth" === e.options.layout) {
                        for (c = 1; c <= n.length; c++) {
                            if ((p.push({ left: u, top: d }), c % a == 0 && s++, (u += o), (d = 0), s > 0)) for (g = s; g > 0; ) (d += n[c - a * g].outerHeight()), g--;
                            c % a == 0 && (u = 0);
                        }
                        for (c = 0; c < a; c++) {
                            for (var v = 0, b = c; n[b]; ) (v += n[b].outerHeight()), (b += a);
                            v > r ? ((r = v), (v = 0)) : (v = 0);
                        }
                    } else if ("sameSize" === e.options.layout) {
                        for (c = 1; c <= n.length; c++) p.push({ left: u, top: d }), (u += o), c % a == 0 && ((d += n[0].outerHeight()), (u = 0));
                        r = (s = Math.ceil(n.length / a)) * n[0].outerHeight();
                    }
                    return e.css("height", r), p;
                },
                _handleFiltering: function (e) {
                    for (var t = this, i = t._getArrayOfUniqueItems(t._activeArray, e), n = 0; n < i.length; n++) i[n]._filterOut();
                    (t._activeArray = e), t._placeItems(e);
                },
                _multifilterModeOn: function () {
                    var e = this;
                    return Object.keys(e._toggledCategories).length > 0;
                },
                _isSearchActivated: function () {
                    return this._typedText.length > 0;
                },
                _placeItems: function (e) {
                    var t = this;
                    (t._isAnimating = !0), (t._itemPositions = t._calcItemPositions());
                    for (var i = 0; i < e.length; i++) e[i]._filterIn(t._itemPositions[i]);
                },
                _getCollectionByFilter: function (e) {
                    var t = this;
                    return "all" === e ? t._mainArray : t._subArrays[e - 1];
                },
                _makeDeepCopy: function (e) {
                    var t = {};
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                _comparator: function (e, t) {
                    return function (i, n) {
                        return "asc" === t ? (i[e] < n[e] ? -1 : i[e] > n[e] ? 1 : 0) : "desc" === t ? (n[e] < i[e] ? -1 : n[e] > i[e] ? 1 : 0) : void 0;
                    };
                },
                _getArrayOfUniqueItems: function (e, t) {
                    var i,
                        n,
                        r = [],
                        a = {},
                        s = t.length;
                    for (i = 0; i < s; i++) a[t[i].domIndex] = !0;
                    for (s = e.length, i = 0; i < s; i++) (n = e[i]).domIndex in a || r.push(n);
                    return r;
                },
                _delayEvent: (function () {
                    var e = {};
                    return function (t, i, n) {
                        if (null === n) throw Error("UniqueID needed");
                        e[n] && clearTimeout(e[n]), (e[n] = setTimeout(t, i));
                    };
                })(),
                _fisherYatesShuffle: function (e) {
                    for (var t, i, n = e.length; n; ) (i = Math.floor(Math.random() * n--)), (t = e[n]), (e[n] = e[i]), (e[i] = t);
                    return e;
                },
            });
        var n = {
            _init: function (e, t) {
                var i = this;
                return (
                    (i._parent = t),
                    (i._category = i._getCategory()),
                    (i._lastPos = {}),
                    (i.domIndex = e),
                    (i.sortData = i.data("sort")),
                    (i.w = 0),
                    (i.h = 0),
                    (i._isFilteredOut = !0),
                    (i._filteringOut = !1),
                    (i._filteringIn = !1),
                    i
                        .css(t.options.filterOutCss)
                        .css({
                            "-webkit-backface-visibility": "hidden",
                            perspective: "1000px",
                            "-webkit-perspective": "1000px",
                            "-webkit-transform-style": "preserve-3d",
                            position: "absolute",
                            transition: "all " + t.options.animationDuration + "s " + t.options.easing + " " + i._calcDelay() + "ms",
                        }),
                    i.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        i._onTransitionEnd();
                    }),
                    i
                );
            },
            _updateDimensions: function () {
                var e = this;
                (e.w = e.outerWidth()), (e.h = e.outerHeight());
            },
            _calcDelay: function () {
                var e = this,
                    t = 0;
                return "progressive" === e._parent.options.delayMode ? (t = e._parent.options.delay * e.domIndex) : e.domIndex % 2 == 0 && (t = e._parent.options.delay), t;
            },
            _getCategory: function () {
                var e = this,
                    t = e.data("category");
                if ("string" == typeof t) {
                    t = t.split(", ");
                    for (var i = 0; i < t.length; i++) {
                        if (isNaN(parseInt(t[i]))) throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");
                        parseInt(t[i]) > e._parent._lastCategory && (e._parent._lastCategory = parseInt(t[i]));
                    }
                } else t > e._parent._lastCategory && (e._parent._lastCategory = t);
                return t;
            },
            _onTransitionEnd: function () {
                var e = this;
                e._filteringOut ? (t(e).addClass("filteredOut"), (e._isFilteredOut = !0), (e._filteringOut = !1)) : e._filteringIn && ((e._isFilteredOut = !1), (e._filteringIn = !1)),
                    e._parent._isAnimating && (e._parent._isShuffling ? e._parent.trigger("shufflingEnd") : e._parent._isSorting ? e._parent.trigger("sortingEnd") : e._parent.trigger("filteringEnd"), (e._parent._isAnimating = !1));
            },
            _filterOut: function () {
                var e = this,
                    t = e._parent._makeDeepCopy(e._parent.options.filterOutCss);
                (t.transform += " translate3d(" + e._lastPos.left + "px," + e._lastPos.top + "px, 0)"), e.css(t), e.css("pointer-events", "none"), (e._filteringOut = !0);
            },
            _filterIn: function (e) {
                var i = this,
                    n = i._parent._makeDeepCopy(i._parent.options.filterInCss);
                t(i).removeClass("filteredOut"), (i._filteringIn = !0), (i._lastPos = e), i.css("pointer-events", "auto"), (n.transform += " translate3d(" + e.left + "px," + e.top + "px, 0)"), i.css(n);
            },
        };
    })(this, jQuery);
var $jscomp$this = this;
!(function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.anime = t());
})(this, function () {
    function e(e) {
        if (!L.col(e))
            try {
                return document.querySelectorAll(e);
            } catch (e) {}
    }
    function t(e) {
        return e.reduce(function (e, i) {
            return e.concat(L.arr(i) ? t(i) : i);
        }, []);
    }
    function i(t) {
        return L.arr(t) ? t : (L.str(t) && (t = e(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
    }
    function n(e, t) {
        return e.some(function (e) {
            return e === t;
        });
    }
    function r(e) {
        var t,
            i = {};
        for (t in e) i[t] = e[t];
        return i;
    }
    function a(e, t) {
        var i,
            n = r(e);
        for (i in e) n[i] = t.hasOwnProperty(i) ? t[i] : e[i];
        return n;
    }
    function s(e, t) {
        var i,
            n = r(e);
        for (i in t) n[i] = L.und(e[i]) ? t[i] : e[i];
        return n;
    }
    function o(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
            return t + t + i + i + n + n;
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        e = parseInt(t[1], 16);
        var i = parseInt(t[2], 16),
            t = parseInt(t[3], 16);
        return "rgb(" + e + "," + i + "," + t + ")";
    }
    function l(e) {
        function t(e, t, i) {
            return 0 > i && (i += 1), 1 < i && --i, i < 1 / 6 ? e + 6 * (t - e) * i : 0.5 > i ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
        }
        var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e);
        e = parseInt(i[1]) / 360;
        var n = parseInt(i[2]) / 100,
            i = parseInt(i[3]) / 100;
        if (0 == n) n = i = e = i;
        else {
            var r = 0.5 > i ? i * (1 + n) : i + n - i * n,
                a = 2 * i - r,
                n = t(a, r, e + 1 / 3),
                i = t(a, r, e);
            e = t(a, r, e - 1 / 3);
        }
        return "rgb(" + 255 * n + "," + 255 * i + "," + 255 * e + ")";
    }
    function u(e) {
        if ((e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(e))) return e[2];
    }
    function d(e) {
        return -1 < e.indexOf("translate") ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0;
    }
    function c(e, t) {
        return L.fnc(e) ? e(t.target, t.id, t.total) : e;
    }
    function g(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
    }
    function p(e, t) {
        return L.dom(e) && n(k, t) ? "transform" : L.dom(e) && (e.getAttribute(t) || (L.svg(e) && e[t])) ? "attribute" : L.dom(e) && "transform" !== t && g(e, t) ? "css" : null != e[t] ? "object" : void 0;
    }
    function h(e, t) {
        var i = d(t),
            i = -1 < t.indexOf("scale") ? 1 : 0 + i;
        if (((e = e.style.transform), !e)) return i;
        for (var n = [], r = [], a = [], s = /(\w+)\((.+?)\)/g; (n = s.exec(e)); ) r.push(n[1]), a.push(n[2]);
        return (
            (e = a.filter(function (e, i) {
                return r[i] === t;
            })),
            e.length ? e[0] : i
        );
    }
    function m(e, t) {
        switch (p(e, t)) {
            case "transform":
                return h(e, t);
            case "css":
                return g(e, t);
            case "attribute":
                return e.getAttribute(t);
        }
        return e[t] || 0;
    }
    function f(e, t) {
        var i = /^(\*=|\+=|-=)/.exec(e);
        if (!i) return e;
        switch (((t = parseFloat(t)), (e = parseFloat(e.replace(i[0], ""))), i[0][0])) {
            case "+":
                return t + e;
            case "-":
                return t - e;
            case "*":
                return t * e;
        }
    }
    function _(e) {
        return L.obj(e) && e.hasOwnProperty("totalLength");
    }
    function v(e, t) {
        function i(i) {
            return (i = void 0 === i ? 0 : i), e.el.getPointAtLength(1 <= t + i ? t + i : 0);
        }
        var n = i(),
            r = i(-1),
            a = i(1);
        switch (e.property) {
            case "x":
                return n.x;
            case "y":
                return n.y;
            case "angle":
                return (180 * Math.atan2(a.y - r.y, a.x - r.x)) / Math.PI;
        }
    }
    function b(e, t) {
        var i = /-?\d*\.?\d+/g;
        if (((e = _(e) ? e.totalLength : e), L.col(e))) t = L.rgb(e) ? e : L.hex(e) ? o(e) : L.hsl(e) ? l(e) : void 0;
        else {
            var n = u(e);
            (e = n ? e.substr(0, e.length - n.length) : e), (t = t ? e + t : e);
        }
        return (t += ""), { original: t, numbers: t.match(i) ? t.match(i).map(Number) : [0], strings: t.split(i) };
    }
    function y(e, t) {
        return t.reduce(function (t, i, n) {
            return t + e[n - 1] + i;
        });
    }
    function w(e) {
        return (e ? t(L.arr(e) ? e.map(i) : i(e)) : []).filter(function (e, t, i) {
            return i.indexOf(e) === t;
        });
    }
    function T(e) {
        var t = w(e);
        return t.map(function (e, i) {
            return { target: e, id: i, total: t.length };
        });
    }
    function x(e, t) {
        var n = r(t);
        if (L.arr(e)) {
            var a = e.length;
            2 !== a || L.obj(e[0]) ? L.fnc(t.duration) || (n.duration = t.duration / a) : (e = { value: e });
        }
        return i(e)
            .map(function (e, i) {
                return (i = i ? 0 : t.delay), (e = L.obj(e) && !_(e) ? e : { value: e }), L.und(e.delay) && (e.delay = i), e;
            })
            .map(function (e) {
                return s(e, n);
            });
    }
    function S(e, t) {
        var i,
            n = {};
        for (i in e) {
            var r = c(e[i], t);
            L.arr(r) &&
                ((r = r.map(function (e) {
                    return c(e, t);
                })),
                1 === r.length && (r = r[0])),
                (n[i] = r);
        }
        return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
    }
    function I(e) {
        return L.arr(e) ? H.apply(this, e) : N[e];
    }
    function E(e, t) {
        var i;
        return e.tweens.map(function (n) {
            n = S(n, t);
            var r = n.value,
                a = m(t.target, e.name),
                s = i ? i.to.original : a,
                s = L.arr(r) ? r[0] : s,
                o = f(L.arr(r) ? r[1] : r, s),
                a = u(o) || u(s) || u(a);
            return (
                (n.isPath = _(r)),
                (n.from = b(s, a)),
                (n.to = b(o, a)),
                (n.start = i ? i.end : e.offset),
                (n.end = n.start + n.delay + n.duration),
                (n.easing = I(n.easing)),
                (n.elasticity = (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3),
                L.col(n.from.original) && (n.round = 1),
                (i = n)
            );
        });
    }
    function P(e, i) {
        return t(
            e.map(function (e) {
                return i.map(function (t) {
                    var i = p(e.target, t.name);
                    if (i) {
                        var n = E(t, e);
                        t = { type: i, property: t.name, animatable: e, tweens: n, duration: n[n.length - 1].end, delay: n[0].delay };
                    } else t = void 0;
                    return t;
                });
            })
        ).filter(function (e) {
            return !L.und(e);
        });
    }
    function C(e, t, i) {
        var n = "delay" === e ? Math.min : Math.max;
        return t.length
            ? n.apply(
                  Math,
                  t.map(function (t) {
                      return t[e];
                  })
              )
            : i[e];
    }
    function j(e) {
        var t,
            i = a(z, e),
            n = a(O, e),
            r = T(e.targets),
            o = [],
            l = s(i, n);
        for (t in e) l.hasOwnProperty(t) || "targets" === t || o.push({ name: t, offset: l.offset, tweens: x(e[t], n) });
        return (e = P(r, o)), s(i, { children: [], animatables: r, animations: e, duration: C("duration", e, n), delay: C("delay", e, n) });
    }
    function A(e) {
        function t() {
            return (
                window.Promise &&
                new Promise(function (e) {
                    return (d = e);
                })
            );
        }
        function i(e) {
            return p.reversed ? p.duration - e : e;
        }
        function n(e) {
            for (var t = 0, i = {}, n = p.animations, r = {}; t < n.length; ) {
                var a = n[t],
                    s = a.animatable,
                    o = a.tweens;
                (r.tween =
                    o.filter(function (t) {
                        return e < t.end;
                    })[0] || o[o.length - 1]),
                    (r.isPath$1 = r.tween.isPath),
                    (r.round = r.tween.round),
                    (r.eased = r.tween.easing(Math.min(Math.max(e - r.tween.start - r.tween.delay, 0), r.tween.duration) / r.tween.duration, r.tween.elasticity)),
                    (o = y(
                        r.tween.to.numbers.map(
                            (function (e) {
                                return function (t, i) {
                                    return (i = e.isPath$1 ? 0 : e.tween.from.numbers[i]), (t = i + e.eased * (t - i)), e.isPath$1 && (t = v(e.tween.value, t)), e.round && (t = Math.round(t * e.round) / e.round), t;
                                };
                            })(r)
                        ),
                        r.tween.to.strings
                    )),
                    D[a.type](s.target, a.property, o, i, s.id),
                    (a.currentValue = o),
                    t++,
                    (r = { isPath$1: r.isPath$1, tween: r.tween, eased: r.eased, round: r.round });
            }
            if (i) for (var l in i) M || (M = g(document.body, "transform") ? "transform" : "-webkit-transform"), (p.animatables[l].target.style[M] = i[l].join(" "));
            (p.currentTime = e), (p.progress = (e / p.duration) * 100);
        }
        function r(e) {
            p[e] && p[e](p);
        }
        function a() {
            p.remaining && !0 !== p.remaining && p.remaining--;
        }
        function s(e) {
            var s = p.duration,
                g = p.offset,
                h = p.delay,
                m = p.currentTime,
                f = p.reversed,
                _ = i(e),
                _ = Math.min(Math.max(_, 0), s);
            if (p.children) {
                var v = p.children;
                if (_ >= p.currentTime) for (var b = 0; b < v.length; b++) v[b].seek(_);
                else for (b = v.length; b--; ) v[b].seek(_);
            }
            _ > g && _ < s ? (n(_), !p.began && _ >= h && ((p.began = !0), r("begin")), r("run")) : (_ <= g && 0 !== m && (n(0), f && a()), _ >= s && m !== s && (n(s), f || a())),
                e >= s && (p.remaining ? ((l = o), "alternate" === p.direction && (p.reversed = !p.reversed)) : (p.pause(), "Promise" in window && (d(), (c = t())), p.completed || ((p.completed = !0), r("complete"))), (u = 0)),
                r("update");
        }
        e = void 0 === e ? {} : e;
        var o,
            l,
            u = 0,
            d = null,
            c = t(),
            p = j(e);
        return (
            (p.reset = function () {
                var e = p.direction,
                    t = p.loop;
                for (p.currentTime = 0, p.progress = 0, p.paused = !0, p.began = !1, p.completed = !1, p.reversed = "reverse" === e, p.remaining = "alternate" === e && 1 === t ? 2 : t, e = p.children.length; e--; )
                    (t = p.children[e]), t.seek(t.offset), t.reset();
            }),
            (p.tick = function (e) {
                (o = e), l || (l = o), s((u + o - l) * A.speed);
            }),
            (p.seek = function (e) {
                s(i(e));
            }),
            (p.pause = function () {
                var e = R.indexOf(p);
                -1 < e && R.splice(e, 1), (p.paused = !0);
            }),
            (p.play = function () {
                p.paused && ((p.paused = !1), (l = 0), (u = i(p.currentTime)), R.push(p), G || B());
            }),
            (p.reverse = function () {
                (p.reversed = !p.reversed), (l = 0), (u = i(p.currentTime));
            }),
            (p.restart = function () {
                p.pause(), p.reset(), p.play();
            }),
            (p.finished = c),
            p.reset(),
            p.autoplay && p.play(),
            p
        );
    }
    var M,
        z = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
        O = { duration: 1e3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
        k = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
        L = {
            arr: function (e) {
                return Array.isArray(e);
            },
            obj: function (e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object");
            },
            svg: function (e) {
                return e instanceof SVGElement;
            },
            dom: function (e) {
                return e.nodeType || L.svg(e);
            },
            str: function (e) {
                return "string" == typeof e;
            },
            fnc: function (e) {
                return "function" == typeof e;
            },
            und: function (e) {
                return "undefined" == typeof e;
            },
            hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
            },
            rgb: function (e) {
                return /^rgb/.test(e);
            },
            hsl: function (e) {
                return /^hsl/.test(e);
            },
            col: function (e) {
                return L.hex(e) || L.rgb(e) || L.hsl(e);
            },
        },
        H = (function () {
            function e(e, t, i) {
                return (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
            }
            return function (t, i, n, r) {
                if (0 <= t && 1 >= t && 0 <= n && 1 >= n) {
                    var a = new Float32Array(11);
                    if (t !== i || n !== r) for (var s = 0; 11 > s; ++s) a[s] = e(0.1 * s, t, n);
                    return function (s) {
                        if (t === i && n === r) return s;
                        if (0 === s) return 0;
                        if (1 === s) return 1;
                        for (var o = 0, l = 1; 10 !== l && a[l] <= s; ++l) o += 0.1;
                        --l;
                        var l = o + ((s - a[l]) / (a[l + 1] - a[l])) * 0.1,
                            u = 3 * (1 - 3 * n + 3 * t) * l * l + 2 * (3 * n - 6 * t) * l + 3 * t;
                        if (0.001 <= u) {
                            for (o = 0; 4 > o && ((u = 3 * (1 - 3 * n + 3 * t) * l * l + 2 * (3 * n - 6 * t) * l + 3 * t), 0 !== u); ++o) var d = e(l, t, n) - s, l = l - d / u;
                            s = l;
                        } else if (0 === u) s = l;
                        else {
                            var l = o,
                                o = o + 0.1,
                                c = 0;
                            do (d = l + (o - l) / 2), (u = e(d, t, n) - s), 0 < u ? (o = d) : (l = d);
                            while (1e-7 < Math.abs(u) && 10 > ++c);
                            s = d;
                        }
                        return e(s, i, r);
                    };
                }
            };
        })(),
        N = (function () {
            function e(e, t) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin((2 * (e - 1 - (t / (2 * Math.PI)) * Math.asin(1)) * Math.PI) / t);
            }
            var t,
                i = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                n = {
                    In: [
                        [0.55, 0.085, 0.68, 0.53],
                        [0.55, 0.055, 0.675, 0.19],
                        [0.895, 0.03, 0.685, 0.22],
                        [0.755, 0.05, 0.855, 0.06],
                        [0.47, 0, 0.745, 0.715],
                        [0.95, 0.05, 0.795, 0.035],
                        [0.6, 0.04, 0.98, 0.335],
                        [0.6, -0.28, 0.735, 0.045],
                        e,
                    ],
                    Out: [
                        [0.25, 0.46, 0.45, 0.94],
                        [0.215, 0.61, 0.355, 1],
                        [0.165, 0.84, 0.44, 1],
                        [0.23, 1, 0.32, 1],
                        [0.39, 0.575, 0.565, 1],
                        [0.19, 1, 0.22, 1],
                        [0.075, 0.82, 0.165, 1],
                        [0.175, 0.885, 0.32, 1.275],
                        function (t, i) {
                            return 1 - e(1 - t, i);
                        },
                    ],
                    InOut: [
                        [0.455, 0.03, 0.515, 0.955],
                        [0.645, 0.045, 0.355, 1],
                        [0.77, 0, 0.175, 1],
                        [0.86, 0, 0.07, 1],
                        [0.445, 0.05, 0.55, 0.95],
                        [1, 0, 0, 1],
                        [0.785, 0.135, 0.15, 0.86],
                        [0.68, -0.55, 0.265, 1.55],
                        function (t, i) {
                            return 0.5 > t ? e(2 * t, i) / 2 : 1 - e(-2 * t + 2, i) / 2;
                        },
                    ],
                },
                r = { linear: H(0.25, 0.25, 0.75, 0.75) },
                a = {};
            for (t in n)
                (a.type = t),
                    n[a.type].forEach(
                        (function (e) {
                            return function (t, n) {
                                r["ease" + e.type + i[n]] = L.fnc(t) ? t : H.apply($jscomp$this, t);
                            };
                        })(a)
                    ),
                    (a = { type: a.type });
            return r;
        })(),
        D = {
            css: function (e, t, i) {
                return (e.style[t] = i);
            },
            attribute: function (e, t, i) {
                return e.setAttribute(t, i);
            },
            object: function (e, t, i) {
                return (e[t] = i);
            },
            transform: function (e, t, i, n, r) {
                n[r] || (n[r] = []), n[r].push(t + "(" + i + ")");
            },
        },
        R = [],
        G = 0,
        B = (function () {
            function e() {
                G = requestAnimationFrame(t);
            }
            function t(t) {
                var i = R.length;
                if (i) {
                    for (var n = 0; n < i; ) R[n] && R[n].tick(t), n++;
                    e();
                } else cancelAnimationFrame(G), (G = 0);
            }
            return e;
        })();
    return (
        (A.version = "2.0.2"),
        (A.speed = 1),
        (A.running = R),
        (A.remove = function (e) {
            e = w(e);
            for (var t = R.length; t--; ) for (var i = R[t], r = i.animations, a = r.length; a--; ) n(e, r[a].animatable.target) && (r.splice(a, 1), r.length || i.pause());
        }),
        (A.getValue = m),
        (A.path = function (t, i) {
            var n = L.str(t) ? e(t)[0] : t,
                r = i || 100;
            return function (e) {
                return { el: n, property: e, totalLength: n.getTotalLength() * (r / 100) };
            };
        }),
        (A.setDashoffset = function (e) {
            var t = e.getTotalLength();
            return e.setAttribute("stroke-dasharray", t), t;
        }),
        (A.bezier = H),
        (A.easings = N),
        (A.timeline = function (e) {
            var t = A(e);
            return (
                t.pause(),
                (t.duration = 0),
                (t.add = function (e) {
                    return (
                        t.children.forEach(function (e) {
                            (e.began = !0), (e.completed = !0);
                        }),
                        i(e).forEach(function (e) {
                            var i = t.duration,
                                n = e.offset;
                            (e.autoplay = !1), (e.offset = L.und(n) ? i : f(n, i)), t.seek(e.offset), (e = A(e)), e.duration > i && (t.duration = e.duration), (e.began = !0), t.children.push(e);
                        }),
                        t.reset(),
                        t.seek(0),
                        t.autoplay && t.restart(),
                        t
                    );
                }),
                t
            );
        }),
        (A.random = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
        }),
        A
    );
});
var g_ugFunctions = new UGFunctions();
!(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? (module.exports = e) : e(jQuery);
})(function (e) {
    function t(t) {
        var s = t || window.event,
            o = l.call(arguments, 1),
            u = 0,
            d = 0,
            c = 0,
            g = 0;
        if (
            ((t = e.event.fix(s)),
            (t.type = "mousewheel"),
            "detail" in s && (c = -1 * s.detail),
            "wheelDelta" in s && (c = s.wheelDelta),
            "wheelDeltaY" in s && (c = s.wheelDeltaY),
            "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX),
            "axis" in s && s.axis === s.HORIZONTAL_AXIS && ((d = -1 * c), (c = 0)),
            (u = 0 === c ? d : c),
            "deltaY" in s && ((c = -1 * s.deltaY), (u = c)),
            "deltaX" in s && ((d = s.deltaX), 0 === c && (u = -1 * d)),
            0 !== c || 0 !== d)
        ) {
            if (1 === s.deltaMode) {
                var p = e.data(this, "mousewheel-line-height");
                (u *= p), (c *= p), (d *= p);
            } else if (2 === s.deltaMode) {
                var h = e.data(this, "mousewheel-page-height");
                (u *= h), (c *= h), (d *= h);
            }
            return (
                (g = Math.max(Math.abs(c), Math.abs(d))),
                (!a || a > g) && ((a = g), n(s, g) && (a /= 40)),
                n(s, g) && ((u /= 40), (d /= 40), (c /= 40)),
                (u = Math[u >= 1 ? "floor" : "ceil"](u / a)),
                (d = Math[d >= 1 ? "floor" : "ceil"](d / a)),
                (c = Math[c >= 1 ? "floor" : "ceil"](c / a)),
                (t.deltaX = d),
                (t.deltaY = c),
                (t.deltaFactor = a),
                (t.deltaMode = 0),
                o.unshift(t, u, d, c),
                r && clearTimeout(r),
                (r = setTimeout(i, 200)),
                (e.event.dispatch || e.event.handle).apply(this, o)
            );
        }
    }
    function i() {
        a = null;
    }
    function n(e, t) {
        return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0;
    }
    var r,
        a,
        s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks) for (var u = s.length; u; ) e.event.fixHooks[s[--u]] = e.event.mouseHooks;
    var d = (e.event.special.mousewheel = {
        version: "3.1.9",
        setup: function () {
            if (this.addEventListener) for (var i = o.length; i; ) this.addEventListener(o[--i], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this));
        },
        teardown: function () {
            if (this.removeEventListener) for (var e = o.length; e; ) this.removeEventListener(o[--e], t, !1);
            else this.onmousewheel = null;
        },
        getLineHeight: function (t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10);
        },
        getPageHeight: function (t) {
            return e(t).height();
        },
        settings: { adjustOldDeltas: !0 },
    });
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e);
        },
    });
}),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (t) {
                  return e(t);
              })
            : "object" == typeof module && "object" == typeof module.exports
            ? (exports = e(require("jquery")))
            : e(jQuery);
    })(function (e) {
        function t(e) {
            var t = 7.5625,
                i = 2.75;
            return 1 / i > e ? t * e * e : 2 / i > e ? t * (e -= 1.5 / i) * e + 0.75 : 2.5 / i > e ? t * (e -= 2.25 / i) * e + 0.9375 : t * (e -= 2.625 / i) * e + 0.984375;
        }
        e.easing.jswing = e.easing.swing;
        var i = Math.pow,
            n = Math.sqrt,
            r = Math.sin,
            a = Math.cos,
            s = Math.PI,
            o = 1.70158,
            l = 1.525 * o,
            u = o + 1,
            d = (2 * s) / 3,
            c = (2 * s) / 4.5;
        e.extend(e.easing, {
            def: "easeOutQuad",
            swing: function (t) {
                return e.easing[e.easing.def](t);
            },
            easeInQuad: function (e) {
                return e * e;
            },
            easeOutQuad: function (e) {
                return 1 - (1 - e) * (1 - e);
            },
            easeInOutQuad: function (e) {
                return 0.5 > e ? 2 * e * e : 1 - i(-2 * e + 2, 2) / 2;
            },
            easeInCubic: function (e) {
                return e * e * e;
            },
            easeOutCubic: function (e) {
                return 1 - i(1 - e, 3);
            },
            easeInOutCubic: function (e) {
                return 0.5 > e ? 4 * e * e * e : 1 - i(-2 * e + 2, 3) / 2;
            },
            easeInQuart: function (e) {
                return e * e * e * e;
            },
            easeOutQuart: function (e) {
                return 1 - i(1 - e, 4);
            },
            easeInOutQuart: function (e) {
                return 0.5 > e ? 8 * e * e * e * e : 1 - i(-2 * e + 2, 4) / 2;
            },
            easeInQuint: function (e) {
                return e * e * e * e * e;
            },
            easeOutQuint: function (e) {
                return 1 - i(1 - e, 5);
            },
            easeInOutQuint: function (e) {
                return 0.5 > e ? 16 * e * e * e * e * e : 1 - i(-2 * e + 2, 5) / 2;
            },
            easeInSine: function (e) {
                return 1 - a((e * s) / 2);
            },
            easeOutSine: function (e) {
                return r((e * s) / 2);
            },
            easeInOutSine: function (e) {
                return -(a(s * e) - 1) / 2;
            },
            easeInExpo: function (e) {
                return 0 === e ? 0 : i(2, 10 * e - 10);
            },
            easeOutExpo: function (e) {
                return 1 === e ? 1 : 1 - i(2, -10 * e);
            },
            easeInOutExpo: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 0.5 > e ? i(2, 20 * e - 10) / 2 : (2 - i(2, -20 * e + 10)) / 2;
            },
            easeInCirc: function (e) {
                return 1 - n(1 - i(e, 2));
            },
            easeOutCirc: function (e) {
                return n(1 - i(e - 1, 2));
            },
            easeInOutCirc: function (e) {
                return 0.5 > e ? (1 - n(1 - i(2 * e, 2))) / 2 : (n(1 - i(-2 * e + 2, 2)) + 1) / 2;
            },
            easeInElastic: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : -i(2, 10 * e - 10) * r((10 * e - 10.75) * d);
            },
            easeOutElastic: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : i(2, -10 * e) * r((10 * e - 0.75) * d) + 1;
            },
            easeInOutElastic: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 0.5 > e ? -(i(2, 20 * e - 10) * r((20 * e - 11.125) * c)) / 2 : (i(2, -20 * e + 10) * r((20 * e - 11.125) * c)) / 2 + 1;
            },
            easeInBack: function (e) {
                return u * e * e * e - o * e * e;
            },
            easeOutBack: function (e) {
                return 1 + u * i(e - 1, 3) + o * i(e - 1, 2);
            },
            easeInOutBack: function (e) {
                return 0.5 > e ? (i(2 * e, 2) * (2 * (l + 1) * e - l)) / 2 : (i(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2;
            },
            easeInBounce: function (e) {
                return 1 - t(1 - e);
            },
            easeOutBounce: t,
            easeInOutBounce: function (e) {
                return 0.5 > e ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
            },
        });
    }),
    !(function (e, t) {
        function i(e, t, i) {
            var n = c[t.type] || {};
            return null == e ? (i || !t.def ? null : t.def) : ((e = n.floor ? ~~e : parseFloat(e)), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e);
        }
        function n(t) {
            var i = u(),
                n = (i._rgba = []);
            return (
                (t = t.toLowerCase()),
                h(l, function (e, r) {
                    var a,
                        s = r.re.exec(t),
                        o = s && r.parse(s),
                        l = r.space || "rgba";
                    return o ? ((a = i[l](o)), (i[d[l].cache] = a[d[l].cache]), (n = i._rgba = a._rgba), !1) : void 0;
                }),
                n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), i) : a[t]
            );
        }
        function r(e, t, i) {
            return (i = (i + 1) % 1), 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e;
        }
        if ("undefined" == typeof e.cssHooks) return !1;
        var a,
            s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            o = /^([\-+])=\s*(\d+\.?\d*)/,
            l = [
                {
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [e[1], e[2], e[3], e[4]];
                    },
                },
                {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
                    },
                },
                {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
                    },
                },
                {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
                    },
                },
                {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]];
                    },
                },
            ],
            u = (e.Color = function (t, i, n, r) {
                return new e.Color.fn.parse(t, i, n, r);
            }),
            d = {
                rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } },
                hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } },
            },
            c = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
            g = (u.support = {}),
            p = e("<p>")[0],
            h = e.each;
        (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
            (g.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
            h(d, function (e, t) {
                (t.cache = "_" + e), (t.props.alpha = { idx: 3, type: "percent", def: 1 });
            }),
            (u.fn = e.extend(u.prototype, {
                parse: function (r, s, o, l) {
                    if (r === t) return (this._rgba = [null, null, null, null]), this;
                    (r.jquery || r.nodeType) && ((r = e(r).css(s)), (s = t));
                    var c = this,
                        g = e.type(r),
                        p = (this._rgba = []);
                    return (
                        s !== t && ((r = [r, s, o, l]), (g = "array")),
                        "string" === g
                            ? this.parse(n(r) || a._default)
                            : "array" === g
                            ? (h(d.rgba.props, function (e, t) {
                                  p[t.idx] = i(r[t.idx], t);
                              }),
                              this)
                            : "object" === g
                            ? (r instanceof u
                                  ? h(d, function (e, t) {
                                        r[t.cache] && (c[t.cache] = r[t.cache].slice());
                                    })
                                  : h(d, function (t, n) {
                                        var a = n.cache;
                                        h(n.props, function (e, t) {
                                            if (!c[a] && n.to) {
                                                if ("alpha" === e || null == r[e]) return;
                                                c[a] = n.to(c._rgba);
                                            }
                                            c[a][t.idx] = i(r[e], t, !0);
                                        }),
                                            c[a] && e.inArray(null, c[a].slice(0, 3)) < 0 && ((c[a][3] = 1), n.from && (c._rgba = n.from(c[a])));
                                    }),
                              this)
                            : void 0
                    );
                },
                is: function (e) {
                    var t = u(e),
                        i = !0,
                        n = this;
                    return (
                        h(d, function (e, r) {
                            var a,
                                s = t[r.cache];
                            return (
                                s &&
                                    ((a = n[r.cache] || (r.to && r.to(n._rgba)) || []),
                                    h(r.props, function (e, t) {
                                        return null != s[t.idx] ? (i = s[t.idx] === a[t.idx]) : void 0;
                                    })),
                                i
                            );
                        }),
                        i
                    );
                },
                _space: function () {
                    var e = [],
                        t = this;
                    return (
                        h(d, function (i, n) {
                            t[n.cache] && e.push(i);
                        }),
                        e.pop()
                    );
                },
                transition: function (e, t) {
                    var n = u(e),
                        r = n._space(),
                        a = d[r],
                        s = 0 === this.alpha() ? u("transparent") : this,
                        o = s[a.cache] || a.to(s._rgba),
                        l = o.slice();
                    return (
                        (n = n[a.cache]),
                        h(a.props, function (e, r) {
                            var a = r.idx,
                                s = o[a],
                                u = n[a],
                                d = c[r.type] || {};
                            null !== u && (null === s ? (l[a] = u) : (d.mod && (u - s > d.mod / 2 ? (s += d.mod) : s - u > d.mod / 2 && (s -= d.mod)), (l[a] = i((u - s) * t + s, r))));
                        }),
                        this[r](l)
                    );
                },
                blend: function (t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        r = u(t)._rgba;
                    return u(
                        e.map(i, function (e, t) {
                            return (1 - n) * r[t] + n * e;
                        })
                    );
                },
                toRgbaString: function () {
                    var t = "rgba(",
                        i = e.map(this._rgba, function (e, t) {
                            return null == e ? (t > 2 ? 1 : 0) : e;
                        });
                    return 1 === i[3] && (i.pop(), (t = "rgb(")), t + i.join() + ")";
                },
                toHslaString: function () {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function (e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e;
                        });
                    return 1 === i[3] && (i.pop(), (t = "hsl(")), t + i.join() + ")";
                },
                toHexString: function (t) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return (
                        t && i.push(~~(255 * n)),
                        "#" +
                            e
                                .map(i, function (e) {
                                    return (e = (e || 0).toString(16)), 1 === e.length ? "0" + e : e;
                                })
                                .join("")
                    );
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
                },
            })),
            (u.fn.parse.prototype = u.fn),
            (d.hsla.to = function (e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t,
                    i,
                    n = e[0] / 255,
                    r = e[1] / 255,
                    a = e[2] / 255,
                    s = e[3],
                    o = Math.max(n, r, a),
                    l = Math.min(n, r, a),
                    u = o - l,
                    d = o + l,
                    c = 0.5 * d;
                return (
                    (t = l === o ? 0 : n === o ? (60 * (r - a)) / u + 360 : r === o ? (60 * (a - n)) / u + 120 : (60 * (n - r)) / u + 240), (i = 0 === u ? 0 : 0.5 >= c ? u / d : u / (2 - d)), [Math.round(t) % 360, i, c, null == s ? 1 : s]
                );
            }),
            (d.hsla.from = function (e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    n = e[2],
                    a = e[3],
                    s = 0.5 >= n ? n * (1 + i) : n + i - n * i,
                    o = 2 * n - s;
                return [Math.round(255 * r(o, s, t + 1 / 3)), Math.round(255 * r(o, s, t)), Math.round(255 * r(o, s, t - 1 / 3)), a];
            }),
            h(d, function (n, r) {
                var a = r.props,
                    s = r.cache,
                    l = r.to,
                    d = r.from;
                (u.fn[n] = function (n) {
                    if ((l && !this[s] && (this[s] = l(this._rgba)), n === t)) return this[s].slice();
                    var r,
                        o = e.type(n),
                        c = "array" === o || "object" === o ? n : arguments,
                        g = this[s].slice();
                    return (
                        h(a, function (e, t) {
                            var n = c["object" === o ? e : t.idx];
                            null == n && (n = g[t.idx]), (g[t.idx] = i(n, t));
                        }),
                        d ? ((r = u(d(g))), (r[s] = g), r) : u(g)
                    );
                }),
                    h(a, function (t, i) {
                        u.fn[t] ||
                            (u.fn[t] = function (r) {
                                var a,
                                    s = e.type(r),
                                    l = "alpha" === t ? (this._hsla ? "hsla" : "rgba") : n,
                                    u = this[l](),
                                    d = u[i.idx];
                                return "undefined" === s
                                    ? d
                                    : ("function" === s && ((r = r.call(this, d)), (s = e.type(r))),
                                      null == r && i.empty ? this : ("string" === s && ((a = o.exec(r)), a && (r = d + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), (u[i.idx] = r), this[l](u)));
                            });
                    });
            }),
            (u.hook = function (t) {
                var i = t.split(" ");
                h(i, function (t, i) {
                    (e.cssHooks[i] = {
                        set: function (t, r) {
                            var a,
                                s,
                                o = "";
                            if ("transparent" !== r && ("string" !== e.type(r) || (a = n(r)))) {
                                if (((r = u(a || r)), !g.rgba && 1 !== r._rgba[3])) {
                                    for (s = "backgroundColor" === i ? t.parentNode : t; ("" === o || "transparent" === o) && s && s.style; )
                                        try {
                                            (o = e.css(s, "backgroundColor")), (s = s.parentNode);
                                        } catch (e) {}
                                    r = r.blend(o && "transparent" !== o ? o : "_default");
                                }
                                r = r.toRgbaString();
                            }
                            try {
                                t.style[i] = r;
                            } catch (e) {}
                        },
                    }),
                        (e.fx.step[i] = function (t) {
                            t.colorInit || ((t.start = u(t.elem, i)), (t.end = u(t.end)), (t.colorInit = !0)), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos));
                        });
                });
            }),
            u.hook(s),
            (e.cssHooks.borderColor = {
                expand: function (e) {
                    var t = {};
                    return (
                        h(["Top", "Right", "Bottom", "Left"], function (i, n) {
                            t["border" + n + "Color"] = e;
                        }),
                        t
                    );
                },
            }),
            (a = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff",
            });
    })(jQuery),
    !(function (e) {
        function t() {
            try {
                var i = this === document ? e(this) : e(this).contents();
            } catch (e) {
                return !1;
            }
            i.mousemove(function (t) {
                e.mlp = { x: t.pageX, y: t.pageY };
            }),
                i.find("iframe").on("load", t);
        }
        (e.mlp = { x: 0, y: 0 }),
            e(t),
            (e.fn.ismouseover = function () {
                var t = !1;
                return (
                    this.eq(0).each(function () {
                        var i = e(this).is("iframe") ? e(this).contents().find("body") : e(this),
                            n = i.offset();
                        t = n.left <= e.mlp.x && n.left + i.outerWidth() > e.mlp.x && n.top <= e.mlp.y && n.top + i.outerHeight() > e.mlp.y;
                    }),
                    t
                );
            });
    })(jQuery);
var g_ugYoutubeAPI = new UGYoutubeAPI(),
    g_ugVimeoAPI = new UGVimeoAPI(),
    g_ugHtml5MediaAPI = new UGHtml5MediaAPI(),
    g_ugSoundCloudAPI = new UGSoundCloudAPI(),
    g_ugWistiaAPI = new UGWistiaAPI();
(jQuery.fn.unitegallery = function (e) {
    var t = jQuery(this),
        i = "#" + t.attr("id");
    if (!e) var e = {};
    var n = new UniteGalleryMain();
    n.run(i, e);
    var r = new UG_API(n);
    return r;
}),
    "undefined" != typeof g_ugFunctions
        ? g_ugFunctions.registerTheme("default")
        : jQuery(document).ready(function () {
              g_ugFunctions.registerTheme("default");
          }),
    "undefined" != typeof g_ugFunctions
        ? g_ugFunctions.registerTheme("tiles")
        : jQuery(document).ready(function () {
              g_ugFunctions.registerTheme("tiles");
          }),
    !(function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
    })(function (e) {
        e.extend(e.fn, {
            validate: function (t) {
                if (!this.length) return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = e.data(this[0], "validator");
                return i
                    ? i
                    : (this.attr("novalidate", "novalidate"),
                      (i = new e.validator(t, this[0])),
                      e.data(this[0], "validator", i),
                      i.settings.onsubmit &&
                          (this.on("click.validate", ":submit", function (t) {
                              i.settings.submitHandler && (i.submitButton = t.target), e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0);
                          }),
                          this.on("submit.validate", function (t) {
                              function n() {
                                  var n, r;
                                  return (
                                      !i.settings.submitHandler ||
                                      (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)),
                                      (r = i.settings.submitHandler.call(i, i.currentForm, t)),
                                      i.submitButton && n.remove(),
                                      void 0 !== r && r)
                                  );
                              }
                              return i.settings.debug && t.preventDefault(), i.cancelSubmit ? ((i.cancelSubmit = !1), n()) : i.form() ? (i.pendingRequest ? ((i.formSubmitted = !0), !1) : n()) : (i.focusInvalid(), !1);
                          })),
                      i);
            },
            valid: function () {
                var t, i, n;
                return (
                    e(this[0]).is("form")
                        ? (t = this.validate().form())
                        : ((n = []),
                          (t = !0),
                          (i = e(this[0].form).validate()),
                          this.each(function () {
                              (t = i.element(this) && t), (n = n.concat(i.errorList));
                          }),
                          (i.errorList = n)),
                    t
                );
            },
            rules: function (t, i) {
                var n,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u = this[0];
                if (t)
                    switch (((n = e.data(u.form, "validator").settings), (r = n.rules), (a = e.validator.staticRules(u)), t)) {
                        case "add":
                            e.extend(a, e.validator.normalizeRule(i)), delete a.messages, (r[u.name] = a), i.messages && (n.messages[u.name] = e.extend(n.messages[u.name], i.messages));
                            break;
                        case "remove":
                            return i
                                ? ((l = {}),
                                  e.each(i.split(/\s/), function (t, i) {
                                      (l[i] = a[i]), delete a[i], "required" === i && e(u).removeAttr("aria-required");
                                  }),
                                  l)
                                : (delete r[u.name], a);
                    }
                return (
                    (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)),
                    s.required && ((o = s.required), delete s.required, (s = e.extend({ required: o }, s)), e(u).attr("aria-required", "true")),
                    s.remote && ((o = s.remote), delete s.remote, (s = e.extend(s, { remote: o }))),
                    s
                );
            },
        }),
            e.extend(e.expr[":"], {
                blank: function (t) {
                    return !e.trim("" + e(t).val());
                },
                filled: function (t) {
                    return !!e.trim("" + e(t).val());
                },
                unchecked: function (t) {
                    return !e(t).prop("checked");
                },
            }),
            (e.validator = function (t, i) {
                (this.settings = e.extend(!0, {}, e.validator.defaults, t)), (this.currentForm = i), this.init();
            }),
            (e.validator.format = function (t, i) {
                return 1 === arguments.length
                    ? function () {
                          var i = e.makeArray(arguments);
                          return i.unshift(t), e.validator.format.apply(this, i);
                      }
                    : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
                      i.constructor !== Array && (i = [i]),
                      e.each(i, function (e, i) {
                          t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                              return i;
                          });
                      }),
                      t);
            }),
            e.extend(e.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: e([]),
                    errorLabelContainer: e([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (e) {
                        (this.lastActive = e), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
                    },
                    onfocusout: function (e) {
                        this.checkable(e) || (!(e.name in this.submitted) && this.optional(e)) || this.element(e);
                    },
                    onkeyup: function (t, i) {
                        var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                        (9 === i.which && "" === this.elementValue(t)) || -1 !== e.inArray(i.keyCode, n) || ((t.name in this.submitted || t === this.lastElement) && this.element(t));
                    },
                    onclick: function (e) {
                        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
                    },
                    highlight: function (t, i, n) {
                        "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n);
                    },
                    unhighlight: function (t, i, n) {
                        "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n);
                    },
                },
                setDefaults: function (t) {
                    e.extend(e.validator.defaults, t);
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date ( ISO ).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    creditcard: "Please enter a valid credit card number.",
                    equalTo: "Please enter the same value again.",
                    maxlength: e.validator.format("Please enter no more than {0} characters."),
                    minlength: e.validator.format("Please enter at least {0} characters."),
                    rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: e.validator.format("Please enter a value between {0} and {1}."),
                    max: e.validator.format("Please enter a value less than or equal to {0}."),
                    min: e.validator.format("Please enter a value greater than or equal to {0}."),
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function () {
                        function t(t) {
                            var i = e.data(this.form, "validator"),
                                n = "on" + t.type.replace(/^validate/, ""),
                                r = i.settings;
                            r[n] && !e(this).is(r.ignore) && r[n].call(i, this, t);
                        }
                        (this.labelContainer = e(this.settings.errorLabelContainer)),
                            (this.errorContext = (this.labelContainer.length && this.labelContainer) || e(this.currentForm)),
                            (this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                            (this.submitted = {}),
                            (this.valueCache = {}),
                            (this.pendingRequest = 0),
                            (this.pending = {}),
                            (this.invalid = {}),
                            this.reset();
                        var i,
                            n = (this.groups = {});
                        e.each(this.settings.groups, function (t, i) {
                            "string" == typeof i && (i = i.split(/\s/)),
                                e.each(i, function (e, i) {
                                    n[i] = t;
                                });
                        }),
                            (i = this.settings.rules),
                            e.each(i, function (t, n) {
                                i[t] = e.validator.normalizeRule(n);
                            }),
                            e(this.currentForm)
                                .on(
                                    "focusin.validate focusout.validate keyup.validate",
                                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                                    t
                                )
                                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                            this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                            e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
                    },
                    form: function () {
                        return (
                            this.checkForm(), e.extend(this.submitted, this.errorMap), (this.invalid = e.extend({}, this.errorMap)), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                        );
                    },
                    checkForm: function () {
                        this.prepareForm();
                        for (var e = 0, t = (this.currentElements = this.elements()); t[e]; e++) this.check(t[e]);
                        return this.valid();
                    },
                    element: function (t) {
                        var i = this.clean(t),
                            n = this.validationTargetFor(i),
                            r = !0;
                        return (
                            (this.lastElement = n),
                            void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), (this.currentElements = e(n)), (r = this.check(n) !== !1), r ? delete this.invalid[n.name] : (this.invalid[n.name] = !0)),
                            e(t).attr("aria-invalid", !r),
                            this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            r
                        );
                    },
                    showErrors: function (t) {
                        if (t) {
                            e.extend(this.errorMap, t), (this.errorList = []);
                            for (var i in t) this.errorList.push({ message: t[i], element: this.findByName(i)[0] });
                            this.successList = e.grep(this.successList, function (e) {
                                return !(e.name in t);
                            });
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                    },
                    resetForm: function () {
                        e.fn.resetForm && e(this.currentForm).resetForm(), (this.submitted = {}), (this.lastElement = null), this.prepareForm(), this.hideErrors();
                        var t,
                            i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        if (this.settings.unhighlight) for (t = 0; i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, "");
                        else i.removeClass(this.settings.errorClass);
                    },
                    numberOfInvalids: function () {
                        return this.objectLength(this.invalid);
                    },
                    objectLength: function (e) {
                        var t,
                            i = 0;
                        for (t in e) i++;
                        return i;
                    },
                    hideErrors: function () {
                        this.hideThese(this.toHide);
                    },
                    hideThese: function (e) {
                        e.not(this.containers).text(""), this.addWrapper(e).hide();
                    },
                    valid: function () {
                        return 0 === this.size();
                    },
                    size: function () {
                        return this.errorList.length;
                    },
                    focusInvalid: function () {
                        if (this.settings.focusInvalid)
                            try {
                                e(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                    .filter(":visible")
                                    .focus()
                                    .trigger("focusin");
                            } catch (e) {}
                    },
                    findLastActive: function () {
                        var t = this.lastActive;
                        return (
                            t &&
                            1 ===
                                e.grep(this.errorList, function (e) {
                                    return e.element.name === t.name;
                                }).length &&
                            t
                        );
                    },
                    elements: function () {
                        var t = this,
                            i = {};
                        return e(this.currentForm)
                            .find("input, select, textarea")
                            .not(":submit, :reset, :image, :disabled")
                            .not(this.settings.ignore)
                            .filter(function () {
                                return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !t.objectLength(e(this).rules())) && ((i[this.name] = !0), !0);
                            });
                    },
                    clean: function (t) {
                        return e(t)[0];
                    },
                    errors: function () {
                        var t = this.settings.errorClass.split(" ").join(".");
                        return e(this.settings.errorElement + "." + t, this.errorContext);
                    },
                    reset: function () {
                        (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = e([])), (this.toHide = e([])), (this.currentElements = e([]));
                    },
                    prepareForm: function () {
                        this.reset(), (this.toHide = this.errors().add(this.containers));
                    },
                    prepareElement: function (e) {
                        this.reset(), (this.toHide = this.errorsFor(e));
                    },
                    elementValue: function (t) {
                        var i,
                            n = e(t),
                            r = t.type;
                        return "radio" === r || "checkbox" === r
                            ? this.findByName(t.name).filter(":checked").val()
                            : "number" === r && "undefined" != typeof t.validity
                            ? !t.validity.badInput && n.val()
                            : ((i = n.val()), "string" == typeof i ? i.replace(/\r/g, "") : i);
                    },
                    check: function (t) {
                        t = this.validationTargetFor(this.clean(t));
                        var i,
                            n,
                            r,
                            a = e(t).rules(),
                            s = e.map(a, function (e, t) {
                                return t;
                            }).length,
                            o = !1,
                            l = this.elementValue(t);
                        for (n in a) {
                            r = { method: n, parameters: a[n] };
                            try {
                                if (((i = e.validator.methods[n].call(this, l, t, r.parameters)), "dependency-mismatch" === i && 1 === s)) {
                                    o = !0;
                                    continue;
                                }
                                if (((o = !1), "pending" === i)) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                                if (!i) return this.formatAndAdd(t, r), !1;
                            } catch (e) {
                                throw (
                                    (this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e),
                                    e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."),
                                    e)
                                );
                            }
                        }
                        if (!o) return this.objectLength(a) && this.successList.push(t), !0;
                    },
                    customDataMessage: function (t, i) {
                        return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg");
                    },
                    customMessage: function (e, t) {
                        var i = this.settings.messages[e];
                        return i && (i.constructor === String ? i : i[t]);
                    },
                    findDefined: function () {
                        for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e];
                    },
                    defaultMessage: function (t, i) {
                        return this.findDefined(
                            this.customMessage(t.name, i),
                            this.customDataMessage(t, i),
                            (!this.settings.ignoreTitle && t.title) || void 0,
                            e.validator.messages[i],
                            "<strong>Warning: No message defined for " + t.name + "</strong>"
                        );
                    },
                    formatAndAdd: function (t, i) {
                        var n = this.defaultMessage(t, i.method),
                            r = /\$?\{(\d+)\}/g;
                        "function" == typeof n ? (n = n.call(this, i.parameters, t)) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)),
                            this.errorList.push({ message: n, element: t, method: i.method }),
                            (this.errorMap[t.name] = n),
                            (this.submitted[t.name] = n);
                    },
                    addWrapper: function (e) {
                        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
                    },
                    defaultShowErrors: function () {
                        var e, t, i;
                        for (e = 0; this.errorList[e]; e++)
                            (i = this.errorList[e]), this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                        if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                        if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                        (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                    },
                    validElements: function () {
                        return this.currentElements.not(this.invalidElements());
                    },
                    invalidElements: function () {
                        return e(this.errorList).map(function () {
                            return this.element;
                        });
                    },
                    showLabel: function (t, i) {
                        var n,
                            r,
                            a,
                            s = this.errorsFor(t),
                            o = this.idOrName(t),
                            l = e(t).attr("aria-describedby");
                        s.length
                            ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i))
                            : ((s = e("<" + this.settings.errorElement + ">")
                                  .attr("id", o + "-error")
                                  .addClass(this.settings.errorClass)
                                  .html(i || "")),
                              (n = s),
                              this.settings.wrapper &&
                                  (n = s
                                      .hide()
                                      .show()
                                      .wrap("<" + this.settings.wrapper + "/>")
                                      .parent()),
                              this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, e(t)) : n.insertAfter(t),
                              s.is("label")
                                  ? s.attr("for", o)
                                  : 0 === s.parents("label[for='" + o + "']").length &&
                                    ((a = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                                    l ? l.match(new RegExp("\\b" + a + "\\b")) || (l += " " + a) : (l = a),
                                    e(t).attr("aria-describedby", l),
                                    (r = this.groups[t.name]),
                                    r &&
                                        e.each(this.groups, function (t, i) {
                                            i === r && e("[name='" + t + "']", this.currentForm).attr("aria-describedby", s.attr("id"));
                                        }))),
                            !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)),
                            (this.toShow = this.toShow.add(s));
                    },
                    errorsFor: function (t) {
                        var i = this.idOrName(t),
                            n = e(t).attr("aria-describedby"),
                            r = "label[for='" + i + "'], label[for='" + i + "'] *";
                        return n && (r = r + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(r);
                    },
                    idOrName: function (e) {
                        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
                    },
                    validationTargetFor: function (t) {
                        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
                    },
                    checkable: function (e) {
                        return /radio|checkbox/i.test(e.type);
                    },
                    findByName: function (t) {
                        return e(this.currentForm).find("[name='" + t + "']");
                    },
                    getLength: function (t, i) {
                        switch (i.nodeName.toLowerCase()) {
                            case "select":
                                return e("option:selected", i).length;
                            case "input":
                                if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
                        }
                        return t.length;
                    },
                    depend: function (e, t) {
                        return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t);
                    },
                    dependTypes: {
                        boolean: function (e) {
                            return e;
                        },
                        string: function (t, i) {
                            return !!e(t, i.form).length;
                        },
                        function: function (e, t) {
                            return e(t);
                        },
                    },
                    optional: function (t) {
                        var i = this.elementValue(t);
                        return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch";
                    },
                    startRequest: function (e) {
                        this.pending[e.name] || (this.pendingRequest++, (this.pending[e.name] = !0));
                    },
                    stopRequest: function (t, i) {
                        this.pendingRequest--,
                            this.pendingRequest < 0 && (this.pendingRequest = 0),
                            delete this.pending[t.name],
                            i && 0 === this.pendingRequest && this.formSubmitted && this.form()
                                ? (e(this.currentForm).submit(), (this.formSubmitted = !1))
                                : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                    },
                    previousValue: function (t) {
                        return e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") });
                    },
                    destroy: function () {
                        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator");
                    },
                },
                classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
                addClassRules: function (t, i) {
                    t.constructor === String ? (this.classRuleSettings[t] = i) : e.extend(this.classRuleSettings, t);
                },
                classRules: function (t) {
                    var i = {},
                        n = e(t).attr("class");
                    return (
                        n &&
                            e.each(n.split(" "), function () {
                                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this]);
                            }),
                        i
                    );
                },
                normalizeAttributeRule: function (e, t, i, n) {
                    /min|max/.test(i) && (null === t || /number|range|text/.test(t)) && ((n = Number(n)), isNaN(n) && (n = void 0)), n || 0 === n ? (e[i] = n) : t === i && "range" !== t && (e[i] = !0);
                },
                attributeRules: function (t) {
                    var i,
                        n,
                        r = {},
                        a = e(t),
                        s = t.getAttribute("type");
                    for (i in e.validator.methods) "required" === i ? ((n = t.getAttribute(i)), "" === n && (n = !0), (n = !!n)) : (n = a.attr(i)), this.normalizeAttributeRule(r, s, i, n);
                    return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
                },
                dataRules: function (t) {
                    var i,
                        n,
                        r = {},
                        a = e(t),
                        s = t.getAttribute("type");
                    for (i in e.validator.methods) (n = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())), this.normalizeAttributeRule(r, s, i, n);
                    return r;
                },
                staticRules: function (t) {
                    var i = {},
                        n = e.data(t.form, "validator");
                    return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i;
                },
                normalizeRules: function (t, i) {
                    return (
                        e.each(t, function (n, r) {
                            if (r === !1) return void delete t[n];
                            if (r.param || r.depends) {
                                var a = !0;
                                switch (typeof r.depends) {
                                    case "string":
                                        a = !!e(r.depends, i.form).length;
                                        break;
                                    case "function":
                                        a = r.depends.call(i, i);
                                }
                                a ? (t[n] = void 0 === r.param || r.param) : delete t[n];
                            }
                        }),
                        e.each(t, function (n, r) {
                            t[n] = e.isFunction(r) ? r(i) : r;
                        }),
                        e.each(["minlength", "maxlength"], function () {
                            t[this] && (t[this] = Number(t[this]));
                        }),
                        e.each(["rangelength", "range"], function () {
                            var i;
                            t[this] &&
                                (e.isArray(t[this]) ? (t[this] = [Number(t[this][0]), Number(t[this][1])]) : "string" == typeof t[this] && ((i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (t[this] = [Number(i[0]), Number(i[1])])));
                        }),
                        e.validator.autoCreateRanges &&
                            (null != t.min && null != t.max && ((t.range = [t.min, t.max]), delete t.min, delete t.max),
                            null != t.minlength && null != t.maxlength && ((t.rangelength = [t.minlength, t.maxlength]), delete t.minlength, delete t.maxlength)),
                        t
                    );
                },
                normalizeRule: function (t) {
                    if ("string" == typeof t) {
                        var i = {};
                        e.each(t.split(/\s/), function () {
                            i[this] = !0;
                        }),
                            (t = i);
                    }
                    return t;
                },
                addMethod: function (t, i, n) {
                    (e.validator.methods[t] = i), (e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t]), i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
                },
                methods: {
                    required: function (t, i, n) {
                        if (!this.depend(n, i)) return "dependency-mismatch";
                        if ("select" === i.nodeName.toLowerCase()) {
                            var r = e(i).val();
                            return r && r.length > 0;
                        }
                        return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0;
                    },
                    email: function (e, t) {
                        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
                    },
                    url: function (e, t) {
                        return (
                            this.optional(t) ||
                            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                                e
                            )
                        );
                    },
                    date: function (e, t) {
                        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
                    },
                    dateISO: function (e, t) {
                        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
                    },
                    number: function (e, t) {
                        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
                    },
                    digits: function (e, t) {
                        return this.optional(t) || /^\d+$/.test(e);
                    },
                    creditcard: function (e, t) {
                        if (this.optional(t)) return "dependency-mismatch";
                        if (/[^0-9 \-]+/.test(e)) return !1;
                        var i,
                            n,
                            r = 0,
                            a = 0,
                            s = !1;
                        if (((e = e.replace(/\D/g, "")), e.length < 13 || e.length > 19)) return !1;
                        for (i = e.length - 1; i >= 0; i--) (n = e.charAt(i)), (a = parseInt(n, 10)), s && (a *= 2) > 9 && (a -= 9), (r += a), (s = !s);
                        return r % 10 === 0;
                    },
                    minlength: function (t, i, n) {
                        var r = e.isArray(t) ? t.length : this.getLength(t, i);
                        return this.optional(i) || r >= n;
                    },
                    maxlength: function (t, i, n) {
                        var r = e.isArray(t) ? t.length : this.getLength(t, i);
                        return this.optional(i) || n >= r;
                    },
                    rangelength: function (t, i, n) {
                        var r = e.isArray(t) ? t.length : this.getLength(t, i);
                        return this.optional(i) || (r >= n[0] && r <= n[1]);
                    },
                    min: function (e, t, i) {
                        return this.optional(t) || e >= i;
                    },
                    max: function (e, t, i) {
                        return this.optional(t) || i >= e;
                    },
                    range: function (e, t, i) {
                        return this.optional(t) || (e >= i[0] && e <= i[1]);
                    },
                    equalTo: function (t, i, n) {
                        var r = e(n);
                        return (
                            this.settings.onfocusout &&
                                r.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                                    e(i).valid();
                                }),
                            t === r.val()
                        );
                    },
                    remote: function (t, i, n) {
                        if (this.optional(i)) return "dependency-mismatch";
                        var r,
                            a,
                            s = this.previousValue(i);
                        return (
                            this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                            (s.originalMessage = this.settings.messages[i.name].remote),
                            (this.settings.messages[i.name].remote = s.message),
                            (n = ("string" == typeof n && { url: n }) || n),
                            s.old === t
                                ? s.valid
                                : ((s.old = t),
                                  (r = this),
                                  this.startRequest(i),
                                  (a = {}),
                                  (a[i.name] = t),
                                  e.ajax(
                                      e.extend(
                                          !0,
                                          {
                                              mode: "abort",
                                              port: "validate" + i.name,
                                              dataType: "json",
                                              data: a,
                                              context: r.currentForm,
                                              success: function (n) {
                                                  var a,
                                                      o,
                                                      l,
                                                      u = n === !0 || "true" === n;
                                                  (r.settings.messages[i.name].remote = s.originalMessage),
                                                      u
                                                          ? ((l = r.formSubmitted), r.prepareElement(i), (r.formSubmitted = l), r.successList.push(i), delete r.invalid[i.name], r.showErrors())
                                                          : ((a = {}), (o = n || r.defaultMessage(i, "remote")), (a[i.name] = s.message = e.isFunction(o) ? o(t) : o), (r.invalid[i.name] = !0), r.showErrors(a)),
                                                      (s.valid = u),
                                                      r.stopRequest(i, u);
                                              },
                                          },
                                          n
                                      )
                                  ),
                                  "pending")
                        );
                    },
                },
            });
        var t,
            i = {};
        e.ajaxPrefilter
            ? e.ajaxPrefilter(function (e, t, n) {
                  var r = e.port;
                  "abort" === e.mode && (i[r] && i[r].abort(), (i[r] = n));
              })
            : ((t = e.ajax),
              (e.ajax = function (n) {
                  var r = ("mode" in n ? n : e.ajaxSettings).mode,
                      a = ("port" in n ? n : e.ajaxSettings).port;
                  return "abort" === r ? (i[a] && i[a].abort(), (i[a] = t.apply(this, arguments)), i[a]) : t.apply(this, arguments);
              }));
    });
