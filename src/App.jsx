import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Minliste from "./pages/minliste";
import Ophold from "./pages/Ophold";
import Aktiviter from "./pages/Aktiviter";
import Backoffice from "./pages/Backoffice";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import InfoStay from "./pages/InfoStay";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/protectedRoute.jsx/ProtectedRoute";
import LoginForm from "./components/login/Login";
import { ToastContainer } from "react-toastify";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/minliste", element: <Minliste /> },
    { path: "/contact", element: <Contact /> },
    { path: "/ophold", element: <Ophold /> },
    { path: "/login", element: <LoginForm /> },
    { path: "/aktiviter", element: <Aktiviter /> },
    { 
      path: "/backoffice", 
      element: (
        <ProtectedRoute requiredRole='admin'>
      <Backoffice /> 
      </ProtectedRoute>
      ),
    },
    { path: "/infostay/:id", element: <InfoStay /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer />
    </div>
  );
}

export default App;
