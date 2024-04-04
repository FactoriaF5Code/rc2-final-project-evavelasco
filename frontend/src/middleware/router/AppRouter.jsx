import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlantasPage } from "../../presentation/pages/PlantasPage";
import { RemediosPage } from "../../presentation/pages/RemediosPage";
import { Header } from "../../presentation/components/Header/Header";
import { HomePage } from "../../presentation/pages/HomePage";
import { Outlet } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plantas" element={<PlantasPage />} />
        <Route path="/remedios" element={<RemediosPage />} />
      </Routes>
    </BrowserRouter>
  );
};
