const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const passport = require("passport");
const passportConf = require("../passport");

//routes protection
const passportlogin = passport.authenticate("local", { session: false });
const passportsociety = passport.authenticate("society", { session: false });
const passportfaculty = passport.authenticate("faculty", { session: false });
const passportadmin = passport.authenticate("admin", { session: false });
const passportchangepassword = passport.authenticate("changepassword", {
  session: false
});

//login & register modules
const { login } = require("../controllers/login");
const { register } = require("../controllers/register");

//events modules
const { createEvent } = require("../controllers/createEvent");
const { getEvent } = require("../controllers/getEvent");
const { checkAvalaibility } = require("../controllers/checkAvalaibility");
const { eventStatus } = require("../controllers/eventStatus");
const { pendingevents } = require("../controllers/pendingevents");
const { approve } = require("../controllers/approve");
const { decline } = require("../controllers/decline");
const { historyAccept } = require("../controllers/historyAccept");
const { historyDecline } = require("../controllers/historyDecline");
const { history } = require("../controllers/history");
const { forgotPassword } = require("../controllers/forgotPassword");
const { flagReturn } = require("../controllers/flagreturn");
const { changePassword } = require("../controllers/changePassword");
const { updateSocietyFaculty } = require("../controllers/updateSocietyFaculty");
const { userById } = require("../controllers/userById");
const { removeSociety } = require("../controllers/removeSociety");
const { getAllSocieties } = require("../controllers/getAllSocieties");
const { getAllUsers } = require("../controllers/getAllUsers");
const { addVenue } = require("../controllers/addVenue");
const { getVenue } = require("../controllers/getVenue");
const { getHead } = require("../controllers/gethead");
const { validateUsername } = require("../controllers/validateUsername");
const { validateEmail } = require("../controllers/validateEmail");
const { suggestEdit } = require("../controllers/suggestEdit");
const { SocietyEdit } = require("../controllers/SocietyEdit");
const { getEventById } = require("../controllers/getEventById");

const { InputValidation, schemas } = require("../validation/validation");

const User = require("../models/user");
const Event = require("../models/event");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//events route
router.get("/get-event", getEvent);
router.post(
  "/login",
  InputValidation(schemas.loginSchema),
  passportlogin,
  login
);
router.post(
  "/forgot-password",
  InputValidation(schemas.forgotpasswordSchema),
  forgotPassword
);
router.get("/all-societies",getAllSocieties);

router.get("/validate-user", passportchangepassword, flagReturn);

router.put(
  "/change-password",
  InputValidation(schemas.changepasswordSchema),
  passportchangepassword,
  changePassword
);

router.get("/all-venues", passportchangepassword, getVenue);

//society routes
router.post("/society/create-event", passportsociety, createEvent);

router.post("/society/check-event", passportsociety, checkAvalaibility);

router.put("/society/edit-event", passportsociety, SocietyEdit);

router.get("/society/status", passportsociety, eventStatus);

router.put("/society/get-event-byId", passportsociety, getEventById);

//faculty routes
router.get("/faculty/pending-events", passportfaculty, pendingevents);
router.put(
  "/faculty/pending-events/approve",
  InputValidation(schemas.idSchema),
  passportfaculty,
  approve
);
router.put(
  "/faculty/pending-events/decline",
  InputValidation(schemas.idSchema),
  passportfaculty,
  decline
);
router.get("/faculty/history", passportfaculty, history);
router.put(
  "/faculty/history/accept",
  InputValidation(schemas.idSchema),
  passportfaculty,
  historyAccept
);
router.put(
  "/faculty/history/reject",
  InputValidation(schemas.idSchema),
  passportfaculty,
  historyDecline
);

router.put(
  "/faculty/suggest-edit",
  InputValidation(schemas.editSchema),
  passportfaculty,
  suggestEdit
);

//admin routes
router.post(
  "/admin/society-faculty-register",
  InputValidation(schemas.registerSchema),
  register
);
router.get("/admin/userbyId", passportadmin, userById);
router.put(
  "/admin/update-society-faculty",
  InputValidation(schemas.registerSchema),
  passportadmin,
  updateSocietyFaculty
);
router.post(
  "/admin/add-venue",
  InputValidation(schemas.venueSchema),
  passportadmin,
  addVenue
);
router.put("/admin/remove-society", passportadmin, removeSociety);
router.get("/admin/getAllUsers", getAllUsers);
router.get("/admin/get-head",getHead);
router.get("/admin/valid-username",validateUsername);
router.get("/admin/valid-email",validateEmail);

module.exports = router;
