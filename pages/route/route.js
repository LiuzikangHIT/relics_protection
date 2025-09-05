// 路线选择页的 JavaScript 文件
Page({
  data: {
    categories: ['历史', '艺术', '亲子'],
    routes: [
      { id: 1, name: '4小时全馆游览', exhibits: 7, category: '全部' },
      { id: 2, name: '1小时快速体验', exhibits: 3, category: '快速' },
      { id: 3, name: '2小时历史推演', exhibits: 4, category: '历史' },
      { id: 4, name: '3小时艺术鉴赏', exhibits: 4, category: '艺术' },
      { id: 5, name: '1.5小时亲子探索', exhibits: 3, category: '亲子' }
    ],
    currentCategory: '全部'
  },

  onShow() {
    this.getTabBar().init();
  },

  changeCategory(e) {
    this.setData({
      currentCategory: e.currentTarget.dataset.category
    });
  },

  navigateToMapPage(e) {
    let category = '';
    switch (e.currentTarget.dataset.category) {
      case '全部':
        category = 'total';
        break;
      case '快速':
        category = 'quick';
        break;
      case '历史':
        category = 'history';
        break;
      case '艺术':
        category = 'art';
        break;
      case '亲子':
        category = 'family';
        break;
      default:
        category = 'recommend';
    }
    console.log(category)

    // 跳转到地图页
    wx.navigateTo({
      url: `/pages/map/map?category=${category}`,
    });
  },
})
