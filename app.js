const toggles = document.querySelectorAll('button');

toggles.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})