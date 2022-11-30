let shop = document.getElementById("shop")

let generateShop = () => {
    return `
    <div class="item">
            <img width="220" src="images/img-1.jpg" alt="">
            <div class="details">
                <h3>Casual Shirt</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div class="price-quantity"></div>
                <h2>$ 45</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `
};

generateShop();