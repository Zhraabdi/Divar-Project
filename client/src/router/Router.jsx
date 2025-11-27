import {Navigate, Route, Routes} from "react-router-dom"

import PageNotFound from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"
import { useProfileQuery } from "hooks/useProfileQuery"

function Router() {
  const { data, isPending, error } = useProfileQuery();
  console.log("user information",data)
  console.log({data,isPending,error})

  if (isPending) return <div>در حال بررسی ...</div>;

  
  return (
    <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/dashboard" element={data ? <DashboardPage/> : <Navigate to="/auth"/>} />
        <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>} />
        <Route path="/admin" element={data && data?.data?.role === "ADMIN" ? (<AdminPage/> ) : ( <Navigate to="/"/> )} />
        <Route path="*" element={<PageNotFound/>} />

    </Routes>
  
  )
}

export default Router