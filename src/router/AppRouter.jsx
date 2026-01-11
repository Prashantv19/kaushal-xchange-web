import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import MainLayout from "../layout/MainLayout";
import TeachModule from "../pages/TeachModule";

<Route path="/teach/:skillId" element={<MainLayout><TeachModule /></MainLayout>} />


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
