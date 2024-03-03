// 從'@/layout/index.vue'導入Layout組件，這個組件通常作為頁面的基本布局框架
import Layout from '@/layout/index.vue'

export const devopsRoutes = [
  {
    name: 'DEVOPS',
    path: '/devops',
    component: Layout,
    redirect: '/devops/roadmap',
    meta: {
      title: 'DevOps',
    },
    children: [
      // 测试页面下的具体测试项
      {
        name: 'Book List',
        path: 'book-list',
        component: () => import('@/views/devops/BookList.vue'),
        meta: {
          title: 'Book List',
        },
      },
    ],
  },
]
export default devopsRoutes
