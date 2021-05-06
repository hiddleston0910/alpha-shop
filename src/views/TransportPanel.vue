<template>
  <div class="step-two">
    <h2 class="form-title">運送方式</h2>
    <div
      v-for="transport in transportData"
      :key="transport.id"
      class="form-row-wrapper"
    >
      <div class="input-wrapper">
        <label for=""></label>
        <input
          v-model="shoppingFee"
          type="radio"
          :name="transport.id"
          :value="transport.price"
        />
      </div>
      <div class="input-wrapper">
        <span>{{ transport.title }}</span>
        <span>{{ transport.desc }} </span>
      </div>
      <div class="input-wrapper">
        {{ transport.price === 0 ? '免費' : transport.price }}
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 0,
    title: '標準運送',
    desc: '約 3~7 個工作天',
    price: 0
  },
  {
    id: 1,
    title: 'DHL 貨運',
    desc: '48 小時內送拿',
    price: 500
  }
]

export default {
  name: 'TransportPanel',
  data() {
    return {
      transportData: [],
      shoppingFee: ''
    }
  },
  watch: {
    shoppingFee(value) {
      this.$store.commit('setInfo', { shoppingFee: value })
      const stroage = JSON.parse(localStorage.getItem('info'))
      const result = {
        ...stroage,
        shoppingFee: value
      }
      localStorage.setItem('info', JSON.stringify(result))
    }
  },
  created() {
    this.transportData = dummyData

    const { shoppingFee } = JSON.parse(localStorage.getItem('info'))

    this.shoppingFee = shoppingFee
  }
}
</script>

<style lang="scss" scoped>
%input-style {
  padding: 0.5rem 1rem;
  height: 40px;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  background-color: transparent;
  color: var(--color-text);
  font-size: 14px;
  &:hover,
  &:focus {
    border: 1px solid var(--color-text);
  }
}

%input-label-style {
  color: #808080;
  font-weight: bold;
  font-style: normal;
  font-size: 12px;
}

.form-title {
  margin-bottom: 1.5rem;
}

.step-two {
  .form-row-wrapper {
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
    border: 1px solid var(--color-lightgary);
    border-radius: 4px;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      color: var(--color-text);

      &:nth-of-type(1) {
        justify-content: center;
        margin-right: 20px;
      }

      &:nth-of-type(2) {
        justify-content: center;
      }

      &:nth-of-type(3) {
        align-items: flex-end;
        flex: 1;
      }
    }

    &:hover {
      border: 1px solid var(--color-input-radio);
    }
  }

  input {
    background-color: transparent;
    cursor: pointer;

    @extend %input-style;
    -webkit-appearance: none;
    &[type='radio'] {
      padding: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--color-shopping-car-background);
      &:checked {
        box-shadow: inset 0px 0px 0px 5px var(--color-text);
      }
    }
  }
}
</style>
