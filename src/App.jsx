import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavBar from "./components/MyNavBar";
import Galleria from "./components/Gallerie";
import MyFooter from "./components/MyFooter";
import GenereBtn from "./components/GenereBtn";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App bg-body-tertiary " bg="dark" data-bs-theme="dark">
      <Container>
        <MyNavBar />
        <GenereBtn />
        <Galleria />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
