// 從'@/layout/index.vue'導入Layout組件，這個組件通常作為頁面的基本布局框架
import Layout from '@/layout/index.vue'

export const animeRoutes = [
  {
    name: 'ANIME',
    path: '/anime',
    component: Layout,
    redirect: '/anime/anime-list',
    meta: {
      title: 'Anime',
    },
    children: [
      // 测试页面下的具体测试项
      {
        name: 'Anime List',
        path: 'anime-list',
        component: () => import('@/views/anime/AnimeList.vue'),
        meta: {
          title: 'Anime List',
        },
      },
    ],
  },
]
export default animeRoutes
