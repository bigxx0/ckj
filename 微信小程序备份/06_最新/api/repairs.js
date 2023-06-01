import { request } from '../utils/http'

/**
 *  5.1 维修单列表获取(已完成)
请求类型：Post
测试地址：http://182.43.58.52:9001/dispatch/repair/getRepairList
参数列表

| 参数名称          | 是否必须 | 实例                  | 说明                |
| ------------- | ---- | ------------------- | ----------------- |
| authorization | 是    | “xxxx“     | 访问权限认证            |
| customerName  | 否    | "马达"     |  客户名称(搜索用)         |
| status        | 是    | 0          | 维修单状态,0:未送回,1:已送回 |
| maxTime       | 否    | 2023-05-26 | 时间区间最大值           |
| minTime       | 否    | 2023-05-26 | 时间区间最小值           |
 * 
 */

const getRepairList = (dataParam) => request({ url: '/repair/getRepairList', data: dataParam, method: "POST" })



/**
 *  5.2 维修单创建(已完成)
请求类型：Post
测试地址：http://182.43.58.52:9001/dispatch/repair/add
参数列表
| 参数名称          | 是否必须 | 实例                   | 说明        |
| ------------- | ---- | -------------------- | --------- |
| authorization | 是    | “xxxx“               | 访问权限认证    |
| customerId    | 是    | 1000001              | 维修单归属客户id |
| equipment     | 否    | "联想小新16pro plus max" | 设备信息      |
| damage        | 否    | "硬盘损坏"               | 故障情况      |
| task          | 否    | "更换硬盘"               | 处理事项      |
| detail        | 否    | "xxx"                | 备注        |
| takeTime      | 否    | 2023-05-26 15:35:37  | 带走时间      |
| backTime      | 否    | 2023-05-26 15:35:37  | 送回时间      |
 */
const addRepairList = (dataParam) => request({ url: '/repair/add', data: dataParam, method: "POST" })



/**
 * 5.3 维修单完成(已完成)
请求类型：Put
测试地址：http://182.43.58.52:9001/dispatch/repair/complete
参数列表
| 参数名称          | 是否必须 | 实例      | 说明     |
| ------------- | ---- | ------- | ------ |
| authorization | 是    | “xxxx“  | 访问权限认证 |
| repairId      | 是    | 1000001 | 维修单id  |
 */


const finishRepair = (repairId) => request({ url: '/repair/complete', data: { repairId }, method: "PUT" })



/**
 * 5.4 维修单修改(已完成)
请求类型：Put
测试地址：http://182.43.58.52:9001/dispatch/repair/update
参数列表
| 参数名称          | 是否必须 | 实例                   | 说明        |
| ------------- | ---- | -------------------- | --------- |
| authorization | 是    | “xxxx“               | 访问权限认证    |
| repairId      | 是    | 1000001              | 维修单id     |
| customerId    | 是    | 1000005              | 维修单归属客户id |
| equipment     | 否    | "联想小新16pro plus max" | 设备信息      |
| damage        | 否    | "硬盘损坏"               | 故障情况      |
| task          | 否    | "修理硬盘"               | 处理事项      |
| detail        | 否    | "xxx"                | 备注        |
| backTime      | 否    | 2023-05-26 15:35:37  | 送回时间      |
 */


const updateRepairList = (dataParam) => request({ url: '/repair/update', data: dataParam, method: "PUT" })




/**
 * 5.5 维修单删除(已完成)
请求类型：Delete
测试地址：http://182.43.58.52:9001/dispatch/repair/remove
参数列表

| 参数名称          | 是否必须 | 实例      | 说明     |
| ------------- | ---- | ------- | ------ |
| authorization | 是    | “xxxx“  | 访问权限认证 |
| repairId      | 是    | 1000001 | 维修单id  |
 */

const deleRepairList = (repairId) => request({ url: '/repair/remove', data: { repairId }, method: "DELETE" })


export { getRepairList, addRepairList, finishRepair, updateRepairList, deleRepairList }