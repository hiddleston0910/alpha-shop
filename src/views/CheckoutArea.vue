<template>
  <div class="checkout-area">
    <div class="main-title">
      <h1>結帳</h1>
    </div>
    <div class="main-containe">
      <Checkout class="checkout" @after-cofirm="afterConfirmHandle" />

      <ShopCar :initial-products="products" class="shop-car" />
    </div>

    <PopupView
      :show-popup-view="showPopupView"
      :info="info"
      @after-close="closeHandle"
    />
  </div>
</template>

<script>
import Checkout from '../components/Checkout'
import ShopCar from '../components/ShopCar'
import PopupView from '../components/PopupView'

const dummyProducts = [
  {
    id: 0,
    title: '破壞補丁修身牛仔褲',
    price: 3999,
    count: 1,
    img: 'https://picsum.photos/100/100'
  },
  {
    id: 1,
    title: '刷色直筒牛仔褲',
    price: 1299,
    count: 2,
    img: 'https://picsum.photos/100/100'
  }
]

export default {
  name: 'CheckoutArea',
  components: {
    Checkout,
    ShopCar,
    PopupView
  },
  data() {
    return {
      products: [],
      showPopupView: false,
      info: {}
    }
  },
  created() {
    this.products = dummyProducts
  },
  methods: {
    afterConfirmHandle() {
      this.info = JSON.parse(localStorage.getItem('info'))
      console.log(JSON.stringify(this.info))
      this.showPopupView = true
    },
    closeHandle() {
      this.showPopupView = false
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-area {
  margin: 2rem 0;
  padding: 0 6rem;

  .main-title {
    margin-bottom: 48px;
  }

  .main-containe {
    display: flex;
    flex: 1110px;
    justify-content: space-between;
    .checkout {
      flex-basis: 60%;
    }

    .shop-car {
      flex-basis: 30%;
    }
  }
}
</style>
