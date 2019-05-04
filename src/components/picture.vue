<template>
  <div class="picture">
    <div id="gallery" class="fullscreen"></div>
 <!--   <div id="nav" class="navbar">
      <button id="preview">&lt; 前一张</button>
      <button id="next">下一张 &gt;</button>
    </div>-->
  </div>
</template>


<script>
import polaroidGallery from '../assets/js/polaroid-gallery'
export default {
  name: 'pic',
  data () {
    return {
      timer:null,
      width:0,
      height:0,
      m:0,
      len:0,
      imgArr:[]
    }
  },
  mounted(){
    new polaroidGallery("../assets/data.json");
/*    this.init();
    this.play();
    this.resize();*/
  },
  methods:{
      resize(){
        var _this = this;
        console.log($(window).width());
        this.imgArr = $('.list').find('img');
        this.m = $(window).width()<768?4:1;
        this.height = $(window).width()<768?157:313;
        $('.picture').height(this.height);
        $('.picture .list').height(this.height);
        this.imgArr.each(function () {
          //console.log(this);
          $(this).attr('src','../../static/banner_'+_this.m+'.jpg')
          _this.m++;
          console.log('m==='+_this.m);
        })
      },
      init(){
        //console.log(this);
        var _this = this;
        $(window).on('resize',function () {
          _this.resize();
        })
        $('.desc span').eq(0).addClass('active')
      },

      play(){
        this.width = $('.list').width();
        this.len = $('.list li').length;
        $('.list').width(this.width * this.len);
        this.timer = setInterval(this.loop,3000);
      },
      loop:function () {

        if(this.m > 6 || this.m >2){
          this.m = 0;
        }

        $('.list').css('left',-this.m*$('.list li').width());
        $('.desc span').eq(this.m).addClass('active').siblings().removeClass('active');
        this.m++;
      },
      dian:function(i){
        this.m = i;
        this.loop();
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .picture {
      position: relative;
   /*   height: 313px;
      overflow: hidden;*/
  }

</style>
<style>
  .fullscreen {
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
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
