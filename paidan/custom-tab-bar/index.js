// custom-tab-bar/index.js
import {createStoreBindings, storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

Component({
    options:{
        styleIsolation:'shared'
    },


    //开始使用store全局事件
    behaviors:[storeBindingsBehavior],
    storeBindings:{
            store,
            fields:{
                active:'activeTabBarIndex',
            },
            actions:{
                updateActive:"updateActiveTabBarIndex"
            }
        },
        //结束store

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [{
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/static/img/icon/home.png",
            "selectedIconPath": "/static/img/icon/home_active.png"
        }
        ,{
          "pagePath": "/pages/my/my",
          "text": "个人",
          "iconPath": "/static/img/icon/my.png",
          "selectedIconPath": "/static/img/icon/my_active.png"
        }
      
      ]
    },


    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            // this.setData({ active: event.detail });
            this.updateActive(event.detail)
            wx.switchTab({
              url: this.data.list[event.detail].pagePath,
            })
          },
    }
})
