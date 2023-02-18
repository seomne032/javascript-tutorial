const bg = ['orange', 'blue', 'red', 'black', 'yellow', 'green'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const bgBtn = document.getElementById('bgBtn');
const hexBtn = document.getElementById('hexBtn');
const color = document.querySelector('.color');

console.log(Math.floor(Math.random() * 10) + 1); // 1~10까지 랜덤한 숫자가 나온다

function getBgNum() {
    return Math.floor(Math.random() * bg.length); // getBgNum 함수가 실행되면 bg의 길이만큼 랜덤한 숫자가 나온다
}

function getHexNum() {
    return Math.floor(Math.random() * hex.length); // getHexNum 함수가 실행되면 hexg의 길이만큼 랜덤한 숫자가 나온다
}

// return 은 실행을 종료시킨다(생략가능)

bgBtn.addEventListener('click', () => {
    //bgBtn을 누르면 ~ 가 실행된다
    const randomBgNum = getBgNum();
    document.body.style.backgroundColor = bg[randomBgNum];
    color.textContent = bg[randomBgNum];
});

hexBtn.addEventListener('click', () => {
    //hexBtn을 누르면 ~ 가 실행된다
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor = hexColor + hex[getHexNum()];
        // hexColor += hex[getHexNum()]; 위의 코드와 동일한 의미
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
