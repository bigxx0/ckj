// pages/my/my.js
import {createStoreBindings,mobxMiniProgramBindings,toJS} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({



    /**
     * 页面的初始数据
     */
    data: {

        dataList: null,
        active: 0,
    },
    //在点击不同的tab键的时候，会触发不同的事件【待分配】、【未完成】、【已完成】
    tabChange(event) {
       //点击不同tab栏的时候，会进行变更active的值
        this.setData({
            active: event.detail.name
        })
        /*从store.js中拿到最新的dateObj，若用户没有选择时间，仅仅点击tab栏，
        则不进行请求数据,即不进行调用getMessageFromServer，直接return
        */
        this.bindings.dateObj = this.updateDateObj() 
        if(this.bindings.dateObj == null){return}
        this.getMessageFromServer()
    },
    getMessageFromServer()
    {
        //从store.js中拿到最新的dateObj
        this.bindings.dateObj = {...this.updateDateObj()}
              /*进行对tab进行选择，因为后端接口的编写，
            {
                待分配：0，
                未完成：2，
                已完成：3
            }
          并将所处理过的active值添加到dateObj身上，作为post请求参数交给后端  */
          switch (this.data.active) {
            case 0:
                this.setData({
                    active: 0
                })
                this.bindings.dateObj['status'] = this.data.active
                break;
            case 1:
                this.setData({
                    active: 1
                })
                this.bindings.dateObj['status'] = this.data.active + 1
                break;
            case 2:
                this.setData({
                    active: 2
                })
                this.bindings.dateObj['status'] = this.data.active + 1
                break;
        }

        /*进行request请求，用success回调函数获得值,
          其中，dataParam作为post请求的参数*/
          let dataParam = this.bindings.dateObj
          console.log("我是getMessageFromServer中的函数，我在输出dataParam",dataParam);
        // success(result)=>{}
          let result = [
              {
                  beginTime: null,
                  content: "修理打印机",
                  createBy: "李四",
                  createTime: "17:07:38",
                  customerId: 1000001,
                  customerName: "阿尔卑斯",
                  detail: null,
                  endTime: null,
                  finishTime: null,
                  imgListStr: null,
                  leader: "王五",
                  orderId: 1000001,
                  status: 0,
                  typeList: "1,2,3,4",
                  worker: "张三"
              },
              {
                  beginTime: null,
                  content: "修理电脑",
                  createBy: "李四",
                  createTime: "11:30:27",
                  customerId: 1000002,
                  customerName: "大昌超市",
                  detail: null,
                  endTime: null,
                  finishTime: null,
                  imgListStr: null,
                  leader: "王五",
                  orderId: 1000002,
                  status: 0,
                  typeList: "1,4",
                  worker: "张雪峰"
              }
          ]
          //对所得到的数据进行处理，向每一个对象中添加两个字段分别控制【单元格的图标】和【下拉菜单的显示】
          result.forEach((item) => {
              item['isShow'] = false
              item['icon_name'] = "arrow"
          })
          //将数据给到dataList
          this.setData({
              dataList: result
          })
    },

    //每一个单元格点击所触发的函数事件，改变icon的图标样式，和将折叠面板显示出来
    collapseItem(param) {
        const index = param.currentTarget.dataset.src
        this.data.dataList[index].isShow = !this.data.dataList[index].isShow
        this.data.dataList[index].icon_name = this.data.dataList[index].isShow ? "arrow-down" : "arrow"
        this.setData({
            dataList: this.data.dataList
        })
    },
    onLoad() {
        //开始使用全局事件,并定义为bindings
        const bindings = createStoreBindings(this, {
          store,
          fields: ['dateObj','test'],
          actions: {
            updateDateObj: 'updateDateObj'
          }
        });
        this.bindings = bindings;
      },


      
})