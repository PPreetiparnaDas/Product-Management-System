# 🛍️ Product Management System

## 📌 Project Description
The **Product Management System** is a full-stack web application designed to manage product details, including CRUD (Create, Read, Update, Delete) operations. Built using **React.js** for the frontend and **Spring Boot** with JPA for the backend, it allows users to seamlessly add, edit, delete, and view product details.

## 🚀 Features
- 📋 **Product Listing** – Displays all products in a structured table.
- ➕ **Add New Products** – Users can add new products via a form.
- ✏️ **Edit Products** – Update product details using a modal form.
- ❌ **Delete Products** – Remove unwanted products.
- 🔄 **Real-time Updates** – Products update dynamically in the UI.
- 🎨 **Bootstrap UI** – Responsive and user-friendly design.

## 🏗️ Tech Stack
### Frontend:
- ⚛️ **React.js** (for UI and state management)
- 🎨 **Bootstrap** (for styling and layout)

### Backend:
- ☕ **Spring Boot** (for REST API)
- 🗄️ **JPA & Hibernate** (for database operations)
- 🐘 **MySQL** (as the database)

## 📂 Project Structure
```
Product-Management/
│── backend/
│   ├── src/main/java/com/otz/
│   │   ├── entity/Product.java
│   │   ├── repository/ProductRepo.java
│   │   ├── controller/ProductController.java
│   ├── pom.xml
│
│── frontend/
│   ├── src/components/ProductManagement.js
│   ├── src/App.js
│   ├── src/index.js
│   ├── package.json
```

## ⚙️ Installation & Setup
### Backend (Spring Boot):
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Product-Management.git
   ```
2. Navigate to backend:
   ```sh
   cd backend
   ```
3. Install dependencies & run the server:
   ```sh
   mvn spring-boot:run
   ```
4. The API runs at: `http://localhost:8080`

### Frontend (React.js):
1. Navigate to frontend:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
4. The frontend runs at: `http://localhost:3000`

## 🛠️ API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/products` | Fetch all products |
| POST | `/products` | Add a new product |
| PUT | `/products/{id}` | Update product details |
| DELETE | `/products/{id}` | Delete a product |

## 📸 Screenshots
### 🎯 Dashboard View
![Product Management](https://via.placeholder.com/800x400?text=Product+Management+Dashboard)

## 🤝 Contributing
Pull requests are welcome! If you want to contribute, follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is open-source and available under the **MIT License**.

---
Made with ❤️ by [Your Name] 🚀

