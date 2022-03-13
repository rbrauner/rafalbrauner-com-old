<template>
    <section class="resume-section" id="education">
        <div class="resume-section-content">
            <h2 class="mb-5">{{ $t("view.education.title") }}</h2>
            <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
            >
                <div class="flex-grow-1">
                    <h3 class="mb-0">
                        {{ $t("view.education.first.school") }}
                    </h3>
                    <div class="subheading mb-3">
                        {{ $t("view.education.first.field_of_study") }}
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-primary"
                        >{{ $t("view.education.first.from") }} -
                        {{ $t("view.education.first.to") }}</span
                    >
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
                <div class="flex-grow-1">
                    <h3 class="mb-0">
                        {{ $t("view.education.second.school") }}
                    </h3>
                    <div class="subheading mb-3">
                        {{ $t("view.education.second.field_of_study") }}
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-primary"
                        >{{ $t("view.education.second.from") }} -
                        {{ $t("view.education.second.to") }}</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "EducationView",
};
</script>
