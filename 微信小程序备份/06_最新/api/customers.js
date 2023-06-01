import {request} from '../utils/http'


/**
   3.1 客户创建(已完成)
       请求类型：post
       测试地址：http://182.43.58.52:9001/dispatch/customer/add

| 参数名称          | 是否必须 | 实例   | 说明     |
| ------------- | ---- | ---- | ------ |
| authorization | 是    |      | 访问权限认证 |
| customerName  | 是    |      | 客户名称   |
| address       | 是    |      | 地址     |
| department    | 否    |      | 部门     |
| contactMan    | 否    |      | 联系人    |
| phone         | 否    |      | 联系电话   | */

const createCustomer = (dataParam) => 
    request({url:'/customer/add',data:dataParam,method:'POST'})

/**
    3.2 
    客户列表获取(已完成)
    请求类型：post
    测试地址：http://182.43.58.52:9001/dispatch/customer/getCustomerList

| 参数名称          | 是否必须 | 实例     | 说明        |
| ------------- | ---- | ------ | --------- |
| authorization | 是    | “xxxx“ | 访问权限认证    |
| customerName  | 否    |        | 客户名称(搜索用) |
 */

 const getCustomerByName = (customerName) => 
    request({url:'/customer/getCustomerList',data:{customerName:customerName},method:"POST"})

/**
3.3 客户修改(已完成)
    请求类型：put
    测试地址：http://182.43.58.52:9001/dispatch/customer/update

| 参数名称          | 是否必须 | 实例     | 说明     |
| ------------- | ---- | ------ | ------ |
| authorization | 是    | “xxxx“ | 访问权限认证 |
| customerId    | 是    |        | 客户id   |
| customerName  | 否    |        | 客户名称   |
| department    | 否    |        | 部门     |
| address       | 否    |        | 地址     |
| contactMan    | 否    |        | 联系人    |
| phone         | 否    |        | 电话     |
 */

 const updateCustomer = (dataParam) => 
    request({url:'/customer/update',data:dataParam,method:'PUT'})


 /**
    3.4 客户删除
        请求类型：delete
        测试地址：http://182.43.58.52:9001/dispatch/customer/remove/{customerId}

| 参数名称          | 是否必须 | 实例     | 说明     |
| ------------- | ---- | ------ | ------ |
| authorization | 是    | “xxxx“ | 访问权限认证 |
| customerId    | 是    |        | 客户id   |
  */

  const deleteCustomer = (customerId) => 
    request({url:'/customer/remove?customerId='+customerId,method:'DELETE'})


export {createCustomer,getCustomerByName,updateCustomer,deleteCustomer}