<template>
  <div class="container out">
    <div class="inner">
      <img class="center-block" src="../../static/hua.png" alt="华容道">
    </div>

    <a href="https://www.baidu.com">
      <span>数字华容道是我在最强大脑上看到的一款益智小游戏，它的玩法很简单，就是把8个随机打乱的数字，
    重新排列，赶快试一试吧！</span>
    </a>
  </div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css">
	#out{
			position: absolute;
			width: 381px;
			left: 300px;
			top:200px;
		}
		.out{
      position: relative;
		}
    .out .inner{
      position: relative;
      border: 1px solid #00ff00;
      width: 376px;
      margin: 0 auto;
    }
    .out .inner::before,.out .inner::after{
      content: "";
      display: block;
      position: absolute;
      width: 396px;
      height: 447px;
      top:-10px;
      left:-10px;
      box-sizing: border-box;
      border: 2px solid #00ff00;
      clip:rect(200px 200px 427px 0px);
      animation: flash 6s infinite linear;
    }

    .out .inner::before{
      animation-delay: -3s;
    }

    @keyframes flash {
      0%{
        clip: rect(0px,396px,447px,386px);
      }
      25%{
        clip: rect(0px,396px,10px,0px);
      }
      50%{
        clip: rect(0px,10px,447px,0px);
      }
      75%{
        clip: rect(447px,396px,447px,0px);
      }
      100%{
        clip: rect(0px,396px,447px,386px);
      }
    }
    .out img{
      z-index: 20;
    }
  .out a{
    display: none;
    position: absolute;
    top: 0px;
    left: 50%;
    width: 374px;
    height: 427px;
    margin-left: -187px;
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
