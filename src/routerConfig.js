// 以下文件格式是描述路由的协议格式
// 布局
const HeaderAsideLayout = () =>
  import(/* webpackChunkName: "HeaderAsideLayout" */ './layouts/HeaderAsideLayout');
const EmptyLayout = () =>
  import(/* webpackChunkName: "EmptyLayout" */ './layouts/EmptyLayout');

// 页面
const Apple = () => import(/* webpackChunkName: "Apple" */ './views/Apple');
const Pea = () => import(/* webpackChunkName: "Pea" */ './views/Pea');
const Beef = () => import(/* webpackChunkName: "Beef" */ './views/Beef');

// 404
const NotFound = () =>
  import(/* webpackChunkName: "NotFound" */ './views/NotFound');

const routeConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: Apple,
    name: 'fruit',
    children: [
      {
        path: '/fruit/apple',
        layout: HeaderAsideLayout,
        component: Apple,
        name: 'apple'
      }
    ]
  },
  {
    path: '/vegertable',
    layout: HeaderAsideLayout,
    component: Pea,
    name: 'vegertable',
    children: [
      {
        path: '/vegertable/pea',
        layout: HeaderAsideLayout,
        component: Pea,
        name: 'pea'
      }
    ]
  },
  {
    path: '/meat',
    layout: HeaderAsideLayout,
    component: Beef,
    name: 'meat',
    children: [
      {
        path: '/meat/beef',
        layout: HeaderAsideLayout,
        component: Beef,
        name: 'beef'
      }
    ]
  },
  {
    path: '*',
    layout: EmptyLayout,
    component: NotFound
  }
];

export default routeConfig;
