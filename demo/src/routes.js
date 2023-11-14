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
    ,
    {
        name: 'server',
        path: '/server',
        component: () => import("./demo5/Server.vue")
    },
    {
        name: 'demo6',
        path: '/demo6',
        component: () => import("./demo6/Demo.vue")
    },
    {
        name: 'demo6-1',
        path: '/demo6-1',
        component: () => import("./demo6-1/Demo.vue")
    }
]
