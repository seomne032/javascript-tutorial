const content = document.querySelector('.content');
const modal = document.querySelector('.modal');
const btns = document.querySelectorAll('.btn'); //배열은 아니지만 배열 형태로 나타남

btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        content.classList.toggle('active');
        modal.classList.toggle('active');
    });
});
