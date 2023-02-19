const form = document.querySelector('#contact-form');
const dimm = document.querySelector('.dimm');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close_btn');
const inputs = document.querySelectorAll('input');
const msg = document.querySelector('#message');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');

function sendEmail() {
    //submit event
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (userName.value == '' || email.value == '' || msg.value == '') {
            alert('이름, 이메일, 내용을 확인해주세요!!');
            return;
        }
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        dimm.classList.add('active');
        // these IDs from the previous steps
        emailjs.sendForm('service_mawd99s', 'template_v573fhk', this).then(
            function () {
                console.log('SUCCESS!');
                modal.classList.add('active');
            },
            function (error) {
                console.log('FAILED...', error);
            }
        );
    });

    // 메세지 보낸 후 초기화시키기
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        dimm.classList.remove('active');

        inputs.forEach((input) => (input.value = ''));
        msg.value = '';
    });
}

sendEmail();
