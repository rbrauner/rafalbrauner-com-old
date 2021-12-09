<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
    >
        <router-link :to="cProfileUrl" class="navbar-brand">
            <span class="d-block d-lg-none">{{
                $t("component.nav.profile.name")
            }}</span>
            <span class="d-none d-lg-block"
                ><img
                    class="img-fluid img-profile rounded-circle mx-auto mb-2"
                    :src="cProfileImage"
                    alt="profile.png"
            /></span>
        </router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            :aria-label="$t('component.nav.toggle_navigation')"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li v-for="item in menu" :key="item.url">
                    <router-link :to="item.url" class="nav-link">
                        <span @click="navLink">
                            {{ item.label }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script scoped>
export default {
    name: "NavComponent",
    data: function () {
        return {
            profile: {
                image: require("../assets/img/profile.png"),
                url: "/",
            },
            menu: [
                {
                    url: "/o-mnie",
                    label: this.$t("component.nav.menu.about"),
                },
                {
                    url: "/doswiadczenie",
                    label: this.$t("component.nav.menu.experience"),
                },
                {
                    url: "/edukacja",
                    label: this.$t("component.nav.menu.education"),
                },
                {
                    url: "/umiejetnosci",
                    label: this.$t("component.nav.menu.skills"),
                },
                {
                    url: "/zainteresowania",
                    label: this.$t("component.nav.menu.interests"),
                },
                {
                    url: "/nagrody-i-certyfikaty",
                    label: this.$t(
                        "component.nav.menu.awards_and_certificates"
                    ),
                },
            ],
        };
    },
    computed: {
        cProfileImage: function () {
            return this.profile.image;
        },
        cProfileUrl: function () {
            return this.profile.url;
        },
        cMenu: function () {
            return this.menu;
        },
    },
    methods: {
        navLink: function (e) {
            let navbarCollapse = e.target.closest(".navbar-collapse");
            let navbarToggler = navbarCollapse.previousSibling;

            if (window.getComputedStyle(navbarToggler).display !== "none") {
                let event = new CustomEvent("click");
                navbarToggler.dispatchEvent(event);
            }
        },
    },
};
</script>
