export default async function getDataFromSheets(
    googleSheetName
) {
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
