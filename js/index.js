const mainNav = document.querySelector('.main-navigation')
const navh1 = mainNav.querySelector('.nav-container')

mainNav.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let coor = 'Coordinates: (' + x + ',' + y + ')';
    navh1.querySelector('h1').innerHTML = coor;
})

document.addEventListener('click', (event) => {
    navh1.querySelector('h1').textContent = 'Fun Bus'
})



const navBar = document.querySelector('.nav')

document.addEventListener('keydown', function(event) {
    if(event.key === 'c'){
        navBar.style.display = 'flex'
        navBar.style.alignItems = 'center'
    }
})



const links = document.querySelectorAll('a')

document.addEventListener('keydown', function(event) {
    if(event.key === 'h'){
        links[0].style.color = 'red'
        links[0].textContent = `You're Home`
    } else if(event.key === 'a'){
        links[1].style.color = 'green'
        links[1].textContent = 'About ME'
    } else if(event.key === 'b'){
        links[2].style.color = 'blue'
        links[2].textContent = 'Nah'
    } else if(event.key === 'c'){
        links[3].style.color = 'orange'
        links[3].innerHTML = 'Leave <br> Me <br> Alone'
        links[3].style.textAlign = 'center'
    }
})

document.addEventListener('keyup', function(event) {
    if(event.key === 'h'){
        links[0].style.color = 'black'
        links[0].textContent = `Home`
    } else if(event.key === 'a'){
        links[1].style.color = 'black'
        links[1].textContent = 'About'
    } else if(event.key === 'b'){
        links[2].style.color = 'black'
        links[2].textContent = 'Blog'
    } else if(event.key === 'c'){
        links[3].style.color = 'black'
        links[3].textContent = 'Contact'
    }
})



const picture = document.querySelectorAll('img')

picture[0].addEventListener('click', function(event) {
    picture[0].style.border = '2px dashed black'
})

picture[1].addEventListener('click', function(event) {
    picture[1].style.border = '2px dashed black'
})

picture[2].addEventListener('click', function(event) {
    picture[2].style.border = '2px dashed black'
})

picture[3].addEventListener('click', function(event) {
    picture[3].style.border = '2px dashed black'
})

picture[0].addEventListener('mouseenter', function(event) {
    picture[0].style.opacity = '50%'
})
picture[0].addEventListener('mouseleave', function(event) {
    picture[0].style.opacity = '100%'
    picture[0].style.border = 'none'
})

picture[1].addEventListener('mouseenter', function(event) {
    picture[1].style.opacity = '50%'
})
picture[1].addEventListener('mouseleave', function(event) {
    picture[1].style.opacity = '100%'
    picture[1].style.border = 'none'
})

picture[2].addEventListener('mouseenter', function(event) {
    picture[2].style.opacity = '50%'
})
picture[2].addEventListener('mouseleave', function(event) {
    picture[2].style.opacity = '100%'
    picture[2].style.border = 'none'
})

picture[3].addEventListener('mouseenter', function(event) {
    picture[3].style.opacity = '50%'
})
picture[3].addEventListener('mouseleave', function(event) {
    picture[3].style.opacity = '100%'
    picture[3].style.border = 'none'
})



const intro = document.querySelector('.intro')
const introP = intro.querySelector('p')

introP.addEventListener('dblclick', (event) => {
    introP.textContent = 'You have found the secret text. Congratulations on your victory.'
})



const buttons = document.querySelectorAll('.btn')

buttons[0].addEventListener('contextmenu', (event) => {
    buttons[0].textContent = 'STOP!!!'
})

buttons[0].addEventListener('click', (event) => {
    buttons[0].textContent = 'Sign Me Up!'
})

buttons[2].addEventListener('contextmenu', (event) => {
    buttons[2].textContent = 'PLEASE!!!'
})

buttons[2].addEventListener('click', (event) => {
    buttons[2].textContent = 'Sign Me Up!'
})



const footer = document.querySelector('footer')

footer.addEventListener('mouseover', (event) => {
    footer.style.backgroundColor = '#15A3B8'
})

document.addEventListener('click', (event) => {
    footer.style.backgroundColor = '#FFECCC'
})