import './adder.scss';

const Adder = () => {


	return (
		<div className="adder">
			<div className="adder__title">Добавьте нового сотрудника</div>
			<div className="adder__wraper">
				<input
					className="adder__name"
					placeholder="Как его зовут?" />
				<input
					className="adder__salary"
					placeholder="З/П в $?" />
				<button>Добавить</button>
			</div>
		</div>
	);
};

export default Adder;