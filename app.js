const wrapper=document.querySelector('.wrapper');
generateBtn=wrapper.querySelector('.form button');
qrInput=wrapper.querySelector('.form input');
qrImg=wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click',()=>{
    //wrapper.classList.add('active')
    let qrValue=qrInput.value;
    //console.log(qrValue)
    if(!qrValue) return;
    generateBtn.innerText="Generatin Qr Code..."
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load',()=>{
        wrapper.classList.add('active');
        generateBtn.innerText="Generate Qr Code";
    })

});
qrInput.addEventListener('keyup',()=>{
    if(!qrInput.value){
        wrapper.classList.remove('active')
    }
});

//register service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then((reg)=>{console.log('sw registered',reg)})
    .catch((err)=>{console.log('sw not registered',err)})
}