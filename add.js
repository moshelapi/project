
import { create_card,fetchData } from './function.js'


export const edit_data = await fetchData()

export function add_product() {
    const add_page = document.createElement('div')
    add_page.id = 'add'
    const big_conteiner = document.getElementById('big_conteiner')
    big_conteiner.innerHTML = ''
    const header = document.createElement('div')
    header.classList.add('heder')
    const h1 = document.createElement('h1')
    h1.textContent = 'Add New Product'
    const nav = document.createElement('div')
    const arrow_back = document.createElement('i')
    arrow_back.innerHTML = 'arrow_back'
    arrow_back.classList.add("material-icons")

    arrow_back.addEventListener('click', () => {
        location.reload()
    })

    const button_add = document.createElement('button');
    button_add.textContent = 'add'
    button_add.classList.add('buttons')

    add_input(add_page, button_add);

    nav.append(arrow_back);

    header.append(nav, h1);

    big_conteiner.append(header, add_page, button_add)

}

function add_input(add_page, button_add) {

    const card_add = document.createElement('div')
    card_add.id = 'card_add'

    const title = document.createElement('label');
    title.textContent = 'Title'
    const input_title = document.createElement('input');
    input_title.placeholder = 'insert title'


    const category = document.createElement('label');
    category.textContent = 'Category'
    const input_category = document.createElement('input');
    input_category.placeholder = 'insert category'

    const price = document.createElement('label');
    price.textContent = 'Price'
    const input_price = document.createElement('input');
    input_price.placeholder = 'insert price'

    const img = document.createElement('label');
    img.textContent = 'Image url'
    const input_img = document.createElement('input');
    input_img.placeholder = 'insert url'

    const quantity = document.createElement('label');
    quantity.textContent = 'Quantity'
    const input_quantity = document.createElement('input');
    input_quantity.placeholder = 'insert quantity'

    const description = document.createElement('label');
    description.textContent = 'Description'
    const input_description = document.createElement('input');
    input_description.placeholder = 'insert description'

    const new_obj = {};

    button_add.addEventListener('click', () => {
        new_obj.id = edit_data[edit_data.length - 1].id + 1;
        new_obj.title = input_title.value;
        new_obj.price = Number(input_price.value);
        new_obj.description = input_description.value;
        new_obj.category = input_category.value;
        new_obj.image = input_img.value;
        new_obj.quantity = input_quantity.value;
        fetch('https://stor-7r28.onrender.com/api/product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(new_obj),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Error in posting data to server');
              }
              return response.json();
            })
            .then(data => {
              console.log('Data posted successfully:', data);
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
            location.reload()
    })

    card_add.append(title, input_title, category, input_category, price, input_price, img, input_img, quantity, input_quantity, description, input_description)
    add_page.append(card_add)
}

