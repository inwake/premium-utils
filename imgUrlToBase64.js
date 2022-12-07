export default function imgUrlToBase64(imageUrl, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        const reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };

    xhr.open('GET', imageUrl+'?CORS');
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.responseType = 'blob';
    xhr.send();
}
