// HOC
import HomeLayoutHOC from "./HOC/home.HOC";

// Component
import Temp from "./Components/temp";
import HomeLayout from "./Layout/home.layout";

function App() {
	return <HomeLayoutHOC path="/" exact component={Temp} />;
}

export default App;
