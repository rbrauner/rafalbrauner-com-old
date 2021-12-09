<template>
    <section class="resume-section" id="skills">
        <div class="resume-section-content">
            <h2 class="mb-5">{{ $t("view.skills.title") }}</h2>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="subheading mb-3">{{ $t("view.skills.languages.title") }}</div>
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.php") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.sql_mysql") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.java") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.python") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.c++") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.postgresql_sqlite") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.languages.html_css_sass_js") }}
                        </li>
                    </ul>
                    <div class="subheading mb-3">{{ $t("view.skills.libraries.title") }}</div>
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.libraries.doctrine") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.libraries.axios") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.libraries.bootstrap") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.libraries.jquery") }}
                        </li>
                    </ul>
                    <div class="subheading mb-3">{{ $t("view.skills.other.title") }}</div>
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.other.elasticsearch") }}
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <div class="subheading mb-3">{{ $t("view.skills.frameworks.title") }}</div>
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.frameworks.symfony") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.frameworks.zend_framework") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.frameworks.spring") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.frameworks.hibernate") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.frameworks.vuejs") }}
                        </li>
                    </ul>
                    <div class="subheading mb-3">{{ $t("view.skills.tools.title") }}</div>
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.vscode") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.docker") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.git") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.git_flow") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.composer") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.maven") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.webpack") }}
                        </li>
                        <li>
                            <span class="fa-li"
                                ><i class="fas fa-check"></i
                            ></span>
                            {{ $t("view.skills.tools.gulp") }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SkillsView",
};
</script>

<style scoped lang="scss">
ul {
    margin-bottom: 2rem;

    li {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}
</style>
