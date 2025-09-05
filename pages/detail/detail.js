// 展品详情页的 JavaScript 文件
Page({
  data: {
    menuTop: getApp().globalData.menuTop,
    exhibit: {},
    audioBtn: '语音讲解生成中',
    forbidPlay: true,
    playAudio: false,
    showTip: false,
  },
  
  audioCtx: null,

  onLoad: function (options) {
    // 获取传递的展品信息
    const that = this;
    const eventChannel = this.getOpenerEventChannel();
    const { guide } = require("../../services/chatAPI.js");
    eventChannel.on('acceptDataFromRelicsPage', function(data) {
      that.setData({
        exhibit: data.exhibit
      });
      // 生成大模型讲解文本
      guide(data.exhibit.name).then(narration => {
        console.log(narration);
        that.getNarrationAudio(narration);
      });
    });
  },

  onShow: function () {
    this.audioCtx = wx.createInnerAudioContext({
      useWebAudioImplement: true
    });
  },

  backToLastPage: function () {
    // 释放Audio资源
    this.stopAudio();
    this.audioCtx.destroy();
    this.audioCtx = null;
    wx.navigateBack();
  },

  getNarrationAudio: async function (narration) {
    // 使用阿里云TTS接口生成语音
    const audioSrc = await wx.cloud.callFunction({
      // 云函数名称
      name: 'aliyunTTS',
      // 传给云函数的参数
      data: {
        appkey: 'OTe9XEp2UNMWTOst',
        text: narration,
        audioSaveFile: `narration${this.data.exhibit.id}.wav`,
        format: 'wav',
        sampleRateValue: 16000
      }
    });
    this.audioCtx.src = audioSrc.result.fileID;
    this.setData({
      audioBtn: '播放语音讲解',
      forbidPlay: false
    });
    console.log("ok");
  },

  tapPlayButton: function () {
    if (this.data.playAudio) {
      this.stopAudio();
    } else {
      this.playAudio();
    }
  },

  playAudio: function () {
    const that = this;
    this.audioCtx.onPlay(() => {
      that.setData({
        playAudio: true,
      });
    });
    this.audioCtx.play();
    this.audioCtx.onEnded(() => {
      that.stopAudio();
    });
  },

  stopAudio: function () {
    this.audioCtx.stop();
    this.setData({
      playAudio: false,
    });
  },

  showTip: function () {
    this.setData({
      showTip: true
    })
  },

  hideTip: function () {
    this.setData({
      showTip: false
    });
  }
})
