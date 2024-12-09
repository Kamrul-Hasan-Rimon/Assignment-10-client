import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVisa from "../pages/AddVisa/AddVisa";
import AllVisas from "../pages/AllVisas/AllVisas";
import VisaDetails from "../pages/VisaDetails/VisaDetails";
import MyApplications from "../pages/MyVisaApplications/MyVisaApplications";
import MyAddedVisas from "../pages/MyAddedVisas/MyAddedVisas";
import NotFound from "../pages/NotFound/NotFound";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addvisa',
        element: <AddVisa></AddVisa>
      },
      {
        path: '/visadetails/:id', 
        element: <VisaDetails></VisaDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/addvisa/${params.id}`), 
      },

      {
        path: '/allvisas',
        element: <AllVisas></AllVisas>,
        loader:()=>fetch('http://localhost:5000/addvisa')
      },
      {
        path: '/myapplications',
        element: <MyApplications></MyApplications>,
        loader: ()=>fetch('http://localhost:5000/applyVisa')
      },
      {
        path: '/my-added-visas',
        element: <MyAddedVisas></MyAddedVisas>,
        loader: ()=>fetch('http://localhost:5000/applyVisa')
      },
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