import "./App.css";
import { Projects } from "./pages/profile";
import { Login } from "./pages/registration/Login";

function App() {
  return (
    <div className="App">
      <main className=" ">
        {/* <Login /> */}
        <Projects />
      </main>
    </div>
  );
}

export default App;
