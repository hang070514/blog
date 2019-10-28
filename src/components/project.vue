<template>
  <div class="container out">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 zjl" >
      <a  class="address" href="http://chat.16lao.com/">
        <img class="center-block" src="../assets/img/zjl.png" alt="一路聊 最智能的即时翻译聊天工具">
      </a>
      <div class="bg">


      </div>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 duo">
      <a href="https://www.duoduodaizhang.com/">
        <img class="center-block" src="../assets/img/duo.png" alt="多多代账">
      </a>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css" lang="less">
		.out{
      position: relative;
      margin-top: 50px;
      .zjl{
        position: relative;
        height: 353px;
        overflow: hidden;
        a{
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          &:hover .bg{
            transform: translateY(100%);
            transition: transform 0.5s linear;
          }
        }
        .bg{
          display: none;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: red;
        }
      }
      .duo{
        a{
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          &:hover{
            background-color: #eee;
          }
        }
      }
		}

</style>
