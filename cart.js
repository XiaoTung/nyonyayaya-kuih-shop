let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list'); 
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Pulut Inti',
        image: 'PULUT INTI.png',
        price: 3.00
    },
    {
        id: 2,
        name: 'Kuih Koci',
        image: 'KUIH KOCI.png',
        price: 3.00
    },
    {
        id: 3,
        name: 'Pulut Panggang',
        image: 'PULUT PANGGANG.png',
        price: 3.00
    },
    {
        id: 4,
        name: 'Ketayap',
        image: 'KETAYAP.png',
        price: 3.00
    },
    {
        id: 5,
        name: 'Kuih Kosoi',
        image: 'KUIH KOSOI.png',
        price: 3.00
    },
    {
        id: 6,
        name: 'Kuih Kosoi Pandan',
        image: 'KUIH KOSOI PANDAN.png',
        price: 3.00
    },
    {
        id: 7,
        name: 'Mochi (Red Bean)',
        image: 'MOCHI (RED BEAN).png',
        price: 3.00
    },
    {
        id: 8,
        name: 'Mochi (Peanut)',
        image: 'MOCHI (PEANUT).png',
        price: 3.00
    },
    {
        id: 9,
        name: 'Pattaya Lapis',
        image: 'PATTAYA LAPIS.png',
        price: 3.00
    },
    {
        id: 10,
        name: 'Kuih Lapis',
        image: 'KUIH LAPIS.png',
        price: 3.00
    },
    {
        id: 11,
        name: 'Sago Lapis',
        image: 'SAGO LAPIS.png',
        price: 3.00
    },
    {
        id: 12,
        name: 'Rose Sago',
        image: 'ROSE SAGO.png',
        price: 3.00
    },
    {
        id: 13,
        name: 'Kuih Talam',
        image: 'KUIH TALAM.png',
        price: 3.00
    },
    {
        id: 14,
        name: 'Seri Muka (Green White)',
        image: 'SERI MUKA (GRN WHI).png',
        price: 3.00
    },
    {
        id: 15,
        name: 'Seri Muka (Green Blue)',
        image: 'SERI MUKA (GRN BLU).png',
        price: 3.00
    },
    {
        id: 16,
        name: 'Seri Muka (Yellow Blue)',
        image: 'SERI MUKA (YLW BLU).png',
        price: 3.00
    },
    {
        id: 17,
        name: 'Tapioca Cake',
        image: 'TAPIOCA CAKE.png',
        price: 3.00
    },
    {
        id: 18,
        name: 'Bingka Ubi',
        image: 'BINGKA UBI.png',
        price: 3.00
    },
    {
        id: 19,
        name: 'Pulut Tai-tai',
        image: 'PULUT TAI-TAI.png',
        price: 3.00
    },
    {
        id: 20,
        name: 'Seri Manja',
        image: 'SERI MANJA.png',
        price: 3.00
    },
    {
        id: 21,
        name: 'Lapis Ubi',
        image: 'LAPIS UBI.png',
        price: 3.00
    },
    {
        id: 22,
        name: 'Kuih Kacang Merah',
        image: 'KUIH KACANG MERAH.png',
        price: 3.00
    },
    {
        id: 23,
        name: 'Talam Keladi',
        image: 'TALAM KELADI.png',
        price: 3.00
    },
    {
        id: 24,
        name: 'Kuih Jagung',
        image: 'KUIH JAGUNG.png',
        price: 3.00
    },
    {
        id: 25,
        name: 'Angku (Mini)',
        image: 'ANGKU (M).png',
        price: 3.00
    },
    {
        id: 26,
        name: 'Pandan Ku (Mini)',
        image: 'PANDAN KU (M).png',
        price: 3.00
    },
    {
        id: 27,
        name: 'Yellow Ku (Mini)',
        image: 'YELLOW KU (M).png',
        price: 3.00
    },
    {
        id: 28,
        name: 'Purple Ku (Mini)',
        image: 'PURPLE KU (M).png',
        price: 3.00
    },
    {
        id: 29,
        name: 'Angku (Large)',
        image: 'ANGKU (L).png',
        price: 3.00
    },
    {
        id: 30,
        name: 'Pandan Ku (Large)',
        image: 'PANDAN KU (L).png',
        price: 3.00
    },
    {
        id: 31,
        name: 'Rice Puddling',
        image: 'RICE PUDDLING.png',
        price: 3.00
    },
    {
        id: 32,
        name: 'Yam Cake',
        image: 'YAM CAKE.png',
        price: 3.00
    },
    {
        id: 33,
        name: 'Ma Lai Ko',
        image: 'MA LAI KO.png',
        price: 3.00
    },
    {
        id: 34,
        name: 'Onde-onde',
        image: 'ONDE-ONDE.png',
        price: 3.00
    },
    {
        id: 35,
        name: 'Homemade Kaya',
        image: 'KAYA.png',
        price: 5.00
    },
    {
        id: 36,
        name: 'Party Set (Set A)',
        image: 'PARTY SET A.png',
        price: 20.00
    },
    {
        id: 37,
        name: 'Party Set (Set B)',
        image: 'PARTY SET B.png',
        price: 20.00
    },
    {
        id: 38,
        name: 'Party Set (Vegetarian A)',
        image: 'PARTY SET C.png',
        price: 20.00
    },
    {
        id: 39,
        name: 'Party Set (Vegetarian B)',
        image: 'PARTY SET D.png',
        price: 20.00
    }
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list card
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}