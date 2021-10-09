import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
const routes = [
    {
        path: "/",
        name: "Index",
        component: IndexView,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map