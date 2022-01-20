const request = require("request");
const args = process.argv.slice(2);
const breedName = args[0];

const fetchBreed = () => {
  if (!breedName) {
    console.log(`The requested breed is not found.`);
    return;
  }
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        console.log(`Error ${error}`);
      } else {
        const data = JSON.parse(body);
        console.log(data[0].description);
      }
    }
  );
};

fetchBreed();
