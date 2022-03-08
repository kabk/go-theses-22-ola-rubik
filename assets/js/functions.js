$(document).ready(function() {

// functions go here 

    $('button.opens-footnote.footnote-is-closed').each(function(e){
        
        var $thisDataId = $(this).data('footnote-id');
        
       
        
        $('button.opens-footnote.footnote-is-closed').on('click', function(e){
        $('.footnotes-box-one.footnotes').removeClass('footnotes-hidden');
    });

    $('button.opens-footnote.footnote-is-opened').on('click', function(e){
        $('.footnotes-box-one.footnotes').addClass('footnotes-hidden');
    });
        
        
    });
    
    
         
});

