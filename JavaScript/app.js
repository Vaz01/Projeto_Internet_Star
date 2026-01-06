const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = () => {
    dropDownMenu.classList.toggle("open")

    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList.remove("fa-bars", "fa-xmark")
    toggleBtnIcon.classList.add(isOpen ? "fa-xmark" : "fa-bars")
}
