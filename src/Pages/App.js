import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import AuthProvider from "../Components/AuthProvider";
import PublicRoute from "../shared/components/PublicRoute";
import PrivateRoute from "../shared/components/PrivateRoute";

const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const UserPage = lazy(() => import("./UserPage/UserPage"));

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/private" element={<UserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
