
// const closebtn = document.querySelector('.CBTN')
// const loginbtn = document.querySelector('.login')
// const modal = document.querySelector('.modal')

// console.log("closbtn",closebtn);
// console.log("closbtn",loginbtn);



// function showLogin(){
//     modal.classList.add('open')
// }

// function closelogin(){
//     modal.classList.remove('open')
// }


// if(closebtn){
//     closebtn.addEventListener('click',closelogin)
// }
// else(
//     console.log("closbtn null")
// );
// if(loginbtn){
//     loginbtn.addEventListener('click',showLogin)
// }
// else(
//     console.log("login btn null")
// )

const closebtn = document.querySelector('.CBTN')
const loginbtn = document.querySelector('.login')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modalContainer')


console.log("closbtn", closebtn);
console.log("closbtn", loginbtn);



function showLogin() {
    modal.classList.add('open')
    modalContainer.classList.add('slow')

}

function closelogin() {
    modal.classList.remove('open')
}



closebtn.addEventListener('click', closelogin)
loginbtn.addEventListener('click', showLogin)




function btnReactfb() {
    console.log("Btn react");
    window.location.href='https://www.facebook.com/profile.php?id=61551043467137';
}

function btnReactdc() {
    console.log("Btn react");
    window.location.href='https://discord.gg/kbBtPmVyZX';
}

function signupSuccess(){
    console.log("singupBTN");
    alert("TẠO TÀI KHOẢN THÀNH CÔNG");
    window.location.href='indexmaimenu.html';
}



const detials= document.querySelector('.detialBTN')
const rateting=document.querySelector('.ratetingBTN')
const  detialsCharacter=document.querySelector('.chitiet')
const  previewCharacter=document.querySelector('.characterPreview')


function closeDetials (){
    detialsCharacter.classList.add('close');
    previewCharacter.classList.add('open')
}

function openDetials (){
    detialsCharacter.classList.remove('close');
    previewCharacter.classList.remove('open')
}

rateting.addEventListener('click',closeDetials)
detials.addEventListener('click',openDetials)


/** ranh cak **/

