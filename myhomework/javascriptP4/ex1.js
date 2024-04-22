function filterUsersByAge(users) {
    return users.filter(user => user.age > 18);
  }
  let users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Mike', age: 30 },
    { name: 'Sarah', age: 20 }
  ];
  
  let filteredUsers = filterUsersByAge(users);
  console.log(filteredUsers);