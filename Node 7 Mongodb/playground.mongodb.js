/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
      "name": "Python",
      "price": 2500,
      "instructor": "ProgrammingWithMosh"
    },
    {
      "name": "React",
      "price": 3000,
      "instructor": "Academind"
    },
    {
      "name": "Node.js",
      "price": 2800,
      "instructor": "TraversyMedia"
    },
    {
      "name": "Django",
      "price": 2600,
      "instructor": "NetNinja"
    },
    {
      "name": "Flutter",
      "price": 3200,
      "instructor": "CodeWithChris"
    },
    {
      "name": "Vue.js",
      "price": 2700,
      "instructor": "VueMastery"
    },
    {
      "name": "Angular",
      "price": 3500,
      "instructor": "Maximilian Schwarzmüller"
    },
    {
      "name": "Next.js",
      "price": 3300,
      "instructor": "ThePracticalDev"
    },
    {
      "name": "MongoDB",
      "price": 2200,
      "instructor": "Academind"
    },
    {
      "name": "Express.js",
      "price": 2400,
      "instructor": "Codevolution"
    }
  ]
  );

