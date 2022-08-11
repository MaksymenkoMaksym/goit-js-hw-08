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
        onPlayUpdateTime(event)
    }, 1000));




player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

//Забираємо дані з локального схрону
const timeForSet = localStorage.getItem("videoplayer-current-time");

console.log(Number(timeForSet));
let duration = +timeForSet <= 570 ? +timeForSet : 0;

player.setCurrentTime(duration);

