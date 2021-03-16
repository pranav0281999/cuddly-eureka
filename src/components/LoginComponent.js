import Input from "./Input.js";

function LoginComponent(props) {
  return (
    <div id={"div-login-details-inner"}>
      <div className={"full-width"}>
        <p className={"p-login-details-header"}>Login</p>
      </div>
      <div className={"full-width"}>
        <div className={"full-width"}>
          <div className={"full-width"}>
            <p className={"p-login-input-label"}>Email</p>
          </div>
          <div className={"full-width"}>
            <Input type={"text"}/>
          </div>
        </div>
        <div className={"full-width"}>
          <div className={"full-width"}>
            <p className={"p-login-input-label"}>Password</p>
          </div>
          <div className={"full-width"}>
            <Input type={"password"}/>
          </div>
        </div>
        <div className={"full-width"}>
          <p className={"p-login-forget-password"}>Forgot Password?</p>
        </div>
      </div>
      <div className={"full-width"} id={"div-login-register"}>
        <div className={"display-flex"}>
          <p id={"p-login-register"}>New Here? Register</p>
        </div>
        <div className={"div-button"}>
          <p className={"p-button-text"}>Login</p>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
