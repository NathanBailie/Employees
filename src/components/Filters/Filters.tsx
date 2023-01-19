import './filters.scss';
import { useState } from 'react';

type Props = {
	setSearch: (value: string) => void;
	setFilter: (value: string) => void;
}

const Filters: React.FC<Props> = ({ setSearch, setFilter }) => {
	const [buttons, setButtons] = useState([
		{ name: 'Все сотрудники', active: true, filter: 'all', id: 1 },
		{ name: 'На премию', active: false, filter: 'premiumed', id: 2 },
		{ name: 'На повышение', active: false, filter: 'raised', id: 3 },
		{ name: 'З/П больше 1000$', active: false, filter: 'bySalary', id: 4 },
	]);

	function onChangeActiveClass(id: string | number): void {
		const newBtns = buttons.map(b => {
			if (b.id === +id) {
				return { ...b, ['active']: true };
			};
			return { ...b, ['active']: false };
		});
		setButtons(newBtns);
	};

	const btnResult = buttons.map(b => {
		const { name, active, id, filter } = b;
		let btnClasses;
		if (active) {
			btnClasses = 'filters__button filters__button_active';
		} else {
			btnClasses = 'filters__button';
		};

		return <button
			key={id}
			className={btnClasses}
			onClick={() => { onChangeActiveClass(id); setFilter(filter) }}
		>{name}
		</button>
	});


	return (
		<div className="filters">
			<input
				className='filters__finder'
				placeholder="Найти сотрудника"
				onChange={(e) => setSearch(e.target.value)} />
			<div className="filters__buttons">
				{btnResult}
			</div>
		</div>
	);
};

export default Filters;