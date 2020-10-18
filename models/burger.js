const orm = require("../config/orm.js");

const burger = {
  selectAll: () => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: (newBurger, cb) => {
    orm.insertOne("burgers", newBurger, res => {
      cb(res);
    });
  },

  updateOne: (value, id, cb) => {
    orm.updateOne("burgers", {devoured: value}, id, res => {
      cb(res);
    });
  },
}


module.exports = burger;
