import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import CollapsibleExample from "./Components/Navbar";

function App() {
  return (
    <>
      <CollapsibleExample />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
