import data from './data.js'
import { create_card } from './function.js'

const cards = document.getElementsByClassName('cards')

const main = document.getElementById('main');

const all_products = document.getElementById('All Products');
const Men = document.getElementById('Men');
const Women = document.getElementById('Women');
const Jewelery = document.getElementById('Jewelery');
const Electronics = document.getElementById('Electronics');
const li = document.getElementsByTagName('li')



for (const obj of data) {
   create_card(obj)

}

all_products.style.backgroundColor = '#ffdecb'



all_products.addEventListener('click', () => {
   main.innerHTML = ''
   for (const l of li) {
      l.style.backgroundColor = '#FFBF9B'
   }
      all_products.style.backgroundColor = '#ffdecb'
      for (const obj of data) {
         create_card(obj);
      }

})


Men.addEventListener('click', () => {
   for (const l of li) {
      l.style.backgroundColor = '#FFBF9B'
   }
   Men.style.backgroundColor = '#ffdecb'
   main.innerHTML = ''
 
   for (const obj of data) {
      if (obj.category === "men's clothing") {
         create_card(obj);
      }

   }
})


Women.addEventListener('click', () => {
   for (const l of li) {
      l.style.backgroundColor = '#FFBF9B'
   }
   Women.style.backgroundColor = '#ffdecb'
   main.innerHTML = ''
 
   for (const obj of data) {
      if (obj.category === "women's clothing") {
         create_card(obj);
      }

   }
})

Jewelery.addEventListener('click', () => {
   for (const l of li) {
      l.style.backgroundColor = '#FFBF9B'
   }
   Jewelery.style.backgroundColor = '#ffdecb'
   main.innerHTML = ''
 
   for (const obj of data) {
      if (obj.category === "jewelery") {
         create_card(obj);
      }

   }
})


Electronics.addEventListener('click', () => {
   for (const l of li) {
      l.style.backgroundColor = '#FFBF9B'
   }
   Electronics.style.backgroundColor = '#ffdecb'
   main.innerHTML = ''
 
   for (const obj of data) {
      if (obj.category === "electronics") {
         create_card(obj);
      }

   }
})





