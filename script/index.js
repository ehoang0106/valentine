$(document).ready(function() {
    let noBtnClickCount = 0;

    $('#yes-btn').click(function() {
        $('#myModal').css('display', 'block');
    });


    $('.close').click(function() {
        $('#myModal').css('display', 'none');
        window.location.href = 'date.html';
    });


    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').css('display', 'none');
            window.location.href = 'date.html';
        }
    });

    $('#no-btn').click(function() {
        noBtnClickCount++;


        $('#yes-btn').css('font-size', function(i, val) {
            return (parseInt(val) + 5) + 'px';
        });

        if (noBtnClickCount >= 3 && noBtnClickCount < 7) {
            $(this).css({
                'top': (Math.random() * 100 - 50) + 'px',
                'left': (Math.random() * 100 - 50) + 'px',
                'position': 'absolute'
            });
        }

        if (noBtnClickCount >= 7) {
            $(this).css('display', 'none');
        }
    });
});
