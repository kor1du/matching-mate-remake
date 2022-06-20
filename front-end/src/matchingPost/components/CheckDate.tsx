export default function CheckDate(date: string): boolean {
  const splitedDate = split(date);
  return check(splitedDate);
}

function split(date: string): Array<string> {
  return date.split("-");
}

function check(date: Array<string>): boolean {
  const splitedYear: number = parseInt(date[0]);
  const splitedMonth: number = parseInt(date[1]);
  const splitedDate: number = parseInt(date[2]);

  const today = new Date();

  if (splitedYear < today.getFullYear()) {
    alert("현재 날짜보다 이전 날짜는 선택하실 수 없습니다.");
    return false;
  }
  if (splitedMonth < today.getMonth() + 1) {
    alert("현재 날짜보다 이전 날짜는 선택하실 수 없습니다.");
    return false;
  }
  if (splitedMonth <= today.getMonth() + 1 && splitedDate < today.getDate()) {
    alert("현재 날짜보다 이전 날짜는 선택하실 수 없습니다.");
    return false;
  }
  return true;
}
