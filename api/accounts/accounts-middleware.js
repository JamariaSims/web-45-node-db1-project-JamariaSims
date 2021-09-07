const { getById } = require("./accounts-model");

exports.logger = (req, res, next) => {
  console.log("METHOD: ", req.method);
  next();
};
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await getById(req.params.id);
    if (account) {
      req.account = account;
      next();
    } else {
      next(await res.status(404).json({ message: `account not found` }));
    }
  } catch (error) {
    next;
  }
};
