# expense-tracker-
A full-stack expense tracking application with user authentication, income logging, and expense management.
Features

User Authentication: Secure login/signup with JWT tokens
Protected Routes: Access control for authenticated users only
Income Tracking: Log and manage income entries
Expense Management: Track and categorize expenses
Dashboard: Overview of financial data on home page

Tech Stack
Frontend:
React.js
React Router (for protected routes)
Axios (API calls)
CSS/Styled Components
Authentication:

POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/profile - Get user profile (protected)

Expenses:

GET /api/expenses - Get user expenses (protected)
POST /api/expenses - Add new expense (protected)
PUT /api/expenses/:id - Update expense (protected)
DELETE /api/expenses/:id - Delete expense (protected)

Income:

GET /api/income - Get user income (protected)
POST /api/income - Add new income (protected)
PUT /api/income/:id - Update income (protected)
DELETE /api/income/:id - Delete income (protected)
