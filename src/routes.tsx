import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import GameDetailsPage from "./pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "games/:slug",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
