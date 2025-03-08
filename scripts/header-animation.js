const header = document.getElementById('header-nav')
const topMarker = document.querySelector('.hero-section-title-bg')
const background = document.getElementById('header-background')
const serviceButton = document.getElementById('service-tab')
const scrollTab = document.getElementById('scroll-tab')

document.addEventListener('DOMContentLoaded', checkDistance)
document.addEventListener('scroll', checkDistance)

function checkDistance(){
    const markerY = Math.round(topMarker.getBoundingClientRect().y)
    const headerY = Math.round(header.getBoundingClientRect().y)

    if (headerY - markerY > -10) return background.style.transform = 'translateY(0vw)'
    background.style.transform = 'translateY(-200%)'
}

serviceButton.addEventListener('hover', () => {
    scrollTab.style.display = 'flex'
    console.log('z')
})