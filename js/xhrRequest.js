var xhrRequest = function(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            return callback(xhr.responseText);
        }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
};
