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

// Fisher-Yates Shuffle 
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
            moveCounter();
        }
        if ($('.selected').length == 2) {
            
            // for when cards match
            if ($('.selected').first().attr('id') == $('.selected').last().attr('id')) {
                $('.selected').addClass('wiggle');
                setTimeout(() => {
                    
                    $('.selected').removeClass('selected').addClass('matched');
                    checkWin();
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


let move = 0;
function moveCounter() {
    move = move + 1;
    $('.counter').text(move);
    if(move==1){
        startTimer();
    }
}





snackApp.init = function() {
    let randomizedSnacks = snackApp.shuffle(snackApp.snacks);
    snackApp.displaySnacks(randomizedSnacks);
    snackApp.userClick();
}


$('.letsEat').on('click', function(){
    $('header').fadeOut("slow");
    setTimeout(()=> {
        $('main:hidden').fadeIn("slow").addClass('show')

    }, 600)
})






let $min = $('.minutes');
let $sec = $('.seconds');
let totalSec = 0;

function setTime() {
    ++totalSec;
    $sec.text(pad(totalSec % 60));
    $min.text(pad(parseInt(totalSec / 60)));
}
function pad(time) {
    let timeString = time + "";
    if (timeString.length < 2) {
        return "0" + timeString;
    } else {
        return timeString;
    }
}

function startTimer() {
    interval = setInterval(setTime, 1000);
}


$('.restartButton').on('click', function(){
    clearInterval(interval);
    totalSec = 0;
    $sec.text('00');
    $min.text('00');
    $('.counter').text('0');
    move = 0;
    $('.card').remove();
    let randomizedSnacks = snackApp.shuffle(snackApp.snacks);
    snackApp.displaySnacks(randomizedSnacks);
})




const checkWin = function () {
    if ($('.card.matched').length === snackApp.snacks.length) {
        // swal(`You WIN!! You get a snack ${totalSec}`);
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


$(document).ready(function(){
    snackApp.init();

});