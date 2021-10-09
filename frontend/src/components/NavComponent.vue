<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
    >
        <router-link :to="cProfileUrl" class="navbar-brand">
            <span class="d-block d-lg-none">{{ cProfileName }}</span>
            <span class="d-none d-lg-block"
            ><img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="../assets/img/profile.png"
                alt="profile.png"
            /></span>
        </router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Przełącz nawigację"
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
                name: "Rafał Brauner",
                url: "/"
            },
            menu: [
                {url: "/o-mnie", label: "O mnie"},
                {url: "/doswiadczenie", label: "Doświadczenie"},
                {url: "/edukacja", label: "Edukacja"},
                {url: "/umiejetnosci", label: "Umiejętności"},
                {url: "/zainteresowania", label: "Zainteresowania"},
                {
                    url: "/nagrody-i-certyfikaty",
                    label: "Nagrody i certyfikaty"
                }
            ]
        };
    },
    computed: {
        cProfileName: function () {
            return this.profile.name;
        },
        cProfileImage: function () {
            return this.profile.image;
        },
        cProfileUrl: function () {
            return this.profile.url;
        },
        cMenu: function () {
            return this.menu;
        }
    },
    methods: {
        navLink: function (e) {
            let navbarCollapse = e.target.closest(".navbar-collapse");
            let navbarToggler = navbarCollapse.previousSibling;

            if (window.getComputedStyle(navbarToggler).display !== "none") {
                let event = new CustomEvent("click");
                navbarToggler.dispatchEvent(event);
            }
        }
    }
};
</script>
