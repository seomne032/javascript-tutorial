window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 300);
    console.log(window.scrollY); // 콘솔에 스크롤 값이 나타난다
}); // 브라우저창을 기준으로 이벤트가 발생한다
