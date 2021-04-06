<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/img/header-logo-black.svg" alt="logo" class="header-logo-img header-black-icon">
      <img src="../assets/img/header-logo-white.svg" alt="logo" class="header-logo-img header-white-icon">
      <span class="header-logo-subtitle">лизинговая компания</span>
    </div>
    <nav class="header-menu">
      <ul class="header-menu-nav">
        <li class="header-menu-item">Лизинг
          <ul class="drop-header-menu">
            <li class="drop-header-item">Для личного пользования</li>
            <li class="drop-header-item">Для юридических лиц</li>
            <li class="drop-header-item">Калькулятор</li>
          </ul>
        </li>
        <li class="header-menu-item">Каталог</li>
        <li class="header-menu-item">О нас</li>
      </ul>
      <div class="header-menu-btn send_request" v-on:click="$emit('showModal', 'modal-window')">Оставить заявку</div>
    </nav>
    <div class="burger-btn" v-on:click="$emit('showModal', 'moving-menu')">
      <img src="../assets/img/burger-menu-black.svg" alt="burger-logo" class="burger-icon header-black-icon">
      <img src="../assets/img/burger-menu-white.svg" alt="burger-logo" class="burger-icon header-white-icon">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
@import "../assets/styles/main.css";
@import "../assets/styles/header.css";
</style>