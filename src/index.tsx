import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom/client";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./HomePage";
import Market from "./pages/market";
import Tokenomic from "./pages/Tokenomic";
import Airdrop from "./pages/Airdrop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tokenomic" element={<Tokenomic />} />
      <Route path="/airdrop" element={<Airdrop />} />
      <Route path="/market" element={<Market />} />
    </Routes>
  </Router>
);
reportWebVitals();
