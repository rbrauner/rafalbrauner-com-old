<template>
    <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-5">{{ $t("view.experience.title") }}</h2>
            <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
            >
                <div class="flex-grow-1">
                    <h3 class="mb-0">{{ $t("view.experience.first.title") }}</h3>
                    <div class="subheading mb-3">{{ $t("view.experience.first.company") }}</div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-primary">{{ $t("view.experience.first.from") }} - {{ $t("view.experience.first.to") }}</span>
                </div>
            </div>
            <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
            >
                <div class="flex-grow-1">
                    <h3 class="mb-0">{{ $t("view.experience.second.title") }}</h3>
                    <div class="subheading mb-3">{{ $t("view.experience.second.company") }}</div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-primary"
                        >{{ $t("view.experience.second.from") }} - {{ $t("view.experience.second.to") }}</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ExperienceView",
};
</script>
