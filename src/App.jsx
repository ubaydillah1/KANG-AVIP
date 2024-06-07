/* eslint-disable react/prop-types */
import React from "react";

const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center bg-blue-600 min-h-screen gap-x-4">
      <Button variant="bg-red-700">Login</Button>
      <Button variant="bg-slate-700">Logout</Button>
      <Button />
    </div>
  );
}

export default App;
