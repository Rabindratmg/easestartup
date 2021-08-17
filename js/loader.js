$(document).ready(function(){
    $('body').css('display', 'none');
    $('body').fadeIn(1000);  
    $('.modal').modal();
    // $('.parallax').parallax();
    $('.slider').slider({full_width:true});
    // $('.tabs').tabs();
    $('.blank-section').delay(1000).css('display', 'block');
    $('.hero').css('display', 'none');
    $('.hero').fadeIn(1000);
    $('.hero').css('display', 'none');
    $('.hero').slideDown(700);  

})

function toggleModal(){
    var instance=M.Modal.getInstance($("#modal3"));
    instance.open();
}