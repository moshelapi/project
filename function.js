export function create_card(obj){
    let card = document.createElement('div');
    card.classList.add('cards')
    const top_card = document.createElement('div');
    const img = document.createElement('img');
    const product_ditels = document.createElement('div')
    const title_product = document.createElement('h4')
    const line = document.createElement('div')
    const delete_card = document.createElement('i')
    const edit_card = document.createElement('i')

    top_card.id = 'top_card'
    product_ditels.id = 'card_bottom'
    title_product.textContent = obj.title
    line.id = 'line'
    card.classList.add('card');
    delete_card.classList.add('material-icons')
    edit_card.classList.add('material-icons')
    
    img.src = obj.image
    delete_card.innerHTML = 'delete'
    edit_card.innerHTML  = 'create'

    top_card.append(img)
    product_ditels.append(title_product,line,delete_card,edit_card)
    card.append(top_card,product_ditels)
    main.append(card)
 
 }   

