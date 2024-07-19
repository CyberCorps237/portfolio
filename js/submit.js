let forms = document.getElementById("contactForm");
let nom = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
const erreur = document.querySelector('.erreur');


forms.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    validateform();

    
})

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

    if(user_name === "" || user_name.length<4){
        set_error(nom1,nom2);
    }else{
        set_success(nom1,nom2);
    }

    if(user_email === "" || user_email.length<4){
        set_error(email1,email2);
    }else{
        set_success(email1,email2);
    
    }
    

}