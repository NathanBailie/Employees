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
		createEmployee('John C.', 800),
		createEmployee('Mikky B.', 1000),
		createEmployee('Sam O.', 1200),
	];
	const [employee, setEmployee] = useState(data);
	const [companyName, setCompanyName] = useState('Company');
	const amountOfEmployees: number = employee.length;
	const amountOfPremiumed: number = employee.filter(person => person.premiumed).length;
	const amountOfGoingUp: number = employee.filter(person => person.raised).length;
	const [search, setSearch] = useState('');

	interface Employee {
		name: string,
		salary: number,
		id: string,
		premiumed: boolean,
		raised: boolean,
	};

	function createEmployee(name: string, salary: number): Employee {
		return {
			name: name,
			salary: salary,
			id: uuid(),
			premiumed: false,
			raised: false,
		};
	};

	function onToggleProperty(id: string | number, property: string) {
		const newData = employee.map(person => {
			if (person.id === id) {
				let newValue;
				if (property === 'premiumed') {
					newValue = !person['premiumed'];
				} else {
					newValue = !person['raised'];
				}
				return { ...person, [property]: newValue }
			};
			return person;
		});
		setEmployee(newData);
	};

	function onDeleteEmployee(id: string | number) {
		const newData = employee.filter(person => person.id !== id);
		setEmployee(newData);
	};

	return (
		<div className="app">
			<Info
				companyName={companyName}
				amountOfEmployees={amountOfEmployees}
				amountOfPremiumed={amountOfPremiumed}
				amountOfGoingUp={amountOfGoingUp}
			/>
			<Filters
				setSearch={setSearch}
			/>
			<List
				employee={employee}
				onToggleProperty={onToggleProperty}
				onDeleteEmployee={onDeleteEmployee}
			/>
			<Adder />
		</div>
	);
};

export default App;
