import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const routes = [
  { path: "/", element: <Navigate to={"/home"} /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      // 如果称`/`为根路由，那么`/home`就是一级子路由，`/home/news`就是二级子路由，我们希望打开home时帮我们导航到news
      // 既可以在children中写一个空字符串的二级子路由，并将它通过Navigate的to属性指定为`/home/news`，就可以实现
      // { path: "", element: <Navigate to={"news"} /> },
      // 我们还可以直接使用index:true，配合<Navigate>标签实现默认导航
      // { index: true, element: <Navigate to={"news"} /> },
    ],
  },
]

export default routes
