import './list.scss';

type Props = {
	employee: {
		name: string,
		salary: number,
		id: string,
		marked: boolean,
		raised: boolean,
	}[];
};


const List: React.FC<Props> = ({ employee }) => {
	const result = employee.map(person => {
		const { name, salary, id, marked, raised } = person;

		let nameClasses;
		if (marked && raised) {
			nameClasses = 'list__name list__name_markedAndRaised';
		} else if (marked) {
			nameClasses = 'list__name list__name_marked';
		} else if (raised) {
			nameClasses = 'list__name list__name_raised';
		} else {
			nameClasses = 'list__name';
		};

		return (
			<div className="list__item" key={id}>
				<div className={nameClasses}>{name}</div>
				<div
					className="list__salary"
					title="Salary">
					${salary}
				</div>
				<div className="list__actions">
					<div
						className="list__mark"
						title="Mark this person">
						&#9733;
					</div>
					<div
						className="list__raise"
						title="Raise this person">
						&#36;
					</div>
					<div
						className="list__delete"
						title="Delete this person">
						&#10008;
					</div>
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