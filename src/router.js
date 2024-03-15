import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "./pages/IndexPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import SingleProject from "./pages/SingleProject.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: IndexPage,
        },
        {
            path: "/project",
            name: "projects.index",
            component: ProjectPage,
        },
        {
            path: "/project/:slug",
            name: "projects.show",
            component: SingleProject,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage,
        },
    ],
});

export { router };
