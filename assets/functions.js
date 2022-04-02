window.addEventListener( 'DOMContentLoaded', event => {

	const toggleFootnotes = event => {
		const clicked_element = event.target;
		clicked_element.classList.toggle( 'active' );
		
		
		const active_textbox = clicked_element.closest( '.text-box' );
		const matching_footnotes = active_textbox.nextElementSibling;
		
		if ( clicked_element.classList.contains( 'active' ) ) {
			matching_footnotes.classList.add( 'visible' );
		} else {
			matching_footnotes.classList.remove( 'visible' );
		}
	}

	const footnote_toggle_ch1 = document.querySelector( '.flip-box' );
	footnote_toggle_ch1.addEventListener( 'click', toggleFootnotes );
	
	
    const footnote_toggle_ch2 = document.querySelector( '.flip-box-2' );
    footnote_toggle_ch2.addEventListener( 'click', toggleFootnotes );
    
    
    const footnote_toggle_ch3 = document.querySelector( '.flip-box-3' );
	footnote_toggle_ch3.addEventListener( 'click', toggleFootnotes );
    
    
    const footnote_toggle_ch4 = document.querySelector( '.flip-box-4' );
	footnote_toggle_ch4.addEventListener( 'click', toggleFootnotes );
    
    
    const footnote_toggle_ch5 = document.querySelector( '.flip-box-5' );
	footnote_toggle_ch5.addEventListener( 'click', toggleFootnotes );
    
    
    const footnote_toggle_ch6 = document.querySelector( '.flip-box-6' );
	footnote_toggle_ch6.addEventListener( 'click', toggleFootnotes );
    
} );