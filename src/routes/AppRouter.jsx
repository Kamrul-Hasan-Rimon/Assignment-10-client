import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVisa from "../pages/AddVisa/AddVisa";
import AllVisas from "../pages/AllVisas/AllVisas";
import VisaDetails from "../pages/VisaDetails/VisaDetails";
import MyApplications from "../pages/Dashboard/MyVisaApplications";
import MyAddedVisas from "../pages/Dashboard/MyAddedVisas";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import OverviewPage from "../pages/Dashboard/OverviewPage";
import ProfilePage from "../pages/Dashboard/ProfilePage";
import UserApplicationsPage from "../pages/Dashboard/UserApplicationsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addvisa',
        element:
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
      },
      {
        path: '/visadetails/:id',
        element:
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://visa-navigator-server-lilac.vercel.app/visa/${params.id}`),
      },
      {
        path: '/allvisas',
        element: <AllVisas></AllVisas>,
        loader: () => fetch('https://visa-navigator-server-lilac.vercel.app/allvisas')
      },


      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: 'overview',
            element: <OverviewPage></OverviewPage>
          },
          {
            path: 'profile',
            element: <ProfilePage></ProfilePage>
          },
          {
            path: 'user-applications',
            element: <UserApplicationsPage></UserApplicationsPage>
          },
          {
            path: 'myapplications',
            element:
              <PrivateRoute>
                <MyApplications></MyApplications>
              </PrivateRoute>,
            loader: () => fetch('https://visa-navigator-server-lilac.vercel.app/applyVisa')
          },
          {
            path: 'my-added-visas',
            element:
              <PrivateRoute>
                <MyAddedVisas></MyAddedVisas>
              </PrivateRoute>,
            loader: () => fetch('https://visa-navigator-server-lilac.vercel.app/addedvisas')
          },

        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);
export default router