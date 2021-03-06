function RevSlider1_Init() {
    $("#rev_slider_1").show().revolution( {
        sliderType:"standard", sliderLayout:"auto", dottedOverlay:"none", delay:9e3, navigation: {
            keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"on", touch: {
                touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1
            }
            , arrows: {
                style:"hebe", enable:!0, hide_onmobile:!0, hide_under:600, hide_onleave:!0, hide_delay:200, hide_delay_mobile:1200, left: {
                    h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                }
                , right: {
                    h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                }
            }
        }
        , responsiveLevels:[1240, 1024, 778, 480], visibilityLevels:[1240, 1024, 778, 480], gridwidth:[1920, 1024, 778, 480], gridheight:[550, 550, 550, 550], lazyType:"none", shadow:0, spinner:"spinner3", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
            simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
        }
    }
    )
}

function RevSlider2_Init() {
    $("#rev_slider_2").show().revolution( {
        sliderType:"standard", sliderLayout:"auto", dottedOverlay:"none", delay:9e3, navigation: {
            keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"on", touch: {
                touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1
            }
            , arrows: {
                style:"hebe", enable:!0, hide_onmobile:!0, hide_under:600, hide_onleave:!0, hide_delay:200, hide_delay_mobile:1200, left: {
                    h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                }
                , right: {
                    h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                }
            }
        }
        , responsiveLevels:[1240, 1024, 778, 480], visibilityLevels:[1240, 1024, 778, 480], gridwidth:[1920, 1024, 778, 480], gridheight:[550, 550, 550, 550], lazyType:"none", shadow:0, spinner:"spinner3", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
            simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
        }
    }
    )
}

function RevSlider3_Init() {
    $("#rev_slider_3").show().revolution( {
        sliderType:"standard", sliderLayout:"auto", dottedOverlay:"none", delay:9e3, navigation: {
            keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"on", touch: {
                touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1
            }
            , arrows: {
                style:"hebe", enable:!0, hide_onmobile:!0, hide_under:600, hide_onleave:!0, hide_delay:200, hide_delay_mobile:1200, left: {
                    h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                }
                , right: {
                    h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                }
            }
        }
        , responsiveLevels:[1240, 1024, 778, 480], visibilityLevels:[1240, 1024, 778, 480], gridwidth:[1920, 1024, 778, 480], gridheight:[700, 700, 700, 700], lazyType:"none", shadow:0, spinner:"spinner3", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
            simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
        }
    }
    )
}

function RevSlider4_Init() {
    $("#rev_slider_4").show().revolution( {
        sliderType:"standard", sliderLayout:"fullscreen", dottedOverlay:"none", delay:9e3, navigation: {
            keyboardNavigation:"off", keyboard_direction:"horizontal", mouseScrollNavigation:"off", mouseScrollReverse:"default", onHoverStop:"on", touch: {
                touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1
            }
            , arrows: {
                style:"hebe", enable:!0, hide_onmobile:!0, hide_under:600, hide_onleave:!0, hide_delay:200, hide_delay_mobile:1200, left: {
                    h_align: "left", v_align: "center", h_offset: 20, v_offset: 0
                }
                , right: {
                    h_align: "right", v_align: "center", h_offset: 20, v_offset: 0
                }
            }
        }
        , responsiveLevels:[1240, 1024, 778, 480], visibilityLevels:[1240, 1024, 778, 480], gridwidth:[1920, 1024, 778, 480], gridheight:[700, 700, 700, 700], lazyType:"none", shadow:0, spinner:"spinner3", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", fullScreenAutoWidth:"off", fullScreenAlignForce:"off", fullScreenOffsetContainer:"", fullScreenOffset:"", hideThumbsOnMobile:"off", hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, debugMode:!1, fallbacks: {
            simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1
        }
    }
    )
}

var snapper=new Snap( {
    element: document.getElementById("page"), dragger: document.getElementsByClassName("page"), disable: "right", slideIntent: 10
}

),
addEvent=function(e, i, t) {
    return e.addEventListener?e.addEventListener(i, t, !1): e.attachEvent?e.attachEvent("on"+i, t): void 0
}

;
addEvent(document.getElementById("open-left"), "click", function() {
    snapper.open("left")
}

),
jQuery(document).ready(function(e) {
    var i=e(".mini-cart");
    if(i.on("click", function(i) {
        e(this).addClass("open")
    }
    ), e(document).on("click", function(t) {
        0==e(t.target).closest(i).length&&i.removeClass("open")
    }
    ), e(".search-btn").on("click", function() {
        e(".top-search").slideToggle(), e(".top-search input").focus()
    }
    ), e(".portfolioContainer").each(function() {
        var i=e(this), t=i, o=e(".filter-wrapper");
        o.on("click", "a", function() {
            var i=e(this).attr("data-filter");
            return e(".filter-wrapper").find(".filterbutton").removeClass("selected"), e(".current", o).removeClass("current"), e(this).addClass("current"), t.isotope( {
                filter: i
            }
            ), !1
        }
        ), e(window).on("resize", function() {
            t.imagesLoaded(function() {
                t.isotope( {
                    layoutMode: "masonry", itemSelector: ".grid-item", transitionDuration: "0.5s"
                }
                )
            }
            )
        }
        ).resize(), o.find(".current").trigger("click")
    }
    ), e(".application_button").on("click", function() {
        e(".single_job_listing .application .application_details").slideDown()
    }
    ), e("#site-navigation").headroom( {
        offset: 42
    }
    ), e(window).scroll(function() {
        e(window).scrollTop()>100?e(".scrollup").addClass("show"): e(".scrollup").removeClass("show")
    }
    ), e(".scrollup").on("click", function(i) {
        e("html, body").animate( {
            scrollTop: 0
        }
        , 600), i.preventDefault()
    }
    ), e(".service-list").owlCarousel( {
        items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 2], itemsTablet: [767, 2], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !0, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".ourservices_btn_left").on("click", function() {
        e(".service-list").trigger("owl.prev")
    }
    ), e(".ourservices_btn_right").on("click", function() {
        e(".service-list").trigger("owl.next")
    }
    ), e(".service-list-2").owlCarousel( {
        items: 3, itemsDesktop: [1199, 3], itemsDesktopSmall: [979, 3], itemsTablet: [767, 2], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !0, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".ourservices_btn_left").on("click", function() {
        e(".service-list").trigger("owl.prev")
    }
    ), e(".ourservices_btn_right").on("click", function() {
        e(".service-list").trigger("owl.next")
    }
    ), e(".project-list").owlCarousel( {
        items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 2], itemsTablet: [767, 1], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".projects_btn_left").on("click", function() {
        e(".project-list").trigger("owl.prev")
    }
    ), e(".projects_btn_right").on("click", function() {
        e(".project-list").trigger("owl.next")
    }
    ), e(".news-list").owlCarousel( {
        items: 3, itemsDesktop: [1199, 3], itemsDesktopSmall: [979, 2], itemsTablet: [767, 2], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".news-list-2").owlCarousel( {
        items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 2], itemsTablet: [767, 2], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".testimonials-list").owlCarousel( {
        items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 2], itemsTablet: [767, 1], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".testimonials-list-2").owlCarousel( {
        items: 1, itemsDesktop: [1199, 1], itemsDesktopSmall: [979, 1], itemsTablet: [767, 1], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".client-list").owlCarousel( {
        items: 6, itemsDesktop: [1199, 6], itemsDesktopSmall: [979, 3], itemsTablet: [767, 2], itemsMobile: [480, 2], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".clients_btn_left").on("click", function() {
        e(".client-list").trigger("owl.prev")
    }
    ), e(".clients_btn_right").on("click", function() {
        e(".client-list").trigger("owl.next")
    }
    ), e(".project-slider").owlCarousel( {
        items: 1, itemsDesktop: [1199, 1], itemsDesktopSmall: [979, 1], itemsTablet: [767, 1], itemsMobile: [480, 1], slideSpeed: 500, paginationSpeed: 1e3, rewindSpeed: 1e3, autoHeight: !1, addClassActive: !0, autoPlay: !1, loop: !0, pagination: !1
    }
    ), e(".tm-prev").on("click", function() {
        e(".project-slider").trigger("owl.prev")
    }
    ), e(".tm-next").on("click", function() {
        e(".project-slider").trigger("owl.next")
    }
    ), e(".slider-nivo").length>0&&e(".nivoSlider").nivoSlider( {
        effect: "random", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: 3e3, startSlide: 0, directionNav: !0, directionNavHide: !0, controlNav: !0, keyboardNav: !1, pauseOnHover: !0, manualAdvance: !1, prevText: "Prev", nextText: "Next"
    }
    ), e("#map-canvas").length>0) {
        var t=e("#map-canvas");
        if(t.length) {
            var o=t.attr("data-address"), l=t.attr("data-height"), n=t.attr("data-width"), s=t.attr("data-zoom_enable"), a=t.attr("data-zoom");
            t.gmap3( {
                action:"init", marker: {
                    address:o, options: {
                        icon: "images/map_marker.png"
                    }
                    , events: {
                        click:function(i, t) {
                            var o=e(this).gmap3("get");
                            infowindow=e(this).gmap3( {
                                get: {
                                    name: "infowindow"
                                }
                            }
                            ), infowindow?(infowindow.open(o, i), infowindow.setContent("Alexander Hamilton Bridge")):e(this).gmap3( {
                                infowindow: {
                                    anchor:i, options: {
                                        content: "Alexander Hamilton Bridge"
                                    }
                                }
                            }
                            )
                        }
                    }
                }
                , map: {
                    options: {
                        zoom: parseInt(a), zoomControl: !0, mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControl: !1, scaleControl: !1, scrollwheel: "enable"==s?!0: !1, streetViewControl: !1, draggable: !0
                    }
                }
            }
            ).width(n).height(l)
        }
    }
    e("#rev_slider_1").length>0&&RevSlider1_Init(), e("#rev_slider_2").length>0&&RevSlider2_Init(), e("#rev_slider_3").length>0&&RevSlider3_Init(), e("#rev_slider_4").length>0&&RevSlider4_Init()
}

),
$(window).load(function() {
    "use strict";
    $("#loading").fadeOut(300)
}

);