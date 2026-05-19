<template>
    <div class="cart">
        <div class="bg-white p-2 p-xl-4">
            <h2 class="fs-3 fw-bold">Shopping Cart</h2>
            <div class="cart-price-text">
                <span>price</span>
            </div>
            <hr>
            <ul>
                <li v-for="item in cart.cartProducts" :key="item.id" class="pt-4 pb-3 list-unstyled">
                    <div class="d-flex align-items-start gap-2 ">
                        <div>
                            <img :src="getProductImage(item.image)" alt="" class="me-3 cart-product-img">
                        </div>
                        <div class="cart-product-detail">
                            <div class="container mb-2">
                                <div class="row">
                                    <div class="col-9 mb-1">
                                        <h2 class="cart-product-title m-0">{{ item.title }}</h2>
                                    </div>
                                    <div class="col-3">
                                        <p class="text-end cart-product-price">${{ item.discPrice }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-9">
                                        <small class="text-success">In stock</small>
                                        <p class="m-0">FREE delivery <strong>Fri, Mar 27</strong> available at checkout.
                                            Order within
                                            <strong class="text-success">1
                                                hr 18 mins</strong>
                                        </p>
                                        <a href="#" class="text-decoration-none p-0">FREE Returns</a>
                                        <div class="position-relative my-1">
                                            <input type="checkbox" :id="`gift-` + item.id" class="me-1">
                                            <label :for="`gift-` + item.id"
                                                class="ps-1 fs-8 position-absolute top-3px">This
                                                is a
                                                gift <a href="#" class="text-decoration-none p-0">Learn more</a></label>
                                        </div>
                                        <p class="my-1 fs-8"><strong>Ear Placement</strong>: On Ear</p>
                                    </div>
                                </div>
                            </div>
                            <div class="position-relative d-flex gap-2 fs-8 align-items-center ms-2">
                                <div class="cart-quantity-container">
                                    <div class="cart-quantity-control">
                                        <button @click="cart.decreaseQty(item.id)"
                                            class="bg-transparent border-0">–</button>
                                        <span>{{ item.qty }}</span>
                                        <button @click="cart.increaseQty(item.id)"
                                            class="bg-transparent border-0">+</button>
                                    </div>
                                </div>
                                <hr>
                                <p @click="cart.removeFromCart(item.id)" class="mb-0 cart-quantity-text">Delete</p>
                                <hr>
                                <p class="mb-0 cart-quantity-text">Save for later</p>
                                <hr>
                                <p class="mb-0 cart-quantity-text">Compare with similar items</p>
                                <hr>
                                <p class="mb-0 cart-quantity-text">Share</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
                <button @click="cart.clearCart" class="btn btn-outline-secondary btn-sm cart-clear">Clear Cart</button>
                <div class="cart-subtotal">
                    <span>Subtotal (
                        <strong>{{ cart.totalCount }}</strong>
                        items ):
                        <strong> {{ cart.totalPrice.toFixed(2) }}</strong>
                    </span>
                </div>
            </div>


        </div>
        <div class="cart-right">
            <div class="d-flex mb-4 pt-1 text-success">
                <img src="../assets/img/checkmark.png" alt="" class="cart-checkmark">
                <div class="ms-1 lh-sm">
                    <span class="fs-7">Your order qualifies for FREE delivery.
                        <span class="text-light">Choose this option at checkout.</span>
                    </span>
                </div>
            </div>
            <div>
                <h3 class="fs-5 mb-1">Subtotal (
                    <strong>{{ cart.totalCount }}</strong>
                    items ):
                    <strong> {{ cart.totalPrice.toFixed(2) }}</strong>
                </h3>
            </div>
            <div class="mb-2">
                <input type="checkbox" id="gift" name="gift" class="m-1">
                <label for="gift" class="ps-1">This order contains a gift</label>
            </div>
            <RouterLink to="/checkout">
                <button class="btn btn-primary rounded-pill w-100 fs-7 mb-3">
                    <span>Proceed to checkout</span>
                </button>
            </RouterLink>

        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import { getProductImage } from '@/store/image';

const cart = useCartStore();

</script>

<style>
.cart {
    display: flex;
    gap: 20px;
    margin: 20px;
    align-items: start;
    min-height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: space-evenly;
}

.cart-price-text {
    color: #565959;
    text-align: right;
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
}

.cart li {
    border-bottom: solid 1px #00000033;
}

.cart-product-detail hr {
    height: 20px;
    width: 1px;
    background: #cfcfcf;
    margin: 0 1px;
    border-top: 0;
}

.cart-product-img {
    width: 180px;
}

.cart-product-title {
    font-weight: 600;
    line-clamp: 2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 18px;
    line-height: 24px;
}

.cart-product-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
}

.cart-quantity-container {
    border: 3px solid #ffd814;
    border-radius: 16px;
}

.cart-quantity-control {
    height: 26px;
    min-width: 98px;
    min-height: 18px;
    max-height: 38px;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.cart-quantity-text {
    color: #007185;
    cursor: pointer;
}

.cart-subtotal {
    text-align: right;
    font-size: 18px;
    line-height: 24px;
    margin: 4px 0 14px 0;
}

.cart-right {
    background: white;
    margin-bottom: 20px;
    padding: 20px;
    max-height: 220px;
    min-width: 295px;
}

.cart-checkmark {
    width: 17px;
    height: fit-content;
    padding-top: 2px;
}

.cart-clear {
    margin-left: 32px;
}
</style>