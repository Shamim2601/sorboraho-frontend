import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import OrderingPage from "./pages/OrderingPage"
import ComplaintPage from "./pages/ComplaintPage"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderingPage />} />
          <Route path="/complaint" element={<ComplaintPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
