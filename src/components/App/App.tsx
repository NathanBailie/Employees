import 'normalize.css';
import './app.scss';

import Info from '../Info/Info';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Adder from '../Adder/Adder';

import { useState } from 'react';
import uuid from 'react-uuid';


const App: React.FC = () => {
	const data = [
		createEmployee('John. C.', 800),
		createEmployee('Mikky. B.', 1000),
		createEmployee('Sam. O.', 1200),
	];
	const [search, setSearch] = useState('');
	const [employee, setEmployee] = useState(data);

	interface Employee {
		name: string,
		salary: number,
		id: string,
		marked: boolean,
		raised: boolean,
	};

	function createEmployee(name: string, salary: number): Employee {
		return {
			name: name,
			salary: salary,
			id: uuid(),
			marked: false,
			raised: false,
		};
	};

	return (
		<div className="app">
			<Info />
			<Filters
				setSearch={setSearch}
			/>
			<List
				employee={employee}
			/>
			<Adder />
		</div>
	);
};

export default App;
