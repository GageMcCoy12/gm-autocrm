import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "./components/Layout";
import CustomerView from "./pages/CustomerView";
import WorkerView from "./pages/WorkerView";
import AdminView from "./pages/AdminView";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CustomerView />} />
            <Route path="customer" element={<CustomerView />} />
            <Route path="worker" element={<WorkerView />} />
            <Route path="admin" element={<AdminView />} />
          </Route>
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;