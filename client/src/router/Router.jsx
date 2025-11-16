import {Route, Routes} from "react-router-dom"

import PageNotFound from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"
import { useProfileQuery } from "src/hooks/useProfileQuery"

function Router() {
  const { data, isPending, error } = useProfileQuery();
  console.log("user information",data)
  
  return (
    <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="*" element={<PageNotFound/>} />

    </Routes>
  
  )
}

export default Router