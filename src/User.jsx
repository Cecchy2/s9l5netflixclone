import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavBar from "./components/MyNavBar";

function User() {
  return (
    <div className="App bg-body-tertiary " bg="dark" data-bs-theme="dark">
      <MyNavBar />
    </div>
  );
}

export default User;
