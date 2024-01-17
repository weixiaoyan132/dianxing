import Toast from '@vant/weapp/toast/toast';
Page({
  options: {
    styleIsolation: 'shared',
  },
  /**
   * 页面的初始数据
   */
  data: {
    // value:"",
    typicalnum:50,
    allnum:60,
  },
  //点击搜索按钮或者按确认建进行搜索
  //跳转到搜索结果页面，搜索结果也包含搜索框
  // onSearch() {
  //   Toast('搜索' + this.data.value);
  //   console.log(this.data.value);

  // },
  
  toTypeList(){
    wx.navigateTo({
      url: '/pages/typelist/typelist',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tabshow=this.getTabBar();
    tabshow.setData({active : 0});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
