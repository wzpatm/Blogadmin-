const routes = [
    {
        name: 'blogindex',
        path: '/',
        meta:{
            keepAlive:false
        },
        component: () => import('@/views/BlogIndex/index.vue')
    },
    {
        name: 'aboutme',
        path: '/aboutme',
        component: () => import('@/views/AboutMe/index.vue')
    },
    {
        name: 'timeline',
        path: '/timeline',
        meta:{
            keepAlive:true
        },
        component: () => import('@/views/TimeLine/index.vue')
    },
    {
        name: 'lifestyle',
        path: '/lifestyle',
        component: () => import('@/views/LifeStyle/index.vue')
    },
    {
        name:'message',
        path:'/message',
        meta:{
            keepAlive:true
        },
        component:()=> import("@/views/LeavingMessage/index.vue")
    },
    {
        name:'blogdetail',
        path:'/blogdetail',
        component:()=> import ("@/views/BlogDetail/index.vue"),
        
    }
];
 
export default routes