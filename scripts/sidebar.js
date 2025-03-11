const extButton = document.getElementById("exit-sidebar")
const sidebar = document.getElementById("sidebar")
const sidebarButton = document.getElementById("sidebar-button")

extButton.addEventListener("click", () => {
    sidebar.style.transform = "translateX(200vw)"
})

sidebarButton.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0)"
})