<template>
	<view class="login">
		<view class="head-bar"></view>
		<view class="head-menu">
			<view @click="close" class="close icon iconfont icon-fanhui"></view>
		</view>
		<view class="container">
			<text class="title">登录bluebubble</text>
			<view class="form">
				<view>
					<input value="123" type="text">
				</view>
				<view class="see">
					<input value="123" :type="show?'text':'password'">
					<text @click="showPW" class="icon iconfont" :class="show?'icon-biyan_huaban1':'icon-yanjing'"></text>
				</view>
			</view>
			<view class="btn-login">登录</view>
		</view>
	</view>
</template>

<script lang="ts">
	import {Component,Vue,Prop} from "vue-property-decorator";
	@Component({
		components: {
		}
	})
	export default class Login extends Vue {
		private show:Number = 0;
		private showPW():void{
			this.show ^= 1;
		}
		private close():void{
			
		}
	}
</script>

<style lang="scss">
	$top-height: 88rpx;
	.login{
		font-family: PingFangSC-Medium;
		.head-bar{
			background: $uni-bg-color;
			height:var(--status-bar-height) ;
			@include fixed(0, 0, initial, 0);
			z-index: 9;
		}
		.head-menu {
			margin-top:	var(--status-bar-height);
			text-align: center;
			height: $top-height;
			background: $uni-color-conent-white;
			padding: 0 32rpx;
			z-index: 9;
			@include fixed(0, 0, initial, 0);
			@extend .bottom-line;
			@extend .flex-row-between-center;
			.icon{
				font-size: 40rpx;
			}
		}
		.container{
			padding:80rpx+$top-height 32rpx 0 32rpx;
			@extend .flex-col-center-center;
			.title{
				font-size: 28px;
				color: $uni-color-wrap-basic;
				font-weight: bolder;
			}
			.form{
				width: 680rpx;
				margin-top: 80rpx;
				input{
					height: 100rpx;
					border-bottom: 1px solid rgba(39,40,50,0.08);
				}
				.see{
					@include relative(0,0,0,0);
					.icon{
						@include absolute(50%,initial,initial,0);
						transform: translateY(-50%);
						font-size: $uni-font-size-bg;
					}
				}
			}
			.btn-login{
				margin-top: 120rpx;
				background: $uni-color-wrap-basic;
				box-shadow: 0 25rpx 16rpx -18rpx rgba(255,228,49,0.40);
				border-radius: 24rpx;
				width: 580rpx;
				height: 98rpx;
				@include text-center(98rpx);
				font-size: 32rpx;
				color: #272832;
				&:active{
					background: $uni-color-wrap-active;
					color: $uni-text-color-inverse;
				}
			}
			
		}
		
	}
</style>
