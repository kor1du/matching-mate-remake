export default function GetAddress(data: any): string {
  let fullAddress: string = data.address;
  let extraAddress = "";

  if (data.addressType === "R") {
    if (data.bname !== "") {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  }

  return fullAddress;
}

export function GetAddressNewPost(data: any): string {
  const splitedAddress: string[] = data.jibunAddress.split(" ");
  let address: string = "";
  for (let i = 0; i < splitedAddress.length - 1; i++) {
    address += splitedAddress[i] + " ";
  }
  return address;
}
