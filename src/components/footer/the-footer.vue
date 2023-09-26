<template>
    <footer class="footer">
        <img src="/logo.svg" alt="logo Space X" class="logo"/>
        <nav class="footer-nav">
            <ul class="list">
                <li class="item">
                    <a :href="elon_twitter" rel="noopener noreferrer" target='_blank' class="item-link">Elon Musk Twitter</a>
                </li>
                <li class="item">
                    <a :href="twitter" rel="noopener noreferrer" target='_blank' class="item-link">Twitter</a>
                </li>
                <li class="item">
                    <a :href="flickr" rel="noopener noreferrer" target='_blank' class="item-link">Flickr</a>
                </li>
                <li class="item">
                    <a :href="website" rel="noopener noreferrer" target='_blank' class="item-link">Website</a>
                </li>
            </ul>
        </nav>
        <p class="footer-text">
            For additional questions, contact
            <a class="footer-link" href="mailto:rideshare@spacex.com"
            >rideshare@spacex.com</a>
        </p>

    </footer>
</template>

<script setup>
    const {
        elon_twitter,
        flickr,
        twitter,
        website,
    } = defineProps({
        elon_twitter: {
            type: String,
            default: '',
        },
        flickr: {
            type: String,
            default: '',
        },
        twitter: {
            type: String,
            default: '',
        },
        website: {
            type: String,
            default: '',
        },
    });
</script>

<style scoped>
    @import 'the-footer';
</style>
