<template>
    <div class="bg-white">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="px-3 pt-2 fs-7">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">Home</li>
                <li class="breadcrumb-item active" aria-current="page">On-Ear Headphones</li>
            </ol>
        </nav>
        <div class="product-container d-flex px-3 pb-3">
            <div class="left-Col mb-4 d-flex">
                <ul class="list-unstyled mt-1">
                    <li class="mb-2 list-container mb-2">
                        <span>
                            <img :src="getProductImage(product.image)" class="img-fluid">
                        </span>
                    </li>
                    <li class="mb-2 list-container mb-2">
                        <span>
                            <img :src="getProductImage(product.image)" class="img-fluid">
                        </span>
                    </li>
                    <li class="mb-2 list-container mb-2">
                        <span>
                            <img :src="getProductImage(product.image)" class="img-fluid">
                        </span>
                    </li>
                    <li class="mb-2 list-container mb-2">
                        <span>
                            <img :src="getProductImage(product.image)" class="img-fluid">
                        </span>
                    </li>
                    <li class="mb-2 list-container mb-2">
                        <span>
                            <img :src="getProductImage(product.image)" class="img-fluid">
                        </span>
                    </li>
                    <li class="mb-2 list-container mb-2">
                        <span>
                            <img :src="getProductImage(product.image)" class="img-fluid">
                        </span>
                    </li>
                </ul>
                <div class="ms-1 ">
                    <img :src="getProductImage(product.image)" class="" style="max-width: 350px; max-height: 450px;">
                </div>
            </div>
            <div class="center-Col">
                <h1 class="fs-4 lh-sm mb-0">{{ product.title }}</h1>
                <a href="#" class="link-secondary text-decoration-none p-0 fs-7">Visit the {{ product.store }}</a>
                <div class="d-flex align-items-center">
                    <span class="me-1">{{ product.rating }}</span>
                    <img :src="getRatingImage(product.star)" alt="product-star" class="product-star">
                </div>
                <div class="mb-1">
                    <span class="fs-7"><strong>7K+ bought</strong> in past month</span>
                </div>
                <hr class="mt-0">
                <div>
                    <div>
                        <span class="text-danger fs-4 me-1">-{{ product.discountText }}%</span>
                        <span class="position-relative">
                            <span class="position-absolute top-n10">$</span>
                            <span class="fs-3 ms-2">{{ salePricePart.saleiInteger }}</span>
                            <span class="position-absolute top-n10">{{ salePricePart.saleDecimal }}</span>
                        </span>
                    </div>
                    <div class="mb-1 text-light lh-sm">
                        <small>
                            List Price:
                            <span class="text-decoration-line-through">${{ product.price }}</span>
                        </small>
                    </div>
                </div>
                <div><a href="#" class="text-secondary text-decoration-none fs-7 p-0 lh-sm">FREE Returns</a> </div>
                <p class="fs-7 lh-sm mb-2">Available at a lower price from <a href="#" class="text-secondary">other
                        sellers</a> that may not
                    offer
                    free Prime
                    shipping.
                </p>
            </div>
            <div class="right-Col">
                <div class="mb-1">
                    <span class="position-relative">
                        <span class="position-absolute top-n10">$</span>
                        <span class="fs-3 ms-2">{{ salePricePart.saleiInteger }}</span>
                        <span class="position-absolute top-n10">{{ salePricePart.saleDecimal }}</span>
                    </span>
                </div>
                <div>
                    <div class="mb-2">
                        <span class="fs-7">FREE delivery <strong>Friday, March 27</strong></span>
                    </div>
                    <div class="mb-2">
                        <span class="fs-7">Or <span style="color: #0064F9;">Prime members</span> get FREE
                            delivery
                            <strong>Tomorrow, March
                                19.</strong> Order within <span style="color: #067D62;">7 hrs 24
                                mins</span>. <a href="#">Join Prime</a></span>
                    </div>
                    <div class="mb-2">
                        <img src="../assets/img/location_icon_dark.png" alt="" class="me-1" style="width: 14px;">
                        <a href="#" class="text-decoration-none" style="font-size: 12px;">Deliver to Taiwan</a>
                    </div>
                </div>
                <div class="pt-1 mb-2">
                    <span class="instock-text">In Stock</span>
                </div>
                <div class="mb-3 position-relative fs-7">
                    <label for="quantity" class="quantity-label lh-sm">Quantity:</label>
                    <select v-model="qty" name="quantity" id="quantity" class="form-select fs-7 lh-1"
                        style="padding-left: 35%;">
                        <option v-for="n in 10" :key="n" :value="n">
                            {{ n }}
                        </option>
                    </select>
                </div>
                <button @click="handleAddToCart" class="btn btn-primary rounded-pill fs-7 w-100 mb-2">Add to
                    cart</button>
                <button class="btn btn-warning rounded-pill fs-7 w-100 mb-2">Buy Now</button>
                <div class="container w-100 p-1 mb-2">
                    <div class="row row-cols-2 fs-small">
                        <div class="col pe-2 mb-2">
                            <span>Ships from</span>
                        </div>
                        <div class="col mb-2">
                            <span>Amazon</span>
                        </div>
                        <div class="col pe-2 mb-2">
                            <span>Returns</span>
                        </div>
                        <div class="col mb-2 text-secondary">
                            <span>FREE 30-day refund / replacement</span>
                        </div>
                        <div class="col pe-2 mb-2">
                            <span>Payment</span>
                        </div>
                        <div class="col mb-2 text-secondary">
                            <span>Secure Transaction</span>
                        </div>
                    </div>
                </div>
                <hr class="mt-0">
                <button class="w-100 btn btn-outline-light rounded btn-sm">Add to list</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCartStore } from '@/store/cart';
import { computed, ref } from 'vue';
import { getProductImage, getRatingImage } from '@/store/image';
import products from '@/data/product';

const route = useRoute();
const cart = useCartStore();
const qty = ref(1);
const productId = route.params.id;
const product = products.find(p => p.id == productId);

const salePricePart = computed(() => {
    const price = cart.getDiscountPrice(product);
    const [saleiInteger, saleDecimal] = price.toFixed(2).split('.');
    return { saleiInteger, saleDecimal }
})
const handleAddToCart = () => {
    cart.addToCart(product, qty.value)
    qty.value = 1
}
</script>

<style>
.list-container {
    width: 40px;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
}

.center-Col {
    margin: 0 30px;

}

.right-Col {
    padding: 14px 18px;
    border: 1px solid gray;
    border-radius: 10px;
    max-width: 270px;
}

.instock-text {
    font-size: 18px;
    line-height: 24px;
    color: #0b7b3c;
}

.quantity-label {
    position: absolute;
    max-width: 100%;
    left: 10px;
    top: 16%;
    z-index: 1;
}

.fs-small {
    font-size: 12px;
    line-height: 16px;
}
</style>