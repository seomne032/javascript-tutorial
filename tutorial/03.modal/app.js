const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const dimm = document.querySelector('.dimm');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
    dimm.classList.add('open'); //dimm에 클래스 open을 추가한다
    modal.classList.add('open'); //modal에 클래스 open을 추가한다
});

closeBtn.addEventListener('click', () => {
    dimm.classList.remove('open'); //dimm에 클래스 open을 제거한다
    modal.classList.remove('open'); //modal에 클래스 open을 제거한다
});

dimm.addEventListener('click', () => {
    dimm.classList.remove('open'); //dimm에 클래스 open을 제거한다
    modal.classList.remove('open'); //modal에 클래스 open을 제거한다
});
