document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');

    searchBox.addEventListener('click', () => {
        searchBox.classList.toggle('active');
    });
});
