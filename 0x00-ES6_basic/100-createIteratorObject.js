export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // iterate through each employee name using the iterator object
  for (const name of reportWithIterator) {
    employeeNames.push(name);
  }

  // join the array of employee names into a string separated by |
  return employeeNames.join(' | ');
}
