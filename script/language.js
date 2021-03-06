var Language={
	setLanguageType: function(val) {
		localStorage.setItem('languageType', val);
	},
	getLanguageType: function() {
		return localStorage.getItem('languageType');
	},
}
var languageCN={
	login:'登录',
	loginIn:'登录中...',
	loginP:'点击登录按钮代表您已同意用户协议和隐私政策',
	loginQQ:'QQ登录',
	loginWechat:'微信登录',
	loginNow:'是否登录?',
	loginY:'是',
	loginN:'否',
	login402:'账号未注册',
	register:'注册',
	registration:'注册中...',
	registS:'注册成功',
	registerP:'点击注册按钮代表您已同意用户协议和隐私政策',
	registerNow:'是否转入注册页面?',
	registerY:'是',
	registerN:'否',
	registerCancel:'是否取消注册?',
	rp1:'请设置您的昵称',
	rp2:'请设置交易密码',
	home:'首页',
	nftBank:'交易',
	member:'财务',
	financial:'我的',
	coinPriceYestodayT:"昨日币价",
	coinPriceTodayT:"今日币价",
	coinPriceIncreaseT:"涨幅",
	coinTotalT:'总市值：',
	coinIncomeT:'总收益：',
	coinReleaseTodayT:'今日算力：',
	coinInOrderT:'持有算力：',
	coinReleasedT:'可用算力：',
	sharedCT:'左区',
	sharingCT:'右区',
	sharedCAT:'左区业绩',
	sharingCAT:'右区业绩',
	sharedCAEL:'左区链接',
	sharingCAEL:'右区链接',
	sharedCAExtensionLinkT:'左区链接(点击复制)',
	sharingCAExtensionLinkT:'右区链接(点击复制)',
	copyST:'复制成功',
	ThePriceChart:'价格走势图',
	price:'价格',
	clickKept:'点击保存到手机',
	//financial
	f1:'我的钱包',
	f2:'总市值',
	f3:'可用算力',
	f4:'持有算力',
	f5:'推广奖励',
	f6:'推广人数',
	f7:'我要转账',
	f8:'推荐列表',
	f9:'财务明细',
	f10:'修改交易密码',
	f11:'绑定手机号',
	f12:'绑定邮箱',
	f13:'语言设置',
	f14:'关于我们',
	f15:'退出',
	//about us
	at:'关于我们',
	ac:'NFT新金融产业链是一个去中心化的大数据信用评级网络，金融机构、银行系统一年的坏账率非常高；利用区块链的不可篡改，链上的用户征信系统，不管是机构还是用户都有自己评分，机构通过链上的识别，决定是否给用户授信金融额度、贷款、房贷、车贷等服务；这样子可以降低70%的坏账率；真正做到把钱给到有需要的企业、个人。',
	//binding
	bd1:'获取验证码',
	bd2:'重新获取',
	bd3:'绑定',
	bd4:'请输入验证码',
	//bindingEmail
	bet:'绑定邮箱',
	be1:'邮箱账号',
	be2:'请输入您的邮箱账号',
	be3:'您已绑定邮箱：',
	//bindingPhone
	bpt:'绑定手机号',
	bp2:'请输入手机号',
	bp3:'您已绑定手机：',
	//changePsw
	cpt:'修改交易密码',
	cp1:'原始密码：',
	cp2:'新密码：',
	cp3:'确认密码：',
	cp4:'请输入原始密码',
	cp5:'请输入新密码',
	cp6:'请再次输入新密码',
	cp7:'确定修改',
	cp8:'新密码与确认密码不一致',
	//img
	imgG:'图片生成中...',
	imgKS:'图片保存成功',
	imgGF:'图片生成失败',
	//memberCenter
	mc1:'我的团队',
	mc2:'业绩查询',
	mc3:'复利设置',
	mc4:'平台公告',
	mc5:'行业资讯',
	mc6:'联系客服',
	//memberCenterCSS
	mccs1:'BC客服邮箱：暂无',
	mccs2:'点击复制',
	//memberCenterCIS
	mcis1:'自动复利',
	mcis2:'停止复利',
	mcis3:'开启自动复利，每日系统结算算力以后，会自动将算力钱包中的余额转入钱包来进行循环复利。',
	//memberCenterMT
	mcmt1:'账号：',
	mcmt2:'星级：',
	mcmt3:'业绩：',
	mcmt4:'左区人数',
	mcmt5:'右区人数',
	mcmtb:'返回上级',
	//wallet
	wAddress:'钱包地址',
	wCopy:'复制收款地址',
	wAdr:'钱包地址',
	wPPAD:'请输入您的收款钱包地址',
	wPF:'我要转账',
	wPFN:'转账数量',
	wPPFN:'请输入转账数量',
	wPSW:'密码',
	wPPSW:'请输入您的交易密码',
	wCPF:'确认转账',
	wP:'此钱包地址可接收BC上限为3万枚',
	//wc提现
	wc1:'转到交易平台',
	wc2:'转到客户钱包',
	wcp1:'请详细核对交易平台钱包地址，钱包地址输入错误，导致客户转出资产损失，BC平台概不负责，转账',
	wcp11:'最低100枚起，手续费为5%。',
	wcp2:'请详细核对客户钱包地址，钱包地址输入错误，导致客户转出资产损失，BC平台概不负责，转账',
	wcp21:'最低10枚起，秒到无手续费。',
	//Prompt
	loading:'请求中...',
	uploading:'上传中...',
	binding:'绑定中...',
	Revising:'修改中...',
	//算力-CF
	CFTotal:'总算力：',
	CFToday:'今日算力：',
	CFAvailable:'可用算力：',
	CFHave:'持有算力：',
	CFPackage:'算力套餐',
	CFDetail:'算力明细',
	CFPrompt:'提示：进行算力后可随时进行冻结',
	CFStar1:'一星算力',
	CFStar2:'二星算力',
	CFStar3:'三星算力',
	CFStar4:'四星算力',
	CFStar5:'五星算力',
	CFProfit:'算力收益：',
	CFDPercentage:'%(每日)',
	CFStar5T:'5000以上',
	
	//列表-L
	LName:'用户名',
	LStarLevel:'星级',
	LNumber:'数量',
	LDate:'日期',
	LProfit:'收益',
	LType:'状态',
	
	LEDName:'姓名',
	LEDMode:'推广方式',
	LEDDate:'推广日期',
	LEDReward:'推广奖励',
	
	LCFIntelligence:'智能',
	LCFHold:'持币',
	LCFRecommend:'推荐',
	LCFShare:'分享',
	LCFManage:'管理',
	LCFBonus:'分红',
	
	LLock:'锁',
	LUnlock:'解',
	LPutForward:'提',
	LRecharge:'充',
	LPF:'提现',
	LR:'充值',
	
	Pieces:'枚',
	People:'人',
	Personal:'个人',
	PNumber:'请输入您要查询的会员账号',
	PLogin:'请先登录',
	PWait:'敬请期待',
}
var languageEN={
	login:'Login',
	loginIn:'Login...',
	loginP:'Click the login button to indicate that you have agreed to user agreement and privacy policy.',
	loginQQ:'QQ Login',
	loginWechat:'wechat Login',
	loginNow:'Login Now?',
	loginY:'Yes',
	loginN:'No',
	login402:'Account number is not registered',
	register:'Register',
	registS:'Register Success',
	registration:'Registration...',
	registerNow:'Do you turn to the registration page?',
	registerY:'Yes',
	registerN:'No',
	registerCancel:'Do you cancel the registration?',
	rp1:'Please set up your nickname',
	rp2:'Please set the transaction password',
	registerP:'Click the registration button to indicate that you have agreed to user agreement and privacy policy.',
	//home1
	home:'Front Page',
	nftBank:'NFT Bank',
	member:'Members Center',
	financial:'Financial Center',
	coinPriceYestodayT:"Yesterday price",
	coinPriceTodayT:"Today price",
	coinPriceIncreaseT:"Increasing rate",
	coinTotalT:'T Value：',
	coinIncomeT:'T Revenue：',
	coinReleaseTodayT:"Today HP：",//Today's Calculation force
	coinInOrderT:'Holding HP：',
	coinReleasedT:'Available HP：',
	
	sharedCT:'Shared',
	sharingCT:'Sharing',
	sharedCAT:'Left CA',
	sharingCAT:'Right CA',
	sharedCAEL:'Shared CA Link',
	sharingCAEL:'sharing CA Link',
	
	sharedCAExtensionLinkT:'shared CA Link(click copy)',
	sharingCAExtensionLinkT:'sharing CA Link(click copy)',
	copyST:'copy success',
	ThePriceChart:'ThePriceChart',
	price:'price',
	clickKept:'Click Kept',
	
	//financial
	f1:'My Wallet',
	f2:'Total value',
	f3:'Available HP',
	f4:'Have HP',
	f5:'Promote Reward',
	f6:'Promote Number',
	f7:'Withdraw Cash',
	f8:'Promoted List',
	f9:'Financial List',
	f10:'Revise trade password',
	f11:'Binding cell phone number',
	f12:'Binding mailbox',
	f13:'Language setting',
	f14:'About us',
	f15:'Sign out',
	//about us
	at:'About us',
	ac:'The new financial industry chain of NFT is a big data credit rating network which is centralization. The bad debt rate of the financial institutions and the banking system is very high. The user credit system on the chain can not be tampered with the block chain. Believe that financial services, loans, housing loans, car loans and other services, so that it can reduce the bad debt rate of 70%; truly to give money to the needs of enterprises and individuals.',
	//binding
	bd1:'Get code',
	bd2:'Recapture',
	bd3:'Binding',
	bd4:'Please enter code',
	//bindingEmail
	bet:'Binding mailbox',
	be1:'Mailbox',
	be2:'Please enter mailbox',
	be3:'You have been bound to the mailbox：',
	//bindingPhone
	bpt:'Binding Phone',
	bp2:'Please enter phone number',
	bp3:'You have bindings of your mobile phone：',
	//changePsw
	cpt:'revise trade password',
	cp1:'Original：',
	cp2:'New：',
	cp3:'Confirm：',
	cp4:'Enter the original password',
	cp5:'Enter the New password',
	cp6:'Enter the Confirm password',
	cp7:'Revising',
	cp8:'The new password is not consistent with the confirmed password',
	//img
	imgG:'Image Generation...',
	imgKS:'Image Kept Success',
	imgGF:'Image Generation Failure',
	//memberCenter1
	mc1:'My team',
	mc2:'Performance check',
	mc3:'Compound interest set',
	mc4:'Notice',
	mc5:'News',
	mc6:'Customer service',
	//memberCenterCCS1
	mccs1:'NFT customers service email：newfinance666@gmail.com',
	mccs2:'Click to copy',
	//memberCenterCIS1
	mcis1:'Automatic compound interest',
	mcis2:'Stop compound interest',
	mcis3:'Open automatic Compound interest, Everyday, after calculating system hashing power, the balance in hashing power wallet will be automatically transferred to wallet to compound interest non-stop.',
	//memberCenterMT1
	mcmt1:'Number：',
	mcmt2:'Star rating：',
	mcmt3:'Performance：',
	mcmt4:'Shared community team',
	mcmt5:'Shared community team',
	mcmtb:'Back Superior',
	//wallet
	wAddress:'Wallet Address',
	wCopy:'Copy',
	wAdr:'WA',
	wPPAD:'Please enter wallet address',
	wPF:'Withdraw Cash',
	wPFN:'PFN',
	wPPFN:'Please enter the amount of cash',
	wPSW:'PW',
	wPPSW:'Please enter transaction password',
	wCPF:'Withdraw Cash',
	wP:'This wallet address can receive an upper limit of 30 thousand NFT',
	//wc提现
	wc1:'Transfer to exchange platform',
	wc2:'Transfer to client wallet',
	wcp1:'Please make sure the exchange platform wallet address is correct, any capital missing due to wrong address, NFT takes no responsibility, ',
	wcp11:'100pcs minimum transfer, 5% handling fee.',
	wcp2:'Please make sure the client wallet address is correct, any capital missing due to wrong address, NFT takes no responsibility,',
	wcp21:'10pcs minimum transfer, arriving instantly without handling fee.',
	//Prompt
	loading:'loading...',
	uploading:'Uploading...',
	binding:'binding...',
	Revising:'Revising...',
	//算力-HP
	CFTotal:'Total HP：',
	CFToday:'Today HP：',
	CFAvailable:'Available HP：',
	CFHave:'Have HP：',
	CFPackage:'HP Package',
	CFDetail:'HP Detail',
	CFPrompt:'Prompt: it can be frozen at any time after the calculation is carried out.',
	CFStar1:'One Star HP',
	CFStar2:'Two Star HP',
	CFStar3:'Three Star HP',
	CFStar4:'Four Star HP',
	CFStar5:'Five Star HP',
	CFProfit:'HP Profit：',
	CFDPercentage:'%(DAY)',
	CFStar5T:'More than 5000',
	
	//列表-L
	LName:'name',
	LStarLevel:'star level',
	LNumber:'number',
	LDate:'date',
	LProfit:'profit',
	LType:'type',
	LEDName:'name',
	LEDMode:'mode',
	LEDDate:'date',
	LEDReward:'reward',
	
	LCFIntelligence:'Intelligence',
	LCFHold:'Hold',
	LCFRecommend:'Recommend',
	LCFShare:'Share',
	LCFManage:'Manage',
	LCFBonus:'Bonus',
	
	LLock:'L',
	LUnlock:'UL',
	LPutForward:'W',
	LRecharge:'R',
	LPF:'Withdraw',
	LR:'Recharge',
	//单位
	Pieces:'Pieces',
	People:'People',
	Personal:'Personal',
	PNumber:'please put in the VIP number',
	PLogin:'Please log in first',
}
