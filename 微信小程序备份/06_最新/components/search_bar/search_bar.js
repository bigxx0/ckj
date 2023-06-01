// components/search/search.js
const app = getApp()
import {getCustomerByName} from "../../api/customers"
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    /**
     * 组件的初始数据
     */
    data: {
        input_content: '',
        isShow: false
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onInput(event) {
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                this.setData({
                    input_content: event.detail.value,
                  })
                  console.log(this.data.input_content);
                  this.getSearchList()
            },500)
          },
          showCross() {
            this.setData({
              isShow: !this.data.isShow
            })
          },
          onClear() {
            this.setData({
              input_content: '',
              isShow: false
            })
          },
          async getSearchList(){
            const result = await getCustomerByName(this.data.input_content)
            const info = result.data.data
            // console.log("(^~^)(^~^)(^~^)(^~^)(^~^)(^~^)",info);
            // 触发父组件的{catchSearchList}事件，并且传info值给到父组件的{catchSearchList}中
             this.triggerEvent('catchSearchList',{info})
          },
    },
})


