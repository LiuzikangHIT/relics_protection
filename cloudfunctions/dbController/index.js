// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'relics-env-8g2qmpq8fc63082c' }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const wxContext = cloud.getWXContext()

  if (event.set === 'reservation') {
    return await set_reservation(db, event, wxContext.OPENID)
  } else if (event.set === 'feedback') {
    return await set_feedback(db, event, wxContext.OPENID)
  } else {
    return 'Error: undefined set.'
  }
}

async function set_reservation(db, event, openid) {
  const reservation = db.collection('reservation')
  try {
    if (event.func === 'add') {
      return await reservation.add({
        data: {
          _openid: openid,
          name: event.name,
          phone: event.phone,
          date: event.date
        }
      })
    } else if (event.func === 'delete') {
      return await reservation.where({
        _openid: openid,
        date: event.date
      }).remove()
    } else if (event.func === 'get') {
      return await reservation.where({
        _openid: openid
      }).get()
    } else {
      return 'Error: undefined func.'
    }
  } catch(e) {
    console.error(e)
  }
}

async function set_feedback(db, event, openid) {
  const feedback = db.collection('feedback')
  try {
    if (event.func === 'add') {
      return await feedback.add({
        data: {
          _openid: openid,
          phone: event.phone,
          content: event.content
        }
      })
    } else {
      return 'Error: undefined func.'
    }
  } catch(e) {
    console.error(e)
  }
}