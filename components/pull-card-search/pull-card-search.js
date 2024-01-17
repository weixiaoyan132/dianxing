// components/pull-card-search/pull-card-search.js
import Toast from '@vant/weapp/toast/toast';
Component({
  options: {
    styleIsolation: 'shared',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    search_value:{
      type:String,
      value:"",
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:"",
  },
  observers:{
    search_value:function(search_value){
      this.setData({
        value:search_value,
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch() {
      if(this.getTabBar().data.active==0){
        wx.navigateTo({
          url: '/pages/searchResult/searchResult?search='+this.data.value,
        })
      }
      Toast('搜索' + this.data.value);
      console.log(this.data.value);
    },
  }
})