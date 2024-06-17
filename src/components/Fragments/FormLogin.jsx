import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Inputs";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="********"
        type="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
