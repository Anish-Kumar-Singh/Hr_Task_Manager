<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:16a085,100:2c3e50&height=220&section=header&text=HR%20Task%20Manager&fontSize=42&fontColor=ffffff" />
</p>

<p align="center">
  <b>📁 Manage Projects | ✅ Assign Tasks | 🔐 Secure Authentication | 📊 Dashboard Insights</b>
</p>

---

# 🚀 HR Task Manager

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?logo=mysql)
![Platform](https://img.shields.io/badge/Deployed-Railway-purple?logo=railway)


A full-stack web application designed to streamline **project and task management** within teams using **role-based access control**. Admins can manage projects and assign tasks, while members can track and update their work efficiently.

---

## 📌 Features

* 🔐 Secure Authentication (Signup / Login with JWT)
* 👥 Role-Based Access (Admin & Member)
* 📁 Project Creation and Management
* ✅ Task Assignment to Team Members
* 📅 Deadline Management
* 🔄 Task Status Updates (To Do → Start → Done)
* 📊 Dashboard with Task Statistics
* ⚡ Real-time Task Tracking
* 🌐 Deployed on Railway


## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL (Railway)

### Tools & Libraries

* JWT (Authentication)
* dotenv (Environment Config)



## 📂 Project Structure

```bash
HR_Task_Manager/
│
├── server/
│   ├── server.js
│   ├── package-lock.json
│   ├── package.json
│   ├── db.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── tasks.js
│   └── client/
│       ├── index.html
│       ├── signup.html
│       ├── dashboard.html
│       ├── script.js
│       └── styles.css
│
└── README.md
```

---
## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Anish-Kumar-Singh/Hr_Task_Manager.git
cd Hr_Task_Manager
```



### 2️⃣ Install Dependencies

```bash
cd server
npm install
```



### 3️⃣ Environment Variables

Create a `.env` file inside the `server` folder:

```env
DB_HOST=your_host
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=45550

JWT_SECRET=secret
PORT=5000
```



### 4️⃣ Run the Application

```bash
npm start
```



## 🌐 Deployment

This project is deployed on **Railway**.

### Steps:

* Connect GitHub repository to Railway
* Set **Root Directory = server**
* Add environment variables in Railway dashboard
* Deploy


## 🔗 Live Demo

👉 Live : https://hrtaskmanager-production.up.railway.app/


## 🔒 Authentication Flow

* JWT tokens are generated during login
* Protected APIs require authentication



## 📌 API Endpoints

### 🔐 Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`
* `GET /api/auth/users`

### 📁 Projects

* `GET /api/projects`
* `POST /api/projects`

### ✅ Tasks

* `GET /api/tasks`
* `POST /api/tasks`



## 🚀 Future Enhancements

* 🔔 Notification System
* 📅 Deadline Alerts & Reminders
* 📈 Advanced Analytics Dashboard
* 📱 Mobile Responsive UI
* 🧠 AI-based Task Suggestions


## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.
---

## 👩‍💻 Author

**ANISH KUMAR SINGH**
GitHub: https://github.com/Anish-Kumar-Singh


