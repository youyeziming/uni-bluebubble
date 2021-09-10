<template>
	<view class="massage-item">
		<view class="picture">
			头像
		</view>
		<view class="content">
			<view class="title">
				<text>
					{{title}}
				</text>
				<text class="date">
					{{date}}
				</text>
			</view>
			<view class="message">{{message}}</view>
		</view>
	</view>
</template>

<script lang="ts">
	import {Component,Vue,Prop} from "vue-property-decorator";
	@Component
	export default class MessageItem extends Vue {
		public name:String="MessageItem";
		@Prop({type:String,required:true})
		private title:String;
		@Prop({type:String,required:true})
		private date:String;
		@Prop({type:String,default:""})
		private message:String;
	}
</script>
<style lang="scss">
	.massage-item{
		@extend .flex-row-between-center;
		padding: 10rpx 32rpx;
		.content{
			flex-grow: 1;
			.title{
				@extend .flex-row-between;
				font-size: $uni-font-size-lg;
				.date{
					font-size: $uni-font-size-sm;
				}
			}
			.message{
				font-size: $uni-font-size-base;
			}
		}
	}
</style>
