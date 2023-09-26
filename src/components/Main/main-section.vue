<template>
    <div>
        <section class="main">
            <h1 class="title">{{ name || rocket }}</h1>
            <slot>
                <div class="video-container">
                    <video
                        class="video"
                        autoPlay loop muted
                        :src="srcCurrentRocket"
                    />
                </div>
            </slot>
        </section>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { createSrcVideo } from './create-src-video';

const props = defineProps({
    rocket: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
});

const srcCurrentRocket = ref(createSrcVideo(props.rocket));

watch(() => props.rocket, (newRocket) => {
  srcCurrentRocket.value = createSrcVideo(newRocket);
});
</script>

<style scoped>
    @import 'main-section';
</style>
