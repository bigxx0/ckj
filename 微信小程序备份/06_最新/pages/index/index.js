// index.js
// 获取应用实例
import { getAccesstoken, getUserProfile,getQyWxCode } from '../../api/users'
import { getOrdersByStatus } from '../../api/orders'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
/* 
 *                                 _oo8oo_
 *                                o8888888o
 *                                88" . "88
 *                                (| ^_^ |)
 *                                 O\ = /O
 *                             ____/`---'\____                                
 *                           .   ' \\| |// `.                                  
 *                            / \\||| : |||// \
 *                          / _||||| -:- |||||- \
 *                            | | \\\ - /// | |
 *                          | \_| ''\---/'' |_/ |
 *                           \ .-\__ `-` ___/-. /
 *                        ___`. .' /--.--\ `. . __
 *                     ."" '< `.___\_<|>_/___.' >'"".
 *                    | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *                      \ \ `-. \_ __\ /__ _/ .-` / /
 *            ======`-.____`-.___\_____/___.-`____.-'======
 *                               `=---='
 *
 *            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *                    佛祖保佑         永无 BUG
 *            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */



Page({

    data: {
        access_token: '',
        code: "",
        dotInfo: "",
        userInfo: null,
        isShowUserName: false,
        showMap: null
    },

    // 调用企业微信的接口，获得临时登录验证的code，然后将code给到后端，获取到token和showMap(用来管理是否能显示icon图标)的值
    async getCode() {
        const code = await getQyWxCode()
        this.setData({code})
        // http请求，将code给到后端，传进来token
        const result = await getAccesstoken(this.data.code)
        // 将token交给storage中
        console.log(result.data.data.token);
        wx.setStorageSync('assess_key', {
            authorization: result.data.data.token,
            // authorization: "374a7507-830f-4aba-a928-b950bd539fa8",
            showMap: result.data.data.showMap
        });
        this.setData({
            showMap: result.data.data.showMap
        })
        console.log("这是在getcode中的showmap",this.data.showMap);

        // 只有当用户拥有查看工单权限的时候，才进行计算工单右上角的小红点
        if (result.data.data.showMap.order_accept == 1) {
            this.getRedDot()
        }
        

    },

    /* 授权登录，并在授权登录的时候，拿到昵称和头像url，之后调用之前的
    getCode函数和initUserInformation重新刷新页面*/
    async getUserInformation() {
        // 使用封装好的getUserProfile
        const res = await getUserProfile()
        if (res.code == 200) {
            this.getCode()
            this.initUserInformation()
        }
    },
    // 初始化数据，看看storage中是否存在user的信息，没有的话就直接return，不给userInfo赋值
    initUserInformation() {
        const userInfo = wx.getStorageSync('userInfo')
        if (userInfo.nickName == null) { return }
        else { /*pass*/ }
        this.setData({
            userInfo: wx.getStorageSync('userInfo'),
            isShowUserName: true,
            showMap: wx.getStorageSync('assess_key').showMap
        })
        // console.log(this.data.userInfo);

    },
    async onLoad() {
        // if(wx.getStorageSync('assess_key').showMap !== undefined){
        //     this.setData({
        //         showMap: wx.getStorageSync('assess_key').showMap
        //     })
        // }


        // 初始客户信息  /create/create,用在create中的客户信息的默认值
        wx.setStorageSync('customerInfo', {
            contactMan: "",
            customerId: "",
            customerName: "",
            showCustomer: true
        });
    },
    async onShow() {
        // 初始化数据，看看storage中是否存在user的信息，没有的话就直接return，不给userInfo赋值
        if(wx.getStorageSync('userInfo') !== ""){this.getRedDot()}
        
        this.initUserInformation()

    },

    async getRedDot() {
        // http请求工单中，未接受工单的数量，下面这些代码用来实现工单右上角红点效果，开始
        const info = await getOrdersByStatus({ status: 1 })
        let dotInfo = "";
        if (info.data.code !== 200) { return }
        if (info.data.data.length == 0) { dotInfo = null;  }
        else{dotInfo = info.data.data.length; }
        
        wx.setStorageSync('info', {dotInfo:info.data.data.length})
        this.setData({
            dotInfo
        })
        console.log("这里是dotInfo的值", this.data.dotInfo);
        // 结束
    }

})

