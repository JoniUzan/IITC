const person = {
    name: 'Alice',
    age: 25
  };
  
  const personWithJob = {
    ...person,
    job: 'Engineer'
  };
  
  console.log('Person:', person);
  console.log('Person with Job:', personWithJob);
  