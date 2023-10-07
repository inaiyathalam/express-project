const express = require("express")
const router = express.Router();
const {getContact,getContacts ,createContact, updateContact, deleteContact} = require ("../controllers/contactController")


// router.route("/").get(getContacts)
// router.route("/").post(createContact)
// This(two lines) can also be written as,
router.route("/").get(getContacts).post(createContact)



router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;