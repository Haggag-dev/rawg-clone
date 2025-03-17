import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="dark:text-white mt-4 ml-2.5">
      <h1 className="text-4xl font-bold mb-3">Oops</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist :("
          : "An unexpected error has occured"}
      </p>
    </div>
  );
};

export default ErrorPage;
