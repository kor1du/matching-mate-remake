export default function ShowMenus(): void {
  toggleMenus();
}

function toggleMenus(): void {
  document.querySelector(".menus")?.classList.toggle("active");
}
