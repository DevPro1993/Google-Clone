let searchQuery;
const googleSearchButton = document.getElementById('google-search');

const searchInput = document.querySelector('.search-bar > input');
searchInput.value = '';

console.log(window.location.href);

searchInput.addEventListener('keyup', (e) => {
    searchQuery = e.target.value;
    if (e.keyCode === 13 && searchQuery !== '') {
        window.location.href = `https://www.google.com/search?q=${searchQuery}`
    }
})

googleSearchButton.addEventListener('click', () => {
    searchQuery = searchInput.value;
    if (searchQuery !== '') {
        window.location.href = `https://www.google.com/search?q=${searchQuery}`
    }
})