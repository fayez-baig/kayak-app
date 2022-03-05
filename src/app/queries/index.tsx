let axios = require("axios");
let jsonpAdapter = require("axios-jsonp");

const { REACT_APP_BASE_URL } = process.env;

const getAirLinesData = async () =>
  await axios({
    url: `https://www.${REACT_APP_BASE_URL}/homework`,
    adapter: jsonpAdapter,
    callbackParamName: "jsonp",
  });

export { getAirLinesData };
