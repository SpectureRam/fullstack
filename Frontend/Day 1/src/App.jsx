import { Navigate, Route, Routes } from "react-router-dom";
import {lazy} from "react";
import LazySuspense from "./components/LazySuspense";

const LazyLogin = lazy(()=>import("./pages/auth/Login"))
const LazyRegister = lazy(()=>import("./pages/auth/Register"))
const LazyForgetPassword = lazy(()=>import("./pages/auth/ForgetPassword"))

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Navigate to="/project6/login"/>}/>
      <Route path="/project6/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/project6/register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/project6/forgot-password" element={<LazySuspense component={LazyForgetPassword}/>}/>
    

    </Routes>
    </div>
  )
}

export default App