// 在这个js文件中，专门用来创建Store的实例对象
import {observable,action} from 'mobx-miniprogram'

export const store = observable({

    //数据字段

    activeTabBarIndex:0,

    //方法函数字段
    updateActiveTabBarIndex:action(function(index){
        this.activeTabBarIndex = index
    })


})

