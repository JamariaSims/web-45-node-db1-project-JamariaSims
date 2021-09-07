const router = require("express").Router();
const AccountModel = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  const ReturnAccounts = await AccountModel.getAll();
  res.status(200).json(ReturnAccounts);
});

router.get("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  const ReturnAccounts = await AccountModel.getById(req.params.id);
  res.status(200).json(ReturnAccounts);
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
