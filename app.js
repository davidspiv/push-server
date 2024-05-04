import sqlite3 from "sqlite3";
import { open } from "sqlite";

open({
  filename: "/tmp/database.db",
  driver: sqlite3.Database,
})
  .then(async (db) => {
    // await db.exec("CREATE TABLE tbl (col TEXT)");
    // await db.exec('INSERT INTO tbl VALUES ("test")');
    // const result = await db.get("SELECT col FROM tbl WHERE col = ?", "test");
    const result = await db.all("SELECT col FROM tbl");
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
