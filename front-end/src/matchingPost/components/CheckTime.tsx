export default function CheckTime(time: string): boolean {
  const splitedTime = split(time);
  return check(splitedTime);
}

function split(time: string): Array<string> {
  return time.split(":");
}

function check(time: Array<string>): boolean {
  const today: Date = new Date();
  const targetHours: number = parseInt(time[0]);
  const targetMinutes: number = parseInt(time[1]);

  if (targetHours < today.getHours()) {
    alert("현재 시간보다 이후의 시간을 선택해주세요.");
    return false;
  }
  if (targetHours <= today.getHours() && targetMinutes <= today.getMinutes()) {
    alert("현재 시간보다 이후의 시간을 선택해주세요.");
    return false;
  }
  return true;
}
