<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-xs-12" id="left">
          <h2>你好，我叫张航</h2>
          <div class="desc">
            <span>喜欢游泳、跑步</span>
            <span>爱读书，对历史很感兴趣</span>
            <span>喜欢看综艺节目</span>
          </div>
          <p class="line"></p>
        </div>
        <div class="col-md-6 col-xs-12" id="right">
          <marquee behavior="scroll" direction="up" class="scrollText"
                   onMouseOut="this.start()" onMouseOver="this.stop()" scrollamount="3">
            纽约时间比加州早三个小时，但不意味着加州变得很慢。<br/>
            有些人22岁就毕业了，但等了五年才找到好的工作！<br/>
            有人25岁就当上CEO，却在50岁去世。<br/>
            也有人50岁才当上CEO，然后活到90岁。<br/>
            有人依然单身，同时也有人已婚。<br/>
            奥巴马55岁退休，特朗普70岁才开始当总统。<br/>
            世上每个人本来就有自己的发展时区。<br/>
            周围的人看似走在了你前面，也有人在你身后。<br/>
            但其实每个人在自己的时区有自己的步程。<br/>
            不用嫉妒或嘲笑他们。<br/>
            他们都在自己的时区里，你也是！<br/>
            生命就是等待着正确的行动时机。<br/>
            所以，放轻松。<br/>
            你未曾落后，也从未领先。<br/>
            在命运为你安排的属于自己的时区里，一切都非常准时。
          </marquee>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        timer: null,
        dirY: 1,
        posY: 300
      }
    },
    created: function () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #left{
    height: 300px;
  }
  #left .desc {
    font-size: 19px;
    color: #ff7d7c;
    text-indent: 2em;
    position: relative;
  }

  @keyframes flash {

    0% {
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    17% {
      opacity: 1;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    19% {
      opacity: 1;
      -webkit-transform: rotate(98deg);
      transform: rotate(98deg);
    }
    21% {
      opacity: 1;
      -webkit-transform: rotate(86deg);
      transform: rotate(86deg);
    }
    23% {
      opacity: 1;
      -webkit-transform: translateY(85px) rotate(83deg);
      transform: translateY(85px) rotate(83deg);
    }
    45% {
      opacity: 0;
      -webkit-transform: translateY(170px) rotate(80deg);
      transform: translateY(170px) rotate(80deg);
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  #left .desc span {
    display: inline;
    position: absolute;
    overflow: hidden;
    opacity: 0;
    -webkit-transform-origin: 10% 75%;
    transform-origin: 10% 75%;
    animation: flash 9s linear infinite;
  }

  #left .desc span:nth-child(2) {
    animation-delay: 3s;
  }

  #left .desc span:nth-child(3) {
    animation-delay: 6s;
  }

  #left .line {
    position: absolute;
    background-color: #ff7d7c;
    height: 2px;
    margin-top: 35px;
    width: 80%;
  }

  #right {
    position: relative;
    height: 300px;
  }

  .scrollText {
    font-size: 16px;
    text-align: center;
    color: #ca7d73;
  }
</style>
