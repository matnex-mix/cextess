function CEXTESS() {
	cxts_style_holder = document.createElement('style');
	cxts_style_holder.id = 'cextess_style_holder';

	cxts_elements = document.querySelectorAll( '[-cxts-]' );
	cxts_class = '';
	cxts_class_name_prefix = '-cxts-'+(Math.random()*(10**18));
	cxts_elements.forEach( function(cxts_element, index){
		cxts_class_name = cxts_class_name_prefix+(index+1);
		for( x=0; x<cxts_element.attributes.length; x++ ) {
			if(cxts_element.attributes[x].localName.startsWith('style:')) {
				cxts_pseudo = cxts_element.attributes[x].localName.replace('style', '');
				if( cxts_pseudo.startsWith(':child-') ) {
					cxts_pseudo = cxts_pseudo.replace('child-', 'nth-child(')+')';
				} else if( cxts_pseudo.startsWith(':type-') ) {
					cxts_pseudo = cxts_pseudo.replace('type-', 'nth-of-type(')+')';
				}
				cxts_class += '.'+cxts_class_name+cxts_pseudo+' {'+
				cxts_element.attributes[x].value
				+'}\n';
			}
		}
		cxts_element.classList.toggle(cxts_class_name);
	} );
	cxts_style_holder.innerHTML = cxts_class;
	document.head.appendChild( cxts_style_holder );
}

if( document.readyState == 'loading' ) {
	window.addEventListener( 'DOMContentLoaded', CEXTESS );
} else {
	CEXTESS();
}