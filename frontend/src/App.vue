<template>
    <header-component/>
    <nav-component/>
    <main-component/>
    <footer-component/>
</template>

<style lang="scss">
// libs
@import "bootstrap/scss/bootstrap";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";
@import "~@fortawesome/fontawesome-free/scss/regular";
</style>

<script>
// libs
import "bootstrap";
import "bootstrap";

// components
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        HeaderComponent,
        NavComponent,
        MainComponent,
        FooterComponent
    }
};
</script>
