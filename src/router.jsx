// src/router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout"; // 我们稍后会创建这个布局文件
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

// 定义路由
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />, // 使用布局组件
		children: [
			// 这里的 element 会渲染到 Layout 中的 <Outlet />
			{
				index: true, // index: true 表示这是根路径 (/) 的默认子路由
				element: <HomePage />,
			},
		],
	},
]);

// 导出一个组件，用于 App.jsx 中
export function AppRouter() {
	return <RouterProvider router={router} />;
}
