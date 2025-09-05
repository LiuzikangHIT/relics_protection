let doorPwd = '';

async function getAccessToken() {
  const authData = {
    auth: {
      identity: { 
        methods: [
          "password"
        ],
        password: {
          user: {
            domain: {
              name: "luo_1an",
            },
            name: "GYM", // IAM username
            password: "gym164900", // IAM password
          },
        },
      },
      "scope": {
        "project": {
            "name": "cn-east-3"
        }
      }
    }
  };

  const payload = JSON.stringify(authData);

  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://iam.cn-east-3.myhuaweicloud.com/v3/auth/tokens',
      data: payload,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      enableCache: true,
      success (res) {
        const token = res.header['X-Subject-Token'];
        // console.log(res);
        resolve(token); // return token on success
      },
      fail (err) {
        console.error('Error:' + JSON.stringify(err));
        reject(err); // throw error on failure
      }
    })
  });
}

export async function Get_ESP_Door() {
  const x_token = await getAccessToken();
  let flowrate = [];

  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://b9a788da1c.st1.iotda-app.cn-east-3.myhuaweicloud.com:443/v5/iot/ae3de97f41b64864b44b73a16ca2017c/devices/67b6f75a0c504e29c72dab0e_ESP32/shadow',
      header: {
        'X-Auth-Token': x_token
      },
      method: 'GET',
      enableCache: true,
      success (res) {
        if (res.statusCode === 200) {
          let tmp_data = res.data;
          console.log(tmp_data.shadow);
          if (tmp_data.shadow[9].reported.properties != null && !doorPwd) {
            doorPwd = tmp_data.shadow[9].reported.properties['password'];
          }
          // if (tmp_data.shadow[12].reported.properties != null && !doorPwd) {
          //   const pwdList = tmp_data.shadow[12].reported.properties['door'].split('*');
          //   doorPwd = pwdList[Math.floor(Math.random() * pwdList.length)];
          // }
          const result = {
            'doorPwd': doorPwd,
          };
          console.log(result);
          resolve(result);
        }
      },
      fail (err) {
        console.error('error:' + JSON.stringify(err));
      }
    })
  });
}

export async function Get_ESP_IoTEnv() {
  const x_token = await getAccessToken();
  let flowrate = [];

  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://b9a788da1c.st1.iotda-app.cn-east-3.myhuaweicloud.com:443/v5/iot/ae3de97f41b64864b44b73a16ca2017c/devices/67b6f75a0c504e29c72dab0e_ESP32/shadow',
      header: {
        'X-Auth-Token': x_token
      },
      method: 'GET',
      enableCache: true,
      success (res) {
        if (res.statusCode === 200) {
          let tmp_data = res.data;
          // console.log(tmp_data.shadow);
          if (tmp_data.shadow[6].reported.properties != null) {
            const iotenv = tmp_data.shadow[6].reported.properties['message'].split('#');
            flowrate = iotenv.slice(-11, -2);
          }
          const result = {
            'flowrate': flowrate,
          };
          console.log(result);
          resolve(result);
        }
      },
      fail (err) {
        console.error('error:' + JSON.stringify(err));
      }
    })
  });
}