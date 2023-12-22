// components/pull-card/pull-card.js
Component({
  options: {
    multipleSlots: true ,// 在组件定义时的选项中启用多slot支持
    styleIsolation: 'shared',
  },
  /**
   * 组件的属性列表
   */
  properties: {

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
    //结构化搜索面板展开
  detail_search(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  }
})