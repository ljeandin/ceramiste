<script setup>
    import initEvents from "./initEvents";

    const { events } = initEvents();
</script>

<template>
    <section class="events__wrapper">
        <div class="events">
            <h1 class="events__title heading--1">
                Actualités
            </h1>

            <div
                v-for="(event, index) in events"
                :key="index"
            >
                <div
                    v-if="event.title"
                    class="event__wrapper"
                >
                    <a
                        :href="event.image"
                        target="_blank"
                    >
                        <img
                            :key="index"
                            :src="event.image"
                            alt=""
                            class="event__image"
                        />
                    </a>

                    <div>
                        <h2 class="event__title heading--2">
                            {{ event.title }}
                        </h2>
                        <span
                            v-if="event.description"
                            class="event--description"
                        >
                            {{ event.description }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import "./events.css";
</style>
