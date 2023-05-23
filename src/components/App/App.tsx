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
	const companyName = 'Company';
	const [employees, setEmployees] = useState(data);
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
			nameEdit: false,
			salaryEdit: false,
		};
	};

	function onToggleProperty(id: string | number, property: string): void {
		const newData = employees.map(person => {
			if (person.id === id) {
				let newValue;
				if (property === 'premiumed') {
					newValue = !person['premiumed'];
				} else if (property === 'raised') {
					newValue = !person['raised'];
				} else if (property === 'nameEdit') {
					newValue = !person['nameEdit'];
				} else if (property === 'salaryEdit') {
					newValue = !person['salaryEdit'];
				};
				return { ...person, [property]: newValue }
			};
			return person;
		});
		setEmployees(newData);
	};

	function onDeleteEmployee(id: string | number): void {
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

	function onChangeValue(valueName: string, newValue: string, id: string): void {
		const newData = employees.map(person => {
			if (person.id === id) {
				return { ...person, [valueName]: newValue };
			};
			return person;
		});
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
				onChangeValue={onChangeValue}
			/>
			<Adder
				onCreateNewEmployee={onCreateNewEmployee}
			/>
		</div>
	);
};

export default App;
