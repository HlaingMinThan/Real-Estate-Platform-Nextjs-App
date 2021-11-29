var axios = require("axios").default;
let baseUrl = "https://bayut.p.rapidapi.com";
let fetchApi = async (uri) => {
  try {
    let { data } = await axios.get(baseUrl + uri, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "4b73bc8201msh910941a649ceb79p1a574ejsn625fa9e915e5",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchApi;
