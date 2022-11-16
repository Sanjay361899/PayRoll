import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/DashBoard/homepage/Home";
import Login from "./pages/Authentication/Login";
import { AuthProvider } from "./guard/AuthGuard";
import SignUp from "./pages/Authentication/SignUp";
import DetailHome from "./pages/DashBoard/homepage/DetailHome";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
            <Route element={<DetailHome />} path="/details" />
          </Route>
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;