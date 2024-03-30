import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlantasPage } from "../../presentation/pages/PlantasPage";
import { RemediosPage } from "../../presentation/pages/RemediosPage";

import { HomePage } from "../../presentation/pages/HomePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="plantas" element={<PlantasPage />} />
        <Route path="remedios" element={<RemediosPage />} />
      </Routes>
    </BrowserRouter>
  );
};
