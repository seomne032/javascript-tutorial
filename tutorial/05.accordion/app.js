const content = document.querySelectorAll('.content'); // 배열은 아니지만 배열형태로 나타남

for (let i = 0; i < content.length; i++) {
    // content[i].addEventListener('click', () => {
    //     //content의 i번째부터 클릭 이벤트 시작된다
    //     console.log(this);
    // }); // this에서 () => 화살표 함수를 사용할 경우 window 기준으로 발생

    content[i].addEventListener('click', function () {
        // console.log(this);
        this.classList.toggle('active');
    });
}
