<template>
    <div>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
            data-bs-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/header1.jpg" class="d-block w-100 mask-image" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/header2.jpg" class="d-block w-100 mask-image" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/header3.jpg" class="d-block w-100 mask-image" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="row gy-4 justify-content-evenly mx-4 mb-3 mt-n10">
            <ProductCard v-for="product in products" :key="product.id" :product="product" @add="handleAdd" />
        </div>
    </div>

</template>

<script setup>
import products from '../data/product.js';
import { useCartStore } from '@/store/cart'
import ProductCard from '../components/ProductCard.vue';

const cart = useCartStore()

const handleAdd = ({ product, qty }) => {
    cart.addToCart(product, qty)
}
</script>

<style>
.mask-image {
    mask-image: linear-gradient(to bottom, #000000 50%, transparent 100%);
}

.mt-n10 {
    margin-top: -10vw;
}
</style>