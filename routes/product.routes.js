const express = require("express");
const router = express.Router();

const Product_controller = require("../controllers/product.controller");

router.get("/", Product_controller.home);
router.post("/create", Product_controller.create);
router.put("/create", Product_controller.update);
router.delete("/create", Product_controller.delete);

module.exports = router;
