import { ref, onMounted } from "vue";
import getDataFromGoogleSheet from "../../helpers/getDataFromGoogleSheet";

export default function initImageGallery(googleSheetName) {
    const events = ref([]);

    onMounted(async () => {
        const data = await getDataFromGoogleSheet(
            "evenements"
        );

        events.value = data.map((row) => ({
            title: row.event_title,
            description: row.event_description,
            image: row.event_image_url,
        }));
    });

    return {
        events,
    };
}
