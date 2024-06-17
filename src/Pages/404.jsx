import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-3xl">
      <h1 className="font-bold text-blue-600">OOps</h1>
      <p>Sorry an unexpacted error occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
