<template>
    <section class="resume-section" id="about">
        <div class="resume-section-content">
            <h1 class="mb-0">
                {{ $t("view.about.firstname") }}
                <span class="text-primary">{{
                    $t("view.about.lastname")
                }}</span>
            </h1>
            <div class="subheading mb-5">
                {{ $t("view.about.city") }}, {{ $t("view.about.country") }}
                <a :href="'mailto:' + $t('view.about.email')">{{
                    $t("view.about.email")
                }}</a>
            </div>
            <p class="lead mb-5">
                {{ $t("view.about.lead") }}
            </p>
            <div class="social-icons">
                <a
                    class="social-icon"
                    :href="$t('view.about.social.url.github')"
                    target="_blank"
                    ><i class="fab fa-github"></i
                ></a>
                <a
                    class="social-icon"
                    :href="$t('view.about.social.url.gitlab')"
                    target="_blank"
                    ><i class="fab fa-gitlab"></i
                ></a>
                <a
                    class="social-icon"
                    :href="$t('view.about.social.url.facebook')"
                    target="_blank"
                    ><i class="fab fa-facebook-f"></i
                ></a>
                <a
                    class="social-icon"
                    :href="$t('view.about.social.url.linkedin')"
                    target="_blank"
                    ><i class="fab fa-linkedin-in"></i
                ></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutView",
};
</script>
