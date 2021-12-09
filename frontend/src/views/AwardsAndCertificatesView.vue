<template>
    <section class="resume-section" id="awards-and-certificates">
        <div class="resume-section-content">
            <h2 class="mb-5">{{ $t("view.awards_and_certificates.title") }}</h2>
            <ul class="fa-ul mb-0">
                <li>
                    <span class="fa-li"
                        ><i class="fas fa-trophy text-warning"></i
                    ></span>
                    {{ $t("view.awards_and_certificates.first") }}
                </li>
                <li>
                    <span class="fa-li"
                        ><i class="fas fa-trophy text-warning"></i
                    ></span>
                    {{ $t("view.awards_and_certificates.second") }}
                </li>
                <li>
                    <span class="fa-li"
                        ><i class="fas fa-trophy text-warning"></i
                    ></span>
                    {{ $t("view.awards_and_certificates.third") }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "AwardsAndCertificatesView",
};
</script>

<style scoped lang="scss">
ul {
    li {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}
</style>
