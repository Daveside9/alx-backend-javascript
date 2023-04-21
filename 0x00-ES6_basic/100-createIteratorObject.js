export default function iterateThroughObject(reportWithIterator) {
	let employeeNames = [];

	// iterate through each employee name using the iterator object
	for (let name of reportWithIterator) {
		employeeNames.push(name); 
	}

	// join the array of employee names into a string separated by |
	return employeeNames.join(' | ');
}
