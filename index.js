const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_notes_crud_db"
);
const express = require("express");

const init = async () => {
  console.log("connecting to database");
  await client.connect();
  console.log("connected to database");
  let SQL = `
    INSERT INTO notes(txt) VALUES ('hello');
    INSERT INTO notes(txt, ranking) VALUED ('world', 3);
    INSERT INTO notes(ranking,txt) VALUES(3,'helloworld again!');
    `;

  // DROP TABLE IF EXISTS notes;
  // CREATE TABLE notes(
  //   id SERIAL PRIMARY KEY,
  //   txt VARCHAR(100) NOT NULL,
  //   ranking INTEGER NOT NULL DEFAULT 5,
  //   created_at TIMESTAMP DEFAULT now (),
  //   updated_at TIMESTAMP DEFAULT
  // );

  await client.query(SQL);
  console.log(`data seeded`);
};

init();
