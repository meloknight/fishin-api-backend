const errorHandler = (err, req, res, next) => {
  res.status(500).render("error", { error: err });
};

module.exports = errorHandler;
