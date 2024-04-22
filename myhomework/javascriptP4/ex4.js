function transformDateStrings(dateStrings) {
    return dateStrings.map(dateString => {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    });
  }
  let dateStrings = ["2024-01-01", "2024-02-02", "2024-04-04"];
  let transformedDates = transformDateStrings(dateStrings);
  console.log(transformedDates); // Output: ["01/01/2024", "02/02/2024", "04/04/2024"]