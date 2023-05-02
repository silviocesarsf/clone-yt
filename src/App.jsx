import React, { useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import BottomBar from "./components/BottomBar/BottomBar";
import { useMediaQuery } from "react-responsive";

const App = () => {
	const isMobile = useMediaQuery({ query: "(max-width:700px)" });

	useEffect(() => {
		console.log(isMobile);
	}, []);

	return (
		<>
			<Header isMobile={isMobile} />
			<Home />
			{isMobile && <BottomBar />}
		</>
	);
};

export default App;
