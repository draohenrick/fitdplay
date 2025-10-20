import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import DashboardGerente from "./pages/DashboardGerente";
import DashboardVendedor from "./pages/DashboardVendedor";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard-gerente"
            element={
              <ProtectedRoute roles={["gerente"]}>
                <DashboardGerente />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-vendedor"
            element={
              <ProtectedRoute roles={["vendedor"]}>
                <DashboardVendedor />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
