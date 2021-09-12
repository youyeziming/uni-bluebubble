<template>
	<view class="massage-item">
		<view class="picture">
			<image :src="img"></image>
			<view class="state" v-show="state">{{state}}</view>
		</view>
		<view class="contents">
			<view class="title">
				<text>{{title}}</text>
				<text class="date">{{date}}</text>
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
		@Prop({type:String,default:""})
		private img:String;
		@Prop({type:Number,default:0})
		private state:Number;
	}
</script>
<style lang="scss">
	$img-size:96rpx;
	$font-family:PingFangSC-Regular;
	$message-width:500rpx;
	.massage-item{
		&:active{
			background: $uni-bg-color-deepgrey;
		}
		font-family: $font-family;
		@extend .flex-row-between-center;
		padding: 18rpx 32rpx;
		background-color: $uni-bg-color;
		.picture{
			position: relative;
			height: $img-size;
			image{
				width: $img-size;
				height:$img-size;
				border-radius: $uni-border-radius-base;
			}
			.state{
				@include absolute(0,initial,initial,0);
				@include  text-center(36rpx);
				@extend .border-box;
				transform: translate(25%, -25%);
				background: $uni-color-tip;
				height: 36rpx;
				min-width: 36rpx;				
				border-radius: 10rpx;
				padding: 0px 10rpx;
				border-radius: $uni-border-radius-lg;
				color:$uni-text-color-inverse;
			}
		}
		.contents{
			font-size: $uni-font-size-sm;
			background: initial;
			color: $uni-text-color-inverse;
			padding-left: 32rpx;
			flex-grow: 1;
			.title{
				@extend .flex-row-between-center;
				font-size: $uni-font-size-lg;
				color: #272832;
				letter-spacing: -0.62px;
				text:nth-child(1){
					flex-grow:1;
					@extend .text-overflow-hidden;
					width: $message-width - 15rpx;
				}
				.date{
					font-size: $uni-font-size-sm;
					color: rgba(39,40,50,0.40);
					letter-spacing: -0.41px;
				}
			}
			.message{
				font-size: $uni-font-size-base;
				@extend .text-overflow-hidden;
				width: $message-width;
				color: rgba(39,40,50,0.60);
				letter-spacing: -0.48rpx;
				flex-grow: 1;
			}
		}
	}
</style>
