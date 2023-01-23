let eye = document.querySelectorAll('.eye')
// let righteye = document.querySelectorAll('.eye')
const head = document.querySelector('.head')

head.addEventListener('mousemove',(event)=>{
    eye.forEach(item =>{
      item.style.left = event.pageX + "px"
      item.style.right = event.pageX + "px"
      item.style.top = event.pageY + "px"
      item.style.bottom = event.pageY + "px"
    });
})