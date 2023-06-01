import {request} from '../utils/http'
import {showToast} from '../api/message'
/**   2.1工单创建接口
 *      请求类型：post
| 参数名称          | 是否必须 | 实例     | 说明     |
| ------------- | ---- | ------ | ------ |z
| authorization | 是    | “xxxx“ | 访问权限认证 |
| customerId    | 是    |        | 客户id   |
| taskTime      | 否    |        | 工单任务时间 |
| content       | 是    |        | 工单内容   |
| detail        | 否    |        | 工单备注   |
*/

const ordersCreate =  (dataParam)  => 
    request({url:'/order/add',data:dataParam,method:'POST'})

/**
 * 2.2 工单列表(接受)获取(已完成)
        请求类型：post
        测试地址：http://182.43.58.52:9001/dispatch/order/getAcceptOrderList
| 参数名称          | 是否必须 | 实例     | 说明                      |
| ------------- | ---- | ------ | ----------------------- |
| authorization | 是    | “xxxx“ | 访问权限认证                  |
| status        | 是    | “0”    | 0：未分配，1：未接受，2：进行中，3：已完成 |

 */
const getOrdersByStatus = (dataParam) => 
    request({url:'/order/getAcceptOrderList',data:dataParam,method:'POST'})

/**
 * 2.3 工单接受(已完成)
    请求类型：put
    测试地址：http://182.43.58.52:9001/dispatch/order/accept/{orderId}/{type}
| 参数名称          | 是否必须 | 实例     | 说明            |
| ------------- | ---- | ------ | ------------- |
| authorization | 是    | “xxxx“ | 访问权限认证        |
| orderId       | 是    |        | 工单id          |
| type          | 是    | 0      | 0:拒绝,1:接受 |
 */
const acceptOrders = (dataParam) => 
    request({url:'/order/accept/'+`${dataParam.orderId}/${dataParam.type}`,method:"PUT"})


/**
 * 2.4 工单列表(分配)获取(已完成)
       请求类型：post
       测试地址：http://182.43.58.52:9001/dispatch/order/getDivideOrderList

| 参数名称 | 是否必须 | 实例 | 说明 |
| ------------- | ---- | ------------ | ---------------------------------------- |
| authorization | 是    | “xxxx“       | 访问权限认证 |
| customerName  | 否    | "阿尔卑斯"       | 查询客户名称(不填查询全部) |
| beginTime     | 否    | "2023-04-20" | 开始时间 |
| endTime       | 否    | "2023-04-24" | 结束时间 |
| status        | 是    | 0            | 0：未分配，1：未接受，2：进行中，3：已完成|
| type          | 是    | 0            | -1:自定义时间区间,0:全部,1:当天,7:一周内,30:一月内,90:三月,365:一年内 |
 */

 const getDivideOrders = async (dataParam) =>{

    //对所得到的数据进行处理，向每一个对象中添加两个字段分别控制【单元格的图标】和【下拉菜单的显示】
    const response = await request({url:'/order/getDivideOrderList',data:dataParam,method:'POST'})
    console.log("this is api/orders,I get the data is ",response);
    const code = response.data.code
    const result = response.data.data
    const message = response.data.message
    // 对登录过期在http.js中进行统一的处理
    if(response.data.code == 401){return {message,code};}
    else if(response.data.code !== 200){
        showToast("请稍后再尝试","error")
        return {message,code}
    }
    else{
    response.data.data.forEach((item) => {  
        item['isShow'] = false
        item['icon_name'] = "arrow"
    })
    }
    return {result,code}
}
 
    

/**
 * 2.5 工单分配(已完成)
       请求类型：put
       测试地址：http://182.43.58.52:9001/dispatch/order/divide/{orderId}/{employeeId}

| 参数名称          | 是否必须 | 实例      | 说明     |
| ------------- | ---- | ------- | ------ |
| authorization | 是    | “xxxx“  | 访问权限认证 |
| orderId       | 是    | 1000001 | 工单id   |
| employeeId    | 是    | 1000001 | 被分配人id |
 */

 const dispatchOrders = (dataParam) => 
    request({url:"/order/divide/"+`${dataParam.orderId}/${dataParam.employeeId}`,method:"PUT"})

/**
 *  2.6 工单详情(暂时无用)
    请求类型：get
    测试地址：http://182.43.58.52:9001/dispatch/order/detail

| 参数名称          | 是否必须 | 实例     | 说明     |
| ------------- | ---- | ------ | ------ |
| authorization | 是    | “xxxx“ | 访问权限认证 |
| orderId       | 是    |        | 工单id   |
 */

const getOrdersDetail = (orderId) => 
    request({url:'/order/detail',data:orderId,method:'GET'})


/**
 * 2.7 工单提交(已完成)
    请求类型：put
    测试地址：http://182.43.58.52:9001/dispatch/order/submit

| 参数名称          | 是否必须 | 实例     | 说明       |
| ------------- | ---- | ------ | -------- |
| authorization | 是    | “xxxx“ | 访问权限认证   |
| orderId       | 是    |        | 工单id     |
| detail        | 否    |        | 工单备注     |
| beginTime     | 是    |        | 开始进行工单时间 |
| endTime       | 否    |        | 结束工单时间   |
 */

const updateOrders = (dataParam) => 
    request({url:'/order/submit',data:dataParam,method:'PUT'})


/**
 *  2.8 工单完成(已完成)
    请求类型：put
    测试地址：http://182.43.58.52:9001/dispatch/order/complete/{orderId}


| 参数名称          | 是否必须 | 实例     | 说明     |
| ------------- | ---- | ------ | ------ |
| authorization | 是    | “xxxx“ | 访问权限认证 |
| orderId       | 是    |        | 工单id   |
 */

const finishOrders = (orderId) => 
    request({url:'/order/complete/'+`${orderId}`,method:"PUT"})
    



/**
    2.9 工单删除(已完成)
    请求类型：Delete
    测试地址：http://182.43.58.52:9001/dispatch/order/remove


| 参数名称           | 是否必须 | 实例     | 说明     |
| -------------- | ---- | ------ | ------ |
| authorization  | 是    | “xxxx“ | 访问权限认证 |
| orderId(请求体参数) | 是    |        | 工单id   |

 */

 const deleOrders = (dataParam) =>
    request({url:'/order/remove',data:dataParam,method:'DELETE'})


 export {ordersCreate,getOrdersByStatus,acceptOrders,getDivideOrders,
    dispatchOrders,getOrdersDetail,updateOrders,finishOrders,deleOrders}