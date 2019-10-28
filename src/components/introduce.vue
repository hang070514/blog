<template>
	<div class="introduce">
		<h1 class="title">生命永恒的香味</h1>
		<div class="col-md-12 col-sm-12 col-xs-12 text" style="color: #2aabd2">
			{{text}}
		</div>
    <div class="row">
      <div class="col-md-4" >
        <a  class="address" href="https://www.jianshu.com/p/f7b43e3d8b32">
          <img class="center-block img-responsive" src="../assets/img/wu.png" alt="吴三桂：是非成败后人说" >
        </a>
      </div>
      <div class="col-md-4" >
        <a  class="address" href="https://www.jianshu.com/p/2385edd8d734">
          <img class="center-block img-responsive" src="../assets/img/han.png"
               alt="凡日月所照，皆为汉土——读《汉武大帝》有感" >
        </a>
      </div>
      <div class="col-md-4" >
        <a  class="address" href="https://www.jianshu.com/p/f7b43e3d8b32">
          <img class="center-block img-responsive" src="../assets/img/li.png" alt="李鸿章：最屈辱的爱国者" >
        </a>
      </div>
    </div>

	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				text:'把读书作为生活的常态，是生命最美好的习惯。从春花读到秋月，从夜雪初晴到朝暾甫上。在春秋默然交替里，在岁月寂然运行中，心灵因书，时而大恸，时而微喜，时而寒霜彻骨，时而微风拂面，一波三折，百转千回，在起起伏伏中，或悟人生至理，或叹人世苍凉，都不失为人生之快事。即便从青春读到暮年, 从黑发读到白首, 也自痛快淋漓, 无怨无悔。',
				showText:'',
        color1:0,
        color2:0,
        color3:0
			}
		},
		created:function(){
			var _this = this;
			var index = 0;
			var strs = this.text.toString();

		/*	var timer = setInterval(function(){
				if(strs.split('').length >= index){
          this.color1 = parseInt(Math.random()*255);
          this.color2 = parseInt(Math.random()*255);
          this.color3 = parseInt(Math.random()*255);
          console.log($('.text').text().substring(index,index+1));

          var mSpan = '<span style="color: rgb('+this.color1+','+this.color2+','+this.color3+')">'+_this.text.substring(index,index+1)+'</span>';
          index++;
          //console.log(index);
          $('.text').append(mSpan);
				}else{
					clearInterval(timer);
				}
			},200);*/
			//this.test();
		},
    methods:{
        test(){
          //console.log('我是测试方法');
          this.color1 = Math.random(0,1)+255;
          console.log(this.color1);
      }
    }
	}
</script>

<style type="text/css" lang="less">
  .introduce{
    margin-top: 50px;
    .title{
        color: #ff7d7c;
    }
    .text{
      font-size: 20px;
      margin: 20px 0 50px 0;
    }
    img{
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
  }

</style>
