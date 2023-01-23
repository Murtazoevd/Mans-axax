let lefteye = document.querySelectorAll('#lefteye')
let righteye = document.querySelectorAll('#righteye')
const head = document.querySelector('#head')

head.addEventListener('mousemove',(event)=>{
    head.forEach(item =>{
      item.style.left = event.pageX + "px"
      item.style.right = event.pageX + "px"
      item.style.top = event.pageY + "px"
      item.style.bottom = event.pageY + "px"
    });
})