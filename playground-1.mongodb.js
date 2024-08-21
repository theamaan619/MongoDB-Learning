

// Select the database to use.
use('amaan');

// Insert a few documents into the students collection.
db.getCollection('students').insertMany([
  [
  {
    "name": "iron man",
    "age": 21,
    "city": "Mumbai",
    "course": "MongoDB"
  },
  {
    "name": "captain america",
    "age": 23,
    "city": "New York",
    "course": "JavaScript"
  },
  {
    "name": "thor",
    "age": 25,
    "city": "Asgard",
    "course": "Python"
  },
  {
    "name": "black widow",
    "age": 28,
    "city": "Moscow",
    "course": "Cyber Security"
  },
  {
    "name": "hulk",
    "age": 30,
    "city": "Rio de Janeiro",
    "course": "Data Science"
  },
  {
    "name": "hawkeye",
    "age": 27,
    "city": "Los Angeles",
    "course": "Machine Learning"
  }
]

]);


// Print a message to the output window.
console.log("Done Inserting data ");

