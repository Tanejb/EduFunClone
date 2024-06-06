fetch('/categories')
.then(response=>response.json())
.then(categories => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML='';
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent=category.name;
        categoryContainer.appendChild(categoryElement);
    });
})
.catch(error => {
    console.error('Napaka pri pridobivanju kategorij:', error);
});
