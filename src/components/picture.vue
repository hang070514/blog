<template>
  <div class="picture">
    <ul class="list">
      <li><img class="img-responsive center-block" src="../../static/banner_1.jpg"></li>
      <li><img class="img-responsive center-block" src="../../static/banner_2.jpg"></li>
      <li><img class="img-responsive center-block" src="../../static/banner_3.jpg"></li>
    </ul>
    <div class="row desc">
      <span v-for="(k,index) in new Array(3)" @click="dian(index)"></span>
    </div>
  </div>
</template>


<script>

export default {
  name: 'picture',
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
  mounted:function(){
    this.init();
    this.play();
  },
  methods:{
      resize(){
        var _this = this;
        //console.log($(window).width());
        this.imgArr = $('.list').find('img');
        this.m = $(window).width()<768?4:1;
        this.height = $(window).width()<768?157:313;
        $('.picture').height(this.height);
        $('.picture .list').height(this.height);
        //console.log(this);
        this.imgArr.each(function () {
          //console.log(this);
          $(this).attr('src','../../static/banner_'+_this.m+'.jpg')
          _this.m++;
        })
      },
      init(){
        //console.log(this);
        var _this = this;
        $(window).on('resize',function () {
          _this.resize();

        })
        //console.log('init方法');
      },

      play(){
        this.width = $('.list').width();
        this.len = $('.list li').length;
        $('.list').width(this.width * this.len);
        this.timer = setInterval(this.loop,3000);
      },
      loop:function () {
        if(this.m==3 ){
          this.m=0;
        }
        $('.list').css('left',-this.m*this.width);
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
<style scoped>
    .picture {
      position: relative;
      height: 313px;
      overflow: hidden;
  }
   @media  screen and (min-width: 1200px){
     .picture{
       width: 1200px;
     }
   }
  .list{
    position: absolute;
    width: 1200px;
    left: 0px;
    height: 313px;
    list-style: none;
    padding: 0px;
    margin-bottom: 0px;
    transition: all .8s ease;
  }
  li{
    float: left;
  }
  .desc{
    position: absolute;
    left: 0px;
    bottom: 3px;
    height: 15px;
    width: 100%;
    text-align: center;
    line-height: 15px;
    vertical-align: middle;
  }
  .desc span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius:10px;
    margin-left: 3px;
    background-color: #fff;
    cursor: pointer;
  }
  .desc .active{
    background-color: red;
  }
</style>
