import request from '@/utils/request'

// Login Controller

/**
   * 微信用户登录
   * @param {Object} params
   * @param {string} params.loginCode 微信code
   * @param {string=} params.wxIcon 微信头像
   * @param {string=} params.wxNickName 微信昵称
   * @returns {Promise<unknown>|void}
   */
export function wxLogin(params) {
  return request({
    url: '/wx/wxLogin',
    method: 'get',
    params
  })
}
/**
   * 上报微信账号绑定的手机号
   * @param {Object} params
   * @param {string} params.openId 微信openId
   * @param {string} params.phoneCode 手机授权code
   * @returns {Promise<unknown>|void}
   */
export function submitPhoneCode(params) {
  return request({
    url: '/wx/submitPhoneCode',
    method: 'get',
    params
  })
}
/**
   * 根据openid删微信用户信息
   * @param {Object} params
   * @param {string} params.openId 微信openId
   * @returns {Promise<unknown>|void}
   */
export function deleteWxInfoByOpenId(params) {
  return request({
    url: '/wx/deleteWxInfoByOpenId',
    method: 'get',
    params
  })
}
/**
   * 公司登陆
   * @param {Object} params
   * @param {string} params.account 公司账号
   * @param {string} params.password 公司密码
   * @returns {Promise<unknown>|void}
   */
export function cwLogin(params) {
  return request({
    url: '/wx/cwLogin',
    method: 'post',
    data: params
  })
}

/**
   * test
   * @param {Object} params
   * @param {string} params.account 公司账号
   * @param {string} params.password 公司密码
   * @returns {Promise<unknown>|void}
   */
export function testreq(params) {
  return request({
    url: '/test/vacationTest',
    method: 'get',
    params
  })
  // return request('/test/vacationTest?startDate=2012-04-25&registerDate=2020-03-25', 'get', params)
}

// Ums Employee Controller

/**
   * {
   *   "account": "string",
   *   "companyId": 0,
   *   "companyName": "string",
   *   "createTime": 0,
   *   "deleteFlag": 0,
   *   "departmentId": 0,
   *   "idStatus": true,
   *   "password": "string",
   *   "phones": [
   *   "string"
   * ],
   *   "registerTime": 0,
   *   "selfStaff": 0,
   *   "startWorkTime": 0,
   *   "superman": 0,
   *   "updateTime": 0,
   *   "username": "string",
   *   "workId": 0,
   *   "wxUsers": [
   *   {
   *     "createTime": 0,
   *     "icon": "string",
   *     "loginTime": 0,
   *     "nickname": "string",
   *     "note": "string",
   *     "openId": "string",
   *     "phone": "string",
   *     "updateTime": 0
   *   }
   * ]
   * }
   * 添加员工
   * @param {Object} params
   * @param {string} params.account 公司账号
   * @param {string} params.password 公司密码
   * @returns {Promise<unknown>|void}
   */
export function insert(params) {
  return request({
    url: '/staff/insert',
    method: 'POST',
    data: params
  })
}
/**
   * 查询所有用户
   * @returns {Promise<unknown>|void}
   */
export function selectAll() {
  return request({
    url: '/staff/selectAll',
    method: 'get'
  })
}
/**
   * {
   *     "account": "string",
   *     "name": "string",
   *     "password": "string",
   *     "phones": [
   *         "string"
   *     ],
   *     "registerDate": "string",
   *     "staff": 0,
   *     "startDate": "string",
   *     "superman": 0,
   *     "workId": 0
   * }
   * 临时手动添加员工信息
   * @param {Object} params
   * @returns {Promise<unknown>|void}
   */
export function tempInsert(params) {
  return request({
    url: '/staff/tempInsert',
    method: 'post',
    data: params
  })
}
/**
   * {
   *   "account": "string",
   *   "companyId": 0,
   *   "companyName": "string",
   *   "createTime": 0,
   *   "deleteFlag": 0,
   *   "idStatus": true,
   *   "loginTime": 0,
   *   "password": "string",
   *   "phones": [
   *     "string"
   *   ],
   *   "selfStaff": 0,
   *   "startWorkTime": "string",
   *   "superman": 0,
   *   "updateTime": 0,
   *   "username": "string",
   *   "workId": 0,
   *   "wxUsers": [
   *     {
   *       "createTime": 0,
   *       "icon": "string",
   *       "loginTime": 0,
   *       "nickname": "string",
   *       "note": "string",
   *       "openId": "string",
   *       "phone": "string",
   *       "updateTime": 0
   *     }
   *   ]
   * }
   * 修改员工信息
   * @param {Object} params
   * @returns {Promise<unknown>|void}
   */
export function update(params) {
  return request({
    url: '/staff/update',
    method: 'post',
    data: params
  })
}

// Vacation Controller

/**
   * vacationInfo
   * {
   *     "approverName": "string",
   *     "companyId": 0,
   *     "recordId": 0,
   *     "vacationDate": 0,
   *     "vacationReason": "string",
   *     "vacationType": 0,
   *     "vacationYear": 0,
   *     "workId": 0
   * }
   * 添加员工休假记录
   * @param {Object} params
   * @returns {Promise<unknown>|void}
   */
export function insertVacationRecord(params) {
  return request({
    url: '/wx/vacation/insertVacationRecord',
    method: 'post',
    data: params
  })
}
/**
   * {
   *     "condition": "string",
   *     "pageNo": 0,
   *     "pageSize": 0,
   *     "workId": 0,
   *     "year": 0
   * }
   * 查询员工休假记录,条件可选（日期，姓名）
   * @param {Object} params
   * @param {Number} params.recordId 记录id
   * @returns {Promise<unknown>|void}
   */
export function listVacationRecord(params) {
  return request({
    url: '/wx/vacation/listVacationRecord',
    method: 'post',
    data: params
  })
}
/**
   * 删除员工休假记录
   * @param {Object} params
   * @param {Number} params.recordId 员工休假记录id
   * @returns {Promise<unknown>|void}
   */
export function removeVacationRecord(params) {
  return request({
    url: '/wx/vacation/removeVacationRecord',
    method: 'get',
    params
  })
}
/**
   * 查询当前员工的可休年假天数
   * @param {Object} params
   * @param {Number} params.workId 员工id
   * @returns {Promise<unknown>|void}
   */
export function selectByWorkId(params) {
  return request({
    url: '/wx/vacation/selectByWorkId',
    method: 'get',
    params
  })
}
/**
   * 按部门统计休假情况.年份默认值:当年
   * @param {Object} params
   * @param {Number} params.departmentId 部门id
   * @param {Number=} params.year 年份
   * @returns {Promise<unknown>|void}
   */
export function statisticVacationBySuperman(params) {
  return request({
    url: '/wx/vacation/statisticVacationBySuperman',
    method: 'get',
    params
  })
}

// Test Controller

/**
   * mpTest
   * @returns {Promise<unknown>|void}
   */
export function mpTest() {
  return request({
    url: '/test/mpTest',
    method: 'get'
  })
}
/**
   * myMethodTest
   * @returns {Promise<unknown>|void}
   */
export function myMethodTest() {
  return request({
    url: '/test/myMethodTest',
    method: 'get'
  })
}
/**
   * 查询所有用户
   * @returns {Promise<unknown>|void}
   */
export function nacosConfig() {
  return request({
    url: '/test/nacosConfig',
    method: 'get'
  })
}
/**
   * testVXUser
   * @returns {Promise<unknown>|void}
   */
export function testVXUser() {
  return request({
    url: '/test/testVXUser',
    method: 'get'
  })
}
/**
   * 测试计算功能
   * @param {Object} params
   * @param {Number} params.count 数量
   * @param {Number} params.currDate 当前日期
   * @param {Number} params.registerDate 注册日期
   * @param {Number} params.startDate 开始日期
   * @returns {Promise<unknown>|void}
   */
export function vacationTest(params) {
  return request({
    url: '/test/vacationTest',
    method: 'get',
    params
  })
}
