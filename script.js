const button = document.querySelector('button.btn-click')
const container = document.querySelector('div.container')

button.addEventListener('click',() => {
    container.style.visibility = 'visible'
    console.log('clicked')
})


container.addEventListener('click',(e) => {
    // container.style.visibility = 'hidden'
    if(e.target.className == "container" || e.target.className == 'cross'){
        container.style.visibility = 'hidden'
    }
})