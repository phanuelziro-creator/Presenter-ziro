export function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},300);

},3000);

}

export function formatDate(date){

return new Date(date).toLocaleDateString();

}

export function scrollTop(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
