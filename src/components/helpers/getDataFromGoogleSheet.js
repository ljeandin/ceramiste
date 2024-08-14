const scriptSelector = "js-google-parser-script";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.classList.add(scriptSelector);
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

export default async function getDataFromSheets(
    googleSheetName
) {
    let isScriptAlreadyLoaded = document.querySelectorAll(
        `.${scriptSelector}`
    ).length
        ? true
        : false;

    if (!isScriptAlreadyLoaded) {
        await loadScript(
            "https://cdn.jsdelivr.net/npm/public-google-sheets-parser@latest"
        );
    }

    const googleSheetId =
        "1LaEj02PtG1sIXt2J_ENz3iHiidEPwpc0HuHODdTteTQ";
    const options = {
        sheetName: googleSheetName,
        useFormat: true,
    };
    const parser = new PublicGoogleSheetsParser(
        googleSheetId,
        options
    );

    const gSheetData = await parser.parse();
    return gSheetData;
}
