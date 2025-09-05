/** 获取首页数据 */
export async function fetchHome() {
  const { delay } = require('../utils/delay.js');
  const { getHomeSwiperImg } = require('../model/swiper');
  await delay();
  return {
    swiperImg: getHomeSwiperImg(),
  };
}
