const toggle = document.querySelector('.toggle');
const mode = document.querySelector('.switch');
 
toggle.onclick = () => {
    mode.classList.toggle('active')
    document.body.classList.toggle('dark')
}