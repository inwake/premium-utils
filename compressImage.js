export default function compressImage(image, quality, callback) {
	var fileReader = new FileReader();

	fileReader.onload = function (event) {

		var image = new Image();
        image.src = event.target.result;
        
        image.onload = function() {
            if (image.width > 1000) {
                callback(resizeImage(image, quality));
            } else {
                callback(resizeImage(image, 0.92));
            }
        }

	};

    fileReader.readAsDataURL(image);

    function resizeImage(image, quality) {

    	var canvas = document.createElement('canvas');

    	canvas.width = image.width;
        canvas.height = image.height;
        
    	var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        
        return canvas.toDataURL("image/jpeg", quality);

    }
}
