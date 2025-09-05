// pages/relics/relics.js
Page({
  data: {
    menuTop: getApp().globalData.menuTop,
    relicsList: [
      { id: 1, name: '云纹铜禁', image: 'cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/relics1.png', dynasty: '春秋时期', specification: "纵长131厘米，横长67.6厘米，高28.8厘米，身宽46厘米，重94.2千克", unearthedTime: '1978年', unearthedPlace: '河南省淅川下寺春秋楚墓', description: "铜禁主体是透雕云纹，错综复杂，有玲珑剔透之感。奇特的构思，瑰丽的纹饰，彰显着神秘浪漫的楚风神韵。", tip: "云纹铜禁采用失蜡法铸造而成。失蜡法是我国古代三大铸造技术之一，《唐会要》中有使用蜡模铸造开元通宝的记载。" },
      { id: 2, name: '四神云气图壁画', image: 'cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/relics2.png', dynasty: '西汉早期', specification: "长5.14米，宽3.27米", unearthedTime: '1987年', unearthedPlace: '河南省商丘永城芒砀山柿园汉墓', description: "壁画主题图案以朱砂红为底色，上面用白、绿、黑等颜色绘有青龙、白虎、朱雀、怪兽等四种神禽异兽，以及灵芝、花朵和云气纹等吉祥图案。", tip: "中国古代青龙、白虎、朱雀等神兽既表示空间方位，亦可保护生者免于灾疫伤害，死者免受鬼魅的侵扰，为人们心目中的吉祥瑞兽。" },
      { id: 3, name: '妇好鸮尊', image: 'cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/relics3.png', dynasty: '商代晚期', specification: "通高46.3厘米，口长16.4厘米，足高13.2厘米，盖高13.4厘米，重16千克", unearthedTime: '1976年', unearthedPlace: '河南安阳殷墟小屯宫殿宗庙遗址西南侧妇好墓', description: "鸮尊，小耳高冠，圆眼宽喙，双翅并拢，粗壮的双足与下垂的宽尾构成三点支撑，使器物显得挺拔矫健，气宇轩昂。", tip: "鸮究竟是一种什么样的鸟呢？它就是中国古代对猫头鹰类鸟的统称。在商代，猫头鹰被视为智慧的象征。昼伏夜出的习性、无声的飞行、锐利的喙爪使其拥有了勇猛、威严的形象，令人敬畏、崇拜，被视为神鸟。" },
      { id: 4, name: '贾湖骨笛', image: 'cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/relics4.png', dynasty: '新石器时代', specification: "长23.6厘米", unearthedTime: '1987年', unearthedPlace: '河南舞阳贾湖遗址M282号墓', description: "这是一支来自8000多年前的笛子，是迄今为止在中国发现的最早、保存最为完整的吹管乐器，被誉为“中华第一笛”。该笛以鹤类禽鸟中空的尺骨锯去两端关节钻孔制成，可以演奏出近似七声音阶的乐曲。", tip: "中国古代青龙、白虎、朱雀等神兽既表示空间方位，亦可保护生者免于灾疫伤害，死者免受鬼魅的侵扰，为人们心目中的吉祥瑞兽。" },
    ],
    showDialog: {},
  },

  onLoad(options) {
    // 页面加载时执行的逻辑
    let showDialog = {};
    this.data.relicsList.forEach((item) => {
      showDialog[item.id] = false;
    });
    this.setData({
      showDialog
    });
  },

  onShow() {
    this.getTabBar().init();
  },

  showDialog(e) {
    const id = e.currentTarget.dataset.relics.id;
    this.setData({
      [`showDialog.${id}`]: true
    });
  },

  closeDialog(e) {
    const id = e.currentTarget.dataset.relics.id;
    this.setData({
      [`showDialog.${id}`]: false
    });
  },
  
  navigateToDetaiPage(e) {
    const that = this;
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: function(res) {
        that.closeDialog(e);
        // 传递展品信息
        res.eventChannel.emit('acceptDataFromRelicsPage', { exhibit: e.currentTarget.dataset.relics })
      }
    });
  }
})