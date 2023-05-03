const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReview,
  deleteReview,
  getAdminProducts,
  getUserProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// all product get request
router.route("/products").get(getAllProducts);

// creating product
router.route("/admin/product/new").post(isAuthenticatedUser, createProduct);

//update the created product
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

router.route("/user/products").get(isAuthenticatedUser, getUserProducts);

// single product route
router.route("/product/:id").get(getProductDetails);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

//useer also have access to their products
router
  .route("/user/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

//product review route
router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReview)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
