<template>
  <div id="app">
    <Header @showMovingMenu="showElem"
            @showModal="showElem"></Header>
    <div class="main-container">
      <Slider @showModal="showElem"></Slider>
      <Calculate @showModal="showElem"></Calculate>
    </div>
    <Moving_menu v-if="showMenu" @closeMenu="hideElem" @showModal="showElem"></Moving_menu>
    <Modal_window v-if="showModal" @closeModal="hideElem"></Modal_window>
  </div>
</template>

<script>
import Header from "./components/Header";
import Slider from "./components/Slider"
import Calculate from "./components/Calculate"
import Moving_menu from "./components/app/Moving-menu"
import Modal_window from "./components/app/Modal-window"
export default {
  name: 'App',
  components: {
    Header, Slider, Calculate, Moving_menu, Modal_window
  },
  data(){
    return{
      showMenu: false,
      showModal: false,
    }
  },
  methods: {
    showElem(type){
      if(type === 'moving-menu'){
        this.showMenu = true;
      } else{
        this.showModal = true;
      }
      document.body.style.overflowY = 'hidden'
    },
    hideElem(type){
      if(type === 'moving-menu'){
        this.showMenu = false;
      } else{
        this.showModal = false;
      }
      document.body.style.overflowY = 'auto'
    },

  }
}
</script>

<style scoped>
@import "assets/styles/main.css";
@import "assets/styles/media.css";
</style>
