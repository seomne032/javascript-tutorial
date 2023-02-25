const clock = document.querySelector('.clock');

function getTime() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const s = `${sec < 10 ? `0${sec}` : `${sec}`}`;
    const m = `${min < 10 ? `0${min}` : `${min}`}`;
    const h = `${hour < 10 ? `0${hour}` : `${hour}`}`;

    clock.innerText = `${h} : ${m} : ${s}`;
}

function init() {
    getTime();
    setInterval(getTime, 500); // 0.5초마다 새로고침되서 나타난다
}
init();
