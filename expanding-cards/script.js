const panels = document.querySelectorAll('.panel')

panels.forEach((item) => {
    item.addEventListener('click', (e) => {
        removeActiveClass()        
        item.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}