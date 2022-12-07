let shop = document.getElementById("shop")

let shopItemsData = [{
    id: "items1",
    name: "Casual Shirt" , 
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "images/img-1.jpg"
},{
    id: "items2",
    name: "Office shirt" , 
    price: 100,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "images/img-2.jpg"
},{
    id: "items3",
    name: "T Shirt" , 
    price: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "images/img-3.jpg"
},{
    id: "items4",
    name: "Mens Suit" , 
    price: 300,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img: "images/img-4.jpg"
}]

let generateShop = () => {
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
            let{id, name, price, desc, img} = x
        return `
        <div class="item">
            <img width="220" src="${x.img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity"></div>
                <h2>${price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `
    })
    .join(""));
};

generateShop();