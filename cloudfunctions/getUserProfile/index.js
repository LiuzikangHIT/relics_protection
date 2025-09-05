// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'relics-env-8g2qmpq8fc63082c' }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}