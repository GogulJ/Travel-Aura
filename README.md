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

<img width="1920" height="1080" alt="Screenshot 2025-11-09 210102" src="https://github.com/user-attachments/assets/8910de0e-09cb-43d4-bbd7-2f7205465661" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 210135" src="https://github.com/user-attachments/assets/46fa8c33-f2d9-4df9-8bb2-5687a3ec3fb9" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 210232" src="https://github.com/user-attachments/assets/986793cb-d074-49a2-ac18-2d8831d22db3" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220443" src="https://github.com/user-attachments/assets/b359388d-db25-4aa4-811f-25719c3c1a80" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220500" src="https://github.com/user-attachments/assets/0cb501ca-8886-4d17-84aa-7f9eb41a6471" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220507" src="https://github.com/user-attachments/assets/76d4243a-354e-4fd8-95c7-19045f0ee84f" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220534" src="https://github.com/user-attachments/assets/75d9cf74-4529-4fdc-ba56-9a8796e707b7" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220711" src="https://github.com/user-attachments/assets/80249b58-e517-4a0d-8cd8-fc8f9d249cef" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220813" src="https://github.com/user-attachments/assets/74939b60-3586-448a-88e1-c084480e73d6" />
<img width="1920" height="1080" alt="Screenshot 2025-11-09 220822" src="https://github.com/user-attachments/assets/447aef11-d844-4ed6-85f7-c8aef5f16f7b" />


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
