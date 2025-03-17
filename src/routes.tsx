import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./components/GameDetails/GameDetails";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";

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
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
