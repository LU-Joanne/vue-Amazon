<template>
    <div>
        <h3 class="m-0">Your Order</h3>
        <p class="pt-1 ">item ({{ qtyTotal }})</p>
        <div class="order-item-checkout">
            <div v-for="item in items" :key="item.id" class="d-flex py-3 border-bottom">
                <div class="border border-light">
                    <img :src="getProductImage(item.image)" alt="" style="width: 60px;">
                </div>
                <div class="item-description">
                    <div>
                        <span class="checkout-item-title">{{ item.title }}</span>
                    </div>
                    <p class="fs-8 text-light">QTY: {{ item.qty }}</p>
                </div>
                <div class="text-end ms-3">
                    <div class="price">
                        <small class="text-decoration-line-through text-light">${{ item.price }}</small>
                        <span class="d-block">${{ item.discPrice }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-summary mt-4">
            <div class="row">
                <div class="col-5">
                    <p class="mb-2">Subtotal</p>
                </div>
                <div class="col-7">
                    <p class="text-end mb-2">
                        <span class="fs-7 text-decoration-line-through text-light me-1">${{
                            originalTotal }}</span>
                        <span>${{ total.toFixed(2) }}</span>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-5">
                    <p class="mb-2">Shipping & handling</p>
                </div>
                <div class="col-7">
                    <p class="text-end mb-2">FREE</p>
                </div>
            </div>
            <div class="row">
                <div class="col-5">
                    <p class="mb-2">Estimated Tax</p>
                </div>
                <div class="col-7">
                    <p class="text-end mb-2">-</p>
                </div>
            </div>
            <hr class="m-0">
            <div class="row mt-3">
                <div class="col-5">
                    <p>Total</p>
                </div>
                <div class="col-7">
                    <p class="text-end">${{ total.toFixed(2) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getProductImage } from '@/store/image';


defineProps({
    items: Array,
    qtyTotal: Number,
    originalTotal: Number,
    total: Number,
})

</script>

<style></style>