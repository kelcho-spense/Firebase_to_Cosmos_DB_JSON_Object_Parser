const fs = require('fs');

const inputJson = require('./firebaseExportedDBFile.json');

const collections = inputJson['__collections__'];

for (const collectionName in collections) {
    const collectionData = collections[collectionName];
    const collectionArray = [];
  
    for (const key in collectionData) {
      if (key !== '__collections__') {
        const item = { id: key, ...collectionData[key] };
        // Remove the "__collections__" property from each item
        delete item['__collections__'];
        collectionArray.push(item);
      }
    }
  
    const collectionJson = JSON.stringify(collectionArray, null, 2);
  
    fs.writeFileSync(`${collectionName}.json`, collectionJson);
}
