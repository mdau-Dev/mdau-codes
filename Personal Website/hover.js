

const wrapperGeneral=document.querySelector('.wrapperGeneral');
wrapperGeneral.classList.add("lessHeight")
window.addEventListener('load',()=>{
    const loader=document.querySelector('.loaderWrapper');

    setTimeout(()=>{
        loader.classList.add('hide');
        wrapperGeneral.classList.remove("lessHeight")
    },2000)
})



console.log('Mdau')
const imageParent=document.querySelector('.bigger');
const image=document.querySelector('.myImage');
imageParent.addEventListener('mouseover',(e)=>{
    image.src=`url(${image/smile.jpg})`;
})

//     const serviceCardWrapper= document.querySelector('.wrapServices')
//     serviceCardWrapper.classList.remove('playAnimation');
// setInterval(()=>{
//     serviceCardWrapper.classList.add('playAnimation');
// },2000)

// const input=document.querySelectorAll('input,textarea');
// input.forEach(input=>{
//     input.addEventListener('hover',()=>{
//             input.style.border='.1px solid red'
//     })
// })

// function sendEmailMessage(e){
//     e.preventDefault();
//     const button= document.querySelector('.sendEmail');
//     const nameInput=document.querySelector('.name_input');
//     const emailInput=document.querySelector('.email_input');
//     const messageInput=document.querySelector('.messo_input');

//     Email.send({
        
//         host: 
//     })
// }