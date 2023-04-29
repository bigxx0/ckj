// 在这个js文件中，专门用来创建Store的实例对象
import {observable,action} from 'mobx-miniprogram'

export const store = observable({
    
    //数据字段
    activeTabBarIndex:0,
    dateObj:null,
    test:"我是测试字段",
    
    //方法函数字段
    updateActiveTabBarIndex:action(function(index){
        this.activeTabBarIndex = index
    }),
    commitDateObj:action(function(param){
        
        this.dateObj = param
        console.log("我是commitDateObj",this,this.dateObj);
        console.log("我是store.js文件的commitDateObj，我收到的dateObj的值是：",this.dateObj)
    }),
    updateDateObj:action(function(){
        console.log("我是updateDateObj",this);
        // console.log("我是store.js文件的updateDateObj，我收到的dateObj的值是：",this.dateObj)
        console.log(this.dateObj)
        return this.dateObj
        
    })

    
})

