import './list.scss';

const List = () => {


	return (
		<div className="list">
			<div className="list__item">
				<div className="list__name">John</div>
				<div className="list__salary">800$</div>
				<div className="list__actions">
					<div className="list__mark">&#9733;</div>
					<div className="list__raise">&#36;</div>
					<div className="list__delete">&#10008;</div>
				</div>
			</div>
			<div className="list__item">
				<div className="list__name">John</div>
				<div className="list__salary">800$</div>
				<div className="list__actions">
					<div className="list__mark">&#9733;</div>
					<div className="list__raise">&#36;</div>
					<div className="list__delete">&#10008;</div>
				</div>
			</div>
		</div>
	);
};

export default List;