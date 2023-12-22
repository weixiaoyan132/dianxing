// pages/dianxing/dianxing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"dianxing",
    option1: [
      { text: '所有类型', value: 0, icon:"" },
      { text: '类型1', value: 1 ,icon:""},
      { text: '类型2', value: 2 ,icon:""},
      { text: '类型3', value: 3 ,icon:""},
      { text: '类型4', value: 4 ,icon:""},
      { text: '类型5', value: 5 ,icon:""},
      { text: '类型6', value: 6 ,icon:""},
      { text: '类型7', value: 7 ,icon:""},
      { text: '类型8', value: 8 ,icon:""},
    ],
    option2: [
      { text: '所有状态', value: 0 ,icon:""},
      { text: '草稿状态', value: 1 ,icon:""},
      { text: '未评状态', value: 2 ,icon:""},
    ],
    option3: [
      { text: '时间顺序', value: 0 ,icon:""},
      { text: '时间倒序', value: 1 ,icon:""},
    ],
    value1: 0,
    value2: 0,
    value3: 0,
    mytypical_data:[
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      },
      {
        id:"123",
        title:"111",
        key:"www",
        type:"type",
        time:"2012-03-26",
        statu:"草稿"
      }
    ],
  },
  //查询未判断的案例，根据下拉菜单的条件顺序查询
  change_mytypical_search(e){
    console.log(e.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let tabshow=this.getTabBar();
    tabshow.setData({active : 1});

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