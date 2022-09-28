const userNameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('spanActive')
}
userNameInput.addEventListener('focus' ,  handleFocus)

passwordInput.addEventListener('click' , ()=> console.log('clicou em senha'))
