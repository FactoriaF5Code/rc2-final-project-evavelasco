import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "../../presentation/components/Header/Header";
import { HomePage } from "../../presentation/pages/HomePage";
import { PlantasPage } from "../../presentation/pages/PlantasPage";
import { RemediosPage } from "../../presentation/pages/RemediosPage";

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
