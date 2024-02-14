$(document).ready(function() {
    let universalClickCount = 0;
    let seaWorldClickCount = 0;

    $('.gift').click(function() {
        let giftType = $(this).data('gift');
        if (giftType === 'Universal') {
            universalClickCount++;
            if (universalClickCount === 2) {
                $(this).hide();
            }
        } else if (giftType === 'SeaWorld') {
            seaWorldClickCount++;
            if (seaWorldClickCount === 2) {
                $(this).hide();
            }
        } else {
            
            $('#result').css('display', 'block');
        }
    });

    $('#submitDate').click(function() {
        var chosenDate = $('#chosenDate').val();
        if (chosenDate) {
         
            alert(`On ${chosenDate}, we are going to Disneyland!`);
            
            $('#dateSelection').css('display', 'none');
            $('#chosenDate').val(''); 
            
            $('#result').css('display', 'none');
        }
    });

    $('.close').click(function() {
        $('#result').css('display', 'none');
       
        $('#dateSelection').css('display', 'none');
    });

    
    $('.gift[data-gift="Disneyland"]').click(function() {
        $('#dateSelection').css('display', 'block');
    });
});
