var ver = '4.0.1'
var m1 = new Object
m1.name = 'm1'
m1.fnm = 'index_m1'
if (!window.lastm || window.lastm < 3) lastm = 3
m1.v17 = null
m1.v17Timeout = ''
var maxZ = 1000
m1.v18
m1.targetFrame
var docLoaded = false
m1.bIncBorder = true
m1.v29 = null
m1.v29Str = ''
m1.v55 = 180
m1.scrollStep = 10
m1.fadingSteps = 8
m1.itemOverDelay = 0
m1.transTLO = 0
m1.fixSB = 0
m1.v62 = 0
m1.v21 = "."
m1.maxlev = 1
m1.v22 = 0
m1.sepH = 0
m1.bHlNL = 0
m1.showA = 1
m1.bVarWidth = 0
m1.bShowDel = 0
m1.scrDel = 0
m1.v23 = 230
m1.levelOffset = 0
m1.bord = 1
m1.vertSpace = 10
m1.sep = 0
m1.v19 = false
m1.bkv = 0
m1.rev = 0
m1.shs = 0
m1.xOff = 0
m1.yOff = -10
m1.xSOff = 0
m1.ySOff = 0
m1.v20 = false
m1.cntFrame = ""
m1.menuFrame = ""
m1.v24 = ""
m1.mout = true
m1.iconSize = 8
m1.closeDelay = 100
m1.tlmOrigBg = ""
m1.tlmOrigCol = ""
m1.v25 = false
m1.v52 = false
m1.v60 = 99
m1.v11 = false
m1.v10 = 0
m1.ppLeftPad = 4
m1.v54 = 0
m1.v01 = 5
m1.tlmHlBg = "#fff"
m1.tlmHlCol = "#91baff"
m1.borderCol = "#d1d1d1"
m1.menuHorizontal = true
m1.scrollHeight = 6
m1.attr = new Array("22px", false, false, false, "#9c9c9c", "#fff", "#91baff", "inherit", "#fff", "#9c9c9c", "#fff")
window.m1templFold = "<li onmouseover=\"chgBg(m1,'m1tlm(menuind)',3);exM(m1,'m1mn(foldind)','m1tlm(menuind)',event)\" onmouseout=\"chgBg(m1,'m1tlm(menuind)',0);coM(m1,'m1mn(foldind)')\" id=\"m1tlm(menuind)\" onmousedown=\"f58('m1tlm(menuind)a')\"  ><a id=\"m1tlm(menuind)a\" (status)style=\"color:(textcol);text-underline:none;\" href=\"(menuurl)\" target=\"(trgframe)\" class=\"cat\">(menutxt)</a></li>"
window.m1templFile = "<li onmouseover=\"chgBg(m1,'m1tlm(menuind)',3);exM(m1,'none','',event)\" onmouseout=\"chgBg(m1,'m1tlm(menuind)',0,1)\" id=\"m1tlm(menuind)\" onmousedown=\"f58('m1tlm(menuind)a')\" ><a id=\"m1tlm(menuind)a\" href=\"(menuurl)\" (status)style=\"color:(textcol);text-underline:none;\" target=\"(trgframe)\" class=\"cat\">(menutxt)</a></li>"
window.m1templSep = ""
window.m1tbl1 = "<ul class=\"mobile cat-list\" id=\"cat-list\" style=\"position:relative; \" >\n"
window.m1tbl2 = "\n</ul>"
m1mn = new Array()

function gpc(ar) {
    var i
    var cnt = 0
    for (i = 0; i < ar.length / 5; i++) {
        if (ar[i * 5 + 2] == 1) {
            cnt++
        }
    }
    return cnt
}

function insertItemToMenu(itemText, itemUrl, parentMenu, bPopup, targetFrame, itemIcon, nMenu) {
    var parentMenuId = parentMenu ? parentMenu : ((nMenu ? nMenu : 'm1') + 'mn')
    var arr = eval('window.' + parentMenuId)
    if (!arr) {
        eval('window.' + parentMenuId + '= new Array ();')
        arr = eval('window.' + parentMenuId)
    }
    var item = parentMenu ? (arr.length / 5 + 1) : (gpc(arr) + 1)
    if (arr.push) arr.push(itemText, itemUrl, bPopup ? 1 : 0, targetFrame, itemIcon)
    else {
        arr[arr.length] = itemText
        arr[arr.length] = itemUrl
        arr[arr.length] = bPopup ? 1 : 0
        arr[arr.length] = targetFrame
        arr[arr.length] = itemIcon
    }
    var newId = (parentMenuId + (parentMenu ? '_' : '') + item.toString())
    if (bPopup) {
        eval("document." + newId + "prop = \'" + itemIcon + "\';")
    }
    return newId
}

function addSubMenu(itemText, itemUrl, targetFrame, parentMenu, itemIcon, nMenu) {
    return insertItemToMenu(itemText, itemUrl, parentMenu, 1, targetFrame, itemIcon, nMenu)
}

function addMenuItem(itemText, itemUrl, targetFrame, parentMenu, itemIcon, nMenu) {
    return insertItemToMenu(itemText, itemUrl, parentMenu, 0, targetFrame, itemIcon, nMenu)
}

function addTopLevelMenu(itemText, itemUrl, targetFrame, itemIcon, nMenu) {
    var url
    if (!itemUrl || itemUrl == '') {
        url = 'javascript:void(0);'
    } else {
        url = itemUrl
    }
    return addSubMenu(itemText, url, null, targetFrame, itemIcon, nMenu)
}

function getTopLevelMenu(nSubMenu, nMenu) {
    return ((nMenu ? nMenu : 'm1') + 'mn' + nSubMenu)
}
absPath = ""
if (m1.v19 && !m1.v20) {
    if (window.location.href.lastIndexOf("\\") > window.location.href.lastIndexOf("/")) {
        sepCh = "\\";
    } else {
        sepCh = "/";
    }
    absPath = window.location.href.substring(0, window.location.href.lastIndexOf(sepCh) + 1)
}
m1.v02 = m1.v23
document.write("<style type='text/css'>\n.m1CL0,.m1CL0:link,.m1CL0:visited,.m1CL0:link:visited{font-family: 'Lato', sans-serif; font-size:26px; line-height:32px; font-weight:400; color:#000; text-decoration:none; text-transform:none; padding:0px; display:block;}\n.m1CL0:hover{text-decoration:none; color:#fff;}\n.m1mit{padding-left:5px;padding-right:15px;color:#604839; font-weight:bold; font-family:\"Noto Sans\", sans-serif; font-size:12px; }\n" + "</" + "style>")
document.write("<script type='text/javascript' src='./menu_dom.js'></" + "script>")