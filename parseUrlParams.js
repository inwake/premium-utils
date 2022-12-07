export default function parseUrlParams(rawParams) {
    rawParams = rawParams.split('?')[1];
    rawParams = rawParams.replace(/^/,'&');
    rawParams = rawParams.split(/[&]/);
    rawParams.shift();
    
    var params = {};
    
    for (var i = 0; i < rawParams.length; i++) {
        var tempParams = rawParams[i].split(/[=]/);
        tempParams[0] = tempParams[0].replace("-", "");

        params[tempParams[0]] = decodeURIComponent(tempParams[1]);
    }

    return params;
}
