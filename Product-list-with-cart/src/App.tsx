import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsPage />}>
          <Route path="cartDetails" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
