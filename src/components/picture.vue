<template>
  <div class="picture">
      <div id="gallery" class="fullscreen">
          {{msg}}
      </div>
   <!--     <div id="nav" class="navbar">
    <button id="preview">&lt; 前一张</button>
    <button id="next">下一张 &gt;</button>
       </div> -->
  </div>
</template>

<!-- <script src="static/polaroid-gallery.js"></script> -->
<script>
import polaroidGallery from '../assets/js/polaroid-gallery'
export default {
  name: 'picture',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted:function(){
    //this.init();
    new polaroidGallery();
  },
  methods:{
      init:function(){
        new polaroidGallery();
      }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .picture {
      width: 1120px;
      height: 500px;
    background-color: red;
  }

.fullscreen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

figure {
    width: 200px;
    position: absolute;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    background-color: white;
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    transition: all 0.6s;
    cursor: pointer;
}

figure img {
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
}

figure figcaption {
    font-family: Comic Sans, Comic Sans MS, cursive;
    color: #8F8476;
}

.navbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;
    text-align: center;
    background-color: black;
    z-index: 999;
}

button {
    background-color: transparent;
    padding: 10px 24px;
    color: #ffffff;
    border: 2px solid black;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    transition: 0.4s;
}

button:hover {
    background-color: #f44336;
    color: white;
}
</style>
