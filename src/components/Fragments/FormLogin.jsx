import Button from "../Elements/Button";
import InputForm from "../Elements/Inputs";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="********"
        type="password"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
