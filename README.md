# Travel-Aura

---

# 🌍 Travel Booking Application (MERN Stack)

A full-stack **Travel Booking Application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
The platform supports **two types of users: Admin and User**, with different dashboards and features.

---

## 🚀 Features

### 🔑 **Authentication (JWT Based)**

* Secure login and signup
* Session-based user access

---

## 👨‍💼 Admin Features

Admins can:

* ⭐ View **dashboard** with all system statistics
* ✏️ **Create new tours**
* 📋 **Manage tours** (edit, delete, update)
* 👥 View all **registered users**
* 💼 Monitor **bookings & reviews**

Admin access is restricted using middleware.

---

## 👤 User Features

Users can:

* 🔍 **Search for tours**
* 🧾 **View tour details** (price, schedule, description, reviews)
* 📆 **Book trips**
* ⭐ **Write reviews** for tours
* 🙍‍♂️ Manage **profile page** (update details)
* 📜 View **booking history**

---

## 🗃️ Database

This project uses **MongoDB** as the main database.

Collections include:

* Users
* Tours
* Bookings
* Reviews

---

## 🛠️ Tech Stack

### **Frontend**

* React.js
* React Router
* Axios
* Context API (or Redux if applicable)
* Tailwind / CSS (depending on your setup)

### **Backend**

* Node.js
* Express.js
* JWT Auth
* MongoDB + Mongoose

### **Tools**

* Postman (API testing)
* Git & GitHub
* Vite / CRA (depending on your setup)

---

## 📁 Project Structure

```
/client
   ├── src
   │   ├── components
   │   ├── pages
   │   ├── context
   │   ├── api
   │   └── App.jsx
/server
   ├── controllers
   ├── models
   ├── routes
   ├── middleware
   ├── config
   └── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/travel-booking-app.git
cd travel-booking-app
```

### 2️⃣ Install Backend Dependencies

```
cd server
npm install
```

### 3️⃣ Install Frontend Dependencies

```
cd ../client
npm install
```

### 4️⃣ Create a `.env` File in the Server Folder

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

### 5️⃣ Start the Server

```
cd server
npm start
```

### 6️⃣ Start the Client

```
cd client
npm run dev
```

---

## 🧪 API Endpoints

### **Auth**

`POST /api/auth/register`
`POST /api/auth/login`

### **Tours**

`GET /api/tours`
`POST /api/tours` (admin only)
`PATCH /api/tours/:id`
`DELETE /api/tours/:id`

### **Bookings**

`POST /api/bookings`
`GET /api/bookings/user/:id`

### **Reviews**

`POST /api/reviews`
`GET /api/reviews/tour/:id`

---

## 🔒 Role-Based Access Control (RBAC)

| Role  | Permissions                                |
| ----- | ------------------------------------------ |
| Admin | Manage tours, view dashboard, manage users |
| User  | Book tours, profile, write reviews         |

---

## 📸 Screenshots (Add yours here)

```
![Dashboard](./screenshots/admin-dashboard.png)
![User Tour Page](./screenshots/tour-page.png)
```

---

## 🚀 Future Enhancements

* Online payment integration
* Real-time notifications
* Admin analytics with charts
* Wishlist system for users

---

## 🤝 Contributing

Pull requests are welcome. Open an issue to suggest improvements.

---

## 📜 License

This project is licensed under the MIT License.

---

If you want, I can also generate:

✅ A more advanced README
✅ A GitHub-ready version with badges
✅ A version including screenshots placeholders
✅ Deployment instructions (Render, Vercel, Netlify, Railway)

Just tell me!
