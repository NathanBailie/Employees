import 'normalize.css';
import './app.scss';
import Info from '../Info/Info';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Adder from '../Adder/Adder';
import { useState } from 'react';
import uuid from 'react-uuid';
import { Employee } from '../../interfaces';


const App: React.FC = () => {
	const data = [
		createEmployee('John C.', 800),
		createEmployee('Mikky B.', 1000),
		createEmployee('Sam O.', 1200),
	];
	const [employees, setEmployees] = useState(data);
	const [companyName, setCompanyName] = useState('Company');
	const amountOfEmployees: number = employees.length;
	const amountOfPremiumed: number = employees.filter(person => person.premiumed).length;
	const amountOfGoingUp: number = employees.filter(person => person.raised).length;
	const [filter, setFilter] = useState('all');
	const filteredData: Employee[] = onFilterData(filter);
	const [search, setSearch] = useState('');
	const finalData: Employee[] = onFilterBySearch(search, filteredData);


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
		const newData = employees.map(person => {
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
		setEmployees(newData);
	};

	function onDeleteEmployee(id: string | number) {
		const newData = employees.filter(person => person.id !== id);
		setEmployees(newData);
	};

	function onFilterData(filter: string): Employee[] {
		let newData = employees;
		if (filter === 'all') {
			newData = employees;
		} else if (filter === "raised") {
			newData = employees.filter(person => person.raised);
		} else if (filter === 'premiumed') {
			newData = employees.filter(person => person.premiumed);
		} else if (filter === 'bySalary') {
			newData = employees.filter(person => person.salary > 1000);
		};
		return newData;
	};

	function onFilterBySearch(filter: string, data: Employee[]): Employee[] {
		return data.filter(person =>
			person['name'].toLowerCase()
				.indexOf(filter.toLowerCase()) !== -1);
	};

	function onCreateNewEmployee(name: string, salary: string): void {
		const newEmployee = createEmployee(name, +salary);
		const newData = [...employees, newEmployee];
		setEmployees(newData);
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
				setFilter={setFilter}
			/>
			<List
				finalData={finalData}
				onToggleProperty={onToggleProperty}
				onDeleteEmployee={onDeleteEmployee}
			/>
			<Adder
				onCreateNewEmployee={onCreateNewEmployee}
			/>
		</div>
	);
};

export default App;
