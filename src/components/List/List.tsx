import './list.scss';
import { Employee } from '../../interfaces';

type Props = {
	finalData: Employee[];
	onToggleProperty: (id: string, property: string) => void,
	onDeleteEmployee: (id: string) => void,
	onChangeValue: (valueName: string, newValue: string, id: string) => void,
};


const List: React.FC<Props> = ({ finalData, onToggleProperty, onDeleteEmployee, onChangeValue }) => {
	if (finalData.length === 0) {
		return <div className="list"></div>
	};

	const result = finalData.map(person => {
		const { name, salary, id, premiumed, raised, nameEdit, salaryEdit } = person;

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
				{nameEdit ?
					<input
						placeholder='Имя сотрудника'
						className='list__nameField'
						value={name}
						onChange={(e) => onChangeValue('name', e.target.value, id)}
						onBlur={() => onToggleProperty(id, 'nameEdit')}
						onKeyDown={(e) => { e.key === 'Enter' && onToggleProperty(id, 'nameEdit') }}
					/>
					:
					<div
						className={nameClasses}
						title="Изменить имя"
						onClick={() => onToggleProperty(id, 'nameEdit')}>
						{name}
					</div>
				}
				{salaryEdit ?
					<input
						type='number'
						placeholder='Зарплата'
						className='list__salaryField'
						value={salary}
						onChange={(e) => onChangeValue('salary', e.target.value, id)}
						onBlur={() => onToggleProperty(id, 'salaryEdit')}
						onKeyDown={(e) => { e.key === 'Enter' && onToggleProperty(id, 'salaryEdit') }}
					/>
					:
					<div
						className="list__salary"
						title="Изменить зарплату"
						onClick={() => onToggleProperty(id, 'salaryEdit')}>
						${salary}
					</div>
				}
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