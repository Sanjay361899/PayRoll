import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/DashBoard/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./guard/AuthGuard";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;