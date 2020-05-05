const { createElement } = wp.element;

const barn2_deleteIcon = createElement(
	'svg',
	{
		xmlns: "http://www.w3.org/2000/svg",
		width: 16,
		height: 16,
		viewBox: "0 0 24 24"
	},
	createElement( 'path',
		{
			d: "M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z"
		}
	)
);

const barn2_reorderIcon = createElement(
	'svg',
	{
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 24,
		viewBox: "0 0 20 24"
	},
	createElement( 'circle', { cx: '5.5', cy: '4.5', r: '2.5' } ),
	createElement( 'circle', { cx: '5.5', cy: '11.5', r: '2.5' } ),
	createElement( 'circle', { cx: '14.5', cy: '11.5', r: '2.5' } ),
	createElement( 'circle', { cx: '5.5', cy: '18.5', r: '2.5' } ),
	createElement( 'circle', { cx: '14.5', cy: '18.5', r: '2.5' } ),
	createElement( 'circle', { cx: '14.5', cy: '4.5', r: '2.5' } )
);

const waitForReference = ( ref, ready ) => {

	if ( ref.current ) {
		ready( ref.current );
	} else {
		window.setTimeout( waitForReference, 100, ref, ready );
	}

};

const removeArrayIndex = ( array, index ) => {

	let newArray = [];

	for ( var i in array ) {
		if ( i !== index ) {
			newArray.push( array[i] );
		}
	}

	return newArray;

}