import { Outlet } from "react-router-dom";
import MAINLOGO from "./../../images/main_logo.png";
import BOTTOMLOGO from "./../../images/bottom_logo.png";
export default function Layout1() {
  return (
    <div className="max-w-md mx-auto min-h-full layout1 flex flex-col items-center justify-around">
      <div className="mx-auto w-36 p-4">
        <img src={MAINLOGO} alt="logo" />
      </div>
      <Outlet />
      <div className="mx-auto w-full">
        <img src={BOTTOMLOGO} alt="logo" />
      </div>
    </div>
  );
}
