$(document).ready(function(){
    $('.card').on('click', function(){
        console.log('Hello');
        $(this).toggleClass('show');
    });
});