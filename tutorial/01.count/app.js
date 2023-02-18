//const price = document.getElementsByClassName('.price');
const price = document.querySelector('.price');
const count = document.querySelector('.count');
const sum = document.querySelector('.sum');
const btns = document.querySelectorAll('button'); //배열은 아니지만 배열 형태로 나타남

const unit_price = 15000;
let num = 1;

price.textContent = unit_price;
count.textContent = num;
sum.textContent = unit_price*num;

function printTotalPrice() {
    count.textContent = num;
    sum.textContent = unit_price*num;
}

btns.forEach(btn => { //안에 이름은 내가 정하는것 btns의 단일을 선택하는거라 btn이라고 명칭
    //console.log(btn);
    btn.addEventListener('click', (e) => { //btn을 클릭하면 ~ 행동을 할것이다
        //console.log(e.target.className); //btn을 누르면 해당 클래스이름이 나온다
        if(e.target.className === 'plus') { //btn의 클래스 이름이 plus 라면~
            num++;
            printTotalPrice();
        } else if(e.target.className === 'minus') { //btn의 클래스 이름이 minus 라면~
            num--;
            if(num <= 1) { //1보다 작거나 같아지면
                num = 1;
            }
            printTotalPrice();
        } else { //btn의 클래스 이름이 minus 라면~
            num = 1;
            printTotalPrice();
        }
    })    
})