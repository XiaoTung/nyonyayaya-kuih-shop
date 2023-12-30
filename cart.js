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
        image: 'IMAGE/PULUT INTI.png',
        price: 3.00
    },
    {
        id: 2,
        name: 'Kuih Koci',
        image: 'IMAGE/KUIH KOCI.png',
        price: 3.00
    },
    {
        id: 3,
        name: 'Pulut Panggang',
        image: 'IMAGE/PULUT PANGGANG.png',
        price: 3.00
    },
    {
        id: 4,
        name: 'Ketayap',
        image: 'IMAGE/KETAYAP.png',
        price: 3.00
    },
    {
        id: 5,
        name: 'Kuih Kosoi',
        image: 'IMAGE/KUIH KOSOI.png',
        price: 3.00
    },
    {
        id: 6,
        name: 'Kuih Kosoi Pandan',
        image: 'IMAGE/KUIH KOSOI PANDAN.png',
        price: 3.00
    },
    {
        id: 7,
        name: 'Mochi (Red Bean)',
        image: 'IMAGE/MOCHI (RED BEAN).png',
        price: 3.00
    },
    {
        id: 8,
        name: 'Mochi (Peanut)',
        image: 'IMAGE/MOCHI (PEANUT).png',
        price: 3.00
    },
    {
        id: 9,
        name: 'Pattaya Lapis',
        image: 'IMAGE/PATTAYA LAPIS.png',
        price: 3.00
    },
    {
        id: 10,
        name: 'Kuih Lapis',
        image: 'IMAGE/KUIH LAPIS.png',
        price: 3.00
    },
    {
        id: 11,
        name: 'Sago Lapis',
        image: 'IMAGE/SAGO LAPIS.png',
        price: 3.00
    },
    {
        id: 12,
        name: 'Rose Sago',
        image: 'IMAGE/ROSE SAGO.png',
        price: 3.00
    },
    {
        id: 13,
        name: 'Kuih Talam',
        image: 'IMAGE/KUIH TALAM.png',
        price: 3.00
    },
    {
        id: 14,
        name: 'Seri Muka (Green White)',
        image: 'IMAGE/SERI MUKA (GRN WHI).png',
        price: 3.00
    },
    {
        id: 15,
        name: 'Seri Muka (Green Blue)',
        image: 'IMAGE/SERI MUKA (GRN BLU).png',
        price: 3.00
    },
    {
        id: 16,
        name: 'Seri Muka (Yellow Blue)',
        image: 'IMAGE/SERI MUKA (YLW BLU).png',
        price: 3.00
    },
    {
        id: 17,
        name: 'Tapioca Cake',
        image: 'IMAGE/TAPIOCA CAKE.png',
        price: 3.00
    },
    {
        id: 18,
        name: 'Bingka Ubi',
        image: 'IMAGE/BINGKA UBI.png',
        price: 3.00
    },
    {
        id: 19,
        name: 'Pulut Tai-tai',
        image: 'IMAGE/PULUT TAI-TAI.png',
        price: 3.00
    },
    {
        id: 20,
        name: 'Seri Manja',
        image: 'IMAGE/SERI MANJA.png',
        price: 3.00
    },
    {
        id: 21,
        name: 'Lapis Ubi',
        image: 'IMAGE/LAPIS UBI.png',
        price: 3.00
    },
    {
        id: 22,
        name: 'Kuih Kacang Merah',
        image: 'IMAGE/KUIH KACANG MERAH.png',
        price: 3.00
    },
    {
        id: 23,
        name: 'Talam Keladi',
        image: 'IMAGE/TALAM KELADI.png',
        price: 3.00
    },
    {
        id: 24,
        name: 'Kuih Jagung',
        image: 'IMAGE/KUIH JAGUNG.png',
        price: 3.00
    },
    {
        id: 25,
        name: 'Angku (Mini)',
        image: 'IMAGE/ANGKU (M).png',
        price: 3.00
    },
    {
        id: 26,
        name: 'Pandan Ku (Mini)',
        image: 'IMAGE/PANDAN KU (M).png',
        price: 3.00
    },
    {
        id: 27,
        name: 'Yellow Ku (Mini)',
        image: 'IMAGE/YELLOW KU (M).png',
        price: 3.00
    },
    {
        id: 28,
        name: 'Purple Ku (Mini)',
        image: 'IMAGE/PURPLE KU (M).png',
        price: 3.00
    },
    {
        id: 29,
        name: 'Angku (Large)',
        image: 'IMAGE/ANGKU (L).png',
        price: 3.00
    },
    {
        id: 30,
        name: 'Pandan Ku (Large)',
        image: 'IMAGE/PANDAN KU (L).png',
        price: 3.00
    },
    {
        id: 31,
        name: 'Rice Puddling',
        image: 'IMAGE/RICE PUDDLING.png',
        price: 3.00
    },
    {
        id: 32,
        name: 'Yam Cake',
        image: 'IMAGE/YAM CAKE.png',
        price: 3.00
    },
    {
        id: 33,
        name: 'Ma Lai Ko',
        image: 'IMAGE/MA LAI KO.png',
        price: 3.00
    },
    {
        id: 34,
        name: 'Onde-onde',
        image: 'IMAGE/ONDE-ONDE.png',
        price: 3.00
    },
    {
        id: 35,
        name: 'Homemade Kaya',
        image: 'IMAGE/KAYA.png',
        price: 5.00
    },
    {
        id: 36,
        name: 'Party Set (Set A)',
        image: 'IMAGE/PARTY SET A.png',
        price: 20.00
    },
    {
        id: 37,
        name: 'Party Set (Set B)',
        image: 'IMAGE/PARTY SET B.png',
        price: 20.00
    },
    {
        id: 38,
        name: 'Party Set (Vegetarian A)',
        image: 'IMAGE/PARTY SET C.png',
        price: 20.00
    },
    {
        id: 39,
        name: 'Party Set (Vegetarian B)',
        image: 'IMAGE/PARTY SET D.png',
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