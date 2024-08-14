<script setup>
    import initImageGallery from "../../helpers/initImageGallery";

    const props = defineProps(["googleSheetName"]);

    const { images } = initImageGallery(
        props.googleSheetName
    );
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
                />
            </a>
        </div>
    </div>
</template>

<style scoped>
    @import "./gallery.css";
</style>
