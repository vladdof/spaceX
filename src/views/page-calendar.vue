<template>
    <calendar :data="launches" />
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useLaunchesStore } from '../stores';
    import Calendar from '../components/calendar/calendar.vue';


    const store = useLaunchesStore();
    const { launches } = storeToRefs(store);

    store.fetchLaunches();
</script>
