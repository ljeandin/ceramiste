import HomeView from "./components/pages/home/Home.vue";
import PortfolioView from "./components/pages/portfolio/Portfolio.vue";
import GalleryView from "./components/pages/gallery/Gallery.vue";
import EventsView from "./components/pages/events/Events.vue";
import ContactView from "./components/pages/contact/Contact.vue";
import AboutView from "./components/pages/about/About.vue";

const routes = [
    { path: "/", component: HomeView },
    {
        path: "/portfolio",
        component: PortfolioView,
        props: true,
        children: [
            {
                path: "gres",
                component: GalleryView,
                props: { googleSheetName: "gres" },
            },
            {
                path: "raku",
                component: GalleryView,
                props: { googleSheetName: "raku" },
            },
        ],
    },
    {
        path: "/a-fleur-de-terre",
        component: PortfolioView,
        props: true,
        children: [
            {
                path: "jardin",
                component: GalleryView,
                props: { googleSheetName: "jardin" },
            },
            {
                path: "exposition",
                component: GalleryView,
                props: { googleSheetName: "exposition" },
            },
            {
                path: "atelier",
                component: GalleryView,
                props: { googleSheetName: "atelier" },
            },
        ],
    },
    { path: "/actualites", component: EventsView },
    { path: "/contact", component: ContactView },
    { path: "/a-propos", component: AboutView },
];

export default routes;
