import './list.scss';

type Props = {
	employee: {
		name: string,
		salary: number,
		id: string,
		marked: boolean,
		raised: boolean,
	}[],
	onToggleProperty: (id: string | number, property: string) => void,
	onDeleteEmployee: (id: string | number) => void,
};


const List: React.FC<Props> = ({ employee, onToggleProperty, onDeleteEmployee }) => {
	const result = employee.map(person => {
		const { name, salary, id, marked, raised } = person;

		let nameClasses = 'list__name';
		let markClasses = 'list__mark';
		let raiseClasses = 'list__raise';
		if (marked && raised) {
			nameClasses += ' list__name_markedAndRaised';
			markClasses += ' list__mark_active';
			raiseClasses += ' list__raise_active';
		} else if (marked) {
			nameClasses += ' list__name_marked';
			markClasses += ' list__mark_active';
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
						className={markClasses}
						title="Mark this person"
						onClick={() => onToggleProperty(id, 'marked')}>
						&#9733;
					</button>
					<button
						className={raiseClasses}
						title="Raise this person"
						onClick={() => onToggleProperty(id, 'raised')}>
						&#36;
					</button>
					<button
						className="list__delete"
						title="Delete this person"
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