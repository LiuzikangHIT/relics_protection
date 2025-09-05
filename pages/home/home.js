// pages/home.js
import { fetchHome } from '../../services/home.js';

Page({
  data: {
    safeAreaHeight: getApp().globalData.safeAreaHeight,
    swiperList: [],
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 3000,
    menuTop: getApp().globalData.menuTop,
    activityImg: [
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/mock-relics1.png",
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/mock-relics2.png",
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/mock-relics3.png",
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/mock-relics4.png",
    ],
  },

  onLoad(options) {
    this.init();
  },

  onShow() {
    this.getTabBar().init();
  },

  init() {
    fetchHome().then(({ swiperImg }) => {
      this.setData({
        swiperList: swiperImg,
      });
    });
  },

  remindLogin() {
    wx.switchTab({
      url: '/pages/mine/mine',
    });
    wx.showToast({
      title: '用户未登录',
      icon: 'error',
      duration: 2000
    });
  },

  navigateToTicketPage() {
    // 检查用户登录
    if (!getApp().globalData.hasLogin) {
      this.remindLogin();
      return ;
    }

    wx.navigateTo({
      url: '/pages/ticket/ticket',
    });
  },

  navigateToMapPage() {
    wx.navigateTo({
      url: '/pages/map/map?category=recommend',
    });
  },
})