Page({
  data: {
    active: 0,
  },
  onChange(event) {
    //console.log(event.detail)
    //this.setData({ active: event.detail });图标会闪烁所以直接在使用底部导航的页面中设置setData；
  },
});
