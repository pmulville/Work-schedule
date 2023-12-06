var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));

// changing the colors of the rows based on time

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
    
    $('.description').each(function(){
        var scheduledTime = parseInt($(this).attr('id'));
    console.log(scheduledTime);

    if (time > scheduledTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    } else if (time < scheduledTime) {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
    } else {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
    }
    });