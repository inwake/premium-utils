function extractNestedValue( object, keys ) {
	try {
		var value = object;
		keys.forEach( key => {
			value = value[ key ];
		} );
		return value;
	} catch (err) {
		return false;
	}
	
}

export default extractNestedValue;