import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "./pages/IndexPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: IndexPage,
        },
        {
            path: "/blog",
            name: "projects.index",
            component: ProjectPage,
        },
        {
            path: '/blog/:slug',
            name: 'projects.show',
            component: SingleProject
        }    
    ],
});

export { router } ; 