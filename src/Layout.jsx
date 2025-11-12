import { Outlet } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";

export default function Layout() {
	const [cursorVariant, setCursorVariant] = useState("default");
	return (
		<div className=' bg-neutral-900'>
			<CustomCursor variants={cursorVariant} />
			<Outlet context={{ setCursorVariant }} />
		</div>
	);
}
