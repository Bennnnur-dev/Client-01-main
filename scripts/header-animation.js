const header = document.getElementById('header-nav')
const topMarker = document.getElementById('hero-section-title-bg')
const background = document.getElementById('header-background')

document.addEventListener('DOMContentLoaded', checkDistance)
document.addEventListener('scroll', checkDistance)

function checkDistance(){
    const markerY = Math.round(topMarker.getBoundingClientRect().y)
    const headerY = Math.round(header.getBoundingClientRect().y)

    if (headerY - markerY > -10) return background.style.transform = 'translateY(0vw)'
    background.style.transform = 'translateY(-200%)'
}