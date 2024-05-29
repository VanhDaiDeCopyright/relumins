function closeQuickCartModal() {
    jQuery.modal.close()
}

function do_qv() {
    var t = 80,
        i = 26,
        n = document.getElementsByTagName("img"),
        o = n.length,
        r, f = "";
    for (xx = 0; xx < o; xx++)
        if (r = n[xx], r.id.indexOf("qv_") != -1) {
            var e = r.id.replace("qv_", ""),
                s = findPosX(n[xx]) + Math.floor((n[xx].width - t) / 2),
                h = findPosY(n[xx]) + n[xx].height - i - 5,
                u = "qv_img_" + e,
                c = jQuery("#qv_buttontitle").length > 0 ? jQuery("#qv_buttontitle").html() : "Quick View";
            f += '<div id="' + u + '" style="z-index:999;top:' + h + "px;left:" + s + 'px;visibility:hidden;position:absolute;"><button class="qv btn" href="javascript:void();" onclick="open_product(\'product.asp?lt_c=1&itemid=' + e + "&qv=1');\" onmouseout=\"qv_hidden('" + u + "')\" onmouseover=\"qv_visible('" + u + "')\">" + c + "<\/button><\/div>";
            n[xx].onmouseover = function() {
                var u = this.id.replace("qv_", ""),
                    n = document.getElementById("qv_" + u),
                    r = document.getElementById("qv_img_" + u),
                    f, e;
                t = jQuery(r).outerWidth();
                i = jQuery(r).outerHeight();
                f = findPosX(n) + Math.floor((n.width - t) / 2);
                e = findPosY(n) + n.height - i - 5;
                jQuery(r).css({
                    left: f + "px",
                    top: e + "px",
                    visibility: "visible"
                })
            };
            n[xx].onmouseout = function() {
                var n = this.id.replace("qv_", ""),
                    t = document.getElementById("qv_img_" + n);
                jQuery(t).css({
                    visibility: "hidden"
                })
            }
        }
    document.getElementById("qv_buttons").innerHTML = f
}

function qv_visible(n) {
    document.getElementById(n).style.visibility = "visible"
}

function qv_hidden(n) {
    document.getElementById(n).style.visibility = "hidden"
}

function open_product(n) {
    var t = n;
    jQuery.modal('<iframe style="padding:0px;margin:0px;border:none;" frameborder="0"  id="' + t + '"  src="' + t + '" height="500" width="800" scrolling="no">', {
        modal: !0,
        closeHTML: "",
        containerCss: {
            backgroundColor: "#fff",
            borderColor: "#fff",
            height: 520,
            padding: 0,
            width: 820
        },
        overlayClose: !0,
        zIndex: 9999
    })
}

function findPosX(n) {
    var t = 0;
    if (n.offsetParent)
        for (;;) {
            if (t += n.offsetLeft, !n.offsetParent) break;
            n = n.offsetParent
        } else n.x && (t += n.x);
    return t
}

function findPosY(n) {
    var t = 0;
    if (n.offsetParent)
        for (;;) {
            if (t += n.offsetTop, !n.offsetParent) break;
            n = n.offsetParent
        } else n.y && (t += n.y);
    return t
}
if (typeof jQuery == "undefined") {
    document.write('<script type="text/javascript" src="assets/templates/common/js/jquery.min.js"><\/script>');
    var __noconflict = !0
}
jQuery(document).ready(function() {
    window.location.search.indexOf("quickcart") != -1 && (jQuery(window).width() <= 767 ? jQuery.modal('<iframe style="padding:0px;margin:0px;border:none;" frameborder="0" src="view_cart_quick.asp" height="215" width="300" scrolling="no">', {
        closeClass: "modalCloseImg",
        closeHTML: "<a href='#'>Close<\/a>",
        containerCss: {
            backgroundColor: "#fff",
            borderColor: "#fff",
            height: 222,
            padding: 0,
            width: 307
        },
        overlayClose: !0,
        zIndex: 9999
    }) : jQuery.modal('<iframe style="padding:0px;margin:0px;border:none;" frameborder="0" src="view_cart_quick.asp" height="575" width="800" scrolling="no">', {
        closeClass: "modalCloseImg",
        closeHTML: "<a href='#'>Close<\/a>",
        containerCss: {
            backgroundColor: "#fff",
            borderColor: "#fff",
            height: 582,
            padding: 0,
            width: 807
        },
        overlayClose: !0,
        zIndex: 9999
    }));
    jQuery("<div id='qv_buttons'><\/div>").appendTo("body")
});
jQuery(window).load(function() {
    var n = setTimeout("do_qv();", 10)
});
jQuery(window).resize(function() {
    var n = setTimeout("do_qv();", 10)
})