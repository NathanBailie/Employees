import './filters.scss';

const Filters = () => {


	return (
		<div className="filters">
			<input
				className='filters__finder'
				placeholder="Найти сотрудника" />
			<div className="filters__buttons">
				<button className='filters__button filters__button_active'>Все сотрудники</button>
				<button className='filters__button'>На повышение</button>
				<button className='filters__button'>З/П больше $1000</button>
			</div>
		</div>
	);
};

export default Filters;