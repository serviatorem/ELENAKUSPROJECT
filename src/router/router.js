import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/page/HomePage.vue";
import CategoryPage from "../components/page/CategoryPage.vue";
import TheRegistration from "../components/page/TheRegistration.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
        meta: {
            layout: 'LayoutDefault',
        }
    },
    {
        path: "/category",
        name: "category",
        component: CategoryPage,
        meta: {
            layout: 'LayoutDefault',
        }
    },
    {
        path: "/registration",
        name: "registration",
        component: TheRegistration,
        meta: {
            layout: 'LayoutDefault',
        }
    },

];
export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})