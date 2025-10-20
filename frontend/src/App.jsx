import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardGerente from "./pages/DashboardGerente";
import DashboardVendedor from "./pages/DashboardVendedor";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
