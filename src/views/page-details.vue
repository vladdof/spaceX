<template>
    <launch-details :launch="getLaunchById(id)" />
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useLaunchesStore } from '../stores';
    import LaunchDetails from '../components/details/launch-details.vue';

    const { id } = defineProps({
        id: {
            type: String,
            default: '',
        },
    });

    const store = useLaunchesStore();
    const { launches, getLaunchById } = storeToRefs(store);

    if (!launches) store.fetchLaunches();
</script>
