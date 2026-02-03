import { Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import ItemsPage from "./pages/ItemsPage";
import CategoriesPage from "./pages/CategoriesPage";
import LogsPage from "./pages/LogsPage";

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/restaurantes/:id" element={<RestaurantPage />} />
      <Route path="/itens" element={<ItemsPage />} />
      <Route path="/categorias" element={<CategoriesPage />} />
      <Route path="/logs" element={<LogsPage />} />
    </Route>
  </Routes>
);

export default App;
