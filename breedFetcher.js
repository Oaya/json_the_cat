const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  if (!breedName) {
    console.log(`The requested breed is not found.`);
    return;
  }
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error === null) {
        const data = JSON.parse(body);
        //check if the data is exists or not.//
        if (data.length > 0) {
          callback(error, data[0].description);
        } else {
          callback(null, `data doesn't exists.`);
        }
      } else {
        callback(error, `Error ${error}`);
        console.log(`Error ${error}`);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
