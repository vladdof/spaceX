<template>
    <div>
        <main-section :rocket="rocket.name" />
        <section class="features">
            <h2 class="features-title">
                {{ rocket.name }} <br/>Overview
            </h2>
            <div class="overview">

                <table class="table">
                    <caption class="table-title">
                        Size
                    </caption>
                    <thead>
                        <tr>
                            <td class="table-column">HEIGHT</td>
                            <td class="table-column">{{ rocket.height.meters }} m / {{ rocket.height.feet }} ft</td>
                        </tr>
                        <tr>
                            <td class="table-column">DIAMETER</td>
                            <td class="table-column">{{ rocket.diameter.meters }} m / {{ rocket.diameter.feet }} ft</td>
                        </tr>
                        <tr>
                            <td class="table-column">MASS</td>
                            <td class="table-column">{{ rocket.mass.kg }} kg / {{ rocket.mass.lb }} lb</td>
                        </tr>

                        <tr
                            v-for="item in rocket.payload_weights"
                            :key="item.id"
                        >
                            <td class="table-column">PAYLOAD TO {{ item.id.toUpperCase() }}</td>
                            <td class="table-column">{{ item.kg }} kg / {{ item.lb }} lb</td>
                        </tr>
                    </thead>
                </table>
                <div class="rellax" data-rellax-speed="14">
                    <img
                        :src="srcImg"
                        alt="rocket"
                        class="rocket"
                    />
                </div>
                <article>
                    <h3 class="features-subtitle">DESCRIPTION</h3>
                    <p class="features-text">{{ rocket.description }}</p>
                </article>
            </div>
        </section>
    </div>
</template>

<script setup>
    import Rellax from 'rellax';
    import { computed, onMounted } from 'vue';
    import MainSection from '../main/main-section.vue';
    import { createSrcImg } from './create-src-img';

    onMounted(() => {
      let rellax = new Rellax('.rellax');
    });

    const changeName = (name) => name.replace(' ', '-').toLocaleLowerCase();

    const props = defineProps({
        rockets: {
            type: Object,
            default: () => ({}),
        },
        name: {
            type: String,
            default: '',
        },
    });

    const rocket = computed(() => {
        return props.rockets.find((item) => changeName(item.name) === props.name);
    });

    const srcImg = computed(() => createSrcImg(rocket));
</script>

<style scoped>
    @import 'features';
</style>
