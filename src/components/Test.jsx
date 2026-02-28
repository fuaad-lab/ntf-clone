import { useRecoilValue } from "recoil";
import { modalState } from "../atom/Atom";

const Test = () => {
  const value = useRecoilValue(modalState);
  return <div>Modal state: {value.toString()}</div>;
};

export default Test;
