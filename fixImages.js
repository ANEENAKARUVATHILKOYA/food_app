import sql from 'better-sqlite3';

// Open your database
const db = sql('meals.db');

// Update all meals that still point to the missing apple.png
db.prepare(`
  UPDATE meals
  SET image = '/images/default.png'
  WHERE image = 'images/apple.png'
`).run();

console.log('Updated apple.png paths to start with a leading slash');