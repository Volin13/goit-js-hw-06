// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст
// заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

const categoriesList = document.querySelector("#categories");
const categoryElements = document.querySelectorAll(".item");

const showNumberCategories = () => {
  console.log(`Number of categories: ${categoriesList.children.length}`);
};

showNumberCategories();

const showNumberCategoryElements = categoryElements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
