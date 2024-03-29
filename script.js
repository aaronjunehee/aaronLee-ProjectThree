const snackApp = {};
snackApp.snacks = [
    {
        id: 'pizza',
        url: './styles/assets/snackPizza.jpg',
        alt: 'A smiling slice of pizza',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveal what is behind the cookie'
    },
    {
        id: 'pizza',
        url: './styles/assets/snackPizza.jpg',
        alt: 'A smiling slice of pizza',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'fries',
        url: './styles/assets/snackFries.jpg',
        alt: 'A smiling to-go container of fries',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'fries',
        url: './styles/assets/snackFries.jpg',
        alt: 'A smiling to-go container of fries',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'bubble',
        url: './styles/assets/snackBubble.jpg',
        alt: 'A winking cup of green bubble tea with pearls',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'bubble',
        url: './styles/assets/snackBubble.jpg',
        alt: 'A winking cup of green bubble tea with pearls',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'cone',
        url: './styles/assets/snackCone.jpg',
        alt: 'A double scoop of ice-cream, top scoop smiling vanilla, bottom scoop winking chocolate and with a cherry on top',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'cone',
        url: './styles/assets/snackCone.jpg',
        alt: 'A double scoop of ice-cream, top scoop smiling vanilla, bottom scoop winking chocolate and with a cherry on top',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'chocolate',
        url: './styles/assets/snackChocolate.jpg',
        alt: 'A half opened bar of smiling chocolate covered in a red wrapper',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'chocolate',
        url: './styles/assets/snackChocolate.jpg',
        alt: 'A half opened bar of smiling chocolate covered in a red wrapper',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'banana',
        url: './styles/assets/snackBanana.jpg',
        alt: 'Three joyful yet slighly embarrassed yellow bananas attached at the stem',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'banana',
        url: './styles/assets/snackBanana.jpg',
        alt: 'Three joyful yet slighly embarrassed yellow bananas attached at the stem',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'candy',
        url: './styles/assets/snackCandy.jpg',
        alt: 'A smiling pink lollipop standing on its stick upright with a pink background',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'candy',
        url: './styles/assets/snackCandy.jpg',
        alt: 'A smiling pink lollipop standing on its stick upright with a pink background',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'popcorn',
        url: './styles/assets/snackPop.jpg',
        alt: 'A red and white stripped bag of smiling popcorn',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    },
    {
        id: 'popcorn',
        url: './styles/assets/snackPop.jpg',
        alt: 'A red and white stripped bag of smiling popcorn',
        title: 'cookie card front',
        'aria-label': 'Press enter to reveals whats behind the cookie'
    }
]


// Fisher-Yates Shuffle (function to randomly shuffle 'snacks' into 'randomizedSnacks')
snackApp.shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Function to append the randomizedSnacks onto our DOM and display the randomizedSnack cards on the user interface
snackApp.displaySnacks = (snackArray) => {
    snackArray.forEach( (snackItem) => {
        const listTag = $('<li>').addClass('card').attr('id', snackItem.id);;
        const buttonFront = $('<button>').addClass('front').attr('title', snackItem.title).attr('aria-label', snackItem['aria-label']);
        const buttonBack = $('<div>').addClass('back');
        const image = $('<img>').attr('src', snackItem.url).attr('alt', snackItem.alt);

        buttonBack.append(image);

        listTag.append(buttonFront, buttonBack);
        $('.cardContainer').append(listTag);
    })
}


// Function to append instructions modal at the beginning of each game
snackApp.displayInstructions = () => {
    const divTag = $('<div>').addClass('instructionModal')
    const closeButton = $('<i class="fas fa-times closeInstructions" aria-label="Click here to close instructions and play the game"></i>')
    const title = $('<h2>How to Play!<h2>')
    const instructions = $("<p>You're walking along the street when your stomach starts to rumble and you notice smiling cookies floating in the sky above you. You're not going crazy, you just need an afternoon snack! Choose any two cookies, flip them around to reveal their snack-type content, and try to match the matching pairs!</p>")

    divTag.append(closeButton, title, instructions)
    $('.instructions').append(divTag)

    $('.closeInstructions').on('click', function(){
        $('.instructionModal').detach();
    })
}




// on user click, class of 'selected' is attached to clicked card and checked if the subsequent clicked card is a match or not
snackApp.userClick = function () {
    $('.cardContainer').on('click', '.card', function () {
        $(this).addClass('show selected')
        if($('.selected').length == 1) {
            snackApp.moveCounter();
        }
        if ($('.selected').length == 2) {
            
            // for when cards match
            if ($('.selected').first().attr('id') == $('.selected').last().attr('id')) {
                $('.selected').addClass('wiggle');
                setTimeout(() => {
                    $('.selected').removeClass('selected').addClass('matched');
                    snackApp.checkWin();
                }, 1000)

            // for when cards don't match
            } else {
                setTimeout(() => {
                    $('.card').removeClass('show selected');
                }, 1000)
            }

        // to disable card click temporarily
        } else if ($('.selected').length >= 3) {
            $(this).removeClass('show selected');
        }
    });
}


// function containing event listener on title page; when user clicks, the title disappears and the memory card game appears
snackApp.startGame = function() {
    $('.letsEat').on('click', function () {
        $('header').fadeOut("slow");
        setTimeout(() => {
            $('main:hidden').fadeIn("slow").addClass('show')
        }, 600)
        setTimeout(() => {
            snackApp.displayInstructions();
        }, 2000)
    });
}


// function to count the NUMBER OF MOVES the user makes; moves starts at 0 and increases 1 point every time the number of the cards with class 'selected' is == 1 (ie. does not increase point when user clicks second time and number of cards with class of 'selected is == 2)
let move = 0;
snackApp.moveCounter = function () {
    move = move + 1;
    $('.counter').text(move);
    if(move==1){
        snackApp.startTimer();
    }
}


// variables and functions for the timer - user must click on a card before the timer starts and will run until user completes the card challenge. Time will then restart from 0 on next game. 
let $min = $('.minutes');
let $sec = $('.seconds');
let totalSec = 0;

snackApp.startTimer = function () {
    setTime = function () {
        ++totalSec;
        $sec.text(pad(totalSec % 60));
        $min.text(pad(parseInt(totalSec / 60)));
    }

    pad = function (time) {
        let timeString = time + "";
        if (timeString.length < 2) {
            return "0" + timeString;
        } else {
            return timeString;
        }
    }
    interval = setInterval(setTime, 1000);
}


// function containing an event listener attached to the restart button; when clicked, everything will restart
snackApp.restartGame = function(){
    $('.restartButton').on('click', function () {
        clearInterval(interval);
        totalSec = 0;
        $sec.text('00');
        $min.text('00');
        $('.counter').text('0');
        move = 0;
        $('.card').remove();
        let randomizedSnacks = snackApp.shuffle(snackApp.snacks);
        snackApp.displaySnacks(randomizedSnacks);
    });
}


// function that checks when all the cards have been matched; this function is called every time a true match has occurred between two cards; if true (ie. when all the cards are matched), the winning message will appear with the users score; a reset button will also appear and when clicked will restart the game for the user.
snackApp.checkWin = function () {
    if ($('.card.matched').length === snackApp.snacks.length) {
        $('.winMessage').addClass('userWon');
        $('.score').html(`You ate those snacks in ${totalSec} seconds with only ${move} moves!`)
        clearInterval(interval);
        
        $('.resetButton').on('click', function () {
            clearInterval(interval);
            totalSec = 0;
            $sec.text('00');
            $min.text('00');
            $('.counter').text('0');
            move = 0;
            $('.winMessage').removeClass('userWon');
            $('.card').remove();
            let randomizedSnacks = snackApp.shuffle(snackApp.snacks);
            snackApp.displaySnacks(randomizedSnacks);
        });
    }
}


snackApp.init = function () {
    let randomizedSnacks = snackApp.shuffle(snackApp.snacks);
    snackApp.displaySnacks(randomizedSnacks);
    snackApp.startGame();
    snackApp.userClick();
    snackApp.restartGame();
}


$(document).ready(function(){
    snackApp.init();
});