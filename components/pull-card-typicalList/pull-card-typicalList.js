// components/pull-card-typicalList/pull-card-typicalList.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      value:1,
    },
    item:{
      type:Object,
      value:null,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    search_detail_text(e){
      let id=this.properties.item.id;
      wx.navigateTo({
        url: '/pages/detailText/detailText?id='+id,
      })
      
    },

  }
})