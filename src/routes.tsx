import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GameDetailsPage from "./components/GameDetailsPage/GameDetailsPage";
import MainPage from "./components/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "games/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
