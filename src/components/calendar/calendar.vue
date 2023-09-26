<template>
    <div>
        <main-section name="Календарь SpaceX" />
        <section class="calendar">
            <div class="container">
                <ul class="calendar-list">
                    <li
                        v-for="item in data"
                        :key="item.id"
                        class="calendar-item"
                    >
                        <article class="launches">
                            <div class="launches-image">
                                <img :src="item.links.patch.small" :alt="item.name" />
                            </div>
                            <div class="launches-content">
                                <h2 class="launches-title">{{ item.name }}</h2>
                                <router-link
                                    :to="{ name: routes.LAUNCH_ID.NAME, params: { id: item.id } }"
                                    class="button launches-details"
                                >
                                    Подробнее
                                </router-link>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ROUTES } from '../../constants/routes';
import MainSection from '../main/main-section.vue';

const routes = ROUTES;
const { data } = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});
</script>

<style scoped>
    @import 'calendar';
</style>
