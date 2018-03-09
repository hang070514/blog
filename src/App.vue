<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">hang</a>
          </div>

          <div class="collapse navbar-collapse navbar-right" id="example-navbar-collapse">
                <ul class="nav navbar-nav">
                     <li><router-link to='/'>主页</router-link></li>
                     <li><router-link to='/picture'>图片欣赏</router-link></li>
                     <li><router-link to='/project'>项目展示</router-link></li>
                     <li><router-link to='/introduce'>个人介绍</router-link></li>
                     <li><router-link to='/contact'>联系我</router-link></li>
                </ul>
          </div>

      </div>
      <div class="content">
             <router-view></router-view>
      </div>
      <span id="bg_music" v-on:click="stop">
              <img src="static/qin.png">
             <audio src="static/Sunshine.mp3" autoplay="autoplay" id="audio"></audio>
      </span>

      <div id="share" @mouseover="startMove(0,5)"  @mouseout="startMove(-60,-5)">
        <span>分享</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      move:true,
      timer:null,
      timer1:null,
      dirX:1,
      dirY:1,
      posX:0,
      posY:0
    }
  },
  created:function(){

    //alert($('#bg_music').width());
    //console.log('width===='+$('#bg_music').width());
    //console.log('height===='+$('#bg_music').height())
    var bg = document.getElementById('bg_music');
   // console.log('h===='+bg.offsetHeight);
    var _this = this;
/*    console.log('width===='+document.body.clientWidth);
    console.log('height===='+document.body.clientHeight);*/

    if(this.move){
        //alert(12);
        this.timer=setInterval(function(){
            _this.posX += (2*_this.dirX);
            _this.posY += (2*_this.dirY);
            $('#bg_music').css({
                top:_this.posY,
                left:_this.posX
            })

            /*检测碰撞*/
            if(_this.posX < 1 || _this.posX > document.body.clientWidth-$('#bg_music').width()){
                _this.dirX = -_this.dirX;
            }
            if(_this.posY < 1 || _this.posY > document.body.clientHeight-$('#bg_music').height()){
                _this.dirY = -_this.dirY;
            }
        },40);
    }
  },

  methods:{
    //琴停止(开始)运动  音乐停止（开始）
    stop:function(){
        //alert('你点击了琴');
        this.move = !this.move;
        var audios = document.getElementById('audio');
        if(this.move){
            audios.play();
            var _this=this;
            _this.timer=setInterval(function(){
            _this.posX += (2*_this.dirX);
            _this.posY += (2*_this.dirY);
            $('#bg_music').css({
                top:_this.posY,
                left:_this.posX
            })

            /*检测碰撞*/
            if(_this.posX < 1 || _this.posX > document.body.clientWidth-$('#bg_music').width()){
                _this.dirX = -_this.dirX;
            }
            if(_this.posY < 1 || _this.posY > document.body.clientHeight-$('#bg_music').height()){
                _this.dirY = -_this.dirY;
            }
        },40);
        }else{
          clearInterval(this.timer);
          audios.pause();
        }
    },

    //分享运动
    startMove:function(distance,speed){

        var share = document.getElementById('share');
        clearInterval(this.timer1);
        this.timer1=setInterval(function(){
            if(share.offsetLeft == distance){
                //share.style.left = distance+'px';
                clearInterval(this.timer1);
            }else{
              share.style.left = share.offsetLeft + speed + 'px';
            }
        },100);
    }

  }
}
</script>

<style>

  #app .navbar-default{
    background: rgba(255,255,255,.3);
    border-width: 0px;
    position: relative;
  }

  #app .content{
     /*margin-top: 150px;*/
  }

  @media screen and (min-width: 1200px){
    #app .content {
      width: 1200px;
      margin: 150px auto 0px;
    }
  }
 #app .container .header ul{
    -margin-top: 20px;
 }

 #bg_music{
    position: absolute;
    display: block;
    height: 209px;
    width: 103px;
 }

 #bg_music:hover{
     cursor:pointer;
 }
 #share{
    position: absolute;
    width: 60px;
    height: 120px;
    left:-60px;
    background-color: transparent;
 }
 #share span{
    display: block;
    position: absolute;
    width: 20px;
    left: 60px;
    font-size: 20px;
    top:30px;
    background-color: yellow;
 }
</style>
