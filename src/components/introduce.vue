<template>
	<div class="introduce">
		<h1 class="title">生命永恒的香味</h1>
		<div class="col-md-12 col-sm-12 col-xs-12 text">
			{{showText}}
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				text:'把读书作为生活的常态，是生命最美好的习惯。从春花读到秋月，从夜雪初晴到朝暾甫上。在春秋默然交替里，在岁月寂然运行中，心灵因书，时而大恸，时而微喜，时而寒霜彻骨，时而微风拂面，一波三折，百转千回，在起起伏伏中，或悟人生至理，或叹人世苍凉，都不失为人生之快事。即便从青春读到暮年, 从黑发读到白首, 也自痛快淋漓, 无怨无悔。',
				showText:''
			}
		},
		created:function(){
			var _this = this;
			var index = 0;
			var strs = this.text.toString();

			var timer = setInterval(function(){
				if(strs.split('').length >= index){
					_this.showText=_this.text.substring(0,index++);
				}else{
					clearInterval(timer);
				}
			},200);
		}
	}
</script>

<style type="text/css">
	.text{
		font-size: 20px;
	}
</style>
