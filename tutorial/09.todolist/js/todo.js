const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('.todo_list');

let todos = []; //로컬스토리지에 저장될 내용들, 데이터는 배열형태

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodo(e) {
    const li = e.target.parentNode;
    li.remove();
    e.target.parentNode.remove(); // 이벤트 타겟의 부모를 삭제한다
    const newTodos = todos.filter(todo => todo.id !== parseInt(li.id)); //todo의 id가 타겟의 부모의 id와 다른 것만 newTodos에 다시 넣는다
    todos = newTodos;
    saveTodo();
}

function paintTodo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.innerText = text;
    li.id = todos.length + 1;
    span.innerText = 'X';
    span.addEventListener('click', removeTodo);

    li.appendChild(span); //li에 span 넣어줘
    ul.appendChild(li); //ul에 li를 넣어줘

    todos.push({ id: todos.length + 1, text: text });

    saveTodo();

    console.log(todos);
}

function handleSubmit(e) {
    e.preventDefault();
    if (input.value === '') return; // 빈값이면 함수 종료!
    paintTodo(input.value);
    input.value = '';
}

function loadTodo() {
    const localTodos = localStorage.getItem('todos'); //todos를 가져온다
    if (localTodos !== null) {
        const parseTodos = JSON.parse(localTodos);
        parseTodos.forEach(todo => paintTodo(todo.text));
    }
}

function init() {
    loadTodo();
    form.addEventListener('submit', handleSubmit);
}
init();
