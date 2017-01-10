   (function(global) {

       global.EVT = new EventEmitter2();

       $(document).ready(function() {
           Header.xhrAdapter = xhrRequest;
           EVT.emit('init');
           Details.xhrAdapter = xhrRequest;
       });

   })(window);
