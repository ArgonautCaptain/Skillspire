// Part 1: Destructuring Arrays

// 1. Medalists Assignment
const athletes = [
  'Usain Bolt',
  'Andre De Grasse ',
  'Christophe Lemaitre ',
  'Adam Gemili',
  'Churandy Martina',
  'LaShawn Merritt',
  'Alonso Edward',
  'Ramil Guliyev',
];

// Destructuring the first three athletes into gold, silver, and bronze
const [gold, silver, bronze] = athletes;
console.log('Medalists:', { gold, silver, bronze });

// 2. Omit Elements
// Using comma to skip the first element (gold medalist)
const [, silver2, bronze2] = athletes;
console.log('Silver and Bronze:', { silver2, bronze2 });

// Part 2: Destructuring Objects

// 1. Basic Object Destructuring
const user = {
  firstName: 'Manuel',
  lastName: 'Bieh',
  job: 'JavaScript Developer',
  image: 'manuel.jpg',
};

// Destructuring specific properties from user object
const { firstName, lastName, job } = user;
console.log('User Info:', { firstName, lastName, job });

// 2. Destructuring with Defaults
const passenger = {
  name: 'Manuel Bieh',
  class: 'economy',
};

// Destructuring with default values and renaming 'class' to 'ticketClass'
const { 
  name = 'Unknown passenger', 
  class: ticketClass = 'economy' 
} = passenger;
console.log('Passenger Info:', { name, ticketClass });

// 3. Combining Renames and Defaults
// Destructuring with both renaming and default values
const { 
  name: passengerName = 'Unknown passenger', 
  class: ticketClass2 = 'economy' 
} = passenger;
console.log('Passenger Details:', { passengerName, ticketClass2 });

// Part 3: Destructuring and Spread Operator

// 1. Merge Settings
const globalSettings = { language: 'en-US' };
const userSettings = { timezone: 'Berlin/Germany' };

// Combining objects using spread operator and then destructuring
const combinedSettings = { ...globalSettings, ...userSettings };
const { language, timezone } = combinedSettings;
console.log('Settings:', { language, timezone });

// Part 4: Application Exercise

// 1. Destructuring an Object
const chocolateCake = {
  ingredients: ["chocolate", "flour", "sugar", "eggs", "water"],
  isVegan: false,
  calories: 594,
  feeds: 8,
  tag: "child-friendly"
};

const destructureChocolateCake = function() {
  // Destructuring isVegan and calories properties
  const { isVegan, calories } = chocolateCake;
  console.log('Cake Info:', { isVegan, calories });
};

// Execute the function
destructureChocolateCake();
