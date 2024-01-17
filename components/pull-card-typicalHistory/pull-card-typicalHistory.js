// components/pull-card-typicalHistory/pull-card-typicalHistory.js
Component({
  options: {
    styleIsolation: 'shared',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      value:0
    },
    item:{
      type:Object,
      value:{},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeNames: ['1'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    detail_search(event) {
      this.setData({
        activeNames: event.detail,
      });
    },
  }
})