import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./Pages/Home/Home";
// import RoomDetail from "./Pages/RoomDetail/RoomDetail";
// import RoomByCity from "./Pages/RoomByCity/RoomByCity";
// import Info from "./Pages/Info/Info";
// import InfoTickets from "Pages/InfoTickets/InfoTickets";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import Loading from "Components/Loading/Loading";
import { lazy, Suspense } from "react";
import ProtectedRoute from "Routes/ProtectedRoute";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";

const HomeTemplate = lazy(() => import("Templates/HomeTemplate/HomeTemplate"));
const Home = lazy(() => import("Pages/Home/Home"));
const RoomDetail = lazy(() => import("Pages/RoomDetail/RoomDetail"));
const RoomByCity = lazy(() => import("Pages/RoomByCity/RoomByCity"));
const Info = lazy(() => import("Pages/Info/Info"));
const InfoTickets = lazy(() => import("Pages/InfoTickets/InfoTickets"));
const Login = lazy(() => import("Pages/Login/Login"));
const Register = lazy(() => import("Pages/Register/Register"));

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<HomeTemplate />}>
                            <Route path="" element={<Home />} />
                            <Route
                                path="/roomdetail/:id"
                                element={<RoomDetail />}
                            />
                            <Route
                                path="/roombycity/:id"
                                element={<RoomByCity />}
                            />
                            <Route
                                path="/personal-info/:id"
                                element={
                                    <ProtectedRoute>
                                        <Info />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/tickets-by-user/:id"
                                element={
                                    <ProtectedRoute>
                                        <InfoTickets />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Navigate to={""} />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
