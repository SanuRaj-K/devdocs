import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Projects } from "./pages/profile";
import { Login } from "./pages/registration/Login";

function App() {
  return (
    <div className="App scroll-smooth">
      <main className=" ">
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/projects" index element={<Projects />} />

          <Route path="/home" index element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
