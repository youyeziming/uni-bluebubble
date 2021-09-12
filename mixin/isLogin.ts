interface ICheckLogin{
	onLoad():void;
}

const isLogin:ICheckLogin = {
	onLoad():void{
		let token:String = uni.getStorageSync("token");
		let pages:Object = getCurrentPages()
		let currentRoute:string  = pages[pages.length-1].route; 
		if(!token&&currentRoute != "pages/login/login"){
			uni.navigateTo({
			    url: '/pages/login/login'
			});
		}
	}
}

export default isLogin;