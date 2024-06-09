/* eslint-disable react/prop-types */
import React from "react";
import Button from "./components/Elements/Button/Button";

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
