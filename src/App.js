import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/DashBoard/Home";
import Login from "./pages/Authentication/Login";
import { AuthProvider } from "./guard/AuthGuard";
import SignUp from "./pages/Authentication/SignUp";
import DetailHome from "./pages/DashBoard/DetailHome";
import Profiles from "./pages/DashBoard/Profiles";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
            <Route element={<DetailHome />} path="/details" />
            <Route element={<Profiles />} path="/profile" />
            <Route element={<SignUp />} path="/signup" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
