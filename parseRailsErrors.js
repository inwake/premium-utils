export default function parseRailsErrors(errors) {
	let errorMessages = [];	
	Object.entries( errors ).forEach( error => {
		if (error[1].length) {
			let errorMessage = ''
			error[1].forEach( message => errorMessage += ( message + ' ' ) );
			errorMessages.push( { key: error[0], error: errorMessage } );
		}
	} )
	return errorMessages;
}
