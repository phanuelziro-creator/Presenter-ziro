import app from "./firebase.js";

import {

getAuth,

signInWithEmailAndPassword,

signOut,

onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const auth=getAuth(app);

export async function login(email,password){

return signInWithEmailAndPassword(

auth,

email,

password

);

}

export function logout(){

return signOut(auth);

}

export function currentUser(callback){

onAuthStateChanged(auth,user=>{

callback(user);

});

}

export {auth};