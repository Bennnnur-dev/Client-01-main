const extButton = document.getElementById("exit-sidebar")
const sidebar = document.getElementById("sidebar")
const sidebarButton = document.getElementById("sidebar-button")

extButton.addEventListener("click", () => {
    sidebar.style.display = "none"
})

sidebarButton.addEventListener("click", () => {
    sidebar.style.display = "flex"
})