<template>
  <section class="calculate">
    <div class="calculate-title">Рассчитайте стоимость автомобиля в лизинг</div>
    <div class="calculate-input-wrapper">
      <div class="calculate-item">
        <span class="calculate-item-label">Стоимость автомобиля</span>
        <input type="text" class="calculate-item-input"
               placeholder="3 300 000"
               maxlength="9"
               :value="price | splitNumber"
               v-on:blur="checkPrice($event)">
        <input type="range"
               class="calculate-item-range"
               min="1000000"
               max="6000000"
               v-model="price">
        <span class="calculate-item-icon">₽</span>
      </div>
      <div class="calculate-item">
        <span class="calculate-item-label">Первоначальный взнос</span>
        <input type="text" class="calculate-item-input" :placeholder="payment | splitNumber" maxlength="5" v-on:blur="setPercent($event)">
        <input type="range" class="calculate-item-range" min="10" max="60" v-model="percent">
        <span class="calculate-item-icon calculate-percent-icon">{{ percent }} %</span>
      </div>
      <div class="calculate-item">
        <span class="calculate-item-label">Срок лизинга</span>
        <input type="text" class="calculate-item-input" placeholder="60" maxlength="2" v-model="month" v-on:blur="checkMonth">
        <input type="range" class="calculate-item-range" min="1" max="60" v-model="month">
        <span class="calculate-item-icon">мес.</span>
      </div>
    </div>

    <div class="calculate-result-wrapper">
      <div class="calculate-result-item result-input-sum">
        <span class="calculate-item-label">Сумма договора лизинга</span>
        <p class="calculate-result">{{ allPayment | splitNumber }} ₽</p>
      </div>
      <div class="calculate-result-item result-input-month">
        <span class="calculate-item-label">Ежемесячный платеж от</span>
        <p class="calculate-result">{{ monthlyPay | splitNumber }} ₽</p>
      </div>
      <button class="calculate-btn send_request" v-on:click="$emit('showModal', 'modal-window')">Оставить заявку</button>
    </div>

  </section>
</template>

<script>
import splitNumber from "../filters/splitNumber";
export default {
  name: "Calculate",
  data() {
    return {
      price: '3300000',
      percent: 13,
      month: '60',
    }
  },
  filters: {
    splitNumber
  },
  methods: {
    checkPrice(el){
      this.price = parseInt(el.target.value.replace(/\s/g, ''))
      if (this.price >= 1e6 && this.price <= 6e6) return
      if(this.price < 1e6) this.price = 1e6;
      if(this.price > 6e6) this.price = 6e6;
    },
    setPercent(el){
      if(el.target.value === '') return
      this.percent = el.target.value;
      if(el.target.value < 10) this.percent = 10
      if(el.target.value > 60) this.percent = 60
      el.target.value = ''
    },
    checkMonth(){
      if(this.month > 60) this.month = 60
      if(this.month < 1) this.month = 1
    }
  },
  computed: {
    payment(){
      return (this.price * this.percent / 100).toFixed(0) + ' ₽';
    },
    monthlyPay(){
      let percent = 5/100
      return Math.round((this.price - this.payment.substring(0, this.payment.length-2)) * percent / (percent + 1) / this.month * 100)
    },
    allPayment(){
      return parseInt(this.price) + parseInt(this.monthlyPay)
    }
  }

}
</script>

<style scoped>
@import "../assets/styles/main.css";
@import "../assets/styles/calculate.css";
</style>
