import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="dark:text-white">
      <NavBar />
      <div className="mt-3 ml-5 text-red-500">
        <h1 className="text-5xl font-bold mb-3">Oops</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist :("
            : "An unexpected error has occured :("}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
