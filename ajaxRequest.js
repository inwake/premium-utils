function ajaxRequest(httpVerb, location, config) {

    let url = location;
    let requestBody;
    let requestHeaders = [];
    let response = {};

    for ( let i = 0; i < arguments.length; i++ ) {
        if ( typeof arguments[i] === 'object' ) {
            config = arguments[i];
        }
    }

    let xhr = new XMLHttpRequest();

    if ( ! xhr ) {
        console.warn('Failed to create an xhr instance');
    }

    if (config) {
        Object.keys(config).forEach( key => {

            switch (key) {
                case 'params':
                    let queryString = '?';
                    let params = Object.entries( config.params );
                    if ( params.length > 0 ) {
                        params.forEach( ( param, index ) => {
                            queryString += `${ param[0] }=${ param[1] }${ index < ( params.length - 1 ) ? '&' : '' }`;
                        } );
                    }
                    url += queryString;
                    break;
                case 'body':
                    requestBody = config.body instanceof FormData ? config.body : JSON.stringify( config.body );
                    break;
                case 'headers':
                    if ( config.headers && config.headers.length > 0 ) {
                        config.headers.forEach( header => {
                            requestHeaders.push( Object.entries(header)[0] );
                        } );
                    }
                    break;
                case 'json':
                    if (config.json) {
                        requestHeaders.push( [ "Accept", "application/json" ] );
                        requestHeaders.push( [ "Content-Type", "application/json" ] );
                    }
                    break;
                default:
                    break;
            }
    
        } );
    }

    let promise = new Promise( ( resolve, reject ) => {

        xhr.open( httpVerb.toUpperCase(), url );
        requestHeaders.forEach( header => xhr.setRequestHeader( header[0], header[1] ) );

        xhr.onreadystatechange = function () {

            if (xhr.readyState === XMLHttpRequest.DONE) {

                if (xhr.responseText) try { response.body = JSON.parse(xhr.responseText) } catch (err) {};
                const rawResponseHeaders = xhr.getAllResponseHeaders().trim().split(/[\r\n]+/);
                response.headers = {};

                rawResponseHeaders.forEach( function (line) {
                    const parts = line.split(': ');
                    const header = parts.shift().replace("-", "");
                    const value = parts.join(': ');
                    response.headers[header] = value;
                } );

                if ( Number( xhr.status.toString().charAt(0) ) === 2 ) {
                    response.success = true;
                    resolve(response);
                } else {
                    // console.warn("Ajax Request NOT Successful " + xhr.status);
                    // console.log(response.body);
                    response.success = false;
                    reject(response);
                }
            }

        };

        xhr.send( requestBody );
    
    } );

    return promise;
}

export default ajaxRequest;