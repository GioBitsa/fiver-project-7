const sideBar = document.getElementById('sideBar')
const mobileNav = document.getElementById('mobileNav')
const headerContainer = document.getElementById('headerContainer')
const searchBtn = document.getElementById('searchBtn')
const close = document.getElementById('close')
const searchContainer = document.getElementById('searchContainer')

searchBtn.addEventListener('click', () => {
    searchContainer.classList.add('visible')
})

close.addEventListener('click', () => {
    searchContainer.classList.remove('visible')
})

headerContainer.addEventListener('mouseover', () => {
    headerContainer.classList.add('hover')
})

headerContainer.addEventListener('mouseleave', () => {
    if (window.scrollY < 100 || mobileNav.classList.contains(!'active')) {
        headerContainer.classList.remove('hover')
    }
})

document.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        headerContainer.classList.add('fixed')
        headerContainer.classList.add('hover')
    } else if (window.scrollY < 100 || mobileNav.classList.contains(!'active')) {
        headerContainer.classList.remove('fixed')
        headerContainer.classList.remove('hover')
    }
})

sideBar.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
    sideBar.classList.toggle('animate')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active')
        sideBar.classList.remove('animate')
    }
})
