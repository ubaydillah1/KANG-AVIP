import InputForm from "../elements/Input/index.jsx";
import Button from "../elements/Button/Button.jsx";

const FormLogin = () => {
  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/products";
  }

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*******"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
