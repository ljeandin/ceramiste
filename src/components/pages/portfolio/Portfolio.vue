<template>
    <section class="portfolio">
        <router-view :key="$route.fullPath"></router-view>
    </section>
</template>
