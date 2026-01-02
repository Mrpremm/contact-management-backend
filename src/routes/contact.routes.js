const router = require("express").Router();
const {
  createContact,
  getContacts,
  deleteContact
} = require("../controllers/contact.controller");

router.post("/", createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);

module.exports = router;
