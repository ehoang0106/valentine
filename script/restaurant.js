$(document).ready(function() {
    let noBtnClickCount = 0;

    $('#yes-btn').click(function() {
        $('#myModal').css('display', 'block');
    });


    $('.close').click(function() {
        $('#myModal').css('display', 'none');
        window.location.href = 'end.html';
        
    });


    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').css('display', 'none');
            window.location.href = 'end.html';
        }
    });

    
});
