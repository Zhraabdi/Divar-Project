import {Navigate, Route, Routes} from "react-router-dom"

import PageNotFound from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"
import { useProfileQuery } from "hooks/useProfileQuery"

import { RotatingLines } from 'react-loader-spinner'


function Router() {
  const { data, isPending, error } = useProfileQuery();
  console.log("user information",data)
  console.log({data,isPending,error})

  if (isPending) return <div className="flex justify-center items-center min-h-screen"><RotatingLines
  visible={true}
  height="66"
  width="66"
  color="#a62626"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  />
  </div>;

  
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