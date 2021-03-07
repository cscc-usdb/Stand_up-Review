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

async function addVote(bestDesignStand, bestPresentationStand, message, res) {
  await db.run(`INSERT INTO reviews(best_design_stand,best_presentation_stand,message)
  VALUES(?,?,?)`, [bestDesignStand, bestPresentationStand, message], (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'ops ! Vote not added ! please try again later !!' })
    }
    return res.status(200).json({ success: true, message: 'vote added successfully !' })
  })
}


function closeConnection() {
  db.close();
}

module.exports = {
  createWorkTable,
  closeConnection,
  addVote
}