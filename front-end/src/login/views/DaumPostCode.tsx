import { Dispatch, SetStateAction } from "react";
import DaumPostcode from "react-daum-postcode";
import GetAddress from "../components/GetAddress";
import { User } from "./SignupPage";

interface DaumPostCodeProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const DaumPostCode: React.FC<DaumPostCodeProps> = ({
  user,
  setUser,
  setShow,
}) => {
  return (
    <div>
      <DaumPostcode
        className="modal-daum-post-code"
        onComplete={(e) => {
          setUser({
            ...user,
            address: GetAddress(e),
          });
          setShow(false);
        }}
      />
    </div>
  );
};

export default DaumPostCode;
