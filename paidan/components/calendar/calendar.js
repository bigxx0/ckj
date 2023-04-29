// components/calendar/calendar.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },    

    //开始使用store全局事件
    behaviors:[storeBindingsBehavior],
    storeBindings:{
            store,
            fields:{
                dateObj:'dateObj',
            },
            actions:{
                commitDateObj:"commitDateObj"
            }
        },
        //结束store

    /**
     * 组件的初始数据
     */
    data: {
        date: '日期区间',
        show: false,
        selectTimeShow:false,
        minDate: new Date(2023, 0, 1).getTime(),
        maxDate: new Date(2023, 12, 31).getTime(),
        css_name:"selectTimeItem"
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //用来选择时间，使得日历显示
        onDisplay() {
            this.setData({
                show: true
            });
        },
        //用来转换date中的日期的函数
        formatDate(date) {
            date = new Date(date);
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        //在选定日期之后按确定调用的函数
        onConfirm(event) {
            //开始：这里是用于接收在选择时间日历表中的时间区间
            const [start, end] = event.detail;
            this.setData({
                date: `${this.formatDate(start)} ~ ${this.formatDate(end)}`,
            })
            //结束：选择结束，将选择完的数据给到data中的date

            /*开始：将选择到的时间区间封装成对象,
              这里的type代表的是用户通过哪种方式进行查找数据
              {
                  -1：代表通过日历进行查找数据,
                  0：代表查找全部数据,
                  1：代表查找今天的数据,
                  7: 代表查找这周内的数据,
                  30：代表查找一个月内的数据
              }
            */
            const dateObj = {
                beginTime: this.formatDate(start),
                endTime: this.formatDate(end),
                type:-1
            }

            //将用户所选择到的时间上传到store里
            this.commitDateObj(dateObj);
            //将wx-if条件改为不显示
            this.setData({
                show: false
            })
            //在这里调用父组件中的getMessageFromServer方法
            this.triggerEvent('getMessageFromServer',{})
            // this.tabChange()
        },
        //当点击“X”按钮的时候，会触发的事件
        onClose() {
            this.setData({
                show: false
            })
        },


        onRight(){
            console.log("asdasd");
            if(this.data.css_name == "selectTimeItem show"){
                this.setData({
                    css_name:"selectTimeItem",
                    selectTimeShow:!this.data.selectTimeShow
                })
                return
            }
            this.setData({
                css_name:"selectTimeItem show",
                selectTimeShow:!this.data.selectTimeShow
            })

        },
        backgroundMenu(){
            console.log("父元素被点击");
            this.setData({
                css_name:"selectTimeItem",
                selectTimeShow:!this.data.selectTimeShow
            })
        },
        commitDateToStore(event){
            // console.log("子元素被点击",event);
            console.log(event.currentTarget.dataset.id);
            this.setData({
                css_name:"selectTimeItem",
                selectTimeShow:!this.data.selectTimeShow
            })
            const dateObj = {
                type:event.currentTarget.dataset.id
            }
            this.commitDateObj(dateObj)
             //在这里调用父组件中的getMessageFromServer方法
             this.triggerEvent('getMessageFromServer',{})
        }


    }
})