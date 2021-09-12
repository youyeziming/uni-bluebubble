<template>
	<view class="index">
		<view class="head-bar"></view>
		<view class="head-menu">
			<image src="../../static/img/bubble.jpg"> </image>
			<view class="user-name">{{name}}</view>
			<view class="menu">
				<view class="search icon iconfont icon-search"></view>
				<view class="more icon iconfont icon-tianjia"></view>
			</view>
		</view>
		<view class="all-message">
			<MessageItem v-for="i in 20" img="../../static/img/bubble.jpg" :title="name" :message="name" date="17:01"></MessageItem>
		</view>
		<view class="tabar">
			<view class="active">
				<text  @click="toPage" data-url="/pages/index/index" class="icon iconfont icon-search"></text>
				<text  @click="toPage" data-url="/pages/index/index">我的</text>
			</view>
			<view >
				<text @click="toPage" data-url="/pages/setting/setting" class="icon iconfont icon-ziyuan"></text>
				<text @click="toPage" data-url="/pages/setting/setting">设置</text>
			</view>
		</view>
	</view>
</template>
<script lang="ts">
	import MessageItem from "@/components/MessageItem.vue";
	import {Component,Vue,Prop} from "vue-property-decorator";
	@Component({
		components: {
			MessageItem
		},
	})
	export default class Index extends Vue {
		private name: String = "YYZiMig";
		private onShow():void{
			
		};
		private toPage({currentTarget:{dataset:{url}}}):void{
			let res = uni.navigateTo({url});
			console.log(res);
		};
		
	}
</script>

<style lang="scss">
	$top-height: 88rpx;
	$bar-height:120rpx;
	.index {
		@extend .flex-col;
		background-color: $uni-color-conent-bg;
		overflow: hidden;
		@include relative(0,0,0,0);
		padding: var(--status-bar-height) 0;
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
			image{
				width: 68rpx;
				height: 68rpx;
				border-radius: 8rpx;
			}
			.menu {
				@extend .flex-row-between;
				width: 100rpx;
				.icon{
					font-size: 40rpx;
				}
			}
		}
		.all-message {
			padding-top: $top-height;
			padding-bottom: $bar-height;
		}
		.tabar{
			height: $bar-height;
			box-shadow: 0 20rpx 36rpx 1rpx #000;
			background:$uni-bg-color;
			@extend .flex-row-center-center;
			@include fixed(initial,0,0,0)
			.active{
				color:$uni-color-wrap-active;
			}
			>view{
				flex-grow: 1;
				text-align: center;
				@extend .flex-col-center-center;
				.icon{
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
