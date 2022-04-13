
// burger icon
const sideBar = document.getElementById('sideBar')

// mobile navigation menu container
const mobileNav = document.getElementById('mobileNav')

// header container
const headerContainer = document.getElementById('headerContainer')

// search button, which is for openning search container
const searchBtn = document.getElementById('searchBtn')

// close button on search container
const close = document.getElementById('close')

// search container
const searchContainer = document.getElementById('searchContainer')


// search container open/close
searchBtn.addEventListener('click', () => {
    searchContainer.classList.add('visible')
})

close.addEventListener('click', () => {
    searchContainer.classList.remove('visible')
})

// animation when you hover on header
headerContainer.addEventListener('mouseover', () => {
    headerContainer.classList.add('hover')
})

headerContainer.addEventListener('mouseleave', () => {
    if (window.scrollY < 100 || mobileNav.classList.contains(!'active')) {
        headerContainer.classList.remove('hover')
    }
})

// animation when you scroll
let lastScrollNumber = 0; // number which is for detecting scrolling direction

document.addEventListener('scroll', () => {

    if (window.scrollY > lastScrollNumber) {
        // scrolling down
        if (window.scrollY > 100) {
            headerContainer.style.position = 'fixed'
            headerContainer.style.top = '-100%'
        }
        headerContainer.classList.remove('fixed')
        headerContainer.classList.remove('hover')
    } else {
        // scrolling up
        if (window.scrollY > 100) {
            headerContainer.style.position = 'fixed'
            headerContainer.style.top = '0'
        }
        headerContainer.classList.add('fixed')
        headerContainer.classList.add('hover')
    }
    lastScrollNumber = window.scrollY

    if (window.scrollY < 100) {
        headerContainer.classList.remove('fixed')
        headerContainer.classList.remove('hover')
    }
})

// burger icon functionality
sideBar.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
    sideBar.classList.toggle('animate')
})

// if you open mobile navigation menu and then resize window, that navigation should be closed
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active')
        sideBar.classList.remove('animate')
    }
})
