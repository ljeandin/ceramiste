import { ref, onMounted } from "vue";
import getDataFromGoogleSheet from "./getDataFromGoogleSheet";

export default async function initImageGallery(
    googleSheetName
) {
    const images = ref([]);

    const data = await getDataFromGoogleSheet(
        googleSheetName
    );

    images.value = data.map((row) => ({
        src: row.image_url,
        tinySrc: row.image_tiny_url,
        title: row.image_title,
        description: row.image_description,
        alt: row.image_alt,
        width: row.image_width,
        height: row.image_height,
    }));

    return {
        images,
    };
}
