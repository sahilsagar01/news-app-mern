import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { authProtectedRoutes, publicRoutes } from "./routes";

function App() {
  const getUser = () => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          {authProtectedRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={
                getUser() ? <route.component /> : <Navigate to="/login" />
              }
              key={"auth" + index}
              exact={route.exact}
            />
          ))}
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.component />}
                key={"public" + index}
                exact={route.exact}
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
