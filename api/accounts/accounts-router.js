const router = require("express").Router();
const AccountModel = require("./accounts-model");

const {
  logger,
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
} = require("./accounts-middleware");
router.get("/", logger, async (req, res, next) => {
  // DO YOUR MAGIC
  const ReturnAccounts = await AccountModel.getAll();
  res.status(200).json(ReturnAccounts);
});

router.get("/:id", logger, checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  res.status(200).json(req.account);
});

router.post("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await AccountModel.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    next();
  }
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
