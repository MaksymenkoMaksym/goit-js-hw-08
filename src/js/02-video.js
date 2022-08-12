import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',
    throttle((event) => {
        onPlayUpdateTime(event)
    }, 1000));


player.getVideoTitle().then(function (title) {
    document.querySelector('p').after(document.createElement('h1'));
    document.querySelector('h1').textContent = title;
});

//Забираємо дані з локального схрону
const timeForSet = localStorage.getItem("videoplayer-current-time");

let duration = +timeForSet <= 570 ? +timeForSet : 0;

player.setCurrentTime(duration);

function onPlayUpdateTime(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds)
}