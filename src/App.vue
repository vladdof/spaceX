<template>
    <div>
        <the-header :rockets="mappedRocketsName" />
        <router-view />
        <the-footer v-bind="company.links" />
    </div>
</template>

<script setup>
    import TheHeader from './components/header/the-header.vue';
    import TheFooter from './components/footer/the-footer.vue';

    import { storeToRefs } from 'pinia';
    import { useLaunchesStore } from './stores';
    import { computed } from 'vue';

    const store = useLaunchesStore();
    const { rockets, company } = storeToRefs(store);

    store.fetchRockets();
    const mappedRocketsName = computed(() => rockets.value.map((item) => item.name));
</script>

<style scoped>
</style>
