import 'normalize.css';
import './app.scss';

import Info from '../Info/Info';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Adder from '../Adder/Adder';


const App: React.FC = () => {


	return (
		<div className="app">
			<Info />
			<Filters />
			<List />
			<Adder />
		</div>
	);
};

export default App;
