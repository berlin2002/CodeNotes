let model = {};

let codenote = { title: "Dummy" };

console.log("Model");
/**
 *
 * @param {string} key  key is the name of the storage you want to get
 */
model.getLocalStorage = (key) => {
  let myStorageArrayJSON = localStorage.getItem(key);
  let storageArray;

  if (myStorageArrayJSON === null) {
    storageArray = [];
    storageArrayJSON = JSON.stringify(storageArray);
    localStorage.setItem(key, storageArrayJSON);
    console.log(storageArray);
  } else {
    storageArray = JSON.parse(storageArrayJSON);
  }
  return storageArray;
};

/**
 *
 * @param {string} key  key is the name of the storage you want to update
 * @param {object} data  is the object containing our updated contact
 */
model.addToLocalStorage = (key, data) => {
  let myStorage = model.getLocalStorage(key);

  let storageArray = myStorage;
  storageArray = [...storageArray, data];
  storageArrayJSON = JSON.stringify(storageArray);
  localStorage.setItem(key, storageArrayJSON);
};

/**
 *
 * @param {string} key  key is the name ofthe storage you want to update
 * @param {number} index is the index of the object we want to update
 * @param {object} data  is the object containing our updated object
 */
model.updateLocalStorage = (key, data, index) => {
  let myStorage = getStorage(key);

  myStorage.splice(index, 1, data);
  myStorage = JSON.stringify(myStorage);
  localStorage.setItem(key, myStorage);
};

/**
 *
 * @param {string} key key is the name of the storage you want to remove
 * @param {number} index is the index of the object we want to remove
 * @param {object} data is the object containing our removal object
 */
model.removeLocalStorage = (key, data, index) => {
  let myStorage = getStorage(key);
  myStorage.splice(index, 1);
  myStorage = JSON.stringify(myStorage);
  localStorage.setItem(key, myStorage);
};
