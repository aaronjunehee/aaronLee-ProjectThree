const snackArray = [
    "./styles/assets/snackPizza.jpg",
    "./styles/assets/snackFries.jpg",
    "./styles/assets/snackBubble.jpg",
    "./styles/assets/snackCone.jpg",
]





$(document).ready(function(){
    $('.card').on('click', function(){
        console.log('Hello');
        $(this).toggleClass('show');
    });
});