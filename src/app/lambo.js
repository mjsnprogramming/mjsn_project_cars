"use strict";
!function(o,e){
  var a=o("header");
  s=a.find("nav"),t=s.find(".lev-1 a"),l=o(".overlay>[data-item]"),v=a.find(".overlay"),d=o("#menu-link-data"),n=a.find("#burger-menu"),r=s.find("#mask"),c=o("html").hasClass("touchevents");t.on("click",function(e){c&&null!=o(e.currentTarget).data("target")&&(e.preventDefault(),i(e))}),t.mouseenter(function(e){c||i(e)});var i=function(e){var a=o(e.currentTarget);if(!a.parent("li").hasClass("active")){var t=a.data("target");if(v.trigger("mouseleave"),null!=t){a.addClass("active").parent("li").addClass("active");var l=o('.overlay>[data-item="'+t+'"]');l.css({left:a.offset().left}),l.addClass("active");var i=o('.overlay>[data-item="'+t+'"] .lev-2').outerHeight();v.height(i),v.addClass("open"),o("body").on("click","#page",f)}}};v.mouseleave(function(e){null!=e.relatedTarget&&null!=e.relatedTarget.offsetParent&&"header"===e.relatedTarget.offsetParent.localName||u()});var f=function e(a){u(),o("body").off("click","#page",e)},u=function(){t.removeClass("active"),t.parent("li").removeClass("active"),v.removeClass("open"),l.removeClass("active"),v.find(".lev-2 [data-target], .lev-2 [data-get], .lev-3 a").removeClass("active"),d.removeClass("active").find(".link-data").removeClass("active"),o(".overlay .lev-3[data-item]").removeClass("active")};v.find(".lev-2 a").click(function(e){c&&null!=o(e.currentTarget).data("target")&&(g(e),e.preventDefault())}),v.find(".lev-2 a").mouseenter(function(e){c||g(e)});var g=function(e){var a=o(e.currentTarget);a.hasClass("active")||(v.find(".lev-2 a").removeClass("active"),o(".overlay .lev-3[data-item]").removeClass("active"));var t=a.closest("ul").outerHeight(),l=a.data("target");if(null==a.data("get")&&(d.removeClass("active"),d.find(".link-data").removeClass("active"),v.height(t),v.find(".lev-3 a").removeClass("active")),null!=l){a.addClass("active");var i=a.closest("ul").parent(".active").find('.lev-3[data-item="'+l+'"]');if(!d.hasClass("active")){var s=i.outerHeight(),n=t<s?s:t;v.height(n)}i.css({left:a.outerWidth()}).addClass("unselected").addClass("active")}};v.find(".lev-2 > li > a[data-get], .lev-3 > li > a").mouseenter(function(e){if(!c){var a=o(e.currentTarget);if(!a.hasClass("active")){var t=a.data("get");o(".lev-2 > li > a[data-get], .lev-3 > li > a").removeClass("active");var l=a.closest(".lev-3");if(0<l.length&&l.removeClass("unselected"),null!=t){var i=d.find("#"+t);if(i.hasClass("active"))return;o(".lev-2 [data-get], .lev-3 [data-get]").removeClass("active"),a.addClass("active"),0<i.length?(v.height(i.outerHeight()),d.addClass("active"),d.find(".link-data").removeClass("active"),i.addClass("active")):m(t)}else{d.removeClass("active"),d.find(".link-data").removeClass("active");var s=a.closest("ul").outerHeight(),n=a.closest("ul").parent(".active").find(".lev-2").outerHeight(),r=s<n?n:s;v.height(r)}}}});var h=!1,m=function(s){if(!h){h=!0;var e=function(){var e=window.location.protocol+"//"+window.location.hostname,a=window.location.href.substr(e.length),t=(a=a.split("/"))[1];return 2==t.indexOf("-en")?e+"/"+t:e}()+"/node/"+s+"/get-field/menu_link_data";o.get(e,function(e){if(""!=e){d.append(e);var a=d.find("#"+s);0<a.length&&(v.height(a.outerHeight()),d.addClass("active"),d.find(".link-data").removeClass("active"),a.addClass("active"))}else{d.removeClass("active");var t=v.find(".lev-3").outerHeight(),l=v.find(".lev-2").outerHeight(),i=t<l?l:t;v.height(i)}}).fail(function(e){d.removeClass("active")}).always(function(){h=!1})}};n.on("burger-open",function(e){n.addClass("open"),v.mouseleave();var a=o("nav > .lev-1").eq(0),t=s.find("button.hamburger");r.css({left:a.position().left,width:t.position().left-a.position().left}).addClass("active")}),n.on("burger-close",function(e){n.removeClass("open"),r.removeClass("active")}),o(window).on("global::debouncedResize",function(e){var a=s.find(".lev-1 a.active");if(0<a.length){var t=a.data("target");if(null!=t)o('.overlay>[data-item="'+t+'"]').css({left:a.offset().left})}if(d.hasClass("active")&&v.height(d.find(".active").outerHeight()),n.hasClass("open")){var l=o("nav > .lev-1").eq(0),i=s.find("button.hamburger");r.css({left:l.position().left,width:i.position().left-l.position().left})}}),o(window).on("global::layoutChanged",function(e){o("html").hasClass("layout-mobile")&&(v.trigger("mouseleave"),n.trigger("burger-close"),s.find("button.hamburger").attr("aria-expanded","false"))}),o(window).scroll(function(e){var a=o(window).outerHeight()/2;Math.abs(o(window).scrollTop())>a?s.hasClass("navbar-small")||s.addClass("navbar-small"):s.hasClass("navbar-small")&&s.removeClass("navbar-small")}),e.initSocialBind("header,footer")}(jQuery,GoogleTagManager);
