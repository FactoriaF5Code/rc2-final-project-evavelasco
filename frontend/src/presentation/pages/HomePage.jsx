import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
