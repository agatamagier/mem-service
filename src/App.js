import "./App.css";
import { RegularPage } from "./pages/RegularPage";
import { HotPage } from "./pages/HotPage";
import { ErrorPage } from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AddMem } from "./pages/AddMem";
import { FooterComponent } from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/regular" element={<RegularPage />} />
            <Route path="/" element={<RegularPage />} />
            <Route path="/hot" element={<HotPage />} />
            <Route path="/add" element={<AddMem />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
