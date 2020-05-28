/*********************全局变量-common start**************************/
ip = 'http://club.bcclub.club/'; //网络请求ip地址
//ip = 'http://club.bcclub.club/';
//ip = 'http://47.52.91.119:8083/'; //网络请求ip地址



//ip = 'http:192.168.0.145:8082/';//樊姐
appId = 'A6079654181014'; //app的id

/*********************全局变量-common end**************************/

/*********************检测工具类-common start**************************/
/**
 * 检测工具类
 */
var ToolCheck = {
	/**
	 * 判断是否存在
	 * @param value
	 */
	isDefine: function(value) {
		console.log(value);
		if(value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined') {
			return false;
		} else {
			value = value + "";
			value = value.replace(/\s/g, "");
			if(value == "") {
				return false;
			}
			return true;
		}
	},
	isLogin: function() {
		if(!Tools.getLocalToBoolean('loginType')) {
			return false;
		}
		return true;
	},
	isFirstLogin: function() {
		//此处判断有问题
		var ones=Tools.getLocal('isFirstType');
		if(ToolCheck.isDefine(ones)) {
			//如果存在代表不是首次登录
			return false;
		}else{
			Tools.setLocal('isFirstType','no');
			return true;
		}
	},
	isMobileNumber:function (phone){
		console.log(phone);
	    var flag = false;
	    var message = "";
	    var messageEN="";
	    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
	    if (!ToolCheck.isDefine(phone)) {
	        message = "手机号码不能为空！";
	        messageEN="The phone number can't be empty!";
	    } else if (phone.length != 11) {
	        message = "请输入11位手机号码！";
	        messageEN="Please enter 11 mobile phone numbers!";
	    } else if (!myreg.test(phone)) {
	        message = "请输入有效的手机号码！";
	        messageEN="Please enter a valid cell phone number!";
	    } else {
	        flag = true;
	    }
	    var returnData={
	    	type:flag,
	    	msg:message,
	    	msgEN:messageEN
	    }
	    return returnData;
	},
	isEmail:function (myemail){
		var flag = false;
		var message = "";
		var messageEN="";
	　　	var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;	 
	　　	if(myReg.test(myemail)){
	　　　　	flag=true;
	　　	}else{
	　　　　	message="邮箱格式不正确!";
			messageEN="Incorrect mailbox format!";
		}
		var returnData={
	    	type:flag,
	    	msg:message,
	    	msgEN:messageEN
	    }
	    return returnData;
	},
	isRealNum:function (val){
	    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
	    if(val === "" || val ==null){
	        return false;
	    }
	    if(!isNaN(val)){
	        return true;
	    }else{
	        return false;
	    }
	},
	isWalletAdr:function(val){
		var flag = true;
		var message="钱包地址格式不正确!";
		var messageEN="Wallet address format error!";
		var regExp = /^[a-z0-9]+$/i;
		if(!regExp.test(val)){
			flag=false;
		}else if(val.length!=42){
			flag=false
		}
		var returnData={
	    	type:flag,
	    	msg:message,
	    	msgEN:messageEN
	    }
	    return returnData;
	}
}
/*********************检测工具类-common end**************************/

/*********************日期工具类-common start**************************/
/**
 * 日期工具类
 */
var ToolDate = {
	/**
	 * 对Date的扩展，将 Date 转化为指定格式的String
	 * @param {int} inputTime//时间戳
	 */
	formatDateTime: function(inputTime) {
//		if(inputTime.toString().length == 10) {
//			inputTime = inputTime * 1000;
//		}
		var date = new Date(inputTime)
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
	},
	/**
	 * 根据时间戳获取年、月、日
	 * @param String str 时间戳
	 * @param Boolean f 是否在原来的基础上*1000，true要*，false或不填就不*
	 */
	getMakeTimes: function(str, f) {
		var t = (f) ? parseInt(str) : parseInt(str) * 1000;
		var d = new Date(t);
		var y = d.getFullYear();
		var m = this.setNum(d.getMonth() + 1);
		var d = this.setNum(d.getDate());
		return y + "-" + m + "-" + d;
	},
	setNum: function(s) {
		return(parseInt(s) > 9) ? s : '0' + s;
	},
	/**
	 *计算2个日期相差多少天
	 *@param String strDateStart和strDateEnd 日期，格式为2014-04-04
	 */
	getDays: function(strDateStart, strDateEnd) {
		var strSeparator = "-";
		//日期分隔符
		var oDate1;
		var oDate2;
		oDate1 = strDateStart.split(strSeparator);
		oDate2 = strDateEnd.split(strSeparator);
		var strDateS = new Date(oDate1[0] + "-" + oDate1[1] + "-" + oDate1[2]);
		var strDateE = new Date(oDate2[0] + "-" + oDate2[1] + "-" + oDate2[2]);
		var iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
		return iDays;
	},
	getIntentDateTime:function(){
		return ToolDate.formatDateTime(($.ajax({async:false}).getResponseHeader("Date")));
	},
	getDateForCount:function(time,count){
		time=time.replace(new RegExp(/-/gm) ,"/");
		var dd = new Date(time);
		dd.setDate(dd.getDate()+count);//count天后的日期
		return ToolDate.formatDateTime(dd);
	}
}
/*********************日期工具类-common end**************************/

/*********************列表工具类-common start**************************/
var ToolList = {
	/**
	 * mui的下拉刷新及上拉加载list
	 * @param {string} container 列表容器标识（#id/.class）
	 * @param {object} listData 列表数据数组名称
	 * @param {string} nameSpace 列表数据请求地址的命名空间
	 */
	muiPullRefreshList: function(container, listData, nameSpace, data) {
		var list = new MuiPullRefreshList(container, listData, nameSpace, data);
		return list;
	},
	/**
	 * mui的列表项点击监听
	 * @param {string} container 列表容器标识（#id/.class）
	 * @param {function} fn 监听时所使用的函数
	 */
	setListener: function(container, fn) {
		muiListen(container, fn);
	}
}
/*********************列表工具类-common end**************************/

/*********************UI展示工具类-common start**************************/
/**
 * UI展示工具类
 */
var ToolUI = {
	/**
	 * 自动消失的提示框
	 * @param {string} title 标题
	 * @param {int} duration 时长（毫秒）
	 * @param {string} location 位置（top//顶部，middle//中间，bottom//底部）
	 */
	setHeader:function(){
		var header = document.querySelector('header');
		$api.fixStatusBar(header);
		api.setStatusBarStyle({
		    style: 'light'
		});
	},
	/**
	 * 自动消失的提示框
	 * @param {string} title 标题
	 * @param {int} duration 时长（毫秒）
	 * @param {string} location 位置（top//顶部，middle//中间，bottom//底部）
	 */
	toast: function(title, duration, location) {
		if(!title) {
			txt = '努力加载中...';
		}
		if(!duration) {
			duration = 2000;
		}
		if(!location) {
			location = 'middle';
		}
		api.toast({
			msg: title,
			duration: duration,
			location: location
		});
	},
	/**
	 * 显示进度提示框
	 * @param {string} title 标题
	 * @param {string} text 内容
	 * @param {boolean} modal 是否模态，模态时整个页面将不可交互
	 */
	showProgress: function(title, text, modal) {
//		if(!title) {
//			title = '努力加载中...';
//		}
//		if(!text) {
//			text = '先喝杯茶...';
//		}
//		if(!modal) {
//			modal = false;
//		}
//		var title='';
//		var text='';
//		var modal='';
//		api.showProgress({
//			title: title,
//			text: text,
//			modal: modal
//		});
	},
	openProgress: function(title, text, modal) {
//		if(!title) {
//			title = '努力加载中...';
//		}
//		if(!text) {
//			text = '先喝杯茶...';
//		}
//		if(!modal) {
//			modal = false;
//		}
		var title='';
		var text='';
		var modal='';
		api.showProgress({
			title: title,
			text: text,
			modal: modal
		});
	},
	closeProgress: function() {
		api.hideProgress();
	},
	/**
	 * 隐藏进度提示框
	 */
	hideProgress: function() {
//		api.hideProgress();
	},
	/**
	 * 打开mui日期控件
	 * @param {string} type 日历初始视图模式datetime/date/time/month/hour
	 * @param {function} callback 回调方法
	 * @param {Date} beginDate 开始时间
	 * @param {Date} endDate 结束时间
	 */
	muiDatePicker: function(type, callback, beginDate, endYear) {
		if(!type) {
			type = 'datetime';
		}
		if(!beginDate) {
			beginDate = new Date();
		}
		if(!endYear) {
			endYear = beginDate.getFullYear() + 4;
		}
		var dtpicker = new mui.DtPicker({
			type: type,
			beginDate: beginDate,
			endYear: endYear,
			labels: ['年', '月', '日', '时', '分'],
			customData: {
				//h: [
				//    { value: 'AM', text: 'AM' },
				//    { value: 'PM', text: 'PM' }
				//]
			} //时间/日期别名
		});
		dtpicker.show(function(e) {
			//console.log(e);
			callback(e.text);
			this.dispose();
		});
	},
	/**
	 * 初始化vue图片懒加载
	 */
	vLazyload: function() {
		Vue.use(VueLazyload, {
			preLoad: 1.3, //高度比例
			error: '../../image/lazy_error.png',
			loading: '../../image/lazy_loading.png',
			attempt: 1 //尝试次数
		});
	},
	/**
	 * 初始化轮播组件
	 * @param {string} container 容器id
	 * @param {Int} height 轮播高度
	 * @param {Int} speed 轮播速度
	 * @param {Boolean} autoPlay 自动播放
	 * @param {Boolean} loop 是否循环
	 * @param {Boolean} pageShow 是否显示分页器
	 * @param {String} pageStyle 分页器样式//dot,line
	 * @param {String} dotPosition 分页器位置//left,center,right
	 */
	aSlide: function(container, height, speed, autoPlay, loop, pageShow, pageStyle, dotPosition) {
		if(!height) {
			var height = 240;
		}
		if(!speed) {
			var speed = 500;
		}
		if(!autoPlay) {
			autoPlay = 3000;
		}
		if(!loop) {
			loop = true;
		}
		if(!pageShow) {
			pageShow = true;
		}
		if(!pageStyle) {
			pageStyle = 'dot';
		}
		if(!dotPosition) {
			dotPosition = 'center';
		}
		var slide = new auiSlide({
			container: document.getElementById(container),
			// "width":300,
			"height": height,
			"speed": speed,
			"autoPlay": autoPlay,
			"loop": loop,
			"pageShow": pageShow,
			"pageStyle": pageStyle,
			'dotPosition': dotPosition
		});
		console.log(slide.pageCount());
	},
	/**
	 * 初始化文字滚动组件（向上）
	 * @param {string} container 容器id
	 * @param {int} stoptime 间隔时间
	 */
	zSlide: function(container, stoptime) {
		if(!stoptime) {
			var stoptime = 2000;
		}
		var Mar = document.getElementById(container);
		var child_div = Mar.getElementsByTagName("div");
		var childLength = child_div.length;
		var picH = Mar.offsetHeight; //移动高度
		var scrollstep = 5; //移动步幅,越大越快
		var scrolltime = 20; //移动频度(毫秒)越大越慢
		var stoptime = 2000; //间断时间(毫秒)
		var tmpH = 0;
		Mar.innerHTML += Mar.innerHTML;

		function start() {
			if(tmpH < picH) {
				tmpH += scrollstep;
				if(tmpH > picH) tmpH = picH;
				Mar.scrollTop = tmpH;
				setTimeout(start, scrolltime);
			} else {
				tmpH = 0;
				Mar.appendChild(child_div[0]);
				Mar.scrollTop = 0;
				setTimeout(start, stoptime);
			}
		}
		setTimeout(start, stoptime);
	}
}
/*********************UI展示工具类-common end**************************/

/*********************网络请求工具类-common start**************************/
/**
 * 网络请求工具类
 */
var ToolWebRequests = {
	/**
	 * ajaxPost请求
	 * @param {string} nameSapce 请求地址命名空间
	 * @param {Object} data 请求数据
	 * @param {function} callback 回调方法
	 */
	ajaxPost: function(nameSpace, data, callback) {
		var token=Tools.getLocal('token');
		var paramData = {
			url: ip + nameSpace,
			method: 'post',
			dataType: 'json'
		};
		if(data.files) {
			paramData.data = data;
		} else {
			paramData.headers = {
				"Content-Type": "application/json",
				"token":token
			};
			paramData.data = {
				body: data
			};
		}
		api.ajax(paramData, function(ret, err) {
			console.log('请求数据：'+JSON.stringify(paramData));
			console.log('返回数据：'+JSON.stringify(ret)+'--'+JSON.stringify(err));
			if(ret) {
				if(ret.code == 200 || ret.code == 1) {
					callback(true, ret);
				}else if(ret.code==886){
					ToolWin.closeToWin('root');
					Tools.alertFormat(vm.languageType,ret);
					ToolWin.closeToWin('root');
					ToolWin.execScript('root','','vm.loginOut()');
				}
				else {
					callback(false, ret);
				}
			} else {
				ToolWebRequests.webRequestsErr(err);
			}
		});
	},
	ajaxGet: function(nameSpace,callback) {
		var token=Tools.getLocal('token');
		var paramData = {
			url: ip + nameSpace,
			method: 'get',
			dataType: 'json'
		};
		paramData.headers = {
			"Content-Type": "application/json",
			"token":token
		};
		api.ajax(paramData, function(ret, err) {
			console.log('请求数据：'+JSON.stringify(paramData));
			console.log('返回数据：'+JSON.stringify(ret)+'--'+JSON.stringify(err));
			if(ret) {
				if(ret.code == 200 || ret.code == 1) {
					callback(true, ret);
				}else if(ret.code==886){
					Tools.alertFormat(vm.languageType,ret);
					ToolWin.closeToWin('root');
					ToolWin.execScript('root','',"vm.loginOut()");
				}
				else {
					callback(false, ret);
				}
			} else {
				ToolWebRequests.webRequestsErr(err);
			}
		});
	},
	/**
	 * web请求错误统一处理类
	 * @param {Object} err 错误数据
	 * statusCode:400 网络请求状态码，数字类型
	 * code:0 错误码，数字类型。（0：连接错误、1：超时、2：授权错误、3：数据类型错误）
	 * msg:'' 错误描述，字符串类型
	 * body: 当请求失败如需要权限时，此时服务器返回的数据会通过该参数返回；当要求返回的数据格式为json，而返回的数据不是json格式时，数据通过该参数返回
	 */
	webRequestsErr: function(err) {
		//有加载框的关闭加载框
		ToolUI.hideProgress();
		var errCode = err.code;
		if(errCode == 0) {
			ToolUI.toast('Connect Err');
		} else if(errCode == 1) {
			ToolUI.toast('Timeout');
		} else if(errCode == 2) {
			ToolUI.toast('Authorization error');
		} else if(errCode == 3) {
			ToolUI.toast('Data type error');
		}
		//可在此处往服务器发错误报告
	},
	/**
	 * web请求失败统一处理类
	 * @param {String} msg 错误提示
	 */
	webRequestsFail: function(msg) {
		ToolUI.hideProgress();
		if(!ToolCheck.isDefine(msg)) {
			msg = 'err...'
		}
		ToolUI.toast(msg);
		//可在此处往服务器发错误报告
	}
}
/*********************网络请求工具类-common end**************************/

/*********************窗口公用类-common start**************************/
/**
 * 窗口公用类
 */
var ToolWin = {
	/**
	 * 打开一个新窗口
	 * @param {string} url 要打开的窗口的路径
	 * @param {object} params 传递的值
	 */
	openWin: function(url, params) {
		name = url.substring(url.lastIndexOf('/') + 1);
		//console.log('openWinName:'+name);
		url = url + ".html";
		if(ToolCheck.isDefine(params)) {
			api.openWin({
				name: name,
				url: url,
				slidBackEnabled: false,
				softInputMode: 'pan',
				pageParam: params,
				reload: true
			});
		} else {
			api.openWin({
				name: name,
				url: url,
				slidBackEnabled: false,
				softInputMode: 'pan',
				reload: true
			});
		}
	},
	/**
	 * 关闭窗口
	 * @param {string} name(非必填字段，默认关闭当前窗口)
	 */
	closeWin: function(name) {
		(ToolCheck.isDefine(name)) ? api.closeWin({
			name: name
		}): api.closeWin();
	},
	closeToWin:function(name){
		api.closeToWin({
		    name: name
		});
	},
	/**
	 * 打开一个frame
	 * @param {string} url(frame路径)
	 * @param {string} pars(传递参数)
	 */
	openFrame: function(url, pars) {
		name = url.substring(url.lastIndexOf('/') + 1);
		url = url + ".html";
		var header_h = 0;
		var footer_h = 0;
		var header = $api.dom('header');
		if(ToolCheck.isDefine(header)) {
			var header_h = header.offsetHeight;
		}
		var footer = $api.dom('footer');
		if(ToolCheck.isDefine(footer)) {
			var footer_h = footer.offsetHeight;
		}
		var height = api.winHeight - header_h - footer_h;
		api.openFrame({
			name: name,
			url: url,
			rect: {
				x: 0,
				y: header_h,
				w: 'auto',
				h: height
			},
			pageParam: {
				headerH: header_h,
				//				pars : pars
			},
			//			bounces : false,
			//			opaque : true,
			allowEdit : true,
			bgColor: 'rgba(1,1,1,0)',
			//			vScrollBarEnabled : true,
			//			hScrollBarEnabled : false,
			//			reload : false,
			progress:"page"
		});
	},
	/**
	 * 打开一个frame组
	 * @param {String} name(frame组名称)
	 * @param {Object} frames(frame组)
	 */
	openFrameGroup: function(name, frames) {
		var header_h = 0;
		var footer_h = 0;
		var header = $api.dom('header');
		if(ToolCheck.isDefine(header)) {
			var header_h = header.offsetHeight;
		}
		var footer = $api.dom('footer');
		if(ToolCheck.isDefine(footer)) {
			var footer_h = footer.offsetHeight;
		}
		var height = api.winHeight - header_h - footer_h;
		api.openFrameGroup({
			name: name,
			scrollEnabled: false,
			vScrollBarEnabled: false, //（可选项）是否显示垂直滚动条，布尔型，默认值：true
			hScrollBarEnabled: false,
			rect: {
				x: 0,
				y: header_h,
				w: 'auto',
				h: height
			},
			frames: frames
		}, function(ret, err) {});
	},
	/**
	 * 打开指定frame组中的指定frame
	 * @param {String} groupName(frame组名称)
	 * @param {Int} index(frame下标)
	 */
	setFrameGroupIndex: function(groupName, index) {
		api.setFrameGroupIndex({
			name: groupName,
			index: index
		});
	},
	/**
	 * 打开指定win，frame中执行指定的方法
	 * @param {String} winName(win名称)
	 * @param {String} frameName(frame名称)
	 * @param {String} script(方法名)
	 */
	execScript: function(winName, frameName, script) {
		api.execScript({
			name: winName,
			frameName: frameName,
			script: script
		});
	}
}
/*********************窗口公用类-common end**************************/

/*********************原生工具类-common start**************************/
/*********************原生工具类-common end**************************/

/*********************其他工具类-common start**************************/
/**
 * 其他工具类
 */
var Tools = {
	/**
	 * 设置登录状态
	 */
	setLoginType: function(val) {
		localStorage.setItem('loginType', val);
	},
	setLanguageType: function(val) {
		localStorage.setItem('languageType', val);
	},
	getLanguageType: function() {
		return localStorage.getItem('languageType');
	},
	/**
	 * 设置本地存储
	 * @param {string} key
	 * @param {string} val
	 */
	setLocal: function(key, val) {
		localStorage.setItem(key, val);
	},
	/**
	 * 设置JSON对象本地存储
	 * @param {string} key
	 * @param {object} val
	 */
	setJsonLocal: function(key, val) {
		var json = JSON.stringify(val)
		localStorage.setItem(key, json);
	},
	/**
	 * 获取本地存储
	 * @param {string} key
	 */
	getLocal: function(key) {
		return localStorage.getItem(key);
	},
	/**
	 * 获取boolean型的本地存储
	 * @param {string} key
	 */
	getLocalToBoolean: function(key) {
		if(localStorage.getItem(key) == 'true') {
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 获取JSON型的本地存储
	 * @param {string} key
	 */
	getLocalToJSON: function(key) {
		var str = localStorage.getItem(key);
		if(str) {
			var json = JSON.parse(str);
			return json;
		} else {
			return null;
		}
	},
	/**
	 * 退出APP
	 * @param value
	 */
	exitApp: function() {
		api.addEventListener({
			name: 'keyback'
		}, function(ret, err) {
			api.toast({
				msg: '再按一次返回键退出应用',
				duration: 2000,
				location: 'bottom'
			});
			api.addEventListener({
				name: 'keyback'
			}, function(ret, err) {
				api.closeWidget({
					id: appId, //这里改成自己的应用ID
					retData: {
						name: 'closeWidget'
					},
					silent: true
				});
			});
			setTimeout(function() {
				exitApp();
			}, 3000)
		});
	},
	BroadRefreshData:function(){
		api.sendEvent({
		    name: 'refreshData',
		});
	},
	BroadChangeLanguage:function(){
	//向外面广播任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。
		api.sendEvent({
			//自定义事件 的名称
		    name: 'changeLanguage',
		});
	},
	ListenerRefreshData:function(refreshFn){
		api.addEventListener({
	        name:'refreshData'
        },function(ret,err){
        	refreshFn();
        });
	},
	ListenerChangeLanguage:function(changeFn){
		api.addEventListener({
	        name:'changeLanguage'
        },function(ret,err){
        	changeFn();
        });
	},
	alertFormat:function(l,data){
		if(ToolCheck.isDefine(l)){
			var title=''
			var msg='';
			if(l=='CN'){
				msg=data.msg;
	//			alert(data.msg);
			}else if(l=='EN'){
				msg=data.msgEN;
	//			alert(data.msgEN);
			}
			api.alert({
			    title: '',
			    msg: msg,
			}, function(ret, err) {

			});
		}else{
			api.alert({
			    title: '',
			    msg: data,
			}, function(ret, err) {

			});
		}
	},
	toastFormat:function(l,data){
		var title='';
		if(l=='CN'){
			title=data.msg;
		}else if(l=='EN'){
			title=data.msgEN;
		}
		api.toast({
			msg: title,
			duration: 2000,
			location: 'middle'
		});
	}
}
/*********************其他工具类-common end**************************/

/*********************mui框架-common start**************************/
/**
 * mui的下拉刷新及上拉加载list
 * @param {string} container 列表容器标识（#id/.class）
 * @param {object} listData 列表数据数组名称
 * @param {string} nameSpace 列表数据请求地址的命名空间
 * @param {Object} data 列表数据请求地址的命名空间
 */
function MuiPullRefreshList(container, listData, nameSpace, data) {
	this.container = container;
	this.listData = listData;
	this.nameSpace = nameSpace;
	this.data = data;
	var canPulldown = true;
	var list=this;
	this.downRefresh = function() {
		list.data.updateTime = '';
		ToolWebRequests.ajaxPost(list.nameSpace, list.data, pulldownRefreshCallback);
	};
	pulldownRefreshCallback = function(status, ret) {
		if(status) {
			list.listData.splice(0, list.listData.length);
			//下拉刷新获取数据成功.设置数据
			if(ret.data.length > 0) {
				//装载列表数据
				for(var i = 0; i < ret.data.length; i++) {
					list.listData.push(ret.data[i]);
				}
			}
		} else {
			ToolWebRequests.webRequestsFail(ret.msg);
		}
		//结束下拉刷新
		mui(container).pullRefresh().endPulldownToRefresh();
		if(!canPulldown) {
			//启用上拉刷新
			mui(container).pullRefresh().enablePullupToRefresh();
		}
	};
	this.pullupRefresh = function() {
		if(canPulldown) {
			if(list.listData.length > 0) {
				var tm = list.listData[list.listData.length - 1].updateTimeApp;
				list.data.updateTime = tm;
				ToolWebRequests.ajaxPost(list.nameSpace, list.data, pullupRefreshCallback);
			} else {
				mui(container).pullRefresh().endPullupToRefresh(false);
			}
		} else {
			mui(container).pullRefresh().endPullupToRefresh(false);
			canPulldown = true;
		}
	};
	pullupRefreshCallback = function(status, ret) {
		if(status) {
			if(ret.data.length > 0) {
				//上拉加载获取数据成功.设置数据
				for(var i = 0; i < ret.data.length; i++) {
					list.listData.push(ret.data[i]);
				}
				//结束上拉加载
				mui(container).pullRefresh().endPullupToRefresh(false);
			} else {
				//结束上拉加载
				mui(container).pullRefresh().endPullupToRefresh(true);
				setTimeout(function() {
					mui(container).pullRefresh().disablePullupToRefresh();
					canPulldown = false;
				}, 2000);
			}
		} else {
			ToolWebRequests.webRequestsFail(ret.msg);
			//结束上拉加载
			mui(container).pullRefresh().endPullupToRefresh(false);
		}
	};
}
MuiPullRefreshList.prototype.init = function() {
	mui.init({
		pullRefresh: {
			container:this.container,
			down: {
				auto: false, //可选,默认false.首次加载自动上拉刷新一次
				callback: this.downRefresh
			},
			up: {
				auto: false,
				callback: this.pullupRefresh
			}
		}
	});
	mui(this.container).scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
}
MuiPullRefreshList.prototype.changeListData = function(listData, nameSpace, data) {
	this.listData=listData;
	this.nameSpace=nameSpace;
	this.data=data;
}
MuiPullRefreshList.prototype.pulldownRefresh = function() {
	this.downRefresh();
}
MuiPullRefreshList.prototype.scrollTop = function() {
	mui(this.container).scroll().scrollTo(0,0,100);
}
/**
 * mui的监听事件
 * @param {string} container 列表容器标识（#id/.class）
 * @param {function} fn 回调方法
 */
function muiListen(container, fn) {
	mui(container).on('tap', 'li', function(e) {
		index = this.getAttribute('index');
		fn(index);
	});
}
/**
 * mui对元素的监听事件
 * @param {string} container 列表容器标识（#id/.class）
 * @param {string} el 列表容器标识（#id/.class/elment标签）
 * @param {function} fn 回调方法
 */
function muiListenForEl(container,el,fn){
	mui(container).on('tap', el, function(e) {
		index = this.getAttribute('index');
		fn(index);
	});
}
/************************mui框架-common end**************************/
