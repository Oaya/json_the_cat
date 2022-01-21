const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it(" for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(err, null);
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it(" for a invalid breed, via callback", (done) => {
    fetchBreedDescription("Kitty", (err, desc) => {
      const expectedDesc = "data doesn't exists.";

      assert.equal(expectedDesc, desc);
      assert.equal(err, null);
      done();
    });
  });
});
