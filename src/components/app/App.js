import AppHeader from "../appHeader/AppHeader";
import UserProfile from "../userProfile/UserProfile";
import BeerProfile from "../beerProfile/BeerProfile";

const App = () => {
	return (
		<div className="app">
			<AppHeader/>
			<div className="container">
				<UserProfile/>
				<BeerProfile/>
			</div>
		</div>
	);
}

export default App;
