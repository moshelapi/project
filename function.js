import data from './data.js'
// import { main,li } from './main.js'; 

const main = document.getElementById('main');
const li = document.getElementsByTagName('li');

 export const edit_data = [...data]



function color_button() {
    for (const l of li) {
        l.style.backgroundColor = '#FFBF9B'
    }
}

export function create_card(obj) {
    let card = document.createElement('div');
    card.classList.add('cards')
    const top_card = document.createElement('div');
    const img = document.createElement('img');
    const product_ditels = document.createElement('div')
    const title_product = document.createElement('h4')
    const line = document.createElement('div')
    const delete_card = document.createElement('i')
    const edit_card = document.createElement('i')

    edit_card.addEventListener('click', (e) => {
        e.stopPropagation();
        edit_product(obj);
    })


    delete_card.addEventListener('click',(e)=>{
        e.stopPropagation()
        card.remove()
    })

    top_card.id = 'top_card'
    product_ditels.id = 'card_bottom'
    title_product.textContent = obj.title
    line.id = 'line'
    card.classList.add('card');
    delete_card.classList.add('material-icons')
    edit_card.classList.add('material-icons')

    img.src = obj.image
    delete_card.innerHTML = 'delete'
    edit_card.innerHTML = 'create'

    top_card.append(img)
    product_ditels.append(title_product, line, delete_card, edit_card)
    card.append(top_card, product_ditels)
    main.append(card)

    card.addEventListener('click', () => {
        product_page(obj);
        create_card_product(obj);
    })
}




export function create_click_event(a) {
    a.addEventListener('click', () => {
        main.innerHTML = ''
        color_button()
        a.style.backgroundColor = '#ffdecb'
        for (const obj of edit_data) {
            create_card(obj);
        }

    })
}


export function create_click_event_with_category(a, category) {
    a.addEventListener('click', () => {
        main.innerHTML = ''
        color_button()
        a.style.backgroundColor = '#ffdecb'
        for (const obj of edit_data) {
            if (obj.category === category) {
                create_card(obj);
            }

        }
    })

}

function product_page(obj) {
    const container = document.getElementById('conteiner')
    container.style.display = 'none'
    const product_main = document.createElement('div')
    product_main.id = 'product_main'
    const big_conteiner = document.getElementById('big_conteiner')
    const header = document.createElement('div')
    header.classList.add('heder')
    const h1 = document.createElement('h1')
    h1.textContent = 'Product Page'
    const nav = document.createElement('div')
    const arrow_back = document.createElement('i')
    arrow_back.innerHTML = 'arrow_back'
    arrow_back.classList.add("material-icons")
    arrow_back.addEventListener('click',()=>{
        location.reload()
    })

    const edit_card = document.createElement('i')
    edit_card.innerHTML = 'create'
    edit_card.classList.add("material-icons")
    edit_card.addEventListener('click',(e)=>{
        e.stopPropagation()
        header.remove()
        product_main.remove()
        edit_product(obj)
    })

    const home = document.createElement('i')
    home.innerHTML = 'home'
    home.classList.add("material-icons")

    home.addEventListener('click', () => {
        product_main.remove()
        header.remove()
        container.style.display = 'block'
    })

    nav.append(arrow_back, edit_card, home)

    header.append(nav, h1)

    big_conteiner.append(header, product_main)
}


function create_card_product(obj) {
    product_main.classList.add('center')
    const card = document.createElement('div')
    card.classList.add('card_product')
    const img = document.createElement('img')
    img.src = obj.image
    const card_left = document.createElement('div')
    card_left.id = 'card_left'
    const card_right = document.createElement('div')
    card_right.id = 'card_right'

    const title = document.createElement('h4')
    title.textContent = 'Title'

    const text_title = document.createElement('p')
    text_title.textContent = obj.title

    const title_description = document.createElement('h4')
    title_description.textContent = 'Description'

    const text_description = document.createElement('p')
    text_description.textContent = obj.description

    const title_category = document.createElement('h4')
    title_category.textContent = 'category'

    const text_category = document.createElement('p')
    text_category.textContent = obj.category

    const title_price = document.createElement('h4')
    title_price.textContent = 'price'

    const text_price = document.createElement('p')
    text_price.textContent = obj.price

    const title_Quantity = document.createElement('h4')
    title_Quantity.textContent = 'Quantity'

    const text_Quantity = document.createElement('p')
    const random = Math.floor(Math.random() * 100);
    text_Quantity.textContent = random


    card_right.append(title, text_title, title_description, text_description, title_category, text_category, title_price, text_price, title_Quantity, text_Quantity)


    card_left.append(img)

    card.append(card_left, card_right)

    product_main.append(card)

}



function edit_product(obj) {
    const container = document.getElementById('conteiner')
    container.style.display = 'none'
    const product_edit = document.createElement('div')
    product_edit.id = 'product_edit'
    const big_conteiner = document.getElementById('big_conteiner')
    const header = document.createElement('div')
    header.classList.add('heder')
    const h1 = document.createElement('h1')
    h1.textContent = 'Edit Product'
    const nav = document.createElement('div')
    const arrow_back = document.createElement('i')
    arrow_back.innerHTML = 'arrow_back'
    arrow_back.classList.add("material-icons")

    arrow_back.addEventListener('click',()=>{
        header.remove()
        product_edit.remove()
        button.remove()
        container.style.display = 'block'
    })

    const search = document.createElement('i')
    search.innerHTML = 'pageview'
    search.classList.add("material-icons")

    const home = document.createElement('i')
    home.innerHTML = 'home'
    home.classList.add("material-icons")
    home.addEventListener('click', () => {
        header.remove()
        product_edit.remove()
        button.remove()
        container.style.display = 'block'
    })

    const button = document.createElement('button');
    button.textContent = 'Edit'
    button.classList.add('buttons')



    nav.append(arrow_back, search, home)

    header.append(nav, h1)

    edit(obj, product_edit, button)

    big_conteiner.append(header, product_edit, button)

}




function edit(obj, product_edit, button) {
    const card_edit = document.createElement('div')
    card_edit.id = 'card_edit'

    const title = document.createElement('label');
    title.textContent = 'Title'
    const input_title = document.createElement('input');
    input_title.placeholder = obj.title


    const category = document.createElement('label');
    category.textContent = 'Category'
    const input_category = document.createElement('input');
    input_category.placeholder = obj.category

    const price = document.createElement('label');
    price.textContent = 'Price'
    const input_price = document.createElement('input');
    input_price.placeholder = obj.price

    const img = document.createElement('label');
    img.textContent = 'Image url'
    const input_img = document.createElement('input');
    input_img.placeholder = obj.image

    const quantity = document.createElement('label');
    quantity.textContent = 'Quantity'
    const input_quantity = document.createElement('input');
    input_quantity.placeholder = Math.floor(Math.random() * 100);

    const description = document.createElement('label');
    description.textContent = 'Description'
    const input_description = document.createElement('input');
    input_description.placeholder = obj.description



    card_edit.append(title, input_title, category, input_category, price, input_price, img, input_img, quantity, input_quantity, description, input_description)
    product_edit.append(card_edit)
    
    
    button.addEventListener('click', () => {input_title.value
        console.log(edit_data[obj.id-1].title );
        console.log(input_title.value);

        input_title.value==undefined?console.log('undefine'): edit_data[obj.id-1].title = input_title.value;
        // edit_data[obj.id-1].category = input_category.value
        // edit_data[obj.id-1].price = input_price.value
        // edit_data[obj.id-1].image = input_img.value
        // edit_data[obj.id-1].description = input_description.value
        // edit_data[obj.id-1].quantity = input_quantity.value


    })

}






