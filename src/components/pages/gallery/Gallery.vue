<script setup>
    import { ref, onMounted } from "vue";
    import initImageGallery from "../../helpers/initImageGallery";

    const props = defineProps(["googleSheetName"]);

    const images = ref([]);

    onMounted(async () => {
        const gallery = await initImageGallery(
            props.googleSheetName
        );
        images.value = gallery.images.value;
    });
</script>

<template>
    <div class="gallery__wrapper">
        <div class="gallery">
            <a
                v-for="(image, index) in images"
                :key="index"
                :href="image.src"
                target="_blank"
            >
                <img
                    :key="index"
                    :src="image.src"
                    :alt="image.alt"
                    class="gallery__image"
                    :loading="index > 0 ? 'lazy' : 'eager'"
                    :style="`background: url('${image.tinySrc}')`"
                />
            </a>
        </div>
    </div>
</template>

<style scoped>
    @import "./gallery.css";
</style>
