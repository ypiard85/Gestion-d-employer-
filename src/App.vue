<template>
  <div id="app">
    <Narbar />
    <div class="container">
       <router-view />
    </div>
   
  </div>
</template>

<script>

import Narbar from './components/Navbar'

  export default{
    name: 'App',

    components:{
      Narbar,
    }
  }
</script>

