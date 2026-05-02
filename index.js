const searchInput = document.querySelector('#search');
const recipes = document.querySelectorAll('.recipes');

searchInput.addEventListener('keyup', function(event){ 
    const word = event.target.value.toLowerCase();

    recipes.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none')
    })
})