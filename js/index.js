var name = document.getElementById('mail');
var pw = document.getElementById('mdp');


localStorage.setItem('name', 'areslane67@gmail.com');
localStorage.setItem('pw', 'password');



function check() {

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var mail = document.getElementById('mail');
    var mdp = document.getElementById('mdp');

   
    if(mail.value !== storedName && mdp.value !== storedPw) {

        error.textContent = 'Mail ou mot de passe incorrecte';
    }else if(mail.value == storedName && mdp.value !== storedPw){
        error.textContent = 'Mot de passe incorrecte';
    }else{
        window.location.assign("acceuil.html")
    }
}