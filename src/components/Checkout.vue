<template>
  <div class="left-container">
    <!-- setpper -->
    <div class="stepper-panel">
      <div id="step-control" class="stepper-container">
        <div class="step" :class="stepperStyle(0)">
          <div class="circle-container"></div>
          <div class="label-container">寄送地址</div>
        </div>
        <div class="connect-line"></div>
        <div class="step" :class="stepperStyle(1)">
          <div class="circle-container"></div>
          <div class="label-container">運送方式</div>
        </div>
        <div class="connect-line"></div>
        <div class="step" :class="stepperStyle(2)">
          <div class="circle-container"></div>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
    </div>
    <!-- form -->
    <div class="form-panel">
      <div class="form-container">
        <router-view />
      </div>
    </div>

    <div class="control-panel">
      <button class="btn btn-default" @click="backHandle">
        <unicon name="arrow-left"></unicon>
        上一步
      </button>
      <button class="btn btn-primary" @click="nextHandle">
        <span class="btn-title">{{
          stepIndex === 2 ? '確認下單' : '下一步'
        }}</span>
        <unicon v-if="stepIndex !== 2" name="arrow-right" fill="#fff"></unicon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Checkout',
  data() {
    return {
      stepIndex: 0
    }
  },
  computed: {
    ...mapState(['info'])
  },
  watch: {
    stepIndex(newValue) {
      localStorage.setItem('stepIndex', newValue)
    }
  },
  methods: {
    backHandle() {
      if (this.stepIndex === 2) {
        this.$router.push('/transport')
      } else if (this.stepIndex === 1) {
        this.$router.push('/')
      }
      if (this.stepIndex <= 0) return
      this.stepIndex -= 1
    },
    nextHandle() {
      if (this.stepIndex === 0) {
        this.$router.push('/transport')
      } else if (this.stepIndex === 1) {
        this.$router.push('/payment')
      } else if (this.stepIndex === 2) {
        // 下單
        // console.log('下單')
        this.$emit('after-cofirm')
        return
      }

      this.stepIndex += 1
    },
    stepperStyle(index) {
      return this.stepIndex === index
        ? 'active'
        : this.stepIndex > index
        ? 'checked'
        : ''
    }
  },
  created() {
    this.stepIndex = parseInt(localStorage.getItem('stepIndex')) || 0
  }
}
</script>

<style lang="scss" scoped>
.left-container {
  position: relative;
  overflow: hidden;
  .stepper-panel {
    margin-bottom: 3rem;

    .stepper-container {
      display: flex;
      align-items: center;

      .connect-line {
        flex: 1;
        margin: 0 1.5rem;
        height: 2px;
        background-color: var(--color-stepper-line);
      }
    }

    .step {
      position: relative;
      display: flex;

      &:nth-child(1) .circle-container::after {
        content: '1';
      }
      &:nth-child(3) .circle-container::after {
        content: '2';
      }
      &:nth-child(5) .circle-container::after {
        content: '3';
      }

      &.checked .circle-container::after {
        color: #fff;
        content: '\2714';
      }

      &.checked,
      &.active {
        .circle-container {
          background-color: var(--color-stepper-check-backgorund);
          color: #fff;
        }
      }

      .circle-container {
        width: 24px;
        height: 24px;
        border: 1px solid var(--color-stepper-border);
        border-radius: 50%;
        color: var(--color-text);
        text-align: center;
      }
      .label-container {
        display: block;
        margin-left: 10px;
        color: var(--color-text);
      }
    }
  }

  .control-panel {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid var(--color-lightgary);

    .btn-default {
      display: flex;
      align-items: center;
      flex-shrink: 1;
      justify-content: flex-start;
      background-color: transparent;
      color: var(--color-text);

      i {
        margin-right: 0.5rem;
      }
    }

    .btn-primary {
      display: flex;
      align-items: center;
      flex: 0 0 40%;
      justify-content: center;
      border: 0;
      background-color: var(--color-primary);
      color: var(--color-page-background);
      i {
        margin-left: 0.5rem;
      }
    }
  }
}

.btn {
  box-shadow: none;
}
</style>
