const axios = require('axios');

module.exports.get = async (event, context, callback) => {
  const sheetKey = process.env.SHEET_KEY;
  const sheetEndpoint = `https://spreadsheets.google.com/feeds/list/${sheetKey}/od6/public/values?alt=json`;

  const allSheetData = await axios.get(sheetEndpoint);
  const responseData = await allSheetData.data;

  const sources = responseData.feed.entry.map((entry) => {
    let columns = {};

    // Dynamically add all relevant columns from the Sheets to the response
    Object.keys(entry).forEach((key) => {
      if (/gsx\$/.test(key)) {
        const newKey = key.replace('gsx$', '');
        columns[newKey] = entry[key].$t;
      }
    });

    return columns;
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify(sources),
  };

  callback(null, response);
};