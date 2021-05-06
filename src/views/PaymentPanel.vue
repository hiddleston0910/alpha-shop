<template>
  <div class="step-three">
    <h2 class="form-title">付款資訊</h2>
    <div class="form-row-wrapper">
      <div class="input-wrapper">
        <label for="">持卡人姓名</label>
        <input
          v-model="ccname"
          type="text"
          placeholder="Name"
          class="name-input"
        />
      </div>
    </div>
    <div class="form-row-wrapper">
      <div class="input-wrapper">
        <label for="">卡號</label>
        <input
          v-model="cardnumber"
          type="text"
          placeholder="1111 2222 3333 4444"
          class="cardnumber-input"
        />
      </div>
    </div>
    <div class="form-row-wrapper">
      <div class="input-wrapper">
        <label for="">有效期限</label>
        <input v-model="expadte" type="text" placeholder="MM/YY" />
      </div>
      <div class="input-wrapper">
        <label for="">CVC/CCV</label>
        <input v-model="ccv" type="text" placeholder="123" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentPanel',
  data() {
    return {
      ccname: '',
      cardnumber: '',
      expadte: '',
      ccv: ''
    }
  },
  computed: {
    allData() {
      const { ccname, cardnumber, expadte, ccv } = this
      return { ccname, cardnumber, expadte, ccv }
    }
  },
  watch: {
    allData: {
      handler: function(value) {
        this.$store.commit('setInfo', value)
        const stroage = JSON.parse(localStorage.getItem('info'))
        const result = {
          ...stroage,
          ...value
        }
        localStorage.setItem('info', JSON.stringify(result))
      },
      deep: true
    }
  },
  created() {
    const { ccname, cardnumber, expadte, ccv } = JSON.parse(
      localStorage.getItem('info')
    )

    this.ccname = ccname
    this.cardnumber = cardnumber
    this.expadte = expadte
    this.ccv = ccv
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

.step-three {
  .form-row-wrapper {
    display: flex;

    .input-wrapper {
      flex: 1;
      margin-bottom: 1.5rem;
    }

    &:nth-of-type(3) {
      display: flex;
      flex-direction: row;

      .input-wrapper:nth-of-type(1) {
        margin-right: 30px;
      }
    }
  }

  input {
    width: 100%;

    @extend %input-style;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;

    @extend %input-label-style;
  }

  .name-input,
  .cardnumber-input {
    width: 60%;
  }
}
</style>
