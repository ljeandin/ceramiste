<script setup>
    import initImageGallery from "../../helpers/initImageGallery";

    const { images } = initImageGallery("accueil");

    const hideTinyImage = (index) => {
        const tinyImage = document.querySelector(
            `.js-tiny-image-${index}`
        );
        tinyImage.remove();
    };
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
                <div class="home-gallery__image-wrapper">
                    <img
                        :key="index"
                        :src="image.tinySrc"
                        :alt="image.alt"
                        :loading="
                            index > 0 ? 'lazy' : 'eager'
                        "
                        class="home-gallery__image home-gallery__image--thumbnail"
                        :class="'js-tiny-image-' + index"
                    />
                </div>

                <div class="home-gallery__image-wrapper">
                    <img
                        :key="index"
                        :src="image.src"
                        :alt="image.alt"
                        :loading="
                            index > 0 ? 'lazy' : 'eager'
                        "
                        class="home-gallery__image"
                        @load="hideTinyImage(index)"
                    />
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
    @import "./home.css";
</style>
