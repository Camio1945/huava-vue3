import request from '@/utils/request'

// 获取支付方式
export function getPayWay() {
  return request.get({ url: '/setting.pay.pay_way/getPayWay' })
}

// 设置支付方式
export function setPayWay(params: any) {
  return request.post({ url: '/setting.pay.pay_way/setPayWay', params })
}

// 获取支付方式
export function getPayConfigPage() {
  return request.get({ url: '/setting.pay.pay_config/list' })
}

// 设置支付方式
export function setPayConfig(params: any) {
  return request.post({ url: '/setting.pay.pay_config/setConfig', params })
}

// 设置支付方式
export function getPayConfig(params: any) {
  return request.get({ url: '/setting.pay.pay_config/getConfig', params })
}
