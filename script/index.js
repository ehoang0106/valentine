$(document).ready(function() {
    let noBtnClickCount = 0;

    $('#yes-btn').click(function() {
        $('#myModal').css('display', 'block');
    });

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function() {
        $('#myModal').css('display', 'none');
        window.location.href = 'date.html';
    });

    // If the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').css('display', 'none');
        }
    });

    $('#no-btn').click(function() {
        noBtnClickCount++;

        // Increase the size of the "Yes" button
        $('#yes-btn').css('font-size', function(i, val) {
            return (parseInt(val) + 5) + 'px';
        });

        // Make the "No" button jump right away after 3 clicks
        if (noBtnClickCount >= 3 && noBtnClickCount < 7) {
            $(this).css({
                'top': (Math.random() * 100 - 50) + 'px',
                'left': (Math.random() * 100 - 50) + 'px',
                'position': 'absolute'
            });
        }

        // After 10 clicks, make the "No" button disappear
        if (noBtnClickCount >= 7) {
            $(this).css('display', 'none');
        }
    });
});
