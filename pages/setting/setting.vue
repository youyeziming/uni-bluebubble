<template>
	<view class="setting">
		<view class="tabar">
			<view>
				<text  @click="toPage" data-url="/pages/index/index" class="icon iconfont icon-search"></text>
				<text  @click="toPage" data-url="/pages/index/index">我的</text>
			</view>
			<view class="active">
				<text @click="toPage" data-url="/pages/setting/setting" class="icon iconfont icon-ziyuan"></text>
				<text @click="toPage" data-url="/pages/setting/setting">设置</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import {Component,Vue,Prop} from "vue-property-decorator";
	@Component()
	export default class Setting extends Vue {
		private toPage({currentTarget:{dataset:{url}}}):void{
			let res = uni.navigateTo({url});
			console.log(res);
		};
	}
</script>

<style lang="scss">
	$bar-height:120rpx;
	.setting{
		@include relative(0,0,0,0);
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
