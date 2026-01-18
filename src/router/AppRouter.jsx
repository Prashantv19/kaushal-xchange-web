import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import MainLayout from "../layout/MainLayout";
import TeachModule from "../pages/TeachModule";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
        <Route path="/teach/:skillId" element={<MainLayout><TeachModule /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
