const connection = require("./connection.js");

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput], (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  insertOne: (tableInput, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [tableInput, newRowData];

    connection.query(queryString, values, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  updateOne: (tableInput, value, id, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE id = ?";
    const values = [tableInput, value, id];

    connection.query(queryString, values, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
};

module.exports = orm;
