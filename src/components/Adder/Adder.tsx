import './adder.scss';
import { useState } from 'react'

type Props = {
	onCreateNewEmployee: (name: string, salary: string) => void,
};

const Adder: React.FC<Props> = ({ onCreateNewEmployee }) => {
	const [name, setName] = useState('');
	const [salary, setSalary] = useState('');
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	function onValidate(name: string, salary: string): void {
		if (salary.length === 0) {
			setError(true);
			setErrorMessage('Пожалуйста заполните поле')
			return;
		};
		if (+salary < 100) {
			setError(true);
			setErrorMessage('Зарплата должна больше $100')
			return;
		};
		setError(false);
		onCreateNewEmployee(name, salary);
	};

	let errMessClasses: string = 'adder__errorMessage';
	if (error) {
		errMessClasses += ' adder__errorMessage_active'
	};


	return (
		<div className="adder">
			<div className="adder__title">Добавьте нового сотрудника</div>
			<div className="adder__wraper">
				<input
					className="adder__name"
					placeholder="Как его зовут?"
					value={name}
					onChange={(e) => setName(e.target.value)} />
				<input
					type='number'
					className="adder__salary"
					placeholder="З/П в $?"
					value={salary}
					onChange={(e) => setSalary(e.target.value)}
				/>
				<p className={errMessClasses}>{errorMessage}</p>
				<button
					onClick={() => onValidate(name, salary)}
				>Добавить</button>
			</div>
		</div>
	);
};

export default Adder;