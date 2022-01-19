import axios from "axios";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import History from './pages/history/History';
import Login from "./pages/login/Login";
import NotFoundPage from './pages/not-found/NotFound';
import Products from './pages/products/Products';
import Requests from './pages/requests/Requests';
import Rewards from './pages/rewards/Rewards';
import Users from './pages/users/Users';

const queryClient = new QueryClient()
// axios.defaults.baseURL = "https://61d6b4d235f71e0017c2e77e.mockapi.io"
axios.defaults.baseURL = "http://localhost:8080"

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/users" element={<Users />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/products" element={<Products />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
