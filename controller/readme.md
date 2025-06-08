# 📁 `controller` Folder

The `controller` folder contains all the **business logic** and **request-handling functions** for different parts of the application. It helps separate concerns by moving functionality out of the route definitions and into dedicated modules.

---

## ❌ Why Not Write Logic Directly in Routes?

- Makes route files long and harder to read.
- Couples routing with business logic, reducing maintainability.
- Violates the **separation of concerns** principle.
- Increases the chance of bugs and complexity as the app grows.

---

## ✅ Benefits of Using a `controller` Folder

- Keeps route files **clean** and focused on just routing.
- Moves complex logic to controller functions for **modularity**.
- Encourages **code reuse** across different parts of the app.
- Makes **unit testing** easier by isolating logic in controller functions.
- Follows **MVC (Model-View-Controller)** design principles for structured development.
- Enhances **collaboration** by clearly separating route definitions and their logic.

---

## 📌 Example Usage

### With `controller` (✅ Recommended Approach)

**`routes/adminRoutes.js`:**
```js
import express from "express";
import productContoller from "../controller/productController.js";

const adminRouter = express.Router();

adminRouter.get("/products", productContoller.getAllProducts);

export default adminRouter;