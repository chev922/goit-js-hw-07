const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

// Кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Для кожної категорії виводимо заголовок та кількість елементів
categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsCount}`);
});