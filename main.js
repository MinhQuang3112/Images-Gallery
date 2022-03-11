var imgs=document.querySelectorAll('.img-box img')
var gallery=document.querySelector('.gallery')
var exit=document.querySelector('.exit')
var previous=document.querySelector('.previous')
var next=document.querySelector('.next')
var gallery_img=document.querySelector('.gallery-img img')
var currentIndex=0

function showGallery(){
    if(currentIndex==0){
        previous.classList.add('hide')
    }
    else{
        previous.classList.remove('hide')
    }
    if(currentIndex==(imgs.length)-1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }
    gallery_img.src=imgs[currentIndex].src
    gallery.classList.add('show')

}

imgs.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex=index
        showGallery()
    })
})
exit.addEventListener('click',function(){
    gallery.classList.remove('show')

})
document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        gallery.classList.remove('show')
    }
})
previous.addEventListener('click',function(){
    if(currentIndex>0){
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click',function(){
    if(currentIndex<imgs.length){
        currentIndex++
        showGallery()
    }
})