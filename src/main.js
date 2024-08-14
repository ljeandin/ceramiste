import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

import "./components/molecules/menu/menu";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");

const object = {
    fullPath: "/portfolio/gres",
    path: "/portfolio/gres",
    query: {},
    hash: "",
    params: {},
    matched: [
        {
            path: "/portfolio",
            meta: {},
            props: { default: true },
            children: [
                {
                    path: "gres",
                    component: {
                        __name: "Gallery",
                        props: ["googleSheetName"],
                        __hmrId: "6e8c2bc6",
                        __scopeId: "data-v-6e8c2bc6",
                        __file: "C:/Users/Lucie/Documents/ceramiste/src/components/pages/gallery/Gallery.vue",
                    },
                    props: { googleSheetName: "gres" },
                },
                {
                    path: "raku",
                    component: {
                        __name: "Gallery",
                        props: ["googleSheetName"],
                        __hmrId: "6e8c2bc6",
                        __scopeId: "data-v-6e8c2bc6",
                        __file: "C:/Users/Lucie/Documents/ceramiste/src/components/pages/gallery/Gallery.vue",
                    },
                    props: { googleSheetName: "raku" },
                },
            ],
            instances: { default: {} },
            leaveGuards: { "Set(0)": [] },
            updateGuards: { "Set(0)": [] },
            enterCallbacks: {},
            components: {
                default: {
                    __hmrId: "d5a4b7be",
                    __file: "C:/Users/Lucie/Documents/ceramiste/src/components/pages/portfolio/Portfolio.vue",
                },
            },
        },
        {
            path: "/portfolio/gres",
            meta: {},
            props: { default: { googleSheetName: "gres" } },
            children: [],
            instances: { default: {} },
            leaveGuards: { "Set(0)": [] },
            updateGuards: { "Set(0)": [] },
            enterCallbacks: {},
            components: {
                default: {
                    __name: "Gallery",
                    props: ["googleSheetName"],
                    __hmrId: "6e8c2bc6",
                    __scopeId: "data-v-6e8c2bc6",
                    __file: "C:/Users/Lucie/Documents/ceramiste/src/components/pages/gallery/Gallery.vue",
                },
            },
        },
    ],
    meta: {},
    href: "/portfolio/gres",
};
