export default function ajaxRequest(httpVerb, location, config) {
    /// <summary>Async network requests.
    ///     IMPORTANT: Returns a promise which resolves
    ///     to the response object if the request status code is 2xx and rejects
    ///     to the response object for all other status codes.
    ///     Do not use success property on response. Rejection handling is required here.</summary>
    /// <param name="httpVerb" type="String">HTTP Verb - GET, POST, PUT etc.</param>
    /// <param name="url" type="String">URL - without query params.
    ///     Query params can be added as key value pairs of an optional
    ///     params property of the config object.
    ///     ONLY if params property is not present on config object,
    ///     query params can be included directly in the url string.</param>
    /// <param name="config" type="Object">Optional config object.
    ///     config object can have the following properties:
    ///     params: Object - key value pairs of query params.
    ///     body: Object or FormData as the request body.
    ///     headers: Array - array of objects with one key value pair each.
    ///         Each key value pair is a header name and header value.
    ///     json: Boolean - true if request body is json.
    ///         If true, Accept and Content-Type headers are added to the request.
    /// <returns type="Number">The area.</returns>

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
