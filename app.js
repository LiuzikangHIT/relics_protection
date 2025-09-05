// 小程序的全局入口文件
App({
  onLaunch: function () {
    // 小程序启动时执行的逻辑
    console.log('小程序启动了');
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'relics-env-8g2qmpq8fc63082c',
        traceUser: true,
      });
    }
  },
  globalData: {
    // 全局数据
    menuTop: wx.getMenuButtonBoundingClientRect().top,
    safeAreaHeight: wx.getWindowInfo().safeArea ? wx.getWindowInfo().safeArea.top : 0,
    hasLogin: false,
  }
})
