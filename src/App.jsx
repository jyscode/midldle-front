import { Outlet } from "react-router-dom";
import BottomNavBar from "./components/bottom-navigation-bar";
import axios from "axios";

export default function App() {
  axios.defaults.withCredentials = true;

  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
}
