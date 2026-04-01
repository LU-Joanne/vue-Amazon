<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-7 card bg-white p-3">
                <ShippingForm v-if="cart.cartProducts.length" @submit="handleShipping" />
                <!-- 成功訊息 -->
                <p v-if="orderPlaced">✅ 訂單已送出！</p>
            </div>
            <div class="col-5">
                <div>
                    <div class="card promo-code p-4 mb-2 bg-white">
                        <button class="d-flex align-items-center justify-content-between w-100 border-0 bg-white"
                            data-bs-toggle="collapse" data-bs-target="#promoCode" aria-expanded="false">
                            <span class="fs-5">Promo</span>
                            <span>⏷</span></button>
                        <div class="collapse" id="promoCode">
                            <div class="coupon-card">
                                <input class="form-control me-3" type="text" name="couponCode" id="couponCode"
                                    placeholder="Promo Code">
                                <button class="btn btn-dark btn-sm">APPLY</button>
                            </div>
                        </div>
                    </div>
                    <div class="card checkout-summary bg-white">
                        <OrderSummary v-if="cart.cartProducts.length" :items="cart.cartProducts"
                            :discountPrice="cart.getDiscountPrice" :qtyTotal="cart.totalCount"
                            :originalTotal="cart.originalTotal" :total="cart.totalPrice" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/cart';
import { useCheckoutStore } from '@/store/checkout';

import ShippingForm from '@/components/ShippingForm.vue';
import OrderSummary from '@/components/OrderSummary.vue';

const cart = useCartStore();
const checkout = useCheckoutStore();
const orderPlaced = ref(false)

function handleShipping(data) {
    checkout.setShipping(data)
    cart.clearCart()
    orderPlaced.value = true
}
</script>

<style>
.coupon-card {
    display: flex;
    margin-top: 12px;
}

.checkout-item-title {
    font-weight: 500;
    line-clamp: 1;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.25;
}

.checkout-summary {
    padding: 24px;
    margin-bottom: 24px;
}

.item-description {
    margin-left: 12px;
}
</style>