import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Inputs";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // kemarin
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/product";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        placeholder="username"
        type="text"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="********"
        type="password"
      />
      {loginFailed && (
        <p className="text-red-500 text-center my-5">{loginFailed}</p>
      )}
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
