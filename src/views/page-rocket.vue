<template>
    <features :rockets="rockets" />
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useLaunchesStore } from '../stores';
    import Features from '../components/features/features.vue';

    const store = useLaunchesStore();
    const { rockets } = storeToRefs(store);

    store.fetchRockets();
</script>
