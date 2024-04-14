import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import { Root } from "./components";

// pages
import {
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./pages";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "video/:id",
        element: <VideoDetail />,
      },
      {
        path: "channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);

// App component
export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
