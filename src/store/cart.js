import { defineStore } from 'pinia'
import products from '@/data/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  getters: {
    cartProducts(state) {
      return state.cartItems.map((item) => {
        const product = products.find((p) => p.id === item.productId)
        const discPrice = Math.floor(product.price * (100 - product.discountText)) / 100
        return {
          ...product,
          qty: item.qty,
          discPrice,
        }
      })
    },
    originalTotal() {
      const totalPrice = this.cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0)
      return (Math.floor(totalPrice) * 100) / 100
    },
    totalPrice() {
      const total = this.cartProducts.reduce((sum, item) => {
        return sum + item.discPrice * item.qty
      }, 0)
      return Math.round(total * 100) / 100
    },
    totalCount: (state) => state.cartItems.reduce((sum, item) => sum + item.qty, 0),
  },
  actions: {
    getDiscountPrice(product) {
      return Math.floor(product.price * (100 - product.discountText)) / 100
    },
    addToCart(product, qty) {
      qty = Number(qty)
      if (qty <= 0) return
      const exisiting = this.cartItems.find((i) => i.id === product.id)

      if (exisiting) {
        exisiting.qty += qty
      } else {
        this.cartItems.push({ productId: product.id, qty })
      }
      this.saveCart()
    },
    increaseQty(id) {
      const item = this.cartItems.find((i) => i.productId === id)
      if (item) {
        item.qty++
        this.saveCart()
      }
    },
    decreaseQty(id) {
      const item = this.cartItems.find((i) => i.productId === id)
      if (item && item.qty > 1) {
        item.qty--
        this.saveCart()
      }
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter((i) => i.productId !== id)
      this.saveCart()
    },
    updateQty(id, qty) {
      const item = this.cartItems.find((i) => i.productId === id)
      if (!item) return

      if (qty <= 0) {
        this.removeFromCart(id)
      } else {
        item.qty = qty
        this.saveCart()
      }
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    },
    clearCart() {
      this.cartItems = []
      this.saveCart()
    },
  },
})
