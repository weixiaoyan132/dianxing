// pages/typelist/typelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class:[{
      className:"123456",
      number:123,
      subclass:[{
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
    ]
    },
    {
      className:"123456",
      number:123,
      subclass:[{
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
    ]
    },
    {
      className:"123456",
      number:123,
      subclass:[{
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
    ]
    },
    {
      className:"123456",
      number:123,
      subclass:[{
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
      {
        className:"123456",
        number:123,
      },
    ]
    }
  ],
  activeNames: ['1'],

  },

  subClassChange(event){
    this.setData({
      activeNames: event.detail,
    });
  },
  search_type(opt){
    //console.log(opt.currentTarget.dataset.type);
    //url+type
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?search='+opt.currentTarget.dataset.type,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})