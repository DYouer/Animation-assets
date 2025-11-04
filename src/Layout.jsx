import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className='  bg-neutral-900'>
			<Outlet />
		</div>
	);
}
