var Carousel = (function carouselHndlr() {

    function scrollLeft(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position > 0) {
            position = Math.max(0, position - 250);
        }

        $items.css({ left: (-position) + "px" });
    }

    function scrollRight(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position < maxPosition) {
            position = Math.min(maxPosition, position + 250);
        }

        $items.css({ left: (-position) + "px" });
    }

    var $content = $("[rel=js-carousel] > [rel=js-content]"),
        $items = $content.children("[rel=js-items]"),
        $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]"),
        $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]"),

        contentWidth = $content.width(),
        itemsWidth = $items.width(),
        position = 0,
        maxPosition = (itemsWidth - contentWidth),

        publicAPI;

    // attach click handlers for the `$left` and `$right` buttons,
    // that call the `scrollLeft(..)` and `scrollRight(..)` functions,
    // respectively
    publicAPI = {
        init: function() {
            var js_controls = document.querySelectorAll('[rel="js-controls"]')[1].children;

            for (var i = 0, l = js_controls.length; i < l; i++) {
                (function(i) {
                    js_controls[i].addEventListener('click', function(e) {
                        (js_controls[i].getAttribute('class') == 'left') ? scrollLeft(e): scrollRight(e);
                    }, false);
                })(i);
            }
        }
    };

    EVT.on('init', publicAPI.init);


    return publicAPI;
    
})();
