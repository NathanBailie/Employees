import './list.scss';

type Props = {
	employee: {
		name: string,
		salary: number,
		id: string,
		premiumed: boolean,
		raised: boolean,
	}[],
	onToggleProperty: (id: string | number, property: string) => void,
	onDeleteEmployee: (id: string | number) => void,
};


const List: React.FC<Props> = ({ employee, onToggleProperty, onDeleteEmployee }) => {
	const result = employee.map(person => {
		const { name, salary, id, premiumed, raised } = person;

		let nameClasses = 'list__name';
		let premiumClasses = 'list__premiumed';
		let raiseClasses = 'list__raise';
		if (premiumed && raised) {
			nameClasses += ' list__name_premiumedAndRaised';
			premiumClasses += ' list__premiumed_active';
			raiseClasses += ' list__raise_active';
		} else if (premiumed) {
			nameClasses += ' list__name_premiumed';
			premiumClasses += ' list__premiumed_active';
		} else if (raised) {
			nameClasses += ' list__name_raised';
			raiseClasses += ' list__raise_active';
		}

		return (
			<div className="list__item" key={id}>
				<div className={nameClasses}>{name}</div>
				<div
					className="list__salary"
					title="Salary">
					${salary}
				</div>
				<div className="list__actions">
					<button
						className={premiumClasses}
						title="Премировать сотрудника"
						onClick={() => onToggleProperty(id, 'premiumed')}>
						&#9733;
					</button>
					<button
						className={raiseClasses}
						title="Повысить сотрудника"
						onClick={() => onToggleProperty(id, 'raised')}>
						&#36;
					</button>
					<button
						className="list__delete"
						title="Удалить сотрудника"
						onClick={() => onDeleteEmployee(id)}>
						&#10008;
					</button>
				</div>
			</div>
		);
	});

	return (
		<div className="list">
			{result}
		</div>
	);
};

export default List;