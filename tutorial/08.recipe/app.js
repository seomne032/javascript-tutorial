const form = document.querySelector('form');
const input = form.querySelector('input');
const foodList = document.querySelector('.fodd_list');

//Application ID 2439a6e0
//Application Keys b9f951127e40d726ccf44325f9edbe68

const APP_ID = '2439a6e0';
const APP_KEY = 'b9f951127e40d726ccf44325f9edbe68';

const foodName = 'coffee';

function paintRecipe(items) {
    let foods = '';
    // 레시피 하나하나를 받아옴
    items.map((item) => {
        foods += `<div class="food">
        <div class="food_img">
            <img src="${item.recipe.image}" alt="" />
        </div>
        <div class="food_info">
            <div class="food_title">
                <h3>${item.recipe.label}</h3>
                <a href="${item.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p>
                ${item.recipe.calories}kal
            </p>
        </div>
    </div>`;
    });
    foodList.innerHTML = foods;
}

function getRecipe(query) {
    console.log(query);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => paintRecipe(data.hits));

    // fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
}

function init() {
    getRecipe(foodName);
    form.addEventListener('submit', function (e) {
        // form에서 submit이 일어나면
        e.preventDefault();
        const query = input.value;
        if (query === '') return;
        getRecipe(query);
    });
}
init();
