import Button from "../Elements/Button";
import InputForm from "../Elements/Inputs";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        name="fullname"
        placeholder="insert your name here ..."
        type="text"
      />
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
      <InputForm
        label="Password"
        name="confirmPassword"
        placeholder="********"
        type="password"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
