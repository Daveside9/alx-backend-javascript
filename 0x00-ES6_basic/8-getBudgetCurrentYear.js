function getCurrentYear() {
	  const date = new Date();
	 return date.getFullYear();
}
export default function getBudgetForCurrentYear(income, gdp, capita) {
	const budget = {};

	budget[`income-${getCurrentYear()}`] = income;
	budget[`gdp-${getCurrentYear()}`] = gdp;
	budget[`capita-${getCurrentYear()}`] = capita;

	return budget;
}
{
	"income-2023": 100,
	"gdp-2023": 200,
	"capita-2023": 300
}
