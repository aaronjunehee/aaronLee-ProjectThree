const snackApp = {};
snackApp.snacks = [
    {
        id: 'pizza',
        url: './styles/assets/snackPizza.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'pizza',
        url: './styles/assets/snackPizza.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'fries',
        url: './styles/assets/snackFries.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'fries',
        url: './styles/assets/snackFries.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'bubble',
        url: './styles/assets/snackBubble.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'bubble',
        url: './styles/assets/snackBubble.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'cone',
        url: './styles/assets/snackCone.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'cone',
        url: './styles/assets/snackCone.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'chocolate',
        url: './styles/assets/snackChocolate.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'chocolate',
        url: './styles/assets/snackChocolate.jpg',
        alt: 'words',
    },
    {
        id: 'banana',
        url: './styles/assets/snackBanana.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'banana',
        url: './styles/assets/snackBanana.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'candy',
        url: './styles/assets/snackCandy.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'candy',
        url: './styles/assets/snackCandy.jpg',
        alt: 'words',
        title: 'cookie card front'
    },
    {
        id: 'popcorn',
        url: './styles/assets/snackPop.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
    },
    {
        id: 'popcorn',
        url: './styles/assets/snackPop.jpg',
        alt: 'words',
        title: 'cookie card front',
        'aria-label': 'Illustration of a cute cookie with its eyes closed and smiling with red rosy cheeks. Clicking on this cookie card will flip it over to reveal the random snack behind it'
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
        const buttonBack = $('<button>').addClass('back');
        const image = $('<img>').attr('src', snackItem.url).attr('alt', snackItem.alt);

        buttonBack.append(image);

        listTag.append(buttonFront, buttonBack);
        $('.cardContainer').append(listTag);
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
    });
}



// function to count the NUMER OF MOVES the user makes; moves starts at 0 and increases 1 point every time the number of the cards with class 'selected' is == 1 (ie. does not increase point when user clicks second time and number of cards with class of 'selected is == 2)
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


// function that checks when all the cards have been matched; this function is called everytime a true match has occured between two cards; if true (ie. when all the cards are matched), the winning message will appear with the users score; a reset button will also apear and when clicked will restart the game for the user.
snackApp.checkWin = function () {
    if ($('.card.matched').length === snackApp.snacks.length) {
        $('.winMessage').addClass('userWon');
        console.log(`${totalSec} ${move}`);
        $('.score').html(`You ate those snacks in ${totalSec} seconds with only ${move} moves!`)
        clearInterval(interval);
        
        $('.resetButton').on('click', function () {
            clearInterval(interval);
            totalSec = 0;
            console.log("hello");
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