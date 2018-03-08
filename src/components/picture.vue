<template>
  <div class="picture">
    <ul class="list">
      <li class="mli"><img src="../../static/banner_1.jpg"></li>
      <li><img src="../../static/banner_2.jpg"></li>
      <li><img src="../../static/banner_3.jpg"></li>
    </ul>
    <div class="row desc">
      <span v-for="(k,i) in new Array(3)" @click="dian()">{{i+1}}</span>
    </div>
  </div>
</template>


<script>

export default {
  name: 'picture',
  data () {
    return {
      msg: 'a',
    }
  },
  mounted:function(){
    var m = 0;
    var len = $('.list li').length;
    var width = $('.list').width();
    //console.log('len===='+len);
    //设置ul的宽度
    $('.list').width(width*len);

    setInterval(function () {
      if(m>2){
        m=0;
      }
      $('.list').css('left',-m*width);
      m++;
    },3000);

  },
  methods:{
      dian:function(){
        console.log($(this).index);
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .picture {
      position: relative;
      width: 1200px;
      height: 313px;
      overflow: hidden;
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
  }
  .desc .active{
    background-color: red;
  }
</style>
