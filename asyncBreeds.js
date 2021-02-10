const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  const cb = (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  };
  fs.readFile(`./data/${breed}.txt`, 'utf8', cb);
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed)
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', (breed) => printOutCatBreed(breed));
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!


