<script setup>
    import { onMounted, ref } from "vue";
    import initImageGallery from "../../helpers/initImageGallery";

    const images = ref([]);

    onMounted(async () => {
        const gallery = await initImageGallery("accueil");
        images.value = gallery.images.value;
    });
</script>

<template>
    <div class="home-gallery">
        <div class="home-gallery__images-wrapper">
            <a
                v-for="(image, index) in images"
                :key="index"
                :href="image.src"
                target="_blank"
                class="home-gallery__image-container"
            >
                <img
                    :key="index"
                    :src="image.src"
                    :alt="image.alt"
                    :loading="index > 0 ? 'lazy' : 'eager'"
                    class="home-gallery__image"
                    :style="`background: url('${image.tinySrc}')`"
                    :width="image.width"
                    :height="image.height"
                />
            </a>
        </div>
    </div>
</template>

<style scoped>
    @import "./home.css";
</style>
