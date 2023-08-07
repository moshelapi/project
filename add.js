
import { create_card } from './function.js'
import data from './data.js'

let id = data.length

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

    // const mmm = document.getElementById('button_add')

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

    const new_card = {
        id: id + 1,
        title: input_title.value,
        price: Number(input_price.value),
        description: input_description.value,
        category: input_category.value,
        Image: input_img.value,

    }


    button_add.addEventListener('click', () => {
        create_card(new_card)
    })


    id++
    card_add.append(title, input_title, category, input_category, price, input_price, img, input_img, quantity, input_quantity, description, input_description)
    add_page.append(card_add)
}

