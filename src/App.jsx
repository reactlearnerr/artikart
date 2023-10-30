import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import CategoryHeader from "./components/CategoryHeader";
import Homepage from "./components/Homepage";
import FeatueredProducts from "./components/FeatueredProducts";

function App() {
  return (
    <>
      <Header />
      <MobileHeader />
      <CategoryHeader />
      <Homepage />
      <FeatueredProducts />
    </>
  );
}

export default App;
