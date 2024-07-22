const { route } = require("../share");
const {
  register,
  login,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
} = require("../controllers/userControllers");

const {
  addToCartById,
  emptyCartById,
  updateItemQuantity,
  updateCartById,
  createCartById,
  createCartItemsById,
  getCartById,
} = require("../controllers/cartControllers");

const {
  getProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProduct,
} = require("../controllers/productControllers");

const { authenticateToken, isAdmin } = require("../middleware/authMiddleware");

route.get("/", getProducts); //display all product tested

route.post("/register", register); //tested
route.post("/login", login); //tested
route.get("/product/:id", getProductById); //get individual product(id) details tested

//admin only- add product, update, delete
route.post("/product", authenticateToken, isAdmin, addProduct); //tested
route.put("/product/:id", authenticateToken, isAdmin, updateProduct); //tested
route.delete("/product/:id", authenticateToken, isAdmin, deleteProductById); //tested
//admin only get all users and get user by ID
route.get("/users/:id", authenticateToken, isAdmin, getUserById); //tested
route.get("/users", authenticateToken, isAdmin, getUsers); //tested

route.get("/user/:id", authenticateToken, getUserById); //only get account details tested
route.delete("/user/:id", authenticateToken, deleteUser); //only delete self tested
route.put("/user/:id", authenticateToken, updateUser); //only update self tested

route.post("/cart", authenticateToken, createCartById); //create cart tested
route.post("/cartitems", authenticateToken, createCartItemsById); //tested

route.get("/test/:id", authenticateToken, getCartById);

route.put("/product/cart/:id", authenticateToken, updateItemQuantity); //add item to cart (update cart)
route.put("/update/cart/:id", authenticateToken, updateCartById); //update cartItems
route.put("/checkout", authenticateToken, emptyCartById); //checkout cart (empty cart)
//retest all routes
//deploy backend

route.put("/cart/:id", authenticateToken, addToCartById); //tested

//Add to cart

module.exports = route;
