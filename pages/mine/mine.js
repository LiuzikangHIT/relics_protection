// pages/mine/index.js
Page({
  data: {
    menuTop: getApp().globalData.menuTop,
    hasLogin: false,
    openID: '',
    userInfo: {
      avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
      nickName: "未设置"
    },
    showFavorites: false,
    showFeedback: false,
    feedback: {
      phone: '',
      content: ''
    },
  },

  onLoad(options) {
    this.getOpenID();
  },

  onShow() {
    this.getTabBar().init();
  },

  getOpenID() {
    const that = this;
    wx.cloud.callFunction({
      name: 'getUserProfile',
      success: (res) => {
        console.log(res);
        that.setData({
          openID: res.result.openid
        });
      },
      fail: (err) => {
        console.error(err);
      },
    });
  },

  showFavoritesDialog() {
    // 检查用户登录
    if (!this.data.hasLogin) {
      wx.showToast({
        title: '用户未登录',
        icon: 'error',
        duration: 2000
      });
      return ;
    }
    this.setData({
      showFavorites: true
    });
  },

  showFeedbackDialog() {
    // 检查用户登录
    if (!this.data.hasLogin) {
      wx.showToast({
        title: '用户未登录',
        icon: 'error',
        duration: 2000
      });
      return ;
    }
    this.setData({
      showFeedback: true
    });
  },

  closeDialog() {
    this.setData({
      showFavorites: false,
      showFeedback: false
    });
  },

  formSubmit(e) {
    const feedbackInfo = e.detail.value;
    // if (feedbackInfo.phone.length === 0) {
    //   wx.showToast({
    //     title: '未填写联系方式',
    //     icon: 'error',
    //     duration: 2000
    //   });
    //   return ;
    // }
    if (feedbackInfo.content.length === 0) {
      wx.showToast({
        title: '未填写具体意见',
        icon: 'error',
        duration: 2000
      });
      return ;
    }

    // 添加至数据库
    wx.cloud.callFunction({
      name: 'dbController',
      data: {
        set: 'feedback',
        func: 'add',
        phone: feedbackInfo.phone,
        content: feedbackInfo.content
      },
      success: (res) => {
        console.log(res);
        wx.showToast({
          title: '反馈成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (err) => {
        console.error(err);
      },
    });
  },

  formReset() {
    this.setData({
      feedback: {}
    });
  },

  userLogin(e) {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        console.log(res);
        this.setData({
          hasLogin: true,
          userInfo: res.userInfo
        });
        getApp().globalData.hasLogin = true;
      }
    });
  },

  navigateToTicketPage() {
    // 检查用户登录
    if (!this.data.hasLogin) {
      wx.showToast({
        title: '用户未登录',
        icon: 'error',
        duration: 2000
      });
      return ;
    }
    wx.navigateTo({
      url: '/pages/ticket/ticket?selected=record',
    });
  },
})