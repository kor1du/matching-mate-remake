export default function ToggleActive(): void {
  toggle();
}

function toggle(): void {
  const left = document.querySelector(".chatting-room .left");
  const right = document.querySelector(".chatting-room .right");

  left?.classList.toggle("active");
  right?.classList.toggle("active");
}
