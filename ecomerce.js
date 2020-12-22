console.log('welcome to our E-comerce');

// Email validation 
let subcripForm = document.getElementById('subcripForm');
let subMail = document.getElementById('subMail');

subFuncSubmit = (e)=>{
    e.preventDefault();
    if (subMail.innerHTML === ' ' || subMail.innerHTML.includes('@')) {
        alert('please enter valid email ')
    }
}

// log in and signup event 
loginFuc = () => {
    console.log('click lo in')
    alert('Thank you for log in ');
}
signUpFuc = () => {
    alert('Thank you signing up with us ');
}

// shopNow 

shopNow = ()=> {
    alert('redirect to another page');
}
orderNow = ()=> {
    alert('redirect to Order page');
}