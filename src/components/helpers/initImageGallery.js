import { ref, onMounted } from "vue";
import getDataFromGoogleSheet from "./getDataFromGoogleSheet";

export default function initImageGallery(googleSheetName) {
    const images = ref([]);

    onMounted(async () => {
        const data = await getDataFromGoogleSheet(
            googleSheetName
        );

        images.value = data.map((row) => ({
            src: row.image_url,
            tinySrc: row.image_tiny_url,
            title: row.image_title,
            description: row.image_description,
            alt: row.image_alt,
        }));
    });

    return {
        images,
    };
}
