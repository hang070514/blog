<template>
  <div class="picture">
    <ul>
      <li><img src="../../static/banner_1.jpg"></li>
      <li><img src="../../static/banner_2.jpg"></li>
      <li><img src="../../static/banner_3.jpg"></li>
    </ul>
  </div>
</template>


<script>

import $ from 'jquery'
export default {
  name: 'picture',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted:function(){
    //this.init();
    //new polaroidGallery();
    $('ul').hide();
  },
  methods:{
      init:function(){
        //new polaroidGallery();
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .picture {
      width: 1200px;
      height: 313px;
  }

</style>
