<template>
  <div class="moving-menu-wrapper">
    <div class="none_active-layout">

    </div>
    <div class="moving-menu" ref="movingMenu">
      <ul class="moving-menu-nav">
        <li class="moving-menu-item">Лизинг</li>
        <li class="moving-menu-item">Каталог</li>
        <li class="moving-menu-item">О нас</li>
      </ul>
      <button class="moving-menu-btn send_request" @click="$emit('closeMenu', 'moving-menu'); $emit('showModal', 'modal-window')">Оставить заявку</button>
      <img src="../../assets/img/close-moving-menu.svg"
           alt="close-menu"
           class="close-moving-menu"
           v-on:click="$emit('closeMenu', 'moving-menu')">
    </div>
  </div>
</template>

<script>
export default {
  name: "Moving-menu",
  mounted() {
    this.$refs.movingMenu.classList.add('moving-menu-active')
  }
}
</script>

<style scoped>
@import "../../../src/assets/styles/moving-menu.css";
</style>