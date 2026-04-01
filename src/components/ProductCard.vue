<template>

    <div class="card bg-white gap-3 px-4 py-3" style="width: 18rem;">

        <img :src="product.image" class="card-img mx-auto" alt="product-image">
        <div>
            <h2 class="card-title fw-normal fs-6 lh-base">
                <router-link :to="`/product/${product.id}`" class="text-decoration-none text-dark d-block">{{
                    product.title
                }}</router-link>
            </h2>
            <div class="d-flex align-items-center">
                <span class="me-1">{{ product.rating }}</span>
                <img :src="product.star" alt="product-star" class="product-star">
            </div>
            <div class="mt-2">
                <span class="position-relative">
                    <span class="position-absolute top-n13">$</span>
                    <span class="fs-2 ms-2">{{ priceParts.integer }}</span>
                    <small class="position-absolute top-n13"> {{ priceParts.decimal }}</small>
                </span>
            </div>
            <div>
                <span>FREE delivery <strong>Fri, Mar 27</strong> to Taiwan on $49 of eligible items</span>
            </div>
            <div class="mt-1">
                <button @click="add" class="btn-add-cart">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const { product } = defineProps({
    product: Object
})
const emit = defineEmits(['add'])
const add = () => {
    emit('add', { product, qty: 1 })
}

const priceParts = computed(() => {
    const [integer, decimal] = product.price.toFixed(2).split('.')
    return { integer, decimal }
})
</script>

<style>
.card-img {
    max-width: fit-content;
    max-height: 200px;
}

.card-title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.product-star {
    height: 15px;
    width: 80px;
}

.btn-add-cart {
    font-size: 14px;
    line-height: 20px;
    border-radius: 30px;
    font-weight: 400;
    padding: 5px 11px 5px 11px;
    background-color: #ffd814;
    border: 2px solid #ffd814;
}

.btn-add-cart:hover {
    background-color: #ffca2c;
    border-color: #ffd814;
}
</style>