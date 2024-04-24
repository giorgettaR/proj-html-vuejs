<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';

import { header } from './store.js';
import { footer } from './store.js';


  
export default {
  data() {
    return {
      menùHeader: header.menùHeader,
      menùFooter: footer.menùFooter
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
    <FooterApp :arrayMenù="menùFooter"/>
</template>

<style lang="scss">
@use './style/general';

</style>
