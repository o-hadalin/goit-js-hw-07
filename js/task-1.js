const allCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(elem => {
    const elTitle = elem.querySelector('h2').textContent;
    const numSubtitle = elem.querySelectorAll('ul li').length;
    console.log(`Category: ${elTitle}`);
    console.log(`Elements: ${numSubtitle}`);
});