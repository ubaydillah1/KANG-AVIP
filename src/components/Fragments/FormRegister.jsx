import InputForm from "../elements/Input/index.jsx";
import Button from "../elements/Button/Button.jsx";

const FormRegister = () => {
  return (
    <form action="" method="post">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="insert yout name here..."
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*******"
      />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
