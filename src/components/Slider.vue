<template>
  <section class="slider">
    <div class="slider-info">
      <h1 class="main-title">{{ slider[index].title }}</h1>
      <h4 class="slider-subtitle">{{ slider[index].subtitle }}</h4>
      <button class="slider-btn send_request"
              v-on:click="$emit('showModal', 'modal-window')">{{ slider[index].btn }}</button>
    </div>

    <div class="slider-control">
      <div class="slider-control-wrapper">
        <div class="slider-control-item" v-for="i in 6" :key="i" v-on:click="moveSlide(i)">
          <img v-if="--i === index" src="../assets/img/images-btn_active.svg" alt="" class="slider-btn-control slider-btn_active">
          <img v-else src="../assets/img/images-btn.svg" alt="" class="slider-btn-control">
        </div>
      </div>
      <div class="slider-control-arrow">
        <img src="../assets/img/previous-arrow.svg" alt="" class="slider-btn-previous" v-on:click="previousSlide">
        <img src="../assets/img/next-arrow.svg" alt="" class="slider-btn-next" v-on:click="nextSlide">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",
  data(){
    return{
      index: 0,
      slider: [
        {
          title: "Лизинг автомобилей без первоначального взноса",
          subtitle: "Выгодные лизинговые программы",
          btn: "Узнать больше"
        },
        {
          title: "Авто в лизинг для физических лиц",
          subtitle: "Получите машину за 5 дней",
          btn: "Оставить заявку"
        },
        {
          title: "Лизинг автомобилей для компаний и предпринимателей",
          subtitle: "На выгодных условиях",
          btn: "Узнать больше"
        },
        {
          title: "Лизинг автомобилей без первоначального взноса",
          subtitle: "Выгодные лизинговые программы",
          btn: "Оставить заявку"
        },
        {
          title: "Лизинг грузовых автомобилей",
          subtitle: "Простое оформление транспорта",
          btn: "Узнать больше"
        },
        {
          title: "Гарантия качества и удобное оформление",
          subtitle: "Авто лучшего качества",
          btn: "Оставить заявку"
        },
      ]
    }
  },
  methods: {
    moveSlide(i){
      this.index = i;
    },
    nextSlide(){
      if(this.index < this.slider.length - 1) this.index ++
      else this.index = 0;
    },
    previousSlide(){
      if(this.index > 0) this.index --
      else this.index = this.slider.length - 1;
    }
  }
}
</script>

<style scoped>
@import "../assets/styles/main.css";
@import "../assets/styles/slider.css";
</style>