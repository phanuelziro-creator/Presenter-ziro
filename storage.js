import app from "./firebase.js";

import {

getStorage,

ref,

uploadBytes,

getDownloadURL,

deleteObject

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

const storage=getStorage(app);

export {

storage,

ref,

uploadBytes,

getDownloadURL,

deleteObject

};