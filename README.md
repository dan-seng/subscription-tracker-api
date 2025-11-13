
---


<!-- Header -->
<h1 align="center">💳 Subscription Tracker</h1>

<p align="center">
  <i>Track, manage, and stay on top of all your subscriptions — effortlessly.</i>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
  </a>
  <img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4.0+-4ea94b?logo=mongodb&logoColor=white" />
</p>

---

## 🧭 Overview

**Subscription Tracker** is a modern web app that helps you **track and manage recurring payments** in one place.  
Never miss a renewal date again — get reminders, insights, and total control over your subscriptions.

---

## ✨ Features

- 📅 **All-in-one dashboard** — view all your active subscriptions  
- 🔔 **Smart renewal reminders** — get notified before renewals  
- 💰 **Spending analytics** — see how much you’re spending per category  
- 🔐 **Secure authentication** — JWT-based login and signup  
- 🌍 **Multi-currency support**  
- 📱 **Responsive design** *(coming soon)*  
- 📊 **Subscription insights** *(coming soon)*  

---

## 🧩 Tech Stack

<div align="center">

<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> &nbsp;
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" /> &nbsp;
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> &nbsp;
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> &nbsp;
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" alt="JSON" /> &nbsp;
<img height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React (coming soon)" /> &nbsp;

</div>

---

## ⚙️ Getting Started

### 🧱 Prerequisites

- [Node.js](https://nodejs.org/) `v16+`
- [MongoDB](https://www.mongodb.com/) `v5.0+`
- npm or yarn

### 🪜 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/subscription-tracker.git
cd subscription-tracker

# Install dependencies
npm install
# or
yarn
````

### 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/subscription-tracker
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=30d
NODE_ENV=development
```

### 🚀 Run the Server

```bash
npm run dev
# or
yarn dev
```

> The API will be available at [http://localhost:3000](http://localhost:3000)

---

## 📘 API Endpoints

### 🔐 Authentication

| Method | Endpoint                | Description         |
| :----: | :---------------------- | :------------------ |
|  POST  | `/api/v1/auth/sign-up`  | Register a new user |
|  POST  | `/api/v1/auth/sign-in`  | Login               |
|  POST  | `/api/v1/auth/sign-out` | Logout              |

### 💳 Subscriptions

| Method | Endpoint                                  | Description               |
| :----: | :---------------------------------------- | :------------------------ |
|   GET  | `/api/v1/subscriptions`                   | Get all subscriptions     |
|  POST  | `/api/v1/subscriptions`                   | Create a new subscription |
|   GET  | `/api/v1/subscriptions/:id`               | Get subscription by ID    |
|   PUT  | `/api/v1/subscriptions/:id`               | Update subscription       |
| DELETE | `/api/v1/subscriptions/:id`               | Delete subscription       |
|   GET  | `/api/v1/subscriptions/user/:id`          | Get subscriptions by user |
|   GET  | `/api/v1/subscriptions/upcoming-renewals` | Get upcoming renewals     |

---

## 🛡️ Security

* 🔑 Password hashing with **bcryptjs**
* 🧾 JWT-based authentication
* 🍪 Secure cookie handling
* 🧼 Input validation & sanitization
* 🚦 Rate limiting & error handling

---

## 🤝 Contributing

Contributions are always welcome 💡
Here’s how you can help improve the project:

```bash
# Fork it
git fork https://github.com/yourusername/subscription-tracker.git

# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m "Add some AmazingFeature"

# Push to your branch
git push origin feature/AmazingFeature
```

Then, open a **Pull Request** 🚀

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more information.

---

## 🌟 Acknowledgments

* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [JWT](https://jwt.io/)
* [Awesome Open Source Community ❤️](https://github.com/)

---

<p align="center">
  <b>Made with ❤️ by Daniel Gidey</b>
</p>

---

