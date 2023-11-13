console.log("Welcome to the Comfy Story");

// cart on click listener to show the cart
const cart_btn = document.querySelector(".fa-shopping-cart");
const addingclassToOverlay = document.querySelector(".cart-overlay");
const openCart = document.querySelector(".cart");
const cartContent = document.querySelector(".cart-content");

const cartItems = document.querySelector("#cart-item");
const cartTotal = document.querySelector(".cart-total");

// cart_btn.addEventListener("click", this.showCart);

// closing the cart

const close_btn = document.querySelector(".fa-window-close");

// close_btn.addEventListener("click", this.hideCart);

// Fetching product
// cart
let cart = [];

// buttons
let buttonDom = [];
class Products {
    async getProducts() {
        try {
            let result = await fetch("products.json");
            let data = await result.json();
            let products = data.items;
            products = products.map((item) => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

// display Products
class UI {
    displayProducts(products) {
        let result = "";
        products.forEach((product) => {
            result += `<article class="product">
            <div class="img-container">
              <img src=${product.image} alt="product" class="product-img"> 
              <button class="bag-btn" data-id=${product.id}>
              <i class="fas fa-shopping-cart"></i>
              add to bag
              </button>
            </div>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
          </article>
          `;
        });

        const productDom = document.querySelector(".products-center");
        productDom.innerHTML = result;
    }
    // get bag buttons

    getBagButtons() {
        const buttons = [...document.querySelectorAll(".bag-btn")];
        buttonDom = buttons;
        buttons.forEach((button) => {
            let id = button.dataset.id;
            let inCart = cart.find((item) => item.id === id);
            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            } else {
                button.addEventListener("click", (e) => {
                    e.target.innerText = "In Cart";
                    e.target.disabled = true;
                    // let targetId = e.target.dataset.id;
                    // console.log(e.target.dataset.id);
                    // get product from products

                    // console.log(Storage.getProduct(id));
                    let cartItems = { ...Storage.getProduct(id), amount: 1 };
                    // add product to the cart
                    cart = [...cart, cartItems];
                    //save cart in local storage
                    Storage.saveCarts(cart);
                    // set cart values
                    this.setCartValues(cart);
                    // display cart item

                    this.addCartItem(cartItems);
                    // show the cart
                    this.showCart();
                });
            }
        });
    }

    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;

        cart.map((item) => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });

        // const cartItems = document.querySelector("#cart-item");
        // const cartTotal = document.querySelector(".cart-total");

        cartItems.innerText = itemsTotal;
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        // console.log(cartItems , cartTotal);
    }

    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
        <img src=${item.image} alt="product" />
          <div>

            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>remove</span>
          </div>
          <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
          </div>
        </div> `;

        const cartDOM = document.querySelector(".cart-content");
        cartDOM.appendChild(div);
    }

    showCart() {
        addingclassToOverlay.classList.add("transparentBcg");

        openCart.classList.add("showCart");
    }

    // setup after loading
    setupAPP() {
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cart_btn.addEventListener("click", this.showCart);
        close_btn.addEventListener("click", this.hideCart);
    }

    manageItemCount(item) {
        // console.log(item);
        const itemAmount = document.querySelector(".item-amount");
        // console.log(item.amount);
        itemAmount.innerText = item.amount;
    }

    populateCart(cart) {
        cart.forEach((item) => {
            this.addCartItem(item);
            //   this.manageItemCount(item);
        });
    }

    hideCart() {
        addingclassToOverlay.classList.remove("transparentBcg");

        openCart.classList.remove("showCart");
    }

    cartLogic() {
        const clearCart = document.querySelector(".clear-cart");
        clearCart.addEventListener("click", () => {
            this.clearCart();
        });

        cartContent.addEventListener("click", (e) => {
            // console.log(e.target.dataset.id);
            if (e.target.classList.contains("remove-item")) {
                let remove = e.target;
                let id = remove.dataset.id;
                // console.log(remove.parentElement.parentElement);
                cartContent.removeChild(remove.parentElement.parentElement);
                this.removeitem(id);
            } else if (e.target.classList.contains("fa-chevron-up")) {
                // console.log(e.target);
                let addamount = e.target;
                let id = addamount.dataset.id;
                let tempItem = cart.find((item) => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCarts(cart);
                this.setCartValues(cart);
                addamount.nextElementSibling.innerText = tempItem.amount;
            } else if (e.target.classList.contains("fa-chevron-down")) {
                // console.log(e.target);
                let removeamount = e.target;
                let id = removeamount.dataset.id;
                let tempItem = cart.find((item) => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0) {
                    Storage.saveCarts(cart);
                    console.log(cart);
                    this.setCartValues(cart);
                    removeamount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    cartContent.removeChild(removeamount.parentElement.parentElement);
                    this.removeitem(id);
                }
            }
        });
    }

    clearCart() {
        //   const cartContent = document.querySelector(".cart-content");
        let cartItems = cart.map((item) => item.id);
        console.log(cartItems);
        cartItems.forEach((id) => this.removeitem(id));
        console.log(cartContent.children);
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
            this.hideCart();
        }
    }

    removeitem(id) {
        cart = cart.filter((item) => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCarts(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>
    add to Cart`;
    }

    getSingleButton(id) {
        return buttonDom.find((button) => button.dataset.id === id);
    }
}

// local Storage

class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find((product) => product.id === id);
    }

    static saveCarts(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {
        return localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // setup of Loading
    ui.setupAPP();
    // get all Products
    products
        .getProducts()
        .then((products) => {
            ui.displayProducts(products);
            Storage.saveProducts(products);
        })
        .then(() => {
            ui.getBagButtons();
            ui.cartLogic();
        });
});


