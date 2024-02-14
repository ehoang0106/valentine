$(document).ready(function() {
    $('#submitChoices').click(function() {
        // Display the custom alert
        $('#customAlert').css('display', 'block');
        $('#customAlertText').text('Sorry girl, the only option right now is hamburger');
    });

    // Close custom alert logic
    $('.close').click(function() {
        $('#customAlert').css('display', 'none');
    });
});
