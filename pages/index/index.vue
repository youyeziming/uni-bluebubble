<template>
	<view class="content">
		<view class="head-menu">
			<view class="user-namepicture">
				1
			</view>
			<view class="user-name">
				{{name}}
			</view>
			<view class="menu">
				<view class="search"></view>
				<view class="more">+</view> 
			</view>
		</view>
		<view class="all-message">
			<MessageItem :title="name" :message="name" date="127.0.1"></MessageItem>
		</view>
	</view>
</template>

<script lang="ts">
	import MessageItem from "@/components/MessageItem.vue";
	import {Component,Vue,Prop} from "vue-property-decorator";
	@Component({components: {MessageItem }})
	export default class Index extends Vue {
		private name:String = "YYZiMig";
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	.content {
		@extend .flex-col;
		background-color: $uni-color-conent-bg;
		$top-height:88rpx;
		.head-menu{
			height: $top-height;
			background:$uni-color-conent-white;
			padding:0 32rpx;
			@include fixed(0,0,initial,0); 
			@extend .bottom-line;
			@extend .flex-row-between-center;
		}
		.all-message{
			@include absolute($top-height,0,0,0);
		}
	}
</style>
