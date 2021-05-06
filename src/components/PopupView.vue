<template>
  <div v-if="showPopupView" class="popup" @click="$emit('after-close')">
    <div class="popup-container">
      {
      <div v-for="(value, name) in info" :key="name" class="item">
        "{{ name }}": "{{ value }}"
      </div>
      }
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupVuew',
  props: {
    showPopupView: {
      type: Boolean,
      default: true
    },
    info: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0.3);

  .popup-container {
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;

    .item {
      margin-left: 10px;
    }
  }
}
</style>
