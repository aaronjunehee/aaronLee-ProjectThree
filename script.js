const snackApp = {};
snackApp.snacks = [
    {
        title: 'pizza',
        url: './styles/assets/snackPizza.jpg',
        alt: 'words'
    },
    {
        title: 'pizza',
        url: './styles/assets/snackPizza.jpg',
        alt: 'words'
    },
    {
        title: 'fries',
        url: './styles/assets/snackFries.jpg',
        alt: 'words'
    },
    {
        title: 'fries',
        url: './styles/assets/snackFries.jpg',
        alt: 'words'
    },
    {
        title: 'bubble',
        url: './styles/assets/snackBubble.jpg',
        alt: 'words'
    },
    {
        title: 'bubble',
        url: './styles/assets/snackBubble.jpg',
        alt: 'words'
    },
    {
        title: 'cone',
        url: './styles/assets/snackCone.jpg',
        alt: 'words'
    },
    {
        title: 'cone',
        url: './styles/assets/snackCone.jpg',
        alt: 'words'
    },
    {
        title: 'chocolate',
        url: './styles/assets/snackChocolate.jpg',
        alt: 'words'
    },
    {
        title: 'chocolate',
        url: './styles/assets/snackChocolate.jpg',
        alt: 'words'
    },
    {
        title: 'banana',
        url: './styles/assets/snackBanana.jpg',
        alt: 'words'
    },
    {
        title: 'banana',
        url: './styles/assets/snackBanana.jpg',
        alt: 'words'
    },
    {
        title: 'cookies',
        url: './styles/assets/snackCookies.jpg',
        alt: 'words'
    },
    {
        title: 'cookies',
        url: './styles/assets/snackCookies.jpg',
        alt: 'words'
    },
    {
        title: 'popcorn',
        url: './styles/assets/snackPop.jpg',
        alt: 'words'
    },
    {
        title: 'popcorn',
        url: './styles/assets/snackPop.jpg',
        alt: 'words'
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
        const listTag = $('<li>').addClass('card').attr('title', snackItem.title);;
        const buttonFront = $('<button>').addClass('front');
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
        if ($('.selected').length == 2) {
            moveCounter();
            
            // for when cards match
            if ($('.selected').first().attr('title') == $('.selected').last().attr('title')) {
                $('.selected').addClass('wiggle')
                setTimeout(() => {
                    
                    $('.selected').removeClass('selected').addClass('matched');
                    checkWin();
                }, 2000)

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
}

const checkWin = function () {
    if ($('.card.matched').length === snackApp.snacks.length) {
        alert('You WIN!! You get a snack')
    }
}



snackApp.init = function() {
    let randomizedSnacks = snackApp.shuffle(snackApp.snacks);
    snackApp.displaySnacks(randomizedSnacks);
    snackApp.userClick();
}


$('.startGame').on('click', function(){
    $('header').fadeOut("slow");
    setTimeout(()=> {
        $('main:hidden').fadeIn("slow").addClass('show')
       
    }, 600)
    // setTimeout(()=> {
    //     $('main').addClass('show');
    //     $('header').addClass('hide');
    // }, 500)
    // setTimeout(()=> {
    //     $('main').addClass('transition');
    // },1000)
})

$(document).ready(function(){
    snackApp.init();

});