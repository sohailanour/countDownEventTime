// .................................... section 1 ....................................

// open side menu
$('#sideMenuBtn').click(function () {
    $('#sideMenu').css('left', '0');
    $('.redLayer:first').css('left', '250');
})

// close side menu
$('#closeMenu').click(function () {
    $('#sideMenu').css('left', '-250');
    $('.redLayer:first').css('left', '0');
})


// .................................... section 2 ....................................

// open & close singer
$('.singer').click(function(){
    let pId = `singer${$(this).attr('belong')}`;
    // console.log(pId);

    $('.singerParg').not(`#${pId}`).slideUp(500);
    $(`#${pId}`).slideToggle(500);
})

// .................................... section 4 ....................................

// characters count
$('#charcters').keyup(function () {
    let curentCharNum = $('#charcters').val().length;

    let dec = 100 - curentCharNum;

    if (dec > 0) {
        $('#countChar').html(`${dec}`);
    } else {
        $('#countChar').html(`your available character finished`);
    }
})

// .................................... section 3 ....................................

// set event time
let eventDate = new Date(2021 , 11, 7);
eventDate.setHours(19, 30, 0);

function countDown() {
    let now = new Date(Date.now());

    let ms = eventDate.getTime() - now.getTime();

    let d = Math.floor(ms / (1000 * 60 * 60 * 24));
    let h = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let m = Math.floor((ms / (1000 * 60)) % 60);
    let s = Math.floor((ms / 1000) % 60);

    $('#day').text(`${d} D`);
    $('#hour').text(`${h} h`);
    $('#minute').text(`${m} m`);
    $('#second').text(`${s} s`);

    $('#day').animate({ opacity: 1 }, 1000, function () {
        if (ms < 1000) {
            stop();
            // console.log("it's Event Time");
        } else {
            countDown();
        }
    });
}

countDown();

