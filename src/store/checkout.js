import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    shippingInfo: {
      country: '',
      fistName: '',
      lastName: '',
      phone: '',
      address: '',
    },
  }),
  actions: {
    setShipping(info) {
      this.shippingInfo = info
    },
    setPayment(method) {
      this.paymentMethod = method
    },
    reset() {
      this.shippingInfo = {}
      this.paymentMethod = 'cod'
    },
  },
})
