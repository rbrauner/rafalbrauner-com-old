<template>
    <header-component/>
    <nav-component/>
    <main-component/>
    <footer-component/>
</template>

<script>
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
