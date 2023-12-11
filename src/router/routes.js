
const routes = [
  {
    path: '/',
    component: () => import("@/layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Collection1',
        component: () => import('@/pages/CollectionPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'collection',
        name: 'Collection',
        component: () => import('@/pages/CollectionPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/pages/SearchPage.vue'),
        meta: { requiresAuth: true },
        props: (route) => ({ query: route.query.q })
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
