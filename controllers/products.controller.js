const Product = require("../models/products.model");

exports.getProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) res.send(err);
    else res.json(results);
  });
};

exports.getProductById = (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) res.send(err);
    else res.json(results[0]);
  });
};

exports.createProduct = (req, res) => {
  console.log("REQ BODY:", req.body);  // <== Tambahkan ini

  Product.create(req.body, (err, results) => {
    if (err) res.send(err);
    else res.json({
      message: "Produk berhasil ditambahkan!",
      data: req.body,
    });
  });
};


exports.updateProduct = (req, res) => {
  Product.update(req.params.id, req.body, (err, results) => {
    if (err) res.send(err);
    else res.json({ message: "Produk berhasil diperbarui!" });
  });
};

exports.deleteProduct = (req, res) => {
  Product.remove(req.params.id, (err, results) => {
    if (err) res.send(err);
    else res.json({ message: "Produk berhasil dihapus!" });
  });
};
