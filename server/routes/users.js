import express from "express"
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


router.get("/check",verifyToken, (req,res,next) => {
    res.send("Hello you are logged in")
})


router.get("/checkuser/:id",verifyUser, (req,res,next) => {
    res.send("Hello you are logged in u can delete account")
})

router.get("/checkadmin/:id",verifyAdmin, (req,res,next) => {
    res.send("Hello admin, you are logged in u can delete account")
})

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser,  deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin,  getUsers);


export default router