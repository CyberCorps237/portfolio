let forms = document.getElementById("contactForm");
let nom = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
const success_message = document.querySelector('.success');


forms.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    validateform();


    
})
// verifier si l'email est valide 
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
// verifier le numerode telephone
function validatePhone(phoneNumber) {
    const regex = /^\+\d{1,3}\s?\d{3,}\s?\d{3,}\s?\d{3,}$/;
    return regex.test(phoneNumber);
}


let set_error = (element1,element2)=>{
    let error = document.querySelector(`.${element1}`);
    let error_border = document.querySelector(`.${element2}`);
    error.style.display='block';
    error.style.color='#b02a37';
    error_border.style.border='2px solid red';
}
let set_success = (element1,element2)=>{
    let error = document.querySelector(`.${element1}`);
    let error_border = document.querySelector(`.${element2}`);
    error.style.display = 'none';
    error_border.style.border='2px solid #09c372';
}



const validateform = () =>{
    let user_name = nom.value.trim();
    let user_email = email.value.trim();
    let user_phone =phone.value.trim();
    let user_message =message.value.trim();
    let nom1 = 'nom_error';
    let nom2 = 'nom';
    let email1 = 'email_error';
    let email2 = 'email';
    let phone1 = 'phone_error';
    let phone2 = 'phone';
    let message1 = 'message_error';
    let message2 = 'message';

    if(user_name === "" || user_name.length<4){
        set_error(nom1,nom2);
    }else{
        set_success(nom1,nom2);
    }
   
    if(user_message === "" || user_message.length<10){
        set_error(message1,message2);
    }else{
        set_success(message1,message2);
        success_message.style.display="block";
        
    }

    if(user_phone === "" || !validatePhone(user_phone)){
        set_error(phone1,phone2);
    }else{
        set_success(phone1,phone2);
    
    }
    if(user_email === "" || !validateEmail(user_email)){
        set_error(email1,email2);
    }else{
        set_success(email1,email2);
    
    }
    

}