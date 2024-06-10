import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center  min-h-screen gap-x-4 flex-col">
      <h1 className="font-bold text-3xl">Page Not Found</h1>
      <p className="my-5 text-xl">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
