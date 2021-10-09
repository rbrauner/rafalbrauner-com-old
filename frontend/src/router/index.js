import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";
import AboutView from "@/views/AboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import EducationView from "@/views/EducationView.vue";
import SkillsView from "@/views/SkillsView.vue";
import InterestsView from "@/views/InterestsView.vue";
import AwardsAndCertificatesView from "@/views/AwardsAndCertificatesView.vue";
const routes = [
    {
        path: "/",
        name: "Index",
        component: IndexView,
    },
    {
        path: "/o-mnie",
        name: "About",
        component: AboutView
    },
    {
        path: "/doswiadczenie",
        name: "Experience",
        component: ExperienceView
    },
    {
        path: "/edukacja",
        name: "Education",
        component: EducationView
    },
    {
        path: "/umiejetnosci",
        name: "Skills",
        component: SkillsView
    },
    {
        path: "/zainteresowania",
        name: "Interests",
        component: InterestsView
    },
    {
        path: "/nagrody-i-certyfikaty",
        name: "AwardsAndCertificates",
        component: AwardsAndCertificatesView
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map