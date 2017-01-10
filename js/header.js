var Header = (function headerHdlr() {
    'use strict';
    var publicAPI;


    function loadSomething(modal, url) {

        publicAPI.xhrAdapter(url, function(url) {
            modal.innerHTML = url;
            modal.style.display = 'block';
        });
    }


    publicAPI = {
        'xhrAdapter': undefined,
        init: function() {
            var js_controls = document.querySelectorAll('[rel="js-controls"]')[0].children,
                modal = document.getElementById('modal');

            for (var i = 0, l = js_controls.length; i < l; i++) {
                (function(i) {
                    var href = js_controls[i].href;

                    js_controls[i].addEventListener('click', function(e) {
                        e.preventDefault();
                        loadSomething(modal, href);
                    }, false);
                })(i);
            }
        }
    };

    EVT.on('init', publicAPI.init);
    

    return publicAPI;



})();
