// pages/ticket.js
import { aesDecrypt } from '../../utils/crypto';
import { stringToByteArray } from '../../utils/comm';
import drawQrcode from '../../utils/weapp.qrcode.esm.js';

Page({
  data: {
    swiperList: [
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/ticket-notice1.png",
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/ticket-notice2.png",
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/ticket-notice3.png",
      "cloud://relics-env-8g2qmpq8fc63082c.7265-relics-env-8g2qmpq8fc63082c-1365962227/ticket-notice4.png",
    ],
    selected: 'form',
    dateRange: {
      selectedDate: '',
      startDate: '',
      endDate: '',
    },
    reservation: [],
    responseData: [],
    str_key: '',
    showNFC: false,
    showQRCode: false,
  },
  
  onLoad(options) {
    if (options.selected) {
      this.setData({
        selected: options.selected
      });
    }

    // 获取日期
    let dateRange = this.data.dateRange;
    dateRange.selectedDate = this.getSpecifiedDate(1);
    dateRange.startDate = this.getSpecifiedDate(1);
    dateRange.endDate = this.getSpecifiedDate(7);
    this.setData({
      dateRange
    });

    // 查询所有预约记录
    this.getAllReservation();
  },

  onUnload() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },

  async changeBtn(e) {
    const func = e.currentTarget.dataset.func;
    const today = this.getSpecifiedDate(0);
    console.log(today)
    if (func === 'ticket' && (this.data.reservation.length === 0 ? true : !this.data.reservation.some(item => item.date === today))) {
      wx.showToast({
        title: '当前无可用门票',
        icon: 'error',
        duration: 2000
      });
      return ;
    }

    this.setData({
      selected: func
    });
  },

  getSpecifiedDate(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);  // 日期偏移
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // 日期格式化为YYYY-MM-DD
  },

  bindDateChange(e) {
    let dateRange = this.data.dateRange;
    dateRange.selectedDate = e.detail.value;
    this.setData({
      dateRange
    });
  },

  formSubmit(e) {
    const reserveInfo = e.detail.value;
    if (reserveInfo.name.length === 0) {
      wx.showToast({
        title: '未填写姓名',
        icon: 'error',
        duration: 2000
      });
      return ;
    }
    if (reserveInfo.phone.length !== 11) {
      wx.showToast({
        title: '手机号填写有误',
        icon: 'error',
        duration: 2000
      });
      return ;
    }
    if (this.data.reservation.some(item => item.date === reserveInfo.date)) {
      wx.showToast({
        title: '不可重复预约',
        icon: 'error',
        duration: 2000
      });
      return ;
    }

    let reservation = this.data.reservation;
    reservation.push(reserveInfo);
    this.setData({
      reservation
    });
    console.log("预约信息：", reserveInfo);

    // 添加至数据库
    wx.cloud.callFunction({
      name: 'dbController',
      data: {
        set: 'reservation',
        func: 'add',
        name: reserveInfo.name,
        phone: reserveInfo.phone,
        date: reserveInfo.date
      },
      success: (res) => {
        console.log(res);
        wx.showToast({
          title: '预约成功',
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
      reserveInfo: {},
    })
  },

  initHCEService() {
    let byteArray = [83, 53, 50, 53, 48, 51, 51, 48, 49, 144, 0];
    let retBuffer = new ArrayBuffer(byteArray.length);
    let dataView = new DataView(retBuffer);
    const that = this;
    for (var i = 0; i < dataView.byteLength; i++) {
      dataView.setInt8(i, byteArray[i]);
    }
    console.log(retBuffer);
    // 判断设备是否支持 HCE
    wx.getHCEState({
      success (res) {
        console.log(res.errMsg);
        if (res.errCode === 0) {
          console.log("HCE is available.");
          // 初始化 NFC 模块
          wx.startHCE({
            aid_list: ['A0000000031011'],
            success (res) {
              console.log(res.errMsg);
              if (res.errCode === 0) {
                that.onHCEService();
              }
            }
          });
        } else {
          console.log("HCE unavailable.");
        }
      },
      fail (err) {
        console.log(err);
      }
    })
  },

  onHCEService() {
    console.log('111');
    // 监听接收 NFC 设备消息事件
    wx.onHCEMessage((res) => {
      console.log(res);
      if (res.messageType === 1) {
        // if (!this.showNFC) {
        //   this.setData({
        //     showNFC: true
        //   });
        // }
        console.log(res.data);
        let byteArray = this.data.responseData;
        let retBuffer = new ArrayBuffer(byteArray.length);
        let dataView = new DataView(retBuffer);
        for (var i = 0; i < dataView.byteLength; i++) {
          dataView.setInt8(i, byteArray[i]);
        }
        // 发送 NFC 消息
        console.log(retBuffer);
        wx.sendHCEMessage({
          data: retBuffer,
          success (res) {
            console.log("Success to send NFC message:", res);
          },
          fail (err) {
            console.log("Fail to send NFC message:", err);
          }
        })
      }
    })
  },
  
  showNFCDialog() {
    // Initialize HCE
    this.initHCEService();

    this.timer = setInterval(async () => {
      const str = await aesDecrypt();
      let responseData = stringToByteArray(str);
      responseData.push(0x90, 0x00);
      this.setData({
        responseData
      });
    }, 5000);

    this.setData({
      showNFC: true
    })
  },

  showQRCodeDialog() {
    this.drawQRCode();
    this.setData({
      showQRCode: true
    })
  },

  closeDialog() {
    this.setData({
      showNFC: false,
      showQRCode: false
    });
    
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  
  async drawQRCode() {
    // Show QRCode
    const str_key = await aesDecrypt();
    this.setData({
      str_key
    });

    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'qrCanvas',
      text: str_key,
    })
  },

  getAllReservation() {
    const that = this;
    // 数据库查询
    wx.cloud.callFunction({
      name: 'dbController',
      data: {
        set: 'reservation',
        func: 'get'
      },
      success: (res) => {
        console.log(res);
        let reservation = that.data.reservation;
        reservation.push.apply(reservation, res.result.data);
        this.setData({
          reservation
        });
      },
      fail: (err) => {
        console.error(err);
      },
    });
  }
});