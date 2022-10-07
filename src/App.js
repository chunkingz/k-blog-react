import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

const MyRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/blogs/:id", element: <BlogDetails /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <MyRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
