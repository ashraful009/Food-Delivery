import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Profile from "./components/Auth/Login/UserProfile.jsx";
import AuthPage from "./pages/Auth/AuthPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
