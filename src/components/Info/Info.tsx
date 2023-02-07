import './info.scss';

type Props = {
	companyName: string,
	amountOfEmployees: number,
	amountOfPremiumed: number,
	amountOfGoingUp: number,
};

const Info: React.FC<Props> = ({ companyName, amountOfEmployees, amountOfPremiumed, amountOfGoingUp }) => {
	return (
		<div className="info">
			<h1 className="info__title">Учет сотрудников в компании: {companyName}</h1>
			<h2 className="info__employees">Общее число сотрудников: {amountOfEmployees}</h2>
			<h2 className="info__premium">Премию получат: {amountOfPremiumed}</h2>
			<h2 className="info__raise">На повышение: {amountOfGoingUp}</h2>
		</div>
	);
};

export default Info;