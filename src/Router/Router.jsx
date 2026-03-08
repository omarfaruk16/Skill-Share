import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AllSkills from "../Components/Home/AllSkills";
import CategorySkills from "../Components/Home/CategorySkills";
import CategoryDetails from "../Components/Home/CategoryDetails";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: AllSkills
      },
      {
        path: "/category/:id",
        Component: CategorySkills,
        loader: () => fetch("/Skills.json")
      },
    ],
  },
  {
    path: "/category-details/:id",
    Component: CategoryDetails,
    loader: () => fetch("/Skills.json")
  },
  {
    path: "/signin",
    Component: Signin
  },
  {
    path: "/signup",
    Component: Signup
  }
]);

export default router;
