import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Header from "./Components/Header";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
