import request from '@/utils/request'

// 配置
export function getConfig() {
  // return request.get({ url: '/config/getConfig' })
  return new Promise((resolve) => {
    resolve({
      oss_domain: 'https://php.likeadmin.cn/',
      web_name: '后台管理',
      web_favicon: 'https://php.likeadmin.cn/resource/image/adminapi/default/web_favicon.ico',
      web_logo: 'https://php.likeadmin.cn/resource/image/adminapi/default/web_logo.jpg',
      login_image: 'https://php.likeadmin.cn/resource/image/adminapi/default/login_image.png',
      copyright_config: [
        {
          key: '粤ICP备19081985号',
          value: 'https://beian.miit.gov.cn'
        }
      ]
    })
  })
}

// 工作台主页
export function getWorkbench() {
  return request.get({ url: '/workbench/index' })
}

//字典数据
export function getDictData(params: any) {
  return request.get({ url: '/config/dict', params })
}
