/*
 * @Author: wahrheit
 * @Date: 2021-06-24 17:53:16
 * @LastEditTime: 2021-06-24 17:55:21
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\utils\index.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */
import store from './store'
import numchinese from './numchinese'
let timer = store.$CacheGet('Timer')

// 音频播放控件
const player = wx.createInnerAudioContext()

// 微信分享 回调函数均已废弃
const ShareEvent = (option, obj) => {
  let shareObj = {
    title: obj.title,
    path: obj.path,
    imageUrl: obj.imageUrl
  }

    // 提供虚假完成回调
  if (obj.fakecomplete && typeof obj.fakecomplete === 'function') {
    obj.fakecomplete()
  }

  if (option.from === 'button') {
        // 来自页面内转发按钮
    if (obj.btnover && typeof obj.btnover === 'function') {
      obj.btnover()
    }
  }
  return shareObj
}

const PlayAudio = url => {
  if (store.$Get('OpenVoice') === false) {
    return
  }
  player.stop()
  player.src = url
  player.play()
}

const PauseAudio = () => {
  player.pause()
}

const StopAudio = () => {
  player.stop()
}

const StopCountDown = (loopInterval = 1) => {
  loopInterval = store.$Get('PowerSpan') || loopInterval
  clearInterval(timer)
  timer = null
  store.$CacheRemove('Timer')
  store.$CacheSet('punchTimeM', loopInterval - 1)
  store.$CacheSet('punchTimeS', 59)
}

const TimeSpan = (before, after) => {
  let dateBegin = new Date(before)
  let dateEnd = new Date(after)
  let dateDiff = dateEnd.getTime() - dateBegin.getTime()
  let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))// 计算出相差天数
  let leave1 = dateDiff % (24 * 3600 * 1000)    // 计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000))// 计算出小时数
    // 计算相差分钟数
  let leave2 = leave1 % (3600 * 1000)    // 计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000))// 计算相差分钟数
    // 计算相差秒数
  let leave3 = leave2 % (60 * 1000)      // 计算分钟数后剩余的毫秒数
  let seconds = Math.round(leave3 / 1000)
  return {
    days: dayDiff,
    hours,
    minutes,
    seconds
  }
}

const GetRankShareObj = () => {
  let shareList = store.$CacheGet('ShareList')
  let randomIndex = Math.floor(Math.random() * 5)
  return shareList[randomIndex]
}

export default {
  ShareEvent,
  Player: {
    play: PlayAudio,
    pause: PauseAudio,
    stop: StopAudio
  },
  Store: store,
  TimeSpan,
  GetRankShareObj,
  StopCountDown,
  ...numchinese
}
