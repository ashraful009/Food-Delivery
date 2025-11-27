import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

    </>
  );
}

export default App;