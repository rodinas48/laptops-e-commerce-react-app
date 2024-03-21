import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <About />
              <Services />
            </>
          }
        ></Route>
        <Route path="shop" element={<ProductsList />}></Route>
        <Route path="/details/:productId" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
