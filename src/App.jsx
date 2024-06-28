import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavBar from "./components/MyNavBar";
import Galleria from "./components/Gallerie";

function App() {
  return (
    <div className="App bg-body-tertiary " bg="dark" data-bs-theme="dark">
      <MyNavBar />
      <Galleria />
    </div>
  );
}

export default App;
