const sqlite3 = require('sqlite3').verbose();
const dbFile = './Database/database.db'

let db = new sqlite3.Database(dbFile);


function createWorkTable() {
  db.run(`CREATE TABLE IF NOT EXISTS "reviews" (
    "idReview"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "best_design_stand"	TEXT NOT NULL,
    "best_presentation_stand"	TEXT NOT NULL,
    "message"	TEXT
    );`,err => {
      if (err)
      throw err
    })
}

function addVote(bestDesignStand, bestPresentationStand, message) {
  console.log(bestDesignStand, bestPresentationStand, message)
}


function closeConnection() {
  db.close();
}

module.exports = {
  createWorkTable,
  closeConnection,
  addVote
}