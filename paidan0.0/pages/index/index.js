// index.js
// 获取应用实例
const app = getApp()

Page({

    data:{
        access_token:'',
        code:""
    },



    async onLoad(){

       wx.qy.login({
            success:(res)=>{
                this.setData({
                    code:res.code
                })
            }
        })



        const secret = "CcmlfWVlna_houY1IdaSKOWZo0It5_qFRN2DYMB9aec"
        // const secret = "7M_cy09NtTS_WPOXK68Kb4FDByvifCJ0u45fkx7mQuA"
        const corpid = "wwe8350900d1501c10"
        let data = {
            corpid:corpid,
            corpsecret:secret
        }
        wx.request({
          url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
          method:"GET",
          data:data,
          success:(res)=>{
            //   console.log(res)
              this.setData({
                  access_token:res.data.access_token,
              })
              console.log(this.data.access_token)
              console.log(this.data.code)
              let data_getInfo = {
                access_token:this.data.access_token,
                js_code:this.data.code,
                grant_type:"authorization_code"
              }
              wx.request({
                url: 'https://qyapi.weixin.qq.com/cgi-bin/miniprogram/jscode2session',
                method:"GET",
                data:data_getInfo,
                success:(res)=>{
                    // console.log(res)
                }
              })


          }
        })


    }
})

