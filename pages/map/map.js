// pages/map/map.js
Page({
  data: {
    windowSize: {
      width: wx.getWindowInfo().windowWidth,
      height: wx.getWindowInfo().windowHeight
    },
    mapImg: "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/map.png",
    entrance: 'A',
    pos: [
      { id: 0, x: 0.54, y: 0.55, desc: '入口A左口' },
      { id: 1, x: 0.54, y: 0.44, desc: '特展区右下口' },
      { id: 2, x: 0.32, y: 0.44, desc: '特展区下方' },
      { id: 3, x: 0.32, y: 0.23, desc: '青铜器厅上方' },
      { id: 4, x: 0.55, y: 0.23, desc: '青铜器厅中路口' },
      { id: 5, x: 0.55, y: 0.20, desc: '馆藏室右下口' },
      { id: 6, x: 0.27, y: 0.20, desc: '馆藏室左下口' },
      { id: 7, x: 0.27, y: 0.13, desc: '馆藏室' },
      { id: 8, x: 0.71, y: 0.13, desc: '雕刻展厅' },
      { id: 9, x: 0.71, y: 0.25, desc: '陶瓷展厅下方' },
      { id: 10, x: 0.78, y: 0.25, desc: '陶瓷展厅下口' },
      { id: 11, x: 0.78, y: 0.29, desc: '书画展厅上口' },
      { id: 12, x: 0.58, y: 0.29, desc: '书画展厅左口' },
      { id: 13, x: 0.58, y: 0.55, desc: '入口A右口' },
      { id: 14, x: 0.15, y: 0.20, desc: '入口B上口' },
      { id: 15, x: 0.58, y: 0.37, desc: '休息区左上口' },
      { id: 16, x: 0.32, y: 0.37, desc: '特展区上口' },
      { id: 17, x: 0.15, y: 0.23, desc: '入口B下口' },
      { id: 18, x: 0.55, y: 0.13, desc: '馆藏室右口' },
      { id: 19, x: 0.58, y: 0.46, desc: '休息区左下口' },
      { id: 20, x: 0.69, y: 0.46, desc: '放映室入口' },
      { id: 21, x: 0.72, y: 0.50, desc: '放映室' },
      { id: 22, x: 0.75, y: 0.44, desc: '放映室出口' },
      { id: 23, x: 0.58, y: 0.25, desc: '陶瓷展厅左口' },
    ],
    routeA: {
      route_A_total: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],  // 入口A参观完整路线
      route_A_quick: [0, 1, 2, 3, 4, 5, 6, 14], // 快速游览路线（入口A→特展区→青铜器厅→馆藏室→入口B）
      route_A_history: [13, 12, 11, 10, 9, 8, 18, 4, 17], // 历史推演路线（入口A→书画展厅→陶瓷展厅→雕刻展厅→青铜器厅→入口B）
      route_A_art: [13, 12, 11, 10, 9, 8, 7, 6, 14],  // 艺术鉴赏路线（入口A→书画展厅→陶瓷展厅→雕刻展厅→馆藏室→入口B）
      route_A_family: [13, 19, 20, 21, 22, 15, 12, 11, 10, 9, 23, 4, 17],  // 亲子探索路线（入口A→放映室→书画展厅→陶瓷展厅→青铜器厅→入口B）
    },
    routeB: {
      route_B_total: [14, 6, 7, 8, 9, 10, 11, 12, 15, 16, 3, 17],  // 入口B参观完整路线
      route_B_quick: [14, 6, 5, 4, 3, 2, 1, 0],  // 快速游览路线（入口B→馆藏室→青铜器厅→特展区→入口A）
      route_B_history: [17, 4, 18, 8, 9, 10, 11, 12, 13],  // 历史推演路线（入口B→青铜器厅→雕刻展厅→陶瓷展厅→书画展厅→入口A）
      route_B_art: [14, 6, 7, 8, 9, 10, 11, 12, 13],  // 艺术鉴赏路线（入口B→馆藏室→雕刻展厅→陶瓷展厅→书画展厅→入口A）
      route_B_family: [17, 3, 2, 22, 21, 20, 19, 13], // 亲子探索路线（入口B→青铜器厅→特展区→放映室→入口A）
    },
    nextRoute: {
      route_B_collection: [14, 6],                        // 入口B→馆藏室
      route_B_bronze: [17, 3],                            // 入口B→青铜器厅
      route_collection_B: [6, 14],                        // 馆藏室→入口B
      route_collection_sculpture: [7, 8],                 // 馆藏室→雕刻展厅
      route_collection_bronze: [7, 6, 5, 4, 3],           // 馆藏室→青铜器厅
      route_collection_ceramics: [7, 6, 5, 23, 9],        // 馆藏室→陶瓷展厅
      route_sculpture_collection: [8, 7],                 // 雕刻展厅→馆藏室
      route_sculpture_ceramics: [8, 9],                   // 雕刻展厅→陶瓷展厅
      route_ceramics_sculpture: [9, 8],                   // 陶瓷展厅→雕刻展厅
      route_ceramics_calligraphy: [9, 10, 11],            // 陶瓷展厅→书画展厅
      route_ceramics_collection: [9, 23, 5, 6, 7],        // 陶瓷展厅→馆藏室
      route_ceramics_bronze: [9, 23, 4, 3],               // 陶瓷展厅→青铜器区
      route_bronze_B: [3, 17],                            // 青铜器厅→入口B
      route_bronze_collection: [3, 4, 5, 6, 7],           // 青铜器厅→馆藏室
      route_bronze_ceramics: [3, 4, 23, 9],               // 青铜器厅→陶瓷展厅
      route_bronze_calligraphy: [3, 4, 12, 11],           // 青铜器厅→书画展厅
      route_bronze_exhibit: [3, 2],                       // 青铜器厅→特展区
      route_calligraphy_ceramics: [11, 10, 9],            // 书画展厅→陶瓷展厅
      route_calligraphy_bronze: [11, 12, 4, 3],           // 书画展厅→青铜器厅
      route_calligraphy_exhibit: [11, 12, 15, 2],         // 书画展厅→特展区
      route_calligraphy_showings: [11, 12, 19, 20, 21],   // 书画展厅→放映室
      route_calligraphy_A: [11, 12, 13],                  // 书画展厅→入口A
      route_exhibit_A: [2, 1, 0],                         // 特展区→入口A
      route_exhibit_bronze: [2, 3],                       // 特展区→青铜器厅
      route_exhibit_calligraphy: [2, 15, 12, 11],         // 特展区→书画展厅
      route_exhibit_showings: [2, 19, 20, 21],            // 特展区→放映室
      route_showings_A: [21, 20, 19, 13],                 // 放映室→入口A
      route_showings_exhibit: [21, 22, 2],                // 放映室→特展区
      route_showings_calligraphy: [21, 20, 19, 12, 11],   // 放映室→书画展厅
      route_A_exhibit: [0, 1, 2],                         // 入口A→特展区
      route_A_showings: [13, 19, 20, 21],                 // 入口A→放映室
    },
    exhibitRoom: [
      { name: 'A', next: ['exhibit', 'showings'] },
      { name: 'exhibit', next: ['A', 'showings', 'bronze', 'calligraphy'] },
      { name: 'showings', next: ['A', 'exhibit'] },
      { name: 'calligraphy', next: ['exhibit', 'ceramics', 'bronze'] },
      { name: 'bronze', next: ['B', 'collection', 'calligraphy', 'exhibit', 'showings'] },
      { name: 'ceramics', next: ['collection', 'sculpture', 'calligraphy', 'bronze'] },
      { name: 'sculpture', next: ['collection', 'ceramics'] },
      { name: 'collection', next: ['B', 'sculpture', 'bronze', 'ceramics'] },
      { name: 'B', next: ['collection', 'bronze'] },
    ],
    flowrate: {
      collection: 0,
      sculpture: 0,
      bronze: 0,
      ceramics: 0,
      calligraphy: 0,
      exhibit: 0,
      showings: 0,
      A: 0,
      B: 0
    },
    recommendRoute: [],
    label: [
      { id: 1, icon: 'icon-shangdian', content: '文创店', pos: [[10, 51]] },
      { id: 2, icon: 'icon-weishengjian', content: '卫生间', pos: [[87, 52]] },
    ],
  },

  async onLoad(options) {
    // 获取人流密度
    const { Get_ESP_IoTEnv } = require('../../services/IoT.js');
    const iotEnv = await Get_ESP_IoTEnv();
    let realFlowrate = iotEnv.flowrate.map(Number);
    console.log(realFlowrate);
    let flowrate = this.data.flowrate;
    var i = 0;
    for (var room in flowrate) {
      // flowrate[room] = Math.floor(Math.random() * 5);
      flowrate[room] = realFlowrate[i++];
    }
    console.log(flowrate);

    // 修正坐标
    let pos = this.data.pos;
    let offset = {
      x: 0,
      y: 0
    };
    console.log(wx.getDeviceInfo().brand);
    switch (wx.getDeviceInfo().brand) {
      case 'devtools':
      case 'HUAWEI':
        offset.y = 0.01;
        break;
      case 'Xiaomi':
      case 'vivo':
        offset.y = 0.04;
        break;
      default:
        console.log(wx.getDeviceInfo().brand);
    }
    pos.forEach(item => {
      item.x += offset.x;
      item.y += offset.y;
    });

    this.setData({
      category: options.category,
      flowrate,
      pos
    });

    // 生成动态推荐路线
    console.log(options.category);
    if (options.category === 'recommend') {
      this.genRecommendRoute();
    }
    this.drawRoute();
  },

  genRecommendRoute() {
    const { routeA, routeB } = require('../../model/route_tree.js');
    const flowrate = this.data.flowrate;
    let cur = this.data.entrance === 'A' ? routeA : routeB;
    let hasReached = [this.data.entrance];
    while (Array.isArray(cur.children) && cur.children.length !== 0) {
      var nextRoom = '';
      var minFlowrate = 5;
      cur.children.forEach(room => {
        if (flowrate[room.name] < minFlowrate) {
          minFlowrate = flowrate[room.name];
          nextRoom = room;
        }
      })
      hasReached.push(nextRoom.name);
      cur = nextRoom;
    }
    console.log(hasReached)

    const nextRoute = this.data.nextRoute;
    let route = [];
    for (var i = 0; i < hasReached.length-1; i++) {
      route.push.apply(route, nextRoute[`route_${hasReached[i]}_${hasReached[i+1]}`]);
    }
    route = route.filter((item, index) => {
      return index === 0 || item !== route[index - 1];
    });
    // console.log(route);
    this.setData({
      recommendRoute: route
    });
  },

  drawRoute() {
    const that = this
    const windowInfo = wx.getWindowInfo()
    const windowWidth = windowInfo.windowWidth
    const windowHeight = windowInfo.windowHeight

    const pos = this.data.pos
    const category = this.data.category;
    let route = [];
    if (category === 'recommend') {
      route = this.data.recommendRoute;
    } else {
      route = this.data[`route${this.data.entrance}`][`route_${this.data.entrance}_${this.data.category}`];
    }

    const query = wx.createSelectorQuery()
    query.select('#routeCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        const dpr = windowInfo.pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)

        ctx.strokeStyle = 'orange'
        ctx.lineWidth = 3

        // 绘制路径
        ctx.beginPath()
        for (var i = 1; i < route.length; i++) {
          const start = route[i-1], end = route[i]
          var xA = pos[start].x * windowWidth
          var yA = pos[start].y * windowHeight
          var xB = (pos[start].x + pos[end].x) / 2 * windowWidth
          var yB = (pos[start].y + pos[end].y) / 2 * windowHeight
          ctx.moveTo(pos[start].x * windowWidth, pos[start].y * windowHeight)
          ctx.lineTo(pos[end].x * windowWidth, pos[end].y * windowHeight)
          that.drawArrow(ctx, xA, yA, xB, yB)
        }
        ctx.stroke()
      })
  },

  // 绘制箭头
  drawArrow(ctx, xA, yA, xB, yB, L=10, θ=30) {
    let a = Math.atan2((yB - yA), (xB - xA));
    let xC = xB - L * Math.cos(a + θ * Math.PI / 180);
    let yC = yB - L * Math.sin(a + θ * Math.PI / 180);
    let xD = xB - L * Math.cos(a - θ * Math.PI / 180);
    let yD = yB - L * Math.sin(a - θ * Math.PI / 180);
    ctx.moveTo(xA, yA);
    ctx.lineTo(xB, yB);
    ctx.moveTo(xC, yC);
    ctx.lineTo(xB, yB);
    ctx.lineTo(xD, yD);
},

  changeEntBtn(e) {
    this.setData({
      entrance: e.currentTarget.dataset.entrance
    });
    if (this.data.category === 'recommend') {
      this.genRecommendRoute();
    }
    this.drawRoute();
  },
})