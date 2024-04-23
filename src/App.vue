<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/MainApp.vue';

import { menù } from './store.js';

  
export default {
  data() {
    return {
      menùHeader: menù.menùHeader
      }
    },
  components: {
    HeaderApp,
    MainApp,
    FooterApp
    }
}
</script>

<template>
    <HeaderApp :arrayMenù="menùHeader"/>
    <MainApp />
    <FooterApp />
</template>

<style lang="scss">
@use './style/general';

</style>
