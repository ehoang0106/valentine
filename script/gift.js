$(document).ready(function() {
    let universalClickCount = 0;
    let seaWorldClickCount = 0;

    $('.gift').click(function() {
        let giftType = $(this).data('gift');
        if (giftType === 'Universal') {
            universalClickCount++;
            if (universalClickCount === 1) {
                alert("Yeah, you know I'm broke, I don't have that much money 😥");
                $(this).hide();
            }
        } else if (giftType === 'SeaWorld') {
            seaWorldClickCount++;
            if (seaWorldClickCount === 1) {
                alert("Sorry! There is no suprise gift for you 🙄");
                $(this).hide();
            }
        } else {
            
            $('#result').css('display', 'block');
        }
    });

    $('#submitDate').click(function() {
        var chosenDate = $('#chosenDate').val();
        if (chosenDate) {

            alert(`Yayyy! On ${chosenDate}, we are going to Disneyland! 🏃‍♀️`);
            
            $('#dateSelection').css('display', 'none');
            $('#chosenDate').val(''); 
            
            $('#result').css('display', 'none');
            window.location.href = 'date.html';
        }
    });

    $('.close').click(function() {
        $('#result').css('display', 'none');

        $('#dateSelection').css('display', 'none');
        window.location.href = 'date.html';
    });

    
    $('.gift[data-gift="Disneyland"]').click(function() {
        $('#dateSelection').css('display', 'block');
    });
});
