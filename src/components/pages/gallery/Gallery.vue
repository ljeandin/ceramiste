<script setup>
    import {
        ref,
        onMounted,
        onBeforeUnmount,
        nextTick,
    } from "vue";
    import initImageGallery from "../../helpers/initImageGallery";

    const props = defineProps(["googleSheetName"]);
    const images = ref([]);
    let observer = null;

    const loadImage = (image) => {
        image.src = image.dataset.src;
    };

    const setupObserver = () => {
        observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        loadImage(img);
                        observer.unobserve(img);
                    }
                });
            },
            {
                rootMargin: "0px 0px 200px 0px",
                threshold: 0.1,
            }
        );
    };

    onMounted(async () => {
        const gallery = await initImageGallery(
            props.googleSheetName
        );
        images.value = gallery.images.value;

        await nextTick();

        setupObserver();

        const imageArray = images.value;

        imageArray.forEach((image, index) => {
            const imgElement = document.querySelector(
                `.js-gallery-image-${index}`
            );
            observer.observe(imgElement);
        });
    });

    onBeforeUnmount(() => {
        if (observer) {
            observer.disconnect();
        }
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
                    :data-src="image.src"
                    :alt="image.alt"
                    class="gallery__image"
                    :class="`js-gallery-image-${index}`"
                    :style="`background: url('${image.tinySrc}')`"
                    :width="image.width"
                    :height="image.height"
                />
            </a>
        </div>
    </div>
</template>

<style scoped>
    @import "./gallery.css";
</style>
