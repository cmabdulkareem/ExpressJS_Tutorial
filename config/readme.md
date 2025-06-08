## 📁 `config` Folder

The `config` folder is used to store all configuration files and environment-specific settings for the application, such as database connection settings, API keys, and app-wide constants.

### Why Not Put Config Directly in the Main File?
- Hard-codes sensitive or environment-specific values into the application.
- Makes it difficult to switch between development, testing, and production environments.
- Reduces reusability and increases the chance of errors when changing config values.

### Benefits of Using the `config` Folder
- Centralizes configuration in one place for easy management.
- Promotes the use of environment variables and secure practices.
- Improves **readability** and **flexibility** when working across multiple environments.
- Keeps the application logic clean and **separated** from setup or environment settings.
- Makes onboarding and scaling easier by clearly defining how the app is configured.