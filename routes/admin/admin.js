var express = require("express")
var router = express.Router()
var { 
    signUp, 
    login, 
    updateProfile, 
    getAllUsersProfile, 
    updateUserProfile, 
    deleteUser, 
    adminCreateUser 
} = require("./controller/adminController")
var passport = require("passport")


router.post("/sign-up", signUp);
router.post("/login", login);
router.put('/update-profile', passport.authenticate("admin-auth", { session: false }), updateProfile)
router.get('/get-all-users-profile', passport.authenticate("admin-auth", { session: false }), getAllUsersProfile)
router.put('/update-user-profile', updateUserProfile)
router.post("/delete-user", deleteUser)
router.post("/admin-create-user", adminCreateUser)



module.exports = router;