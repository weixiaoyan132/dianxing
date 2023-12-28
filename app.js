
App({
  screen_res:{},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const res = wx.getSystemInfoSync()
    const result = {
    ...res,
    bottomSafeHeight: 0,
		isIphoneX: false,
		isMi: false,
		isIphone: false,
		isIpad: false,
		isIOS: false,
		isHeightPhone: false,
  }
  const modelmes = result.model
    const system = result.system
    // 判断设备型号
    if (modelmes.search('iPhone X') != -1 || modelmes.search('iPhone 11') != -1) {
      result.isIphoneX = true;
    }
    if (modelmes.search('MI') != -1) {
      result.isMi = true;
    }
    if (modelmes.search('iPhone') != -1) {
      result.isIphone = true;
    }
    if (modelmes.search('iPad') > -1) {
      result.isIpad = true;
    }
    let screenWidth = result.screenWidth
    let screenHeight = result.screenHeight
    // 宽高比自适应
    screenWidth = Math.min(screenWidth, screenHeight)
    screenHeight = Math.max(screenWidth, screenHeight)
    const ipadDiff = Math.abs(screenHeight / screenWidth - 1.33333)
    if (ipadDiff < 0.01) {
      result.isIpad = true
    }
    if (result.isIphone || system.indexOf('iOS') > -1) {
      result.isIOS = true
    }
    const myCanvasWidth = (640 / 375) * result.screenWidth
    const myCanvasHeight = (1000 / 667) * result.screenHeight
    const scale = myCanvasWidth / myCanvasHeight
    const rate = 750/result.screenWidth;
    console.log(rate);
    result.rate=rate;//自定义，以375px的规格写样式，切换机型时计算1px为多少rpx，计算高度；
    if (scale < 0.64) {
      result.isHeightPhone = true
    }
    result.navHeight = result.statusBarHeight + 46
    result.pageWidth = result.windowWidth
    result.pageHeight = result.windowHeight - result.navHeight
    if (!result.isIOS) {
      result.bottomSafeHeight = 0
    }
   const capsuleInfo = wx.getMenuButtonBoundingClientRect()
    // 胶囊热区 = 胶囊和状态栏之间的留白 * 2 (保持胶囊和状态栏上下留白一致) * 2(设计上为了更好看) + 胶囊高度
    const navbarHeight = (capsuleInfo.top - result.statusBarHeight) * 4 + capsuleInfo.height
    // 写入胶囊数据
    result.capsuleInfo = capsuleInfo;
    // 安全区域
    const safeArea = result.safeArea;
    // 可视区域高度 - 适配横竖屏场景
    const screenHeight2 = Math.max(result.screenHeight, result.screenWidth);
    const height = Math.max(safeArea.height, safeArea.width);
    // 状态栏高度
    const statusBarHeight = result.statusBarHeight;
    // 获取底部安全区域高度（全面屏手机）
    if (safeArea && height && screenHeight2) {
      result.bottomSafeHeight = screenHeight2 - height - statusBarHeight;
      if (result.bottomSafeHeight < 0) {
        result.bottomSafeHeight = 0;
      }
    }
    // 设置header高度
    result.headerHeight = statusBarHeight + navbarHeight;
    // 导航栏高度
    result.navbarHeight = navbarHeight;
    this.screen_res=result;
    console.log(result.bottomSafeHeight);
    console.log(result.pageHeight);
    console.log(result.windowHeight);
    console.log(result.screenHeight)
    console.log(result.statusBarHeight)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
