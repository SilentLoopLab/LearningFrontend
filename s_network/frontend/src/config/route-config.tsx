import { createBrowserRouter } from "react-router-dom";
import { Signup } from "../pages/available/Signup";
import { Signin } from "../pages/available/Signin";
import { Profile } from "../pages/protected/profile";
import { Protected } from "../pages/protected/layout";
import { NotFound } from "../pages/available/error/not-found";
import { Settings } from "../pages/protected/Settings/index";
import { Posts } from "../pages/protected/posts";
import { Followers } from "../pages/protected/followers";
import { Followings } from "../pages/protected/followings";
import { Account } from "../pages/protected/account/Account";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Signup />,
    },
    {
        path: "signin",
        element: <Signin />,
    },
    {
        path: "profile",
        element: <Protected />, //parent route
        children: [
            //outlet
            { path: "", element: <Profile /> },
            { path: "settings", element: <Settings /> },
            { path: "posts", element: <Posts /> },
            { path: "followers", element: <Followers /> },
            { path: "followings", element: <Followings /> },
            {path: ":username" , element: <Account/>}
        ],
    },
    { path: "*", element: <NotFound /> },
]);
