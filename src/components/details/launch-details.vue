<template>
    <div>
        <main-section :name="launch.name">
            <div class="details-image">
                <a :href="launch.links.article" target="_blank">
                    <img :src="launch.links.patch.small" :alt="launch.name" />
                </a>
            </div>
        </main-section>
        <main class="details">
            <div class="container">
                <div class="details-row">
                    <div class="details-content">
                        <p class="details-description">{{ launch.details }}</p>
                    </div>
                </div>
                <div class="details-youtube">
                    <LiteYouTubeEmbed
                        :id="launch.links.youtube_id"
                        :title="launch.name"
                    />
                </div>
            </div>
            <router-link :to="{ name: routes.CALENDAR.NAME }" class="button button-back">go back</router-link>
        </main>
    </div>
</template>

<script setup>
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
    import 'vue-lite-youtube-embed/style.css';
    import MainSection from '../main/main-section.vue';
    import { ROUTES } from '../../constants/routes';

    defineProps({
        launch: {
            type: Object,
            default: () => ({}),
        },
    });
    const routes = ROUTES;
</script>

<style scoped>
    @import 'launch-details';
</style>
