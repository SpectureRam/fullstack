import {Navigate,Route,Routes} from "react-router-dom"
import LazySuspense from "./components/loader/LazySuspense"
import { lazy } from "react";
const LazyLogin = lazy(()=> import('./pages/login/Login'))
const LazyRegister = lazy(()=> import('./pages/register/Register'))
const LazyForgot = lazy(()=> import('./pages/forgot/ForgotPassword'))
const LazyHome = lazy(()=>import("./components/user/Home"))
const LazyMain = lazy(()=> import('./components/user/Main'))
const LazyTerms = lazy(()=> import('./pages/t&c/Terms'))
const LazyFAQ = lazy(()=> import('./pages/faq/FAQ'))
const LazyCookie = lazy(()=> import('./pages/cookie/Cookie'))
const LazyPrivacy = lazy(()=> import('./pages/privacypolicy/PrivacyPolicy'))
const LazyAdminMain = lazy(()=> import('./components/admin/Main'))
const LazyRecharge = lazy(()=> import('./pages/recharge/Recharge'))
const LazyProfile = lazy(()=> import('./components/user/UserProfile'))
const LazyDashboard = lazy(()=> import('./components/admin/Dashboard'))
const LazyOrder = lazy(()=> import('./pages/recharge/OrderSummary'))
const LazyPayment = lazy(()=> import('./pages/recharge/Payment'))
const LazyUserTable = lazy(()=> import('./components/admin/UserTable'))
const LazySettings = lazy(()=> import('./components/admin/Settings'))
const LazyPayments = lazy(()=> import('./components/admin/Payments'))
const LazyReports = lazy(()=> import('./components/admin/Reports'))
const UserRoutes = () => {
    return(
        <LazyMain>
            <Routes>
                <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
                <Route path="/terms" element={<LazySuspense component={LazyTerms}/>}/>
                <Route path="/faq" element={<LazySuspense component={LazyFAQ}/>}/>
                <Route path="/privacypolicy" element={<LazySuspense component={LazyPrivacy}/>}/>
                <Route path="/cookie" element={<LazySuspense component={LazyCookie}/>}/>
                <Route path="/profile" element={<LazySuspense component={LazyProfile}/>}/>
                <Route path="/recharge" element={<LazySuspense component={LazyRecharge}/>}/>
                <Route path="/order" element={<LazySuspense component={LazyOrder}/>}/>
                <Route path="/payment" element={<LazySuspense component={LazyPayment}/>}/>
            </Routes>
        </LazyMain>
    )
}
const AdminRoutes = () => {
    return(
        <LazyAdminMain>
            <Routes>
                <Route path="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
                <Route path="/usertable" element={<LazySuspense component={LazyUserTable}/>}/>
                <Route path="/reports" element={<LazySuspense component={LazyReports}/>}/>
                <Route path="/payments" element={<LazySuspense component={LazyPayments}/>}/>
                <Route path="/settings" element={<LazySuspense component={LazySettings}/>}/>
            </Routes>
        </LazyAdminMain>
    )
}
function App(){
    return(
        <Routes>
            <Route exact path = "/" element={<Navigate to={"/login"}/>}/>
            <Route path = "/login" element={<LazySuspense component={LazyLogin}/>}/>
            <Route path = "/register" element={<LazySuspense component={LazyRegister}/>}/>
            <Route path = "/forgot" element={<LazySuspense component={LazyForgot}/>}/>
            <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}/>
            <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
            <Route/>
        </Routes>
    )
}
export default App;