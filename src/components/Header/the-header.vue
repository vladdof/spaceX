<template>
    <header class="header">
        <router-link :to="{ name: routes.ROOT.NAME }">
            <img src="/logo.svg" alt="Logo Space X" class="logo" />
        </router-link>
        <nav class="main-nav nav">
            <ul class="list">
                <li
                    v-for="rocket in rockets"
                    :key="rocket.name"
                    class="item"
                >
                    <router-link
                        :to="{ path: rocket.path }"
                        class="item-link"
                        active-class="active"
                    >
                       {{ rocket.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <nav class="secondary-nav">
            <ul class="list">
                <li class="item">
                    <router-link
                        :to="{ name: routes.ROOT.NAME }"
                        :exact="true"
                        class="item-link"
                        active-class="active"
                    >
                        Home
                    </router-link>
                </li>
                <li class="item">
                    <router-link
                        :to="{ name: routes.CALENDAR.NAME }"
                        :exact="true"
                        class="item-link"
                        active-class="active"
                    >
                        Calendar
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ROUTES } from '../../constants/routes';
import { computed } from 'vue';

    const props = defineProps({
        rockets: {
            type: Array,
            default: () => [],
        },
    });

    const rockets = computed(() => {
        return props.rockets.map(( item ) => ({
            name: item,
            path: `/rocket/${item.replace(' ', '-').toLocaleLowerCase()}`,
        }));
    });

    const routes = ROUTES;
</script>

<style scoped>
    @import 'the-header';
</style>
