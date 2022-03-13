<template>
    <header-component />
    <nav-component />
    <main-component />
    <cookies-banner-component />
    <footer-component />
</template>

<style lang="scss">
// libs
@import "bootstrap/scss/bootstrap";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";
@import "~@fortawesome/fontawesome-free/scss/regular";

// theme
@import "./assets/theme/app.scss";

// app
$appColor: #bd5d38;

body {
    font-family: "Ubuntu";
}

.bg-primary {
    background-color: $appColor !important;
}

.text-primary {
    color: $appColor !important;
}

a {
    color: $appColor;
}

.navbar-dark {
    .navbar-nav {
        .nav-link {
            &.router-link-active {
                color: rgba(255, 255, 255, 0.75);
            }
        }
    }
}
</style>

<script>
// libs
import "bootstrap";
import "@fontsource/ubuntu";

// components
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import CookiesBannerComponent from "@/components/CookiesBannerComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        HeaderComponent,
        NavComponent,
        MainComponent,
        CookiesBannerComponent,
        FooterComponent,
    },
};
</script>
