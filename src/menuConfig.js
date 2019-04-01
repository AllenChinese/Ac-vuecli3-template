/**
 * 菜单配置 包含 头部菜单和侧边栏菜单两种
 */
const headerMenuConfig = [

]

const asideMenuConfig = [
  {
    path: '/fruit',
    name: '水果',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/apple',
        name: '苹果'
      }
    ]
  },
  {
    path: '/vegertable',
    name: '蔬菜',
    icon: 'el-icon-date',
    children: [
      {
        path: '/Pea',
        name: '豌豆'
      }
    ]
  },
  {
    path: '/meat',
    name: '肉类',
    icon: 'el-icon-picture-outline',
    children: [
      {
        path: '/beef',
        name: '牛肉'
      }
    ]
  }
]

export {
  headerMenuConfig,
  asideMenuConfig
}