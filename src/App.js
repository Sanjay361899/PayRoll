import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/DashBoard/Home";
import Login from "./pages/Authentication/Login";
import { AuthProvider } from "./guard/AuthGuard";
import DetailHome from "./pages/DashBoard/DetailHome";
import Profiles from "./pages/DashBoard/Profiles";
import AddMember from "./pages/DashBoard/AddMember";
import NotFound from "./component/NotFound/NotFound";
import EditMember from "./pages/DashBoard/EditMember";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
            <Route element={<DetailHome />} path="/details" />
            <Route element={<Profiles />} path="/profile" />
            <Route element={<AddMember />} path="/signup" />
            <Route element={<EditMember />} path="/edit/:id" />
          </Route>
          <Route element={<Login/>} path="/login" />
          <Route element={<NotFound/>} path="*"/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
