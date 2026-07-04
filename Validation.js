export function validateEmail(email){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(email);

}

export function validatePhone(phone){

return phone.length>=10;

}