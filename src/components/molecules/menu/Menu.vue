<script setup>
    import menuItems from "./menuItems";
</script>

<template>
    <button
        class="menu-trigger js-menu-trigger"
        type="button"
    >
        <img
            src="/src/assets/icons/menu_icon.svg"
            alt="Menu"
            class="menu-trigger__icon"
        />
    </button>
    <nav>
        <ul class="menu menu--hidden js-menu">
            <li
                v-for="item in menuItems"
                :key="item.title"
            >
                <span
                    v-if="item.submenu"
                    class="menu__link menu__link--submenu-title"
                >
                    {{ item.title }}
                </span>
                <router-link
                    v-else
                    class="menu__link js-menu-link"
                    :class="{
                        'menu__link--active':
                            $route.path === item.link,
                    }"
                    :to="item.link"
                >
                    {{ item.title }}
                </router-link>
                <ul
                    v-if="item.submenu"
                    class="menu__submenu"
                >
                    <li
                        v-for="subItem in item.submenu"
                        :key="subItem.title"
                        class="js-menu-link"
                    >
                        <router-link
                            class="menu__link"
                            :to="subItem.link"
                            :class="{
                                'menu__link--active':
                                    $route.path ===
                                    subItem.link,
                            }"
                        >
                            {{ subItem.title }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
