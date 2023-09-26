<template>
    <home-content :company="company" />
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useLaunchesStore } from '../stores';
    import HomeContent from '../components/home/home-content.vue';

    const store = useLaunchesStore();
    const { company } = storeToRefs(store);

    store.fetchCompany();
</script>
