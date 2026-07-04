/* =====================================
   Presenter Ziro CMS
===================================== */

document.addEventListener("DOMContentLoaded",()=>{

initializeSidebar();

initializeDashboard();

initializeHomepage();

initializeAbout();

initializeContact();

initializeSocial();

});

/* ===========================
Sidebar Navigation
=========================== */

function initializeSidebar(){

const menus=document.querySelectorAll(".sidebar li");

const pages=document.querySelectorAll(".page");

menus.forEach(menu=>{

menu.addEventListener("click",()=>{

menus.forEach(item=>item.classList.remove("active"));

menu.classList.add("active");

const target=menu.dataset.page;

pages.forEach(page=>{

page.classList.remove("active");

});

const selected=document.getElementById(target);

if(selected){

selected.classList.add("active");

}

});

});

}

/* ===========================
Dashboard
=========================== */

function initializeDashboard(){

document.getElementById("totalVisitors").innerHTML=1248;

document.getElementById("totalBookings").innerHTML=32;

document.getElementById("totalFeedback").innerHTML=19;

document.getElementById("totalPodcast").innerHTML=5;

}
/* ===========================
Homepage
=========================== */

function initializeHomepage(){

const button=document.getElementById("saveHomepage");

if(!button) return;

button.onclick=function(){

const data={

title:document.getElementById("heroTitle").value,

slogan:document.getElementById("heroSlogan").value,

description:document.getElementById("heroDescription").value

};

localStorage.setItem(

"homepage",

JSON.stringify(data)

);

alert("Homepage Saved");

};

}

/* ===========================
About
=========================== */

function initializeAbout(){

const button=document.getElementById("saveAbout");

if(!button) return;

button.onclick=function(){

const about={

name:document.getElementById("aboutName").value,

slogan:document.getElementById("aboutSlogan").value,

bio:document.getElementById("aboutBio").value

};

localStorage.setItem(

"about",

JSON.stringify(about)

);

alert("About Updated");

};

}

/* ===========================
Contact
=========================== */

function initializeContact(){

const button=document.getElementById("saveContact");

if(!button) return;

button.onclick=function(){

const contact={

email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

phone2:document.getElementById("phone2").value,

city:document.getElementById("city").value

};

localStorage.setItem(

"contact",

JSON.stringify(contact)

);

alert("Contact Updated");

};

}
/* ===========================
Social Media
=========================== */

function initializeSocial(){

const button=document.getElementById("saveSocial");

if(!button) return;

button.onclick=function(){

const social={

youtube:document.getElementById("youtube").value,

facebook:document.getElementById("facebook").value,

instagram:document.getElementById("instagram").value,

tiktok:document.getElementById("tiktok").value

};

localStorage.setItem(

"social",

JSON.stringify(social)

);

alert("Social Links Saved");

};

}

/* ===========================
Gallery Upload
=========================== */

const gallery=document.getElementById("galleryUpload");

if(gallery){

gallery.addEventListener("change",function(){

const preview=document.querySelector(".gallery-preview");

preview.innerHTML="";

Array.from(this.files).forEach(file=>{

const reader=new FileReader();

reader.onload=function(e){

const img=document.createElement("img");

img.src=e.target.result;

preview.appendChild(img);

};

reader.readAsDataURL(file);

});

});

}
/* ===========================
Events
=========================== */

const saveEvent=document.getElementById("saveEvent");

if(saveEvent){

saveEvent.onclick=function(){

alert("Event Created Successfully");

};

}

/* ===========================
Podcast
=========================== */

const podcast=document.getElementById("publishPodcast");

if(podcast){

podcast.onclick=function(){

alert("Podcast Published");

};

}

/* ===========================
Firebase Connection
=========================== */

const connect=document.getElementById("connectFirebase");

if(connect){

connect.onclick=function(){

document.getElementById("authStatus").innerHTML="Connected";

document.getElementById("dbStatus").innerHTML="Connected";

document.getElementById("storageStatus").innerHTML="Connected";

alert("Firebase Connected");

};

}

/* ===========================
CMS Loaded
=========================== */

console.log("Presenter Ziro CMS Ready");