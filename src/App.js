import './App.css';
import logo from "./resources/logo-light 1.svg";
import toggle from "./resources/toggle-off.svg";
import saly1 from "./resources/Saly-1.svg";
import saly14 from "./resources/Saly-14.svg";
import LoginComponent from "./components/LoginComponent.js";
import Background from "./components/Background";

function App() {
  return (
    <Background>
      <div className={"div-background-child"}>
        <div className={"div-header"}>
          <div className={"div-img-logo"}>
            <img src={logo} alt={"Company Logo"} id={"img-logo"}/>
          </div>
          <div className={"div-toggle-button"}>
            <img src={toggle} alt={"Toggle Button"} id={"img-toggle"}/>
          </div>
        </div>
        <div id={"div-login-details"}>
          <LoginComponent/>
        </div>
        <div id={"div-img-saly1"}>
          <img src={saly1} alt={"Background"}/>
        </div>
        <div id={"div-img-saly14"}>
          <img src={saly14} alt={"Background"}/>
        </div>
      </div>
    </Background>
  );
}

export default App;
