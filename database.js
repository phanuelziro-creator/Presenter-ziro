import {

db,

collection,

addDoc,

getDocs,

doc,

updateDoc,

deleteDoc

}

from "./firestore.js";

export async function save(collectionName,data){

return await addDoc(

collection(db,collectionName),

data

);

}

export async function fetch(collectionName){

return await getDocs(

collection(db,collectionName)

);

}

export async function update(collectionName,id,data){

return await updateDoc(

doc(db,collectionName,id),

data

);

}

export async function remove(collectionName,id){

return await deleteDoc(

doc(db,collectionName,id)

);

}