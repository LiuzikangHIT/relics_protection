const cloud = require('wx-server-sdk');
const RPCClient = require('@alicloud/pop-core').RPCClient;
const request = require('request');

cloud.init({ env: 'relics-env-8g2qmpq8fc63082c' }); // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {

  try {
    // 创建Aliyun客户端
    const client = new RPCClient({
      accessKeyId: process.env.ALIYUN_AK_ID,
      accessKeySecret: process.env.ALIYUN_AK_SECRET,
      endpoint: 'https://nls-meta.cn-shanghai.aliyuncs.com',
      apiVersion: '2019-02-28'
    });

    // 获取Token
    const token = await new Promise((resolve, reject) => {
      client.request('CreateToken')
        .then(result => {
          console.log('Token created:', result.Token.Id);
          resolve(result.Token.Id);
        })
        .catch(error => {
          console.error('Failed to create token:', error);
          reject(error);
        });
    });

    // 语音合成
    const audioBuffer = await new Promise((resolve, reject) => {
      const task = {
        appkey: event.appkey,
        token: token,
        text: event.text,
        format: event.format,
        sample_rate: event.sampleRate,
        voice: 'zhigui',
        volume: 60,
        speech_rate: 0,
        pitch_rate: -100
      };
      const bodyContent = JSON.stringify(task);
      console.log('POST request body:', bodyContent);

      const options = {
        url: 'https://nls-gateway-cn-shanghai.aliyuncs.com/stream/v1/tts',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: bodyContent,
        encoding: null
      };

      request(options, (error, response, body) => {
        if (error) {
          console.error('Request error:', error);
          return reject(error);
        }

        const contentType = response.headers['content-type'];
        if (contentType !== 'audio/mpeg') {
          console.error('Invalid response content type:', contentType);
          console.error('Response body:', body.toString());
          return reject(new Error('Invalid response content type'));
        }
        resolve(body);  // 音频Buffer
      });
    });

    // 上传语音文件到云存储
    const uploadResult = await cloud.uploadFile({
      cloudPath: event.audioSaveFile,
      fileContent: audioBuffer,
    });

    return {
      code: 200,
      message: 'success',
      fileID: uploadResult.fileID,
      token: token
    };
  } catch (err) {
    console.error('Error in cloud function:', err.message);
    return {
      code: 500,
      message: err.message || 'error',
      fileID: '',
    };
  }
};