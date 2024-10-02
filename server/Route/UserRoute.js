const UserController=require("../Controller/UserController")
const Dailycontroller=require("../Controller/DailyTask");
const { authenticate } = require("../middleware/auth");
const router=require("express").Router();
router.post("/register",UserController.create);
router.get("/",UserController.get);
router.post("/login",UserController.login);
router.post("/task",authenticate,Dailycontroller.dailycreate)
router.get("/taskview",Dailycontroller.getdaily);
router.delete("/:id",Dailycontroller.deletetask);
router.get("/:id",Dailycontroller.singletask);
router.put("/:id",Dailycontroller.update);

module.exports=router;