<template>
  <div class="container out">
    <div class="inner col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <img class="center-block" src="../assets/img/zjl.png" alt="一路聊 最智能的即时翻译聊天工具">
    </div>

    <a href="http://chat.16lao.com/">
      <span>一路聊 最智能的即时翻译聊天工具</span>
    </a>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <img  src="../assets/img/duo.jpg" alt="一路聊 最智能的即时翻译聊天工具">
    </div>
  </div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css">
		.out{
      position: relative;
      margin-top: 50px;
		}
    .out .inner{
      position: relative;
      width: 722px;
      /*margin: 0 auto;*/
    }

    .out .inner::before{
      animation-delay: -3s;
    }

    .out img{
      z-index: 20;
    }
  .out a{
    display: none;
    position: absolute;
    top: 4px;
    left: 19%;
    width: 720px;
    height: 350px;
    text-decoration: none;
    vertical-align: middle;
    padding-top: 180px;
    font-size: 19px;
    background-color: #ddd;
    opacity: 0.8;
  }
  .out .inner:hover + a{
    display: inline-block;

  }
  .out a:hover{
    display: inline-block;
  }
</style>
