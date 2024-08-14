<script setup>
    import Menu from "../../molecules/menu/Menu.vue";
</script>

<template>
    <header
        class="header"
        :class="{
            'header--with-background':
                $route.fullPath === '/actualites',
        }"
    >
        <RouterLink
            to="/"
            class="header__logo-wrapper"
        >
            <img
                class="header__logo"
                src="/src/assets/icons/logo.svg"
                alt="Logo de Martine Cassar"
            />
        </RouterLink>

        <Menu />
    </header>
</template>
