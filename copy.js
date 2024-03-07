// const bar =document.getElementById('bar'); 
// const nav =document.getElementById('navbar');  
// const close =document.getElementById('close'); 

// if (bar) { 
//     bar.addEventListener('click' , function()  {
//             nav.classList.add('active');
//         })
    
// }

// if (close) { 
//     close.addEventListener('click' ,() => { 
//         nav.classList.remove('active');
//     })
    
// } 
document.addEventListener('DOMContentLoaded', function () {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

    if (close) {
        close.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    }
});
