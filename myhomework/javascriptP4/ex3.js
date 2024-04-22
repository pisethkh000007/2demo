function extractUserNames(users) {
    return users.map(user => user.name);
  }
  let users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Mike', age: 30 },
    { name: 'Sarah', age: 20 }
  ];
  
  let userNames = extractUserNames(users);
  console.log(userNames); // Output: ['John', 'Jane', 'Mike', 'Sarah']