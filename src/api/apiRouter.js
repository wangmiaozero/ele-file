/*
 * @Description:
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2019-12-09 17:22:12
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-11 11:16:11
 */
import axios from './index'
// eslint-disable-next-line camelcase
// 发送验证码
export const sendCode = (data) => { return axios.post('/yy/yylogin/send_sms',data) }
// eslint-disable-next-line no-sequences
// 用户直接手机登录 因为忘记密码和这个接口是同一个
export const usersignup = (data) => { return axios.post(`/yy/yylogin/user_login_mobile`,data) }
// 用户账号密码登录
export const usersignin = (data) => { return axios.post(`/yy/yylogin/user_login_password`,data) }
// 用户退出登录
export const userOut= (data) => { return axios.get(`/yy/yylogin/user_out`) }
// 获得识别码
export const getBindingCode = (data) => { return axios.post(`/yy/yybinding/get_binding_code`) }
// 获取所有绑定店铺
export const getBindingShop = (data) => { return axios.post(`/yy/yybinding/get_binding_shop`,data)}
// 添加新的绑定
export const addBindingShop = (data) => { return axios.post(`/yy/yybinding/add_binding_shop`,data) }
/* 第一步 */
// 编辑店铺
export const editShop = (data) => {return axios.post(`/yy/yybinding/edit_binding_shop`,data)}
// 创建任务
export const addTask = (data) => {return axios.post(`/yy/yytask/add_task`,data)}
// 修改关键词方案/任务类型/平台
export const updateDefault = (data) => {return axios.post(`/yy/yytask/update_default`,data)}
// 添加商品
export const add_commodity = (data) => {return axios.post(`/yy/yytask/add_commodity`,data)}
// 获得指定审核过的店铺
export const appointShop = (data) => {return axios.post(`/yy/yybinding/appoint_shop`,data)}
// 查询商家端订单
export const task_info = (data) => {return axios.post(`/yy/yytask/task_info`,data)}
// 删除商品信息
export const del_commondity = (data) => {return axios.post(`/yy/yytask/del_commondity`,data)}
// 修改商品信息
export const editCommondity = (data) => {return axios.post(`/yy/yytask/set_commondity`,data)}
// 查询所有的商品
export const getAllCommondity = (data) => {return axios.post(`/yy/yytask/get_all_commondity`,data)}
// 添加关键词
export const add_key = (data) => {return axios.post(`/yy/yytask/add_key`,data)}
// 删除关键词
export const del_key = (data) => {return axios.post(`/yy/yytask/del_key`,data)}
// 添加淘口令
export const add_tkl = (data) => {return axios.post(`/yy/yytask/add_tkl`,data)}
// 删除淘口令
export const del_tkl = (data) => {return axios.post(`/yy/yytask/del_tkl`,data)}
// 添加手淘关键词
export const add_st = (data) => {return axios.post(`/yy/yytask/add_st`,data)}
// 删除手淘关键词
export const del_st = (data) => {return axios.post(`/yy/yytask/del_st`,data)}
// 更新拍立淘
export const update_pa = (data) => {return axios.post(`/yy/yytask/update_pa`,data)}


/*  第二步 */
// 设置任务时间
export const setTaskTime = (data) => {return axios.post(`/yy/yytask/set_task_time`,data)}
// 增值服务-快速完成任务和安全优化和下单提示
export const setSafe = (data) => {return axios.post(`/yy/yytask/set_safe`,data)}
// 获取金钱
export const totalCost = (data) => {return axios.post(`/yy/yytask/total_cost`,data)}
// 增值服务-添加好评
export const goodCvpComment = (data) => {return axios.post(`/yy/yytask/good_cvp_comment`,data)}
// 增值服务-删除买手评价关键词
export const delComment = (data) => {return axios.post(`/yy/yytask/del_comment`,data)}
// 删除某一个图片
export const vpCommentId = (data) => {return axios.post(`/yy/yytask/del_vp`,data)}
// 增值服务-删除买手图文好评
export const delCvpComment = (data) => {return axios.post(`/yy/yytask/del_cvp_comment`,data)}

/* 第三步 */
// 付款
export const pay_order = (data) => {return axios.post(`/yy/yytask/pay_order`,data)}

/* 个人中心 */

// 个人中心基本信息
export const personal_center_info = (data) => {return axios.post(`/yy/yysellercenter/personal_center_info`,data)}
// 获取所有银行名
export const get_all_bank_name = (data) => {return axios.post(`/yy/yybuyercenter/get_all_bank_name`,data)}
//获取支行信息
export const get_branch_bank = (data) => {return axios.post(`/yy/yybuyercenter/get_branch_bank`,data)}
// 获取地区信息
export const get_area_name = (data) => {return axios.post(`/yy/yybuyercenter/get_area_name`,data)}
// 绑定银行卡
export const bind_bank_card = (data) => {return axios.post(`/yy/yypersonalcenter/bind_bank_card`,data)}
//待处理任务列表页
export const task_be_dealing = (data) => {return axios.post(`/yy/yysellercenter/task_be_dealing`,data)}
// 确认发货
export const confirm_deliver = (data) => {return axios.post(`/yy/yysellercenter/confirm_deliver`,data)}
// 驳回订单
export const seller_reject_pay = (data) => {return axios.post(`/yy/yysellercenter/seller_reject_pay`,data)}
// 驳回好评
export const seller_reject_good_url = (data) => {return axios.post(`/yy/yysellercenter/seller_reject_good_url`,data)}
// 驳回追评
export const seller_reject_add_url = (data) => {return axios.post(`/yy/yysellercenter/seller_reject_add_url`,data)}
// 确认返款
export const confirm_back_money = (data) => {return axios.post(`/yy/yysellercenter/confirm_back_money`,data)}
// 任务列表
export const task_manage_list = (data) => {return axios.post(`/yy/yysellercenter/task_manage_list`,data)}

// 删除未支付任务
export const del_unpay_task = (data) => {return axios.post(`/yy/yysellercenter/del_unpay_task`,data)}

// 撤单
export const cancellations = (data) => {return axios.post(`/yy/yysellercenter/cancellations`,data)}

/* 账户充值 */
// 符点充值
export const add_point = (data) => {return axios.post(`/yy/yysellercapital/add_point`,data)}
// 延长技术服务会员
export const add_vip_time = (data) => {return axios.post(`/yy/yysellercapital/add_vip_time`,data)}

/* 收支明细 */
// 获得押金记录
export const get_deposit_info = (data) => {return axios.post(`/yy/yysellercapital/get_deposit_info`,data)}
// 获得符点记录
export const get_yy_deposit_info = (data) => {return axios.post(`/yy/yysellercapital/get_yy_deposit_info`,data)}
// 获得订购技术服务记录
export const get_vip_info = (data) => {return axios.post(`/yy/yysellercapital/get_vip_info`,data)}

/* 连连支付 */
export const submit_lianlian = (data) => {return axios.post(`/yy/yysellercapital/submit_lianlian`,data)}

// 任务详情
export const task_detail = (data) => {return axios.post(`/yy/yysellercenter/task_detail`,data)}