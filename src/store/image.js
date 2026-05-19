const productImages = import.meta.glob('../assets/img/*.jpg', {
  eager: true,
  import: 'default',
})

const ratingImages = import.meta.glob('../assets/img/rating/*.png', {
  eager: true,
  import: 'default',
})

export const getProductImage = (name) => {
  return productImages[`../assets/img/${name}`]
}

export const getRatingImage = (name) => {
  return ratingImages[`../assets/img/rating/${name}`]
}
