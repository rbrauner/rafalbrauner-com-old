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
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Przełącz nawigację"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/o-mnie" class="nav-link"
                    >O mnie
                    </router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/doswiadczenie" class="nav-link"
                    >Doświadczenie
                    </router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/edukacja" class="nav-link"
                    >Edukacja
                    </router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/umiejetnosci" class="nav-link"
                    >Umiejętności
                    </router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/zainteresowania" class="nav-link"
                    >Zainteresowania
                    </router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/nagrody-i-certyfikaty" class="nav-link"
                    >Nagrody i certyfikaty
                    </router-link
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavComponent"
};
</script>
