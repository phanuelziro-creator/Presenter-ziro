import app from "./firebase.js";

import {

getFirestore,

collection,

addDoc,

getDocs,

doc,

updateDoc,

deleteDoc

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const db=getFirestore(app);

export {

db,

collection,

addDoc,

getDocs,

doc,

updateDoc,

deleteDoc

};