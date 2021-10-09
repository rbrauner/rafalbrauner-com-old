<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
    >
        <router-link to="/" class="navbar-brand">
            <span class="d-block d-lg-none">Rafał Brauner</span>
            <span class="d-none d-lg-block"
            ><img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="../assets/img/profile.png"
                alt="profile.png"
            /></span>
        </router-link>
        <button
            :class="{ navbarButtonClass }"
            :aria-expanded="{ navbarButtonAriaExpanded }"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Przełącz nawigację"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            :class="{ navbarCollapseClass }"
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
        >
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/o-mnie" class="nav-link"
                    ><span @click="navLink">O mnie</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/doswiadczenie" class="nav-link"
                    ><span @click="navLink">Doświadczenie</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/edukacja" class="nav-link"
                    ><span @click="navLink">Edukacja</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/umiejetnosci" class="nav-link"
                    ><span @click="navLink">Umiejętności</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/zainteresowania" class="nav-link"
                    ><span @click="navLink"> Zainteresowania</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nagrody-i-certyfikaty" class="nav-link"
                    ><span @click="navLink">Nagrody i certyfikaty</span>
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
            navbarButtonClass: "collapsed",
            navbarButtonAriaExpanded: false,
            navbarCollapseClass: ""
        };
    },
    methods: {
        navLink() {
            this.navbarButtonClass = "collapsed";
            this.navbarButtonAriaExpanded = false;
            this.navbarCollapseClass.replace("show", "");
        }
    }
};
</script>
