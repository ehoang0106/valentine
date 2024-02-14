$(document).ready(function() {

    $('.container').fadeIn(1000);

    
    $('h2').hover(function() {
        $(this).css('color', '#b82e6d'); 
    }, function() {
        $(this).css('color', '#d63384');
    });


    $('p').click(function() {
        $(this).toggleClass('highlighted'); 
    });
});
