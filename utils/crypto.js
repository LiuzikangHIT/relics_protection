const CryptoJS = require('crypto-js');
const { Get_ESP_Door } = require('../services/IoT.js');

/**
 * AES解密（ECB模式）
 */
export async function aesDecrypt() {
  try {
    // 1. 获取加密数据
    const deviceData = await Get_ESP_Door();
    const text = deviceData.doorPwd;
    
    // 2. 准备密钥
    const key = '45 32 36 34 30 38 39 31 36 39 34 38 30 35 30 30'.replace(/ /g, '');
    
    // 3. 转换数据格式
    const ciphertext = CryptoJS.enc.Hex.parse(text);
    const keyBytes = CryptoJS.enc.Hex.parse(key);
    
    // 4. 执行AES解密
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext },
      keyBytes,
      {
        mode: CryptoJS.mode.ECB,  // ECB 模式
        padding: CryptoJS.pad.NoPadding // 无填充
      }
    );
    
    // 5. 转换为字符串
    let result = decrypted.toString(CryptoJS.enc.Utf8);
    result = result.substring(0, 9); // 截取前9位
    
    console.info('解密结果:', result);
    return result;
  } catch (err) {
    console.error('解密失败:', err);
    throw err;
  }
}