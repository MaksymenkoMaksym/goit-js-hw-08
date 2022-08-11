import Player from '@vimeo/player';

let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
//------------------
// function onPlayUpdateTime(event) {
//     throttle((event) => { localStorage.setItem("videoplayer-current-time", event.seconds), console.log("Scroll handler call every 1000ms") }, 1000);
// }
// player.on('timeupdate', onPlayUpdateTime)
//-----------------------

function onPlayUpdateTime(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds)
}

player.on('timeupdate',
    throttle((event) => {
        onPlayUpdateTime
    }, 1000));




player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

//Забираємо дані з локального схрону
const timeForSet = localStorage.getItem("videoplayer-current-time");

console.log(Number(timeForSet));

player.setCurrentTime(Number(timeForSet)).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            timeForSet = 0;
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


player.on('play', function () {
    console.log('played the video!');
});



/*
<iframe 
id???
src="https://player.vimeo.com/video/76979871?h=8272103f6e" 
width="640"
 height="360" 
 frameborder="0" 
 allowfullscreen
  allow="autoplay; 
 encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
</script>

*/