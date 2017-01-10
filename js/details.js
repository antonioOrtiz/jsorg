var Details = (function detailsHndlr() {
    'use strict';
    var publicAPI;


    function loadSomething(target, url) {
        publicAPI.xhrAdapter(url, function(url) {
            target.innerHTML = url;
        });
    }

    publicAPI = {

       'xhrAdapter' : undefined,

        init: function() {
            var helpDeskPersons = document.querySelectorAll('[rel="js-items"]')[0],
                content = document.querySelectorAll('[rel="js-details"]')[0],
                personSelected = document.querySelectorAll("js-select-person")[0];

            personSelected.addEventListener('click', false);

            helpDeskPersons.addEventListener('click', function(e) {
                var target = e.target,
                    relValForURL = target.attributes.rel.nodeValue.substr(target.attributes.rel.nodeValue.length - 1);
                if (target !== e.currentTarget) {
                    loadSomething(content, 'details/' + relValForURL + '.html');
                }

                console.dir(relValForURL);

            }, false);
        }
    };

    EVT.on('init', publicAPI.init);
    

    return publicAPI;
})();


