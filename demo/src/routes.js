export default [
    {
        name: 'Counter Base',
        path: '/counter-0',
        component: () => import("./demo0/DemoCounter.vue")
    },
    {
        name: 'Counter Base1',
        path: '/counter-1',
        component: () => import("./demo1/DemoCounter.vue")
    },
    {
        name: 'Counter Base2',
        path: '/counter-2',
        component: () => import("./demo4/DemoCounter.vue")
    }
]
