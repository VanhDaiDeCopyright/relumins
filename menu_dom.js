NS60 = (navigator.userAgent.indexOf("Netscape6/6.0") != -1)
Opera = (navigator.userAgent.indexOf('Opera') != -1) || (navigator.appName.indexOf('Opera') != -1) || (window.opera)
Opera7 = (Opera && document.createElement != null && document.addEventListener != null)
IE4 = (document.all && !Opera)
mac = ((IE4) && (navigator.appVersion.indexOf("Mac") != -1))
DOM = document.documentElement && !IE4 && !Opera
if (IE4) {
    av = navigator.appVersion
    avi = av.indexOf("MSIE")
    if (avi == -1) {
        version = parseInt(av);
    } else {
        version = parseInt(av.substr(avi + 4));
    }
}

function zz(e, i) {
    return e ? e.document.getElementById(i) : document.getElementById(i)
}

function f33(p) {
    if (p && p.indexOf(':/') == -1 && p.indexOf(':\\') == -1 && p.indexOf('/') != 0) {
        return unescape(absPath) + p
    } else {
        return p
    }
}

function addLoadHandler(lh) {
    if (lh) {
        if (!document.loadHandlers) {
            document.loadHandlers = new Array()
            document.loadHandlers[0] = lh
            document.lastLoadHandler = 0
        } else {
            document.lastLoadHandler++
                document.loadHandlers[document.lastLoadHandler] = lh
        }
    }
}
addLoadHandler('f50')
addLoadHandler('f29')
addLoadHandler(window.onload)
window.onload = f31

function f32() {
    return true;
}
window.onerror = f32

function f01(op, opObj, vis, ns, ie, frc) {
    if (op || frc) {
        if (ns) opObj.style.MozOpacity = (vis && op != 100) ? (op / 100) : '0.999'
        if (ie) opObj.style.filter = vis ? "alpha(opacity=" + op + ")" : ""
    }
}

function f03(q, pp, id, v27, v26, v30, v09, bLast, v31, parent, target, opt) {
    if (v26 == "-") return q.sepH
    var itemType = 0
    if (v26 && v26.indexOf("(^1)") != -1) itemType = 1
    if (v26 && v26.indexOf("(^2)") != -1) itemType = 2
    var itemWnd = q.v18.document.createElement("DIV")
    pp.appendChild(itemWnd)
    if (mac) {
        var brWnd = q.v18.document.createElement("BR")
        pp.appendChild(brWnd)
    }
    f30(itemWnd, "mouseover", "f22", false)
    f30(itemWnd, "mouseout", "f23", false)
    f30(itemWnd, "click", "f20", false)
    f30(itemWnd, "dblclick", "f20", false)
    itemWnd.owner = pp.id
    itemWnd.qId = q.name
    itemWnd.id = id
    with(itemWnd.style) {
        position = "absolute"
        if (itemType == 2) top = (v31 - q.scrollHeight) + "px"
        else top = v31 + "px"
        if (v27) {
            cursor = (!IE4 || version >= 6) ? "pointer" : "hand";
        } else {
            cursor = "default";
        }
        if (!color) color = v09[3]
        if (!q.v11) {
            if (!bLast) {
                borderBottomColor = q.borderCol
                borderBottomWidth = q.sep + "px"
                borderBottomStyle = "solid"
            }
        } else
            left = (q.ppLeftPad + q.vertSpace) + "px"
        if (!itemType) padding = q.vertSpace + "px"
        paddingLeft = (q.ppLeftPad + q.vertSpace + q.v54) + "px"
        paddingRight = ((q.v01 < q.iconSize ? q.iconSize : q.v01) + q.vertSpace) + "px"
        fontSize = v09[0]
        fontWeight = (v09[1]) ? "bold" : "normal"
        fontStyle = (v09[2]) ? "italic" : "normal"
        fontTextDecoration = (v09[3]) ? "underline" : "none"
        fontFamily = v09[7]
        textAlign = (q.v22 == 1 ? 'center' : (q.v22 == 2 ? 'right' : 'left'))
        f04(itemWnd, q.v11 ? q.v02 - q.ppLeftPad - q.v01 - 2 * q.vertSpace : q.v02, 2 * q.bord)
    }
    if (v30) itemWnd.v30 = v30
    if (itemType > 0) {
        var arrow = q.v18.document.createElement("IMG")
        itemWnd.appendChild(arrow)
        var arrowSrc = f33(q.v21)
        arrow.src = arrowSrc + "/" + q.fnm + "s" + ((itemType == 1) ? "up" : "down") + ".gif"
        itemWnd.style.textAlign = "center"
        itemWnd.style.display = "none"
    } else {
        itemWnd.innerHTML = v26
    }
    if (q.v56 && v27.indexOf(q.v56) == 0) {
        itemWnd.url = q.v57 + v27.substring(q.v56.length)
    } else {
        itemWnd.url = f33(v27)
    }
    itemWnd.f54 = v26
    itemWnd.target = target
    if (v30 && q.showA) {
        var expandArrow = q.v18.document.createElement("IMG")
        itemWnd.appendChild(expandArrow)
        var v03 = f33(q.v21)
        expandArrow.src = v03 + "/" + q.fnm + "ia.gif"
        with(expandArrow.style) {
            width = q.iconSize + "px"
            height = q.iconSize + "px"
            position = "absolute"
            var itemRect = f19(q, itemWnd)
            top = ((itemRect.bottom - itemRect.top) / 2 - q.iconSize / 2) + "px"
            left = (itemWnd.offsetWidth - q.iconSize - 1) - 200 + "px"
        }
    }
    if (opt) {
        itemWnd.customBg = f56(opt, "b")
        itemWnd.customCl = f56(opt, "c")
        itemWnd.status = f56(opt, "s")
        var h = f56(opt, "h")
        if (h) itemWnd.style.fontWeight = h
        var i = f56(opt, "i")
        if (i) itemWnd.style.fontStyle = i
        itemWnd.style.textDecoration = fontTextDecoration
    }
    if (!itemWnd.status && itemWnd.url.indexOf("<root>") != -1) itemWnd.status = itemWnd.url.replace("<root>", "/")
    if (id.indexOf('pp_') > 0)
        itemWnd.className += 'sub-menu-item';
    return itemWnd.offsetHeight
}

function f04(wnd, width, borderWidth) {
    wnd.style.width = (width - borderWidth) + "px"
    if (wnd.offsetWidth > width - borderWidth) wnd.style.width = (width - parseInt(wnd.style.paddingLeft) - parseInt(wnd.style.paddingRight)) + "px"
}

function f56(txt, op) {
    if (!txt) return ""
    var i = op ? txt.indexOf(op + ':') : -2
    if (i != -1) {
        var i2 = txt.indexOf(";", i + 2)
        if (i2 == -1) i2 = txt.length
        return txt.substring(i + 2, i2)
    }
    return ""
}

function f05(q, v12, level, v04, nsi) {
    var ppName = v12 + "pp"
    var pp = zz(q.v18, ppName)
    if (pp) {
        return pp
    }
    var aid = f57(q)
    if (aid && aid == ppName) q.v17 = null
    var v09 = q.attr
    if (level > 0) q.v02 = q.v23
    var oldv02 = q.v02
    pp = q.v18.document.createElement("DIV")
    q.v18.document.body.appendChild(pp)
    pp.id = ppName
    pp.v04 = v04
    pp.level = level
    pp.v05 = v09[6]
    pp.v06 = v09[4]
    var c1 = v09[5]
    var prop = eval("document." + v12 + "prop")
    if (prop) {
        var pw = f56(prop, "w")
        if (pw) q.v02 = parseInt(pw)
        var bc = f56(prop, "p")
        if (bc) c1 = bc
    }
    pp.v07 = v09[8]
    pp.v08 = v09[5]
    pp.v09 = c1
    pp.scrVis = false
    with(pp.style) {
        zIndex = maxZ
        position = "absolute"
        width = q.v02 + "px"
        if (!q.v11) {
            borderColor = q.borderCol
            background = c1
            borderWidth = q.bord + "px"
            borderStyle = "solid"
        } else background = ""
    }
    pp.q = q
    f30(pp, "mouseout", "f15", false)
    f30(pp, "mouseover", "f14", false)
    var v31 = 0
    var bgWnd = q.v18.document.createElement("DIV")
    pp.appendChild(bgWnd)
    bgWnd.id = pp.id + "bgWnd"
    bgWnd.style.position = "absolute"
    bgWnd.style.top = q.v10 + "px"
    bgWnd.style.width = (q.v02 - 2 * q.bord) + "px"
    bgWnd.innerHTML = "<font size='1'>&nbsp;</font>"
    if (0) {} else {
        bgWnd.style.background = c1
    }
    if (q.v55) f03(q, pp, pp.id + "scrollUp", "javascript:scrollUp(" + q.name + ",'" + pp.id + "');", "(^1)", null, v09, true, v31, bgWnd)
    var array = eval(v12)
    var v13
    for (v13 = 0; v13 < array.length / 5; v13++) {
        var fold = array[v13 * 5 + 2]
        var v30 = fold ? (v12 + "_" + parseInt(v13 + 1)) : null
        var options = array[v13 * 5 + 4]
        array[v13 * 5] = array[v13 * 5].replace('(imgdir)', f33(q.v21))
        v31 += f03(q, pp, pp.id + "_" + v13, array[v13 * 5 + 1], array[v13 * 5], v30, v09, (v13 == array.length / 5 - 1), v31, bgWnd, array[v13 * 5 + 3], options)
    }
    if (q.v55) f03(q, pp, pp.id + "scrollDown", "javascript:scrollDown(" + q.name + ",'" + pp.id + "');", "(^2)", null, v09, true, v31, bgWnd)
    var v28 = 0
    pp.style.height = (v31 + q.bord * 2 + v28) + "px"
    pp.maxHeight = v31 + q.bord * 2
    bgWnd.style.height = (v31 - q.v10 - v28) + "px"
    f01(q.v60, bgWnd, 1, 0, q.v11, 0)
    f01(q.v60, pp, 1, 1, !q.v11, 0)
    if (pp.offsetHeight > v31 + q.bord * 2 + v28) {
        pp.style.height = v31 + "px"
        q.bIncBorder = false
        pp.maxHeight = v31
    }
    q.v02 = oldv02
    return pp
}

function f35(wnd, vis) {
    var i = 1
    while (true) {
        var eln = 'HideItem'
        if (i > 1) eln += i
        var hideWnd = zz(wnd, eln)
        if (!hideWnd) break
        hideWnd.style.visibility = vis ? 'visible' : 'hidden'
        i++
    }
}

function f06(q, ppId, dl) {
    if (ppId.indexOf('_') == -1) {
        f35(q.v18, 1)
        if (q.actm && dl) chgBg(q, q.actm, 0, 1)
    }
    if (q.v29) {
        q.v29Str = null;
        clearTimeout(q.v29);
    }
    var pp = zz(q.v18, ppId)
    if (pp) {
        if (pp.v14) f06(q, pp.v14.id)
        if (pp.v04) {
            var owner = zz(q.v18, pp.v04)
            owner.v14 = null
        }
        if (IE4 && version >= 6 && q.v11) {
            pp.style.clip = "rect(0,-1,-1,0)"
        } else {
            pp.style.visibility = "hidden"
            pp.style.display = "none"
        }
    }
    var aid = f57(q)
    if (aid && aid == ppId) q.v17 = null
}

function f07(rect, refx, refy) {
    var retval = new rct(rect.left - refx, rect.top - refy, rect.right - refx, rect.bottom - refy)
    return retval
}

function f34(q, pp, actEl) {
    if (pp.className == 'parent-item') {} else {
        pp.className += 'parent-item';
    }
    var items = pp.getElementsByTagName("DIV")
    var i;
    for (i = 0; i < items.length; i++) {
        if (actEl != items[i] && (!items[i].id || items[i].id.indexOf("scroll") == -1)) {
            items[i].style.background = pp.q.v11 ? "transparent" : (items[i].customBg ? items[i].customBg : pp.v08)
            items[i].style.color = items[i].customCl ? items[i].customCl : pp.v06
            items[i].style.textDecoration = "none"
        }
    }
}

function f08(q, pp, x, y, bDontMove, refWnd) {
    if (pp.id.indexOf('_') == -1) {
        f35(q.v18, 0)
    }
    var aid = f57(q)
    if (aid && aid == pp.id) return
    pp.style.left = x + "px"
    pp.style.top = y + "px"
    if (IE4 && version >= 6 && q.v11) {
        pp.style.clip = "rect(auto,auto,auto,auto)"
    } else {
        pp.style.display = ""
        pp.style.visibility = "visible"
    }
    var v15 = f19(q, pp)
    var v16 = f17(q.v18)
    var bResize = (pp.offsetHeight < pp.maxHeight)
    if (v15.right > v16.right) {
        if (refWnd && refWnd.id && refWnd.id.indexOf('tlm') == -1) pp.style.left = (Math.max(0, refWnd.offsetLeft - pp.offsetWidth + q.levelOffset)) + "px"
        else pp.style.left = (v16.right - pp.offsetWidth - 5) + "px"
    }
    var wnd1 = zz(q.v18, pp.id + "scrollDown")
    var wnd2 = zz(q.v18, pp.id + "scrollUp")
    var cv = mac ? 15 : (q.bIncBorder ? 3 : 20)
    if (((v15.bottom > v16.bottom) || bResize) && !NS60) {
        var newtop = v16.bottom - pp.offsetHeight - cv
        if (q.v55 && (newtop < 0 || bDontMove || bResize)) {
            var minNum = Math.min(pp.maxHeight, v16.bottom - pp.offsetTop - cv - (q.bIncBorder ? 0 : q.bord * 2))
            if (minNum > 60) {
                pp.scrVis = (minNum != pp.maxHeight)
                f09(q, pp, v16.top, minNum)
            } else if (newtop > 0) {
                pp.style.top = newtop + "px"
            } else {
                pp.style.top = "10px"
                pp.scrVis = 1
                f09(q, pp, v16.top, v16.bottom - v16.top - 30)
            }
        } else
            pp.style.top = newtop + "px"
    }
    if (q.v55) {
        wnd1.style.display = pp.scrVis ? "" : "none"
        wnd2.style.display = pp.scrVis ? "" : "none"
    }
    f34(q, pp, null)
}

function f09(q, pp, documentOffset, height) {
    var wnd2 = zz(q.v18, pp.id + "scrollDown")
    var wnd4 = zz(q.v18, pp.id + "scrollUp")
    var wnd3 = zz(q.v18, pp.id + "bgWnd")
    var wnd1Height = 0
    if (q.v55) {
        wnd2.style.zIndex = maxZ + 1
        wnd4.style.zIndex = maxZ + 1
        if (wnd4.className == 'scrollUp-item') {} else {
            wnd4.className += 'scrollUp-item';
        }
    }
    pp.style.height = height + "px"
    wnd3.style.height = (height - q.v10 - q.bord * 2 - wnd1Height) + "px"
    if (q.v55) {
        wnd2.style.top = (height - wnd1Height - q.scrollHeight - (q.bIncBorder ? q.bord * 2 : 0)) + "px"
        f10(q, pp.id, 0)
    }
}

function f10(q, ppId, dir) {
    var pp = zz(q.v18, ppId)
    var v15 = f19(q, pp)
    var items = pp.getElementsByTagName("DIV")
    var i = (dir > 0 ? 0 : items.length - 1)
    var off = (dir > 0 ? 1 : -1)
    var bFirst = true
    var offset = dir * q.scrollStep
    if (pp.scrVis) {
        v15.top += q.scrollHeight
        v15.bottom -= q.scrollHeight
    }
    v15.bottom -= 2 * q.bord
    var wnd1Height = 0
    for (; i < items.length && i >= 0; i += off) {
        var item = items[i]
        if (!item.id || (item.id.indexOf("scroll") == -1 && item.id.indexOf("bgWnd") == -1)) {
            var itemRect = f19(q, item)
            if (bFirst && dir == 0) {
                offset = pp.maxHeight - (item.offsetTop + item.offsetHeight) + (pp.scrVis ? q.scrollHeight : 0) - (q.bIncBorder ? q.bord * 2 : 0) - wnd1Height;
            }
            var relRect = f07(v15, itemRect.left, itemRect.top + offset)
            if (dir > 0 && relRect.top < -q.scrollHeight && bFirst) return
            if (dir < 0 && itemRect.bottom < v15.bottom - wnd1Height && bFirst) return
            if (offset != 0) item.style.top = (item.offsetTop + offset) + "px"
            if (!mac) item.style.clip = "rect(" + relRect.top + "px," + relRect.right + "px," + relRect.bottom + "px," + relRect.left + "px)"
            if (relRect.bottom < 0 || relRect.top > item.offsetHeight)
                item.style.visibility = "hidden"
            else
                item.style.visibility = "visible"
            bFirst = false
        }
    }
    if (pp.scrPos) pp.scrPos += offset
    else pp.scrPos = offset
}

function scrollUp(q, ppId) {
    f10(q, ppId, 1)
}

function scrollDown(q, ppId) {
    f10(q, ppId, -1)
}

function f13(q, pp) {
    var wnd = q.v17
    while (wnd) {
        if (wnd.id == pp.id)
            return true
        wnd = wnd.v14
    }
    return false
}

function f14() {
    var q = this.q
    if (q.v17 && q.v58 && f13(q, this)) clearTimeout(q.v58)
}

function f15() {
    var q = this.q
    f15Impl(q, this)
}

function f15Impl(q, pp, pid) {
    if (!pp && !pid) pp = q.v17
    if (!pp) pp = zz(q.v18, pid + "pp")
    if (pp && q.mout && q.v17 && f13(q, pp)) {
        if (q.v58) clearTimeout(q.v58)
        q.v58 = setTimeout("f06(" + q.name + ",'" + q.v17.id + "',1);", q.closeDelay)
    }
}

function rct(left, top, right, bottom) {
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
}

function f17(doc) {
    var left = 0
    var top = 0
    var right
    var bottom
    if (doc.pageXOffset) left = doc.pageXOffset
    else if (doc.document.documentElement.scrollLeft) left = doc.document.documentElement.scrollLeft
    else if (doc.document.body.scrollLeft) left = doc.document.body.scrollLeft
    if (doc.pageYOffset) top = doc.pageYOffset
    else if (doc.document.documentElement.scrollTop) top = doc.document.documentElement.scrollTop
    else if (doc.document.body.scrollTop) top = doc.document.body.scrollTop
    if (doc.innerWidth) right = left + doc.innerWidth
    else if (doc.document.documentElement.clientWidth) right = left + doc.document.documentElement.clientWidth
    else if (doc.document.body.clientWidth) right = left + doc.document.body.clientWidth
    if (doc.innerHeight) bottom = top + doc.innerHeight
    else if (doc.document.documentElement.clientHeight) bottom = top + doc.document.documentElement.clientHeight
    else if (doc.document.body.clientHeight) bottom = top + doc.document.body.clientHeight
    var retval = new rct(left, top, right, bottom)
    return retval
}

function f18(q, wnd) {
    var doc = q ? q.v18.document : document
    var left = mac ? parseInt(doc.body.leftMargin) : 0
    var top = mac ? parseInt(doc.body.topMargin) : 0
    var right = 0
    var bottom = 0
    var par = wnd
    var topObj = doc.documentElement
    if (!topObj) topObj = doc.body
    while (par) {
        left = left + parseInt(par.offsetLeft)
        top = top + parseInt(par.offsetTop)
        if (par.offsetParent == par || par.offsetParent == topObj) break
        par = par.offsetParent
    }
    right = left + parseInt(wnd.offsetWidth)
    bottom = top + parseInt(wnd.offsetHeight)
    var retval = new rct(left, top, right, bottom)
    return retval
}

function f19(q, wnd) {
    return f18(q, wnd)
}

function f53(wn, fr) {
    if (wn.frames) {
        if (wn.frames[fr]) return wn.frames[fr]
        for (var i = 0; i < wn.frames.length; i++) {
            try {
                if (wn.frames[i].name == fr) return wn.frames[i]
                var ret = f53(wn.frames[i], fr)
                if (ret) return ret
            } catch (e) {}
        }
    }
    return null
}

function f59(q, url, trgFrame) {
    if (trgFrame == "_self")
        trgFrame = null
    var mt = url.indexOf("mailto:")
    if (mt != -1) window.top.location = url.substring(mt)
    else {
        var find = url.indexOf("javascript:")
        if (find != -1) {
            eval(url.substring(find))
        } else {
            if (trgFrame) {
                if (trgFrame == "_blank") window.open(url)
                else if (trgFrame == "_top") window.top.location.href = url
                else if (trgFrame == "_parent") parent.location.href = url
                else {
                    var fr = f53(window.top, trgFrame)
                    if (fr) fr.location.href = url
                    else window.location.href = url
                }
            } else {
                q.targetFrame.location = url
            }
        }
    }
}

function f20() {
    var item = this
    var close = true
    var q = eval("window." + item.qId)
    var url = item.url
    if (url) {
        var trgFrame = q.cntFrame
        if (item.target)
            trgFrame = item.target
        if (url.indexOf("javascript:scroll") != -1) close = false
        f59(q, url, trgFrame)
        if (q.v17 && close) f06(q, q.v17.id, 1)
    }
}

function f21(q) {
    if (q.v29Str) {
        eval(q.v29Str)
        if (q.v29) clearTimeout(q.v29)
        q.v29 = setTimeout("f21(" + q.name + ")", q.v55)
    }
}

function f22Impl(item) {
    var q = eval("window." + item.qId)
    var ownerPopup = zz(q.v18, item.owner)
    if (item.id && item.id.indexOf("scroll") != -1) {
        q.v29Str = item.url
        var jsind = q.v29Str.indexOf('javascript:')
        if (jsind != -1) q.v29Str = q.v29Str.substring(jsind)
        f21(q)
        return
    }
    f34(q, ownerPopup, item)
    if (q.bHlNL || item.url || item.v30) {
        item.style.color = ownerPopup.v05
        item.style.textDecoration = fontTextDecoration
        item.style.background = (!ownerPopup.v07 && q.v11) ? "transparent" : ownerPopup.v07
    }
    if (!q.itemOverDelay) {
        f222(q, item)
    } else {
        if (q.v59) clearTimeout(q.v59)
        q.itemOverObj = item
        q.v59 = setTimeout("f222 (" + q.name + ",null)", q.itemOverDelay)
    }
}

function f22() {
    var item = this
    f22Impl(item)
}

function f222(q, itemObj) {
    var item = (itemObj ? itemObj : q.itemOverObj)
    if (!item) return
    var bOp = 0
    var ownerPopup = zz(q.v18, item.owner)
    if (ownerPopup.v14) {
        if (item.v30 && item.v30 + 'pp' == ownerPopup.v14.id) bOp = 1
        if (!bOp) f06(q, ownerPopup.v14.id)
    }
    if (item.status)
        window.status = item.status
    else if (item.url && item.url.indexOf("javascript:") == -1)
        window.status = item.url
    else
        window.status = ""
    f01(q.v60, item, 1, 0, q.v11, 0)
    if (item.v30 && !bOp) {
        var rect = f19(q, item)
        var x = rect.right - q.levelOffset
        var y = rect.top
        var pp = f05(q, item.v30, ownerPopup.level + 1, item.owner)
        ownerPopup.v14 = pp
        f08(q, pp, x + q.xSOff, y + q.ySOff, false, ownerPopup)
    }
}

function f23() {
    var item = this
    var q = eval("window." + item.qId)
    if (q.v29) {
        q.v29Str = null;
        clearTimeout(q.v29);
    }
    f01(q.v60, item, 0, 0, q.v11, 0)
    if (item.id && item.id.indexOf("scroll") != -1) return
    window.status = ""
}

function exM(q, ppId, refWnd, dum, ml, mt, mr, mb) {
    if (!docLoaded) return
    if (ppId == 'none') {
        var aid = f57(q)
        if (!q.itemOverDelay && aid)
            f06(q, aid)
        else
            f15Impl(q)
        if (q.v58) clearTimeout(q.v58)
        return
    }
    var bFr = q.v19 && !q.v20
    var rect
    if (refWnd == 'coords') {
        rect = f18(q, zz(0, q.name + 'tl'))
        rect.left = rect.left + ml
        rect.top = rect.top + mt
        rect.right = rect.left + mr
        rect.bottom = rect.top + mb
    } else {
        rect = f18(q, zz(0, refWnd))
        if (mac && !q.menuHorizontal) {
            var ind = refWnd.indexOf('tlm')
            if (ind != -1) rect.top += (rect.bottom - rect.top) * parseInt(refWnd.substr(ind + 3))
        }
    }
    if (q.bVarWidth && !q.v11) q.v02 = rect.right - rect.left + (IE4 ? q.bord * 2 : 0)
    var x
    var y
    if (q.menuHorizontal) {
        x = rect.left - q.bord
        y = rect.bottom
    } else {
        x = rect.right
        y = rect.top - q.bord
    }
    if (!q.itemOverDelay) {
        exM2(q, ppId, refWnd, x, y)
    } else {
        if (q.v59) clearTimeout(q.v59)
        q.v59 = setTimeout("exM2 (" + q.name + ",'" + ppId + "','" + refWnd + "'," + x + "," + y + ")", q.itemOverDelay)
    }
}

function f57(q) {
    if (typeof(q.v17) != 'undefined' && q.v17 && typeof(q.v17.id) != 'unknown' && typeof(q.v17.id) != 'undefined')
        return q.v17.id
    return null
}

function exM2(q, ppId, refWnd, x, y) {
    if (q.v58) clearTimeout(q.v58)
    var aid = f57(q)
    if (aid && aid != ppId + "pp")
        f06(q, aid)
    var pp = f05(q, ppId, 0, null, refWnd)
    f08(q, pp, x + q.xOff, y + q.yOff, true, null)
    q.v17 = pp
}

function coM(q, ppId) {
    if (!docLoaded) return
    if (q.v59 && q.itemOverDelay && q.actm && !q.v17) chgBg(q, q.actm, 0, 1)
    clearTimeout(q.v59)
    f15Impl(q)
}

function f28() {
    var nmn
    for (nmn = 1; nmn <= lastm; nmn++) {
        var q = eval("window.m" + nmn)
        var aid = f57(q)
        if (aid) f06(q, aid, 1)
    }
}

function f29() {
    if (docLoaded) return
    var nmn
    for (nmn = 1; nmn <= lastm; nmn++) {
        var q = eval("window.m" + nmn)
        if (q) {
            q.v18 = (q.v19 && !q.v20) ? f53(window.top, q.v24) : window
            q.targetFrame = (q.v19) ? f53(window.top, q.cntFrame) : window
            if (!q.mout) f30(q.v18.document, "click", "f28", false)
        }
    }
    docLoaded = true
}

function f30(obj, event, fun, bubble) {
    if (obj.addEventListener)
        obj.addEventListener(event, eval(fun), bubble)
    else
        eval("obj.on" + event + "=" + fun)
}

function chgBg(q, item, color, cl) {
    if (!IE4 && !DOM && !Opera7) return
    if (!q.v52) {
        var el = zz(0, item)
        var ela = zz(0, item + 'a')
        var ncl = el.bgc ? el.bgc : q.tlmOrigBg
        var hcl = q.tlmHlBg
        var tcl = el.tc ? el.tc : q.tlmOrigCol
        if (color == 0) {
            if (cl) {
                if (!q.v25) {
                    el.style.background = ncl
                    el.style.color = tcl
                }
                if (ela) {
                    ela.style.color = tcl;
                    el.style.cursor = 'default';
                }
            }
        } else {
            var bSetC = (!el.tc || (!el.bgc && q.tlmOrigBg))
            if (q.actm && q.actm != item) chgBg(q, q.actm, 0, 1)
            if (!q.v25) {
                if (color & 1) {
                    if (bSetC) el.bgc = el.style.background;
                    el.style.background = hcl;
                }
                if (bSetC) el.tc = el.style.color
                el.style.color = q.tlmHlCol
            }
            if (ela && color & 2) {
                if (bSetC) el.tc = ela.style.color;
                ela.style.color = q.tlmHlCol;
                el.style.cursor = 'pointer';
            }
            q.actm = item
            if (bSetC) {
                if (!el.tc) el.tc = tcl;
                if (!el.bgc) el.bgc = ncl;
            }
        }
    }
}

function f52(str, src, trg) {
    var s = str
    var start = 0
    while (true) {
        var ind = s.indexOf(src, start)
        if (ind == -1) {
            break
        }
        s = s.substring(0, ind) + trg + s.substr(ind + src.length)
        start = ind + trg.length
    }
    return s
}

function f51(arr, nmn, menuid, foldid, q, bf) {
    var code = eval('window.m' + nmn + (bf ? 'templFold' : 'templFile'))
    code = f52(code, "(menutxt)", arr[menuid * 5])
    code = f52(code, "(menuurl)", arr[menuid * 5 + 1])
    code = f52(code, "(foldind)", foldid.toString())
    code = f52(code, "(menuind)", menuid.toString())
    var fr = arr[menuid * 5 + 3]
    if (!fr)
        fr = q.cntFrame
    code = f52(code, "(trgframe)", fr ? fr : "")
    var params = arr[menuid * 5 + 4]
    var icostr = ''
    var icon = f56(params, null)
    if (icon)
        icostr = "<img src=\'" + icon + "\' border=\'0\' align=\'middle\' /> "
    code = f52(code, "(icon)", icostr)
    var statstr = ''
    var stat = f56(params, "s")
    if (stat)
        statstr = "onmouseover=\"window.status='" + stat + "';return true\" onmouseout=\"window.status='';return true\" "
    code = f52(code, "(status)", statstr)
    var attr = eval('window.m' + nmn + '.attr')
    var col = f56(params, "c")
    if (!col && attr)
        col = attr[9]
    code = f52(code, "(textcol)", col)
    var bg = f56(params, "b")
    if (!bg && attr)
        bg = attr[10]
    code = f52(code, "(bgcol)", bg)
    var prop = ''
    var popW = f56(params, "w")
    if (popW)
        prop += "w:" + popW + ";"
    var popC = f56(params, "p")
    if (popC)
        prop += "p:" + popC + ";"
    if (prop)
        eval("document.m" + nmn + "mn" + foldid + "prop=\"" + prop + "\"")
    return code
}

function f50() {
    var nmn
    for (nmn = 1; nmn <= lastm; nmn++) {
        var q = eval("window.m" + nmn)
        if (q) {
            var tbl1 = eval("window.m" + nmn + "tbl1")
            if (tbl1) {
                var i
                var code = tbl1
                var j = 1
                var ar = eval("m" + nmn + "mn")
                for (i = 0; i < ar.length / 5; i++) {
                    var bf = ar[i * 5 + 2]
                    code += f51(ar, nmn, i, j, q, bf)
                    if (i + 1 < ar.length / 5)
                        code += eval('window.m' + nmn + 'templSep')
                    code += "\n"
                    if (bf) j++
                }
                var tbl2 = eval("window.m" + nmn + "tbl2")
                code += tbl2
                var tbl = document.getElementById('menubar_m' + nmn)
                if (tbl) {
                    tbl.innerHTML = code
                }
            }
        }
    }
}

function f31() {
    var i
    var l = document.lastLoadHandler
    document.lastLoadHandler = -1
    for (i = 0; i <= l; i++) {
        var h = document.loadHandlers[i]
        if (typeof(h) != 'function') {
            var bPar = (h.indexOf('(') == -1)
            eval(h + (bPar ? '();' : ';'))
        } else {
            h()
        }
    }
}

function f58(item) {
    var a = document.getElementById(item)
    var m = item.indexOf('tlm')
    if (m != -1 && a) {
        var q = eval("window." + item.substr(0, m))
        f59(q, a.href, a.target)
    }
}