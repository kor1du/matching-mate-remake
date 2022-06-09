export default function ShowPage(target: string): void {
  hideBtn(target);
}

function hideBtn(target: string): void {
  const targetClass: any = document.querySelector(target);

  setTimeout(() => {
    targetClass.classList.toggle("active");
  }, 500);
}
