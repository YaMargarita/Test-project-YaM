<template>
  <div class="Modal-window">
    <section class="modal-window">

    </section>
    <div class="modal-content">
      <div class="modal-content-wrapper">
        <div class="modal-content-title">Онлайн-заявка</div>
        <div class="modal-content-description">
          Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы
        </div>
        <form class="modal-content-form">
          <div class="form-item">
            <input type="text" id="phone" ref="phone" class="modal-content-input" v-phone v-on:focus="active(0)" v-on:blur="inactive($event,0)">
            <label for="phone">Телефон</label>
          </div>
          <div class="form-item">
            <input type="text" id="name" class="modal-content-input" v-model="name" v-on:focus="active(1)" v-on:blur="inactive($event, 1)">
            <label for="name">Имя</label>
          </div>
        </form>
        <div class="modal-content-send">
          <div class="modal-content-send-agree">
            Нажимая на кнопку «Оставить заявку», я даю согласие <span class="modal-agree">на обработку персональных данных</span>
          </div>
          <button class="modal-content-btn send_request" v-on:click="sendData">Оставить заявку</button>
        </div>
        <div class="modal-content-social">
          <img src="../../assets/img/modal-socials-whatsApp.svg" alt="" class="modal-social-item">
          <img src="../../assets/img/modal-social-telegram.svg" alt="" class="modal-social-item">
        </div>
      </div>
      <img src="../../assets/img/close-modal.svg"
           alt="closeModal"
           class="close-modal"
           v-on:click="$emit('closeModal', 'modal-window')">
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal-window",
  data(){
    return{
      name: '',
      phone: '',
    }
  },
  methods: {
    active(index){
      document.querySelectorAll('.form-item')[index].classList.add('active')
    },
    inactive(el,index){
      if(el.target.value.trim() === '') document.querySelectorAll('.form-item')[index].classList.remove('active')
    },
    sendData(){
      let user = {
        phone: this.$refs.phone.value,
        name: this.name
      }
      console.log(user)
    }
  },
}
</script>

<style scoped>
@import "../../../src/assets/styles/modal-window.css";
</style>