<template>
    <div class="bg-white p-3">
        <h2>Delivery Details</h2>
        <form @submit.prevent="submit">
            <label for="countryDataList" class="form-label">Country/Region</label>
            <select class="form-select mb-3" id="countryDataList">
                <option v-for="country in countries" :key="country" :value="country">
                    {{ country }}
                </option>
            </select>
            <div class="fullname-container mb-3">
                <div class="first-name">
                    <input v-model="form.firstName" class="form-control" type="text" placeholder="First Name"
                        aria-label="default input first name" required />
                    <p v-if="errors.firstName">{{ errors.firstName }}</p>
                </div>
                <div class="last-name">
                    <input v-model="form.lastName" class="form-control" type="text" placeholder="Last Name"
                        aria-label="default input last name" required />
                    <p v-if="errors.lastName">{{ errors.lastName }}</p>
                </div>
            </div>
            <input v-model="form.phone" class="form-control mb-3" type="text" placeholder="Phone number" required />
            <p v-if="errors.phone">{{ errors.phone }}</p>
            <input v-model="form.address" class="form-control mb-3" type="text" placeholder="Address" required />
            <p v-if="errors.address">{{ errors.address }}</p>
            <button type="submit" class="btn btn-primary w-100 rounded-pill">Submit Your Order</button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const emit = defineEmits(['submit'])

const countries = ref([
    'Canada',
    'Japan',
    'Taiwan',
    'United States',
])
const form = reactive({
    country: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
})

const errors = reactive({})

function validate() {
    errors.firstName = form.firstName ? '' : 'First name is required'
    errors.lastName = form.lastName ? '' : 'Last name is required'
    errors.address = form.address ? '' : 'Address is required'
    errors.phone = /^\d{8,12}$/.test(form.phone) ? '' : 'Phone must be 8-12 digits'
    return Object.values(errors).every(e => !e)
}

function submit() {
    if (!validate()) return
    emit('submit', { ...form })
    resetForm()
}
function resetForm() {
    // 清空表單
    form.firstName = ''
    form.lastName = ''
    form.address = ''
    form.phone = ''

    // 清空錯誤
    errors.firstName = ''
    errors.lastName = ''
    errors.address = ''
    errors.phone = ''
}
</script>

<style>
.fullname-container {
    display: flex;
    width: 100%;
    column-gap: 16px;
}
</style>