const db = require("../config/database");

exports.getAll = (result) => {
  db.query("SELECT * FROM products", result);
};

exports.getById = (id, result) => {
  db.query("SELECT * FROM products WHERE id = ?", [id], result);
};

exports.create = (data, result) => {
  db.query("INSERT INTO products SET ?", data, result);
};

exports.update = (id, data, result) => {
  db.query("UPDATE products SET ? WHERE id = ?", [data, id], result);
};

exports.remove = (id, result) => {
  db.query("DELETE FROM products WHERE id = ?", [id], result);
};
