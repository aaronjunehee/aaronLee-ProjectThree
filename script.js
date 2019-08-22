const snackArray = [
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
    // {
    //     url: './styles/assets/snackCone.jpg',
    //     alt: 'words'
    // }
    
]


snackArray.forEach(function(item){
    // console.log("hello");
    const listTag = $('<li>').addClass('card');
    const buttonFront = $('<button>').addClass('front');
    const buttonBack = $('<button>').addClass('back');
    const image = $('<img>').attr('src', item.url).attr('alt', item.alt);

    buttonBack.append(image);

    listTag.append(buttonFront, buttonBack);
    $('.cardContainer').append(listTag);
})




// for(let item in snackArray){
//     console.log(item);

//     const storeSnack = $(`<img src="${snackArray[item]}">`)
//     $('.back').append(storeSnack)
// }

// snackArray.forEach(function(){
//     console.log("hello");
    
// });


let openedSnacks = [];
function empty(array) {
    array.length = 0;
}

$(document).ready(function(){
    $('.card').on('click', function(){
        openedSnacks.push($(this).addClass('show'));
        
        if (openedSnacks[0][0].children[1].innerHTML == openedSnacks[1][0].children[1].innerHTML ) {
            empty(openedSnacks);
        } else { 
            setTimeout(() => {
            $('.card').removeClass('show');
            empty(openedSnacks);
        }, 1000)

        }
        // if(openedSnacks.length === 2) {
        //     setTimeout(() => {
        //     $('.card').removeClass('show');
        //     empty(openedSnacks);
        // }, 1000)
        // }
       
        // if ($())
        // setTimeout(() => {
        //     $(this).removeClass('show');
        
        // }, 2000)
    });
});