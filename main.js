 const main = document.getElementById('main');
 const li = document.getElementsByTagName('li');
 const big_container = document.getElementById('big_conteiner')

import data from './data.js'
import {edit_data, create_card,create_click_event,create_click_event_with_category } from './function.js'
import {add_product} from './add.js'




const add = document.getElementById('add_product')
add.addEventListener('click',()=>{
   add_product()
})

let home = document.getElementById('home')
home.addEventListener('click',()=>{
   location.reload()
})


const cards = document.getElementsByClassName('cards')


const all_products = document.getElementById('All Products');
const Men = document.getElementById('Men');
const Women = document.getElementById('Women');
const Jewelery = document.getElementById('Jewelery');
const Electronics = document.getElementById('Electronics');
const search = document.getElementById('search')
let search_input = document.getElementById('search_input')

let counter = 0 

search.addEventListener('click',()=>{
   main.innerHTML = ''
   for (const l of li) {
      l.style.backgroundColor = '#FFBF9B'
   }
   for(let obj of edit_data){
   if (obj.title.includes(search_input.value || obj.category.includes(search_input.value))){
      create_card(obj);
      counter ++
   }
}
if (counter === 0){
   const h1 = document.createElement('h1');
   h1.textContent = 'No products found...'
   h1.id = 'not_data'
   main.append(h1)
}
counter = 0

})



for (const obj of edit_data) {
   create_card(obj)

}

all_products.style.backgroundColor = '#ffdecb'


create_click_event(all_products)

create_click_event_with_category(Men,"men's clothing")

create_click_event_with_category(Women,"women's clothing")

create_click_event_with_category(Jewelery,"jewelery")

create_click_event_with_category(Electronics,"electronics")









