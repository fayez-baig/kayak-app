const axios = require("axios");
const jsonpAdapter = require("axios-jsonp");

const { REACT_APP_BASE_URL } = process.env;

const getAirLinesData = async () =>
  await axios({
    url: `${REACT_APP_BASE_URL}/homework`,
    adapter: jsonpAdapter,
    callbackParamName: "jsonp",
  });

export { getAirLinesData };
