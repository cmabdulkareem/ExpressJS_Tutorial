## 📁 `models` Folder

The `models` folder is used to define and manage all database-related models in a modular way.

### Why Avoid Defining Models in the Main File?
- Leads to a messy and difficult-to-navigate codebase.
- Couples database logic with other parts of the app, reducing maintainability.
- Makes schema updates and relationship handling more error-prone.

### Benefits of Using the `models` Folder
- Each model (e.g., `productModel.js`, `userModel.js`) is in its own file, improving clarity.
- Maintains **separation of concerns**, keeping logic modular.
- Allows models to be **reused** and **imported** where needed.
- Supports **clean architecture** and easier **unit testing**.
- Aligns with best practices for **scalable** and **maintainable** applications.