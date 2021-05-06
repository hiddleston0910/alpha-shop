<template>
  <div class="right-container">
    <div class="shopping-car-container">
      <div class="shopping-car-title">購物車</div>
      <div class="shopping-car-list">
        <ul class="shopping-car-list-container">
          <!-- 購物車項目 -->
          <li
            v-for="product in products"
            :key="product.id"
            class="shopping-car-item-wrapper"
          >
            <img :src="product.img" alt="" class="item-img" />
            <div class="item-content">
              <div class="product-title">{{ product.title }}</div>
              <div class="product-count">
                <button class="btn minus-btn" @click="sub(product)">
                  -
                </button>
                <input
                  type="number"
                  class="input-text"
                  v-model="product.count"
                />
                <button class="btn plus-btn" @click="add(product)">
                  +
                </button>
              </div>
            </div>
            <div class="product-price fw-bold">
              ${{ product.price * product.count }}
            </div>
          </li>
        </ul>
      </div>
      <div class="shopping-car-price">
        <div class="shopping-car-shipping">
          <span>運費</span>
          <span class="fw-bold">免費</span>
        </div>
        <div class="shopping-car-total-price">
          <span>小記</span>
          <span class="fw-bold">${{ totalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCar',
  props: {
    initialProducts: {
      type: Array
    }
  },
  data() {
    return {
      products: [],
      count: 1,
      totalPrice: 0
    }
  },
  watch: {
    products: {
      handler: function(newValue, oldValue) {
        this.totalPrice = newValue.reduce(
          (accumulator, currentValue) =>
            accumulator.price * accumulator.count +
            currentValue.price * currentValue.count
        )
      },
      deep: true
    }
  },
  created() {
    this.products = this.initialProducts
  },
  methods: {
    sub(data) {
      data.count--
      if (data.count <= 1) {
        data.count = 1
      }
    },
    add(data) {
      data.count++
    }
  }
}
</script>

<style lang="scss" scoped>
.right-container {
  .shopping-car-container {
    padding: 1.5rem;
    border: 1px solid var(--color-lightgary);
    border-radius: 0.5rem;
    background-color: var(--color-shopping-car-background);

    .shopping-car-title {
      margin-top: 34px 0;
      color: var(--color-text);
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }

    .shopping-car-item-wrapper {
      display: flex;
      margin-top: 34px;
      margin-bottom: 32px;
      .item-img {
        margin-right: 0.5rem;
        width: 100px;
        height: 100px;
        border-radius: 4px;
      }

      .item-content {
        display: flex;
        flex: 1;
        flex-direction: column;

        .product-count {
          display: flex;
          margin-top: 8px;

          .minus-btn,
          .plus-btn {
            padding: 0;
            width: 26px;
            height: 26px;
            border: 0;
            border-radius: 50%;
            background-color: var(--color-shopping-car-calc-background);
            line-height: 0;
          }

          input {
            width: 50px;
            border: 0;
            text-align: center;
            font-weight: 500;

            &:focus {
              outline: 0;
              box-shadow: 0;
            }
          }
        }

        .product-title {
          color: var(--color-text);
        }

        .product-price {
          color: var(--color-text);
        }
      }
    }

    .shopping-car-shipping,
    .shopping-car-total-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0.5rem 32px;
      border-top: 1px solid var(--color-lightgary);
      color: var(--color-text);
    }
  }
}

.fw-bold {
  font-weight: 700;
}
</style>
