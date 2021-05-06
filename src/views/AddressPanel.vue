<template>
  <div class="step-one">
    <h2 class="form-title">寄送地址</h2>
    <div class="form-row-wrapper">
      <div class="input-wrapper">
        <label>稱謂</label>
        <div class="select-wrapper">
          <select v-model="salutaion" required>
            <option value="Mr." selected>先生</option>
            <option value="Ms.">小姐</option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <label>姓名</label>
        <input v-model="username" type="text" placeholder="請輸入姓名" />
      </div>
    </div>
    <div class="form-row-wrapper">
      <div class="input-wrapper">
        <label for="">電話</label>
        <input
          v-model="phone"
          type="text"
          placeholder="請輸入行動電話"
          maxlength="10"
        />
      </div>
      <div class="input-wrapper">
        <label for="">Email</label>
        <input v-model="email" type="text" placeholder="請輸入電子郵件" />
      </div>
    </div>
    <div class="form-row-wrapper">
      <div class="input-wrapper">
        <label for="">縣市</label>
        <div class="select-wrapper">
          <select v-model="city" id="" required>
            <option value="" disabled selected>
              請選擇縣市
            </option>
            <option value="基隆市">基隆市</option>
            <option value="台北市">台北市</option>
            <option value="新北市">新北市</option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <label for="">地址</label>
        <input v-model="addr" type="text" placeholder="請輸入地址" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressPanel',
  data() {
    return {
      salutaion: 'Mr.',
      username: '',
      phone: '',
      email: '',
      city: '',
      addr: ''
    }
  },
  computed: {
    allData() {
      const { salutaion, username, phone, email, city, addr } = this
      return { salutaion, username, phone, email, city, addr }
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
    const { salutaion, username, phone, email, city, addr } =
      JSON.parse(localStorage.getItem('info')) || ''

    this.salutaion = salutaion
    this.username = username
    this.phone = phone
    this.email = email
    this.city = city
    this.addr = addr
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

.step-one {
  width: 100%;

  .form-title {
    margin-bottom: 1.5rem;
  }

  .form-row-wrapper {
    .input-wrapper {
      margin-bottom: 1.5rem;
    }

    &:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      .input-wrapper:nth-of-type(1) {
        flex-basis: 30%;
        margin-right: 30px;
      }

      .input-wrapper:nth-of-type(2) {
        flex-basis: 70%;
      }
    }

    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      .input-wrapper:nth-of-type(1) {
        flex-basis: 50%;
        margin-right: 30px;
      }

      .input-wrapper:nth-of-type(2) {
        flex-basis: 50%;
      }
    }

    &:nth-of-type(3) {
      display: flex;
      justify-content: space-between;
      .input-wrapper:nth-of-type(1) {
        flex-basis: 30%;
        margin-right: 30px;
      }

      .input-wrapper:nth-of-type(2) {
        flex-basis: 70%;
      }
    }
  }

  input {
    width: 100%;

    @extend %input-style;
  }
  .select-wrapper {
    position: relative;
    z-index: 0;
    color: var(--color-text);
    &::after {
      position: absolute;
      top: 50%;
      right: 8px;
      z-index: -1;
      color: var(--color-text);
      content: '\25BE';
      transform: translateY(-50%);
    }
  }
  select {
    width: 100%;
    background-color: transparent;
    cursor: pointer;

    -webkit-appearance: none;
    @extend %input-style;

    &:invalid {
      color: #747474;
    }
  }
  label {
    display: block;
    margin-bottom: 0.5rem;

    @extend %input-label-style;
  }
}
</style>
